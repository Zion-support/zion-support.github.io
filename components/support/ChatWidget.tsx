<<<<<<< HEAD
 useEffect ( () => {
  if (!isOpen && messages.length === 0) {
  //Seed greeting setMessages ([ 
=======
<<<<<<< HEAD
<<<<<<< HEAD
 useEffect ( () => {
  if (!isOpen && messages.length === 0) {
  //Seed greeting setMessages ([ 
=======
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
import React, { useEffect, useMemo, useRef, useState } from 'react';
import { X } from 'lucide-react';
type ChatMessage = {
  role: 'user' | 'assistant' | 'system',
  content: string,
  timestamp?: number
};

function generateSessionId(): string {
  if (typeof window === 'undefined') return '';
  const existing = window.localStorage.getItem('zion_support_session_id');
  if (existing) return existing;
  const id = `sess_${Math.random().toString(36).slice(2)}_${Date.now()}`;
  window.localStorage.setItem('zion_support_session_id', id);
  return id
}
<<<<<<< HEAD
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c

>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [failedIntents, setFailedIntents] = useState(0);
  const [showEscalation, setShowEscalation] = useState(false);
  const sessionIdRef = useRef<string>('');
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
<<<<<<< HEAD
    sessionIdRef.current = generateSessionId();  }, []);
=======
<<<<<<< HEAD
<<<<<<< HEAD
    sessionIdRef.current = generateSessionId();
=======
    sessionIdRef.current = generateSessionId()
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
    sessionIdRef.current = generateSessionId()
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
  }, []);
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

  useEffect(() => {
    if (!isOpen && messages.length === 0) {
      // Seed greeting
      setMessages([
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
        {
          role: 'assistant',
          content: 'Hi! How can I help you?',
          timestamp: Date.now(),
        },
<<<<<<< HEAD
      ]);    }
  }, [isOpen, messages.length]);

  useEffect(() => {
=======
      ]);
=======
        { role: 'assistant', content: 'Hi! How can I help you?', timestamp: Date.now() }])
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
        { role: 'assistant', content: 'Hi! How can I help you?', timestamp: Date.now() }])
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
    }
  }, [isOpen, messages.length]);

  useEffect(() => {
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const quickReplies = useMemo(
<<<<<<< HEAD
    () => ['How do I hire?', 'How do I get matched?', 'Billing help'],    []
=======
    () => ['How do I hire?', 'How do I get matched?', 'Billing help'],
=======
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages]);

  const quickReplies = useMemo(
    () => ['How do I hire?How do I get matched?Billing help'];
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages]);

  const quickReplies = useMemo(
    () => ['How do I hire?How do I get matched?Billing help'];
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
    []
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
  );

  async function logEvent(eventType: string, payload: any) {
    try {
      await fetch('/api/support/session', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
        body: JSON.stringify({
          sessionId: sessionIdRef.current,
          eventType,
          payload,
        }),
<<<<<<< HEAD
      });    } catch {}
=======
      });
=======
        body: JSON.stringify({ sessionId: sessionIdRef.current, eventType, payload })})
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
        body: JSON.stringify({ sessionId: sessionIdRef.current, eventType, payload })})
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
    } catch {}
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
  }

  async function escalateSupport(reason: string) {
    try {
      await fetch('/api/support/escalate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
        body: JSON.stringify({
          sessionId: sessionIdRef.current,
          reason,
          tag: 'escalate',
        }),
      });
<<<<<<< HEAD
      setShowEscalation(true);    } catch {}
=======
      setShowEscalation(true);
=======
        body: JSON.stringify({ sessionId: sessionIdRef.current, reason, tag: 'escalate' })}),
      setShowEscalation(true)
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
        body: JSON.stringify({ sessionId: sessionIdRef.current, reason, tag: 'escalate' })}),
      setShowEscalation(true)
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
    } catch {}
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
  }

  async function onSend(messageText?: string) {
    const text = (messageText ?? input).trim();
    if (!text) return;

<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
    const newUserMessage: ChatMessage = {
      role: 'user',
      content: text,
      timestamp: Date.now(),
    };
    setMessages(prev => [...prev, newUserMessage]);
    setInput('');
    setIsLoading(true);
    await logEvent('message/user', { content: text });
<<<<<<< HEAD
=======

=======
    const newUserMessage: ChatMessage = { role: 'user', content: text, timestamp: Date.now() },
    setMessages((prev) => [...prev, newUserMessage]);
    setInput('');
    setIsLoading(true);
    await logEvent('message/user', { content: text }),
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
    const newUserMessage: ChatMessage = { role: 'user', content: text, timestamp: Date.now() },
    setMessages((prev) => [...prev, newUserMessage]);
    setInput('');
    setIsLoading(true);
    await logEvent('message/user', { content: text }),
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
    try {
      const res = await fetch('/api/support/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          sessionId: sessionIdRef.current,
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
          messages: [...messages, newUserMessage].map(({ role, content }) => ({
            role,
            content,
          })),
        }),
<<<<<<< HEAD
      });      const data = await res.json();
