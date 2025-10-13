import React from 'react';

interface EnhancedFooterProps {
  className?: string;
  children?: React.ReactNode;
}

export default function EnhancedFooter({ className = '', children }: EnhancedFooterProps) {
  return (
    <div className={`${className}`}>
      {children}
    </div>
  );
}