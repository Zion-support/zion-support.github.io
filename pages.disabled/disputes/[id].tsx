:pages_backup/disputes/[id].tsx
import { useRouter  } from 'next/router';
import useSWR from 'swr',
import React, { useMemo, useState } from 'react',
import {useRouter} from 'next/router';
import useSWR from 'swr';
import React, { useMemo, useState } from 'react';
import EnhancedLayout from '../../components/layout/EnhancedLayout';
import {useCurrentUser} from '../../utils/auth';
export default function DisputeDetailPage() {

import { useCurrentUser } from '../../utils/auth';
const fetcher = null;
    mutate()
  }

:pages_backup/disputes/[id].tsx
const fetcher = (url: string) => fetch(url).then(r => r.json());
origin/cursor/automate-test-improve-and-merge-code-2533
export default function DisputeDetailPage() {

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {}
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {'
    console.error('Error caught by boundary:', error, errorInfo);
  }

  render() {}
    if (this.state.hasError) {}
      return <div>Something went wrong.</div>;
    }

    return this.props.children;
  }
}'
import {useRouter} from 'next/router';'
import useSWR from 'swr';'
import React, { useMemo, useState } from 'react';

:pages_backup/disputes/[id].tsx

'
import {useRouter} from 'next/router';'
import useSWR from 'swr';'
import React, { useMemo, useState } from 'react';

:pages_backup/disputes/[id].tsx

'
import EnhancedLayout from '../../components/layout/EnhancedLayout';

