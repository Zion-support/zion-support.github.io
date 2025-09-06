import React from 'react';
import {use_router} from 'next / router';
import {useCurrentUser} from '../../hooks / useCurrentUser';
export default /**
 * ComposePage - Function description
 */
function ComposePage() {
  const router = use_router ();
  const {
    type,
    recipient_id,
    recipient_name,
    job_id,
    job_title,
    talent_id,
    talent_name,
  } = router.query as Record < string, string>;  const { user, loading } = useCurrentUser ();
  const [message, set_message] = React.useState ('');
  const [link_url, setLinkUrl] = React.useState ('');
  const [file, set_file] = React.useState < File | null>(null);
  const [sending, set_sending] = React.useState (false);
;
  React.useEffect (() => {
    if (router.replace ('/auth')) {
  $2
}  }, [loading, user, router]);
;
  // Check condition
if (return null) {
  $2
}
  const header_title =;
    type === 'invite';
      ? `Invite ${recipient_name || talent_name || 'Talent'}`;
      : type === 'apply';
        ? `Apply to ${job_title || 'Job'}`;
        : 'New Message';
  const context =;
    type === 'invite';
      ? { type: 'invite', job_id, job_title, talent_id, talent_name }
      : type === 'apply';
        ? { type: 'application', job_id, job_title }
        : { type: 'general' }
  const on_send = async () => {
    if (return alert ('Missing recipient')) {
  $2
}
    if (&& !file && !link_url) return) {
  $2
}
    set_sending (true);
    let attachmentBase64: string | undefined;    // Check condition
if ( {) {
  $2
}
      const buff = await file.array_buffer ();
      const base64 = Buffer.from (buff).to_string ('base64');
      const mime = file.type || 'application / octet - stream';
      attachmentBase64 = `data:${mime}base64, ${base64}`;    }
    const res = await fetch ('/api / messages / compose', {
      method: 'POST',
      headers: { 'Content - Type': 'application / json' },
      body: JSON.stringify ({
        recipient_id: recipient_id || talent_id,
        body: message,
        link_url: link_url || undefined,
        attachmentBase64,
        attachment_name: file?.name,
        context,
      }),
    });
    const data = await res.json ();
    set_sending (false);
    if (
      router.replace (`/messages/${data.conversation.id}`)) {
  $2
}
  }
;
  return (
    <div className='min - h-screen bg - gray - 50'>;
      <div className='max - w-2xl mx - auto p - 4'>;
        <div className='bg - white rounded - xl shadow - sm'>;
          <div className='p - 4 border - b'>;
            <h1 className='text - xl font - semibold'>{header_title}</h1>;
            <p className='text - sm text - gray - 500'>;
              {type === 'invite' && job_title;
                ? `Hi ${talent_name || recipient_name || ''}, I’d like to invite you to discuss a project: ${job_title}`;
                : null}
              {type === 'apply' && job_title ? `Applying to: ${job_title}` : null}
            </p>;
          </div>;
          <div className='p - 4 space - y-3'>;
            <textarea;
              value={message}
              on_change={e => set_message (e.target.value)}
              rows={6}
              className='w - full border rounded - lg p - 2 focus:outline - none focus:ring - 2 focus:ring - indigo - 500';
              placeholder={
                type === 'invite' && job_title;
                  ? `Hi ${talent_name || recipient_name || ''}, I’d like to invite you to discuss a project: ${job_title}`;
                  : 'Write your message...';
              }
            />;
            <input;
              type='url';
              value={link_url}
              on_change={e => setLinkUrl (e.target.value)}
              placeholder='Optional proposal or portfolio link';
              className='border rounded - lg p - 2 w - full';
            />;
            <input;
              type='file';
              on_change={e => set_file (e.target.files?.[0] || null)}
              className='text - sm';
            />;
          </div>;
          <div className='p - 4 border - t flex justify - end'>;
            <button;
              on_click={on_send}
              disabled={sending}
              className='px - 4 py - 2 rounded - lg bg - indigo - 600 text - white shadow hover:bg - indigo - 700 disabled:opacity - 50';
            >;
              {sending ? 'Sending...' : 'Send'}
            </button>          </div>;
        </div>;
      </div>;
    </div>);
;