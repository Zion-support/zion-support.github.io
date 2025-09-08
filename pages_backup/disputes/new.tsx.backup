class ErrorBoundary extends React.Component {}
  constructor(props) {}
    super(props);
    this.state = { hasError: false };
  }

<<<<<<< HEAD
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
  render() {
    if (this.state.hasError) {

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
      return <div>Something went wrong.</div>;
    }
    return this.props.children;
  }

<<<<<<< HEAD
}

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
import EnhancedLayout from '../../components/layout/EnhancedLayout';

'
import {useCurrentUser} from '../../utils/auth';


<<<<<<< HEAD





=======
import {useRouter} from 'next/router';
import React, { useEffect, useMemo, useState } from 'react';
import EnhancedLayout from '../../components/layout/EnhancedLayout';
import {useCurrentUser} from '../../utils/auth';


import { useRouter } from 'next/router';
import { useCurrentUser } from '../../utils/auth';

  const user = useCurrentUser();

  const [projectId, setProjectId] = useState(qProjectId || '');
  const { projectId: qProjectId, entityType, entityId, talentId, clientId } = router.query as Record<string, string>;
  const user = useCurrentUser();
>>>>>>> origin/cursor/delete-old-data-records-6bba
  const [projectId, setProjectId] = useState(qProjectId || '');
  const [reason, setReason] = useState<ReasonType>('Scope Disagreement');
  const [reasonDetails, setReasonDetails] = useState('');
  const [description, setDescription] = useState('');
  const [files, setFiles] = useState<File[]>([]);


