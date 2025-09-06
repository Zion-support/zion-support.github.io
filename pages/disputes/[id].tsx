import { useRouter } from 'next/router'
import useSWR from 'swr'
import React, { useMemo, useState } from 'react',
import EnhancedLayout from '../../components/layout/EnhancedLayout'
import { useCurrentUser } from '../../utils/auth'
const fetcher = (url: string) => fetch(url).then(r => r.json())

export default function DisputeDetailPage() {
  const router = useRouter()
  const { id } = router.query as { id?: string }
  const { data, mutate } = useSWR(id ? `/api/disputes/${id}` : null, fetcher),
  const user = useCurrentUser()

  const dispute = data?.dispute
  const [activeTab, setActiveTab] = useState<'Overview' | 'Messages' | 'Attachments' | 'Admin Notes'>('Overview'),
  const [message, setMessage] = useState(''),
  const [resolutionSummary, setResolutionSummary] = useState(''),

  async function sendMessage() {
    if (!message.trim() || !id) return,
    await fetch(`/api/disputes/${id}/message`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ body: message }) }),
    setMessage(''),
    mutate()
  }

  async function resolve(status?: 'Resolved' | 'Under Review' | 'Open') {
    if (!id) return,
    await fetch(`/api/disputes/${id}/resolve`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ resolutionSummary, status }) }),
    setResolutionSummary(''),
    mutate()
