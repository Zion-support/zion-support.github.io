import React, { useState, useRef, useEffect } from 'react';'import { motion, AnimatePresence } from 'framer-motion';'import {;'
  MessageCircle, X, 
  Send, Bot,
  User, Sparkles,
  Settings, Mic,
  MicOff, Paperclip,
  MoreHorizontal
} from 'lucide-react';''interface Message {
  id: string;
  text: string;
  sender: 'user' | 'assistant';'  timestamp: Date;'  isTyping?: boolean;
  attachments?: Array<{
    type: 'image' | 'file' | 'video';'    url: string;'    name: string;
    size?: string;
  }>;
  metadata?: {
    confidence?: number;
    sources?: string[];
    suggestions?: string[];
    actionRequired?: boolean;
  };
}

interface ChatAssistantProps {
  children?: React.ReactNode;
  enabled?: boolean;
  position?: 'bottom-right' | 'bottom-left' | 'top-right' | 'top-left';'  theme?: 'light' | 'dark' | 'auto';'  language?: string;'  maxMessages?: number;
  enableVoice?: boolean;
  enableFileUpload?: boolean;
  enableSuggestions?: boolean;
}

export const ChatAssistant: React.FC<ChatAssistantProps> = ({
  enabled = true, position = 'bottom-right','  theme = 'dark', language = 'en','  maxMessages = 100, enableVoice = true,'  enableFileUpload = true, enableSuggestions = true
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1', text: 'Hello! I\'m your AI assistant. How can I help you today?',''      sender: 'assistant', timestamp: new Date()'    }'  ]);
  const [inputValue, setInputValue] = useState('');'  const [isTyping, setIsTyping] = useState(false);'  const [isListening, setIsListening] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {;
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });'  };'
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async () => {;
    if (!inputValue.trim()) return;

    const userMessage: Message = {;
      id: Date.now().toString(), text: inputValue,;
      sender: 'user', timestamp: new Date()'    };'
    setMessages(prev => [...prev, userMessage]);
    setInputValue('');'    setIsTyping(true);'
    // Simulate AI response
    setTimeout(() => {
      const aiResponse: Message = {;
        id: (Date.now() + 1).toString(), text: getAIResponse(inputValue), sender: 'assistant','        timestamp: new Date(), metadata: {'          confidence: 0.95,;
          suggestions: ['Learn more about our services', 'Schedule a consultation', 'View pricing']'        }'      };
      
      setMessages(prev => [...prev, aiResponse]);
      setIsTyping(false);
    }, 1500);
  };

  const getAIResponse = (input: string): string => {;
    const responses = [;
      "I&apos;d be happy to help you with that! Can you provide more details about your specific needs?", ''      "That&apos;s a great question! Our team specializes in AI, cybersecurity, and cloud solutions. Which area interests you most?", ''      "Thank you for reaching out! I can connect you with one of our experts to discuss your requirements in detail.","      "Based on your query, I recommend exploring our comprehensive service offerings. Would you like me to guide you through them?","      "Excellent! We have extensive experience in that area. Let me provide you with some relevant information and next steps.""    ];"    return responses[Math.floor(Math.random() * responses.length)];
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {;
    if (e.key === 'Enter' && !e.shiftKey) {'      e.preventDefault();'      handleSendMessage();
    }
  };

  const toggleVoice = () => {;
    setIsListening(!isListening);
    // Voice functionality would be implemented here
  };

  const positionClasses = {;
    'bottom-right': 'bottom-4 right-4', 'bottom-left': 'bottom-4 left-4','    'top-right': 'top-4 right-4', 'top-left': 'top-4 left-4''  };'
  if (!enabled) return null;

  return (
    <div className={`fixed ${positionClasses[position]} z-50`}>`      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.2 }}
            className="mb-4 w-80 h-96 bg-slate-900/95 backdrop-blur-lg border border-white/20 rounded-xl shadow-2xl flex flex-col""          >"            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-white/10">"              <div className="flex items-center gap-3">"                <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center">"                  <Bot className="w-5 h-5 text-white" />"                </div>"                <div>
                  <h3 className="text-white font-semibold text-sm">AI Assistant</h3>"                  <p className="text-gray-400 text-xs">Online</p>"                </div>"              </div>
              <div className="flex items-center gap-2">"                <button "                  className="text-gray-400 hover:text-white transition-colors p-1""                  onClick={() => setIsOpen(false)}"                >
                  <Settings className="w-4 h-4" />"                </button>"                <button 
                  className="text-gray-400 hover: text-white transition-colors p-1""                  onClick={() => setIsOpen(false)}"                >
                  <X className="w-4 h-4" />"                </button>"              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3">"              {messages.map((message) => ("                <div 
                  key={message.id}
                  className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}'                >'                  <div className={`max-w-[80%] ${`                    message.sender === 'user' '                      ? 'bg-cyan-500 text-white' '                      : 'bg-white/10 text-gray-100''                  } rounded-lg p-3`}>'                    <p className="text-sm">{message.text}</p>"                    <p className={`text-xs mt-1 ${"                      message.sender === 'user' ? 'text-cyan-100' : 'text-gray-400''                    }`}>'                      {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}'                    </p>'                  </div>`                </div>
              ))}
              
              {isTyping && (
                <div className="flex justify-start">"                  <div className="bg-white/10 text-gray-100 rounded-lg p-3">"                    <div className="flex space-x-1">"                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>"                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>'                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>'                    </div>'                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 border-t border-white/10">"              <div className="flex items-center gap-2">"                <div className="flex-1 relative">"                  <input"                    ref={inputRef}
                    type="text""                    value={inputValue}"                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Type your message...""                    className="w-full bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-white text-sm placeholder-gray-400 focus: outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400""                  />"                </div>
                
                {enableFileUpload && (
                  <button className="text-gray-400 hover:text-white transition-colors p-2">"                    <Paperclip className="w-4 h-4" />"                  </button>"                )}
                
                {enableVoice && (
                  <button 
                    onClick={toggleVoice}
                    className={`transition-colors p-2 ${`                      isListening ? 'text-red-400' : 'text-gray-400 hover:text-white''                    }`}'                  >`                    {isListening ? <MicOff className="w-4 h-4" /> : <Mic className="w-4 h-4" />}"                  </button>"                )}
                
                <button 
                  onClick={handleSendMessage}
                  disabled={!inputValue.trim()}
                  className="bg-cyan-500 hover: bg-cyan-600 disabled:opacity-50 disabled:cursor-not-allowed text-white p-2 rounded-lg transition-colors""                >"                  <Send className="w-4 h-4" />"                </button>"              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full shadow-lg flex items-center justify-center text-white hover: shadow-xl transition-shadow""        whileHover={{ scale: 1.05 }}"        whileTap={{ scale: 0.95 }}
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}"      </motion.button>"    </div>
  );
};

export default ChatAssistant;