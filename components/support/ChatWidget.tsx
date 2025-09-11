<<<<<<< HEAD

<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import React, { useEffect, useMemo, useRef, useState } from 'react';
useEffect ( () => {
  if (!isOpen && messages.length === 0) {
  //Seed greeting setMessages ([ import React, { useEffect, useMemo, useRef, useState } from 'react';
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import { X } from 'lucide-react';

type ChatMessage = {
  role: 'user' | 'assistant' | 'system'
  content: string
  timestamp?: number
}
function generateSessionId(): string {
<<<<<<< HEAD
<<<<<<< HEAD

export default function ChatWidget() {
  if (typeof window === 'undefined') return '';
  const existing = window.localStorage.getItem('zion_support_session_id');
  if (existing) return existing;
  const id = `sess_${Math.random().toString(36).slice(2)}_${Date.now()}`;
  window.localStorage.setItem('zion_support_session_id', id);
  return id
}
export default function ChatWidget() {;
=======
=======
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

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
 useEffect ( () => {;
  if (!isOpen && messages && messages.length === 0) {;
  //Seed greeting setMessages ([ import React, { useEffect, useMemo, useRef, useState } from 'react';
import { X } from 'lucide-react';
type ChatMessage = {;
  role: 'user' | 'assistant' | 'system',;
  content: string,;
  timestamp?: number;
};
function generateSessionId(): any (): string {;
  if (typeof window === 'undefined') return '';
  const existing = window && window.localStorage.getItem('zion_support_session_id');
  if (existing) return existing;
  const id = `sess_${Math && Math.random().toString(36).slice(2)}_${Date && Date.now()}`;
  window && window.localStorage.setItem('zion_support_session_id', id);
  return id;
}


<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [failedIntents, setFailedIntents] = useState(0);
  const [showEscalation, setShowEscalation] = useState(false);
  const sessionIdRef = useRef<string>('');
  const messagesEndRef = useRef<HTMLDivElement | null>(null);
<<<<<<< HEAD
<<<<<<< HEAD
  useEffect(() => {
    sessionIdRef.current = generateSessionId();  }, []);    sessionIdRef.current = generateSessionId()
=======


  useEffect(() => {
<<<<<<< HEAD
    sessionIdRef.current = generateSessionId()

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  }, []);
  useEffect(() => {
    if (!isOpen && messages.length === 0) {
      // Seed greeting
      setMessages([
<<<<<<< HEAD
        {
          role: 'assistant'
          content: 'Hi! How can I help you?'
          timestamp: Date.now()
        }
      ]);    }
  }, [isOpen, messages.length]);
  useEffect(() => {        { role: 'assistant', content: 'Hi! How can I help you?', timestamp: Date.now() }])
    }
  }, [isOpen, messages.length]);
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);
  const quickReplies = useMemo(
    () => ['How do I hire?', 'How do I get matched?', 'Billing help'],    []    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages]);
  const quickReplies = useMemo(
    () => ['How do I hire?How do I get matched?Billing help'];
=======

        { role: 'assistant', content: 'Hi! How can I help you?', timestamp: Date.now() }])

    }
  }, [isOpen, messages.length]);
  useEffect(() => {

    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })

  }, [messages]);
  const quickReplies = useMemo(
    () => ['How do I hire?How do I get matched?Billing help'];

    []

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  );
  async function logEvent(eventType: string, payload: any) {
    try {
      await fetch('/api/support/session', {
<<<<<<< HEAD
        method: 'POST'
        headers: { 'Content-Type': 'application/json' }
        body: JSON.stringify({
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ sessionId: sessionIdRef.current, eventType, payload })})

    } catch {}
  }
<<<<<<< HEAD

          sessionId: sessionIdRef.current
          eventType
          payload
        })
      });    } catch {}        body: JSON.stringify({ sessionId: sessionIdRef.current, eventType, payload })})
=======
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          sessionId: sessionIdRef.current,
          eventType,
          payload,
        }),
<<<<<<< HEAD
      });    } catch {}

      });    } catch {}        body: JSON.stringify({ sessionId: sessionIdRef.current, eventType, payload })})
      });    } catch {}
=======


  useEffect(() => {
      });    } catch {}

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

    } catch {}
  }

  async function escalateSupport(reason: string) {
    try {
      await fetch('/api/support/escalate', {
<<<<<<< HEAD
=======

        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ sessionId: sessionIdRef.current, reason, tag: 'escalate' })}),

      setShowEscalation(true)
      setShowEscalation(true);    } catch {}

    } catch {}
  }
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        method: 'POST'
        headers: { 'Content-Type': 'application/json' }
        body: JSON.stringify({
          sessionId: sessionIdRef.current
          reason
          tag: 'escalate'
        })
      });

<<<<<<< HEAD

  async function escalateSupport(reason: string) {
    try {
      await fetch('/api/support/escalate', {

        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ sessionId: sessionIdRef.current, reason, tag: 'escalate' })}),

      setShowEscalation(true);    } catch {}        body: JSON.stringify({ sessionId: sessionIdRef.current, reason, tag: 'escalate' })})
      setShowEscalation(true);    } catch {}        body: JSON.stringify({ sessionId: sessionIdRef.current, reason, tag: 'escalate' })}),
      setShowEscalation(true)
      setShowEscalation(true);    } catch {}

    } catch {}
  }

