'use client';
import React from 'react';

interface LinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  target?: string;
  rel?: string;
  onClick?: () => void;
  'aria-label'?: string;
}

export const Link: React.FC<LinkProps> = ({
  href,
  children,
  className = '',
  target,
  rel,
  onClick,
  'aria-label': ariaLabel
}) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (onClick) {
      onClick();
    }
    
    // If it's an internal link, prevent default and use client-side navigation
    if (href.startsWith('/') && !target) {
      e.preventDefault();
      window.location.href = href;
    }
  };

  return (
    <a
      href={href}
      className={className}
      target={target}
      rel={rel}
      onClick={handleClick}
      aria-label={ariaLabel}
    >
      {children}
    </a>
  );
};