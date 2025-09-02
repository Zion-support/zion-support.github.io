import React from 'react';

type PageTransitionProps = {
  children: React.ReactNode;
  className?: string;
};

// Minimal no-op transition wrapper to satisfy imports during build
export default function PageTransition({ children, className }: PageTransitionProps) {
  return <div className={className}>{children}</div>;
}

