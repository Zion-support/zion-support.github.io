'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { XMarkIcon, ArrowRightIcon, CpuChipIcon, ChartBarIcon, RocketLaunchIcon, ShieldCheckIcon } from '@heroicons/react/24/outline';

interface AutonomousContent {
  id: string;
  title: string;
  type: string;
  url: string;
  metrics: {
    roi: string;
    uptime: string;
    costReduction: string;
    productivity: string;
  };
  readingTime: string;
  description: string;
}

const autonomousContent: AutonomousContent[] = [
  {
    id: 'autonomous-enterprise-systems-revolution',
    title: 'AI 2025: Autonomous Enterprise Systems Revolution',
    type: 'Blog Post',
    url: '/blog/ai-2025-autonomous-enterprise-systems-revolution',
    metrics: {
      roi: '1200%',
      uptime: '99.8%',
      costReduction: '85%',
      productivity: '400%'
    },
    readingTime: '12 min read',
    description: 'Transform your enterprise with autonomous systems. Achieve 1200% ROI, 99.8% uptime, and 400% productivity improvement through fully automated business processes.'
  },
  {
    id: 'fortune-500-autonomous-systems-success',
    title: 'Fortune 500 Autonomous Systems Transformation: $3.2B Annual Savings Success Story',
    type: 'Case Study',
    url: '/case-studies/fortune-500-autonomous-systems-transformation-success',
    metrics: {
      roi: '1500%',
      uptime: '99.9%',
      costReduction: '85%',
      productivity: '400%'
    },
    readingTime: '14 min read',
    description: 'Learn how a Fortune 500 company achieved 1500% ROI and $3.2B in annual savings with autonomous systems transformation.'
  }
];

