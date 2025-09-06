import React from 'react';
<<<<<<< HEAD
<<<<<<< HEAD
import { useRouter  } from 'next/router';
import { useCurrentUser } from '../../hooks/useCurrentUser';
<<<<<<< HEAD
=======
}

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
export default function ComposePage() {

  const router = useRouter();
  const {
<<<<<<< HEAD
    type
    recipientId
    recipientName
    jobId
    jobTitle
    talentId
    talentName
  } = router.query as Record<string, string>;  const { user, loading } = useCurrentUser();
=======
<<<<<<< HEAD
    type,
    recipientId,
    recipientName,
    jobId,
    jobTitle,
    talentId,
    talentName,
  } = router.query as Record<string, string>;
  const { user, loading } = useCurrentUser();
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
=======
import {useRouter} from 'next/router';
import {useCurrentUser} from '../../hooks/useCurrentUser';
export default function ComposePage() {;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
import { useRouter } from 'next/router';
import { useCurrentUser } from '../../hooks/useCurrentUser';
export default function ComposePage(req, res) {
  try {
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  const router = useRouter();
  const { type, recipientId, recipientName, jobId, jobTitle, talentId, talentName } = router.query as Record<string, string>;
  const { user, loading } = useCurrentUser();
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
  const [message, setMessage] = React.useState('');
  const [linkUrl, setLinkUrl] = React.useState('');
  const [file, setFile] = React.useState<File | null>(null);
  const [sending, setSending] = React.useState(false);
<<<<<<< HEAD
  React.useEffect(() => {
<<<<<<< HEAD
    if (!loading && !user) router.replace('/auth');  }, [loading, user, router]);
  if (!user) return null;
=======
    if (!loading && !user) router.replace('/auth');
  }, [loading, user, router]);

  if (!user) return null;

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
  const headerTitle =
    type === 'invite'
      ? `Invite ${recipientName |talentName |'Talent'}`
      : type === 'apply'
        ? `Apply to ${jobTitle |'Job'}`
        : 'New Message';
  const context =
    type === 'invite'
      ? { type: 'invite', jobId, jobTitle, talentId, talentName }
      : type === 'apply'
        ? { type: 'application', jobId, jobTitle }
<<<<<<< HEAD
        : { type: 'general' }
=======
        : { type: 'general' };

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
  const onSend = async () => {
    if (!recipientId && !talentId) return alert('Missing recipient');
    if (!message.trim() && !file && !linkUrl) return;
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
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
    setSending(true);
<<<<<<< HEAD
<<<<<<< HEAD
    let attachmentBase64: string | undefined;    if (file) {
=======
    let attachmentBase64: string | undefined;
    if (file) {;
>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
      const buff = await file.arrayBuffer();
      const base64 = Buffer.from(buff).toString('base64');
<<<<<<< HEAD
<<<<<<< HEAD
      const mime = file.type |'application/octet-stream';
      attachmentBase64 = `data:${mime};base64,${base64}`;    }
=======
<<<<<<< HEAD
    let attachmentBase64: string | undefined;
    if (file) {
      const buff = await file.arrayBuffer();
      const base64 = Buffer.from(buff).toString('base64');
      const mime = file.type || 'application/octet-stream';
      attachmentBase64 = `data:${mime};base64,${base64}`;
    }
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
=======
      const mime = file.type || 'application/octet-stream';
=======
      const mime = file.type || 'application/octet-stream';
<<<<<<< HEAD
      attachmentBase64 = `data:${mime};base64,${base64}`;    }
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
      attachmentBase64 = `data:${mime},base64,${base64}`;
      } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
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
        recipientId: recipientId || talentId,
        body: message,
        linkUrl: linkUrl || undefined,
        attachmentBase64,
        attachmentName: file?.name,
        context,
      }),
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
    });
    const data = await res.json();
    setSending(false);
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
                : null}
              {type === 'apply' && jobTitle ? `Applying to: ${jobTitle}` : null}
=======
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
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
            </p>
          </div>
          <div className="p-4 space-y-3">
            <textarea
<<<<<<< HEAD
              value={message}
              onChange={e => setMessage(e.target.value)}
              rows={6}
              className='w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500'
              placeholder={
                type === 'invite' && jobTitle
                  ? `Hi ${talentName |recipientName |''}, I’d like to invite you to discuss a project: ${jobTitle}`
                  : 'Write your message...'
              }
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
=======
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
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
            />
            <input type="url" value={linkUrl} onChange={(e) => setLinkUrl(e.target.value)} placeholder="Optional proposal or portfolio link" className="border rounded-lg p-2 w-full" />
            <input type="file" onChange={(e) => setFile(e.target.files?.[0] || null)} className="text-sm" />
          </div>
          <div className="p-4 border-t flex justify-end">
            <button onClick={onSend} disabled={sending} className="px-4 py-2 rounded-lg bg-indigo-600 text-white shadow hover:bg-indigo-700 disabled:opacity-50">{sending ? 'Sending...' : 'Send'}</button>
          </div>
<<<<<<< HEAD
          <div className='p-4 border-t flex justify-end'>
            <button
              onClick={onSend}
              disabled={sending}
              className='px-4 py-2 rounded-lg bg-indigo-600 text-white shadow hover:bg-indigo-700 disabled:opacity-50'
            >
              {sending ? 'Sending...' : 'Send'}
<<<<<<< HEAD
            </button>          </div>
        </div>
      </div>
    </div>
);
=======
            </button>
          </div>
        </div>
      </div>
    </div>
  );
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
=======
        </div>
      </div>
    </div>
<<<<<<< HEAD
);
<<<<<<< HEAD
=======

}
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
  )
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
