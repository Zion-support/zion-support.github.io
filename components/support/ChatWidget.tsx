<<<<<<< HEAD
<<<<<<< HEAD
import React, { useEffect, useMemo, useRef, useState } from 'react';
import { X } from 'lucide-react';
=======
>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
<<<<<<< HEAD
import React, { useEffect, useMemo, useRef, useState } from 'react';
=======
useEffect ( () => {
  if (!isOpen && messages.length === 0) {
  //Seed greeting setMessages ([ import React, { useEffect, useMemo, useRef, useState } from 'react';
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
import { X } from 'lucide-react';

type ChatMessage = {
  role: 'user' | 'assistant' | 'system'
  content: string
  timestamp?: number
}
function generateSessionId(): string {
  if (typeof window === 'undefined') return '';
  const existing = window.localStorage.getItem('zion_support_session_id');
  if (existing) return existing;
  const id = `sess_${Math.random().toString(36).slice(2)}_${Date.now()}`;
  window.localStorage.setItem('zion_support_session_id', id);
  return id
}
<<<<<<< HEAD
=======
 useEffect ( () => {
  if (!isOpen && messages.length === 0) {
  //Seed greeting setMessages ([
}
}
}

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
export default function ChatWidget() {
=======
export default function ChatWidget() {;
>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
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
    sessionIdRef.current = generateSessionId();  }, []);    sessionIdRef.current = generateSessionId()
=======
    sessionIdRef.current = generateSessionId();
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
  }, []);
  useEffect(() => {
    if (!isOpen && messages.length === 0) {
      // Seed greeting
      setMessages([
        {
<<<<<<< HEAD
          role: 'assistant'
          content: 'Hi! How can I help you?'
          timestamp: Date.now()
        }
      ]);    }
  }, [isOpen, messages.length]);
  useEffect(() => {        { role: 'assistant', content: 'Hi! How can I help you?', timestamp: Date.now() }])
=======
          role: 'assistant',
          content: 'Hi! How can I help you?',
          timestamp: Date.now(),
        },
      ]);
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
    }
  }, [isOpen, messages.length]);
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);
  const quickReplies = useMemo(
<<<<<<< HEAD
    () => ['How do I hire?', 'How do I get matched?', 'Billing help'],    []    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages]);
  const quickReplies = useMemo(
    () => ['How do I hire?How do I get matched?Billing help'];
=======
    () => ['How do I hire?', 'How do I get matched?', 'Billing help'],
    []
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
  );
  async function logEvent(eventType: string, payload: any) {
    try {
      await fetch('/api/support/session', {
<<<<<<< HEAD
        method: 'POST'
        headers: { 'Content-Type': 'application/json' }
        body: JSON.stringify({
<<<<<<< HEAD
          sessionId: sessionIdRef.current
          eventType
          payload
        })
      });    } catch {}        body: JSON.stringify({ sessionId: sessionIdRef.current, eventType, payload })})
=======
<<<<<<< HEAD
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
=======
>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
          sessionId: sessionIdRef.current,
          eventType,
          payload,
        }),
<<<<<<< HEAD
      });
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
=======
<<<<<<< HEAD
      });    } catch {}

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
<<<<<<< HEAD
      });    } catch {}        body: JSON.stringify({ sessionId: sessionIdRef.current, eventType, payload })})
=======
      });    } catch {}

>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
    } catch {}
  }
<<<<<<< HEAD
=======

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
  async function escalateSupport(reason: string) {
    try {
      await fetch('/api/support/escalate', {
<<<<<<< HEAD
        method: 'POST'
        headers: { 'Content-Type': 'application/json' }
=======
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
        body: JSON.stringify({
          sessionId: sessionIdRef.current
          reason
          tag: 'escalate'
        })
      });
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
      setShowEscalation(true);    } catch {}        body: JSON.stringify({ sessionId: sessionIdRef.current, reason, tag: 'escalate' })})
=======
      setShowEscalation(true);    } catch {}        body: JSON.stringify({ sessionId: sessionIdRef.current, reason, tag: 'escalate' })}),
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
      setShowEscalation(true)
