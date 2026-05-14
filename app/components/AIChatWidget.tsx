'use client';

import { useState, useEffect, useRef, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Bot, Minimize2, ExternalLink, FileText, Phone, Mail, ChevronRight, Sparkles } from 'lucide-react';
import Link from 'next/link';
import { servicesData } from '../data/servicesData';
import type { Service } from '../data/servicesData';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
  actions?: Array<{ label: string; href: string; type: 'link' | 'proposal' }>;
}

type Intent =
  | 'pricing'
  | 'services'
  | 'proposal'
  | 'contact'
  | 'industry'
  | 'comparison'
  | 'security'
  | 'ai-tools'
  | 'demo'
  | 'general';

interface KnowledgePair {
  intent: Intent;
  keywords: string[];
  response: string;
  quickReplies?: string[];
}

const KNOWLEDGE: KnowledgePair[] = [
  {
    intent: 'pricing',
    keywords: ['price', 'cost', 'budget', 'how much', 'pricing', 'rates', 'fee', 'pay'],
    response: 'Our AI & IT services start at **$299/month** for Standard, **$799/month** for Premium, and **$2,499/month** for Enterprise. The exact price depends on your needs. Want me to estimate your project?',
    quickReplies: ['Show pricing calculator', 'Get a custom proposal'],
  },
  {
    intent: 'services',
    keywords: ['service', 'services', 'offer', 'solutions', 'what do you do', 'capabilities'],
    response: `We offer **${servicesData.allServices.length} AI & IT services** across analytics, automation, security, and compliance. Popular categories:\n• AI Services (${servicesData.aiServices.length})\n• IT Solutions (${servicesData.itServices.length})\n\nTake our quiz to find the right one, or browse the catalog.`,
    quickReplies: ['Browse all services', 'Take the quiz'],
  },
  {
    intent: 'proposal',
    keywords: ['proposal', 'quote', 'estimate', 'pdf', 'sales'],
    response: 'I can generate a detailed proposal with pricing and SLA terms. Just tell me which service(s) you need — or use our proposal generator:',
    quickReplies: ['Generate proposal now'],
  },
  {
    intent: 'contact',
    keywords: ['contact', 'email', 'phone', 'call', 'support', 'help'],
    response: 'Reach us directly:\n📞 **+1 302 464 0950**\n✉️ **kleber@ziontechgroup.com**\n📍 364 E Main St STE 1008, Middletown, DE 19709\n\nOur team is available Mon–Fri, 9am–6pm ET.',
    quickReplies: ['Schedule a call', 'Send an email inquiry'],
  },
  {
    intent: 'industry',
    keywords: ['industry', 'vertical', 'healthcare', 'finance', 'retail', 'manufacturing', 'education'],
    response: 'We serve all major verticals with tailored AI/IT solutions. Popular industries: Healthcare (HIPAA + patient AI), Finance (fraud detection + compliance), Retail (recommendation engines), Manufacturing (predictive maintenance). Need industry-specific advice?',
    quickReplies: ['Show healthcare services', 'Show finance solutions'],
  },
  {
    intent: 'comparison',
    keywords: ['compare', 'difference', 'vs', 'versus', 'which is better', 'side by side'],
    response: 'Use our comparison tool to see features, benefits, and pricing across up to 4 services side-by-side.',
    quickReplies: ['Compare services now'],
  },
  {
    intent: 'security',
    keywords: ['security', 'privacy', 'compliance', 'hipaa', 'gdpr', 'audit'],
    response: 'All our services comply with SOC 2, ISO 27001, GDPR, and HIPAA (where applicable). Explore our security-focused AI solutions — I can show you the top ones.',
    quickReplies: ['Show security services'],
  },
  {
    intent: 'ai-tools',
    keywords: ['ai tool', 'tool', 'calculator', 'generator', 'utility'],
    response: `We've built several free AI-powered tools:\n• Pricing Calculator\n• Proposal Generator (PDF)\n• Service Comparison\n• Service Recommender Quiz\n\nAll on ziontechgroup.com/tools`,
    quickReplies: ['Go to tools page'],
  },
  {
    intent: 'demo',
    keywords: ['demo', 'trial', 'see it in action', 'how it works'],
    response: 'Book a free personalized demo at ziontechgroup.com/demo, or try our AI tools instantly — no signup required!',
    quickReplies: ['Book a demo'],
  },
  {
    intent: 'general',
    keywords: ['hello', 'hi', 'hey', 'help', 'start'],
    response: "Hi! I'm **ZionBot**, your AI assistant. I can help you explore our 170+ services, answer pricing questions, generate proposals, or connect you with our team. What would you like to know?",
    quickReplies: ['View services', 'Get pricing', 'Talk to human'],
  },
];

