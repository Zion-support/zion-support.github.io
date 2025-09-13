'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Brain, 
  Zap, 
  Target, 
  BarChart3, 
  Settings, 
  Play,
  Pause,
  RotateCcw,
  CheckCircle,
  AlertCircle,
  TrendingUp,
  Users,
  DollarSign,
  Clock,
  ArrowRight,
  Sparkles,
  Cpu,
  Database,
  Network,
  Shield
} from 'lucide-react';

const InteractiveAIToolsDemo2026 = () => {
  const [activeTool, setActiveTool] = useState('quantum-ai');
  const [isRunning, setIsRunning] = useState(false);
  const [progress, setProgress] = useState(0);
  const [results, setResults] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const tools = {
    'quantum-ai': {
      name: 'Quantum-Neural Fusion AI',
      description: 'Revolutionary AI combining quantum computing with neural networks',
      icon: Brain,
      color: 'from-purple-600 to-blue-600',
      metrics: {
        processingSpeed: '10,000x faster',
        accuracy: '99.99%',
        efficiency: '95% improvement',
        roi: '50,000%'
      },
      features: [
        'Quantum-enhanced neural processing',
        'Real-time decision making',
        'Multi-dimensional data analysis',
        'Predictive modeling with quantum accuracy'
      ]
    },
    'automation-engine': {
      name: 'Intelligent Automation Engine',
      description: 'Complete business process automation with AI decision-making',
      icon: Settings,
      color: 'from-green-600 to-emerald-600',
      metrics: {
        automation: '100% automated',
        timeSaved: '90% reduction',
        accuracy: '99.9%',
        roi: '25,000%'
      },
      features: [
        'End-to-end process automation',
        'Intelligent workflow optimization',
        'Real-time monitoring and adjustment',
        'Seamless integration capabilities'
      ]
    },
    'analytics-platform': {
      name: 'Advanced Analytics Platform',
      description: 'AI-powered analytics delivering unprecedented business insights',
      icon: BarChart3,
      color: 'from-orange-600 to-red-600',
      metrics: {
        insights: '10x deeper',
        speed: 'Real-time',
        accuracy: '98%',
        roi: '35,000%'
      },
      features: [
        'Predictive analytics engine',
        'Real-time data processing',
        'Advanced visualization tools',
        'Automated reporting and insights'
      ]
    },
    'neural-interface': {
      name: 'Neural Interface System',
      description: 'Direct brain-computer interface for seamless human-AI collaboration',
      icon: Network,
      color: 'from-pink-600 to-purple-600',
      metrics: {
        responseTime: '0.1ms',
        accuracy: '99.95%',
        efficiency: '500% increase',
        roi: '40,000%'
      },
      features: [
        'Direct neural data processing',
        'Real-time thought-to-action',
        'Enhanced cognitive capabilities',
        'Seamless human-AI integration'
      ]
    }
  };

  const runDemo = () => {
    setIsRunning(true);
    setProgress(0);
    setResults(null);

    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsRunning(false);
          setResults({
            success: true,
            metrics: tools[activeTool].metrics,
            message: 'Demo completed successfully!'
          });
          return 100;
        }
        return prev + 2;
      });
    }, 50);
  };

  const resetDemo = () => {
    setIsRunning(false);
    setProgress(0);
    setResults(null);
  };

  const currentTool = tools[activeTool];
  const Icon = currentTool.icon;

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-500/10 via-transparent to-blue-500/10" />
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-purple-500/20 rounded-full blur-xl animate-pulse" />
      <div className="absolute top-40 right-20 w-32 h-32 bg-blue-500/20 rounded-full blur-xl animate-pulse delay-1000" />
      <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-pink-500/20 rounded-full blur-xl animate-pulse delay-2000" />

      <div className="relative z-10 container mx-auto px-4 py-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            Interactive AI Tools Demo 2026
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent mb-6">
            Experience the Future
            <br />
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              of AI Technology
            </span>
          </h1>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Interact with our revolutionary AI tools and see firsthand how they can transform 
            your business operations and deliver extraordinary results.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Tool Selection */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold text-white mb-6">Choose Your AI Tool</h2>
            
            <div className="space-y-4">
              {Object.entries(tools).map(([key, tool]) => {
                const ToolIcon = tool.icon;
                return (
                  <button
                    key={key}
                    onClick={() => setActiveTool(key)}
                    className={`w-full p-6 rounded-2xl border-2 transition-all duration-300 text-left ${
                      activeTool === key
                        ? 'border-purple-500 bg-gradient-to-r from-purple-600/20 to-blue-600/20'
                        : 'border-white/20 bg-white/5 hover:border-white/40 hover:bg-white/10'
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <div className={`p-3 rounded-xl bg-gradient-to-r ${tool.color}`}>
                        <ToolIcon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white mb-1">{tool.name}</h3>
                        <p className="text-gray-300 text-sm">{tool.description}</p>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </motion.div>

          {/* Demo Interface */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : 30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/20"
          >
            {/* Tool Header */}
            <div className="flex items-center gap-4 mb-8">
              <div className={`p-4 rounded-2xl bg-gradient-to-r ${currentTool.color}`}>
                <Icon className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">{currentTool.name}</h3>
                <p className="text-gray-300">{currentTool.description}</p>
              </div>
            </div>

            {/* Demo Controls */}
            <div className="mb-8">
              <div className="flex items-center gap-4 mb-6">
                <button
                  onClick={runDemo}
                  disabled={isRunning}
                  className="flex items-center gap-2 bg-gradient-to-r from-green-600 to-emerald-600 text-white px-6 py-3 rounded-full font-bold hover:shadow-lg hover:shadow-green-500/25 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isRunning ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
                  {isRunning ? 'Running...' : 'Run Demo'}
                </button>
                
                <button
                  onClick={resetDemo}
                  className="flex items-center gap-2 bg-white/10 text-white px-6 py-3 rounded-full font-bold hover:bg-white/20 transition-all duration-300"
                >
                  <RotateCcw className="w-5 h-5" />
                  Reset
                </button>
              </div>

              {/* Progress Bar */}
              {isRunning && (
                <div className="mb-6">
                  <div className="flex justify-between text-sm text-gray-300 mb-2">
                    <span>Processing...</span>
                    <span>{progress}%</span>
                  </div>
                  <div className="w-full bg-white/20 rounded-full h-3">
                    <motion.div
                      className="bg-gradient-to-r from-purple-600 to-blue-600 h-3 rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: `${progress}%` }}
                      transition={{ duration: 0.1 }}
                    />
                  </div>
                </div>
              )}

              {/* Results */}
              <AnimatePresence>
                {results && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="bg-gradient-to-r from-green-600/20 to-emerald-600/20 border border-green-500/30 rounded-2xl p-6 mb-6"
                  >
                    <div className="flex items-center gap-2 mb-4">
                      <CheckCircle className="w-6 h-6 text-green-400" />
                      <h4 className="text-xl font-bold text-white">Demo Results</h4>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      {Object.entries(currentTool.metrics).map(([key, value]) => (
                        <div key={key} className="text-center">
                          <div className="text-2xl font-bold text-green-400">{value}</div>
                          <div className="text-sm text-gray-300 capitalize">{key.replace(/([A-Z])/g, ' $1')}</div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Features List */}
            <div className="mb-8">
              <h4 className="text-lg font-bold text-white mb-4">Key Features</h4>
              <div className="space-y-2">
                {currentTool.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3 text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Call to Action */}
            <div className="text-center">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 hover:scale-105"
              >
                <Target className="w-5 h-5" />
                Implement This Tool
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-sm rounded-3xl p-12 border border-white/10">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              These are just a few examples of our revolutionary AI tools. 
              Discover the full range of solutions available for your industry.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/ai-tools"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 hover:scale-105"
              >
                <Cpu className="w-5 h-5" />
                Explore All AI Tools
                <ArrowRight className="w-5 h-5" />
              </Link>
              
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-white/10 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/20 transition-all duration-300"
              >
                <Users className="w-5 h-5" />
                Schedule Consultation
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default InteractiveAIToolsDemo2026;