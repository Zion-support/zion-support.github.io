import React, { useState, useEffect } from 'react';

const PerformanceMetrics = ({ className = '' }) => {
  const [metrics, setMetrics] = useState({
    loadTime: 0,
    renderTime: 0,
    memoryUsage: 0,
    isVisible: false
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setMetrics(prev => ({ ...prev, isVisible: true }));
          measurePerformance();
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('performance-metrics');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  const measurePerformance = () => {
    // Simulate performance metrics
    const loadTime = Math.random() * 200 + 100; // 100-300ms
    const renderTime = Math.random() * 50 + 20; // 20-70ms
    const memoryUsage = Math.random() * 20 + 10; // 10-30MB

    setMetrics({
      loadTime: Math.round(loadTime),
      renderTime: Math.round(renderTime),
      memoryUsage: Math.round(memoryUsage),
      isVisible: true
    });
  };

  const performanceData = [
    {
      label: 'Load Time',
      value: `${metrics.loadTime}ms`,
      description: 'Page load performance',
      color: 'text-green-400'
    },
    {
      label: 'Render Time',
      value: `${metrics.renderTime}ms`,
      description: 'Component render speed',
      color: 'text-blue-400'
    },
    {
      label: 'Memory Usage',
      value: `${metrics.memoryUsage}MB`,
      description: 'Optimized memory footprint',
      color: 'text-purple-400'
    }
  ];

  return (
    <section id="performance-metrics" className={`py-20 px-4 sm:px-6 lg:px-8 ${className}`}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Performance Excellence
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our applications are built with performance in mind, delivering lightning-fast experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {performanceData.map((metric, index) => (
            <div 
              key={index}
              className={`bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 text-center transition-all duration-500 ${
                metrics.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className={`text-3xl font-bold mb-2 ${metric.color}`}>
                {metric.value}
              </div>
              <div className="text-lg font-semibold mb-2">{metric.label}</div>
              <div className="text-sm text-gray-400">{metric.description}</div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center space-x-2 bg-green-500/20 text-green-400 px-4 py-2 rounded-full">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-sm font-medium">Performance Optimized</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PerformanceMetrics;