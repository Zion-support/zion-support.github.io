import React from 'react';
import { Loader2, Zap, Brain, Shield, Cloud, Code } from 'lucide-react';
import LoadingSpinner from './LoadingSpinner';

export const LoadingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
      <div className="text-center">
        <div className="relative">
          <div className="w-20 h-20 border-4 border-cyan-500/30 border-t-cyan-500 rounded-full animate-spin mx-auto mb-6"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <Zap className="w-8 h-8 text-cyan-400 animate-pulse" />
          </div>
        </div>
        <h2 className="text-2xl font-bold text-white mb-2">Loading Zion Tech Group</h2>
        <p className="text-gray-300">Preparing your experience...</p>
      </div>
    </div>
  );
};

export const ServiceLoadingCard: React.FC<{ service: string }> = ({ service }) => {
  const icons = {
    ai: <Brain className="w-8 h-8" />,
    security: <Shield className="w-8 h-8" />,
    cloud: <Cloud className="w-8 h-8" />,
    development: <Code className="w-8 h-8" />,
    default: <Zap className="w-8 h-8" />
  };

  const icon = icons[service as keyof typeof icons] || icons.default;

  return (
    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 animate-pulse">
      <div className="flex items-center gap-4 mb-4">
        <div className="text-cyan-400">{icon}</div>
        <div className="h-6 bg-white/20 rounded w-3/4"></div>
      </div>
      <div className="space-y-2">
        <div className="h-4 bg-white/20 rounded w-full"></div>
        <div className="h-4 bg-white/20 rounded w-2/3"></div>
      </div>
    </div>
  );
};

export const BlogPostSkeleton: React.FC = () => {
  return (
    <div className="bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden border border-white/20 animate-pulse">
      <div className="aspect-video bg-white/20"></div>
      <div className="p-6">
        <div className="flex items-center gap-2 mb-3">
          <div className="h-6 bg-white/20 rounded w-20"></div>
          <div className="h-4 bg-white/20 rounded w-16"></div>
        </div>
        <div className="h-6 bg-white/20 rounded w-3/4 mb-3"></div>
        <div className="space-y-2 mb-4">
          <div className="h-4 bg-white/20 rounded w-full"></div>
          <div className="h-4 bg-white/20 rounded w-2/3"></div>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-white/20 rounded-full"></div>
            <div className="h-4 bg-white/20 rounded w-20"></div>
          </div>
          <div className="h-4 bg-white/20 rounded w-16"></div>
        </div>
      </div>
    </div>
  );
};

export const FormLoadingState: React.FC = () => {
  return (
    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
      <div className="animate-pulse">
        <div className="h-8 bg-white/20 rounded w-1/2 mx-auto mb-6"></div>
        <div className="space-y-4">
          <div className="h-4 bg-white/20 rounded w-1/4"></div>
          <div className="h-12 bg-white/20 rounded"></div>
          <div className="h-4 bg-white/20 rounded w-1/4"></div>
          <div className="h-12 bg-white/20 rounded"></div>
          <div className="h-4 bg-white/20 rounded w-1/4"></div>
          <div className="h-24 bg-white/20 rounded"></div>
          <div className="h-12 bg-cyan-500/20 rounded w-1/3 mx-auto"></div>
        </div>
      </div>
    </div>
  );
};

export const TableLoadingState: React.FC = () => {
  return (
    <div className="bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 overflow-hidden">
      <div className="p-6 border-b border-white/20">
        <div className="h-6 bg-white/20 rounded w-1/3 animate-pulse"></div>
      </div>
      <div className="divide-y divide-white/20">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="p-6 animate-pulse">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-white/20 rounded"></div>
              <div className="flex-1 space-y-2">
                <div className="h-4 bg-white/20 rounded w-1/4"></div>
                <div className="h-3 bg-white/20 rounded w-1/2"></div>
              </div>
              <div className="h-8 bg-white/20 rounded w-20"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LoadingSpinner;