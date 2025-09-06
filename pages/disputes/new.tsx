import { useRouter  } from 'next/router';
import React, { useEffect, useMemo, useState } from 'react',
import EnhancedLayout from '../../components/layout/EnhancedLayout';
<<<<<<< HEAD
<<<<<<< HEAD
import { useCurrentUser } from '../../utils/auth';
const REASONS = null;
    reader.readAsDataURL(file)
  })
}
=======
import {useCurrentUser} from '../../utils/auth';
=======
import { useCurrentUser } from '../../utils/auth';

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
const REASONS = [
  'Scope Disagreement'
  'Quality Issues'
  'Delivery Delay'
  'Payment Issue'
  'Communication Breakdown'
  'Other'
] as const;
type ReasonType = (typeof REASONS)[number];
<<<<<<< HEAD
export default function NewDisputePage() {
  const router = useRouter();
  const {
    projectId: qProjectId
    entityType
    entityId
    talentId
    clientId
  } = router.query as Record<string, string>;  const user = useCurrentUser();
  const [projectId, setProjectId] = useState(qProjectId |'');
=======
}

export default function NewDisputePage() {
  const router = useRouter();
  const {
    projectId: qProjectId,
    entityType,
    entityId,
    talentId,
    clientId,
  } = router.query as Record<string, string>;
  const user = useCurrentUser();

  const [projectId, setProjectId] = useState(qProjectId || '');
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
  const [reason, setReason] = useState<ReasonType>('Scope Disagreement');
  const [reasonDetails, setReasonDetails] = useState('');
  const [description, setDescription] = useState('');
  const [files, setFiles] = useState<File[]>([]);
<<<<<<< HEAD
  const [talentUserId, setTalentUserId] = useState(talentId |'');
=======
  const [talentUserId, setTalentUserId] = useState(talentId || '');
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
  const [clientUserId, setClientUserId] = useState(
    clientId |(user.role === 'client' ? user.id : '')
  );
  const [submitting, setSubmitting] = useState(false);
  useEffect(() => {
<<<<<<< HEAD
    if (qProjectId) setProjectId(qProjectId);  }, [qProjectId]);
  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!projectId |!description |!clientUserId |!talentUserId)
      return alert('Please fill required fields');    setSubmitting(true);
    try {
      const res = await fetch('/api/disputes', {
        method: 'POST'
        headers: { 'Content-Type': 'application/json' }
        body: JSON.stringify({
          projectId
          entityType
          entityId
          clientUserId
          talentUserId
          reason
          reasonDetails
          description
        })
      });      if (!res.ok) throw new Error('Failed to create');
=======
    if (qProjectId) setProjectId(qProjectId);
  }, [qProjectId]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!projectId || !description || !clientUserId || !talentUserId)
      return alert('Please fill required fields');
    setSubmitting(true);
    try {
      const res = await fetch('/api/disputes', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          projectId,
          entityType,
          entityId,
          clientUserId,
          talentUserId,
          reason,
          reasonDetails,
          description,
        }),
      });
      if (!res.ok) throw new Error('Failed to create');
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
      const { dispute } = await res.json();
      if (files.length > 0) {
        const filePayload = await Promise.all(
          files.map(async f => ({
<<<<<<< HEAD
            fileName: f.name
            mimeType: f.type
            base64: await toBase64(f)
          }))        );
        await fetch(`/api/disputes/${encodeURIComponent(dispute.id)}/upload`, {
          method: 'POST'
          headers: { 'Content-Type': 'application/json' }
          body: JSON.stringify({ files: filePayload })
=======
            fileName: f.name,
            mimeType: f.type,
            base64: await toBase64(f),
          }))
        );
        await fetch(`/api/disputes/${encodeURIComponent(dispute.id)}/upload`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ files: filePayload }),
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
        });
      }
      router.push(`/disputes/${encodeURIComponent(dispute.id)}`);
    } catch (e: any) {
      alert(e.message |'Error');
    } finally {
<<<<<<< HEAD
      setSubmitting(false);    }
=======
      setSubmitting(false);
    }
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
  }
  return (
    <EnhancedLayout>
      <div className='max-w-2xl mx-auto'>
        <h1 className='text-2xl font-semibold mb-4'>Raise a Dispute</h1>
        <form onSubmit={handleSubmit} className='space-y-4'>
          <div>
            <label className='block text-sm font-medium'>Project ID</label>
            <input
              value={projectId}
              onChange={e => setProjectId(e.target.value)}
              required
              className='mt-1 w-full border rounded px-3 py-2 bg-white dark:bg-black'
            />
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            <div>
              <label className='block text-sm font-medium'>
                Client User ID
              </label>
              <input
                value={clientUserId}
                onChange={e => setClientUserId(e.target.value)}
                required
                className='mt-1 w-full border rounded px-3 py-2 bg-white dark:bg-black'
              />
            </div>
            <div>
              <label className='block text-sm font-medium'>
                Talent User ID
              </label>
              <input
                value={talentUserId}
                onChange={e => setTalentUserId(e.target.value)}
                required
                className='mt-1 w-full border rounded px-3 py-2 bg-white dark:bg-black'
              />
            </div>
          </div>
          <div>
            <label className='block text-sm font-medium'>Reason</label>
            <select
              value={reason}
              onChange={e => setReason(e.target.value as ReasonType)}
              className='mt-1 w-full border rounded px-3 py-2 bg-white dark:bg-black'
            >
              {REASONS.map(r => (
                <option key={r} value={r}>
                  {r}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className='block text-sm font-medium'>
              Reason Details (optional)
            </label>
            <input
              value={reasonDetails}
              onChange={e => setReasonDetails(e.target.value)}
              className='mt-1 w-full border rounded px-3 py-2 bg-white dark:bg-black'
            />
          </div>
          <div>
            <label className='block text-sm font-medium'>Description</label>
            <textarea
              value={description}
              onChange={e => setDescription(e.target.value)}
              required
              rows={5}
              className='mt-1 w-full border rounded px-3 py-2 bg-white dark:bg-black'
            />
          </div>
          <div>
            <label className='block text-sm font-medium'>Attachments</label>
            <input
              type='file'
              multiple
              onChange={e => setFiles(Array.from(e.target.files |[]))}
              className='mt-1'
            />
          </div>
          <div className='pt-2'>
            <button
              disabled={submitting}
              className='px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50'
            >
              {submitting ? 'Submitting...' : 'Submit Dispute'}
<<<<<<< HEAD
            </button>          </div>
=======
            </button>
          </div>
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
        </form>
      </div>
    </EnhancedLayout>
  );
<<<<<<< HEAD
=======

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
function toBase64(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result));
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
<<<<<<< HEAD
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
=======
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
