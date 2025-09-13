import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Cpu, 
  Zap, 
  Users, 
  TrendingUp, 
  Target, 
  CheckCircle,
  ArrowRight,
  Star,
  Clock,
  Award,
  Lightbulb,
  Shield,
  Database,
  Globe,
  Rocket,
  Play,
  Download,
  ExternalLink,
  BarChart3,
  PieChart,
  Activity
} from 'lucide-react';

const AdvancedAutomationSolutionsPromotionBanner2025: React.FC = () => {
  const [currentStat, setCurrentStat] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStat((prev) => (prev + 1) % stats.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const stats = [
    { value: '2,500%', label: 'Average ROI Increase', icon: TrendingUp, color: 'from-green-500 to-emerald-600' },
    { value: '99.9%', label: 'Process Accuracy', icon: Target, color: 'from-blue-500 to-cyan-600' },
    { value: '90%', label: 'Cost Reduction', icon: BarChart3, color: 'from-purple-500 to-pink-600' },
    { value: '24/7', label: 'Autonomous Operations', icon: Clock, color: 'from-orange-500 to-red-600' }
  ];

  const features = [
    {
      icon: Cpu,
      title: 'Intelligent Process Automation',
      description: 'AI-powered automation that learns and adapts to your business processes',
      benefits: ['Self-evolving systems', 'Continuous optimization', 'Zero human intervention']
    },
    {
      icon: Users,
      title: 'Autonomous Business Operations',
      description: 'Complete business processes running autonomously with minimal oversight',
      benefits: ['24/7 operations', 'Scalable solutions', 'Real-time monitoring']
    },
    {
      icon: Database,
      title: 'Smart Resource Management',
      description: 'AI-powered resource allocation and optimization across all functions',
      benefits: ['Optimal allocation', 'Cost optimization', 'Performance tracking']
    },
    {
      icon: Shield,
      title: 'Predictive Maintenance AI',
      description: 'AI that predicts and prevents equipment failures before they occur',
      benefits: ['99.9% uptime', 'Predictive alerts', 'Maintenance optimization']
    }
  ];

  const successMetrics = [
    { metric: 'Process Efficiency', value: '300%', improvement: '+200%' },
    { metric: 'Cost Savings', value: '$2.5M', improvement: 'Annually' },
    { metric: 'Error Reduction', value: '95%', improvement: '-95%' },
    { metric: 'Time Savings', value: '80%', improvement: '+80%' }
  ];

  const currentStatData = stats[currentStat];

  if (!isVisible) return null;

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-green-900 to-slate-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-green-600/10 to-emerald-600/10"></div>
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-10 w-96 h-96 bg-green-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-emerald-500/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-600 to-emerald-600 text-white px-6 py-2 rounded-full text-sm font-semibold mb-6">
            <Cpu className="w-4 h-4" />
            ADVANCED AUTOMATION SOLUTIONS 2025
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Revolutionary Automation Solutions
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 mb-4">
            Transform your business with intelligent automation that delivers unprecedented results
          </p>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Experience the power of self-evolving automation systems that learn, adapt, and optimize your business processes 24/7
          </p>
        </motion.div>

        {/* Dynamic Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            const isActive = index === currentStat;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ 
                  opacity: isActive ? 1 : 0.7, 
                  scale: isActive ? 1.05 : 1 
                }}
                transition={{ duration: 0.5 }}
                className={`relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center transition-all duration-500 ${
                  isActive ? 'bg-white/10 border-green-500/50 shadow-lg shadow-green-500/25' : ''
                }`}
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${stat.color} flex items-center justify-center mx-auto mb-4 ${
                  isActive ? 'scale-110' : ''
                } transition-transform duration-500`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <div className={`text-3xl md:text-4xl font-bold mb-2 transition-colors duration-500 ${
                  isActive ? 'text-green-400' : 'text-white'
                }`}>
                  {stat.value}
                </div>
                <div className="text-gray-300 text-sm font-semibold">
                  {stat.label}
                </div>
                {isActive && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center"
                  >
                    <Star className="w-3 h-3 text-white" />
                  </motion.div>
                )}
              </motion.div>
            );
          })}
        </motion.div>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative"
              >
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 h-full hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-green-500/20">
                  {/* Icon */}
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-green-500 to-emerald-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-green-300 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                    {feature.description}
                  </p>

                  {/* Benefits */}
                  <div className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                        <span className="text-gray-300 text-xs">{benefit}</span>
                      </div>
                    ))}
                  </div>

                  {/* Hover Effect */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-green-600/0 to-emerald-600/0 group-hover:from-green-600/5 group-hover:to-emerald-600/5 transition-all duration-300"></div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Success Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-gradient-to-r from-green-600/20 to-emerald-600/20 backdrop-blur-sm border border-white/20 rounded-2xl p-8 mb-16"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Proven Results
            </h3>
            <p className="text-gray-300 text-lg">
              Real metrics from companies using our automation solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {successMetrics.map((metric, index) => (
              <motion.div
                key={metric.metric}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-green-400 mb-2">
                  {metric.value}
                </div>
                <div className="text-white font-semibold mb-1">
                  {metric.metric}
                </div>
                <div className="text-green-300 text-sm">
                  {metric.improvement}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Interactive Demo Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16"
        >
          <div>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
              See Automation in Action
            </h3>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              Watch our interactive demo to see how our automation solutions can transform your business processes in real-time.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span className="text-gray-300">Real-time process monitoring</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span className="text-gray-300">Automated decision making</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span className="text-gray-300">Self-optimizing workflows</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="inline-flex items-center gap-2 bg-gradient-to-r from-green-600 to-emerald-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-green-700 hover:to-emerald-700 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-green-500/25">
                <Play className="w-5 h-5" />
                Watch Demo
              </button>
              <Link
                to="/automation-solutions"
                className="inline-flex items-center gap-2 bg-white/10 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/20 transition-all duration-300 hover:scale-105"
              >
                <ExternalLink className="w-5 h-5" />
                Learn More
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-green-500/20 to-emerald-600/20 rounded-2xl p-8 backdrop-blur-sm border border-white/10">
              <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl mb-6 flex items-center justify-center">
                <div className="text-center">
                  <Activity className="w-24 h-24 text-green-400 mx-auto mb-4 animate-pulse" />
                  <div className="text-white text-xl font-semibold">Interactive Demo</div>
                  <div className="text-gray-400 text-sm">Click play to start</div>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Process Efficiency</span>
                  <div className="flex items-center gap-2">
                    <div className="w-32 h-2 bg-gray-700 rounded-full overflow-hidden">
                      <div className="w-4/5 h-full bg-gradient-to-r from-green-500 to-emerald-600 rounded-full"></div>
                    </div>
                    <span className="text-green-400 font-semibold">85%</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Cost Savings</span>
                  <div className="flex items-center gap-2">
                    <div className="w-32 h-2 bg-gray-700 rounded-full overflow-hidden">
                      <div className="w-3/4 h-full bg-gradient-to-r from-green-500 to-emerald-600 rounded-full"></div>
                    </div>
                    <span className="text-green-400 font-semibold">72%</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Error Reduction</span>
                  <div className="flex items-center gap-2">
                    <div className="w-32 h-2 bg-gray-700 rounded-full overflow-hidden">
                      <div className="w-full h-full bg-gradient-to-r from-green-500 to-emerald-600 rounded-full"></div>
                    </div>
                    <span className="text-green-400 font-semibold">95%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-green-600/20 to-emerald-600/20 backdrop-blur-sm border border-white/20 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Ready to Automate Your Business?
            </h3>
            <p className="text-gray-300 mb-8 text-lg">
              Join thousands of companies already experiencing the revolutionary power of intelligent automation
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-green-600 to-emerald-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-green-700 hover:to-emerald-700 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-green-500/25"
              >
                Get Started Today
                <Rocket className="w-5 h-5" />
              </Link>
              <Link
                to="/automation-case-studies"
                className="inline-flex items-center gap-2 bg-white/10 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/20 transition-all duration-300 hover:scale-105"
              >
                <Download className="w-5 h-5" />
                Download Case Study
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AdvancedAutomationSolutionsPromotionBanner2025;