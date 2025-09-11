<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react';
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


  const router = useRouter();
  const { type, recipientId, recipientName, jobId, jobTitle, talentId, talentName } = router.query as Record<string, string>;
  const { user, loading } = useCurrentUser();
  const [message, setMessage] = React.useState('');
  const [linkUrl, setLinkUrl] = React.useState('');
  const [file, setFile] = React.useState<File | null>(null);
  const [sending, setSending] = React.useState(false);
<<<<<<< HEAD

<<<<<<< HEAD
  React.useEffect(() => {
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
        : 'New Message';
  const context =;
    type === 'invite';
      ? { type: 'invite', jobId, jobTitle, talentId, talentName }
      : type === 'apply';
        ? { type: 'application', jobId, jobTitle }

<<<<<<< HEAD
=======

  React.useEffect(() => {;
    if (!loading && !user) router.replace('/auth');
  }, [loading, user, router]),;
  if (!user) return null,;
  const headerTitle = type === 'invite' ? `Invite ${recipientName || talentName || 'Talent'}` : type === 'apply' ? `Apply to ${jobTitle || 'Job'}` : 'New Message';
  const context = type === 'invite';
    ? { type: 'invite', jobId, jobTitle, talentId, talentName   } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
    : type === 'apply';
    ? { type: 'application', jobId, jobTitle   } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
    : { type: 'general' },;
  const onSend = async () => {;
    if (!isAdmin) return res.status(403).json({ error: 'Forbidden' });


    setSending(true);
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    if (!loading && !user) router.replace('/auth')
  }, [loading, user, router]);
  if (!user) return null;
  const headerTitle = type === 'invite' ? `Invite ${recipientName || talentName || 'Talent'}` : type === 'apply' ? `Apply to ${jobTitle || 'Job'}` : 'New Message';
  const headerTitle = type === 'invite' ? `Invite ${recipientName || talentName || 'Talent'}` : type === 'apply' ? `Apply to ${jobTitle || 'Job'}` : 'New Message'

  const context = type === 'invite'
    ? { type: 'invite', jobId, jobTitle, talentId, talentName }
    : type === 'apply'
    ? { type: 'application', jobId, jobTitle }
    : { type: 'general' },
<<<<<<< HEAD
const onSend = async () => {
=======

  const onSend = async () => {
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        : { type: 'general' };
  const onSend = async () => {;
    if (!recipientId && !talentId) return alert('Missing recipient');
    if (!message && message.trim() && !file && !linkUrl) return;
    setSending(true);
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    let attachmentBase64: string | undefined,
    if (file) {
      const buff = await file.arrayBuffer();
      const base64 = Buffer.from(buff).toString('base64');
      const mime = file.type || 'application/octet-stream';
      attachmentBase64 = `data:${mime},base64,${base64}`
    }
<<<<<<< HEAD
=======

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

      const mime = file.type || 'application/octet-stream';
      const mime = file.type || 'application/octet-stream';

<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    const res = await fetch('/api/messages/compose', {
      method: 'POST'
      headers: { 'Content-Type': 'application/json' }
      body: JSON.stringify({


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
<<<<<<< HEAD
    });
    const data = await res && res.json();
    setSending(false);
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    });
    const data = await res && res.json();
    setSending(false);

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
              className='w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500';
              placeholder={;
                type === 'invite' && jobTitle;
                  ? `Hi ${talentName || recipientName || ''}, I’d like to invite you to discuss a project: ${jobTitle}`;
                  : 'Write your message...';
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
              onChange={e => setFile(e && e.target.files?.[0] || null)}
              className='text-sm';
            />;
          </div>;
          <div className='p-4 border-t flex justify-end'>;
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            <button
              onClick={onSend}
              disabled={sending}
              className='px-4 py-2 rounded-lg bg-indigo-600 text-white shadow hover:bg-indigo-700 disabled:opacity-50'>;
              {sending ? 'Sending...' : 'Send'}
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            </button>          </div>;
        </div>;
      </div>;
    </div>;
  );
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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

              {type === 'invite' && jobTitle ? `Hi ${talentName || recipientName || ''}, I’d like to invite you to discuss a project: ${jobTitle}` : null  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              {type === 'apply' && jobTitle ? `Applying to: ${jobTitle}` : null  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}


            </p>
          </div>
<div className="p-4 space-y-3">
            <textarea
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

              value={message  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              onChange={(e) => setMessage(e.target.value)  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              rows={6  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              className="w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder={type === 'invite' && jobTitle ? `Hi ${talentName || recipientName || ''}, I’d like to invite you to discuss a project: ${jobTitle}` : 'Write your message...'  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}


<<<<<<< HEAD
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={6}
className="w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder={type === 'invite' && jobTitle ? `Hi ${talentName || recipientName || ''}, I’d like to invite you to discuss a project: ${jobTitle}` : 'Write your message...'}
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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



}


  )
}
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
import {useRouter} from 'next/router';
import {useCurrentUser} from '../../hooks/useCurrentUser';
export default function ComposePage() {;
import { useRouter } from 'next/router';
import { useCurrentUser } from '../../hooks/useCurrentUser';
export default function ComposePage(req, res) {
  try {
  const router = useRouter();
  const { type, recipientId, recipientName, jobId, jobTitle, talentId, talentName } = router.query as Record<string, string>;
  const { user, loading } = useCurrentUser();
  const [message, setMessage] = React.useState('');
  const [linkUrl, setLinkUrl] = React.useState('');
  const [file, setFile] = React.useState<File | null>(null);
  const [sending, setSending] = React.useState(false);
  React.useEffect(() => {
    if (!loading && !user) router.replace('/auth');  }, [loading, user, router]);
  if (!user) return null;
  const headerTitle =
    type === 'invite'
      ? `Invite ${recipientName |talentName |'Talent'}`
      : type === 'apply'
        ? `Apply to ${jobTitle |'Job'}`
        : 'New Message';
  const context =;
    type === 'invite';
      ? { type: 'invite', job_id, job_title, talent_id, talent_name }
      : type === 'apply';
        ? { type: 'application', job_id, job_title }
=======
  React.useEffect(() => {
    if (!loading && !user) router.replace('/auth');  }, [loading, user, router]);
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
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        : { type: 'general' }
  const onSend = async () => {
    if (!recipientId && !talentId) return alert('Missing recipient');
    if (!message.trim() && !file && !linkUrl) return;
  React.useEffect(() => {;
    if (!loading && !user) router.replace('/auth');
  }, [loading, user, router]),;
  if (!user) return null,;
  const headerTitle = type === 'invite' ? `Invite ${recipientName || talentName || 'Talent'}` : type === 'apply' ? `Apply to ${jobTitle || 'Job'}` : 'New Message';
  const context = type === 'invite';
    ? { type: 'invite', jobId, jobTitle, talentId, talentName   } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
    : type === 'apply';
    ? { type: 'application', jobId, jobTitle   } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
    : { type: 'general' },;
  const onSend = async () => {;
    if (!isAdmin) return res.status(403).json({ error: 'Forbidden' });
    setSending(true);
<<<<<<< HEAD
    let attachmentBase64: string | undefined;
    if (file) {;
      const buff = await file.arrayBuffer();
      const base64 = Buffer.from(buff).toString('base64');
      const mime = file.type |'application/octet-stream';
      attachmentBase64 = `data:${mime};base64,${base64}`;    }
      const mime = file.type || 'application/octet-stream';
      const mime = file.type || 'application/octet-stream';
      attachmentBase64 = `data:${mime};base64,${base64}`;    }
      attachmentBase64 = `data:${mime},base64,${base64}`;
      } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
=======
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

  const onSend = async () => {
=======
        : { type: 'general' };
  const onSend = async () => {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    if (!recipientId && !talentId) return alert('Missing recipient');
    if (!message && message.trim() && !file && !linkUrl) return;
    setSending(true);

    let attachmentBase64: string | undefined,
    if (file) {
      const buff = await file.arrayBuffer();
      const base64 = Buffer.from(buff).toString('base64');
      const mime = file.type || 'application/octet-stream';
      attachmentBase64 = `data:${mime},base64,${base64}`
    }

=======

      const mime = file.type || 'application/octet-stream';
=======
      const mime = file.type || 'application/octet-stream';

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    const res = await fetch('/api/messages/compose', {
      method: 'POST'
      headers: { 'Content-Type': 'application/json' }
      body: JSON.stringify({
        recipientId: recipientId |talentId
        body: message
        linkUrl: linkUrl |undefined
        attachmentBase64
        attachmentName: file?.name
        context
      })
    });
<<<<<<< HEAD
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
=======
    const data = await res && res.json();
    setSending(false);

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

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                : null}
              {type === 'apply' && jobTitle ? `Applying to: ${jobTitle}` : null}
        recipientId: recipientId || talentId,
        body: message,
        linkUrl: linkUrl || undefined,
<<<<<<< HEAD
        attachmentBase64,
        attachmentName: file?.name,
        context})}),
    const data = await res.json(),
    setSending(false),
    if (data?.conversation?.id) router.replace(`/messages/${data.conversation.id}`)
  },
=======
        attachmentBase64;
        attachmentName: file?.name,
        context})});
    const data = await res.json();
    setSending(false);
    if (data?.conversation?.id) router.replace(`/messages/${data.conversation.id}`)
  };

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-2xl mx-auto p-4">
        <div className="bg-white rounded-xl shadow-sm">
          <div className="p-4 border-b">
            <h1 className="text-xl font-semibold">{headerTitle}</h1>
            <p className="text-sm text-gray-500">
