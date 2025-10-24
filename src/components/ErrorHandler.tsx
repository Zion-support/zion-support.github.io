import React from 'react';

interface ErrorHandlerProps {
  className?: string;
}

export default function ErrorHandler({ className }: ErrorHandlerProps) {
  return (
    <div className={className}>
      <h1>ErrorHandler</h1>
      <p>Component content</p>
    </div>
  );
}