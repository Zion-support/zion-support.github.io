import React from 'react';

interface FooterProps {
  className?: string;
  children?: React.ReactNode;
}

export default function Footer({ className = '', children }: FooterProps) {
  return (
    <div className={`${className}`}>
      {children}
    </div>
  );
}