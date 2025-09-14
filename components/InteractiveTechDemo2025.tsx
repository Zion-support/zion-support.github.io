'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  Star, 
  TrendingUp, 
  Users, 
  Zap, 
  Shield, 
  Brain,
  Globe,
  Target,
  Award,
  CheckCircle,
  PlayCircle,
  BookOpen,
  Lightbulb,
  Code,
  Cpu,
  Database,
  Network,
  Monitor,
  Smartphone,
  Cloud,
  Lock,
  Settings,
  BarChart3,
  PieChart,
  Activity
} from 'lucide-react';

const InteractiveTechDemo2025 = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeDemo, setActiveDemo] = useState('ai-dashboard');
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const demos = {
    'ai-dashboard': {
      title: 'AI-Powered Analytics Dashboard',
      description: 'Experience real-time data visualization and AI-driven insights',
      icon: BarChart3,
      color: 'from-purple-600 to-blue-600',
      features: [
        { name: 'Real-time Analytics', status: 'active', value: '99.8%' },
        { name: 'AI Predictions', status: 'processing', value: '85%' },
        { name: 'Data Processing', status: 'active', value: '2.3M records' },
        { name: 'System Health', status: 'optimal', value: '100%' }
      ],
      metrics: [
        { label: 'Revenue Growth', value: '+45%', trend: 'up' },
        { label: 'User Engagement', value: '+78%', trend: 'up' },
        { label: 'Conversion Rate', value: '+32%', trend: 'up' },
        { label: 'Error Rate', value: '-89%', trend: 'down' }
      ]
    },
    'automation-workflow': {
      title: 'Intelligent Automation Workflow',
      description: 'Watch AI automate complex business processes in real-time',
      icon: Zap,
      color: 'from-green-600 to-teal-600',
      features: [
        { name: 'Process Automation', status: 'active', value: '95%' },
        { name: 'Error Detection', status: 'monitoring', value: '0 errors' },
        { name: 'Time Saved', status: 'active', value: '2,400 hrs' },
        { name: 'Efficiency Gain', status: 'optimal', value: '+300%' }
      ],
      metrics: [
        { label: 'Tasks Automated', value: '1,250', trend: 'up' },
        { label: 'Time Saved', value: '2,400 hrs', trend: 'up' },
        { label: 'Cost Reduction', value: '$180K', trend: 'up' },
        { label: 'Accuracy Rate', value: '99.7%', trend: 'up' }
      ]
    },
    'security-monitor': {
      title: 'Advanced Security Monitoring',
      description: 'See how AI detects and prevents threats in real-time',
      icon: Shield,
      color: 'from-red-600 to-orange-600',
      features: [
        { name: 'Threat Detection', status: 'active', value: '99.9%' },
        { name: 'Response Time', status: 'optimal', value: '< 2s' },
        { name: 'False Positives', status: 'low', value: '0.1%' },
        { name: 'System Protection', status: 'active', value: '100%' }
      ],
      metrics: [
        { label: 'Threats Blocked', value: '15,420', trend: 'up' },
        { label: 'Response Time', value: '< 2s', trend: 'down' },
        { label: 'System Uptime', value: '99.99%', trend: 'up' },
        { label: 'Compliance Score', value: '100%', trend: 'up' }
      ]
    }
  };

  const techStack = [
    { name: 'React', icon: Code, color: 'text-blue-500' },
    { name: 'Node.js', icon: Cpu, color: 'text-green-500' },
    { name: 'MongoDB', icon: Database, color: 'text-green-600' },
    { name: 'AWS', icon: Cloud, color: 'text-orange-500' },
    { name: 'Docker', icon: Settings, color: 'text-blue-600' },
    { name: 'Kubernetes', icon: Network, color: 'text-blue-700' }
  ];

  const devices = [
    { name: 'Desktop', icon: Monitor, active: true },
    { name: 'Mobile', icon: Smartphone, active: false },
    { name: 'Tablet', icon: Monitor, active: false }
  ];

  return (
    <div className="bg-gradient-to-br from-slate-50 via-white to-purple-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Interactive <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">Tech Demos</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience our cutting-edge technology solutions in action. Interact with live demos 
            and see how our AI-powered tools can transform your business operations.
          </p>
        </motion.div>

        {/* Demo Selector */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center mb-12"
        >
          {Object.entries(demos).map(([key, demo]) => (
            <button
              key={key}
              onClick={() => setActiveDemo(key)}
              className={`px-6 py-3 m-2 rounded-full font-medium transition-all duration-300 ${
                activeDemo === key
                  ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-gray-50 shadow-md'
              }`}
            >
              <demo.icon className="w-5 h-5 inline mr-2" />
              {demo.title}
            </button>
          ))}
        </motion.div>

        {/* Demo Container */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Demo Visual */}
          <motion.div
            key={activeDemo}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            {/* Demo Screen */}
            <div className="bg-gray-900 rounded-2xl p-6 shadow-2xl">
              {/* Screen Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="text-white text-sm font-medium">
                    {demos[activeDemo].title}
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-green-400 text-xs">LIVE</span>
                </div>
              </div>

              {/* Demo Content */}
              <div className="bg-white rounded-lg p-6 min-h-[400px]">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold text-gray-900">
                    {demos[activeDemo].title}
                  </h3>
                  <button
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="flex items-center space-x-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
                  >
                    <PlayCircle className="w-4 h-4" />
                    <span>{isPlaying ? 'Pause' : 'Play'} Demo</span>
                  </button>
                </div>

                {/* Features Status */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {demos[activeDemo].features.map((feature, index) => (
                    <div key={index} className="p-3 bg-gray-50 rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-gray-700">
                          {feature.name}
                        </span>
                        <div className={`w-2 h-2 rounded-full ${
                          feature.status === 'active' ? 'bg-green-500' :
                          feature.status === 'processing' ? 'bg-yellow-500' :
                          feature.status === 'optimal' ? 'bg-blue-500' : 'bg-gray-400'
                        }`}></div>
                      </div>
                      <div className="text-lg font-bold text-gray-900">
                        {feature.value}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Metrics */}
                <div className="space-y-3">
                  {demos[activeDemo].metrics.map((metric, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg">
                      <span className="text-sm text-gray-600">{metric.label}</span>
                      <div className="flex items-center space-x-2">
                        <span className="font-bold text-gray-900">{metric.value}</span>
                        <TrendingUp className={`w-4 h-4 ${
                          metric.trend === 'up' ? 'text-green-500' : 'text-red-500'
                        }`} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center"
            >
              <Star className="w-4 h-4 text-white" />
            </motion.div>
          </motion.div>

          {/* Demo Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="space-y-8"
          >
            {/* Demo Description */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {demos[activeDemo].title}
              </h3>
              <p className="text-gray-600 text-lg mb-6">
                {demos[activeDemo].description}
              </p>
              <div className="flex items-center space-x-4">
                <div className={`p-3 bg-gradient-to-r ${demos[activeDemo].color} rounded-lg`}>
                  <demos[activeDemo].icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Live Demo</div>
                  <div className="text-sm text-gray-600">Interactive experience</div>
                </div>
              </div>
            </div>

            {/* Tech Stack */}
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Technology Stack</h4>
              <div className="grid grid-cols-3 gap-3">
                {techStack.map((tech, index) => (
                  <div key={index} className="flex items-center space-x-2 p-3 bg-white rounded-lg shadow-sm">
                    <tech.icon className={`w-5 h-5 ${tech.color}`} />
                    <span className="text-sm font-medium text-gray-700">{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Device Support */}
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Device Support</h4>
              <div className="flex space-x-4">
                {devices.map((device, index) => (
                  <div key={index} className={`flex items-center space-x-2 p-3 rounded-lg ${
                    device.active ? 'bg-purple-100 border-2 border-purple-500' : 'bg-gray-100'
                  }`}>
                    <device.icon className={`w-5 h-5 ${device.active ? 'text-purple-600' : 'text-gray-400'}`} />
                    <span className={`text-sm font-medium ${device.active ? 'text-purple-600' : 'text-gray-500'}`}>
                      {device.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl p-6 text-white">
              <h4 className="text-xl font-bold mb-2">Ready to Try It Yourself?</h4>
              <p className="text-purple-100 mb-4">
                Get hands-on experience with our interactive demos and see the power of our solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/demo"
                  className="inline-flex items-center px-6 py-3 bg-white text-purple-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <PlayCircle className="w-5 h-5 mr-2" />
                  Start Demo
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center px-6 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-purple-600 transition-colors"
                >
                  <ArrowRight className="w-5 h-5 mr-2" />
                  Get Started
                </Link>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Additional Demos */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center"
        >
          <h3 className="text-3xl font-bold text-gray-900 mb-8">
            More Interactive Experiences
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Activity className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">Live Analytics</h4>
              <p className="text-gray-600 mb-4">Real-time data visualization and insights</p>
              <Link href="/analytics-demo" className="text-green-600 hover:text-green-700 font-semibold">
                Try Demo →
              </Link>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">AI Assistant</h4>
              <p className="text-gray-600 mb-4">Chat with our intelligent AI assistant</p>
              <Link href="/ai-demo" className="text-blue-600 hover:text-blue-700 font-semibold">
                Try Demo →
              </Link>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-r from-red-600 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">Security Monitor</h4>
              <p className="text-gray-600 mb-4">Watch threat detection in real-time</p>
              <Link href="/security-demo" className="text-red-600 hover:text-red-700 font-semibold">
                Try Demo →
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default InteractiveTechDemo2025;