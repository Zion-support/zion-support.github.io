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

  if (variant === 'default') {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-900">
        <div className="text-center">
          <div className={`${getSizeClasses()} mx-auto mb-4 text-cyan-400`}>
            {getIcon()}
          </div>
          <p className="text-white text-lg">{message}</p>
        </div>
      </div>
    );
  }

  // Futuristic variant (default)
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>
      
      <div className="relative z-10 text-center">
        <div className={`${getSizeClasses()} mx-auto mb-6 text-cyan-400`}>
          {getIcon()}
        </div>
        <h2 className="text-2xl font-bold text-white mb-2">{message}</h2>
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
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="text-center">
        <div className="mb-4">
          {getServiceIcon(service)}
        </div>
        <h2 className="text-xl font-semibold text-white mb-2">
          Loading {service}...
        </h2>
        <div className="flex justify-center space-x-1">
          <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce"></div>
          <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce delay-100"></div>
          <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce delay-200"></div>
        </div>
      </div>
    </div>
  );
};

export const PageLoading: React.FC<{ pageName?: string }> = ({ pageName = "page" }) => (
  <LoadingPage 
    message={`Loading ${pageName}...`} 
    variant="futuristic"
    type="loading"
  />
);

export const AILoading: React.FC<{ message?: string }> = ({ message = "AI is thinking..." }) => (
  <LoadingPage 
    message={message} 
    variant="futuristic"
    type="ai"
  />
);

export const SecurityLoading: React.FC<{ message?: string }> = ({ message = "Securing your data..." }) => (
  <LoadingPage 
    message={message} 
    variant="futuristic"
    type="security"
  />
);

export const PerformanceLoading: React.FC<{ message?: string }> = ({ message = "Optimizing performance..." }) => (
  <LoadingPage 
    message={message} 
    variant="futuristic"
    type="performance"
  />
);

export const GlobalLoading: React.FC<{ message?: string }> = ({ message = "Connecting globally..." }) => (
  <LoadingPage 
    message={message} 
    variant="futuristic"
    type="global"
  />
);
