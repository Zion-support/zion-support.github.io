import { useState, useRef, useEffect } from 'react';
import { MessageSquare, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { logErrorToProduction } from '@/utils/productionLogger';

interface Msg {
  id: string;
  role: 'user' | 'assistant';
  message: string;
}

const fallbackResponses = [
  "I'm here to help! How can I assist you today?",
  "That's a great question. Let me help you with that.",
  "I understand your concern. Here's what I can suggest...",
  "Thanks for reaching out! I'll do my best to help you.",
  "I'm sorry, but I need more information to help you properly."
];

export function SupportChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Msg[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage: Msg = {
      id: Date.now().toString(),
      role: 'user',
      message: inputValue
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const assistantMessage: Msg = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        message: fallbackResponses[Math.floor(Math.random() * fallbackResponses.length)]
      };

      setMessages(prev => [...prev, assistantMessage]);
    } catch (error) {
      logErrorToProduction('Chatbot error', error);
      const errorMessage: Msg = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        message: "I'm sorry, I'm having trouble right now. Please try again later."
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  if (!isOpen) {
    return (
      <Button
        onClick={() => setIsOpen(true)}
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
    <div className='fixed bottom-4 right-4 w-80 h-96 bg-white rounded-lg shadow-xl border z-50 flex flex-col'>
      <div className='flex items-center justify-between p-4 border-b bg-zion-purple text-white rounded-t-lg'>
        <h3 className='font-semibold'>Support Chat</h3>
        <Button
          onClick={() => setIsOpen(false)}
          size='icon'
          variant='ghost'
          className='h-8 w-8 text-white hover:bg-zion-purple-light'
        >
          <X className='h-4 w-4' />
        </Button>
      </div>
      
      <div className='flex-1 overflow-y-auto p-4 space-y-3'>
        {messages.length === 0 && (
          <div className='text-center text-gray-500 text-sm'>
            <MessageSquare className='h-8 w-8 mx-auto mb-2 text-gray-400' />
            <p>How can I help you today?</p>
          </div>
        )}
        
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-[80%] p-3 rounded-lg text-sm ${
                msg.role === 'user'
                  ? 'bg-zion-purple text-white'
                  : 'bg-gray-100 text-gray-800'
              }`}
            >
              {msg.message}
            </div>
          </div>
        ))}
        
        {isLoading && (
          <div className='flex justify-start'>
            <div className='bg-gray-100 p-3 rounded-lg text-sm'>
              <div className='flex space-x-1'>
                <div className='w-2 h-2 bg-gray-400 rounded-full animate-bounce'></div>
                <div className='w-2 h-2 bg-gray-400 rounded-full animate-bounce' style={{ animationDelay: '0.1s' }}></div>
                <div className='w-2 h-2 bg-gray-400 rounded-full animate-bounce' style={{ animationDelay: '0.2s' }}></div>
              </div>
            </div>
          </div>
        )}
        
        <div ref={messagesEndRef} />
      </div>
      
      <div className='p-4 border-t'>
        <div className='flex space-x-2'>
          <input
            type='text'
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder='Type your message...'
            className='flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-zion-purple focus:border-transparent'
            disabled={isLoading}
          />
          <Button
            onClick={handleSendMessage}
            disabled={!inputValue.trim() || isLoading}
            className='bg-zion-purple text-white hover:bg-zion-purple-light'
          >
            Send
          </Button>
        </div>
      </div>
    </div>
  );
}