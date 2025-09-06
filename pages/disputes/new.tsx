import { useRouter } from 'next/router';
import React, { useEffect, useMemo, useState } from 'react';
import EnhancedLayout from '../../components/layout/EnhancedLayout';
import { useCurrentUser } from '../../utils/auth';

<<<<<<< HEAD
=======
ursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
const REASONS = [
  'Scope Disagreement',
  'Quality Issues',
  'Delivery Delay',
  'Payment Issue',
  'Communication Breakdown',
  'Other',
] as const;

type ReasonType = (typeof REASONS)[number];

export default function NewDisputePage() {
  const router = useRouter();
  const {
    projectId: qProjectId,
    entityType,
    entityId,
    talentId,
    clientId,
<<<<<<< HEAD
  } = router.query as Record<string, string>;  const user = useCurrentUser();
=======
  } = router.query as Record<string, string>;
const REASONS = [
  'Scope DisagreementQuality IssuesDelivery DelayPayment IssueCommunication BreakdownOther'] as const;

type ReasonType = typeof REASONS[number];

export default function NewDisputePage() {
  const router = useRouter();
  const { projectId: qProjectId, entityType, entityId, talentId, clientId } = router.query as Record<string, string>;
  const { projectId: qProjectId, entityType, entityId, talentId, clientId } = router.query as Record<string, string>;
ursor/integrate-build-improve-and-re-verify-b76c
  const user = useCurrentUser();
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

  const [projectId, setProjectId] = useState(qProjectId || '');
  const [reason, setReason] = useState<ReasonType>('Scope Disagreement');
  const [reasonDetails, setReasonDetails] = useState('');
  const [description, setDescription] = useState('');
  const [files, setFiles] = useState<File[]>([]);
  const [talentUserId, setTalentUserId] = useState(talentId || '');
  const [clientUserId, setClientUserId] = useState(
    clientId || (user.role === 'client' ? user.id : '')
  );
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
<<<<<<< HEAD
    if (qProjectId) setProjectId(qProjectId);  }, [qProjectId]);
=======
    if (qProjectId) setProjectId(qProjectId);
  const [clientUserId, setClientUserId] = useState(clientId || (user.role === 'client' ? user.id : ''));
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (qProjectId) setProjectId(qProjectId)
  const [clientUserId, setClientUserId] = useState(clientId || (user.role === 'client' ? user.id : ''));
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (qProjectId) setProjectId(qProjectId)
ursor/integrate-build-improve-and-re-verify-b76c
  }, [qProjectId]);
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!projectId || !description || !clientUserId || !talentUserId)
<<<<<<< HEAD
      return alert('Please fill required fields');    setSubmitting(true);
=======
      return alert('Please fill required fields');
    if (!projectId || !description || !clientUserId || !talentUserId) return alert('Please fill required fields');
    if (!projectId || !description || !clientUserId || !talentUserId) return alert('Please fill required fields');
ursor/integrate-build-improve-and-re-verify-b76c
    setSubmitting(true);
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
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
<<<<<<< HEAD
      });      if (!res.ok) throw new Error('Failed to create');
=======
      });
        body: JSON.stringify({ projectId, entityType, entityId, clientUserId, talentUserId, reason, reasonDetails, description })});
        body: JSON.stringify({ projectId, entityType, entityId, clientUserId, talentUserId, reason, reasonDetails, description })});
ursor/integrate-build-improve-and-re-verify-b76c
      if (!res.ok) throw new Error('Failed to create');
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
      const { dispute } = await res.json();

      if (files.length > 0) {
        const filePayload = await Promise.all(
          files.map(async f => ({
            fileName: f.name,
            mimeType: f.type,
            base64: await toBase64(f),
<<<<<<< HEAD
          }))        );
=======
          }))
          files.map(async (f) => ({
            fileName: f.name,
            mimeType: f.type,
            base64: await toBase64(f)}))
          files.map(async (f) => ({
            fileName: f.name,
            mimeType: f.type,
            base64: await toBase64(f)}))
ursor/integrate-build-improve-and-re-verify-b76c
        );
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
        await fetch(`/api/disputes/${encodeURIComponent(dispute.id)}/upload`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ files: filePayload }),
        });
<<<<<<< HEAD
=======
          body: JSON.stringify({ files: filePayload })})
ursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
      }

      router.push(`/disputes/${encodeURIComponent(dispute.id)}`);
    } catch (e: any) {
      alert(e.message || 'Error');
    } finally {
<<<<<<< HEAD
      setSubmitting(false);    }
=======
      setSubmitting(false);
          body: JSON.stringify({ files: filePayload })})
      }

      router.push(`/disputes/${encodeURIComponent(dispute.id)}`)
    } catch (e: any) {
      alert(e.message || 'Error')
    } finally {
      setSubmitting(false)
      setSubmitting(false)
ursor/integrate-build-improve-and-re-verify-b76c
    }
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
  }

  return (
    <EnhancedLayout>
      <div className='max-w-2xl mx-auto'>
        <h1 className='text-2xl font-semibold mb-4'>Raise a Dispute</h1>
        <form onSubmit={handleSubmit} className='space-y-4'>
<<<<<<< HEAD
=======
      <div className="max-w-2xl mx-auto">
        <h1 className="text-2xl font-semibold mb-4">Raise a Dispute</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
ursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
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
              onChange={e => setFiles(Array.from(e.target.files || []))}
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
          <div className="pt-2">
            <button disabled={submitting} className="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50">{submitting ? 'Submitting...' : 'Submit Dispute'}</button>
ursor/integrate-build-improve-and-re-verify-b76c
          </div>
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
        </form>
      </div>
    </EnhancedLayout>
  );
<<<<<<< HEAD
=======
  )
}
  )
}
ursor/integrate-build-improve-and-re-verify-b76c

>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
function toBase64(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result));
    reader.onerror = reject;
    reader.readAsDataURL(file);
<<<<<<< HEAD
  });
=======
  });
    reader.readAsDataURL(file)
  })
}
    reader.readAsDataURL(file)
  })
}
ursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
