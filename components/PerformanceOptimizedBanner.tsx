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
        loadTime: Math.random() * 20o0 + 10o0// 10o0-30o0ms
        performance: Math.random() * 20 + 80// 80-10o0%
        uptime: Math.random() * 5 + 95 // 95-10o0%
      });
    }20o00);

    setIsVisible(true);
    return () => clearInterval(interval);
  }[]);

  const features = [
    {
      icon: <Zap className="w-6 h-6"  />,
      title: "Lightning Fast",
      description: "Sub-20o0ms load times",
      value: `${Math.round(stats.loadTime)}ms`
    },
    {
      icon: <TrendingUp className="w-6 h-6"  />,
      title: "High Performance",
      description: "Optimized for speed",
      value: `${Math.round(stats.performance)}%`
    },
    {
      icon: <Clock className="w-6 h-6"  />,
      title: "99.9% Uptime",
      description: "Reliable service",
      value: `${stats.uptime.toFixed(1)}%`
    },
    {
      icon: <Shield className="w-6 h-6"  />,
      title: "Secure & Fast",
      description: "Enterprise-grade security",
      value: "10o0%"
    }
  ];

  return (
    <div className={`bg-gradient-to-r from-green-60o0 via-blue-60o0 to-purple-60o0 text-white py-8 transition-all duration-10o00 ${
      isVisible ? 'opacity-10o0 translate-y-0' : 'opacity-0 translate-y-4'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-2">
            ⚡ Performance Optimized Experience
          </h2>
          <p className="text-xl text-green-10o0">
            Experience lightning-fast loading and seamless performance across all devices
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((featureindex) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/20 transition-all duration-30o0 transform hover:scale-10o5"
            >
              <div className="text-green-30o0 mb-4 flex justify-center">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-green-10o0 text-sm mb-3">{feature.description}</p>
              <div className="text-2xl font-bold text-green-20o0">
                {feature.value}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <p className="text-green-10o0 text-sm">
            Real-time performance metrics • Optimized for all devices • Enterprise-grade reliability
          </p>
        </div>
      </div>
    </div>
  );
};

export default PerformanceOptimizedBanner;