import React from 'react';

export default function FuturisticBackground() {
  return (
    <div className="fixed inset-0 -z-10">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900"></div>
      <div className="absolute inset-0 opacity-20">
        <div className="w-full h-full bg-gradient-to-r from-transparent via-cyan-500/10 to-transparent animate-pulse"></div>
      </div>
    </div>
  );
}