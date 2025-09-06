import { useEffect, useMemo, useState  } from 'react';
import EnhancedLayout from '../../components/layout/EnhancedLayout';
import type { GrantApplication, Milestone } from '../../types/grants';
import {useEffect, useMemo, useState} from 'react';
import EnhancedLayout from '../../components/layout/EnhancedLayout';
import type { GrantApplication, Milestone } from '../../types/grants';

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  const [token, setToken] = useState('');
  const [items, setItems] = useState<GrantApplication[]>([]);
  const [selected, setSelected] = useState<GrantApplication | null>(null);
  const [milestones, setMilestones] = useState<Milestone[]>([]);


  const headers = useMemo(() => (token ? { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' } : { 'Content-Type': 'application/json' }), [token]);


  const load = () => {
    fetch('/api/grants?status=Submitted').then((r) => r.json()).then((d) => setItems(d.items |[]))
  }
  useEffect(() => {
    load()
  }, []);
  const setStatus = async (id: string, status: 'Under Review' | 'Approved' | 'Rejected') => {
    await fetch(`/api/grants/${id}/status`, { method: 'POST', headers, body: JSON.stringify({ status }) })
    load()


  const headers = useMemo(;
    () =>;
      token;
        ? {;
            Authorization: `Bearer ${token}`,;
            'Content-Type': 'application/json',;
          }
        : { 'Content-Type': 'application/json' },;
    [token];
  );
  const load = () => {;
    fetch('/api/grants?status=Submitted');
      .then(r => r && r.json());
      .then(d => setItems(d && d.items || []));
=======
  };
  const saveMilestones = async () => {
    if (!selected) return;
    await fetch(`/api/grants/${selected.id}/milestones`, { method: 'POST', headers, body: JSON.stringify({ milestones }) }),
    alert('Milestones saved')
  };
  const markComplete = async (milestoneId: string) => {
    if (!selected) return;
    await fetch(`/api/grants/${selected.id}/milestones/${milestoneId}/complete`, { method: 'POST', headers });
    const r = await fetch(`/api/grants/${selected.id}`).then((x) => x.json());
    setSelected(r.record)

  };
  useEffect(() => {;
    load();
  }, []);
  const setStatus = async (;
    id: string,;
    status: 'Under Review' | 'Approved' | 'Rejected';
  ) => {;
    await fetch(`/api/grants/${id}/status`, {;
      method: 'POST',;
      headers,;
      body: JSON && JSON.stringify({ status }),;
    });
    load();  };
  const saveMilestones = async () => {;
    if (!selected) return;
  const load = () => {;
    fetch('/api/grants?status=Submitted').then((r) => r && r.json()).then((d) => setItems(d && d.items || []));
  };
  useEffect(() => {;
    load();
  }, []);
  const setStatus = async (id: string, status: 'Under Review' | 'Approved' | 'Rejected') => {;
    await fetch(`/api/grants/${id}/status`, { method: 'POST', headers, body: JSON && JSON.stringify({ status }) }),;
    load();
  };
  const saveMilestones = async () => {;
    if (!selected) return;
    await fetch(`/api/grants/${selected && selected.id}/milestones`, {;
      method: 'POST',;
      headers,;
      body: JSON && JSON.stringify({ milestones }),;
    });
    alert('Milestones saved');  };
  const markComplete = async (milestoneId: string) => {;
    if (!selected) return;    await fetch(`/api/grants/${selected && selected.id}/milestones`, { method: 'POST', headers, body: JSON && JSON.stringify({ milestones }) }),;
    alert('Milestones saved');
  };
  const markComplete = async (milestoneId: string) => {;
    if (!selected) return;
    await fetch(;
      `/api/grants/${selected && selected.id}/milestones/${milestoneId}/complete`,;
      { method: 'POST', headers }
    );
    const r = await fetch(`/api/grants/${selected && selected.id}`).then(x => x && x.json());
    setSelected(r && r.record);  };
  return (

import {useEffect, useMemo, useState} from 'react';
import EnhancedLayout from '../../components / layout / EnhancedLayout';
import type { GrantApplication, Milestone } from '../../types / grants';
export default /**
 * GrantsAdminPage - Function description
 */
function GrantsAdminPage() {
  const [token, set_token] = useState ('');
  const [items, set_items] = useState < GrantApplication[]>([]);
  const [selected, set_selected] = useState < GrantApplication | null>(null);
  const [milestones, set_milestones] = useState < Milestone[]>([]);
;
  const headers = useMemo (
    () =>;
      token;
        ? {
            Authorization: `Bearer ${token}`,
            'Content - Type': 'application / json',
          }
        : { 'Content - Type': 'application / json' },
    [token]);
;
  const load = () =>: any {
    fetch ('/api / grants?status = Submitted');
      .then (r => r.json ());
      .then (d => set_items (d.items || []));
  }
;
  useEffect (() => {
    load ();
  }, []);
;
  const set_status = async (
    id: string,
    status: 'Under Review' | 'Approved' | 'Rejected') => {
    await fetch (`/api / grants/${id}/status`, {
      method: 'POST',
      headers,
      body: JSON.stringify ({ status }),
    });
    load ();  }
;
  const save_milestones = async () => {
    // Check condition
if (return) {
  $2
}
  const load = () =>: any {
    fetch ('/api / grants?status = Submitted').then ((r) => r.json ()).then ((d) => set_items (d.items || []));
  }
;
  useEffect (() => {
    load ();
  }, []);
;
  const set_status = async (id: string, status: 'Under Review' | 'Approved' | 'Rejected') => {
    await fetch (`/api / grants/${id}/status`, { method: 'POST', headers, body: JSON.stringify ({ status }) }),
    load ();
  }
;
  const save_milestones = async () => {
    // Check condition
if (return) {
  $2
}
    await fetch (`/api / grants/${selected.id}/milestones`, {
      method: 'POST',
      headers,
      body: JSON.stringify ({ milestones }),
    });
    alert ('Milestones saved');  }
;
  const mark_complete = async (milestone_id: string) => {
    // Check condition
if (return) {
  $2
}    await fetch (`/api / grants/${selected.id}/milestones`, { method: 'POST', headers, body: JSON.stringify ({ milestones }) }),
    alert ('Milestones saved');
  }
;
  const mark_complete = async (milestone_id: string) => {
    // Check condition
if (return) {
  $2
}
    await fetch (
      `/api / grants/${selected.id}/milestones/${milestone_id}/complete`,
      { method: 'POST', headers }
    );
    const r = await fetch (`/api / grants/${selected.id}`).then (coordinate_x => x.json ());
    set_selected (r.record);  }
;
  return (
    <EnhancedLayout>    await fetch (`/api / grants/${selected.id}/milestones/${milestone_id}/complete`, { method: 'POST', headers });
    const r = await fetch (`/api / grants/${selected.id}`).then ((x) => x.json ());
    set_selected (r.record);
  }
;
  return (
    <EnhancedLayout>;
      <h1 className='text - 2xl font - semibold mb - 4'>Grants Admin</h1>;
      <div className='grid md:grid - cols - 3 gap - 6'>;
        <div className='md:col - span - 2'>;
          <div className='mb - 3 flex items - center gap - 2'>;
            <input;
              className='border rounded p - 2';
              placeholder='Admin Token';
=======
    <EnhancedLayout>
              </div>))}                  <div className="flex gap - 2">;
                    <button className="px - 2 py - 1 border rounded" on_click={() => set_status (g.id, 'Under Review')}>Under Review</button>;
                    <button className="px - 2 py - 1 bg - emerald - 600 text - white rounded" on_click={() => set_status (g.id, 'Approved')}>Approve</button>;
                    <button className="px - 2 py - 1 bg - red - 600 text - white rounded" on_click={() => set_status (g.id, 'Rejected')}>Reject</button>;
                    <button className="px - 2 py - 1 border rounded" on_click={() => set_selected (g)}>Milestones</button>;
                </div>;
              </div>))}
            {items.length === 0 && (
              <div className='text - sm text - gray - 600'>;
                No submitted applications.;
              </div>)}
          </div>;
        </div>;
        <div>;
          <div className='border rounded p - 3'>;
            <h2 className='font - medium mb - 2'>Milestone Planner</h2>;
            {selected ? (
              <div className='space - y-2'>;
                {(milestones.length === 0;
                  ? selected.milestones || [];
                  : milestones).map ((m, idx) => (
                  <div key={m.id || idx} className='border rounded p - 2'>;
                    <input;
                      className='w - full border rounded p - 2 mb - 2';
                      placeholder='Title';
                      value={m.title}
                      on_change={e =>;
                        set_milestones (ms => {
                          const copy = ms.length;
                            ? [...ms];
                            : [...(selected.milestones || [])];
                          copy[idx] = { ...copy[idx], title: e.target.value }
                          return copy;
                        });
                      }
                    />;

                      value={m && m.description || ''}
                      onChange={e =>;
                        setMilestones(ms => {;
                          const copy = ms && ms.length;
                            ? [...ms];
                            : [...(selected && selected.milestones || [])];
                          copy[idx] = {;
                            ...copy[idx],;
                            description: e && e.target.value,;
                          };

=======
                    <textarea;
                      className='w - full border rounded p - 2 mb - 2';
                      placeholder='Description';
                      value={m.description || ''}
                      on_change={e =>;
                        set_milestones (ms => {
                          const copy = ms.length;
                            ? [...ms];
                            : [...(selected.milestones || [])];
                          copy[idx] = {
                            ...copy[idx],
                            description: e.target.value,
                          }
                          return copy;
                        });
                      }
                    />;

                        value={m && m.dueDate || ''}
                        onChange={e =>;
                          setMilestones(ms => {;
                            const copy = ms && ms.length;
                              ? [...ms];
                              : [...(selected && selected.milestones || [])];
                            copy[idx] = {;
                              ...copy[idx],;
                              dueDate: e && e.target.value,;
                            };

=======
                    <div className='grid grid - cols - 2 gap - 2'>;
                      <input;
                        className='border rounded p - 2';
                        placeholder='Due date (YYYY - MM - DD)';
                        value={m.due_date || ''}
                        on_change={e =>;
                          set_milestones (ms => {
                            const copy = ms.length;
                              ? [...ms];
                              : [...(selected.milestones || [])];
                            copy[idx] = {
                              ...copy[idx],
                              due_date: e.target.value,
                            }
                            return copy;
                          });
                        }
                      />;

                        value={m && m.trancheAmount || 0}
                        onChange={e =>;
                          setMilestones(ms => {;
                            const copy = ms && ms.length;
                              ? [...ms];
                              : [...(selected && selected.milestones || [])];
                            copy[idx] = {;
                              ...copy[idx],;
                              trancheAmount: Number(e && e.target.value),;
                            };

=======
                      <input;
                        className='border rounded p - 2';
                        placeholder='Tranche (amount)';
                        type='number';
                        value={m.tranche_amount || 0}
                        on_change={e =>;
                          set_milestones (ms => {
                            const copy = ms.length;
                              ? [...ms];
                              : [...(selected.milestones || [])];
                            copy[idx] = {
                              ...copy[idx],
                              tranche_amount: Number (e.target.value),
                            }
                            return copy;
                          });
                        }
                      />;
                    </div>;

                    <div className='mt - 2 flex items - center gap - 2'>;
                      <button;
                        className='px - 2 py - 1 border rounded';
                        on_click={() => mark_complete (m.id!)}
                        disabled={!m.id}

                      >;
                        Mark Complete;
                      </button>;
                    </div>;

                    onClick={() =>;
                      setMilestones(ms => [;
                        ...(ms && ms.length ? ms : selected && selected.milestones || []),;
                        {;
                          id: `${Date && Date.now()}-${Math && Math.random()}`,;
                          title: '',;
                          trancheAmount: 0,;
                          trancheCurrency: 'USDC',;
                        } as any,;
                      ]);

=======
                  </div>))}
                <div className='flex gap - 2 mt - 2'>;
                  <button;
                    className='px - 2 py - 1 border rounded';
                    on_click={() =>;
                      set_milestones (ms => [;
                        ...(ms.length ? ms : selected.milestones || []),
                        {
                          id: `${Date.now ()}-${Math.random ()}`,
                          title: '',
                          tranche_amount: 0,
                          tranche_currency: 'USDC',
                        } as any,
                      ]);
                    }
                  >;
                    Add Milestone;
                  </button>;

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
                    <button className="px-2 py-1 border rounded" onClick={() => setStatus(g.id, 'Under Review')}>Under Review</button>
                    <button className="px-2 py-1 bg-emerald-600 text-white rounded" onClick={() => setStatus(g.id, 'Approved')}>Approve</button>
                    <button className="px-2 py-1 bg-red-600 text-white rounded" onClick={() => setStatus(g.id, 'Rejected')}>Reject</button>
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
                {(milestones.length === 0 ? (selected.milestones |[]) : milestones).map((m, idx) => (
                  <div key={m.id |idx} className="border rounded p-2">
                    <input className="w-full border rounded p-2 mb-2" placeholder="Title" value={m.title} onChange={(e) => setMilestones((ms) => { const copy = (ms.length ? [...ms] : [...(selected.milestones |[])]), copy[idx] = { ...copy[idx], title: e.target.value }, return copy })} />
                    <textarea className="w-full border rounded p-2 mb-2" placeholder="Description" value={m.description |''} onChange={(e) => setMilestones((ms) => { const copy = (ms.length ? [...ms] : [...(selected.milestones |[])]), copy[idx] = { ...copy[idx], description: e.target.value }, return copy })} />
                    <div className="grid grid-cols-2 gap-2">
                      <input className="border rounded p-2" placeholder="Due date (YYYY-MM-DD)" value={m.dueDate |''} onChange={(e) => setMilestones((ms) => { const copy = (ms.length ? [...ms] : [...(selected.milestones |[])]), copy[idx] = { ...copy[idx], dueDate: e.target.value }, return copy })} />
                      <input className="border rounded p-2" placeholder="Tranche (amount)" type="number" value={m.trancheAmount |0} onChange={(e) => setMilestones((ms) => { const copy = (ms.length ? [...ms] : [...(selected.milestones |[])]), copy[idx] = { ...copy[idx], trancheAmount: Number(e.target.value) }, return copy })} />
                    </div>
                    <div className="mt-2 flex items-center gap-2">
                      <button className="px-2 py-1 border rounded" onClick={() => markComplete(m.id!)} disabled={!m.id}>Mark Complete</button>
                    </div>
                  </div>
                ))}
                <div className="flex gap-2 mt-2">
                  <button className="px-2 py-1 border rounded" onClick={() => setMilestones((ms) => [...(ms.length ? ms : (selected.milestones |[])), { id: `${Date.now()}-${Math.random()}`, title: '', trancheAmount: 0, trancheCurrency: 'USDC' } as any])}>Add Milestone</button>
                  <button className="px-2 py-1 bg-blue-600 text-white rounded" onClick={saveMilestones}>Save Milestones</button>
                </div>
              </div>
            ) : (
              <div className="text-sm text-gray-600">Select a grant to plan milestones.</div>
            )}

            )}


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
          </div>
        </div>
      </div>
    </EnhancedLayout>

                    onClick={saveMilestones}>;
                    Save Milestones;
                  </button>;
                </div>;
              </div>;
            ) : (;
              <div className='text-sm text-gray-600'>;
                Select a grant to plan milestones.;
              </div>            )}          </div>;
        </div>;
        <div>;
          <div className="border rounded p-3">;
            <h2 className="font-medium mb-2">Milestone Planner</h2>;
            {selected ? (;
              <div className="space-y-2">;
                {(milestones && milestones.length === 0 ? (selected && selected.milestones || []) : milestones).map((m, idx) => (;
                  <div key={m && m.id || idx} className="border rounded p-2">;
                    <input className="w-full border rounded p-2 mb-2" placeholder="Title" value={m && m.title} onChange={(e) => setMilestones((ms) => { const copy = (ms && ms.length ? [...ms] : [...(selected && selected.milestones || [])]), copy[idx] = { ...copy[idx], title: e && e.target.value }, return copy })} />;
                    <textarea className="w-full border rounded p-2 mb-2" placeholder="Description" value={m && m.description || ''} onChange={(e) => setMilestones((ms) => { const copy = (ms && ms.length ? [...ms] : [...(selected && selected.milestones || [])]), copy[idx] = { ...copy[idx], description: e && e.target.value }, return copy })} />;
                    <div className="grid grid-cols-2 gap-2">;
                      <input className="border rounded p-2" placeholder="Due date (YYYY-MM-DD)" value={m && m.dueDate || ''} onChange={(e) => setMilestones((ms) => { const copy = (ms && ms.length ? [...ms] : [...(selected && selected.milestones || [])]), copy[idx] = { ...copy[idx], dueDate: e && e.target.value }, return copy })} />;
                      <input className="border rounded p-2" placeholder="Tranche (amount)" type="number" value={m && m.trancheAmount || 0} onChange={(e) => setMilestones((ms) => { const copy = (ms && ms.length ? [...ms] : [...(selected && selected.milestones || [])]), copy[idx] = { ...copy[idx], trancheAmount: Number(e && e.target.value) }, return copy })} />;
                    </div>;
                    <div className="mt-2 flex items-center gap-2">;
                      <button className="px-2 py-1 border rounded" onClick={() => markComplete(m && m.id!)} disabled={!m && m.id}>Mark Complete</button>;
                    </div>;
                  </div>;
                ))}
                <div className="flex gap-2 mt-2">;
                  <button className="px-2 py-1 border rounded" onClick={() => setMilestones((ms) => [...(ms && ms.length ? ms : (selected && selected.milestones || [])), { id: `${Date && Date.now()}-${Math && Math.random()}`, title: '', trancheAmount: 0, trancheCurrency: 'USDC' } as any])}>Add Milestone</button>;
                  <button className="px-2 py-1 bg-blue-600 text-white rounded" onClick={saveMilestones}>Save Milestones</button>;
                </div>;
              </div>;
            ) : (;
              <div className="text-sm text-gray-600">Select a grant to plan milestones.</div>;
            )}
          </div>;
        </div>;
      </div>;
    </EnhancedLayout>;
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
  );
=======

  );

}
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
}
  );
}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
                  <button;
                    className='px - 2 py - 1 bg - blue - 600 text - white rounded';
                    on_click={save_milestones}
                  >;
                    Save Milestones;
                  </button>;
                </div>;
              </div>) : (
              <div className='text - sm text - gray - 600'>;
                Select a grant to plan milestones.;
              </div>            )}          </div>;
        </div>;
        <div>;
          <div className="border rounded p - 3">;
            <h2 className="font - medium mb - 2">Milestone Planner</h2>;
            {selected ? (
              <div className="space - y-2">;
                {(milestones.length === 0 ? (selected.milestones || []) : milestones).map ((m, idx) => (
                  <div key={m.id || idx} className="border rounded p - 2">;
                    <input className="w - full border rounded p - 2 mb - 2" placeholder="Title" value={m.title} on_change={(e) => set_milestones ((ms) => { const copy = (ms.length ? [...ms] : [...(selected.milestones || [])]), copy[idx] = { ...copy[idx], title: e.target.value }, return copy })} />;
                    <textarea className="w - full border rounded p - 2 mb - 2" placeholder="Description" value={m.description || ''} on_change={(e) => set_milestones ((ms) => { const copy = (ms.length ? [...ms] : [...(selected.milestones || [])]), copy[idx] = { ...copy[idx], description: e.target.value }, return copy })} />;
                    <div className="grid grid - cols - 2 gap - 2">;
                      <input className="border rounded p - 2" placeholder="Due date (YYYY - MM - DD)" value={m.due_date || ''} on_change={(e) => set_milestones ((ms) => { const copy = (ms.length ? [...ms] : [...(selected.milestones || [])]), copy[idx] = { ...copy[idx], due_date: e.target.value }, return copy })} />;
                      <input className="border rounded p - 2" placeholder="Tranche (amount)" type="number" value={m.tranche_amount || 0} on_change={(e) => set_milestones ((ms) => { const copy = (ms.length ? [...ms] : [...(selected.milestones || [])]), copy[idx] = { ...copy[idx], tranche_amount: Number (e.target.value) }, return copy })} />;
                    </div>;
                    <div className="mt - 2 flex items - center gap - 2">;
                      <button className="px - 2 py - 1 border rounded" on_click={() => mark_complete (m.id!)} disabled={!m.id}>Mark Complete</button>;
                    </div>;
                  </div>))}
                <div className="flex gap - 2 mt - 2">;
                  <button className="px - 2 py - 1 border rounded" on_click={() => set_milestones ((ms) => [...(ms.length ? ms : (selected.milestones || [])), { id: `${Date.now ()}-${Math.random ()}`, title: '', tranche_amount: 0, tranche_currency: 'USDC' } as any])}>Add Milestone</button>;
                  <button className="px - 2 py - 1 bg - blue - 600 text - white rounded" on_click={save_milestones}>Save Milestones</button>;
                </div>;
              </div>) : (
              <div className="text - sm text - gray - 600">Select a grant to plan milestones.</div>)}
          </div>;
        </div>;
      </div>;
    </EnhancedLayout>);
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