=======
      setShowEscalation(true);    } catch {}        body: JSON.stringify({ sessionId: sessionIdRef.current, reason, tag: 'escalate' })}),
=======
    } catch {}
  }
=======

      setShowEscalation(true);    } catch {}        body: JSON.stringify({ sessionId: sessionIdRef.current, reason, tag: 'escalate' })}),

      setShowEscalation(true)
      setShowEscalation(true);    } catch {}

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


    } catch {}
  }

<<<<<<< HEAD


=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  async function onSend(messageText?: string) {
    const text = (messageText ?? input).trim();
    if (!text) return;


  useEffect(() => {;
    sessionIdRef && sessionIdRef.current = generateSessionId();  }, []);    sessionIdRef && sessionIdRef.current = generateSessionId();
  }, []);

  useEffect(() => {;
    if (!isOpen && messages && messages.length === 0) {;
      // Seed greeting;
      setMessages([;
        {;
          role: 'assistant',;
          content: 'Hi! How can I help you?',;
          timestamp: Date && Date.now(),;
        },;
      ]);    }
  }, [isOpen, messages && messages.length]);

  useEffect(() => {        { role: 'assistant', content: 'Hi! How can I help you?', timestamp: Date && Date.now() }]);
    }
  }, [isOpen, messages && messages.length]);

  useEffect(() => {;
    messagesEndRef && messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const quickReplies = useMemo(;
    () => ['How do I hire?', 'How do I get matched?', 'Billing help'],    []    messagesEndRef && messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const quickReplies = useMemo(;
    () => ['How do I hire?How do I get matched?Billing help'];
  );

  async function logEvent(): any (eventType: string, payload: any) {;
    try {;
      await fetch('/api/support/session', {;
        method: 'POST',;
        headers: { 'Content-Type': 'application/json' },;
        body: JSON && JSON.stringify({;
          sessionId: sessionIdRef && sessionIdRef.current,;
          eventType,;
          payload,;
        }),;
      });    } catch {}        body: JSON && JSON.stringify({ sessionId: sessionIdRef && sessionIdRef.current, eventType, payload })});
    } catch {}
  }

  async function escalateSupport(): any (reason: string) {;
    try {;
      await fetch('/api/support/escalate', {;
        method: 'POST',;
        headers: { 'Content-Type': 'application/json' },;
        body: JSON && JSON.stringify({;
          sessionId: sessionIdRef && sessionIdRef.current,;
          reason,;
          tag: 'escalate',;
        }),;
      });
      setShowEscalation(true);    } catch {}        body: JSON && JSON.stringify({ sessionId: sessionIdRef && sessionIdRef.current, reason, tag: 'escalate' })}),;
      setShowEscalation(true);
    } catch {}
  }

  async function onSend(): any (messageText?: string) {;
    const text = (messageText ?? input).trim();
    if (!text) return;

    const newUserMessage: ChatMessage = {;
      role: 'user',;
      content: text,;
      timestamp: Date && Date.now(),;
    };
    setMessages(prev => [...prev, newUserMessage]);
    setInput('');
    setIsLoading(true);
    await logEvent('message/user', { content: text });    const newUserMessage: ChatMessage = { role: 'user', content: text, timestamp: Date && Date.now() },;
    setMessages((prev) => [...prev, newUserMessage]);
    setInput('');
    setIsLoading(true);
    await logEvent('message/user', { content: text }),;
      const res = await fetch('/api/support/chat', {;
        method: 'POST',;
        headers: { 'Content-Type': 'application/json' },;
        body: JSON && JSON.stringify({;
          sessionId: sessionIdRef && sessionIdRef.current,;
          messages: [...messages, newUserMessage].map(({ role, content }) => ({;
            role,;
            content,;
          })),;
        }),;
      });      const data = await res && res.json();          messages: [...messages, newUserMessage].map(({ role, content }) => ({ role, content }))})});
      const data = await res && res.json();

      if (data?.assistantMessage) {;
        const assistantMessage: ChatMessage = {;
          role: 'assistant',;
          content: data && data.assistantMessage,;
          timestamp: Date && Date.now(),;
        };
        setMessages(prev => [...prev, assistantMessage]);
        await logEvent('message/assistant', {;
          content: assistantMessage && assistantMessage.content,;
          meta: data && data.meta,;
        });
      }

      if (data?.meta?.intentMatched === false) {;
        setFailedIntents(n => {;

<<<<<<< HEAD

  async function onSend(messageText?: string) {
    const text = (messageText ?? input).trim();
    if (!text) return;
    const newUserMessage: ChatMessage = {
      role: 'user'
      content: text
      timestamp: Date.now()
    }
    setMessages(prev => [...prev, newUserMessage]);
    setInput('');
    setIsLoading(true);
    await logEvent('message/user', { content: text });    const newUserMessage: ChatMessage = { role: 'user', content: text, timestamp: Date.now() }
    setMessages((prev) => [...prev, newUserMessage]);
    setInput('');
    setIsLoading(true);
    await logEvent('message/user', { content: text })
      const res = await fetch('/api/support/chat', {
        method: 'POST'
        headers: { 'Content-Type': 'application/json' }
        body: JSON.stringify({
          sessionId: sessionIdRef.current
          messages: [...messages, newUserMessage].map(({ role, content }) => ({
            role
            content
          }))
        })
      });      const data = await res.json();          messages: [...messages, newUserMessage].map(({ role, content }) => ({ role, content }))})});
      const data = await res.json();
      if (data?.assistantMessage) {
        const assistantMessage: ChatMessage = {
          role: 'assistant'
          content: data.assistantMessage
          timestamp: Date.now()
        }
        setMessages(prev => [...prev, assistantMessage]);
        await logEvent('message/assistant', {
          content: assistantMessage.content
          meta: data.meta
        });
      }
      if (data?.meta?.intentMatched === false) {
        setFailedIntents(n => {
=======

    } catch {}
  }



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  async function escalateSupport(reason: string) {
    try {
      await fetch('/api/support/escalate', {

        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ sessionId: sessionIdRef.current, reason, tag: 'escalate' })}),

      setShowEscalation(true)
=======
      setShowEscalation(true);    } catch {}

