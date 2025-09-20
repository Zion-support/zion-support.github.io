import React from 'react';

export const FloatingCTA = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div className="bg-blue-600 text-white p-4 rounded-xl shadow-lg max-w-sm">
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-center gap-2">
            <span className="text-lg">💬</span>
            <span className="font-semibold">Need Help?</span>
          </div>
        </div>
        <p className="text-sm text-blue-100 mb-3">
          Chat with our experts to get personalized recommendations
        </p>
        <button className="bg-white text-blue-600 px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-50 transition-colors">
          Start Chat
        </button>
      </div>
    </div>
  );
};