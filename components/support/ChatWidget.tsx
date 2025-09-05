import React, { useEffect, useMemo, useRef, useState } from 'react',;
import { X } from 'lucide-react',;
type ChatMessage = {;
  role: 'user' | 'assistant' | 'system',;
  content: string,;
  timestamp?: number;
},;
function generateSessionId(): string {;
  if (typeof window === 'undefined') return '',;
  const existing = window.localStorage.getItem('zion_support_session_id'),;
  if (existing) return existing,;
  const id = `sess_${Math.random().toString(36).slice(2)}_${Date.now()}`,;
  window.localStorage.setItem('zion_support_session_id', id),;
  return id;
}
;
export default function ChatWidget() {;
  const [isOpen, setIsOpen] = useState(false),;
  const [messages, setMessages] = useState<ChatMessage[]>([]),;
  const [input, setInput] = useState(''),;
  const [isLoading, setIsLoading] = useState(false),;
  const [failedIntents, setFailedIntents] = useState(0),;
  const [showEscalation, setShowEscalation] = useState(false),;
  const sessionIdRef = useRef<string>(''),;
  const messagesEndRef = useRef<HTMLDivElement | null>(null),;
  useEffect(() => {;
    sessionIdRef.current = generateSessionId();
  }, []),;
  useEffect(() => {;
    if (!isOpen && messages.length === 0) {;
      // Seed greeting;
      setMessages([;
        { role: 'assistant', content: 'Hi! How can I help you?', timestamp: Date.now() }]);
    }
  }, [isOpen, messages.length]),;
  useEffect(() => {;
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]),;
  const quickReplies = useMemo(;
    () => ['How do I hire?How do I get matched?Billing help'],;
    [];
  ),;
  async function logEvent(eventType: string, payload: any) {;
    try {;
      await fetch('/api/support/session', {;
        method: 'POST',;
        headers: { 'Content-Type': 'application/json' },;
        body: JSON.stringify({ sessionId: sessionIdRef.current, eventType, payload })});
    } catch {}
  }
;
  async function escalateSupport(reason: string) {;
    try {;
      await fetch('/api/support/escalate', {;
        method: 'POST',;
        headers: { 'Content-Type': 'application/json' },;
        body: JSON.stringify({ sessionId: sessionIdRef.current, reason, tag: 'escalate' })}),;
      setShowEscalation(true);
    } catch {}
  }
;
  async function onSend(messageText?: string) {;
    const text = (messageText ?? input).trim(),;
    if (!text) return,;
    const newUserMessage: ChatMessage = { role: 'user', content: text, timestamp: Date.now() },;
    setMessages((prev) => [...prev, newUserMessage]),;
    setInput(''),;
    setIsLoading(true),;
    await logEvent('message/user', { content: text }),;
    try {;
      const res = await fetch('/api/support/chat', {;
        method: 'POST',;
        headers: { 'Content-Type': 'application/json' },;
        body: JSON.stringify({;
          sessionId: sessionIdRef.current,;
          messages: [...messages, newUserMessage].map(({ role, content }) => ({ role, content }))})}),;
      const data = await res.json(),;
      if (data?.assistantMessage) {;
        const assistantMessage: ChatMessage = {;
          role: 'assistant',;
          content: data.assistantMessage,;
          timestamp: Date.now()},;
        setMessages((prev) => [...prev, assistantMessage]),;
        await logEvent('message/assistant', { content: assistantMessage.content, meta: data.meta });
      }
;
      if (data?.meta?.intentMatched === false) {;
        setFailedIntents((n) => {;
          const next = n + 1,;
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
        { role: 'assistant', content: 'Sorry, something went wrong. Please try again or contact support.', timestamp: Date.now() }]);
    } finally {;
      setIsLoading(false);
    }
  }
<<<<<<< HEAD

  return (
    <div className=&quot;fixed bottom-4 right-4 z-50&quot;>
      {!isOpen && (
        <button
          aria-label=&quot;Open support chat&quot;
          onClick={() => setIsOpen(true)}
          className=&quot;rounded-full shadow-lg bg-blue-600 text-white w-14 h-14 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 dark:focus:ring-offset-black&quot;
        >
          ?
        </button>
      )}

      {isOpen && (
        <div className=&quot;w-[360px] max-w-[92vw] h-[520px] max-h-[80vh] rounded-2xl overflow-hidden shadow-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 flex flex-col&quot;>
          <div className=&quot;flex items-center justify-between px-4 py-3 border-b border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-800&quot;>
            <div className=&quot;font-semibold&quot;>Zion Support</div>
            <button onClick={() => setIsOpen(false)} aria-label=&quot;Close&quot; className=&quot;p-1 rounded hover:bg-gray-200 dark:hover:bg-gray-700&quot;>
              <X size={18} />
            </button>
          </div>

          <div className=&quot;flex-1 overflow-y-auto p-3 space-y-3&quot;>
            {messages.map((m, idx) => (
              <div key={idx} className={m.role === 'assistant' ? 'text-sm' : 'text-sm text-right'}>
                <div
                  className={
                    m.role === 'assistant'
                      ? 'inline-block rounded-2xl px-3 py-2 bg-gray-100 dark:bg-gray-800'
                      : 'inline-block rounded-2xl px-3 py-2 bg-blue-600 text-white'
=======
;
  return (;
    <div className="fixed bottom-4 right-4 z-50">;
      {!isOpen && (;
        <button;
          aria-label="Open support chat";
          onClick={() => setIsOpen(true)}
          className="rounded-full shadow-lg bg-blue-600 text-white w-14 h-14 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 dark:focus:ring-offset-black";
        >;
          ?;
        </button>;
      )}
;
      {isOpen && (;
        <div className="w-[360px] max-w-[92vw] h-[520px] max-h-[80vh] rounded-2xl overflow-hidden shadow-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 flex flex-col">;
          <div className="flex items-center justify-between px-4 py-3 border-b border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-800">;
            <div className="font-semibold">Zion Support</div>;
            <button onClick={() => setIsOpen(false)} aria-label="Close" className="p-1 rounded hover:bg-gray-200 dark:hover:bg-gray-700">;
              <X size={18} />;
            </button>;
          </div>;
          <div className="flex-1 overflow-y-auto p-3 space-y-3">;
            {messages.map((m, idx) => (;
              <div key={idx} className={m.role === 'assistant' ? 'text-sm' : 'text-sm text-right'}>;
                <div;
                  className={;
                    m.role === 'assistant';
                      ? 'inline-block rounded-2xl px-3 py-2 bg-gray-100 dark:bg-gray-800';
                      : 'inline-block rounded-2xl px-3 py-2 bg-blue-600 text-white';
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
                  }
                >;
                  {m.content}
                </div>;
              </div>;
            ))}
<<<<<<< HEAD
            {isLoading && (
              <div className=&quot;text-sm&quot;>
                <div className=&quot;inline-block rounded-2xl px-3 py-2 bg-gray-100 dark:bg-gray-800 animate-pulse&quot;>Thinking…</div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {!showEscalation && (
            <div className=&quot;px-3 pb-2&quot;>
              <div className=&quot;flex flex-wrap gap-2 mb-2&quot;>
                {quickReplies.map((q) => (
                  <button
                    key={q}
                    onClick={() => onSend(q)}
                    className=&quot;text-xs rounded-full px-3 py-1 border border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800&quot;
                  >
=======
            {isLoading && (;
              <div className="text-sm">;
                <div className="inline-block rounded-2xl px-3 py-2 bg-gray-100 dark:bg-gray-800 animate-pulse">Thinking…</div>;
              </div>;
            )}
            <div ref={messagesEndRef} />;
          </div>;
          {!showEscalation && (;
            <div className="px-3 pb-2">;
              <div className="flex flex-wrap gap-2 mb-2">;
                {quickReplies.map((q) => (;
                  <button;
                    key={q}
                    onClick={() => onSend(q)}
                    className="text-xs rounded-full px-3 py-1 border border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800";
                  >;
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
                    {q}
                  </button>;
                ))}
              </div>;
            </div>;
          )}
<<<<<<< HEAD

          <div className=&quot;border-t border-gray-200 dark:border-gray-800 p-2&quot;>
            {!showEscalation ? (
              <div className=&quot;flex gap-2&quot;>
                <input
=======
;
          <div className="border-t border-gray-200 dark:border-gray-800 p-2">;
            {!showEscalation ? (;
              <div className="flex gap-2">;
                <input;
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => {;
                    if (e.key === 'Enter' && !e.shiftKey) {;
                      e.preventDefault();
                      onSend();
                    }
                  }}
<<<<<<< HEAD
                  placeholder=&quot;Ask a question…&quot;
                  className=&quot;flex-1 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500&quot;
                />
                <button
                  onClick={() => onSend()}
                  disabled={isLoading}
                  className=&quot;rounded-xl px-4 py-2 text-sm bg-blue-600 text-white disabled:opacity-50&quot;
                >
                  Send
                </button>
              </div>
            ) : (
              <div className=&quot;flex flex-col gap-2 text-sm&quot;>
                <div className=&quot;text-gray-700 dark:text-gray-300&quot;>We can escalate this to our team:</div>
                <div className=&quot;flex gap-2&quot;>
                  <a href=&quot;mailto:support@zion.ai&quot; className=&quot;rounded-lg px-3 py-2 border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800&quot;>Email Support</a>
                  <a href=&quot;/contact&quot; className=&quot;rounded-lg px-3 py-2 border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800&quot;>Chat with Live Agent</a>
                </div>
              </div>
=======
                  placeholder="Ask a question…";
                  className="flex-1 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500";
                />;
                <button;
                  onClick={() => onSend()}
                  disabled={isLoading}
                  className="rounded-xl px-4 py-2 text-sm bg-blue-600 text-white disabled:opacity-50";
                >;
                  Send;
                </button>;
              </div>;
            ) : (;
              <div className="flex flex-col gap-2 text-sm">;
                <div className="text-gray-700 dark:text-gray-300">We can escalate this to our team:</div>;
                <div className="flex gap-2">;
                  <a href="mailto:support@zion.ai" className="rounded-lg px-3 py-2 border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800">Email Support</a>;
                  <a href="/contact" className="rounded-lg px-3 py-2 border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800">Chat with Live Agent</a>;
                </div>;
              </div>;
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
            )}
          </div>;
        </div>;
      )}
    </div>;
  );
}