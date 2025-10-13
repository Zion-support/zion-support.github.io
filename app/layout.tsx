import React from 'react';

interface layoutProps {
  className?: string;
  children?: React.ReactNode;
}

export default function layout({ className = '', children }: layoutProps) {
  return (
    <div className={`${className}`}>
      {children}
    </div>
  );
}