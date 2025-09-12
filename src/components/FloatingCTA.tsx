import React from 'react';

export const FloatingCTA: React.FC = () => {
  return (
    <div className="fixed bottom-4 right-4 z-50">
      <button className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-700 transition-colors">
        Get Started
      </button>
    </div>
  );
};