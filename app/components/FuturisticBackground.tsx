'use client';
import React from 'react';

const FuturisticBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Animated Grid Background */}
      <div className="absolute inset-0 cyber-grid opacity-30"></div>
      
      {/* Floating Particles */}
      <div className="absolute inset-0 particles opacity-20"></div>
      
      {/* Gradient Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-pink-500/20 to-orange-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
      
      {/* Neural Network Lines */}
      <svg className="absolute inset-0 w-full h-full opacity-10" viewBox="0 0 1000 1000">
        <defs>
          <linearGradient id="neuralGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#06b6d4" />
            <stop offset="50%" stopColor="#8b5cf6" />
            <stop offset="100%" stopColor="#ec4899" />
          </linearGradient>
        </defs>
        
        {/* Neural Network Nodes */}
        <circle cx="200" cy="200" r="3" fill="url(#neuralGradient)" className="animate-pulse">
          <animate attributeName="r" values="3;6;3" dur="3s" repeatCount="indefinite" />
        </circle>
        <circle cx="400" cy="150" r="3" fill="url(#neuralGradient)" className="animate-pulse">
          <animate attributeName="r" values="3;6;3" dur="3s" repeatCount="indefinite" begin="0.5s" />
        </circle>
        <circle cx="600" cy="200" r="3" fill="url(#neuralGradient)" className="animate-pulse">
          <animate attributeName="r" values="3;6;3" dur="3s" repeatCount="indefinite" begin="1s" />
        </circle>
        <circle cx="800" cy="300" r="3" fill="url(#neuralGradient)" className="animate-pulse">
          <animate attributeName="r" values="3;6;3" dur="3s" repeatCount="indefinite" begin="1.5s" />
        </circle>
        <circle cx="300" cy="400" r="3" fill="url(#neuralGradient)" className="animate-pulse">
          <animate attributeName="r" values="3;6;3" dur="3s" repeatCount="indefinite" begin="2s" />
        </circle>
        <circle cx="700" cy="500" r="3" fill="url(#neuralGradient)" className="animate-pulse">
          <animate attributeName="r" values="3;6;3" dur="3s" repeatCount="indefinite" begin="2.5s" />
        </circle>
        <circle cx="150" cy="600" r="3" fill="url(#neuralGradient)" className="animate-pulse">
          <animate attributeName="r" values="3;6;3" dur="3s" repeatCount="indefinite" begin="3s" />
        </circle>
        <circle cx="500" cy="700" r="3" fill="url(#neuralGradient)" className="animate-pulse">
          <animate attributeName="r" values="3;6;3" dur="3s" repeatCount="indefinite" begin="3.5s" />
        </circle>
        <circle cx="850" cy="800" r="3" fill="url(#neuralGradient)" className="animate-pulse">
          <animate attributeName="r" values="3;6;3" dur="3s" repeatCount="indefinite" begin="4s" />
        </circle>
        
        {/* Neural Network Connections */}
        <line x1="200" y1="200" x2="400" y2="150" stroke="url(#neuralGradient)" strokeWidth="1" opacity="0.6">
          <animate attributeName="opacity" values="0.6;0.2;0.6" dur="4s" repeatCount="indefinite" />
        </line>
        <line x1="400" y1="150" x2="600" y2="200" stroke="url(#neuralGradient)" strokeWidth="1" opacity="0.6">
          <animate attributeName="opacity" values="0.6;0.2;0.6" dur="4s" repeatCount="indefinite" begin="0.5s" />
        </line>
        <line x1="600" y1="200" x2="800" y2="300" stroke="url(#neuralGradient)" strokeWidth="1" opacity="0.6">
          <animate attributeName="opacity" values="0.6;0.2;0.6" dur="4s" repeatCount="indefinite" begin="1s" />
        </line>
        <line x1="200" y1="200" x2="300" y2="400" stroke="url(#neuralGradient)" strokeWidth="1" opacity="0.6">
          <animate attributeName="opacity" values="0.6;0.2;0.6" dur="4s" repeatCount="indefinite" begin="1.5s" />
        </line>
        <line x1="300" y1="400" x2="700" y2="500" stroke="url(#neuralGradient)" strokeWidth="1" opacity="0.6">
          <animate attributeName="opacity" values="0.6;0.2;0.6" dur="4s" repeatCount="indefinite" begin="2s" />
        </line>
        <line x1="700" y1="500" x2="150" y2="600" stroke="url(#neuralGradient)" strokeWidth="1" opacity="0.6">
          <animate attributeName="opacity" values="0.6;0.2;0.6" dur="4s" repeatCount="indefinite" begin="2.5s" />
        </line>
        <line x1="150" y1="600" x2="500" y2="700" stroke="url(#neuralGradient)" strokeWidth="1" opacity="0.6">
          <animate attributeName="opacity" values="0.6;0.2;0.6" dur="4s" repeatCount="indefinite" begin="3s" />
        </line>
        <line x1="500" y1="700" x2="850" y2="800" stroke="url(#neuralGradient)" strokeWidth="1" opacity="0.6">
          <animate attributeName="opacity" values="0.6;0.2;0.6" dur="4s" repeatCount="indefinite" begin="3.5s" />
        </line>
      </svg>
      
      {/* Matrix Rain Effect */}
      <div className="absolute inset-0 matrix-rain opacity-5"></div>
    </div>
  );
};

export default FuturisticBackground;
