'use client';
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';
import { Settings, Shield, Users, CheckCircle, Phone, Mail, ArrowRight, Server, Database, Globe, Zap } from 'lucide-react';

const SystemAdminPage: React.FC = () => {
  const services = [
    {
      icon: Server,
      title: 'Server Management',
      description: 'Comprehensive server administration including setup, monitoring, and maintenance.',
      benefits: ['24/7 monitoring', 'Performance optimization', 'Security updates']
    },
    {
      icon: Database,
      title: 'Database Administration',
      description: 'Expert database management, optimization, and backup solutions.',
      benefits: ['Performance tuning', 'Backup & recovery', 'Security hardening']
    },
    {
      icon: Users,
      title: 'User Management',
      description: 'Complete user account lifecycle management and access control.',
      benefits: ['Account provisioning', 'Access control', 'Password policies']
    },
    {
      icon: Shield,
      title: 'Security Administration',
      description: 'Comprehensive security management and compliance monitoring.',
      benefits: ['Security monitoring', 'Compliance management', 'Incident response']
    },
    {
      icon: Settings,
      title: 'System Configuration',
      description: 'System setup, configuration, and optimization for peak performance.',
      benefits: ['System tuning', 'Configuration management', 'Performance monitoring']
    },
    {
      icon: Globe,
      title: 'Network Administration',
      description: 'Network infrastructure management and optimization.',
      benefits: ['Network monitoring', 'Traffic optimization', 'Security management']
    }
  ];

  const pricingPlans = [
    {
      name: 'Basic Admin',
      price: '$299',
      period: '/month',
      description: 'Essential system administration',
      features: [
        'Server monitoring',
        'Basic security',
        'User management',
        'Email support',
        'Monthly reports',
        '8/5 support'
      ],
      popular: false
    },
    {
      name: 'Professional Admin',
      price: '$599',
      period: '/month',
      description: 'Comprehensive administration',
      features: [
        'Full system management',
        'Advanced security',
        'Database administration',
        'Priority support',
        'Weekly reports',
        '24/7 monitoring',
        'Proactive maintenance'
      ],
      popular: true
    },
    {
      name: 'Enterprise Admin',
      price: '$1,299',
      period: '/month',
      description: 'Complete enterprise management',
      features: [
        'Dedicated administrator',
        'Custom solutions',
        'Advanced monitoring',
        '24/7 support',
        'Real-time reports',
        'SLA guarantee',
        'Custom integrations'
      ],
      popular: false
    }
  ];

  const stats = [
    { number: '99.9%', label: 'Uptime Guarantee' },
    { number: '24/7', label: 'Monitoring' },
    { number: '15+', label: 'Years Experience' },
    { number: '500+', label: 'Systems Managed' }
  ];

  return (
    <>
      <SEOOptimizer
        title="System Administration Services - Zion Tech Group"
        description="Professional system administration services with 99.9% uptime guarantee. 24/7 monitoring, security management, and comprehensive IT support."
        keywords={['system administration', 'server management', 'database administration', 'IT support', 'system monitoring']}
        canonicalUrl="https://ziontechgroup.com/system-admin"
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        <main className="pt-16">
          {/* Hero Section */}
          <section className="container mx-auto px-4 py-16 text-center">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text">
                System Administration Services
              </h1>
              <p className="text-xl md:text-2xl text-cyan-400 mb-8">
                Professional system management with 99.9% uptime
              </p>
              <p className="text-lg text-gray-300 mb-12 max-w-3xl mx-auto">
                Our expert system administrators provide comprehensive server management, 
                database administration, and security services to keep your systems running smoothly.
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

          {/* Services Section */}
          <section className="container mx-auto px-4 py-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
              Our Administration Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div key={index} className="cyber-card p-6 hover:scale-105 transition-all duration-300">
                  <service.icon className="w-12 h-12 text-cyan-400 mb-4" />
                  <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.benefits.map((benefit, idx) => (
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
              Administration Packages
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
                Ready to Optimize Your Systems?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Get professional system administration services today
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
                  <span>Get Free Assessment</span>
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

export default SystemAdminPage;