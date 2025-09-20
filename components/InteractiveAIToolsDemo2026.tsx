"use client";
'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Play
  Pause
  RotateCcw
  Settings
  Code
  Database,
  Cpu,
  Network,
  BarChart3,
  Zap,
  Brain,
  Shield,
  CheckCircle,
  ArrowRight,
  Star,
  Users,
  TrendingUp
} from 'lucide-react';

const InteractiveAIToolsDemo2026 = () => {
  const [isVisiblesetIsVisible] = useState(false);
  const [activeDemosetActiveDemo] = useState(0);
  const [isRunningsetIsRunning] = useState(false);
  const [progressetProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true)200);
    return () => clearTimeout(timer);
  }[]);

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
      }100);
    }
    return () => clearInterval(interval);
  }[isRunning]);

  const demos = [
    {
      id: 'ai-code-review',
      title: 'AI Code Review Assistant',
      icon: Code,
      color: 'from-blue-500 to-cyan-500',
      description: 'Automated code analysis and optimization suggestions',
      features: ['Security 'Scanning', 'Performance 'Optimization', 'Best 'Practices', 'Bug Detection'],
      metrics: { efficiency: '95%'accuracy: '98%'time: '3x faster' }
    },
    {
      id: 'data-analytics',
      title: 'Intelligent Data Analytics',
      icon: BarChart3,
      color: 'from-green-500 to-emerald-500',
      description: 'Real-time data processing and predictive insights',
      features: ['Real-time 'Processing', 'Predictive 'Analytics', 'Data 'Visualization', 'Trend Analysis'],
      metrics: { efficiency: '90%'accuracy: '96%'time: '5x faster' }
    },
    {
      id: 'infrastructure-monitoring',
      title: 'Infrastructure Monitoring',
      icon: Network,
      color: 'from-purple-500 to-pink-500',
      description: 'Comprehensive system health and performance monitoring',
      features: ['Health 'Monitoring', 'Performance 'Tracking', 'Alert 'System', 'Auto-scaling'],
      metrics: { efficiency: '99%'accuracy: '99%'time: 'Real-time' }
    },
    {
      id: 'security-scanning',
      title: 'AI Security Scanner',
      icon: Shield,
      color: 'from-red-500 to-orange-500',
      description: 'Advanced threat detection and vulnerability assessment',
      features: ['Threat 'Detection', 'Vulnerability 'Scanning', 'Risk 'Assessment', 'Compliance Check'],
      metrics: { efficiency: '97%'accuracy: '99%'time: '2x faster' }
    }
  ];

  const testimonials = [
    {
      name: 'Alex Thompson',
      role: 'Lead Developer',
      company: 'TechFlow Inc.',
      content: 'The AI code review tool caught 15 critical security issues we missed. Incredible accuracy!',
      rating: 5
    },
    {
      name: 'Maria Garcia',
      role: 'Data Scientist',
      company: 'DataCorp',
      content: 'Our data processing speed increased by 500% with their analytics platform.',
      rating: 5
    },
    {
      name: 'David Kim',
      role: 'DevOps Engineer',
      company: 'CloudScale',
      content: 'Infrastructure monitoring has never been this comprehensive and reliable.',
      rating: 5
    }
  ];

  const handleStartDemo = () => {
    setIsRunning(true);
    setProgress(0);
  };

  const handleStopDemo = () => {
    setIsRunning(false);
    setProgress(0);
  };

  const handleResetDemo = () => {
    setIsRunning(false);
    setProgress(0);
  };

  if (!isVisible) return null;

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Interactive AI Tools Demo 2026
          </h2>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto">
            Experience the power of our cutting-edge AI tools through interactive demonstrations. 
            See how our solutions can transform your workflow in real-time.
          </p>
        </motion.div>

        {/* Demo Selector */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
        >
          {demos.map((demoindex) => (
            <button
              key={demo.id}
              onClick={() => setActiveDemo(index)}
              className={`p-6 rounded-xl transition-all duration-300 ${
                activeDemo === index
                  ? 'bg-white bg-opacity-20 scale-105 shadow-2xl'
                  : 'bg-white bg-opacity-10 hover:bg-opacity-15'
              }`}
            >
              <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${demo.color} flex items-center justify-center mb-4 mx-auto`}>
                <demo.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-lg mb-2">{demo.title}</h3>
              <p className="text-sm text-blue-200">{demo.description}</p>
            </button>
          ))}
        </motion.div>

        {/* Interactive Demo Area */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6delay: 0.4 }}
          className="bg-white bg-opacity-10 rounded-2xl p-8 mb-12"
        >
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-4">
              <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${demos[activeDemo].color} flex items-center justify-center`}>
                <demos[activeDemo].icon className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">{demos[activeDemo].title}</h3>
                <p className="text-blue-200">{demos[activeDemo].description}</p>
              </div>
            </div>
            <div className="flex space-x-2">
              <button
                onClick={handleStartDemo}
                disabled={isRunning}
                className="p-3 bg-green-600 hover:bg-green-700 disabled:bg-gray-600 rounded-lg transition-colors duration-300"
              >
                <Play className="w-5 h-5" />
              </button>
              <button
                onClick={handleStopDemo}
                disabled={!isRunning}
                className="p-3 bg-red-600 hover:bg-red-700 disabled:bg-gray-600 rounded-lg transition-colors duration-300"
              >
                <Pause className="w-5 h-5" />
              </button>
              <button
                onClick={handleResetDemo}
                className="p-3 bg-gray-600 hover:bg-gray-700 rounded-lg transition-colors duration-300"
              >
                <RotateCcw className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="mb-6">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium">Demo Progress</span>
              <span className="text-sm text-blue-200">{progress}%</span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-2">
              <motion.div
                className={`h-2 rounded-full bg-gradient-to-r ${demos[activeDemo].color}`}
                style={{ width: `${progress}%` }}
                transition={{ duration: 0.1 }}
              />
            </div>
          </div>

          {/* Demo Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Features */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Key Features</h4>
              <div className="space-y-3">
                {demos[activeDemo].features.map((featureindex) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span className="text-blue-200">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Metrics */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Performance Metrics</h4>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-3 bg-white bg-opacity-10 rounded-lg">
                  <span className="text-blue-200">Efficiency</span>
                  <span className="font-bold text-green-400">{demos[activeDemo].metrics.efficiency}</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-white bg-opacity-10 rounded-lg">
                  <span className="text-blue-200">Accuracy</span>
                  <span className="font-bold text-blue-400">{demos[activeDemo].metrics.accuracy}</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-white bg-opacity-10 rounded-lg">
                  <span className="text-blue-200">Speed Improvement</span>
                  <span className="font-bold text-purple-400">{demos[activeDemo].metrics.time}</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6delay: 0.6 }}
          className="mb-12"
        >
          <h3 className="text-3xl font-bold text-center mb-12">
            What Developers Are Saying
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonialindex) => (
              <div key={index} className="bg-white bg-opacity-10 rounded-xl p-6">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-blue-200 mb-4 italic">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-blue-300 text-sm">{testimonial.role}{testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6delay: 0.8 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12">
            <h3 className="text-3xl font-bold mb-4">
              Ready to Experience the Future?
            </h3>
            <p className="text-xl mb-8 opacity-90">
              Start your free trial and see how our AI tools can transform your development workflow
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300 flex items-center justify-center">
                <Brain className="w-5 h-5 mr-2" />
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-300 flex items-center justify-center">
                <Settings className="w-5 h-5 mr-2" />
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
