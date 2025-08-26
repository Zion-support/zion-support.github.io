import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  className?: string;
  variant?: string;
}

export default function Button({ children, href, className = '', variant = 'default' }: ButtonProps) {
  if (href) {
    return (
      <a href={href} className={`inline-block px-4 py-2 rounded-lg bg-blue-500 text-white ${className}`}>
        {children}
      </a>
    );
  }
  
  return (
    <button className={`px-4 py-2 rounded-lg bg-blue-500 text-white ${className}`}>
      {children}
    </button>
  );
}
