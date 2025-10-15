import React from 'react';
import { Loader2, Brain, Shield, Zap, Globe } from 'lucide-react';

interface LoadingPageProps {
  message?: string;
  showProgress?: boolean;
  progress?: number;
}

export const LoadingPage: React.FC<LoadingPageProps> = ({ 
  message = "Loading...", 
  showProgress = false, 
  progress = 0 
}) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
      <div className="text-center">
        <div className="relative mb-8">
          <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 flex items-center justify-center animate-pulse">
            <Loader2 className="w-12 h-12 text-white animate-spin" />
          </div>
          <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-pink-500 to-yellow-500 rounded-full animate-bounce"></div>
        </div>
        
        <h2 className="text-2xl font-bold text-white mb-4">{message}</h2>
        
        {showProgress && (
          <div className="w-64 mx-auto mb-4">
            <div className="bg-gray-700 rounded-full h-2">
              <div 
                className="bg-gradient-to-r from-cyan-500 to-purple-600 h-2 rounded-full transition-all duration-300"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
            <p className="text-sm text-gray-300 mt-2">{progress}% complete</p>
          </div>
        )}
        
        <div className="flex justify-center space-x-2">
          <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce"></div>
          <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
          <div className="w-2 h-2 bg-pink-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
        </div>
      </div>
    </div>
  );
};

interface ServiceLoadingProps {
  serviceType: 'ai' | 'it' | 'saas' | '5g';
  message?: string;
}

export const ServiceLoading: React.FC<ServiceLoadingProps> = ({ 
  serviceType, 
  message 
}) => {
  const getServiceIcon = () => {
    switch (serviceType) {
      case 'ai':
        return <Brain className="w-16 h-16 text-cyan-400" />;
      case 'it':
        return <Shield className="w-16 h-16 text-green-400" />;
      case 'saas':
        return <Zap className="w-16 h-16 text-purple-400" />;
      case '5g':
        return <Globe className="w-16 h-16 text-orange-400" />;
      default:
        return <Loader2 className="w-16 h-16 text-white" />;
    }
  };

  const getServiceMessage = () => {
    if (message) return message;
    
    switch (serviceType) {
      case 'ai':
        return "Initializing AI Solutions...";
      case 'it':
        return "Loading IT Services...";
      case 'saas':
        return "Preparing Micro SaaS...";
      case '5g':
        return "Connecting to 5G Network...";
      default:
        return "Loading...";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
      <div className="text-center">
        <div className="relative mb-8">
          <div className="w-32 h-32 mx-auto rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/20">
            <div className="animate-spin">
              {getServiceIcon()}
            </div>
          </div>
          <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-cyan-400 animate-spin"></div>
        </div>
        
        <h2 className="text-3xl font-bold text-white mb-4">{getServiceMessage()}</h2>
        
        <div className="max-w-md mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                <span className="text-gray-300">Optimizing performance...</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                <span className="text-gray-300">Loading components...</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-pink-400 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                <span className="text-gray-300">Preparing interface...</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

interface SkeletonLoadingProps {
  type: 'card' | 'list' | 'text' | 'image';
  count?: number;
}

export const SkeletonLoading: React.FC<SkeletonLoadingProps> = ({ 
  type, 
  count = 1 
}) => {
  const renderSkeleton = () => {
    switch (type) {
      case 'card':
        return (
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 animate-pulse">
            <div className="w-16 h-16 bg-gray-600 rounded-lg mb-4"></div>
            <div className="h-6 bg-gray-600 rounded mb-3"></div>
            <div className="h-4 bg-gray-600 rounded mb-2"></div>
            <div className="h-4 bg-gray-600 rounded w-3/4"></div>
          </div>
        );
      
      case 'list':
        return (
          <div className="space-y-4">
            {Array.from({ length: count }).map((_, index) => (
              <div key={index} className="flex items-center space-x-4 animate-pulse">
                <div className="w-12 h-12 bg-gray-600 rounded-full"></div>
                <div className="flex-1 space-y-2">
                  <div className="h-4 bg-gray-600 rounded w-3/4"></div>
                  <div className="h-3 bg-gray-600 rounded w-1/2"></div>
                </div>
              </div>
            ))}
          </div>
        );
      
      case 'text':
        return (
          <div className="space-y-3 animate-pulse">
            {Array.from({ length: count }).map((_, index) => (
              <div key={index} className="space-y-2">
                <div className="h-4 bg-gray-600 rounded"></div>
                <div className="h-4 bg-gray-600 rounded w-5/6"></div>
                <div className="h-4 bg-gray-600 rounded w-4/6"></div>
              </div>
            ))}
          </div>
        );
      
      case 'image':
        return (
          <div className="animate-pulse">
            <div className="w-full h-64 bg-gray-600 rounded-lg"></div>
          </div>
        );
      
      default:
        return <div className="animate-pulse bg-gray-600 rounded h-4"></div>;
    }
  };

  return (
    <div className="space-y-4">
      {Array.from({ length: count }).map((_, index) => (
        <div key={index}>
          {renderSkeleton()}
        </div>
      ))}
    </div>
  );
};

interface ErrorLoadingProps {
  error: string;
  onRetry?: () => void;
}

export const ErrorLoading: React.FC<ErrorLoadingProps> = ({ 
  error, 
  onRetry 
}) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
      <div className="text-center">
        <div className="w-24 h-24 mx-auto mb-8 rounded-full bg-red-500/20 flex items-center justify-center">
          <Loader2 className="w-12 h-12 text-red-400 animate-spin" />
        </div>
        
        <h2 className="text-2xl font-bold text-white mb-4">Loading Error</h2>
        <p className="text-gray-300 mb-6 max-w-md mx-auto">{error}</p>
        
        {onRetry && (
          <button
            onClick={onRetry}
            className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
          >
            Try Again
          </button>
        )}
      </div>
    </div>
  );
};

interface ProgressLoadingProps {
  progress: number;
  message: string;
  subMessage?: string;
}

export const ProgressLoading: React.FC<ProgressLoadingProps> = ({ 
  progress, 
  message, 
  subMessage 
}) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
      <div className="text-center max-w-md mx-auto">
        <div className="relative mb-8">
          <div className="w-32 h-32 mx-auto rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/20">
            <span className="text-2xl font-bold text-white">{progress}%</span>
          </div>
          <div 
            className="absolute inset-0 rounded-full border-4 border-transparent border-t-cyan-400 animate-spin"
            style={{ animationDuration: '2s' }}
          ></div>
        </div>
        
        <h2 className="text-2xl font-bold text-white mb-4">{message}</h2>
        {subMessage && (
          <p className="text-gray-300 mb-6">{subMessage}</p>
        )}
        
        <div className="w-full bg-gray-700 rounded-full h-3 mb-4">
          <div 
            className="bg-gradient-to-r from-cyan-500 to-purple-600 h-3 rounded-full transition-all duration-500 ease-out"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        
        <div className="flex justify-center space-x-1">
          {Array.from({ length: 10 }).map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full animate-pulse ${
                index < (progress / 10) ? 'bg-cyan-400' : 'bg-gray-600'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LoadingPage;