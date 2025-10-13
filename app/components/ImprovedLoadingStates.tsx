import React, { useState, useEffect } from 'react';
import { Zap, Brain, Shield, Globe, Loader2 } from 'lucide-react';

interface ImprovedLoadingStatesProps {
  message?: string;
  showProgress?: boolean;
  variant?: 'default' | 'minimal' | 'skeleton';
}

export const ImprovedLoadingPage: React.FC<ImprovedLoadingStatesProps> = ({ 
  message = "Loading Zion Tech Group...", 
  showProgress = false,
  variant = 'default'
}) => {
  const [progress, setProgress] = useState(0);
  const [loadingText, setLoadingText] = useState(message);

  useEffect(() => {
    if (showProgress) {
      const interval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) return 100;
          return prev + Math.random() * 15;
        });
      }, 200);

      return () => clearInterval(interval);
    }
    return undefined;
  }, [showProgress]);

  useEffect(() => {
    if (variant === 'default') {
      const messages = [
        "Initializing AI systems...",
        "Loading advanced analytics...",
        "Preparing cybersecurity tools...",
        "Setting up cloud infrastructure...",
        "Optimizing performance...",
        "Almost ready..."
      ];
      
      let index = 0;
      const interval = setInterval(() => {
        setLoadingText(messages[index]);
        index = (index + 1) % messages.length;
      }, 2000);

      return () => clearInterval(interval);
    }
  }, [variant]);

  if (variant === 'minimal') {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="text-center">
          <Loader2 className="w-8 h-8 text-cyan-400 animate-spin mx-auto mb-4" />
          <p className="text-white text-sm">{loadingText}</p>
        </div>
      </div>
    );
  }

  if (variant === 'skeleton') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-8">
        <div className="max-w-4xl mx-auto space-y-6">
          {/* Header skeleton */}
          <div className="h-12 bg-gray-700 rounded-lg animate-pulse"></div>
          
          {/* Content skeleton */}
          <div className="space-y-4">
            <div className="h-6 bg-gray-700 rounded animate-pulse"></div>
            <div className="h-6 bg-gray-700 rounded animate-pulse w-3/4"></div>
            <div className="h-6 bg-gray-700 rounded animate-pulse w-1/2"></div>
          </div>
          
          {/* Cards skeleton */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="h-32 bg-gray-700 rounded-lg animate-pulse"></div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
      <div className="text-center">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative z-10">
          {/* Logo Animation */}
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 animate-pulse">
              <Zap className="w-10 h-10 text-white" />
            </div>
          </div>

          {/* Loading Text */}
          <h3 className="text-2xl font-bold text-white mb-4 animate-pulse">
            {loadingText}
          </h3>

          {/* Progress Bar */}
          {showProgress && (
            <div className="w-64 mx-auto mb-6">
              <div className="bg-gray-700 rounded-full h-2 overflow-hidden">
                <div 
                  className="bg-gradient-to-r from-cyan-500 to-purple-600 h-full transition-all duration-300 ease-out"
                  style={{ width: `${Math.min(progress, 100)}%` }}
                />
              </div>
              <p className="text-sm text-gray-400 mt-2">
                {Math.round(progress)}% Complete
              </p>
            </div>
          )}

          {/* Loading Spinner */}
          <div className="flex justify-center mb-6">
            <div className="w-8 h-8 border-4 border-cyan-500/30 border-t-cyan-500 rounded-full animate-spin"></div>
          </div>

          {/* Service Icons Animation */}
          <div className="flex justify-center space-x-4 opacity-50">
            <Brain className="w-6 h-6 text-cyan-400 animate-bounce" style={{ animationDelay: '0ms' }} />
            <Shield className="w-6 h-6 text-purple-400 animate-bounce" style={{ animationDelay: '200ms' }} />
            <Globe className="w-6 h-6 text-pink-400 animate-bounce" style={{ animationDelay: '400ms' }} />
          </div>

          {/* Loading Message */}
          <p className="text-gray-300 text-sm mt-4">
            Preparing your experience...
          </p>
        </div>
      </div>
    </div>
  );
};

export const LoadingSkeleton: React.FC<{ lines?: number; className?: string }> = ({
  lines = 3,
  className = ""
}) => {
  return (
    <div className={`space-y-2 ${className}`}>
      {Array.from({ length: lines }).map((_, index) => (
        <div
          key={index}
          className="h-4 bg-gray-300 rounded animate-pulse"
          style={{ width: `${Math.random() * 40 + 60}%` }}
        />
      ))}
    </div>
  );
};

export const LoadingDots: React.FC<{ size?: 'sm' | 'md' | 'lg' }> = ({ size = 'md' }) => {
  const sizeClasses = {
    sm: 'w-1 h-1',
    md: 'w-2 h-2',
    lg: 'w-3 h-3'
  };

  return (
    <div className="flex space-x-1">
      <div
        className={`${sizeClasses[size]} bg-pink-500 rounded-full animate-bounce`}
        style={{ animationDelay: "0.1s" }}
      />
      <div
        className={`${sizeClasses[size]} bg-cyan-500 rounded-full animate-bounce`}
        style={{ animationDelay: "0.2s" }}
      />
      <div
        className={`${sizeClasses[size]} bg-green-500 rounded-full animate-bounce`}
        style={{ animationDelay: "0.3s" }}
      />
    </div>
  );
};

export const LoadingPulse: React.FC<{ size?: 'sm' | 'md' | 'lg' }> = ({ size = 'md' }) => {
  const sizeClasses = {
    sm: 'w-2 h-2',
    md: 'w-3 h-3',
    lg: 'w-4 h-4'
  };

  return (
    <div className="flex space-x-2">
      <div
        className={`${sizeClasses[size]} bg-gradient-to-r from-pink-500 to-cyan-500 rounded-full animate-pulse`}
        style={{ animationDelay: "0.2s" }}
      />
      <div
        className={`${sizeClasses[size]} bg-gradient-to-r from-cyan-500 to-green-500 rounded-full animate-pulse`}
        style={{ animationDelay: "0.4s" }}
      />
      <div
        className={`${sizeClasses[size]} bg-gradient-to-r from-green-500 to-purple-500 rounded-full animate-pulse`}
        style={{ animationDelay: "0.6s" }}
      />
    </div>
  );
};