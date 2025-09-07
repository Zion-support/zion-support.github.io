<<<<<<< HEAD
import { X } from 'lucide-react';
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
import React, { useEffect, useMemo, useRef, useState } from 'react';
import { X } from 'lucide-react';
import React, { useEffect, useMemo, useRef, useState } from 'react';
import { X } from 'lucide-react';
>>>>>>> 7141390ccdaf86e16f609a9613706d1a7ce50be7
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75

type ChatMessage = {
  role: 'user' | 'assistant' | 'system'
  content: string
  timestamp?: number
}
import React, { useEffect, useMemo, useRef, useState } from 'react';
import { X } from 'lucide-react';
type ChatMessage = {
  role: 'user' | 'assistant' | 'system',
  content: string,
  timestamp?: number
};

function generateSessionId(): string {
  if (typeof window === 'undefined') return '';
  const existing = window.localStorage.getItem('zion_support_session_id');
  if (existing) return existing;
  const id = `sess_${Math.random().toString(36).slice(2)}_${Date.now()}`;
  window.localStorage.setItem('zion_support_session_id', id);
  return id
}

=======

type ChatMessage = {'
  role: 'user' | 'assistant' | 'system'
  content: string;
  timestamp?: number;
}
<<<<<<< HEAD
function generateSessionId(): string {

type ChatMessage = any;
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
export default function ChatWidget() {
origin/cursor/automate-test-improve-and-merge-code-2533
=======
function generateSessionId(): string {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  const [isOpen, setIsOpen] = useState(false);
<<<<<<< HEAD
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [failedIntents, setFailedIntents] = useState(0);
  const [showEscalation, setShowEscalation] = useState(false);
=======
  const [messages, setMessages] = useState<ChatMessage[]>([]);'
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [failedIntents, setFailedIntents] = useState(0);
  const [showEscalation, setShowEscalation] = useState(false);'
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
  const sessionIdRef = useRef<string>('');
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
<<<<<<< HEAD
    sessionIdRef.current = generateSessionId()
  }, []);

  useEffect(() => {
    if (!isOpen && messages.length === 0) {
      // Seed greeting
<<<<<<< HEAD
      setMessages([
        { role: 'assistant', content: 'Hi! How can I help you?', timestamp: Date.now() }])
    }
  }, [isOpen, messages.length]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages]);

<<<<<<< HEAD
  const quickReplies = useMemo(
    () => ['How do I hire?How do I get matched?Billing help'];
=======
  const quickReplies = $2;
=======
setMessages([
{
          role: 'assistant',
  content: 'Hi! How can I help you?'}
          timestamp: Date.now()}
<<<<<<< HEAD
        }
=======
sessionIdRef.current = generateSessionId();
  }, []);
  useEffect(() => {
    if (!isOpen && messages.length === 0) {
      // Seed greeting
      setMessages([
{
          role: 'assistant',
          content: 'Hi! How can I help you?',
          timestamp: Date.now(),
        },
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
      ]);
    }
  }, [isOpen, messages.length]);
  useEffect(() => {
<<<<<<< HEAD
=======
useEffect ( () => {
  if (!isOpen && messages.length === 0) {
  //Seed greeting setMessages ([ 
}
}, [isOpen, messages.length])
[])
<button aria-label="Open support chat" onClick= {
  () => setIsOpen (true) 
}className="rounded-full shadow-lg bg-blue-600 text-white w-14 h-14 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 dark:focus:ring-offset-black" > ? </button>) 
}<div className= {
  m.role === 'assistant' ? 'inline-block rounded-2xl px-3 py-2 bg-gray-100 dark:bg-gray-800' : 'inline-block rounded-2xl px-3 py-2 bg-blue-600 text-white' 
}> {
  m.content 
}</div> </div>) ) 
}</div>) 
}<div ref= {
  messagesEndRef 
}/> </div> > {
  q 
}</button>) ) 
}</div> </div>) 
}<input value= {
  input 
}onChange= {
  (e) => setInput (e.target.value) 
}onKeyDown= {
  (e) => {
  if (e.key === 'Enter' && !e.shiftKey) {
  
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-43ef
}
messagesEndRef.current?.scrollIntoView({ behavior: 'smooth'}
});
  }, [messages]);
