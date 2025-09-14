'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { XMarkIcon, ArrowRightIcon, CpuChipIcon, ChartBarIcon, RocketLaunchIcon, ShieldCheckIcon } from '@heroicons/react/24/outline';

interface QuantumMLContent {
  id: string;
  title: string;
  type: string;
  url: string;
  metrics: {
    roi: string;
    speed: string;
    accuracy: string;
    costReduction: string;
  };
  readingTime: string;
  description: string;
}

const quantumMLContent: QuantumMLContent[] = [
  {
    id: 'quantum-ml-revolution-guide',
    title: 'AI 2025: Quantum Machine Learning Revolution - Enterprise Guide',
    type: 'Blog Post',
    url: '/blog/ai-2025-quantum-machine-learning-revolution-enterprise-guide',
    metrics: {
      roi: '800%',
      speed: '1000x',
      accuracy: '99.9%',
      costReduction: '95%'
    },
    readingTime: '16 min read',
    description: 'Transform your enterprise with quantum machine learning. Achieve 800% ROI, 1000x faster processing, and 99.9% accuracy in complex computations.'
  },
  {
    id: 'fortune-100-quantum-ml-success',
    title: 'Fortune 100 Quantum ML Transformation: Ultimate Success Story',
    type: 'Case Study',
    url: '/case-studies/fortune-100-quantum-ml-transformation-ultimate-success',
    metrics: {
      roi: '1200%',
      speed: '1000x',
      accuracy: '99.9%',
      costReduction: '95%'
    },
    readingTime: '14 min read',
    description: 'Learn how a Fortune 100 company achieved 1200% ROI and $4.2B in cost savings with quantum machine learning transformation.'
  },
  {
    id: 'quantum-ml-implementation-guide',
    title: 'Quantum ML Implementation Master Guide 2025',
    type: 'Resource',
    url: '/resources/quantum-ml-implementation-master-guide-2025',
    metrics: {
      roi: '800%',
      speed: '1000x',
      accuracy: '99.9%',
      costReduction: '95%'
    },
    readingTime: '28 min read',
    description: 'Complete roadmap for implementing quantum machine learning. Master guide with step-by-step implementation strategy.'
  }
];