<<<<<<< HEAD
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              {type === 'invite' && jobTitle ? `Hi ${talentName || recipientName || ''}, I’d like to invite you to discuss a project: ${jobTitle}` : null  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              {type === 'apply' && jobTitle ? `Applying to: ${jobTitle}` : null  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            </p>
          </div>
          <div className="p-4 space-y-3">
            <textarea
              value={message}
<<<<<<< HEAD
              on_change={e => set_message (e.target.value)}
              rows={6}
              className='w - full border rounded - lg p - 2 focus:outline - none focus:ring - 2 focus:ring - indigo - 500';
              placeholder={
                type === 'invite' && job_title;
                  ? `Hi ${talent_name || recipient_name || ''}, I’d like to invite you to discuss a project: ${job_title}`;
                  : 'Write your message...';
              }
<<<<<<< HEAD


=======
              onChange={e => setMessage(e.target.value)}
              rows={6}
              className='w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500'
              placeholder={
                type === 'invite' && jobTitle
                  ? `Hi ${talentName |recipientName |''}, I’d like to invite you to discuss a project: ${jobTitle}`
                  : 'Write your message...'
              }
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            />
            <input
              type='url'
              value={linkUrl}
              onChange={e => setLinkUrl(e.target.value)}
              placeholder='Optional proposal or portfolio link'
              className='border rounded-lg p-2 w-full'
            />
            <input
              type='file'
              onChange={e => setFile(e.target.files?.[0] |null)}
              className='text-sm'
              value={message  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              onChange={(e) => setMessage(e.target.value)  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              rows={6  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              className="w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder={type === 'invite' && jobTitle ? `Hi ${talentName || recipientName || ''}, I’d like to invite you to discuss a project: ${jobTitle}` : 'Write your message...'  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
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
<<<<<<< HEAD
);

}
  )
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
=======
<<<<<<< HEAD
=======



}

=======

  )
}

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
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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

<<<<<<< HEAD
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
