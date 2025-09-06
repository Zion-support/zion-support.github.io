<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import { useState, useRef, useEffect  } from 'react';
import { MessageSquare, X } from 'lucide-react'
import { Button  } from '@/components/ui/button';
import { ChatMessage, ChatInput  } from '@/components/ChatAssistant';
import {logErrorToProduction} from '@/utils/productionLogger';
=======
=======
}
    set_messages (prev => [...prev, user_msg]);
    set_loading (true);
    set_typing (true);
    try {

      // Try the Supabase AI chat function first with streaming;
      let res = await fetch (
        'https://ziontechgroup.functions.supabase.co / functions / v1 / ai - chat',

        {
          method: 'POST'
          headers: {


>>>>>>> main
import { useState, useRef, useEffect } from 'react'
import { MessageSquare, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ChatMessage, ChatInput } from '@/components/ChatAssistant'
import { logErrorToProduction } from '@/utils/productionLogger'
interface Msg {
  id: string
  role: 'user' | 'assistant'
  message: string
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
=======

>>>>>>> main
import { useState, useRef, useEffect } from 'react';
import { MessageSquare, X } from 'lucide-react';
import { Button } from '@/components/ui/button',;
import { ChatMessage, ChatInput } from '@/components/ChatAssistant',;
import {logErrorToProduction} from '@/utils/productionLogger',;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
interface Msg { id: string, role: 'user' | 'assistant', message: string }

<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
// Fallback responses when API is unavailable

const FALLBACK_RESPONSES = [
<<<<<<< HEAD
<<<<<<< HEAD
  "I'm here to help! You can browse our help documentation, contact support at support@ziontechgroup.com, or try asking your question in a different way."
  "Thanks for reaching out! While I'm having trouble connecting to my knowledge base, I can suggest checking our FAQ section or contacting our support team directly."
  'I understand you need assistance. For immediate help, please visit our help center or reach out to support@ziontechgroup.com.'
  "I'm currently experiencing technical difficulties, but I'd be happy to help you get to the right resource. Try browsing our documentation or contacting support."
  'While I work on resolving my connection issues, you can find helpful information in our help section or contact our support team for immediate assistance.'
=======
=======

interface Msg { id: string, role: 'user' | 'assistant', message: string }



// Fallback responses when API is unavailable

const FALLBACK_RESPONSES = [

>>>>>>> main
  "I'm here to help! You can browse our help documentation, contact support at support@ziontechgroup.com, or try asking your question in a different way.",
  "Thanks for reaching out! While I'm having trouble connecting to my knowledge base, I can suggest checking our FAQ section or contacting our support team directly.",
  "I understand you need assistance. For immediate help, please visit our help center or reach out to support@ziontechgroup.com.",
  "I'm currently experiencing technical difficulties, but I'd be happy to help you get to the right resource. Try browsing our documentation or contacting support.",
<<<<<<< HEAD
<<<<<<< HEAD
  'While I work on resolving my connection issues, you can find helpful information in our help section or contact our support team for immediate assistance.',
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
]
export function SupportChatbot() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState<Msg[]>([])
  const [loading, setLoading] = useState(false)
  const [typing, setTyping] = useState(false)
  const endRef = useRef<HTMLDivElement | null>(null)
  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])
  const sendMessage = async (text: string) => {
    const userMsg: Msg = {
      id: Date.now().toString()
      role: 'user'
      message: text
    }
    setMessages(prev => [...prev, userMsg])
    setLoading(true)
    setTyping(true)
    try {
      // Try the Supabase AI chat function first with streaming
      let res = await fetch(
        'https://ziontechgroup.functions.supabase.co/functions/v1/ai-chat'
        {
          method: 'POST'
          headers: {
            'Content-Type': 'application/json'
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY}`
            Accept: 'text/event-stream'
          }
          body: JSON.stringify({
            stream: true
            messages: [
              ...messages.map(m => ({ role: m.role, content: m.message }))
              { role: 'user', content: text }
            ]
          })
        }
      )
=======
<<<<<<< HEAD
  "I'm here to help! You can browse our help documentation, contact support at support@ziontechgroup.com, or try asking your question in a different way.",
  "Thanks for reaching out! While I'm having trouble connecting to my knowledge base, I can suggest checking our FAQ section or contacting our support team directly.",
  "I understand you need assistance. For immediate help, please visit our help center or reach out to support@ziontechgroup.com.",
  "I'm currently experiencing technical difficulties, but I'd be happy to help you get to the right resource. Try browsing our documentation or contacting support.",
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  "While I work on resolving my connection issues, you can find helpful information in our help section or contact our support team for immediate assistance."
],

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
      // Try the Supabase AI chat function first with streaming
      let res = await fetch('https://ziontechgroup.functions.supabase.co/functions/v1/ai-chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/jsonAuthorization': `Bearer ${process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY}`,
          Accept: 'text/event-stream'
        },
        body: JSON.stringify({
          stream: true,
          messages: [...messages.map(m => ({ role: m.role, content: m.message })), { role: 'user', content: text }]
        })
      }),

<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======

>>>>>>> main
      // If Supabase function fails, try local API fallback
      if (!res.ok) {
        res = await fetch('/api/kb-chat', {
          method: 'POST'
          headers: { 'Content-Type': 'application/json' }
          body: JSON.stringify({
<<<<<<< HEAD
<<<<<<< HEAD
            messages: [
              ...messages.map(m => ({ role: m.role, content: m.message }))
              { role: 'user', content: text }
            ]
          })
        })
        if (!res.ok) throw new Error(`API error: ${res.status}`)
        const data = await res.json().catch(() => ({}))
<<<<<<< HEAD
        const message =
          data.message |
          data.choices?.[0]?.message?.content |
          data.choices?.[0]?.text |
          data.completion |
          ''
        const finalMsg =
          message.trim() |
=======
=======


>>>>>>> main
        const message = null;
          data.message ||
          data.choices?.[0]?.message?.content ||
          data.choices?.[0]?.text ||
          data.completion ||
          ''
        const finalMsg = null;
          message.trim() ||
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======


>>>>>>> main
          FALLBACK_RESPONSES[
            Math.floor(Math.random() * FALLBACK_RESPONSES.length)
          ] |
          "I'm experiencing technical difficulties. Please contact support@ziontechgroup.com for assistance."
        setMessages(prev => [
          ...prev
          {
            id: Date.now().toString() + '-a'
            role: 'assistant'
            message: finalMsg
          }
        ]) } else if (res.body) {
        const botId = Date.now().toString() + '-a'
        setMessages(prev => [
          ...prev
          { id: botId, role: 'assistant', message: '' }
        ])
        const reader = res.body.getReader()
        const decoder = new TextDecoder()
        let done = false
        let buffer = ''
        let accumulated = ''
        while (!done) {
<<<<<<< HEAD
<<<<<<< HEAD
          const result = await reader.read()
          done = result.done
          buffer += decoder.decode(result.value |new Uint8Array())
          const lines = buffer.split('\n')
=======
=======


>>>>>>> main
          const result = await reader.read();
          done = result.done;
          buffer += decoder.decode(result.value || new Uint8Array());
          const lines = buffer.split('\n');
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======


>>>>>>> main
          for (let i = 0; i < lines.length - 1; i++) {
            let line = lines[i]?.trim()
            if (!line) continue
            if (line.startsWith('data:')) {
              line = line.replace(/^data:\s*/, '')
              if (line === '[DONE]') {
                done = true
                break
              }
              try {
                const json = JSON.parse(line)
<<<<<<< HEAD
<<<<<<< HEAD
                const token =
                  json.choices?.[0]?.delta?.content |
                  json.choices?.[0]?.text |
=======
                const token = null;
                  json.choices?.[0]?.delta?.content ||
                  json.choices?.[0]?.text ||
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======


                const token = null;
                  json.choices?.[0]?.delta?.content ||
                  json.choices?.[0]?.text ||


>>>>>>> main
                  ''
                if (token) {
                  accumulated += token
                  setMessages(prev =>
                    prev.map(m =>
                      m.id === botId ? { ...m, message: accumulated } : m
                    )
                  )
<<<<<<< HEAD
=======
            messages: [...messages.map(m => ({ role: m.role, content: m.message })), { role: 'user', content: text }]
          })
        }),
        if (!res.ok) throw new Error(`API error: ${res.status}`),
        const data = await res.json().catch(() => ({})),
        const message = data.message || data.choices?.[0]?.message?.content || data.choices?.[0]?.text || data.completion || '',
        const finalMsg = message.trim() ||
          (FALLBACK_RESPONSES[Math.floor(Math.random() * FALLBACK_RESPONSES.length)] || "I'm experiencing technical difficulties. Please contact support@ziontechgroup.com for assistance."),
        setMessages(prev => [...prev, { id: Date.now().toString() + '-a', role: 'assistant', message: finalMsg }])
      } else if (res.body) {
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
;
// Fallback responses when API is unavailable;
const FALLBACK_RESPONSES = [;
  "I'm here to help! You can browse our help documentation, contact support at support@ziontechgroup.com, or try asking your question in a different way.",;
  "Thanks for reaching out! While I'm having trouble connecting to my knowledge base, I can suggest checking our FAQ section or contacting our support team directly.",;
  "I understand you need assistance. For immediate help, please visit our help center or reach out to support@ziontechgroup.com.",;
  "I'm currently experiencing technical difficulties, but I'd be happy to help you get to the right resource. Try browsing our documentation or contacting support.",;
  "While I work on resolving my connection issues, you can find helpful information in our help section or contact our support team for immediate assistance.";
],;
export function SupportChatbot() {;
  const [open, setOpen] = useState(false),;
  const [messages, setMessages] = useState<Msg[]>([]),;
  const [loading, setLoading] = useState(false),;
  const [typing, setTyping] = useState(false),;
  const endRef = useRef<HTMLDivElement | null>(null),;
  useEffect(() => { endRef.current?.scrollIntoView({ behavior: 'smooth' }) }, [messages]),;
  const sendMessage = async (text: string) => {;
    const userMsg: Msg = { id: Date.now().toString(), role: 'user', message: text },;
    setMessages(prev => [...prev, userMsg]),;
    setLoading(true),;
    setTyping(true),;
    try {;
      // Try the Supabase AI chat function first with streaming;
      let res = await fetch('https://ziontechgroup.functions.supabase.co/functions/v1/ai-chat', {;
        method: 'POST',;
        headers: {;
          'Content-Type': 'application/jsonAuthorization': `Bearer ${process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY}`,;
          Accept: 'text/event-stream';
        },;
        body: JSON.stringify({;
          stream: true,;
          messages: [...messages.map(m => ({ role: m.role, content: m.message })), { role: 'user', content: text }];
        });
      }),;
      // If Supabase function fails, try local API fallback;
      if (!res.ok) {;
        res = await fetch('/api/kb-chat', {;
          method: 'POST',;
          headers: { 'Content-Type': 'application/json' },;
          body: JSON.stringify({;
            messages: [...messages.map(m => ({ role: m.role, content: m.message })), { role: 'user', content: text }];
          });
        }),;
        if (!res.ok) throw new Error(`API error: ${res.status}`),;
        const data = await res.json().catch(() => ({})),;
        const message = data.message || data.choices?.[0]?.message?.content || data.choices?.[0]?.text || data.completion || '',;
        const finalMsg = message.trim() ||;
          (FALLBACK_RESPONSES[Math.floor(Math.random() * FALLBACK_RESPONSES.length)] || "I'm experiencing technical difficulties. Please contact support@ziontechgroup.com for assistance."),;
        setMessages(prev => [...prev, { id: Date.now().toString() + '-a', role: 'assistant', message: finalMsg }]);
      } else if (res.body) {;
        const botId = Date.now().toString() + '-a',;
        setMessages(prev => [...prev, { id: botId, role: 'assistant', message: '' }]),;
        const reader = res.body.getReader(),;
        const decoder = new TextDecoder(),;
        let done = false,;
        let buffer = '',;
        let accumulated = '',;
        while (!done) {;
          const result = await reader.read(),;
          done = result.done,;
          buffer += decoder.decode(result.value || new Uint8Array()),;
          const lines = buffer.split('\n'),;
          for (let i = 0, i < lines.length - 1, i++) {;
            let line = lines[i]?.trim(),;
            if (!line) continue,;
            if (line.startsWith('data:')) {;
              line = line.replace(/^data:\s*/, ''),;
              if (line === '[DONE]') {;
                done = true,;
                break;
              }
              try {;
                const json = JSON.parse(line),;
                const token = json.choices?.[0]?.delta?.content || json.choices?.[0]?.text || '',;
                if (token) {;
                  accumulated += token,;
                  setMessages(prev => prev.map(m => m.id === botId ? { ...m, message: accumulated } : m));
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
                }
              } catch (_) {
                // ignore parse errors
              }
            }
          }
          buffer = lines[lines.length - 1] |''
        }
<<<<<<< HEAD
<<<<<<< HEAD
        const final =
          accumulated.trim() |
=======
        const final = null;
          accumulated.trim() ||
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
interface Msg {;
  id: string;
  role: 'user' | 'assistant';
  message: string;
// Fallback responses when API is unavailable;
const FALLBACK_RESPONSES = [;
  "I'm here to help! You can browse our help documentation, contact support at support@ziontechgroup && ziontechgroup.com, or try asking your question in a different way.",;
  "Thanks for reaching out! While I'm having trouble connecting to my knowledge base, I can suggest checking our FAQ section or contacting our support team directly.",;
  'I understand you need assistance. For immediate help, please visit our help center or reach out to support@ziontechgroup && ziontechgroup.com.',;
  "I'm currently experiencing technical difficulties, but I'd be happy to help you get to the right resource. Try browsing our documentation or contacting support.",;
  'While I work on resolving my connection issues, you can find helpful information in our help section or contact our support team for immediate assistance.',;
];

export function SupportChatbot() {;
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Msg[]>([]);
  const [loading, setLoading] = useState(false);
  const [typing, setTyping] = useState(false);
  const endRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {;
    endRef && endRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const sendMessage = async (text: string) => {;
    const userMsg: Msg = {;
      id: Date && Date.now().toString(),;
      role: 'user',;
      message: text,;
    };
    setMessages(prev => [...prev, userMsg]);
    setLoading(true);
    setTyping(true);
    try {;
      // Try the Supabase AI chat function first with streaming;
      let res = await fetch(;
        'https://ziontechgroup && ziontechgroup.functions.supabase && supabase.co/functions/v1/ai-chat',;
        {;
          method: 'POST',;
          headers: {;
            'Content-Type': 'application/json',;
            Authorization: `Bearer ${process && process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY}`,;
            Accept: 'text/event-stream',;
          },;
          body: JSON && JSON.stringify({;
            stream: true,;
            messages: [;
              ...messages && messages.map(m => ({ role: m && m.role, content: m && m.message })),;
              { role: 'user', content: text },;
            ],;
          }),;
        }
      );

      // If Supabase function fails, try local API fallback;
      if (!res && res.ok) {;
        res = await fetch('/api/kb-chat', {;
          method: 'POST',;
          headers: { 'Content-Type': 'application/json' },;
          body: JSON && JSON.stringify({;
            messages: [;
              ...messages && messages.map(m => ({ role: m && m.role, content: m && m.message })),;
              { role: 'user', content: text },;
            ],;
          }),;
        });
        if (!res && res.ok) throw new Error(`API error: ${res && res.status}`);
        const data = await res && res.json().catch(() => ({}));
        const message =;
          data && data.message ||;
          data && data.choices?.[0]?.message?.content ||;
          data && data.choices?.[0]?.text ||;
          data && data.completion ||;
          '';
        const finalMsg =;
          message && message.trim() ||;
          FALLBACK_RESPONSES[;
            Math && Math.floor(Math && Math.random() * FALLBACK_RESPONSES && FALLBACK_RESPONSES.length);
          ] ||;
          "I'm experiencing technical difficulties. Please contact support@ziontechgroup && ziontechgroup.com for assistance.";
        setMessages(prev => [;
          ...prev,;
          {;
            id: Date && Date.now().toString() + '-a',;
            role: 'assistant',;
            message: finalMsg,;
          },;
        ]);      } else if (res && res.body) {;
        const botId = Date && Date.now().toString() + '-a';
        setMessages(prev => [;
          ...prev,;
          { id: botId, role: 'assistant', message: '' },;
        ]);
        const reader = res && res.body.getReader();
        const decoder = new TextDecoder();
        let done = false;
        let buffer = '';
        let accumulated = '';
        while (!done) {;
          const result = await reader && reader.read();
          done = result && result.done;
          buffer += decoder && decoder.decode(result && result.value || new Uint8Array());
          const lines = buffer && buffer.split('\n');
          for (let i = 0; i < lines && lines.length - 1; i++) {;
            let line = lines[i]?.trim();
            if (!line) continue;
            if (line && line.startsWith('data:')) {;
              line = line && line.replace(/^data:\s*/, '');
              if (line === '[DONE]') {;
                done = true;
                break;
              }
              try {;
                const json = JSON && JSON.parse(line);
                const token =;
                  json && json.choices?.[0]?.delta?.content ||;
                  json && json.choices?.[0]?.text ||;
                  '';
                if (token) {;

            'Content - Type': 'application / json',
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY}`,
            Accept: 'text / event - stream',
          },
          body: JSON.stringify ({
            stream: true,
            messages: [;
              ...messages.map (m => ({ role: m.role, content: m.message })),
              { role: 'user', content: text },
            ],
          }),
        }
      );
      // If Supabase function fails, try local API fallback;
      // Check condition
if ( {) {
  $2
}
        res = await fetch ('/api / kb - chat', {
          method: 'POST',
          headers: { 'Content - Type': 'application / json' },
          body: JSON.stringify ({
            messages: [;
              ...messages.map (m => ({ role: m.role, content: m.message })),
              { role: 'user', content: text },
            ],
          }),
        });
        if (throw new Error (`API error: ${res.status}`)) {
  $2
}
        const data = await res.json ().catch (() => ({}));
        const message =;
          data.message ||;
          data.choices?.[0]?.message?.content ||;
          data.choices?.[0]?.text ||;
          data.completion ||;
          '';
        const final_msg =;
          message.trim () ||;
          FALLBACK_RESPONSES[;
            Math.floor (Math.random () * FALLBACK_RESPONSES.length);
          ] ||;
          "I'm experiencing technical difficulties. Please contact support@ziontechgroup.com for assistance.";
        set_messages (prev => [;
          ...prev,
          {
            id: Date.now ().to_string () + '-a',
            role: 'assistant',
            message: final_msg,
          },
        ]) } else // Check condition
if ( {) {
  $2
}
        const bot_id = Date.now ().to_string () + '-a';
        set_messages (prev => [;
          ...prev,
          { id: bot_id, role: 'assistant', message: '' },
        ]);
        const reader = res.body.get_reader ();
        const decoder = new TextDecoder ();
        let done = false;
        let buffer = '';
        let accumulated = '';
        while (!done) {
          const result = await reader.read ();
          done = result.done;
          buffer += decoder.decode (result.value || new Uint8Array ());
          const lines = buffer.split ('\n');
          for (let index = 0; i < lines.length - 1; i++) {
            let line = lines[i]?.trim ();
            // Check condition
if (continue) {
  $2
}
            if () {) {
  $2
}
              line = line.replace (/^data:\s*/, '');
              // Check condition
if ( {) {
  $2
}
                done = true;
                break;
              }
              try {
                const json = JSON.parse (line);
                const token =;
                  json.choices?.[0]?.delta?.content ||;
                  json.choices?.[0]?.text ||;
                  '';
                // Check condition
if ( {) {
  $2
}
                  accumulated += token;
                  set_messages (prev =>;
                    prev.map (m =>;
                      m.id === bot_id ? { ...m, message: accumulated } : m));
                  accumulated += token,;
                  setMessages(prev => prev.map(m => m.id === botId ? { ...m, message: accumulated } : m));



                }
              } catch (_) {
                // ignore parse errors;
              }
            }
          }


        const final = null;
          accumulated.trim() ||


>>>>>>> main
          FALLBACK_RESPONSES[
            Math.floor(Math.random() * FALLBACK_RESPONSES.length)
          ] |
          "I'm experiencing technical difficulties. Please contact support@ziontechgroup.com for assistance."
        setMessages(prev =>
          prev.map(m => (m.id === botId ? { ...m, message: final } : m))
        )
      }
    } catch (err) {
      logErrorToProduction('Chatbot error:', { data: err })
      // Provide a helpful fallback response instead of generic error
<<<<<<< HEAD
      const fallbackResponse = null;
=======
      const fallbackResponse =
>>>>>>> main
        FALLBACK_RESPONSES[
          Math.floor(Math.random() * FALLBACK_RESPONSES.length)
        ] |
        "I'm experiencing technical difficulties. Please contact support@ziontechgroup.com for assistance."
      const errorMsg: Msg = {
        id: Date.now().toString() + '-e'
        role: 'assistant'
        message: fallbackResponse
<<<<<<< HEAD
=======

          buffer = lines[lines.length - 1] || '';
        }
        const final =;
          accumulated.trim () ||;
          FALLBACK_RESPONSES[;
            Math.floor (Math.random () * FALLBACK_RESPONSES.length);
          ] ||;
          "I'm experiencing technical difficulties. Please contact support@ziontechgroup.com for assistance.";
        set_messages (prev =>;
          prev.map (m => (m.id === bot_id ? { ...m, message: final } : m)));
>>>>>>> main
      }
      setMessages(prev => [...prev, errorMsg])
    } finally {
      setLoading(false)
      setTyping(false)
    }
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======

>>>>>>> main
  }
  if (!open) {
    
        onClick={() => setOpen(true)}
        size='icon'
        variant='outline'
        className='fixed bottom-4 right-20 h-12 w-12 rounded-full shadow-lg bg-zion-purple text-white hover:bg-zion-purple-light z-40'
        aria-label='Open help chat'      >
        <MessageSquare className='h-5 w-5' />
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
        const final = accumulated.trim() ||
          (FALLBACK_RESPONSES[Math.floor(Math.random() * FALLBACK_RESPONSES.length)] || "I'm experiencing technical difficulties. Please contact support@ziontechgroup.com for assistance."),
        setMessages(prev => prev.map(m => m.id === botId ? { ...m, message: final } : m))
      }
    } catch (err) {
      logErrorToProduction('Chatbot error:', { data: err }),
      
      // Provide a helpful fallback response instead of generic error
      const fallbackResponse = FALLBACK_RESPONSES[Math.floor(Math.random() * FALLBACK_RESPONSES.length)] || "I'm experiencing technical difficulties. Please contact support@ziontechgroup.com for assistance.",
      const errorMsg: Msg = { 
        id: Date.now().toString() + '-e', 
        role: 'assistant', 
        message: fallbackResponse
      },
      setMessages(prev => [...prev, errorMsg])
    } finally {
      setLoading(false),
      setTyping(false)
=======

        const final = accumulated.trim() ||
          (FALLBACK_RESPONSES[Math.floor(Math.random() * FALLBACK_RESPONSES.length)] || "I'm experiencing technical difficulties. Please contact support@ziontechgroup.com for assistance."),
        setMessages(prev => prev.map(m => m.id === botId ? { ...m, message: final } : m))

      }
    } catch (err) {
      logErrorToProduction ('Chatbot error:', { data: err });
      // Provide a helpful fallback response instead of generic error;
      const fallback_response =;
        FALLBACK_RESPONSES[;
          Math.floor (Math.random () * FALLBACK_RESPONSES.length);
        ] ||;
        "I'm experiencing technical difficulties. Please contact support@ziontechgroup.com for assistance.";
      const error_msg: Msg = {
        id: Date.now ().to_string () + '-e',
        role: 'assistant',
        message: fallback_response,
      }
      set_messages (prev => [...prev, error_msg]);
    } finally {

          buffer = lines[lines && lines.length - 1] || '';
        }
        const final =;
          accumulated && accumulated.trim() ||;
          FALLBACK_RESPONSES[;
            Math && Math.floor(Math && Math.random() * FALLBACK_RESPONSES && FALLBACK_RESPONSES.length);
          ] ||;
          "I'm experiencing technical difficulties. Please contact support@ziontechgroup && ziontechgroup.com for assistance.";
        setMessages(prev =>;
          prev && prev.map(m => (m && m.id === botId ? { ...m, message: final } : m));
        );
