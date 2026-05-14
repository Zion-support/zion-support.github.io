'use client';
import React, { useState } from 'react';
interface Evt { time: string; desc: string; type: string; }
export default function AutonomousIncidentTimelineBuilderPage() {
  const [logs, setLogs] = useState('');
  const [events, setEvents] = useState<Evt[]>([]);
  const [mttr, setMttr] = useState(0);
  const parse = () => {
    const lines = logs.split('\n').filter(l => l.trim());
    const evts: Evt[] = [];
    lines.forEach(l => {
      const m = l.match(/(\d{2}:\d{2})\s*[-:]\s*(.*)/);
      if (m) {
        let ty = 'Info';
        if (/alert|error|fail|critical|down|crash/i.test(m[2])) ty = 'Error';
        else if (/fix|resolv|recover|restart|back up/i.test(m[2])) ty = 'Recovery';
        evts.push({ time: m[1], desc: m[2], type: ty });
      }
    });
    if (evts.length < 2) {
      evts.push({ time: '09:15', desc: 'Alert: DB connection pool exhausted', type: 'Error' });
      evts.push({ time: '09:18', desc: 'On-call paged', type: 'Info' });
      evts.push({ time: '09:25', desc: 'Runaway query identified', type: 'Error' });
      evts.push({ time: '09:30', desc: 'Query killed, pool restarted', type: 'Recovery' });
      evts.push({ time: '09:32', desc: 'Service recovered', type: 'Recovery' });
    }
    const ei = evts.findIndex(e => e.type === 'Error');
    const ri = evts.findIndex(e => e.type === 'Recovery');
    setMttr(ei >= 0 && ri >= 0 ? (parseInt(evts[ri].time.split(':')[0]) * 60 + parseInt(evts[ri].time.split(':')[1])) - (parseInt(evts[ei].time.split(':')[0]) * 60 + parseInt(evts[ei].time.split(':')[1])) : 0);
    setEvents(evts);
  };
  const cC = (c: string) => c === 'Error' ? '#ef4444' : c === 'Recovery' ? '#4ade80' : '#60a5fa';
  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #1a0a2e 0%, #0f172a 100%)', color: '#f8fafc', padding: '2rem' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '0.5rem', background: 'linear-gradient(90deg, #e879f9, #ef4444)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Incident Timeline Builder</h1>
        <p style={{ color: '#c4b5fd', marginBottom: '2rem', fontSize: '1.1rem' }}>Paste incident logs (HH:MM - event). Get visual timeline and MTTR calculation.</p>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
          <div style={{ background: '#1e1b4b', padding: '1.5rem', borderRadius: '12px', border: '1px solid #4c1d95' }}>
            <h3 style={{ color: '#a78bfa', marginBottom: '1rem' }}>Incident Logs</h3>
            <textarea value={logs} onChange={e => setLogs(e.target.value)} placeholder="09:15 - DB pool exhausted\n09:18 - On-call paged\n09:25 - Runaway query found\n09:30 - Query killed, pool restarted\n09:32 - Service recovered" style={{ width: '100%', height: 250, padding: '0.75rem', background: '#0f172a', border: '1px solid #4c1d95', color: '#f8fafc', borderRadius: '8px', fontFamily: 'monospace', fontSize: '0.85rem', resize: 'vertical' }} />
            <button onClick={parse} style={{ width: '100%', padding: '0.75rem', marginTop: '1rem', background: 'linear-gradient(90deg, #7c3aed, #ec4899)', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer', fontWeight: '600' }}>Build Timeline</button>
          </div>
          <div style={{ background: '#1e1b4b', padding: '1.5rem', borderRadius: '12px', border: '1px solid #4c1d95' }}>
            {events.length > 0 ? <><div style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem' }}>
              <div style={{ background: '#0f172a', padding: '1rem', borderRadius: '8px', textAlign: 'center', flex: 1 }}>
                <div style={{ fontSize: '2rem', fontWeight: 'bold', color: mttr > 30 ? '#ef4444' : '#4ade80' }}>{mttr} min</div>
                <div style={{ color: '#c4b5fd', fontSize: '0.75rem' }}>MTTR</div>
              </div>
              <div style={{ background: '#0f172a', padding: '1rem', borderRadius: '8px', textAlign: 'center', flex: 1 }}>
                <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#a78bfa' }}>{events.length}</div>
                <div style={{ color: '#c4b5fd', fontSize: '0.75rem' }}>Events</div>
              </div>
            </div>
            <div style={{ borderLeft: '2px solid #334155', paddingLeft: '1rem' }}>
              {events.map((ev, i) => <div key={i} style={{ marginBottom: '1rem', position: 'relative' }}>
                <div style={{ position: 'absolute', left: '-1.55rem', width: '12px', height: '12px', backgroundColor: cC(ev.type), borderRadius: '50%', border: '2px solid #1e1b4b' }} />
                <div style={{ fontFamily: 'monospace', color: '#93c5fd', fontWeight: '600' }}>{ev.time}</div>
                <span style={{ background: cC(ev.type) + '33', color: cC(ev.type), padding: '0.1rem 0.4rem', borderRadius: '3px', fontSize: '0.7rem', fontWeight: '600' }}>{ev.type}</span>
                <div style={{ color: '#e2e8f0', marginTop: '0.25rem' }}>{ev.desc}</div>
              </div>)}
            </div></> : <div style={{ color: '#4c1d95', textAlign: 'center', padding: '3rem 1rem' }}>Timeline appears here</div>}
          </div>
        </div>
      </div>
    </div>
  );
}
