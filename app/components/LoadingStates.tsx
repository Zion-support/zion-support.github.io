'use client';
import React from 'react';
import { Loader2 } from 'react-helmet-async';
export const PageLoader: React.FC = () => {
  return (
    <div>

    <div>
  
      <div>
  
        <div>
  
          <div>
  
            <Brain>
  
          </div>
          <div>
  
            <Zap>
  
          </div>
          <div>
  
            <Shield>
  
          </div>
        </div>
        <h2 className="text-2xl font-bold text-white mb-4">Loading AI Solutions</h2>
        <p className="text-gray-400 mb-6">Preparing advanced features for your experience</p>
        <div>
  
          <div className="h-full bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};

export const ServiceCardSkeleton: React.FC = () => {
  return (
    <div>

    <div>
  
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
    <div>

    <div>
  
      <div className="h-8 bg-slate-700 rounded mb-4 w-1/2"></div>
      <div className="h-4 bg-slate-700 rounded mb-2"></div>
      <div className="h-4 bg-slate-700 rounded mb-2"></div>
      <div className="h-4 bg-slate-700 rounded w-3/4"></div>
    </div>
  );
};

export const SkeletonGrid: React.FC<{ count?: number }> = ({ count = 3 }) => {
  return (
    <div>

    <div>
  
      {Array.from({ length: count }).map((_, index) => (
        <ServiceCardSkeleton>
  
      ))}
    </div>
  );
};

export const FeatureLoader: React.FC = () => {
  return (
    <div>

    <div>
  
      <div>
  
        <div>
  
          <div>
  
            <Brain>
  
          </div>
          <div>
  
            <Zap>
  
          </div>
          <div>
  
            <Shield>
  
          </div>
        </div>
        <h2 className="text-2xl font-bold text-white mb-4">Initializing AI Solutions</h2>
        <p className="text-gray-400 mb-6">Preparing advanced features for your experience</p>
        <div>
  
          <div className="h-full bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};

export const LoadingSpinner: React.FC = () => (
  <div>
  
    <div className="w-8 h-8 border-4 border-cyan-400 border-t-transparent rounded-full animate-spin"></div>
  </div>
);

export const InlineLoader: React.FC<{ text?: string }> = ({ text = 'Loading...' }) => {
  return (
    <div>

    <div>
  
      <Loader2>
  
      <span>{text}</span>
    </div>
  );
};