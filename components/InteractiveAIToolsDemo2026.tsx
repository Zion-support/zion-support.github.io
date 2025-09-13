'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Play, 
  Pause, 
  RotateCcw, 
  Zap, 
  Brain, 
  Code, 
  Database, 
  Cloud,
  Shield,
  Target,
  TrendingUp,
  Users,
  CheckCircle,
  AlertCircle,
  Loader2,
  Sparkles,
  ArrowRight,
  ChevronDown,
  ChevronUp
} from 'lucide-react';

const InteractiveAIToolsDemo2026 = () => {
  const [activeDemo, setActiveDemo] = useState('automation');
  const [isRunning, setIsRunning] = useState(false);
  const [progress, setProgress] = useState(0);
  const [results, setResults] = useState([]);
  const [showResults, setShowResults] = useState(false);

  const demos = {
    automation: {
      title: 'AI Business Automation',
      description: 'Watch AI automatically handle complex business processes',
      icon: Zap,
      color: 'from-blue-500 to-cyan-500',
      steps: [
        'Analyzing business requirements...',
        'Generating automation workflows...',
        'Implementing AI decision trees...',
        'Testing and optimizing processes...',
        'Deploying to production environment...',
        'Monitoring performance metrics...'
      ],
      results: {
        efficiency: '+340%',
        timeSaved: '2,500 hours/month',
        costReduction: '$180K annually',
        accuracy: '99.7%'
      }
    },
    analytics: {
      title: 'Predictive Analytics',
      description: 'See how AI predicts future trends and outcomes',
      icon: TrendingUp,
      color: 'from-purple-500 to-pink-500',
      steps: [
        'Collecting historical data...',
        'Cleaning and preprocessing data...',
        'Training ML models...',
        'Validating predictions...',
        'Generating insights...',
        'Creating actionable reports...'
      ],
      results: {
        accuracy: '94.2%',
        predictions: '10,000+ daily',
        insights: '50+ actionable',
        confidence: 'High'
      }
    },
    codegen: {
      title: 'AI Code Generation',
      description: 'Experience AI writing production-ready code',
      icon: Code,
      color: 'from-green-500 to-teal-500',
      steps: [
        'Understanding requirements...',
        'Generating code structure...',
        'Implementing business logic...',
        'Adding error handling...',
        'Writing unit tests...',
        'Optimizing performance...'
      ],
      results: {
        linesOfCode: '2,500+',
        testCoverage: '95%',
        bugsFound: '0',
        performance: 'Optimized'
      }
    },
    security: {
      title: 'AI Security Analysis',
      description: 'Watch AI detect and prevent security threats',
      icon: Shield,
      color: 'from-red-500 to-orange-500',
      steps: [
        'Scanning system vulnerabilities...',
        'Analyzing threat patterns...',
        'Identifying potential risks...',
        'Generating security recommendations...',
        'Implementing protective measures...',
        'Monitoring ongoing threats...'
      ],
      results: {
        threatsDetected: '47',
        vulnerabilitiesFixed: '23',
        riskReduction: '89%',
        uptime: '99.9%'
      }
    }
  };

  const currentDemo = demos[activeDemo];

  useEffect(() => {
    let interval;
    if (isRunning && progress < 100) {
      interval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) {
            setIsRunning(false);
            setShowResults(true);
            return 100;
          }
          return prev + 2;
        });
      }, 100);
    }
    return () => clearInterval(interval);
  }, [isRunning, progress]);

  const startDemo = () => {
    setProgress(0);
    setResults([]);
    setShowResults(false);
    setIsRunning(true);
  };

  const resetDemo = () => {
    setIsRunning(false);
    setProgress(0);
    setResults([]);
    setShowResults(false);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Sparkles className="w-4 h-4" />
            Interactive AI Demo 2026
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Experience AI in Action
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Try our interactive demonstrations and see how AI transforms your business processes in real-time.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Demo Selection */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Choose a Demo</h3>
              <div className="space-y-3">
                {Object.entries(demos).map(([key, demo]) => {
                  const Icon = demo.icon;
                  const isActive = activeDemo === key;
                  return (
                    <motion.button
                      key={key}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setActiveDemo(key)}
                      className={`w-full p-4 rounded-xl text-left transition-all duration-300 ${
                        isActive
                          ? `bg-gradient-to-r ${demo.color} text-white shadow-lg`
                          : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <Icon className="w-6 h-6" />
                        <div>
                          <div className="font-medium">{demo.title}</div>
                          <div className={`text-sm ${isActive ? 'text-white/80' : 'text-gray-500'}`}>
                            {demo.description}
                          </div>
                        </div>
                      </div>
                    </motion.button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Demo Interface */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              {/* Demo Header */}
              <div className={`bg-gradient-to-r ${currentDemo.color} p-6 text-white`}>
                <div className="flex items-center gap-3 mb-2">
                  <currentDemo.icon className="w-8 h-8" />
                  <h3 className="text-2xl font-bold">{currentDemo.title}</h3>
                </div>
                <p className="text-white/90">{currentDemo.description}</p>
              </div>

              {/* Demo Content */}
              <div className="p-6">
                {/* Progress Section */}
                <div className="mb-8">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-lg font-semibold text-gray-900">Process Progress</h4>
                    <div className="flex items-center gap-2">
                      {isRunning ? (
                        <div className="flex items-center gap-2 text-blue-600">
                          <Loader2 className="w-4 h-4 animate-spin" />
                          <span className="text-sm">Running...</span>
                        </div>
                      ) : (
                        <span className="text-sm text-gray-500">Ready to start</span>
                      )}
                    </div>
                  </div>
                  
                  <div className="w-full bg-gray-200 rounded-full h-3 mb-4">
                    <motion.div
                      className={`h-3 bg-gradient-to-r ${currentDemo.color} rounded-full`}
                      style={{ width: `${progress}%` }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>
                  
                  <div className="text-right text-sm text-gray-600">{progress}% Complete</div>
                </div>

                {/* Steps Display */}
                <div className="mb-8">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Current Step</h4>
                  <div className="space-y-3">
                    {currentDemo.steps.map((step, index) => {
                      const stepProgress = (index + 1) * (100 / currentDemo.steps.length);
                      const isCompleted = progress >= stepProgress;
                      const isCurrent = progress >= (index * (100 / currentDemo.steps.length)) && !isCompleted;
                      
                      return (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ 
                            opacity: isCompleted || isCurrent ? 1 : 0.5,
                            x: 0
                          }}
                          className={`flex items-center gap-3 p-3 rounded-lg transition-all duration-300 ${
                            isCompleted 
                              ? 'bg-green-50 border border-green-200' 
                              : isCurrent 
                                ? 'bg-blue-50 border border-blue-200' 
                                : 'bg-gray-50'
                          }`}
                        >
                          <div className={`w-6 h-6 rounded-full flex items-center justify-center ${
                            isCompleted 
                              ? 'bg-green-500 text-white' 
                              : isCurrent 
                                ? 'bg-blue-500 text-white' 
                                : 'bg-gray-300'
                          }`}>
                            {isCompleted ? (
                              <CheckCircle className="w-4 h-4" />
                            ) : isCurrent ? (
                              <Loader2 className="w-4 h-4 animate-spin" />
                            ) : (
                              <span className="text-xs font-bold">{index + 1}</span>
                            )}
                          </div>
                          <span className={`${
                            isCompleted ? 'text-green-800' : isCurrent ? 'text-blue-800' : 'text-gray-600'
                          }`}>
                            {step}
                          </span>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>

                {/* Control Buttons */}
                <div className="flex gap-4 mb-8">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={startDemo}
                    disabled={isRunning}
                    className={`flex-1 py-3 px-6 rounded-lg font-medium flex items-center justify-center gap-2 ${
                      isRunning
                        ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                        : `bg-gradient-to-r ${currentDemo.color} text-white hover:shadow-lg`
                    } transition-all duration-300`}
                  >
                    {isRunning ? (
                      <>
                        <Pause className="w-5 h-5" />
                        Running...
                      </>
                    ) : (
                      <>
                        <Play className="w-5 h-5" />
                        Start Demo
                      </>
                    )}
                  </motion.button>
                  
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={resetDemo}
                    className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-all duration-300"
                  >
                    <RotateCcw className="w-5 h-5" />
                  </motion.button>
                </div>

                {/* Results Display */}
                <AnimatePresence>
                  {showResults && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-6 border border-green-200"
                    >
                      <div className="flex items-center gap-2 mb-4">
                        <CheckCircle className="w-6 h-6 text-green-600" />
                        <h4 className="text-lg font-semibold text-gray-900">Demo Results</h4>
                      </div>
                      
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {Object.entries(currentDemo.results).map(([key, value]) => (
                          <div key={key} className="text-center">
                            <div className="text-2xl font-bold text-gray-900">{value}</div>
                            <div className="text-sm text-gray-600 capitalize">
                              {key.replace(/([A-Z])/g, ' $1').trim()}
                            </div>
                          </div>
                        ))}
                      </div>
                      
                      <div className="mt-4 text-center">
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg font-medium hover:shadow-lg transition-all duration-300"
                        >
                          Learn More About This Solution
                          <ArrowRight className="w-4 h-4 ml-2 inline" />
                        </motion.button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-3xl font-bold mb-4">
              Ready to Implement These Solutions?
            </h3>
            <p className="text-xl mb-6 opacity-90">
              Get started with our AI solutions and transform your business today
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors">
                Start Free Trial
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-blue-600 transition-colors">
                Schedule Demo
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default InteractiveAIToolsDemo2026;