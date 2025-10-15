import React from 'react';

interface SEOAuditProps {
  className?: string;
  children?: React.ReactNode;
}

export default function SEOAudit({ className = '', children }: SEOAuditProps) {
  return (
    <div className={className}>
      {children}
    </div>
  );
}
