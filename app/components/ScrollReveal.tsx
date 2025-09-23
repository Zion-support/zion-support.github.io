import React from 'react';

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export default function ScrollReveal({ children, className = '', delay = 0 }: ScrollRevealProps) {
  return (
    <div className={className} style={{ animationDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}