'use client';

import React, { useState, useEffect } from 'react';

export default function PerformanceComparison() {
  const [animatedValues, setAnimatedValues] = useState({
    traditional: 0,
    neural: 0,
    quantum: 0
  });

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('performance-comparison');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible) {
      const animate = () => {
        setAnimatedValues(prev => ({
          traditional: Math.min(prev.traditional + 2, 100),
          neural: Math.min(prev.neural + 5, 500000),
          quantum: Math.min(prev.quantum + 10, 1000000)
        }));
      };

      const interval = setInterval(animate, 50);
      return () => clearInterval(interval);
    }
  }, [isVisible]);

  const formatNumber = (num: number) => {
    if (num >= 1000000) return `${(num / 1000000).toFixed(0)}Mx`;
    if (num >= 1000) return `${(num / 1000).toFixed(0)}Kx`;
    return `${num}x`;
  };

  return (
    <section id="performance-comparison" className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-6">
            Performance Comparison
          </h2>
          <p className="text-xl text-gray-300">
            See the dramatic performance improvements achieved by our revolutionary AI technologies
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Traditional AI */}
          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl p-8 border border-gray-600">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-gray-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🤖</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-300 mb-2">Traditional AI</h3>
              <p className="text-gray-400 text-sm">Current Industry Standard</p>
            </div>

            <div className="space-y-4">
              <div className="bg-gray-700/50 rounded-lg p-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-300">Performance</span>
                  <span className="text-gray-400 font-bold">{animatedValues.traditional}x</span>
                </div>
                <div className="w-full bg-gray-600 rounded-full h-2">
                  <div 
                    className="bg-gray-400 h-2 rounded-full transition-all duration-1000"
                    style={{ width: `${Math.min(animatedValues.traditional, 100)}%` }}
                  ></div>
                </div>
              </div>

              <div className="bg-gray-700/50 rounded-lg p-4">
                <div className="text-gray-300 text-sm mb-1">Response Time</div>
                <div className="text-gray-400 font-bold">1.0s</div>
              </div>

              <div className="bg-gray-700/50 rounded-lg p-4">
                <div className="text-gray-300 text-sm mb-1">Autonomy Level</div>
                <div className="text-gray-400 font-bold">60%</div>
              </div>

              <div className="bg-gray-700/50 rounded-lg p-4">
                <div className="text-gray-300 text-sm mb-1">Typical ROI</div>
                <div className="text-gray-400 font-bold">$1M - $10M</div>
              </div>
            </div>
          </div>

          {/* Ultimate Neural Fusion */}
          <div className="bg-gradient-to-br from-purple-800/50 to-indigo-900/50 rounded-2xl p-8 border border-purple-500/30 relative">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <span className="bg-gradient-to-r from-purple-500 to-cyan-500 text-white px-4 py-2 rounded-full text-sm font-bold">
                🏆 RECOMMENDED
              </span>
            </div>

            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🧠</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Ultimate Neural Fusion</h3>
              <p className="text-purple-300 text-sm">Revolutionary Breakthrough</p>
            </div>

            <div className="space-y-4">
              <div className="bg-purple-700/30 rounded-lg p-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-purple-200">Performance</span>
                  <span className="text-purple-300 font-bold">{formatNumber(animatedValues.neural)}</span>
                </div>
                <div className="w-full bg-purple-800/50 rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-purple-400 to-cyan-400 h-2 rounded-full transition-all duration-1000"
                    style={{ width: `${Math.min((animatedValues.neural / 500000) * 100, 100)}%` }}
                  ></div>
                </div>
              </div>

              <div className="bg-purple-700/30 rounded-lg p-4">
                <div className="text-purple-200 text-sm mb-1">Response Time</div>
                <div className="text-purple-300 font-bold">0.0001s</div>
              </div>

              <div className="bg-purple-700/30 rounded-lg p-4">
                <div className="text-purple-200 text-sm mb-1">Autonomy Level</div>
                <div className="text-purple-300 font-bold">99.99%</div>
              </div>

              <div className="bg-purple-700/30 rounded-lg p-4">
                <div className="text-purple-200 text-sm mb-1">Typical ROI</div>
                <div className="text-purple-300 font-bold">$100B+</div>
              </div>
            </div>
          </div>

          {/* Quantum Consciousness AI */}
          <div className="bg-gradient-to-br from-cyan-800/50 to-blue-900/50 rounded-2xl p-8 border border-cyan-500/30">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚛️</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Quantum Consciousness AI</h3>
              <p className="text-cyan-300 text-sm">Next-Generation Technology</p>
            </div>

            <div className="space-y-4">
              <div className="bg-cyan-700/30 rounded-lg p-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-cyan-200">Performance</span>
                  <span className="text-cyan-300 font-bold">{formatNumber(animatedValues.quantum)}</span>
                </div>
                <div className="w-full bg-cyan-800/50 rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-cyan-400 to-blue-400 h-2 rounded-full transition-all duration-1000"
                    style={{ width: `${Math.min((animatedValues.quantum / 1000000) * 100, 100)}%` }}
                  ></div>
                </div>
              </div>

              <div className="bg-cyan-700/30 rounded-lg p-4">
                <div className="text-cyan-200 text-sm mb-1">Response Time</div>
                <div className="text-cyan-300 font-bold">0.00001s</div>
              </div>

              <div className="bg-cyan-700/30 rounded-lg p-4">
                <div className="text-cyan-200 text-sm mb-1">Autonomy Level</div>
                <div className="text-cyan-300 font-bold">100%</div>
              </div>

              <div className="bg-cyan-700/30 rounded-lg p-4">
                <div className="text-cyan-200 text-sm mb-1">Typical ROI</div>
                <div className="text-cyan-300 font-bold">$1T+</div>
              </div>
            </div>
          </div>
        </div>

        {/* Key Differentiators */}
        <div className="mt-16 bg-gradient-to-r from-purple-900/30 to-cyan-900/30 rounded-2xl p-8 border border-purple-500/20">
          <h3 className="text-3xl font-bold text-white text-center mb-8">
            Why Choose Our AI Technologies?
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-4xl mb-4">🚀</div>
              <h4 className="text-xl font-bold text-white mb-2">Unprecedented Speed</h4>
              <p className="text-gray-300 text-sm">
                Up to 1,000,000x faster than traditional AI systems
              </p>
            </div>

            <div className="text-center">
              <div className="text-4xl mb-4">🧠</div>
              <h4 className="text-xl font-bold text-white mb-2">Universal Intelligence</h4>
              <p className="text-gray-300 text-sm">
                Consciousness-level processing capabilities
              </p>
            </div>

            <div className="text-center">
              <div className="text-4xl mb-4">⚡</div>
              <h4 className="text-xl font-bold text-white mb-2">Real-time Processing</h4>
              <p className="text-gray-300 text-sm">
                Microsecond response times for critical decisions
              </p>
            </div>

            <div className="text-center">
              <div className="text-4xl mb-4">💰</div>
              <h4 className="text-xl font-bold text-white mb-2">Massive ROI</h4>
              <p className="text-gray-300 text-sm">
                Proven returns of $100B+ for enterprise clients
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}