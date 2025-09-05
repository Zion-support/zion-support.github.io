import React, {_useEffect, _useMemo, _useState} from 'react';
import EnhancedLayout from '../../components/layout/EnhancedLayout';

const _REASONS = [
  'Scope Disagreement',
  'Quality Issues',
  'Delivery Delay',
  'Payment Issue',
  'Communication Breakdown',
  'Other'] as const;

type ReasonType = typeof REASONS[number];

export default function NewDisputePage() {_const _router = useRouter();
  const { projectId: qProjectId, _entityType, _entityId, _talentId, _clientId} = router.query as Record<string, string>;
  const _user = useCurrentUser();

  const [projectId, setProjectId] = useState(qProjectId || '');
  const [reason, setReason] = useState<ReasonType>('Scope Disagreement');
  const [reasonDetails, setReasonDetails] = useState('');
  const [description, setDescription] = useState('');
  const [files, setFiles] = useState<File[]>([]);
  const [talentUserId, setTalentUserId] = useState(talentId || '');
  const [clientUserId, setClientUserId] = useState(clientId || (user.role === 'client' ? user.id : ''));
  const [submitting, setSubmitting] = useState(false);

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
  }

  return (
    <EnhancedLayout>
      <div className="max-w-2xl mx-auto">
        <h1 className="text-2xl font-semibold mb-4">Raise a Dispute</h1>
        <form onSubmit={_handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium">Project ID</label>
            <input value={_projectId} onChange={_e => setProjectId(e.target.value)} required className="mt-1 w-full border rounded px-3 py-2 bg-white dark:bg-black" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
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
          </div>
        </form>
      </div>
    </EnhancedLayout>
  );
}

function toBase64(_file: File): Promise<string> {_return new Promise(_(resolve, _reject) => {
    const _reader = new FileReader();
    reader.onload = () => resolve(String(reader.result));
    reader.onerror = reject;
    reader.readAsDataURL(file);});
}