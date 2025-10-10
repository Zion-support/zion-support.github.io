import React from 'react';
import { Loader2, Zap, Brain, Cloud } from 'lucide-react';

interface PageLoaderProps {
  message?: string;
  icon?: React.ReactNode;
}

export const PageLoader: React.FC<PageLoaderProps> = ({ 
  message = "Loading...", 
  icon 
}) => {
  const defaultIcon = (
    <div className="relative">
      <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 rounded-lg flex items-center justify-center animate-pulse">
        <Zap className="w-6 h-6 text-white" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 rounded-lg blur opacity-30 animate-pulse"></div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center">
      <div className="text-center">
        {icon || defaultIcon}
        <div className="mt-6">
          <Loader2 className="w-8 h-8 text-cyan-400 animate-spin mx-auto mb-4" />
          <p className="text-white text-lg font-medium">{message}</p>
          <div className="mt-4 flex justify-center space-x-1">
            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce"></div>
            <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
            <div className="w-2 h-2 bg-pink-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const ServiceLoader: React.FC<{ service: string }> = ({ service }) => {
  const getServiceIcon = (service: string) => {
    switch (service.toLowerCase()) {
      case 'ai':
        return <Brain className="w-8 h-8 text-purple-400" />;
      case 'it':
        return <Cloud className="w-8 h-8 text-blue-400" />;
      default:
        return <Zap className="w-8 h-8 text-cyan-400" />;
    }
  };

  return (
    <div className="flex items-center justify-center p-8">
      <div className="text-center">
        <div className="w-16 h-16 bg-slate-800/50 rounded-xl flex items-center justify-center mx-auto mb-4">
          {getServiceIcon(service)}
        </div>
        <Loader2 className="w-6 h-6 text-cyan-400 animate-spin mx-auto mb-2" />
        <p className="text-gray-300">Loading {service} services...</p>
      </div>
    </div>
  );
};

export const CardSkeleton: React.FC = () => {
  return (
    <div className="bg-slate-800/50 backdrop-blur-sm border border-cyan-400/20 rounded-xl p-6 animate-pulse">
      <div className="flex items-center space-x-3 mb-4">
        <div className="w-12 h-12 bg-slate-700 rounded-lg"></div>
        <div className="flex-1">
          <div className="h-4 bg-slate-700 rounded w-3/4 mb-2"></div>
          <div className="h-3 bg-slate-700 rounded w-1/2"></div>
        </div>
      </div>
      <div className="space-y-2 mb-4">
        <div className="h-3 bg-slate-700 rounded"></div>
        <div className="h-3 bg-slate-700 rounded w-5/6"></div>
      </div>
      <div className="h-8 bg-slate-700 rounded w-1/3"></div>
    </div>
  );
};

export const TableSkeleton: React.FC = () => {
  return (
    <div className="bg-slate-800/50 backdrop-blur-sm border border-cyan-400/20 rounded-xl p-6 animate-pulse">
      <div className="space-y-4">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="flex items-center space-x-4">
            <div className="w-8 h-8 bg-slate-700 rounded"></div>
            <div className="flex-1 space-y-2">
              <div className="h-4 bg-slate-700 rounded w-1/4"></div>
              <div className="h-3 bg-slate-700 rounded w-1/2"></div>
            </div>
            <div className="h-6 bg-slate-700 rounded w-16"></div>
          </div>
        ))}
      </div>
    </div>
  );
};