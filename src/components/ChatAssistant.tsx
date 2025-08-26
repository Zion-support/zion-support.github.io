import React from 'react';

export const ChatAssistant = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button className="w-14 h-14 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110">
        <div className="flex items-center justify-center w-full h-full text-white">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
        </div>
      </button>
    </div>
  );
};

export default ChatAssistant;