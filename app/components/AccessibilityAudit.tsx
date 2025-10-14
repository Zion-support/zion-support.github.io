import React from 'react';

interface AccessibilityAuditProps {
  className?: string;
  children?: React.ReactNode;
}

const AccessibilityAudit: React.FC<AccessibilityAuditProps> = ({ className = '', children }) => {
  return (
    <div className={`accessibilityaudit ${className}`}>
      {children}
    </div>
  );
};

export default AccessibilityAudit;