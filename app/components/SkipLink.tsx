import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SkipLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

const SkipLink: React.FC<SkipLinkProps> = ({
  href,
  children,
  className = ''
}) => {
  return (
    <>
      <Helmet>
        <title>Skip Navigation - Zion Tech Group</title>
      </Helmet>
      
      <a
        href={href}
        className={`
          sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4
          bg-blue-600 text-white px-4 py-2 rounded-lg font-medium
          z-50 transition-all duration-200
          hover:bg-blue-700 focus:bg-blue-700
          ${className}
        `}
        onClick={(e) => {
          e.preventDefault();
          const target = document.querySelector(href);
          if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
            (target as HTMLElement).focus();
          }
        }}
      >
        {children}
      </a>
    </>
  );
};

export default SkipLink;