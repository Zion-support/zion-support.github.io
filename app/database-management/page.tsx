'use client';
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';
import { Database, Brain, Zap, CheckCircle, Phone, Mail, Shield, Users, Target, BarChart, Lock } from 'lucide-react';

const DatabaseManagementPage: React.FC = () => {
  const features = [
    {
      icon: Database,
      title: 'Database Design',
      description: 'Expert database design and architecture for optimal performance and scalability.',
      benefits: ['Schema design', 'Performance optimization', 'Scalability planning']
    },
    {
      icon: Brain,
      title: 'AI-Powered Optimization',
      description: 'AI analyzes your database performance and automatically optimizes queries and indexes.',
      benefits: ['Query optimization', 'Index tuning', 'Performance monitoring']
    },
    {
      icon: Zap,
      title: 'Migration Services',
      description: 'Seamless database migration between different platforms and cloud providers.',
      benefits: ['Zero downtime', 'Data integrity', 'Performance testing']
    },
    {
      icon: Shield,
      title: 'Security & Compliance',
      description: 'Comprehensive database security with encryption, access control, and compliance.',
      benefits: ['Data encryption', 'Access control', 'Audit logging']
    },
    {
      icon: BarChart,
      title: 'Monitoring & Analytics',
      description: 'Real-time database monitoring and analytics for performance and health insights.',
      benefits: ['Real-time monitoring', 'Performance metrics', 'Health alerts']
    },
    {
      icon: Lock,
      title: 'Backup & Recovery',
      description: 'Automated backup and disaster recovery solutions for data protection.',
      benefits: ['Automated backups', 'Point-in-time recovery', 'Disaster recovery']
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$399',
      period: '/month',
      description: 'Perfect for small databases',
      features: [
        'Up to 5 databases',
        'Basic optimization',
        'Email support',
        'Standard monitoring',
        'Basic backup',
        '1 database admin'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$999',
      period: '/month',
      description: 'Ideal for growing businesses',
      features: [
        'Up to 25 databases',
        'Advanced optimization',
        'Priority support',
        'Advanced monitoring',
        'Advanced backup',
        'Dedicated admin',
        'AI optimization',
        'Performance tuning'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$2,499',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Unlimited databases',
        'Custom optimization',
        'Dedicated support',
        'Custom monitoring',
        'Enterprise backup',
        'Database team',
        'Custom AI models',
        'SLA guarantee',
        'On-site support'
      ],
      popular: false
    }
  ];

  const stats = [
    { number: '300%', label: 'Performance Boost' },
    { number: '99.9%', label: 'Uptime Guarantee' },
    { number: '50+', label: 'Database Types' },
    { number: '24/7', label: 'Expert Support' }
  ];

  return (
    <>
      <SEOOptimizer
        title="Database Management Services - Zion Tech Group"
        description="Expert database management with 300% performance boost and 99.9% uptime guarantee. AI-powered optimization and 24/7 support."
        keywords={['database management', 'database optimization', 'database migration', 'database security', 'database monitoring', 'database administration']}
        canonicalUrl="https://ziontechgroup.com/database-management"
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        <main className="pt-16">
          {/* Hero Section */}
          <section className="container mx-auto px-4 py-16 text-center">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text">
                Database Management Services
              </h1>
              <p className="text-xl md:text-2xl text-cyan-400 mb-8">
                Boost database performance by 300% with AI-powered optimization
              </p>
              <p className="text-lg text-gray-300 mb-12 max-w-3xl mx-auto">
                Our expert database management services combine AI-powered optimization, 
                security, and monitoring to ensure your databases perform at peak efficiency.
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
              Comprehensive Database Services
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
              Transparent Database Pricing
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
                Ready to Optimize Your Databases?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join 600+ businesses already using our database services
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

export default DatabaseManagementPage;