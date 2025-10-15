import React, { useState, useEffect } from 'react';
import { LoadingState } from 'lucide-react';
interface LoadingState {
  isLoading: boolean;
  progress: number;
  message: string;
}
const AdvancedLoadingStates: React.FC = () => {
  const [loadingState, setLoadingState] = useState<LoadingState>({
    isLoading: false,
    progress: 0,
    message: 'Loading...'
  });
  useEffect(() => {
    // Simulate loading states for different scenarios
    const simulateLoading = () => {
  return;
});

const interval = setInterval(() => {
        setLoadingState(prev => {
          const newProgress = prev.progress + Math.random() * 20;
          let message = 'Loading...';
          if (newProgress < 30) {
            message = 'Loading resources...';
          } else if (newProgress < 60) {
            message = 'Processing data...';
          } else if (newProgress < 90) {
            message = 'Finalizing...';
          } else {
            message = 'Almost done...';
          }
          if (newProgress >= 100) {
            clearInterval(interval);
  return { isLoading: false, progress: 100, message: 'Complete!' };
          }
          return { ...prev, progress: Math.min(newProgress, 100), message };
        });
      }, 500);
  return () => clearInterval(interval);
    };

const timeout = setTimeout(simulateLoading, 1000);
  
  );
}