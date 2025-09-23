<<<<<<< HEAD
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
=======
"use client";

import React from 'react';

const ScrollReveal: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  return <>{children}</>;
};

export default ScrollReveal;

>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-5719
