import React from 'react';
<<<<<<< HEAD
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Database, 
  BarChart3, 
  Zap, 
  Shield, 
  Users, 
  Target, 
=======
import { motion } from 'framer-motion';
import { 
  Database, 
  Brain, 
  BarChart3, 
  Shield, 
  Zap, 
  Users, 
  Globe, 
  Lock,
>>>>>>> origin/cursor/website-audit-and-enhancement-cd9f
  ArrowRight,
  CheckCircle,
  Star,
  TrendingUp,
<<<<<<< HEAD
  Globe,
  Cpu,
  Network,
  Lock,
  Eye,
  Search,
  Filter,
  Download,
  Upload,
  RefreshCw,
  Settings,
  Monitor,
  AlertTriangle,
  Clock,
  Calendar,
  FileText,
  PieChart,
  LineChart,
  Activity
=======
  Cpu,
  Network,
  Cloud,
  Target,
  Lightbulb,
  Rocket
>>>>>>> origin/cursor/website-audit-and-enhancement-cd9f
} from 'lucide-react';

const AIAutonomousData: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: "Intelligent Data Processing",
      description: "AI-powered data processing with autonomous decision-making capabilities"
    },
    {
<<<<<<< HEAD
      icon: Database,
      title: "Advanced Data Management",
      description: "Comprehensive data lifecycle management with automated optimization"
    },
    {
      icon: BarChart3,
      title: "Predictive Analytics",
      description: "Future-focused insights powered by machine learning algorithms"
    },
    {
      icon: Shield,
      title: "Data Security & Compliance",
      description: "Enterprise-grade security with automated compliance monitoring"
    },
    {
      icon: Users,
      title: "User Behavior Analysis",
      description: "Deep insights into user patterns and preferences"
    },
    {
      icon: Target,
      title: "Goal-Oriented Optimization",
      description: "Data-driven optimization aligned with business objectives"
    }
  ];

  const capabilities = [
    "Autonomous data collection and validation",
    "Real-time data processing and analysis",
    "Intelligent data quality assessment",
    "Automated data governance and compliance",
    "Predictive data modeling and forecasting",
    "Cross-platform data integration",
    "Advanced data visualization and reporting",
    "Machine learning model training and deployment",
    "Automated data backup and recovery",
    "Intelligent data archiving and retention"
=======
      icon: Shield,
      title: "Advanced Security",
      description: "Enterprise-grade security with encryption and compliance standards"
    },
    {
      icon: Zap,
      title: "Real-time Analytics",
      description: "Instant insights and analytics for data-driven decision making"
    },
    {
      icon: Users,
      title: "Multi-user Access",
      description: "Secure role-based access control for team collaboration"
    },
    {
      icon: Globe,
      title: "Global Scalability",
      description: "Cloud-native architecture that scales with your business needs"
    },
    {
      icon: Lock,
      title: "Compliance Ready",
      description: "Built-in compliance with GDPR, HIPAA, and SOC2 standards"
    }
  ];

  const benefits = [
    "Automated data quality assessment and cleaning",
    "Real-time data validation and error detection",
    "Intelligent data categorization and tagging",
    "Predictive analytics and trend forecasting",
    "Automated report generation and distribution",
    "Seamless integration with existing systems"
>>>>>>> origin/cursor/website-audit-and-enhancement-cd9f
  ];

  const useCases = [
    {
<<<<<<< HEAD
      title: "Financial Services",
      description: "Real-time fraud detection and risk assessment"
    },
    {
      title: "Healthcare",
      description: "Patient data analysis and treatment optimization"
    },
    {
      title: "E-commerce",
      description: "Customer behavior analysis and personalized recommendations"
    },
    {
      title: "Manufacturing",
      description: "Predictive maintenance and quality control"
    },
    {
      title: "Transportation",
      description: "Route optimization and demand forecasting"
    },
    {
      title: "Energy",
      description: "Grid optimization and consumption prediction"
=======
      title: "Enterprise Data Management",
      description: "Centralized data governance and management for large organizations"
    },
    {
      title: "Healthcare Analytics",
      description: "Patient data analysis and medical research insights"
    },
    {
      title: "Financial Services",
      description: "Risk assessment, fraud detection, and market analysis"
    },
    {
      title: "Manufacturing Intelligence",
      description: "Predictive maintenance and quality control optimization"
>>>>>>> origin/cursor/website-audit-and-enhancement-cd9f
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
<<<<<<< HEAD
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="p-3 bg-white/20 rounded-full">
                <Brain className="w-12 h-12 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              AI Autonomous Data Platform
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-blue-100">
              Revolutionize your data operations with intelligent, autonomous data management 
              powered by advanced AI and machine learning.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors"
              >
                Get Started
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/demo"
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-colors"
              >
                Watch Demo
              </Link>
            </div>
          </div>
=======
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="flex justify-center mb-6">
              <div className="p-3 bg-white/20 rounded-full">
                <Database className="w-8 h-8" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              AI Autonomous Data Platform
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-blue-100">
              Transform your data operations with intelligent, autonomous systems that process, analyze, and derive insights automatically
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors flex items-center justify-center">
                Get Started
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                Watch Demo
              </button>
            </div>
          </motion.div>
>>>>>>> origin/cursor/website-audit-and-enhancement-cd9f
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<<<<<<< HEAD
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Autonomous Data Intelligence
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our AI-powered platform autonomously manages your data operations, 
              providing intelligent insights and automated optimization.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-xl border border-blue-100 hover:shadow-lg transition-shadow">
                <div className="p-3 bg-blue-600 rounded-lg w-fit mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
=======
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Powerful Features for Modern Data Operations
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our AI Autonomous Data Platform combines cutting-edge technology with intuitive design to revolutionize how you handle data
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-gradient-to-br from-white to-blue-50 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-blue-600" />
>>>>>>> origin/cursor/website-audit-and-enhancement-cd9f
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
<<<<<<< HEAD
              </div>
=======
              </motion.div>
>>>>>>> origin/cursor/website-audit-and-enhancement-cd9f
            ))}
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Capabilities Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Advanced Capabilities
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive data management capabilities that adapt and learn from your business needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              {capabilities.slice(0, 5).map((capability, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">{capability}</span>
                </div>
              ))}
            </div>
            <div className="space-y-4">
              {capabilities.slice(5).map((capability, index) => (
                <div key={index + 5} className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">{capability}</span>
                </div>
              ))}
            </div>
