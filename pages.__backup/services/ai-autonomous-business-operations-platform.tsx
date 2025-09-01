import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Zap, 
  Target, 
  TrendingUp, 
  Shield, 
  Users, 
  CheckCircle, 
  ArrowRight,
  Cpu,
  Database,
  Globe,
  BarChart3,
  Rocket,
  Star
} from 'lucide-react';

export default function AIAutonomousBusinessOperationsPlatform() {
  const features = [
    {
      icon: Brain,
      title: 'Intelligent Decision Making',
      description: 'AI-powered decision engines that analyze data and make optimal business decisions in real-time.'
    },
    {
      icon: Zap,
      title: 'Automated Workflows',
      description: 'Seamlessly automate complex business processes with intelligent routing and optimization.'
    },
    {
      icon: Target,
      title: 'Predictive Analytics',
      description: 'Forecast business trends and identify opportunities before they become apparent.'
    },
    {
      icon: TrendingUp,
      title: 'Performance Optimization',
      description: 'Continuously monitor and optimize business performance across all operations.'
    },
    {
      icon: Shield,
      title: 'Security & Compliance',
      description: 'Built-in security measures and compliance monitoring for all automated operations.'
    },
    {
      icon: Users,
      title: 'Human-AI Collaboration',
      description: 'Seamless integration between human expertise and AI capabilities for optimal results.'
    }
  ];

  const benefits = [
    'Reduce operational costs by up to 40%',
    'Increase process efficiency by 60%',
    'Improve decision accuracy by 85%',
    'Enable 24/7 autonomous operations',
    'Scale operations without proportional cost increase',
    'Reduce human error in repetitive tasks'
  ];

  const useCases = [
    {
      industry: 'Manufacturing',
      description: 'Automated quality control, predictive maintenance, and supply chain optimization.',
      icon: Cpu
    },
    {
      industry: 'Finance',
      description: 'Risk assessment, fraud detection, and automated trading strategies.',
      icon: Database
    },
    {
      industry: 'Healthcare',
      description: 'Patient monitoring, diagnosis assistance, and resource allocation.',
      icon: Users
    },
    {
      industry: 'Retail',
      description: 'Inventory management, demand forecasting, and personalized marketing.',
      icon: Globe
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <section className="py-20 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center justify-center space-x-2 mb-6">
                <Star className="w-6 h-6 text-yellow-500 fill-current" />
                <span className="text-sm font-medium text-yellow-600">Featured Service</span>
              </div>
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
                AI Autonomous Business Operations Platform
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600 lg:text-xl">
                Transform your business with our revolutionary AI platform that enables fully autonomous operations, 
                intelligent decision-making, and unprecedented efficiency gains.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/contact"
                  className="rounded-md bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                >
                  Get Started Today
                </Link>
                <Link
                  href="/services"
                  className="text-sm font-semibold leading-6 text-gray-900 hover:text-blue-600"
                >
                  View All Services <ArrowRight className="ml-2 h-5 w-5 inline" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 sm:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Platform Features
            </h2>
            <p className="mt-6 text-lg text-gray-600">
              Our AI platform provides comprehensive capabilities to automate and optimize every aspect of your business operations.
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                className="text-center group"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 sm:py-32 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-6">
                Transform Your Business Operations
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Our AI platform delivers measurable results that directly impact your bottom line and competitive advantage.
              </p>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl p-8">
                <div className="grid grid-cols-2 gap-4 h-full">
                  <div className="space-y-4">
                    <div className="h-20 bg-white rounded-lg shadow-sm flex items-center justify-center">
                      <Brain className="h-8 w-8 text-purple-600" />
                    </div>
                    <div className="h-16 bg-white rounded-lg shadow-sm flex items-center justify-center">
                      <Zap className="h-6 w-6 text-blue-600" />
                    </div>
                  </div>
                  <div className="space-y-4 pt-8">
                    <div className="h-16 bg-white rounded-lg shadow-sm flex items-center justify-center">
                      <Target className="h-6 w-6 text-green-600" />
                    </div>
                    <div className="h-20 bg-white rounded-lg shadow-sm flex items-center justify-center">
                      <TrendingUp className="h-8 w-8 text-orange-600" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-24 sm:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Industry Applications
            </h2>
            <p className="mt-6 text-lg text-gray-600">
              Our AI platform is designed to work across industries, providing tailored solutions for your specific business needs.
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {useCases.map((useCase, index) => (
              <motion.div
                key={useCase.industry}
                className="text-center group"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 mb-6 group-hover:scale-110 transition-transform duration-300">
                  <useCase.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{useCase.industry}</h3>
                <p className="text-gray-600 text-sm">{useCase.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 sm:py-32 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white">
              Ready to Automate Your Operations?
            </h2>
            <p className="mt-6 text-lg leading-8 text-blue-100">
              Let's discuss how our AI platform can transform your business operations and drive unprecedented growth.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="rounded-md bg-white px-6 py-3 text-sm font-semibold text-blue-600 shadow-sm hover:bg-blue-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Schedule a Demo
              </Link>
              <Link
                href="/case-studies"
                className="text-sm font-semibold leading-6 text-white hover:text-blue-100"
              >
                View Case Studies
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}