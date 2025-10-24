'use client';
import React, { useState, useEffect } from 'react';
import { Zap, CheckCircle, Clock } from 'lucide-react';

const LoadingOptimizer: React.FC = () => {
  const [isOptimizing, setIsOptimizing] = useState(true);
  const [progress, setProgress] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    'Analyzing performance metrics',
    'Optimizing resource loading',
    'Compressing assets',
    'Implementing caching strategies',
    'Finalizing optimizations'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          setIsOptimizing(false);
          clearInterval(interval);
          return 100;
        }
        return prev + 5;
      });
    }, 200);

    const stepInterval = setInterval(() => {
      setCurrentStep(prev => {
        if (prev >= steps.length - 1) {
          clearInterval(stepInterval);
          return prev;
        }
        return prev + 1;
      });
    }, 1000);

    return () => {
      clearInterval(interval);
      clearInterval(stepInterval);
    };
  }, [steps.length]);

  if (!isOptimizing) {
    return (
      <div className="fixed inset-0 bg-gradient-to-br from-slate-900 via-green-900 to-slate-900 z-50 flex items-center justify-center">
        <div className="text-center">
          <div className="mb-8">
            <CheckCircle className="h-16 w-16 text-green-400 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-white mb-2">Optimization Complete!</h2>
            <p className="text-gray-300">Your application is now running at peak performance.</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-slate-900 via-green-900 to-slate-900 z-50 flex items-center justify-center">
      <div className="text-center max-w-md mx-auto px-4">
        <div className="mb-8">
          <div className="relative w-32 h-32 mx-auto mb-6">
            <div className="absolute inset-0 rounded-full border-4 border-green-500/20"></div>
            <div 
              className="absolute inset-0 rounded-full border-4 border-transparent border-t-green-500 border-r-emerald-500 animate-spin"
              style={{ animationDuration: '1s' }}
            ></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <Zap className="h-8 w-8 text-green-400" />
            </div>
          </div>
          
          <h2 className="text-2xl font-bold text-white mb-2">Optimizing Performance</h2>
          <p className="text-gray-300 mb-6">{steps[currentStep]}</p>
          
          <div className="w-full bg-gray-700 rounded-full h-2 mb-4">
            <div 
              className="bg-gradient-to-r from-green-500 to-emerald-500 h-2 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <p className="text-gray-400 text-sm">{progress}% Complete</p>
        </div>
      </div>
    </div>
  );
};

export default LoadingOptimizer;