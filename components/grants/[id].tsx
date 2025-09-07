import { useEffect, useState  } from 'react';
import { useRouter  } from 'next/router';
import EnhancedLayout from '../../components/layout/EnhancedLayout';
import type { GrantApplication } from '../../types/grants';
export default function GrantDetailPage() {
export default function GrantDetailPage() {

  const router = useRouter();
  const { id } = router.query as { id: string };  const [item, setItem] = useState<GrantApplication | null>(null);export default function GrantDetailPage() {;
  const router = useRouter();
  const { id } = router.query as { id: string }
  const [item, setItem] = useState<GrantApplication | null>(null);
  const [loading, setLoading] = useState(true);
  const [updateContent, setUpdateContent] = useState('');
  useEffect(() => {

    if (!id) return
    setLoading(true);}

fetch(`/api/grants/${id}`)
      .then(r => r.json())
      .then(d => setItem(d.record))
      .finally(() => setLoading(false));  }, [id]);
  const addUpdate = async () => {
    if (!id |!updateContent.trim()) return;    fetch(`/api/grants/${id}`).then((r) => r.json()).then((d) => setItem(d.record)).finally(() => setLoading(false))
  }, [id]);
  const addUpdate = async () => {
    if (!id |!updateContent.trim()) return;
    const resp = await fetch(`/api/grants/${id}/updates`, {
      method: 'POST'
      headers: { 'Content-Type': 'application/json' }
      body: JSON.stringify({ content: updateContent })
    });
      const u = await resp.json();
      setItem(prev =>
        prev ? { ...prev, updates: [...(prev.updates |[]), u.update] } : prev
      )
      setUpdateContent('')
  if (loading)return (<EnhancedLayout    />
        <div    />Loading...</div>
      </EnhancedLayout>
    )if (!item)return (<EnhancedLayout    />
        <div    />Not found</div>
      </EnhancedLayout>
  return (
    <EnhancedLayout    />
      <div className='flex items-center justify-between mb-4'    />
        <div    />
          <h1 className='text-2xl font-semibold'    />{item.projectName}</h1>
          <div className='text-sm text-gray-600 dark: text-gray-400'    />
            {item.sector |'General'} • {item.region |'Global'} •{' '}
origin/cursor/automate-test-improve-and-merge-code-2533

            {item.program === 'incubator' ? 'Incubator' : 'Grant'}
            {item.program === 'incubator' ? 'Incubator' : 'Grant,}

          </div>
                        target='_blank'

                    className={`mt-1 inline-block h-3 w-3 rounded-full ${m && m.completed ? 'bg-emerald-500' : 'bg-gray-400'}`}
<aside className='space-y-4' />
          <section className='border rounded p-4 bg-white/70 dark: bg-black/40' />
            <h3 className='font-medium mb-2' />Milestones</h3>
            <ul className='space-y-2' />
              {(item.milestones |[]).map(m => (}
                <li key={m.id} className='text-sm flex items-start gap-2'    />
                  <span
className={`mt-1 inline-block h-3 w-3 rounded-full ${m && m.completed ? 'bg-emerald-500' : 'bg-gray-400'},

                  />
                      </div>
                    )}
                  </div>
                </li>
              ))}

                    {m.dueDate && <div className="text-xs text-gray-600">Due: {new Date(m.dueDate).toLocaleDateString()}</div>}
                  </div>
                </li>
              ))}"
              {(!item.milestones |item.milestones.length === 0) && <div className="text-sm text-gray-600">Milestones will appear here.</div>}
            </ul>"
            <div className="mt-3 text-sm">Funds Released: {item.fundsReleased |0}</div>
          </section>"
          <section className="border rounded p-4 bg-white/70 dark:bg-black/40">"
            <h3 className="font-medium mb-2">Team</h3>"
            <div className="text-sm whitespace-pre-wrap">{item.teamInfo}</div>

              {(!item.milestones |item.milestones.length === 0) && (
                <div className='text-sm text-gray-600'    />
                  Milestones will appear here.
                </div>}

              )}
            </ul>
            <div className='mt-3 text-sm'    />
              Funds Released: {item.fundsReleased |0}

            </div>
          </section>
          <section className='border rounded p-4 bg-white/70 dark:bg-black/40'    />
            <h3 className='font-medium mb-2'    />Team</h3>
            <div className='text-sm whitespace-pre-wrap'    />{item.teamInf,}
}</div>
          </section>
        </aside>
      </div>
    </EnhancedLayout>
);
}
}
