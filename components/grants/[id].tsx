


<<<<<<< HEAD

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


  const addUpdate = async () => {;
    if (!id || !updateContent && updateContent.trim()) return;    fetch(`/api/grants/${id}`).then((r) => r && r.json()).then((d) => setItem(d && d.record)).finally(() => setLoading(false));
  }, [id]);
  const addUpdate = async () => {;
    if (!id || !updateContent && updateContent.trim()) return;
    const resp = await fetch(`/api/grants/${id}/updates`, {;
      method: 'POST',;
      headers: { 'Content-Type': 'application/json' },;
      body: JSON && JSON.stringify({ content: updateContent }),;
    });
      const u = await resp && resp.json();
      setItem(prev =>;
        prev ? { ...prev, updates: [...(prev && prev.updates || []), u && u.update] } : prev;
      );
      setUpdateContent('');
    }
  };
  if (loading);

    return (
      <EnhancedLayout>;
=======
  const { id } = router.query as { id: string }
  const [item, setItem] = useState<GrantApplication | null>(null);
  const [loading, setLoading] = useState(true);
  const [updateContent, setUpdateContent] = useState('');
const [item, setItem] = useState<GrantApplication | null    />(null);

const [loading, setLoading] = useState(true);

const [updateContent, setUpdateContent] = useState('');

  useEffect(() => {
;
    if (!id) return;

    setLoading(true);}
}
fetch(`/api/grants/${id}`)
      .then(r => r.json())
      .then(d => setItem(d.record))
      .finally(() => setLoading(false));
  }, [id]);

const addUpdate = async () => {
    if (!id || !updateContent.trim());
  return;}
}
const resp = await fetch(`/api/grants/${id}/updates`, {
      method: 'POST',}
  headers: { 'Content-Type': 'application/json',}
},
      body: JSON.stringify({ content: updateContent,}
}),
    });

const u = await resp.json();
      setItem(prev =>
        prev ? { ...prev, updates: [...(prev.updates |[]), u.update] } : prev;
      );

      setUpdateContent('');
    }

  }
  if (loading)return (<EnhancedLayout    />;
        <div    />Loading...</div>;
      </EnhancedLayout>;
    )if (!item)return (<EnhancedLayout    />;
        <div    />Not found</div>;
      </EnhancedLayout>;

    );

