'use client';
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';
import { Network, Shield, Zap, CheckCircle, Phone, Mail, Brain, Users, Target, BarChart, Wifi } from 'lucide-react';

const NetworkSolutionsPage: React.FC = () => {
  const features = [
    {
      icon: Network,
      title: 'Network Design',
      description: 'Expert network architecture and design for optimal performance and scalability.',
      benefits: ['Scalable design', 'Performance optimization', 'Future-proofing']
    },
    {
      icon: Shield,
      title: 'Network Security',
      description: 'Comprehensive network security with firewalls, intrusion detection, and threat prevention.',
      benefits: ['Firewall protection', 'Intrusion detection', 'Threat prevention']
    },
    {
      icon: Brain,
      title: 'AI-Powered Monitoring',
      description: 'AI-powered network monitoring and optimization for maximum performance and reliability.',
      benefits: ['Real-time monitoring', 'Predictive analytics', 'Automated optimization']
    },
    {
      icon: Zap,
      title: 'Load Balancing',
      description: 'Advanced load balancing and traffic management for high availability and performance.',
      benefits: ['Traffic distribution', 'High availability', 'Performance optimization']
    },
    {
      icon: Wifi,
      title: 'Wireless Solutions',
      description: 'Enterprise-grade wireless networking with seamless connectivity and security.',
      benefits: ['Wi-Fi 6 support', 'Seamless roaming', 'Security encryption']
    },
    {
      icon: BarChart,
      title: 'Network Analytics',
      description: 'Comprehensive network analytics and reporting for performance insights and optimization.',
      benefits: ['Performance metrics', 'Traffic analysis', 'Capacity planning']
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$699',
      period: '/month',
      description: 'Perfect for small networks',
      features: [
        'Up to 50 devices',
        'Basic monitoring',
        'Email support',
        'Standard security',
        '1 network admin',
        'Basic reporting'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$1,499',
      period: '/month',
      description: 'Ideal for growing businesses',
      features: [
        'Up to 200 devices',
        'Advanced monitoring',
        'Priority support',
        'Advanced security',
        'Dedicated admin',
        'Advanced reporting',
        'AI optimization',
        '24/7 monitoring'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$3,999',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Unlimited devices',
        'Custom monitoring',
        'Dedicated support',
        'Enterprise security',
        'Network team',
        'Custom reporting',
        'Custom AI models',
        'SLA guarantee',
        'On-site support'
      ],
      popular: false
    }
  ];

  const stats = [
    { number: '99.9%', label: 'Uptime Guarantee' },
    { number: '50%', label: 'Performance Boost' },
    { number: '24/7', label: 'Monitoring' },
    { number: '100%', label: 'Security Coverage' }
  ];

  return (
    <>
      <SEOOptimizer
        title="Network Solutions - Zion Tech Group"
        description="Enterprise network solutions with 99.9% uptime guarantee and 50% performance boost. AI-powered monitoring and comprehensive security."
        keywords={['network solutions', 'network design', 'network security', 'network monitoring', 'load balancing', 'wireless networking']}
        canonicalUrl="https://ziontechgroup.com/network-solutions"
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        <main className="pt-16">
          {/* Hero Section */}
          <section className="container mx-auto px-4 py-16 text-center">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text">
                Network Solutions
              </h1>
              <p className="text-xl md:text-2xl text-cyan-400 mb-8">
                Enterprise networks with 99.9% uptime guarantee
              </p>
              <p className="text-lg text-gray-300 mb-12 max-w-3xl mx-auto">
                Our comprehensive network solutions combine expert design, advanced security, 
                and AI-powered monitoring to ensure your network performs at peak efficiency.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
                <a
                  href="tel:+13024640950"
                  className="cyber-button flex items-center space-x-2"
                >
                  <Phone className="w-5 h-5" />
                  <span>Call (302) 464-0950</span>
                </a>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="cyber-button flex items-center space-x-2"
                  style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
                >
                  <Mail className="w-5 h-5" />
                  <span>Get Free Assessment</span>
                </a>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
                {stats.map((stat, index) => (
                  <div key={index} className="cyber-card p-6 text-center">
                    <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2 neon-text">
                      {stat.number}
                    </div>
                    <div className="text-gray-300 font-medium">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section className="container mx-auto px-4 py-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
              Comprehensive Network Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="cyber-card p-6 hover:scale-105 transition-all duration-300">
                  <feature.icon className="w-12 h-12 text-cyan-400 mb-4" />
                  <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center space-x-2 text-sm text-cyan-400">
                        <CheckCircle className="w-4 h-4" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Pricing Section */}
          <section className="container mx-auto px-4 py-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
              Transparent Network Pricing
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`cyber-card p-8 relative ${
                    plan.popular ? 'ring-2 ring-cyan-400 scale-105' : ''
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-cyan-400 text-slate-900 px-4 py-1 rounded-full text-sm font-bold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-400 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-cyan-400">{plan.price}</span>
                      <span className="text-gray-400 ml-1">{plan.period}</span>
                    </div>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href="tel:+13024640950"
                    className={`w-full block text-center py-3 px-6 rounded-lg font-medium transition-all duration-300 ${
                      plan.popular
                        ? 'bg-cyan-400 text-slate-900 hover:bg-cyan-300'
                        : 'bg-slate-700 text-white hover:bg-slate-600'
                    }`}
                  >
                    Get Started
                  </a>
                </div>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <section className="container mx-auto px-4 py-16 text-center">
            <div className="cyber-card p-12 max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 neon-text">
                Ready to Optimize Your Network?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join 400+ businesses already using our network solutions
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+13024640950"
                  className="cyber-button flex items-center justify-center space-x-2"
                >
                  <Phone className="w-5 h-5" />
                  <span>Call (302) 464-0950</span>
                </a>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="cyber-button flex items-center justify-center space-x-2"
                  style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
                >
                  <Mail className="w-5 h-5" />
                  <span>Schedule Assessment</span>
                </a>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default NetworkSolutionsPage;