import React from 'react'
import { Link } from 'react-router-dom';
import { Brain, Cloud, Shield, Zap, Users, TrendingUp, CheckCircle } from 'lucide-react';

export default function Solutions(...args[]):  {
  const solutions = [
    {
      icon: Brain,
      title: 'AI & Machine Learning',
      description: 'Advanced AI systems, autonomous agents, and intelligent automation platforms that transform business operations.',
      features['Multi-agent AI systems', 'RAG-powered workflows', 'Predictive analytics', 'Natural language processing'],
      href: '/services#ai',
      color: 'from-blue-600 to-purple-600'
    },
    {
      icon: Cloud,
      title: 'Cloud & Infrastructure',
      description: 'Scalable cloud platforms, serverless architectures, and modern infrastructure solutions.',
      features['Cloud migration', 'Kubernetes orchestration', 'Serverless computing', 'Data pipelines'],
      href: '/services#cloud',
      color: 'from-cyan-500 to-blue-600'
    },
    {
      icon: Shield,
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions including zero-trust architecture and threat detection.',
      features['Zero-trust security', 'Threat intelligence', 'Compliance frameworks', 'Incident response'],
      href: '/services#cybersecurity',
      color: 'from-emerald-500 to-teal-600'
    },
    {
      icon: Zap,
      title: 'Digital Transformation',
      description: 'End-to-end digital transformation services to modernize legacy systems and processes.',
      features['Legacy modernization', 'Process automation', 'Digital workflows', 'Change management'],
      href: '/services#transformation',
      color: 'from-orange-500 to-red-600'
    },
    {
      icon: Users,
      title: 'Enterprise Solutions',
      description: 'Tailored enterprise-grade solutions for large organizations with complex requirements.',
      features['Custom development', 'Integration services', 'Enterprise architecture', 'Scalability planning'],
      href: '/services#enterprise',
      color: 'from-purple-500 to-pink-600'
    },
    {
      icon: TrendingUp,
      title: 'Performance Optimization',
      description: 'Performance tuning, monitoring, and optimization for applications and infrastructure.',
      features['Performance monitoring', 'Load testing', 'Optimization strategies', 'Capacity planning'],
      href: '/services#performance',
      color: 'from-yellow-500 to-orange-600'
    }
  {/* Removed stray closing bracket */}

  return (
    <Layout title="Solutions - ZionTech Group" description="Comprehensive technology solutions for your business">
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-800 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <motion.h1 
                className="text-4xl md:text-6xl font-bold mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                Technology Solutions
              </motion.h1>
              <motion.p 
                className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Transform your business with our comprehensive suite of technology solutions designed for modern enterprises
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <Link href="/contact" className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors">
                  Get Started Today
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </motion.div>
=======
    title: 'Industry Solutions',
    icon: BarChart3,
    description: 'Specialized solutions tailored to specific industries and their unique requirements.',
    color: 'from-purple-500 to-pink-500',
    features: [
      'Industry Expertise',
      'Compliance Ready',
      'Specialized Features',
      'Domain Knowledge',
      'Best Practices',
      'Regulatory Support'
    ],
    benefits: [
      'Industry-specific Features',
      'Compliance Assurance',
      'Expert Knowledge',
      'Proven Results'
    ],
    pricing: 'Starting at $5,000/project',
    timeline: '1-6 months'
  },
  {
    title: 'Custom Development',
    icon: Settings,
    description: 'Fully customized solutions built from scratch to meet your specific business requirements.',
    color: 'from-orange-500 to-red-500',
    features: [
      '100% Custom Built',
      'Unique Requirements',
      'Full Control',
      'Advanced Features',
      'Integration Support',
      'Ongoing Maintenance'
    ],
    benefits: [
      'Perfect Fit',
      'Competitive Advantage',
      'Full Ownership',
      'Unlimited Customization'
    ],
    pricing: 'Starting at $25,000/project',
    timeline: '3-18 months'
  },
  {
    title: 'Digital Transformation',
    icon: Globe,
    description: 'Complete digital transformation solutions to modernize your business processes and operations.',
    color: 'from-cyan-500 to-blue-500',
    features: [
      'Process Modernization',
      'Technology Integration',
      'Change Management',
      'Training & Support',
      'Performance Optimization',
      'Future-proofing'
    ],
    benefits: [
      'Modernized Operations',
      'Improved Efficiency',
      'Better Customer Experience',
      'Competitive Edge'
    ],
    pricing: 'Starting at $10,000/project',
    timeline: '6-24 months'
  }
];

export default function SolutionsPage() {
  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
        {/* Hero Section */}
        <div className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600">
          <div className="absolute inset-0 bg-black opacity-20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Comprehensive Solutions
              </h1>
              <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                Discover our range of cutting-edge solutions designed to transform your business and drive innovation across every industry.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                  Get Started
                </button>
                <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                  Learn More
                </button>
              </div>
>>>>>>> ede6a6c5e68aff29c3e98caf43b1ead111d5b92e
            </div>
          </div>
        </div>
      </section>
    </div>
  {/* Removed stray closing parenthesis */}
  {/* Removed stray closing brace */}