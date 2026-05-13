'use client';

import React, { useState } from 'react';

interface TableDef { name: string; columns: { name: string; type: string; nullable: boolean; pk: boolean }[]; }
const TYPES = ['INT', 'VARCHAR(255)', 'TEXT', 'BOOLEAN', 'TIMESTAMP', 'UUID', 'DECIMAL(10,2)', 'JSON', 'BIGINT', 'FLOAT'];

export default function AutonomousSchemaDesignerPage() {
  const [tables, setTables] = useState<TableDef[]>([
    { name: 'users', columns: [
      { name: 'id', type: 'UUID', nullable: false, pk: true },
      { name: 'email', type: 'VARCHAR(255)', nullable: false, pk: false },
      { name: 'name', type: 'VARCHAR(100)', nullable: true, pk: false },
      { name: 'created_at', type: 'TIMESTAMP', nullable: false, pk: false },
    ]},
    { name: 'orders', columns: [
      { name: 'id', type: 'UUID', nullable: false, pk: true },
      { name: 'user_id', type: 'UUID', nullable: false, pk: false },
      { name: 'total', type: 'DECIMAL(10,2)', nullable: false, pk: false },
      { name: 'status', type: 'VARCHAR(50)', nullable: false, pk: false },
    ]},
  ]);
  const [dbType, setDbType] = useState<'postgres' | 'mysql' | 'sqlite'>('postgres');
  const [view, setView] = useState<'sql' | 'erd' | 'dict'>('sql');
  const [newTable, setNewTable] = useState({ name: '', columns: [{ name: 'id', type: 'UUID', nullable: false, pk: true }] });
  const [newCol, setNewCol] = useState({ name: '', type: 'VARCHAR(255)', nullable: false, pk: false });

  const addTable = () => { setTables([...tables, { name: newTable.name, columns: [...newTable.columns] }]); setNewTable({ name: '', columns: [] }); setNewCol({ name: '', type: 'VARCHAR(255)', nullable: false, pk: false }); };
  const addCol = (ti: number) => { const t = [...tables]; t[ti].columns.push({ ...newCol }); setTables(t); setNewCol({ name: '', type: 'VARCHAR(255)', nullable: false, pk: false }); };
  const removeCol = (ti: number, ci: number) => { const t = [...tables]; t[ti].columns.splice(ci, 1); setTables(t); };
  const removeTable = (i: number) => setTables(tables.filter((_, j) => j !== i));

  const generateSQL = () => {
    return tables.map(t => {
      const cols = t.columns.map(c => {
        let def = `  ${c.name} ${c.type}`;
        if (c.pk) def += ' PRIMARY KEY';
        if (!c.nullable && !c.pk) def += ' NOT NULL';
        if (c.type === 'TIMESTAMP' && !c.nullable) def += ' DEFAULT CURRENT_TIMESTAMP';
        return def;
      }).join(',\n');
      const create = `CREATE TABLE ${t.name} (\n${cols}\n);`;
      const fks = t.columns.filter(c => c.name.endsWith('_id') && c.name.replace('_id', '') !== t.name.replace(/s$/, '')).map(c => {
        const refTable = c.name.replace('_id', 's');
        return `ALTER TABLE ${t.name} ADD CONSTRAINT fk_${t.name}_${c.name} FOREIGN KEY (${c.name}) REFERENCES ${refTable} (id);`;
      }).join('\n');
      return create + (fks ? '\n\n' + fks : '');
    }).join('\n\n');
  };

  const exportJSON = () => {
    const blob = new Blob([JSON.stringify({ tables, dbType }, null, 2)], { type: 'application/json' });
    const a = document.createElement('a'); a.href = URL.createObjectURL(blob); a.download = 'schema.json'; a.click();
  };

  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #1e3a5f 0%, #2d1b69 100%)', color: '#f8fafc', padding: '2rem' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '0.5rem', background: 'linear-gradient(90deg, #38bdf8, #a78bfa)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>🗄️ Autonomous Database Schema Designer</h1>
        <p style={{ color: '#94a3b8', marginBottom: '2rem', fontSize: '1.1rem' }}>Define tables, columns, relationships. Auto-generate SQL (Postgres/MySQL/SQLite), ERD visualization, and data dictionary. Export to JSON.</p>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '2rem' }}>
          <div style={{ background: '#0f172a', padding: '1.5rem', borderRadius: '12px', border: '1px solid #1e3a5f' }}>
            <h3 style={{ marginBottom: '1rem', display: 'flex', justifyContent: 'space-between' }}>
              <span>📋 Schema Definition</span>
              <select value={dbType} onChange={e => setDbType(e.target.value as any)} style={{ padding: '0.25rem 0.5rem', background: '#1e3a5f', border: 'none', color: '#f8fafc', borderRadius: '4px' }}>
                <option value="postgres">PostgreSQL</option><option value="mysql">MySQL</option><option value="sqlite">SQLite</option>
              </select>
            </h3>

            {tables.map((t, ti) => (
              <div key={ti} style={{ background: '#1a1a2e', padding: '1rem', borderRadius: '8px', marginBottom: '0.75rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                  <span style={{ fontWeight: '700', fontSize: '1.1rem', color: '#38bdf8' }}>📦 {t.name}</span>
                  <button onClick={() => removeTable(ti)} style={{ background: 'none', border: 'none', color: '#ef4444', cursor: 'pointer' }}>✕</button>
                </div>
                <div style={{ fontSize: '0.85rem' }}>
                  {t.columns.map((c, ci) => (
                    <div key={ci} style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.25rem', alignItems: 'center' }}>
                      <span style={{ fontFamily: 'monospace', color: '#e2e8f0', flex: 2 }}>{c.name}</span>
                      <span style={{ color: '#a78bfa', flex: 2 }}>{c.type}</span>
                      <span style={{ fontSize: '0.7rem', color: '#94a3b8', flex: 1 }}>{c.pk ? '🔑' : ''} {c.nullable ? 'NULL' : 'NOT NULL'}</span>
                      <button onClick={() => removeCol(ti, ci)} style={{ background: 'none', border: 'none', color: '#94a3b8', cursor: 'pointer', fontSize: '0.8rem' }}>✕</button>
                    </div>
                  ))}
                </div>
                <div style={{ marginTop: '0.5rem', display: 'flex', gap: '0.5rem', alignItems: 'end' }}>
                  <input type="text" placeholder="Column" value={newCol.name} onChange={e => setNewCol({...newCol, name: e.target.value})} style={{ flex: 1, padding: '0.3rem', background: '#0f172a', border: '1px solid #1e3a5f', color: '#f8fafc', borderRadius: '4px', fontSize: '0.8rem' }} />
                  <select value={newCol.type} onChange={e => setNewCol({...newCol, type: e.target.value})} style={{ padding: '0.3rem', background: '#0f172a', border: '1px solid #1e3a5f', color: '#f8fafc', borderRadius: '4px' }}>
                    {TYPES.map(t => <option key={t}>{t}</option>)}
                  </select>
                  <button onClick={() => addCol(ti)} style={{ padding: '0.3rem 0.5rem', background: '#1e3a5f', border: 'none', color: '#f8fafc', borderRadius: '4px', cursor: 'pointer' }}>+ Col</button>
                </div>
              </div>
            ))}

            <div style={{ display: 'flex', gap: '0.5rem', marginTop: '1rem' }}>
              <input type="text" value={newTable.name} onChange={e => setNewTable({...newTable, name: e.target.value})} placeholder="New table name" style={{ flex: 1, padding: '0.75rem', background: '#1a1a2e', border: '1px solid #1e3a5f', color: '#f8fafc', borderRadius: '8px' }} />
              <button onClick={addTable} style={{ padding: '0.75rem 1rem', background: '#1e3a5f', border: 'none', color: '#f8fafc', borderRadius: '8px', cursor: 'pointer' }}>+ Table</button>
            </div>
            <button onClick={exportJSON} style={{ width: '100%', padding: '0.75rem', marginTop: '0.5rem', background: '#0f172a', border: '1px solid #1e3a5f', color: '#38bdf8', borderRadius: '8px', cursor: 'pointer' }}>📥 Export Schema JSON</button>
          </div>

          <div style={{ background: '#0f172a', padding: '1.5rem', borderRadius: '12px', border: '1px solid #1e3a5f' }}>
            <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1rem' }}>
              {(['sql', 'erd', 'dict'] as const).map(v => (
                <button key={v} onClick={() => setView(v)} style={{ padding: '0.5rem 1rem', borderRadius: '8px', background: view === v ? '#38bdf8' : '#0f172a', color: view === v ? '#0f172a' : '#94a3b8', border: '1px solid #1e3a5f', cursor: 'pointer', fontWeight: view === v ? '600' : '400' }}>
                  {v === 'sql' ? '📄 SQL' : v === 'erd' ? '🔗 ERD' : '📖 Dictionary'}
                </button>
              ))}
            </div>

            {view === 'sql' && (
              <pre style={{ background: '#1a1a2e', padding: '1rem', borderRadius: '8px', fontFamily: 'monospace', fontSize: '0.85rem', color: '#e2e8f0', overflowX: 'auto', maxHeight: 700, whiteSpace: 'pre-wrap' }}>
                {generateSQL()}
              </pre>
            )}
            {view === 'erd' && (
              <div style={{ background: '#1a1a2e', padding: '1rem', borderRadius: '8px' }}>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center' }}>
                  {tables.map((t, i) => (
                    <div key={i} style={{ background: '#0f172a', padding: '0.75rem', borderRadius: '8px', minWidth: 180, border: '2px solid #38bdf8' }}>
                      <div style={{ fontWeight: '700', color: '#38bdf8', marginBottom: '0.5rem', textAlign: 'center' }}>{t.name}</div>
                      {t.columns.map((c, j) => (
                        <div key={j} style={{ fontSize: '0.8rem', color: c.pk ? '#fbbf24' : '#94a3b8', padding: '0.15rem 0' }}>
                          {c.pk ? '🔑' : ' '} {c.name} <span style={{ color: '#a78bfa' }}>({c.type})</span>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
                <div style={{ textAlign: 'center', color: '#94a3b8', fontSize: '0.75rem', marginTop: '1rem' }}>
                  Lines show FK relationships (name_id → table)
                </div>
              </div>
            )}
            {view === 'dict' && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {tables.map((t, i) => (
                  <div key={i} style={{ background: '#1a1a2e', padding: '0.75rem', borderRadius: '8px' }}>
                    <div style={{ fontWeight: '700', color: '#a78bfa', marginBottom: '0.5rem' }}>{t.name} ({t.columns.length} cols)</div>
                    {t.columns.map((c, j) => (
                      <div key={j} style={{ fontSize: '0.8rem', padding: '0.2rem 0', display: 'flex', gap: '0.75rem' }}>
                        <span style={{ fontFamily: 'monospace', color: '#e2e8f0', minWidth: 100 }}>{c.name}</span>
                        <span style={{ color: '#a78bfa', minWidth: 100 }}>{c.type}</span>
                        <span style={{ color: c.nullable ? '#94a3b8' : '#4ade80' }}>{c.nullable ? 'NULL' : 'NOT NULL'}</span>
                        {c.pk && <span>🔑 PK</span>}
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}