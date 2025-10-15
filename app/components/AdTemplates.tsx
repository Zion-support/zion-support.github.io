import React from 'react';

interface AdTemplatesProps {
  className?: string;
  children?: React.ReactNode;
}

export default function AdTemplates({ className = '', children }: AdTemplatesProps) {
  return (
    <div className={className}>
      {children}
    </div>
  );
}
