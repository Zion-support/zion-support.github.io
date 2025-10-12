'use client';
import React from 'react'
import {Loader2} from 'lucide-react'

export const PageLoader: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center"></div>
      <div className="text-center"></div>
        <div className="grid grid-cols-3 gap-4 mb-8"></div>
          <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center animate-pulse"></div>
            <Brain className="w-6 h-6 text-white" />
          </div>
          <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center animate-pulse" style={{ animationDelay: '0.2s' }></div>
            <Zap className="w-6 h-6 text-white" />
          </div>
          <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-cyan-500 rounded-lg flex items-center justify-center animate-pulse" style={{ animationDelay: '0.4s' }></div>
            <Shield className="w-6 h-6 text-white" />
          </div>
        </div>
        <h2 className="text-2xl font-bold text-white mb-4">Loading AI Solutions</h2>
        <p className="text-gray-400 mb-6">Preparing advanced features for your experience</p>
        <div className="w-64 h-2 bg-gray-700 rounded-full overflow-hidden"></div>
          <div className="h-full bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};

export const ServiceCardSkeleton: React.FC = () => {
  return (
    <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 animate-pulse"></div>
      <div className="w-12 h-12 bg-slate-700 rounded-lg mb-4"></div>
      <div className="h-6 bg-slate-700 rounded mb-3 w-3/4"></div>
      <div className="h-4 bg-slate-700 rounded mb-2"></div>
      <div className="h-4 bg-slate-700 rounded w-5/6 mb-4"></div>
      <div className="h-8 bg-slate-700 rounded w-1/2 mx-auto"></div>
    </div>
  );
};

export const ContentSkeleton: React.FC = () => {
  return (
    <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8 animate-pulse"></div>
      <div className="h-8 bg-slate-700 rounded mb-4 w-1/2"></div>
      <div className="h-4 bg-slate-700 rounded mb-2"></div>
      <div className="h-4 bg-slate-700 rounded mb-2"></div>
      <div className="h-4 bg-slate-700 rounded w-3/4"></div>
    </div>
  );
};

export const SkeletonGrid: React.FC<{ count?: number }> = ({ count = 3 }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"></div>
      {Array.from({ length: count }).map((_, index) => (
        <ServiceCardSkeleton key={index} />
      ))}
    </div>
  );
};

export const FeatureLoader: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center"></div>
      <div className="text-center"></div>
        <div className="grid grid-cols-3 gap-4 mb-8"></div>
          <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center animate-pulse"></div>
            <Brain className="w-6 h-6 text-white" />
          </div>
          <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center animate-pulse" style={{ animationDelay: '0.2s' }></div>
            <Zap className="w-6 h-6 text-white" />
          </div>
          <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-cyan-500 rounded-lg flex items-center justify-center animate-pulse" style={{ animationDelay: '0.4s' }></div>
            <Shield className="w-6 h-6 text-white" />
          </div>
        </div>
        <h2 className="text-2xl font-bold text-white mb-4">Initializing AI Solutions</h2>
        <p className="text-gray-400 mb-6">Preparing advanced features for your experience</p>
        <div className="w-64 h-2 bg-gray-700 rounded-full overflow-hidden"></div>
          <div className="h-full bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};

export const LoadingSpinner: React.FC = () => (
  <div className="flex items-center justify-center p-8"></div>
    <div className="w-8 h-8 border-4 border-cyan-400 border-t-transparent rounded-full animate-spin"></div>
  </div>
);

export const InlineLoader: React.FC<{ text?: string }> = ({ text = 'Loading...' }) => {
  return (
    <div className="flex items-center justify-center space-x-2 text-gray-400"></div>
      <Loader2 className="w-4 h-4 animate-spin" />
      <span>{text}</span>
    </div>
  );
};