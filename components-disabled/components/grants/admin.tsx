
  const load = () => {
    fetch('/api/grants?status=Submitted').then((r) => r.json()).then((d) => setItems(d.items || []));
  };

  useEffect(() => {
    load();
    load();
  };

  const saveMilestones = async () => {
    if (!selected) return;
    alert('Milestones saved');
  };

  const markComplete = async (milestoneId: string) => {
    if (!selected) return;
    const r = await fetch(`/api/grants/${selected.id}`).then((x) => x.json());
    setSelected(r.record);
  };

  return (
    <EnhancedLayout>
      <h1 className="text-2xl font-semibold mb-4">Grants Admin</h1>
      <div className="grid md:grid-cols-3 gap-6">
        <div className="md:col-span-2">
          <div className="mb-3 flex items-center gap-2">
            <input className="border rounded p-2" placeholder="Admin Token" value={token} onChange={(e) => setToken(e.target.value)} />
          </div>
          <div className="grid gap-3">
            {items.map((g) => (
              <div key={g.id} className={`border rounded p-3 ${selected?.id === g.id ? 'ring-2 ring-blue-500' : ''}`}>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-medium">{g.projectName}</div>
                    <div className="text-xs text-gray-600">{g.sector} • {g.region} • {g.program}</div>
                  </div>
                  <div className="flex gap-2">
                    <button className="px-2 py-1 border rounded" onClick={() => setSelected(g)}>Milestones</button>
                  </div>
                </div>
              </div>
            ))}
            {items.length === 0 && <div className="text-sm text-gray-600">No submitted applications.</div>}
          </div>
        </div>
        <div>
          <div className="border rounded p-3">
            <h2 className="font-medium mb-2">Milestone Planner</h2>
            {selected ? (
              <div className="space-y-2">
                    </div>
                    <div className="mt-2 flex items-center gap-2">
                      <button className="px-2 py-1 border rounded" onClick={() => markComplete(m.id!)} disabled={!m.id}>Mark Complete</button>
                    </div>
                  </div>
                ))}
                <div className="flex gap-2 mt-2">
                  <button className="px-2 py-1 bg-blue-600 text-white rounded" onClick={saveMilestones}>Save Milestones</button>
                </div>
              </div>
            ) : (
              <div className="text-sm text-gray-600">Select a grant to plan milestones.</div>
            )}
          </div>
        </div>
      </div>
    </EnhancedLayout>
  );
}