>>>>>>> main
    }
  },

  if (!open) {
    return (
      <Button 
        onClick={() => setOpen(true)} 
        size="icon" 
        variant="outline" 
        className="fixed bottom-4 right-20 h-12 w-12 rounded-full shadow-lg bg-zion-purple text-white hover: bg-zion-purple-light z-40" 
        aria-label="Open help chat"
      >
        <MessageSquare className="h-5 w-5" />
<<<<<<< HEAD
<<<<<<< HEAD
      </Button>
    )
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
  }

  if (!open) {
        onClick={() => setOpen(true)}
        size='icon'
        variant='outline'
        className='fixed bottom-4 right-20 h-12 w-12 rounded-full shadow-lg bg-zion-purple text-white hover:bg-zion-purple-light z-40'
        aria-label='Open help chat'      >
        <MessageSquare className='h-5 w-5' />
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======



>>>>>>> main
      </Button>
    )
  }
  return (
    <div className="fixed bottom-4 right-20 bg-zion-blue w-80 max-w-full rounded-lg shadow-xl flex flex-col z-40">
      <div className="bg-zion-blue-dark p-2 flex justify-between items-center">
        <span className="text-white font-medium">Help Bot</span>
        <Button
<<<<<<< HEAD
<<<<<<< HEAD
          variant='ghost'
          size='icon'
          className='text-white'
          onClick={() => setOpen(false)}
          aria-label='Close help bot'        >
          <X className='h-5 w-5' />
=======
=======

>>>>>>> main
          variant="ghost"
          size="icon"
          className="text-white"
          onClick={() => setOpen(false)}
          aria-label="Close help bot"
        >
          <X className="h-5 w-5" />
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======

>>>>>>> main
        </Button>
      </div>
      <div className="flex-1 overflow-y-auto p-3 space-y-4" style={{ maxHeight: '400px' }}>
        {messages.length === 0 && (
          <ChatMessage 
            role="assistant" 
            message="Hi! I'm here to help you with questions about Zion. What can I assist you with today?" 
          />
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======

>>>>>>> main
        const final = accumulated.trim() ||;
          (FALLBACK_RESPONSES[Math.floor(Math.random() * FALLBACK_RESPONSES.length)] || "I'm experiencing technical difficulties. Please contact support@ziontechgroup.com for assistance."),;
        setMessages(prev => prev.map(m => m.id === botId ? { ...m, message: final } : m));
      }
    } catch (err) {;
<<<<<<< HEAD
      logErrorToProduction('Chatbot error:', { data: err }),;
      // Provide a helpful fallback response instead of generic error;
      const fallbackResponse = FALLBACK_RESPONSES[Math.floor(Math.random() * FALLBACK_RESPONSES.length)] || "I'm experiencing technical difficulties. Please contact support@ziontechgroup.com for assistance.",;
      const errorMsg: Msg = {;
        id: Date.now().toString() + '-e',;
        role: 'assistant',;
        message: fallbackResponse;
      },;
=======
      logErrorToProduction('Chatbot error:', { data: err });

      // Provide a helpful fallback response instead of generic error;
      const fallbackResponse =;
        FALLBACK_RESPONSES[;
          Math && Math.floor(Math && Math.random() * FALLBACK_RESPONSES && FALLBACK_RESPONSES.length);
        ] ||;
        "I'm experiencing technical difficulties. Please contact support@ziontechgroup && ziontechgroup.com for assistance.";
      const errorMsg: Msg = {;
        id: Date && Date.now().toString() + '-e',;
        role: 'assistant',;
        message: fallbackResponse,;
      };
>>>>>>> main
      setMessages(prev => [...prev, errorMsg]);
    } finally {;
      setLoading(false);
      setTyping(false);
    }
<<<<<<< HEAD
  };
  if (!open) {;
    return (;
      <Button;
        onClick={() => setOpen(true)} ;
        size="icon";
        variant="outline";
        className="fixed bottom-4 right-20 h-12 w-12 rounded-full shadow-lg bg-zion-purple text-white hover: bg-zion-purple-light z-40";
        aria-label="Open help chat";
      >;
        <MessageSquare className="h-5 w-5" />;
      </Button>;
    );
  }