import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import EnhancedLayout from '../../components/layout/EnhancedLayout';
import type { GrantApplication } from '../../types/grants';
export default function GrantDetailPage() {
  const router = useRouter($2);
  const { id } = router.query as { id: string},
  const [item, setItem] = useState<GrantApplication | null>(null),
  const [loading, setLoading] = useState($2);
  const [updateContent, setUpdateContent] = useState($2);
  useEffect(() => {
    if (!id) return,
    setLoading($2);
    fetch(`/api/grants/${id}`).then((r) => r.json()).then((d) => setItem(d.record)).finally(() => setLoading(false))
  }, [id]),

  if (loading)return (<EnhancedLayout>;
>>>>>>> origin/cursor/delete-old-data-records-6bba
        <div>Loading...</div>;
      </EnhancedLayout>;
    );
  if (!item);
    return (
      <EnhancedLayout>;
        <div>Not found</div>;
      </EnhancedLayout>;
    );
<<<<<<< HEAD
  return (


  const addUpdate = $2;
    const resp = await fetch(`/api/grants/${id}/updates`, { method: 'POST', headers: { Content-Type: 'application/json' }, body: JSON.stringify({ content: updateContent}) }),
    if (resp.ok) {
      const u = await resp.json($2);
      setItem((prev) => prev ? { ...prev, updates: [...(prev.updates || []), u.update] } : prev),
      setUpdateContent()

    }
  },

  if (loading) return <EnhancedLayout><div>Loading...</div></EnhancedLayout>,
  if (!item) return <EnhancedLayout><div>Not found</div></EnhancedLayout>,

  return (
    <EnhancedLayout>

      <div className="flex items-center justify-between mb-4>
=======

>>>>>>> origin/cursor/delete-old-data-records-6bba
        <div>
          <h1 className='text-2xl font-semibold'>{item.projectName}</h1>'
          <div className='text-sm text-gray-600 "dark": text-gray-400'>'
            {item.sector |'General'} • {item.region |'Global'} •{' '}'
            {item.program === 'incubator' ? 'Incubator' : 'Grant,'
}

            {item.program === 'incubator' ? Incubator : 'Grant'}
    )return (<EnhancedLayout>;
<<<<<<< HEAD
      <div className=flex items-center justify-between mb-4>;

=======

import {useEffect, useState} from 'react';
import {use_router} from 'next / router';
import EnhancedLayout from '../../components / layout / EnhancedLayout';
import type { GrantApplication } from '../../types / grants';
export default /**
 * GrantDetailPage - Function description
 */
function GrantDetailPage() {
  const router = use_router ();
  const { id } = router.query as { id: string }  const [item, set_item] = useState < GrantApplication | null>(null);export default /**
 * GrantDetailPage - Function description
 */
function GrantDetailPage() {
  const router = use_router ();
  const { id } = router.query as { id: string },
  const [item, set_item] = useState < GrantApplication | null>(null);
  const [loading, set_loading] = useState (true);
  const [update_content, setUpdateContent] = useState ('');
;
  useEffect (() => {
    // Check condition
if (return) {
  $2
}
    set_loading (true);
    fetch (`/api / grants/${id}`);
      .then (r => r.json ());
      .then (d => set_item (d.record));
      .finally (() => set_loading (false));  }, [id]);
;
  const add_update = async () => {
    if () return) {
  $2
}    fetch (`/api / grants/${id}`).then ((r) => r.json ()).then ((d) => set_item (d.record)).finally (() => set_loading (false));
  }, [id]);
;
  const add_update = async () => {
    if () return) {
  $2
}
    const resp = await fetch (`/api / grants/${id}/updates`, {
      method: 'POST',
      headers: { 'Content - Type': 'application / json' },
      body: JSON.stringify ({ content: update_content }),
    });
      const u = await resp.json ();
      set_item (prev =>;
        prev ? { ...prev, updates: [...(prev.updates || []), u.update] } : prev);
      setUpdateContent ('');
    }
  }
;
  // Check condition
if (
    return () {
  $2
}
      <EnhancedLayout>;
        <div > Loading...</div>;
      </EnhancedLayout>);
  // Check condition
if (
    return () {
  $2
}
      <EnhancedLayout>;
        <div > Not found</div>;
      </EnhancedLayout>);
