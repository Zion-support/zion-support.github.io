import React from 'react';
import { Loader2, Zap, Brain, Shield } from 'lucide-react';

interface EnhancedLoadingProps {
  message?: string;
  showProgress?: boolean;
  progress?: number;
  variant?: 'default' | 'ai' | 'security' | 'tech';
}

const EnhancedLoading: React.FC<EnhancedLoadingProps> = ({
  message = "Loading Zion Tech Group...",
  showProgress = false,
  progress = 0,
  variant = 'default'
}) => {
  const getIcon = () => {
    switch (variant) {
      case 'ai':
        return <Brain className="w-8 h-8 text-cyan-400" />;
      case 'security':
        return <Shield className="w-8 h-8 text-purple-400" />;
      case 'tech':
        return <Zap className="w-8 h-8 text-pink-400" />;
      default:
        return <Loader2 className="w-8 h-8 text-cyan-400" />;
    }
  };

  const getGradient = () => {
    switch (variant) {
      case 'ai':
        return 'from-cyan-500 to-blue-600';
      case 'security':
        return 'from-purple-500 to-indigo-600';
      case 'tech':
        return 'from-pink-500 to-rose-600';
      default:
        return 'from-cyan-500 to-purple-600';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4">
      <div className="text-center">
        {/* Animated background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        {/* Loading content */}
        <div className="relative z-10">
          {/* Icon with animation */}
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <div className={`w-20 h-20 rounded-full bg-gradient-to-r ${getGradient()} flex items-center justify-center animate-spin`}>
                {getIcon()}
              </div>
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 animate-ping"></div>
            </div>
          </div>

          {/* Loading message */}
          <h2 className="text-2xl font-bold text-white mb-4 animate-fade-in">
            {message}
          </h2>

          {/* Progress bar */}
          {showProgress && (
            <div className="w-64 mx-auto mb-6">
              <div className="bg-white/10 rounded-full h-2 overflow-hidden">
                <div 
                  className={`h-full bg-gradient-to-r ${getGradient()} transition-all duration-300 ease-out`}
                  style={{ width: `${Math.min(100, Math.max(0, progress))}%` }}
                ></div>
              </div>
              <p className="text-sm text-gray-400 mt-2">
                {Math.round(progress)}% Complete
              </p>
            </div>
          )}

          {/* Loading dots */}
          <div className="flex justify-center space-x-2">
            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce"></div>
            <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce delay-100"></div>
            <div className="w-2 h-2 bg-pink-400 rounded-full animate-bounce delay-200"></div>
          </div>

          {/* Additional info */}
          <div className="mt-8 text-sm text-gray-400 max-w-md mx-auto">
            <p>Preparing your experience with cutting-edge technology...</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnhancedLoading;