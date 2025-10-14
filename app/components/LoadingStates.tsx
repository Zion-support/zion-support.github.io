import React from 'react';
import { Loader2, Brain, Shield, Zap, Globe } from 'lucide-react';

interface LoadingPageProps {
  type?: 'loading' | 'ai' | 'security' | 'performance' | 'global';
  message?: string;
  variant?: 'default' | 'futuristic' | 'minimal';
}

export const LoadingPage: React.FC<LoadingPageProps> = ({ 
  message = "Loading...", 
  variant = "futuristic" 
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

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="text-center">
        <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse">
          <Brain className="w-8 h-8 text-white" />
        </div>
        <h2 className="text-2xl font-bold text-white mb-4">{message}</h2>
        <div className="flex items-center justify-center space-x-2">
          <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce"></div>
          <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
          <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
        </div>
      </div>
    </div>
  );
};

interface ServiceLoadingProps {
  service: string;
  size?: 'sm' | 'md' | 'lg';
}

export const ServiceLoading: React.FC<ServiceLoadingProps> = ({ service, size = 'md' }) => {
  const getServiceIcon = (serviceName: string) => {
    switch (serviceName.toLowerCase()) {
      case 'ai':
      case 'artificial intelligence':
        return <Brain className="w-6 h-6" />;
      case 'security':
      case 'cybersecurity':
        return <Shield className="w-6 h-6" />;
      case 'performance':
      case 'optimization':
        return <Zap className="w-6 h-6" />;
      case 'global':
      case 'worldwide':
        return <Globe className="w-6 h-6" />;
      default:
        return <Loader2 className="w-6 h-6 animate-spin" />;
    }
  };

  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16'
  };

  return (
    <div className="flex items-center justify-center p-8">
      <div className="text-center">
        <div className={`${sizeClasses[size]} bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse`}>
          {getServiceIcon(service)}
        </div>
        <h3 className="text-lg font-semibold text-white mb-2">Loading {service}...</h3>
        <div className="flex items-center justify-center space-x-1">
          <div className="w-1 h-1 bg-cyan-400 rounded-full animate-bounce"></div>
          <div className="w-1 h-1 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
          <div className="w-1 h-1 bg-cyan-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingPage;