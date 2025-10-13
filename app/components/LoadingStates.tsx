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
  message = "Loading...", 
  variant = "futuristic",
  size = 'md'
}) => {
  if (variant === 'minimal') {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-900">
        <div className="flex items-center space-x-3">
          <Loader2 className="w-6 h-6 animate-spin text-cyan-400" />
          <span className="text-white text-lg">{message}</span>
        </div>
      </div>
    );
  }

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
        return 'w-8 h-8';
      case 'lg':
        return 'w-16 h-16';
      default:
        return 'w-12 h-12';
    }
  };

  if (variant === 'futuristic') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center relative overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-purple-500/5 to-pink-500/5 animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]"></div>
        
        <div className="relative z-10 text-center">
          <div className={`${getSizeClasses()} mx-auto mb-6 text-cyan-400`}>
            {getIcon()}
          </div>
          <h2 className="text-2xl font-bold text-white mb-4">
            {message}
          </h2>
          <div className="flex justify-center space-x-1">
            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce"></div>
            <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
            <div className="w-2 h-2 bg-pink-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-900">
      <div className="text-center">
        <div className={`${getSizeClasses()} mx-auto mb-4 text-cyan-400`}>
          {getIcon()}
        </div>
        <h2 className="text-xl font-semibold text-white mb-2">
          {message}
        </h2>
        <div className="w-32 h-1 bg-slate-700 rounded-full mx-auto">
          <div className="h-full bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full animate-pulse"></div>
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
        return <Brain className="w-8 h-8 text-cyan-400" />;
      case 'security':
      case 'cybersecurity':
        return <Shield className="w-8 h-8 text-green-400" />;
      case 'performance':
      case 'optimization':
        return <Zap className="w-8 h-8 text-yellow-400" />;
      case 'global':
      case 'worldwide':
        return <Globe className="w-8 h-8 text-blue-400" />;
      default:
        return <Loader2 className="w-8 h-8 text-cyan-400 animate-spin" />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-purple-500/5 to-pink-500/5 animate-pulse"></div>
      
      <div className="relative z-10 text-center">
        <div className="mb-6">
          {getServiceIcon(service)}
        </div>
        <h2 className="text-2xl font-bold text-white mb-4">
          Loading {service}...
        </h2>
        <p className="text-gray-300 mb-6">
          Please wait while we prepare your experience
        </p>
        <div className="flex justify-center space-x-1">
          <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce"></div>
          <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
          <div className="w-2 h-2 bg-pink-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
        </div>
      </div>
    </div>
  );
};

export const PageLoading: React.FC<{ page: string }> = ({ page }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
      <div className="text-center">
        <Loader2 className="w-12 h-12 text-cyan-400 animate-spin mx-auto mb-4" />
        <h2 className="text-xl font-semibold text-white mb-2">
          Loading {page}...
        </h2>
        <p className="text-gray-300">
          Please wait while we load the page
        </p>
      </div>
    </div>
  );
};

export const ComponentLoading: React.FC<{ component: string }> = ({ component }) => {
  return (
    <div className="flex items-center justify-center p-8">
      <div className="text-center">
        <Loader2 className="w-8 h-8 text-cyan-400 animate-spin mx-auto mb-2" />
        <p className="text-gray-300 text-sm">
          Loading {component}...
        </p>
      </div>
    </div>
  );
};