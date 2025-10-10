'use client';
import React from 'react';
import { Cloud, ArrowRight, Shield, Zap, CheckCircle, Star, BarChart, Clock, Users, Globe, Phone, Mail, Database, Server, Lock, Settings } from 'lucide-react';
import SEOOptimizer from '../components/SEOOptimizer';

const CloudMigrationPage: React.FC = () => {
  const features = [
    {
      icon: <Cloud className="w-6 h-6" />,
      title: 'Multi-Cloud Strategy',
      description: 'Migrate to AWS, Azure, or Google Cloud with our proven migration methodology'
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Zero-Downtime Migration',
      description: 'Seamless migration with 99.9% uptime guarantee and minimal business disruption'
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Performance Optimization',
      description: 'Optimize cloud resources for maximum performance and cost efficiency'
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: 'Data Migration',
      description: 'Secure and efficient migration of databases, applications, and data'
    },
    {
      icon: <Lock className="w-6 h-6" />,
      title: 'Security & Compliance',
      description: 'Enterprise-grade security with SOC 2, HIPAA, and GDPR compliance'
    },
    {
      icon: <Settings className="w-6 h-6" />,
      title: '24/7 Support',
      description: 'Round-the-clock monitoring and support for your cloud infrastructure'
    }
  ];

  const pricingPlans = [
    {
      name: 'Small Business',
      price: '$1,299',
      period: '/month',
      description: 'For small to medium businesses',
      features: [
        'Up to 10 servers',
        'Basic migration planning',
        'Email support',
        'Standard monitoring',
        'Basic security'
      ],
      popular: false
    },
    {
      name: 'Enterprise',
      price: '$2,999',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Up to 100 servers',
        'Advanced migration strategy',
        'Priority support',
        'Advanced monitoring',
        'Enhanced security',
        'Custom integrations',
        'SLA guarantee'
      ],
      popular: true
    },
    {
      name: 'Custom',
      price: 'Contact',
      period: 'Us',
      description: 'Tailored solutions',
      features: [
        'Unlimited servers',
        'Custom migration plan',
        'Dedicated team',
        '24/7 support',
        'White-label solution',
        'On-site assistance',
        'Custom SLA'
      ],
      popular: false
    }
  ];

  const benefits = [
    {
      title: 'Cost Reduction',
      description: 'Reduce infrastructure costs by up to 40% with cloud optimization',
      icon: <BarChart className="w-8 h-8 text-green-400" />,
      stats: '40% cost savings'
    },
    {
      title: 'Scalability',
      description: 'Scale resources up or down based on demand automatically',
      icon: <Zap className="w-8 h-8 text-blue-400" />,
      stats: 'Unlimited scalability'
    },
    {
      title: 'Security',
      description: 'Enhanced security with enterprise-grade protection',
      icon: <Shield className="w-8 h-8 text-purple-400" />,
      stats: '99.9% security uptime'
    },
    {
      title: 'Performance',
      description: 'Improve application performance and user experience',
      icon: <Clock className="w-8 h-8 text-cyan-400" />,
      stats: '50% faster performance'
    }
  ];

  const migrationSteps = [
    {
      step: '01',
      title: 'Assessment & Planning',
      description: 'Comprehensive analysis of your current infrastructure and migration requirements',
      icon: <BarChart className="w-8 h-8 text-cyan-400" />
    },
    {
      step: '02',
      title: 'Strategy Development',
      description: 'Create a detailed migration strategy with timelines and risk mitigation',
      icon: <Settings className="w-8 h-8 text-green-400" />
    },
    {
      step: '03',
      title: 'Pilot Migration',
      description: 'Test migration with a small subset of applications and data',
      icon: <Zap className="w-8 h-8 text-blue-400" />
    },
    {
      step: '04',
      title: 'Full Migration',
      description: 'Execute the complete migration with minimal downtime',
      icon: <Cloud className="w-8 h-8 text-purple-400" />
    },
    {
      step: '05',
      title: 'Optimization',
      description: 'Fine-tune cloud resources for optimal performance and cost',
      icon: <Star className="w-8 h-8 text-yellow-400" />
    },
    {
      step: '06',
      title: 'Ongoing Support',
      description: '24/7 monitoring and support for your cloud infrastructure',
      icon: <Users className="w-8 h-8 text-pink-400" />
    }
  ];

  const cloudProviders = [
    {
      name: 'Amazon Web Services',
      description: 'Leading cloud platform with comprehensive services',
      icon: '☁️',
      features: ['EC2, S3, RDS', 'Lambda functions', 'Auto Scaling', 'Global infrastructure']
    },
    {
      name: 'Microsoft Azure',
      description: 'Enterprise-focused cloud platform with hybrid capabilities',
      icon: '🔵',
      features: ['Virtual Machines', 'Azure SQL', 'Active Directory', 'Hybrid cloud']
    },
    {
      name: 'Google Cloud',
      description: 'AI and data-focused cloud platform',
      icon: '🔍',
      features: ['BigQuery', 'AI/ML services', 'Kubernetes', 'Data analytics']
    }
  ];

  return (
    <>
      <SEOOptimizer
        title="Cloud Migration Services - Zion Tech Group"
        description="Expert cloud migration services with zero downtime guarantee. Migrate to AWS, Azure, or Google Cloud with 40% cost savings and 99.9% uptime. Get free consultation today."
        keywords={['cloud migration', 'AWS migration', 'Azure migration', 'Google Cloud migration', 'cloud services', 'infrastructure migration']}
        canonicalUrl="https://ziontechgroup.com/cloud-migration"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-24 pb-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center space-x-2 bg-blue-500/10 text-blue-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Cloud className="w-4 h-4" />
                <span>Cloud Migration Services</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 neon-text">
                Cloud Migration Services
              </h1>
              
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Seamlessly migrate your infrastructure to the cloud with zero downtime guarantee. 
                Reduce costs by 40% and improve performance with our expert migration services.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+13024640950"
                  className="cyber-button inline-flex items-center space-x-2"
                >
                  <Phone className="w-5 h-5" />
                  <span>Call: (302) 464-0950</span>
                </a>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="border-2 border-blue-400 text-blue-400 px-8 py-3 rounded-lg font-semibold hover:bg-blue-400 hover:text-slate-900 transition-all duration-300"
                >
                  Get Free Assessment
                </a>
              </div>
            </div>

            {/* Key Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
              <div className="cyber-card hologram-card p-6 text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">99.9%</div>
                <div className="text-gray-300">Uptime Guarantee</div>
              </div>
              <div className="cyber-card hologram-card p-6 text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">40%</div>
                <div className="text-gray-300">Cost Reduction</div>
              </div>
              <div className="cyber-card hologram-card p-6 text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">500+</div>
                <div className="text-gray-300">Successful Migrations</div>
              </div>
              <div className="cyber-card hologram-card p-6 text-center">
                <div className="text-3xl font-bold text-pink-400 mb-2">24/7</div>
                <div className="text-gray-300">Support Available</div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4 neon-text">
                Comprehensive Migration Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                End-to-end cloud migration with expert guidance and support
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="cyber-card hologram-card p-8 hover:scale-105 transition-all duration-300">
                  <div className="text-blue-400 mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Migration Process Section */}
        <section className="py-16 px-4 bg-slate-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4 neon-text">
                Our Migration Process
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Proven 6-step methodology for successful cloud migration
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {migrationSteps.map((step, index) => (
                <div key={index} className="cyber-card hologram-card p-8">
                  <div className="flex items-center mb-6">
                    <div className="text-2xl font-bold text-cyan-400 mr-4">{step.step}</div>
                    <div className="text-cyan-400">
                      {step.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{step.title}</h3>
                  <p className="text-gray-300">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Cloud Providers Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4 neon-text">
                Cloud Providers
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We work with all major cloud platforms
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {cloudProviders.map((provider, index) => (
                <div key={index} className="cyber-card hologram-card p-8">
                  <div className="text-4xl mb-4">{provider.icon}</div>
                  <h3 className="text-2xl font-bold text-white mb-4">{provider.name}</h3>
                  <p className="text-gray-300 mb-6">{provider.description}</p>
                  <ul className="space-y-2">
                    {provider.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-2 text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-4 bg-slate-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4 neon-text">
                Business Benefits
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Transform your infrastructure with measurable results
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="cyber-card hologram-card p-8 text-center">
                  <div className="mb-6 flex justify-center">
                    {benefit.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{benefit.title}</h3>
                  <p className="text-gray-300 mb-4">{benefit.description}</p>
                  <div className="text-lg font-bold text-blue-400">{benefit.stats}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4 neon-text">
                Flexible Pricing Plans
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the perfect plan for your migration needs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`cyber-card hologram-card p-8 relative ${
                    plan.popular ? 'ring-2 ring-blue-400 scale-105' : ''
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-blue-400 text-slate-900 px-4 py-2 rounded-full text-sm font-bold">
                        Most Popular
                      </div>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-400 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-5xl font-bold text-blue-400">{plan.price}</span>
                      <span className="text-gray-400 ml-2">{plan.period}</span>
                    </div>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href="tel:+13024640950"
                    className={`w-full py-3 px-6 rounded-lg font-semibold text-center transition-all duration-300 ${
                      plan.popular
                        ? 'bg-blue-400 text-slate-900 hover:bg-blue-300'
                        : 'border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-slate-900'
                    }`}
                  >
                    Get Started
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 bg-gradient-to-r from-blue-500/10 to-purple-500/10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6 neon-text">
              Ready to Migrate to the Cloud?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join 500+ companies that have successfully migrated with our expert guidance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                className="cyber-button inline-flex items-center space-x-2"
              >
                <Phone className="w-5 h-5" />
                <span>Call: (302) 464-0950</span>
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-slate-900 transition-all duration-300"
              >
                Schedule Consultation
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CloudMigrationPage;