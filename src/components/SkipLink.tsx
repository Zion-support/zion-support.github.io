import React from 'react';
import { Link } from 'react-router-dom';

interface SkipLinkProps {
  to: string;
  children: React.ReactNode;
  className?: string;
}

const SkipLink: React.FC<SkipLinkProps> = ({ to, children, className = '' }) => {
  return (
    <Link
      to={to}
      className={`sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-50 bg-cyan-600 text-white px-4 py-2 rounded-lg font-medium transition-all duration-200 hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 ${className}`}
    >
      {children}
    </Link>
  );
};

export default SkipLink;