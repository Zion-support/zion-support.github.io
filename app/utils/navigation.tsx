import React from 'react';

interface navigationProps {
  className?: string;
  children?: React.ReactNode;
}

export default function navigation({ className = '', children }: navigationProps) {
  return (
    <div className={className}>
      {children}
    </div>
  );
}
