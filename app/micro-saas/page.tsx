'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight, Zap, Users, Shield, Cloud, BarChart, Star, Clock, Globe } from 'lucide-react';

const MicroSaasPage: React.FC = () => {
  const microSaasProducts = [
    {
      id: 1,
      icon: BarChart,
      title: 'AI Analytics Dashboard',
      description: 'Real-time business intelligence and predictive analytics for small to medium businesses',
      features: [
        'Real-time dashboards',
        'Predictive analytics',
        'Custom reports',
        'Mobile app',
        'Data visualization',
        'Automated insights'
      ],
      price: '$99/month',
      users: 'Up to 50 users',
      trial: '14-day free trial',
      popular: true
    },
    {
      id: 2,
      icon: Users,
      title: 'AI-Powered CRM',
      description: 'Intelligent customer relationship management with automated lead scoring and personalized interactions',
      features: [
        'Lead management',
        'Email automation',
        'Sales forecasting',
        'Integration APIs',
        'Contact management',
        'Pipeline tracking'
      ],
      price: '$149/month',
      users: 'Up to 100 users',
      trial: '14-day free trial',
      popular: false
    },
    {
      id: 3,
      icon: Shield,
      title: 'Security Monitoring Suite',
      description: 'Comprehensive cybersecurity monitoring and threat detection for growing businesses',
      features: [
        'Threat detection',
        'Vulnerability scanning',
        'Compliance reporting',
        '24/7 monitoring',
        'Incident response',
        'Security alerts'
      ],
      price: '$199/month',
      users: 'Up to 200 users',
      trial: '14-day free trial',
      popular: false
    },
    {
      id: 4,
      icon: Cloud,
      title: 'Cloud Infrastructure Manager',
      description: 'Automated cloud resource management and cost optimization for multi-cloud environments',
      features: [
        'Resource optimization',
        'Cost tracking',
        'Auto-scaling',
        'Multi-cloud support',
        'Performance monitoring',
        'Backup management'
      ],
      price: '$299/month',
      users: 'Unlimited users',
      trial: '14-day free trial',
      popular: false
    }
  ];

  const benefits = [
    {
      icon: Zap,
      title: 'Quick Deployment',
      description: 'Get up and running in minutes, not months'
    },
    {
      icon: Users,
      title: 'No Upfront Costs',
      description: 'Start with a free trial, pay only when you see value'
    },
    {
      icon: Globe,
      title: 'Scalable Solutions',
      description: 'Grow with your business needs'
    },
    {
      icon: Clock,
      title: 'Regular Updates',
      description: 'Always have the latest features and improvements'
    },
    {
      icon: Shield,
      title: '24/7 Support',
      description: 'Expert support whenever you need it'
    },
    {
      icon: CheckCircle,
      title: 'Easy Integration',
      description: 'Seamlessly integrate with your existing tools'
    }
  ];

  const features = [
    'AI-powered automation',
    'Real-time analytics',
    'Mobile-first design',
    'Enterprise-grade security',
    'API integrations',
    'Custom branding options',
    'Multi-tenant architecture',
    'Automated backups'
  ];

  return (
    <>
      <Helmet>
        <title>Micro SaaS Solutions - Zion Tech Group | Ready-to-Use AI & IT Tools</title>
        <meta name="description" content="Discover our micro SaaS solutions - ready-to-use AI and IT tools for businesses. Quick deployment, no upfront costs, and scalable solutions." />
        <meta name="keywords" content="micro SaaS, AI tools, business software, ready-to-use solutions, cloud applications, business automation" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Micro <span className="text-cyan-400">SaaS</span> Solutions
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Ready-to-use AI and IT tools that you can deploy in minutes. 
              No complex setup, no upfront costs - just powerful solutions that work.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-cyan-400" />
                <span>Quick Deployment</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-purple-400" />
                <span>No Upfront Costs</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-pink-400" />
                <span>Scalable Solutions</span>
              </div>
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Our Micro SaaS Products</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {microSaasProducts.map((product) => (
                <div
                  key={product.id}
                  className={`bg-white/5 backdrop-blur-sm border rounded-2xl p-6 hover:border-cyan-400/50 transition-all duration-300 group relative ${
                    product.popular ? 'border-cyan-400/50 ring-2 ring-cyan-400/20' : 'border-white/20'
                  }`}
                >
                  {product.popular && (
                    <div className="absolute -top-3 -right-3">
                      <div className="bg-gradient-to-r from-cyan-400 to-purple-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                        Most Popular
                      </div>
                    </div>
                  )}
                  
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <product.icon className="w-6 h-6 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {product.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-4 text-sm line-clamp-3">{product.description}</p>
                  
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-400">Price:</span>
                      <span className="text-cyan-400 font-semibold">{product.price}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-400">Users:</span>
                      <span className="text-gray-300">{product.users}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-400">Trial:</span>
                      <span className="text-green-400">{product.trial}</span>
                    </div>
                  </div>

                  <ul className="space-y-2 mb-6">
                    {product.features.slice(0, 4).map((feature, index) => (
                      <li key={index} className="text-sm text-gray-300 flex items-start">
                        <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                    {product.features.length > 4 && (
                      <li className="text-sm text-gray-400">
                        +{product.features.length - 4} more features
                      </li>
                    )}
                  </ul>

                  <button className="w-full bg-gradient-to-r from-cyan-400 to-purple-500 text-white px-4 py-2 rounded-lg font-semibold hover:from-cyan-500 hover:to-purple-600 transition-all duration-300">
                    Start Free Trial
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Why Choose Micro SaaS?</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-sm border border-white/20 rounded-2xl p-6 text-center hover:border-cyan-400/50 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{benefit.title}</h3>
                  <p className="text-gray-300 text-sm">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="bg-white/5 backdrop-blur-sm border border-white/20 rounded-2xl p-8">
              <h2 className="text-3xl font-bold text-white mb-8 text-center">Built-in Features</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                    <span className="text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-cyan-400/10 to-purple-500/10 backdrop-blur-sm border border-cyan-400/20 rounded-2xl p-8">
              <h2 className="text-3xl font-bold text-white mb-4">Ready to Get Started?</h2>
              <p className="text-xl text-gray-300 mb-8">
                Choose the micro SaaS solution that fits your business needs. 
                Start with a free trial and scale as you grow.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-cyan-400 to-purple-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-500 hover:to-purple-600 transition-all duration-300 inline-flex items-center justify-center"
                >
                  <Zap className="w-5 h-5 mr-2" />
                  Start Free Trial
                </Link>
                <Link
                  to="/pricing"
                  className="bg-white/10 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/20 transition-all duration-300 border border-white/20"
                >
                  View All Plans
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default MicroSaasPage;