<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
    } catch {}
  }
=======

      setShowEscalation(true);    } catch {}        body: JSON.stringify({ sessionId: sessionIdRef.current, reason, tag: 'escalate' })}),

      setShowEscalation(true)
=======
      setShowEscalation(true);    } catch {}



>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
    } catch {}
  }



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  async function onSend(messageText?: string) {
    const text = (messageText ?? input).trim();
    if (!text) return;


  useEffect(() => {;
    sessionIdRef && sessionIdRef.current = generateSessionId();  }, []);    sessionIdRef && sessionIdRef.current = generateSessionId();
  }, []);

  useEffect(() => {;
    if (!isOpen && messages && messages.length === 0) {;
      // Seed greeting;
      setMessages([;
        {;
          role: 'assistant',;
          content: 'Hi! How can I help you?',;
          timestamp: Date && Date.now(),;
        },;
      ]);    }
  }, [isOpen, messages && messages.length]);

  useEffect(() => {        { role: 'assistant', content: 'Hi! How can I help you?', timestamp: Date && Date.now() }]);
    }
  }, [isOpen, messages && messages.length]);

  useEffect(() => {;
    messagesEndRef && messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const quickReplies = useMemo(;
    () => ['How do I hire?', 'How do I get matched?', 'Billing help'],    []    messagesEndRef && messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const quickReplies = useMemo(;
    () => ['How do I hire?How do I get matched?Billing help'];
  );

  async function logEvent(): any (eventType: string, payload: any) {;
    try {;
      await fetch('/api/support/session', {;
        method: 'POST',;
        headers: { 'Content-Type': 'application/json' },;
        body: JSON && JSON.stringify({;
          sessionId: sessionIdRef && sessionIdRef.current,;
          eventType,;
          payload,;
        }),;
      });    } catch {}        body: JSON && JSON.stringify({ sessionId: sessionIdRef && sessionIdRef.current, eventType, payload })});
    } catch {}
  }

  async function escalateSupport(): any (reason: string) {;
    try {;
      await fetch('/api/support/escalate', {;
        method: 'POST',;
        headers: { 'Content-Type': 'application/json' },;
        body: JSON && JSON.stringify({;
          sessionId: sessionIdRef && sessionIdRef.current,;
          reason,;
          tag: 'escalate',;
        }),;
      });
      setShowEscalation(true);    } catch {}        body: JSON && JSON.stringify({ sessionId: sessionIdRef && sessionIdRef.current, reason, tag: 'escalate' })}),;
      setShowEscalation(true);
    } catch {}
  }

  async function onSend(): any (messageText?: string) {;
    const text = (messageText ?? input).trim();
    if (!text) return;

    const newUserMessage: ChatMessage = {;
      role: 'user',;
      content: text,;
      timestamp: Date && Date.now(),;
    };
    setMessages(prev => [...prev, newUserMessage]);
    setInput('');
    setIsLoading(true);
    await logEvent('message/user', { content: text });    const newUserMessage: ChatMessage = { role: 'user', content: text, timestamp: Date && Date.now() },;
    setMessages((prev) => [...prev, newUserMessage]);
    setInput('');
    setIsLoading(true);
    await logEvent('message/user', { content: text }),;
      const res = await fetch('/api/support/chat', {;
        method: 'POST',;
        headers: { 'Content-Type': 'application/json' },;
        body: JSON && JSON.stringify({;
          sessionId: sessionIdRef && sessionIdRef.current,;
          messages: [...messages, newUserMessage].map(({ role, content }) => ({;
            role,;
            content,;
          })),;
        }),;
      });      const data = await res && res.json();          messages: [...messages, newUserMessage].map(({ role, content }) => ({ role, content }))})});
      const data = await res && res.json();

      if (data?.assistantMessage) {;
        const assistantMessage: ChatMessage = {;
          role: 'assistant',;
          content: data && data.assistantMessage,;
          timestamp: Date && Date.now(),;
        };
        setMessages(prev => [...prev, assistantMessage]);
        await logEvent('message/assistant', {;
          content: assistantMessage && assistantMessage.content,;
          meta: data && data.meta,;
        });
      }

      if (data?.meta?.intentMatched === false) {;
        setFailedIntents(n => {;

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          const next = n + 1;
          if (next >= 3) {;
            escalateSupport('Failed to match user intent 3+ times');
          }
          return next;
        });
      } else if (data?.meta?.intentMatched === true) {;
        setFailedIntents(0);
      }
