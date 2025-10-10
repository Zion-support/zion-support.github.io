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
      className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-cyan-600 text-white px-4 py-2 rounded-lg font-semibold z-50">
      {children}
    </a>
  );
};
export default SkipLink;
  </SkipLinkProps>

const SkipLink: React.FC = () => {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-cyan-600 text-white px-4 py-2 rounded-md z-50 font-medium transition-all duration-200 hover:bg-cyan-700"
    >
      Skip to main content
    </a>
  );
};

export default SkipLink;
