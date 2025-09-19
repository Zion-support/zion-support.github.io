import React from 'react';
import { Loader2 } from 'lucide-react';
interface LoadingSpinnerProps {,
  size?: 'sm' | 'md' | 'lg';
  text?: string;
  className?: string;
}
,
const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({,
  size = 'md';
  text;
  className = '',
}) => {,
  const sizeClasses = {,
    sm: 'w-4 h-4';
    md: 'w-6 h-6';
    lg: 'w-8 h-8',};
  const textSizeClasses = {,
    sm: 'text-sm';
    md: 'text-base';
    lg: 'text-lg',};
  const spinner = (,
    <div className={`flex items-center justify-center ${className}`}>,
      <Loader2 className={`animate-spin ${sizeClasses[size]}`} />,
      {text && (,
        <span className={`ml-2 ${textSizeClasses[size]}`}>{text}</span>,
      )}
    </div>,
  );
  return spinner;
};
export default LoadingSpinner;