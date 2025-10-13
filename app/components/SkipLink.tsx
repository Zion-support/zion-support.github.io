'use client';
import React from 'react';

interface SkipLinkProps {
  to: string;
  children: React.ReactNode;
}

const SkipLink: React.FC<SkipLinkProps> = ({ to, children }) => {
  return (
    <a
      href={to}
      className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-cyan-500 text-white px-4 py-2 rounded-lg font-medium z-50 transition-all duration-200"
    >
      {children}
    </a>
  );
};

export default SkipLink;
