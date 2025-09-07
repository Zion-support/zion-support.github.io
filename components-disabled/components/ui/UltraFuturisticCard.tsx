import React from 'react';

interface UltraFuturisticCardProps {
  children: React.ReactNode;
  className?: string;
  glow?: boolean;
}

export default function UltraFuturisticCard({ children, className = '', glow = false }: UltraFuturisticCardProps) {
  return (
    <div className={`relative bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 ${glow ? 'shadow-2xl shadow-blue-500/20' : ''} ${className}`}>
      {children}
    </div>
  );
}