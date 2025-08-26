import React, { useState } from 'react';
import { MessageCircle, X, Send, Bot } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const ChatAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      // Handle message submission here
      console.log('Message sent:', message);
      setMessage('');
    }
  };

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-8 left-8 w-16 h-16 bg-zion-cyan text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-zion-cyan/25 hover:scale-110 transition-all duration-300 z-40"
        aria-label="Open chat assistant"
      >
        <MessageCircle className="w-6 h-6" />
      </button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-24 left-8 w-80 h-96 bg-zion-slate-dark border border-zion-cyan/30 rounded-2xl shadow-2xl shadow-zion-cyan/20 z-50 overflow-hidden"
          >
            {/* Header */}
            <div className="bg-zion-cyan/20 border-b border-zion-cyan/30 p-4 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-zion-cyan rounded-full flex items-center justify-center">
                  <Bot className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">Zion AI Assistant</h3>
                  <p className="text-xs text-zion-slate-light">Ready to help you innovate</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-zion-slate-light hover:text-white transition-colors duration-200"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Chat Messages */}
            <div className="flex-1 p-4 overflow-y-auto">
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-zion-cyan rounded-full flex items-center justify-center flex-shrink-0">
                    <Bot className="w-3 h-3 text-white" />
                  </div>
                  <div className="bg-zion-slate-light/20 rounded-lg p-3 max-w-xs">
                    <p className="text-sm text-white">
                      Hello! I'm your Zion AI assistant. How can I help you discover our innovative services today?
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3 justify-end">
                  <div className="bg-zion-cyan/20 rounded-lg p-3 max-w-xs">
                    <p className="text-sm text-white">
                      I'd like to learn about your quantum computing services
                    </p>
                  </div>
                  <div className="w-6 h-6 bg-zion-purple rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-xs text-white font-bold">U</span>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-zion-cyan rounded-full flex items-center justify-center flex-shrink-0">
                    <Bot className="w-3 h-3 text-white" />
                  </div>
                  <div className="bg-zion-slate-light/20 rounded-lg p-3 max-w-xs">
                    <p className="text-sm text-white">
                      Excellent choice! Our Quantum Neural Network Platform offers revolutionary AI capabilities with 1000x faster training times. Would you like me to schedule a consultation?
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Input Form */}
            <form onSubmit={handleSubmit} className="p-4 border-t border-zion-cyan/30">
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Type your message..."
                  className="flex-1 bg-zion-slate-light/10 border border-zion-cyan/20 rounded-lg px-3 py-2 text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent text-sm"
                />
                <button
                  type="submit"
                  className="bg-zion-cyan text-white p-2 rounded-lg hover:bg-zion-cyan/80 transition-colors duration-200"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
