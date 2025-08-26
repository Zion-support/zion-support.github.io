import React from 'react';

export const FloatingCTA = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button className="bg-gradient-to-r from-zion-cyan to-zion-purple text-white px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
        Get Started
      </button>
    </div>
  );
};