import React from 'react';

interface FuturisticCardProps {
  children: React.ReactNode;
  className?: string;
  [key: string]: any;
}

export default function FuturisticCard({ children, className = '', ...props }: FuturisticCardProps) {
  return (
    <div className={`futuristiccard-component ${className}`} {...props}>
      {children}
    </div>
  );
}