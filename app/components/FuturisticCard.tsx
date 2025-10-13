import React from 'react';

interface FuturisticCardProps {
  className?: string;
  children?: React.ReactNode;
}

export default function FuturisticCard({ className = '', children }: FuturisticCardProps) {
  return (
    <div className={`${className}`}>
      {children}
    </div>
  );
}