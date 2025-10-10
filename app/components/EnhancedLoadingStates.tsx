'use client';
import React, { memo } from 'react';
import { Loader2, Brain, Cloud, Code, Zap, Shield, Database, Users, BarChart, Settings } from 'lucide-react';

// Base loading skeleton component
const BaseSkeleton: React.FC<{ className?: string }> = ({ className = '' }) => (
  <div className={`animate-pulse bg-gray-200/20 rounded ${className}`} />
);

// Page loader with futuristic design
export const PageLoader: React.FC = memo(() => (
  <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
    <div className="cyber-card-enhanced p-8 text-center">
      <div className="relative">
        <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 animate-spin">
          <Brain className="w-10 h-10 text-white" />
        </div>
        <div className="absolute inset-0 w-20 h-20 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full mx-auto blur-lg opacity-30 animate-pulse" />
      </div>
      
      <h2 className="text-2xl font-bold text-white mb-4">Loading Zion Tech Group</h2>
      <p className="text-gray-300 mb-6">Preparing your experience...</p>
      
      <div className="flex justify-center space-x-2">
        <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
        <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
        <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
      </div>
    </div>
  </div>
));
PageLoader.displayName = 'PageLoader';

// Service card skeleton
export const ServiceCardSkeleton: React.FC = memo(() => (
  <div className="cyber-card-enhanced holographic-card-enhanced p-6 animate-pulse" role="status" aria-label="Loading service card">
    <div className="w-16 h-16 bg-gray-200/20 rounded-lg mb-6" />
    <div className="h-6 bg-gray-200/20 rounded mb-4 w-3/4" />
    <div className="h-4 bg-gray-200/20 rounded mb-2" />
    <div className="h-4 bg-gray-200/20 rounded w-5/6 mb-4" />
    <div className="space-y-2 mb-6">
      <div className="h-3 bg-gray-200/20 rounded" />
      <div className="h-3 bg-gray-200/20 rounded w-4/5" />
      <div className="h-3 bg-gray-200/20 rounded w-3/5" />
    </div>
    <div className="flex justify-between items-center">
      <div className="h-4 bg-gray-200/20 rounded w-20" />
      <div className="h-8 bg-gray-200/20 rounded w-16" />
    </div>
  </div>
));
ServiceCardSkeleton.displayName = 'ServiceCardSkeleton';

// Stats skeleton
export const StatsSkeleton: React.FC = memo(() => (
  <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
    {Array.from({ length: 4 }).map((_, index) => (
      <div key={index} className="text-center cyber-card-enhanced p-6 animate-pulse">
        <div className="w-12 h-12 bg-gray-200/20 rounded-full mx-auto mb-4" />
        <div className="h-8 bg-gray-200/20 rounded mb-2 w-16 mx-auto" />
        <div className="h-4 bg-gray-200/20 rounded w-20 mx-auto" />
      </div>
    ))}
  </div>
));
StatsSkeleton.displayName = 'StatsSkeleton';

// Navigation skeleton
export const NavigationSkeleton: React.FC = memo(() => (
  <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-md shadow-lg">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between h-16">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gray-200/20 rounded-lg animate-pulse" />
          <div className="h-6 bg-gray-200/20 rounded w-32 animate-pulse" />
        </div>
        <div className="hidden lg:flex items-center space-x-8">
          {Array.from({ length: 6 }).map((_, index) => (
            <div key={index} className="h-4 bg-gray-200/20 rounded w-16 animate-pulse" />
          ))}
        </div>
        <div className="w-8 h-8 bg-gray-200/20 rounded animate-pulse" />
      </div>
    </div>
  </nav>
));
NavigationSkeleton.displayName = 'NavigationSkeleton';

// Content skeleton
export const ContentSkeleton: React.FC<{ lines?: number }> = memo(({ lines = 3 }) => (
  <div className="space-y-4">
    {Array.from({ length: lines }).map((_, index) => (
      <div key={index} className="space-y-2">
        <div className="h-4 bg-gray-200/20 rounded animate-pulse" />
        <div className="h-4 bg-gray-200/20 rounded w-5/6 animate-pulse" />
      </div>
    ))}
  </div>
));
ContentSkeleton.displayName = 'ContentSkeleton';

