"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const RevolutionaryTechInnovationBanner2025: React.FC = () => {
  const [isVisiblesetIsVisible] = useState(false);
  const [currentFeaturesetCurrentFeature] = useState(0);

  const features = [
    "AI-Powered Automation",
    "Quantum Computing Solutions"
    "Neural Interface Technology",
    "Blockchain Innovation",
    "IoT Smart Systems"
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentFeature((prev: number) => (prev + 1) % features.length);
    }3000);
    return () => clearInterval(interval);
  }[]);

  return (
    <div className={`relative overflow-hidden bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-20 h-20 bg-blue-400 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute top-32 right-20 w-16 h-16 bg-purple-400 rounded-full opacity-20 animate-pulse delay-500"></div>
        <div className="absolute bottom-20 left-32 w-12 h-12 bg-pink-400 rounded-full opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute bottom-32 right-32 w-24 h-24 bg-cyan-400 rounded-full opacity-20 animate-pulse delay-1500"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
              Revolutionary Technology Available Now
            </div>

            <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight">
              The Future of
              <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                {features[currentFeature]}
              </span>
              is Here
            </h1>

            <p className="text-xl text-gray-300 leading-relaxed">
              Experience unprecedented technological breakthroughs that are reshaping industries 
              and transforming the way we workliveand innovate. Join the revolution today.
            </p>

            {/* Feature highlights */}
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                  <span className="text-white text-sm font-bold">AI</span>
                </div>
                <span className="text-white font-medium">Artificial Intelligence</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                  <span className="text-white text-sm font-bold">QC</span>
                </div>
                <span className="text-white font-medium">Quantum Computing</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-r from-pink-500 to-red-500 rounded-lg flex items-center justify-center">
                  <span className="text-white text-sm font-bold">NI</span>
                </div>
                <span className="text-white font-medium">Neural Interfaces</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-r from-red-500 to-orange-500 rounded-lg flex items-center justify-center">
                  <span className="text-white text-sm font-bold">BC</span>
                </div>
                <span className="text-white font-medium">Blockchain</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/revolutionary-tech"
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold rounded-xl hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Explore Revolutionary Tech
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <Link
                href="/demo"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-bold rounded-xl hover:bg-white hover:text-purple-900 transition-all duration-300"
              >
                Watch Demo
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1.01M15 10h1.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </Link>
            </div>

            {/* Trust indicators */}
            <div className="flex items-center space-x-6 pt-8 border-t border-white/20">
              <div className="text-center">
                <div className="text-2xl font-bold text-white">10,000+</div>
                <div className="text-sm text-gray-300">Active Users</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">500+</div>
                <div className="text-sm text-gray-300">Enterprise Clients</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">99.9%</div>
                <div className="text-sm text-gray-300">Uptime</div>
              </div>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative">
            <div className="relative bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
              {/* Central holographic display */}
              <div className="relative bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-12 text-center">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-pulse"></div>
                
                <div className="relative z-10">
                  <div className="text-6xl mb-4">🚀</div>
                  <h3 className="text-2xl font-bold text-white mb-4">
                    Revolutionary Innovation
                  </h3>
                  <p className="text-blue-100 mb-6">
                    Experience the next generation of technology 'that', 's changing everything
                  </p>
                  
                  {/* Progress bars */}
                  <div className="space-y-3">
                    <div className="flex justify-between text-sm text-white">
                      <span>AI Processing</span>
                      <span>98%</span>
                    </div>
                    <div className="w-full bg-white/20 rounded-full h-2">
                      <div className="bg-gradient-to-r from-blue-400 to-purple-400 h-2 rounded-full w-[98%] animate-pulse"></div>
                    </div>
                    
                    <div className="flex justify-between text-sm text-white">
                      <span>Quantum Sync</span>
                      <span>85%</span>
                    </div>
                    <div className="w-full bg-white/20 rounded-full h-2">
                      <div className="bg-gradient-to-r from-purple-400 to-pink-400 h-2 rounded-full w-[85%] animate-pulse delay-500"></div>
                    </div>
                    
                    <div className="flex justify-between text-sm text-white">
                      <span>Neural Link</span>
                      <span>92%</span>
                    </div>
                    <div className="w-full bg-white/20 rounded-full h-2">
                      <div className="bg-gradient-to-r from-pink-400 to-red-400 h-2 rounded-full w-[92%] animate-pulse delay-1000"></div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-blue-400 rounded-full animate-bounce"></div>
              <div className="absolute -top-4 -right-4 w-6 h-6 bg-purple-400 rounded-full animate-bounce delay-300"></div>
              <div className="absolute -bottom-4 -left-4 w-4 h-4 bg-pink-400 rounded-full animate-bounce delay-600"></div>
              <div className="absolute -bottom-4 -right-4 w-5 h-5 bg-cyan-400 rounded-full animate-bounce delay-900"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black/20 to-transparent"></div>
    </div>
  );
};

export default RevolutionaryTechInnovationBanner2025;