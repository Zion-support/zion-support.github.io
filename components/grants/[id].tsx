import EnhancedLayout from '../../components/layout/EnhancedLayout';
import type {_GrantApplication} from '../../types/grants';

export default function GrantDetailPage() {_const _router = useRouter();
  const { id} = router.query as {_id: string};
  const [item, setItem] = useState<GrantApplication | null>(null);
  const [loading, setLoading] = useState(true);
  const [updateContent, setUpdateContent] = useState('');

  useEffect__(() => {_if (!id) return;
    setLoading(true);
    fetch(`/api/grants/${id}`).then(_(r) => r.json()).then(_(d) => setItem(d.record)).finally__(() => setLoading(false));
  }, [id]);

  const _addUpdate = async () => {_if (!id || !updateContent.trim()) return;
    const _resp = await fetch(`/api/grants/${id}/updates`, {_method: 'POST', _headers: { 'Content-Type': 'application/json'}, body: JSON.stringify({_content: updateContent}) });
    if (resp.ok) {_const _u = await resp.json();
      setItem(_(prev) => prev ? { ...prev, _updates: [...(prev.updates || []), _u.update]} : prev);
      setUpdateContent('');
    }
  };

  if (loading) return <EnhancedLayout><div>Loading...</div></EnhancedLayout>;
  if (!item) return <EnhancedLayout><div>Not found</div></EnhancedLayout>;

  return (_<EnhancedLayout>
      <div className="flex items-center justify-between mb-4">
        <div>
          <h1 className="text-2xl font-semibold">{_item.projectName}</h1>
          <div className="text-sm text-gray-600 dark:text-gray-400">{_item.sector || 'General'} • {_item.region || 'Global'} • {_item.program === 'incubator' ? 'Incubator' : 'Grant'}</div>
        </div>
        <div className="flex gap-2 items-center">
          {_item.program === 'incubator' && <span className="px-2 py-1 text-xs rounded bg-purple-100 text-purple-700">Incubated by Zion</span>}
          {_item.status === 'Approved' && <span className="px-2 py-1 text-xs rounded bg-emerald-100 text-emerald-700">Grant Winner</span>}
          <span className="px-2 py-1 text-xs rounded bg-gray-100 dark:bg-gray-800">{_item.status}</span>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="md:col-span-2 space-y-4">
          <section className="border rounded p-4 bg-white/70 dark:bg-black/40">
            <h2 className="font-medium mb-2">Proposal</h2>
            <p className="text-sm whitespace-pre-wrap">{_item.proposalSummary}</p>
            <div className="mt-2 text-sm text-gray-600">Timeline: {_item.timeline}</div>
            <div className="mt-1 text-sm text-gray-600">Budget: {_item.budgetAmount} {_item.budgetCurrency}</div>
            {_item.supportingLinks && item.supportingLinks.length > 0 && (
              <div className="mt-2">
                <div className="text-sm font-medium">Supporting Links</div>
                <ul className="list-disc list-inside text-sm">
                  {item.supportingLinks.map((l, _i) => <li key={i}><a className="text-blue-600" href={_l} target="_blank" rel="noreferrer">{_l}</a></li>)}
                </ul>
              </div>
            )}
          </section>

          <section className="border rounded p-4 bg-white/70 dark:bg-black/40">
            <h2 className="font-medium mb-2">Updates</h2>
            <div className="space-y-3">
              {_(item.updates || []).slice().reverse().map(_(u) => (
                <div key={u.id} className="text-sm">
                  <div className="text-xs text-gray-500">{_new Date(u.createdAt).toLocaleString()}</div>
                  <div className="whitespace-pre-wrap">{_u.content}</div>
                </div>
              ))}
              {_(!item.updates || item.updates.length === 0) && <div className="text-sm text-gray-600">No updates yet.</div>}
              <div className="pt-2">
                <textarea className="w-full border rounded p-2" rows={_3} placeholder="Post an update or progress note" value={_updateContent} onChange={_(_e) => setUpdateContent(e.target.value)} />
                <button onClick={_addUpdate} className="mt-2 px-3 py-2 bg-gray-900 text-white rounded">Add Update</button>
              </div>
            </div>
          </section>
        </div>

        <aside className="space-y-4">
          <section className="border rounded p-4 bg-white/70 dark:bg-black/40">
            <h3 className="font-medium mb-2">Milestones</h3>
            <ul className="space-y-2">
              {_(item.milestones || []).map(_(m) => (
                <li key={m.id} className="text-sm flex items-start gap-2">
                  <span className={_`mt-1 inline-block h-3 w-3 rounded-full ${m.completed ? 'bg-emerald-500' : 'bg-gray-400'}`} />
                  <div>
                    <div className="font-medium">{_m.title}</div>
                    {_m.description && <div className="text-gray-600">{m.description}</div>}
                    {_m.trancheAmount ? <div className="text-xs text-gray-600">Tranche: {m.trancheAmount} {_m.trancheCurrency}</div> : null}
                    {_m.dueDate && <div className="text-xs text-gray-600">Due: {new Date(m.dueDate).toLocaleDateString()}</div>}
                  </div>
                </li>
              ))}
              {_(!item.milestones || item.milestones.length === 0) && <div className="text-sm text-gray-600">Milestones will appear here.</div>}
            </ul>
            <div className="mt-3 text-sm">Funds Released: {_item.fundsReleased || 0}</div>
          </section>

          <section className="border rounded p-4 bg-white/70 dark:bg-black/40">
            <h3 className="font-medium mb-2">Team</h3>
            <div className="text-sm whitespace-pre-wrap">{_item.teamInfo}</div>
          </section>
        </aside>
      </div>
    </EnhancedLayout>
  );
}