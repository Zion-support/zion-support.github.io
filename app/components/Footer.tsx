'use client';
import React from 'react';

interface FooterProps {
  children?: React.ReactNode;
  className?: string;
}

export default function Footer({ children, className = '' }: FooterProps) {
  return (
    <div className={className}>
      {children}
    </div>
  );
}