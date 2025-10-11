'use client';
import React from 'react';
import { Loader2, Brain, Zap } from 'lucide-react';

export const PageLoader: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
      <div className="text-center">
        <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full flex items-center justify-center mx-auto mb-4">
          <Loader2 className="w-8 h-8 text-slate-900 animate-spin" />
        </div>
        <h2 className="text-xl font-semibold text-white mb-2">Loading...</h2>
        <p className="text-gray-300">Please wait while we load the page</p>
      </div>
    </div>
  );
};

export const ComponentLoader: React.FC = () => {
  return (
    <div className="flex items-center justify-center p-8">
      <div className="text-center">
        <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full flex items-center justify-center mx-auto mb-3">
          <Loader2 className="w-6 h-6 text-slate-900 animate-spin" />
        </div>
        <p className="text-gray-300 text-sm">Loading component...</p>
      </div>
    </div>
  );
};

export const ServiceCardLoader: React.FC = () => {
  return (
    <div className="cyber-card-enhanced hologram-card-enhanced p-6 animate-pulse">
      <div className="h-8 bg-gray-200 rounded mb-4 w-3/4"></div>
      <div className="h-4 bg-gray-200 rounded mb-2"></div>
      <div className="h-4 bg-gray-200 rounded w-5/6"></div>
    </div>
  );
};

export const AIThinkingLoader: React.FC = () => {
  return (
    <div className="flex items-center justify-center p-8">
      <div className="text-center">
        <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full flex items-center justify-center mx-auto mb-4 relative">
          <Brain className="w-8 h-8 text-slate-900 animate-pulse" />
          <div className="absolute inset-0 rounded-full border-2 border-cyan-400 animate-ping"></div>
        </div>
        <h3 className="text-lg font-semibold text-white mb-2">AI Thinking...</h3>
        <p className="text-gray-300 text-sm">Processing your request with advanced AI</p>
      </div>
    </div>
  );
};

export const DataProcessingLoader: React.FC = () => {
  return (
    <div className="flex items-center justify-center p-8">
      <div className="text-center">
        <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-blue-400 rounded-full flex items-center justify-center mx-auto mb-4">
          <Zap className="w-8 h-8 text-slate-900 animate-spin" />
        </div>
        <h3 className="text-lg font-semibold text-white mb-2">Processing Data...</h3>
        <p className="text-gray-300 text-sm">Analyzing and optimizing your data</p>
      </div>
    </div>
  );
};

export const NetworkLoader: React.FC = () => {
  return (
    <div className="flex items-center justify-center p-8">
      <div className="text-center">
        <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center mx-auto mb-4">
          <div className="w-8 h-8 border-2 border-slate-900 border-t-transparent rounded-full animate-spin"></div>
        </div>
        <h3 className="text-lg font-semibold text-white mb-2">Connecting...</h3>
        <p className="text-gray-300 text-sm">Establishing secure connection</p>
      </div>
    </div>
  );
};

export default PageLoader;