
      const res = await fetch('/api/proposals/list');
      const data = await res.json();
      setItems(data.proposals || []);

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

  }
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
