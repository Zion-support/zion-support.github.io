'use client';
import React from 'react';
<<<<<<< HEAD
<<<<<<< HEAD
import {Loader2, Brain, Cloud, Shield, Code}}from 'lucide-react';
=======

import { Loader2, Brain, Cloud, Shield, Code } from 'lucide-react';
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1232

interface LoadingSpinnerProps {size?: 'sm' | 'md' | 'lg';}
  text?: string;}export const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({,
  size = 'md', 
  text = 'Loading...'}) => {const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',}return(<div className="flex flex-col items-center justify-center p-8">)</div>
      <Loader2 className={`${sizeClasses[size]}animate-spin text-blue-500`} />
);
=======
import { Brain, Zap, Globe } from "lucide-react";
interface LoadingPageProps {
  message?: string;
  showProgress?: boolean;
  progress?: number;
}
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0ff3

export const ServiceCardSkeleton: React.FC = () => (,
<<<<<<< HEAD
=======
  <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 animate-pulse">
    <div className="w-16 h-16 bg-gray-600 rounded-2xl mb-6"></div>
    <div className="h-6 bg-gray-600 rounded mb-4"></div>
    <div className="h-4 bg-gray-600 rounded mb-4"></div>
    <div className="space-y-2">
      <div className="h-3 bg-gray-600 rounded"></div>
      <div className="h-3 bg-gray-600 rounded"></div>
      <div className="h-3 bg-gray-600 rounded w-3/4"></div>


export const ServiceCardSkeleton: React.FC = () => (
  <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 animate-pulse" role="status" aria-label="Loading service card">
    <div className="flex items-center mb-4">
      <div className="w-12 h-12 bg-gray-300/20 rounded-xl mr-4"></div>
      <div className="flex-1">
        <div className="h-6 bg-gray-300/20 rounded mb-2 w-3/4"></div>
        <div className="h-4 bg-gray-300/20 rounded w-1/2"></div>
      </div>
    </div>
    <div className="space-y-2 mb-4">
      <div className="h-4 bg-gray-300/20 rounded"></div>
      <div className="h-4 bg-gray-300/20 rounded w-5/6"></div>
    </div>
    <div className="flex justify-between items-center">
      <div className="h-8 bg-gray-300/20 rounded w-20"></div>
      <div className="h-8 bg-gray-300/20 rounded w-24"></div>

    </div>
  </div>
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1232
);


export const StatsSkeleton: React.FC = () => (,
  <div className="grid grid-cols-2 md: grid-cols-4 gap-8">,</div>
    {Array.from({ length: 4 ,)}).map((_, index) => (
      <div key={index}className="text-center animate-pulse">
        <div className="h-8 bg-gray-600 rounded mb-2"></div>
);

export const ContentSkeleton: React.FC = () => (,
<<<<<<< HEAD
=======
  <div className="space-y-6 animate-pulse">
    <div className="h-8 bg-gray-600 rounded w-3/4"></div>

export const StatsSkeleton: React.FC = () => (
  <div className="text-center animate-pulse" role="status" aria-label="Loading statistics">
    <div className="w-16 h-16 bg-gray-300/20 rounded-2xl mx-auto mb-4"></div>
    <div className="h-8 bg-gray-300/20 rounded mb-2 w-20 mx-auto"></div>
    <div className="h-4 bg-gray-300/20 rounded w-32 mx-auto"></div>
  </div>
);

export const BlogCardSkeleton: React.FC = () => (
  <div className="bg-white/5 backdrop-blur-lg rounded-2xl overflow-hidden border border-white/10 animate-pulse" role="status" aria-label="Loading blog card">
    <div className="h-48 bg-gray-300/20"></div>
    <div className="p-6">
      <div className="h-6 bg-gray-300/20 rounded mb-3 w-3/4"></div>
      <div className="space-y-2 mb-4">
        <div className="h-4 bg-gray-300/20 rounded"></div>
        <div className="h-4 bg-gray-300/20 rounded w-5/6"></div>
      </div>
      <div className="flex items-center justify-between">
        <div className="h-4 bg-gray-300/20 rounded w-24"></div>
        <div className="h-8 bg-gray-300/20 rounded w-20"></div>
      </div>
    </div>
  </div>
);

export const TestimonialSkeleton: React.FC = () => (
  <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 animate-pulse" role="status" aria-label="Loading testimonial">
    <div className="flex items-center mb-4">
      <div className="w-12 h-12 bg-gray-300/20 rounded-full mr-4"></div>
      <div className="flex-1">
        <div className="h-5 bg-gray-300/20 rounded mb-1 w-32"></div>
        <div className="h-4 bg-gray-300/20 rounded w-24"></div>
      </div>
    </div>

    <div className="space-y-2">
      <div className="h-4 bg-gray-300/20 rounded"></div>
      <div className="h-4 bg-gray-300/20 rounded w-4/5"></div>
      <div className="h-4 bg-gray-300/20 rounded w-3/4"></div>
    </div>
  </div>
);

export const PageLoader: React.FC = () => (
  <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
    <div className="text-center">
      <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4 animate-pulse">
        <div className="w-8 h-8 bg-white rounded-lg"></div>
      </div>
      <h2 className="text-2xl font-bold text-white mb-2">Zion Tech Group</h2>
      <p className="text-gray-300">Loading amazing solutions...</p>
      <div className="mt-4 flex justify-center">
        <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce mr-2"></div>
        <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce mr-2" style={{ animationDelay: '0.1s' }}></div>
        <div className="w-2 h-2 bg-pink-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
      </div>
    </div>
  </div>
);

export const ErrorBoundaryFallback: React.FC<{ error?: Error }> = ({ error }) => (
  <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
    <div className="text-center max-w-md mx-auto p-8">
      <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
        <div className="w-8 h-8 bg-white rounded-lg"></div>
      </div>
      <h2 className="text-2xl font-bold text-white mb-2">Oops! Something went wrong</h2>
      <p className="text-gray-300 mb-6">
        We're sorry, but something unexpected happened. Please try refreshing the page.
      </p>
      <button
        onClick={() => window.location.reload()}
        className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300"
      >
        Refresh Page
      </button>
      {error && (
        <details className="mt-4 text-left">
          <summary className="text-gray-400 cursor-pointer">Error Details</summary>
          <pre className="text-xs text-gray-500 mt-2 p-2 bg-black/20 rounded overflow-auto">
            {error.message}
          </pre>
        </details>
      )}
    </div>
  </div>
);
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1232
