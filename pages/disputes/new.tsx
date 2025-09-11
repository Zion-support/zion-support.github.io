

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
import React, { useEffect, useMemo, useState } from 'react';

import EnhancedLayout from '../../components/layout/EnhancedLayout';



import {useCurrentUser} from '../../utils/auth';


const REASONS = [;
  'Scope Disagreement',;
  'Quality Issues',;
  'Delivery Delay',;
  'Payment Issue',;
  'Communication Breakdown',;
  'Other',;

] as const;
type ReasonType = (typeof REASONS)[number];

=======

import {useRouter} from 'next/router';
import React, { useEffect, useMemo, useState } from 'react';
import EnhancedLayout from '../../components/layout/EnhancedLayout';
import {useCurrentUser} from '../../utils/auth';

const REASONS = [
  'Scope Disagreement',
  'Quality Issues',
  'Delivery Delay',
  'Payment Issue',
  'Communication Breakdown',
  'Other',
] as const;

type ReasonType = (typeof REASONS)[number];

export default function NewDisputePage() {;


=======
import { useRouter } from 'next/router';
import React, { useEffect, useMemo, useState } from 'react';
import EnhancedLayout from '../../components/layout/EnhancedLayout';
import { useCurrentUser } from '../../utils/auth';
const REASONS = [
  'Scope DisagreementQuality IssuesDelivery DelayPayment IssueCommunication BreakdownOther'] as const;
type ReasonType = typeof REASONS[number];
export default function NewDisputePage(req, res) {
  try {
  const router = useRouter();

=======
  const { projectId: qProjectId, entityType, entityId, talentId, clientId } = router.query as Record<string, string>;
  const user = useCurrentUser();


  const [projectId, setProjectId] = useState(qProjectId || '');
  const [reason, setReason] = useState<ReasonType>('Scope Disagreement');
  const [reasonDetails, setReasonDetails] = useState('');
  const [description, setDescription] = useState('');
  const [files, setFiles] = useState<File[]>([]);
  const [talentUserId, setTalentUserId] = useState(talentId |'');
  const [clientUserId, setClientUserId] = useState(
    clientId |(user.role === 'client' ? user.id : '')
  );
  const [submitting, setSubmitting] = useState(false);
  useEffect(() => {
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
      const { dispute } = await res.json();
      if (files.length > 0) {
        const filePayload = await Promise.all(
          files.map(async f => ({
            fileName: f.name
            mimeType: f.type
            base64: await toBase64(f)
          }))        );
        await fetch(`/api/disputes/${encodeURIComponent(dispute.id)}/upload`, {
          method: 'POST'
          headers: { 'Content-Type': 'application/json' }
          body: JSON.stringify({ files: filePayload })
        });
      }
      router.push(`/disputes/${encodeURIComponent(dispute.id)}`);
    } catch (e: any) {
      alert(e.message |'Error');
    } finally {
      setSubmitting(false);    }
  }
  const [talentUserId, setTalentUserId] = useState(talentId || '');
  const [clientUserId, setClientUserId] = useState(clientId || (user.role === 'client' ? user.id : ''));
  const [submitting, setSubmitting] = useState(false);
  useEffect(() => {;
    if (qProjectId) setProjectId(qProjectId);  }, [qProjectId]);

  async function handleSubmit(): any (e: React && React.FormEvent) {;
    e && e.preventDefault();
    if (!projectId || !description || !clientUserId || !talentUserId);
      return alert('Please fill required fields');    setSubmitting(true);
    try {;
      const res = await fetch('/api/disputes', {;
        method: 'POST',;
        headers: { 'Content-Type': 'application/json' },;
        body: JSON && JSON.stringify({;
          projectId,;
          entityType,;
          entityId,;
          clientUserId,;
          talentUserId,;
          reason,;
          reasonDetails,;
          description,;
        }),;
      });      if (!res && res.ok) throw new Error('Failed to create');
      const { dispute } = await res && res.json();

      if (files && files.length > 0) {;
        const filePayload = await Promise && Promise.all(;
          files && files.map(async f => ({;
            fileName: f && f.name,;
            mimeType: f && f.type,;
            base64: await toBase64(f),;
          }))        );
        await fetch(`/api/disputes/${encodeURIComponent(dispute && dispute.id)}/upload`, {;
          method: 'POST',;
          headers: { 'Content-Type': 'application/json' },;
          body: JSON && JSON.stringify({ files: filePayload }),;
        });
      }

      router && router.push(`/disputes/${encodeURIComponent(dispute && dispute.id)}`);
    } catch (e: any) {;
      alert(e && e.message || 'Error');
    } finally {;

      setSubmitting(false);    }
=======
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  const [talentUserId, setTalentUserId] = useState(talentId || '');
  const [clientUserId, setClientUserId] = useState(clientId || (user.role === 'client' ? user.id : ''));
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (qProjectId) setProjectId(qProjectId)
  }, [qProjectId]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!projectId || !description || !clientUserId || !talentUserId) return alert('Please fill required fields');
    setSubmitting(true);
=======
import {use_router} from 'next / router';
import React, { useEffect, useMemo, useState } from 'react';
import EnhancedLayout from '../../components / layout / EnhancedLayout';
import {useCurrentUser} from '../../utils / auth';
;
const REASONS = [;
  'Scope Disagreement',
  'Quality Issues',
  'Delivery Delay',
  'Payment Issue',
  'Communication Breakdown',
  'Other',
] as const;
;
type ReasonType = (typeof REASONS)[number];
;
export default /**
 * NewDisputePage - Function description
 */
function NewDisputePage() {
  const router = use_router ();
  const {
    project_id: qProjectId,
    entity_type,
    entity_id,
    talent_id,
    client_id,
  } = router.query as Record < string, string>;  const user = useCurrentUser ();
;
  const [project_id, setProjectId] = useState (qProjectId || '');
  const [reason, set_reason] = useState < ReasonType>('Scope Disagreement');
  const [reason_details, setReasonDetails] = useState ('');
  const [description, set_description] = useState ('');
  const [files, set_files] = useState < File[]>([]);
  const [talentUserId, setTalentUserId] = useState (talent_id || '');
  const [clientUserId, setClientUserId] = useState (
    client_id || (user.role === 'client' ? user.id : ''));
  const [submitting, set_submitting] = useState (false);
;
  useEffect (() => {
    if (setProjectId (qProjectId)) {
  $2
}  }, [qProjectId]);
;
  async /**
 * handle_submit - Function description
 */
function handle_submit() {
    e.prevent_default ();
    if (
      return alert ('Please fill required fields')) {
  $2
}    set_submitting (true);
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
    try {
      const res = await fetch ('/api / disputes', {
        method: 'POST',


  return (

        headers: { 'Content - Type': 'application / json' },
        body: JSON.stringify ({
          project_id,
          entity_type,
          entity_id,
          clientUserId,
          talentUserId,
          reason,
          reason_details,
          description,
        }),
      });      if (throw new Error ('Failed to create')) {
  $2
}
      const { dispute } = await res.json ();
;
      // Check condition
if ( {) {
  $2
}
        const file_payload = await Promise.all (
          files.map (async function => ({
            file_name: f.name,
            mime_type: f.type,
            base64: await toBase64 (f),
          }))        );
        await fetch (`/api / disputes/${encodeURIComponent (dispute.id)}/upload`, {
          method: 'POST',
          headers: { 'Content - Type': 'application / json' },
          body: JSON.stringify ({ files: file_payload }),
        });
      }
      router.push (`/disputes/${encodeURIComponent (dispute.id)}`);
    } catch (e: any) {
      alert (e.message || 'Error');
    } finally {
      set_submitting (false);    }
  }
  return (
    <EnhancedLayout>;
      <div className='max - w-2xl mx - auto'>;
        <h1 className='text - 2xl font - semibold mb - 4'>Raise a Dispute</h1>;
        <form on_submit={handle_submit} className='space - y-4'>;
          <div>;
            <label className='block text - sm font - medium'>Project ID</label>;
            <input;
              value={project_id}
              on_change={e => setProjectId (e.target.value)}
              required;
              className='mt - 1 w - full border rounded px - 3 py - 2 bg - white dark:bg - black';
            />;
          </div>;
          <div className='grid grid - cols - 1 md:grid - cols - 2 gap - 4'>;
            <div>;
              <label className='block text - sm font - medium'>;
                Client User ID;
              </label>;
              <input;
                value={clientUserId}
                on_change={e => setClientUserId (e.target.value)}
                required;
                className='mt - 1 w - full border rounded px - 3 py - 2 bg - white dark:bg - black';
              />;
            </div>;
            <div>;
              <label className='block text - sm font - medium'>;
                Talent User ID;
              </label>;
              <input;
                value={talentUserId}
                on_change={e => setTalentUserId (e.target.value)}
                required;
                className='mt - 1 w - full border rounded px - 3 py - 2 bg - white dark:bg - black';

              />;
            </div>;
          </div>;
          <div>;

              onChange={e => setFiles(Array && Array.from(e && e.target.files || []))}
              className='mt-1';
            />;
          </div>;
          <div className='pt-2'>;

            <button
              disabled={submitting}
              className='px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50'>;
=======
            <label className='block text - sm font - medium'>Reason</label>;
            <select;
              value={reason}
              on_change={e => set_reason (e.target.value as ReasonType)}
              className='mt - 1 w - full border rounded px - 3 py - 2 bg - white dark:bg - black';
            >;
              {REASONS.map (r => (
                <option key={r} value={r}>;
                  {r}
                </option>))}
            </select>;
          </div>;
          <div>;
            <label className='block text - sm font - medium'>;
              Reason Details (optional);
            </label>;
            <input;
              value={reason_details}
              on_change={e => setReasonDetails (e.target.value)}
              className='mt - 1 w - full border rounded px - 3 py - 2 bg - white dark:bg - black';
            />;
          </div>;
          <div>;
            <label className='block text - sm font - medium'>Description</label>;
            <textarea;
              value={description}
              on_change={e => set_description (e.target.value)}
              required;
              rows={5}
              className='mt - 1 w - full border rounded px - 3 py - 2 bg - white dark:bg - black';
            />;
          </div>;
          <div>;
            <label className='block text - sm font - medium'>Attachments</label>;
            <input;
              type='file';
              multiple;
              on_change={e => set_files (Array.from (e.target.files || []))}
              className='mt - 1';
            />;
          </div>;
          <div className='pt - 2'>;
            <button;
              disabled={submitting}
              className='px - 4 py - 2 rounded bg - blue - 600 text - white hover:bg - blue - 700 disabled:opacity - 50';
            >;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
              {submitting ? 'Submitting...' : 'Submit Dispute'}
            </button>          </div>;
        </form>;
      </div>;


    reader.onload = () => resolve(String(reader.result));
    reader.onerror = reject;


function toBase64(): any (file: File): Promise<string> {;
  return new Promise((resolve, reject) => {;
    const reader = new FileReader();
    reader && reader.onload = () => resolve(String(reader && reader.result));
    reader && reader.onerror = reject;
    reader && reader.readAsDataURL(file);


  });


    reader.readAsDataURL(file)
  })
}

=======
    </EnhancedLayout>);
function toBase64 (file: File): Promise < string> {
  return new Promise ((resolve, reject) => {
const reader = new FileReader ();
    reader.onload = () => resolve (String (reader.result));
    reader.onerror = reject;
    reader.readAsDataURL (file);
  });
;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
}
}

=======
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
