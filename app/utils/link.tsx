import React from 'react';
import { Link as RouterLink, LinkProps as RouterLinkProps } from 'react-router-dom';

interface LinkProps extends Omit<RouterLinkProps, 'to'> {
  to: string;
  children: React.ReactNode;
  className?: string;
  external?: boolean;
}

const Link: React.FC<LinkProps> = ({ 
  to, 
  children, 
  className = '', 
  external = false, 
  ...props 
}) => {
  if (external) {
    return (
      <a
        href={to}
        className={className}
        target="_blank"
        rel="noopener noreferrer"
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <RouterLink
      to={to}
      className={className}
      {...props}
    >
      {children}
    </RouterLink>
  );
};

export default Link;