import { useRouter } from 'next/router';
import React, { useEffect, useMemo, useState } from 'react';
import EnhancedLayout from '../../components/layout/EnhancedLayout';
import { useCurrentUser } from '../../utils/auth';
const REASONS = $2;
type ReasonType = $2;
export default function NewDisputePage() {
  const router = useRouter($2);
  const { projectId: qProjectId, entityType, entityId, talentId, clientId } = router.query as Record<string, string>,
  const user = useCurrentUser($2);
  const [projectId, setProjectId] = useState($2);
  const [reason, setReason] = useState<ReasonType>('Scope Disagreement'),
  const [reasonDetails, setReasonDetails] = useState($2);
  const [description, setDescription] = useState($2);
  const [files, setFiles] = useState<File[]>([]),
  const [talentUserId, setTalentUserId] = useState($2);
  const [clientUserId, setClientUserId] = useState(clientId || (user.role = $2;
  const [submitting, setSubmitting] = useState($2);
  useEffect(() => {
    if (qProjectId) setProjectId(qProjectId)
  }, [qProjectId]),

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault($2);
    if (!projectId || !description || !clientUserId || !talentUserId) return alert($2);
    setSubmitting($2);
    try {
      const res = await fetch('/api/disputes', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ projectId, entityType, entityId, clientUserId, talentUserId, reason, reasonDetails, description })}),
      if (!res.ok) throw new Error($2);
      const { dispute } = await res.json($2);
      if (files.length > 0) {
        const filePayload = $2;
            mimeType: f.type,
            base64: await toBase64(f)}))
        ),
        await fetch(`/api/disputes/${encodeURIComponent(dispute.id)}/upload`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ files: filePayload})})
      }

      router.push(`/disputes/${encodeURIComponent(dispute.id)}`)
    } catch (e: any) {
      alert(e.message || 'Error')
    } finally {
      setSubmitting(false)
    }

  return (
    <EnhancedLayout>
      <div className="max-w-2xl mx-auto">
        <h1 className="text-2xl font-semibold mb-4">Raise a Dispute</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium">Project ID</label>
            <input value={projectId} onChange={e => setProjectId(e.target.value)} required className="mt-1 w-full border rounded px-3 py-2 bg-white dark:bg-black" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium">Client User ID</label>
              <input value={clientUserId} onChange={e => setClientUserId(e.target.value)} required className="mt-1 w-full border rounded px-3 py-2 bg-white dark:bg-black" />
            </div>
            <div>
              <label className="block text-sm font-medium">Talent User ID</label>
              <input value={talentUserId} onChange={e => setTalentUserId(e.target.value)} required className="mt-1 w-full border rounded px-3 py-2 bg-white dark:bg-black" />
            </div>
          <div>
            <label className="block text-sm font-medium">Reason</label>
            <select value={reason} onChange={e => setReason(e.target.value as ReasonType)} className="mt-1 w-full border rounded px-3 py-2 bg-white dark:bg-black">
              {REASONS.map(r => (<option key={r} value={r}>{r}</option>))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium">Reason Details (optional)</label>
            <input value={reasonDetails} onChange={e => setReasonDetails(e.target.value)} className="mt-1 w-full border rounded px-3 py-2 bg-white dark:bg-black" />
          </div>
          <div>
            <label className="block text-sm font-medium">Description</label>
            <textarea value={description} onChange={e => setDescription(e.target.value)} required rows={5} className="mt-1 w-full border rounded px-3 py-2 bg-white dark:bg-black" />
          </div>
          <div>
            <label className="block text-sm font-medium">Attachments</label>
            <input type="file" multiple onChange={e => setFiles(Array.from(e.target.files || []))} className="mt-1" />
          </div>
          <div className="pt-2">
            <button disabled={submitting} className="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50">{submitting ? 'Submitting...' : 'Submit Dispute'}</button>
          </div>
        </form>
      </div>
    </EnhancedLayout>
  )
}

function toBase64(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader($2);
    reader.onload = $2;
    reader.onerror = $2;
    reader.readAsDataURL(file)
  })
}