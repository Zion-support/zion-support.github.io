'use client';

import React from 'react';

<<<<<<< HEAD
const SkipLink: React.FC = () => {
=======
interface SkipLinkProps {
  to: string,
  children: React.ReactNode;
}

const SkipLink: React.FC<SkipLinkProps> = ({ to, children }) => {
>>>>>>> cursor/fix-errors-and-merge-to-main-e3dc
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-cyan-600 text-white px-4 py-2 rounded-lg font-semibold z-50"
    >
      Skip to main content
    </a>
  );
};

export default SkipLink;