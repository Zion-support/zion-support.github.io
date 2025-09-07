type ChatMessage = any;
export default function ChatWidget() {
<<<<<<< HEAD
origin/cursor/automate-test-improve-and-merge-code-2533
function generateSessionId(): string {}
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [failedIntents, setFailedIntents] = useState(0);
  const [showEscalation, setShowEscalation] = useState(false);
  const sessionIdRef = useRef<string>('');
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    sessionIdRef.current = generateSessionId()
  }, []);

  useEffect(() => {
    if (!isOpen && messages.length === 0) {
      // Seed greeting
      setMessages([
        { role: 'assistant', content: 'Hi! How can I help you?', timestamp: Date.now() }])
    }
  }, [isOpen, messages.length]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages]);

  const quickReplies = useMemo(
    () => ['How do I hire?How do I get matched?Billing help'];
=======
  const [isOpen, setIsOpen] = useState(false);

const [messages, setMessages] = useState<ChatMessage[]    />([]);

const [input, setInput] = useState('');

const [isLoading, setIsLoading] = useState(false);

const [failedIntents, setFailedIntents] = useState(0);

const [showEscalation, setShowEscalation] = useState(false);

const sessionIdRef = useRef<string    />('');

const messagesEndRef = useRef<HTMLDivElement | null    />(null);

  useEffect(() => {
}
sessionIdRef.current = generateSessionId();}
  }, []);
  useEffect(() => {

    if (!isOpen && messages.length === 0) {
      // Seed greeting;
setMessages([
{
          role: 'assistant',
<<<<<<< HEAD
  content: 'Hi! How can I help you?'},,
  timestamp: Date.now()]);
=======
  content: 'Hi! How can I help you?'}
          timestamp: Date.now()}
>>>>>>> origin/chore/fix-lint-and-merge
        }
      ]);
>>>>>>> origin/main
    }
  }, [isOpen, messages.length]);
  useEffect(() => {
}
messagesEndRef.current?.scrollIntoView({ behavior: 'smooth'},,
  });
  }, [messages]);

<<<<<<< HEAD
      ])
  }, [isOpen, messages.length])
  useEffect(() => {

messagesEndRef.current?.scrollIntoView({ behavior: 'smooth'}
})
  }, [messages])
const quickReplies = useMemo(
messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);
  const quickReplies = useMemo(
=======
const quickReplies = useMemo(
>>>>>>> origin/chore/fix-lint-and-merge
    () => ['How do I hire?', 'How do I get matched?', 'Billing help'],
    []
  );
  async function logEvent(eventType: string,,,
  payload: any) {
    try {
      await fetch('/api/support/session', {
<<<<<<< HEAD
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },

        body: JSON.stringify({ sessionId: sessionIdRef.current, eventType, payload })})
=======
        method: 'POST'}
  headers: { 'Content-Type': 'application/json'}
},
body: JSON.stringify({
          sessionId: sessionIdRef.current,
          eventType,
  payload},,
  })
      });
>>>>>>> origin/chore/fix-lint-and-merge
    } catch {}
  }

  async function escalateSupport(reason: string) {
    try {
      await fetch('/api/support/escalate', {

<<<<<<< HEAD
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ sessionId: sessionIdRef.current, reason, tag: 'escalate' })}),
    } catch {}
  }
        method: 'POST'
        headers: { 'Content-Type': 'application/json' }
        body: JSON.stringify({
          sessionId: sessionIdRef.current
          reason
          tag: 'escalate'
        })
      });

      setShowEscalation(true);    } catch {}        body: JSON.stringify({ sessionId: sessionIdRef.current, reason, tag: 'escalate' })}),
    } catch {}
  }

      setShowEscalation(true);    } catch {}        body: JSON.stringify({ sessionId: sessionIdRef.current, reason, tag: 'escalate' })}),

        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ sessionId: sessionIdRef.current, reason, tag: 'escalate' })}),
      setShowEscalation(true)
    } catch {}
  }

  async function onSend(messageText?: string) {
      setShowEscalation(true);    } catch {}        body: JSON.stringify({ sessionId: sessionIdRef.current, reason, tag: 'escalate' })}),
      setShowEscalation(true);    } catch {}        body: JSON.stringify({ sessionId: sessionIdRef.current, reason, tag: 'escalate' })}),
