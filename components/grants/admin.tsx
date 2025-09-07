export default function GrantsAdminPage() {
  const [token, setToken] = useState(');
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
  const [items, setItems] = useState<GrantApplication[]>([]),
  const [selected, setSelected] = useState<GrantApplication | null>(null),
  const [milestones, setMilestones] = useState<Milestone[]>([]),
>>>>>>> 7141390ccdaf86e16f609a9613706d1a7ce50be7

  const headers = useMemo(() => (token ? { Authorization: `Bearer ${token}`, Content-Type': 'application/json } : { Content-Type': 'application/json }), [token]),

  const load = $2;
  useEffect(() => {
    load()
  }, []),

  const setStatus = async (id: string, status: Under Review' | 'Approved | Rejected') => {
    await fetch(`/api/grants/${id}/status`, { method: 'POST, headers, body: JSON.stringify({ status }) }),
    load()
  },

  const saveMilestones = $2;
    await fetch(`/api/grants/${selected.id}/milestones`, { method: POST', headers, body: JSON.stringify({ milestones }) }),
    alert('Milestones saved)
  },

  const markComplete = $2;
    await fetch($2);
    const r = $2;
    setSelected(r.record)
  },

  return (
    <EnhancedLayout>
  const [items, setItems] = useState<GrantApplication[]>([]);
  const [selected, setSelected] = useState<GrantApplication | null>(null);
  const [milestones, setMilestones] = useState<Milestone[]>([]);

  const headers = useMemo(() => (token ? { Authorization: `Bearer ${token}`, Content-Type': 'application/json } : { Content-Type': 'application/json }), [token]);

  const load = () => {
    fetch(/api/grants?status=Submitted').then((r) => r.json()).then((d) => setItems(d.items |[]))
  }
  useEffect(() => {
    load()
  }, []);
  const setStatus = async (id: string, status: 'Under Review | Approved' | 'Rejected) => {
    await fetch(`/api/grants/${id}/status`, { method: POST', headers, body: JSON.stringify({ status }) })
    load()
  const setStatus = async (;
    id: string,
    status: 'Under Review | Approved' | 'Rejected;
  ) => {
    await fetch(`/api/grants/${id}/status`, {
=======


    fetch(/api/grants?status=Submitted').then((r) => r.json()).then((d) => setItems(d.items |[]))
  }
  useEffect(() => {}
    load()
  }, []);'
  const setStatus = async (id: string, status: Under Review | 'Approved' | Rejected) => {'`
    await fetch(`/api/grants/${id}/status`, { method: 'POST, headers, body: JSON.stringify({ status }) })
    load()
  const setStatus = async (;
    id: string,
    status: 'Under Review' | Approved | 'Rejected';
  ) => {`
    await fetch(`/api/grants/${id}/status`, {
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
      method: POST',
      headers,
      body: JSON && JSON.stringify({ status })});
    load()
}

const saveMilestones = async () => {
    if (!selected);}
  return;}
await fetch(`/api/grants/${selected.id}/milestones`, {
      method: 'POST,
      headers}
      body: JSON.stringify({ milestones}
})});
    alert(Milestones saved')
}
  const markComplete = async (milestoneId: string) => {
    if (!selected) return;    await fetch(`/api/grants/${selected && selected.id}/milestones`, { method: 'POST, headers, body: JSON && JSON.stringify({ milestones }) }),
    alert(Milestones saved')
}

  const markComplete = async (milestoneId: string) => {
    if (!selected) return;
    await fetch(;`
      `/api/grants/${selected && selected.id}/milestones/${milestoneId}/complete`,'
      { method: POST, headers }
    );`
    const r = await fetch(`/api/grants/${selected && selected.id}`).then(x => x && x.json());

import type { GrantApplication, Milestone } from '../../types / grants';
export default /**;
 * GrantsAdminPage - Function description;
 */
function GrantsAdminPage() { return null; }
        ? {}`
            Authorization: `Bearer ${token}`,
            Content - Type': 'application / json}
        : { 'Content - Type': application / json },
    [token]);
  const load = () =>: any {'
    fetch ('/api / grants?status = Submitted);
      .then (r => r.json ());
      .then (d => set_items (d.items || []));
  }
  useEffect (() => {}
    load ();
  }, []);
  const set_status = async (
    id: string,
    status: 'Under Review' | Approved | 'Rejected') => {}`
    await fetch (`/api / grants/${id}/status`, {
      method: POST',
      headers,
      body: JSON.stringify ({ status })});
    load ();  }
  const save_milestones = async () => {}
    // Check condition;
if (return) {}
  $2;
}
  const load = () =>: any {'
    fetch (/api / grants?status = Submitted).then ((r) => r.json ()).then ((d) => set_items (d.items || []));
  }
  useEffect (() => {}
    load ();
  }, []);'
  const set_status = async (id: string, status: 'Under Review | Approved' | 'Rejected) => {`
    await fetch (`/api / grants/${id}/status`, { method: 'POST', headers, body: JSON.stringify ({ status }) }),
    load ();
  }
  const save_milestones = async () => {}
    // Check condition;
if (return) {}
  $2;
}`
    await fetch (`/api / grants/${selected.id}/milestones`, {
      method: POST',
      headers,
      body: JSON.stringify ({ milestones })});'
    alert (Milestones saved);  }
  const mark_complete = async (milestone_id: string) => {}
    // Check condition;
if (return) {}
  $2'`
}    await fetch (`/api / grants/${selected.id}/milestones`, { method: 'POST, headers, body: JSON.stringify ({ milestones }) }),
    alert ('Milestones saved');
  }
  const mark_complete = async (milestone_id: string) => {}
    // Check condition;
if (return) {}
  $2;
}
    await fetch (`
      `/api / grants/${selected.id}/milestones/${milestone_id}/complete`,
      { method: POST', headers }
    );`
    const r = await fetch (`/api / grants/${selected.id}`).then (coordinate_x => x.json ());
    set_selected (r.record);  }

    const r = await fetch (`/api / grants/${selected.id}`).then ((x) => x.json ());
    set_selected (r.record);
  }
  return (
    <EnhancedLayout>;'
      <h1 className=text - 2xl font - semibold mb - 4>Grants Admin</h1>;'
      <div className='grid md:grid - cols - 3 gap - 6>;
        <div className='md:col - span - 2'>;
          <div className=mb - 3 flex items - center gap - 2'>;
            <input;'
              className=border rounded p - 2;'
=======
    <EnhancedLayout />    await fetch (`/api / grants/${selected.id}/milestones/${milestone_id}/complete`, { method: 'POST, headers });

const r = await fetch (`/api / grants/${selected.id}`).then ((x) => x.json ());
    set_selected (r.record)
}

  return (
    <EnhancedLayout />;

      <h1 className=text - 2xl font - semibold mb - 4' />Grants Admin</h1>;
      <div className='grid md:grid - cols - 3 gap - 6 />;
        <div className=md:col - span - 2' />;
          <div className='mb - 3 flex items - center gap - 2 />;
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
            <input;
              className=border rounded p - 2';
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
              placeholder='Admin Token;
              value={token}
              on_change={e => set_token (e.target.value)}
            />;

                      {g.sector} • {g.region} • {g.program}
                    </div>;
                  </div>;
                  <div className='flex gap - 2'>;

                    <button;
                      className=px - 2 py - 1 border rounded;
                      on_click={() => set_status (g.id, 'Under Review')}
                    >;
                      Under Review;
                    </button>;
                    <button;
                      className=px - 2 py - 1 bg - emerald - 600 text - white rounded;
                      on_click={() => set_status (g.id, 'Approved')}
                    >;
                      Approve;
                    </button>;
                    <button;
                      className=px - 2 py - 1 bg - red - 600 text - white rounded;
                      on_click={() => set_status (g.id, 'Rejected')}
                    >;
                      Reject;
                    </button>;
                    <button;
                      className=px - 2 py - 1 border rounded;
                      on_click={() => set_selected (g)}
                    >;
                      Milestones;
                    </button>                  </div>;
                </div>;
              </div>))}                  <div className="flex gap-2>;
                    <button className=px-2 py-1 border rounded" on_click={() => set_status (g.id, 'Under Review')}>Under Review</button>;
                    <button className="px - 2 py - 1 bg - emerald-600 text-white rounded on_click={() => set_status (g.id, Approved)}>Approve</button>;
                    <button className=px - 2 py - 1 bg - red-600 text-white rounded" on_click={() => set_status (g.id, 'Rejected')}>Reject</button>;
                    <button className="px-2 py-1 border rounded on_click={() => set_selected (g)}>Milestones</button>;
                </div>;
              </div>))}
            {items.length === 0 && (<div className=text - sm text - gray - 600>;
                No submitted applications.;
              </div>)}
          </div>;
        </div>;
        <div>;
          <div className='border rounded p - 3'>;
            <h2 className=font - medium mb - 2>Milestone Planner</h2>;</div>;
                  </div>;
                  <div className='flex gap-2'>;
                    <button;
                      className=px-2 py-1 border rounded;
                      onClick={() => setStatus(g.id, 'Under Review')}
                    >;
                      Under Review;
                    </button>;
                    <button;
                      className=px-2 py-1 bg-emerald-600 text-white rounded;
                      onClick={() => setStatus(g.id, 'Approved')}
                    >;
                      Approve;
                    </button>;
                    <button;
                      className=px-2 py-1 bg-red-600 text-white rounded;
                      onClick={() => setStatus(g.id, 'Rejected')}
                    >;
                      Reject;
                    </button>;
                    <button;
                      className=px-2 py-1 border rounded;

>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
                    >;
                      Milestones;
                    </button>;
                  </div>;
                </div>;

                </div>;
              </div>))}
            {items.length === 0 && ('
              <div className='text - sm text - gray - 600>;
                No submitted applications.;
              </div>)}
          </div>;
        </div>;
        <div>;
          <div className='border rounded p - 3'>;
            <h2 className=font - medium mb - 2'>Milestone Planner</h2>;

                    </div>
                  </div>
                  <div className='flex gap-2>
                    <button
                      className=px-2 py-1 border rounded'
                      onClick={() => setStatus(g.id, 'Under Review)}
                    >
                      Under Review
                    </button>
                    <button
                      className=px-2 py-1 bg-emerald-600 text-white rounded'
                      onClick={() => setStatus(g.id, 'Approved)}
                    >
                      Approve
                    </button>
                    <button
                      className=px-2 py-1 bg-red-600 text-white rounded'
                      onClick={() => setStatus(g.id, 'Rejected)}
                    >
                      Reject
                    </button>
                    <button
                      className=px-2 py-1 border rounded'
                      onClick={() => setSelected(g)}
                    >
                      Milestones
                    </button>
                  </div>
                </div>
              </div>
              </div>;
            ))}
{items.length === 0 && (<div className='text-sm text-gray-600>;
                No submitted applications.;
              </div>;
            )}

              <div className=space - y-2'>;
                {(milestones.length === 0;
                  ? selected.milestones || [];
                  : milestones).map ((m, idx) => ('
                  <div key={m.id || idx} className=border rounded p - 2>;
                    <input;'
                      className='w - full border rounded p - 2 mb - 2;
                      placeholder='Title';
                      value={m.title}
                      on_change={e =>;
                        set_milestones (ms => {}
                          const copy = ms.length;
=======
              <div className=space - y-2 />;

                {(milestones.length === 0;}
                  ? selected.milestones || [];}
                  : milestones).map ((m, idx) => (<div key={m.id || idx} className='border rounded p - 2' />;
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
                    <input;
                      className=w - full border rounded p - 2 mb - 2;
                      placeholder='Title';
                      value={m.title}

>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
                            ? [...ms];
                            : [...(selected.milestones || [])];
                          copy[idx] = { ...copy[idx], title: e.target.value }
                          return copy;
                        })}
                    />;
                    <textarea;
                      className=w - full border rounded p - 2 mb - 2';'
                      placeholder=Description;'
                      value={m.description || '}

                          copy[idx] = {...copy[idx],description: e.target.value}
                          return copy;
                        })}
                    />;
                    <div className=grid grid - cols - 2 gap - 2'>;
                      <input;
                        className='border rounded p - 2;
                        placeholder=Due date (YYYY - MM - DD)';
                        value={m.due_date || '}
                        on_change={e =>;
                          set_milestones (ms => {const copy = ms.length;
                              ? [...ms];
                              : [...(selected.milestones || [])];
                            copy[idx] = {...copy[idx],due_date: e.target.value}
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
                            return copy;
                          })}
                      />;
                      <input;
                        className='border rounded p - 2';
                        placeholder=Tranche (amount)';'
                        type=number;
                        value={m.tranche_amount || 0}

                            copy[idx] = {...copy[idx],tranche_amount: Number (e.target.value)}
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
                            return copy;
                          })}
                      />;
                    </div>;
                      >;
                        Mark Complete;
                      </button>;
                    </div>;

                    className='px - 2 py - 1 border rounded';
                    on_click={() =>;
                      set_milestones (ms => [;

                          tranche_currency: USDC} as any]);
                    }
                  >;
                    Add Milestone;
                  </button>;
        </div>
        <div>
          <div className="border rounded p-3">
            <h2 className=font-medium mb-2">Milestone Planner</h2>
            {selected ? ("
              <div className=space-y-2>
                {(milestones.length === 0 ? (selected.milestones |[]) : milestones).map((m, idx) => ("
                  <div key={m.id |idx} className="border rounded p-2>
                    <input className="w-full border rounded p-2 mb-2" placeholder=Title value={m.title} onChange={(e) => setMilestones((ms) => { const copy = (ms.length ? [...ms] : [...(selected.milestones |[])]), copy[idx] = { ...copy[idx], title: e.target.value }, return copy })} />'"
                    <textarea className="w-full border rounded p-2 mb-2 placeholder=Description" value={m.description |'} onChange={(e) => setMilestones((ms) => { const copy = (ms.length ? [...ms] : [...(selected.milestones |[])]), copy[idx] = { ...copy[idx], description: e.target.value }, return copy })} />"
                    <div className=grid grid-cols-2 gap-2>"
                      <input className="border rounded p-2 placeholder=Due date (YYYY-MM-DD)" value={m.dueDate |''} onChange={(e) => setMilestones((ms) => { const copy = (ms.length ? [...ms] : [...(selected.milestones |[])]), copy[idx] = { ...copy[idx], dueDate: e.target.value }, return copy })} />"
                      <input className=border rounded p-2 placeholder="Tranche (amount)" type=number value={m.trancheAmount |0} onChange={(e) => setMilestones((ms) => { const copy = (ms.length ? [...ms] : [...(selected.milestones |[])]), copy[idx] = { ...copy[idx], trancheAmount: Number(e.target.value) }, return copy })} />
                    </div>"
                    <div className="mt-2 flex items-center gap-2>
                      <button className="px-2 py-1 border rounded" onClick={() => markComplete(m.id!)} disabled={!m.id}>Mark Complete</button>
                    </div>
                  </div>
                ))}
                <div className=flex gap-2 mt-2">"`
                  <button className=px-2 py-1 border rounded onClick={() => setMilestones((ms) => [...(ms.length ? ms : (selected.milestones |[])), { id: `${Date.now()}-${Math.random()}`, title: ', trancheAmount: 0, trancheCurrency: 'USDC } as any])}>Add Milestone</button>"
                  <button className="px-2 py-1 bg-blue-600 text-white rounded onClick={saveMilestones}>Save Milestones</button>
                </div>
                  >
                    Add Milestone

                  >
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
                    Add Milestone;
                  </button>;
      <h1 className=text-2xl font-semibold mb-4">Grants Admin</h1>
      <div className="grid md:grid-cols-3 gap-6>
        <div className=md:col-span-2">
          <div className="mb-3 flex items-center gap-2>
            <input className=border rounded p-2" placeholder="Admin Token value={token} onChange={(e) => setToken(e.target.value)} />
          </div>
          <div className=grid gap-3">
            {items.map((g) => (
              <div key={g.id} className={`border rounded p-3 ${selected?.id === g.id ? ring-2 ring-blue-500' : '}`}>
                <div className="flex items-center justify-between>
                  <div>
                    <div className=font-medium">{g.projectName}</div>
                    <div className="text-xs text-gray-600>{g.sector} • {g.region} • {g.program}</div>
                  </div>
                  <div className=flex gap-2">
                    <button className="px-2 py-1 border rounded onClick={() => setStatus(g.id, Under Review')}>Under Review</button>
                    <button className=px-2 py-1 bg-emerald-600 text-white rounded" onClick={() => setStatus(g.id, 'Approved)}>Approve</button>
                    <button className="px-2 py-1 bg-red-600 text-white rounded onClick={() => setStatus(g.id, Rejected')}>Reject</button>
                    <button className=px-2 py-1 border rounded" onClick={() => setSelected(g)}>Milestones</button>
                  </div>
                </div>
              </div>
            ))}
            {items.length === 0 && <div className="text-sm text-gray-600>No submitted applications.</div>}
          </div>
        </div>
        <div>
          <div className=border rounded p-3">
            <h2 className="font-medium mb-2>Milestone Planner</h2>
            {selected ? (
              <div className=space-y-2">
                {(milestones.length === 0 ? (selected.milestones || []) : milestones).map((m, idx) => (
                  <div key={m.id || idx} className="border rounded p-2>
                    <input className=w-full border rounded p-2 mb-2" placeholder="Title value={m.title} onChange={(e) => setMilestones((ms) => { const copy = (ms.length ? [...ms] : [...(selected.milestones || [])]), copy[idx] = { ...copy[idx], title: e.target.value }, return copy })} />
                    <textarea className=w-full border rounded p-2 mb-2" placeholder="Description value={m.description || '} onChange={(e) => setMilestones((ms) => { const copy = (ms.length ? [...ms] : [...(selected.milestones || [])]), copy[idx] = { ...copy[idx], description: e.target.value }, return copy })} />
                    <div className=grid grid-cols-2 gap-2">
                      <input className="border rounded p-2 placeholder=Due date (YYYY-MM-DD)" value={m.dueDate || '} onChange={(e) => setMilestones((ms) => { const copy = (ms.length ? [...ms] : [...(selected.milestones || [])]), copy[idx] = { ...copy[idx], dueDate: e.target.value }, return copy })} />
                      <input className="border rounded p-2 placeholder=Tranche (amount)" type="number value={m.trancheAmount || 0} onChange={(e) => setMilestones((ms) => { const copy = (ms.length ? [...ms] : [...(selected.milestones || [])]), copy[idx] = { ...copy[idx], trancheAmount: Number(e.target.value) }, return copy })} />
                    </div>
                    <div className=mt-2 flex items-center gap-2">
                      <button className="px-2 py-1 border rounded onClick={() => markComplete(m.id!)} disabled={!m.id}>Mark Complete</button>
                    </div>
                  </div>
                ))}
                <div className=flex gap-2 mt-2">
                  <button className="px-2 py-1 border rounded onClick={() => setMilestones((ms) => [...(ms.length ? ms : (selected.milestones || [])), { id: `${Date.now()}-${Math.random()}`, title: ', trancheAmount: 0, trancheCurrency: USDC' } as any])}>Add Milestone</button>
                  <button className=px-2 py-1 bg-blue-600 text-white rounded" onClick={saveMilestones}>Save Milestones</button>
                </div>
              </div>

>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
            )}
          </div>
        </div>
      </div>
    </EnhancedLayout>

            )}
          </div>;
        </div>;
      </div>;
    </EnhancedLayout>;
<<<<<<< HEAD
  ))}
=======
  );

  );
}