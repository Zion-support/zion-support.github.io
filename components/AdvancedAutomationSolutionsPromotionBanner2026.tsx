import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Bot, 
  Cpu, 
  Zap, 
  Settings, 
  Workflow, 
  Target, 
  BarChart3,
  ArrowRight, 
  Star, 
  Clock,
  TrendingUp,
  Rocket,
  Award,
  CheckCircle,
  Brain,
  Database,
  Network,
  Shield,
  Globe,
  Users
} from 'lucide-react';

const AdvancedAutomationSolutionsPromotionBanner2026: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentSolution, setCurrentSolution] = useState(0);

  const solutions = [
    {
      title: 'Intelligent Process Automation',
      description: '85% efficiency increase',
      icon: <Bot className="w-8 h-8" />,
      color: 'from-blue-600 to-cyan-600'
    },
    {
      title: 'Autonomous Decision Systems',
      description: '99.9% decision accuracy',
      icon: <Brain className="w-8 h-8" />,
      color: 'from-purple-600 to-pink-600'
    },
    {
      title: 'Predictive Maintenance AI',
      description: '90% reduction in downtime',
      icon: <Settings className="w-8 h-8" />,
      color: 'from-green-600 to-emerald-600'
    },
    {
      title: 'Smart Resource Management',
      description: '60% cost reduction',
      icon: <Target className="w-8 h-8" />,
      color: 'from-orange-600 to-red-600'
    }
  ];

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 200);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSolution((prev) => (prev + 1) % solutions.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const stats = [
    { number: '95%', label: 'Process Automation' },
    { number: '99.9%', label: 'Accuracy Rate' },
    { number: '1000x', label: 'Speed Increase' },
    { number: '60%', label: 'Cost Reduction' }
  ];

  if (!isVisible) return null;

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="relative overflow-hidden bg-gradient-to-r from-green-900 via-blue-900 to-indigo-900 py-16"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-green-600/10 to-blue-600/10"></div>
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-green-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-green-600 to-blue-600 text-white text-sm font-semibold mb-6"
          >
            <Bot className="w-5 h-5 mr-2" />
            🤖 NEW: Advanced Automation Solutions 2026
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6"
          >
            The Future of{' '}
            <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
              Business Automation
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="text-xl text-gray-300 max-w-4xl mx-auto mb-8"
          >
            Transform your business with cutting-edge automation solutions that deliver unprecedented efficiency, 
            accuracy, and cost savings. The future of work is automated.
          </motion.p>

          {/* Animated Solution Display */}
          <motion.div
            key={currentSolution}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center px-8 py-4 rounded-2xl bg-gradient-to-r from-green-600/20 to-blue-600/20 backdrop-blur-sm border border-green-400/30 mb-8"
          >
            <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${solutions[currentSolution].color} flex items-center justify-center mr-4`}>
              {solutions[currentSolution].icon}
            </div>
            <div className="text-left">
              <div className="text-xl font-bold text-white">{solutions[currentSolution].title}</div>
              <div className="text-gray-300 text-sm">{solutions[currentSolution].description}</div>
            </div>
          </motion.div>
        </div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.9 + index * 0.1, duration: 0.5 }}
              className="text-center bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-green-400/50 transition-all duration-300"
            >
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                {stat.number}
              </div>
              <div className="text-gray-300 text-sm">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Key Features */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.6 }}
          className="grid md:grid-cols-4 gap-6 mb-12"
        >
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1 + index * 0.1, duration: 0.5 }}
              className="text-center bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-green-400/50 transition-all duration-300"
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${solution.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                {solution.icon}
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{solution.title}</h3>
              <p className="text-gray-300 text-sm">{solution.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-green-600/20 to-blue-600/20 backdrop-blur-sm rounded-2xl p-8 border border-green-400/30">
            <h3 className="text-2xl font-bold text-white mb-4">
              🤖 Automate Your Success
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Join thousands of businesses already transforming their operations with our 
              advanced automation solutions. Start your automation journey today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-green-600 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-green-700 hover:to-blue-700 transition-all duration-300 flex items-center justify-center shadow-lg"
              >
                <Rocket className="w-5 h-5 mr-2" />
                Start Automation Journey
                <ArrowRight className="w-5 h-5 ml-2" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border border-gray-400 text-gray-300 px-8 py-4 rounded-lg font-semibold hover:bg-gray-800 transition-all duration-300 flex items-center justify-center"
              >
                <Award className="w-5 h-5 mr-2" />
                View Case Studies
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.6 }}
          className="mt-12 text-center"
        >
          <div className="flex flex-wrap justify-center items-center gap-8 text-gray-400">
            <div className="flex items-center">
              <CheckCircle className="w-5 h-5 mr-2 text-green-400" />
              <span>Trusted by 10,000+ Companies</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-5 h-5 mr-2 text-green-400" />
              <span>Proven ROI Results</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-5 h-5 mr-2 text-green-400" />
              <span>24/7 Support & Monitoring</span>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default AdvancedAutomationSolutionsPromotionBanner2026;