=======
      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose AI Autonomous Data?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience unprecedented efficiency and insights with our autonomous data platform
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                Transform Your Data Operations
              </h3>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    className="flex items-start"
                  >
                    <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="bg-white p-8 rounded-2xl shadow-xl">
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <TrendingUp className="w-10 h-10 text-white" />
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-4">
                    Performance Metrics
                  </h4>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Data Processing Speed</span>
                      <span className="font-semibold text-green-600">10x Faster</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Accuracy Rate</span>
                      <span className="font-semibold text-green-600">99.9%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Cost Reduction</span>
                      <span className="font-semibold text-green-600">60%</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
>>>>>>> origin/cursor/website-audit-and-enhancement-cd9f
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<<<<<<< HEAD
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Industry Applications
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover how AI Autonomous Data transforms operations across various industries.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-gradient-to-br from-indigo-50 to-purple-50 p-6 rounded-xl border border-indigo-100 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {useCase.title}
                </h3>
                <p className="text-gray-600">
                  {useCase.description}
                </p>
              </div>
=======
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Industry Applications
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover how AI Autonomous Data transforms operations across various industries
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-gradient-to-br from-gray-50 to-blue-50 p-8 rounded-xl border border-gray-200 hover:border-blue-300 transition-colors"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {useCase.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {useCase.description}
                </p>
                <button className="text-blue-600 font-semibold hover:text-blue-700 transition-colors flex items-center">
                  Learn More
                  <ArrowRight className="ml-2 w-4 h-4" />
                </button>
              </motion.div>
>>>>>>> origin/cursor/website-audit-and-enhancement-cd9f
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
<<<<<<< HEAD
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Data Operations?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join the future of autonomous data management with Zion Tech Group.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors"
            >
              Start Your Journey
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              to="/pricing"
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-colors"
            >
              View Pricing
            </Link>
          </div>
=======
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-700 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-6">
              Ready to Transform Your Data Operations?
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Join the future of autonomous data management with Zion Tech Group
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                Start Free Trial
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                Schedule Demo
              </button>
            </div>
          </motion.div>
>>>>>>> origin/cursor/website-audit-and-enhancement-cd9f
        </div>
      </section>
    </div>
  );
};

export default AIAutonomousData;