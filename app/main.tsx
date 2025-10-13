import React from 'react';

interface mainProps {
  className?: string;
  children?: React.ReactNode;
}

export default function main({ className = '', children }: mainProps) {
  return (
    <div className={`${className}`}>
      {children}
    </div>
  );
}