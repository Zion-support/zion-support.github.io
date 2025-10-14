'use client';
import React from 'react';

interface EnhancedErrorFeedbackProps {
  children?: React.ReactNode;
  className?: string;
}

export default function EnhancedErrorFeedback({ children, className = '' }: EnhancedErrorFeedbackProps) {
  return (
    <div className={className}>
      {children}
    </div>
  );
}