export default function QuantumMLRevolutionBanner() {
  const [currentContentIndex, setCurrentContentIndex] = useState(0);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    // Check if banner was dismissed
    const dismissed = localStorage.getItem('quantum-ml-banner-dismissed');
    if (dismissed === 'true') {
      setIsDismissed(true);
    }
  }, []);

  useEffect(() => {
    if (isDismissed) return;

    const interval = setInterval(() => {
      setCurrentContentIndex((prevIndex) => 
        (prevIndex + 1) % quantumMLContent.length
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [isDismissed]);

  const handleDismiss = () => {
    setIsDismissed(true);
    localStorage.setItem('quantum-ml-banner-dismissed', 'true');
  };

  if (isDismissed) {
    return null;
  }

  const currentContent = quantumMLContent[currentContentIndex];

  return (
    <div className="relative bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      
      {/* Quantum Particles Animation */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
        <div className="absolute top-20 right-20 w-1 h-1 bg-purple-400 rounded-full animate-ping"></div>
        <div className="absolute bottom-20 left-20 w-1.5 h-1.5 bg-blue-400 rounded-full animate-bounce"></div>
        <div className="absolute bottom-10 right-10 w-2 h-2 bg-indigo-400 rounded-full animate-pulse"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-8">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-800/30 border border-purple-400/30 mb-4">
            <CpuChipIcon className="w-5 h-5 mr-2 text-cyan-400" />
            <span className="text-sm font-medium text-cyan-300">QUANTUM ML REVOLUTION 2025</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
            Quantum Machine Learning Revolution
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Transform your enterprise with quantum machine learning. Achieve <span className="text-cyan-400 font-semibold">800% ROI</span>, 
            <span className="text-purple-400 font-semibold"> 1000x faster processing</span>, and 
            <span className="text-blue-400 font-semibold"> 99.9% accuracy</span> in complex computations.
          </p>
        </div>

        {/* Content Showcase */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8 border border-white/20">
          <div className="flex items-start justify-between mb-6">
            <div className="flex-1">
              <div className="flex items-center mb-3">
                <span className="px-3 py-1 bg-purple-600/30 text-purple-300 text-sm font-medium rounded-full mr-3">
                  {currentContent.type}
                </span>
                <span className="text-sm text-gray-400">{currentContent.readingTime}</span>
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-3">
                {currentContent.title}
              </h3>
              
              <p className="text-gray-300 mb-6">
                {currentContent.description}
              </p>
            </div>
            
            <button
              onClick={handleDismiss}
              className="ml-4 p-2 hover:bg-white/10 rounded-full transition-colors"
            >
              <XMarkIcon className="w-5 h-5 text-gray-400" />
            </button>
          </div>

          {/* Metrics Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            <div className="bg-gradient-to-br from-cyan-500/20 to-cyan-600/20 p-4 rounded-xl border border-cyan-400/30">
              <div className="flex items-center mb-2">
                <ChartBarIcon className="w-5 h-5 text-cyan-400 mr-2" />
                <span className="text-sm font-medium text-cyan-300">ROI</span>
              </div>
              <div className="text-2xl font-bold text-cyan-400">{currentContent.metrics.roi}</div>
            </div>
            
            <div className="bg-gradient-to-br from-purple-500/20 to-purple-600/20 p-4 rounded-xl border border-purple-400/30">
              <div className="flex items-center mb-2">
                <RocketLaunchIcon className="w-5 h-5 text-purple-400 mr-2" />
                <span className="text-sm font-medium text-purple-300">Speed</span>
              </div>
              <div className="text-2xl font-bold text-purple-400">{currentContent.metrics.speed}</div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-500/20 to-blue-600/20 p-4 rounded-xl border border-blue-400/30">
              <div className="flex items-center mb-2">
                <ShieldCheckIcon className="w-5 h-5 text-blue-400 mr-2" />
                <span className="text-sm font-medium text-blue-300">Accuracy</span>
              </div>
              <div className="text-2xl font-bold text-blue-400">{currentContent.metrics.accuracy}</div>
            </div>
            
            <div className="bg-gradient-to-br from-indigo-500/20 to-indigo-600/20 p-4 rounded-xl border border-indigo-400/30">
              <div className="flex items-center mb-2">
                <CpuChipIcon className="w-5 h-5 text-indigo-400 mr-2" />
                <span className="text-sm font-medium text-indigo-300">Cost Reduction</span>
              </div>
              <div className="text-2xl font-bold text-indigo-400">{currentContent.metrics.costReduction}</div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href={currentContent.url}
              className="flex-1 bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center justify-center"
            >
              Read {currentContent.type}
              <ArrowRightIcon className="w-5 h-5 ml-2" />
            </Link>
            
            <Link
              href="/contact"
              className="flex-1 bg-white/10 hover:bg-white/20 text-white font-semibold py-3 px-6 rounded-xl border border-white/30 transition-all duration-300 flex items-center justify-center"
            >
              Get Quantum Consultation
            </Link>
          </div>
        </div>

        {/* Content Navigation Dots */}
        <div className="flex justify-center space-x-2 mb-8">
          {quantumMLContent.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentContentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentContentIndex
                  ? 'bg-cyan-400 scale-125'
                  : 'bg-white/30 hover:bg-white/50'
              }`}
            />
          ))}
        </div>

        {/* Key Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-cyan-500/20 to-cyan-600/20 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-cyan-400/30">
              <CpuChipIcon className="w-8 h-8 text-cyan-400" />
            </div>
            <h4 className="text-lg font-semibold text-white mb-2">Quantum Advantage</h4>
            <p className="text-gray-300 text-sm">
              Solve problems impossible for classical computers with quantum machine learning algorithms.
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500/20 to-purple-600/20 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-purple-400/30">
              <RocketLaunchIcon className="w-8 h-8 text-purple-400" />
            </div>
            <h4 className="text-lg font-semibold text-white mb-2">Exponential Speedup</h4>
            <p className="text-gray-300 text-sm">
              Achieve 1000x faster processing for optimization problems and complex computations.
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500/20 to-blue-600/20 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-blue-400/30">
              <ShieldCheckIcon className="w-8 h-8 text-blue-400" />
            </div>
            <h4 className="text-lg font-semibold text-white mb-2">Enterprise Ready</h4>
            <p className="text-gray-300 text-sm">
              Production-ready quantum ML solutions with 99.9% accuracy and enterprise security.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}