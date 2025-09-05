<<<<<<< HEAD
import React from 'react',
import { useRouter } from 'next/router',
import { useCurrentUser } from '../../hooks/useCurrentUser',
export default function ComposePage() {
  const router = useRouter(),
  const { type, recipientId, recipientName, jobId, jobTitle, talentId, talentName } = router.query as Record<string string>,
  const { user, loading } = useCurrentUser(),
  const [message, setMessage] = React.useState(''),
  const [linkUrl, setLinkUrl] = React.useState(''),
  const [file, setFile] = React.useState<File | null>(null),
  const [sending, setSending] = React.useState(false),

  React.useEffect(() => {
    if (!loading && !user) router.replace('/auth')
  }, [loading, user, router]),
=======
import React from 'react';

export default function ComposePage() {_const _router = useRouter();
  const { type, _recipientId, _recipientName, _jobId, _jobTitle, _talentId, _talentName} = router.query as Record<string, string>;
  const {_user, _loading} = useCurrentUser();
  const [message, setMessage] = React.useState('');
  const [linkUrl, setLinkUrl] = React.useState('');
  const [file, setFile] = React.useState<File | null>(null);
  const [sending, setSending] = React.useState(false);

  React.useEffect__(() => {_if (!loading && !user) router.replace('/auth');}, [loading, user, router]);
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

  if (!user) return null,

<<<<<<< HEAD
  const headerTitle = type === 'invite' ? `Invite ${recipientName || talentName || 'Talent'}` : type === 'apply' ? `Apply to ${jobTitle || 'Job'}` : 'New Message',
  const context = type === 'invite'
    ? { type: 'invite', jobId, jobTitle, talentId, talentName }
    : type === 'apply'
    ? { type: 'application', jobId, jobTitle }
    : { type: 'general' },

  const onSend = async () => {
    if (!recipientId && !talentId) return alert('Missing recipient'),
    if (!message.trim() && !file && !linkUrl) return,
    setSending(true),
    let attachmentBase64: string | undefined,
    if (file) {
      const buff = await file.arrayBuffer(),
      const base64 = Buffer.from(buff).toString('base64'),
      const mime = file.type || 'application/octet-stream',
      attachmentBase64 = `data:${mime},base64,${base64}`
    }
    const res = await fetch('/api/messages/compose', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        recipientId: recipientId || talentId,
        body: message,
        linkUrl: linkUrl || undefined,
        attachmentBase64,
        attachmentName: file?.name,
        context})}),
    const data = await res.json(),
    setSending(false),
    if (data?.conversation?.id) router.replace(`/messages/${data.conversation.id}`)
  },

  return (
    <div className=&quot;min-h-screen bg-gray-50&quot;>
      <div className=&quot;max-w-2xl mx-auto p-4&quot;>
        <div className=&quot;bg-white rounded-xl shadow-sm&quot;>
          <div className=&quot;p-4 border-b&quot;>
            <h1 className=&quot;text-xl font-semibold&quot;>{headerTitle}</h1>
            <p className=&quot;text-sm text-gray-500&quot;>
              {type === 'invite' && jobTitle ? `Hi ${talentName || recipientName || ''}, I’d like to invite you to discuss a project: ${jobTitle}` : null}
              {type === 'apply' && jobTitle ? `Applying to: ${jobTitle}` : null}
=======
  const _headerTitle = type === 'invite' ? `Invite ${_recipientName || talentName || 'Talent'}` : type === 'apply' ? `Apply to ${_jobTitle || 'Job'}` : 'New Message';
  const _context = type === 'invite'
    ? {_type: 'invite', _jobId, _jobTitle, _talentId, _talentName}
    : type === 'apply'
    ? {_type: 'application', _jobId, _jobTitle}
    : {_type: 'general'};

  const _onSend = async () => {_if (!recipientId && !talentId) return alert('Missing recipient');
    if (!message.trim() && !file && !linkUrl) return;
    setSending(true);
    let attachmentBase64: string | undefined;
    if (file) {
      const _buff = await file.arrayBuffer();
      const _base64 = Buffer.from(buff).toString('base64');
      const _mime = file.type || 'application/octet-stream';
      attachmentBase64 = `data:${mime};base64,${_base64}`;
    }
    const _res = await fetch('/api/messages/compose', {_method: 'POST', _headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify({_recipientId: recipientId || talentId, _body: message, _linkUrl: linkUrl || undefined, _attachmentBase64, _attachmentName: file?.name, _context})});
    const _data = await res.json();
    setSending(false);
    if (data?.conversation?.id) router.replace(`/messages/${_data.conversation.id}`);
  };

  return (_<div className="min-h-screen bg-gray-50">
      <div className="max-w-2xl mx-auto p-4">
        <div className="bg-white rounded-xl shadow-sm">
          <div className="p-4 border-b">
            <h1 className="text-xl font-semibold">{_headerTitle}</h1>
            <p className="text-sm text-gray-500">
              {_type === 'invite' && jobTitle ? `Hi ${talentName || recipientName || ''}, _I’d like to invite you to discuss a project: ${_jobTitle}` : null}
              {_type === 'apply' && jobTitle ? `Applying to: ${jobTitle}` : null}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            </p>
          </div>
          <div className=&quot;p-4 space-y-3&quot;>
            <textarea
<<<<<<< HEAD
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={6}
              className=&quot;w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500&quot;
              placeholder={type === 'invite' && jobTitle ? `Hi ${talentName || recipientName || ''}, I’d like to invite you to discuss a project: ${jobTitle}` : 'Write your message...'}
            />
            <input type=&quot;url&quot; value={linkUrl} onChange={(e) => setLinkUrl(e.target.value)} placeholder=&quot;Optional proposal or portfolio link&quot; className=&quot;border rounded-lg p-2 w-full&quot; />
            <input type=&quot;file&quot; onChange={(e) => setFile(e.target.files?.[0] || null)} className=&quot;text-sm&quot; />
          </div>
          <div className=&quot;p-4 border-t flex justify-end&quot;>
            <button onClick={onSend} disabled={sending} className=&quot;px-4 py-2 rounded-lg bg-indigo-600 text-white shadow hover:bg-indigo-700 disabled:opacity-50&quot;>{sending ? 'Sending...' : 'Send'}</button>
=======
              value={_message}
              onChange={_(e) => setMessage(e.target.value)}
              rows={_6}
              className="w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder={_type === 'invite' && jobTitle ? `Hi ${talentName || recipientName || ''}, I’d like to invite you to discuss a project: ${_jobTitle}` : 'Write your message...'}
            />
            <input type="url" value={_linkUrl} onChange={_(_e) => setLinkUrl(e.target.value)} placeholder="Optional proposal or portfolio link" className="border rounded-lg p-2 w-full" />
            <input type="file" onChange={_(_e) => setFile(e.target.files?.[0] || null)} className="text-sm" />
          </div>
          <div className="p-4 border-t flex justify-end">
            <button onClick={_onSend} disabled={_sending} className="px-4 py-2 rounded-lg bg-indigo-600 text-white shadow hover:bg-indigo-700 disabled:opacity-50">{_sending ? 'Sending...' : 'Send'}</button>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
          </div>
        </div>
      </div>
    </div>
  )
}