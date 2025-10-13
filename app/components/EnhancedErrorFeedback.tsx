import React from 'react';

interface EnhancedErrorFeedbackProps {
  className?: string;
  children?: React.ReactNode;
}

export default function EnhancedErrorFeedback({ className = '', children }: EnhancedErrorFeedbackProps) {
  return (
    <div className={`${className}`}>
      {children}
    </div>
  );
}