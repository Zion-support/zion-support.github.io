'use client';
import React, { useState, useEffect } from 'react';

interface UserExperienceEnhancerProps {
  enableSmoothScrolling?: boolean;
  enableLoadingStates?: boolean;
  enableOfflineSupport?: boolean;
  enableKeyboardNavigation?: boolean;
  children: React.ReactNode;
}

const UserExperienceEnhancer: React.FC<UserExperienceEnhancerProps> = ({
  enableSmoothScrolling = true,
  enableLoadingStates = true,
  enableOfflineSupport = true,
  enableKeyboardNavigation = true,
  children
}) => {
  const [loadingStates, setLoadingStates] = useState<Record<string, boolean>>({});
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  // Handle online/offline status
  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  // Enable smooth scrolling
  useEffect(() => {
    if (enableSmoothScrolling) {
      document.documentElement.style.scrollBehavior = 'smooth';
    }
  }, [enableSmoothScrolling]);

  // Enable keyboard navigation
  useEffect(() => {
    if (enableKeyboardNavigation) {
      const handleKeyDown = (e: KeyboardEvent) => {
        // Skip to main content
        if (e.key === 'Tab' && e.shiftKey && e.target === document.body) {
          const main = document.querySelector('main');
          if (main) {
            (main as HTMLElement).focus();
          }
        }
      };

      document.addEventListener('keydown', handleKeyDown);
      return () => document.removeEventListener('keydown', handleKeyDown);
    }
  }, [enableKeyboardNavigation]);

  // Loading state management
  const setLoading = (key: string, loading: boolean) => {
    if (enableLoadingStates) {
      setLoadingStates(prev => ({ ...prev, [key]: loading }));
    }
  };

  const isLoading = (key: string) => {
    return enableLoadingStates ? loadingStates[key] || false : false;
  };

  return (
    <div className="user-experience-enhancer">
      {/* Offline indicator */}
      {enableOfflineSupport && !isOnline && (
        <div className="fixed top-0 left-0 right-0 bg-yellow-500 text-white text-center py-2 z-50">
          You are currently offline. Some features may not be available.
        </div>
      )}
      
      {children}
    </div>
  );
};

export default UserExperienceEnhancer;