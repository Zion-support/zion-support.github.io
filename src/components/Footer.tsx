import React from 'react';

interface FooterProps {
  className?: string;
}

export default function Footer({ className }: FooterProps) {
  return (
    <div className={className}>
      <h1>Footer</h1>
      <p>Component content</p>
    </div>
  );
}