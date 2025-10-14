'use client';
import React from 'react';

interface AccessibilityAuditProps {
  children?: React.ReactNode;
  className?: string;
}

export default function AccessibilityAudit({ children, className = '' }: AccessibilityAuditProps) {
  return (
    <div className={className}>
      {children}
    </div>
  );
}