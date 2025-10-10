'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight, Zap, Star, Users, TrendingUp, Shield, Cloud, Server, Database, Globe, Lock, Sparkles, Target, Award, Cpu, HardDrive, Wifi, Settings } from 'lucide-react';

const AICloudInfrastructurePage: React.FC = () => {
  const [selectedPlan, setSelectedPlan] = useState('pro');

  const features = [
    {
      icon: <Cloud className="w-6 h-6 text-cyan-400" />,
      title: 'Intelligent Cloud Management',
      description: 'AI-powered cloud optimization with automatic scaling and cost management'
    },
    {
      icon: <Server className="w-6 h-6 text-blue-400" />,
      title: 'Multi-Cloud Architecture',
      description: 'Seamless integration across AWS, Azure, GCP with unified management'
    },
    {
      icon: <Shield className="w-6 h-6 text-green-400" />,
      title: 'Advanced Security',
      description: 'Enterprise-grade security with AI threat detection and compliance monitoring'
    },
    {
      icon: <Database className="w-6 h-6 text-purple-400" />,
      title: 'Auto-Scaling Databases',
      description: 'Intelligent database scaling based on demand with zero downtime'
    },
    {
      icon: <Globe className="w-6 h-6 text-orange-400" />,
      title: 'Global CDN',
      description: 'Worldwide content delivery with AI-optimized routing and caching'
    },
    {
      icon: <Settings className="w-6 h-6 text-pink-400" />,
      title: 'DevOps Automation',
      description: 'Complete CI/CD pipeline automation with AI-powered testing and deployment'
    }
  ];

  const pricingPlans = [
    {
      name: 'Startup',
      price: '$299',
      period: '/month',
      description: 'Perfect for startups and small teams',
      features: [
        'Up to 10 servers',
        'Basic cloud monitoring',
        'Standard security',
        'Email support',
        '99.9% uptime SLA',
        'Basic backup',
        '5 team members'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$799',
      period: '/month',
      description: 'Ideal for growing businesses',
      features: [
        'Up to 50 servers',
        'Advanced AI monitoring',
        'Enhanced security suite',
        'Priority support',
        '99.99% uptime SLA',
        'Automated backups',
        '25 team members',
        'Custom configurations'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$2,499',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Unlimited servers',
        'Custom AI models',
        'Enterprise security',
        'Dedicated support manager',
        '99.999% uptime SLA',
        'Disaster recovery',
        'Unlimited team members',
        'White-label solution'
      ],
      popular: false
    }
  ];

  const stats = [
    { icon: <Users className="w-8 h-8 text-blue-500" />, value: '500+', label: 'Active Clients' },
    { icon: <Server className="w-8 h-8 text-green-500" />, value: '10K+', label: 'Servers Managed' },
    { icon: <TrendingUp className="w-8 h-8 text-purple-500" />, value: '40%', label: 'Cost Reduction' },
    { icon: <Award className="w-8 h-8 text-orange-500" />, value: '99.99%', label: 'Uptime SLA' }
  ];

  const services = [
    'Cloud Migration',
    'Infrastructure as Code',
    'Container Orchestration',
    'Microservices Architecture',
    'API Gateway Management',
    'Load Balancing',
    'Auto-Scaling',
    'Disaster Recovery',
    'Backup & Restore',
    'Performance Monitoring',
    'Security Hardening',
    'Compliance Management'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Cloud Infrastructure - Zion Tech Group | Intelligent Cloud Management</title>
        <meta name="description" content="Advanced AI-powered cloud infrastructure with intelligent scaling, multi-cloud management, and enterprise security. Starting at $299/month." />
        <meta name="keywords" content="AI cloud infrastructure, cloud management, multi-cloud, auto-scaling, cloud security, DevOps automation" />
      </Helmet>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium mb-8">
            <Sparkles className="w-4 h-4 mr-2" />
            Intelligent Cloud Management
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            AI Cloud
            <span className="block bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Infrastructure
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Transform your cloud infrastructure with AI-powered management, intelligent scaling, 
            and automated optimization. Reduce costs by 40% while improving performance and reliability 
            across AWS, Azure, and Google Cloud.
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto mb-12">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold py-4 px-8 rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <span>Get Free Assessment</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <button className="border border-cyan-500 text-cyan-400 font-semibold py-4 px-8 rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-300 flex items-center justify-center space-x-2">
              <span>View Demo</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">Comprehensive Cloud Services</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Complete cloud infrastructure solutions powered by AI intelligence.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {services.map((service, index) => (
              <div key={index} className="bg-slate-800/50 rounded-lg p-4 border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300 text-center">
                <span className="text-gray-300 font-medium">{service}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">Powerful Features</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Everything you need to manage and optimize your cloud infrastructure with AI.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-slate-800/50 rounded-xl p-8 border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300">
                <div className="w-12 h-12 bg-cyan-500/10 rounded-lg flex items-center justify-center mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">Choose Your Plan</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Start with a free infrastructure assessment and migration plan.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`bg-slate-800/50 rounded-2xl p-8 border transition-all duration-300 ${
                plan.popular ? 'border-cyan-500 scale-105' : 'border-cyan-500/20 hover:border-cyan-500/40'
              }`}>
                {plan.popular && (
                  <div className="flex justify-center mb-4">
                    <span className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center">
                      <Star className="w-4 h-4 mr-1" />
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-cyan-400">{plan.price}</span>
                    <span className="text-gray-400 ml-1">{plan.period}</span>
                  </div>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
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
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">Why Choose AI Cloud Infrastructure?</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Join hundreds of companies that have transformed their cloud operations with AI.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-cyan-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Zap className="w-8 h-8 text-cyan-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Intelligent Automation</h3>
              <p className="text-gray-300">Automate complex cloud operations with AI-powered decision making and optimization.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-cyan-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="w-8 h-8 text-cyan-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Cost Optimization</h3>
              <p className="text-gray-300">Reduce cloud costs by up to 40% with intelligent resource allocation and scaling.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-cyan-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-cyan-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Enterprise Security</h3>
              <p className="text-gray-300">Bank-level security with AI threat detection and compliance monitoring.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12">
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to Transform Your Cloud Infrastructure?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Get a free infrastructure assessment and discover how AI can optimize your cloud operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold py-4 px-8 rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <span>Get Free Assessment</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/pricing"
                className="border border-cyan-500 text-cyan-400 font-semibold py-4 px-8 rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <span>View All Plans</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AICloudInfrastructurePage;