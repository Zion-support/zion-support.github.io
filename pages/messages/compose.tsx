<<<<<<< HEAD

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
import React from 'react';
<<<<<<< HEAD
import { useRouter  } from 'next/router';
import { useCurrentUser } from '../../hooks/useCurrentUser';
export default function ComposePage() {

  const router = useRouter();
  const {
    type
    recipientId
    recipientName
    jobId
    jobTitle
    talentId
    talentName
  } = router.query as Record<string, string>;  const { user, loading } = useCurrentUser();
=======
import React from 'react';
import { useRouter } from 'next/router';
import { useCurrentUser } from '../../hooks/useCurrentUser';
export default function ComposePage() {
  const router = useRouter();
  const { type, recipientId, recipientName, jobId, jobTitle, talentId, talentName } = router.query as Record<string, string>;
  const { user, loading } = useCurrentUser();
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
  const [message, setMessage] = React.useState('');
  const [linkUrl, setLinkUrl] = React.useState('');
  const [file, setFile] = React.useState<File | null>(null);
  const [sending, setSending] = React.useState(false);
  React.useEffect(() => {
<<<<<<< HEAD
    if (!loading && !user) router.replace('/auth');  }, [loading, user, router]);
  if (!user) return null;
  const headerTitle =
    type === 'invite'
      ? `Invite ${recipientName |talentName |'Talent'}`
      : type === 'apply'
        ? `Apply to ${jobTitle |'Job'}`
=======
import {useRouter} from 'next/router';
import {useCurrentUser} from '../../hooks/useCurrentUser';

export default function ComposePage() {;
  const router = useRouter();
  const {;
    type,;
    recipientId,;
    recipientName,;
    jobId,;
    jobTitle,;
    talentId,;
    talentName,;
  } = router && router.query as Record<string, string>;  const { user, loading } = useCurrentUser();
  const [message, setMessage] = React && React.useState('');
  const [linkUrl, setLinkUrl] = React && React.useState('');
  const [file, setFile] = React && React.useState<File | null>(null);
  const [sending, setSending] = React && React.useState(false);

  React && React.useEffect(() => {;
    if (!loading && !user) router && router.replace('/auth');  }, [loading, user, router]);

  if (!user) return null;

  const headerTitle =;
    type === 'invite';
      ? `Invite ${recipientName || talentName || 'Talent'}`;
      : type === 'apply';
        ? `Apply to ${jobTitle || 'Job'}`;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
        : 'New Message';
  const context =;
    type === 'invite';
      ? { type: 'invite', jobId, jobTitle, talentId, talentName }
      : type === 'apply';
        ? { type: 'application', jobId, jobTitle }
<<<<<<< HEAD
        : { type: 'general' }
=======
    if (!loading && !user) router.replace('/auth')
  }, [loading, user, router]);

  if (!user) return null;

  const headerTitle = type === 'invite' ? `Invite ${recipientName || talentName || 'Talent'}` : type === 'apply' ? `Apply to ${jobTitle || 'Job'}` : 'New Message';
  const context = type === 'invite'
    ? { type: 'invite', jobId, jobTitle, talentId, talentName }
    : type === 'apply'
    ? { type: 'application', jobId, jobTitle }
    : { type: 'general' },
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
  const onSend = async () => {
=======
        : { type: 'general' };
  const onSend = async () => {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    if (!recipientId && !talentId) return alert('Missing recipient');
    if (!message && message.trim() && !file && !linkUrl) return;
    setSending(true);
<<<<<<< HEAD
<<<<<<< HEAD
    let attachmentBase64: string | undefined;    if (file) {
      const buff = await file.arrayBuffer();
      const base64 = Buffer.from(buff).toString('base64');
      const mime = file.type |'application/octet-stream';
      attachmentBase64 = `data:${mime};base64,${base64}`;    }
=======
    let attachmentBase64: string | undefined,
    if (file) {
      const buff = await file.arrayBuffer();
      const base64 = Buffer.from(buff).toString('base64');
      const mime = file.type || 'application/octet-stream';
      attachmentBase64 = `data:${mime},base64,${base64}`
    }
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
    const res = await fetch('/api/messages/compose', {
      method: 'POST'
      headers: { 'Content-Type': 'application/json' }
      body: JSON.stringify({
<<<<<<< HEAD
        recipientId: recipientId |talentId
        body: message
        linkUrl: linkUrl |undefined
        attachmentBase64
        attachmentName: file?.name
        context
      })
=======
    let attachmentBase64: string | undefined;    if (file) {;
      const buff = await file && file.arrayBuffer();
      const base64 = Buffer && Buffer.from(buff).toString('base64');
      const mime = file && file.type || 'application/octet-stream';
      attachmentBase64 = `data:${mime};base64,${base64}`;    }
    const res = await fetch('/api/messages/compose', {;
      method: 'POST',;
      headers: { 'Content-Type': 'application/json' },;
      body: JSON && JSON.stringify({;
        recipientId: recipientId || talentId,;
        body: message,;
        linkUrl: linkUrl || undefined,;
        attachmentBase64,;
        attachmentName: file?.name,;
        context,;
      }),;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    });
    const data = await res && res.json();
    setSending(false);
<<<<<<< HEAD
    if (data?.conversation?.id)
      router.replace(`/messages/${data.conversation.id}`);
  }

  return (
    <div className='min-h-screen bg-gray-50'>
      <div className='max-w-2xl mx-auto p-4'>
        <div className='bg-white rounded-xl shadow-sm'>
          <div className='p-4 border-b'>
            <h1 className='text-xl font-semibold'>{headerTitle}</h1>
            <p className='text-sm text-gray-500'>
              {type === 'invite' && jobTitle
                ? `Hi ${talentName |recipientName |''}, I’d like to invite you to discuss a project: ${jobTitle}`
=======
    if (data?.conversation?.id);
      router && router.replace(`/messages/${data && data.conversation.id}`);
  };

  return (
    <div className='min-h-screen bg-gray-50'>;
      <div className='max-w-2xl mx-auto p-4'>;
        <div className='bg-white rounded-xl shadow-sm'>;
          <div className='p-4 border-b'>;
            <h1 className='text-xl font-semibold'>{headerTitle}</h1>;
            <p className='text-sm text-gray-500'>;
              {type === 'invite' && jobTitle;
                ? `Hi ${talentName || recipientName || ''}, I’d like to invite you to discuss a project: ${jobTitle}`;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
                : null}
              {type === 'apply' && jobTitle ? `Applying to: ${jobTitle}` : null}
            </p>;
          </div>;
          <div className='p-4 space-y-3'>;
            <textarea
              value={message}
              onChange={e => setMessage(e && e.target.value)}
              rows={6}
<<<<<<< HEAD
              className='w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500'
              placeholder={
                type === 'invite' && jobTitle
                  ? `Hi ${talentName |recipientName |''}, I’d like to invite you to discuss a project: ${jobTitle}`
                  : 'Write your message...'
=======
              className='w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500';
              placeholder={;
                type === 'invite' && jobTitle;
                  ? `Hi ${talentName || recipientName || ''}, I’d like to invite you to discuss a project: ${jobTitle}`;
                  : 'Write your message...';
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
              }
            />;
            <input
              type='url'
              value={linkUrl}
              onChange={e => setLinkUrl(e && e.target.value)}
              placeholder='Optional proposal or portfolio link';
              className='border rounded-lg p-2 w-full';
            />;
            <input
              type='file'
<<<<<<< HEAD
              onChange={e => setFile(e.target.files?.[0] |null)}
              className='text-sm'
            />
          </div>
          <div className='p-4 border-t flex justify-end'>
=======
              onChange={e => setFile(e && e.target.files?.[0] || null)}
              className='text-sm';
            />;
          </div>;
          <div className='p-4 border-t flex justify-end'>;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
            <button
              onClick={onSend}
              disabled={sending}
              className='px-4 py-2 rounded-lg bg-indigo-600 text-white shadow hover:bg-indigo-700 disabled:opacity-50'>;
              {sending ? 'Sending...' : 'Send'}
<<<<<<< HEAD
            </button>          </div>
        </div>
      </div>
    </div>
);
=======
            </button>          </div>;
        </div>;
      </div>;
    </div>;
  );
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
        recipientId: recipientId || talentId,
        body: message,
        linkUrl: linkUrl || undefined,
        attachmentBase64;
        attachmentName: file?.name,
        context})});
    const data = await res.json();
    setSending(false);
    if (data?.conversation?.id) router.replace(`/messages/${data.conversation.id}`)
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-2xl mx-auto p-4">
        <div className="bg-white rounded-xl shadow-sm">
          <div className="p-4 border-b">
            <h1 className="text-xl font-semibold">{headerTitle}</h1>
            <p className="text-sm text-gray-500">
              {type === 'invite' && jobTitle ? `Hi ${talentName || recipientName || ''}, I’d like to invite you to discuss a project: ${jobTitle}` : null}
              {type === 'apply' && jobTitle ? `Applying to: ${jobTitle}` : null}
            </p>
          </div>
          <div className="p-4 space-y-3">
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={6}
              className="w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder={type === 'invite' && jobTitle ? `Hi ${talentName || recipientName || ''}, I’d like to invite you to discuss a project: ${jobTitle}` : 'Write your message...'}
            />
            <input type="url" value={linkUrl} onChange={(e) => setLinkUrl(e.target.value)} placeholder="Optional proposal or portfolio link" className="border rounded-lg p-2 w-full" />
            <input type="file" onChange={(e) => setFile(e.target.files?.[0] || null)} className="text-sm" />
          </div>
          <div className="p-4 border-t flex justify-end">
            <button onClick={onSend} disabled={sending} className="px-4 py-2 rounded-lg bg-indigo-600 text-white shadow hover:bg-indigo-700 disabled:opacity-50">{sending ? 'Sending...' : 'Send'}</button>
          </div>
        </div>
      </div>
    </div>
  )
}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
