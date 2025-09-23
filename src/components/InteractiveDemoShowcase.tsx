import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Play, 
  Pause, 
  RotateCcw, 
  Settings, 
  Code, 
  Database, 
  Brain, 
  Shield, 
  Cloud, 
  Zap,
  CheckCircle,
  X,
  ArrowRight,
  Download,
  ExternalLink,
  Eye,
  Star,
  Users,
  TrendingUp,
  Target,
  Lightbulb,
  Rocket
} from 'lucide-react';

const InteractiveDemoShowcase: React.FC = () => {
  const [activeDemo, setActiveDemo] = useState('ai-autonomous');
  const [isPlaying, setIsPlaying] = useState(false);
  const [demoProgress, setDemoProgress] = useState(0);

  const demos = [
    {
      id: 'ai-autonomous',
      title: 'AI Autonomous Business Manager',
      description: 'Experience how our AI system autonomously manages business operations in real-time.',
      icon: Brain,
      color: 'from-purple-500 to-pink-500',
      bgColor: 'bg-purple-50',
      steps: [
        'Analyzing market conditions...',
        'Optimizing resource allocation...',
        'Making strategic decisions...',
        'Implementing automation workflows...',
        'Monitoring performance metrics...'
      ],
      metrics: {
        efficiency: '+85%',
        costSavings: '$2.4M',
        uptime: '99.9%',
        satisfaction: '98%'
      },
      featured: true
    },
    {
      id: 'cybersecurity',
      title: 'Advanced Cybersecurity Suite',
      description: 'See how our AI-powered security system detects and prevents threats in real-time.',
      icon: Shield,
      color: 'from-red-500 to-orange-500',
      bgColor: 'bg-red-50',
      steps: [
        'Scanning network for threats...',
        'Analyzing behavioral patterns...',
        'Detecting anomaly in traffic...',
        'Implementing security protocols...',
        'Blocking malicious activity...'
      ],
      metrics: {
        threatsBlocked: '99.7%',
        responseTime: '<2s',
        falsePositives: '<0.1%',
        compliance: '100%'
      },
      featured: true
    },
    {
      id: 'cloud-orchestration',
      title: 'Multi-Cloud Orchestration',
      description: 'Watch our platform seamlessly manage workloads across multiple cloud providers.',
      icon: Cloud,
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-50',
      steps: [
        'Analyzing workload requirements...',
        'Selecting optimal cloud provider...',
        'Deploying resources...',
        'Monitoring performance...',
        'Auto-scaling based on demand...'
      ],
      metrics: {
        costOptimization: '45%',
        performance: '+60%',
        reliability: '99.99%',
        scalability: 'Unlimited'
      }
    },
    {
      id: 'quantum-encryption',
      title: 'Quantum Encryption Demo',
      description: 'Experience unbreakable quantum encryption protecting your sensitive data.',
      icon: Zap,
      color: 'from-green-500 to-emerald-500',
      bgColor: 'bg-green-50',
      steps: [
        'Generating quantum keys...',
        'Establishing secure channel...',
        'Encrypting data packets...',
        'Transmitting secure data...',
        'Verifying quantum integrity...'
      ],
      metrics: {
        securityLevel: 'Unbreakable',
        keyGeneration: '<1ms',
        transmissionSpeed: '10Gbps',
        futureProof: 'Yes'
      },
      new: true
    }
  ];

  const currentDemo = demos.find(demo => demo.id === activeDemo);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (isPlaying && currentDemo) {
      interval = setInterval(() => {
        setDemoProgress(prev => {
          if (prev >= 100) {
            setIsPlaying(false);
            return 100;
          }
          return prev + 2;
        });
      }, 100);
    }
    
    return () => clearInterval(interval);
  }, [isPlaying, currentDemo]);

  const handlePlay = () => {
    setIsPlaying(true);
    if (demoProgress >= 100) {
      setDemoProgress(0);
    }
  };

  const handlePause = () => {
    setIsPlaying(false);
  };

  const handleReset = () => {
    setIsPlaying(false);
    setDemoProgress(0);
  };

  const getCurrentStep = () => {
    if (!currentDemo) return 0;
    const stepIndex = Math.floor((demoProgress / 100) * currentDemo.steps.length);
    return Math.min(stepIndex, currentDemo.steps.length - 1);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center mb-6">
            <div className="flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full">
              <Play className="w-5 h-5" />
              <span className="font-semibold">Interactive Demos</span>
            </div>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent mb-6">
            Experience Our Technology
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            See our cutting-edge solutions in action. Try our interactive demos to understand how our technology can transform your business.
          </p>
        </motion.div>

        {/* Demo Selector */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
        >
          {demos.map((demo, index) => {
            const Icon = demo.icon;
            const isActive = activeDemo === demo.id;
            
            return (
              <motion.div
                key={demo.id}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                onClick={() => setActiveDemo(demo.id)}
                className={`
                  relative cursor-pointer rounded-2xl p-6 transition-all duration-300
                  ${isActive 
                    ? `bg-gradient-to-r ${demo.color} text-white shadow-xl` 
                    : `bg-white text-gray-700 hover:shadow-lg border-2 border-gray-200`
                  }
                `}
              >
                {demo.featured && (
                  <div className="absolute -top-2 -right-2">
                    <div className="bg-yellow-400 text-yellow-900 px-2 py-1 rounded-full text-xs font-semibold flex items-center">
                      <Star className="w-3 h-3 mr-1" />
                      Featured
                    </div>
                  </div>
                )}
                {demo.new && (
                  <div className="absolute -top-2 -left-2">
                    <div className="bg-green-400 text-green-900 px-2 py-1 rounded-full text-xs font-semibold">
                      New
                    </div>
                  </div>
                )}
                
                <div className="flex items-center space-x-3 mb-3">
                  <Icon className="w-6 h-6" />
                  <h3 className="font-bold text-lg">{demo.title}</h3>
                </div>
                
                <p className="text-sm opacity-90 line-clamp-2">{demo.description}</p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Demo Interface */}
        {currentDemo && (
          <motion.div
            key={activeDemo}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl shadow-2xl overflow-hidden"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Demo Panel */}
              <div className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-3">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${currentDemo.color} flex items-center justify-center`}>
                      {React.createElement(currentDemo.icon, { className: "w-6 h-6 text-white" })}
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900">{currentDemo.title}</h2>
                      <p className="text-gray-600">{currentDemo.description}</p>
                    </div>
                  </div>
                </div>

                {/* Demo Visualization */}
                <div className={`h-64 rounded-xl ${currentDemo.bgColor} mb-6 flex items-center justify-center relative overflow-hidden`}>
                  <div className="text-center">
                    {isPlaying ? (
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                        className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full mx-auto mb-4"
                      />
                    ) : (
                      <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Play className="w-8 h-8 text-white ml-1" />
                      </div>
                    )}
                    <p className="text-lg font-semibold text-gray-700">
                      {isPlaying ? 'Processing...' : 'Ready to Demo'}
                    </p>
                  </div>

                  {/* Progress Bar */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="bg-white bg-opacity-50 rounded-full h-2">
                      <motion.div
                        className={`h-2 bg-gradient-to-r ${currentDemo.color} rounded-full`}
                        style={{ width: `${demoProgress}%` }}
                        transition={{ duration: 0.1 }}
                      />
                    </div>
                  </div>
                </div>

                {/* Demo Controls */}
                <div className="flex items-center justify-center space-x-4 mb-6">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={isPlaying ? handlePause : handlePlay}
                    className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                      isPlaying 
                        ? 'bg-red-500 hover:bg-red-600 text-white' 
                        : `bg-gradient-to-r ${currentDemo.color} text-white hover:shadow-lg`
                    }`}
                  >
                    {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
                    <span>{isPlaying ? 'Pause' : 'Play'} Demo</span>
                  </motion.button>
                  
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleReset}
                    className="flex items-center space-x-2 px-6 py-3 rounded-xl font-semibold bg-gray-500 hover:bg-gray-600 text-white transition-all duration-300"
                  >
                    <RotateCcw className="w-5 h-5" />
                    <span>Reset</span>
                  </motion.button>
                </div>

                {/* Demo Steps */}
                <div className="space-y-3">
                  <h3 className="font-semibold text-gray-900 mb-3">Demo Progress:</h3>
                  {currentDemo.steps.map((step, index) => {
                    const isCompleted = index <= getCurrentStep();
                    const isCurrent = index === getCurrentStep() && isPlaying;
                    
                    return (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className={`flex items-center space-x-3 p-3 rounded-lg transition-all duration-300 ${
                          isCompleted ? 'bg-green-50 border border-green-200' : 'bg-gray-50'
                        } ${isCurrent ? 'ring-2 ring-blue-500 ring-opacity-50' : ''}`}
                      >
                        <div className={`w-6 h-6 rounded-full flex items-center justify-center ${
                          isCompleted ? 'bg-green-500' : 'bg-gray-300'
                        }`}>
                          {isCompleted ? (
                            <CheckCircle className="w-4 h-4 text-white" />
                          ) : (
                            <span className="text-xs font-semibold text-white">{index + 1}</span>
                          )}
                        </div>
                        <span className={`text-sm ${isCompleted ? 'text-green-800 font-semibold' : 'text-gray-600'}`}>
                          {step}
                        </span>
                        {isCurrent && (
                          <motion.div
                            animate={{ opacity: [0, 1, 0] }}
                            transition={{ duration: 1, repeat: Infinity }}
                            className="w-2 h-2 bg-blue-500 rounded-full"
                          />
                        )}
                      </motion.div>
                    );
                  })}
                </div>
              </div>

              {/* Metrics Panel */}
              <div className="p-8 bg-gradient-to-br from-gray-50 to-gray-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Performance Metrics</h3>
                
                <div className="grid grid-cols-2 gap-6 mb-8">
                  {Object.entries(currentDemo.metrics).map(([key, value], index) => (
                    <motion.div
                      key={key}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 }}
                      className="bg-white rounded-xl p-6 shadow-lg"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-semibold text-gray-700 capitalize">
                          {key.replace(/([A-Z])/g, ' $1').trim()}
                        </h4>
                        <TrendingUp className="w-5 h-5 text-green-500" />
                      </div>
                      <p className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                        {value}
                      </p>
                    </motion.div>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="space-y-4">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    className="w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white py-3 rounded-xl font-semibold"
                  >
                    <span>Try Live Demo</span>
                    <ExternalLink className="w-4 h-4" />
                  </motion.button>
                  
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    className="w-full flex items-center justify-center space-x-2 bg-white border-2 border-gray-300 text-gray-700 py-3 rounded-xl font-semibold hover:border-gray-400"
                  >
                    <Download className="w-4 h-4" />
                    <span>Download Case Study</span>
                  </motion.button>
                  
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    className="w-full flex items-center justify-center space-x-2 bg-white border-2 border-gray-300 text-gray-700 py-3 rounded-xl font-semibold hover:border-gray-400"
                  >
                    <Users className="w-4 h-4" />
                    <span>Schedule Consultation</span>
                  </motion.button>
                </div>

                {/* Additional Info */}
                <div className="mt-8 p-4 bg-blue-50 rounded-xl">
                  <div className="flex items-center space-x-2 mb-2">
                    <Lightbulb className="w-5 h-5 text-blue-600" />
                    <h4 className="font-semibold text-blue-900">Did You Know?</h4>
                  </div>
                  <p className="text-sm text-blue-800">
                    Our {currentDemo.title.toLowerCase()} has helped over 500+ businesses achieve remarkable results. 
                    Experience the same transformation with our comprehensive solution.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to See More?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              These demos show just a glimpse of what our technology can do. 
              Schedule a personalized demo to see how we can transform your specific business needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-50 transition-colors flex items-center justify-center space-x-2"
              >
                <span>Schedule Full Demo</span>
                <ArrowRight className="w-5 h-5" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                Contact Sales Team
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default InteractiveDemoShowcase;