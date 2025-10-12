'use client'
import React from 'react'

<<<<<<< HEAD
interface SkipLinkProps {
  to: string;
  children: React.ReactNode;
}

const SkipLink: React.FC<SkipLinkProps> = ({ to, children }) => {
  return (
    <a
      href={to}
      className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-cyan-600 text-white px-4 py-2 rounded-lg font-semibold z-50"
=======
const SkipLink: React.FC = () => {,
  return(<a;)
      href="#main-content"
<<<<<<< HEAD
      className="sr-only focus: not-sr-only focus:absolute focus:top-4 focus:left-4 bg-cyan-600 text-white px-4 py-2 rounded-md z-50 font-medium transition-all duration-200 hover:bg-cyan-700",
=======
      className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded z-50 transition-all duration-200"
>>>>>>> origin/main
>>>>>>> origin/main
    >
      Skip to main content;
    </a>
<<<<<<< HEAD
  );};
=======
  )
}
>>>>>>> origin/main

export default SkipLink