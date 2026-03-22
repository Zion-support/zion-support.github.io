/**
 * AI Chat Support Widget
 * Provides instant AI-powered support to website visitors
 * Priority: HIGH
 */

'use client';

import { useState, useEffect, useRef } from 'react';
import { MessageCircle, X, Send, Bot, Minimize2, Maximize2 } from 'lucide-react';

type Message = {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
};

const AI_PERSONA = {
  name: 'Zion AI Assistant',
  greeting: "Hello! I'm Zion's AI assistant. I can help you with:\n• Finding the right AI solution for your needs\n• Understanding our services and pricing\n• Technical questions about implementation\n• Scheduling consultations\n\nHow can I help you today?",
  suggestions: [
    'What AI products do you offer?',
    'How much do your services cost?',
    'Can you help with custom AI development?',
    'Schedule a consultation'
  ]
};

const PREDEFINED_RESPONSES: Record<string, string> = {
  'products': "We offer 50+ AI-powered solutions including:\n• AI Business Advisors\n• Financial Planning & Analytics\n• Healthcare Diagnostics\n• HR Assistants\n• Fraud Detection\n• Custom AI Development\n\nBrowse our catalog at /ai for all solutions!",
  'pricing': "Our pricing varies by solution:\n• Standard AI tools: Starting at $99/month\n• Enterprise solutions: Custom pricing\n• Consultation: Free 30-min call\n\nContact us for a personalized quote!",
  'consultation': "Great choice! You can schedule a consultation:\n1. Visit ziontechgroup.com/contact\n2. Fill out the form\n3. Select 'Consultation' as topic\n\nOur team typically responds within 24 hours.",
  'contact': "You can reach us at:\n• Email: contact@ziontechgroup.com\n• Form: ziontechgroup.com/contact\n• We're available 9AM-6PM EST",
  'default': "Thanks for your question! Our team will get back to you shortly. For immediate assistance, visit our contact page or browse our AI solutions catalog."
};

