'use client';

import React, { useState } from 'react';

interface DataNode { id: string; label: string; type: 'source' | 'transform' | 'destination'; fields: string[] }
interface DataEdge { from: string; to: string; label: string }

export default function AutonomousDataPipelineVisualizer() {
  const [input, setInput] = useState('');
  const [nodes, setNodes] = useState<DataNode[]>([]);
  const [edges, setEdges] = useState<DataEdge[]>([]);
  const [dataDict, setDataDict] = useState<{ entity: string; fields: { name: string; type: string; nullable: boolean }[] }[]>([]);
  const [schemaIssues, setSchemaIssues] = useState<string[]>([]);
  const [parsed, setParsed] = useState(false);

  const parseInput = () => {
    const lines = input.split('\n').filter(l => l.trim());
    const newNodes: DataNode[] = [];
    const newEdges: DataEdge[] = [];
    const newDict: { entity: string; fields: { name: string; type: string; nullable: boolean }[] }[] = [];
    const issues: string[] = [];

    // SQL-like detection
    if (/CREATE TABLE/i.test(input) || /FOREIGN KEY/i.test(input)) {
      const tables = input.split(/CREATE TABLE/i).filter(t => t.trim().startsWith('('));
      tables.forEach((t, i) => {
        const name = t.match(/(\w+)\s*\(/)?.[1] || `table_${i}`;
        const fields: { name: string; type: string; nullable: boolean }[] = [];
        t.split(',').forEach(line => {
          const match = line.trim().match(/^(\w+)\s+(INT|VARCHAR|TEXT|BOOLEAN|DATE|FLOAT|DOUBLE|DECIMAL)/i);
          if (match) {
            fields.push({ name: match[1], type: match[2], nullable: !/NOT NULL/i.test(line) });
          }
        });
        newNodes.push({ id: name, label: name, type: i === 0 ? 'source' : i === tables.length - 1 ? 'destination' : 'transform', fields: fields.map(f => f.name) });
        newDict.push({ entity: name, fields });
        if (fields.some(f => f.type === 'TEXT' && !f.nullable) && fields.length > 10) issues.push(`${name}: Table with >10 columns may benefit from normalization.`);
      });
      for (let i = 1; i < newNodes.length; i++) newEdges.push({ from: newNodes[i - 1].id, to: newNodes[i].id, label: 'FK relationship' });
    }
    // JSON detection
    else if (input.trim().startsWith('{') || input.trim().startsWith('[')) {
      try {
        const json = JSON.parse(input.trim());
        const objects = Array.isArray(json) ? json.slice(0, 3) : [json];
        const fieldTypes: Record<string, string> = {};
        const fieldSet = new Set<string>();
        objects.forEach(obj => {
          if (typeof obj === 'object') {
            Object.entries(obj).forEach(([key, val]) => {
              fieldSet.add(key);
              fieldTypes[key] = Array.isArray(val) ? 'array' : val === null ? 'null' : typeof val;
            });
          }
        });
        const fields = Array.from(fieldSet).map(name => ({ name, type: fieldTypes[name], nullable: false }));
        newNodes.push({ id: 'json_root', label: 'JSON Root', type: 'source', fields: fields.map(f => f.name) });
        newNodes.push({ id: 'flattened', label: 'Flattened Schema', type: 'transform', fields: fields.filter(f => f.type !== 'object').map(f => f.name) });
        newNodes.push({ id: 'output', label: 'Output Table', type: 'destination', fields: fields.filter(f => f.type !== 'object').map(f => f.name) });
        newEdges.push({ from: 'json_root', to: 'flattened', label: 'flatten()' });
        newEdges.push({ from: 'flattened', to: 'output', label: 'to_df()' });
        newDict.push({ entity: 'JSON Root', fields });
        if (fieldSet.size > 20) issues.push('Schema has >20 keys — consider splitting into multiple tables.');
        objects.forEach((obj, i) => {
          if (typeof obj === 'object') {
            const keysA = Object.keys(obj);
            for (let j = i + 1; j < objects.length; j++) {
              const keysB = Object.keys(objects[j]);
              if (keysA.length !== keysB.length) { issues.push(`Inconsistent key count between record ${i + 1} and ${j + 1}`); break; }
            }
          }
        });
      } catch (e) { console.log('JSON parse failed:', e); }
    }
    // CSV detection
    else if (input.includes(',')) {
      const header = lines[0].split(',').map(h => h.trim());
      newNodes.push({ id: 'csv_source', label: 'CSV Source', type: 'source', fields: header });
      newNodes.push({ id: 'cleaned', label: 'Cleaned Data', type: 'transform', fields: header });
      newNodes.push({ id: 'db_target', label: 'Database Target', type: 'destination', fields: header });
      newEdges.push({ from: 'csv_source', to: 'cleaned', label: 'drop_na(), trim()' });
      newEdges.push({ from: 'cleaned', to: 'db_target', label: 'INSERT INTO' });
      newDict.push({ entity: 'CSV Schema', fields: header.map(h => ({ name: h, type: 'string', nullable: false })) });
    }

    setNodes(newNodes);
    setEdges(newEdges);
    setDataDict(newDict);
    setSchemaIssues(issues);
    setParsed(newNodes.length > 0);
  };

  const positions = nodes.map((n, i) => {
    const x = n.type === 'source' ? 120 : n.type === 'destination' ? 700 : 400;
    const y = 100 + i * 180;
    return { ...n, x, y };
  });

  return (
    <div style={{ maxWidth: '100%', margin: '2rem auto', padding: '1rem 1.5rem', fontFamily: 'system-ui, sans-serif', color: '#e0e0e0', background: '#0d1117', borderRadius: '12px', minHeight: '100vh' }}>
      <a href="/ai-lab" style={{ color: '#58a6ff', textDecoration: 'none', fontSize: '0.9rem' }}>← Back to AI Lab</a>
      <h1 style={{ fontSize: '2rem', fontWeight: 700, margin: '1rem 0 0.5rem' }}>🔄 Autonomous Data Pipeline Visualizer</h1>
      <p style={{ color: '#8b949e', marginBottom: '1.5rem' }}>Paste JSON, CSV, or SQL schema to auto-generate a data pipeline diagram, data dictionary, and schema analysis.</p>

      {!parsed ? (
        <div style={{ background: '#161b22', borderRadius: '10px', padding: '1.5rem' }}>
          <textarea value={input} onChange={e => setInput(e.target.value)} placeholder="Paste JSON, CSV headers, or SQL CREATE TABLE statements here..." style={{ width: '100%', minHeight: '200px', padding: '0.75rem', background: '#0d1117', border: '1px solid #30363d', borderRadius: '8px', color: '#e0e0e0', fontFamily: 'monospace', fontSize: '0.9rem', resize: 'vertical' }} />
          <button onClick={parseInput} style={{ display: 'block', width: '100%', marginTop: '1rem', padding: '0.75rem', fontSize: '1.1rem', fontWeight: 600, color: '#fff', background: 'linear-gradient(90deg, #8b5cf6, #a78bfa)', border: 'none', borderRadius: '8px', cursor: 'pointer' }}>🔄 Generate Pipeline Diagram</button>
        </div>
      ) : (
        <>
          {/* SVG Diagram */}
          <div style={{ background: '#161b22', borderRadius: '10px', padding: '1.5rem', marginBottom: '1.5rem' }}>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '1rem' }}>📊 Pipeline Flow Diagram</h2>
            <svg width="860" height={Math.max(500, positions.length * 200)} style={{ background: '#0d1117', borderRadius: '8px', width: '100%' }}>
              <defs>
                <marker id="arrow" markerWidth="10" markerHeight="10" refX="20" refY="3" orient="auto"><path d="M0,0 L10,3 L0,6 z" fill="#58a6ff" /></marker>
              </defs>
              {edges.map((e, i) => {
                const from = positions.find(p => p.id === e.from);
                const to = positions.find(p => p.id === e.to);
                if (!from || !to) return null;
                return <line key={i} x1={from.x + 80} y1={from.y} x2={to.x - 80} y2={to.y} stroke="#58a6ff" strokeWidth="2" markerEnd="url(#arrow)" /><text key={`${i}-t`} x={(from.x + 80 + to.x - 80) / 2 - 30} y={(from.y + to.y) / 2 - 5} fill="#c9d1d9" fontSize="0.75rem">{e.label}</text>
              })}
              {positions.map((n, i) => {
                const color = { source: '#238636', transform: '#f0883e', destination: '#58a6ff' }[n.type];
                return <g key={n.id} transform={`translate(${n.x - 80}, ${n.y - 30})`}><rect rx="8" ry="8" width="160" height="60" fill={color} /><text x="80" y="25" fill="#fff" fontSize="0.9rem" textAnchor="middle" fontWeight="600">{n.label}</text><text x="80" y="45" fill="#c9d1d9" fontSize="0.75rem" textAnchor="middle">{n.fields.length} fields</text></g>
              })}
            </svg>
          </div>

          {/* Data Dictionary */}
          {dataDict.length > 0 && (
            <div style={{ background: '#161b22', borderRadius: '10px', padding: '1.5rem', marginBottom: '1.5rem' }}>
              <h2 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '1rem' }}>📚 Data Dictionary</h2>
              {dataDict.map((d, i) => (
                <div key={i} style={{ background: '#0d1117', borderRadius: '8px', padding: '1rem', marginBottom: '0.5rem' }}>
                  <h3 style={{ margin: '0 0 0.5rem', color: '#58a6ff' }}>{d.entity}</h3>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(120px, 1fr))', gap: '0.25rem' }}>
                    {d.fields.map(f => <div key={f.name} style={{ padding: '0.25rem 0.5rem', background: '#161b22', borderRadius: '4px' }}><span style={{ fontWeight: '600' }}>{f.name}</span> <span style={{ color: '#8b949e', fontSize: '0.8rem' }}>({f.type})</span></div>)}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Issues */}
          {schemaIssues.length > 0 && (
            <div style={{ background: '#161b22', borderRadius: '10px', padding: '1.5rem', marginBottom: '1.5rem' }}>
              <h2 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '1rem', color: '#f0883e' }}>⚠️ Schema Issues</h2>
              {schemaIssues.map((s, i) => <div key={i} style={{ padding: '0.5rem', background: '#0d1117', borderRadius: '6px', marginBottom: '0.5rem', color: '#c9d1d9' }}>💡 {s}</div>)}
            </div>
          )}

          <button onClick={() => { setParsed(false); setNodes([]); setEdges([]); setDataDict([]); setSchemaIssues([]); setInput(''); }} style={{ display: 'block', width: '100%', padding: '0.75rem', fontSize: '1rem', fontWeight: 600, color: '#fff', background: '#1f6feb', border: 'none', borderRadius: '8px', cursor: 'pointer', marginTop: '1rem' }}>🔄 Analyze Another Dataset</button>
        </>
      )}
    </div>
  );
}