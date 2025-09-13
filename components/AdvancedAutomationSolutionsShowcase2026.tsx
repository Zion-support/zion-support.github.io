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
  TrendingUp,
  Users,
  Clock,
  CheckCircle,
  ArrowRight,
  Star,
  Award,
  Rocket,
  Brain,
  Database,
  Network,
  Shield,
  Globe
} from 'lucide-react';

const AdvancedAutomationSolutionsShowcase2026: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSolution, setActiveSolution] = useState(0);

  const solutions = [
    {
      title: 'Intelligent Process Automation',
      description: 'AI-powered automation that learns and adapts to optimize business processes',
      features: ['Self-learning algorithms', 'Process optimization', 'Real-time adaptation', 'Error reduction'],
      impact: '85% efficiency increase',
      icon: <Bot className="w-12 h-12" />,
      color: 'from-blue-600 to-cyan-600'
    },
    {
      title: 'Autonomous Decision Systems',
      description: 'AI systems that make complex decisions without human intervention',
      features: ['Real-time decision making', 'Risk assessment', 'Strategic planning', 'Performance monitoring'],
      impact: '99.9% decision accuracy',
      icon: <Brain className="w-12 h-12" />,
      color: 'from-purple-600 to-pink-600'
    },
    {
      title: 'Predictive Maintenance AI',
      description: 'Predict and prevent equipment failures before they occur',
      features: ['Failure prediction', 'Maintenance scheduling', 'Cost optimization', 'Uptime maximization'],
      impact: '90% reduction in downtime',
      icon: <Settings className="w-12 h-12" />,
      color: 'from-green-600 to-emerald-600'
    },
    {
      title: 'Smart Resource Management',
      description: 'Optimize resource allocation across all business operations',
      features: ['Resource optimization', 'Cost reduction', 'Capacity planning', 'Performance tracking'],
      impact: '60% cost reduction',
      icon: <Target className="w-12 h-12" />,
      color: 'from-orange-600 to-red-600'
    }
  ];

  const benefits = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Lightning Fast',
      description: 'Process tasks 1000x faster than traditional methods'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Error-Free',
      description: 'Achieve 99.9% accuracy in automated processes'
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: 'Scalable',
      description: 'Scale operations without proportional cost increases'
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: '24/7 Operations',
      description: 'Run continuously without breaks or downtime'
    }
  ];

  const industries = [
    { name: 'Manufacturing', automation: '95%', savings: '$2.5M' },
    { name: 'Healthcare', automation: '88%', savings: '$1.8M' },
    { name: 'Finance', automation: '92%', savings: '$3.2M' },
    { name: 'Retail', automation: '85%', savings: '$1.5M' },
    { name: 'Logistics', automation: '90%', savings: '$2.1M' },
    { name: 'Energy', automation: '87%', savings: '$2.8M' }
  ];

  const stats = [
    { number: '95%', label: 'Process Automation' },
    { number: '99.9%', label: 'Accuracy Rate' },
    { number: '1000x', label: 'Speed Increase' },
    { number: '60%', label: 'Cost Reduction' }
  ];

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSolution((prev) => (prev + 1) % solutions.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  if (!isVisible) return null;

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="py-20 bg-gradient-to-br from-slate-900 via-green-900 to-slate-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-green-600 to-blue-600 text-white text-sm font-semibold mb-6"
          >
            <Bot className="w-5 h-5 mr-2" />
            Advanced Automation Solutions 2026
          </motion.div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            The Future of{' '}
            <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
              Business Automation
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            Transform your business with cutting-edge automation solutions that deliver unprecedented efficiency, 
            accuracy, and cost savings. The future of work is automated.
          </p>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
        >
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                {stat.number}
              </div>
              <div className="text-gray-300 text-sm">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Featured Solution */}
        <motion.div
          key={activeSolution}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 mb-16 border border-gray-700/50"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-r ${solutions[activeSolution].color} mb-6`}>
                {solutions[activeSolution].icon}
              </div>
              <h3 className="text-3xl font-bold text-white mb-4">
                {solutions[activeSolution].title}
              </h3>
              <p className="text-gray-300 text-lg mb-6">
                {solutions[activeSolution].description}
              </p>
              <div className="bg-gradient-to-r from-green-600/20 to-blue-600/20 rounded-lg p-4 mb-6">
                <div className="text-2xl font-bold text-white mb-2">
                  {solutions[activeSolution].impact}
                </div>
                <div className="text-gray-300 text-sm">
                  Average Performance Impact
                </div>
              </div>
            </div>
            <div>
              <h4 className="text-xl font-semibold text-white mb-4">Key Features</h4>
              <div className="grid grid-cols-1 gap-3">
                {solutions[activeSolution].features.map((feature, index) => (
                  <div key={index} className="bg-gray-700/50 rounded-lg p-3 flex items-center">
                    <CheckCircle className="w-5 h-5 mr-3 text-green-400" />
                    <span className="text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* All Solutions Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + index * 0.1, duration: 0.6 }}
              className={`bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-green-400/50 transition-all duration-300 cursor-pointer ${
                activeSolution === index ? 'ring-2 ring-green-400' : ''
              }`}
              onClick={() => setActiveSolution(index)}
            >
              <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-r ${solution.color} mb-4`}>
                {solution.icon}
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">
                {solution.title}
              </h4>
              <p className="text-gray-300 text-sm mb-4">
                {solution.description}
              </p>
              <div className="text-green-400 text-sm font-semibold">
                {solution.impact}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Industry Impact */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 mb-16"
        >
          <h3 className="text-2xl font-bold text-white text-center mb-8">
            Industry Impact & Results
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry, index) => (
              <div key={index} className="bg-gray-700/50 rounded-lg p-6 text-center">
                <h4 className="text-lg font-semibold text-white mb-4">{industry.name}</h4>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Automation:</span>
                    <span className="text-green-400 font-semibold">{industry.automation}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Annual Savings:</span>
                    <span className="text-blue-400 font-semibold">{industry.savings}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Benefits */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0 + index * 0.1, duration: 0.6 }}
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-gray-700/50 transition-all duration-300"
            >
              <div className="text-green-400 mb-4 flex justify-center">
                {benefit.icon}
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">
                {benefit.title}
              </h4>
              <p className="text-gray-300 text-sm">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="text-center bg-gradient-to-r from-green-600/20 to-blue-600/20 rounded-2xl p-8"
        >
          <h3 className="text-2xl font-bold text-white mb-4">
            Ready to Automate Your Future?
          </h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Join thousands of businesses already transforming their operations with our 
            advanced automation solutions. Start your automation journey today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-green-600 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-green-700 hover:to-blue-700 transition-all duration-300 flex items-center justify-center">
              <Rocket className="w-5 h-5 mr-2" />
              Start Automation Journey
            </button>
            <button className="border border-gray-400 text-gray-300 px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-all duration-300 flex items-center justify-center">
              <Award className="w-5 h-5 mr-2" />
              View Case Studies
            </button>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default AdvancedAutomationSolutionsShowcase2026;