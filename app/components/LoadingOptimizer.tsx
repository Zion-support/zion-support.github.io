import React, { useEffect, useState, useCallback } from 'react';
import { Loader2, CheckCircle, AlertCircle } from 'lucide-react';

interface LoadingOptimizerProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
  timeout?: number;
  enableSkeleton?: boolean;
  enableProgressiveLoading?: boolean;
}

interface LoadingState {
  isLoading: boolean;
  progress: number;
  error: string | null;
  stage: 'initializing' | 'loading' | 'optimizing' | 'complete';
}

const LoadingOptimizer: React.FC<LoadingOptimizerProps> = ({
  children,
  fallback,
  timeout = 10000,
  enableSkeleton = true,
  enableProgressiveLoading = true,
}) => {
  const [loadingState, setLoadingState] = useState<LoadingState>({
    isLoading: true,
    progress: 0,
    error: null,
    stage: 'initializing',
  });

  const [isVisible, setIsVisible] = useState(false);

  // Simulate loading progress
  const updateProgress = useCallback(() => {
    setLoadingState(prev => {
      if (prev.stage === 'initializing') {
        return { ...prev, progress: 25, stage: 'loading' };
      } else if (prev.stage === 'loading') {
        return { ...prev, progress: 60, stage: 'optimizing' };
      } else if (prev.stage === 'optimizing') {
        return { ...prev, progress: 90, stage: 'complete' };
      } else {
        return { ...prev, progress: 100, isLoading: false };
      }
    });
  }, []);

  // Handle loading timeout
  useEffect(() => {
    const timer = setTimeout(() => {
      if (loadingState.isLoading) {
        setLoadingState(prev => ({
          ...prev,
          error: 'Loading timeout exceeded',
          isLoading: false,
        }));
      }
    }, timeout);

    return () => clearTimeout(timer);
  }, [loadingState.isLoading, timeout]);

  // Progressive loading simulation
  useEffect(() => {
    if (!enableProgressiveLoading) {
      setLoadingState(prev => ({ ...prev, isLoading: false }));
      return;
    }

    const interval = setInterval(updateProgress, 200);
    
    // Complete loading after a short delay
    const completeTimer = setTimeout(() => {
      setLoadingState(prev => ({ ...prev, progress: 100, isLoading: false }));
      clearInterval(interval);
    }, 1000);

    return () => {
      clearInterval(interval);
      clearTimeout(completeTimer);
    };
  }, [updateProgress, enableProgressiveLoading]);

  // Intersection observer for lazy loading
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('loading-optimizer');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  // Custom fallback component
  const defaultFallback = (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
      <div className="text-center">
        <div className="w-16 h-16 mx-auto mb-6 relative">
          <div className="absolute inset-0 rounded-full border-4 border-cyan-500/20"></div>
          <div 
            className="absolute inset-0 rounded-full border-4 border-cyan-500 border-t-transparent animate-spin"
            style={{ animationDuration: '1s' }}
          ></div>
          <Loader2 className="w-8 h-8 text-cyan-400 absolute inset-0 m-auto" />
        </div>
        
        <h2 className="text-xl font-semibold text-white mb-2">
          {loadingState.stage === 'initializing' && 'Initializing...'}
          {loadingState.stage === 'loading' && 'Loading Content...'}
          {loadingState.stage === 'optimizing' && 'Optimizing Performance...'}
          {loadingState.stage === 'complete' && 'Almost Ready...'}
        </h2>
        
        <div className="w-64 bg-gray-700 rounded-full h-2 mb-4">
          <div 
            className="bg-gradient-to-r from-cyan-500 to-purple-600 h-2 rounded-full transition-all duration-300"
            style={{ width: `${loadingState.progress}%` }}
          ></div>
        </div>
        
        <p className="text-gray-400 text-sm">
          {loadingState.progress}% Complete
        </p>
      </div>
    </div>
  );

  // Error state
  if (loadingState.error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        <div className="text-center">
          <AlertCircle className="w-16 h-16 text-red-400 mx-auto mb-4" />
          <h2 className="text-xl font-semibold text-white mb-2">
            Loading Error
          </h2>
          <p className="text-gray-400 mb-4">
            {loadingState.error}
          </p>
          <button
            onClick={() => window.location.reload()}
            className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  // Show loading state
  if (loadingState.isLoading) {
    return fallback || defaultFallback;
  }

  // Show content with skeleton loading if enabled
  if (enableSkeleton && !isVisible) {
    return (
      <div id="loading-optimizer" className="animate-pulse">
        <div className="space-y-4">
          <div className="h-8 bg-gray-700 rounded w-3/4"></div>
          <div className="h-4 bg-gray-700 rounded w-1/2"></div>
          <div className="h-4 bg-gray-700 rounded w-2/3"></div>
          <div className="h-32 bg-gray-700 rounded"></div>
        </div>
      </div>
    );
  }

  return <>{children}</>;
};

export default LoadingOptimizer;