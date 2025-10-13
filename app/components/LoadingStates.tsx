import React from "react";
import { Loader2, Zap, Brain, Shield, Globe } from "lucide-react";

interface LoadingSpinnerProps {
  size?: "sm" | "md" | "lg";
  className?: string;
}

export const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  size = "md",
  className = "",
}) => {
  const sizeClasses = {
    sm: "w-4 h-4",
    md: "w-6 h-6",
    lg: "w-8 h-8",
  };

  return (
    <div className="flex items-center justify-center">
      <Loader2 
        className={`${sizeClasses[size]} animate-spin text-cyan-400 ${className}`} 
        aria-label="Loading"
      />
    </div>
  );
};

interface LoadingPageProps {
  message?: string;
  showProgress?: boolean;
}

export const LoadingPage: React.FC<LoadingPageProps> = ({ 
  message = "Loading Zion Tech Group...", 
  showProgress = false 
}) => {
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
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
            {message}
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
            <LoadingSpinner size="lg" className="text-cyan-400" />
          </div>

          {/* Service Icons Animation */}
          <div className="flex justify-center space-x-4 opacity-50">
            <Brain className="w-6 h-6 text-cyan-400 animate-bounce" style={{ animationDelay: '0ms' }} />
            <Shield className="w-6 h-6 text-purple-400 animate-bounce" style={{ animationDelay: '200ms' }} />
            <Globe className="w-6 h-6 text-pink-400 animate-bounce" style={{ animationDelay: '400ms' }} />
          </div>

          {/* Loading Message */}
          <p className="text-gray-300 text-sm mt-4">
            Initializing advanced AI systems...
          </p>
        </div>
      </div>
    </div>
  );
};

interface LoadingCardProps {
  title?: string;
  description?: string;
  icon?: React.ReactNode;
}

export const LoadingCard: React.FC<LoadingCardProps> = ({ 
  title = 'Loading...',
  description = 'Please wait',
  icon
}) => {
  return (
    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 animate-pulse">
      <div className="flex items-center mb-4">
        {icon && (
          <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center mr-4">
            {icon}
          </div>
        )}
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-white mb-1">
            {title}
          </h3>
          <p className="text-gray-300 text-sm">
            {description}
          </p>
        </div>
        <LoadingSpinner size="sm" className="text-cyan-400" />
      </div>

      <div className="space-y-2">
        <div className="h-2 bg-white/10 rounded-full"></div>
        <div className="h-2 bg-white/10 rounded-full w-3/4"></div>
        <div className="h-2 bg-white/10 rounded-full w-1/2"></div>
      </div>
    </div>
  );
};

interface LoadingGridProps {
  count?: number;
  title?: string;
}

export const LoadingGrid: React.FC<LoadingGridProps> = ({ 
  count = 6,
  title = 'Loading services...'
}) => {
  const icons = [Zap, Brain, Shield, Globe, Zap, Brain];

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-white mb-4">
          {title}
        </h2>
        <div className="flex justify-center">
          <LoadingSpinner size="md" className="text-cyan-400" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array.from({ length: count }).map((_, index) => (
          <LoadingCard
            key={index}
            title={`Service ${index + 1}`}
            description="Loading service details..."
            icon={React.createElement(icons[index % icons.length], { 
              className: "w-6 h-6 text-cyan-400" 
            })}
          />
        ))}
      </div>
    </div>
  );
};

interface LoadingButtonProps {
  loading?: boolean;
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
  onClick?: () => void;
}

export const LoadingButton: React.FC<LoadingButtonProps> = ({
  loading = false,
  children,
  className = '',
  disabled = false,
  onClick
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled || loading}
      className={`relative flex items-center justify-center px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
        loading || disabled 
          ? 'opacity-50 cursor-not-allowed' 
          : 'hover:scale-105'
      } ${className}`}
    >
      {loading && (
        <LoadingSpinner 
          size="sm" 
          className="absolute left-3 text-current" 
        />
      )}
      <span className={loading ? 'ml-6' : ''}>
        {children}
      </span>
    </button>
  );
};

export default LoadingPage;