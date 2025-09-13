'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Play, 
  Pause, 
  RotateCcw, 
  Settings, 
  Code, 
  Cpu, 
  Database, 
  Network,
  Zap,
  Brain,
  Target,
  BarChart3,
  Eye,
  EyeOff,
  Download,
  Share2,
  Maximize2,
  Minimize2
} from 'lucide-react';

interface DemoStep {
  id: string;
  title: string;
  description: string;
  duration: number;
  visual: 'code' | 'network' | 'data' | 'ai' | 'chart';
  data?: any;
}

const demoSteps: DemoStep[] = [
  {
    id: 'data-input',
    title: 'Data Input Processing',
    description: 'Real-time data ingestion from multiple sources with intelligent preprocessing',
    duration: 3000,
    visual: 'data',
    data: { sources: 5, records: 125000, throughput: '2.5GB/s' }
  },
  {
    id: 'neural-processing',
    title: 'Neural Network Processing',
    description: 'Advanced AI algorithms processing data through multiple neural layers',
    duration: 4000,
    visual: 'ai',
    data: { layers: 12, neurons: 50000, accuracy: 98.7 }
  },
  {
    id: 'network-optimization',
    title: 'Network Optimization',
    description: 'Dynamic network routing and load balancing for optimal performance',
    duration: 2500,
    visual: 'network',
    data: { nodes: 15, latency: '12ms', throughput: '99.2%' }
  },
  {
    id: 'result-generation',
    title: 'Result Generation',
    description: 'Intelligent output generation with confidence scoring and validation',
    duration: 2000,
    visual: 'chart',
    data: { confidence: 96.8, results: 150, processingTime: '0.3s' }
  }
];

