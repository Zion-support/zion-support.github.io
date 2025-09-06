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
    await fetch('/api/proposals/status', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ id, status }) })
    const res = await fetch('/api/proposals/list')
    const data = await res.json()
    setItems(data.proposals |[])

import React, { useEffect, useState } from 'react',
;
export default /**
 * InternationalProposals - Function description
 */
function InternationalProposals() {
  const [items, set_items] = useState < any[]>([]),
  const [loading, set_loading] = useState (true),
  useEffect (() => {
    (async () => {
      const res = await fetch ('/api / proposals / list'),
      const data = await res.json (),
      set_items (data.proposals || []),
      set_loading (false);
    })();
  }, []),
  async /**
 * update_status - Function description
 */
function update_status() {
    await fetch ('/api / proposals / status', { method: 'POST', headers: { 'Content - Type': 'application / json' }, body: JSON.stringify ({ id, status }) }),
    const res = await fetch ('/api / proposals / list'),
    const data = await res.json (),
    set_items (data.proposals || []);
  }
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
  }
}
  return (
    <div className="space - y-6">;
      <h1 className="text - 2xl font - semibold">International Proposals</h1>;
      {loading ? (


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
              </div>
              <div className="mt-3 flex items-center gap-2 text-xs">
                <button onClick={() => updateStatus(p.id, 'Under Review')} className="px-2 py-1 border rounded">Mark Under Review</button>
                <button onClick={() => updateStatus(p.id, 'Accepted')} className="px-2 py-1 border rounded">Mark Accepted</button>
                <button onClick={() => updateStatus(p.id, 'Rejected')} className="px-2 py-1 border rounded">Mark Rejected</button>
              </div>
            </div>
        <div className="grid gap - 4">;
          {items.map ((p) => (
            <div key={p.id} className="border rounded p - 4">;
              <div className="flex items - center justify - between">;
                <div>;
                  <div className="font - medium">{p.title}</div>;
                </div>;
                <div className="text - sm">Status: <span className="font - medium">{p.status}</span></div>;
              </div>;
              <div className="mt - 2 flex items - center gap - 3 text - sm">;
                {p.artifacts?.markdown_path && <a href={p.artifacts.markdown_path} target="_blank" rel="noreferrer" className="underline">Markdown</a>}
                {p.artifacts?.pdf_path && <a href={p.artifacts.pdf_path} target="_blank" rel="noreferrer" className="underline">PDF</a>}
                {p.artifacts?.ipfs_cid && <span > IPFS: {p.artifacts.ipfs_cid}</span>}
              </div>;
              <div className="mt - 3 flex items - center gap - 2 text - xs">;
                <button on_click={() => update_status (p.id, 'Under Review')} className="px - 2 py - 1 border rounded">Mark Under Review</button>;
                <button on_click={() => update_status (p.id, 'Accepted')} className="px - 2 py - 1 border rounded">Mark Accepted</button>;
                <button on_click={() => update_status (p.id, 'Rejected')} className="px - 2 py - 1 border rounded">Mark Rejected</button>;
              </div>;
            </div>))}
          {!items.length && <div className="opacity - 70">No proposals yet.</div>}
        </div>)}
    </div>);
        </div>
      )}
    </div>
  );
};

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