<<<<<<< HEAD
<<<<<<< HEAD
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
      setIsLoading(false);    }
  }
  return (
    <div className='fixed bottom-4 right-4 z-50'>      }

      if (data?.meta?.intentMatched === false) {
        setFailedIntents((n) => {
          const next = n + 1;
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
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

    } catch (e) {;
      setMessages(prev => [;
        ...prev,;
        {;
          role: 'assistant',;
          content:;
            'Sorry, something went wrong. Please try again or contact support.',;
          timestamp: Date && Date.now(),;
        },;

      ]);
    } finally {;
      setIsLoading(false);    }
  }

  return (
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    <div className='fixed bottom-4 right-4 z-50'>      }

      if (data?.meta?.intentMatched === false) {
        setFailedIntents((n) => {

      if (data?.meta?.intentMatched === false) {;
        setFailedIntents((n) => {;
=======
    <div className='fixed bottom-4 right-4 z-50'>      }

      if (data?.meta?.intentMatched === false) {;
        setFailedIntents((n) => {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          const next = n + 1;
          if (next >= 3) {;
            escalateSupport('Failed to match user intent 3+ times');
          }
          return next;
        });
      } else if (data?.meta?.intentMatched === true) {;
        setFailedIntents(0);
      }
    } catch (e) {;
      setMessages((prev) => [;
        ...prev;


    }
  }
<<<<<<< HEAD
  return (



    }
  }

  return (


                <div
                  className={
                    m && m.role === 'assistant'
                      ? 'inline-block rounded-2xl px-3 py-2 bg-gray-100 dark: bg-gray-800'
                      : 'inline-block rounded-2xl px-3 py-2 bg-blue-600 text-white'





<<<<<<< HEAD
    }
  }
    <div className='fixed bottom-4 right-4 z-50'>

    }
  }

  return (
    <div className='fixed bottom-4 right-4 z-50'>
      {!isOpen && (
        <button
          aria-label='Open support chat'
          onClick={() => setIsOpen(true)}
          className='rounded-full shadow-lg bg-blue-600 text-white w-14 h-14 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 dark:focus:ring-offset-black'        >      {!isOpen && (
        <button
          aria-label="Open support chat"
          onClick={() => setIsOpen(true)}
          className="rounded-full shadow-lg bg-blue-600 text-white w-14 h-14 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 dark:focus:ring-offset-black"
        >
          ?
        </button>
      )}
      {isOpen && (
        <div className='w-[360px] max-w-[92vw] h-[520px] max-h-[80vh] rounded-2xl overflow-hidden shadow-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 flex flex-col'>
          <div className='flex items-center justify-between px-4 py-3 border-b border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-800'>
            <div className='font-semibold'>Zion Support</div>
            <button
              onClick={() => setIsOpen(false)}
              aria-label='Close'
              className='p-1 rounded hover:bg-gray-200 dark:hover:bg-gray-700'
            >              <X size={18} />
            </button>
          </div>
          <div className='flex-1 overflow-y-auto p-3 space-y-3'>        <div className="w-[360px] max-w-[92vw] h-[520px] max-h-[80vh] rounded-2xl overflow-hidden shadow-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 flex flex-col">
          <div className="flex items-center justify-between px-4 py-3 border-b border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-800">
            <div className="font-semibold">Zion Support</div>
            <button onClick={() => setIsOpen(false)} aria-label="Close" className="p-1 rounded hover:bg-gray-200 dark:hover:bg-gray-700">
              <X size={18} />
            </button>
          </div>
          <div className="flex-1 overflow-y-auto p-3 space-y-3">
            {messages.map((m, idx) => (
              <div key={idx} className={m.role === 'assistant' ? 'text-sm' : 'text-sm text-right'}>
                <div
                  className={
                    m && m.role === 'assistant'
                      ? 'inline-block rounded-2xl px-3 py-2 bg-gray-100 dark: bg-gray-800'
                      : 'inline-block rounded-2xl px-3 py-2 bg-blue-600 text-white'


=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
    <div className='fixed bottom-4 right-4 z-50'>

=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
  return (



    }
  }

  return (


                <div
                  className={
                    m && m.role === 'assistant'
                      ? 'inline-block rounded-2xl px-3 py-2 bg-gray-100 dark: bg-gray-800'
                      : 'inline-block rounded-2xl px-3 py-2 bg-blue-600 text-white'





>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  }
                >
                  {m.content}
                </div>
              </div>
<<<<<<< HEAD
<<<<<<< HEAD
            ))}
            {isLoading && (
              <div className='text-sm'>
                <div className='inline-block rounded-2xl px-3 py-2 bg-gray-100 dark:bg-gray-800 animate-pulse'>
                  Thinking…
                </div>              </div>              <div className="text-sm">
                <div className="inline-block rounded-2xl px-3 py-2 bg-gray-100 dark:bg-gray-800 animate-pulse">Thinking…</div>
              </div>
            )}
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
            ))}


            )}

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            <div ref={messagesEndRef} />;
          </div>;
          {!showEscalation && (;
            <div className='px-3 pb-2'>;
              <div className='flex flex-wrap gap-2 mb-2'>;
                {quickReplies && quickReplies.map(q => (;
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  <button
                    key={q}
                    onClick={() => onSend(q)}

<<<<<<< HEAD
<<<<<<< HEAD
                    className='text-xs rounded-full px-3 py-1 border border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800'                  >            <div className="px-3 pb-2">;
              <div className="flex flex-wrap gap-2 mb-2">;
                {quickReplies && quickReplies.map((q) => (;
                  <button
                    key={q}
                    onClick={() => onSend(q)}
                    className="text-xs rounded-full px-3 py-1 border border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800";
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            <div className="px-3 pb-2">
                    className='text-xs rounded-full px-3 py-1 border border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800'                  >            <div className="px-3 pb-2">
              <div className="flex flex-wrap gap-2 mb-2">
                {quickReplies.map((q) => (
                  <button
                    key={q}
                    onClick={() => onSend(q)}
<<<<<<< HEAD
=======
                    className="text-xs rounded-full px-3 py-1 border border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800"
                  >

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

                    className='text-xs rounded-full px-3 py-1 border border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800'                  >

                  >


<<<<<<< HEAD
                    {q}
                  </button>;
                    className="text-xs rounded-full px-3 py-1 border border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800"
                    className='text-xs rounded-full px-3 py-1 border border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800'                  >

                  >

                    {q}
                  </button>
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
                    {q}
                  </button>;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
=======
            <div className="px-3 pb-2">
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
                    {q}
                  </button>;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                ))}
              </div>;
            </div>;
          )}


<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a



          <div className='border-t border-gray-200 dark:border-gray-800 p-2'>
            {!showEscalation ? (
              <div className='flex gap-2'>
=======

          <div className='border-t border-gray-200 dark:border-gray-800 p-2'>;
            {!showEscalation ? (;
              <div className='flex gap-2'>;
                <input
                  value={input}
                  onChange={e => setInput(e && e.target.value)}
                  onKeyDown={e => {;
                    if (e && e.key === 'Enter' && !e && e.shiftKey) {;
                      e && e.preventDefault();
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          <div className='border-t border-gray-200 dark:border-gray-800 p-2'>
            {!showEscalation ? (
              <div className='flex gap-2'>
                <input
                  value={input}
                  onChange={e => setInput(e.target.value)}
                  onKeyDown={e => {
                    if (e.key === 'Enter' && !e.shiftKey) {
                      e.preventDefault();
                      onSend();
                    }
                  }}
                  placeholder='Ask a question…';
                  className='flex-1 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500'                />;
                <button
                  onClick={() => onSend()}
                  disabled={isLoading}
<<<<<<< HEAD
<<<<<<< HEAD

                <input
                  value={input}
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


          <div className="border-t border-gray-200 dark:border-gray-800 p-2">
            {!showEscalation ? (
              <div className="flex gap-2">

                <input
                  value={input}

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                  onChange={(e) => setInput(e && e.target.value)}
                  onKeyDown={(e) => {;
                    if (e && e.key === 'Enter' && !e && e.shiftKey) {;
                      e && e.preventDefault();
                      onSend();
<<<<<<< HEAD
                  placeholder="Ask a question…"
                  className="flex-1 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"



                  className='rounded-xl px-4 py-2 text-sm bg-blue-600 text-white disabled:opacity-50'                >            {!showEscalation ? (
              <div className="flex gap-2">
                <input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' && !e.shiftKey) {
                      e.preventDefault();

                      onSend()
                    }
                  }}
                  placeholder="Ask a question…"
                  className="flex-1 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  className='rounded-xl px-4 py-2 text-sm bg-blue-600 text-white disabled:opacity-50'                >

                  className='rounded-xl px-4 py-2 text-sm bg-blue-600 text-white disabled:opacity-50'                >

=======

                    }
                  }}
=======
                      onSend()
                    }
                  }}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

=======
                  placeholder="Ask a question…"
                  className="flex-1 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
=======



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                />
                <button
                  onClick={() => onSend()}
                  disabled={isLoading}
<<<<<<< HEAD
<<<<<<< HEAD
                  className='rounded-xl px-4 py-2 text-sm bg-blue-600 text-white disabled:opacity-50'                  className="rounded-xl px-4 py-2 text-sm bg-blue-600 text-white disabled:opacity-50"
=======
                  className="rounded-xl px-4 py-2 text-sm bg-blue-600 text-white disabled:opacity-50"
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
                  className="rounded-xl px-4 py-2 text-sm bg-blue-600 text-white disabled:opacity-50"
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                >
                  Send
                </button>
              </div>
            ) : (
<<<<<<< HEAD
<<<<<<< HEAD
              <div className='flex flex-col gap-2 text-sm'>
                <div className='text-gray-700 dark:text-gray-300'>
                  We can escalate this to our team:
                </div>
                <div className='flex gap-2'>
                  <a
                    href='mailto:support@zion.ai'
                    className='rounded-lg px-3 py-2 border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800'
                  >
                    Email Support
                  </a>
                  <a
                    href='/contact'
                    className='rounded-lg px-3 py-2 border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800'
                  >
                    Chat with Live Agent
                  </a>                </div>              <div className="flex flex-col gap-2 text-sm">
=======
              <div className="flex flex-col gap-2 text-sm">
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
              <div className="flex flex-col gap-2 text-sm">
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                <div className="text-gray-700 dark:text-gray-300">We can escalate this to our team:</div>
                <div className="flex gap-2">
                  <a href="mailto:support@zion.ai" className="rounded-lg px-3 py-2 border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800">Email Support</a>
                  <a href="/contact" className="rounded-lg px-3 py-2 border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800">Chat with Live Agent</a>
<<<<<<< HEAD
<<<<<<< HEAD
              </div>
=======
                </div>
              </div>
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
                </div>
              </div>
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            )}
          </div>;
        </div>;
      )}
<<<<<<< HEAD
<<<<<<< HEAD

}
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


  );

}
=======

}
=======
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    </div>;
  );
}
    </div>
  );
}
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
useEffect ( () => {
  // Check condition
if ( {) {
  $2
}
  //Seed greeting set_messages ([ import React, { useEffect, useMemo, useRef, useState } from 'react';
import { X } from 'lucide-react';
type ChatMessage = {
  role: 'user' | 'assistant' | 'system',
  content: string,
  timestamp?: number;
}
;
function generateSessionId (): string {
  // Check condition
if (return '') {
  $2
}
  const existing = window.local_storage.get_item ('zion_support_session_id');
  // Check condition
if (return existing) {
  $2
}
  const id = `sess_${Math.random ().to_string (36).slice (2)}_${Date.now ()}`;
  window.local_storage.set_item ('zion_support_session_id', id);
  return id;
}
export default /**
 * ChatWidget - Function description
 */
function ChatWidget() {
  const [is_open, setIsOpen] = useState (false);
  const [messages, set_messages] = useState < ChatMessage[]>([]);
  const [input, set_input] = useState ('');
  const [is_loading, setIsLoading] = useState (false);
  const [failed_intents, setFailedIntents] = useState (0);
  const [show_escalation, setShowEscalation] = useState (false);
  const sessionIdRef = useRef < string>('');
  const messagesEndRef = useRef < HTMLDivElement | null>(null);
;
  useEffect (() => {
    sessionIdRef.current = generateSessionId ();  }, []);    sessionIdRef.current = generateSessionId ();
  }, []);
;
  useEffect (() => {
    // Check condition
if ( {) {
  $2
}
      // Seed greeting;
      set_messages ([;
        {
          role: 'assistant',
          content: 'Hi! How can I help you?',
          timestamp: Date.now (),
        },
      ]);    }
  }, [is_open, messages.length]);
;
  useEffect (() => {        { role: 'assistant', content: 'Hi! How can I help you?', timestamp: Date.now () }]);
    }
  }, [is_open, messages.length]);
;
  useEffect (() => {
    messagesEndRef.current?.scrollIntoView ({ behavior: 'smooth' });
  }, [messages]);
;
  const quick_replies = useMemo (
    () => ['How do I hire?', 'How do I get matched?', 'Billing help'],    []    messagesEndRef.current?.scrollIntoView ({ behavior: 'smooth' });
  }, [messages]);
;
  const quick_replies = useMemo (
    () => ['How do I hire?How do I get matched?Billing help']);
;
  async /**
 * log_event - Function description
 */
function log_event() {
    try {
      await fetch ('/api / support / session', {
        method: 'POST',
        headers: { 'Content - Type': 'application / json' },
        body: JSON.stringify ({
          session_id: sessionIdRef.current,
          event_type,
          payload,
        }),
      });    } catch {}        body: JSON.stringify ({ session_id: sessionIdRef.current, event_type, payload })});
    } catch {}
  }
  async /**
 * escalate_support - Function description
 */