>>>>>>> fe9f06f7950cff0c8d855f93e475fc9658604231
  }

  return (
    <EnhancedLayout>
      {_!dispute ? (
        <div>Loading...</div>
      ) : (
        <div className=&quot;max-w-4xl mx-auto&quot;>
          <div className=&quot;flex items-center justify-between mb-4&quot;>
            <h1 className=&quot;text-2xl font-semibold&quot;>Case {dispute.id}</h1>
            <span className={`px-2 py-1 rounded text-sm border ${dispute.status === 'Resolved' ? 'bg-green-100 text-green-800 border-green-300' : dispute.status === 'Under Review' ? 'bg-yellow-100 text-yellow-800 border-yellow-300' : 'bg-red-100 text-red-800 border-red-300'}`}>{dispute.status}</span>
          </div>

          <div className=&quot;mb-6 grid grid-cols-1 md:grid-cols-3 gap-4 text-sm&quot;>
            <div className=&quot;p-3 border rounded&quot;>
              <div className=&quot;font-medium text-gray-500&quot;>Project</div>
              <div className=&quot;mt-1&quot;>{dispute.projectId}</div>
            </div>
            <div className=&quot;p-3 border rounded&quot;>
              <div className=&quot;font-medium text-gray-500&quot;>Client</div>
              <div className=&quot;mt-1&quot;>{dispute.clientUserId}</div>
            </div>
            <div className=&quot;p-3 border rounded&quot;>
              <div className=&quot;font-medium text-gray-500&quot;>Talent</div>
              <div className=&quot;mt-1&quot;>{dispute.talentUserId}</div>
            </div>
          </div>

          <div className="border-b mb-4 flex gap-4 text-sm">
              <button key={t} onClick={() => setActiveTab(t)} className={`py-2 border-b-2 -mb-px ${activeTab === t ? 'border-blue-600 text-blue-600' : 'border-transparent text-gray-500'}`}>{t}</button>
            ))}
          </div>

          {activeTab === 'Overview' && (
            <div className=&quot;space-y-6&quot;>
              <div className=&quot;p-4 border rounded&quot;>
                <div className=&quot;font-medium mb-2&quot;>Reason</div>
                <div className=&quot;text-sm&quot;>{dispute.reason}{dispute.reasonDetails ? ` — ${dispute.reasonDetails}` : ''}</div>
              </div>
              <div className=&quot;p-4 border rounded&quot;>
                <div className=&quot;font-medium mb-2&quot;>Description</div>
                <div className=&quot;text-sm whitespace-pre-wrap&quot;>{dispute.description}</div>
              </div>
              <div className=&quot;p-4 border rounded&quot;>
                <div className=&quot;font-medium mb-3&quot;>Timeline</div>
                <ol className=&quot;relative border-l ml-2&quot;>
                  <li className=&quot;mb-6 ml-4&quot;>
                    <div className=&quot;absolute w-3 h-3 bg-blue-600 rounded-full -left-1.5 border border-white&quot; />
                    <time className=&quot;text-xs text-gray-500&quot;>Created at {new Date(dispute.createdAt).toLocaleString()}</time>
                    <div className=&quot;text-sm&quot;>Case opened</div>
                  </li>
                  {dispute.messages.map((m: any) => (
                    <li key={m.id} className=&quot;mb-6 ml-4&quot;>
                      <div className=&quot;absolute w-3 h-3 bg-gray-400 rounded-full -left-1.5 border border-white&quot; />
                      <time className=&quot;text-xs text-gray-500&quot;>{new Date(m.createdAt).toLocaleString()}</time>
                      <div className=&quot;text-sm&quot;>{m.authorRole} messaged</div>
                    </li>
                  ))}
                  {dispute.resolvedAt && (
                    <li className=&quot;mb-6 ml-4&quot;>
                      <div className=&quot;absolute w-3 h-3 bg-green-600 rounded-full -left-1.5 border border-white&quot; />
                      <time className=&quot;text-xs text-gray-500&quot;>{new Date(dispute.resolvedAt).toLocaleString()}</time>
                      <div className=&quot;text-sm&quot;>Case resolved</div>
            {_(['Overview', _'Messages', _'Attachments', _'Admin Notes'] as const).map(_t => (
              <button key={t} onClick={_() => setActiveTab(t)} className={_`py-2 border-b-2 -mb-px ${activeTab === t ? 'border-blue-600 text-blue-600' : 'border-transparent text-gray-500'}`}>{_t}</button>
            ))}
          </div>

          {_activeTab === 'Overview' && (
            <div className="space-y-6">
              <div className="p-4 border rounded">
                <div className="font-medium mb-2">Reason</div>
                <div className="text-sm">{dispute.reason}{_dispute.reasonDetails ? ` — ${dispute.reasonDetails}` : ''}</div>
              </div>
              <div className="p-4 border rounded">
                <div className="font-medium mb-2">Description</div>
                <div className="text-sm whitespace-pre-wrap">{_dispute.description}</div>
              </div>
              <div className="p-4 border rounded">
                <div className="font-medium mb-3">Timeline</div>
                <ol className="relative border-l ml-2">
                  <li className="mb-6 ml-4">
                    <div className="absolute w-3 h-3 bg-blue-600 rounded-full -left-1.5 border border-white" />
                    <time className="text-xs text-gray-500">Created at {_new Date(dispute.createdAt).toLocaleString()}</time>
                    <div className="text-sm">Case opened</div>
                  </li>
                  {_dispute.messages.map(_(m: unknown) => (
                    <li key={m.id} className="mb-6 ml-4">
                      <div className="absolute w-3 h-3 bg-gray-400 rounded-full -left-1.5 border border-white" />
                      <time className="text-xs text-gray-500">{_new Date(m.createdAt).toLocaleString()}</time>
                      <div className="text-sm">{_m.authorRole} messaged</div>
                    </li>
                  ))}
                  {_dispute.resolvedAt && (
                    <li className="mb-6 ml-4">
                      <div className="absolute w-3 h-3 bg-green-600 rounded-full -left-1.5 border border-white" />
                      <time className="text-xs text-gray-500">{new Date(dispute.resolvedAt).toLocaleString()}</time>
                      <div className="text-sm">Case resolved</div>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                    </li>
                  )}
                </ol>
              </div>
            </div>
          )}

          {activeTab === 'Messages' && (
            <div className=&quot;space-y-4&quot;>
              <div className=&quot;max-h-72 overflow-auto border rounded p-3 bg-gray-50 dark:bg-gray-900&quot;>
                {dispute.messages.length === 0 ? (
                  <div className=&quot;text-sm text-gray-500&quot;>No messages yet</div>
                ) : (
                  <ul className=&quot;space-y-3&quot;>
                    {dispute.messages.map((m: any) => (
                      <li key={m.id} className=&quot;text-sm&quot;>
                        <div className=&quot;text-gray-500 text-xs&quot;>{m.authorRole} • {new Date(m.createdAt).toLocaleString()}</div>
                        <div className=&quot;whitespace-pre-wrap&quot;>{m.body}</div>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              {user.role !== 'guest' && (
                <div className=&quot;flex gap-2&quot;>
                  <input value={message} onChange={e => setMessage(e.target.value)} placeholder=&quot;Write a message&quot; className=&quot;flex-1 border rounded px-3 py-2 bg-white dark:bg-black&quot; />
                  <button onClick={sendMessage} className=&quot;px-3 py-2 rounded bg-blue-600 text-white&quot;>Send</button>
                </div>
              )}
            </div>
          )}

          {activeTab === 'Attachments' && (
            <div className=&quot;space-y-3&quot;>
              {dispute.attachments.length === 0 ? (
                <div className=&quot;text-sm text-gray-500&quot;>No attachments</div>
              ) : (
                <ul className=&quot;divide-y&quot;>
                  {dispute.attachments.map((a: any) => (
                    <li key={a.id} className=&quot;py-2 flex items-center justify-between&quot;>
                      <div className=&quot;text-sm&quot;>
                        <div className=&quot;font-medium&quot;>{a.fileName}</div>
                        <div className=&quot;text-xs text-gray-500&quot;>{a.mimeType} • {(a.fileSize / 1024).toFixed(1)} KB</div>
                      </div>
                      <a className=&quot;text-blue-600 hover:underline&quot; href={`/api/disputes/${encodeURIComponent(dispute.id)}/download?fileName=${encodeURIComponent(a.fileName)}`}>Download</Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          )}

          {activeTab === 'Admin Notes' && (
            <div className=&quot;space-y-4&quot;>
              {user.role !== 'admin' ? (
                <div className=&quot;text-sm text-gray-500&quot;>Admin access required</div>
              ) : (
                <div className=&quot;space-y-3&quot;>
                  <textarea value={resolutionSummary} onChange={e => setResolutionSummary(e.target.value)} placeholder=&quot;Resolution summary / admin notes&quot; rows={4} className=&quot;w-full border rounded px-3 py-2 bg-white dark:bg-black&quot; />
                  <div className=&quot;flex gap-2&quot;>
                    <button onClick={() => resolve('Under Review')} className=&quot;px-3 py-2 rounded border&quot;>Mark Under Review</button>
                    <button onClick={() => resolve('Resolved')} className=&quot;px-3 py-2 rounded bg-green-600 text-white&quot;>Resolve</button>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </EnhancedLayout>
  )
}