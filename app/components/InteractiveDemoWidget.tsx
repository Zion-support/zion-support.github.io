'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const InteractiveDemoWidget: React.FC = () => {
  const [currentDemo, setCurrentDemo] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [progress, setProgress] = useState(0);

  const demos = [
    {
      title: "AI Code Generation",
      description: "Watch AI generate production-ready code in real-time",
      icon: "💻",
      metrics: {
        linesGenerated: 0,
        timeSaved: "0h",
        accuracy: "0%"
      }
    },
    {
      title: "Predictive Analytics",
      description: "See how AI predicts business outcomes with 95% accuracy",
      icon: "📊",
      metrics: {
        predictions: 0,
        accuracy: "0%",
        insights: 0
      }
    },
    {
      title: "Automated Workflows",
      description: "Experience self-managing business processes",
      icon: "⚙️",
      metrics: {
        tasksCompleted: 0,
        efficiency: "0%",
        errors: 0
      }
    }
  ];

  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (isRunning) {
      interval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) {
            setIsRunning(false);
            return 0;
          }
          return prev + 2;
        });
      }, 100);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isRunning]);

  const startDemo = () => {
    setIsRunning(true);
    setProgress(0);
  };

  const nextDemo = () => {
    setCurrentDemo((prev) => (prev + 1) % demos.length);
    setIsRunning(false);
    setProgress(0);
  };

  const getCurrentMetrics = () => {
    const baseMetrics = demos[currentDemo].metrics;
    if (!isRunning) return baseMetrics;

    const multiplier = progress / 100;
    
    switch (currentDemo) {
      case 0: // AI Code Generation
        return {
          linesGenerated: Math.floor(150 * multiplier),
          timeSaved: `${Math.floor(8 * multiplier)}h`,
          accuracy: `${Math.floor(85 + 10 * multiplier)}%`
        };
      case 1: // Predictive Analytics
        return {
          predictions: Math.floor(50 * multiplier),
          accuracy: `${Math.floor(90 + 5 * multiplier)}%`,
          insights: Math.floor(25 * multiplier)
        };
      case 2: // Automated Workflows
        return {
          tasksCompleted: Math.floor(100 * multiplier),
          efficiency: `${Math.floor(70 + 25 * multiplier)}%`,
          errors: Math.max(0, Math.floor(5 - 5 * multiplier))
        };
      default:
        return baseMetrics;
    }
  };

  const currentMetrics = getCurrentMetrics();

  return (
    <section className="py-20 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-medium">🎮 INTERACTIVE DEMO</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Experience AI in Action
          </h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Try our interactive demos and see the power of AI transforming business operations in real-time.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Demo Controls */}
          <div className="space-y-8">
            <div className="bg-white bg-opacity-10 rounded-2xl p-8 backdrop-blur-sm">
              <div className="flex items-center mb-6">
                <div className="text-4xl mr-4">{demos[currentDemo].icon}</div>
                <div>
                  <h3 className="text-2xl font-bold">{demos[currentDemo].title}</h3>
                  <p className="text-gray-300">{demos[currentDemo].description}</p>
                </div>
              </div>

              <div className="space-y-4">
                <button
                  onClick={startDemo}
                  disabled={isRunning}
                  className="w-full bg-gradient-to-r from-green-500 to-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-green-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isRunning ? 'Running Demo...' : 'Start Demo'}
                </button>

                <button
                  onClick={nextDemo}
                  className="w-full bg-white bg-opacity-20 text-white px-6 py-3 rounded-lg font-semibold hover:bg-opacity-30 transition-all duration-300"
                >
                  Next Demo
                </button>
              </div>

              {isRunning && (
                <div className="mt-6">
                  <div className="flex justify-between text-sm mb-2">
                    <span>Progress</span>
                    <span>{progress}%</span>
                  </div>
                  <div className="w-full bg-white bg-opacity-20 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-green-400 to-blue-400 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${progress}%` }}
                    ></div>
                  </div>
                </div>
              )}
            </div>

            <div className="text-center">
              <Link
                href="/demo"
                className="inline-flex items-center bg-white text-purple-900 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Try Full Demo Suite
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Live Metrics */}
          <div className="space-y-6">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4">Live Performance Metrics</h3>
              <p className="text-gray-300">Real-time data from our AI systems</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {Object.entries(currentMetrics).map(([key, value], index) => (
                <div key={index} className="bg-white bg-opacity-10 rounded-xl p-6 text-center backdrop-blur-sm">
                  <div className="text-3xl font-bold text-green-400 mb-2">
                    {value}
                  </div>
                  <div className="text-sm text-gray-300 capitalize">
                    {key.replace(/([A-Z])/g, ' $1').trim()}
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-white bg-opacity-10 rounded-xl p-6 backdrop-blur-sm">
              <h4 className="text-lg font-semibold mb-4">System Status</h4>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>AI Processing</span>
                  <span className="text-green-400">● Active</span>
                </div>
                <div className="flex justify-between">
                  <span>Data Pipeline</span>
                  <span className="text-green-400">● Running</span>
                </div>
                <div className="flex justify-between">
                  <span>Accuracy Rate</span>
                  <span className="text-blue-400">95.8%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveDemoWidget;