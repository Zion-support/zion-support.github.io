'use client';
import React, { useState, useEffect } from 'react';

const FuturisticLoader: React.FC = () => {
  const [progress, setProgress] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          setLoading(false);
          clearInterval(interval);
          return 100;
        }
        return prev + 2;
      });
    }, 50);

    return () => clearInterval(interval);
  }, []);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 z-50 flex items-center justify-center">
      <div className="text-center">
        <div className="relative w-64 h-64 mb-8">
          <div className="absolute inset-0 rounded-full border-4 border-purple-500/20"></div>
          <div 
            className="absolute inset-0 rounded-full border-4 border-transparent border-t-purple-500 border-r-cyan-500 animate-spin"
            style={{ animationDuration: '1s' }}
          ></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-32 h-32 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 opacity-20 animate-pulse"></div>
          </div>
        </div>
        
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-white mb-2">Loading Advanced Systems</h2>
          <div className="w-64 bg-gray-700 rounded-full h-2 mx-auto">
            <div 
              className="bg-gradient-to-r from-purple-500 to-cyan-500 h-2 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <p className="text-gray-300 text-sm">{progress}% Complete</p>
        </div>
      </div>
    </div>
  );
};

export default FuturisticLoader;