=======
<<<<<<< HEAD
      setShowEscalation(true);
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
=======
      setShowEscalation(true);    } catch {}

<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
    } catch {}
  }
<<<<<<< HEAD
=======

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
  async function onSend(messageText?: string) {
    const text = (messageText ?? input).trim();
    if (!text) return;
<<<<<<< HEAD
=======

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
    const newUserMessage: ChatMessage = {
      role: 'user'
      content: text
      timestamp: Date.now()
    }
    setMessages(prev => [...prev, newUserMessage]);
    setInput('');
    setIsLoading(true);
<<<<<<< HEAD
    await logEvent('message/user', { content: text });    const newUserMessage: ChatMessage = { role: 'user', content: text, timestamp: Date.now() }
    setMessages((prev) => [...prev, newUserMessage]);
    setInput('');
    setIsLoading(true);
    await logEvent('message/user', { content: text })
=======
    await logEvent('message/user', { content: text });

    try {
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
      const res = await fetch('/api/support/chat', {
        method: 'POST'
        headers: { 'Content-Type': 'application/json' }
        body: JSON.stringify({
<<<<<<< HEAD
          sessionId: sessionIdRef.current
          messages: [...messages, newUserMessage].map(({ role, content }) => ({
            role
            content
          }))
        })
      });      const data = await res.json();          messages: [...messages, newUserMessage].map(({ role, content }) => ({ role, content }))})});
=======
          sessionId: sessionIdRef.current,
          messages: [...messages, newUserMessage].map(({ role, content }) => ({
            role,
            content,
          })),
        }),
      });
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
      const data = await res.json();
      if (data?.assistantMessage) {
        const assistantMessage: ChatMessage = {
<<<<<<< HEAD
          role: 'assistant'
          content: data.assistantMessage
          timestamp: Date.now()
        }
=======
          role: 'assistant',
          content: data.assistantMessage,
          timestamp: Date.now(),
        };
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
        setMessages(prev => [...prev, assistantMessage]);
        await logEvent('message/assistant', {
          content: assistantMessage.content
          meta: data.meta
        });
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
        ...prev
        {
          role: 'assistant'
          content:
            'Sorry, something went wrong. Please try again or contact support.'
          timestamp: Date.now()
        }
      ]);
    } finally {
<<<<<<< HEAD
      setIsLoading(false);    }
  }
  return (
<<<<<<< HEAD
    <div className='fixed bottom-4 right-4 z-50'>      }
<<<<<<< HEAD
=======

<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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
<<<<<<< HEAD
=======
      setIsLoading(false);
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
=======
<<<<<<< HEAD
>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
    }
  }
=======
    <div className='fixed bottom-4 right-4 z-50'>

