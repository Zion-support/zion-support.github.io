import React from 'react';

interface AnimatedTextProps {
  children: React.ReactNode;
  className?: string;
}

export default function AnimatedText({ children, className = '' }: AnimatedTextProps) {
  return (
    <div className={`animate-pulse ${className}`}>
      {children}
    </div>
  );
}