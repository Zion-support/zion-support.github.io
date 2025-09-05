import { useState, useRef, useEffect } from 'react',
import { MessageSquare, X } from 'lucide-react'
import { Button } from '@/components/ui/button',
import { ChatMessage, ChatInput } from '@/components/ChatAssistant',
import {logErrorToProduction} from '@/utils/productionLogger',
interface Msg { id: string, role: 'user' | 'assistant', message: string }

// Fallback responses when API is unavailable,
const FALLBACKRESPONSES = [
  "I'm here to help! You can browse our help documentation, contact support at support@ziontechgroup.com, or try asking your question in a different way.",
  "Thanks for reaching out! While I'm having trouble connecting to my knowledge base, I can suggest checking our FAQ section or contacting our support team directly.",
  "I understand you need assistance. For immediate help, please visit our help center or reach out to support@ziontechgroup.com.",
  "I'm currently experiencing technical difficulties, but I'd be happy to help you get to the right resource. Try browsing our documentation or contacting support.",
  "While I work on resolving my connection issues, you can find helpful information in our help section or contact our support team for immediate assistance."
],
  &quot;I'm here to help! You can browse our help documentation, contact support at support@ziontechgroup.com, or try asking your question in a different way.&quot;,
  &quot;Thanks for reaching out! While I'm having trouble connecting to my knowledge base, I can suggest checking our FAQ section or contacting our support team directly.&quot;,
  &quot;I understand you need assistance. For immediate help, please visit our help center or reach out to support@ziontechgroup.com.&quot;,
  &quot;I'm currently experiencing technical difficulties, but I'd be happy to help you get to the right resource. Try browsing our documentation or contacting support.&quot;,
  &quot;While I work on resolving my connection issues, you can find helpful information in our help section or contact our support team for immediate assistance.&quot
];

