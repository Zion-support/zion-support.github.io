'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Star, Users, TrendingUp, BarChart, Brain, Target, Zap, Shield, Globe, Database, Smartphone, FileText, MessageCircle, Heart, DollarSign, Box, Monitor, Link as LinkIcon, Server, Package, Mic, Workflow, Eye, Wifi, MessageSquare, CheckCircle as CheckCircleIcon, ShoppingCart, Award, Clock, Settings, Calendar, CheckSquare, Lock, TrendingUp as TrendingUpIcon, Cpu, Target as TargetIcon, Globe as GlobeIcon, Database as DatabaseIcon, Smartphone as SmartphoneIcon, Lock as LockIcon, TrendingUp as TrendingUpIcon2, Settings as SettingsIcon, Calendar as CalendarIcon, CheckSquare as CheckSquareIcon, FileText as FileTextIcon, MessageCircle as MessageCircleIcon, Heart as HeartIcon, DollarSign as DollarSignIcon, Box as BoxIcon, Monitor as MonitorIcon, Link as LinkIcon2, Server as ServerIcon, Package as PackageIcon, Mic as MicIcon, Workflow as WorkflowIcon, Eye as EyeIcon, Wifi as WifiIcon, MessageSquare as MessageSquareIcon, CheckCircle as CheckCircleIcon2, ShoppingCart as ShoppingCartIcon } from 'lucide-react';

