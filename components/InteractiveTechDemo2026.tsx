'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Play, 
  Pause, 
  RotateCcw, 
  Settings, 
  BarChart3, 
  Zap,
  Brain,
  Shield,
  Cloud,
  Database
} from 'lucide-react';

const InteractiveTechDemo2026 = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentDemo, setCurrentDemo] = useState(0);
  const [metrics, setMetrics] = useState({
    efficiency: 0,
    speed: 0,
    accuracy: 0,
    cost: 0
  });

  const demos = [
    {
      id: 'neural-interface',
      title: 'Neural Interface Demo',
      description: 'Experience thought-controlled computing',
      icon: Brain,
      color: 'from-purple-500 to-pink-500',
      metrics: { efficiency: 95, speed: 98, accuracy: 99, cost: 85 }
    },
    {
      id: 'quantum-ai',
      title: 'Quantum AI Processing',
      description: 'Witness quantum-enhanced AI computations',
      icon: Zap,
      color: 'from-blue-500 to-cyan-500',
      metrics: { efficiency: 99, speed: 100, accuracy: 100, cost: 90 }
    },
    {
      id: 'autonomous-security',
      title: 'Autonomous Security',
      description: 'Self-healing cybersecurity in action',
      icon: Shield,
      color: 'from-green-500 to-emerald-500',
      metrics: { efficiency: 97, speed: 96, accuracy: 98, cost: 88 }
    },
    {
      id: 'edge-computing',
      title: 'Edge Intelligence',
      description: 'Real-time processing at the edge',
      icon: Cloud,
      color: 'from-orange-500 to-red-500',
      metrics: { efficiency: 92, speed: 99, accuracy: 97, cost: 82 }
    },
    {
      id: 'synthetic-data',
      title: 'Synthetic Data Generation',
      description: 'Privacy-preserving AI training data',
      icon: Database,
      color: 'from-indigo-500 to-purple-500',
      metrics: { efficiency: 94, speed: 93, accuracy: 96, cost: 91 }
    }
  ];

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isPlaying) {
      interval = setInterval(() => {
        setCurrentDemo((prev) => (prev + 1) % demos.length);
      }, 3000);
    }
    return () => clearInterval(interval);
  }, [isPlaying, demos.length]);

  useEffect(() => {
    if (isPlaying) {
      const targetMetrics = demos[currentDemo].metrics;
      const duration = 1000;
      const steps = 20;
      const stepDuration = duration / steps;
      
      let step = 0;
      const timer = setInterval(() => {
        step++;
        const progress = step / steps;
        setMetrics({
          efficiency: Math.round(targetMetrics.efficiency * progress),
          speed: Math.round(targetMetrics.speed * progress),
          accuracy: Math.round(targetMetrics.accuracy * progress),
          cost: Math.round(targetMetrics.cost * progress)
        });
        
        if (step >= steps) {
          clearInterval(timer);
        }
      }, stepDuration);
      
      return () => clearInterval(timer);
    }
  }, [currentDemo, isPlaying]);

  const currentDemoData = demos[currentDemo];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Interactive Tech Demo
            <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              2026 Experience
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Experience the future of technology through our interactive demonstrations. 
            See how these revolutionary systems work in real-time.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Demo Controls */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-6">Demo Controls</h3>
              
              <div className="flex items-center space-x-4 mb-8">
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-3 rounded-xl font-bold hover:from-blue-600 hover:to-purple-600 transition-all"
                >
                  {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
                  <span>{isPlaying ? 'Pause' : 'Play'} Demo</span>
                </button>
                
                <button
                  onClick={() => {
                    setIsPlaying(false);
                    setCurrentDemo(0);
                    setMetrics({ efficiency: 0, speed: 0, accuracy: 0, cost: 0 });
                  }}
                  className="flex items-center space-x-2 border-2 border-white/30 text-white px-6 py-3 rounded-xl font-bold hover:bg-white/10 transition-all"
                >
                  <RotateCcw className="w-5 h-5" />
                  <span>Reset</span>
                </button>
              </div>

              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-white mb-4">Select Demo:</h4>
                <div className="grid grid-cols-1 gap-3">
                  {demos.map((demo, index) => (
                    <button
                      key={demo.id}
                      onClick={() => {
                        setCurrentDemo(index);
                        setIsPlaying(false);
                      }}
                      className={`p-4 rounded-xl text-left transition-all ${
                        currentDemo === index
                          ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white'
                          : 'bg-white/5 text-gray-300 hover:bg-white/10'
                      }`}
                    >
                      <div className="flex items-center space-x-3">
                        <demo.icon className="w-5 h-5" />
                        <span className="font-medium">{demo.title}</span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Demo Visualization */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentDemo}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="text-center"
                >
                  <div className={`inline-flex p-6 rounded-2xl bg-gradient-to-r ${currentDemoData.color} mb-6`}>
                    <currentDemoData.icon className="w-12 h-12 text-white" />
                  </div>
                  
                  <h3 className="text-3xl font-bold text-white mb-4">
                    {currentDemoData.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-8 text-lg">
                    {currentDemoData.description}
                  </p>

                  {/* Real-time Metrics */}
                  <div className="grid grid-cols-2 gap-6">
                    <div className="bg-white/5 rounded-xl p-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-gray-300">Efficiency</span>
                        <span className="text-white font-bold">{metrics.efficiency}%</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <div 
                          className="bg-gradient-to-r from-green-400 to-blue-400 h-2 rounded-full transition-all duration-300"
                          style={{ width: `${metrics.efficiency}%` }}
                        />
                      </div>
                    </div>

                    <div className="bg-white/5 rounded-xl p-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-gray-300">Speed</span>
                        <span className="text-white font-bold">{metrics.speed}%</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <div 
                          className="bg-gradient-to-r from-blue-400 to-purple-400 h-2 rounded-full transition-all duration-300"
                          style={{ width: `${metrics.speed}%` }}
                        />
                      </div>
                    </div>

                    <div className="bg-white/5 rounded-xl p-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-gray-300">Accuracy</span>
                        <span className="text-white font-bold">{metrics.accuracy}%</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <div 
                          className="bg-gradient-to-r from-purple-400 to-pink-400 h-2 rounded-full transition-all duration-300"
                          style={{ width: `${metrics.accuracy}%` }}
                        />
                      </div>
                    </div>

                    <div className="bg-white/5 rounded-xl p-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-gray-300">Cost Savings</span>
                        <span className="text-white font-bold">{metrics.cost}%</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <div 
                          className="bg-gradient-to-r from-pink-400 to-red-400 h-2 rounded-full transition-all duration-300"
                          style={{ width: `${metrics.cost}%` }}
                        />
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-3xl font-bold mb-4">
              Experience the Future Today
            </h3>
            <p className="text-xl mb-8 text-blue-100">
              Schedule a personalized demo to see how these technologies can transform your business
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-50 transition-colors">
                Schedule Demo
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-blue-600 transition-colors">
                Download Whitepaper
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default InteractiveTechDemo2026;