=======
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
    }
  }

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
  return (
    <div className='fixed bottom-4 right-4 z-50'>
      {!isOpen && (
        <button
          aria-label='Open support chat'
          onClick={() => setIsOpen(true)}
<<<<<<< HEAD
          className='rounded-full shadow-lg bg-blue-600 text-white w-14 h-14 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 dark:focus:ring-offset-black'        >      {!isOpen && (
        <button
          aria-label="Open support chat"
          onClick={() => setIsOpen(true)}
          className="rounded-full shadow-lg bg-blue-600 text-white w-14 h-14 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 dark:focus:ring-offset-black"
=======
          className='rounded-full shadow-lg bg-blue-600 text-white w-14 h-14 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 dark:focus:ring-offset-black'
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
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
<<<<<<< HEAD
            >              <X size={18} />
            </button>
          </div>
          <div className='flex-1 overflow-y-auto p-3 space-y-3'>        <div className="w-[360px] max-w-[92vw] h-[520px] max-h-[80vh] rounded-2xl overflow-hidden shadow-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 flex flex-col">
          <div className="flex items-center justify-between px-4 py-3 border-b border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-800">
            <div className="font-semibold">Zion Support</div>
            <button onClick={() => setIsOpen(false)} aria-label="Close" className="p-1 rounded hover:bg-gray-200 dark:hover:bg-gray-700">
            </button>
          </div>
=======
            >
              <X size={18} />
            </button>
          </div>

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
          <div className='flex-1 overflow-y-auto p-3 space-y-3'>
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
                      ? 'inline-block rounded-2xl px-3 py-2 bg-gray-100 dark:bg-gray-800'                      : 'inline-block rounded-2xl px-3 py-2 bg-blue-600 text-white'            {messages.map((m, idx) => (
              <div key={idx} className={m.role === 'assistant' ? 'text-sm' : 'text-sm text-right'}>
                <div
                  className={
                    m.role === 'assistant'
                      ? 'inline-block rounded-2xl px-3 py-2 bg-gray-100 dark: bg-gray-800'
=======
                      ? 'inline-block rounded-2xl px-3 py-2 bg-gray-100 dark:bg-gray-800'
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
                      : 'inline-block rounded-2xl px-3 py-2 bg-blue-600 text-white'
<<<<<<< HEAD
=======

<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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
<<<<<<< HEAD
                </div>              </div>              <div className="text-sm">
                <div className="inline-block rounded-2xl px-3 py-2 bg-gray-100 dark:bg-gray-800 animate-pulse">Thinking…</div>
=======
                </div>
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
              </div>
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
<<<<<<< HEAD
                    className='text-xs rounded-full px-3 py-1 border border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800'                  >            <div className="px-3 pb-2">
              <div className="flex flex-wrap gap-2 mb-2">
                {quickReplies.map((q) => (
                  <button
                    key={q}
                    onClick={() => onSend(q)}
                    className="text-xs rounded-full px-3 py-1 border border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800"
=======
<<<<<<< HEAD
                    className='text-xs rounded-full px-3 py-1 border border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800'
                  >
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
=======
                    className='text-xs rounded-full px-3 py-1 border border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800'                  >

                  >

<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
                    {q}
                  </button>
                ))}
              </div>
            </div>
          )}
<<<<<<< HEAD
=======

<<<<<<< HEAD
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
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
                  placeholder='Ask a question…'
<<<<<<< HEAD
                  className='flex-1 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500'                />
                <button
                  onClick={() => onSend()}
                  disabled={isLoading}
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
                  className='rounded-xl px-4 py-2 text-sm bg-blue-600 text-white disabled:opacity-50'                >            {!showEscalation ? (
              <div className="flex gap-2">
                <input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' && !e.shiftKey) {
                      e.preventDefault();

<<<<<<< HEAD
                      onSend()
                    }
                  }}
                  placeholder="Ask a question…"
                  className="flex-1 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
=======
<<<<<<< HEAD
                  className='flex-1 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500'
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
                  className='rounded-xl px-4 py-2 text-sm bg-blue-600 text-white disabled:opacity-50'                >

>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
                />
                <button
                  onClick={() => onSend()}
                  disabled={isLoading}
<<<<<<< HEAD
                  className='rounded-xl px-4 py-2 text-sm bg-blue-600 text-white disabled:opacity-50'                  className="rounded-xl px-4 py-2 text-sm bg-blue-600 text-white disabled:opacity-50"
=======
                  className='rounded-xl px-4 py-2 text-sm bg-blue-600 text-white disabled:opacity-50'
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
                >
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
<<<<<<< HEAD
                  </a>                </div>              <div className="flex flex-col gap-2 text-sm">
                <div className="text-gray-700 dark:text-gray-300">We can escalate this to our team:</div>
                <div className="flex gap-2">
                  <a href="mailto:support@zion.ai" className="rounded-lg px-3 py-2 border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800">Email Support</a>
                  <a href="/contact" className="rounded-lg px-3 py-2 border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800">Chat with Live Agent</a>
=======
                  </a>
                </div>
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
              </div>
            )}
          </div>
        </div>
      )}
    </div>
<<<<<<< HEAD
);
<<<<<<< HEAD
}
=======
  );
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
=======
<<<<<<< HEAD
=======
  );
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
}
=======
}
=======
  );
}
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
