import React from 'react';

interface AdtemplatesProps {
  className?: string;
  children?: React.ReactNode;
}

export default function Adtemplates({ className = '', children }: AdtemplatesProps) {
  return (
    <div className={`AdTemplates-component ${className}`}>
      {children}
    </div>
  );
}