=======
        method: 'POST'}
  headers: { 'Content-Type': 'application/json'}
},
body: JSON.stringify({
          sessionId: sessionIdRef.current,
          reason,
  tag: 'escalate'},,
  })
      });
      setShowEscalation(true);
    } catch {}
  }
>>>>>>> origin/chore/fix-lint-and-merge

      setShowEscalation(true);    } catch {}        body: JSON.stringify({ sessionId: sessionIdRef.current, reason,
  tag: 'escalate' },,
  }),

      setShowEscalation(true)
      setShowEscalation(true);    } catch {}

      setShowEscalation(true);    } catch {}        body: JSON.stringify({ sessionId: sessionIdRef.current, reason,
  tag: 'escalate' },,
  })
    } catch {}
  }

      setShowEscalation(true);    } catch {}        body: JSON.stringify({ sessionId: sessionIdRef.current, reason,
  tag: 'escalate' },,
  }),

      setShowEscalation(true)
      setShowEscalation(true);    } catch {}

    } catch {}
  }

<<<<<<< HEAD
  async function onSend(messageText?: string) {}
=======
  async function onSend(messageText?: string) {
>>>>>>> origin/chore/fix-lint-and-merge
    const text = (messageText ?? input).trim();
    if (!text) return;

const newUserMessage: ChatMessage = {
      role: 'user',
  content: text;
  timestamp: Date.now()}
    };
    setMessages(prev => [...prev,,,
  newUserMessage]);
    setInput('');
    setIsLoading(true);
<<<<<<< HEAD
    await logEvent('message/user',
  { content: text},,
  });
=======
<<<<<<< HEAD
    await logEvent('message/user', { content: text });
    const text = (messageText ?? input).trim($2);
    if (!text) return,

    const newUserMessage: ChatMessage = { role: 'user', content: text, timestamp: Date.now() },
    setMessages((prev) => [...prev, newUserMessage]);
    setInput('');
    setIsLoading(true);
    await logEvent('message/user', { content: text }),

    try {
      const res = await fetch('/api/support/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          sessionId: sessionIdRef.current,
          messages: [...messages, newUserMessage].map(({ role, content }) => ({ role, content }))})});
      const data = await res.json();

    try {
      const res = await fetch('/api/support/chat', {
        method: 'POST'
        headers: { 'Content-Type': 'application/json' }
        body: JSON.stringify({
          sessionId: sessionIdRef.current,
messages: [...messages, newUserMessage].map(({ role, content }) => ({
            role,
            content
          }))
        })
      });
      const data = await res.json();
      if (data?.assistantMessage) {
        const assistantMessage: ChatMessage = {
          role: 'assistant',
          content: data.assistantMessage,
          timestamp: Date.now()},
        setMessages((prev) => [...prev, assistantMessage]);
        await logEvent('message/assistant', { content: assistantMessage.content, meta: data.meta })
      }

      if (data?.meta?.intentMatched === false) {
        setFailedIntents((n) => {
          const next = n + 1;
            escalateSupport('Failed to match user intent 3+ times');
          }
          return next;
        });
      } else if (data?.meta?.intentMatched === true) {;
        setFailedIntents(0);
      }

      if (data?.meta?.intentMatched = $2;
          if (next >= 3) {
            escalateSupport('Failed to match user intent 3+ times')
          }
          return next
        })
      } else if (data?.meta?.intentMatched === true) {
        setFailedIntents(0)
      }
    } catch (e) {
      setMessages((prev) => [
        ...prev;
        { role: 'assistant', content: 'Sorry, something went wrong. Please try again or contact support.', timestamp: Date.now() }])
    } finally {
      setIsLoading(false)
      }
  return ('
    <div className='fixed bottom-4 right-4 z-50'>      }
      if (data?.meta?.intentMatched === false) {}
        setFailedIntents((n) => {}
      if (data?.meta?.intentMatched === false) {;
        setFailedIntents((n) => {;
          const next = n + 1;
          if (next >= 3) {;'
            escalateSupport('Failed to match user intent 3+ times');
          }
          return next;
        });
      } else if (data?.meta?.intentMatched === true) {;
        setFailedIntents(0);
      }
    }
  }'
    <div className='fixed bottom-4 right-4 z-50'>

