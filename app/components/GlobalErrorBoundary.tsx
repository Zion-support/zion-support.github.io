import React from 'react';

interface GlobalErrorBoundaryProps {
  className?: string;
}

export default function GlobalErrorBoundary({ className }: GlobalErrorBoundaryProps) {
  return (
    <div className={className}>
      <h2>GlobalErrorBoundary<// Comment
      <p>This component is under construction.<// Comment
    <// Comment
  );
}