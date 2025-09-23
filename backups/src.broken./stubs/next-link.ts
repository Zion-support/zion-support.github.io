import React from 'react';

// Next.js Link stub for Vite compatibility
interface LinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  target?: string;
  rel?: string;
  onClick?: (e: React.MouseEvent) => void;
  [key: string]: unknown;
}

export const Link: React.FC<LinkProps> = ({ href, children, ...props }) => {
  return React.createElement('a', { href, ...props }, children);
};

export default Link;