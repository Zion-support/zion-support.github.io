import React from 'react';

interface NotFoundProps {
  className?: string;
  children?: React.ReactNode;
}

export default function NotFound({ className = '', children }: NotFoundProps) {
  return (
    <div className={`${className}`}>
      {children}
    </div>
  );
}