;
  return (;
    <div className="fixed bottom-4 right-20 bg-zion-blue w-80 max-w-full rounded-lg shadow-xl flex flex-col z-40">;
      <div className="bg-zion-blue-dark p-2 flex justify-between items-center">;
        <span className="text-white font-medium">Help Bot</span>;
        <Button;
          variant="ghost";
          size="icon";
          className="text-white";
          onClick={() => setOpen(false)}
          aria-label="Close help bot";
        >;
          <X className="h-5 w-5" />;
        </Button>;
      </div>;
      <div className="flex-1 overflow-y-auto p-3 space-y-4" style={{ maxHeight: '400px' }}>;
        {messages.length === 0 && (;
          <ChatMessage;
            role="assistant";
            message="Hi! I'm here to help you with questions about Zion. What can I assist you with today?";
          />;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
        )}
        {messages.map(m => (
          <ChatMessage key={m.id} role={m.role} message={m.message} />
        ))}
<<<<<<< HEAD
        {typing && <ChatMessage role='assistant' message='...' />}
=======
        {typing && (
          <ChatMessage role="assistant" message="..." />
        )}
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
        <div ref={endRef} />
      </div>
      <div className="p-2 border-t border-zion-purple/20 bg-zion-blue-dark/30">
=======
  }


  if (!open) {;

        onClick={() => setOpen(true)}
        size='icon';
        variant='outline';
        className='fixed bottom-4 right-20 h-12 w-12 rounded-full shadow-lg bg-zion-purple text-white hover:bg-zion-purple-light z-40';
        aria-label='Open help chat'      >;
        <MessageSquare className='h-5 w-5' />;
      </Button>;
    );

  }
  return (
    <div className='fixed bottom-4 right-20 bg-zion-blue w-80 max-w-full rounded-lg shadow-xl flex flex-col z-40'>;
      <div className='bg-zion-blue-dark p-2 flex justify-between items-center'>;
        <span className='text-white font-medium'>Help Bot</span>;
        <Button
          variant='ghost'
          size='icon'
          className='text-white'
          onClick={() => setOpen(false)}
          aria-label='Close help bot'        >;
          <X className='h-5 w-5' />;
        </Button>;
      </div>;
      <div
        className='flex-1 overflow-y-auto p-3 space-y-4'
        style={{ maxHeight: '400px' }}>;
        {messages && messages.length === 0 && (;
          <ChatMessage
            role='assistant'
            message="Hi! I'm here to help you with questions about Zion. What can I assist you with today?"
          />;



        )}
        {messages && messages.map(m => (;
          <ChatMessage key={m && m.id} role={m && m.role} message={m && m.message} />;
        ))}


        {typing && (
          <ChatMessage role="assistant" message="..." />
        )}


        <div ref={endRef} />
      </div>
      <div className='p-2 border-t border-zion-purple/20 bg-zion-blue-dark/30'>
>>>>>>> main
        <ChatInput onSend={sendMessage} disabled={loading} />
      </div>
    </div>
  )
