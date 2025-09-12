import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { X, Zap, ArrowRight, Star, TrendingUp, Users, Award } from 'lucide-react';

export default function AI2025RevolutionaryBreakthroughBanner() {
  const [isVisible, setIsVisible] = useState(true);
  const [currentStat, setCurrentStat] = useState(0);

  const stats = [
    { value: '2000%', label: 'Average ROI', icon: TrendingUp },
    { value: '99.7%', label: 'Accuracy Rate', icon: Star },
    { value: '500+', label: 'Enterprise Clients', icon: Users },
    { value: '10x', label: 'Faster Processing', icon: Zap }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStat((prev) => (prev + 1) % stats.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="relative bg-gradient-to-r from-red-600 via-purple-600 to-blue-600 text-white overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-red-600 via-purple-600 to-blue-600 animate-pulse opacity-75"></div>
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-6">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
          {/* Left Content */}
          <div className="flex-1 text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start gap-2 mb-2">
              <Zap className="w-5 h-5 text-yellow-300 animate-pulse" />
              <span className="text-sm font-semibold bg-yellow-300 text-red-800 px-3 py-1 rounded-full">
                BREAKTHROUGH ANNOUNCEMENT
              </span>
            </div>
            
            <h2 className="text-2xl lg:text-3xl font-bold mb-2">
              AI 2025 Revolutionary Breakthrough
            </h2>
            
            <p className="text-lg opacity-90 mb-4">
              The most significant AI breakthrough of 2025 is here. 
              Achieve 2000%+ ROI with our revolutionary technology.
            </p>

            {/* Rotating Stats */}
            <div className="flex items-center justify-center lg:justify-start gap-4 mb-4">
              <div className="flex items-center gap-2 bg-white/20 rounded-lg px-4 py-2">
                {React.createElement(stats[currentStat].icon, { className: "w-5 h-5" })}
                <div>
                  <div className="text-2xl font-bold">{stats[currentStat].value}</div>
                  <div className="text-sm opacity-80">{stats[currentStat].label}</div>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-3">
              <Link 
                href="/blog/ai-2025-revolutionary-breakthrough-announcement"
                className="bg-white text-red-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-200 flex items-center gap-2"
              >
                Learn More
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link 
                href="/case-studies/ai-2025-revolutionary-breakthrough-success"
                className="border-2 border-white text-white px-6 py-2 rounded-lg font-semibold hover:bg-white hover:text-red-600 transition-all duration-200"
              >
                View Success Stories
              </Link>
            </div>
          </div>

          {/* Right Content - Success Highlights */}
          <div className="flex-shrink-0">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <h3 className="text-lg font-bold mb-4 text-center">Proven Results</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Award className="w-5 h-5 text-yellow-300" />
                  <div>
                    <div className="font-semibold">Fortune 500 Success</div>
                    <div className="text-sm opacity-80">1500% ROI in first year</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <TrendingUp className="w-5 h-5 text-green-300" />
                  <div>
                    <div className="font-semibold">Global Finance Leader</div>
                    <div className="text-sm opacity-80">2000% ROI, $200M+ saved</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Users className="w-5 h-5 text-blue-300" />
                  <div>
                    <div className="font-semibold">Healthcare Innovator</div>
                    <div className="text-sm opacity-80">2500% ROI, 99.7% accuracy</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Close Button */}
      <button
        onClick={() => setIsVisible(false)}
        className="absolute top-4 right-4 text-white/80 hover:text-white transition-colors"
        aria-label="Close banner"
      >
        <X className="w-5 h-5" />
      </button>

      {/* Animated Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-4 left-4 w-2 h-2 bg-yellow-300 rounded-full animate-ping"></div>
        <div className="absolute top-8 right-8 w-1 h-1 bg-white rounded-full animate-pulse"></div>
        <div className="absolute bottom-4 left-8 w-1.5 h-1.5 bg-yellow-300 rounded-full animate-ping delay-1000"></div>
        <div className="absolute bottom-8 right-4 w-1 h-1 bg-white rounded-full animate-pulse delay-500"></div>
      </div>
    </div>
  );
}