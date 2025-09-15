import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Brain, 
  Zap, 
  Shield, 
  Globe, 
  Rocket, 
  Cpu, 
  Database, 
  Cloud, 
  Lock, 
  Target,
  TrendingUp,
  Users,
  CheckCircle,
  ArrowRight,
  Star,
  Play,
  Award,
  Gauge,
  Sparkles,
  BarChart3,
  Settings,
  Workflow,
  Bot,
  Eye,
  Lightbulb,
  Layers,
  Network,
  MessageSquare
} from 'lucide-react';

const AdvancedAITransformation2025: React.FC = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features = [
    {
      icon: Brain,
      title: 'Autonomous AI Agents',
      description: 'Self-learning AI systems that operate independently and make intelligent decisions',
      color: 'from-purple-500 to-pink-500',
      benefits: ['24/7 Operation', 'Self-Healing Systems', 'Predictive Maintenance']
    },
    {
      icon: Workflow,
      title: 'Intelligent Process Automation',
      description: 'AI-driven workflow optimization that adapts to your business processes',
      color: 'from-blue-500 to-cyan-500',
      benefits: ['90% Efficiency Gain', 'Zero Manual Errors', 'Real-time Optimization']
    },
    {
      icon: Bot,
      title: 'Conversational AI',
      description: 'Advanced chatbots and virtual assistants with human-like understanding',
      color: 'from-green-500 to-emerald-500',
      benefits: ['Natural Language Processing', 'Multi-language Support', 'Context Awareness']
    },
    {
      icon: BarChart3,
      title: 'Predictive Analytics',
      description: 'AI-powered forecasting and business intelligence for strategic decisions',
      color: 'from-orange-500 to-red-500',
      benefits: ['95% Accuracy', 'Real-time Insights', 'Automated Reporting']
    },
    {
      icon: Eye,
      title: 'Computer Vision',
      description: 'Advanced image and video analysis for quality control and automation',
      color: 'from-indigo-500 to-purple-500',
      benefits: ['Quality Assurance', 'Object Recognition', 'Automated Inspection']
    },
    {
      icon: Network,
      title: 'Neural Networks',
      description: 'Deep learning models that mimic human brain functions for complex tasks',
      color: 'from-teal-500 to-blue-500',
      benefits: ['Pattern Recognition', 'Complex Problem Solving', 'Continuous Learning']
    }
  ];

  const transformationStages = [
    {
      stage: 'Assessment',
      title: 'AI Readiness Evaluation',
      description: 'Comprehensive analysis of your current infrastructure and AI potential',
      duration: '2-3 weeks',
      deliverables: ['AI Maturity Report', 'ROI Projections', 'Implementation Roadmap']
    },
    {
      stage: 'Strategy',
      title: 'AI Strategy Development',
      description: 'Custom AI strategy aligned with your business objectives',
      duration: '3-4 weeks',
      deliverables: ['AI Strategy Document', 'Technology Stack', 'Change Management Plan']
    },
    {
      stage: 'Implementation',
      title: 'AI Solution Deployment',
      description: 'Phased implementation of AI solutions with continuous monitoring',
      duration: '8-12 weeks',
      deliverables: ['AI Systems', 'Integration', 'Performance Monitoring']
    },
    {
      stage: 'Optimization',
      title: 'Continuous Improvement',
      description: 'Ongoing optimization and scaling of AI capabilities',
      duration: 'Ongoing',
      deliverables: ['Performance Reports', 'Enhancement Updates', 'Training Programs']
    }
  ];

  const successMetrics = [
    { metric: '300%', label: 'Productivity Increase', icon: TrendingUp },
    { metric: '85%', label: 'Cost Reduction', icon: DollarSign },
    { metric: '99.9%', label: 'System Uptime', icon: Shield },
    { metric: '24/7', label: 'Automated Operations', icon: Clock }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-sm"></div>
        <div className="relative z-10 container mx-auto px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white"
          >
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-8 animate-pulse">
              🚀 ADVANCED AI TRANSFORMATION • 2025
            </div>
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              Advanced AI Transformation 2025
            </h1>
            <p className="text-2xl opacity-90 max-w-4xl mx-auto mb-12">
              Transform your business with cutting-edge AI technologies that deliver measurable results and competitive advantage
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
              >
                Start AI Transformation
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300"
              >
                View Case Studies
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Revolutionary AI Technologies
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover the next generation of AI solutions that are reshaping industries and creating unprecedented opportunities
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
                transition={{ duration: 0.8, delay: 0.3 + index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mb-6`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 mb-6">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Transformation Process */}
      <div className="py-20 bg-gradient-to-r from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              AI Transformation Journey
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our proven methodology ensures successful AI implementation with measurable results
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {transformationStages.map((stage, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
                transition={{ duration: 0.8, delay: 0.5 + index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl flex items-center justify-center mb-6">
                  <span className="text-white font-bold text-xl">{index + 1}</span>
                </div>
                <div className="inline-block px-3 py-1 bg-purple-100 text-purple-700 text-sm rounded-full mb-4">
                  {stage.stage}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{stage.title}</h3>
                <p className="text-gray-600 mb-4">{stage.description}</p>
                <div className="text-sm text-purple-600 font-semibold mb-4">Duration: {stage.duration}</div>
                <ul className="space-y-2">
                  {stage.deliverables.map((deliverable, deliverableIndex) => (
                    <li key={deliverableIndex} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      {deliverable}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Success Metrics */}
      <div className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Proven Results
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our AI transformation solutions deliver measurable business impact
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {successMetrics.map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
                transition={{ duration: 0.8, delay: 0.7 + index * 0.1 }}
                className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl p-8 text-white text-center hover:scale-105 transition-all duration-300"
              >
                <metric.icon className="w-12 h-12 text-white mx-auto mb-4" />
                <div className="text-4xl font-bold mb-2">{metric.metric}</div>
                <div className="text-purple-100">{metric.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-white"
          >
            <h2 className="text-4xl font-bold mb-6">
              Ready to Transform Your Business with AI?
            </h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto mb-8">
              Join the AI revolution and unlock unprecedented growth opportunities for your organization
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
              >
                Schedule AI Consultation
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300"
              >
                Download AI Guide
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AdvancedAITransformation2025;