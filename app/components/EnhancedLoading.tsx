import React from 'react';
import { Loader2, Sparkles, Zap, Brain, Shield } from 'lucide-react';

interface LoadingProps {
  message?: string;
  showProgress?: boolean;
  progress?: number;
  variant?: 'default' | 'futuristic' | 'minimal';
  size?: 'sm' | 'md' | 'lg';
}

const EnhancedLoading: React.FC<LoadingProps> = ({
  message = 'Loading...',
  showProgress = false,
  progress = 0,
  variant = 'futuristic',
  size = 'md'
}) => {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16'
  };

  const iconSizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8'
  };

  const textSizeClasses = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg'
  };

  if (variant === 'minimal') {
    return (
      <div className="flex items-center justify-center p-8">
        <Loader2 className={`${sizeClasses[size]} text-cyan-400 animate-spin`} />
        {message && (
          <span className={`ml-3 text-gray-300 ${textSizeClasses[size]}`}>
            {message}
          </span>
        )}
      </div>
    );
  }

  if (variant === 'futuristic') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center px-4">
        <div className="max-w-md mx-auto text-center">
          <div className="relative mb-8">
            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
              <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
            </div>
            
            {/* Main loading icon */}
            <div className="relative z-10">
              <div className="w-24 h-24 mx-auto mb-6 relative">
                <div className="absolute inset-0 rounded-full border-4 border-cyan-500/20"></div>
                <div className="absolute inset-0 rounded-full border-4 border-cyan-500 border-t-transparent animate-spin"></div>
                <div className="absolute inset-2 rounded-full bg-gradient-to-r from-cyan-500/10 to-purple-500/10 flex items-center justify-center">
                  <Sparkles className="w-8 h-8 text-cyan-400 animate-pulse" />
                </div>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-white mb-4">
            {message}
          </h2>

          {showProgress && (
            <div className="mb-6">
              <div className="w-full bg-gray-700 rounded-full h-2 mb-2">
                <div 
                  className="bg-gradient-to-r from-cyan-500 to-purple-600 h-2 rounded-full transition-all duration-300 ease-out"
                  style={{ width: `${Math.min(100, Math.max(0, progress))}%` }}
                ></div>
              </div>
              <p className="text-gray-300 text-sm">
                {Math.round(progress)}% complete
              </p>
            </div>
          )}

          {/* Animated dots */}
          <div className="flex justify-center space-x-2">
            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce"></div>
            <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce delay-100"></div>
            <div className="w-2 h-2 bg-pink-400 rounded-full animate-bounce delay-200"></div>
          </div>

          {/* Service icons animation */}
          <div className="mt-8 flex justify-center space-x-4">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-lg flex items-center justify-center animate-pulse">
              <Brain className="w-4 h-4 text-cyan-400" />
            </div>
            <div className="w-8 h-8 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-lg flex items-center justify-center animate-pulse delay-200">
              <Shield className="w-4 h-4 text-emerald-400" />
            </div>
            <div className="w-8 h-8 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-lg flex items-center justify-center animate-pulse delay-400">
              <Zap className="w-4 h-4 text-purple-400" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Default variant
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center px-4">
      <div className="max-w-md mx-auto text-center">
        <div className="w-20 h-20 mx-auto mb-6 relative">
          <Loader2 className={`${sizeClasses[size]} text-cyan-400 animate-spin`} />
        </div>
        
        <h2 className="text-2xl font-bold text-white mb-4">
          {message}
        </h2>

        {showProgress && (
          <div className="mb-6">
            <div className="w-full bg-gray-700 rounded-full h-2 mb-2">
              <div 
                className="bg-gradient-to-r from-cyan-500 to-purple-600 h-2 rounded-full transition-all duration-300 ease-out"
                style={{ width: `${Math.min(100, Math.max(0, progress))}%` }}
              ></div>
            </div>
            <p className="text-gray-300 text-sm">
              {Math.round(progress)}% complete
            </p>
          </div>
        )}

        <p className="text-gray-300">
          Please wait while we prepare everything for you...
        </p>
      </div>
    </div>
  );
};

export default LoadingState;