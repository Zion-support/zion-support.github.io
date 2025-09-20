import { useState, useRef, useEffect } from 'react';
import { MessageSquare, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { logErrorToProduction } from '@/utils/productionLogger';

interface Msg {
  id: string;
  role: 'user' | 'assistant';
  message: string;
}

export function SupportChatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Msg[]>([]);
  const [loading, setLoading] = useState(false);
  const [typing, setTyping] = useState(false);
  const endRef = useRef<HTMLDivElement>(null);

  const fallbackResponses = [
    "I'm here to help! What questions do you have about Zion?",
    "Feel free to ask me anything about our AI and tech marketplace services.",
    "I can help you understand our platform features and how to get started.",
    "What specific information are you looking for today?"
  ];

  const getRandomFallback = () => {
    return fallbackResponses[Math.floor(Math.random() * fallbackResponses.length)];
  };

  const sendMessage = async (message: string) => {
    if (!message.trim()) return;

    const userMsg: Msg = {
      id: Date.now().toString(),
      role: 'user',
      message: message.trim()
    };

    setMessages(prev => [...prev, userMsg]);
    setLoading(true);
    setTyping(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const assistantMsg: Msg = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        message: getRandomFallback()
      };

      setMessages(prev => [...prev, assistantMsg]);
    } catch (err) {
      logErrorToProduction('Chatbot error:', { data: err });
      const errorMsg: Msg = {
        id: Date.now().toString() + '-e',
        role: 'assistant',
        message: "I'm sorry, I'm having trouble right now. Please try again later or contact our support team."
      };
      setMessages(prev => [...prev, errorMsg]);
    } finally {
      setLoading(false);
      setTyping(false);
    }
  };

  useEffect(() => {
    if (endRef.current) {
      endRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  if (!open) {
    return (
      <Button
        onClick={() => setOpen(true)}
        size='icon'
        variant='outline'
        className='fixed bottom-4 right-20 h-12 w-12 rounded-full shadow-lg bg-zion-purple text-white hover:bg-zion-purple-light z-40'
        aria-label='Open help chat'
      >
        <MessageSquare className='h-5 w-5' />
      </Button>
    );
  }

  return (
    <div className='fixed bottom-4 right-20 bg-zion-blue w-80 max-w-full rounded-lg shadow-xl flex flex-col z-40'>
      <div className='bg-zion-blue-dark p-2 flex justify-between items-center'>
        <span className='text-white font-medium'>Help Bot</span>
        <Button
          variant='ghost'
          size='icon'
          className='text-white'
          onClick={() => setOpen(false)}
          aria-label='Close help bot'
        >
          <X className='h-5 w-5' />
        </Button>
      </div>
      <div
        className='flex-1 overflow-y-auto p-3 space-y-4'
        style={{ maxHeight: '400px' }}
      >
        {messages.length === 0 && (
          <div className='text-zion-slate-light text-sm'>
            Hi! I'm here to help you with questions about Zion. What can I assist you with today?
          </div>
        )}
        {messages.map(m => (
          <div key={m.id} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-xs px-3 py-2 rounded-lg ${
              m.role === 'user' 
                ? 'bg-zion-purple text-white' 
                : 'bg-zion-blue-light text-zion-slate-light'
            }`}>
              {m.message}
            </div>
          </div>
        ))}
        {typing && (
          <div className='flex justify-start'>
            <div className='bg-zion-blue-light text-zion-slate-light px-3 py-2 rounded-lg'>
              ...
            </div>
          </div>
        )}
        <div ref={endRef} />
      </div>
      <div className='p-2 border-t border-zion-purple/20 bg-zion-blue-dark/30'>
        <form onSubmit={(e) => {
          e.preventDefault();
          const input = e.currentTarget.querySelector('input');
          if (input?.value) {
            sendMessage(input.value);
            input.value = '';
          }
        }}>
          <div className='flex gap-2'>
            <input
              type='text'
              placeholder='Type your message...'
              className='flex-1 px-3 py-2 bg-zion-blue border border-zion-purple/20 rounded text-white placeholder-zion-slate-light focus:outline-none focus:border-zion-purple'
              disabled={loading}
            />
            <Button
              type='submit'
              size='sm'
              disabled={loading}
              className='bg-zion-purple hover:bg-zion-purple-light text-white'
            >
              Send
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}