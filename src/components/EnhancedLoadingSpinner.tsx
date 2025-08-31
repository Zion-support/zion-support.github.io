import React from 'react';
import { ModernLoadingSpinner } from './ModernLoadingSpinner';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'default' | 'ai' | 'quantum' | 'futuristic' | 'cyber';
  text?: string;
  showProgress?: boolean;
  progress?: number;
  duration?: number;
  onComplete?: () => void;
}

export function EnhancedLoadingSpinner({ 
  size = 'md', 
  variant = 'futuristic',
  text = 'Loading...',
  showProgress = false,
  progress = 0,
  duration = 3000,
  onComplete
}: LoadingSpinnerProps) {
  return (
    <ModernLoadingSpinner
      size={size}
      variant={variant}
      text={text}
      showProgress={showProgress}
      progress={progress}
      duration={duration}
      onComplete={onComplete}
    />
  );
}

// Export as ZionLoadingSpinner for backward compatibility
export const ZionLoadingSpinner = EnhancedLoadingSpinner;

export default EnhancedLoadingSpinner;