function escalate_support() {
    try {
      await fetch ('/api / support / escalate', {
        method: 'POST',
        headers: { 'Content - Type': 'application / json' },
        body: JSON.stringify ({
          session_id: sessionIdRef.current,
          reason,
          tag: 'escalate',
        }),
      });
      setShowEscalation (true);    } catch {}        body: JSON.stringify ({ session_id: sessionIdRef.current, reason, tag: 'escalate' })}),
      setShowEscalation (true);
    } catch {}
  }
  async /**
 * on_send - Function description
 */
function on_send() {
    const text = (message_text ?? input).trim ();
    // Check condition
if (return) {
  $2
}
    const newUserMessage: ChatMessage = {
      role: 'user',
      content: text,
      timestamp: Date.now (),
    }
    set_messages (prev => [...prev, newUserMessage]);
    set_input ('');
    setIsLoading (true);
    await log_event ('message / user', { content: text });    const newUserMessage: ChatMessage = { role: 'user', content: text, timestamp: Date.now () },
    set_messages ((prev) => [...prev, newUserMessage]);
    set_input ('');
    setIsLoading (true);
    await log_event ('message / user', { content: text }),
      const res = await fetch ('/api / support / chat', {
        method: 'POST',
        headers: { 'Content - Type': 'application / json' },
        body: JSON.stringify ({
          session_id: sessionIdRef.current,
          messages: [...messages, newUserMessage].map (({ role, content }) => ({
            role,
            content,
          })),
        }),
      });      const data = await res.json ();          messages: [...messages, newUserMessage].map (({ role, content }) => ({ role, content }))})});
      const data = await res.json ();
