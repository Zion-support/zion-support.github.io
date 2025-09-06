
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

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
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


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
              </div>
              <div className="mt-3 flex items-center gap-2 text-xs">
                <button onClick={() => updateStatus(p.id, 'Under Review')} className="px-2 py-1 border rounded">Mark Under Review</button>
                <button onClick={() => updateStatus(p.id, 'Accepted')} className="px-2 py-1 border rounded">Mark Accepted</button>
                <button onClick={() => updateStatus(p.id, 'Rejected')} className="px-2 py-1 border rounded">Mark Rejected</button>
              </div>
            </div>

=======
}

=======
        <div > Loading…</div>) : (
        <div className="grid gap - 4">;
          {items.map ((p) => (
            <div key={p.id} className="border rounded p - 4">;
              <div className="flex items - center justify - between">;
                <div>;
                  <div className="font - medium">{p.title}</div>;
                  <div className="text - sm opacity - 70">{p.target_institution} · {p.type} · {p.regional_scope}</div>;
                </div>;
                <div className="text - sm">Status: <span className="font - medium">{p.status}</span></div>;
              </div>;
              <div className="mt - 2 flex items - center gap - 3 text - sm">;
                {p.artifacts?.markdown_path && <a href={p.artifacts.markdown_path} target="_blank" rel="noreferrer" className="underline">Markdown</a>}
                {p.artifacts?.pdf_path && <a href={p.artifacts.pdf_path} target="_blank" rel="noreferrer" className="underline">PDF</a>}
                {p.artifacts?.ipfs_cid && <span > IPFS: {p.artifacts.ipfs_cid}</span>}
                {p.artifacts?.ensRecordHash && <span > ENS: {p.artifacts.ensRecordHash.slice (0, 16)}…</span>}
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
          {items.map((p) => (
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
          {!items.length && <div className=&quot;opacity-70&quot;>No proposals yet.</div>}
        </div>
      )}
    </div>
  )

}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======

        </div>
      )}
    </div>
  );
};

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
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
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
=======

}

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
