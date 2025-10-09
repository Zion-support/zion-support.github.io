'use client';
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';
import { Cloud, Shield, Zap, Target, BarChart, Users, CheckCircle, Phone, Mail, ArrowRight, Settings, Globe, Brain } from 'lucide-react';

const CloudMigrationPage: React.FC = () => {
  const services = [
    {
      icon: Cloud,
      title: 'Cloud Strategy',
      description: 'Comprehensive cloud strategy development and migration planning.',
      benefits: ['Migration roadmap', 'Cost optimization', 'Risk assessment']
    },
    {
      icon: Shield,
      title: 'Security Migration',
      description: 'Secure migration of applications and data to cloud platforms.',
      benefits: ['Data encryption', 'Compliance', 'Security monitoring']
    },
    {
      icon: Zap,
      title: 'Application Migration',
      description: 'Seamless migration of applications to cloud environments.',
      benefits: ['Zero downtime', 'Performance optimization', 'Scalability']
    },
    {
      icon: Target,
      title: 'Data Migration',
      description: 'Safe and efficient migration of databases and data stores.',
      benefits: ['Data integrity', 'Backup strategies', 'Validation']
    },
    {
      icon: Settings,
      title: 'Infrastructure Setup',
      description: 'Cloud infrastructure setup and configuration for optimal performance.',
      benefits: ['Auto-scaling', 'Load balancing', 'Monitoring']
    },
    {
      icon: Globe,
      title: 'Multi-Cloud Solutions',
      description: 'Hybrid and multi-cloud solutions for maximum flexibility.',
      benefits: ['Vendor independence', 'Cost optimization', 'Disaster recovery']
    }
  ];

  const pricingPlans = [
    {
      name: 'Assessment',
      price: '$5,000',
      period: '/project',
      description: 'Cloud readiness assessment',
      features: [
        'Current state analysis',
        'Migration strategy',
        'Cost estimation',
        'Risk assessment',
        'Timeline planning',
        'Recommendations report'
      ],
      popular: false
    },
    {
      name: 'Migration',
      price: '$25,000',
      period: '/project',
      description: 'Complete cloud migration',
      features: [
        'Full migration execution',
        'Data migration',
        'Application migration',
        'Security setup',
        'Testing & validation',
        '30 days support'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '/project',
      description: 'Large-scale migration',
      features: [
        'Multi-phase migration',
        'Custom solutions',
        'Dedicated team',
        '24/7 support',
        'Ongoing optimization',
        'SLA guarantee'
      ],
      popular: false
    }
  ];

  const stats = [
    { number: '99.9%', label: 'Uptime Guarantee' },
    { number: '50%', label: 'Cost Reduction' },
    { number: '300%', label: 'Performance Improvement' },
    { number: '24/7', label: 'Support Available' }
  ];

  const platforms = [
    {
      title: 'AWS Migration',
      description: 'Complete migration to Amazon Web Services with optimization.',
      icon: Cloud
    },
    {
      title: 'Azure Migration',
      description: 'Microsoft Azure cloud migration and hybrid solutions.',
      icon: Globe
    },
    {
      title: 'Google Cloud',
      description: 'Google Cloud Platform migration with AI/ML integration.',
      icon: Brain
    },
    {
      title: 'Hybrid Cloud',
      description: 'Hybrid cloud solutions combining on-premises and cloud.',
      icon: Settings
    }
  ];

  return (
    <>
      <SEOOptimizer
        title="Cloud Migration Services - Zion Tech Group"
        description="Professional cloud migration services with 99.9% uptime guarantee. 50% cost reduction, 300% performance improvement, and 24/7 support."
        keywords={['cloud migration', 'AWS migration', 'Azure migration', 'cloud strategy', 'data migration']}
        canonicalUrl="https://ziontechgroup.com/cloud-migration"
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        <main className="pt-16">
          {/* Hero Section */}
          <section className="container mx-auto px-4 py-16 text-center">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text">
                Cloud Migration Services
              </h1>
              <p className="text-xl md:text-2xl text-cyan-400 mb-8">
                Seamless cloud migration with 99.9% uptime
              </p>
              <p className="text-lg text-gray-300 mb-12 max-w-3xl mx-auto">
                Our expert cloud migration services help businesses transition to the cloud 
                with minimal downtime, maximum security, and optimal performance.
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
              Migration Services
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

          {/* Platforms Section */}
          <section className="container mx-auto px-4 py-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
              Cloud Platforms
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {platforms.map((platform, index) => (
                <div key={index} className="cyber-card p-6 hover:scale-105 transition-all duration-300">
                  <platform.icon className="w-12 h-12 text-cyan-400 mb-4" />
                  <h3 className="text-xl font-bold text-white mb-3">{platform.title}</h3>
                  <p className="text-gray-300">{platform.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Pricing Section */}
          <section className="container mx-auto px-4 py-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
              Migration Packages
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
                Ready to Move to the Cloud?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Get expert cloud migration services today
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

export default CloudMigrationPage;