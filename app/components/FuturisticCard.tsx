import React from 'react';

interface FuturisticCardProps {
  children: React.ReactNode;
  className?: string;
}

export default function FuturisticCard({ children, className = '' }: FuturisticCardProps) {
  return (
    <div className={`bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg p-6 ${className}`}>
      {children}
    </div>
  );
}