export default function AIChatWidget({ position = 'bottom-right', primaryColor = 'violet' }: { position?: 'bottom-right' | 'bottom-left'; primaryColor?: string }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      role: 'assistant',
      content: "Hello! 👋 I'm **ZionBot**, your AI assistant. How can I help you today?",
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [showQuickReplies, setShowQuickReplies] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const colorClasses = {
    violet: 'from-violet-600 to-indigo-600',
    blue: 'from-blue-600 to-cyan-600',
    green: 'from-green-600 to-emerald-600',
    amber: 'from-amber-600 to-orange-600',
  };
  const gradient = colorClasses[primaryColor as keyof typeof colorClasses] || colorClasses.violet;

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  const detectIntent = (text: string): Intent => {
    const lower = text.toLowerCase();
    for (const pair of KNOWLEDGE) {
      if (pair.keywords.some(k => lower.includes(k))) return pair.intent;
    }
    return 'general';
  };

  const generateResponse = (query: string): { text: string; actions?: Message['actions']; quickReplies?: string[] } => {
    const lower = query.toLowerCase();
    const intent = detectIntent(query);
    const pair = KNOWLEDGE.find(p => p.intent === intent);

    let text = pair?.response || KNOWLEDGE[KNOWLEDGE.length - 1].response;

    // Add contextual suggestions if user asks about specific services
    if (lower.includes('ai analytics') || lower.includes('analytics')) {
      text += '\n\nTry our **AI Analytics & BI** service — from $299/mo.';
    }

    // Pricing intent — show tool link
    if (intent === 'pricing') {
      return {
        text,
        actions: [
          { label: 'Open Pricing Calculator →', href: '/pricing-calculator', type: 'link' },
          { label: 'Generate Proposal', href: '/proposal-generator', type: 'proposal' },
        ],
        quickReplies: pair?.quickReplies,
      };
    }

    // Services intent — show catalog link
    if (intent === 'services') {
      return {
        text,
        actions: [
          { label: 'Browse All Services →', href: '/search', type: 'link' },
          { label: 'Take the Quiz', href: '/tools/service-recommender', type: 'link' },
        ],
        quickReplies: pair?.quickReplies,
      };
    }

    // Proposal intent
    if (intent === 'proposal') {
      return {
        text,
        actions: [{ label: 'Generate Your Proposal →', href: '/proposal-generator', type: 'proposal' }],
        quickReplies: pair?.quickReplies,
      };
    }

    // Contact intent
    if (intent === 'contact') {
      return {
        text,
        actions: [
          { label: '📞 Call +1 302 464 0950', href: 'tel:+13024640950', type: 'link' },
          { label: '✉️ Email Us', href: 'mailto:kleber@ziontechgroup.com', type: 'link' },
        ],
      };
    }

    // Comparison intent
    if (intent === 'comparison') {
      return {
        text,
        actions: [{ label: 'Compare Services →', href: '/tools/service-comparison', type: 'link' }],
        quickReplies: pair?.quickReplies,
      };
    }

    // AI tools intent
    if (intent === 'ai-tools') {
      return {
        text,
        actions: [{ label: 'Open Tools Page →', href: '/tools', type: 'link' }],
      };
    }

    // Industry-specific — show relevant services
    if (intent === 'industry') {
      const category = lower.includes('healthcare') ? 'ai' : 'it';
      const sample = servicesData.allServices.filter(s => s.category === category).slice(0, 2);
      text += `\n\n**Recommended:** ${sample.map(s => `${s.icon} ${s.title}`).join(', ')}`;
    }

    return { text, actions: undefined, quickReplies: pair?.quickReplies };
  };

  const handleSend = async (text?: string) => {
    const messageText = text || input.trim();
    if (!messageText) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: messageText,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setShowQuickReplies(false);
    setIsTyping(true);

    // Simulated AI latency
    setTimeout(() => {
      const { text: responseText, actions, quickReplies } = generateResponse(messageText);
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: responseText,
        timestamp: new Date(),
        actions,
      };
      setMessages(prev => [...prev, assistantMessage]);
      setIsTyping(false);

      // Optionally show quick replies after response
      if (quickReplies && quickReplies.length) {
        // Quick replies are inline buttons below the message
      }
    }, 700 + Math.random() * 600);
  };

  // Quick reply buttons render
  const renderQuickReplies = (msg: Message) => {
    const lower = msg.content.toLowerCase();
    const intent = detectIntent(msg.content);
    const pair = KNOWLEDGE.find(p => p.intent === intent);
    if (!pair?.quickReplies || msg.role !== 'assistant') return null;

    return (
      <div className="flex flex-wrap gap-2 mt-2">
        {pair.quickReplies.map((qr, i) => (
          <button
            key={i}
            onClick={() => handleSend(qr)}
            className="text-xs px-3 py-1.5 bg-violet-50 text-violet-700 rounded-full border border-violet-200 hover:bg-violet-100 transition flex items-center gap-1"
          >
            {qr} <ChevronRight className="w-3 h-3" />
          </button>
        ))}
      </div>
    );
  };

  return (
    <div className={`fixed ${position === 'bottom-right' ? 'bottom-6 right-6' : 'bottom-6 left-6'} z-50`}>
      <AnimatePresence>
        {isOpen && !isMinimized && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800 rounded-2xl shadow-2xl w-[380px] h-[520px] flex flex-col overflow-hidden border border-slate-700"
          >
            {/* Header */}
            <div className={`bg-gradient-to-r ${gradient} p-4 flex items-center justify-between shrink-0`}>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <Bot className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-semibold flex items-center gap-2">
                    ZionBot
                    <span className="bg-white/20 text-[10px] px-2 py-0.5 rounded-full flex items-center gap-1">
                      <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                      Online
                    </span>
                  </h3>
                  <p className="text-white/70 text-xs">Typically replies in seconds</p>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <button onClick={() => setIsMinimized(true)} className="p-1.5 text-white/80 hover:text-white hover:bg-white/10 rounded-lg transition">
                  <Minimize2 className="w-4 h-4" />
                </button>
                <button onClick={() => setIsOpen(false)} className="p-1.5 text-white/80 hover:text-white hover:bg-white/10 rounded-lg transition">
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((msg) => (
                <motion.div key={msg.id} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[85%] rounded-2xl px-4 py-3 ${msg.role === 'user' ? `bg-gradient-to-r ${gradient} text-white` : 'bg-slate-700/50 text-slate-100'}`}>
                    <p className="text-sm whitespace-pre-line">{msg.content}</p>
                    <p className={`text-xs mt-1 ${msg.role === 'user' ? 'text-white/60' : 'text-slate-500'}`}>{msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</p>
                  </div>
                </motion.div>
              ))}

              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-slate-700/50 rounded-2xl px-4 py-3 flex items-center gap-1">
                    <motion.div animate={{ opacity: [0.4, 1, 0.4] }} transition={{ repeat: Infinity, duration: 1.5 }} className="w-2 h-2 bg-violet-400 rounded-full" />
                    <motion.div animate={{ opacity: [0.4, 1, 0.4] }} transition={{ repeat: Infinity, duration: 1.5, delay: 0.2 }} className="w-2 h-2 bg-violet-400 rounded-full" />
                    <motion.div animate={{ opacity: [0.4, 1, 0.4] }} transition={{ repeat: Infinity, duration: 1.5, delay: 0.4 }} className="w-2 h-2 bg-violet-400 rounded-full" />
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Quick action buttons under assistant messages */}
            {!isTyping && messages.length > 1 && (() => {
              const last = messages[messages.length - 1];
              if (last.role !== 'assistant') return null;
              return renderQuickReplies(last);
            })()}

            {/* Action buttons */}
            {!isTyping && messages.length > 1 && (() => {
              const last = messages[messages.length - 1];
              if (last.role !== 'assistant' || !last.actions) return null;
              return (
                <div className="px-4 pb-2 flex flex-col gap-2">
                  {last.actions.map((act, i) => (
                    act.type === 'link' ? (
                      <a key={i} href={act.href} target="_self" className="text-xs flex items-center justify-between px-3 py-2 bg-violet-50 text-violet-700 rounded-lg border border-violet-200 hover:bg-violet-100 transition">
                        <span>{act.label.replace(/→|>\s*/, '')}</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    ) : (
                      <a key={i} href={act.href} className="text-xs flex items-center justify-between px-3 py-2 bg-green-50 text-green-700 rounded-lg border border-green-200 hover:bg-green-100 transition">
                        <span>{act.label.replace(/→|>\s*/, '')}</span>
                        <FileText className="w-3 h-3" />
                      </a>
                    )
                  ))}
                </div>
              );
            })()}

            {/* Input */}
            <div className="p-4 border-t border-slate-700 shrink-0">
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={e => setInput(e.target.value)}
                  onKeyDown={e => e.key === 'Enter' && handleSend()}
                  placeholder="Type your message..."
                  className="flex-1 bg-slate-700/50 text-white placeholder-slate-400 px-4 py-2.5 rounded-full focus:outline-none focus:ring-2 focus:ring-violet-500 text-sm"
                />
                <button onClick={() => handleSend()} disabled={!input.trim()} className={`p-2.5 bg-gradient-to-r ${gradient} text-white rounded-full hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed transition-all`}>
                  <Send className="w-5 h-5" />
                </button>
              </div>
              {/* Quick contact */}
              <div className="flex items-center justify-between mt-2 px-1">
                <a href="tel:+13024640950" className="inline-flex items-center gap-1 text-xs text-slate-500 hover:text-violet-400">
                  <Phone className="w-3 h-3" /> Call
                </a>
                <a href="mailto:kleber@ziontechgroup.com" className="inline-flex items-center gap-1 text-xs text-slate-500 hover:text-violet-400">
                  <Mail className="w-3 h-3" /> Email
                </a>
                <a href="/tools" className="inline-flex items-center gap-1 text-xs text-slate-500 hover:text-violet-400">
                  <Sparkles className="w-3 h-3" /> AI Tools
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Minimized / Closed State */}
      {isOpen && isMinimized && (
        <motion.button initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} onClick={() => setIsMinimized(false)} className={`w-14 h-14 bg-gradient-to-r ${gradient} rounded-full shadow-lg flex items-center justify-center text-white mb-3`}>
          <MessageCircle className="w-6 h-6" />
        </motion.button>
      )}
      {!isOpen && (
        <motion.button initial={{ scale: 0 }} animate={{ scale: 1 }} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={() => setIsOpen(true)} className={`w-14 h-14 bg-gradient-to-r ${gradient} rounded-full shadow-lg flex items-center justify-center text-white`}>
          <MessageCircle className="w-6 h-6" />
        </motion.button>
      )}
    </div>
  );
}
