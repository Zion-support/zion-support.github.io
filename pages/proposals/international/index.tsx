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
          {items.map((p) => (
            <div key={p.id} className="border rounded p-4">
              <div className="flex items-center justify-between">
                <div>
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
        </div>
      )}
    </div>
  );
}