export default function InteractiveTechDemo2025() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [speed, setSpeed] = useState(1);
  const [autoPlay, setAutoPlay] = useState(true);
  const [showData, setShowData] = useState(true);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const demoRef = useRef<HTMLDivElement>(null);

  const startDemo = () => {
    setIsPlaying(true);
    if (intervalRef.current) clearInterval(intervalRef.current);
    
    intervalRef.current = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % demoSteps.length);
    }, demoSteps[currentStep].duration / speed);
  };

  const pauseDemo = () => {
    setIsPlaying(false);
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  const resetDemo = () => {
    pauseDemo();
    setCurrentStep(0);
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      demoRef.current?.requestFullscreen();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  useEffect(() => {
    if (autoPlay && !isPlaying) {
      startDemo();
    }
  }, [autoPlay]);

  useEffect(() => {
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  const renderVisual = (step: DemoStep) => {
    switch (step.visual) {
      case 'data':
        return (
          <div className="space-y-4">
            <div className="grid grid-cols-3 gap-4">
              {[1, 2, 3, 4, 5].map((i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg p-4 text-white"
                >
                  <Database className="h-6 w-6 mb-2" />
                  <div className="text-sm font-semibold">Source {i}</div>
                  <div className="text-xs opacity-80">Active</div>
                </motion.div>
              ))}
            </div>
            <div className="bg-gray-800 rounded-lg p-4">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm text-gray-300">Data Flow</span>
                <span className="text-sm text-green-400">{step.data?.throughput}</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <motion.div
                  className="bg-gradient-to-r from-green-400 to-blue-400 h-2 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 2 }}
                />
              </div>
            </div>
          </div>
        );

      case 'ai':
        return (
          <div className="space-y-4">
            <div className="grid grid-cols-4 gap-2">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg p-2 text-white text-center"
                >
                  <Brain className="h-4 w-4 mx-auto mb-1" />
                  <div className="text-xs">L{i}</div>
                </motion.div>
              ))}
            </div>
            <div className="bg-gray-800 rounded-lg p-4">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm text-gray-300">Neural Processing</span>
                <span className="text-sm text-purple-400">{step.data?.accuracy}%</span>
              </div>
              <div className="flex space-x-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <motion.div
                    key={i}
                    className="bg-gradient-to-r from-purple-400 to-pink-400 rounded h-2 flex-1"
                    initial={{ scaleY: 0 }}
                    animate={{ scaleY: Math.random() * 0.8 + 0.2 }}
                    transition={{ delay: i * 0.2, duration: 0.5 }}
                  />
                ))}
              </div>
            </div>
          </div>
        );

      case 'network':
        return (
          <div className="space-y-4">
            <div className="relative">
              <div className="grid grid-cols-3 gap-4">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-gradient-to-r from-green-500 to-blue-500 rounded-full p-3 text-white text-center"
                  >
                    <Network className="h-4 w-4 mx-auto" />
                  </motion.div>
                ))}
              </div>
              <motion.div
                className="absolute inset-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2 }}
              >
                <svg className="w-full h-full">
                  <motion.line
                    x1="20%"
                    y1="20%"
                    x2="80%"
                    y2="80%"
                    stroke="url(#gradient)"
                    strokeWidth="2"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 2 }}
                  />
                  <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#10b981" />
                      <stop offset="100%" stopColor="#3b82f6" />
                    </linearGradient>
                  </defs>
                </svg>
              </motion.div>
            </div>
            <div className="bg-gray-800 rounded-lg p-4">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm text-gray-300">Network Performance</span>
                <span className="text-sm text-green-400">{step.data?.throughput}</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <motion.div
                  className="bg-gradient-to-r from-green-400 to-blue-400 h-2 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: "99.2%" }}
                  transition={{ duration: 2 }}
                />
              </div>
            </div>
          </div>
        );

      case 'chart':
        return (
          <div className="space-y-4">
            <div className="bg-gray-800 rounded-lg p-4">
              <div className="flex justify-between items-center mb-4">
                <span className="text-sm text-gray-300">Results Analysis</span>
                <span className="text-sm text-yellow-400">{step.data?.confidence}% Confidence</span>
              </div>
              <div className="grid grid-cols-5 gap-2 h-20">
                {[65, 78, 82, 91, 96].map((height, i) => (
                  <motion.div
                    key={i}
                    className="bg-gradient-to-t from-yellow-400 to-orange-400 rounded-t"
                    initial={{ height: 0 }}
                    animate={{ height: `${height}%` }}
                    transition={{ delay: i * 0.2, duration: 0.8 }}
                  />
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-800 rounded-lg p-3 text-center">
                <div className="text-lg font-bold text-white">{step.data?.results}</div>
                <div className="text-xs text-gray-400">Results</div>
              </div>
              <div className="bg-gray-800 rounded-lg p-3 text-center">
                <div className="text-lg font-bold text-white">{step.data?.processingTime}</div>
                <div className="text-xs text-gray-400">Processing Time</div>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Interactive Technology Demo
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Experience our AI technology in action with this interactive demonstration of real-time processing capabilities.
          </p>
        </motion.div>

        {/* Demo Container */}
        <div 
          ref={demoRef}
          className={`bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden ${
            isFullscreen ? 'fixed inset-4 z-50' : 'relative'
          }`}
        >
          {/* Demo Header */}
          <div className="bg-white/10 backdrop-blur-sm border-b border-white/10 p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="flex space-x-2">
                  <button
                    onClick={isPlaying ? pauseDemo : startDemo}
                    className="p-2 bg-white/10 hover:bg-white/20 rounded-lg text-white transition-colors"
                  >
                    {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
                  </button>
                  <button
                    onClick={resetDemo}
                    className="p-2 bg-white/10 hover:bg-white/20 rounded-lg text-white transition-colors"
                  >
                    <RotateCcw className="h-5 w-5" />
                  </button>
                </div>
                <div className="text-white font-semibold">
                  {demoSteps[currentStep].title}
                </div>
              </div>
              
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => setShowSettings(!showSettings)}
                  className="p-2 bg-white/10 hover:bg-white/20 rounded-lg text-white transition-colors"
                >
                  <Settings className="h-5 w-5" />
                </button>
                <button
                  onClick={toggleFullscreen}
                  className="p-2 bg-white/10 hover:bg-white/20 rounded-lg text-white transition-colors"
                >
                  {isFullscreen ? <Minimize2 className="h-5 w-5" /> : <Maximize2 className="h-5 w-5" />}
                </button>
              </div>
            </div>
          </div>

          {/* Demo Content */}
          <div className="p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Visual Area */}
              <div className="space-y-6">
                <div className="bg-gray-800/50 rounded-lg p-6 min-h-[400px]">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentStep}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.5 }}
                    >
                      {renderVisual(demoSteps[currentStep])}
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>

              {/* Info Panel */}
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {demoSteps[currentStep].title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {demoSteps[currentStep].description}
                  </p>
                </div>

                {showData && demoSteps[currentStep].data && (
                  <div className="bg-white/5 rounded-lg p-4">
                    <h4 className="text-lg font-semibold text-white mb-3">Live Metrics</h4>
                    <div className="space-y-2">
                      {Object.entries(demoSteps[currentStep].data).map(([key, value]) => (
                        <div key={key} className="flex justify-between">
                          <span className="text-gray-400 capitalize">
                            {key.replace(/([A-Z])/g, ' $1').trim()}:
                          </span>
                          <span className="text-white font-medium">{value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Progress Indicator */}
                <div className="space-y-2">
                  <div className="flex justify-between text-sm text-gray-400">
                    <span>Step {currentStep + 1} of {demoSteps.length}</span>
                    <span>{Math.round((currentStep / demoSteps.length) * 100)}% Complete</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <motion.div
                      className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: `${((currentStep + 1) / demoSteps.length) * 100}%` }}
                      transition={{ duration: 0.5 }}
                    />
                  </div>
                </div>

                {/* Step Navigation */}
                <div className="flex space-x-2">
                  {demoSteps.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentStep(index)}
                      className={`flex-1 py-2 px-4 rounded-lg text-sm font-medium transition-colors ${
                        currentStep === index
                          ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white'
                          : 'bg-white/10 text-gray-300 hover:bg-white/20'
                      }`}
                    >
                      Step {index + 1}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Settings Panel */}
        <AnimatePresence>
          {showSettings && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="mt-6 bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10"
            >
              <h3 className="text-lg font-semibold text-white mb-4">Demo Settings</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Playback Speed
                  </label>
                  <select
                    value={speed}
                    onChange={(e) => setSpeed(Number(e.target.value))}
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-white"
                  >
                    <option value={0.5}>0.5x</option>
                    <option value={1}>1x</option>
                    <option value={1.5}>1.5x</option>
                    <option value={2}>2x</option>
                  </select>
                </div>
                
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="autoPlay"
                    checked={autoPlay}
                    onChange={(e) => setAutoPlay(e.target.checked)}
                    className="mr-2"
                  />
                  <label htmlFor="autoPlay" className="text-sm text-gray-300">
                    Auto Play
                  </label>
                </div>
                
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="showData"
                    checked={showData}
                    onChange={(e) => setShowData(e.target.checked)}
                    className="mr-2"
                  />
                  <label htmlFor="showData" className="text-sm text-gray-300">
                    Show Live Data
                  </label>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}