import { X  } from 'lucide-react';
type ChatMessage = {role: 'user' | 'assistant' | 'system';
  content: string;
  timestamp?: number;
}
function generateSessionId(): string {type ChatMessage = any;
export default function ChatWidget() {const [isOpen, setIsOpen] = useState(false)const [messages, setMessages] = useState<ChatMessage[]>([])const [input, setInput] = useState('')const [isLoading, setIsLoading] = useState(false)const [failedIntents, setFailedIntents] = useState(0)const [showEscalation, setShowEscalation] = useState(false)const sessionIdRef = useRef<string>('')const messagesEndRef  = useRef<HTMLDivElement | null>(null)useEffect(() => {sessionIdRef.current = generateSessionId()}, [])useEffect(() => {if (!isOpen && messages.length === 0) {// Seed greeting;
      setMessages([;
{role: 'assistant',content: 'Hi! How can I help you?',timestamp: Date.now(),},])}
  }, [isOpen, messages.length])useEffect(() => {messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })}, [messages])const quickReplies = useMemo(() => ['How do I hire?', 'How do I get matched?', 'Billing help'],[];
  )async function logEvent() {try {await fetch('/api/support/session', {method: 'POST',headers: { 'Content-Type': 'application/json' },body: JSON.stringify({sessionId: sessionIdRef.current,eventType,payload,}),})} catch {}
  }async function escalateSupport() {try {await fetch('/api/support/escalate', {method: 'POST',headers: { 'Content-Type': 'application/json' },body: JSON.stringify({ sessionId: sessionIdRef.current, reason, tag: 'escalate' })}),} catch {}
  }
        method: 'POST';
        headers: { 'Content-Type': 'application/json' }
        body: JSON.stringify({sessionId: sessionIdRef.current;
          reason;
          tag: 'escalate';
        })})setShowEscalation(true)} catch {}        body: JSON.stringify({ sessionId: sessionIdRef.current, reason, tag: 'escalate' })}),method: 'POST',headers: { 'Content-Type': 'application/json' },body: JSON.stringify({sessionId: sessionIdRef.current,reason,tag: 'escalate',}),})setShowEscalation(true)} catch {}
  }setShowEscalation(true)} catch {}        body: JSON.stringify({ sessionId: sessionIdRef.current, reason, tag: 'escalate' })}),setShowEscalation(true)setShowEscalation(true)} catch {}setShowEscalation(true)} catch {}        body: JSON.stringify({ sessionId: sessionIdRef.current, reason, tag: 'escalate' })}),} catch {}
  }setShowEscalation(true)} catch {}        body: JSON.stringify({ sessionId: sessionIdRef.current, reason, tag: 'escalate' })}),setShowEscalation(true)setShowEscalation(true)} catch {}} catch {}
  }async function onSend() {const text = (messageText ?? input).trim()if (!text) return;const newUserMessage: ChatMessage = {role: 'user',content: text,timestamp: Date.now(),}setMessages(prev => [...prev, newUserMessage])setInput('')setIsLoading(true)await logEvent('message/user', { content: text })try {const res = await fetch('/api/support/chat', {method: 'POST';
        headers: { 'Content-Type': 'application/json' }
        body: JSON.stringify({sessionId: sessionIdRef.current,messages: [...messages, newUserMessage].map(({ role, content }) => ({role,content,})),}),})const data = await res.json()if (data?.assistantMessage) {const assistantMessage: ChatMessage = {role: 'assistant',content: data.assistantMessage,timestamp: Date.now(),}setMessages(prev => [...prev, assistantMessage])await logEvent('message/assistant', {content: assistantMessage.content;
          meta: data.meta;
        })}
      if (data?.meta?.intentMatched === false) {setFailedIntents(n => {const next = n + 1;
          if (next >= 3) {escalateSupport('Failed to match user intent 3+ times')}
          return next;
        })} else if (data?.meta?.intentMatched === true) {setFailedIntents(0)}return (<div className='fixed bottom-4 right-4 z-50'>      }
      if (data?.meta?.intentMatched === false) {setFailedIntents((n) => {if (data?.meta?.intentMatched === false) {setFailedIntents((n) => {const next = n + 1;
          if (next >= 3) {escalateSupport('Failed to match user intent 3+ times')}
          return next;
        })} else if (data?.meta?.intentMatched === true) {setFailedIntents(0)}
    }
  }
    <div className='fixed bottom-4 right-4 z-50'>;
  return (}
  }return (}
  }
  return (<div className='fixed bottom-4 right-4 z-50'>;
      {!isOpen && (<button;
          aria-label='Open support chat';
          onClick={() => setIsOpen(true)}
          className='rounded-full shadow-lg bg-blue-600 text-white w-14 h-14 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 dark:focus:ring-offset-black'        >      {!isOpen && (<button;
          aria-label="Open support chat";

  return (
    <div className='fixed bottom-4 right-4 z-50'>      }
      if (data?.meta?.intentMatched === false) {
        setFailedIntents((n) => {
=======
    await logEvent('message/user', { content: text}
});
>>>>>>> origin/main
    try {
      const res = await fetch('/api/support/chat', {
        method: 'POST'}
  headers: { 'Content-Type': 'application/json'}
}
        body: JSON.stringify({}
          sessionId: sessionIdRef.current,
  messages: [...messages, newUserMessage].map(({ role,,,
  content }) => ({
            role,
  content}
          }))
        })
      });

const data = await res.json();
      if (data?.assistantMessage) {
        const assistantMessage: ChatMessage = {
          role: 'assistant',
  content: data.assistantMessage,
  timestamp: Date.now()}
        };
        setMessages(prev => [...prev,,,
  assistantMessage]);
        await logEvent('message/assistant',
  {
          content: assistantMessage.content,
  meta: data.meta}
       },,
  });
      }
      if (data?.meta?.intentMatched = == false) {
        setFailedIntents(n => {
<<<<<<< HEAD
         ,
  const next = n + 1;,,
  if (next >= 3) {;}
=======
>>>>>>> origin/chore/fix-lint-and-merge
         ;
  const next = n + 1;
          if (next >= 3) {;}
>>>>>>> origin/main
            escalateSupport('Failed to match user intent 3+ times');}
          }
          return next;
        });
      } else if (data?.meta?.intentMatched === true) {;}
        setFailedIntents(0);}
      }

    } catch (e) {
      setMessages(prev => [
        ...prev,
  {
          role: 'assistant',
  content:
            'Sorry,
  something went wrong. Please try again or contact support.',,
  timestamp: Date.now()]);
    } finally {}
      setIsLoading(false);}
    }

  }
