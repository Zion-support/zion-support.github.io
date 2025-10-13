import React from 'react';

interface FuturisticCardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export default function FuturisticCard({ children, className = '', onClick }: FuturisticCardProps) {
  return (
    <div 
      className={`bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
}