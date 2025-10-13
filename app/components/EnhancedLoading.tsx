import React from 'react';
import { Loader2, Brain, Shield, Zap, Globe } from 'lucide-react';

interface EnhancedLoadingProps {
  type?: 'default' | 'ai' | 'security' | 'performance' | 'global';
  text?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}

const EnhancedLoading: React.FC<EnhancedLoadingProps> = ({
  type = 'default',
  text,
  size = 'md',
  className = ''
}) => {
  const icons = {
    default: Loader2,
    ai: Brain,
    security: Shield,
    performance: Zap,
    global: Globe
  };

  const Icon = icons[type];
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8',
    xl: 'w-12 h-12'
  };

  const getLoadingText = () => {
    if (text) return text;
    switch (type) {
      case 'ai': return 'Loading AI solutions...';
      case 'security': return 'Securing your data...';
      case 'performance': return 'Optimizing performance...';
      case 'global': return 'Connecting globally...';
      default: return 'Loading...';
    }
  };

  return (
    <div className={`flex flex-col items-center justify-center space-y-4 ${className}`}>
      <div className="relative">
        <Icon 
          className={`${sizeClasses[size]} animate-spin text-cyan-400`}
          data-testid="loading-icon"
        />
        {type !== 'default' && (
          <div className="absolute inset-0 animate-ping">
            <Icon className={`${sizeClasses[size]} text-cyan-400/30`} />
          </div>
        )}
      </div>
      <div className="text-center">
        <p className="text-gray-300 text-sm animate-pulse">
          {getLoadingText()}
        </p>
        <div className="mt-2 w-32 h-1 bg-gray-700 rounded-full overflow-hidden">
          <div className="h-full bg-gradient-to-r from-cyan-400 to-purple-400 animate-pulse rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default EnhancedLoading;
