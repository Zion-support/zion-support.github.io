import React from 'react';

interface ServicepagetemplateProps {
  className?: string;
  children?: React.ReactNode;
}

export default function Servicepagetemplate({ className = '', children }: ServicepagetemplateProps) {
  return (
    <div className={`ServicePageTemplate-component ${className}`}>
      {children}
    </div>
  );
}