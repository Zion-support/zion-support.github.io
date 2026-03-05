'use client';

import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
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

const FALLBACK_REPLY =
  "I'm having trouble connecting right now. You can reach our team directly at commercial@ziontechgroup.com or call +1 302 464 0950.";

const DEFAULT_QUICK_QUESTIONS = [
  'What AI solutions do you offer?',
  'Tell me about pricing',
  'How do I get started?',
];

// Context-aware quick questions by page
const PATH_QUICK_QUESTIONS: Record<string, string[]> = {
  '/': ['What AI solutions do you offer?', 'Tell me about pricing', 'How do I get started?'],
  '/solutions': ['Which solution fits my industry?', 'Tell me about pricing', 'How do I get started?'],
  '/pricing': ['Which tier is right for me?', "What's included in Professional?", 'Contact sales for Enterprise'],
  '/contact': ['What happens in a discovery call?', 'How quickly can you start?', 'Tell me about your process'],
  '/products': ["What's your most popular product?", 'Can I combine multiple apps?', 'Tell me about pricing'],
  '/ai-services': ['What AI services do you offer?', 'Custom AI development?', 'Tell me about implementation'],
  '/case-studies': ['Share a similar industry case study', 'What results can I expect?', 'How long does implementation take?'],
  '/industries': ['Which industries do you serve?', 'Do you have industry experience?', 'How do I get started?'],
  '/blog': ['Latest AI trends?', 'Any implementation guides?', 'Tell me about your expertise'],
  '/about': ['Who is Zion Tech Group?', 'Your team and experience?', 'How do I get started?'],
  '/search': ['How do I find a solution?', 'Search by industry?', 'Tell me about your products'],
  '/consultation': ['What does AI strategy consulting include?', 'How long is an engagement?', 'Book a discovery call'],
  '/automation': ['What can you automate?', 'RPA vs AI automation?', 'Tell me about your process'],
  '/micro-saas-services': ['What is Micro SaaS?', 'Custom app development?', 'Tell me about pricing'],
  '/careers': ['What roles are open?', 'Remote positions?', 'Tell me about your culture'],
  '/community': ['What resources do you offer?', 'Developer community?', 'Tell me about events'],
};

// Local LLM model (same as Ollama llama3.2:3b) — aligns with automation agents
const LOCAL_LLM_MODEL = 'meta-llama/llama-3.2-3b-instruct:free';

// Rule-based fallback for common questions when no API key — chat always works
function getRuleBasedReply(question: string): string | null {
  const q = question.toLowerCase().trim();
  if (/\b(pric|cost|fee|plan|tier|subscription)\b/.test(q)) {
    return "We offer three tiers: Starter ($2,499/mo, up to 3 AI modules), Professional ($6,999/mo, up to 12 modules, most popular), and Enterprise (custom pricing). For a tailored quote, contact us at commercial@ziontechgroup.com or book a discovery call at /contact.";
  }
  if (/\b(contact|email|phone|reach|call)\b/.test(q)) {
    return "You can reach us at commercial@ziontechgroup.com or +1 302 464 0950. Our office is at 364 E Main St STE 1008, Middletown, DE 19709. Book a discovery call at /contact.";
  }
  if (/\b(service|solution|offer|ai|product)\b/.test(q)) {
    return "We offer AI & ML, Web Development, Cloud, Cybersecurity, Data Analytics, DevOps, AI Talent Matching, Micro SaaS, and more. Explore our solutions at /solutions and products at /products.";
  }
  if (/\b(start|get started|begin)\b/.test(q)) {
    return "Great! To get started, book a discovery call at /contact or explore our solutions at /solutions. We'll help you identify the right AI modules for your needs.";
  }
  if (/\b(chatbot|chat bot)\b/.test(q)) {
    return "We offer Zion AI Chatbot Builder for intelligent conversational AI. Check out /zion-ai-chatbot-builder for details.";
  }
  if (/\b(industr|vertical|sector)\b/.test(q)) {
    return "We serve 40+ industries including Healthcare, Finance, Manufacturing, Retail, and more. Explore /industries for industry-specific solutions.";
  }
  if (/\b(case stud|success|result|roi)\b/.test(q)) {
    return "We have case studies across industries showing 25-60% efficiency gains. See /case-studies for real client results.";
  }
  if (/\b(implement|timeline|how long)\b/.test(q)) {
    return "Typical implementations range from 4-12 weeks depending on scope. Book a discovery call at /contact for a tailored timeline.";
  }
  if (/\b(hello|hi|hey)\b/.test(q) && q.length < 20) {
    return "Hi! I'm Zion AI. I can help you learn about our AI solutions, services, pricing, or how to get started. What would you like to know?";
  }
  if (/\b(help|support)\b/.test(q)) {
    return "I can help with pricing, services, solutions, contact info, and getting started. Ask me anything about Zion Tech Group! You can also reach our team at commercial@ziontechgroup.com.";
  }
  if (/\b(consult|strategy|roadmap)\b/.test(q)) {
    return "We offer Consulting & Strategy services including AI roadmaps and implementation planning. Explore /consultation or book a discovery call at /contact.";
  }
  if (/\b(security|cyber|compliance)\b/.test(q)) {
    return "We provide Cybersecurity & Compliance services. Check /it-services/cybersecurity-audit and our Security Shield, Compliance Checker products at /products.";
  }
  if (/\b(cloud|devops|infrastructure)\b/.test(q)) {
    return "We offer Cloud Infrastructure and DevOps & Automation services. See /services for details and our Cloud Vault, Workflow Automator products.";
  }
  if (/\b(micro.?saas|saas|custom app)\b/.test(q)) {
    return "We offer Micro SaaS & Product Development — custom AI apps, MVPs, and scalable products. See /micro-saas-services for details.";
  }
  if (/\b(career|job|hire|position|remote)\b/.test(q)) {
    return "We're always looking for talented engineers. Check /careers for open roles and our culture. Remote-friendly positions available.";
  }
  if (/\b(search|find)\b/.test(q)) {
    return "Use our Search at /search to find solutions, products, and content by keyword. You can also browse /solutions and /products.";
  }
  if (/\b(demo|trial|free)\b/.test(q)) {
    return "Book a discovery call at /contact to discuss your needs. We'll walk you through demos and tailor a plan. No obligation.";
  }
  if (/\b(integration|api|connect)\b/.test(q)) {
    return "Our AI apps integrate with your existing systems. Implementation typically includes API connections, SSO, and data pipelines. Book a call at /contact for specifics.";
  }
  return null;
}

