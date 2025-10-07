import React from 'react';

interface AccessibilityEnhancerProps {
  className?: string;
  children?: React.ReactNode;
}

const AccessibilityEnhancer = React.memo(function AccessibilityEnhancer({
  className = '',
  children,
}: AccessibilityEnhancerProps) {
  return <div className={className}>{children}</div>;
});

export default AccessibilityEnhancer;
