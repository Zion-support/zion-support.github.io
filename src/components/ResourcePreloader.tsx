import React, { useEffect, useState } from 'react';
import { resourcePreloader, PreloadResource } from '../utils/resourcePreloader';

interface ResourcePreloaderProps {
  children: React.ReactNode;
  criticalResources?: PreloadResource[];
  className?: string;
}

const ResourcePreloader: React.FC<ResourcePreloaderProps> = ({
  children,
  criticalResources = [],
  className = ''
}) => {
  const [isPreloading, setIsPreloading] = useState(false);
  const [preloadStatus, setPreloadStatus] = useState<'idle' | 'loading' | 'complete' | 'error'>('idle');

  useEffect(() => {
    if (criticalResources.length === 0) return;

    const preloadCriticalResources = async () => {
      setIsPreloading(true);
      setPreloadStatus('loading');

      try {
        await resourcePreloader.preloadResources(criticalResources);
        setPreloadStatus('complete');
      } catch (error) {
        console.warn('Failed to preload critical resources:', error);
        setPreloadStatus('error');
      } finally {
        setIsPreloading(false);
      }
    };

    preloadCriticalResources();
  }, [criticalResources]);

  return (
    <div className={`resource-preloader ${className}`}>
      {isPreloading && (
        <div className="fixed top-4 right-4 bg-blue-500 text-white px-4 py-2 rounded-lg shadow-lg z-50">
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
            <span>Preloading resources...</span>
          </div>
        </div>
      )}
      
      {preloadStatus === 'error' && (
        <div className="fixed top-4 right-4 bg-red-500 text-white px-4 py-2 rounded-lg shadow-lg z-50">
          <div className="flex items-center space-x-2">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
            <span>Failed to preload some resources</span>
          </div>
        </div>
      )}
      
      {children}
    </div>
  );
};

export default ResourcePreloader;