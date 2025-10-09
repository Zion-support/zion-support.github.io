'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Cloud, Shield, Zap, Target, TrendingUp, CheckCircle, ArrowRight, Star, Award, Globe, Server, Database, Users, Clock, Phone } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const CloudMigrationPage: React.FC = () => {
  const features = [
    {
      icon: Cloud,
      title: 'Seamless Migration',
      description: 'Zero-downtime migration to cloud platforms with minimal business disruption',
      benefits: ['Zero downtime', 'Data integrity', 'Rollback capability']
    },
    {
      icon: Database,
      title: 'Data Migration',
      description: 'Secure and efficient migration of databases and data warehouses',
      benefits: ['Data validation', 'Incremental sync', 'Backup & recovery']
    },
    {
      icon: Server,
      title: 'Infrastructure Setup',
      description: 'Complete cloud infrastructure setup and configuration',
      benefits: ['Auto-scaling', 'Load balancing', 'Security configuration']
    },
    {
      icon: Shield,
      title: 'Security First',
      description: 'Enterprise-grade security throughout the migration process',
      benefits: ['Data encryption', 'Access controls', 'Compliance']
    },
    {
      icon: Zap,
      title: 'Performance Optimization',
      description: 'Optimize your cloud infrastructure for maximum performance and cost efficiency',
      benefits: ['Auto-scaling', 'Load balancing', 'Performance monitoring', 'Cost optimization']
    },
    {
      icon: Target,
      title: 'Multi-Cloud Strategy',
      description: 'Design and implement multi-cloud architectures for maximum flexibility and redundancy',
      benefits: ['Vendor independence', 'Disaster recovery', 'Cost optimization', 'Flexibility']
    }
  ];

  const migrationSteps = [
    {
      step: '1',
      title: 'Assessment & Planning',
      description: 'Comprehensive analysis of current infrastructure and migration strategy',
      icon: CheckCircle,
      features: ['Infrastructure audit', 'Cost analysis', 'Migration timeline']
    },
    {
      step: '2',
      title: 'Design & Architecture',
      description: 'Create detailed migration plan with timelines and rollback strategies',
      icon: Target,
      features: ['Cloud architecture design', 'Security planning', 'Performance optimization']
    },
    {
      step: '3',
      title: 'Migration Execution',
      description: 'Execute the migration with minimal downtime and maximum data integrity',
      icon: Zap,
      features: ['Data migration', 'Application deployment', 'Testing & validation']
    },
    {
      step: '4',
      title: 'Optimization & Support',
      description: 'Ongoing optimization and support to ensure peak performance',
      icon: TrendingUp,
      features: ['Performance tuning', 'Cost optimization', '24/7 support']
    }
  ];

  const pricingPlans = [
    {
      name: 'Basic Migration',
      price: '$2,500',
      period: '/project',
      description: 'Simple cloud migration for small businesses',
      features: [
        'Up to 5 servers',
        'Basic data migration',
        'Email support',
        '30-day warranty',
        'Documentation'
      ],
      popular: false
    },
    {
      name: 'Professional Migration',
      price: '$5,000',
      period: '/project',
      description: 'Comprehensive migration for growing companies',
      features: [
        'Up to 20 servers',
        'Advanced data migration',
        'Priority support',
        '90-day warranty',
        'Performance optimization',
        'Security hardening'
      ],
      popular: true
    },
    {
      name: 'Enterprise Migration',
      price: '$10,000',
      period: '/project',
      description: 'Full-scale migration for large organizations',
      features: [
        'Unlimited servers',
        'Complex data migration',
        'Dedicated support',
        '1-year warranty',
        'Custom solutions',
        'Multi-cloud strategy',
        'SLA guarantee'
      ],
      popular: false
    }
  ];

  const stats = [
    { icon: Cloud, value: '200+', label: 'Successful Migrations' },
    { icon: Shield, value: '99.9%', label: 'Uptime During Migration' },
    { icon: TrendingUp, value: '40%', label: 'Average Cost Reduction' },
    { icon: Clock, value: '48h', label: 'Average Migration Time' }
  ];

  return (
    <>
      <Helmet>
        <title>Cloud Migration Services - Zero Downtime Cloud Migration | Zion Tech Group</title>
        <meta name="description" content="Professional cloud migration services with zero downtime. Migrate your applications and data to AWS, Azure, or GCP with guaranteed data integrity and minimal disruption." />
        <meta name="keywords" content="cloud migration, AWS migration, Azure migration, GCP migration, zero downtime migration, cloud services" />
        <link rel="canonical" href="https://ziontechgroup.com/cloud-migration" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        <Navigation />
        
        <main className="pt-20">
          {/* Hero Section */}
          <section className="container mx-auto px-4 py-16 text-center">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                Cloud Migration Services
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Seamless cloud migration with zero downtime and guaranteed data integrity
              </p>
              <p className="text-lg text-gray-700 mb-12 max-w-3xl mx-auto">
                Migrate your applications and data to the cloud with our proven methodology. 
                We ensure zero downtime, data integrity, and optimal performance throughout the migration process.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center"
                >
                  Get Started
                  <ArrowRight className="w-5 h-5 ml-2" />
                </a>
                <a
                  href="/demo"
                  className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300 inline-flex items-center"
                >
                  View Demo
                </a>
              </div>
            </div>
          </section>

          {/* Stats Section */}
          <section className="container mx-auto px-4 py-16">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center bg-white rounded-lg p-6 shadow-lg">
                  <stat.icon className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Features Section */}
          <section className="container mx-auto px-4 py-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
              Migration Services
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                      <feature.icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">{feature.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-6">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Migration Process Section */}
          <section className="container mx-auto px-4 py-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
              Our Migration Process
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {migrationSteps.map((step, index) => (
                <div key={index} className="bg-white rounded-lg p-8 shadow-lg text-center">
                  <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{step.title}</h3>
                  <p className="text-gray-600 mb-6">{step.description}</p>
                  <ul className="space-y-2 text-left">
                    {step.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Pricing Section */}
          <section className="container mx-auto px-4 py-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
              Migration Packages
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`bg-white rounded-lg p-8 shadow-lg relative ${plan.popular ? 'ring-2 ring-blue-600' : ''}`}>
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <div className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </div>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                    <p className="text-gray-600 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-blue-600">{plan.price}</span>
                      <span className="text-gray-600 ml-1">{plan.period}</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-600">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <a
                    href="/contact"
                    className={`block w-full text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                      plan.popular
                        ? 'bg-blue-600 text-white hover:bg-blue-700'
                        : 'border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white'
                    }`}
                  >
                    Get Started
                  </a>
                </div>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <section className="container mx-auto px-4 py-16">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-center text-white">
              <h2 className="text-3xl font-bold mb-4">
                Ready to Migrate to the Cloud?
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Get a free migration assessment and discover how cloud migration can transform your business operations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Get Free Assessment
                </a>
                <a
                  href="tel:+13024640950"
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 inline-flex items-center"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call (302) 464-0950
                </a>
              </div>
              <div className="mt-8 text-sm opacity-90">
                <p>📧 kleber@ziontechgroup.com | 📍 364 E Main St STE 1008, Middletown DE 19709</p>
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