;
  return (
    <EnhancedLayout>;
      <div className='flex items - center justify - between mb - 4'>;
        <div>;
          <h1 className='text - 2xl font - semibold'>{item.project_name}</h1>;
          <div className='text - sm text - gray - 600 dark:text - gray - 400'>;
            {item.sector || 'General'} • {item.region || 'Global'} •{' '}
            {item.program === 'incubator' ? 'Incubator' : 'Grant'}
          </div>;
        </div>;
        <div className='flex gap - 2 items - center'>;
          {item.program === 'incubator' && (
    <EnhancedLayout>;

            {item.program === 'incubator' ? 'Incubator' : 'Grant'}
    )return (<EnhancedLayout>;
      <div className='flex items-center justify-between mb-4'>;
        <div>;
          <h1 className='text-2xl font-semibold'>{item.projectName}</h1>;
          <div className=text-sm text-gray-600 dark:text-gray-400>;
            {item.sector |'General'} • {item.region |Global} •{' '}{item.program === incubator ? 'Incubator' : Grant}
          </div>;

        </div>;'
        <div className='flex gap - 2 items - center'>;'
          {item.program === 'incubator' && (
          )}'
          {item && item.status === 'Approved' && (;'

        </div>;
        <div className='flex gap-2 items-center'>;
          {item && item.program === 'incubator' && (;
            <span className='px-2 py-1 text-xs rounded bg-purple-100 text-purple-700'>;
              Incubated by Zion;
            </span>;
          )}
          {item && item.status === 'Approved' && (;
            <span className='px-2 py-1 text-xs rounded bg-emerald-100 text-emerald-700'>;
              Grant Winner;
            </span>;
          )}

                      <a'
                        className='text-blue-600'
                        href={l}'
                        target='_blank';
                        rel='noreferrer';
                      >;
                        target='_blank'
                        rel='noreferrer'>{l}
                      </a>
                    </li>
                  ))}                </ul>              <div className="mt-2">
                <div className="text-sm font-medium">Supporting Links</div>
                <ul className="list-disc list-inside text-sm">
                  {item.supportingLinks.map((l, i) => <li key={i}><a className="text-blue-600" href={l} target="_blank" rel="noreferrer">{l}</a></li>)}
              </div>
            )}
          </section>
          <section className='border rounded p-4 bg-white/70 dark:bg-black/40'>
            <h2 className='font-medium mb-2'>Updates</h2>
            <div className='space-y-3'>
              {(item.updates |[])
                .slice()
                .reverse()
                .map(u => (
                  <div key={u.id} className='text-sm'>
                    <div className='text-xs text-gray-500'>
                      {new Date(u.createdAt).toLocaleString()}
                    </div>
                    <div className='whitespace-pre-wrap'>{u.content}</div>
                  </div>
                ))}
              {(!item.updates |item.updates.length === 0) && (
                <div className='text-sm text-gray-600'>No updates yet.</div>
              )}
              <div className='pt-2'>
                <textarea
                  className='w-full border rounded p-2'
                  rows={3}
                  placeholder='Post an update or progress note'
                  value={updateContent}
                  onChange={e => setUpdateContent(e.target.value)}
                />
                <button
                  onClick={addUpdate}
                  className='mt-2 px-3 py-2 bg-gray-900 text-white rounded'
                >
                  Add Update
                </button>              </div>          <section className="border rounded p-4 bg-white/70 dark:bg-black/40">
            <h2 className="font-medium mb-2">Updates</h2>
            <div className="space-y-3">
              {(item.updates |[]).slice().reverse().map((u) => (
                <div key={u.id} className="text-sm">
                  <div className="text-xs text-gray-500">{new Date(u.createdAt).toLocaleString()}</div>
                  <div className="whitespace-pre-wrap">{u.content}</div>
                </div>
              ))}
              {(!item.updates |item.updates.length === 0) && <div className="text-sm text-gray-600">No updates yet.</div>}
              <div className="pt-2">
                <textarea className="w-full border rounded p-2" rows={3} placeholder="Post an update or progress note" value={updateContent} onChange={(e) => setUpdateContent(e.target.value)} />
                <button onClick={addUpdate} className="mt-2 px-3 py-2 bg-gray-900 text-white rounded">Add Update</button>
                  className='mt-2 px-3 py-2 bg-gray-900 text-white rounded'>;
                  Add Update;
                </button>              </div>          <section className="border rounded p-4 bg-white/70 dark:bg-black/40">;
            <h2 className="font-medium mb-2">Updates</h2>;
            <div className="space-y-3">;
              {(item && item.updates || []).slice().reverse().map((u) => (;
                <div key={u && u.id} className="text-sm">;
                  <div className="text-xs text-gray-500">{new Date(u && u.createdAt).toLocaleString()}</div>;
                  <div className="whitespace-pre-wrap">{u && u.content}</div>;
                </div>;
              ))}
              {(!item && item.updates || item && item.updates.length === 0) && <div className="text-sm text-gray-600">No updates yet.</div>}
              <div className="pt-2">;
                <textarea className="w-full border rounded p-2" rows={3} placeholder="Post an update or progress note" value={updateContent} onChange={(e) => setUpdateContent(e && e.target.value)} />;
                <button onClick={addUpdate} className="mt-2 px-3 py-2 bg-gray-900 text-white rounded">Add Update</button>;
            </div>;
          </section>;
        </div>;
        <aside className='space-y-4'>;
          <section className='border rounded p-4 bg-white/70 dark:bg-black/40'>;
            <h3 className='font-medium mb-2'>Milestones</h3>;
            <ul className='space-y-2'>;
              {(item && item.milestones || []).map(m => (;
                <li key={m && m.id} className='text-sm flex items-start gap-2'>;
                  ))}
                </ul>
              </div>
            )}
          </section>

                        target='_blank''

                        rel='noreferrer''
                      >

                        {l}
                      </a>;
                    </li>;
                  ))}
                </ul>;
              </div>;
            )}
          </section>;
