import React from 'react';

interface linkProps {
  className?: string;
  children?: React.ReactNode;
}

export default function link({ className = '', children }: linkProps) {
  return (
    <div className={`${className}`}>
      {children}
    </div>
  );
}