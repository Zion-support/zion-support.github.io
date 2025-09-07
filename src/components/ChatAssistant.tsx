import React, { useState } from 'react';

export function ChatAssistant() {
  const [isOpen, setIsOpen] = useState(false);

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 bg-gradient-to-r from-zion-cyan to-zion-purple text-white p-4 rounded-full shadow-2xl hover:shadow-zion-cyan/25 transition-all duration-300 z-50"
      >
        💬
      </button>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 w-80 bg-zion-slate-dark border border-zion-purple/20 rounded-lg shadow-2xl z-50">
      <div className="p-4 border-b border-zion-purple/20">
        <div className="flex items-center justify-between">
          <h3 className="text-white font-semibold">Chat Assistant</h3>
          <button
            onClick={() => setIsOpen(false)}
            className="text-zion-cyan hover:text-white transition-colors"
          >
            ✕
          </button>
        </div>
      </div>
      
      <div className="p-4">
        <div className="bg-zion-slate rounded-lg p-3 mb-4">
          <p className="text-gray-300 text-sm">
            Hello! I'm here to help you with any questions about our services, marketplace, or technical support. How can I assist you today?
          </p>
        </div>
        
        <div className="space-y-2">
          <button className="w-full text-left p-2 text-sm text-gray-300 hover:bg-zion-slate rounded transition-colors">
            Tell me about your AI services
          </button>
          <button className="w-full text-left p-2 text-sm text-gray-300 hover:bg-zion-slate rounded transition-colors">
            How can I get started?
          </button>
          <button className="w-full text-left p-2 text-sm text-gray-300 hover:bg-zion-slate rounded transition-colors">
            Contact sales team
          </button>
        </div>
      </div>
    </div>
  );
}
