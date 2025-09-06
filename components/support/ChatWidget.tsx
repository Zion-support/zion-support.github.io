 useEffect ( () => {
  if (!isOpen && messages.length === 0) {
  //Seed greeting setMessages ([ 
import React, { useEffect, useMemo, useRef, useState } from 'react';
import {X} from 'lucide-react';
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
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88

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
    sessionIdRef.current = generateSessionId();  }, []);
=======
    sessionIdRef.current = generateSessionId()
  }, []);
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

  useEffect(() => {
    if (!isOpen && messages.length === 0) {
      // Seed greeting
      setMessages([
        {
          role: 'assistant',
          content: 'Hi! How can I help you?',
          timestamp: Date.now(),
        },
      ]);    }
  }, [isOpen, messages.length]);

  useEffect(() => {
=======
        { role: 'assistant', content: 'Hi! How can I help you?', timestamp: Date.now() }])
    }
  }, [isOpen, messages.length]);

  useEffect(() => {
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const quickReplies = useMemo(
<<<<<<< HEAD
    () => ['How do I hire?', 'How do I get matched?', 'Billing help'],    []
=======
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages]);

  const quickReplies = useMemo(
    () => ['How do I hire?How do I get matched?Billing help'];
    []
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
  );

  async function logEvent(eventType: string, payload: any) {
    try {
      await fetch('/api/support/session', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          sessionId: sessionIdRef.current,
          eventType,
          payload,
        }),
      });    } catch {}
=======
        body: JSON.stringify({ sessionId: sessionIdRef.current, eventType, payload })})
    } catch {}
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
  }

  async function escalateSupport(reason: string) {
    try {
      await fetch('/api/support/escalate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          sessionId: sessionIdRef.current,
          reason,
          tag: 'escalate',
        }),
      });
      setShowEscalation(true);    } catch {}
=======
        body: JSON.stringify({ sessionId: sessionIdRef.current, reason, tag: 'escalate' })}),
      setShowEscalation(true)
    } catch {}
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
  }

  async function onSend(messageText?: string) {
    const text = (messageText ?? input).trim();
    if (!text) return;

    const newUserMessage: ChatMessage = {
      role: 'user',
      content: text,
      timestamp: Date.now(),
    };
    setMessages(prev => [...prev, newUserMessage]);
    setInput('');
    setIsLoading(true);
    await logEvent('message/user', { content: text });
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
          messages: [...messages, newUserMessage].map(({ role, content }) => ({
            role,
            content,
          })),
        }),
      });      const data = await res.json();
=======
          messages: [...messages, newUserMessage].map(({ role, content }) => ({ role, content }))})});
      const data = await res.json();
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

      if (data?.assistantMessage) {
        const assistantMessage: ChatMessage = {
          role: 'assistant',
          content: data.assistantMessage,
          timestamp: Date.now(),
        };
        setMessages(prev => [...prev, assistantMessage]);
        await logEvent('message/assistant', {
          content: assistantMessage.content,
          meta: data.meta,
        });
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
      setIsLoading(false);    }
  }

  return (
    <div className='fixed bottom-4 right-4 z-50'>
=======
      setIsLoading(false)
    }
  }

  return (
<<<<<<< HEAD
    <div className='fixed bottom-4 right-4 z-50'>
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
      {!isOpen && (
        <button
          aria-label='Open support chat'
          onClick={() => setIsOpen(true)}
          className='rounded-full shadow-lg bg-blue-600 text-white w-14 h-14 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 dark:focus:ring-offset-black'        >
=======
          className="rounded-full shadow-lg bg-blue-600 text-white w-14 h-14 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 dark:focus:ring-offset-black"
        >
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
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

          <div className='flex-1 overflow-y-auto p-3 space-y-3'>
        <div className="w-[360px] max-w-[92vw] h-[520px] max-h-[80vh] rounded-2xl overflow-hidden shadow-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 flex flex-col">
          <div className="flex items-center justify-between px-4 py-3 border-b border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-800">
            <div className="font-semibold">Zion Support</div>
            <button onClick={() => setIsOpen(false)} aria-label="Close" className="p-1 rounded hover:bg-gray-200 dark:hover:bg-gray-700">
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
              <X size={18} />
            </button>
          </div>

<<<<<<< HEAD
          <div className='flex-1 overflow-y-auto p-3 space-y-3'>
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
                      ? 'inline-block rounded-2xl px-3 py-2 bg-gray-100 dark:bg-gray-800'                      : 'inline-block rounded-2xl px-3 py-2 bg-blue-600 text-white'
=======
                      ? 'inline-block rounded-2xl px-3 py-2 bg-gray-100 dark: bg-gray-800'
                      : 'inline-block rounded-2xl px-3 py-2 bg-blue-600 text-white'
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                  }
                >
                  {m.content}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className='text-sm'>
                <div className='inline-block rounded-2xl px-3 py-2 bg-gray-100 dark:bg-gray-800 animate-pulse'>
                  Thinking…
                </div>              </div>
=======
              <div className="text-sm">
                <div className="inline-block rounded-2xl px-3 py-2 bg-gray-100 dark:bg-gray-800 animate-pulse">Thinking…</div>
              </div>
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
            )}
            <div ref={messagesEndRef} />
          </div>

          {!showEscalation && (
            <div className='px-3 pb-2'>
              <div className='flex flex-wrap gap-2 mb-2'>
                {quickReplies.map(q => (
                  <button
                    key={q}
                    onClick={() => onSend(q)}
                    className='text-xs rounded-full px-3 py-1 border border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800'                  >
=======
            <div className="px-3 pb-2">
              <div className="flex flex-wrap gap-2 mb-2">
                {quickReplies.map((q) => (
                  <button
                    key={q}
                    onClick={() => onSend(q)}
                    className="text-xs rounded-full px-3 py-1 border border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800"
                  >
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                    {q}
                  </button>
                ))}
              </div>
            </div>
          )}

          <div className='border-t border-gray-200 dark:border-gray-800 p-2'>
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
                  placeholder='Ask a question…'
                  className='flex-1 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500'                />
                <button
                  onClick={() => onSend()}
                  disabled={isLoading}
                  className='rounded-xl px-4 py-2 text-sm bg-blue-600 text-white disabled:opacity-50'                >
=======
                  placeholder="Ask a question…"
                  className="flex-1 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                  onClick={() => onSend()}
                  disabled={isLoading}
<<<<<<< HEAD
                  className='rounded-xl px-4 py-2 text-sm bg-blue-600 text-white disabled:opacity-50'
=======
                  className="rounded-xl px-4 py-2 text-sm bg-blue-600 text-white disabled:opacity-50"
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
                >
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
                  Send
                </button>
              </div>
            ) : (
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
                  </a>                </div>
              <div className="flex flex-col gap-2 text-sm">
                <div className="text-gray-700 dark:text-gray-300">We can escalate this to our team:</div>
                <div className="flex gap-2">
                  <a href="mailto:support@zion.ai" className="rounded-lg px-3 py-2 border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800">Email Support</a>
                  <a href="/contact" className="rounded-lg px-3 py-2 border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800">Chat with Live Agent</a>
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
                </div>
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
=======
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