<<<<<<< HEAD
<<<<<<< HEAD
}catch () {
  //ignore parse errors
}'
}buffer = lines[lines.length - 1] |''
}catch (err) {'
  logErrorToProduction ('Chatbot error:', {
  data: err
})
//Provide a helpful fallback response instead of generic error const errorMsg: Msg = {'
  id: Date.now () .toString () + '-e';'
role: 'assistant'
message: fallbackResponse
}
setMessages (prev => [...prev, errorMsg])
}finally {
  setLoading (false)
setTyping (false)
}
  () => setOpen (true) "
}> <MessageSquare className="h-5 w-5" /> </Button>) '"
}> <X className="h-5 w-5" /> </Button> </div> <ChatMessage role="assistant" message="Hi! I'm here to help you with questions about Zion. What can I assist you with today?" />)
}{
  messages.map (m => (<ChatMessage key= {
  m.id
}role= {
  m.role
}message= {
  m.message
}/>) )
})
}<div ref= {
  endRef
}/> </div> </div> </div>)
}'"
}
}
<<<<<<< HEAD
=======
}
;
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
;
=======
}
;
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======

        <div ref={endRef} />;
      </div>;
      <div className='p-2 border-t border-zion-purple/20 bg-zion-blue-dark/30'>;
        <ChatInput onSend={sendMessage} disabled={loading} />;
      </div>;
    </div>;
  );

}catch () {;
  //ignore parse errors ;

}';
}buffer = lines[lines && lines.length - 1] || '' ;

}catch (err) {';
  logErrorToProduction ('Chatbot error:', {;
  data: err ;
});
//Provide a helpful fallback response instead of generic error const errorMsg: Msg = {';
  id: Date && Date.now () .toString () + '-e';';
role: 'assistant';
message: fallbackResponse ;
};
setMessages (prev => [...prev, errorMsg]) ;
}finally {;
  setLoading (false);
setTyping (false) ;

};

  () => setOpen (true) ";
}> <MessageSquare className="h-5 w-5" /> </Button>) '";
}> <X className="h-5 w-5" /> </Button> </div> <ChatMessage role="assistant" message="Hi! I'm here to help you with questions about Zion. What can I assist you with today?" />) ;
}{;
  messages && messages.map (m => (<ChatMessagekey= {
  m && m.id 
}role= {
  m && m.role 
}message= {
  m && m.message 
}/>) ) ;
}) ;
}<divref= {
  endRef 
}/> </div> </div> </div>) ;
}'";

}
}


}
;



      set_loading (false);
      set_typing (false);
    }
  }
  // Check condition
