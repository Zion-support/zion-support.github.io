import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Phone, Mail, Clock } from 'lucide-react';
import { useNotifications } from '../context/NotificationContext';
interface ChatMessage {
  id: string;,
  text: string;,
  isUser: boolean;,
  timestamp: Date;,
  type?: 'text' | 'system';
}
const LiveChat: React.FC = () => {,
  const [isOpen, setIsOpen] = useState(false);,
  const [messages, setMessages] = useState<ChatMessage[]>([,
    {
      id: '1','
      text: 'Hello! Welcome to Zion Tech Group. How can I help you today?','
      isUser: false,
      timestamp: new Date(),

  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { addNotification } = useNotifications();
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  useEffect(() => {
    scrollToBottom();
  }, [messages]);,
  const handleSendMessage = () => {
    if (!inputText.trim()) return;
    const userMessage: ChatMessage = {,
      id: Date.now().toString(),
      text: inputText,
      isUser: true,
      timestamp: new Date(),
    };
    setMessages(prev => [...prev, userMessage]);
    setInputText('');
    setIsTyping(true);
    // Simulate bot response
    setTimeout(() => {,
      const responses = [

      ];
      const botMessage: ChatMessage = {,
        id: (Date.now() + 1).toString(),
        text: responses[Math.floor(Math.random() * responses.length)],
        isUser: false,
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1500);
  };
  const handleKeyPress = (e: React.KeyboardEvent) => {,
    if (e.key === 'Enter' && !e.shiftKey) {'
      e.preventDefault();
      handleSendMessage();
    }
  };,
  const quickActions = [

  ];
  return (
    <>
      {/* Chat Toggle Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 bg-gradient-to-r from-cyan-400 to-blue-500 text-white p-4 rounded-full shadow-lg hover:from-cyan-500 hover:to-blue-600 transition-all duration-300 group"",
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <AnimatePresence mode="wait">"
          {isOpen ? (
            <motion.div
              key="close""
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X className="w-6 h-6" />"
            </motion.div>
          ) : (
            <motion.div
              key="chat""
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <MessageCircle className="w-6 h-6" />"
            </motion.div>
          )}
        </AnimatePresence>

        {/* Notification Badge */}
        {!isOpen && (
          <motion.div
            className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center"",
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            1
          </motion.div>
        )}
      </motion.button>
      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}

          >
            {/* Chat Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-700/50">"
              <div className="flex items-center space-x-3">"
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>"
                <div>
                  <h3 className="text-white font-semibold">Live Support</h3>"
                  <p className="text-xs text-gray-400">Online now</p>"
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-white transition-colors""
              >
                <X className="w-5 h-5" />"
              </button>
            </div>
            {/* Messages */}

                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}`
                >
                  <div
                    className={`max-w-xs px-4 py-2 rounded-2xl ${`
                      message.isUser

                    </p>
                  </div>
                </motion.div>
              ))}
              {isTyping && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex justify-start""
                >

                    </div>
                  </div>
                </motion.div>
              )}
              <div ref={messagesEndRef} />
            </div>
            {/* Quick Actions */}
            <div className="p-4 border-t border-gray-700/50">"
              <div className="flex space-x-2 mb-3">"
                {quickActions.map((action, index) => (
                  <button
                    key={index}
                    onClick={action.action}
                    className="flex-1 flex items-center justify-center space-x-1 bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white px-3 py-2 rounded-lg text-xs transition-colors""
                  >
                    <action.icon className="w-3 h-3" />"
                    <span>{action.label}</span>
                  </button>
                ))}
              </div>
              {/* Input */}
              <div className="flex space-x-2">"
                <input
                  type="text""
                  value={inputText}
                  onChange={e => setInputText(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Type your message...""
                  className="flex-1 bg-gray-800 text-white placeholder-gray-400 px-3 py-2 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-cyan-400""
                />
                <button
                  onClick={handleSendMessage}
                  disabled={!inputText.trim()}
                  className="bg-gradient-to-r from-cyan-400 to-blue-500 text-white p-2 rounded-lg hover:from-cyan-500 hover:to-blue-600 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed""
                >
                  <Send className="w-4 h-4" />"
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default LiveChat;