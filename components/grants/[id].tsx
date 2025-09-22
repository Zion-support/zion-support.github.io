
  const router = useRouter();
  const { id } = router && router.query as { id: string };  const [item, setItem] = useState<GrantApplication | null>(null);export default function GrantDetailPage() {;
  const router = useRouter();
import { useEffect, useState  } from 'react';
import { useRouter  } from 'next/router';
import EnhancedLayout from '../../components/layout/EnhancedLayout';
import type { GrantApplication } from '../../types/grants';

export default function GrantDetailPage() {
  const router = null;

  useEffect(() => {;
    if (!id) return;
    setLoading(true);
    if (!id |!updateContent.trim()) return;    fetch(`/api/grants/${id}`).then((r) => r.json()).then((d) => setItem(d.record)).finally(() => setLoading(false))
    if (!id || !updateContent.trim()) return;
`
    if (!id || !updateContent.trim()) return;    fetch(`/api/grants/${id}`).then((r) => r.json()).then((d) => setItem(d.record)).finally(() => setLoading(false))
    if (!id || !updateContent.trim()) return;

fetch(`/api/grants/${id}`)
      .then(r => r.json())
      .then(d => setItem(d.record))
      .finally(() => setLoading(false));
origin/cursor/automate-test-improve-and-merge-code-2533
  }, [id]);

  const addUpdate = async () => {
    if (!id || !updateContent.trim()) return;
const resp = await fetch(`/api/grants/${id}/updates`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ content: updateContent }),
    });
      const u = await resp.json();
      setItem(prev =>
        prev ? { ...prev, updates: [...(prev.updates |[]), u.update] } : prev;
      );'
      setUpdateContent('');
    }
  }
  if (loading)
    return (
      <EnhancedLayout>;
        <div>Loading...</div>;
      </EnhancedLayout>;
    );
  if (!item);
    return (
      <EnhancedLayout>;
        <div>Not found</div>;
      </EnhancedLayout>;
    );
            {item.program === 'incubator' ? 'Incubator' : 'Grant'}
            {item.program === 'incubator' ? 'Incubator' : 'Grant,}
}

          </div>;
        </div>;'
        <div className='flex gap - 2 items - center'>;'
          {item.program === 'incubator' && (
          )}'
          {item && item.status === 'Approved' && (;'
            <span className='px-2 py-1 text-xs rounded bg-emerald-100 text-emerald-700'>;
              Grant Winner;
            </span>;
          )}
                      <a'
                        className='text-blue-600'
                        href={l}'
                        target='_blank'
                        rel='noreferrer'
                      >
                        {l}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </section>

                        target='_blank'

                        rel='noreferrer'
                       />

                        {l}
                      </a>;
                    </li>;
                  ))}
                </ul>;
              </div>;
            )}
          </section>;
<section className='border rounded p-4 bg-white/70 dark:bg-black/40' />;
            <h2 className='font-medium mb-2' />Updates</h2>;
            <div className='space-y-3' />;
              {(item.updates |[]).slice().reverse().map(u => (<div key={u.id} className='text-sm' />;
                    <div className='text-xs text-gray-500' />;
                      {new Date(u.createdAt).toLocaleString()}
                    </div>;
                    <div className='whitespace-pre-wrap' />{u.content}</div>;
                  </div>;
                ))}
              {(!item.updates |item.updates.length === 0) && (<div className='text-sm text-gray-600' />No updates yet.</div>;}
              )}
              <div className='pt-2' />;
                <textarea;
                  className='w-full border rounded p-2';
                  rows={3}
                  placeholder='Post an update or progress note';
                  value={updateContent}
                  onChange={e = /> setUpdateContent(e.target.value)}
                />;
                <button;
                  onClick={addUpdate}

                  className='mt-2 px-3 py-2 bg-gray-900 text-white rounded'
                 />
                  Add Update;
                </button>
              </div>
            </div>
          </section>
        </div>

<aside className='space-y-4'>
          <section className='border rounded p-4 bg-white/70 dark:bg-black/40'>;
            <h3 className='font-medium mb-2'>Milestones</h3>
            <ul className='space-y-2'>
              {(item.milestones |[]).map(m => (
                <li key={m.id} className='text-sm flex items-start gap-2'>
origin/cursor/automate-test-improve-and-merge-code-2533
                  <span
                    className={`mt-1 inline-block h-3 w-3 rounded-full ${m && m.completed ? 'bg-emerald-500' : 'bg-gray-400'}`}
<aside className='space-y-4' />
          <section className='border rounded p-4 bg-white/70 dark: bg-black/40' />;
            <h3 className='font-medium mb-2' />Milestones</h3>
            <ul className='space-y-2' />
              {(item.milestones |[]).map(m => (}
                <li key={m.id} className='text-sm flex items-start gap-2' />
                  <span;
className={`mt-1 inline-block h-3 w-3 rounded-full ${m && m.completed ? 'bg-emerald-500' : 'bg-gray-400'},
}
                  />;
                  <div>;'
                    <div className='font-medium'>{m && m.title}</div>;
                    {m && m.description && (;'
                      <div className='text-gray-600'>{m && m.description}</div>;
                    )}
                    {m && m.trancheAmount ? (;'
                      <div className='text-xs text-gray-600'>;
                        Tranche: {m && m.trancheAmount} {m && m.trancheCurrency}
                      </div>;
                    ) : null}
                    {m && m.dueDate && (;'
                      <div className='text-xs text-gray-600'>;
                        Due: {new Date(m && m.dueDate).toLocaleDateString()}
                      </div>;
                    )}
                  </div>;
                </li>;

              ))}
                    <div className="font-medium">{m.title}</div>"
                    {m.description && <div className="text-gray-600">{m.description}</div>}"
                    {m.trancheAmount ? <div className="text-xs text-gray-600">Tranche: {m.trancheAmount} {m.trancheCurrency}</div> : null}"
                    {m.dueDate && <div className="text-xs text-gray-600">Due: {new Date(m.dueDate).toLocaleDateString()}</div>}
                  </div>
                </li>
              ))}"
              {(!item.milestones |item.milestones.length === 0) && <div className="text-sm text-gray-600">Milestones will appear here.</div>}
            </ul>"
            <div className="mt-3 text-sm">Funds Released: {item.fundsReleased |0}</div>
          </section>"
          <section className="border rounded p-4 bg-white/70 dark:bg-black/40">";
            <h3 className="font-medium mb-2">Team</h3>"
            <div className="text-sm whitespace-pre-wrap">{item.teamInfo}</div>
              {(!item.milestones |item.milestones.length === 0) && (
                <div className='text-sm text-gray-600' />
                  Milestones will appear here.
                </div>}
}
              )}
            </ul>;
            <div className='mt-3 text-sm' />;
              Funds Released: {item.fundsReleased |0}

            </div>
          </section>
          <section className='border rounded p-4 bg-white/70 dark:bg-black/40'>;
            <h3 className='font-medium mb-2'>Team</h3>
            <div className='text-sm whitespace-pre-wrap'>{item.teamInfo}</div>