export default function AutonomousSystemsRevolutionBanner() {
  const [currentContentIndex, setCurrentContentIndex] = useState(0);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    // Check if banner was dismissed
    const dismissed = localStorage.getItem('autonomous-systems-banner-dismissed');
    if (dismissed === 'true') {
      setIsDismissed(true);
    }
  }, []);

  useEffect(() => {
    if (isDismissed) return;

    const interval = setInterval(() => {
      setCurrentContentIndex((prevIndex) => 
        (prevIndex + 1) % autonomousContent.length
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [isDismissed]);

  const handleDismiss = () => {
    setIsDismissed(true);
    localStorage.setItem('autonomous-systems-banner-dismissed', 'true');
  };

  if (isDismissed) {
    return null;
  }

  const currentContent = autonomousContent[currentContentIndex];

  return (
    <div className="relative bg-gradient-to-r from-emerald-900 via-teal-900 to-cyan-900 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%234F46E5" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      
      {/* Autonomous Elements Animation */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
        <div className="absolute top-20 right-20 w-1 h-1 bg-teal-400 rounded-full animate-ping"></div>
        <div className="absolute bottom-20 left-20 w-1.5 h-1.5 bg-cyan-400 rounded-full animate-bounce"></div>
        <div className="absolute bottom-10 right-10 w-2 h-2 bg-indigo-400 rounded-full animate-pulse"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-8">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-emerald-800/30 border border-emerald-400/30 mb-4">
            <CpuChipIcon className="w-5 h-5 mr-2 text-emerald-400" />
            <span className="text-sm font-medium text-emerald-300">AUTONOMOUS SYSTEMS REVOLUTION 2025</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
            Autonomous Enterprise Systems Revolution
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Transform your enterprise with autonomous systems. Achieve <span className="text-emerald-400 font-semibold">1200% ROI</span>, 
            <span className="text-teal-400 font-semibold"> 99.8% uptime</span>, and 
            <span className="text-cyan-400 font-semibold"> 400% productivity</span> improvement.
          </p>
        </div>

        {/* Content Showcase */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8 border border-white/20">
          <div className="flex items-start justify-between mb-6">
            <div className="flex-1">
              <div className="flex items-center mb-3">
                <span className="px-3 py-1 bg-emerald-600/30 text-emerald-300 text-sm font-medium rounded-full mr-3">
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
            <div className="bg-gradient-to-br from-emerald-500/20 to-emerald-600/20 p-4 rounded-xl border border-emerald-400/30">
              <div className="flex items-center mb-2">
                <ChartBarIcon className="w-5 h-5 text-emerald-400 mr-2" />
                <span className="text-sm font-medium text-emerald-300">ROI</span>
              </div>
              <div className="text-2xl font-bold text-emerald-400">{currentContent.metrics.roi}</div>
            </div>
            
            <div className="bg-gradient-to-br from-teal-500/20 to-teal-600/20 p-4 rounded-xl border border-teal-400/30">
              <div className="flex items-center mb-2">
                <ShieldCheckIcon className="w-5 h-5 text-teal-400 mr-2" />
                <span className="text-sm font-medium text-teal-300">Uptime</span>
              </div>
              <div className="text-2xl font-bold text-teal-400">{currentContent.metrics.uptime}</div>
            </div>
            
            <div className="bg-gradient-to-br from-cyan-500/20 to-cyan-600/20 p-4 rounded-xl border border-cyan-400/30">
              <div className="flex items-center mb-2">
                <RocketLaunchIcon className="w-5 h-5 text-cyan-400 mr-2" />
                <span className="text-sm font-medium text-cyan-300">Cost Reduction</span>
              </div>
              <div className="text-2xl font-bold text-cyan-400">{currentContent.metrics.costReduction}</div>
            </div>
            
            <div className="bg-gradient-to-br from-indigo-500/20 to-indigo-600/20 p-4 rounded-xl border border-indigo-400/30">
              <div className="flex items-center mb-2">
                <CpuChipIcon className="w-5 h-5 text-indigo-400 mr-2" />
                <span className="text-sm font-medium text-indigo-300">Productivity</span>
              </div>
              <div className="text-2xl font-bold text-indigo-400">{currentContent.metrics.productivity}</div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href={currentContent.url}
              className="flex-1 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center justify-center"
            >
              Read {currentContent.type}
              <ArrowRightIcon className="w-5 h-5 ml-2" />
            </Link>
            
            <Link
              href="/contact"
              className="flex-1 bg-white/10 hover:bg-white/20 text-white font-semibold py-3 px-6 rounded-xl border border-white/30 transition-all duration-300 flex items-center justify-center"
            >
              Get Autonomous Consultation
            </Link>
          </div>
        </div>

        {/* Content Navigation Dots */}
        <div className="flex justify-center space-x-2 mb-8">
          {autonomousContent.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentContentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentContentIndex
                  ? 'bg-emerald-400 scale-125'
                  : 'bg-white/30 hover:bg-white/50'
              }`}
            />
          ))}
        </div>

        {/* Key Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-emerald-500/20 to-emerald-600/20 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-emerald-400/30">
              <CpuChipIcon className="w-8 h-8 text-emerald-400" />
            </div>
            <h4 className="text-lg font-semibold text-white mb-2">Fully Autonomous</h4>
            <p className="text-gray-300 text-sm">
              Self-managing, self-optimizing, and self-healing business processes that operate without human intervention.
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-teal-500/20 to-teal-600/20 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-teal-400/30">
              <RocketLaunchIcon className="w-8 h-8 text-teal-400" />
            </div>
            <h4 className="text-lg font-semibold text-white mb-2">Massive ROI</h4>
            <p className="text-gray-300 text-sm">
              Achieve 1200% ROI within 12 months through fully automated business processes and intelligent decision-making.
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-cyan-500/20 to-cyan-600/20 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-cyan-400/30">
              <ShieldCheckIcon className="w-8 h-8 text-cyan-400" />
            </div>
            <h4 className="text-lg font-semibold text-white mb-2">Enterprise Ready</h4>
            <p className="text-gray-300 text-sm">
              Production-ready autonomous systems with 99.8% uptime, 85% cost reduction, and 400% productivity improvement.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}