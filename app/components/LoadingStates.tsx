import React from 'react';
import { Loader2, Brain, Shield, Zap, Globe } from 'lucide-react';

interface LoadingPageProps {
  type?: 'loading' | 'ai' | 'security' | 'performance' | 'global';
  message?: string;
  variant?: 'default' | 'futuristic' | 'minimal';
  size?: 'sm' | 'md' | 'lg';
}

export const LoadingPage: React.FC<LoadingPageProps> = ({ 
  type = 'loading', 
  message = 'Loading...', 
  variant = 'futuristic',
  size = 'md'
}) => {
  const getIcon = () => {
    switch (type) {
      case 'ai':
        return <Brain className="animate-pulse" />;
      case 'security':
        return <Shield className="animate-pulse" />;
      case 'performance':
        return <Zap className="animate-pulse" />;
      case 'global':
        return <Globe className="animate-pulse" />;
      default:
        return <Loader2 className="animate-spin" />;
    }
  };

  const getSizeClasses = () => {
    switch (size) {
      case 'sm':
        return 'w-4 h-4';
      case 'lg':
        return 'w-12 h-12';
      default:
        return 'w-8 h-8';
    }
  };

  if (variant === 'minimal') {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-900">
        <div className="flex items-center space-x-3">
          <Loader2 className={`${getSizeClasses()} animate-spin text-cyan-400`} />
          <span className="text-white text-lg">{message}</span>
        </div>
      </div>
    );
  }

  if (variant === 'default') {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-900">
        <div className="text-center">
          <div className="flex justify-center mb-4">
            {getIcon()}
          </div>
          <p className="text-white text-lg">{message}</p>
        </div>
      </div>
    );
  }

  // Futuristic variant
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="relative z-10 text-center">
        <div className="flex justify-center mb-6">
          <div className="relative">
            <div className={`${getSizeClasses()} text-cyan-400 animate-spin`}>
              {getIcon()}
            </div>
            <div className="absolute inset-0 rounded-full border-2 border-cyan-400/30 animate-ping"></div>
          </div>
        </div>
        
        <h2 className="text-2xl font-bold text-white mb-2">
          {type === 'ai' && 'Initializing AI Systems...'}
          {type === 'security' && 'Securing Connection...'}
          {type === 'performance' && 'Optimizing Performance...'}
          {type === 'global' && 'Connecting Globally...'}
          {type === 'loading' && 'Loading...'}
        </h2>
        
        <p className="text-gray-300 mb-6">{message}</p>
        
        <div className="flex justify-center space-x-1">
          <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce"></div>
          <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce delay-100"></div>
          <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce delay-200"></div>
        </div>
      </div>
    </div>
  );
};

export const ServiceLoading: React.FC<{ service: string }> = ({ service }) => {
  const getServiceIcon = (serviceName: string) => {
    switch (serviceName.toLowerCase()) {
      case 'ai':
      case 'artificial intelligence':
        return <Brain className="w-8 h-8 text-cyan-400 animate-pulse" />;
      case 'security':
      case 'cybersecurity':
        return <Shield className="w-8 h-8 text-green-400 animate-pulse" />;
      case 'performance':
      case 'optimization':
        return <Zap className="w-8 h-8 text-yellow-400 animate-pulse" />;
      case 'global':
      case 'worldwide':
        return <Globe className="w-8 h-8 text-blue-400 animate-pulse" />;
      default:
        return <Loader2 className="w-8 h-8 text-cyan-400 animate-spin" />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
      <div className="text-center">
        <div className="flex justify-center mb-6">
          {getServiceIcon(service)}
        </div>
        <h2 className="text-2xl font-bold text-white mb-2">
          Loading {service}...
        </h2>
        <p className="text-gray-300">
          Please wait while we prepare your experience
        </p>
      </div>
    </div>
  );
};

export const PageLoading: React.FC<{ page: string }> = ({ page }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
      <div className="text-center">
        <div className="flex justify-center mb-6">
          <Loader2 className="w-12 h-12 text-cyan-400 animate-spin" />
        </div>
        <h2 className="text-2xl font-bold text-white mb-2">
          Loading {page}...
        </h2>
        <p className="text-gray-300">
          Preparing the best experience for you
        </p>
      </div>
    </div>
  );
};

export default LoadingPage;