const fetcher = (url: string) => fetch(url).then(r => r && r.json());
:pages_backup/disputes/[id].tsx
export default function DisputeDetailPage() {;
  const router = useRouter();
  const { id } = router && router.query as { id?: string };
  const { data, mutate } = useSWR(id ? `/api/disputes/${id}` : null, fetcher);
  const user = useCurrentUser();
  const dispute = data?.dispute;

export default function DisputeDetailPage() {;
import { useRouter } from 'next/router';
import useSWR from 'swr';
import React, { useMemo, useState } from 'react';
import EnhancedLayout from '../../components/layout/EnhancedLayout';
import { useCurrentUser } from '../../utils/auth';
const fetcher = (url: string) => fetch(url).then(r => r.json());
export default function DisputeDetailPage(req, res) {
  try {

export default function DisputeDetailPage() { return null; }
  const { id } = router && router.query as { id?: string };

  const { data, mutate } = useSWR(id ? `/api/disputes/${id}` : null, fetcher);
  const user = useCurrentUser();
  const dispute = data?.dispute;

:pages_backup/disputes/[id].tsx

    });'
    setResolutionSummary ('');
    mutate ();  }
  return (
    <EnhancedLayout>;
:pages_backup/disputes/[id].tsx

  const router = useRouter();
  const { id } = router.query as { id?: string };`
  const { data, mutate } = useSWR(id ? `/api/disputes/${id}` : null, fetcher);
  const user = useCurrentUser();
:pages_backup/disputes/[id].tsx

  async function sendMessage() {
    if (!message.trim() || !id) return;
    await fetch(`/api/disputes/${id}/message`, {

const [activeTab, setActiveTab] = useState<
    'Overview' | 'Messages' | 'Attachments' | 'Admin Notes'
  >('Overview');
  const [message, setMessage] = useState('');
  const [resolutionSummary, setResolutionSummary] = useState('');
  async function sendMessage() {
    if (!message.trim() || !id) return;
await fetch(`/api/disputes/${id}/message`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ body: message }),
    });
    setMessage('');
    mutate();  }

  async function resolve(status?: 'Resolved' | 'Under Review' | 'Open') {
    if (!id) return;
    await fetch(`/api/disputes/${id}/resolve`, {
    mutate();
  }

  async function resolve(status?: 'Resolved' | 'Under Review' | 'Open') {
    if (!id) return;
await fetch(`/api/disputes/${id}/resolve`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ resolutionSummary, status }),
    });
    setResolutionSummary('');
    mutate();  }

  const dispute = data?.dispute;
  const [activeTab, setActiveTab] = useState<'Overview' | 'Messages' | 'Attachments' | 'Admin Notes'>('Overview');
  const [message, setMessage] = useState('');
  const [resolutionSummary, setResolutionSummary] = useState('');
  async function sendMessage() {;
    if (!message.trim() || !id) return,;
    await fetch(`/api/disputes/${id}/message`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ body: message }) }),;
    setMessage('');
    mutate();
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
  async function resolve(status?: 'Resolved' | 'Under Review' | 'Open') {;
    if (!id) return,;
    await fetch(`/api/disputes/${id}/resolve`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ resolutionSummary, status }) });
    setResolutionSummary('');
    mutate();
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
    mutate();
  }
origin/cursor/automate-test-improve-and-merge-code-2533



  return (
    <EnhancedLayout>
      {!dispute ? (
        <div>Loading...</div>
      ) : (
:pages_backup/disputes/[id].tsx
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-2xl font-semibold">Case {dispute.id}</h1>
            <span className={`px-2 py-1 rounded text-sm border ${dispute.status === 'Resolved' ? 'bg-green-100 text-green-800 border-green-300' : dispute.status === 'Under Review' ? 'bg-yellow-100 text-yellow-800 border-yellow-300' : 'bg-red-100 text-red-800 border-red-300'}`}>{dispute.status}</span>
</div>

          <div className='mb-6 grid grid-cols-1 md:grid-cols-3 gap-4 text-sm'>
            <div className='p-3 border rounded'>
              <div className='font-medium text-gray-500'>Project</div>
              <div className='mt-1'>{dispute.projectId}</div>
:pages_backup/disputes/[id].tsx
<div className='max-w-4xl mx-auto'>
          <div className='flex items-center justify-between mb-4'>
            <h1 className='text-2xl font-semibold'>Case {dispute.id}</h1>
            <span
              className={`px-2 py-1 rounded text-sm border ${dispute.status === 'Resolved' ? 'bg-green-100 text-green-800 border-green-300' : dispute.status === 'Under Review' ? 'bg-yellow-100 text-yellow-800 border-yellow-300' : 'bg-red-100 text-red-800 border-red-300'}`}
            >
              {dispute.status}
            </span>
origin/cursor/automate-test-improve-and-merge-code-2533
          </div>
          <div className="mb-6 grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
            <div className="p-3 border rounded">
              <div className="font-medium text-gray-500">Project</div>
              <div className="mt-1">{dispute.projectId}</div>
:pages_backup/disputes/[id].tsx

            </div>
            <div className="p-3 border rounded">
              <div className="font-medium text-gray-500">Client</div>
"
          <div className="mb-6 grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">"
            <div className="p-3 border rounded">"
              <div className="font-medium text-gray-500">Project</div>"
              <div className="mt-1">{dispute.projectId}</div>

            </div>"
            <div className="p-3 border rounded">"
              <div className="font-medium text-gray-500">Client</div>"
              <div className="mt-1">{dispute.clientUserId}</div>
            </div>"
            <div className="p-3 border rounded">"
              <div className="font-medium text-gray-500">Talent</div>"
              <div className="mt-1">{dispute.talentUserId}</div>
            </div>
          </div>
:pages_backup/disputes/[id].tsx

          </div>

          {activeTab === 'Overview' && (
            <div className="space-y-6">
              <div className="p-4 border rounded">
                <div className="font-medium mb-2">Reason</div>
:pages_backup/disputes/[id].tsx
          <div className='border-b mb-4 flex gap-4 text-sm'>
            {(
              ['Overview', 'Messages', 'Attachments', 'Admin Notes'] as const
            ).map(t => (
              <button
                key={t}
                onClick={() => setActiveTab(t)}
                className={`py-2 border-b-2 -mb-px ${activeTab === t ? 'border-blue-600 text-blue-600' : 'border-transparent text-gray-500'}`}
              >
                {t}
:pages_backup/disputes/[id].tsx
</button>            ))}
          <div className="border-b mb-4 flex gap-4 text-sm">
            {(['OverviewMessagesAttachmentsAdmin Notes'] as const).map(t => (
              <button key={t} onClick={() => setActiveTab(t)} className={`py-2 border-b-2 -mb-px ${activeTab === t ? 'border-blue-600 text-blue-600' : 'border-transparent text-gray-500'}`}>{t}</button>

            ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}

:pages_backup/disputes/[id].tsx

          </div>
'
          {activeTab === 'Overview' && ("
            <div className="space-y-6">"
              <div className="p-4 border rounded">"
                <div className="font-medium mb-2">Reason</div>
:pages_backup/disputes/[id].tsx
              </button>
            ))}
          </div>

          {activeTab === 'Overview' && (
<div className='space-y-6'>
              <div className='p-4 border rounded'>
                <div className='font-medium mb-2'>Reason</div>
                <div className='text-sm'>
                  {dispute.reason}
                  {dispute.reasonDetails ? ` — ${dispute.reasonDetails}` : ''}
                </div>
:pages_backup/disputes/[id].tsx
origin/cursor/automate-test-improve-and-merge-code-2533
              </div>
              <div className="p-4 border rounded">
                <div className="font-medium mb-2">Description</div>
              </div>"
              <div className="p-4 border rounded">"
                <div className="font-medium mb-2">Description</div>"
                <div className="text-sm whitespace-pre-wrap">{dispute.description}</div>
              </div>"
              <div className="p-4 border rounded">"
                <div className="font-medium mb-3">Timeline</div>"
                <ol className="relative border-l ml-2">"
                  <li className="mb-6 ml-4">"
                    <div className="absolute w-3 h-3 bg-blue-600 rounded-full -left-1.5 border border-white" />"
                    <time className="text-xs text-gray-500">Created at {new Date(dispute.createdAt).toLocaleString()}</time>"
                    <div className="text-sm">Case opened</div>
                  </li>
                  {dispute.messages.map((m: any) => ("
                    <li key={m.id} className="mb-6 ml-4">"
                      <div className="absolute w-3 h-3 bg-gray-400 rounded-full -left-1.5 border border-white" />"
                      <time className="text-xs text-gray-500">{new Date(m.createdAt).toLocaleString()}</time>"
                      <div className="text-sm">{m.authorRole} messaged</div>
                    </li>
:pages_backup/disputes/[id].tsx
                  ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                  {dispute.resolvedAt && (
:pages_backup/disputes/[id].tsx

          {activeTab === 'Messages' && (



                    <li className="mb-6 ml-4">
                      <div className="absolute w-3 h-3 bg-green-600 rounded-full -left-1.5 border border-white" />
                      <time className="text-xs text-gray-500">{new Date(dispute.resolvedAt).toLocaleString()}</time>
                      <div className="text-sm">Case resolved</div>
                    </li>

:pages_backup/disputes/[id].tsx
;
  return (;
    <EnhancedLayout>;
      {!dispute ? (;
        <div>Loading...</div>;
      ) : (;
        <div className="max-w-4xl mx-auto">;
          <div className="flex items-center justify-between mb-4">;
            <h1 className="text-2xl font-semibold">Case {dispute.id}</h1>;
            <span className={`px-2 py-1 rounded text-sm border ${dispute.status === 'Resolved' ? 'bg-green-100 text-green-800 border-green-300' : dispute.status === 'Under Review' ? 'bg-yellow-100 text-yellow-800 border-yellow-300' : 'bg-red-100 text-red-800 border-red-300'}`}>{dispute.status}</span>;
          </div>;
          <div className="mb-6 grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">;
            <div className="p-3 border rounded">;
              <div className="font-medium text-gray-500">Project</div>;
              <div className="mt-1">{dispute.projectId}</div>;
            </div>;
            <div className="p-3 border rounded">;
              <div className="font-medium text-gray-500">Client</div>;
              <div className="mt-1">{dispute.clientUserId}</div>;
            </div>;
            <div className="p-3 border rounded">;
              <div className="font-medium text-gray-500">Talent</div>;
              <div className="mt-1">{dispute.talentUserId}</div>;
            </div>;
          </div>;
          <div className="border-b mb-4 flex gap-4 text-sm">;
            {(['OverviewMessagesAttachmentsAdmin Notes'] as const).map(t => (;
              <button key={t} onClick={() => setActiveTab(t)} className={`py-2 border-b-2 -mb-px ${activeTab === t ? 'border-blue-600 text-blue-600' : 'border-transparent text-gray-500'}`}>{t}</button>;
            ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
          </div>;
          {activeTab === 'Overview' && (;
            <div className="space-y-6">;
              <div className="p-4 border rounded">;
                <div className="font-medium mb-2">Reason</div>;
                <div className="text-sm">{dispute.reason}{dispute.reasonDetails ? ` — ${dispute.reasonDetails}` : ''}</div>;
              </div>;
              <div className="p-4 border rounded">;
                <div className="font-medium mb-2">Description</div>;
                <div className="text-sm whitespace-pre-wrap">{dispute.description}</div>;
              </div>;
              <div className="p-4 border rounded">;
                <div className="font-medium mb-3">Timeline</div>;
                <ol className="relative border-l ml-2">;
                  <li className="mb-6 ml-4">;
                    <div className="absolute w-3 h-3 bg-blue-600 rounded-full -left-1.5 border border-white" />;
                    <time className="text-xs text-gray-500">Created at {new Date(dispute.createdAt).toLocaleString()}</time>;
                    <div className="text-sm">Case opened</div>;
                  </li>;
                  {dispute.messages.map((m: any) => (;
                    <li key={m.id} className="mb-6 ml-4">;
                      <div className="absolute w-3 h-3 bg-gray-400 rounded-full -left-1.5 border border-white" />;
                      <time className="text-xs text-gray-500">{new Date(m.createdAt).toLocaleString()}</time>;
                      <div className="text-sm">{m.authorRole} messaged</div>;
                    </li>;
                  ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                  {dispute.resolvedAt && (;
                    <li className="mb-6 ml-4">;
                      <div className="absolute w-3 h-3 bg-green-600 rounded-full -left-1.5 border border-white" />;
                      <time className="text-xs text-gray-500">{new Date(dispute.resolvedAt).toLocaleString()}</time>;
                      <div className="text-sm">Case resolved</div>;
                    </li>;
                  )  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                </ol>;
              </div>;
            </div>;
          )  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
:pages_backup/disputes/[id].tsx

'
          {activeTab === 'Messages' && (
:pages_backup/disputes/[id].tsx
            <div className="space-y-4">
              <div className="max-h-72 overflow-auto border rounded p-3 bg-gray-50 dark:bg-gray-900">

          {activeTab === 'Messages' && (
            <div className="space-y-4">
              <div className="max-h-72 overflow-auto border rounded p-3 bg-gray-50 dark:bg-gray-900">
          {activeTab === 'Messages' && (
            <div className="space-y-4">
              <div className="max-h-72 overflow-auto border rounded p-3 bg-gray-50 dark:bg-gray-900">
                  ))}
                  {dispute.resolvedAt && (
                    <li className='mb-6 ml-4'>
                      <div className='absolute w-3 h-3 bg-green-600 rounded-full -left-1.5 border border-white' />
                      <time className='text-xs text-gray-500'>
                        {new Date(dispute.resolvedAt).toLocaleString()}
                      </time>
                      <div className='text-sm'>Case resolved</div>
                    </li>
                  )}
                </ol>
              </div>
            </div>
          )}
          {activeTab === 'Messages' && (
<div className='space-y-4'>
              <div className='max-h-72 overflow-auto border rounded p-3 bg-gray-50 dark:bg-gray-900'>
:pages_backup/disputes/[id].tsx
origin/cursor/automate-test-improve-and-merge-code-2533
                {dispute.messages.length === 0 ? (
"
            <div className="space-y-4">"
              <div className="max-h-72 overflow-auto border rounded p-3 bg-gray-50 dark:bg-gray-900">
                {dispute.messages.length === 0 ? ("
                  <div className="text-sm text-gray-500">No messages yet</div>
                ) : ("
                  <ul className="space-y-3">
                    {dispute.messages.map((m: any) => (
:pages_backup/disputes/[id].tsx

                      <li key={m.id} className="text-sm">
                        <div className="text-gray-500 text-xs">{m.authorRole} • {new Date(m.createdAt).toLocaleString()}</div>
                        <div className="whitespace-pre-wrap">{m.body}</div>
:pages_backup/disputes/[id].tsx
                      </li>

                      <li key={m.id} className="text-sm">
                        <div className="text-gray-500 text-xs">{m.authorRole} • {new Date(m.createdAt).toLocaleString()}</div>
                        <div className="whitespace-pre-wrap">{m.body}</div>
                      <li key={m.id} className='text-sm'>
                        <div className='text-gray-500 text-xs'>
                          {m.authorRole} •{' '}
                          {new Date(m.createdAt).toLocaleString()}
                        </div>
:pages_backup/disputes/[id].tsx
                        <div className='whitespace-pre-wrap'>{m.body}</div>                      </li>
                    ))}
                  </ul>
                )}
              </div>
              {user.role !== 'guest' && (
                <div className='flex gap-2'>
                  <input
                    value={message}
                    onChange={e => setMessage(e.target.value)}
                    placeholder='Write a message'
                    className='flex-1 border rounded px-3 py-2 bg-white dark:bg-black'
                  />
                  <button
                    onClick={sendMessage}
                    className='px-3 py-2 rounded bg-blue-600 text-white'
                  >
                    Send
                  </button>                </div>
              )}
            </div>
          )}

                    ))}
                  </ul>
                )}
              </div>
              {user.role !== 'guest' && (
                      <li key={m.id} className="text-sm">
                        <div className="text-gray-500 text-xs">{m.authorRole} • {new Date(m.createdAt).toLocaleString()}</div>
                        <div className="whitespace-pre-wrap">{m.body}</div>
                        <div className='whitespace-pre-wrap'>{m.body}</div>
origin/cursor/automate-test-improve-and-merge-code-2533
                        <div className='whitespace-pre-wrap'>{m.body}</div>                      </li>
                        <div className='whitespace-pre-wrap'>{m.body}</div>
origin/cursor/automate-test-improve-and-merge-code-2533
                      </li>

                        <div className='whitespace-pre-wrap'>{m.body}</div>
origin/cursor/automate-test-improve-and-merge-code-2533
                      </li>
"
                      <li key={m.id} className="text-sm">"
                        <div className="text-gray-500 text-xs">{m.authorRole} • {new Date(m.createdAt).toLocaleString()}</div>"
                        <div className="whitespace-pre-wrap">{m.body}</div>
                      </li>

                    ))}
                  </ul>;
                )}

:pages_backup/disputes/[id].tsx
                <div className='flex gap-2'>
                <div className="flex gap-2">
                  <input value={message} onChange={e => setMessage(e.target.value)} placeholder="Write a message" className="flex-1 border rounded px-3 py-2 bg-white dark:bg-black" />
                  <button onClick={sendMessage} className="px-3 py-2 rounded bg-blue-600 text-white">Send</button>
                </div>

{activeTab === 'Attachments' && (
            <div className="space-y-3">
              {dispute.attachments.length === 0 ? ("
                <div className="text-sm text-gray-500">No attachments</div>
              ) : ("
                <ul className="divide-y">
                  {dispute.attachments.map((a: any) => ("
                    <li key={a.id} className="py-2 flex items-center justify-between">"
                      <div className="text-sm">"
                        <div className="font-medium">{a.fileName}</div>"
                        <div className="text-xs text-gray-500">{a.mimeType} • {(a.fileSize / 1024).toFixed(1)} KB</div>
                      </div>

:pages_backup/disputes/[id].tsx
              )}
            </div>;

          {activeTab === 'Attachments' && (;
            <div className='space-y-3'>;
              {dispute && dispute.attachments.length === 0 ? (;
                <div className='text-sm text-gray-500'>No attachments</div>;
              ) : (;
                <ul className='divide-y'>;
                  {dispute && dispute.attachments.map((a: any) => (;

:pages_backup/disputes/[id].tsx

<div className='flex gap-2'>
                  <input
                    value={message}
                    onChange={e => setMessage(e.target.value)}
                    placeholder='Write a message'
                    className='flex-1 border rounded px-3 py-2 bg-white dark:bg-black'
                  />
                  <button
                    onClick={sendMessage}
                    className='px-3 py-2 rounded bg-blue-600 text-white'
                  >
                    Send
                  </button>                </div>
              )}
            </div>
          )}

                      <li key={m.id} className="text-sm">
                        <div className="text-gray-500 text-xs">{m.authorRole} • {new Date(m.createdAt).toLocaleString()}</div>
                        <div className="whitespace-pre-wrap">{m.body}</div>
                      </li>
                    ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                  </ul>;
                )  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              </div>
              {user.role !== 'guest' && (
                <div className="flex gap-2">
                  <input value={message} onChange={e => setMessage(e.target.value)} placeholder="Write a message" className="flex-1 border rounded px-3 py-2 bg-white dark:bg-black" />
                  <button onClick={sendMessage} className="px-3 py-2 rounded bg-blue-600 text-white">Send</button>
                </div>

              )}
            </div>;

          {activeTab === 'Attachments' && (;
            <div className='space-y-3'>;
              {dispute && dispute.attachments.length === 0 ? (;
                <div className='text-sm text-gray-500'>No attachments</div>;
              ) : (;
                <ul className='divide-y'>;
                  {dispute && dispute.attachments.map((a: any) => (;

                  </button>
                </div>
              )}
            </div>
          )}
          {activeTab === 'Attachments' && (
<div className='space-y-3'>
              {dispute.attachments.length === 0 ? (
                <div className='text-sm text-gray-500'>No attachments</div>
              ) : (
                <ul className='divide-y'>
                  {dispute.attachments.map((a: any) => (
:pages_backup/disputes/[id].tsx
origin/cursor/automate-test-improve-and-merge-code-2533
                    <li
                      key={a && a.id}
                      className='py-2 flex items-center justify-between'>;
                      <div className='text-sm'>;
                        <div className='font-medium'>{a && a.fileName}</div>;
                        <div className='text-xs text-gray-500'>;
                          {a && a.mimeType} • {(a && a.fileSize / 1024).toFixed(1)} KB;
                        </div>;
                      </div>;
                      <a
                        className='text-blue-600 hover:underline'
:pages_backup/disputes/[id].tsx
                        href={`/api/disputes/${encodeURIComponent(dispute && dispute.id)}/download?fileName=${encodeURIComponent(a && a.fileName)}`}>;
                        Download;
                      </a>                    </li>;

:pages_backup/disputes/[id].tsx

          {activeTab === 'Attachments' && (
            <div className="space-y-3">
              {dispute.attachments.length === 0 ? (
                <div className="text-sm text-gray-500">No attachments</div>
:pages_backup/disputes/[id].tsx

                        href={`/api/disputes/${encodeURIComponent(dispute.id)}/download?fileName=${encodeURIComponent(a.fileName)}`}
                      >
                        Download
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          )}
          {activeTab === 'Admin Notes' && (
<div className='space-y-4'>
              {user.role !== 'admin' ? (
                <div className='text-sm text-gray-500'>
                  Admin access required
                </div>
:pages_backup/disputes/[id].tsx
origin/cursor/automate-test-improve-and-merge-code-2533
              ) : (
                <ul className="divide-y">
                  {dispute.attachments.map((a: any) => (
                    <li key={a.id} className="py-2 flex items-center justify-between">
                      <div className="text-sm">
                        <div className="font-medium">{a.fileName}</div>
                        <div className="text-xs text-gray-500">{a.mimeType} • {(a.fileSize / 1024).toFixed(1)} KB</div>
                      </div>
<a
                        className='text-blue-600 hover:underline'
                        href={`/api/disputes/${encodeURIComponent(dispute.id)}/download?fileName=${encodeURIComponent(a.fileName)}`}
                      >
                        Download
                      </a>                    </li>
                  ))}
                </ul>
              )}
            </div>
          )}

          {activeTab === 'Admin Notes' && (;
            <div className='space-y-4'>;
              {user && user.role !== 'admin' ? (;

'
          {activeTab === 'Admin Notes' && (;'
            <div className='space-y-4'>;'
              {user && user.role !== 'admin' ? (;'
                <div className='text-sm text-gray-500'>;
                  Admin access required;
                </div>;
              ) : (;'
                <div className='space-y-3'>;

                  <textarea;
                    value={resolutionSummary}
                    onChange={e => setResolutionSummary(e && e.target.value)}'
                    placeholder='Resolution summary / admin notes';
                    rows={4}'
                    className='w-full border rounded px-3 py-2 bg-white dark:bg-black';
                  />;'
                  <div className='flex gap-2'>;
                    <button'
                      onClick={() => resolve('Under Review')}'
                      className='px-3 py-2 rounded border';
                    >;
                      Mark Under Review;
                    </button>;
:pages_backup/disputes/[id].tsx
                    <button
                      onClick={() => resolve('Resolved')}
                      className='px-3 py-2 rounded bg-green-600 text-white';
                    >;
                      Resolve;
                    </button>                  </div>;
                </div>;

:pages_backup/disputes/[id].tsx
"`
                      <a className="text-blue-600 hover:underline" href={`/api/disputes/${encodeURIComponent(dispute.id)}/download?fileName=${encodeURIComponent(a.fileName)}`}>Download</Link>
                    </li>
                  ))  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}
                </ul>;
              )  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}
            </div>;
          )  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}

