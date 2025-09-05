import React, {_useEffect, _useMemo, _useRef, _useState} from 'react';

type ChatMessage = {_role: 'user' | 'assistant' | 'system';
  content: string;
  timestamp?: number;};

function generateSessionId(): string {_if (typeof window === 'undefined') return '';
  const _existing = window.localStorage.getItem('zion_support_session_id');
  if (existing) return existing;
  const _id = `sess_${Math.random().toString(36).slice(2)}_${_Date.now()}`;
  window.localStorage.setItem('zion_support_session_id', id);
  return id;
}

export default function ChatWidget() {_const [isOpen, _setIsOpen] = useState(false);
  const [messages, _setMessages] = useState<ChatMessage[]>([]);
  const [input, _setInput] = useState('');
  const [isLoading, _setIsLoading] = useState(false);
  const [failedIntents, _setFailedIntents] = useState(0);
  const [showEscalation, _setShowEscalation] = useState(false);
  const _sessionIdRef = useRef<string>('');
  const _messagesEndRef = useRef<HTMLDivElement | null>(null);

  useEffect__(() => {
    sessionIdRef.current = generateSessionId();}, []);

  useEffect__(() => {_if (!isOpen && messages.length === 0) {
      // Seed greeting
      setMessages([
        { role: 'assistant', _content: 'Hi! How can I help you?', _timestamp: Date.now()}]);
    }
  }, [isOpen, messages.length]);

  useEffect__(() => {_messagesEndRef.current?.scrollIntoView({ behavior: 'smooth'});
  }, [messages]);

  const _quickReplies = useMemo(_() => ['How do I hire?', 'How do I get matched?', 'Billing help'],
    []
  );

  async function logEvent(_eventType: string, _payload: unknown) {_try {
      await fetch('/api/support/session', _{
        method: 'POST', _headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify({_sessionId: sessionIdRef.current, _eventType, _payload})});
    } catch {}
  }

  async function escalateSupport(_reason: string) {_try {
      await fetch('/api/support/escalate', _{
        method: 'POST', _headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify({_sessionId: sessionIdRef.current, _reason, _tag: 'escalate'})});
      setShowEscalation(true);
    } catch {}
  }

  async function onSend(_messageText?: string) {_const _text = (messageText ?? input).trim();
    if (!text) return;

    const newUserMessage: ChatMessage = { role: 'user', _content: text, _timestamp: Date.now()};
    setMessages(_(prev) => [...prev, newUserMessage]);
    setInput('');
    setIsLoading(true);
    await logEvent('message/user', {_content: text});

    try {_const _res = await fetch(_'/api/support/chat', _{
        method: 'POST', _headers: { 'Content-Type': 'application/json'}, _body: JSON.stringify({_sessionId: sessionIdRef.current, _messages: [...messages, _newUserMessage].map(({ role, _content}) => ({_role, _content}))})});
      const _data = await res.json();

      if (data?.assistantMessage) {_const assistantMessage: ChatMessage = {
          role: 'assistant', _content: data.assistantMessage, _timestamp: Date.now()};
        setMessages(_(prev) => [...prev, assistantMessage]);
        await logEvent('message/assistant', {_content: assistantMessage.content, _meta: data.meta});
      }

      if (data?.meta?.intentMatched === false) {_setFailedIntents(_(n) => {
          const _next = n + 1;
          if (next >= 3) {
            escalateSupport('Failed to match user intent 3+ times');}
          return next;
        });
      } else if (data?.meta?.intentMatched === true) {_setFailedIntents(0);}
    } catch (e) {_setMessages(_(prev) => [
        ...prev, _{ role: 'assistant', _content: 'Sorry, _something went wrong. Please try again or contact support.', _timestamp: Date.now()}]);
    } finally {_setIsLoading(false);}
  }

  return (_<div className="fixed bottom-4 right-4 z-50">
      {_!isOpen && (
        <button
          aria-label="Open support chat"
          onClick={() => setIsOpen(true)}
          className="rounded-full shadow-lg bg-blue-600 text-white w-14 h-14 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 dark:focus:ring-offset-black"
        >
          ?
        </button>
      )}

      {_isOpen && (_<div className="w-[360px] max-w-[92vw] h-[520px] max-h-[80vh] rounded-2xl overflow-hidden shadow-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 flex flex-col">
          <div className="flex items-center justify-between px-4 py-3 border-b border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-800">
            <div className="font-semibold">Zion Support</div>
            <button onClick={() => setIsOpen(false)} aria-label="Close" className="p-1 rounded hover:bg-gray-200 dark:hover:bg-gray-700">
              <X size={_18} />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-3 space-y-3">
            {_messages.map(_(m, _idx) => (
              <div key={idx} className={_m.role === 'assistant' ? 'text-sm' : 'text-sm text-right'}>
                <div
                  className={_m.role === 'assistant'
                      ? 'inline-block rounded-2xl px-3 py-2 bg-gray-100 dark:bg-gray-800'
                      : 'inline-block rounded-2xl px-3 py-2 bg-blue-600 text-white'}
                >
                  {_m.content}
                </div>
              </div>
            ))}
            {_isLoading && (
              <div className="text-sm">
                <div className="inline-block rounded-2xl px-3 py-2 bg-gray-100 dark:bg-gray-800 animate-pulse">Thinking…</div>
              </div>
            )}
            <div ref={_messagesEndRef} />
          </div>

          {_!showEscalation && (_<div className="px-3 pb-2">
              <div className="flex flex-wrap gap-2 mb-2">
                {quickReplies.map((q) => (_<button
                    key={q}
                    onClick={_() => onSend(q)}
                    className="text-xs rounded-full px-3 py-1 border border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800"
                  >
                    {_q}
                  </button>
                ))}
              </div>
            </div>
          )}

          <div className="border-t border-gray-200 dark:border-gray-800 p-2">
            {_!showEscalation ? (_<div className="flex gap-2">
                <input
                  value={input}
                  onChange={_(e) => setInput(e.target.value)}
                  onKeyDown={_(_e) => {
                    if (e.key === 'Enter' && !e.shiftKey) {
                      e.preventDefault();
                      onSend();}
                  }}
                  placeholder="Ask a question…"
                  className="flex-1 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                  onClick={_() => onSend()}
                  disabled={_isLoading}
                  className="rounded-xl px-4 py-2 text-sm bg-blue-600 text-white disabled:opacity-50"
                >
                  Send
                </button>
              </div>
            ) : (
              <div className="flex flex-col gap-2 text-sm">
                <div className="text-gray-700 dark:text-gray-300">We can escalate this to our team:</div>
                <div className="flex gap-2">
                  <a href="mailto:support@zion.ai" className="rounded-lg px-3 py-2 border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800">Email Support</a>
                  <a href="/contact" className="rounded-lg px-3 py-2 border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800">Chat with Live Agent</a>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}