async function callChatApi(chatMessages: Message[]): Promise<string> {
  // 1. Try Netlify function (uses local LLM: Ollama + OpenRouter)
  try {
    const res = await fetch('/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ messages: chatMessages.map((m) => ({ role: m.role, content: m.content })) }),
    });
    if (res.ok) {
      const data = await res.json();
      if (data?.content) return data.content;
    }
  } catch {
    // Fall through to OpenRouter
  }

  // 2. OpenRouter with local LLM model (same as Ollama llama3.2:3b)
  const apiKey = process.env.NEXT_PUBLIC_OPENROUTER_API_KEY;
  if (apiKey) {
    const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
        'HTTP-Referer': 'https://ziontechgroup.com',
        'X-Title': 'Zion Tech Group AI Assistant',
      },
      body: JSON.stringify({
        model: LOCAL_LLM_MODEL,
        messages: chatMessages.map((m) => ({ role: m.role, content: m.content })),
        max_tokens: 500,
        temperature: 0.7,
      }),
    });
    if (response.ok) {
      const data = await response.json();
      return data.choices?.[0]?.message?.content ?? "I'm sorry, I couldn't process that. Please try again.";
    }
    throw new Error(`API error: ${response.status}`);
  }

  throw new Error('No LLM configured');
}

export default function AIChatWidget() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([WELCOME_MESSAGE]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  const quickQuestions = useMemo(() => {
    const base = pathname ? PATH_QUICK_QUESTIONS[pathname] : null;
    return base ?? DEFAULT_QUICK_QUESTIONS;
  }, [pathname]);

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

  const submitQuestion = useCallback(
    async (question: string) => {
      if (!question.trim() || isLoading) return;

      setHasInteracted(true);
      const userMessage: Message = { role: 'user', content: question.trim() };
      setMessages((prev) => [...prev, userMessage]);
      setInput('');
      setIsLoading(true);

      try {
        // Rule-based fallback for common questions (works without API key)
        const ruleReply = getRuleBasedReply(question);
        if (ruleReply) {
          setMessages((prev) => [...prev, { role: 'assistant', content: ruleReply }]);
          return;
        }

        const apiMessages: Message[] = [
          { role: 'system', content: SYSTEM_PROMPT },
          ...messages.filter((m) => m.role !== 'system'),
          userMessage,
        ];
        const reply = await callChatApi(apiMessages);
        setMessages((prev) => [...prev, { role: 'assistant', content: reply }]);
      } catch {
        setMessages((prev) => [...prev, { role: 'assistant', content: FALLBACK_REPLY }]);
      } finally {
        setIsLoading(false);
      }
    },
    [isLoading, messages],
  );

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        submitQuestion(input);
      }
    },
    [submitQuestion, input],
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
                <p className="text-[11px] text-purple-300/80">Free AI · Ollama · Groq · Gemini · HF · Cerebras · Cloudflare · DeepSeek · Cohere · OpenRouter</p>
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
                    onClick={() => submitQuestion(q)}
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
                onClick={() => submitQuestion(input)}
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
