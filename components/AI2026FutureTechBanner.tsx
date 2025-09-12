import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const AI2026FutureTechBanner: React.FC = () => {
  const [currentFeature, setCurrentFeature] = useState(0);
  
  const futureFeatures = [
    {
      title: "🧠 Neural Interface Revolution",
      description: "Direct brain-computer interfaces achieving 95% accuracy",
      impact: "15,000% ROI"
    },
    {
      title: "⚛️ Quantum-Neural Fusion",
      description: "Quantum-enhanced neural networks with exponential speed",
      impact: "25,000% ROI"
    },
    {
      title: "🌌 Consciousness AI Systems",
      description: "Self-aware AI systems with genuine understanding",
      impact: "∞ ROI"
    },
    {
      title: "🚀 Dimensional Computing",
      description: "Multi-dimensional processing beyond current physics",
      impact: "50,000% ROI"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFeature((prev: number) => (prev + 1) % futureFeatures.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-purple-900 via-indigo-900 to-blue-900 text-white">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/50 via-indigo-900/50 to-blue-900/50">
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div>
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-sm font-bold mb-6 animate-pulse">
              <span className="mr-2">🔮</span>
              AI 2026 FUTURE TECH PREVIEW
            </div>
            
            <h1 className="text-5xl font-bold mb-6 leading-tight">
              The Future of AI is 
              <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent"> Here</span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Experience breakthrough technologies that will revolutionize how we interact with artificial intelligence. 
              From neural interfaces to quantum consciousness, the future starts now.
            </p>

            {/* Rotating Features */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-8 border border-white/20">
              <div className="min-h-[120px] flex flex-col justify-center">
                <h3 className="text-2xl font-bold mb-2 text-yellow-400">
                  {futureFeatures[currentFeature].title}
                </h3>
                <p className="text-gray-300 mb-4">
                  {futureFeatures[currentFeature].description}
                </p>
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-green-400 to-emerald-500 text-black text-sm font-bold">
                  💰 {futureFeatures[currentFeature].impact}
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/ai-2026-future-tech-showcase"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold rounded-lg hover:from-yellow-500 hover:to-orange-600 transition-all duration-200 transform hover:scale-105 shadow-lg"
              >
                🔮 Explore Future Tech
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
              <Link
                to="/ai-2026-readiness-assessment"
                className="inline-flex items-center px-8 py-4 bg-white/20 backdrop-blur-sm text-white font-semibold rounded-lg hover:bg-white/30 transition-all duration-200 border border-white/30"
              >
                🎯 Future Readiness Test
              </Link>
            </div>
          </div>

          {/* Right Column - Interactive Elements */}
          <div className="relative">
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
              {/* Neural Network Visualization */}
              <div className="relative h-64 mb-6">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-400/20 to-blue-400/20 rounded-2xl flex items-center justify-center">
                  <div className="grid grid-cols-4 gap-4">
                    {[...Array(16)].map((_, i) => (
                      <div
                        key={i}
                        className="w-6 h-6 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full animate-pulse"
                        style={{
                          animationDelay: `${i * 0.1}s`,
                          animationDuration: '2s'
                        }}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-400 mb-1">99.7%</div>
                  <div className="text-sm text-gray-300">Accuracy Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-400 mb-1">∞</div>
                  <div className="text-sm text-gray-300">ROI Potential</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400 mb-1">2026</div>
                  <div className="text-sm text-gray-300">Launch Year</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400 mb-1">95%</div>
                  <div className="text-sm text-gray-300">Success Rate</div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full animate-bounce"></div>
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full animate-pulse"></div>
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-yellow-400 mb-2">15,000%</div>
            <div className="text-gray-300">Average ROI</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-green-400 mb-2">99.8%</div>
            <div className="text-gray-300">Success Rate</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-400 mb-2">50+</div>
            <div className="text-gray-300">Technologies</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-purple-400 mb-2">∞</div>
            <div className="text-gray-300">Possibilities</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AI2026FutureTechBanner;