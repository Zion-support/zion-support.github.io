import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

interface LinkProps {
  to: string;
  children: React.ReactNode;
  className?: string;
  external?: boolean;
}

export default function Link({ 
  to, 
  children, 
  className = '', 
  external = false 
}: LinkProps) {
  if (external) {
    return (
      <a
        href={to}
        className={className}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    );
  }

  return (
    <RouterLink to={to} className={className}>
      {children}
    </RouterLink>
  );
}