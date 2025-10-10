import React from 'react';

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
      target.scrollIntoView({ behavior: 'smooth' });
      (target as HTMLElement).focus();
    }
  };

  return (
    <a
      href={to}
      onClick={handleClick}
      className={`sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded z-50 transition-all duration-200 ${className}`}
    >
      {children}
    </a>
  );
};

export default SkipLink;