<<<<<<< HEAD
import { useRouter  } from 'next/router';
import useSWR from 'swr',
import React, { useMemo, useState } from 'react',
=======

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
  
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }
    
    return this.props.children;
  }
}
import {useRouter} from 'next/router';
import useSWR from 'swr';
import React, { useMemo, useState } from 'react';
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
import EnhancedLayout from '../../components/layout/EnhancedLayout';
<<<<<<< HEAD

<<<<<<< HEAD
import {useCurrentUser} from '../../utils/auth';
const fetcher = (url: string) => fetch(url).then(r => r.json());
=======
import { useCurrentUser } from '../../utils/auth';
const fetcher = (url: string) => fetch(url).then(r => r.json()),
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
export default function DisputeDetailPage() {
  const router = useRouter();
  const { id } = router.query as { id?: string }
=======
const fetcher = (url: string) => fetch(url).then(r => r && r.json());
export default function DisputeDetailPage() {;
  const router = useRouter();
  const { id } = router && router.query as { id?: string };
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  const { data, mutate } = useSWR(id ? `/api/disputes/${id}` : null, fetcher);
  const user = useCurrentUser();
  const dispute = data?.dispute;
<<<<<<< HEAD
  const [activeTab, setActiveTab] = useState<;
    'Overview' | 'Messages' | 'Attachments' | 'Admin Notes';
  >('Overview');  const [message, setMessage] = useState('');
  const [resolutionSummary, setResolutionSummary] = useState('');
<<<<<<< HEAD
  async function sendMessage() {
    if (!message.trim() |!id) return;
    await fetch(`/api/disputes/${id}/message`, {
      method: 'POST'
      headers: { 'Content-Type': 'application/json' }
      body: JSON.stringify({ body: message })
    });
    setMessage('');
    mutate();  }
  async function resolve(status?: 'Resolved' | 'Under Review' | 'Open') {
    if (!id) return;
    await fetch(`/api/disputes/${id}/resolve`, {
      method: 'POST'
      headers: { 'Content-Type': 'application/json' }
      body: JSON.stringify({ resolutionSummary, status })
=======

  async function sendMessage() {;
    if (!message && message.trim() || !id) return;
    await fetch(`/api/disputes/${id}/message`, {;
      method: 'POST',;
      headers: { 'Content-Type': 'application/json' },;
      body: JSON && JSON.stringify({ body: message }),;
    });
    setMessage('');
    mutate();  }

  async function resolve(): any (status?: 'Resolved' | 'Under Review' | 'Open') {;
    if (!id) return;
    await fetch(`/api/disputes/${id}/resolve`, {;
      method: 'POST',;
      headers: { 'Content-Type': 'application/json' },;
      body: JSON && JSON.stringify({ resolutionSummary, status }),;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    });
    setResolutionSummary('');
    mutate();  }

  return (
    <EnhancedLayout>;
      {!dispute ? (;
        <div>Loading...</div>;
      ) : (;
        <div className='max-w-4xl mx-auto'>;
          <div className='flex items-center justify-between mb-4'>;
            <h1 className='text-2xl font-semibold'>Case {dispute && dispute.id}</h1>;
            <span
<<<<<<< HEAD
              className={`px-2 py-1 rounded text-sm border ${dispute.status === 'Resolved' ? 'bg-green-100 text-green-800 border-green-300' : dispute.status === 'Under Review' ? 'bg-yellow-100 text-yellow-800 border-yellow-300' : 'bg-red-100 text-red-800 border-red-300'}`}
            >
              {dispute.status}
            </span>
          </div>
          <div className='mb-6 grid grid-cols-1 md:grid-cols-3 gap-4 text-sm'>
            <div className='p-3 border rounded'>
              <div className='font-medium text-gray-500'>Project</div>
              <div className='mt-1'>{dispute.projectId}</div>
            </div>
            <div className='p-3 border rounded'>
              <div className='font-medium text-gray-500'>Client</div>
              <div className='mt-1'>{dispute.clientUserId}</div>
            </div>
            <div className='p-3 border rounded'>
              <div className='font-medium text-gray-500'>Talent</div>
              <div className='mt-1'>{dispute.talentUserId}</div>
            </div>
          </div>
          <div className='border-b mb-4 flex gap-4 text-sm'>
            {(
              ['Overview', 'Messages', 'Attachments', 'Admin Notes'] as const
            ).map(t => (
=======
              className={`px-2 py-1 rounded text-sm border ${dispute && dispute.status === 'Resolved' ? 'bg-green-100 text-green-800 border-green-300' : dispute && dispute.status === 'Under Review' ? 'bg-yellow-100 text-yellow-800 border-yellow-300' : 'bg-red-100 text-red-800 border-red-300'}`}>;
              {dispute && dispute.status}
            </span>;
          </div>;

          <div className='mb-6 grid grid-cols-1 md:grid-cols-3 gap-4 text-sm'>;
            <div className='p-3 border rounded'>;
              <div className='font-medium text-gray-500'>Project</div>;
              <div className='mt-1'>{dispute && dispute.projectId}</div>;
            </div>;
            <div className='p-3 border rounded'>;
              <div className='font-medium text-gray-500'>Client</div>;
              <div className='mt-1'>{dispute && dispute.clientUserId}</div>;
            </div>;
            <div className='p-3 border rounded'>;
              <div className='font-medium text-gray-500'>Talent</div>;
              <div className='mt-1'>{dispute && dispute.talentUserId}</div>;
            </div>;
          </div>;

          <div className='border-b mb-4 flex gap-4 text-sm'>;
            {(;
              ['Overview', 'Messages', 'Attachments', 'Admin Notes'] as const;
            ).map(t => (;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
              <button
                key={t}
                onClick={() => setActiveTab(t)}
                className={`py-2 border-b-2 -mb-px ${activeTab === t ? 'border-blue-600 text-blue-600' : 'border-transparent text-gray-500'}`}
              >;
                {t}
              </button>            ))}
<<<<<<< HEAD
          </div>
          {activeTab === 'Overview' && (
            <div className='space-y-6'>
              <div className='p-4 border rounded'>
                <div className='font-medium mb-2'>Reason</div>
                <div className='text-sm'>
                  {dispute.reason}
                  {dispute.reasonDetails ? ` — ${dispute.reasonDetails}` : ''}
                </div>
              </div>
              <div className='p-4 border rounded'>
                <div className='font-medium mb-2'>Description</div>
                <div className='text-sm whitespace-pre-wrap'>
                  {dispute.description}
                </div>
              </div>
              <div className='p-4 border rounded'>
                <div className='font-medium mb-3'>Timeline</div>
                <ol className='relative border-l ml-2'>
                  <li className='mb-6 ml-4'>
                    <div className='absolute w-3 h-3 bg-blue-600 rounded-full -left-1.5 border border-white' />
                    <time className='text-xs text-gray-500'>
                      Created at {new Date(dispute.createdAt).toLocaleString()}
                    </time>
                    <div className='text-sm'>Case opened</div>
                  </li>
                  {dispute.messages.map((m: any) => (
                    <li key={m.id} className='mb-6 ml-4'>
                      <div className='absolute w-3 h-3 bg-gray-400 rounded-full -left-1.5 border border-white' />
                      <time className='text-xs text-gray-500'>
                        {new Date(m.createdAt).toLocaleString()}
                      </time>
                      <div className='text-sm'>{m.authorRole} messaged</div>
                    </li>
=======
          </div>;

          {activeTab === 'Overview' && (;
            <div className='space-y-6'>;
              <div className='p-4 border rounded'>;
                <div className='font-medium mb-2'>Reason</div>;
                <div className='text-sm'>;
                  {dispute && dispute.reason}
                  {dispute && dispute.reasonDetails ? ` — ${dispute && dispute.reasonDetails}` : ''}
                </div>;
              </div>;
              <div className='p-4 border rounded'>;
                <div className='font-medium mb-2'>Description</div>;
                <div className='text-sm whitespace-pre-wrap'>;
                  {dispute && dispute.description}
                </div>;
              </div>;
              <div className='p-4 border rounded'>;
                <div className='font-medium mb-3'>Timeline</div>;
                <ol className='relative border-l ml-2'>;
                  <li className='mb-6 ml-4'>;
                    <div className='absolute w-3 h-3 bg-blue-600 rounded-full -left-1 && 1.5 border border-white' />;
                    <time className='text-xs text-gray-500'>;
                      Created at {new Date(dispute && dispute.createdAt).toLocaleString()}
                    </time>;
                    <div className='text-sm'>Case opened</div>;
                  </li>;
                  {dispute && dispute.messages.map((m: any) => (;
                    <li key={m && m.id} className='mb-6 ml-4'>;
                      <div className='absolute w-3 h-3 bg-gray-400 rounded-full -left-1 && 1.5 border border-white' />;
                      <time className='text-xs text-gray-500'>;
                        {new Date(m && m.createdAt).toLocaleString()}
                      </time>;
                      <div className='text-sm'>{m && m.authorRole} messaged</div>;
                    </li>;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
                  ))}
                  {dispute && dispute.resolvedAt && (;
                    <li className='mb-6 ml-4'>;
                      <div className='absolute w-3 h-3 bg-green-600 rounded-full -left-1 && 1.5 border border-white' />;
                      <time className='text-xs text-gray-500'>;
                        {new Date(dispute && dispute.resolvedAt).toLocaleString()}
                      </time>;
                      <div className='text-sm'>Case resolved</div>                    </li>;
                  )}
                </ol>;
              </div>;
            </div>;
          )}
<<<<<<< HEAD
          {activeTab === 'Messages' && (
            <div className='space-y-4'>
              <div className='max-h-72 overflow-auto border rounded p-3 bg-gray-50 dark:bg-gray-900'>
                {dispute.messages.length === 0 ? (
                  <div className='text-sm text-gray-500'>No messages yet</div>
                ) : (
                  <ul className='space-y-3'>
                    {dispute.messages.map((m: any) => (
                      <li key={m.id} className='text-sm'>
                        <div className='text-gray-500 text-xs'>
                          {m.authorRole} •{' '}
                          {new Date(m.createdAt).toLocaleString()}
                        </div>
                        <div className='whitespace-pre-wrap'>{m.body}</div>                      </li>
=======

          {activeTab === 'Messages' && (;
            <div className='space-y-4'>;
              <div className='max-h-72 overflow-auto border rounded p-3 bg-gray-50 dark:bg-gray-900'>;
                {dispute && dispute.messages.length === 0 ? (;
                  <div className='text-sm text-gray-500'>No messages yet</div>;
                ) : (;
                  <ul className='space-y-3'>;
                    {dispute && dispute.messages.map((m: any) => (;
                      <li key={m && m.id} className='text-sm'>;
                        <div className='text-gray-500 text-xs'>;
                          {m && m.authorRole} •{' '}
                          {new Date(m && m.createdAt).toLocaleString()}
                        </div>;
                        <div className='whitespace-pre-wrap'>{m && m.body}</div>                      </li>;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
  const [activeTab, setActiveTab] = useState<'Overview' | 'Messages' | 'Attachments' | 'Admin Notes'>('Overview');
  const [message, setMessage] = useState('');
  const [resolutionSummary, setResolutionSummary] = useState('');

  async function sendMessage() {
    if (!message.trim() || !id) return;
    await fetch(`/api/disputes/${id}/message`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ body: message }) }),
    setMessage('');
    mutate()
  }

  async function resolve(status?: 'Resolved' | 'Under Review' | 'Open') {
    if (!id) return;
    await fetch(`/api/disputes/${id}/resolve`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ resolutionSummary, status }) });
    setResolutionSummary('');
    mutate()
  }

  return (
    <EnhancedLayout>
      {!dispute ? (
        <div>Loading...</div>
      ) : (
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-2xl font-semibold">Case {dispute.id}</h1>
            <span className={`px-2 py-1 rounded text-sm border ${dispute.status === 'Resolved' ? 'bg-green-100 text-green-800 border-green-300' : dispute.status === 'Under Review' ? 'bg-yellow-100 text-yellow-800 border-yellow-300' : 'bg-red-100 text-red-800 border-red-300'}`}>{dispute.status}</span>
          </div>

          <div className="mb-6 grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
            <div className="p-3 border rounded">
              <div className="font-medium text-gray-500">Project</div>
              <div className="mt-1">{dispute.projectId}</div>
            </div>
            <div className="p-3 border rounded">
              <div className="font-medium text-gray-500">Client</div>
              <div className="mt-1">{dispute.clientUserId}</div>
            </div>
            <div className="p-3 border rounded">
              <div className="font-medium text-gray-500">Talent</div>
              <div className="mt-1">{dispute.talentUserId}</div>
            </div>
          </div>

          <div className="border-b mb-4 flex gap-4 text-sm">
            {(['OverviewMessagesAttachmentsAdmin Notes'] as const).map(t => (
              <button key={t} onClick={() => setActiveTab(t)} className={`py-2 border-b-2 -mb-px ${activeTab === t ? 'border-blue-600 text-blue-600' : 'border-transparent text-gray-500'}`}>{t}</button>
            ))}
          </div>

          {activeTab === 'Overview' && (
            <div className="space-y-6">
              <div className="p-4 border rounded">
                <div className="font-medium mb-2">Reason</div>
                <div className="text-sm">{dispute.reason}{dispute.reasonDetails ? ` — ${dispute.reasonDetails}` : ''}</div>
              </div>
              <div className="p-4 border rounded">
                <div className="font-medium mb-2">Description</div>
                <div className="text-sm whitespace-pre-wrap">{dispute.description}</div>
              </div>
              <div className="p-4 border rounded">
                <div className="font-medium mb-3">Timeline</div>
                <ol className="relative border-l ml-2">
                  <li className="mb-6 ml-4">
                    <div className="absolute w-3 h-3 bg-blue-600 rounded-full -left-1.5 border border-white" />
                    <time className="text-xs text-gray-500">Created at {new Date(dispute.createdAt).toLocaleString()}</time>
                    <div className="text-sm">Case opened</div>
                  </li>
                  {dispute.messages.map((m: any) => (
                    <li key={m.id} className="mb-6 ml-4">
                      <div className="absolute w-3 h-3 bg-gray-400 rounded-full -left-1.5 border border-white" />
                      <time className="text-xs text-gray-500">{new Date(m.createdAt).toLocaleString()}</time>
                      <div className="text-sm">{m.authorRole} messaged</div>
                    </li>
                  ))}
                  {dispute.resolvedAt && (
                    <li className="mb-6 ml-4">
                      <div className="absolute w-3 h-3 bg-green-600 rounded-full -left-1.5 border border-white" />
                      <time className="text-xs text-gray-500">{new Date(dispute.resolvedAt).toLocaleString()}</time>
                      <div className="text-sm">Case resolved</div>
                    </li>
                  )}
                </ol>
              </div>
            </div>
          )}

          {activeTab === 'Messages' && (
            <div className="space-y-4">
              <div className="max-h-72 overflow-auto border rounded p-3 bg-gray-50 dark:bg-gray-900">
                {dispute.messages.length === 0 ? (
                  <div className="text-sm text-gray-500">No messages yet</div>
                ) : (
                  <ul className="space-y-3">
                    {dispute.messages.map((m: any) => (
                      <li key={m.id} className="text-sm">
                        <div className="text-gray-500 text-xs">{m.authorRole} • {new Date(m.createdAt).toLocaleString()}</div>
                        <div className="whitespace-pre-wrap">{m.body}</div>
                      </li>
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
                    ))}
                  </ul>;
                )}
<<<<<<< HEAD
              </div>;
              {user && user.role !== 'guest' && (;
                <div className='flex gap-2'>;
                  <input
                    value={message}
                    onChange={e => setMessage(e && e.target.value)}
                    placeholder='Write a message';
                    className='flex-1 border rounded px-3 py-2 bg-white dark:bg-black';
                  />;
                  <button
                    onClick={sendMessage}
                    className='px-3 py-2 rounded bg-blue-600 text-white'>;
                    Send;
                  </button>                </div>;
=======
              </div>
              {user.role !== 'guest' && (
                <div className="flex gap-2">
                  <input value={message} onChange={e => setMessage(e.target.value)} placeholder="Write a message" className="flex-1 border rounded px-3 py-2 bg-white dark:bg-black" />
                  <button onClick={sendMessage} className="px-3 py-2 rounded bg-blue-600 text-white">Send</button>
                </div>
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
              )}
            </div>;
          )}
<<<<<<< HEAD
<<<<<<< HEAD
          {activeTab === 'Attachments' && (
            <div className='space-y-3'>
              {dispute.attachments.length === 0 ? (
                <div className='text-sm text-gray-500'>No attachments</div>
              ) : (
                <ul className='divide-y'>
                  {dispute.attachments.map((a: any) => (
=======

          {activeTab === 'Attachments' && (;
            <div className='space-y-3'>;
              {dispute && dispute.attachments.length === 0 ? (;
                <div className='text-sm text-gray-500'>No attachments</div>;
              ) : (;
                <ul className='divide-y'>;
                  {dispute && dispute.attachments.map((a: any) => (;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
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
                        href={`/api/disputes/${encodeURIComponent(dispute && dispute.id)}/download?fileName=${encodeURIComponent(a && a.fileName)}`}>;
                        Download;
                      </a>                    </li>;
=======

          {activeTab === 'Attachments' && (
            <div className="space-y-3">
              {dispute.attachments.length === 0 ? (
                <div className="text-sm text-gray-500">No attachments</div>
              ) : (
                <ul className="divide-y">
                  {dispute.attachments.map((a: any) => (
                    <li key={a.id} className="py-2 flex items-center justify-between">
                      <div className="text-sm">
                        <div className="font-medium">{a.fileName}</div>
                        <div className="text-xs text-gray-500">{a.mimeType} • {(a.fileSize / 1024).toFixed(1)} KB</div>
                      </div>
                      <a className="text-blue-600 hover:underline" href={`/api/disputes/${encodeURIComponent(dispute.id)}/download?fileName=${encodeURIComponent(a.fileName)}`}>Download</a>
                    </li>
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
                  ))}
                </ul>;
              )}
            </div>;
          )}
<<<<<<< HEAD
<<<<<<< HEAD
          {activeTab === 'Admin Notes' && (
            <div className='space-y-4'>
              {user.role !== 'admin' ? (
                <div className='text-sm text-gray-500'>
                  Admin access required
                </div>
              ) : (
                <div className='space-y-3'>
=======

          {activeTab === 'Admin Notes' && (;
            <div className='space-y-4'>;
              {user && user.role !== 'admin' ? (;
                <div className='text-sm text-gray-500'>;
                  Admin access required;
                </div>;
              ) : (;
                <div className='space-y-3'>;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
                  <textarea
                    value={resolutionSummary}
                    onChange={e => setResolutionSummary(e && e.target.value)}
                    placeholder='Resolution summary / admin notes';
                    rows={4}
                    className='w-full border rounded px-3 py-2 bg-white dark:bg-black';
                  />;
                  <div className='flex gap-2'>;
                    <button
                      onClick={() => resolve('Under Review')}
                      className='px-3 py-2 rounded border';
                    >;
                      Mark Under Review;
                    </button>;
                    <button
                      onClick={() => resolve('Resolved')}
                      className='px-3 py-2 rounded bg-green-600 text-white';
                    >;
                      Resolve;
                    </button>                  </div>;
                </div>;
=======

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
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
              )}
            </div>;
          )}
        </div>;
      )}
<<<<<<< HEAD
<<<<<<< HEAD
    </EnhancedLayout>
);
=======
    </EnhancedLayout>;
  );
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
    </EnhancedLayout>
  )
}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
