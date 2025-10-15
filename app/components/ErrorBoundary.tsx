import React from 'react';

interface ErrorBoundaryProps {
  className?: string;
}

export default function ErrorBoundary({ className }: ErrorBoundaryProps) {
  return (
    <div className={className}>
      <h2>ErrorBoundary<// Comment
      <p>This component is under construction.<// Comment
    <// Comment
  );
}