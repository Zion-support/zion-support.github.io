import React from 'react';

export const FloatingCTA: React.FC = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-lg">
        Get Started
      </button>
    </div>
  );
};