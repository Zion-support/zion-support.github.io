'use client';
import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Bot, Loader2 } from 'lucide-react';

const QUICK_QUESTIONS = [
  'What AI services do you offer?',
  'How much does AI cost?',
  'Get a free consultation',
  'Show me your pricing'
];

export default function AIChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([{ id: '1', role: 'assistant', content: "Hi! I'm Zion's AI. How can I help you today?" }]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const messagesEnd = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => messagesEnd.current?.scrollIntoView({ behavior: 'smooth' });
  useEffect(() => { scrollToBottom(); }, [messages]);

  const handleSend = async (text?: string) => {
    const userText = text || input;
    if (!userText.trim()) return;
    
    const userMsg = { id: Date.now().toString(), role: 'user', content: userText };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setLoading(true);

    // Simulated AI response
    setTimeout(() => {
      const responses: Record<string, string> = {
        'service': 'We offer 200+ AI services including Machine Learning, NLP, Computer Vision, Voice AI, and more. Visit /ai to see all!',
        'cost': 'Our pricing starts at $499/mo for startups, $999/mo for professionals, and $2,499/mo for enterprise. Custom plans available.',
        'consultation': 'Great choice! Book a free consultation at /contact or call +1 (555) 123-4567.',
        'pricing': 'Check out our pricing at /pricing - flexible plans for businesses of all sizes!'
      };
      
      const lower = userText.toLowerCase();
      let response = "Thanks for your question! Our team will get back to you shortly. Visit ziontechgroup.com for more info.";
      
      for (const [key, val] of Object.entries(responses)) {
        if (lower.includes(key)) { response = val; break; }
      }
      
      setMessages(prev => [...prev, { id: Date.now().toString(), role: 'assistant', content: response }]);
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div initial={{ opacity: 0, y: 20, scale: 0.95 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 20, scale: 0.95 }} className="bg-slate-800 rounded-2xl shadow-2xl w-96 border border-slate-700 overflow-hidden mb-4">
            <div className="bg-gradient-to-r from-violet-600 to-indigo-600 p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Bot className="w-6 h-6 text-white" />
                <div>
                  <h3 className="text-white font-semibold">Zion AI Chat</h3>
                  <p className="text-white/70 text-xs">Online now</p>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)}><X className="w-5 h-5 text-white/80" /></button>
            </div>
            <div className="h-80 overflow-y-auto p-4 space-y-4">
              {messages.map(m => (
                <div key={m.id} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[80%] rounded-2xl px-4 py-2 ${m.role === 'user' ? 'bg-violet-600 text-white' : 'bg-slate-700 text-slate-200'}`}>
                    <p className="text-sm">{m.content}</p>
                  </div>
                </div>
              ))}
              {loading && <div className="flex justify-start"><div className="bg-slate-700 rounded-2xl px-4 py-2"><Loader2 className="w-5 h-5 text-violet-400 animate-spin" /></div></div>}
              <div ref={messagesEnd} />
            </div>
            {messages.length <= 2 && <div className="px-4 pb-2 flex flex-wrap gap-2">{QUICK_QUESTIONS.map((q, i) => <button key={i} onClick={() => handleSend(q)} className="text-xs bg-slate-700 hover:bg-slate-600 text-slate-200 px-3 py-1.5 rounded-full">{q}</button>)}</div>}
            <div className="p-4 border-t border-slate-700 flex gap-2">
              <input value={input} onChange={e => setInput(e.target.value)} onKeyPress={e => e.key === 'Enter' && handleSend()} placeholder="Ask anything..." className="flex-1 bg-slate-700 text-white px-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-violet-500" />
              <button onClick={() => handleSend()} disabled={!input.trim() || loading} className="p-2 bg-violet-600 hover:bg-violet-700 disabled:opacity-50 rounded-full"><Send className="w-5 h-5 text-white" /></button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={() => setIsOpen(!isOpen)} className={`w-14 h-14 bg-gradient-to-r from-violet-600 to-indigo-600 rounded-full shadow-lg flex items-center justify-center text-white ${isOpen ? 'hidden' : 'flex'}`}>
        {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
      </motion.button>
    </div>
  );
}
