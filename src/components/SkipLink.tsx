import React from 'react';
import { Link } from 'react-router-dom';

interface SkipLinkProps {
  to: string;
  children: React.ReactNode;
}

<<<<<<< HEAD
const SkipLink: React.FC<SkipLinkProps> = ({ to, children }) => {
  return (
    <a
      href={to}
      className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-cyan-500 text-white px-4 py-2 rounded-lg z-50 focus:outline-none focus:ring-2 focus:ring-cyan-300"
=======
const SkipLink: React.FC<SkipLinkProps> = ({ 
  to, 
  children, 
  className = '' 
}) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const target = document.querySelector(to);
    if (target) {
      (target as HTMLElement).focus();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Link
      to={to}
<<<<<<< HEAD
      onClick={handleClick}
      className={`skip-link absolute top-0 left-0 z-50 bg-cyan-500 text-white px-4 py-2 rounded-br-lg transform -translate-y-full focus:translate-y-0 transition-transform duration-200 font-semibold text-sm ${className}`}
      tabIndex={0}
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-9813
=======
      className={`sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:bg-cyan-600 focus:text-white focus:px-4 focus:py-2 focus:rounded-lg focus:font-semibold focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-slate-900 transition-all duration-200 ${className}`}
      data-skip-link="true"
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-69ae
    >
      {children}
    </Link>
  );
};

export default SkipLink;
