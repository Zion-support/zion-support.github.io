import React from 'react';

interface ServicePageTemplateProps {
  className?: string;
  children?: React.ReactNode;
}

export default function ServicePageTemplate({ className = '', children }: ServicePageTemplateProps) {
  return (
    <div className={className}>
      {children}
    </div>
  );
}
