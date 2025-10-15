import React from 'react';
import { Helmet } from 'react-helmet-async';

const PerformanceOptimizationPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Application Performance Optimization - Zion Tech Group</title>
        <meta name="description" content="Comprehensive performance optimization services including code optimization, infrastructure tuning, and monitoring solutions." />
        <meta name="keywords" content="performance optimization, application optimization, code optimization, infrastructure tuning" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
        <section className="relative py-20 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-8">
              <div className="text-8xl mb-8">⚡</div>
              <h1 className="text-5xl md:text-6xl font-bold">
                Performance <span className="gradient-text">Optimization</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Comprehensive performance optimization services including code optimization, infrastructure tuning, and monitoring solutions.
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default PerformanceOptimizationPage;