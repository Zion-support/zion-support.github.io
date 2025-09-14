import React from 'react';

interface UltraFuturisticCardProps {
  children: React.ReactNode;
  className?: string;
}

export default function UltraFuturisticCard({ 
  children, 
  className = '' 
}: UltraFuturisticCardProps) {
  return (
    <div className={`bg-white/10 backdrop-blur-lg border border-white/20 rounded-lg p-6 ${className}`}>
      {children}
    </div>
  );
}