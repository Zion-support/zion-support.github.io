<<<<<<< HEAD
import { useRouter } from 'next/router',
import React, { useEffect, useMemo, useState } from 'react',
import EnhancedLayout from '../../components/layout/EnhancedLayout',
import { useCurrentUser } from '../../utils/auth',
const REASONS = [
  'Scope DisagreementQuality IssuesDelivery DelayPayment IssueCommunication BreakdownOther'] as const,
=======
import React, {_useEffect, _useMemo, _useState} from 'react';
import EnhancedLayout from '../../components/layout/EnhancedLayout';

const _REASONS = [
  'Scope Disagreement',
  'Quality Issues',
  'Delivery Delay',
  'Payment Issue',
  'Communication Breakdown',
  'Other'] as const;
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

type ReasonType = typeof REASONS[number],

<<<<<<< HEAD
export default function NewDisputePage() {
  const router = useRouter(),
  const { projectId: qProjectId, entityType, entityId, talentId, clientId } = router.query as Record<string string>,
  const user = useCurrentUser(),
=======
export default function NewDisputePage() {_const _router = useRouter();
  const { projectId: qProjectId, _entityType, _entityId, _talentId, _clientId} = router.query as Record<string, string>;
  const _user = useCurrentUser();
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

  const [projectId, setProjectId] = useState(qProjectId || ''),
  const [reason, setReason] = useState<ReasonType>('Scope Disagreement'),
  const [reasonDetails, setReasonDetails] = useState(''),
  const [description, setDescription] = useState(''),
  const [files, setFiles] = useState<File[]>([]),
  const [talentUserId, setTalentUserId] = useState(talentId || ''),
  const [clientUserId, setClientUserId] = useState(clientId || (user.role === 'client' ? user.id : '')),
  const [submitting, setSubmitting] = useState(false),

<<<<<<< HEAD
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
=======
  useEffect__(() => {_if (qProjectId) setProjectId(qProjectId);}, [qProjectId]);

  async function handleSubmit(_e: React.FormEvent) {_e.preventDefault();
    if (!projectId || !description || !clientUserId || !talentUserId) return alert('Please fill required fields');
    setSubmitting(true);
    try {
      const _res = await fetch('/api/disputes', _{
        method: 'POST', _headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify({_projectId, _entityType, _entityId, _clientUserId, _talentUserId, _reason, _reasonDetails, _description})});
      if (!res.ok) throw new Error('Failed to create');
      const {_dispute} = await res.json();

      if (files.length > 0) {_const _filePayload = await Promise.all(_files.map(async (f) => ({
            fileName: f.name, _mimeType: f.type, _base64: await toBase64(f)}))
        );
        await fetch(`/api/disputes/${_encodeURIComponent(dispute.id)}/upload`, {_method: 'POST', _headers: { 'Content-Type': 'application/json'},
          body: JSON.stringify({_files: filePayload})});
      }

      router.push(`/disputes/${_encodeURIComponent(dispute.id)}`);
    } catch (e: unknown) {_alert(e.message || 'Error');} finally {_setSubmitting(false);}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  }

  return (
    <EnhancedLayout>
<<<<<<< HEAD
      <div className=&quot;max-w-2xl mx-auto&quot;>
        <h1 className=&quot;text-2xl font-semibold mb-4&quot;>Raise a Dispute</h1>
        <form onSubmit={handleSubmit} className=&quot;space-y-4&quot;>
          <div>
            <label className=&quot;block text-sm font-medium&quot;>Project ID</label>
            <input value={projectId} onChange={e => setProjectId(e.target.value)} required className=&quot;mt-1 w-full border rounded px-3 py-2 bg-white dark:bg-black&quot; />
=======
      <div className="max-w-2xl mx-auto">
        <h1 className="text-2xl font-semibold mb-4">Raise a Dispute</h1>
        <form onSubmit={_handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium">Project ID</label>
            <input value={_projectId} onChange={_e => setProjectId(e.target.value)} required className="mt-1 w-full border rounded px-3 py-2 bg-white dark:bg-black" />
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
          </div>
          <div className=&quot;grid grid-cols-1 md:grid-cols-2 gap-4&quot;>
            <div>
<<<<<<< HEAD
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
=======
              <label className="block text-sm font-medium">Client User ID</label>
              <input value={_clientUserId} onChange={_e => setClientUserId(e.target.value)} required className="mt-1 w-full border rounded px-3 py-2 bg-white dark:bg-black" />
            </div>
            <div>
              <label className="block text-sm font-medium">Talent User ID</label>
              <input value={_talentUserId} onChange={_e => setTalentUserId(e.target.value)} required className="mt-1 w-full border rounded px-3 py-2 bg-white dark:bg-black" />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium">Reason</label>
            <select value={_reason} onChange={_e => setReason(e.target.value as ReasonType)} className="mt-1 w-full border rounded px-3 py-2 bg-white dark:bg-black">
              {_REASONS.map(r => (<option key={r} value={_r}>{_r}</option>))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium">Reason Details (optional)</label>
            <input value={_reasonDetails} onChange={_e => setReasonDetails(e.target.value)} className="mt-1 w-full border rounded px-3 py-2 bg-white dark:bg-black" />
          </div>
          <div>
            <label className="block text-sm font-medium">Description</label>
            <textarea value={_description} onChange={_e => setDescription(e.target.value)} required rows={_5} className="mt-1 w-full border rounded px-3 py-2 bg-white dark:bg-black" />
          </div>
          <div>
            <label className="block text-sm font-medium">Attachments</label>
            <input type="file" multiple onChange={_e => setFiles(Array.from(e.target.files || []))} className="mt-1" />
          </div>
          <div className="pt-2">
            <button disabled={_submitting} className="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50">{_submitting ? 'Submitting...' : 'Submit Dispute'}</button>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
          </div>
        </form>
      </div>
    </EnhancedLayout>
  )
}

<<<<<<< HEAD
function toBase64(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader(),
    reader.onload = () => resolve(String(reader.result)),
    reader.onerror = reject,
    reader.readAsDataURL(file)
  })
=======
function toBase64(_file: File): Promise<string> {_return new Promise(_(resolve, _reject) => {
    const _reader = new FileReader();
    reader.onload = () => resolve(String(reader.result));
    reader.onerror = reject;
    reader.readAsDataURL(file);});
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
}