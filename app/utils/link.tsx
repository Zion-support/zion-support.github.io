import React from 'react';

interface LinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export const Link = ({ href, children, className = '' }: LinkProps) => {
  return (
    <a href={href} className={className}>
      {children}
    </a>
  );
};