:pages_backup/disputes/[id].tsx
          {activeTab === 'Admin Notes' && (
            <div className="space-y-4">
              {user.role !== 'admin' ? (
'
          {activeTab === 'Admin Notes' && ("
            <div className="space-y-4">'
              {user.role !== 'admin' ? ("
                <div className="text-sm text-gray-500">Admin access required</div>
              ) : ("
                <div className="space-y-3">"
                  <textarea value={resolutionSummary} onChange={e => setResolutionSummary(e.target.value)} placeholder="Resolution summary / admin notes" rows={4} className="w-full border rounded px-3 py-2 bg-white dark:bg-black" />"
                  <div className="flex gap-2">'"
                    <button onClick={() => resolve('Under Review')} className="px-3 py-2 rounded border">Mark Under Review</button>'"
                    <button onClick={() => resolve('Resolved')} className="px-3 py-2 rounded bg-green-600 text-white">Resolve</button>
</div>
                </div>

          {activeTab === 'Admin Notes' && (
            <div className="space-y-4">
              {user.role !== 'admin' ? (
                <div className="text-sm text-gray-500">Admin access required</div>
              ) : (
                <div className="space-y-3">
                  <textarea value={resolutionSummary} onChange={e => setResolutionSummary(e.target.value)} placeholder="Resolution summary / admin notes" rows={4} className="w-full border rounded px-3 py-2 bg-white dark:bg-black" />
                  <div className="flex gap-2">
                    <button onClick={() => resolve('Under Review')} className="px-3 py-2 rounded border">Mark Under Review</button>
                    <button onClick={() => resolve('Resolved')} className="px-3 py-2 rounded bg-green-600 text-white">Resolve</button>
                  </div>
                </div>

                      className='px-3 py-2 rounded bg-green-600 text-white'
                    >
                      Resolve
                    </button>
origin/cursor/automate-test-improve-and-merge-code-2533
                  </div>
                </div>

}

:pages_backup/disputes/[id].tsx
)  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}

            </div>;
          )}
        </div>;
      )}
:pages_backup/disputes/[id].tsx
                </div>;
              </div>;
              <div className='p - 4 border rounded'>;
                <div className='font - medium mb - 3'>Timeline</div>;
                <ol className='relative border - l ml - 2'>;
                  <li className='mb - 6 ml - 4'>;
                    <div className='absolute w - 3 h - 3 bg - blue - 600 rounded - full -left - 1.5 border border - white' />;
                    <time className='text - xs text - gray - 500'>;
                      Created at {new Date (dispute.created_at).toLocaleString ()}
                    </time>;
                    <div className='text - sm'>Case opened</div>;
                  </li>;
                  {dispute.messages.map ((m: any) => (
                    <li key={m.id} className='mb - 6 ml - 4'>;
                      <div className='absolute w - 3 h - 3 bg - gray - 400 rounded - full -left - 1.5 border border - white' />;
                      <time className='text - xs text - gray - 500'>;
                        {new Date (m.created_at).toLocaleString ()}
                      </time>;
                      <div className='text - sm'>{m.author_role} messaged</div>;
                    </li>))}
                  {dispute.resolved_at && (
                    <li className='mb - 6 ml - 4'>;
                      <div className='absolute w - 3 h - 3 bg - green - 600 rounded - full -left - 1.5 border border - white' />;
                      <time className='text - xs text - gray - 500'>;
                        {new Date (dispute.resolved_at).toLocaleString ()}
                      </time>;
                      <div className='text - sm'>Case resolved</div>                    </li>)}
                </ol>;
              </div>;
            </div>)}
          {active_tab === 'Messages' && (
            <div className='space - y-4'>;
              <div className='max - h-72 overflow - auto border rounded p - 3 bg - gray - 50 dark:bg - gray - 900'>;
                {dispute.messages.length === 0 ? (
                  <div className='text - sm text - gray - 500'>No messages yet</div>) : (
                  <ul className='space - y-3'>;
                    {dispute.messages.map ((m: any) => (
                      <li key={m.id} className='text - sm'>;
                        <div className='text - gray - 500 text - xs'>;
                          {m.author_role} •{' '}
                          {new Date (m.created_at).toLocaleString ()}
                        </div>;
                        <div className='whitespace - pre - wrap'>{m.body}</div>                      </li>))}
                  </ul>)}
              </div>;
              {user.role !== 'guest' && (
                <div className='flex gap - 2'>;
                  <input;
                    value={message}
                    on_change={e => set_message (e.target.value)}
                    placeholder='Write a message';
                    className='flex - 1 border rounded px - 3 py - 2 bg - white dark:bg - black';
                  />;
                  <button;
                    on_click={send_message}
                    className='px - 3 py - 2 rounded bg - blue - 600 text - white';
                  >;
                    Send;
                  </button>                </div>)}
            </div>)}
          {active_tab === 'Attachments' && (
            <div className='space - y-3'>;
              {dispute.attachments.length === 0 ? (
                <div className='text - sm text - gray - 500'>No attachments</div>) : (
                <ul className='divide - y'>;
                  {dispute.attachments.map ((array: any) => (
                    <li;
                      key={a.id}
                      className='py - 2 flex items - center justify - between';
                    >;
                      <div className='text - sm'>;
                        <div className='font - medium'>{a.file_name}</div>;
                        <div className='text - xs text - gray - 500'>;
                          {a.mime_type} • {(a.file_size / 1024).to_fixed (1)} KB;
                        </div>;
                      </div>;
                      <a;
                        className='text - blue - 600 hover:underline';
                        href={`/api / disputes/${encodeURIComponent (dispute.id)}/download?file_name=${encodeURIComponent (a.file_name)}`}
                      >;
                        Download;
                      </a>                    </li>))}
                </ul>)}
            </div>)}
          {active_tab === 'Admin Notes' && (
            <div className='space - y-4'>;
              {user.role !== 'admin' ? (
                <div className='text - sm text - gray - 500'>;
                  Admin access required;
                </div>) : (
                <div className='space - y-3'>;
                  <textarea;
                    value={resolution_summary}
                    on_change={e => setResolutionSummary (e.target.value)}
                    placeholder='Resolution summary / admin notes';
                    rows={4}
                    className='w - full border rounded px - 3 py - 2 bg - white dark:bg - black';
                  />;
                  <div className='flex gap - 2'>;
                    <button;
                      on_click={() => resolve ('Under Review')}
                      className='px - 3 py - 2 rounded border';
                    >;
                      Mark Under Review;
                    </button>;
                    <button;
                      on_click={() => resolve ('Resolved')}
                      className='px - 3 py - 2 rounded bg - green - 600 text - white';
                    >;
                      Resolve;
                    </button>                  </div>;
                </div>)}
            </div>)}
        </div>)}
    </EnhancedLayout>);
;
:pages_backup/disputes/[id].tsx
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
:pages_backup/disputes/[id].tsx
    </EnhancedLayout>
);
origin/cursor/automate-test-improve-and-merge-code-2533

  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}

'"`
    </EnhancedLayout>
);
origin/cursor/automate-test-improve-and-merge-code-2533

    </EnhancedLayout>
);
origin/cursor/automate-test-improve-and-merge-code-2533
