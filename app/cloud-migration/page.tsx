import React from 'react';
import { Cloud, Shield, Zap, Target, TrendingUp, CheckCircle, ArrowRight, Star, Award, Globe, Server, Database, Users, Clock, Phone, Mail } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const CloudMigrationPage: React.FC = React.memo(() => {
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
      title: 'Strategic Planning',
      description: 'Comprehensive migration strategy tailored to your business needs',
      benefits: ['Risk assessment', 'Timeline planning', 'Resource allocation']
    }
  ];

  const benefits = [
    'Reduce infrastructure costs by up to 40%',
    'Improve scalability and flexibility',
    'Enhanced security and compliance',
    'Better disaster recovery capabilities',
    'Access to latest cloud technologies',
    'Improved performance and reliability',
    'Simplified IT management',
    'Global accessibility and collaboration'
  ];

  const migrationSteps = [
    {
      step: '1',
      title: 'Assessment & Planning',
      description: 'Comprehensive analysis of your current infrastructure and migration requirements',
      icon: Target
    },
    {
      step: '2',
      title: 'Strategy Development',
      description: 'Custom migration strategy with timeline and resource allocation',
      icon: TrendingUp
    },
    {
      step: '3',
      title: 'Pilot Migration',
      description: 'Small-scale pilot migration to validate approach and identify issues',
      icon: Zap
    },
    {
      step: '4',
      title: 'Full Migration',
      description: 'Complete migration with zero downtime and data integrity assurance',
      icon: Cloud
    },
    {
      step: '5',
      title: 'Optimization',
      description: 'Post-migration optimization for performance and cost efficiency',
      icon: Award
    }
  ];

  const pricing = [
    {
      plan: 'Assessment',
      price: '$2,500',
      description: 'Comprehensive cloud readiness assessment',
      features: [
        'Infrastructure audit',
        'Migration strategy',
        'Cost analysis',
        'Risk assessment',
        'Timeline planning',
        'Recommendations report'
      ],
      popular: false
    },
    {
      plan: 'Migration',
      price: '$15,000',
      description: 'Complete migration service',
      features: [
        'Everything in Assessment',
        'Full migration execution',
        'Data migration',
        'Application migration',
        'Testing & validation',
        '30-day support'
      ],
      popular: true
    },
    {
      plan: 'Enterprise',
      price: 'Custom',
      description: 'Large-scale enterprise migration',
      features: [
        'Everything in Migration',
        'Dedicated team',
        'Custom integrations',
        'Extended support',
        'Training & documentation',
        'Ongoing optimization'
      ],
      popular: false
    }
  ];

  return (
    <>
      <Helmet>
        <title>Cloud Migration Services - Seamless Cloud Transition | Zion Tech Group</title>
        <meta name="description" content="Migrate your applications and data to the cloud with zero downtime. Expert cloud migration services with comprehensive planning and execution." />
        <meta name="keywords" content="cloud migration, AWS migration, Azure migration, Google Cloud, data migration, infrastructure migration" />
        <link rel="canonical" href="https://ziontechgroup.com/cloud-migration" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        <main className="pt-24 pb-16 px-4">
          <div className="max-w-7xl mx-auto">
            {/* Hero Section */}
            <section className="text-center mb-16">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text">
                Cloud Migration Services
              </h1>
              <p className="text-xl text-cyan-400 mb-8">
                Seamless migration to the cloud with zero downtime
              </p>
              <p className="text-lg text-gray-300 mb-12 max-w-3xl mx-auto">
                Transform your business with our expert cloud migration services. We ensure a smooth, 
                secure transition to the cloud while minimizing disruption to your operations.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+13024640950"
                  className="cyber-button px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300 inline-flex items-center"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call (302) 464-0950
                </a>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300 inline-flex items-center"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Get Quote
                </a>
              </div>
            </section>

            {/* Features Section */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-white text-center mb-12">
                Our Migration Expertise
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {features.map((feature, index) => (
                  <div key={index} className="cyber-card p-8 hover:scale-105 transition-all duration-300">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                        <feature.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                        <p className="text-gray-300 mb-4">{feature.description}</p>
                        <ul className="space-y-2">
                          {feature.benefits.map((benefit, benefitIndex) => (
                            <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                              <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Benefits Section */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-white text-center mb-12">
                Why Migrate to the Cloud?
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">{benefit}</h3>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Migration Process Section */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-white text-center mb-12">
                Our Migration Process
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
                {migrationSteps.map((step, index) => (
                  <div key={index} className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl font-bold text-white">{step.step}</span>
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                    <p className="text-gray-300 text-sm">{step.description}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Pricing Section */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-white text-center mb-12">
                Migration Packages
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {pricing.map((plan, index) => (
                  <div key={index} className={`cyber-card p-8 relative ${plan.popular ? 'ring-2 ring-cyan-400' : ''}`}>
                    {plan.popular && (
                      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                        <div className="bg-cyan-400 text-slate-900 px-4 py-1 rounded-full text-sm font-semibold">
                          Most Popular
                        </div>
                      </div>
                    )}
                    
                    <div className="text-center mb-8">
                      <h3 className="text-2xl font-bold text-white mb-2">{plan.plan}</h3>
                      <p className="text-gray-300 mb-4">{plan.description}</p>
                      <div className="text-4xl font-bold text-cyan-400 mb-2">{plan.price}</div>
                    </div>
                    
                    <ul className="space-y-4 mb-8">
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
                          ? 'cyber-button'
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
              <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-lg p-12 text-center cyber-card">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 neon-text">
                  Ready to Migrate to the Cloud?
                </h2>
                <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                  Let our experts guide you through a seamless cloud migration that transforms your business.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="/contact"
                    className="cyber-button px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300"
                  >
                    Start Migration
                  </a>
                  <a
                    href="tel:+13024640950"
                    className="flex items-center gap-2 border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
                  >
                    <Phone className="w-5 h-5" />
                    Call (302) 464-0950
                  </a>
                </div>
                <div className="mt-8 text-sm opacity-90">
                  <p>📧 kleber@ziontechgroup.com | 📍 364 E Main St STE 1008, Middletown DE 19709</p>
                </div>
              </div>
            </section>
          </div>
        </main>
        
        <Footer />
      </div>
    </>
  );
});

export default CloudMigrationPage;