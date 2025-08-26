import React, { useState } from 'react';

export const ChatAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Chat Button */}
      <div className="fixed bottom-6 left-6 z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full p-4 shadow-2xl shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all duration-300 transform hover:scale-110"
          title="Chat with us"
        >
          <span className="text-2xl">💬</span>
        </button>
      </div>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 left-6 z-50 w-80 h-96 bg-gradient-to-br from-slate-800 to-slate-700 rounded-2xl border border-slate-600 shadow-2xl shadow-cyan-500/25">
          <div className="p-4 border-b border-slate-600">
            <div className="flex items-center justify-between">
              <h3 className="text-white font-semibold">Zion AI Assistant</h3>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-white transition-colors"
              >
                ✕
              </button>
            </div>
          </div>
          
          <div className="p-4 h-64 overflow-y-auto">
            <div className="text-center text-gray-400 text-sm">
              <p>👋 Hi! I'm here to help you with any questions about our services.</p>
              <p className="mt-2">How can I assist you today?</p>
            </div>
          </div>
          
          <div className="p-4 border-t border-slate-600">
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Type your message..."
                className="flex-1 px-3 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400"
              />
              <button className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300">
                Send
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
