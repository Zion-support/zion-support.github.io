'use client';
import React, { useEffect, useState } from 'react';
import { Smartphone, Wifi, Battery, Zap } from 'lucide-react';

interface MobileOptimizerProps {
  className?: string;
}

const MobileOptimizer: React.FC<MobileOptimizerProps> = ({
  className = ''
}) => {
  const [isOptimizing, setIsOptimizing] = useState(false);
  const [optimizations, setOptimizations] = useState<string[]>([]);

  const optimizationSteps = [
    'Detecting mobile device...',
    'Optimizing touch interactions...',
    'Adjusting font sizes...',
    'Optimizing images...',
    'Enabling touch gestures...',
    'Configuring viewport...',
    'Optimizing performance...',
    'Finalizing mobile experience...'
  ];

  const runOptimizations = async () => {
    setIsOptimizing(true);
    setOptimizations([]);

    for (let i = 0; i < optimizationSteps.length; i++) {
      await new Promise(resolve => setTimeout(resolve, 800));
      setOptimizations(prev => [...prev, optimizationSteps[i]]);
    }

    setIsOptimizing(false);
  };

  useEffect(() => {
    // Auto-detect mobile device and run optimizations
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    if (isMobile) {
      runOptimizations();
    }
  }, []);

  return (
    <div className={`bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 ${className}`}>
      <div className="text-center mb-6">
        <Smartphone className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
        <h3 className="text-xl font-semibold text-white mb-2">Mobile Optimizer</h3>
        <p className="text-gray-300">Optimizing your experience for mobile devices</p>
      </div>

      <div className="space-y-4">
        {/* Mobile Features */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="bg-slate-700/50 rounded-lg p-4 text-center">
            <Wifi className="w-8 h-8 text-green-400 mx-auto mb-2" />
            <p className="text-sm text-gray-300">Network Optimization</p>
          </div>
          <div className="bg-slate-700/50 rounded-lg p-4 text-center">
            <Battery className="w-8 h-8 text-yellow-400 mx-auto mb-2" />
            <p className="text-sm text-gray-300">Battery Saving</p>
          </div>
        </div>

        {/* Optimization Progress */}
        {isOptimizing && (
          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-400">
              <span>Optimizing...</span>
              <span>{optimizations.length} / {optimizationSteps.length}</span>
            </div>
            <div className="w-full bg-slate-700 rounded-full h-2">
              <div
                className="bg-gradient-to-r from-cyan-500 to-purple-600 h-2 rounded-full transition-all duration-500"
                style={{ width: `${(optimizations.length / optimizationSteps.length) * 100}%` }}
              />
            </div>
          </div>
        )}

        {/* Optimization Steps */}
        {optimizations.length > 0 && (
          <div className="space-y-2 max-h-48 overflow-y-auto">
            {optimizationSteps.map((step, index) => {
              const isCompleted = optimizations.includes(step);
              
              return (
                <div
                  key={index}
                  className={`flex items-center space-x-3 p-2 rounded-lg transition-all duration-300 ${
                    isCompleted 
                      ? 'bg-green-500/10 border border-green-500/20' 
                      : 'bg-slate-700/30'
                  }`}
                >
                  {isCompleted ? (
                    <Zap className="w-4 h-4 text-green-400 flex-shrink-0" />
                  ) : (
                    <div className="w-4 h-4 rounded-full border-2 border-slate-500 flex-shrink-0" />
                  )}
                  <span className={`text-sm ${
                    isCompleted ? 'text-green-300' : 'text-gray-400'
                  }`}>
                    {step}
                  </span>
                </div>
              );
            })}
          </div>
        )}

        {/* Manual Optimization Button */}
        {!isOptimizing && optimizations.length === 0 && (
          <button
            onClick={runOptimizations}
            className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
          >
            <Zap className="w-5 h-5 mr-2" />
            Optimize for Mobile
          </button>
        )}
      </div>
    </div>
  );
};

export default MobileOptimizer;