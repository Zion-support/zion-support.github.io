'use client';

import React, { useCallback, useEffect, useRef, useState } from 'react';
import { MessageSquare, Send, X, Sparkles, Loader2, Bot, User, Minimize2 } from 'lucide-react';

interface Message {
  role: 'user' | 'assistant' | 'system';
  content: string;
}

const SYSTEM_PROMPT = `You are Zion AI, the helpful virtual assistant for Zion Tech Group (ziontechgroup.com). You help visitors learn about the company's services, solutions, and how to get started.

About Zion Tech Group:
- AI Delivery Studio specializing in production-ready AI applications
- Services: AI & Machine Learning, Web & Software Development, Cloud Infrastructure, Cybersecurity, Data Analytics, DevOps & Automation, AI Talent Matching, Micro SaaS Solutions, Blockchain & Web3, Consulting & Strategy
- Key products: Zion AI Chatbot Builder, AI Customer Support Pro, AI Email Marketing Pro, AI Lead Scoring, AI Code Assistant, AI Code Reviewer, Security Shield, Cloud Vault, and 30+ more
- Solutions organized by: Customer & Growth, Engineering & DevOps, Security & Compliance, Operations & Automation
- Pricing: Starter ($2,499/mo, up to 3 AI modules), Professional ($6,999/mo, up to 12 modules, most popular), Enterprise (custom pricing)
- Contact: commercial@ziontechgroup.com | +1 302 464 0950
- Location: 364 E Main St STE 1008, Middletown, DE 19709
- Website: https://ziontechgroup.com

Guidelines:
- Be concise, friendly, and professional
- Guide visitors toward booking a discovery call or exploring solutions
- If asked about specific technical capabilities, provide helpful details
- For pricing questions, share the tier info and suggest contacting sales for custom needs
- Always suggest relevant pages on the website when applicable (use relative paths like /solutions, /pricing, /contact)
- Keep responses under 150 words unless the question requires more detail`;

const WELCOME_MESSAGE: Message = {
  role: 'assistant',
  content:
    "Hi! I'm Zion AI, your virtual assistant. I can help you learn about our AI solutions, services, pricing, or anything else about Zion Tech Group. What can I help you with today?",
};