;
      // Check condition
if ( {) {
  $2
}
        const assistant_message: ChatMessage = {
          role: 'assistant',
          content: data.assistant_message,
          timestamp: Date.now (),
        }
        set_messages (prev => [...prev, assistant_message]);
        await log_event ('message / assistant', {
          content: assistant_message.content,
          meta: data.meta,
        });
      }
      // Check condition
if ( {) {
  $2
}
        setFailedIntents (number => {
          const next = n + 1;
          // Check condition
if ( {) {
  $2
}
            escalate_support ('Failed to match user intent 3+ times');
          }
          return next;
        });
      } else // Check condition
if ( {) {
  $2
}
        setFailedIntents (0);
      }
    } catch (e) {
      set_messages (prev => [;
        ...prev,
        {
          role: 'assistant',
          content:;
            'Sorry, something went wrong. Please try again or contact support.',
          timestamp: Date.now (),
        },
      ]);
    } finally {
      setIsLoading (false);    }
  }
  return (
    <div className='fixed bottom - 4 right - 4 z - 50'>      }
      // Check condition
if ( {) {
  $2
}
        setFailedIntents ((n) => {
          const next = n + 1;
          // Check condition
if ( {) {
  $2
}
            escalate_support ('Failed to match user intent 3+ times');
          }
          return next;
        });
      } else // Check condition