=======
      });
=======
          messages: [...messages, newUserMessage].map(({ role, content }) => ({ role, content }))})});
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
          messages: [...messages, newUserMessage].map(({ role, content }) => ({ role, content }))})});
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
      const data = await res.json();
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

      if (data?.assistantMessage) {
        const assistantMessage: ChatMessage = {
          role: 'assistant',
          content: data.assistantMessage,
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
          timestamp: Date.now(),
        };
        setMessages(prev => [...prev, assistantMessage]);
        await logEvent('message/assistant', {
          content: assistantMessage.content,
          meta: data.meta,
        });
<<<<<<< HEAD
=======
=======
          timestamp: Date.now()},
        setMessages((prev) => [...prev, assistantMessage]);
        await logEvent('message/assistant', { content: assistantMessage.content, meta: data.meta })
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
      }

      if (data?.meta?.intentMatched === false) {
        setFailedIntents(n => {
          const next = n + 1;
          if (next >= 3) {
            escalateSupport('Failed to match user intent 3+ times');
          }
          return next;
        });
      } else if (data?.meta?.intentMatched === true) {
        setFailedIntents(0);
      }
    } catch (e) {
      setMessages(prev => [
        ...prev,
        {
          role: 'assistant',
          content:
            'Sorry, something went wrong. Please try again or contact support.',
          timestamp: Date.now(),
        },
      ]);
    } finally {
<<<<<<< HEAD
      setIsLoading(false);    }
  }

  return (
    <div className='fixed bottom-4 right-4 z-50'>
=======
<<<<<<< HEAD
      setIsLoading(false);
=======
          timestamp: Date.now()},
        setMessages((prev) => [...prev, assistantMessage]);
        await logEvent('message/assistant', { content: assistantMessage.content, meta: data.meta })
      }

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
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
      setIsLoading(false)
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
    }
  }

  return (
<<<<<<< HEAD
<<<<<<< HEAD
    <div className='fixed bottom-4 right-4 z-50'>
=======
    <div className="fixed bottom-4 right-4 z-50">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
      {!isOpen && (
        <button
          aria-label='Open support chat'
          onClick={() => setIsOpen(true)}
<<<<<<< HEAD
          className='rounded-full shadow-lg bg-blue-600 text-white w-14 h-14 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 dark:focus:ring-offset-black'        >
=======
<<<<<<< HEAD
          className='rounded-full shadow-lg bg-blue-600 text-white w-14 h-14 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 dark:focus:ring-offset-black'
=======
    <div className="fixed bottom-4 right-4 z-50">
      {!isOpen && (
        <button
          aria-label="Open support chat"
          onClick={() => setIsOpen(true)}
          className="rounded-full shadow-lg bg-blue-600 text-white w-14 h-14 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 dark:focus:ring-offset-black"
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
          className="rounded-full shadow-lg bg-blue-600 text-white w-14 h-14 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 dark:focus:ring-offset-black"
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
        >
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
          ?
        </button>
      )}

      {isOpen && (
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
        <div className='w-[360px] max-w-[92vw] h-[520px] max-h-[80vh] rounded-2xl overflow-hidden shadow-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 flex flex-col'>
          <div className='flex items-center justify-between px-4 py-3 border-b border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-800'>
            <div className='font-semibold'>Zion Support</div>
            <button
              onClick={() => setIsOpen(false)}
              aria-label='Close'
              className='p-1 rounded hover:bg-gray-200 dark:hover:bg-gray-700'
<<<<<<< HEAD
            >              <X size={18} />
            </button>
          </div>

          <div className='flex-1 overflow-y-auto p-3 space-y-3'>
=======
            >
=======
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
        <div className="w-[360px] max-w-[92vw] h-[520px] max-h-[80vh] rounded-2xl overflow-hidden shadow-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 flex flex-col">
          <div className="flex items-center justify-between px-4 py-3 border-b border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-800">
            <div className="font-semibold">Zion Support</div>
            <button onClick={() => setIsOpen(false)} aria-label="Close" className="p-1 rounded hover:bg-gray-200 dark:hover:bg-gray-700">
<<<<<<< HEAD
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
              <X size={18} />
            </button>
          </div>

<<<<<<< HEAD
<<<<<<< HEAD
          <div className='flex-1 overflow-y-auto p-3 space-y-3'>
=======
          <div className="flex-1 overflow-y-auto p-3 space-y-3">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
            {messages.map((m, idx) => (
              <div
                key={idx}
                className={
                  m.role === 'assistant' ? 'text-sm' : 'text-sm text-right'
                }
              >
                <div
                  className={
                    m.role === 'assistant'
<<<<<<< HEAD
                      ? 'inline-block rounded-2xl px-3 py-2 bg-gray-100 dark:bg-gray-800'                      : 'inline-block rounded-2xl px-3 py-2 bg-blue-600 text-white'
=======
<<<<<<< HEAD
                      ? 'inline-block rounded-2xl px-3 py-2 bg-gray-100 dark:bg-gray-800'
=======
          <div className="flex-1 overflow-y-auto p-3 space-y-3">
            {messages.map((m, idx) => (
              <div key={idx} className={m.role === 'assistant' ? 'text-sm' : 'text-sm text-right'}>
                <div
                  className={
                    m.role === 'assistant'
                      ? 'inline-block rounded-2xl px-3 py-2 bg-gray-100 dark: bg-gray-800'
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
                      ? 'inline-block rounded-2xl px-3 py-2 bg-gray-100 dark: bg-gray-800'
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                      : 'inline-block rounded-2xl px-3 py-2 bg-blue-600 text-white'
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                  }
                >
                  {m.content}
                </div>
              </div>
            ))}
            {isLoading && (
<<<<<<< HEAD
              <div className='text-sm'>
                <div className='inline-block rounded-2xl px-3 py-2 bg-gray-100 dark:bg-gray-800 animate-pulse'>
                  Thinking…
                </div>              </div>
=======
<<<<<<< HEAD
<<<<<<< HEAD
              <div className='text-sm'>
                <div className='inline-block rounded-2xl px-3 py-2 bg-gray-100 dark:bg-gray-800 animate-pulse'>
                  Thinking…
                </div>
=======
              <div className="text-sm">
                <div className="inline-block rounded-2xl px-3 py-2 bg-gray-100 dark:bg-gray-800 animate-pulse">Thinking…</div>
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
              <div className="text-sm">
                <div className="inline-block rounded-2xl px-3 py-2 bg-gray-100 dark:bg-gray-800 animate-pulse">Thinking…</div>
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
              </div>
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
            )}
            <div ref={messagesEndRef} />
          </div>

          {!showEscalation && (
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
            <div className='px-3 pb-2'>
              <div className='flex flex-wrap gap-2 mb-2'>
                {quickReplies.map(q => (
                  <button
                    key={q}
                    onClick={() => onSend(q)}
<<<<<<< HEAD
                    className='text-xs rounded-full px-3 py-1 border border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800'                  >
=======
                    className='text-xs rounded-full px-3 py-1 border border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800'
=======
            <div className="px-3 pb-2">
              <div className="flex flex-wrap gap-2 mb-2">
                {quickReplies.map((q) => (
                  <button
                    key={q}
                    onClick={() => onSend(q)}
                    className="text-xs rounded-full px-3 py-1 border border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800"
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
            <div className="px-3 pb-2">
              <div className="flex flex-wrap gap-2 mb-2">
                {quickReplies.map((q) => (
                  <button
                    key={q}
                    onClick={() => onSend(q)}
                    className="text-xs rounded-full px-3 py-1 border border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800"
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                  >
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                    {q}
                  </button>
                ))}
              </div>
            </div>
          )}

<<<<<<< HEAD
          <div className='border-t border-gray-200 dark:border-gray-800 p-2'>
=======
<<<<<<< HEAD
<<<<<<< HEAD
          <div className='border-t border-gray-200 dark:border-gray-800 p-2'>
=======
          <div className="border-t border-gray-200 dark:border-gray-800 p-2">
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
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
<<<<<<< HEAD
                  placeholder='Ask a question…'
                  className='flex-1 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500'                />
                <button
                  onClick={() => onSend()}
                  disabled={isLoading}
                  className='rounded-xl px-4 py-2 text-sm bg-blue-600 text-white disabled:opacity-50'                >
=======
<<<<<<< HEAD
                  placeholder='Ask a question…'
                  className='flex-1 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500'
=======
          <div className="border-t border-gray-200 dark:border-gray-800 p-2">
            {!showEscalation ? (
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
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
                  placeholder="Ask a question…"
                  className="flex-1 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                />
                <button
                  onClick={() => onSend()}
                  disabled={isLoading}
<<<<<<< HEAD
<<<<<<< HEAD
                  className='rounded-xl px-4 py-2 text-sm bg-blue-600 text-white disabled:opacity-50'
=======
                  className="rounded-xl px-4 py-2 text-sm bg-blue-600 text-white disabled:opacity-50"
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
                  className="rounded-xl px-4 py-2 text-sm bg-blue-600 text-white disabled:opacity-50"
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                >
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                  Send
                </button>
              </div>
            ) : (
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
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
<<<<<<< HEAD
                  </a>                </div>
=======
                  </a>
=======
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
              <div className="flex flex-col gap-2 text-sm">
                <div className="text-gray-700 dark:text-gray-300">We can escalate this to our team:</div>
                <div className="flex gap-2">
                  <a href="mailto:support@zion.ai" className="rounded-lg px-3 py-2 border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800">Email Support</a>
                  <a href="/contact" className="rounded-lg px-3 py-2 border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800">Chat with Live Agent</a>
<<<<<<< HEAD
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                </div>
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
<<<<<<< HEAD
}
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
