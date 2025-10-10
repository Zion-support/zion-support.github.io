// Link utility component

import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

export interface LinkProps {
  to: string;
  children: React.ReactNode;
  className?: string;
  target?: '_blank' | '_self' | '_parent' | '_top';
  rel?: string;
  onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
  [key: string]: any;
}

export const Link: React.FC<LinkProps> = ({
  to,
  children,
  className,
  target,
  rel,
  onClick,
  ...props
}) => {
  // Check if it's an external link
  const isExternal = to.startsWith('http') || to.startsWith('//');
  
  // Check if it's a mailto or tel link
  const isSpecial = to.startsWith('mailto:') || to.startsWith('tel:');

  if (isExternal || isSpecial) {
    return (
      <a
        href={to}
        className={className}
        target={target || (isExternal ? '_blank' : undefined)}
        rel={rel || (isExternal ? 'noopener noreferrer' : undefined)}
        onClick={onClick}
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
      onClick={onClick}
      {...props}
    >
      {children}
    </RouterLink>
  );
};

export default Link;