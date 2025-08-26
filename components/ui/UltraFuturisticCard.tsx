import React from 'react';

interface UltraFuturisticCardProps {
  children: React.ReactNode;
  className?: string;
}

export default function UltraFuturisticCard({ children, className = '' }: UltraFuturisticCardProps) {
  return (
    <div className={`bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20 hover:border-cyan-400/50 transition-all duration-300 ${className}`}>
      {children}
    </div>
  );
}