export default function AIChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Add greeting on first open
    if (isOpen && messages.length === 0) {
      setMessages([{
        id: 'greeting',
        role: 'assistant',
        content: AI_PERSONA.greeting,
        timestamp: new Date()
      }]);
    }
  }, [isOpen]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: `user-${Date.now()}`,
      role: 'user',
      content: input.trim(),
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    // Simulate AI response with predefined responses
    setTimeout(() => {
      const response = generateResponse(input.trim());
      const aiMessage: Message = {
        id: `ai-${Date.now()}`,
        role: 'assistant',
        content: response,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, aiMessage]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000);
  };

  const generateResponse = (query: string): string => {
    const q = query.toLowerCase();
    
    if (q.includes('product') || q.includes('service') || q.includes('offer')) {
      return PREDEFINED_RESPONSES.products;
    }
    if (q.includes('price') || q.includes('cost') || q.includes('pricing') || q.includes('expensive')) {
      return PREDEFINED_RESPONSES.pricing;
    }
    if (q.includes('consult') || q.includes('meeting') || q.includes('schedule')) {
      return PREDEFINED_RESPONSES.consultation;
    }
    if (q.includes('contact') || q.includes('email') || q.includes('reach')) {
      return PREDEFINED_RESPONSES.contact;
    }
    if (q.includes('hello') || q.includes('hi') || q.includes('hey')) {
      return AI_PERSONA.greeting;
    }
    
    return PREDEFINED_RESPONSES.default;
  };

  const handleSuggestionClick = (suggestion: string) => {
    setInput(suggestion);
    handleSend();
  };

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          width: '60px',
          height: '60px',
          borderRadius: '50%',
          background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
          border: 'none',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 4px 20px rgba(59, 130, 246, 0.4)',
          zIndex: 9999
        }}
        aria-label="Open AI Chat"
      >
        <MessageCircle color="white" size={28} />
        <span style={{
          position: 'absolute',
          top: '-5px',
          right: '-5px',
          width: '20px',
          height: '20px',
          background: '#10b981',
          borderRadius: '50%',
          fontSize: '11px',
          color: 'white',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          AI
        </span>
      </button>
    );
  }

  return (
    <div style={{
      position: 'fixed',
      bottom: isMinimized ? '10px' : '20px',
      right: '20px',
      width: isMinimized ? '200px' : '380px',
      height: isMinimized ? '50px' : '500px',
      background: '#0a0a0a',
      borderRadius: '16px',
      border: '1px solid #333',
      boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4)',
      zIndex: 9999,
      display: 'flex',
      flexDirection: 'column',
      overflow: 'hidden',
      transition: 'all 0.3s ease'
    }}>
      {/* Header */}
      <div style={{
        padding: '15px',
        background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <Bot size={20} color="white" />
          <span style={{ color: 'white', fontWeight: 600, fontSize: '14px' }}>
            {AI_PERSONA.name}
          </span>
        </div>
        <div style={{ display: 'flex', gap: '5px' }}>
          <button
            onClick={() => setIsMinimized(!isMinimized)}
            style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '5px' }}
          >
            {isMinimized ? <Maximize2 size={16} color="white" /> : <Minimize2 size={16} color="white" />}
          </button>
          <button
            onClick={() => setIsOpen(false)}
            style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '5px' }}
          >
            <X size={16} color="white" />
          </button>
        </div>
      </div>

      {!isMinimized && (
        <>
          {/* Messages */}
          <div style={{
            flex: 1,
            overflow: 'auto',
            padding: '15px',
            display: 'flex',
            flexDirection: 'column',
            gap: '12px'
          }}>
            {messages.map(msg => (
              <div
                key={msg.id}
                style={{
                  alignSelf: msg.role === 'user' ? 'flex-end' : 'flex-start',
                  maxWidth: '85%',
                  padding: '10px 14px',
                  borderRadius: msg.role === 'user' ? '16px 16px 4px 16px' : '16px 16px 16px 4px',
                  background: msg.role === 'user' ? '#3b82f6' : '#1a1a1a',
                  color: '#fff',
                  fontSize: '13px',
                  lineHeight: '1.5',
                  whiteSpace: 'pre-wrap'
                }}
              >
                {msg.content}
              </div>
            ))}
            
            {isTyping && (
              <div style={{
                alignSelf: 'flex-start',
                padding: '10px 14px',
                borderRadius: '16px 16px 16px 4px',
                background: '#1a1a1a',
                color: '#888',
                fontSize: '13px'
              }}>
                Typing...
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Suggestions */}
          {messages.length <= 2 && (
            <div style={{
              padding: '10px 15px',
              display: 'flex',
              flexWrap: 'wrap',
              gap: '8px',
              borderTop: '1px solid #333'
            }}>
              {AI_PERSONA.suggestions.map((suggestion, i) => (
                <button
                  key={i}
                  onClick={() => handleSuggestionClick(suggestion)}
                  style={{
                    padding: '6px 12px',
                    background: '#1a1a1a',
                    border: '1px solid #333',
                    borderRadius: '20px',
                    color: '#888',
                    fontSize: '11px',
                    cursor: 'pointer',
                    transition: 'all 0.2s'
                  }}
                >
                  {suggestion}
                </button>
              ))}
            </div>
          )}

          {/* Input */}
          <div style={{
            padding: '15px',
            borderTop: '1px solid #333',
            display: 'flex',
            gap: '10px'
          }}>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Ask me anything..."
              style={{
                flex: 1,
                padding: '10px 14px',
                background: '#1a1a1a',
                border: '1px solid #333',
                borderRadius: '8px',
                color: '#fff',
                fontSize: '13px',
                outline: 'none'
              }}
            />
            <button
              onClick={handleSend}
              disabled={!input.trim() || isTyping}
              style={{
                padding: '10px',
                background: input.trim() && !isTyping ? '#3b82f6' : '#333',
                border: 'none',
                borderRadius: '8px',
                cursor: input.trim() && !isTyping ? 'pointer' : 'default',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <Send size={16} color="white" />
            </button>
          </div>
        </>
      )}
    </div>
  );
}
