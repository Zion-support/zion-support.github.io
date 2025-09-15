import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Pause, RotateCcw, Zap, Brain, Shield, TrendingUp, Star, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const InteractiveTechDemo: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentDemo, setCurrentDemo] = useState(0);
  const [progress, setProgress] = useState(0);

  const demos = [
    {
      id: 'ai-optimization',
      title: 'AI-Powered Optimization',
      description: 'Watch how our AI algorithms optimize business processes in real-time',
      icon: Brain,
      color: 'from-blue-500 to-purple-600',
      bgColor: 'from-blue-500/10 to-purple-500/10',
      metrics: [
        { label: 'Efficiency', value: 340, suffix: '%', color: 'text-green-400' },
        { label: 'Cost Reduction', value: 45, suffix: '%', color: 'text-blue-400' },
        { label: 'Time Saved', value: 78, suffix: '%', color: 'text-purple-400' }
      ],
      animation: 'pulse'
    },
    {
      id: 'quantum-computing',
      title: 'Quantum Computing Power',
      description: 'Experience the exponential speed of quantum algorithms',
      icon: Zap,
      color: 'from-purple-500 to-cyan-600',
      bgColor: 'from-purple-500/10 to-cyan-500/10',
      metrics: [
        { label: 'Speedup', value: 3600, suffix: 'x', color: 'text-cyan-400' },
        { label: 'Accuracy', value: 99.2, suffix: '%', color: 'text-green-400' },
        { label: 'Complexity', value: 10, suffix: 'M+', color: 'text-purple-400' }
      ],
      animation: 'spin'
    },
    {
      id: 'cybersecurity',
      title: 'Advanced Cybersecurity',
      description: 'See our AI-driven threat detection in action',
      icon: Shield,
      color: 'from-red-500 to-orange-600',
      bgColor: 'from-red-500/10 to-orange-500/10',
      metrics: [
        { label: 'Threat Detection', value: 99.9, suffix: '%', color: 'text-red-400' },
        { label: 'Response Time', value: 0.3, suffix: 's', color: 'text-orange-400' },
        { label: 'False Positives', value: 0.1, suffix: '%', color: 'text-green-400' }
      ],
      animation: 'bounce'
    }
  ];

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isPlaying) {
      interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            setCurrentDemo((prevDemo) => (prevDemo + 1) % demos.length);
            return 0;
          }
          return prev + 2;
        });
      }, 100);
    }
    return () => clearInterval(interval);
  }, [isPlaying, demos.length]);

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleReset = () => {
    setIsPlaying(false);
    setProgress(0);
    setCurrentDemo(0);
  };

  const handleDemoSelect = (index: number) => {
    setCurrentDemo(index);
    setProgress(0);
    setIsPlaying(false);
  };

  const currentDemoData = demos[currentDemo];

  return (
    <div className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Interactive Technology Demo
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Experience our cutting-edge technologies in action. Watch real-time demonstrations 
            of AI optimization, quantum computing, and advanced cybersecurity solutions.
          </p>
        </motion.div>

        {/* Demo Controls */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Demo Selector */}
          <div className="lg:w-1/3">
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-white mb-4">Choose Demo</h3>
              <div className="space-y-3">
                {demos.map((demo, index) => (
                  <button
                    key={demo.id}
                    onClick={() => handleDemoSelect(index)}
                    className={`w-full p-4 rounded-lg border transition-all duration-300 text-left ${
                      currentDemo === index
                        ? 'border-cyan-500 bg-cyan-500/10'
                        : 'border-gray-600 hover:border-gray-500'
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <div className={`w-10 h-10 bg-gradient-to-r ${demo.color} rounded-lg flex items-center justify-center`}>
                        <demo.icon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <div className="text-white font-medium">{demo.title}</div>
                        <div className="text-gray-400 text-sm">{demo.description}</div>
                      </div>
                    </div>
                  </button>
                ))}
              </div>

              {/* Controls */}
              <div className="mt-6 pt-6 border-t border-gray-700">
                <div className="flex items-center space-x-3 mb-4">
                  <button
                    onClick={handlePlayPause}
                    className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300"
                  >
                    {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
                  </button>
                  <button
                    onClick={handleReset}
                    className="flex items-center justify-center w-12 h-12 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-all duration-300"
                  >
                    <RotateCcw className="w-5 h-5" />
                  </button>
                </div>

                {/* Progress Bar */}
                <div className="mb-4">
                  <div className="flex justify-between text-sm text-gray-400 mb-2">
                    <span>Progress</span>
                    <span>{progress}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <motion.div
                      className="bg-gradient-to-r from-cyan-500 to-blue-600 h-2 rounded-full"
                      style={{ width: `${progress}%` }}
                      transition={{ duration: 0.1 }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Demo Display */}
          <div className="lg:w-2/3">
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentDemo}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5 }}
                  className="text-center"
                >
                  {/* Demo Icon */}
                  <div className={`w-24 h-24 bg-gradient-to-r ${currentDemoData.color} rounded-full flex items-center justify-center mx-auto mb-6`}>
                    <motion.div
                      animate={isPlaying ? {
                        scale: [1, 1.1, 1],
                        rotate: currentDemoData.animation === 'spin' ? [0, 360] : 0
                      } : {}}
                      transition={{ duration: 2, repeat: isPlaying ? Infinity : 0 }}
                    >
                      <currentDemoData.icon className="w-12 h-12 text-white" />
                    </motion.div>
                  </div>

                  {/* Demo Title */}
                  <h3 className="text-2xl font-bold text-white mb-4">
                    {currentDemoData.title}
                  </h3>

                  {/* Demo Description */}
                  <p className="text-gray-300 mb-8 max-w-md mx-auto">
                    {currentDemoData.description}
                  </p>

                  {/* Metrics */}
                  <div className="grid grid-cols-3 gap-6">
                    {currentDemoData.metrics.map((metric, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        className="text-center"
                      >
                        <div className={`text-3xl font-bold ${metric.color} mb-2`}>
                          {isPlaying ? (
                            <motion.span
                              initial={{ scale: 0.8 }}
                              animate={{ scale: 1 }}
                              transition={{ duration: 0.5 }}
                            >
                              {metric.value}
                            </motion.span>
                          ) : (
                            metric.value
                          )}
                          {metric.suffix}
                        </div>
                        <div className="text-gray-400 text-sm">{metric.label}</div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Animation Visualization */}
                  <div className="mt-8">
                    <div className={`w-full h-32 bg-gradient-to-r ${currentDemoData.bgColor} border border-gray-600 rounded-lg flex items-center justify-center`}>
                      <motion.div
                        animate={isPlaying ? {
                          x: [0, 100, 0],
                          y: [0, -20, 0],
                          rotate: [0, 180, 360]
                        } : {}}
                        transition={{ duration: 3, repeat: isPlaying ? Infinity : 0 }}
                        className="w-8 h-8 bg-gradient-to-r from-white to-gray-200 rounded-full"
                      />
                    </div>
                    <p className="text-gray-400 text-sm mt-2">Real-time simulation in progress</p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/20 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Experience These Technologies?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              These interactive demos showcase just a fraction of our capabilities. 
              Schedule a personalized demonstration to see how these technologies can transform your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/demo" 
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 font-semibold"
              >
                Schedule Live Demo
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
              <Link 
                to="/services" 
                className="inline-flex items-center px-8 py-4 border border-cyan-400 text-cyan-400 rounded-lg hover:bg-cyan-400/10 transition-all duration-300 font-semibold"
              >
                Explore All Services
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export { InteractiveTechDemo };
export default InteractiveTechDemo;