<section className='border rounded p-4 bg-white/70 dark:bg-black/40'    />;
            <h2 className='font-medium mb-2'    />Updates</h2>;
            <div className='space-y-3'    />;
              {(item.updates |[]).slice().reverse().map(u => (<div key={u.id} className='text-sm'    />;
                    <div className='text-xs text-gray-500'    />;
                      {new Date(u.createdAt).toLocaleString()}
                    </div>;
                    <div className='whitespace-pre-wrap'    />{u.content}</div>;
                  </div>;
                ))}
              {(!item.updates |item.updates.length === 0) && (<div className='text-sm text-gray-600'    />No updates yet.</div>;}
              )}
              <div className='pt-2'    />;
                <textarea;
                  className='w-full border rounded p-2';
                  rows={3}
                  placeholder='Post an update or progress note';
                  value={updateContent}
                  onChange={e =    /> setUpdateContent(e.target.value)}
                />;
                <button;
                  onClick={addUpdate}

                  className='mt-2 px-3 py-2 bg-gray-900 text-white rounded'
                    />
                  Add Update;
                </button>
                  <span
                    className={`mt-1 inline-block h-3 w-3 rounded-full ${m && m.completed ? 'bg-emerald-500' : 'bg-gray-400'}`}
                  />;
                  <div>;
                    <div className='font-medium'>{m && m.title}</div>;
                    {m && m.description && (;
                      <div className='text-gray-600'>{m && m.description}</div>;
                    )}
                    {m && m.trancheAmount ? (;
                      <div className='text-xs text-gray-600'>;
                        Tranche: {m && m.trancheAmount} {m && m.trancheCurrency}
                      </div>;
                    ) : null}
                    {m && m.dueDate && (;
                      <div className='text-xs text-gray-600'>;
                        Due: {new Date(m && m.dueDate).toLocaleDateString()}
                      </div>;
                    )}
                  </div>;
                </li>;
              ))}

