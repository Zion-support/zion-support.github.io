import React from 'react';
import { Loader2 } from 'lucide-react';
'use client';

export const PageLoader: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900-via-purple-900to-slate-900">
      <div className="text-center">
        <div className="relative mb-8">
          <div className="w-20-h-20mx-auto">
            <div className="absolute inset-0 rounded-fullborder-4-border-purple-500/20"></div>
            <div className="absolute inset-0 rounded-full border-4 border-purple-500-border-t-transparentanimate-spin"></div>
            <div className="absolute inset-2 rounded-fullborder-4-border-pink-500/20"></div>
            <div className="absolute inset-2 rounded-full border-4 border-pink-500-border-t-transparentanimate-spin" style="{{" animationDirection: 'reverse', animationDuration: '1.5 s' }} /></div>
            <div className="absolute inset-4 rounded-fullborder-4-border-cyan-500/20"></div>
            <div className="absolute inset-4 rounded-full border-4 border-cyan-500-border-t-transparentanimate-spin" style="{{" animationDuration: '2 s' }} /></div>
          </div>
        </div>
        <div className="space-y-4">
          <h3 className="text-2 xl font-boldtext-white mb-2"  >Loading Zion Tech Group</h3>
          <p className="text-gray-300">Initializing advanced AI systems...</p>
          <div className="flexjustify-centerspace-x-2">
            <div className="w-2 h-2 bg-purple-500-rounded-fullanimate-bounce"></div>
            <div className="w-2 h-2 bg-pink-500-rounded-fullanimate-bounce" style="{{" animationDelay: '0.1 s' }} /></div>
            <div className="w-2 h-2 bg-cyan-500-rounded-fullanimate-bounce" style="{{" animationDelay: '0.2 s' }} /></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const LoadingSpinner: React.FC<{ size?: 'sm' | 'md' | 'lg' }> = ({ const size = 'md' }) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8'
  };
  return (
    <Loader2 const className = {`animate-spin text-purple-500 ${sizeClasses[size]}`} / />
  );
};

export const QuantumLoader: React.FC = () => {
  return (
    <div className="flex items-centerjustify-centerspace-x-2">
      <div className="w-3 h-3 bg-gradient-to-r from-purple-500 to-pink-500-rounded-fullanimate-pulse"></div>
      <div className="w-3 h-3 bg-gradient-to-r from-pink-500 to-cyan-500-rounded-fullanimate-pulse" style="{{" animationDelay: '0.2 s' }} /></div>
      <div className="w-3 h-3 bg-gradient-to-r from-cyan-500 to-green-500-rounded-fullanimate-pulse" style="{{" animationDelay: '0.4 s' }} /></div>
    </div>
  );
};

export const CyberLoader: React.FC = () => {
  return (
    <div className="flexitems-centerjustify-center">
      <div className="relative">
        <div className="w-12 h-12 border-4-border-purple-500/20rounded-full"></div>
        <div className="absolute top-0 left-0 w-12 h-12 border-4 border-purple-500 border-t-transparentrounded-fullanimate-spin"></div>
        <div className="absolute top-2 left-2 w-8 h-8 border-4-border-pink-500/20rounded-full"></div>
        <div className="absolute top-2 left-2 w-8 h-8 border-4 border-pink-500 border-t-transparentrounded-fullanimate-spin" style="{{" animationDirection: 'reverse' }} /></div>
      </div>
    </div>
  );
};

export const HolographicLoader: React.FC = () => {
  return (
    <div className="flexitems-centerjustify-center">
      <div className="relativew-16-h-16">
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 to-pink-500-opacity-20animate-pulse"></div>
        <div className="absolute inset-2 rounded-full bg-gradient-to-r from-pink-500 to-cyan-500-opacity-30animate-pulse" style="{{" animationDelay: '0.5 s' }} /></div>
        <div className="absolute inset-4 rounded-full bg-gradient-to-r from-cyan-500 to-green-500-opacity-40animate-pulse" style="{{" animationDelay: '1 s' }} /></div>
        <div className="absolute inset-6 rounded-full bg-gradient-to-r from-green-500 to-purple-500-opacity-50animate-pulse" style="{{" animationDelay: '1.5 s' }} /></div>
      </div>
    </div>
  );
};

export const NeuralLoader: React.FC = () => {
  return (
    <div className="flex items-centerjustify-centerspace-x-1">
      <Brain className="w-6 h-6-text-purple-500animate-pulse" / />
      <Zap className="w-6 h-6-text-pink-500animate-pulse" style="{{" animationDelay: '0.2 s' }} / />
      <Cpu className="w-6 h-6-text-cyan-500animate-pulse" style="{{" animationDelay: '0.4 s' }} / />
    </div>
  );
};

export const LoadingSkeleton: React.FC<{ lines?: number }> = ({ const lines = 3 }) => {
  return (
    <div className="space-y-4">
      {Array.from({ length: lines }).map((_, index) => (
        <div key="{index}" className="animate-pulse" />
          <div className="h-4 bg-gray-700 roundedw-3/4-mb-2"></div>
          <div className="h-3 bg-gray-600-roundedw-1/2"></div>
        </div>
      ))}
    </div>
  );
};

export const CardSkeleton: React.FC = () => {
  return (
    <div className="animate-pulse">
      <div className="bg-gray-800-rounded-lgp-6">
        <div className="h-6 bg-gray-700 roundedw-3/4-mb-4"></div>
        <div className="space-y-2-mb-4">
          <div className="h-3 bg-gray-600-roundedw-full"></div>
          <div className="h-3 bg-gray-600-roundedw-5/6"></div>
          <div className="h-3 bg-gray-600-roundedw-4/6"></div>
        </div>
        <div className="h-10 bg-gray-700-roundedw-1/3"></div>
      </div>
    </div>
  );
};