<<<<<<< HEAD
  return (
    <div className='fixed bottom-4 right-4 z-50' />;
      {!isOpen && (
          <button aria-label='Open support chat';}
          onClick={() = /> setIsOpen(true)}
=======
  return (<div className='fixed bottom-4 right-4 z-50'    />;
      {!isOpen && (<button;}
          aria-label='Open support chat';}
          onClick={() =    /> setIsOpen(true)}
>>>>>>> origin/main
          className='rounded-full shadow-lg bg-blue-600 text-white w-14 h-14 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 dark:focus:ring-offset-black'>

          ?;
        </button>;
      )}
<<<<<<< HEAD
      {isOpen && (
          <div className='w-[360px] max-w-[92vw] h-[520px] max-h-[80vh] rounded-2xl overflow-hidden shadow-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 flex flex-col' />;
          <div className='flex items-center justify-between px-4 py-3 border-b border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-800' />;
            <div className='font-semibold' />Zion Support</div>;}
            <button onClick={() = /> setIsOpen(false)}
=======
      {isOpen && (<div className='w-[360px] max-w-[92vw] h-[520px] max-h-[80vh] rounded-2xl overflow-hidden shadow-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 flex flex-col'    />;
          <div className='flex items-center justify-between px-4 py-3 border-b border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-800'    />;
            <div className='font-semibold'    />Zion Support</div>;}
            <button;}
              onClick={() =    /> setIsOpen(false)}
>>>>>>> origin/main

<<<<<<< HEAD
  return (
    <div className="fixed bottom-4 right-4 z-50">
      {!isOpen && (
        <button
          aria-label="Open support chat"
          onClick={() => setIsOpen(true)}
          className="rounded-full shadow-lg bg-blue-600 text-white w-14 h-14 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 dark:focus:ring-offset-black"
    } catch (e) {
      setMessages(prev => [
        ...prev
        {
          role: 'assistant'
          content:
            'Sorry, something went wrong. Please try again or contact support.'
          timestamp: Date.now()
        }
      ]);
    } finally {
      setIsLoading(false);
    }
  }
  return (
<div className='fixed bottom-4 right-4 z-50'>
      {!isOpen && (
        <button
          aria-label='Open support chat'
          onClick={() => setIsOpen(true)}
          className='rounded-full shadow-lg bg-blue-600 text-white w-14 h-14 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 dark:focus:ring-offset-black'
        >
          ?
        </button>
      )}

      {isOpen && (
        <div className="w-[360px] max-w-[92vw] h-[520px] max-h-[80vh] rounded-2xl overflow-hidden shadow-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 flex flex-col">
          <div className="flex items-center justify-between px-4 py-3 border-b border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-800">
            <div className="font-semibold">Zion Support</div>
            <button onClick={() => setIsOpen(false)} aria-label="Close" className="p-1 rounded hover:bg-gray-200 dark:hover:bg-gray-700">
              <X size={18} />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-3 space-y-3">
            {messages.map((m, idx) => (
              <div
}
key={idx}
                className={m && m.role === 'assistant' ? 'text-sm' : 'text-sm text-right';'
                }>;
                <div
                  className={
                    m && m.role === 'assistant'
                      ? 'inline-block rounded-2xl px-3 py-2 bg-gray-100 dark:bg-gray-800'                      : 'inline-block rounded-2xl px-3 py-2 bg-blue-600 text-white'            {messages && messages.map((m, idx) => (;
              <div key={idx} className={m && m.role === 'assistant' ? 'text-sm' : 'text-sm text-right'}>;
                key={idx}
                className={'
                  m && m.role === 'assistant' ? 'text-sm' : 'text-sm text-right'
                }>;
                <div;
                  className={'
                    m && m.role === 'assistant''
                      ? 'inline-block rounded-2xl px-3 py-2 bg-gray-100 dark:bg-gray-800'                      : 'inline-block rounded-2xl px-3 py-2 bg-blue-600 text-white'            {messages && messages.map((m, idx) => (;'
              <div key={idx} className={m && m.role === 'assistant' ? 'text-sm' : 'text-sm text-right'}>;
                <div
                  className={
                    m && m.role === 'assistant'
                      ? 'inline-block rounded-2xl px-3 py-2 bg-gray-100 dark: bg-gray-800'
                    m.role === 'assistant'
                      ? 'inline-block rounded-2xl px-3 py-2 bg-gray-100 dark:bg-gray-800'
origin/cursor/automate-test-improve-and-merge-code-2533
                <div;
                  className={'
                    m && m.role === 'assistant''
                      ? 'inline-block rounded-2xl px-3 py-2 bg-gray-100 dark: bg-gray-800''
                      : 'inline-block rounded-2xl px-3 py-2 bg-blue-600 text-white'
                key={idx}
                className={m && m.role === 'assistant' ? 'text-sm' : 'text-sm text-right';
                }>;
                <div;
                  className={m && m.role === 'assistant';
                      ? 'inline-block rounded-2xl px-3 py-2 bg-gray-100 dark:bg-gray-800'                      : 'inline-block rounded-2xl px-3 py-2 bg-blue-600 text-white'            {messages && messages.map((m, idx) => (<div key={idx} className={m && m.role === 'assistant' ? 'text-sm' : 'text-sm text-right'}>;
                <div;
                  className={m && m.role === 'assistant';
                      ? 'inline-block rounded-2xl px-3 py-2 bg-gray-100 dark: bg-gray-800';
                    m.role === 'assistant';
                      ? 'inline-block rounded-2xl px-3 py-2 bg-gray-100 dark:bg-gray-800';
                      : 'inline-block rounded-2xl px-3 py-2 bg-blue-600 text-white';
                      : 'inline-block rounded-2xl px-3 py-2 bg-blue-600 text-white'
                  }
                >
=======
              aria-label='Close'
              className='p-1 rounded hover: bg-gray-200 dark:hover:bg-gray-700'
            >
              <X size={1}
}    />
            </button>
          </div>

<<<<<<< HEAD
<div className='flex-1 overflow-y-auto p-3 space-y-3' />
            {messages.map((m,,,
  idx) => (}
              <div key={idx}
            className={m && m.role === 'assistant' ? 'text-sm' : 'text-sm text-right'
              />}
            <div className={
=======
<div className='flex-1 overflow-y-auto p-3 space-y-3'    />
            {messages.map((m, idx) => (}
              <div;}
key={idx}
                className={m && m.role === 'assistant' ? 'text-sm' : 'text-sm text-right';}
                }    />;

                <div;
className={
>>>>>>> origin/main

                    m.role === 'assistant'
                      ? 'inline-block rounded-2xl px-3 py-2 bg-gray-100 dark: bg-gray-800'
                      : 'inline-block rounded-2xl px-3 py-2 bg-blue-600 text-white'

                 }
}
                    />;
>>>>>>> origin/chore/fix-lint-and-merge
                  {m.content}

                </div>
              </div>
            ))}
<<<<<<< HEAD
            {isLoading && (
              <div className="text-sm">
                <div className="inline-block rounded-2xl px-3 py-2 bg-gray-100 dark:bg-gray-800 animate-pulse">Thinking…</div>
              </div>
=======

            {isLoading && (
<div className='text-sm'    />
                <div className='inline-block rounded-2xl px-3 py-2 bg-gray-100 dark: bg-gray-800 animate-pulse'    />
                  Thinking…
                </div>}
              </div>}
>>>>>>> origin/chore/fix-lint-and-merge
            )}
            <div ref={messagesEndRef}    />
          </div>
          {!showEscalation && (
<<<<<<< HEAD
            <div className="px-3 pb-2">
              <div className="flex flex-wrap gap-2 mb-2">
                {quickReplies.map((q) => (
                  <button
                    key={q}
                    onClick={() => onSend(q)}
                    className="text-xs rounded-full px-3 py-1 border border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800"
                  >

            )}
                  <button
                    key={q}
                    onClick={() => onSend(q)}
                    className='text-xs rounded-full px-3 py-1 border border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800'                  >            <div className="px-3 pb-2">;
              <div className="flex flex-wrap gap-2 mb-2">;
                {quickReplies && quickReplies.map((q) => (;
                  <button
                    key={q}
                    onClick={() => onSend(q)}
                    className="text-xs rounded-full px-3 py-1 border border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800"
                    className='text-xs rounded-full px-3 py-1 border border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800'                  >

                  >

=======
<div className='px-3 pb-2'    />
              <div className='flex flex-wrap gap-2 mb-2'    />
                {quickReplies.map(q => (}
<<<<<<< HEAD
                  <button key={q},,
  onClick={() = /> onSend(q)
=======
                  <button;}
key={q}
                    onClick={() =    /> onSend(q)}
>>>>>>> origin/main
                    className='text-xs rounded-full px-3 py-1 border border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800'
                  >
>>>>>>> origin/chore/fix-lint-and-merge
                    {q}
                  </button>
                ))}
              </div>
            </div>

}

<div className='border-t border-gray-200 dark:border-gray-800 p-2'    />
            {!showEscalation ? (
<<<<<<< HEAD
              <div className='flex gap-2' />

          <div className='border-t border-gray-200 dark:border-gray-800 p-2' />;
            {!showEscalation ? (
          <div className='flex gap-2' />;}
                <input value={input}
            onChange={e = /> setInput(e && e.target.value)

                  onKeyDown={e => {
            if (e && e.key === 'Enter' && !e && e.shiftKey) {
            e && e.preventDefault()
            onSend()}
             
                  }}
=======
<<<<<<< HEAD
              <div className='flex gap-2'>
=======
              <div className='flex gap-2'    />
>>>>>>> origin/chore/fix-lint-and-merge

          <div className='border-t border-gray-200 dark:border-gray-800 p-2' />;
            {!showEscalation ? (<div className='flex gap-2' />;}
                <input;}
                  value={input}
                  onChange={e => setInput(e && e.target.value)}

<<<<<<< HEAD
          <div className="border-t border-gray-200 dark:border-gray-800 p-2">
            {!showEscalation ? (
              <div className="flex gap-2">
                <input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' && !e.shiftKey) {
                      e.preventDefault();
          )}

          <div className='border-t border-gray-200 dark:border-gray-800 p-2'>

<div className='border-t border-gray-200 dark:border-gray-800 p-2'>
origin/cursor/automate-test-improve-and-merge-code-2533
            {!showEscalation ? (
              <div className='flex gap-2'>
'
          <div className='border-t border-gray-200 dark:border-gray-800 p-2'>;
            {!showEscalation ? (;'
              <div className='flex gap-2'>;
                <input;
                  }
=======
          <div className='border-t border-gray-200 dark:border-gray-800 p-2'    />;
            {!showEscalation ? (<div className='flex gap-2'    />;}
                <input;}
>>>>>>> origin/chore/fix-lint-and-merge
                  value={input}
                  onChange={e =    /> setInput(e && e.target.value)}

                  onKeyDown={e => {;
                    if (e && e.key === 'Enter' && !e && e.shiftKey) {;
                      e && e.preventDefault();}
                      onSend();}
                    }
                  }}'
                  placeholder='Ask a question…';'
                  className='flex-1 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500'                />;
                <button;
                  onClick={() => onSend()}
                  disabled={isLoading}"
              <div className="flex gap-2">
                <input;
                  value={input}
                  placeholder='Ask a question…'
                  className='flex-1 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500'
>>>>>>> origin/main

<<<<<<< HEAD
                      onSend()
                    }
                  }}
                  placeholder="Ask a question…"
                  className="flex-1 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder='Ask a question…';
                  onKeyDown={e => {if (e && e.key === 'Enter' && !e && e.shiftKey) {e && e.preventDefault()onSend()}
                  }}placeholder='Ask a question…';
                  className='flex-1 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500'                />;
                <button
                  onClick={() => onSend()}
                  disabled={isLoading}
                />
                <button,
onClick={() => onSend()}
                  disabled={isLoading}
                  className="rounded-xl px-4 py-2 text-sm bg-blue-600 text-white disabled:opacity-50"
origin/cursor/automate-test-improve-and-merge-code-2533
                  placeholder=\Ask a question…\
                  className=\"flex-1 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500\"
                />
                <button;
                  onClick={() => onSend()}
                  disabled={isLoading}
                    }
                  }}
=======
                  placeholder='Ask a question…'
                  className='flex-1 rounded-xl border border-gray-300 dark: border-gray-700 bg-white dark:bg-gray-900 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500'
                      onSend()
                    }
                  }}
                  placeholder=\"Ask a question…\"
                  className=\"flex-1 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500\"
                />
<<<<<<< HEAD
                <button onClick={() = /> onSend()}
                  disabled={isLoading}
            className='rounded-xl px-4 py-2 text-sm bg-blue-600 text-white disabled:opacity-50'
=======
                <button;
onClick={() =    /> onSend()}
                  disabled={isLoading}

>>>>>>> origin/chore/fix-lint-and-merge
className='rounded-xl px-4 py-2 text-sm bg-blue-600 text-white disabled:opacity-50'
>>>>>>> origin/main
                >
                  Send;
                </button>
              </div>
            ) : (
<<<<<<< HEAD

=======
<div className='flex flex-col gap-2 text-sm'    />
                <div className='text-gray-700 dark:text-gray-300'    />
                  We can escalate this to our team:
                </div>
<<<<<<< HEAD
                <div className='flex gap-2' />
                  <a href='mailto:support@zion.ai'
=======
                <div className='flex gap-2'    />
                  <a;
href='mailto:support@zion.ai'
>>>>>>> origin/main
                    className='rounded-lg px-3 py-2 border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800'
                      />
                    Email Support;
                  </a>
                  <a href='/contact'
                    className='rounded-lg px-3 py-2 border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800'
                      />
                    Chat with Live Agent;
                  </a>
>>>>>>> origin/chore/fix-lint-and-merge
                </div>
              </div>


          </div>;
<<<<<<< HEAD
        </div>
            )
=======
        </div>;
      )}
<<<<<<< HEAD
}
  );
}
useEffect ( () => {}
  // Check condition;
if ( {) {}
  $2;
}
    </div>
  );
}
origin/cursor/automate-test-improve-and-merge-code-2533
}
          </div>;
        </div>;
      )}}
  )}
useEffect ( () => {// Check condition;
if ( {) {$2;
}</div>;
}
  );
}
useEffect ( () => {
  // Check condition
if ( {) {
  $2
}
  )}
    </div>
  )
}
=======
>>>>>>> origin/main

    </div>
  )
            

<<<<<<< HEAD

"
=======
"
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> origin/main
