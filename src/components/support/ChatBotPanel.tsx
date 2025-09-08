import React, { useState } from 'react';

export const ChatBotPanel: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');

  return (
    <div className="fixed bottom-4 right-4">
      {isOpen && (
        <div className="bg-white border border-gray-300 rounded-lg shadow-lg w-80 h-96 mb-4">
          <div className="p-4 border-b">
            <h3 className="font-semibold">Chat Support</h3>
          </div>
          <div className="p-4 flex-1">
            <div className="text-sm text-gray-600 mb-4">
              How can we help you today?
            </div>
            <div className="space-y-2">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type your message..."
                className="w-full border border-gray-300 rounded px-3 py-2 text-sm"
              />
              <button className="bg-blue-600 text-white px-4 py-2 rounded text-sm">
                Send
              </button>
            </div>
          </div>
        </div>
      )}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center shadow-lg"
      >
        💬
      </button>
    </div>
  );
};