export default function AIChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([WELCOME_MESSAGE]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages, scrollToBottom]);

  useEffect(() => {
    if (isOpen && !isMinimized) {
      inputRef.current?.focus();
    }
  }, [isOpen, isMinimized]);

  const sendMessage = useCallback(async () => {
    const trimmed = input.trim();
    if (!trimmed || isLoading) return;

    setHasInteracted(true);
    const userMessage: Message = { role: 'user', content: trimmed };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    const apiMessages = [
      { role: 'system' as const, content: SYSTEM_PROMPT },
      ...messages.filter((m) => m.role !== 'system'),
      userMessage,
    ];

    try {
      const apiKey = process.env.NEXT_PUBLIC_OPENROUTER_API_KEY;
      if (!apiKey) {
        throw new Error('API key not configured');
      }

      const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${apiKey}`,
          'Content-Type': 'application/json',
          'HTTP-Referer': 'https://ziontechgroup.com',
          'X-Title': 'Zion Tech Group AI Assistant',
        },
        body: JSON.stringify({
          model: 'openrouter/auto',
          messages: apiMessages.map((m) => ({ role: m.role, content: m.content })),
          max_tokens: 500,
          temperature: 0.7,
        }),
      });

      if (!response.ok) {
        throw new Error(`API error: ${response.status}`);
      }

      const data = await response.json();
      const assistantContent =
        data.choices?.[0]?.message?.content ?? "I'm sorry, I couldn't process that. Please try again.";

      setMessages((prev) => [...prev, { role: 'assistant', content: assistantContent }]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          content:
            "I'm having trouble connecting right now. You can reach our team directly at commercial@ziontechgroup.com or call +1 302 464 0950.",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  }, [input, isLoading, messages]);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        sendMessage();
      }
    },
    [sendMessage],
  );

  const toggleChat = useCallback(() => {
    if (isOpen && isMinimized) {
      setIsMinimized(false);
    } else {
      setIsOpen((prev) => !prev);
      setIsMinimized(false);
    }
  }, [isOpen, isMinimized]);

  const minimizeChat = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    setIsMinimized(true);
  }, []);

  const closeChat = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    setIsOpen(false);
    setIsMinimized(false);
  }, []);

  const quickQuestions = [
    'What AI solutions do you offer?',
    'Tell me about pricing',
    'How do I get started?',
  ];

  const handleQuickQuestion = useCallback(
    (question: string) => {
      setInput(question);
      setTimeout(() => {
        setInput(question);
        const fakeEvent = { trim: () => question };
        void fakeEvent;
        setHasInteracted(true);
        const userMessage: Message = { role: 'user', content: question };
        setMessages((prev) => [...prev, userMessage]);
        setIsLoading(true);

        const apiMessages = [
          { role: 'system' as const, content: SYSTEM_PROMPT },
          ...messages.filter((m) => m.role !== 'system'),
          userMessage,
        ];

        const apiKey = process.env.NEXT_PUBLIC_OPENROUTER_API_KEY;
        if (!apiKey) return;

        fetch('https://openrouter.ai/api/v1/chat/completions', {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${apiKey}`,
            'Content-Type': 'application/json',
            'HTTP-Referer': 'https://ziontechgroup.com',
            'X-Title': 'Zion Tech Group AI Assistant',
          },
          body: JSON.stringify({
            model: 'openrouter/auto',
            messages: apiMessages.map((m) => ({ role: m.role, content: m.content })),
            max_tokens: 500,
            temperature: 0.7,
          }),
        })
          .then((res) => res.json())
          .then((data) => {
            const content =
              data.choices?.[0]?.message?.content ?? "I'm sorry, I couldn't process that.";
            setMessages((prev) => [...prev, { role: 'assistant', content }]);
          })
          .catch(() => {
            setMessages((prev) => [
              ...prev,
              {
                role: 'assistant',
                content:
                  "I'm having trouble connecting. Reach us at commercial@ziontechgroup.com.",
              },
            ]);
          })
          .finally(() => {
            setIsLoading(false);
            setInput('');
          });
      }, 50);
    },
    [messages],
  );

  return (
    <>
      {isOpen && !isMinimized && (
        <div
          ref={chatContainerRef}
          className="fixed bottom-20 right-4 z-[60] flex w-[calc(100vw-2rem)] max-w-[420px] flex-col overflow-hidden rounded-2xl border border-purple-500/30 bg-slate-900/98 shadow-2xl shadow-purple-900/30 backdrop-blur-xl sm:bottom-24 sm:right-6"
          role="dialog"
          aria-label="AI Chat Assistant"
          style={{ maxHeight: 'min(600px, calc(100vh - 8rem))' }}
        >
          <div className="flex items-center justify-between border-b border-purple-500/20 bg-gradient-to-r from-purple-900/50 via-fuchsia-900/30 to-pink-900/40 px-4 py-3">
            <div className="flex items-center gap-2.5">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-purple-500 to-pink-500">
                <Sparkles className="h-4 w-4 text-white" />
              </div>
              <div>
                <p className="text-sm font-semibold text-white">Zion AI Assistant</p>
                <p className="text-[11px] text-purple-300/80">Powered by AI</p>
              </div>
            </div>
            <div className="flex items-center gap-1">
              <button
                type="button"
                onClick={minimizeChat}
                className="rounded-lg p-1.5 text-slate-400 transition hover:bg-slate-800 hover:text-white"
                aria-label="Minimize chat"
              >
                <Minimize2 className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={closeChat}
                className="rounded-lg p-1.5 text-slate-400 transition hover:bg-slate-800 hover:text-white"
                aria-label="Close chat"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto px-4 py-3" style={{ minHeight: '200px', maxHeight: '400px' }}>
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`mb-3 flex gap-2.5 ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}
              >
                <div
                  className={`flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-lg ${
                    msg.role === 'user'
                      ? 'bg-purple-500/20 text-purple-300'
                      : 'bg-gradient-to-br from-purple-500/20 to-pink-500/20 text-purple-300'
                  }`}
                >
                  {msg.role === 'user' ? (
                    <User className="h-3.5 w-3.5" />
                  ) : (
                    <Bot className="h-3.5 w-3.5" />
                  )}
                </div>
                <div
                  className={`max-w-[80%] rounded-xl px-3 py-2 text-sm leading-relaxed ${
                    msg.role === 'user'
                      ? 'bg-purple-600/30 text-purple-100'
                      : 'border border-slate-700/50 bg-slate-800/70 text-slate-200'
                  }`}
                >
                  {msg.content}
                </div>
              </div>
            ))}

            {isLoading && (
              <div className="mb-3 flex gap-2.5">
                <div className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-purple-500/20 to-pink-500/20 text-purple-300">
                  <Bot className="h-3.5 w-3.5" />
                </div>
                <div className="flex items-center gap-2 rounded-xl border border-slate-700/50 bg-slate-800/70 px-3 py-2 text-sm text-slate-400">
                  <Loader2 className="h-3.5 w-3.5 animate-spin" />
                  Thinking...
                </div>
              </div>
            )}

            {!hasInteracted && messages.length === 1 && (
              <div className="mt-2 space-y-2">
                <p className="text-xs text-slate-500">Quick questions:</p>
                {quickQuestions.map((q) => (
                  <button
                    key={q}
                    type="button"
                    onClick={() => handleQuickQuestion(q)}
                    className="block w-full rounded-lg border border-slate-700/50 bg-slate-800/40 px-3 py-2 text-left text-xs text-slate-300 transition hover:border-purple-400/40 hover:text-white"
                  >
                    {q}
                  </button>
                ))}
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          <div className="border-t border-purple-500/20 px-3 py-3">
            <div className="flex items-center gap-2">
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Ask about our services..."
                disabled={isLoading}
                className="flex-1 rounded-xl border border-slate-600/60 bg-slate-950/60 px-3 py-2.5 text-sm text-slate-100 placeholder:text-slate-500 focus:border-purple-400 focus:outline-none focus:ring-1 focus:ring-purple-500/40 disabled:opacity-50"
              />
              <button
                type="button"
                onClick={sendMessage}
                disabled={!input.trim() || isLoading}
                className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 text-white transition hover:from-purple-500 hover:to-pink-500 disabled:opacity-40 disabled:hover:from-purple-600 disabled:hover:to-pink-600"
                aria-label="Send message"
              >
                <Send className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      )}

      <button
        type="button"
        onClick={toggleChat}
        className={`fixed z-[60] flex items-center justify-center rounded-full shadow-lg transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 ${
          isOpen && !isMinimized
            ? 'bottom-4 right-4 h-12 w-12 border border-purple-500/40 bg-slate-900/90 text-purple-300 hover:text-white sm:bottom-6 sm:right-6'
            : 'bottom-4 right-4 h-14 w-14 bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:-translate-y-0.5 hover:shadow-xl hover:shadow-purple-600/30 sm:bottom-6 sm:right-6 max-md:bottom-[4.5rem]'
        }`}
        aria-label={isOpen ? 'Toggle chat' : 'Open AI chat assistant'}
      >
        {isOpen && !isMinimized ? (
          <MessageSquare className="h-5 w-5" />
        ) : (
          <>
            <MessageSquare className="h-6 w-6" />
            {!hasInteracted && (
              <span className="absolute -right-1 -top-1 flex h-4 w-4">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-pink-400 opacity-75" />
                <span className="relative inline-flex h-4 w-4 rounded-full bg-pink-500" />
              </span>
            )}
          </>
        )}
      </button>
    </>
  );
}
