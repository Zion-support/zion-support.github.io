import React from 'react';
import { Link } from 'react-router-dom';

interface SkipLinkProps {
  to: string;
  children: React.ReactNode;
  className?: string;
}

const SkipLink: React.FC<SkipLinkProps> = ({ 
  to, 
  children, 
  className = '' 
}) => {
  return (
    <Link
      to={to}
      className={`sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:bg-cyan-600 focus:text-white focus:px-4 focus:py-2 focus:rounded-lg focus:font-semibold focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-slate-900 transition-all duration-200 ${className}`}
      data-skip-link="true"
    >
      {children}
    </Link>
  );
};

export default SkipLink;