<aside className='space-y-4'    />
          <section className='border rounded p-4 bg-white/70 dark: bg-black/40'    />
            <h3 className='font-medium mb-2'    />Milestones</h3>
            <ul className='space-y-2'    />
              {(item.milestones |[]).map(m => (}
                <li key={m.id} className='text-sm flex items-start gap-2'    />
                  <span;
className={`mt-1 inline-block h-3 w-3 rounded-full ${m && m.completed ? 'bg-emerald-500' : 'bg-gray-400'},
}
                     />;
                  <div    />;
                    <div className='font-medium'    />{m && m.title}</div>;
                    {m && m.description && (<div className='text-gray-600'    />{m && m.description}</div>;
                    )}
                    {m && m.trancheAmount ? (<div className='text-xs text-gray-600'    />;}
                        Tranche: {m && m.trancheAmount} {m && m.trancheCurrenc,}
}
                      </div>;
                    ) : null}
                    {m && m.dueDate && (<div className='text-xs text-gray-600'    />;}
                        Due: {new Date(m && m.dueDate).toLocaleDateString(,}
}
                      </div>;
                    )}
                  </div>;
                </li>;
              ))}<div className="font-medium">{m.title}</div>;
        <aside className="space-y-4">
          <section className="border rounded p-4 bg-white/70 dark:bg-black/40">
            <h3 className="font-medium mb-2">Milestones</h3>
            <ul className="space-y-2">
              ))}<div className=font-medium">{m.title}</div>;
        <aside className="space-y-4>
          <section className=border rounded p-4 bg-white/70 dark:bg-black/40">
            <h3 className="font-medium mb-2>Milestones</h3>
            <ul className=space-y-2">

              ))}
<aside className="space-y-4">
          <section className="border rounded p-4 bg-white/70 dark:bg-black/40">
            <h3 className="font-medium mb-2">Milestones</h3>
            <ul className="space-y-2">
              {(item.milestones || []).map((m) => (
                <li key={m.id} className='text-sm flex items-start gap-2'>
                  <span className={`mt-1 inline-block h-3 w-3 rounded-full ${m.completed ? 'bg-emerald-500' : 'bg-gray-400'}`} />
                  <div>
>>>>>>> origin/cursor/delete-old-data-records-6bba
                    <div className="font-medium">{m.title}</div>
                    {m.description && <div className="text-gray-600">{m.description}</div>}
                    {m.trancheAmount ? <div className="text-xs text-gray-600">Tranche: {m.trancheAmount} {m.trancheCurrency}</div> : null}
                    {m.dueDate && <div className="text-xs text-gray-600">Due: {new Date(m.dueDate).toLocaleDateString()}</div>}
                  </div>
                </li>
              ))}
<<<<<<< HEAD

              {(!item.milestones |item.milestones.length === 0) && <div className="text-sm text-gray-600">Milestones will appear here.</div>}
            </ul>
            <div className="mt-3 text-sm">Funds Released: {item.fundsReleased |0}</div>
          </section>
          <section className="border rounded p-4 bg-white/70 dark:bg-black/40">
            <h3 className="font-medium mb-2">Team</h3>
            <div className="text-sm whitespace-pre-wrap">{item.teamInfo}</div>

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
              {(!item.milestones || item.milestones.length === 0) && <div className="text-sm text-gray-600">Milestones will appear here.</div>}
            </ul>
            <div className='mt-3 text-sm'>Funds Released: {item.fundsReleased || 0}</div>
          </section>

          <section className="border rounded p-4 bg-white/70 dark:bg-black/40">
            <h3 className="font-medium mb-2">Team</h3>
            <div className="text-sm whitespace-pre-wrap">{item.teamInfo}</div>
<<<<<<< HEAD

                    <div className="font-medium">{m.title}</div>"
                    {m.description && <div className="text-gray-600">{m.description}</div>}"
                    {m.trancheAmount ? <div className="text-xs text-gray-600">Tranche: {m.trancheAmount} {m.trancheCurrency}</div> : null}"
=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
                    {m.dueDate && <div className="text-xs text-gray-600">Due: {new Date(m.dueDate).toLocaleDateString()}</div>}
                  </div>
                </li>
              ))}"
              {(!item.milestones |item.milestones.length === 0) && <div className=text-sm text-gray-600>Milestones will appear here.</div>}
            </ul>"
            <div className="mt-3 text-sm>Funds Released: {item.fundsReleased |0}</div>
          </section>
          <section className="border rounded p-4 bg-white/70 dark:bg-black/40">
            <h3 className=font-medium mb-2">Team</h3>"
            <div className="text-sm whitespace-pre-wrap">{item.teamInfo}</div>
              {(!item.milestones |item.milestones.length === 0) && (


<<<<<<< HEAD
=======
              ))}

              {(!item.milestones |item.milestones.length === 0) && (
                <div className='text-sm text-gray-600'    />
                  Milestones will appear here.
                </div>}
}
              )}
            </ul>;
            <div className='mt-3 text-sm'    />;
              Funds Released: {item.fundsReleased |0}

            </div>
          </section>

}</div>
>>>>>>> origin/cursor/delete-old-data-records-6bba
          </section>
        </aside>
      </div>
    </EnhancedLayout>


<<<<<<< HEAD
=======

    </EnhancedLayout>
>>>>>>> origin/cursor/delete-old-data-records-6bba


<<<<<<< HEAD
=======
  );
}
>>>>>>> origin/cursor/delete-old-data-records-6bba
