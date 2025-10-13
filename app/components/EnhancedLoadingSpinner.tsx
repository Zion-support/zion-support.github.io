import React from 'react';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  text?: string;
=======
import React from 'react';

interface EnhancedloadingspinnerProps {
  className?: string;
  children?: React.ReactNode;
}

export default function Enhancedloadingspinner({ className = '', children, ...props }: EnhancedloadingspinnerProps) {
  return (
    <div className={`enhancedloadingspinner-component ${className}`} {...props}>
      {children}
    </div>
  );
}
