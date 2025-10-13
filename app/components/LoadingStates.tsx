import React from 'react';
import { Loader2, Brain, Shield, Zap, Globe, BarChart3, Cloud, Sparkles } from 'lucide-react';

export const LoadingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
      <div className="text-center">
        <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 animate-spin">
          <Loader2 className="w-8 h-8 text-white" />
        </div>
        <h2 className="text-xl font-semibold text-white mb-2">Loading...</h2>
        <p className="text-gray-300">Please wait while we prepare your experience</p>
      </div>
    </div>
  );
};

export const ServiceLoading: React.FC<{ service: string }> = ({ service }) => {
  const getServiceIcon = (serviceName: string) => {
    const lowerService = serviceName.toLowerCase();
    if (lowerService.includes('ai')) return <Brain className="w-8 h-8" />;
    if (lowerService.includes('security') || lowerService.includes('cyber')) return <Shield className="w-8 h-8" />;
    if (lowerService.includes('micro') || lowerService.includes('saas')) return <Zap className="w-8 h-8" />;
    if (lowerService.includes('5g') || lowerService.includes('network')) return <Globe className="w-8 h-8" />;
    if (lowerService.includes('analytics') || lowerService.includes('data')) return <BarChart3 className="w-8 h-8" />;
    if (lowerService.includes('cloud')) return <Cloud className="w-8 h-8" />;
    return <Sparkles className="w-8 h-8" />;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
      <div className="text-center">
        <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
          {getServiceIcon(service)}
        </div>
        <h2 className="text-xl font-semibold text-white mb-2">Loading {service}...</h2>
        <p className="text-gray-300">Preparing your {service.toLowerCase()} experience</p>
      </div>
    </div>
  );
};

export const CardLoading: React.FC = () => {
  return (
    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 animate-pulse">
      <div className="w-12 h-12 bg-gray-600 rounded-lg mb-4"></div>
      <div className="h-4 bg-gray-600 rounded mb-2"></div>
      <div className="h-3 bg-gray-600 rounded w-3/4"></div>
    </div>
  );
};

export const TableLoading: React.FC = () => {
  return (
    <div className="space-y-3">
      {[...Array(5)].map((_, i) => (
        <div key={i} className="flex space-x-4 animate-pulse">
          <div className="h-4 bg-gray-600 rounded flex-1"></div>
          <div className="h-4 bg-gray-600 rounded w-1/4"></div>
          <div className="h-4 bg-gray-600 rounded w-1/6"></div>
        </div>
      ))}
    </div>
  );
};

export const ChartLoading: React.FC = () => {
  return (
    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 animate-pulse">
      <div className="h-4 bg-gray-600 rounded mb-4 w-1/3"></div>
      <div className="h-64 bg-gray-600 rounded"></div>
    </div>
  );
};

export default LoadingPage;