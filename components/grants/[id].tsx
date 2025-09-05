<<<<<<< HEAD
import { useEffect, useState } from 'react',;
import { useRouter } from 'next/router',;
import EnhancedLayout from '../../components/layout/EnhancedLayout',;
import type { GrantApplication } from '../../types/grants',;
;
export default function GrantDetailPage() {;
  const router = useRouter(),;
  const { id } = router.query as { id:string },;
  const [item, setItem] = useState<GrantApplication | null>(null),;
  const [loading, setLoading] = useState(true),;
  const [updateContent, setUpdateContent] = useState(''),;
;
  useEffect(() => {;
    if (!id) return,;
    setLoading(true),;
    fetch(`/api/grants/${id}`).then((r) => r.json()).then((d) => setItem(d.record)).finally(() => setLoading(false)),;
  }, [id]),;
;
  const addUpdate = async () => {;
    if (!id || !updateContent.trim()) return,;
    const resp = await fetch(`/api/grants/${id}/updates`, { method:'POST', headers:{ 'Content-Type':'application/json' }, body:JSON.stringify({ content:updateContent }) }),;
    if (resp.ok) {;
      const u = await resp.json(),;
      setItem((prev) => prev ? { ...prev, updates:[...(prev.updates || []), u.update] } prev),;
      setUpdateContent(''),;
    }
  },;
;
  if (loading) return <EnhancedLayout><div>Loading...</div></EnhancedLayout>,;
  if (!item) return <EnhancedLayout><div>Not found</div></EnhancedLayout>,;
;
  return (;
    <EnhancedLayout>;
      <div className="flex items-center justify-between mb-4">;
        <div>;
          <h1 className="text-2xl font-semibold">{item.projectName}</h1>;
          <div className="text-sm text-gray-600 dark:text-gray-400">{item.sector || 'General'} • {item.region || 'Global'} • {item.program === 'incubator' ? 'Incubator' :'Grant'}</div>;
        </div>;
        <div className="flex gap-2 items-center">;
          {item.program === 'incubator' && <span className="px-2 py-1 text-xs rounded bg-purple-100 text-purple-700">Incubated by Zion</span>}
          {item.status === 'Approved' && <span className="px-2 py-1 text-xs rounded bg-emerald-100 text-emerald-700">Grant Winner</span>}
          <span className="px-2 py-1 text-xs rounded bg-gray-100 dark:bg-gray-800">{item.status}</span>;
        </div>;
      </div>;
;
      <div className="grid md:grid-cols-3 gap-6">;
        <div className="md:col-span-2 space-y-4">;
          <section className="border rounded p-4 bg-white/70 dark:bg-black/40">;
            <h2 className="font-medium mb-2">Proposal</h2>;
            <p className="text-sm whitespace-pre-wrap">{item.proposalSummary}</p>;
            <div className="mt-2 text-sm text-gray-600">Timeline:{item.timeline}</div>;
            <div className="mt-1 text-sm text-gray-600">Budget:{item.budgetAmount} {item.budgetCurrency}</div>;
            {item.supportingLinks && item.supportingLinks.length > 0 && (;
              <div className="mt-2">;
                <div className="text-sm font-medium">Supporting Links</div>;
                <ul className="list-disc list-inside text-sm">;
                  {item.supportingLinks.map((l, i) => <li key={i}><a className="text-blue-600" href={l} target="_blank" rel="noreferrer">{l}</a></li>)}
                </ul>;
              </div>;
            )}
          </section>;
;
          <section className="border rounded p-4 bg-white/70 dark:bg-black/40">;
            <h2 className="font-medium mb-2">Updates</h2>;
            <div className="space-y-3">;
              {(item.updates || []).slice().reverse().map((u) => (;
                <div key={u.id} className="text-sm">;
                  <div className="text-xs text-gray-500">{new Date(u.createdAt).toLocaleString()}</div>;
                  <div className="whitespace-pre-wrap">{u.content}</div>;
                </div>;
              ))}
              {(!item.updates || item.updates.length === 0) && <div className="text-sm text-gray-600">No updates yet.</div>}
              <div className="pt-2">;
                <textarea className="w-full border rounded p-2" rows={3} placeholder="Post an update or progress note" value={updateContent} onChange={(e) => setUpdateContent(e.target.value)} />;
                <button onClick={addUpdate} className="mt-2 px-3 py-2 bg-gray-900 text-white rounded">Add Update</button>;
              </div>;
            </div>;
          </section>;
        </div>;
;
        <aside className="space-y-4">;
          <section className="border rounded p-4 bg-white/70 dark:bg-black/40">;
            <h3 className="font-medium mb-2">Milestones</h3>;
            <ul className="space-y-2">;
              {(item.milestones || []).map((m) => (;
                <li key={m.id} className="text-sm flex items-start gap-2">;
                  <span className={`mt-1 inline-block h-3 w-3 rounded-full ${m.completed ? 'bg-emerald-500' :'bg-gray-400'}`} />;
                  <div>;
                    <div className="font-medium">{m.title}</div>;
                    {m.description && <div className="text-gray-600">{m.description}</div>}
                    {m.trancheAmount ? <div className="text-xs text-gray-600">Tranche:{m.trancheAmount} {m.trancheCurrency}</div> :null}
                    {m.dueDate && <div className="text-xs text-gray-600">Due:{new Date(m.dueDate).toLocaleDateString()}</div>}
                  </div>;
                </li>;
              ))}
              {(!item.milestones || item.milestones.length === 0) && <div className="text-sm text-gray-600">Milestones will appear here.</div>}
            </ul>;
            <div className="mt-3 text-sm">Funds Released:{item.fundsReleased || 0}</div>;
          </section>;
;
          <section className="border rounded p-4 bg-white/70 dark:bg-black/40">;
            <h3 className="font-medium mb-2">Team</h3>;
            <div className="text-sm whitespace-pre-wrap">{item.teamInfo}</div>;
          </section>;
        </aside>;
      </div>;
    </EnhancedLayout>;
  ),;
=======
import { useEffect, useState } from 'react',
import { useRouter } from 'next/router',
import EnhancedLayout from '../../components/layout/EnhancedLayout',
import type { GrantApplication } from '../../types/grants',
export default function GrantDetailPage() {
  const router = useRouter(),
  const { id } = router.query as { id: string },
  const [item, setItem] = useState<GrantApplication | null>(null),
  const [loading, setLoading] = useState(true),
  const [updateContent, setUpdateContent] = useState(''),

  useEffect(() => {
    if (!id) return,
    setLoading(true),
    fetch(`/api/grants/${id}`).then((r) => r.json()).then((d) => setItem(d.record)).finally(() => setLoading(false))
  }, [id]),

  const addUpdate = async () => {
    if (!id || !updateContent.trim()) return,
    const resp = await fetch(`/api/grants/${id}/updates`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ content: updateContent }) }),
    if (resp.ok) {
      const u = await resp.json(),
      setItem((prev) => prev ? { ...prev, updates: [...(prev.updates || []), u.update] } : prev),
      setUpdateContent('')    }
  },

  if (loading) return <EnhancedLayout><div>Loading...</div></EnhancedLayout>,
  if (!item) return <EnhancedLayout><div>Not found</div></EnhancedLayout>,

  return (
    <EnhancedLayout>
      <div className=&quot;flex items-center justify-between mb-4&quot;>
        <div>
          <h1 className=&quot;text-2xl font-semibold&quot;>{item.projectName}</h1>
          <div className=&quot;text-sm text-gray-600 dark:text-gray-400&quot;>{item.sector || 'General'} • {item.region || 'Global'} • {item.program === 'incubator' ? 'Incubator' : 'Grant'}</div>
        </div>
        <div className=&quot;flex gap-2 items-center&quot;>
          {item.program === 'incubator' && <span className=&quot;px-2 py-1 text-xs rounded bg-purple-100 text-purple-700&quot;>Incubated by Zion</span>}
          {item.status === 'Approved' && <span className=&quot;px-2 py-1 text-xs rounded bg-emerald-100 text-emerald-700&quot;>Grant Winner</span>}
          <span className=&quot;px-2 py-1 text-xs rounded bg-gray-100 dark:bg-gray-800&quot;>{item.status}</span>
        </div>
      </div>

      <div className=&quot;grid md:grid-cols-3 gap-6&quot;>
        <div className=&quot;md:col-span-2 space-y-4&quot;>
          <section className=&quot;border rounded p-4 bg-white/70 dark:bg-black/40&quot;>
            <h2 className=&quot;font-medium mb-2&quot;>Proposal</h2>
            <p className=&quot;text-sm whitespace-pre-wrap&quot;>{item.proposalSummary}</p>
            <div className=&quot;mt-2 text-sm text-gray-600&quot;>Timeline: {item.timeline}</div>
            <div className=&quot;mt-1 text-sm text-gray-600&quot;>Budget: {item.budgetAmount} {item.budgetCurrency}</div>
            {item.supportingLinks && item.supportingLinks.length > 0 && (
              <div className=&quot;mt-2&quot;>
                <div className=&quot;text-sm font-medium&quot;>Supporting Links</div>
                <ul className=&quot;list-disc list-inside text-sm&quot;>
                  {item.supportingLinks.map((l, i) => <li key={i}><a className=&quot;text-blue-600&quot; href={l} target=&quot;_blank&quot; rel=&quot;noreferrer&quot;>{l}</a></li>)}                </ul>
              </div>
            )}
          </section>

          <section className=&quot;border rounded p-4 bg-white/70 dark:bg-black/40&quot;>
            <h2 className=&quot;font-medium mb-2&quot;>Updates</h2>
            <div className=&quot;space-y-3&quot;>
              {(item.updates || []).slice().reverse().map((u) => (
                <div key={u.id} className=&quot;text-sm&quot;>
                  <div className=&quot;text-xs text-gray-500&quot;>{new Date(u.createdAt).toLocaleString()}</div>
                  <div className=&quot;whitespace-pre-wrap&quot;>{u.content}</div>
                </div>
              ))}
              {(!item.updates || item.updates.length === 0) && <div className=&quot;text-sm text-gray-600&quot;>No updates yet.</div>}
              <div className=&quot;pt-2&quot;>
                <textarea className=&quot;w-full border rounded p-2&quot; rows={3} placeholder=&quot;Post an update or progress note&quot; value={updateContent} onChange={(e) => setUpdateContent(e.target.value)} />
                <button onClick={addUpdate} className=&quot;mt-2 px-3 py-2 bg-gray-900 text-white rounded&quot;>Add Update</button>              </div>
            </div>
          </section>
        </div>

        <aside className=&quot;space-y-4&quot;>
          <section className=&quot;border rounded p-4 bg-white/70 dark:bg-black/40&quot;>
            <h3 className=&quot;font-medium mb-2&quot;>Milestones</h3>
            <ul className=&quot;space-y-2&quot;>
              {(item.milestones || []).map((m) => (
                <li key={m.id} className=&quot;text-sm flex items-start gap-2&quot;>
                  <span className={`mt-1 inline-block h-3 w-3 rounded-full ${m.completed ? 'bg-emerald-500' : 'bg-gray-400'}`} />
                  <div>
                    <div className=&quot;font-medium&quot;>{m.title}</div>
                    {m.description && <div className=&quot;text-gray-600&quot;>{m.description}</div>}
                    {m.trancheAmount ? <div className=&quot;text-xs text-gray-600&quot;>Tranche: {m.trancheAmount} {m.trancheCurrency}</div> : null}
                    {m.dueDate && <div className=&quot;text-xs text-gray-600&quot;>Due: {new Date(m.dueDate).toLocaleDateString()}</div>}
                  </div>
                </li>
              ))}
              {(!item.milestones || item.milestones.length === 0) && <div className=&quot;text-sm text-gray-600&quot;>Milestones will appear here.</div>}
            </ul>
            <div className=&quot;mt-3 text-sm&quot;>Funds Released: {item.fundsReleased || 0}</div>
          </section>

          <section className=&quot;border rounded p-4 bg-white/70 dark:bg-black/40&quot;>
            <h3 className=&quot;font-medium mb-2&quot;>Team</h3>
            <div className=&quot;text-sm whitespace-pre-wrap&quot;>{item.teamInfo}</div>          </section>
        </aside>
      </div>
    </EnhancedLayout>
  )
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
}