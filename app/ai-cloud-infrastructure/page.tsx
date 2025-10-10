'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Cloud, 
  Server, 
  Shield, 
  Zap, 
  BarChart, 
  Users, 
  TrendingUp, 
  CheckCircle, 
  ArrowRight, 
  Star, 
  Brain, 
  Target, 
  Clock,
  Phone,
  Mail,
  MapPin,
  Database,
  Settings,
  Globe,
  Lock,
  Activity
} from 'lucide-react';

const AICloudInfrastructurePage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Optimization',
      description: 'Intelligent resource allocation and performance optimization using machine learning algorithms',
      benefits: ['Auto-scaling based on demand', 'Cost optimization', 'Performance tuning', 'Predictive maintenance']
    },
    {
      icon: Shield,
      title: 'Advanced Security',
      description: 'Enterprise-grade security with AI-powered threat detection and automated response',
      benefits: ['Real-time threat monitoring', 'Automated incident response', 'Compliance management', 'Zero-trust architecture']
    },
    {
      icon: Zap,
      title: 'High Performance',
      description: 'Optimized infrastructure for maximum performance and minimal latency',
      benefits: ['Global CDN network', 'Edge computing', 'Load balancing', 'Caching optimization']
    },
    {
      icon: BarChart,
      title: 'Intelligent Monitoring',
      description: 'AI-driven monitoring and analytics for proactive infrastructure management',
      benefits: ['Predictive analytics', 'Anomaly detection', 'Performance insights', 'Capacity planning']
    }
  ];

  const cloudServices = [
    {
      name: 'AWS Integration',
      icon: '☁️',
      description: 'Complete AWS cloud infrastructure setup and management',
      features: ['EC2, S3, RDS management', 'Lambda serverless functions', 'CloudFormation automation', 'Cost optimization'],
      color: 'from-orange-500 to-yellow-600'
    },
    {
      name: 'Azure Solutions',
      icon: '🔵',
      description: 'Microsoft Azure cloud services and hybrid cloud solutions',
      features: ['Virtual machines', 'Azure SQL Database', 'App Service management', 'DevOps integration'],
      color: 'from-blue-500 to-blue-700'
    },
    {
      name: 'Google Cloud',
      icon: '🔍',
      description: 'Google Cloud Platform services and AI/ML integration',
      features: ['Compute Engine', 'BigQuery analytics', 'AI/ML services', 'Kubernetes orchestration'],
      color: 'from-green-500 to-teal-600'
    },
    {
      name: 'Multi-Cloud',
      icon: '🌐',
      description: 'Hybrid and multi-cloud infrastructure management',
      features: ['Cross-cloud migration', 'Disaster recovery', 'Load distribution', 'Vendor management'],
      color: 'from-purple-500 to-pink-600'
    },
    {
      name: 'Edge Computing',
      icon: '⚡',
      description: 'Distributed computing at the edge for low-latency applications',
      features: ['Edge nodes deployment', 'Content delivery', 'IoT integration', 'Real-time processing'],
      color: 'from-cyan-500 to-blue-600'
    },
    {
      name: 'Serverless',
      icon: '🚀',
      description: 'Serverless architecture and function-as-a-service solutions',
      features: ['Function deployment', 'Event-driven architecture', 'Auto-scaling', 'Pay-per-use pricing'],
      color: 'from-red-500 to-orange-600'
    }
  ];

  const pricingPlans = [
    {
      name: 'Basic',
      price: '$2,500',
      period: '/month',
      description: 'Perfect for small to medium businesses',
      features: [
        'Up to 10 servers',
        'Basic monitoring',
        'Standard support',
        'Cloud migration',
        'Security basics',
        'Backup & recovery',
        '24/7 monitoring',
        'Monthly reports'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$5,999',
      period: '/month',
      description: 'Ideal for growing enterprises',
      features: [
        'Up to 50 servers',
        'Advanced AI optimization',
        'Priority support',
        'Multi-cloud management',
        'Advanced security',
        'Disaster recovery',
        'Performance optimization',
        'Custom integrations',
        'API access',
        'Weekly reports'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$12,999',
      period: '/month',
      description: 'For large organizations with complex needs',
      features: [
        'Unlimited servers',
        'Custom AI models',
        'Dedicated support',
        'White-label options',
        'Enterprise security',
        'Custom solutions',
        'Advanced analytics',
        'Custom integrations',
        '24/7 phone support',
        'Real-time reports'
      ],
      popular: false
    }
  ];

  const stats = [
    { icon: <Server className="w-8 h-8 text-blue-500" />, value: '99.99%', label: 'Uptime SLA' },
    { icon: <TrendingUp className="w-8 h-8 text-green-500" />, value: '60%', label: 'Cost Reduction' },
    { icon: <Shield className="w-8 h-8 text-purple-500" />, value: '100%', label: 'Security Compliance' },
    { icon: <Zap className="w-8 h-8 text-orange-500" />, value: '50%', label: 'Performance Boost' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg matrix-rain">
      <Helmet>
        <title>AI Cloud Infrastructure - Zion Tech Group | Intelligent Cloud Management Platform</title>
        <meta name="description" content="Revolutionary AI-powered cloud infrastructure management platform that optimizes performance, security, and costs across all major cloud providers." />
        <meta name="keywords" content="AI cloud infrastructure, cloud management, AWS, Azure, Google Cloud, cloud optimization, cloud security, cloud migration" />
      </Helmet>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="cyber-scan-line mb-8">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 holographic-text cyber-text glitch">
              AI Cloud Infrastructure
            </h1>
            <p className="text-2xl text-cyan-400 mb-8 font-medium cyber-glow neon-text">
              Intelligent Cloud Management Platform
            </p>
          </div>
          <p className="text-xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
            Transform your cloud infrastructure with AI-powered optimization, security, and management. 
            Our platform intelligently manages your cloud resources across AWS, Azure, and Google Cloud.
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto mb-12">
            {stats.map((stat, index) => (
              <div key={index} className="quantum-card p-6 text-center energy-pulse">
                <div className="flex justify-center mb-4">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-white mb-2 neon-text">{stat.value}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              to="/contact"
              className="cyber-button w-full sm:w-auto text-center"
            >
              <span>Get Started</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/demo"
              className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 text-center"
            >
              Watch Demo
            </Link>
          </div>
        </div>
      </section>

      {/* Cloud Services */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6 neon-text">
              Multi-Cloud Support
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Manage all your cloud infrastructure from one intelligent platform.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cloudServices.map((service, index) => (
              <div key={index} className="holographic-stream p-8 hover:scale-105 transition-all duration-300">
                <div className="text-center mb-6">
                  <div className="text-6xl mb-4">{service.icon}</div>
                  <h3 className="text-2xl font-bold text-white mb-4">{service.name}</h3>
                  <p className="text-gray-300 mb-6">{service.description}</p>
                </div>
                
                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6 neon-text">
              AI-Powered Infrastructure Management
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI platform continuously optimizes your cloud infrastructure for performance, security, and cost.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="neural-network p-8 hover:scale-105 transition-all duration-300">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center mr-6">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">{feature.title}</h3>
                </div>
                
                <p className="text-gray-300 mb-6 text-lg">{feature.description}</p>
                
                <ul className="space-y-3">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6 neon-text">
              Choose Your Plan
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Flexible pricing plans designed to scale with your infrastructure needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`quantum-card p-8 relative ${plan.popular ? 'border-cyan-500 scale-105' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-6 py-2 rounded-full text-sm font-semibold flex items-center">
                      <Star className="w-4 h-4 mr-1" />
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-5xl font-bold text-cyan-400">{plan.price}</span>
                    <span className="text-gray-400 ml-2">{plan.period}</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link
                  to="/contact"
                  className={`w-full py-3 px-6 rounded-lg font-semibold text-center transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white hover:from-cyan-600 hover:to-purple-600'
                      : 'border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white'
                  }`}
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6 neon-text">
              Why Choose AI Cloud Infrastructure?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the future of cloud management with our AI-powered platform.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="quantum-field p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">60% Cost Reduction</h3>
              <p className="text-gray-300">AI optimization automatically reduces cloud costs while maintaining performance.</p>
            </div>

            <div className="quantum-field p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">99.99% Uptime</h3>
              <p className="text-gray-300">AI-powered monitoring and auto-scaling ensure maximum availability.</p>
            </div>

            <div className="quantum-field p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Enterprise Security</h3>
              <p className="text-gray-300">Advanced AI security monitoring and automated threat response.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="quantum-tunnel p-12 text-center">
            <h2 className="text-4xl font-bold text-white mb-6 neon-text">
              Ready to Optimize Your Cloud Infrastructure?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join thousands of businesses already using AI Cloud Infrastructure to optimize their cloud operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                to="/contact"
                className="cyber-button w-full sm:w-auto text-center"
              >
                <span>Get Started</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/demo"
                className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 text-center"
              >
                Schedule Demo
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="holographic-stream p-8">
              <h3 className="text-2xl font-bold text-white mb-6 neon-text">Get in Touch</h3>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-300 text-sm">Phone</p>
                    <a href="tel:+13024640950" className="text-cyan-400 hover:text-cyan-300 font-semibold text-lg">
                      +1 (302) 464-0950
                    </a>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-300 text-sm">Email</p>
                    <a href="mailto:kleber@ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300 font-semibold text-lg">
                      kleber@ziontechgroup.com
                    </a>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-600 rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-300 text-sm">Address</p>
                    <p className="text-white font-semibold">
                      364 E Main St STE 1008<br />
                      Middletown, DE 19709
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="holographic-stream p-8">
              <h3 className="text-2xl font-bold text-white mb-6 neon-text">Quick Contact</h3>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                    placeholder="Enter your full name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                    placeholder="Enter your email"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                    placeholder="Tell us about your cloud infrastructure needs"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full cyber-button text-center py-4"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AICloudInfrastructurePage;