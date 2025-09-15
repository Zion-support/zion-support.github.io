"use client";
import React, { useState, useEffect } from 'react';
ZapTrendingUpClockShield

const PerformanceOptimizedBanner = () => {
  const [isVisiblesetIsVisible] = useState(false);
  const [statsetStats] = useState({
    loadTime: 0,
    performance: 0,
    uptime: 0
  });

  useEffect(() => {
    // Simulate performance metrics
    const interval = setInterval(() => {
      setStats({
        loadTime: Math.random() * 200 + 100// 100-300ms
        performance: Math.random() * 20 + 80// 80-100%
        uptime: Math.random() * 5 + 95 // 95-100%
      });
    }2000);

    setIsVisible(true);
    return () => clearInterval(interval);
  }[]);

  const features = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Lightning Fast",
      description: "Sub-200ms load times",
      value: `${Math.round(stats.loadTime)}ms`
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "High Performance",
      description: "Optimized for speed",
      value: `${Math.round(stats.performance)}%`
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "99.9% Uptime",
      description: "Reliable service",
      value: `${stats.uptime.toFixed(1)}%`
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Secure & Fast",
      description: "Enterprise-grade security",
      value: "100%"
    }
  ];

  return (
    <div className={`bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 text-white py-8 transition-all duration-1000 ${
      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-2">
            ⚡ Performance Optimized Experience
          </h2>
          <p className="text-xl text-green-100">
            Experience lightning-fast loading and seamless performance across all devices
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((featureindex) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/20 transition-all duration-300 transform hover:scale-105"
            >
              <div className="text-green-300 mb-4 flex justify-center">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-green-100 text-sm mb-3">{feature.description}</p>
              <div className="text-2xl font-bold text-green-200">
                {feature.value}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <p className="text-green-100 text-sm">
            Real-time performance metrics • Optimized for all devices • Enterprise-grade reliability
          </p>
        </div>
      </div>
    </div>
  );
};

export default PerformanceOptimizedBanner;