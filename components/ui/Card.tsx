import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export default function Card({ children, className = '' }: CardProps) {
  return (
    <div className={`bg-white/10 backdrop-blur-lg rounded-lg p-6 border border-white/20 ${className}`}>
      {children}
    </div>
  );
}
