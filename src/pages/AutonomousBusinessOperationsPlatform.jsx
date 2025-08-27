import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Bot, 
  Zap, 
  Shield, 
  TrendingUp, 
  Users, 
  Globe, 
  ArrowRight, 
  Cpu, 
  Network,
  Workflow,
  BarChart3,
  Clock,
  CheckCircle,
  Target,
  Settings,
  Database,
  Cloud,
  Lock,
  Eye,
  Sparkles,
  Brain,
  Award,
  Lightbulb,
  Code,
  Rocket,
  Phone,
  Mail,
  MapPin,
  Heart,
  BarChart,
  PieChart
} from 'lucide-react';
import SEOHead from '../components/SEOHead';

const AutonomousBusinessOperationsPlatform = () => {
  const features = [
    {
      icon: Bot,
      title: 'Intelligent Automation',
      description: 'AI-powered automation that learns from your business processes and continuously improves efficiency.'
    },
    {
      icon: Workflow,
      title: 'Process Orchestration',
      description: 'Seamlessly orchestrate complex business workflows across multiple systems and departments.'
    },
    {
      icon: Zap,
      title: 'Real-time Optimization',
      description: 'Dynamic optimization of business operations based on real-time data and market conditions.'
    },
    {
      icon: Shield,
      title: 'Secure Operations',
      description: 'Enterprise-grade security with role-based access control and audit trails for all operations.'
    }
  ];

  const useCases = [
    {
      title: 'Supply Chain Management',
      description: 'Automated inventory management, demand forecasting, and supplier coordination.',
      icon: Workflow
    },
    {
      title: 'Customer Service',
      description: 'Intelligent chatbots, ticket routing, and automated customer support workflows.',
      icon: Users
    },
    {
      title: 'Financial Operations',
      description: 'Automated invoicing, expense management, and financial reporting.',
      icon: BarChart3
    },
    {
      title: 'HR & Recruitment',
      description: 'Automated candidate screening, onboarding processes, and performance management.',
      icon: Users
    }
  ];

  const benefits = [
    'Reduce operational costs by up to 40%',
    'Improve process efficiency by 60%',
    'Eliminate manual errors and delays',
    '24/7 automated operations',
    'Scalable infrastructure for growth',
    'Real-time monitoring and analytics'
  ];

  const industries = [
    'Manufacturing',
    'Healthcare',
    'Finance',
    'Retail',
    'Logistics',
    'Technology',
    'Energy',
    'Education'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEOHead 
        title="Autonomous Business Operations Platform | Zion Tech Group"
        description="Transform your business with AI-powered autonomous operations that run 24/7, continuously optimizing processes and driving growth."
        keywords="autonomous business operations, AI automation, business process automation, intelligent workflows, operational efficiency"
        canonicalUrl="https://ziontechgroup.com/autonomous-business-operations-platform"
      />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <div className="inline-flex items-center px-4 py-2 bg-green-600/20 text-green-400 rounded-full text-sm font-medium mb-6">
              <Bot className="w-4 h-4 mr-2"/>
              Autonomous Operations
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Autonomous Business Operations Platform
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your business with AI-powered autonomous operations that run 24/7, 
              continuously optimizing processes and driving growth without human intervention.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-green-700 hover:to-emerald-700 transition-all duration-300 text-lg"
              >
                Start Automation
              </Link>
              <Link 
                to="/services/ai-automation" 
                className="border border-green-500 text-green-400 px-8 py-4 rounded-lg font-semibold hover:bg-green-500 hover:text-white transition-all duration-300 text-lg"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Platform Capabilities
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our autonomous platform provides comprehensive business automation capabilities
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-slate-800/50 p-8 rounded-xl border border-white/10 hover:border-green-500/50 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-green-500/20 rounded-lg flex items-center justify-center mb-6">
                  <feature.icon className="w-8 h-8 text-green-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-slate-800/30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Real-World Applications
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See how autonomous operations transform different business areas
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-slate-700/50 p-6 rounded-xl border border-white/10 hover:border-green-500/50 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mb-4">
                  <useCase.icon className="w-6 h-6 text-green-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{useCase.title}</h3>
                <p className="text-sm text-gray-300">{useCase.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Why Choose Autonomous Operations?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience unprecedented efficiency and growth with our autonomous platform
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-start space-x-3"
              >
                <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                <span className="text-gray-300">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 bg-slate-800/30">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Industry Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Tailored autonomous solutions for various industry verticals
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-slate-700/50 p-6 rounded-xl border border-white/10 hover:border-green-500/50 transition-all duration-300 text-center"
              >
                <h3 className="text-lg font-semibold text-white">{industry}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Automate Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join the future of business operations with our autonomous platform
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-green-700 hover:to-emerald-700 transition-all duration-300 text-lg"
            >
              Get Started Today
            </Link>
            <Link 
              to="/services" 
              className="border border-green-500 text-green-400 px-8 py-4 rounded-lg font-semibold hover:bg-green-500 hover:text-white transition-all duration-300 text-lg"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AutonomousBusinessOperationsPlatform; 
