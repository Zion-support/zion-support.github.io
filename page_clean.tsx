import React from 'react';

interface page_cleanProps {
  className?: string;
  children?: React.ReactNode;
}

export default function page_clean({ className = '', children }: page_cleanProps) {
  return (
    <div className={`${className}`}>
      {children}
    </div>
  );
}