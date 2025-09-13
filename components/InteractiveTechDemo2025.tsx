'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, Pause, RotateCcw, Settings, BarChart3, Cpu, Database, Globe, Shield } from 'lucide-react';

const InteractiveTechDemo2025 = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [selectedDemo, setSelectedDemo] = useState('ai');

  const demos = [
    {
      id: 'ai',
      title: 'AI Processing',
      icon: <Cpu className="w-8 h-8" />,
      description: 'Real-time AI decision making and processing',
      metrics: { speed: '99.9%', accuracy: '99.8%', efficiency: '500%' }
    },
    {
      id: 'data',
      title: 'Data Analytics',
      icon: <Database className="w-8 h-8" />,
      description: 'Advanced data processing and insights generation',
      metrics: { speed: '95.2%', accuracy: '99.5%', efficiency: '300%' }
    },
    {
      id: 'cloud',
      title: 'Cloud Infrastructure',
      icon: <Globe className="w-8 h-8" />,
      description: 'Scalable cloud solutions and global deployment',
      metrics: { speed: '98.7%', accuracy: '99.9%', efficiency: '400%' }
    },
    {
      id: 'security',
      title: 'Security Systems',
      icon: <Shield className="w-8 h-8" />,
      description: 'Advanced threat detection and prevention',
      metrics: { speed: '97.3%', accuracy: '99.7%', efficiency: '250%' }
    }
  ];

  const currentDemo = demos.find(demo => demo.id === selectedDemo) || demos[0];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-500/5 to-purple-500/5"></div>
        <div className="absolute top-20 left-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-white text-sm font-medium mb-6">
            <Play className="w-4 h-4 mr-2" />
            INTERACTIVE TECH DEMO 2025
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Experience the Future
            <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              in Real-Time
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Interact with our cutting-edge technologies and see the power of AI, 
            cloud computing, and advanced analytics in action.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Demo Controls */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Demo Selection */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Choose Your Demo</h3>
              <div className="grid grid-cols-2 gap-4">
                {demos.map((demo) => (
                  <button
                    key={demo.id}
                    onClick={() => setSelectedDemo(demo.id)}
                    className={`p-6 rounded-2xl border-2 transition-all duration-300 ${
                      selectedDemo === demo.id
                        ? 'border-blue-400 bg-blue-500/20'
                        : 'border-white/20 bg-white/5 hover:bg-white/10'
                    }`}
                  >
                    <div className="text-blue-400 mb-3">
                      {demo.icon}
                    </div>
                    <h4 className="text-lg font-bold text-white mb-2">
                      {demo.title}
                    </h4>
                    <p className="text-gray-300 text-sm">
                      {demo.description}
                    </p>
                  </button>
                ))}
              </div>
            </div>

            {/* Control Panel */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <h4 className="text-lg font-bold text-white mb-4">Demo Controls</h4>
              <div className="flex items-center space-x-4 mb-6">
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors"
                >
                  {isPlaying ? <Pause className="w-6 h-6 text-white" /> : <Play className="w-6 h-6 text-white" />}
                </button>
                <button className="w-12 h-12 bg-gray-500 rounded-full flex items-center justify-center hover:bg-gray-600 transition-colors">
                  <RotateCcw className="w-6 h-6 text-white" />
                </button>
                <button className="w-12 h-12 bg-gray-500 rounded-full flex items-center justify-center hover:bg-gray-600 transition-colors">
                  <Settings className="w-6 h-6 text-white" />
                </button>
              </div>
              <div className="text-sm text-gray-300">
                {isPlaying ? 'Demo is running...' : 'Click play to start the demo'}
              </div>
            </div>
          </motion.div>

          {/* Demo Visualization */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10"
          >
            <div className="mb-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-bold text-white">{currentDemo.title}</h3>
                <div className="text-blue-400">
                  {currentDemo.icon}
                </div>
              </div>
              <p className="text-gray-300 mb-6">{currentDemo.description}</p>
            </div>

            {/* Metrics Display */}
            <div className="space-y-4 mb-8">
              {Object.entries(currentDemo.metrics).map(([key, value], index) => (
                <motion.div
                  key={key}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center justify-between p-4 bg-white/5 rounded-xl"
                >
                  <span className="text-gray-300 capitalize">{key}</span>
                  <div className="flex items-center space-x-2">
                    <div className="w-32 bg-gray-700 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-1000"
                        style={{ width: value }}
                      ></div>
                    </div>
                    <span className="text-white font-bold">{value}</span>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Live Data Visualization */}
            <div className="bg-white/5 rounded-2xl p-6">
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-lg font-bold text-white">Live Performance</h4>
                <BarChart3 className="w-6 h-6 text-blue-400" />
              </div>
              <div className="h-32 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl flex items-center justify-center">
                <div className="text-center">
                  <div className="text-2xl font-bold text-white mb-2">
                    {isPlaying ? 'Processing...' : 'Ready'}
                  </div>
                  <div className="text-gray-300 text-sm">
                    {isPlaying ? 'Real-time data streaming' : 'Click play to see live data'}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mt-16"
        >
          <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12 border border-white/10">
            <h3 className="text-3xl font-bold text-white mb-6">
              Ready to Experience the Future?
            </h3>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Schedule a personalized demo with our experts and see how our technologies 
              can transform your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300">
                Schedule Demo
              </button>
              <button className="border-2 border-white/30 text-white px-8 py-4 rounded-full font-semibold hover:border-white/50 transition-all duration-300">
                Download Brochure
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default InteractiveTechDemo2025;