import React from 'react';

interface Page_cleanProps {
  className?: string;
  children?: React.ReactNode;
}

export default function Page_clean({ className = '', children }: Page_cleanProps) {
  return (
    <div className={`${className}`}>
      {children}
    </div>
  );
}