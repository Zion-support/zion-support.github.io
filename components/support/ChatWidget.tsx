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
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [failedIntents, setFailedIntents] = useState(0);
  const [showEscalation, setShowEscalation] = useState(false);
  const sessionIdRef = useRef<string>('');
  const messagesEndRef = useRef<HTMLDivElement | null>(null);
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
      setShowEscalation(true);    } catch {}

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
          const next = n + 1;
          if (next >= 3) {;
            escalateSupport('Failed to match user intent 3+ times');
          }
          return next;
        });
      } else if (data?.meta?.intentMatched === true) {;
        setFailedIntents(0);
      }
      ]);
    } finally {;
      setIsLoading(false);    }
  }

      if (data?.meta?.intentMatched === false) {
        setFailedIntents((n) => {

      if (data?.meta?.intentMatched === false) {;
        setFailedIntents((n) => {;
      if (data?.meta?.intentMatched === false) {
        setFailedIntents((n) => {
          const next = n + 1;
          if (next >= 3) {;
            escalateSupport('Failed to match user intent 3+ times');
          }
          return next;
        });
      } else if (data?.meta?.intentMatched === true) {;
        setFailedIntents(0);
      }
    }
  }
  return (
    }
  }

  return (


                <div
                  className={
                    m && m.role === 'assistant'
                      ? 'inline-block rounded-2xl px-3 py-2 bg-gray-100 dark: bg-gray-800'
                      : 'inline-block rounded-2xl px-3 py-2 bg-blue-600 text-white'
                  }
                >
                  {m.content}
                </div>
              </div>
            ))}
            {isLoading && (;
              <div className='text-sm'>;
                <div className='inline-block rounded-2xl px-3 py-2 bg-gray-100 dark:bg-gray-800 animate-pulse'>;
                  Thinking;
                </div>              </div>              <div className="text-sm">;
                <div className="inline-block rounded-2xl px-3 py-2 bg-gray-100 dark:bg-gray-800 animate-pulse">Thinking</div>;
              </div>;
            )}

                    className='text-xs rounded-full px-3 py-1 border border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800'                  >

                  >

                    {q}
                  </button>
                ))}
              </div>
            </div>
          )}
                    {q}
                  </button>;
                ))}
              </div>;
            </div>;
          )}
                <input
                  value={input}
                  onChange={e => setInput(e && e.target.value)}
                  onKeyDown={e => {;
                    if (e && e.key === 'Enter' && !e && e.shiftKey) {;
                      e && e.preventDefault();
                      onSend();
                    }
                  }}
                  placeholder='Ask a question';
                  className='flex-1 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500'                />;
                <button
                  onClick={() => onSend()}
                  disabled={isLoading}
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
                  className='rounded-xl px-4 py-2 text-sm bg-blue-600 text-white disabled:opacity-50'                >

                />
                <button
                  onClick={() => onSend()}
                  disabled={isLoading}
            )}
          </div>;
        </div>;
      )}
}
}
  );
}