const AiPoweredDevopsPlatformPage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Code Analysis',
      description: 'Automatically detect code quality issues, security vulnerabilities, and performance bottlenecks using machine learning.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Workflow,
      title: 'Intelligent CI/CD Pipelines',
      description: 'Build, test, and deploy applications with AI-optimized pipelines that adapt to your codebase patterns.',
      color: 'from-cyan-500 to-blue-500'
    },
    {
      icon: Shield,
      title: 'Automated Security Scanning',
      description: 'Continuously scan for security vulnerabilities and automatically apply patches and updates.',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: BarChart,
      title: 'Predictive Monitoring',
      description: 'Predict and prevent system failures before they occur with AI-driven monitoring and alerting.',
      color: 'from-orange-500 to-red-500'
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$299',
      period: '/month',
      description: 'Perfect for small teams',
      features: [
        'Up to 5 repositories',
        'Basic AI analysis',
        'Standard CI/CD',
        'Email support',
        'Basic monitoring'
      ],
      color: 'from-gray-500 to-gray-600',
      popular: false
    },
    {
      name: 'Professional',
      price: '$799',
      period: '/month',
      description: 'Ideal for growing teams',
      features: [
        'Up to 25 repositories',
        'Advanced AI features',
        'Custom pipelines',
        'Priority support',
        'Advanced monitoring',
        'Security scanning'
      ],
      color: 'from-purple-500 to-pink-500',
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$1,999',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Unlimited repositories',
        'Custom AI models',
        'Advanced analytics',
        '24/7 dedicated support',
        'White-label options',
        'Custom development'
      ],
      color: 'from-cyan-500 to-blue-500',
      popular: false
    }
  ];

  const capabilities = [
    {
      title: 'Automated Testing',
      description: 'Generate and execute comprehensive test suites automatically using AI.',
      icon: CheckSquare,
      color: 'from-blue-500 to-purple-500',
      benefits: ['95% test coverage', 'Automated test generation', 'Performance testing']
    },
    {
      title: 'Infrastructure as Code',
      description: 'Manage infrastructure with AI-optimized Terraform and CloudFormation templates.',
      icon: Server,
      color: 'from-green-500 to-teal-500',
      benefits: ['Cost optimization', 'Security hardening', 'Auto-scaling']
    },
    {
      title: 'Monitoring & Observability',
      description: 'Comprehensive monitoring with AI-powered anomaly detection and root cause analysis.',
      icon: Eye,
      color: 'from-yellow-500 to-orange-500',
      benefits: ['Real-time alerts', 'Anomaly detection', 'Root cause analysis']
    },
    {
      title: 'Deployment Automation',
      description: 'Deploy applications safely with AI-driven rollback strategies and canary deployments.',
      icon: Zap,
      color: 'from-red-500 to-pink-500',
      benefits: ['Zero-downtime deployments', 'Automated rollbacks', 'Canary releases']
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI-Powered DevOps Platform - Advanced Development Operations | Zion Tech Group</title>
        <meta name="description" content="Transform your DevOps with our AI-powered platform. Automated testing, intelligent CI/CD, security scanning, and predictive monitoring for modern development teams." />
        <meta name="keywords" content="AI DevOps, automated testing, CI/CD, infrastructure as code, monitoring, deployment automation, security scanning" />
        <meta property="og:title" content="AI-Powered DevOps Platform - Advanced Development Operations" />
        <meta property="og:description" content="Transform your DevOps with AI-powered automation and intelligent monitoring." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/ai-powered-devops-platform" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20">
          <div className="absolute inset-0 opacity-20" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                AI-Powered DevOps Platform
                <span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Advanced Development Operations
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Transform your development operations with AI-powered automation, intelligent monitoring, 
                and predictive analytics that accelerate delivery and improve reliability.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  Start Free Trial
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  to="/demo"
                  className="inline-flex items-center px-8 py-4 border-2 border-purple-400 text-purple-400 font-semibold rounded-lg hover:bg-purple-400 hover:text-white transition-all duration-300 transform hover:scale-105"
                >
                  View Demo
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-gradient-to-br from-slate-900 to-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                AI-Powered DevOps Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Leverage artificial intelligence to automate, optimize, and enhance your development operations.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="group">
                  <div className="bg-gray-800 rounded-xl p-6 h-full hover:bg-gray-700 transition-all duration-300 transform hover:scale-105">
                    <div className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r ${feature.color} rounded-lg mb-4`}>
                      <feature.icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                    <p className="text-gray-300">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Capabilities Section */}
        <section className="py-20 bg-gradient-to-br from-purple-900 to-slate-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Comprehensive DevOps Capabilities
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                End-to-end DevOps automation with AI-powered intelligence and optimization.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {capabilities.map((capability, index) => (
                <div key={index} className="group">
                  <div className="bg-gray-800 rounded-xl p-6 h-full hover:bg-gray-700 transition-all duration-300 transform hover:scale-105">
                    <div className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r ${capability.color} rounded-lg mb-4`}>
                      <capability.icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3">{capability.title}</h3>
                    <p className="text-gray-300 mb-4">{capability.description}</p>
                    <ul className="space-y-2">
                      {capability.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 bg-gradient-to-br from-slate-900 to-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Choose Your Plan
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Flexible pricing options to fit your team size and development needs.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`relative bg-gray-800 rounded-xl p-8 ${plan.popular ? 'ring-2 ring-purple-500' : ''}`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-400 mb-6">{plan.description}</p>
                    <div className="mb-6">
                      <span className="text-4xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-400">{plan.period}</span>
                    </div>
                    <ul className="space-y-3 mb-8">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-gray-300">
                          <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Link
                      to="/contact"
                      className={`w-full inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r ${plan.color} text-white font-semibold rounded-lg hover:opacity-90 transition-all duration-300`}
                    >
                      Get Started
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-purple-900 to-slate-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Transform Your DevOps?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Join leading development teams using our AI-powered DevOps platform to accelerate delivery and improve reliability.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  Start Free Trial
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <a
                  href="tel:+13024640950"
                  className="inline-flex items-center px-8 py-4 border-2 border-purple-400 text-purple-400 font-semibold rounded-lg hover:bg-purple-400 hover:text-white transition-all duration-300 transform hover:scale-105"
                >
                  Call +1 302 464 0950
                </a>
              </div>
              <div className="mt-8 text-gray-400">
                <p>Email: kleber@ziontechgroup.com</p>
                <p>Address: 364 E Main St STE 1008, Middletown DE 19709</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AiPoweredDevopsPlatformPage;