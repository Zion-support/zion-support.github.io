import React from 'react';

interface AccessibilityEnhancerProps {
  className?: string;
  children?: React.ReactNode;
}

export default function AccessibilityEnhancer({ className = '', children, ...props }: AccessibilityEnhancerProps) {
    return (
        <div className="component" {...props}>
          {children}
        </div>
      );
}
