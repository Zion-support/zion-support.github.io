'use client'
import React from 'react'
import { Loader2, Brain, Shield, Cloud, Code } from 'lucide-react'

export const PageLoader: React.FC = () => (
  <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
    <div className="text-center">
      <div className="w-16 h-16 bg-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
        <Loader2 className="w-8 h-8 text-cyan-400 animate-spin" />
      </div>
      <h2 className="text-xl font-semibold text-white mb-2">Loading...</h2>
      <p className="text-gray-300">Please wait while we prepare your experience</p>
    </div>
  </div>
);

export const ServiceCardSkeleton: React.FC = () => (
  <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 animate-pulse">
    <div className="flex items-center justify-between mb-4">
      <div className="w-12 h-12 bg-gray-300/20 rounded-lg"></div>
      <div className="w-16 h-6 bg-gray-300/20 rounded-full"></div>
    </div>
    <div className="h-6 bg-gray-300/20 rounded mb-2"></div>
    <div className="h-4 bg-gray-300/20 rounded mb-2"></div>
    <div className="h-4 bg-gray-300/20 rounded w-3/4 mb-4"></div>
    <div className="flex items-center justify-between mb-4">
      <div className="h-8 bg-gray-300/20 rounded w-20"></div>
      <div className="h-4 bg-gray-300/20 rounded w-16"></div>
    </div>
    <div className="h-10 bg-gray-300/20 rounded"></div>
  </div>
);

export const StatsSkeleton: React.FC = () => (
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
    {[...Array(3)].map((_, i) => (
      <div key={i} className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 animate-pulse">
        <div className="w-12 h-12 bg-gray-300/20 rounded-full mb-4"></div>
        <div className="h-8 bg-gray-300/20 rounded mb-2"></div>
        <div className="h-4 bg-gray-300/20 rounded w-2/3"></div>
      </div>
    ))}
  </div>
);

export const ContentSkeleton: React.FC = () => (
  <div className="space-y-6">
    <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 animate-pulse">
      <div className="h-8 bg-gray-300/20 rounded mb-4 w-1/2"></div>
      <div className="h-4 bg-gray-300/20 rounded mb-2"></div>
      <div className="h-4 bg-gray-300/20 rounded w-3/4"></div>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {[...Array(4)].map((_, i) => (
        <div key={i} className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 animate-pulse">
          <div className="h-48 bg-gray-300/20 rounded mb-4"></div>
          <div className="h-6 bg-gray-300/20 rounded mb-2"></div>
          <div className="h-4 bg-gray-300/20 rounded mb-2"></div>
          <div className="h-4 bg-gray-300/20 rounded w-2/3"></div>
        </div>
      ))}
    </div>
  </div>
);

export const HeroSkeleton: React.FC = () => (
  <div className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
    <div className="max-w-7xl mx-auto">
      <div className="text-center animate-pulse">
        <div className="h-16 bg-gray-300/20 rounded mx-auto mb-6 w-3/4"></div>
        <div className="h-6 bg-gray-300/20 rounded mx-auto mb-8 w-1/2"></div>
        <div className="flex justify-center gap-4 mb-8">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="h-8 bg-gray-300/20 rounded-full w-24"></div>
          ))}
        </div>
        <div className="h-12 bg-gray-300/20 rounded mx-auto w-48"></div>
      </div>
    </div>
  </div>
);

export const ServiceIcon: React.FC<{ type: string; className?: string }> = ({ type, className = "w-6 h-6" }) => {
  const icons = {
    ai: Brain,
    security: Shield,
    cloud: Cloud,
    development: Code
  };
  
  const IconComponent = icons[type as keyof typeof icons] || Brain;
  return <IconComponent className={className} />;
};