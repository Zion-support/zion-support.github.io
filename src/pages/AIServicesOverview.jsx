import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Robot, 
  Zap, 
  Shield, 
  Database, 
  Code, 
  BarChart3, 
  Users, 
  Globe, 
  Lock,
  ArrowRight,
  Star,
  CheckCircle
} from 'lucide-react';

export default function AIServicesOverview() {
  const aiServices = [
    {
      category: 'AI Autonomous Systems',
      services: [
        { name: 'AI Autonomous Decision Engine', href: '/ai-autonomous-decision-engine', icon: Brain, description: 'Advanced AI systems that make autonomous decisions in complex scenarios' },
        { name: 'AI Autonomous DevOps', href: '/ai-autonomous-devops', icon: Code, description: 'Automated development and operations with AI-driven optimization' },
        { name: 'AI Autonomous Security', href: '/ai-autonomous-security', icon: Shield, description: 'Intelligent threat detection and response systems' },
        { name: 'AI Autonomous Analytics', href: '/ai-autonomous-analytics', icon: BarChart3, description: 'Self-learning analytics platforms for business intelligence' },
        { name: 'AI Autonomous Business Operations', href: '/ai-autonomous-business-operations', icon: Users, description: 'End-to-end business process automation with AI' },
        { name: 'AI Autonomous Customer Service', href: '/ai-autonomous-customer-service', icon: Users, description: 'Intelligent customer support and engagement systems' }
      ]
    },
    {
      category: 'AI Development & Integration',
      services: [
        { name: 'AI Autonomous Development', href: '/ai-autonomous-development', icon: Code, description: 'AI-powered software development and code generation' },
        { name: 'AI Autonomous Architecture', href: '/ai-autonomous-architecture', icon: Database, description: 'Intelligent system design and infrastructure optimization' },
        { name: 'AI Autonomous APIs', href: '/ai-autonomous-apis', icon: Globe, description: 'Smart API development and management systems' },
        { name: 'AI Agent Orchestrator', href: '/ai-agent-orchestrator', icon: Robot, description: 'Multi-agent AI system coordination and management' }
      ]
    },
    {
      category: 'AI Specialized Solutions',
      services: [
        { name: 'AI Autonomous Healthcare', href: '/ai-autonomous-healthcare', icon: Brain, description: 'Medical AI systems for diagnosis and treatment planning' },
        { name: 'AI Autonomous Finance', href: '/ai-autonomous-finance', icon: BarChart3, description: 'Financial analysis and trading AI systems' },
        { name: 'AI Autonomous Manufacturing', href: '/ai-autonomous-manufacturing', icon: Zap, description: 'Smart manufacturing and quality control AI' },
        { name: 'AI Autonomous Compliance', href: '/ai-autonomous-compliance', icon: CheckCircle, description: 'Regulatory compliance and audit automation' }
      ]
    }
  ];

  const features = [
    {
      icon: Brain,
      title: 'Advanced AI Models',
      description: 'State-of-the-art machine learning and deep learning models'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-grade security and compliance standards'
    },
    {
      icon: Zap,
      title: 'Real-time Processing',
      description: 'Lightning-fast AI inference and decision making'
    },
    {
      icon: Users,
      title: 'Human-AI Collaboration',
      description: 'Seamless integration between human expertise and AI capabilities'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-700">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 lg:py-32">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-purple-900/20"></div>
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
              AI Services
              <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Overview
              </span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Discover our comprehensive suite of AI-powered services designed to transform your business operations, 
              enhance decision-making, and drive innovation across all industries.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
              >
                Get Started
              </Link>
              <Link
                to="/services/pricing"
                className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-500 hover:text-white transition-all duration-300"
              >
                View Pricing
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Why Choose Our AI Services?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI solutions combine cutting-edge technology with industry expertise to deliver 
              measurable business outcomes and competitive advantages.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-zinc-800/50 backdrop-blur-sm rounded-xl p-6 border border-zinc-700/50 hover:border-cyan-500/50 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Services Categories */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Comprehensive AI Service Categories
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore our extensive range of AI services organized by category and industry application.
            </p>
          </div>

          {aiServices.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <h3 className="text-2xl lg:text-3xl font-bold text-white mb-8 text-center">
                {category.category}
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.services.map((service, serviceIndex) => (
                  <motion.div
                    key={serviceIndex}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: serviceIndex * 0.1 }}
                    viewport={{ once: true }}
                    className="group bg-zinc-800/30 backdrop-blur-sm rounded-xl p-6 border border-zinc-700/30 hover:border-cyan-500/50 hover:bg-zinc-800/50 transition-all duration-300 transform hover:scale-105"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
                        <service.icon className="w-5 h-5 text-white" />
                      </div>
                      <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-cyan-400 transition-colors" />
                    </div>
                    
                    <h4 className="text-lg font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                      {service.name}
                    </h4>
                    <p className="text-gray-300 text-sm mb-4">
                      {service.description}
                    </p>
                    
                    <Link
                      to={service.href}
                      className="inline-flex items-center text-cyan-400 hover:text-cyan-300 text-sm font-medium transition-colors"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-cyan-900/50 to-blue-900/50 rounded-2xl p-12 text-center border border-cyan-500/30"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business with AI?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join the AI revolution and unlock unprecedented opportunities for growth, 
              efficiency, and innovation in your industry.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-white text-zinc-900 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
              >
                Schedule a Consultation
              </Link>
              <Link
                to="/services/showcase"
                className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-zinc-900 transition-all duration-300"
              >
                View Case Studies
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}