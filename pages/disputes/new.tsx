import { useRouter } from 'next/router',
import React, { useEffect, useMemo, useState } from 'react',
import EnhancedLayout from '../../components/layout/EnhancedLayout',
import { useCurrentUser } from '../../utils/auth',
const REASONS = [
  'Scope DisagreementQuality IssuesDelivery DelayPayment IssueCommunication BreakdownOther'] as const,

type ReasonType = typeof REASONS[number],

export default function NewDisputePage() {
  const router = useRouter(),
  const { projectId: qProjectId, entityType, entityId, talentId, clientId } = router.query as Record<string string>,
  const user = useCurrentUser(),

  const [projectId, setProjectId] = useState(qProjectId || ''),
  const [reason, setReason] = useState<ReasonType>('Scope Disagreement'),
  const [reasonDetails, setReasonDetails] = useState(''),
  const [description, setDescription] = useState(''),
  const [files, setFiles] = useState<File[]>([]),
  const [talentUserId, setTalentUserId] = useState(talentId || ''),
  const [clientUserId, setClientUserId] = useState(clientId || (user.role === 'client' ? user.id : '')),
  const [submitting, setSubmitting] = useState(false),

  useEffect(() => {
    if (qProjectId) setProjectId(qProjectId)
  }, [qProjectId]),

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault(),
    if (!projectId || !description || !clientUserId || !talentUserId) return alert('Please fill required fields'),
    setSubmitting(true),
    try {
      const res = await fetch('/api/disputes', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ projectId, entityType, entityId, clientUserId, talentUserId, reason, reasonDetails, description })}),
      if (!res.ok) throw new Error('Failed to create'),
      const { dispute } = await res.json(),

      if (files.length > 0) {
        const filePayload = await Promise.all(
          files.map(async (f) => ({
            fileName: f.name,
            mimeType: f.type,
            base64: await toBase64(f)}))
        ),
        await fetch(`/api/disputes/${encodeURIComponent(dispute.id)}/upload`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ files: filePayload })})
      }

      router.push(`/disputes/${encodeURIComponent(dispute.id)}`)
    } catch (e: any) {
      alert(e.message || 'Error')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <EnhancedLayout>
      <div className=&quot;max-w-2xl mx-auto&quot;>
        <h1 className=&quot;text-2xl font-semibold mb-4&quot;>Raise a Dispute</h1>
        <form onSubmit={handleSubmit} className=&quot;space-y-4&quot;>
          <div>
            <label className=&quot;block text-sm font-medium&quot;>Project ID</label>
            <input value={projectId} onChange={e => setProjectId(e.target.value)} required className=&quot;mt-1 w-full border rounded px-3 py-2 bg-white dark:bg-black&quot; />
          </div>
          <div className=&quot;grid grid-cols-1 md:grid-cols-2 gap-4&quot;>
            <div>
              <label className=&quot;block text-sm font-medium&quot;>Client User ID</label>
              <input value={clientUserId} onChange={e => setClientUserId(e.target.value)} required className=&quot;mt-1 w-full border rounded px-3 py-2 bg-white dark:bg-black&quot; />
            </div>
            <div>
              <label className=&quot;block text-sm font-medium&quot;>Talent User ID</label>
              <input value={talentUserId} onChange={e => setTalentUserId(e.target.value)} required className=&quot;mt-1 w-full border rounded px-3 py-2 bg-white dark:bg-black&quot; />
            </div>
          </div>
          <div>
            <label className=&quot;block text-sm font-medium&quot;>Reason</label>
            <select value={reason} onChange={e => setReason(e.target.value as ReasonType)} className=&quot;mt-1 w-full border rounded px-3 py-2 bg-white dark:bg-black&quot;>
              {REASONS.map(r => (<option key={r} value={r}>{r}</option>))}
            </select>
          </div>
          <div>
            <label className=&quot;block text-sm font-medium&quot;>Reason Details (optional)</label>
            <input value={reasonDetails} onChange={e => setReasonDetails(e.target.value)} className=&quot;mt-1 w-full border rounded px-3 py-2 bg-white dark:bg-black&quot; />
          </div>
          <div>
            <label className=&quot;block text-sm font-medium&quot;>Description</label>
            <textarea value={description} onChange={e => setDescription(e.target.value)} required rows={5} className=&quot;mt-1 w-full border rounded px-3 py-2 bg-white dark:bg-black&quot; />
          </div>
          <div>
            <label className=&quot;block text-sm font-medium&quot;>Attachments</label>
            <input type=&quot;file&quot; multiple onChange={e => setFiles(Array.from(e.target.files || []))} className=&quot;mt-1&quot; />
          </div>
          <div className=&quot;pt-2&quot;>
            <button disabled={submitting} className=&quot;px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50&quot;>{submitting ? 'Submitting...' : 'Submit Dispute'}</button>
          </div>
        </form>
      </div>
    </EnhancedLayout>
  )
}

function toBase64(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader(),
    reader.onload = () => resolve(String(reader.result)),
    reader.onerror = reject,
    reader.readAsDataURL(file)
  })
}