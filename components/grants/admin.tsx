import { useEffect, useMemo, useState  } from 'react';
import EnhancedLayout from '../../components/layout/EnhancedLayout';
import type { GrantApplication, Milestone } from '../../types/grants';
import {useEffect, useMemo, useState} from 'react';
import EnhancedLayout from '../../components/layout/EnhancedLayout';
import type { GrantApplication, Milestone } from '../../types/grants';

<<<<<<< HEAD

export default function GrantsAdminPage() {;

export default function GrantsAdminPage() {

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee

export default function GrantsAdminPage() {
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
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


<<<<<<< HEAD
=======
            )}


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
          </div>
        </div>
      </div>
    </EnhancedLayout>

<<<<<<< HEAD

}
  );
}


=======
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
  );
=======

  );

}
=======

}
  );
}
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
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
<<<<<<< HEAD

  );
}

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
