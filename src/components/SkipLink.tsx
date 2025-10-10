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
      onClick={handleClick}
      className={`skip-link absolute top-0 left-0 z-50 bg-cyan-500 text-white px-4 py-2 rounded-br-lg transform -translate-y-full focus:translate-y-0 transition-transform duration-200 font-semibold text-sm ${className}`}
      tabIndex={0}
    >
      {children}
    </Link>
  );
};

export default SkipLink;