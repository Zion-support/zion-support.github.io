'use client';
import { Loader2, Brain, Cloud, Shield, Code } from 'lucide-react'; origin/cursor/analyze-improve-and-deploy-application-1232

interface LoadingSpinnerProps {size?: 'sm' | 'md' | 'lg';}
  text?: string;}export const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({,
 origin/cursor/analyze-improve-and-deploy-application-1247
  size = 'md', 
  text = 'Loading...'}) => {const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
import { Brain, Zap, Globe } from "lucide-react";
interface LoadingPageProps {
  message?: string;
  showProgress?: boolean;
  progress?: number;
} origin/cursor/analyze-improve-and-deploy-application-0ff3

export const ServiceCardSkeleton: React.FC = () => (,
=======
    lg: 'w-12 h-12'
  }

  return (
    <div className="flex flex-col items-center justify-center p-8">
      <Loader2 className={`${sizeClasses[size]} animate-spin text-blue-500`} />
      {text && (
        <p className="mt-2 text-sm text-gray-500">{text}</p>
      )}
    </div>
  )
}

export const PageLoader: React.FC = () => (
  <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
    <div className="text-center">
      <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mb-4 mx-auto animate-pulse">
        <Brain className="w-8 h-8 text-white" />
      </div>
      <h2 className="text-xl font-semibold text-white mb-2">Zion Tech Group</h2>
      <p className="text-gray-300">Loading amazing content...</p>
    </div>
  </div>
)
export const ServiceCardSkeleton: React.FC = () => ( origin/cursor/analyze-improve-and-deploy-application-1247
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
=======
)
export const StatsSkeleton: React.FC = () => (
  <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
    {Array.from({ length: 4 }).map((_, index) => (
      <div key={index} className="text-center animate-pulse">
        <div className="h-8 bg-gray-600 rounded mb-2"></div>
        <div className="h-4 bg-gray-600 rounded w-3/4 mx-auto"></div>
      </div>
    ))}
  </div>
)
export const ContentSkeleton: React.FC = () => ( origin/cursor/analyze-improve-and-deploy-application-1247
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
) origin/cursor/analyze-improve-and-deploy-application-1247