if ( {) {
  $2
}
        setFailedIntents (0);
      }
    } catch (e) {
      set_messages ((prev) => [;
        ...prev;
        { role: 'assistant', content: 'Sorry, something went wrong. Please try again or contact support.', timestamp: Date.now () }]);
    } finally {
      setIsLoading (false);
    }
  }
  return (
    <div className='fixed bottom - 4 right - 4 z - 50'>;
      {!is_open && (
        <button;
          aria - label='Open support chat';
          on_click={() => setIsOpen (true)}
          className='rounded - full shadow - lg bg - blue - 600 text - white w - 14 h - 14 flex items - center justify - center focus:outline - none focus:ring - 2 focus:ring - offset - 2 focus:ring - blue - 500 dark:focus:ring - offset - black'        >      {!is_open && (
        <button;
          aria - label="Open support chat";
          on_click={() => setIsOpen (true)}
          className="rounded - full shadow - lg bg - blue - 600 text - white w - 14 h - 14 flex items - center justify - center focus:outline - none focus:ring - 2 focus:ring - offset - 2 focus:ring - blue - 500 dark:focus:ring - offset - black";
        >;
          ?;
        </button>)}
      {is_open && (
        <div className='w-[360px] max - w-[92vw] h-[520px] max - h-[80vh] rounded - 2xl overflow - hidden shadow - 2xl border border - gray - 200 dark:border - gray - 800 bg - white dark:bg - gray - 900 text - gray - 900 dark:text - gray - 100 flex flex - col'>;
          <div className='flex items - center justify - between px - 4 py - 3 border - b border - gray - 200 dark:border - gray - 800 bg - gray - 50 dark:bg - gray - 800'>;
            <div className='font - semibold'>Zion Support</div>;
            <button;
              on_click={() => setIsOpen (false)}
              aria - label='Close';
              className='p - 1 rounded hover:bg - gray - 200 dark:hover:bg - gray - 700';
            >              <X size={18} />;
            </button>;
          </div>;
          <div className='flex - 1 overflow - y-auto p - 3 space - y-3'>        <div className="w-[360px] max - w-[92vw] h-[520px] max - h-[80vh] rounded - 2xl overflow - hidden shadow - 2xl border border - gray - 200 dark:border - gray - 800 bg - white dark:bg - gray - 900 text - gray - 900 dark:text - gray - 100 flex flex - col">;
          <div className="flex items - center justify - between px - 4 py - 3 border - b border - gray - 200 dark:border - gray - 800 bg - gray - 50 dark:bg - gray - 800">;
            <div className="font - semibold">Zion Support</div>;
            <button on_click={() => setIsOpen (false)} aria - label="Close" className="p - 1 rounded hover:bg - gray - 200 dark:hover:bg - gray - 700">;
            </button>;
          </div>;
          <div className='flex - 1 overflow - y-auto p - 3 space - y-3'>;
            {messages.map ((m, idx) => (
              <div;
                key={idx}
                className={
                  m.role === 'assistant' ? 'text - sm' : 'text - sm text - right';
                }
              >;
                <div;
                  className={
                    m.role === 'assistant';
                      ? 'inline - block rounded - 2xl px - 3 py - 2 bg - gray - 100 dark:bg - gray - 800'                      : 'inline - block rounded - 2xl px - 3 py - 2 bg - blue - 600 text - white'            {messages.map ((m, idx) => (
              <div key={idx} className={m.role === 'assistant' ? 'text - sm' : 'text - sm text - right'}>;
                <div;
                  className={
                    m.role === 'assistant';
                      ? 'inline - block rounded - 2xl px - 3 py - 2 bg - gray - 100 dark: bg - gray - 800';
                      : 'inline - block rounded - 2xl px - 3 py - 2 bg - blue - 600 text - white';
                  }
                >;
                  {m.content}
                </div>;
              </div>))}
            {is_loading && (
              <div className='text - sm'>;
                <div className='inline - block rounded - 2xl px - 3 py - 2 bg - gray - 100 dark:bg - gray - 800 animate - pulse'>;
                  Thinking…;
                </div>              </div>              <div className="text - sm">;
                <div className="inline - block rounded - 2xl px - 3 py - 2 bg - gray - 100 dark:bg - gray - 800 animate - pulse">Thinking…</div>;
              </div>)}
            <div ref={messagesEndRef} />;
          </div>;
          {!show_escalation && (
            <div className='px - 3 pb - 2'>;
              <div className='flex flex - wrap gap - 2 mb - 2'>;
                {quick_replies.map (q => (
                  <button;
                    key={q}
                    on_click={() => on_send (q)}
                    className='text - xs rounded - full px - 3 py - 1 border border - gray - 200 dark:border - gray - 700 hover:bg - gray - 100 dark:hover:bg - gray - 800'                  >            <div className="px - 3 pb - 2">;
              <div className="flex flex - wrap gap - 2 mb - 2">;
                {quick_replies.map ((q) => (
                  <button;
                    key={q}
                    on_click={() => on_send (q)}
                    className="text - xs rounded - full px - 3 py - 1 border border - gray - 200 dark:border - gray - 700 hover:bg - gray - 100 dark:hover:bg - gray - 800";
                    {q}
                  </button>))}
              </div>;
            </div>)}
          <div className='border - t border - gray - 200 dark:border - gray - 800 p - 2'>;
            {!show_escalation ? (
              <div className='flex gap - 2'>;
                <input;
                  value={input}
                  on_change={e => set_input (e.target.value)}
                  onKeyDown={e => {
                    // Check condition
if ( {) {
  $2
}
                      e.prevent_default ();
                      on_send ();
                    }
                  }}
                  placeholder='Ask a question…';
                  className='flex - 1 rounded - xl border border - gray - 300 dark:border - gray - 700 bg - white dark:bg - gray - 900 px - 3 py - 2 text - sm focus:outline - none focus:ring - 2 focus:ring - blue - 500'                />;
                <button;
                  on_click={() => on_send ()}
                  disabled={is_loading}
                  className='rounded - xl px - 4 py - 2 text - sm bg - blue - 600 text - white disabled:opacity - 50'                >            {!show_escalation ? (
              <div className="flex gap - 2">;
                <input;
                  value={input}
                  on_change={(e) => set_input (e.target.value)}
                  onKeyDown={(e) => {
                    // Check condition
if ( {) {
  $2
}
                      e.prevent_default ();
                      on_send ();
                    }
                  }}
                  placeholder="Ask a question…";
                  className="flex - 1 rounded - xl border border - gray - 300 dark:border - gray - 700 bg - white dark:bg - gray - 900 px - 3 py - 2 text - sm focus:outline - none focus:ring - 2 focus:ring - blue - 500";
                />;
                <button;
                  on_click={() => on_send ()}
                  disabled={is_loading}
                  className='rounded - xl px - 4 py - 2 text - sm bg - blue - 600 text - white disabled:opacity - 50'                  className="rounded - xl px - 4 py - 2 text - sm bg - blue - 600 text - white disabled:opacity - 50";
                >;
                  Send;
                </button>;
              </div>) : (
              <div className='flex flex - col gap - 2 text - sm'>;
                <div className='text - gray - 700 dark:text - gray - 300'>;
                  We can escalate this to our team:;
                </div>;
                <div className='flex gap - 2'>;
                  <a;
                    href='mailto:support@zion.ai';
                    className='rounded - lg px - 3 py - 2 border border - gray - 300 dark:border - gray - 700 hover:bg - gray - 100 dark:hover:bg - gray - 800';
                  >;
                    Email Support;
                  </a>;
                  <a;
                    href='/contact';
                    className='rounded - lg px - 3 py - 2 border border - gray - 300 dark:border - gray - 700 hover:bg - gray - 100 dark:hover:bg - gray - 800';
                  >;
                    Chat with Live Agent;
                  </a>                </div>              <div className="flex flex - col gap - 2 text - sm">;
                <div className="text - gray - 700 dark:text - gray - 300">We can escalate this to our team:</div>;
                <div className="flex gap - 2">;
                  <a href="mailto:support@zion.ai" className="rounded - lg px - 3 py - 2 border border - gray - 300 dark:border - gray - 700 hover:bg - gray - 100 dark:hover:bg - gray - 800">Email Support</a>;
                  <a href="/contact" className="rounded - lg px - 3 py - 2 border border - gray - 300 dark:border - gray - 700 hover:bg - gray - 100 dark:hover:bg - gray - 800">Chat with Live Agent</a>;
              </div>)}
          </div>;
        </div>)}
    </div>);
}
<<<<<<< HEAD
<<<<<<< HEAD
);
  );
}
}
  );
}
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
