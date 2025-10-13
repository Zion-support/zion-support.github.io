import React from 'react';

interface notfoundProps {
  className?: string;
  children?: React.ReactNode;
}

export default function notfound({ className = '', children }: notfoundProps) {
  return (
    <div className={`${className}`}>
      {children}
    </div>
  );
}