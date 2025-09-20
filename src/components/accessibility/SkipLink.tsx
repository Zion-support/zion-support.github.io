import React from 'react';

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
    <a
      href={href}
      className={`
        sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 
        bg-zion-cyan text-white px-4 py-2 rounded-lg font-medium 
        z-50 transition-all duration-200 focus:outline-none focus:ring-2 
        focus:ring-zion-cyan-light focus:ring-offset-2 focus:ring-offset-gray-900
        ${className}
      `}
    >
      {children}
    </a>
  );
};

export const SkipLinks: React.FC = () => {
  return (
    <>
      <SkipLink href="#main-content">
        Skip to main content
      </SkipLink>
      <SkipLink href="#navigation">
        Skip to navigation
      </SkipLink>
      <SkipLink href="#footer">
        Skip to footer
      </SkipLink>
    </>
  );
};

export default SkipLink;