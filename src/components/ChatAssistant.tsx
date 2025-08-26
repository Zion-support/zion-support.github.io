import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot, User, Loader2 } from 'lucide-react';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'assistant';
  timestamp: Date;
}

export const ChatAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: 'Hello! I\'m ZION AI Assistant. How can I help you today?',
      sender: 'assistant',
      timestamp: new Date()
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const handleSendMessage = async () => {
    if (!inputText.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputText,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText('');
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: generateAIResponse(inputText),
        sender: 'assistant',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, aiResponse]);
      setIsTyping(false);
    }, 1000 + Math.random() * 2000);
  };

  const generateAIResponse = (userInput: string): string => {
    const input = userInput.toLowerCase();
    
    if (input.includes('service') || input.includes('help')) {
      return 'I can help you with our AI services, quantum computing solutions, cybersecurity, and more. What specific area are you interested in?';
    }
    
    if (input.includes('pricing') || input.includes('cost')) {
      return 'Our pricing varies based on the service and scope. I\'d be happy to connect you with our sales team for a personalized quote.';
    }
    
    if (input.includes('contact') || input.includes('speak')) {
      return 'You can reach us at hello@ziontechgroup.com or call +1 (555) 123-4567. I can also schedule a consultation for you.';
    }
    
    if (input.includes('ai') || input.includes('artificial intelligence')) {
      return 'We offer cutting-edge AI solutions including autonomous business operations, machine learning platforms, and AI-powered analytics.';
    }
    
    if (input.includes('quantum') || input.includes('computing')) {
      return 'Our quantum computing services include quantum neural networks, edge computing platforms, and quantum financial trading solutions.';
    }
    
    return 'That\'s an interesting question! I\'d be happy to help you learn more about our services. Could you provide more details about what you\'re looking for?';
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Floating chat button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 left-6 w-14 h-14 bg-gradient-to-br from-zion-cyan to-zion-purple hover:from-zion-cyan/80 hover:to-zion-purple/80 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 group z-50"
        aria-label="Open chat assistant"
      >
        <MessageCircle className="w-7 h-7 text-white group-hover:scale-110 transition-transform" />
      </button>

      {/* Chat modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-end justify-end p-4">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          />
          
          {/* Chat window */}
          <div className="relative w-full max-w-md h-96 bg-zion-slate-dark border border-zion-cyan/20 rounded-t-2xl shadow-2xl flex flex-col">
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-zion-cyan/20 bg-gradient-to-r from-zion-slate to-zion-slate-light">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-lg flex items-center justify-center">
                  <Bot className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-semibold">ZION AI Assistant</h3>
                  <p className="text-zion-slate-light text-xs">Always here to help</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 bg-zion-slate-light/10 hover:bg-zion-slate-light/20 rounded-lg flex items-center justify-center transition-colors"
                aria-label="Close chat"
              >
                <X className="w-4 h-4 text-zion-slate-light" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`flex items-start space-x-2 max-w-xs ${message.sender === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}>
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 ${
                      message.sender === 'user' 
                        ? 'bg-gradient-to-br from-zion-cyan to-zion-purple' 
                        : 'bg-zion-slate-light/20'
                    }`}>
                      {message.sender === 'user' ? (
                        <User className="w-3 h-3 text-white" />
                      ) : (
                        <Bot className="w-3 h-3 text-zion-cyan" />
                      )}
                    </div>
                    <div className={`px-3 py-2 rounded-2xl ${
                      message.sender === 'user'
                        ? 'bg-gradient-to-br from-zion-cyan to-zion-purple text-white'
                        : 'bg-zion-slate-light/10 text-zion-slate-light'
                    }`}>
                      <p className="text-sm">{message.text}</p>
                      <p className="text-xs opacity-70 mt-1">
                        {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
              
              {/* Typing indicator */}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="flex items-start space-x-2">
                    <div className="w-6 h-6 bg-zion-slate-light/20 rounded-full flex items-center justify-center">
                      <Bot className="w-3 h-3 text-zion-cyan" />
                    </div>
                    <div className="px-3 py-2 rounded-2xl bg-zion-slate-light/10">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-zion-cyan rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-zion-cyan rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                        <div className="w-2 h-2 bg-zion-cyan rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 border-t border-zion-cyan/20">
              <div className="flex space-x-2">
                <input
                  ref={inputRef}
                  type="text"
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Type your message..."
                  className="flex-1 px-3 py-2 bg-zion-slate-light/10 border border-zion-cyan/20 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:border-zion-cyan focus:ring-1 focus:ring-zion-cyan/20"
                />
                <button
                  onClick={handleSendMessage}
                  disabled={!inputText.trim() || isTyping}
                  className="px-4 py-2 bg-gradient-to-r from-zion-cyan to-zion-purple hover:from-zion-cyan/80 hover:to-zion-purple/80 disabled:opacity-50 disabled:cursor-not-allowed rounded-lg transition-all duration-300"
                >
                  <Send className="w-4 h-4 text-white" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
