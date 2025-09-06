
=======
import React, { useEffect, useMemo, useRef, useState } from 'react';
useEffect ( () => {
  if (!isOpen && messages.length === 0) {
  //Seed greeting setMessages ([ import React, { useEffect, useMemo, useRef, useState } from 'react';
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
import { X } from 'lucide-react';

type ChatMessage = {
  role: 'user' | 'assistant' | 'system'
  content: string
  timestamp?: number
}
function generateSessionId(): string {

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

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159

  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [failedIntents, setFailedIntents] = useState(0);
  const [showEscalation, setShowEscalation] = useState(false);
  const sessionIdRef = useRef<string>('');
  const messagesEndRef = useRef<HTMLDivElement | null>(null);


  useEffect(() => {

  }, []);
  useEffect(() => {
    if (!isOpen && messages.length === 0) {
      // Seed greeting
      setMessages([

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

  );
  async function logEvent(eventType: string, payload: any) {
    try {
      await fetch('/api/support/session', {
        method: 'POST'
        headers: { 'Content-Type': 'application/json' }
        body: JSON.stringify({
          sessionId: sessionIdRef.current
          eventType
          payload
        })
      });    } catch {}        body: JSON.stringify({ sessionId: sessionIdRef.current, eventType, payload })})
          sessionId: sessionIdRef.current,
          eventType,
          payload,
        }),
      });    } catch {}

      });    } catch {}        body: JSON.stringify({ sessionId: sessionIdRef.current, eventType, payload })})
      });    } catch {}

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
    } catch {}
  }

  async function escalateSupport(reason: string) {
    try {
      await fetch('/api/support/escalate', {
        method: 'POST'
        headers: { 'Content-Type': 'application/json' }
        body: JSON.stringify({
          sessionId: sessionIdRef.current
          reason
          tag: 'escalate'
        })
      });

      setShowEscalation(true)

        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ sessionId: sessionIdRef.current, reason, tag: 'escalate' })}),

      setShowEscalation(true)
=======
      setShowEscalation(true);    } catch {}
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330

    } catch {}
  }

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

    } catch {}
  }
=======

      setShowEscalation(true);    } catch {}        body: JSON.stringify({ sessionId: sessionIdRef.current, reason, tag: 'escalate' })}),
=======
    } catch {}
  }
=======

      setShowEscalation(true);    } catch {}        body: JSON.stringify({ sessionId: sessionIdRef.current, reason, tag: 'escalate' })}),

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
      setShowEscalation(true)
      setShowEscalation(true);    } catch {}

=======


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
    } catch {}
  }

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
    <div className='fixed bottom-4 right-4 z-50'>      }

      if (data?.meta?.intentMatched === false) {
        setFailedIntents((n) => {
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
          const next = n + 1;
          if (next >= 3) {;
            escalateSupport('Failed to match user intent 3+ times');
          }
          return next;
        });
      } else if (data?.meta?.intentMatched === true) {;
        setFailedIntents(0);
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
    }
  }
    <div className='fixed bottom-4 right-4 z-50'>

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
  return (


>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
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
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
                  }
                >
                  {m.content}
                </div>
              </div>
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
            ))}
            {isLoading && (
              <div className='text-sm'>
                <div className='inline-block rounded-2xl px-3 py-2 bg-gray-100 dark:bg-gray-800 animate-pulse'>
                  Thinking…
                </div>              </div>              <div className="text-sm">

                <div className="inline-block rounded-2xl px-3 py-2 bg-gray-100 dark:bg-gray-800 animate-pulse">Thinking…</div>
              </div>
            )}

            <div ref={messagesEndRef} />;
          </div>;
          {!showEscalation && (;
            <div className='px-3 pb-2'>;
              <div className='flex flex-wrap gap-2 mb-2'>;
                {quickReplies && quickReplies.map(q => (;

                  <button
                    key={q}
                    onClick={() => onSend(q)}

=======
              <div className="flex flex-wrap gap-2 mb-2">
                {quickReplies.map((q) => (
                  <button
                    key={q}
                    onClick={() => onSend(q)}
                    className="text-xs rounded-full px-3 py-1 border border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800"
                    className='text-xs rounded-full px-3 py-1 border border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800'                  >

                  >

                    {q}
                  </button>
                ))}
              </div>
            </div>
          )}
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
                    {q}
                  </button>;
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
                ))}
              </div>;
            </div>;
          )}
=======




>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee

          <div className='border-t border-gray-200 dark:border-gray-800 p-2'>
            {!showEscalation ? (
              <div className='flex gap-2'>

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
                  className='rounded-xl px-4 py-2 text-sm bg-blue-600 text-white disabled:opacity-50'                >            {!showEscalation ? (
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
              <div className="flex gap-2">
                <input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' && !e.shiftKey) {
                      e.preventDefault();

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
                />
                <button
                  onClick={() => onSend()}
                  disabled={isLoading}

                >
                  Send
                </button>
              </div>
            ) : (

                <div className="text-gray-700 dark:text-gray-300">We can escalate this to our team:</div>
                <div className="flex gap-2">
                  <a href="mailto:support@zion.ai" className="rounded-lg px-3 py-2 border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800">Email Support</a>
                  <a href="/contact" className="rounded-lg px-3 py-2 border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800">Chat with Live Agent</a>

              </div>
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
            )}
          </div>;
        </div>;
      )}


  );

}
=======

}
=======
    </div>;
  );
}
    </div>

}
<<<<<<< HEAD
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
useEffect ( () => {
  // Check condition
if ( {) {
  $2
}
  );
}
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
