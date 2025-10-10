'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Cloud, Shield, Zap, BarChart, CheckCircle, ArrowRight, Star, Clock, Users, Database, Globe, Settings } from 'lucide-react';

const CloudMigrationPage: React.FC = () => {
  const features = [
    {
      icon: Cloud,
      title: 'Zero-Downtime Migration',
      description: 'Seamless migration to AWS, Azure, or Google Cloud with zero business disruption.',
      benefits: ['Live migration', 'Data integrity', 'Rollback capability', 'Testing environment']
    },
    {
      icon: Shield,
      title: 'Security & Compliance',
      description: 'Enterprise-grade security with compliance to industry standards and regulations.',
      benefits: ['SOC 2 compliance', 'GDPR ready', 'Encryption at rest', 'Access controls']
    },
    {
      icon: Zap,
      title: 'Performance Optimization',
      description: 'Optimize your cloud infrastructure for maximum performance and cost efficiency.',
      benefits: ['Auto-scaling', 'Load balancing', 'CDN integration', 'Performance monitoring']
    },
    {
      icon: BarChart,
      title: 'Cost Optimization',
      description: 'Reduce cloud costs by up to 40% with intelligent resource management and monitoring.',
      benefits: ['Cost analysis', 'Resource optimization', 'Reserved instances', 'Spot instances']
    },
    {
      icon: Database,
      title: 'Database Migration',
      description: 'Migrate databases with minimal downtime and data consistency guarantees.',
      benefits: ['Schema migration', 'Data validation', 'Backup & recovery', 'Performance tuning']
    },
    {
      icon: Settings,
      title: 'DevOps Integration',
      description: 'Integrate with existing DevOps workflows and CI/CD pipelines.',
      benefits: ['CI/CD integration', 'Infrastructure as Code', 'Monitoring setup', 'Automation']
    }
  ];

  const migrationSteps = [
    {
      step: '01',
      title: 'Assessment & Planning',
      description: 'Comprehensive analysis of your current infrastructure and migration requirements.',
      duration: '1-2 weeks',
      icon: BarChart
    },
    {
      step: '02',
      title: 'Strategy Development',
      description: 'Create detailed migration strategy with timeline, resources, and risk mitigation.',
      duration: '1 week',
      icon: Settings
    },
    {
      step: '03',
      title: 'Pilot Migration',
      description: 'Test migration with non-critical workloads to validate approach and tools.',
      duration: '2-3 weeks',
      icon: Zap
    },
    {
      step: '04',
      title: 'Full Migration',
      description: 'Execute full migration with monitoring, validation, and rollback capabilities.',
      duration: '2-4 weeks',
      icon: Cloud
    },
    {
      step: '05',
      title: 'Optimization',
      description: 'Fine-tune performance, security, and costs for optimal cloud operations.',
      duration: '1-2 weeks',
      icon: Shield
    }
  ];

  const cloudProviders = [
    {
      name: 'Amazon Web Services',
      description: 'Comprehensive cloud platform with extensive services and global reach.',
      features: ['200+ services', 'Global infrastructure', 'Enterprise support', 'Compliance ready'],
      icon: Cloud
    },
    {
      name: 'Microsoft Azure',
      description: 'Hybrid cloud platform with strong enterprise integration and security.',
      features: ['Hybrid cloud', 'Enterprise integration', 'AI services', 'DevOps tools'],
      icon: Shield
    },
    {
      name: 'Google Cloud',
      description: 'Data and AI-focused platform with advanced analytics and machine learning.',
      features: ['Big data analytics', 'AI/ML services', 'Global network', 'Cost optimization'],
      icon: BarChart
    }
  ];

  const pricing = [
    {
      name: 'Small Business',
      price: '$2,999',
      period: '/project',
      description: 'For small to medium businesses',
      features: [
        'Up to 10 servers',
        'Basic migration',
        'Email support',
        '30-day warranty',
        'Documentation'
      ],
      popular: false
    },
    {
      name: 'Enterprise',
      price: '$9,999',
      period: '/project',
      description: 'For large organizations',
      features: [
        'Up to 100 servers',
        'Advanced migration',
        'Priority support',
        '90-day warranty',
        'Training included',
        'Performance optimization',
        'Security hardening'
      ],
      popular: true
    },
    {
      name: 'Custom',
      price: 'Quote',
      period: '',
      description: 'For complex requirements',
      features: [
        'Unlimited servers',
        'Custom migration',
        'Dedicated team',
        '1-year warranty',
        '24/7 support',
        'White-label solution',
        'SLA guarantee'
      ],
      popular: false
    }
  ];

  const benefits = [
    {
      metric: '99.9%',
      description: 'Uptime guarantee',
      icon: Shield
    },
    {
      metric: '40%',
      description: 'Cost reduction',
      icon: BarChart
    },
    {
      metric: '50%',
      description: 'Performance improvement',
      icon: Zap
    },
    {
      metric: '24/7',
      description: 'Support available',
      icon: Users
    }
  ];

  return (
    <>
      <Helmet>
        <title>Cloud Migration Services - Zion Tech Group | AWS, Azure, Google Cloud</title>
        <meta name="description" content="Seamless cloud migration to AWS, Azure, or Google Cloud. Zero-downtime migration with 40% cost reduction and 99.9% uptime guarantee." />
        <meta name="keywords" content="cloud migration, AWS migration, Azure migration, Google Cloud migration, cloud services, infrastructure migration" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Cloud Migration Services
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Seamlessly migrate to AWS, Azure, or Google Cloud with zero downtime. Reduce costs by 40% and improve performance by 50% with our expert migration services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Get Free Assessment
              </button>
              <button className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400/10 font-semibold py-4 px-8 rounded-lg transition-all duration-300">
                View Case Studies
              </button>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Proven Results
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our cloud migration services deliver measurable improvements for businesses of all sizes
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center hover:bg-white/20 transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-4xl font-bold text-white mb-2">{benefit.metric}</div>
                  <p className="text-gray-300">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Migration Process Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Our Migration Process
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                A proven 5-step process that ensures successful cloud migration with minimal risk
              </p>
            </div>

            <div className="space-y-8">
              {migrationSteps.map((step, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300">
                  <div className="flex items-start">
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-2xl flex items-center justify-center mr-6 flex-shrink-0">
                      <step.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center mb-4">
                        <span className="text-2xl font-bold text-cyan-400 mr-4">{step.step}</span>
                        <h3 className="text-2xl font-bold text-white">{step.title}</h3>
                        <span className="ml-auto text-gray-400">{step.duration}</span>
                      </div>
                      <p className="text-gray-300 text-lg">{step.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Cloud Providers Section */}
        <section className="py-20 px-4 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Cloud Providers We Support
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We work with all major cloud providers to find the best fit for your business
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {cloudProviders.map((provider, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300">
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <provider.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{provider.name}</h3>
                    <p className="text-gray-300 mb-4">{provider.description}</p>
                  </div>
                  <ul className="space-y-2">
                    {provider.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-400">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
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
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Comprehensive Migration Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Everything you need for a successful cloud migration
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 group">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-400">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
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
        <section className="py-20 px-4 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Migration Packages
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the migration package that fits your infrastructure size and requirements
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricing.map((plan, index) => (
                <div key={index} className={`bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 relative ${plan.popular ? 'ring-2 ring-cyan-500' : ''}`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-300 ml-2">{plan.period}</span>
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

                  <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white hover:from-cyan-600 hover:to-purple-600'
                      : 'border border-white/20 text-white hover:bg-white/10'
                  }`}>
                    {plan.name === 'Custom' ? 'Get Quote' : 'Start Migration'}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/20 rounded-2xl p-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Migrate to the Cloud?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Get a free assessment and discover how much you can save with cloud migration.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                  Get Free Assessment
                </button>
                <button className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400/10 font-semibold py-4 px-8 rounded-lg transition-all duration-300">
                  Schedule Consultation
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CloudMigrationPage;