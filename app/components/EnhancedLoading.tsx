import React from 'react';
import { Loader2, Brain, Shield, Zap, Globe } from 'lucide-react';

interface EnhancedLoadingProps {
  type?: 'loading' | 'error' | 'success';
  message?: string;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'default' | 'futuristic' | 'minimal';
}

const EnhancedLoading: React.FC<EnhancedLoadingProps> = ({ 
  type = 'loading', 
  message = 'Loading...', 
  size = 'md',
  variant = 'futuristic'
}) => {
  const sizeClasses = {
    sm: 'w-6 h-6',
    md: 'w-8 h-8',
    lg: 'w-12 h-12'
  };

  const iconSize = sizeClasses[size];

  const getIcon = () => {
    if (type === 'loading') return <Loader2 className={`${iconSize} text-cyan-400 animate-spin`} />;
    if (type === 'error') return <Brain className={`${iconSize} text-red-400`} />;
    if (type === 'success') return <Shield className={`${iconSize} text-green-400`} />;
    return <Loader2 className={`${iconSize} text-cyan-400 animate-spin`} />;
  };

  const getVariantClasses = () => {
    switch (variant) {
      case 'futuristic':
        return 'min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900';
      case 'minimal':
        return 'flex items-center justify-center p-8';
      default:
        return 'min-h-screen flex items-center justify-center bg-slate-900';
    }
  };

  return (
    <div className={getVariantClasses()}>
      <div className="text-center">
        <div className="flex justify-center mb-4">
          {getIcon()}
        </div>
        <p className="text-white text-lg font-medium">{message}</p>
        {type === 'loading' && variant === 'futuristic' && (
          <div className="mt-4 flex justify-center space-x-2">
            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce"></div>
            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
          </div>
        )}
      </div>
    </div>
  );
};

export default EnhancedLoading;