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

export const LoadingDots: React.FC = () => {
  return (
    <div className="flex space-x-1">
      <div
        className="w-2 h-2 bg-pink-500 rounded-full animate-bounce"
        style={{ animationDelay: "0.1s" }}
      ></div>
      <div
        className="w-2 h-2 bg-cyan-500 rounded-full animate-bounce"
        style={{ animationDelay: "0.2s" }}
      ></div>
      <div
        className="w-2 h-2 bg-green-500 rounded-full animate-bounce"
        style={{ animationDelay: "0.3s" }}
      ></div>
    </div>
  );
};

export const LoadingPulse: React.FC = () => {
  return (
    <div className="flex space-x-2">
      <div
        className="w-3 h-3 bg-gradient-to-r from-pink-500 to-cyan-500 rounded-full animate-pulse"
        style={{ animationDelay: "0.2s" }}
      ></div>
      <div
        className="w-3 h-3 bg-gradient-to-r from-cyan-500 to-green-500 rounded-full animate-pulse"
        style={{ animationDelay: "0.4s" }}
      ></div>
      <div
        className="w-3 h-3 bg-gradient-to-r from-green-500 to-purple-500 rounded-full animate-pulse"
        style={{ animationDelay: "0.6s" }}
      ></div>
    </div>
  );
};

export const LoadingSkeleton: React.FC<{ lines?: number }> = ({
  lines = 3,
}) => {
  return (
    <div className="space-y-2">
      {Array.from({ length: lines }).map((_, index) => (
        <div
          key={index}
          className="h-4 bg-gray-300 rounded animate-pulse"
        ></div>
      ))}
    </div>
  );
};