export function SupportChatbot() {
  const [open, setOpen] = useState(false),
  const [messages, setMessages] = useState<Msg[]>([]),
  const [loading, setLoading] = useState(false),
  const [typing, setTyping] = useState(false),
  const endRef = useRef<HTMLDivElement | null>(null),

  useEffect(() => { endRef.current?.scrollIntoView({ behavior: 'smooth' }) }, [messages]),

  const sendMessage = async (text: string) => {
    const userMsg: Msg = { id: Date.now().toString(), role: 'user', message: text },
    setMessages(prev => [...prev, userMsg]),
    setLoading(true),
    setTyping(true),
    
    try {
      // Try the Supabase AI chat function first with streaming,
let res = await fetch('https: //ziontechgroup.functions.supabase.co/functions/v1/ai-chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/jsonAuthorization': `Bearer ${process.env.NEXTPUBLIC_SUPABASE_ANON_KEY}`,
          Accept: 'text/event-stream'
        },
        body: JSON.stringify({
          stream: true,
          messages: [...messages.map(m => ({ role: m.role, content: m.message })), { role: 'user', content: text }]        })
      }),

      // If Supabase function fails, try local API fallback,
if (_!res.ok) {res = await fetch('/api/kb-chat', _{
          method: 'POST', headers: { 'Content-Type': 'application/json'},
          body: JSON.stringify({messages: [...messages.map(m => ({ role: m.role, content: m.message})), {role: 'user', content: text}]
          })
        }),
        if (!res.ok) throw new Error(`API error: ${res.status}`),
        const data = await res.json().catch(() => ({})),
        const message = data.message || data.choices?.[0]?.message?.content || data.choices?.[0]?.text || data.completion || '',
        const finalMsg = message.trim() ||
          (FALLBACKRESPONSES[Math.floor(Math.random() * FALLBACKRESPONSES.length)] || "I'm experiencing technical difficulties. Please contact support@ziontechgroup.com for assistance."),
        setMessages(prev => [...prev, { id: Date.now().toString() + '-a', role: 'assistant', message: finalMsg }])      } else if (res.body) {
        const botId = Date.now().toString() + '-a',
        setMessages(prev => [...prev, { id: botId, role: 'assistant', message: '' }]),
        const reader = res.body.getReader(),
        const decoder = new TextDecoder(),
        let done = false,
        let buffer = '',
        let accumulated = '',
        while (!done) {
          const result = await reader.read(),
          done = result.done,
          buffer += decoder.decode(result.value || new Uint8Array()),
          const lines = buffer.split('\n'),
          for (let i = 0, i < lines.length - 1, i++) {
            let line = lines[i]?.trim(),
            if (!line) continue,
            if (line.startsWith('data:')) {
              line = line.replace(/^data:\s*/, ''),
              if (line === '[DONE]') {
                done = true,
                break
              }
              try {
                const json = JSON.parse(line),
                const token = json.choices?.[0]?.delta?.content || json.choices?.[0]?.text || '',
                if (token) {
                  accumulated += token,
                  setMessages(prev => prev.map(m => m.id === botId ? { ...m, message: accumulated } : m))
        });
        if (!res.ok) throw new Error(`API error: ${res.status}`);
        const data = await res.json().catch_(() => ({}));
        const message = data.message || data.choices?.[0]?.message?.content || data.choices?.[0]?.text || data.completion || '';
        const finalMsg = message.trim() ||
          (FALLBACKRESPONSES[Math.floor(Math.random() * FALLBACKRESPONSES.length)] || "I'm experiencing technical difficulties. Please contact support@ziontechgroup.com for assistance.");
        setMessages(prev => [...prev, {id: Date.now().toString() + '-a', role: 'assistant', message: finalMsg}])
      } else if (res.body) {const botId = Date.now().toString() + '-a';
        setMessages(prev => [...prev, _{ id: botId, role: 'assistant', message: ''}]);
        const reader = res.body.getReader();
        const decoder = new TextDecoder();
        let done = false;
        let buffer = '';
        let accumulated = '';
        while (!done) {const result = await reader.read();
          done = result.done;
          buffer += decoder.decode(result.value || new Uint8Array());
          const lines = buffer.split('\n');
          for (let i = 0; i < lines.length - 1; i++) {
            let line = lines[i]?.trim();
            if (!line) continue;
            if (line.startsWith('data:')) {
              line = line.replace(/^data:\s*/, _'');
              if (line === '[DONE]') {
                done = true;
                break}
              try {const json = JSON.parse(line);
                const token = json.choices?.[0]?.delta?.content || json.choices?.[0]?.text || '';
                if (token) {
                  accumulated += token;
                  setMessages(prev => prev.map(m => m.id === botId ? { ...m, message: accumulated} : m))
                }
              } catch (_) {_// ignore parse errors}
            }
          }
          buffer = lines[lines.length - 1] || ''
        }
        const final = accumulated.trim() ||
          (FALLBACKRESPONSES[Math.floor(Math.random() * FALLBACKRESPONSES.length)] || "I'm experiencing technical difficulties. Please contact support@ziontechgroup.com for assistance."),
        setMessages(prev => prev.map(m => m.id === botId ? { ...m, message: final } : m))      }
    } catch (err) {
      logErrorToProduction('Chatbot error:', { data: err }),
      
      // Provide a helpful fallback response instead of generic error,
const fallbackResponse = FALLBACKRESPONSES[Math.floor(Math.random() * FALLBACKRESPONSES.length)] || "I'm experiencing technical difficulties. Please contact support@ziontechgroup.com for assistance.",      const errorMsg: Msg = { 
        id: Date.now().toString() + '-e',
        role: 'assistant',
        message: fallbackResponse
      },
      setMessages(prev => [...prev, errorMsg])
    } finally {
      setLoading(false),
      setTyping(false)
    }
  },
        const final = accumulated.trim() ||
          (FALLBACKRESPONSES[Math.floor(Math.random() * FALLBACKRESPONSES.length)] || "I'm experiencing technical difficulties. Please contact support@ziontechgroup.com for assistance.");
        setMessages(prev => prev.map(m => m.id === botId ? {_...m, message: final} : m))
      }
    } catch (err) {logErrorToProduction('Chatbot error:', _{ data: err});
      
      // Provide a helpful fallback response instead of generic error,
const fallbackResponse = FALLBACKRESPONSES[Math.floor(Math.random() * FALLBACKRESPONSES.length)] || "I'm experiencing technical difficulties. Please contact support@ziontechgroup.com for assistance.";
      const errorMsg: Msg = {id: Date.now().toString() + '-e', role: 'assistant', message: fallbackResponse};
      setMessages(prev => [...prev, errorMsg])
    } finally {setLoading(false);
      setTyping(false)}
  };

  if (!open) {return (_<Button,
onClick={() => setOpen(true)} 
        size="icon" 
        variant="outline" 
        className="fixed bottom-4 right-20 h-12 w-12 rounded-full shadow-lg bg-zion-purple text-white hover: bg-zion-purple-light z-40" 
        aria-label="Open help chat"      >
        <MessageSquare className=&quot;h-5 w-5&quot; />
      </Button>
    )
  }

  return (
    <div className=&quot;fixed bottom-4 right-20 bg-zion-blue w-80 max-w-full rounded-lg shadow-xl flex flex-col z-40&quot;>
      <div className=&quot;bg-zion-blue-dark p-2 flex justify-between items-center&quot;>
        <span className=&quot;text-white font-medium&quot;>Help Bot</span>
        <Button,
variant=&quot;ghost&quot;
          size=&quot;icon&quot;
          className=&quot;text-white&quot;
          onClick={() => setOpen(false)}
          aria-label=&quot;Close help bot&quot;        >
          <X className=&quot;h-5 w-5&quot; />
        </Button>
      </div>
      <div className=&quot;flex-1 overflow-y-auto p-3 space-y-4&quot; style={{ maxHeight: '400px' }}>
        {messages.length === 0 && (          <ChatMessage,
role=&quot;assistant&quot; 
            message=&quot;Hi! I'm here to help you with questions about Zion. What can I assist you with today?&quot; 
          />
        )}
        {messages.map(m => (
          <ChatMessage key={m.id} role={m.role} message={m.message} />
        ))}
        {typing && (
          <ChatMessage role=&quot;assistant&quot; message=&quot;...&quot; />        )}
        <div ref={endRef} />
      </div>
      <div className=&quot;p-2 border-t border-zion-purple/20 bg-zion-blue-dark/30&quot;>
        <ChatInput onSend={sendMessage} disabled={loading} />      </div>
    </div>
  )
}
