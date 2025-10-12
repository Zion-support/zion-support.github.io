'use client';

import React, {useEffect} from 'react';
import {ArrowRight, Zap} from 'lucide-react';

const PerformanceOptimizer: React.FC = () => {const features = [{
      title: "Real-time Monitoring",
      description: "Monitor your application performance in real-time with advanced analytics"},
    {title: "Automatic Optimization",
      description: "AI-powered optimization that automatically improves your app's performance"},
    {title: "Performance Analytics",
      description: "Detailed insights and reports on your application's performance metrics"},
    {title: "Resource Management",
      description: "Efficiently manage and optimize your application's resource usage"}];

  useEffect(() => {// Performance optimization logic
    const cleanupScroll = () => {
      // Cleanup scroll listeners};

    return () => {cleanupScroll();};
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Performance Optimizer
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Optimize your application's performance with our advanced optimization tools and techniques.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5"   />
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm: px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover the powerful features that make our performance optimizer solutions stand out.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-gray-800/50 backdrop-blur-xl rounded-xl p-6 border border-gray-700 hover:border-purple-500 transition-all duration-300">
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg mb-4">
                  <Zap className="h-6 w-6 text-white"   />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
  ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default PerformanceOptimizer;