'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

interface PerformanceMetrics {
  loadTime: number;
  uptime: number;
  efficiency: number;
}

const PerformanceOptimization: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    loadTime: 0.8,
    uptime: 99.9,
    efficiency: 95.2
  });

  useEffect(() => {
    // Simulate real-time metrics updates
    const interval = setInterval(() => {
      setMetrics(prev => ({
        loadTime: Math.max(0.5, prev.loadTime + (Math.random() - 0.5) * 0.1),
        uptime: Math.min(100, Math.max(99.5, prev.uptime + (Math.random() - 0.5) * 0.1)),
        efficiency: Math.min(100, Math.max(90, prev.efficiency + (Math.random() - 0.5) * 0.5))
      }));
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.05"%3E%3Ccircle cx="30" cy="30" r="1.5"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-gradient-to-r from-purple-500 to-pink-500 rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-medium">⚡ LIVE PERFORMANCE METRICS</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
            Real-Time AI Performance
          </h2>
          <p className="text-xl text-purple-100 max-w-3xl mx-auto mb-8">
            Monitor our AI systems in real-time. See the performance metrics that power 
            our revolutionary AI solutions and ensure optimal user experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 border border-white border-opacity-20">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">⚡</span>
              </div>
              <h3 className="text-2xl font-bold mb-2">Load Time</h3>
              <div className="text-4xl font-bold text-green-400 mb-2">
                {metrics.loadTime.toFixed(1)}s
              </div>
              <p className="text-purple-200">Average response time</p>
              <div className="w-full bg-gray-700 rounded-full h-2 mt-4">
                <div 
                  className="bg-gradient-to-r from-green-400 to-emerald-500 h-2 rounded-full transition-all duration-1000"
                  style={{ width: `${Math.max(0, 100 - metrics.loadTime * 50)}%` }}
                ></div>
              </div>
            </div>
          </div>

          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 border border-white border-opacity-20">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🛡️</span>
              </div>
              <h3 className="text-2xl font-bold mb-2">Uptime</h3>
              <div className="text-4xl font-bold text-blue-400 mb-2">
                {metrics.uptime.toFixed(1)}%
              </div>
              <p className="text-purple-200">System availability</p>
              <div className="w-full bg-gray-700 rounded-full h-2 mt-4">
                <div 
                  className="bg-gradient-to-r from-blue-400 to-cyan-500 h-2 rounded-full transition-all duration-1000"
                  style={{ width: `${metrics.uptime}%` }}
                ></div>
              </div>
            </div>
          </div>

          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 border border-white border-opacity-20">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">📊</span>
              </div>
              <h3 className="text-2xl font-bold mb-2">Efficiency</h3>
              <div className="text-4xl font-bold text-purple-400 mb-2">
                {metrics.efficiency.toFixed(1)}%
              </div>
              <p className="text-purple-200">AI processing efficiency</p>
              <div className="w-full bg-gray-700 rounded-full h-2 mt-4">
                <div 
                  className="bg-gradient-to-r from-purple-400 to-pink-500 h-2 rounded-full transition-all duration-1000"
                  style={{ width: `${metrics.efficiency}%` }}
                ></div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <Link
            href="/resources/ai-implementation-master-guide-2026"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            <span>🚀</span>
            Optimize Your AI Performance
            <span>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PerformanceOptimization;