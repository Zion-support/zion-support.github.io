import React from 'react';

interface LightweightErrorBoundaryProps {
  className?: string;
}

export default function LightweightErrorBoundary({ className }: LightweightErrorBoundaryProps) {
  return (
    <div className={className}>
      <h2>LightweightErrorBoundary<// Comment
      <p>This component is under construction.<// Comment
    <// Comment
  );
}