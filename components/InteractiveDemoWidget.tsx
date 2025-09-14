'use client';

import React, { useState, useEffect } from 'react';

const InteractiveDemoWidget = () => {
  const [currentDemo, setCurrentDemo] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  const demos = [
    {
      title: 'AI-Powered Document Processing',
      description: 'Watch how our AI processes and extracts data from complex documents in real-time',
      features: ['OCR Recognition', 'Data Extraction', 'Smart Classification', 'Quality Validation'],
      duration: 15
    },
    {
      title: 'Predictive Analytics Dashboard',
      description: 'See how predictive analytics can forecast business trends and optimize operations',
      features: ['Trend Analysis', 'Risk Assessment', 'Performance Metrics', 'Automated Alerts'],
      duration: 20
    },
    {
      title: 'Automated Customer Service',
      description: 'Experience our AI chatbot handling customer inquiries with human-like responses',
      features: ['Natural Language Processing', 'Context Understanding', 'Multi-language Support', 'Escalation Management'],
      duration: 18
    },
    {
      title: 'Supply Chain Optimization',
      description: 'Discover how AI optimizes supply chain operations for maximum efficiency',
      features: ['Demand Forecasting', 'Inventory Optimization', 'Route Planning', 'Cost Reduction'],
      duration: 22
    }
  ];

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isPlaying) {
      interval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) {
            setCurrentDemo(prev => (prev + 1) % demos.length);
            return 0;
          }
          return prev + (100 / (demos[currentDemo].duration * 2));
        });
      }, 100);
    }
    return () => clearInterval(interval);
  }, [isPlaying, currentDemo, demos]);

  const startDemo = () => {
    setIsPlaying(true);
    setProgress(0);
  };

  const stopDemo = () => {
    setIsPlaying(false);
  };

  const nextDemo = () => {
    setCurrentDemo(prev => (prev + 1) % demos.length);
    setProgress(0);
  };

  const prevDemo = () => {
    setCurrentDemo(prev => (prev - 1 + demos.length) % demos.length);
    setProgress(0);
  };

  return (
    <div className="py-16 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-2 mb-4">
            <span className="text-sm font-semibold">🎮 INTERACTIVE DEMO</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Experience AI in Action
          </h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Try our interactive demos to see how AI can transform your business processes
          </p>
        </div>

        {/* Demo Container */}
        <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-8 mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Demo Content */}
            <div>
              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-2">
                  {demos[currentDemo].title}
                </h3>
                <p className="text-lg opacity-90 mb-4">
                  {demos[currentDemo].description}
                </p>
              </div>

              {/* Features List */}
              <div className="space-y-3 mb-6">
                {demos[currentDemo].features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              {/* Progress Bar */}
              <div className="mb-6">
                <div className="flex justify-between text-sm mb-2">
                  <span>Demo Progress</span>
                  <span>{Math.round(progress)}%</span>
                </div>
                <div className="w-full bg-white bg-opacity-20 rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-green-400 to-blue-400 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${progress}%` }}
                  ></div>
                </div>
              </div>

              {/* Controls */}
              <div className="flex space-x-4">
                <button
                  onClick={isPlaying ? stopDemo : startDemo}
                  className="flex items-center space-x-2 bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
                >
                  {isPlaying ? (
                    <>
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                      </svg>
                      <span>Pause</span>
                    </>
                  ) : (
                    <>
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                      </svg>
                      <span>Play Demo</span>
                    </>
                  )}
                </button>
                <button
                  onClick={prevDemo}
                  className="p-3 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-lg transition-all duration-300"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </button>
                <button
                  onClick={nextDemo}
                  className="p-3 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-lg transition-all duration-300"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Demo Visualization */}
            <div className="bg-white bg-opacity-5 rounded-xl p-6 border border-white border-opacity-20">
              <div className="text-center mb-4">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-4">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold mb-2">Live Demo</h4>
                <p className="text-sm opacity-75">
                  {isPlaying ? 'Running simulation...' : 'Click play to start'}
                </p>
              </div>

              {/* Animated Elements */}
              <div className="space-y-4">
                {demos[currentDemo].features.map((feature, index) => (
                  <div
                    key={index}
                    className={`flex items-center space-x-3 p-3 rounded-lg transition-all duration-500 ${
                      progress > (index + 1) * 25
                        ? 'bg-green-500 bg-opacity-20 border border-green-400'
                        : 'bg-white bg-opacity-10'
                    }`}
                  >
                    <div className={`w-3 h-3 rounded-full transition-all duration-500 ${
                      progress > (index + 1) * 25 ? 'bg-green-400' : 'bg-gray-400'
                    }`}></div>
                    <span className="text-sm">{feature}</span>
                    {progress > (index + 1) * 25 && (
                      <svg className="w-4 h-4 text-green-400 ml-auto" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Demo Navigation */}
        <div className="flex justify-center space-x-2 mb-8">
          {demos.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentDemo(index);
                setProgress(0);
                setIsPlaying(false);
              }}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentDemo
                  ? 'bg-white'
                  : 'bg-white bg-opacity-40 hover:bg-opacity-60'
              }`}
            />
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-8 border border-white border-opacity-20">
            <h3 className="text-2xl font-bold mb-4">
              Ready to See This in Your Business?
            </h3>
            <p className="text-lg opacity-90 mb-6">
              Schedule a personalized demo with our AI experts
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
                Schedule Demo
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-purple-600 px-8 py-3 rounded-lg font-semibold transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveDemoWidget;