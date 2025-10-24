'use client';
import React from 'react';

<<<<<<< HEAD
<<<<<<< HEAD
const SkipLink: React.FC = () => {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-cyan-500 text-white px-4 py-2 rounded-lg z-50"
    >
      Skip to main content
=======
=======
>>>>>>> cursor/delete-records-30ea
interface SkipLinkProps {
  to: string;
  children: React.ReactNode;
}

const SkipLink: React.FC<SkipLinkProps> = ({ to, children }) => {
  return (
    <a
      href={to}
<<<<<<< HEAD
      className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-cyan-500 text-white px-4 py-2 rounded-lg font-medium z-50 transition-all duration-200"
    >
      {children}
>>>>>>> cursor/delete-records-bf70
=======
      className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-cyan-600 text-white px-4 py-2 rounded-lg font-semibold z-50 transition-all duration-200 hover:bg-cyan-700"
    >
      {children}
>>>>>>> cursor/delete-records-30ea
    </a>
  );
};

<<<<<<< HEAD
export default SkipLink;
=======
export default SkipLink;
>>>>>>> cursor/delete-records-30ea
