"use client";
'use client';

import React{ useStateuseEffect } from 'react';
import Link from 'next/link';

const RevolutionaryAutonomousOperationsBanner: React.FC = () => {
  const [isVisiblesetIsVisible] = useState(true);
  const [animationPhasetAnimationPhase] = useState(0);

  // Check if banner was dismissed
  useEffect(() => {
    const dismissed = localStorage.getItem('revolutionary-autonomous-ops-banner-dismissed');
    if (dismissed === 'true') {
      setIsVisible(false);
    }
  }[]);

  // Animation phases
  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationPhase((prev) => (prev + 1) % 3);
    }3000);

    return () => clearInterval(interval);
  }[]);

  const handleDismiss = () => {
    setIsVisible(false);
    localStorage.setItem('revolutionary-autonomous-ops-banner-dismissed'true');
  };

  if (!isVisible) return null;

  const getAnimationContent = () => {
    switch (animationPhase) {
      case 0:
        return {
          title: "Revolutionary Autonomous Operations",
          subtitle: "890% ROI • $12.8B Savings • 156% Efficiency",
          description: "Fortune 100 companies are achieving unprecedented results with autonomous business operations.",
          cta: "Explore Success Stories",
          link: "/case-studies/fortune-100-autonomous-operations-890-roi-success",
          highlight: "890%"
        };
      case 1:
        return {
          title: "$5.2T Market Transformation",
          subtitle: "750% ROI • $8.5M Savings • 95% Efficiency",
          description: "Join the autonomous operations revolution reshaping enterprise landscapes worldwide.",
          cta: "Read Market Analysis",
          link: "/blog/ai-2025-autonomous-business-operations-revolution",
          highlight: "$5.2T"
        };
      case 2:
        return {
          title: "Complete Implementation Guide",
          subtitle: "98% Success Rate • 1.4 Month Payback • 35 Min Read",
          description: "Get the proven roadmap for implementing autonomous operations in your organization.",
          cta: "Get Implementation Guide",
          link: "/resources/autonomous-operations-implementation-guide-2025",
          highlight: "98%"
        };
      default:
        return {
          title: "Revolutionary Autonomous Operations",
          subtitle: "890% ROI • $12.8B Savings • 156% Efficiency",
          description: "Fortune 100 companies are achieving unprecedented results with autonomous business operations.",
          cta: "Explore Success Stories",
          link: "/case-studies/fortune-100-autonomous-operations-890-roi-success",
          highlight: "890%"
        };
    }
  };

  const content = getAnimationContent();

  return (
    <div className="relative bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 text-white overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-indigo-800/30 to-purple-800/30"></div>
        <div className="absolute top-20 left-20 w-40 h-40 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-gradient-to-r from-blue-400/20 to-indigo-400/20 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-gradient-to-r from-pink-400/20 to-purple-400/20 rounded-full animate-pulse delay-2000"></div>
        <div className="absolute top-1/4 right-1/4 w-20 h-20 bg-gradient-to-r from-indigo-400/20 to-blue-400/20 rounded-full animate-pulse delay-500"></div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white/40 rounded-full animate-bounce delay-100"></div>
        <div className="absolute top-3/4 left-1/3 w-1 h-1 bg-white/60 rounded-full animate-bounce delay-300"></div>
        <div className="absolute top-1/2 right-1/4 w-1.5 h-1.5 bg-white/50 rounded-full animate-bounce delay-500"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-white/70 rounded-full animate-bounce delay-700"></div>
      </div>

      <div className="relative z-10 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between">
            {/* Main content */}
            <div className="flex-1">
              <div className="flex items-center space-x-4 mb-6">
                <div className="bg-white/20 backdrop-blur-sm rounded-full px-6 py-3">
                  <span className="text-sm font-bold">🌟 REVOLUTIONARY AUTONOMOUS OPERATIONS</span>
                </div>
                <div className="bg-gradient-to-r from-yellow-400 to-orange-400 text-black px-4 py-2 rounded-full">
                  <span className="text-sm font-bold">NEW CONTENT</span>
                </div>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
                <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                  {content.title}
                </span>
              </h2>
              
              <p className="text-xl sm:text-2xl text-purple-200 mb-6 font-semibold">
                {content.subtitle}
              </p>

              <div className="flex flex-wrap items-center gap-4 mb-8">
                <div className="bg-green-500/30 backdrop-blur-sm rounded-xl px-6 py-3 border border-green-400/30">
                  <span className="text-green-200 font-bold text-lg">
                    🎯 {content.highlight} Success Rate
                  </span>
                </div>
                <div className="bg-blue-500/30 backdrop-blur-sm rounded-xl px-6 py-3 border border-blue-400/30">
                  <span className="text-blue-200 font-bold text-lg">
                    ⚡ Instant Results
                  </span>
                </div>
                <div className="bg-purple-500/30 backdrop-blur-sm rounded-xl px-6 py-3 border border-purple-400/30">
                  <span className="text-purple-200 font-bold text-lg">
                    🚀 Proven Framework
                  </span>
                </div>
              </div>

              <p className="text-gray-200 text-lg sm:text-xl mb-8 max-w-4xl leading-relaxed">
                {content.description}
              </p>

              <div className="flex flex-col sm:flex-row gap-6">
                <Link
                  href={content.link}
                  className="inline-flex items-center justify-center px-10 py-5 bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold text-lg rounded-xl hover:from-yellow-500 hover:to-orange-600 transition-all duration-300 transform hover:scale-105 shadow-2xl"
                >
                  <span>{content.cta}</span>
                  <svg className="ml-3 w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
                
                <Link
                  href="/services/autonomous-operations"
                  className="inline-flex items-center justify-center px-10 py-5 border-2 border-white text-white font-bold text-lg rounded-xl hover:bg-white hover:text-purple-900 transition-all duration-300 backdrop-blur-sm"
                >
                  <span>Get Expert Consultation</span>
                  <svg className="ml-3 w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Visual element */}
            <div className="hidden lg:flex items-center justify-center ml-12">
              <div className="relative">
                <div className="w-64 h-64 bg-gradient-to-br from-purple-400 via-pink-400 to-orange-400 rounded-full flex items-center justify-center shadow-2xl animate-pulse">
                  <div className="text-center">
                    <div className="text-5xl font-bold text-white mb-2">890%</div>
                    <div className="text-lg text-white/90">ROI</div>
                    <div className="text-sm text-white/80 mt-2">Fortune 100 Success</div>
                  </div>
                </div>
                
                {/* Orbiting elements */}
                <div className="absolute -top-8 -right-8 w-20 h-20 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg animate-spin" style={{ animationDuration: '8s' }}>
                  <span className="text-3xl">🚀</span>
                </div>
                <div className="absolute -bottom-8 -left-8 w-16 h-16 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center shadow-lg animate-spin" style={{ animationDuration: '6s'animationDirection: 'reverse' }}>
                  <span className="text-2xl">⚡</span>
                </div>
                <div className="absolute top-1/2 -right-12 w-12 h-12 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full flex items-center justify-center shadow-lg animate-bounce">
                  <span className="text-xl">💎</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Dismiss button */}
      <button
        onClick={handleDismiss}
        className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20"
        aria-label="Dismiss banner"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      {/* Progress indicator */}
      <div className="absolute bottom-0 left-0 w-full h-2 bg-white/20">
        <div 
          className="h-full bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 transition-all duration-3000 ease-linear"
          style={{ width: `${((animationPhase + 1) / 3) * 100}%` }}
        />
      </div>
    </div>
  );
};

export default RevolutionaryAutonomousOperationsBanner;