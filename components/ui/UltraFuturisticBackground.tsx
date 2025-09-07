import React from 'react';

interface UltraFuturisticBackgroundProps {
  children: React.ReactNode;
  className?: string;
}

export default function UltraFuturisticBackground({ children, className = '' }: UltraFuturisticBackgroundProps) {
  return (
    <div className={`relative min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 ${className}`}>
      <div className="absolute inset-0 opacity-20">
        <div className="w-full h-full bg-gradient-to-r from-blue-500/10 to-purple-500/10"></div>
      </div>
      {children}
    </div>
  );
}