if ( {) {
  $2
}
        on_click={() => set_open (true)}
        size='icon';
        variant='outline';
        className='fixed bottom - 4 right - 20 h - 12 w - 12 rounded - full shadow - lg bg - zion - purple text - white hover:bg - zion - purple - light z - 40';
        aria - label='Open help chat'      >;
        <MessageSquare className='h - 5 w - 5' />;
      </Button>);
  }
  return (
    <div className='fixed bottom - 4 right - 20 bg - zion - blue w - 80 max - w-full rounded - lg shadow - xl flex flex - col z - 40'>;
      <div className='bg - zion - blue - dark p - 2 flex justify - between items - center'>;
        <span className='text - white font - medium'>Help Bot</span>;
        <Button;
          variant='ghost';
          size='icon';
          className='text - white';
          on_click={() => set_open (false)}
          aria - label='Close help bot'        >;
          <X className='h - 5 w - 5' />;
        </Button>;
      </div>;
      <div;
        className='flex - 1 overflow - y-auto p - 3 space - y-4';
        style={{ max_height: '400px' }}
      >;
        {messages.length === 0 && (
          <ChatMessage;
            role='assistant';
            message="Hi! I'm here to help you with questions about Zion. What can I assist you with today?";
          />)}
        {messages.map (m => (
          <ChatMessage key={m.id} role={m.role} message={m.message} />))}
        {typing && <ChatMessage role='assistant' message='...' />}
        <div ref={end_ref} />;
      </div>;
      <div className='p - 2 border - t border - zion - purple / 20 bg - zion - blue - dark / 30'>;
        <ChatInput on_send={send_message} disabled={loading} />;
      </div>;
    </div>);
}catch () {
  //ignore parse errors;
}';
}buffer = lines[lines.length - 1] || '';
}catch (err) {';
  logErrorToProduction ('Chatbot error:', {
  data: err;
});
//Provide a helpful fallback response instead of generic error const error_msg: Msg = {';
  id: Date.now () .to_string () + '-e';';
role: 'assistant';
message: fallback_response;
}
set_messages (prev => [...prev, error_msg]);
}finally {
  set_loading (false);
set_typing (false);
}
  () => set_open (true) ";
}> <MessageSquare className="h - 5 w - 5" /> </Button>) '";
}> <X className="h - 5 w - 5" /> </Button> </div> <ChatMessage role="assistant" message="Hi! I'm here to help you with questions about Zion. What can I assist you with today?" />);
}{
  messages.map (m => (<ChatMessage key= {
  m.id;
}role= {
  m.role;
}message= {
  m.message;
}/>) );
});
}<div ref= {
  end_ref;
}/> </div> </div> </div>);
}'";
}
}
>>>>>>> main
