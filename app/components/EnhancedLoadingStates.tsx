'use client';
import React from 'react';
import {Loader2, Brain, Cloud, Shield, Code} from 'lucide-react';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  text?: string;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ 
  size = 'md', 
  text = 'Loading...' 
}) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12'
  };

  return (
    <div className="flex flex-col items-center justify-center space-y-4">
      <Loader2 className={`${sizeClasses[size]} animate-spin text-cyan-400`} />
      <p className="text-gray-300 text-sm">{text}</p>
    </div>
  );
};

interface ServiceLoadingProps {
  service: string;
}

const ServiceLoading: React.FC<ServiceLoadingProps> = ({ service }) => {
  const getServiceIcon = (service: string) => {
    switch (service.toLowerCase()) {
      case 'ai':
        return <Brain className="w-8 h-8 text-purple-400" />;
      case 'cloud':
        return <Cloud className="w-8 h-8 text-blue-400" />;
      case 'security':
        return <Shield className="w-8 h-8 text-green-400" />;
      case 'development':
        return <Code className="w-8 h-8 text-cyan-400" />;
      default:
        return <Loader2 className="w-8 h-8 text-cyan-400 animate-spin" />;
    }
  };

  return (
    <div className="flex flex-col items-center justify-center space-y-4 p-8">
      {getServiceIcon(service)}
      <h3 className="text-lg font-semibold text-white">Loading {service} Services</h3>
      <p className="text-gray-300 text-sm text-center max-w-md">
        Please wait while we prepare your {service.toLowerCase()} solutions...
      </p>
      <div className="w-full max-w-xs bg-gray-700 rounded-full h-2">
        <div className="bg-gradient-to-r from-cyan-500 to-purple-500 h-2 rounded-full animate-pulse"></div>
      </div>
    </div>
  );
};

interface PageLoadingProps {
  page?: string;
}

const PageLoading: React.FC<PageLoadingProps> = ({ page = 'page' }) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="text-center">
        <div className="relative">
          <div className="w-16 h-16 border-4 border-cyan-500/30 border-t-cyan-500 rounded-full animate-spin mx-auto mb-4"></div>
          <div className="absolute inset-0 w-16 h-16 border-4 border-purple-500/30 border-t-purple-500 rounded-full animate-spin mx-auto mb-4" style={{ animationDirection: 'reverse', animationDuration: '1.5s' }}></div>
        </div>
        <h2 className="text-xl font-semibold text-white mb-2">Loading {page}</h2>
        <p className="text-gray-300">Please wait while we prepare everything for you...</p>
      </div>
    </div>
  );
};

export { LoadingSpinner, ServiceLoading, PageLoading };
