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
        <div className=&quot;grid gap-4&quot;>          {items.map((p) => (
            <div key={p.id} className=&quot;border rounded p-4&quot;>
              <div className=&quot;flex items-center justify-between&quot;>
                <div>
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
          {!items.length && <div className=&quot;opacity-70&quot;>No proposals yet.</div>}        </div>
      )}
    </div>
  )
}