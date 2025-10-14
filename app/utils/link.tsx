'use client';

import React from 'react';
import Link from 'next/link';

interface CustomLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  target?: string;
  rel?: string;
}

export default function CustomLink({ 
  href, 
  children, 
  className = '', 
  target, 
  rel 
}: CustomLinkProps) {
  const isExternal = href.startsWith('http') || href.startsWith('//');
  
  if (isExternal) {
    return (
      <a
        href={href}
        className={className}
        target={target || '_blank'}
        rel={rel || 'noopener noreferrer'}
      >
        {children}
      </a>
    );
  }
  
  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}