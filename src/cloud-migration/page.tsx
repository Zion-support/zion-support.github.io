'use client';
import React from 'react';
import { Cloud, ArrowRight, Shield, Zap, CheckCircle, Users, BarChart, Settings, Database, Globe, Lock, Clock, DollarSign, Target } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const CloudMigrationPage: React.FC = () => {
  const services = [
    {
      icon: Cloud,
      title: 'Cloud Assessment',
      description: 'Comprehensive analysis of your current infrastructure and cloud readiness',
      benefits: ['Infrastructure audit', 'Cost analysis', 'Security assessment', 'Migration planning']
    },
    {
      icon: ArrowRight,
      title: 'Migration Strategy',
      description: 'Custom migration roadmap tailored to your business needs and timeline',
      benefits: ['Phased approach', 'Risk mitigation', 'Downtime minimization', 'Rollback planning']
    },
    {
      icon: Shield,
      title: 'Security & Compliance',
      description: 'Ensure your cloud migration meets security and compliance requirements',
      benefits: ['Security hardening', 'Compliance mapping', 'Data protection', 'Access controls']
    },
    {
      icon: Zap,
      title: 'Performance Optimization',
      description: 'Optimize your cloud infrastructure for maximum performance and cost efficiency',
      benefits: ['Auto-scaling', 'Load balancing', 'Resource optimization', 'Cost monitoring']
    },
    {
      icon: Database,
      title: 'Data Migration',
      description: 'Secure and efficient migration of your data to the cloud',
      benefits: ['Zero data loss', 'Minimal downtime', 'Data validation', 'Backup strategies']
    },
    {
      icon: Settings,
      title: 'Post-Migration Support',
      description: 'Ongoing support and optimization after your cloud migration',
      benefits: ['24/7 monitoring', 'Performance tuning', 'Cost optimization', 'Training']
    }
  ];

  const cloudProviders = [
    {
      name: 'Amazon Web Services (AWS)',
      description: 'Comprehensive cloud platform with extensive services and global reach',
      features: ['200+ services', 'Global infrastructure', 'Enterprise-grade security', 'Pay-as-you-go pricing'],
      icon: '☁️'
    },
    {
      name: 'Microsoft Azure',
      description: 'Hybrid cloud platform with strong enterprise integration capabilities',
      features: ['Hybrid cloud', 'Office 365 integration', 'Enterprise security', 'Compliance tools'],
      icon: '🔷'
    },
    {
      name: 'Google Cloud Platform (GCP)',
      description: 'AI and machine learning focused cloud platform with competitive pricing',
      features: ['AI/ML services', 'Big data analytics', 'Kubernetes native', 'Global network'],
      icon: '🔵'
    }
  ];

  const migrationTypes = [
    {
      title: 'Lift and Shift',
      description: 'Move applications to cloud with minimal changes',
      duration: '2-4 weeks',
      complexity: 'Low',
      cost: 'Low',
      benefits: ['Quick migration', 'Minimal changes', 'Lower risk', 'Faster ROI']
    },
    {
      title: 'Replatforming',
      description: 'Optimize applications for cloud while maintaining core architecture',
      duration: '4-8 weeks',
      complexity: 'Medium',
      cost: 'Medium',
      benefits: ['Better performance', 'Cloud optimization', 'Cost savings', 'Scalability']
    },
    {
      title: 'Refactoring',
      description: 'Completely redesign applications for cloud-native architecture',
      duration: '8-16 weeks',
      complexity: 'High',
      cost: 'High',
      benefits: ['Maximum benefits', 'Cloud-native features', 'Best performance', 'Future-proof']
    }
  ];

  const pricingPlans = [
    {
      name: 'Assessment Only',
      price: '$5,000',
      period: 'one-time',
      description: 'Comprehensive cloud readiness assessment',
      features: [
        'Infrastructure audit',
        'Cost analysis',
        'Security assessment',
        'Migration roadmap',
        'Detailed report'
      ],
      popular: false
    },
    {
      name: 'Standard Migration',
      price: '$25,000',
      period: 'project',
      description: 'Complete migration for small to medium businesses',
      features: [
        'Full migration service',
        'Data migration',
        'Security setup',
        'Testing & validation',
        '30 days support'
      ],
      popular: true
    },
    {
      name: 'Enterprise Migration',
      price: 'Custom',
      period: 'pricing',
      description: 'Large-scale enterprise cloud migration',
      features: [
        'Dedicated team',
        'Custom strategy',
        'Ongoing support',
        'Training programs',
        'SLA guarantee'
      ],
      popular: false
    }
  ];

  const stats = [
    { number: '200+', label: 'Migrations Completed' },
    { number: '40%', label: 'Average Cost Savings' },
    { number: '99.9%', label: 'Uptime Achieved' },
    { number: '30%', label: 'Performance Improvement' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16 pt-24">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 cyber-text-3d neon-pulse">
            Cloud Migration Services
          </h1>
          <p className="text-xl md:text-2xl text-cyan-400 mb-8 font-medium">
            Seamless cloud migration with zero downtime and maximum security
          </p>
          <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-8">
            Transform your business with our comprehensive cloud migration services. We help organizations 
            move to the cloud securely, efficiently, and cost-effectively, ensuring minimal disruption 
            and maximum benefits.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <a
              href="/contact"
              className="cyber-button px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300"
            >
              Get Free Assessment
            </a>
            <a
              href="#services"
              className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
            >
              Our Services
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">{stat.number}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center neon-text">
            Our Migration Services
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="cyber-card p-6 hover:scale-105 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center mb-6">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 neon-text">{service.title}</h3>
                <p className="text-gray-300 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Cloud Providers Section */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center neon-text">
            Cloud Platform Expertise
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {cloudProviders.map((provider, index) => (
              <div key={index} className="cyber-card p-8 hover:scale-105 transition-all duration-300">
                <div className="text-center mb-6">
                  <div className="text-6xl mb-4">{provider.icon}</div>
                  <h3 className="text-2xl font-bold text-white mb-2 neon-text">{provider.name}</h3>
                  <p className="text-gray-300">{provider.description}</p>
                </div>
                <ul className="space-y-3">
                  {provider.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Migration Types Section */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center neon-text">
            Migration Approaches
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {migrationTypes.map((type, index) => (
              <div key={index} className="cyber-card p-8 hover:scale-105 transition-all duration-300">
                <h3 className="text-2xl font-bold text-white mb-4 neon-text">{type.title}</h3>
                <p className="text-gray-300 mb-6">{type.description}</p>
                
                <div className="grid grid-cols-3 gap-4 mb-6 text-center">
                  <div>
                    <div className="text-cyan-400 font-bold">{type.duration}</div>
                    <div className="text-sm text-gray-400">Duration</div>
                  </div>
                  <div>
                    <div className="text-purple-400 font-bold">{type.complexity}</div>
                    <div className="text-sm text-gray-400">Complexity</div>
                  </div>
                  <div>
                    <div className="text-green-400 font-bold">{type.cost}</div>
                    <div className="text-sm text-gray-400">Cost</div>
                  </div>
                </div>
                
                <div>
                  <h4 className="text-cyan-400 font-semibold mb-3">Benefits:</h4>
                  <ul className="space-y-2">
                    {type.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                        <ArrowRight className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Process Section */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center neon-text">
            Our Migration Process
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Assessment</h3>
              <p className="text-gray-300">Analyze current infrastructure and plan migration strategy</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Planning</h3>
              <p className="text-gray-300">Create detailed migration plan with timelines and milestones</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Migration</h3>
              <p className="text-gray-300">Execute migration with minimal downtime and maximum security</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">4</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Optimization</h3>
              <p className="text-gray-300">Optimize performance and provide ongoing support</p>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center neon-text">
            Flexible Pricing Options
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`cyber-card p-8 relative ${plan.popular ? 'ring-2 ring-cyan-400' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-cyan-400 text-slate-900 px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </div>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-cyan-400">{plan.price}</span>
                    <span className="text-gray-400 ml-1">{plan.period}</span>
                  </div>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <a
                  href="/contact"
                  className={`block w-full text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-cyan-500 text-white hover:bg-cyan-600'
                      : 'border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900'
                  }`}
                >
                  Get Started
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <div className="cyber-card p-12 max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 neon-text">
              Ready to Move to the Cloud?
            </h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Let our cloud migration experts help you transition to the cloud with confidence. 
              Get a free assessment and discover how much you can save.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="cyber-button px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300"
              >
                Get Free Assessment
              </a>
              <a
                href="tel:+13024640950"
                className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                Call +1 302 464 0950
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default CloudMigrationPage;