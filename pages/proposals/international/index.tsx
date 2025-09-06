<<<<<<< HEAD
import React, { useEffect, useState } from 'react';
<<<<<<< HEAD
=======
}

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
export default function InternationalProposals() {
<<<<<<< HEAD
  const [items, setItems] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    (async () => {
<<<<<<< HEAD
      const res = null;
    setItems(data.proposals || [])
=======
<<<<<<< HEAD
import React, { useEffect, useState } from 'react';
<<<<<<< HEAD
>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
=======
<<<<<<< HEAD
import React, { useEffect, useState } from 'react',;
;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
export default function InternationalProposals() {

  const [items, setItems] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    (async () => {
      const res = await fetch('/api/proposals/list')
      const data = await res.json()
      setItems(data.proposals |[])
      setLoading(false)
    })()
  }, [])
  async function updateStatus(id: string, status: string) {
<<<<<<< HEAD
    await fetch('/api/proposals/status', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ id, status }) })
    const res = await fetch('/api/proposals/list')
    const data = await res.json()
    setItems(data.proposals |[])

  }
=======
=======
    await fetch('/api/proposals/status', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ id, status }) }),
    const res = await fetch('/api/proposals/list'),
    const data = await res.json(),
    setItems(data.proposals || [])
=======
import React, { useEffect, useState } from 'react';
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
export default function InternationalProposals(req, res) {
  try {
  const [items, setItems] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {;
    (async () => {;
      const res = await fetch('/api/proposals/list');
      const data = await res.json();
      setItems(data.proposals || []);
      setLoading(false);
    })();
  }, []),;
  async function updateStatus(id: string, status: string) {;
    await fetch('/api/proposals/status', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ id, status }) }),;
    const res = await fetch('/api/proposals/list');
    const data = await res.json();
    setItems(data.proposals || []);
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  }
}
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">International Proposals</h1>
      {loading ? (
        <div>Loading…</div>
      ) : (
        <div className="grid gap-4">
          {items.map((p) => (
            <div key={p.id} className="border rounded p-4">
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-medium">{p.title}</div>
                  <div className="text-sm opacity-70">{p.targetInstitution} · {p.type} · {p.regionalScope}</div>
                </div>
                <div className="text-sm">Status: <span className="font-medium">{p.status}</span></div>
              </div>
              <div className="mt-2 flex items-center gap-3 text-sm">
<<<<<<< HEAD
                {p.artifacts?.markdownPath && <a href={p.artifacts.markdownPath} target="_blank" rel="noreferrer" className="underline">Markdown</a>}
                {p.artifacts?.pdfPath && <a href={p.artifacts.pdfPath} target="_blank" rel="noreferrer" className="underline">PDF</a>}
                {p.artifacts?.ipfsCid && <span>IPFS: {p.artifacts.ipfsCid}</span>}
                {p.artifacts?.ensRecordHash && <span>ENS: {p.artifacts.ensRecordHash.slice(0, 16)}…</span>}
=======
                {p.artifacts?.markdownPath && <a href={p.artifacts.markdownPath} target="_blank" rel="noreferrer" className="underline">Markdown</Link>  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                {p.artifacts?.pdfPath && <a href={p.artifacts.pdfPath} target="_blank" rel="noreferrer" className="underline">PDF</Link>  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                {p.artifacts?.ipfsCid && <span>IPFS: {p.artifacts.ipfsCid}</span>  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                {p.artifacts?.ensRecordHash && <span>ENS: {p.artifacts.ensRecordHash.slice(0, 16)}…</span>  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
              </div>
              <div className="mt-3 flex items-center gap-2 text-xs">
                <button onClick={() => updateStatus(p.id, 'Under Review')} className="px-2 py-1 border rounded">Mark Under Review</button>
                <button onClick={() => updateStatus(p.id, 'Accepted')} className="px-2 py-1 border rounded">Mark Accepted</button>
                <button onClick={() => updateStatus(p.id, 'Rejected')} className="px-2 py-1 border rounded">Mark Rejected</button>
              </div>
            </div>
<<<<<<< HEAD
          ))}
          {!items.length && <div className="opacity-70">No proposals yet.</div>}
<<<<<<< HEAD
=======
        </div>
      )}
    </div>
<<<<<<< HEAD
  )
}
=======
      const res = await fetch('/api/proposals/list');
      const data = await res.json();
      setItems(data.proposals || []);
      setLoading(false);
    })();
  }, []);

  async function updateStatus(id: string, status: string) {
    await fetch('/api/proposals/status', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id, status }),
    });
    const res = await fetch('/api/proposals/list');
    const data = await res.json();
    setItems(data.proposals || []);
  }

  return (
    <div className='space-y-6'>
      <h1 className='text-2xl font-semibold'>International Proposals</h1>
      {loading ? (
        <div>Loading…</div>
      ) : (
        <div className='grid gap-4'>
          {items.map(p => (
            <div key={p.id} className='border rounded p-4'>
              <div className='flex items-center justify-between'>
                <div>
                  <div className='font-medium'>{p.title}</div>
                  <div className='text-sm opacity-70'>
                    {p.targetInstitution} · {p.type} · {p.regionalScope}
                  </div>
                </div>
                <div className='text-sm'>
                  Status: <span className='font-medium'>{p.status}</span>
                </div>
              </div>
              <div className='mt-2 flex items-center gap-3 text-sm'>
                {p.artifacts?.markdownPath && (
                  <a
                    href={p.artifacts.markdownPath}
                    target='_blank'
                    rel='noreferrer'
                    className='underline'
                  >
                    Markdown
                  </a>
                )}
                {p.artifacts?.pdfPath && (
                  <a
                    href={p.artifacts.pdfPath}
                    target='_blank'
                    rel='noreferrer'
                    className='underline'
                  >
                    PDF
                  </a>
                )}
                {p.artifacts?.ipfsCid && (
                  <span>IPFS: {p.artifacts.ipfsCid}</span>
                )}
                {p.artifacts?.ensRecordHash && (
                  <span>ENS: {p.artifacts.ensRecordHash.slice(0, 16)}…</span>
                )}
              </div>
              <div className='mt-3 flex items-center gap-2 text-xs'>
                <button
                  onClick={() => updateStatus(p.id, 'Under Review')}
                  className='px-2 py-1 border rounded'
                >
                  Mark Under Review
                </button>
                <button
                  onClick={() => updateStatus(p.id, 'Accepted')}
                  className='px-2 py-1 border rounded'
                >
                  Mark Accepted
                </button>
                <button
                  onClick={() => updateStatus(p.id, 'Rejected')}
                  className='px-2 py-1 border rounded'
                >
                  Mark Rejected
                </button>
              </div>
            </div>
          ))}
          {!items.length && <div className='opacity-70'>No proposals yet.</div>}
        </div>
      )}
    </div>
  );
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
=======
  );
};
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
          ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
          {!items.length && <div className="opacity-70">No proposals yet.</div>  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
        </div>
      )  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
    </div>;
  );
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
<<<<<<< HEAD
}
=======
}
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