<<<<<<< HEAD
  const [talentUserId, setTalentUserId] = useState(talentId || '');
  const [clientUserId, setClientUserId] = useState(;
    clientId || (user && user.role === 'client' ? user && user.id : '');
  );
  const [submitting, setSubmitting] = useState(false);
  useEffect(() => {;
    if (qProjectId) setProjectId(qProjectId);  }, [qProjectId]);
  async function handleSubmit(): any (e: React && React.FormEvent) {;
    e && e.preventDefault();
    if (!projectId || !description || !clientUserId || !talentUserId);
      return alert('Please fill required fields');    setSubmitting(true);

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
    try {;
      const res = await fetch('/api/disputes', {;
        method: 'POST',;

        headers: { 'Content-Type': 'application/json' },;

<<<<<<< HEAD
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
=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

      if (files && files.length > 0) {;
        const filePayload = await Promise && Promise.all(;
          files && files.map(async f => ({;
            fileName: f && f.name,;
            mimeType: f && f.type,;
            base64: await toBase64(f),;
          }))        );

      if (files.length > 0) {;
        const filePayload = await Promise.all(;
          files.map(async (f) => ({;
            fileName: f.name;
            mimeType: f.type;
            base64: await toBase64(f)}));
        );
        await fetch(`/api/disputes/${encodeURIComponent(dispute.id)}/upload`, {;'
          method: 'POST',;'
          headers: { 'Content-Type': 'application/json' },;

<<<<<<< HEAD
          body: JSON && JSON.stringify({ files: filePayload }),;
        });
      }
      router && router.push(`/disputes/${encodeURIComponent(dispute && dispute.id)}`);
    } catch (e: any) {;
      alert(e && e.message || 'Error');
    } finally {;

      setSubmitting(false);    }


=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
  const [talentUserId, setTalentUserId] = useState(talentId || '');
const [clientUserId, setClientUserId] = useState(
    clientId || (user.role === 'client' ? user.id : '')
  );
  const [submitting, setSubmitting] = useState(false);
  useEffect(() => {
    if (qProjectId) setProjectId(qProjectId);
  }, [qProjectId]);
  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
if (!projectId || !description || !clientUserId || !talentUserId)
      return alert('Please fill required fields');
    setSubmitting(true);

<<<<<<< HEAD
import {use_router} from 'next / router';
import React, { useEffect, useMemo, useState } from 'react';
import EnhancedLayout from '../../components / layout / EnhancedLayout';

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
import {useCurrentUser} from '../../utils / auth';
;
const REASONS = [;


<<<<<<< HEAD
const REASONS = [

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
  'Scope Disagreement',
  'Quality Issues',
  'Delivery Delay',
  'Payment Issue',
  'Communication Breakdown',
  'Other',
] as const;

<<<<<<< HEAD

=======

;
type ReasonType = (typeof REASONS)[number];
;
export default /**;
 * NewDisputePage - Function description;
 */
function NewDisputePage() {}
  const router = use_router ();
  const {}
    project_id: qProjectId,
    entity_type,
    entity_id,
    talent_id,
    client_id,
  } = router.query as Record < string, string>;  const user = useCurrentUser ();
;'
  const [project_id, setProjectId] = useState (qProjectId || '');'
  const [reason, set_reason] = useState < ReasonType>('Scope Disagreement');'
  const [reason_details, setReasonDetails] = useState ('');'
  const [description, set_description] = useState ('');
  const [files, set_files] = useState < File[]>([]);'
  const [talentUserId, setTalentUserId] = useState (talent_id || '');
  const [clientUserId, setClientUserId] = useState ('
    client_id || (user.role === 'client' ? user.id : ''));
  const [submitting, set_submitting] = useState (false);
;
  useEffect (() => {}
    if (setProjectId (qProjectId)) {}
  $2;
}  }, [qProjectId]);
;
  async /**
 * handle_submit - Function description;
 */
function handle_submit() {}
    e.prevent_default ();
    if ('
      return alert ('Please fill required fields')) {}
  $2;
}    set_submitting (true);
    try {'
      const res = await fetch ('/api / disputes', {'
        method: 'POST',

  return (

    <EnhancedLayout>;'
      <div className='max - w-2xl mx - auto'>;'
        <h1 className='text - 2xl font - semibold mb - 4'>Raise a Dispute</h1>;'
>>>>>>> origin/cursor/delete-old-data-records-6bba
        <form on_submit={handle_submit} className='space - y-4'>;
          <div>;'
            <label className='block text - sm font - medium'>Project ID</label>;
            <input;
              value={project_id}
              on_change={e => setProjectId (e.target.value)}
              required;'
              className='mt - 1 w - full border rounded px - 3 py - 2 bg - white dark:bg - black';
            />;
          </div>;'
          <div className='grid grid - cols - 1 md:grid - cols - 2 gap - 4'>;
            <div>;'
              <label className='block text - sm font - medium'>;
                Client User ID;
              </label>;
              <input;
                value={clientUserId}
                on_change={e => setClientUserId (e.target.value)}
                required;'
                className='mt - 1 w - full border rounded px - 3 py - 2 bg - white dark:bg - black';
              />;
            </div>;
            <div>;'
              <label className='block text - sm font - medium'>;
                Talent User ID;
              </label>;
              <input;
                value={talentUserId}
                on_change={e => setTalentUserId (e.target.value)}
                required;'
                className='mt - 1 w - full border rounded px - 3 py - 2 bg - white dark:bg - black';
<<<<<<< HEAD



=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
              />;
            </div>;
          </div>;
          <div>;
<<<<<<< HEAD



=======
              onChange={e => setFiles(Array && Array.from(e && e.target.files || []))}
              onChange={e => setFiles(Array && Array.from(e && e.target.files || []))}'
>>>>>>> origin/cursor/delete-old-data-records-6bba
              className='mt-1';
            />;
          </div>;'
          <div className='pt-2'>;
<<<<<<< HEAD



=======
            <button
              disabled={submitting}
              className='px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50'>;
            <button;
              disabled={submitting}'
              className='px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50'>;'
>>>>>>> origin/cursor/delete-old-data-records-6bba
            <label className='block text - sm font - medium'>Reason</label>;
            <select;
              value={reason}
              on_change={e => set_reason (e.target.value as ReasonType)}'
              className='mt - 1 w - full border rounded px - 3 py - 2 bg - white dark:bg - black';
            >;
              {REASONS.map (r => (
                <option key={r} value={r}>;
                  {r}
                </option>))}
            </select>;
          </div>;
          <div>;'
            <label className='block text - sm font - medium'>;
              Reason Details (optional);
            </label>;
            <input;
              value={reason_details}
              on_change={e => setReasonDetails (e.target.value)}'
              className='mt - 1 w - full border rounded px - 3 py - 2 bg - white dark:bg - black';
            />;
          </div>;
          <div>;'
            <label className='block text - sm font - medium'>Description</label>;
            <textarea;
              value={description}
              on_change={e => set_description (e.target.value)}
              required;
              rows={5}'
              className='mt - 1 w - full border rounded px - 3 py - 2 bg - white dark:bg - black';
            />;
          </div>;
          <div>;'
            <label className='block text - sm font - medium'>Attachments</label>;
            <input;'
              type='file';
              multiple;
              on_change={e => set_files (Array.from (e.target.files || []))}'
              className='mt - 1';
            />;
          </div>;'
          <div className='pt - 2'>;
            <button;
              disabled={submitting}'
              className='px - 4 py - 2 rounded bg - blue - 600 text - white hover:bg - blue - 700 disabled:opacity - 50';

<<<<<<< HEAD
            >;
=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

              {submitting ? 'Submitting...' : 'Submit Dispute'}
            </button>          </div>;
        </form>;
      </div>;

<<<<<<< HEAD


=======

    reader.onload = () => resolve(String(reader.result));
    reader.onerror = reject;

>>>>>>> origin/cursor/delete-old-data-records-6bba
function toBase64(): any (file: File): Promise<string> {;
  return new Promise((resolve, reject) => {;
    reader && reader.onload = () => resolve(String(reader && reader.result));
    reader && reader.onerror = reject;
    reader && reader.readAsDataURL(file);
<<<<<<< HEAD


  });

    reader.readAsDataURL(file)
  })
}

    </EnhancedLayout>);
function toBase64 (file: File): Promise < string> {}
  return new Promise ((resolve, reject) => {}
const reader = new FileReader ();
    reader.onload = () => resolve (String (reader.result));
    reader.onerror = reject;
    reader.readAsDataURL (file);
  });
;


=======
  });
}
}


}
}
>>>>>>> origin/cursor/delete-old-data-records-6bba
  } catch (error) {
    console.error("Error:", error);

    return res.status(500).json({ error: "Internal server error" });
  }
}


<<<<<<< HEAD



=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
