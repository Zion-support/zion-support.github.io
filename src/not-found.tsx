import React from 'react';

interface NotFoundProps {
  className?: string;
}

export default function NotFound({ className }: NotFoundProps) {
  return (
    <div className={className}>
      <h1>not-found</h1>
      <p>Component content</p>
    </div>
  );
}