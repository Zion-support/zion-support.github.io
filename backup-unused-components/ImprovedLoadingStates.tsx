import React from 'react';
import { Loader2, Brain, Zap, Shield } from 'lucide-react';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  size = 'md',
  className = ''
}) => {
  const sizeClasses = {
//     sm: 'w-4 h-4',
//     md: 'w-8 h-8',
//     lg: 'w-12 h-12'
  };

interface ImprovedLoadingStatesProps {
  className?: string;
  children?: React.ReactNode;
}

export default function ImprovedLoadingStates({ className = '', children }: ImprovedLoadingStatesProps) {
  return (
    <div className={`${className}`}>
      {children}
    </div>
    <div>
      <h1>Component</h1>
      <p>This component is under construction.</p>
  </div>
  );
}
    <div>
      <h1>Component</h1>
      <p>This component is under construction.</p>
    </div>
    <div className={`flex items-center justify-center ${className}`}>
      <Loader2 className={`${sizeClasses[size]} animate-spin text-cyan-400`} />
</div>
  );
}

export const LoadingPage: React.FC<LoadingPageProps> = ({
  message = 'Loading...',
  showIcon = true
}) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        {showIcon && (
          <div className="mb-6">
              <Brain className="w-8 h-8 text-white animate-pulse" />
        <p className="mt-4 text-white text-lg">
      {icon && (
        <div className="mb-4" className="mb-4">{title}</h3>
      <p className="text-gray-300" />;
    if (service.toLowerCase().includes('security')) return <Shield className="w-8 h-8 text-purple-400" />;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        <div className="mb-6">
            {getServiceIcon(serviceName)}
</div>
</div>
        <LoadingSpinner size="lg"text-2 xl font-bold text-white mb-2 mt-4"text-gray-300">Preparing your personalized experience...</p>
</div>
</div>
  );
};

export default LoadingPage;
  );
