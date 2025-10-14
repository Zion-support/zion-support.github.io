'use client';
import React from 'react';

interface SEOAuditProps {
  children?: React.ReactNode;
  className?: string;
}

export default function SEOAudit({ children, className = '' }: SEOAuditProps) {
  return (
    <div className={className}>
      {children}
    </div>
  );
}