// Table skeleton
export const TableSkeleton: React.FC<{ rows?: number; columns?: number }> = memo(({ rows = 5, columns = 4 }) => (
  <div className="cyber-card-enhanced overflow-hidden">
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="border-b border-gray-700">
            {Array.from({ length: columns }).map((_, index) => (
              <th key={index} className="px-6 py-4 text-left">
                <div className="h-4 bg-gray-200/20 rounded w-20 animate-pulse" />
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {Array.from({ length: rows }).map((_, rowIndex) => (
            <tr key={rowIndex} className="border-b border-gray-700/50">
              {Array.from({ length: columns }).map((_, colIndex) => (
                <td key={colIndex} className="px-6 py-4">
                  <div className="h-4 bg-gray-200/20 rounded w-16 animate-pulse" />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
));
TableSkeleton.displayName = 'TableSkeleton';

// Chart skeleton
export const ChartSkeleton: React.FC = memo(() => (
  <div className="cyber-card-enhanced p-6">
    <div className="h-6 bg-gray-200/20 rounded w-32 mb-6 animate-pulse" />
    <div className="h-64 bg-gray-200/20 rounded animate-pulse" />
  </div>
));
ChartSkeleton.displayName = 'ChartSkeleton';

// Form skeleton
export const FormSkeleton: React.FC = memo(() => (
  <div className="cyber-card-enhanced p-6 space-y-6">
    <div className="space-y-4">
      <div className="h-4 bg-gray-200/20 rounded w-24 animate-pulse" />
      <div className="h-10 bg-gray-200/20 rounded animate-pulse" />
    </div>
    <div className="space-y-4">
      <div className="h-4 bg-gray-200/20 rounded w-32 animate-pulse" />
      <div className="h-10 bg-gray-200/20 rounded animate-pulse" />
    </div>
    <div className="space-y-4">
      <div className="h-4 bg-gray-200/20 rounded w-28 animate-pulse" />
      <div className="h-24 bg-gray-200/20 rounded animate-pulse" />
    </div>
    <div className="h-10 bg-gray-200/20 rounded w-24 animate-pulse" />
  </div>
));
FormSkeleton.displayName = 'FormSkeleton';

// List skeleton
export const ListSkeleton: React.FC<{ items?: number }> = memo(({ items = 5 }) => (
  <div className="space-y-4">
    {Array.from({ length: items }).map((_, index) => (
      <div key={index} className="flex items-center space-x-4 p-4 cyber-card-enhanced">
        <div className="w-12 h-12 bg-gray-200/20 rounded-full animate-pulse" />
        <div className="flex-1 space-y-2">
          <div className="h-4 bg-gray-200/20 rounded w-3/4 animate-pulse" />
          <div className="h-3 bg-gray-200/20 rounded w-1/2 animate-pulse" />
        </div>
      </div>
    ))}
  </div>
));
ListSkeleton.displayName = 'ListSkeleton';

// Icon-based loading states
export const IconLoader: React.FC<{ icon: React.ComponentType<any>; size?: number; className?: string }> = memo(({ 
  icon: Icon, 
  size = 24, 
  className = '' 
}) => (
  <div className={`animate-spin ${className}`}>
    <Icon size={size} className="text-cyan-400" />
  </div>
));
IconLoader.displayName = 'IconLoader';

// Specific service loading states
export const AIServiceLoader: React.FC = memo(() => (
  <div className="flex items-center justify-center space-x-2 p-4">
    <Brain className="w-5 h-5 text-cyan-400 animate-pulse" />
    <span className="text-gray-300">Loading AI Services...</span>
  </div>
));
AIServiceLoader.displayName = 'AIServiceLoader';

export const ITServiceLoader: React.FC = memo(() => (
  <div className="flex items-center justify-center space-x-2 p-4">
    <Cloud className="w-5 h-5 text-purple-400 animate-pulse" />
    <span className="text-gray-300">Loading IT Services...</span>
  </div>
));
ITServiceLoader.displayName = 'ITServiceLoader';

export const MicroSaasLoader: React.FC = memo(() => (
  <div className="flex items-center justify-center space-x-2 p-4">
    <Code className="w-5 h-5 text-green-400 animate-pulse" />
    <span className="text-gray-300">Loading Micro SaaS...</span>
  </div>
));
MicroSaasLoader.displayName = 'MicroSaasLoader';

// Progress loader
export const ProgressLoader: React.FC<{ progress: number; label?: string }> = memo(({ progress, label = 'Loading...' }) => (
  <div className="w-full">
    <div className="flex justify-between items-center mb-2">
      <span className="text-sm text-gray-300">{label}</span>
      <span className="text-sm text-cyan-400">{Math.round(progress)}%</span>
    </div>
    <div className="w-full bg-gray-700 rounded-full h-2">
      <div 
        className="bg-gradient-to-r from-cyan-500 to-blue-600 h-2 rounded-full transition-all duration-300 ease-out"
        style={{ width: `${Math.min(100, Math.max(0, progress))}%` }}
      />
    </div>
  </div>
));
ProgressLoader.displayName = 'ProgressLoader';

// Inline loader
export const InlineLoader: React.FC<{ text?: string }> = memo(({ text = 'Loading...' }) => (
  <div className="flex items-center justify-center space-x-2 text-gray-300">
    <Loader2 className="w-4 h-4 animate-spin" />
    <span className="text-sm">{text}</span>
  </div>
));
InlineLoader.displayName = 'InlineLoader';

// Full screen loader with progress
export const FullScreenLoader: React.FC<{ progress?: number; message?: string }> = memo(({ 
  progress = 0, 
  message = 'Initializing Zion Tech Group...' 
}) => (
  <div className="fixed inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center z-50">
    <div className="cyber-card-enhanced p-8 text-center max-w-md w-full mx-4">
      <div className="relative mb-8">
        <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto">
          <Brain className="w-10 h-10 text-white" />
        </div>
        <div className="absolute inset-0 w-20 h-20 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full mx-auto blur-lg opacity-30 animate-pulse" />
      </div>
      
      <h2 className="text-2xl font-bold text-white mb-4">Zion Tech Group</h2>
      <p className="text-gray-300 mb-6">{message}</p>
      
      <ProgressLoader progress={progress} label="Loading" />
    </div>
  </div>
));
FullScreenLoader.displayName = 'FullScreenLoader';