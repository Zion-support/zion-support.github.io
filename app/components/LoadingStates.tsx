import React from 'react';
import { Loader2, Brain, Shield, Zap, Globe, BarChart3, Cloud, Users, Award, Star } from 'lucide-react';

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
      <div className="flex items-center justify-center p-8">
        <Loader2 className="w-6 h-6 text-cyan-400 animate-spin" />
        <span className="ml-2 text-white">{message}</span>
      </div>
    );
  }

  if (variant === 'futuristic') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4">
        <div className="text-center">
          <div className="w-16 h-16 mx-auto mb-4">
            <Loader2 className="w-16 h-16 text-cyan-400 animate-spin" />
          </div>
          <h2 className="text-xl font-semibold text-white mb-2">{message}</h2>
          <p className="text-gray-300">Please wait while we load the content</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4">
      <div className="text-center">
        <div className="w-16 h-16 mx-auto mb-4">
          <Loader2 className="w-16 h-16 text-cyan-400 animate-spin" />
        </div>
        <h2 className="text-xl font-semibold text-white mb-2">{message}</h2>
        <p className="text-gray-300">Please wait while we load the content</p>
      </div>
    </div>
  );
};

export const AILoadingPage: React.FC<{ message?: string }> = ({ 
  message = "AI is processing your request..." 
}) => (
  <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4">
    <div className="text-center">
      <div className="w-20 h-20 mx-auto mb-6">
        <div className="relative">
          <Brain className="w-20 h-20 text-cyan-400 animate-pulse" />
          <div className="absolute inset-0 bg-cyan-400/20 rounded-full animate-ping"></div>
        </div>
      </div>
      <h2 className="text-2xl font-bold text-white mb-4">AI Processing</h2>
      <p className="text-gray-300 mb-6">{message}</p>
      <div className="flex justify-center space-x-2">
        <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce"></div>
        <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
        <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
      </div>
    </div>
  </div>
);

export const SecurityLoadingPage: React.FC<{ message?: string }> = ({ 
  message = "Security systems are initializing..." 
}) => (
  <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4">
    <div className="text-center">
      <div className="w-20 h-20 mx-auto mb-6">
        <div className="relative">
          <Shield className="w-20 h-20 text-green-400 animate-pulse" />
          <div className="absolute inset-0 bg-green-400/20 rounded-full animate-ping"></div>
        </div>
      </div>
      <h2 className="text-2xl font-bold text-white mb-4">Security Check</h2>
      <p className="text-gray-300 mb-6">{message}</p>
      <div className="flex justify-center space-x-2">
        <div className="w-2 h-2 bg-green-400 rounded-full animate-bounce"></div>
        <div className="w-2 h-2 bg-green-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
        <div className="w-2 h-2 bg-green-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
      </div>
    </div>
  </div>
);

export const PerformanceLoadingPage: React.FC<{ message?: string }> = ({ 
  message = "Optimizing performance..." 
}) => (
  <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4">
    <div className="text-center">
      <div className="w-20 h-20 mx-auto mb-6">
        <div className="relative">
          <BarChart3 className="w-20 h-20 text-purple-400 animate-pulse" />
          <div className="absolute inset-0 bg-purple-400/20 rounded-full animate-ping"></div>
        </div>
      </div>
      <h2 className="text-2xl font-bold text-white mb-4">Performance Optimization</h2>
      <p className="text-gray-300 mb-6">{message}</p>
      <div className="flex justify-center space-x-2">
        <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce"></div>
        <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
        <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
      </div>
    </div>
  </div>
);

export const GlobalLoadingPage: React.FC<{ message?: string }> = ({ 
  message = "Initializing Zion Tech Group..." 
}) => (
  <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4">
    <div className="text-center">
      <div className="w-24 h-24 mx-auto mb-8">
        <div className="relative">
          <div className="w-24 h-24 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center">
            <Brain className="w-12 h-12 text-white animate-pulse" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-600/20 rounded-full animate-ping"></div>
        </div>
      </div>
      <h1 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-4">
        Zion Tech Group
      </h1>
      <p className="text-gray-300 mb-8">{message}</p>
      <div className="flex justify-center space-x-2">
        <div className="w-3 h-3 bg-cyan-400 rounded-full animate-bounce"></div>
        <div className="w-3 h-3 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
        <div className="w-3 h-3 bg-pink-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
      </div>
    </div>
  </div>
);

export default LoadingPage;