=======
>>>>>>> 7141390ccdaf86e16f609a9613706d1a7ce50be7

      ])
  }, [isOpen, messages.length])
  useEffect(() => {

messagesEndRef.current?.scrollIntoView({ behavior: 'smooth'}
})
  }, [messages])
const quickReplies = useMemo(
=======
messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);
  const quickReplies = useMemo(
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
    () => ['How do I hire?', 'How do I get matched?', 'Billing help'],
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
>>>>>>> origin/main
    []
  );

  async function logEvent(eventType: string, payload: any) {
    try {
      await fetch('/api/support/session', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
<<<<<<< HEAD

        body: JSON.stringify({ sessionId: sessionIdRef.current, eventType, payload })})
    } catch {}
  }

  async function escalateSupport(reason: string) {
    try {
      await fetch('/api/support/escalate', {

        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ sessionId: sessionIdRef.current, reason, tag: 'escalate' })}),
    } catch {}
  }
        method: 'POST'
        headers: { 'Content-Type': 'application/json' }
        body: JSON.stringify({
          sessionId: sessionIdRef.current
          reason
          tag: 'escalate'
        })
      });

      setShowEscalation(true);    } catch {}        body: JSON.stringify({ sessionId: sessionIdRef.current, reason, tag: 'escalate' })}),
    } catch {}
  }

=======
body: JSON.stringify({
          sessionId: sessionIdRef.current,
          eventType,
          payload,
        }),
      });
origin/cursor/automate-test-improve-and-merge-code-2533
    } catch {}
  }

  async function escalateSupport(reason: string) {}
    try {'
      await fetch('/api/support/escalate', {}
'
        method: 'POST','
        headers: { 'Content-Type': 'application/json' },'
        body: JSON.stringify({ sessionId: sessionIdRef.current, reason, tag: 'escalate' })}),
    } catch {}
  }'
        method: 'POST''
        headers: { 'Content-Type': 'application/json' }
        body: JSON.stringify({}
          sessionId: sessionIdRef.current;
          reason'
          tag: 'escalate'
        })
      });
'
      setShowEscalation(true);    } catch {}        body: JSON.stringify({ sessionId: sessionIdRef.current, reason, tag: 'escalate' })}),
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
body: JSON.stringify({
          sessionId: sessionIdRef.current,
          reason,
          tag: 'escalate',
        }),
      });
      setShowEscalation(true);
origin/cursor/automate-test-improve-and-merge-code-2533
    } catch {}
  }
'
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
      setShowEscalation(true);    } catch {}        body: JSON.stringify({ sessionId: sessionIdRef.current, reason, tag: 'escalate' })}),

        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ sessionId: sessionIdRef.current, reason, tag: 'escalate' })}),
      setShowEscalation(true)
<<<<<<< HEAD
    } catch {}
  }

  async function onSend(messageText?: string) {
<<<<<<< HEAD
=======
      setShowEscalation(true);    } catch {}

<<<<<<< HEAD
=======
'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
      setShowEscalation(true);    } catch {}        body: JSON.stringify({ sessionId: sessionIdRef.current, reason, tag: 'escalate' })}),
    } catch {}
  }
'
      setShowEscalation(true);    } catch {}        body: JSON.stringify({ sessionId: sessionIdRef.current, reason, tag: 'escalate' })}),

      setShowEscalation(true)
      setShowEscalation(true);    } catch {}

    } catch {}
  }

  async function onSend(messageText?: string) {}
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
    const text = (messageText ?? input).trim();
    if (!text) return;
=======


const newUserMessage: ChatMessage = {
      role: 'user',
      content: text,
      timestamp: Date.now(),
    };
    setMessages(prev => [...prev, newUserMessage]);
    setInput('');
    setIsLoading(true);
    await logEvent('message/user', { content: text });
<<<<<<< HEAD
    const text = (messageText ?? input).trim($2);
    if (!text) return,
>>>>>>> origin/main

    const newUserMessage: ChatMessage = { role: 'user', content: text, timestamp: Date.now() },
    setMessages((prev) => [...prev, newUserMessage]);
    setInput('');
    setIsLoading(true);
    await logEvent('message/user', { content: text }),

    try {
      const res = await fetch('/api/support/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          sessionId: sessionIdRef.current,
          messages: [...messages, newUserMessage].map(({ role, content }) => ({ role, content }))})});
      const data = await res.json();

