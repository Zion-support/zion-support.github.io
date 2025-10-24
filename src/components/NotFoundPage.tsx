import React from 'react';

interface NotFoundPageProps {
  className?: string;
}

export default function NotFoundPage({ className }: NotFoundPageProps) {
  return (
    <div className={className}>
      <h1>NotFoundPage</h1>
      <p>Component content</p>
    </div>
  );
}