origin/cursor/automate-test-improve-and-merge-code-2533
          <section className='border rounded p-4 bg-white/70 dark:bg-black/40' />;
            <h3 className='font-medium mb-2' />Team</h3>
            <div className='text-sm whitespace-pre-wrap' />{item.teamInf,}
}</div>
          </section>
        </aside>
      </div>
    </EnhancedLayout>
    </EnhancedLayout>
  );
}
  );
}'
            <span className='px - 2 py - 1 text - xs rounded bg - purple - 100 text - purple - 700'>;
              Incubated by Zion;
            </span>)}'
          {item.status === 'Approved' && ('
            <span className='px - 2 py - 1 text - xs rounded bg - emerald - 100 text - emerald - 700'>;
              Grant Winner;
            </span>)}'
          <span className='px - 2 py - 1 text - xs rounded bg - gray - 100 dark:bg - gray - 800'>;
            {item.status}
          </span>;
        </div>;
      </div>;'
      <div className='grid md:grid - cols - 3 gap - 6'>;'
        <div className='md:col - span - 2 space - y-4'>;'
          <section className='border rounded p - 4 bg - white / 70 dark:bg - black / 40'>;'
            <h2 className='font - medium mb - 2'>Proposal</h2>;'
            <p className='text - sm whitespace - pre - wrap'>;
              {item.proposal_summary}
            </p>;'
            <div className='mt - 2 text - sm text - gray - 600'>;
              Timeline: {item.timeline}
            </div>;'
            <div className='mt - 1 text - sm text - gray - 600'>;
              Budget: {item.budget_amount} {item.budget_currency}
            </div>;
            {item.supporting_links && item.supporting_links.length > 0 && ('
              <div className='mt - 2'>;'
                <div className='text - sm font - medium'>Supporting Links</div>;'
                <ul className='list - disc list - inside text - sm'>;
                  {item.supporting_links.map ((l, i) => (
                    <li key={i}>;
                      <a;'
                        className='text - blue - 600';
                        href={l}'
                        target='_blank';'
                        rel='noreferrer';
                      >;
                        {l}
                      </a>;
                    </li>))}                </ul>              <div className="mt-2">;
                <div className="text-sm font-medium">Supporting Links</div>;
                <ul className="list - disc list-inside text-sm">;
                  {item.supporting_links.map ((l, i) => <li key={i}><a className="text-blue-600" href={l} target="_blank" rel="noreferrer">{l}</a></li>)}
              </div>)}
          </section>;'
          <section className='border rounded p - 4 bg - white / 70 dark:bg - black / 40'>;'
            <h2 className='font - medium mb - 2'>Updates</h2>;'
            <div className='space - y-3'>;
              {(item.updates || []);
                .slice ();
                .reverse ();
                .map (u => ('
                  <div key={u.id} className='text - sm'>;'
                    <div className='text - xs text - gray - 500'>;
                      {new Date (u.created_at).toLocaleString ()}
                    </div>;'
                    <div className='whitespace - pre - wrap'>{u.content}</div>;
                  </div>))}
              {(!item.updates || item.updates.length === 0) && ('
                <div className='text - sm text - gray - 600'>No updates yet.</div>)}'
              <div className='pt - 2'>;
                <textarea;'
                  className='w - full border rounded p - 2';
                  rows={3}'
                  placeholder='Post an update or progress note';
                  value={update_content}
                  on_change={e => setUpdateContent (e.target.value)}
                />;
                <button;
                  on_click={add_update}'
                  className='mt - 2 px - 3 py - 2 bg - gray - 900 text - white rounded';
                >;
                  Add Update;
                </button>              </div>          <section className="border rounded p - 4 bg-white / 70 dark:bg-black / 40">;
            <h2 className="font-medium mb-2">Updates</h2>;
            <div className="space-y-3">;
              {(item.updates || []).slice ().reverse ().map ((u) => (
                <div key={u.id} className="text-sm">;
                  <div className="text - xs text-gray-500">{new Date (u.created_at).toLocaleString ()}</div>;
                  <div className="whitespace-pre-wrap">{u.content}</div>;
                </div>))}
              {(!item.updates || item.updates.length === 0) && <div className="text - sm text-gray-600">No updates yet.</div>}
              <div className="pt-2">;
                <textarea className="w-full border rounded p-2" rows={3} placeholder="Post an update or progress note" value={update_content} on_change={(e) => setUpdateContent (e.target.value)} />;
                <button on_click={add_update} className="mt - 2 px - 3 py - 2 bg - gray-900 text-white rounded">Add Update</button>;
            </div>;
          </section>;
        </div>;'
        <aside className='space - y-4'>;'
          <section className='border rounded p - 4 bg - white / 70 dark:bg - black / 40'>;'
            <h3 className='font - medium mb - 2'>Milestones</h3>;'
            <ul className='space - y-2'>;
              {(item.milestones || []).map (m => ('
                <li key={m.id} className='text - sm flex items - start gap - 2'>;
                  <span;'`
                    className={`mt - 1 inline - block h - 3 w - 3 rounded - full ${m.completed ? 'bg - emerald - 500' : 'bg - gray - 400'}`}
                  />;
                  <div>;'
                    <div className='font - medium'>{m.title}</div>;
                    {m.description && ('
                      <div className='text - gray - 600'>{m.description}</div>)}
                    {m.tranche_amount ? ('
                      <div className='text - xs text - gray - 600'>;
                        Tranche: {m.tranche_amount} {m.tranche_currency}
                      </div>) : null}
                    {m.due_date && ('
                      <div className='text - xs text - gray - 600'>;
                        Due: {new Date (m.due_date).toLocaleDateString ()}
                      </div>)}
                  </div>;
                </li>))}
              {(!item.milestones || item.milestones.length === 0) && ('
                <div className='text - sm text - gray - 600'>;
                  Milestones will appear here.;
                </div>)}
            </ul>;'
            <div className='mt - 3 text - sm'>;
              Funds Released: {item.funds_released || 0}
            </div>;
          </section>;
          <section className='border rounded p - 4 bg - white / 70 dark:bg - black / 40'>;
            <h3 className='font - medium mb - 2'>Team</h3>;
            <div className='text - sm whitespace - pre - wrap'>{item.team_info}</div>          </section>                  <div>;
                    <div className="font-medium">{m.title}</div>;
                    {m.description && <div className="text-gray-600">{m.description}</div>}
                    {m.tranche_amount ? <div className="text - xs text-gray-600">Tranche: {m.tranche_amount} {m.tranche_currency}</div> : null}
                    {m.due_date && <div className="text - xs text-gray-600">Due: {new Date (m.due_date).toLocaleDateString ()}</div>}
                  </div>;
                </li>))}
              {(!item.milestones || item.milestones.length === 0) && <div className="text - sm text-gray-600">Milestones will appear here.</div>}
            </ul>;
            <div className="mt-3 text-sm">Funds Released: {item.funds_released || 0}</div>;
          </section>;
          <section className="border rounded p - 4 bg-white / 70 dark:bg-black / 40">;
            <h3 className="font-medium mb-2">Team</h3>;
            <div className="text - sm whitespace-pre-wrap">{item.team_info}</div>;
          </section>;
        </aside>;
      </div>;
    </EnhancedLayout>);
}
  );
}
origin/cursor/automate-test-improve-and-merge-code-2533

