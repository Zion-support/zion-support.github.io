import React from 'react';

interface ImprovedFooterProps {
  className?: string;
  children?: React.ReactNode;
}

export default function ImprovedFooter({ className = '', children }: ImprovedFooterProps) {
  return (
    <div className={`${className}`}>
      {children}
    </div>
  );
}