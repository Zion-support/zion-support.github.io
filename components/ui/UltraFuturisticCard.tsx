import React from 'react';

interface UltraFuturisticCardProps {
  children: React.ReactNode;
  className?: string;
  variant?: string;
}

export default function UltraFuturisticCard({ children, className = '', variant = 'default' }: UltraFuturisticCardProps) {
  return (
    <div className={`bg-white/10 backdrop-blur-lg rounded-lg p-6 border border-white/20 ${className}`}>
      {children}
    </div>
  );
}
