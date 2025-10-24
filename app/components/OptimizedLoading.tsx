'use client';
import React, { useState, useEffect } from 'react';
import { Loader2, CheckCircle, AlertCircle } from 'lucide-react';

interface OptimizedLoadingProps {
  message?: string;
  timeout?: number;
  onComplete?: () => void;
}

const OptimizedLoading: React.FC<OptimizedLoadingProps> = ({ 
  message = "Loading...", 
  timeout = 3000,
  onComplete 
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          setIsLoading(false);
          clearInterval(interval);
          if (onComplete) {
            setTimeout(onComplete, 500);
          }
          return 100;
        }
        return prev + 2;
      });
    }, timeout / 50);

    return () => clearInterval(interval);
  }, [timeout, onComplete]);

  if (!isLoading) {
    return (
      <div className="flex items-center justify-center p-4">
        <div className="text-center">
          <CheckCircle className="h-8 w-8 text-green-500 mx-auto mb-2" />
          <p className="text-sm text-gray-600">Complete</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center p-4">
      <div className="text-center">
        <div className="relative mb-4">
          <Loader2 className="h-8 w-8 text-blue-500 animate-spin mx-auto" />
        </div>
        <p className="text-sm text-gray-600 mb-2">{message}</p>
        <div className="w-32 bg-gray-200 rounded-full h-1 mx-auto">
          <div 
            className="bg-blue-500 h-1 rounded-full transition-all duration-300"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <p className="text-xs text-gray-500 mt-1">{progress}%</p>
      </div>
    </div>
  );
};

export default OptimizedLoading;