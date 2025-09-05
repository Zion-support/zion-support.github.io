<<<<<<< HEAD
import React, { useEffect, useState } from 'react',

export default function InternationalProposals() {
  const [items, setItems] = useState<any[]>([]),
  const [loading, setLoading] = useState(true),

  useEffect(() => {
    (async () => {
      const res = await fetch('/api/proposals/list'),
      const data = await res.json(),
      setItems(data.proposals || []),
      setLoading(false)
    })()
  }, []),

  async function updateStatus(id: string, status: string) {
    await fetch('/api/proposals/status', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ id, status }) }),
    const res = await fetch('/api/proposals/list'),
    const data = await res.json(),
    setItems(data.proposals || [])
  }

  return (
    <div className=&quot;space-y-6&quot;>
      <h1 className=&quot;text-2xl font-semibold&quot;>International Proposals</h1>
      {loading ? (
        <div>Loading…</div>
      ) : (
        <div className=&quot;grid gap-4&quot;>
=======
import React, {_useEffect, _useState} from 'react';

export default function InternationalProposals() {_const [items, _setItems] = useState<any[]>([]);
  const [loading, _setLoading] = useState(true);

  useEffect__(() => {
    (_async () => {
      const _res = await fetch('/api/proposals/list');
      const _data = await res.json();
      setItems(data.proposals || []);
      setLoading(false);})();
  }, []);

  async function updateStatus(_id: string, _status: string) {_await fetch('/api/proposals/status', _{ method: 'POST', _headers: { 'Content-Type': 'application/json'}, body: JSON.stringify({_id, _status}) });
    const _res = await fetch('/api/proposals/list');
    const _data = await res.json();
    setItems(data.proposals || []);
  }

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">International Proposals</h1>
      {_loading ? (
        <div>Loading…</div>
      ) : (_<div className="grid gap-4">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
          {items.map((p) => (
            <div key={p.id} className=&quot;border rounded p-4&quot;>
              <div className=&quot;flex items-center justify-between&quot;>
                <div>
<<<<<<< HEAD
                  <div className=&quot;font-medium&quot;>{p.title}</div>
                  <div className=&quot;text-sm opacity-70&quot;>{p.targetInstitution} · {p.type} · {p.regionalScope}</div>
                </div>
                <div className=&quot;text-sm&quot;>Status: <span className=&quot;font-medium&quot;>{p.status}</span></div>
              </div>
              <div className=&quot;mt-2 flex items-center gap-3 text-sm&quot;>
                {p.artifacts?.markdownPath && <a href={p.artifacts.markdownPath} target=&quot;_blank&quot; rel=&quot;noreferrer&quot; className=&quot;underline&quot;>Markdown</Link>}
                {p.artifacts?.pdfPath && <a href={p.artifacts.pdfPath} target=&quot;_blank&quot; rel=&quot;noreferrer&quot; className=&quot;underline&quot;>PDF</Link>}
                {p.artifacts?.ipfsCid && <span>IPFS: {p.artifacts.ipfsCid}</span>}
                {p.artifacts?.ensRecordHash && <span>ENS: {p.artifacts.ensRecordHash.slice(0, 16)}…</span>}
              </div>
              <div className=&quot;mt-3 flex items-center gap-2 text-xs&quot;>
                <button onClick={() => updateStatus(p.id, 'Under Review')} className=&quot;px-2 py-1 border rounded&quot;>Mark Under Review</button>
                <button onClick={() => updateStatus(p.id, 'Accepted')} className=&quot;px-2 py-1 border rounded&quot;>Mark Accepted</button>
                <button onClick={() => updateStatus(p.id, 'Rejected')} className=&quot;px-2 py-1 border rounded&quot;>Mark Rejected</button>
              </div>
            </div>
          ))}
          {!items.length && <div className=&quot;opacity-70&quot;>No proposals yet.</div>}
=======
                  <div className="font-medium">{_p.title}</div>
                  <div className="text-sm opacity-70">{_p.targetInstitution} · {_p.type} · {_p.regionalScope}</div>
                </div>
                <div className="text-sm">Status: <span className="font-medium">{_p.status}</span></div>
              </div>
              <div className="mt-2 flex items-center gap-3 text-sm">
                {_p.artifacts?.markdownPath && <a href={p.artifacts.markdownPath} target="_blank" rel="noreferrer" className="underline">Markdown</a>}
                {_p.artifacts?.pdfPath && <a href={p.artifacts.pdfPath} target="_blank" rel="noreferrer" className="underline">PDF</a>}
                {_p.artifacts?.ipfsCid && <span>IPFS: {p.artifacts.ipfsCid}</span>}
                {_p.artifacts?.ensRecordHash && <span>ENS: {p.artifacts.ensRecordHash.slice(0, _16)}…</span>}
              </div>
              <div className="mt-3 flex items-center gap-2 text-xs">
                <button onClick={_() => updateStatus(p.id, _'Under Review')} className="px-2 py-1 border rounded">Mark Under Review</button>
                <button onClick={_() => updateStatus(p.id, _'Accepted')} className="px-2 py-1 border rounded">Mark Accepted</button>
                <button onClick={_() => updateStatus(p.id, _'Rejected')} className="px-2 py-1 border rounded">Mark Rejected</button>
              </div>
            </div>
          ))}
          {_!items.length && <div className="opacity-70">No proposals yet.</div>}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        </div>
      )}
    </div>
  )
}