=======
    try {
      const res = await fetch('/api/support/chat', {
        method: 'POST'
        headers: { 'Content-Type': 'application/json' }
        body: JSON.stringify({
          sessionId: sessionIdRef.current,
messages: [...messages, newUserMessage].map(({ role, content }) => ({
            role,
            content,
          })),
        }),
      });
      const data = await res.json();
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
      if (data?.assistantMessage) {
        const assistantMessage: ChatMessage = {
          role: 'assistant',
          content: data.assistantMessage,
<<<<<<< HEAD
          timestamp: Date.now()},
        setMessages((prev) => [...prev, assistantMessage]);
        await logEvent('message/assistant', { content: assistantMessage.content, meta: data.meta })
      }

<<<<<<< HEAD
      if (data?.meta?.intentMatched === false) {
        setFailedIntents((n) => {
          const next = n + 1;
=======
          const next = n + 1;
          if (next >= 3) {;
=======
timestamp: Date.now(),
        };
        setMessages(prev => [...prev, assistantMessage]);
        await logEvent('message/assistant', {
          content: assistantMessage.content
          meta: data.meta
        });
      }
      if (data?.meta?.intentMatched === false) {
        setFailedIntents(n => {
origin/cursor/automate-test-improve-and-merge-code-2533
          const next = n + 1;
          if (next >= 3) {;'
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
            escalateSupport('Failed to match user intent 3+ times');
          }
          return next;
        });
      } else if (data?.meta?.intentMatched === true) {;
        setFailedIntents(0);
<<<<<<< HEAD
      }

      if (data?.meta?.intentMatched = $2;
>>>>>>> origin/main
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
=======
      }
  return ('
    <div className='fixed bottom-4 right-4 z-50'>      }
      if (data?.meta?.intentMatched === false) {}
        setFailedIntents((n) => {}
      if (data?.meta?.intentMatched === false) {;
        setFailedIntents((n) => {;
          const next = n + 1;
          if (next >= 3) {;'
            escalateSupport('Failed to match user intent 3+ times');
          }
          return next;
        });
      } else if (data?.meta?.intentMatched === true) {;
        setFailedIntents(0);
      }
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
    }
  }'
    <div className='fixed bottom-4 right-4 z-50'>

<<<<<<< HEAD
import { X  } from 'lucide-react';
type ChatMessage = {role: 'user' | 'assistant' | 'system';
  content: string;
  timestamp?: number;
}
function generateSessionId(): string {type ChatMessage = any;
export default function ChatWidget() {const [isOpen, setIsOpen] = useState(false)const [messages, setMessages] = useState<ChatMessage[]>([])const [input, setInput] = useState('')const [isLoading, setIsLoading] = useState(false)const [failedIntents, setFailedIntents] = useState(0)const [showEscalation, setShowEscalation] = useState(false)const sessionIdRef = useRef<string>('')const messagesEndRef  = useRef<HTMLDivElement | null>(null)useEffect(() => {sessionIdRef.current = generateSessionId()}, [])useEffect(() => {if (!isOpen && messages.length === 0) {// Seed greeting;
      setMessages([;
{role: 'assistant',content: 'Hi! How can I help you?',timestamp: Date.now(),},])}
  }, [isOpen, messages.length])useEffect(() => {messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })}, [messages])const quickReplies = useMemo(() => ['How do I hire?', 'How do I get matched?', 'Billing help'],[];
  )async function logEvent() {try {await fetch('/api/support/session', {method: 'POST',headers: { 'Content-Type': 'application/json' },body: JSON.stringify({sessionId: sessionIdRef.current,eventType,payload,}),})} catch {}
  }async function escalateSupport() {try {await fetch('/api/support/escalate', {method: 'POST',headers: { 'Content-Type': 'application/json' },body: JSON.stringify({ sessionId: sessionIdRef.current, reason, tag: 'escalate' })}),} catch {}
  }
        method: 'POST';
        headers: { 'Content-Type': 'application/json' }
        body: JSON.stringify({sessionId: sessionIdRef.current;
          reason;
          tag: 'escalate';
        })})setShowEscalation(true)} catch {}        body: JSON.stringify({ sessionId: sessionIdRef.current, reason, tag: 'escalate' })}),method: 'POST',headers: { 'Content-Type': 'application/json' },body: JSON.stringify({sessionId: sessionIdRef.current,reason,tag: 'escalate',}),})setShowEscalation(true)} catch {}
  }setShowEscalation(true)} catch {}        body: JSON.stringify({ sessionId: sessionIdRef.current, reason, tag: 'escalate' })}),setShowEscalation(true)setShowEscalation(true)} catch {}setShowEscalation(true)} catch {}        body: JSON.stringify({ sessionId: sessionIdRef.current, reason, tag: 'escalate' })}),} catch {}
  }setShowEscalation(true)} catch {}        body: JSON.stringify({ sessionId: sessionIdRef.current, reason, tag: 'escalate' })}),setShowEscalation(true)setShowEscalation(true)} catch {}} catch {}
  }async function onSend() {const text = (messageText ?? input).trim()if (!text) return;const newUserMessage: ChatMessage = {role: 'user',content: text,timestamp: Date.now(),}setMessages(prev => [...prev, newUserMessage])setInput('')setIsLoading(true)await logEvent('message/user', { content: text })try {const res = await fetch('/api/support/chat', {method: 'POST';
        headers: { 'Content-Type': 'application/json' }
        body: JSON.stringify({sessionId: sessionIdRef.current,messages: [...messages, newUserMessage].map(({ role, content }) => ({role,content,})),}),})const data = await res.json()if (data?.assistantMessage) {const assistantMessage: ChatMessage = {role: 'assistant',content: data.assistantMessage,timestamp: Date.now(),}setMessages(prev => [...prev, assistantMessage])await logEvent('message/assistant', {content: assistantMessage.content;
          meta: data.meta;
        })}
      if (data?.meta?.intentMatched === false) {setFailedIntents(n => {const next = n + 1;
          if (next >= 3) {escalateSupport('Failed to match user intent 3+ times')}
          return next;
        })} else if (data?.meta?.intentMatched === true) {setFailedIntents(0)}return (<div className='fixed bottom-4 right-4 z-50'>      }
      if (data?.meta?.intentMatched === false) {setFailedIntents((n) => {if (data?.meta?.intentMatched === false) {setFailedIntents((n) => {const next = n + 1;
          if (next >= 3) {escalateSupport('Failed to match user intent 3+ times')}
          return next;
        })} else if (data?.meta?.intentMatched === true) {setFailedIntents(0)}
    }
  }
    <div className='fixed bottom-4 right-4 z-50'>;
  return (}
  }return (}
  }
  return (<div className='fixed bottom-4 right-4 z-50'>;
      {!isOpen && (<button;
          aria-label='Open support chat';
          onClick={() => setIsOpen(true)}
          className='rounded-full shadow-lg bg-blue-600 text-white w-14 h-14 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 dark:focus:ring-offset-black'        >      {!isOpen && (<button;
          aria-label="Open support chat";

  return (
    <div className='fixed bottom-4 right-4 z-50'>      }
      if (data?.meta?.intentMatched === false) {
        setFailedIntents((n) => {

      if (data?.meta?.intentMatched === false) {;
        setFailedIntents((n) => {;
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
    <div className='fixed bottom-4 right-4 z-50'>

  return (

    }
  }

  return (

    }
  }
  return (
    <div className='fixed bottom-4 right-4 z-50'>;
      {!isOpen && (;
        <button
          aria-label='Open support chat'
          onClick={() => setIsOpen(true)}
          className='rounded-full shadow-lg bg-blue-600 text-white w-14 h-14 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 dark:focus:ring-offset-black'        >      {!isOpen && (;
        <button
          aria-label="Open support chat"
          onClick={() => setIsOpen(true)}
          className="rounded-full shadow-lg bg-blue-600 text-white w-14 h-14 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 dark:focus:ring-offset-black";
        >;
          ?;
        </button>;
      )}} catch (e) {setMessages(prev => [;
        ...prev;
        {role: 'assistant';
          content:;
            'Sorry, something went wrong. Please try again or contact support.';
          timestamp: Date.now()}
      ])} finally {setIsLoading(false)}
  }
  return (<div className='fixed bottom-4 right-4 z-50'>;
      {!isOpen && (<button;
          aria-label='Open support chat';
          onClick={() => setIsOpen(true)}
          className='rounded-full shadow-lg bg-blue-600 text-white w-14 h-14 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 dark:focus:ring-offset-black';
        >;
          ?;
        </button>;
      )}
      {isOpen && (<div className='w-[360px] max-w-[92vw] h-[520px] max-h-[80vh] rounded-2xl overflow-hidden shadow-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 flex flex-col'>;
          <div className='flex items-center justify-between px-4 py-3 border-b border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-800'>;
            <div className='font-semibold'>Zion Support</div>;
            <button;
              onClick={() => setIsOpen(false)}
              aria-label='Close';
              className='p-1 rounded hover:bg-gray-200 dark:hover:bg-gray-700';
            >;
              <X size={18} />;
            </button>;
          </div>;
<div className='flex-1 overflow-y-auto p-3 space-y-3'>;
            {messages.map((m, idx) => (<div;
                key={idx}
                className={m && m.role === 'assistant' ? 'text-sm' : 'text-sm text-right';
                }>;
  }

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {!isOpen && (
        <button
          aria-label="Open support chat"
          onClick={() => setIsOpen(true)}
          className="rounded-full shadow-lg bg-blue-600 text-white w-14 h-14 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 dark:focus:ring-offset-black"
=======
  return (

    }
  }

  return (

    }
  }
  return ('
    <div className='fixed bottom-4 right-4 z-50'>;
      {!isOpen && (;
        <button'
          aria-label='Open support chat'
          onClick={() => setIsOpen(true)}'
          className='rounded-full shadow-lg bg-blue-600 text-white w-14 h-14 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 dark:focus:ring-offset-black'        >      {!isOpen && (;
        <button;
          aria-label="Open support chat"
          onClick={() => setIsOpen(true)}"
          className="rounded-full shadow-lg bg-blue-600 text-white w-14 h-14 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 dark:focus:ring-offset-black";
        >;
          ?;
        </button>;
      )}
<<<<<<< HEAD
    } catch (e) {
      setMessages(prev => [
        ...prev
        {
          role: 'assistant'
          content:
            'Sorry, something went wrong. Please try again or contact support.'
          timestamp: Date.now()
        }
      ]);
    } finally {
      setIsLoading(false);
    }
  }
  return (
<div className='fixed bottom-4 right-4 z-50'>
      {!isOpen && (
        <button
          aria-label='Open support chat'
          onClick={() => setIsOpen(true)}
          className='rounded-full shadow-lg bg-blue-600 text-white w-14 h-14 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 dark:focus:ring-offset-black'
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
        >
          ?
        </button>
      )}
<<<<<<< HEAD

      {isOpen && (
        <div className="w-[360px] max-w-[92vw] h-[520px] max-h-[80vh] rounded-2xl overflow-hidden shadow-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 flex flex-col">
          <div className="flex items-center justify-between px-4 py-3 border-b border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-800">
            <div className="font-semibold">Zion Support</div>
            <button onClick={() => setIsOpen(false)} aria-label="Close" className="p-1 rounded hover:bg-gray-200 dark:hover:bg-gray-700">
=======
      {isOpen && (
<div className='w-[360px] max-w-[92vw] h-[520px] max-h-[80vh] rounded-2xl overflow-hidden shadow-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 flex flex-col'>
          <div className='flex items-center justify-between px-4 py-3 border-b border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-800'>
            <div className='font-semibold'>Zion Support</div>
            <button
              onClick={() => setIsOpen(false)}
              aria-label='Close'
              className='p-1 rounded hover:bg-gray-200 dark:hover:bg-gray-700'
            >
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
              <X size={18} />
            </button>
          </div>

<<<<<<< HEAD
          <div className="flex-1 overflow-y-auto p-3 space-y-3">
            {messages.map((m, idx) => (
              <div key={idx} className={m.role === 'assistant' ? 'text-sm' : 'text-sm text-right'}>
                <div
                  className={
                    m.role === 'assistant'
                      ? 'inline-block rounded-2xl px-3 py-2 bg-gray-100 dark:bg-gray-800'
      )}
              <div
                key={idx}
                className={
                  m && m.role === 'assistant' ? 'text-sm' : 'text-sm text-right'
                }>;
                <div
                  className={
                    m && m.role === 'assistant'
                      ? 'inline-block rounded-2xl px-3 py-2 bg-gray-100 dark:bg-gray-800'                      : 'inline-block rounded-2xl px-3 py-2 bg-blue-600 text-white'            {messages && messages.map((m, idx) => (;
              <div key={idx} className={m && m.role === 'assistant' ? 'text-sm' : 'text-sm text-right'}>;
=======
<div className='flex-1 overflow-y-auto p-3 space-y-3'>
            {messages.map((m, idx) => (
origin/cursor/automate-test-improve-and-merge-code-2533
              <div
=======
              <div;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
                key={idx}
                className={'
                  m && m.role === 'assistant' ? 'text-sm' : 'text-sm text-right'
                }>;
                <div;
                  className={'
                    m && m.role === 'assistant''
                      ? 'inline-block rounded-2xl px-3 py-2 bg-gray-100 dark:bg-gray-800'                      : 'inline-block rounded-2xl px-3 py-2 bg-blue-600 text-white'            {messages && messages.map((m, idx) => (;'
              <div key={idx} className={m && m.role === 'assistant' ? 'text-sm' : 'text-sm text-right'}>;
<<<<<<< HEAD
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
                <div
                  className={
                    m && m.role === 'assistant'
                      ? 'inline-block rounded-2xl px-3 py-2 bg-gray-100 dark: bg-gray-800'
                    m.role === 'assistant'
                      ? 'inline-block rounded-2xl px-3 py-2 bg-gray-100 dark:bg-gray-800'
origin/cursor/automate-test-improve-and-merge-code-2533
=======
                <div;
                  className={'
                    m && m.role === 'assistant''
                      ? 'inline-block rounded-2xl px-3 py-2 bg-gray-100 dark: bg-gray-800''
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
                      : 'inline-block rounded-2xl px-3 py-2 bg-blue-600 text-white'
<<<<<<< HEAD
                key={idx}
                className={m && m.role === 'assistant' ? 'text-sm' : 'text-sm text-right';
                }>;
                <div;
                  className={m && m.role === 'assistant';
                      ? 'inline-block rounded-2xl px-3 py-2 bg-gray-100 dark:bg-gray-800'                      : 'inline-block rounded-2xl px-3 py-2 bg-blue-600 text-white'            {messages && messages.map((m, idx) => (<div key={idx} className={m && m.role === 'assistant' ? 'text-sm' : 'text-sm text-right'}>;
                <div;
                  className={m && m.role === 'assistant';
                      ? 'inline-block rounded-2xl px-3 py-2 bg-gray-100 dark: bg-gray-800';
                    m.role === 'assistant';
                      ? 'inline-block rounded-2xl px-3 py-2 bg-gray-100 dark:bg-gray-800';
                      : 'inline-block rounded-2xl px-3 py-2 bg-blue-600 text-white';
                      : 'inline-block rounded-2xl px-3 py-2 bg-blue-600 text-white'
=======
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
                  }
                >
                  {m.content}
                </div>
              </div>
            ))}
<<<<<<< HEAD
            {isLoading && (
              <div className="text-sm">
                <div className="inline-block rounded-2xl px-3 py-2 bg-gray-100 dark:bg-gray-800 animate-pulse">Thinking…</div>
=======

            )}
                  <button;
                    key={q}
                    onClick={() => onSend(q)}'"
                    className='text-xs rounded-full px-3 py-1 border border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800'                  >            <div className="px-3 pb-2">;"
              <div className="flex flex-wrap gap-2 mb-2">;
                {quickReplies && quickReplies.map((q) => (;
                  <button;
                    key={q}
                    onClick={() => onSend(q)}"
                    className="text-xs rounded-full px-3 py-1 border border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800"'
                    className='text-xs rounded-full px-3 py-1 border border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800'                  >

                  >

            {isLoading && (
<div className='text-sm'>
                <div className='inline-block rounded-2xl px-3 py-2 bg-gray-100 dark:bg-gray-800 animate-pulse'>
                  Thinking…
                </div>
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {!showEscalation && (
<<<<<<< HEAD
            <div className="px-3 pb-2">
              <div className="flex flex-wrap gap-2 mb-2">
                {quickReplies.map((q) => (
                  <button
                    key={q}
                    onClick={() => onSend(q)}
                    className="text-xs rounded-full px-3 py-1 border border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800"
                  >

            )}
                  <button
                    key={q}
                    onClick={() => onSend(q)}
                    className='text-xs rounded-full px-3 py-1 border border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800'                  >            <div className="px-3 pb-2">;
              <div className="flex flex-wrap gap-2 mb-2">;
                {quickReplies && quickReplies.map((q) => (;
                  <button
                    key={q}
                    onClick={() => onSend(q)}
                    className="text-xs rounded-full px-3 py-1 border border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800"
                    className='text-xs rounded-full px-3 py-1 border border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800'                  >

                  >

=======
<div className='px-3 pb-2'>
              <div className='flex flex-wrap gap-2 mb-2'>
                {quickReplies.map(q => (
                  <button
                    key={q}
                    onClick={() => onSend(q)}
                    className='text-xs rounded-full px-3 py-1 border border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800'
                  >
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
                    {q}
                  </button>
                ))}
              </div>
            </div>
<<<<<<< HEAD
          )}
                  }
                >;
                  {m.content}
                </div>;
              </div>;
            ))})}
                  <button;
                    key={q}
                    onClick={() => onSend(q)}
                    className='text-xs rounded-full px-3 py-1 border border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800'                  >            <div className="px-3 pb-2">;
              <div className="flex flex-wrap gap-2 mb-2">;
                {quickReplies && quickReplies.map((q) => (<button;
                    key={q}
                    onClick={() => onSend(q)}
                    className="text-xs rounded-full px-3 py-1 border border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800";
                    className='text-xs rounded-full px-3 py-1 border border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800'                  >;
                  >;
            {isLoading && (<div className='text-sm'>;
                <div className='inline-block rounded-2xl px-3 py-2 bg-gray-100 dark:bg-gray-800 animate-pulse'>;
                  Thinking…;
                </div>;
              </div>;
            )}
            <div ref={messagesEndRef} />;
          </div>;
          {!showEscalation && (<div className='px-3 pb-2'>;
              <div className='flex flex-wrap gap-2 mb-2'>;
                {quickReplies.map(q => (<button;
                    key={q}
                    onClick={() => onSend(q)}
                    className='text-xs rounded-full px-3 py-1 border border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800';
                  >;
=======
          )}"
                    className="text-xs rounded-full px-3 py-1 border border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800";
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
                    {q}
                  </button>;
                ))}
              </div>;
            </div>;
<<<<<<< HEAD
          )}className="text-xs rounded-full px-3 py-1 border border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800";
                    {q}
                  </button>;
                ))}
              </div>;
            </div>;
          )}<div className='border-t border-gray-200 dark:border-gray-800 p-2'>;
<div className='border-t border-gray-200 dark:border-gray-800 p-2'>;
            {!showEscalation ? (<div className='flex gap-2'>;
          )}

          <div className='border-t border-gray-200 dark:border-gray-800 p-2'>
            {!showEscalation ? (
              <div className='flex gap-2'>

          <div className='border-t border-gray-200 dark:border-gray-800 p-2'>;
            {!showEscalation ? (<div className='flex gap-2'>;
                <input;
                  value={input}
                  onChange={e => setInput(e && e.target.value)}

          <div className="border-t border-gray-200 dark:border-gray-800 p-2">
            {!showEscalation ? (
              <div className="flex gap-2">
                <input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' && !e.shiftKey) {
                      e.preventDefault();
=======
          )}

<<<<<<< HEAD
          <div className='border-t border-gray-200 dark:border-gray-800 p-2'>

<div className='border-t border-gray-200 dark:border-gray-800 p-2'>
origin/cursor/automate-test-improve-and-merge-code-2533
            {!showEscalation ? (
=======



'
          <div className='border-t border-gray-200 dark:border-gray-800 p-2'>
            {!showEscalation ? ('
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
              <div className='flex gap-2'>
'
          <div className='border-t border-gray-200 dark:border-gray-800 p-2'>;
            {!showEscalation ? (;'
              <div className='flex gap-2'>;
                <input;
                  value={input}
                  onChange={e => setInput(e && e.target.value)}
                  onKeyDown={e => {;'
                    if (e && e.key === 'Enter' && !e && e.shiftKey) {;
                      e && e.preventDefault();
                      onSend();
                    }
                  }}'
                  placeholder='Ask a question…';'
                  className='flex-1 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500'                />;
                <button;
                  onClick={() => onSend()}
                  disabled={isLoading}"
              <div className="flex gap-2">
                <input;
                  value={input}
                  placeholder='Ask a question…'
                  className='flex-1 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500'
=======

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
                      onSend()
                    }
                  }}
                  placeholder="Ask a question…"
                  className="flex-1 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
<<<<<<< HEAD
<<<<<<< HEAD
                  placeholder='Ask a question…';
                  onKeyDown={e => {if (e && e.key === 'Enter' && !e && e.shiftKey) {e && e.preventDefault()onSend()}
                  }}placeholder='Ask a question…';
                  className='flex-1 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500'                />;
                <button
                  onClick={() => onSend()}
                  disabled={isLoading}
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
                />
                <button
                  onClick={() => onSend()}
                  disabled={isLoading}
                  className="rounded-xl px-4 py-2 text-sm bg-blue-600 text-white disabled:opacity-50"
=======
origin/cursor/automate-test-improve-and-merge-code-2533
                  placeholder=\"Ask a question…\"
                  className=\"flex-1 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500\"
                />
                <button;
<<<<<<< HEAD
                  onClick={() => onSend()}
                  disabled={isLoading}
                    }
                  }}
=======
onClick={() = /> onSend()}
                  disabled={isLoading}
                    }
                  }}

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
className='rounded-xl px-4 py-2 text-sm bg-blue-600 text-white disabled:opacity-50'
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
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
<<<<<<< HEAD
                    }
                  }}
            )}
          </div>
        </div>
      )}
                  onKeyDown={e => {if (e && e.key === 'Enter' && !e && e.shiftKey) {e && e.preventDefault()onSend()}
                  }}placeholder='Ask a question…';
                  className='flex-1 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500'                />;
                <button;
                  onClick={() => onSend()}
                  disabled={isLoading}
              <div className="flex gap-2">;
                <input;
                  value={input}placeholder='Ask a question…';
                  className='flex-1 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500';
                      onSend()}
                  }}
                  placeholder="Ask a question…";
                  className="flex-1 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500";
                />;
                <button;
                  onClick={() => onSend()}
                  disabled={isLoading}}
                  }}className='rounded-xl px-4 py-2 text-sm bg-blue-600 text-white disabled:opacity-50';
                >;
                  Send;
                </button>;
              </div>;
            ) : (<div className='flex flex-col gap-2 text-sm'>;
                <div className='text-gray-700 dark:text-gray-300'>;
                  We can escalate this to our team:;
                </div>;
                <div className='flex gap-2'>;
                  <a;
                    href='mailto:support@zion.ai';
                    className='rounded-lg px-3 py-2 border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800';
                  >;
                    Email Support;
                  </a>;
                  <a;
                    href='/contact';
                    className='rounded-lg px-3 py-2 border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800';
                  >;
                    Chat with Live Agent;
                  </a>;
                </div>;
              </div>;
            )}
=======
origin/cursor/automate-test-improve-and-merge-code-2533
            )}
          </div>;
        </div>;
      )}
}
  );
}
useEffect ( () => {}
  // Check condition;
if ( {) {}
  $2;
}
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
    </div>
  );
}
origin/cursor/automate-test-improve-and-merge-code-2533
<<<<<<< HEAD
=======
'"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
}
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
          </div>;
        </div>;
      )}}
  )}
useEffect ( () => {// Check condition;
if ( {) {$2;
}</div>;
}
  );
}
<<<<<<< HEAD
useEffect ( () => {
  // Check condition
if ( {) {
  $2
}
  )}
    </div>
  )
}
=======

"
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
