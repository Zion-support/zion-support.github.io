import React from 'react';

export const FloatingElements = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {/* Floating circles */}
      <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-cyan-500/10 rounded-full animate-pulse"></div>
      <div className="absolute top-3/4 right-1/4 w-24 h-24 bg-purple-500/10 rounded-full animate-bounce"></div>
      <div className="absolute top-1/2 left-1/2 w-16 h-16 bg-pink-500/10 rounded-full animate-ping"></div>
      
      {/* Floating geometric shapes */}
      <div className="absolute top-1/3 right-1/3 w-8 h-8 bg-gradient-to-r from-cyan-400 to-purple-500 transform rotate-45 animate-spin"></div>
      <div className="absolute bottom-1/3 left-1/3 w-6 h-6 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full animate-pulse"></div>
      
      {/* Gradient orbs */}
      <div className="absolute top-1/6 right-1/6 w-40 h-40 bg-gradient-radial from-cyan-500/20 to-transparent rounded-full animate-pulse"></div>
      <div className="absolute bottom-1/6 left-1/6 w-36 h-36 bg-gradient-radial from-purple-500/20 to-transparent rounded-full animate-bounce"></div>
    </div>
  );
};