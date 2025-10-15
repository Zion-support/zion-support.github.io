import React from 'react';

interface AccessibilityAuditProps {
  className?: string;
  children?: React.ReactNode;
}

export default function AccessibilityAudit({ className = '', children }: AccessibilityAuditProps) {
  return (
    <div className={className}>
      {children}
    </div>
  );
}
