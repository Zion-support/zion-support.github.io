'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, ArrowRight, Phone, Mail, MapPin, Zap, Shield, Brain, Globe, Star, Users, TrendingUp, Clock, DollarSign, Cloud, Database, Server } from 'lucide-react';

const CloudMigrationServicesPage: React.FC = () => {
  const features = [
    {
      icon: Cloud,
      title: 'Multi-Cloud Strategy',
      description: 'Design and implement comprehensive cloud strategies across AWS, Azure, and Google Cloud'
    },
    {
      icon: Database,
      title: 'Data Migration',
      description: 'Seamlessly migrate databases and data with zero downtime and data integrity'
    },
    {
      icon: Server,
      title: 'Infrastructure as Code',
      description: 'Automate cloud infrastructure deployment using Terraform, CloudFormation, and ARM templates'
    },
    {
      icon: Shield,
      title: 'Security & Compliance',
      description: 'Ensure enterprise-grade security and compliance throughout the migration process'
    }
  ];

  const pricingPlans = [
    {
      name: 'Assessment',
      price: '$2,500',
      period: 'one-time',
      description: 'Comprehensive cloud readiness assessment',
      features: [
        'Current infrastructure analysis',
        'Cloud readiness assessment',
        'Migration strategy planning',
        'Cost optimization recommendations',
        'Security audit',
        'Detailed migration roadmap'
      ],
      popular: false
    },
    {
      name: 'Standard Migration',
      price: '$15,000',
      period: 'project',
      description: 'Complete cloud migration for small to medium businesses',
      features: [
        'Full infrastructure migration',
        'Data migration and validation',
        'Application modernization',
        'Security configuration',
        'Performance optimization',
        '30 days post-migration support'
      ],
      popular: true
    },
    {
      name: 'Enterprise Migration',
      price: 'Custom',
      period: 'pricing',
      description: 'Large-scale enterprise cloud transformation',
      features: [
        'Multi-cloud architecture design',
        'Legacy system modernization',
        'Custom application migration',
        'Advanced security implementation',
        'Disaster recovery setup',
        'Dedicated project manager'
      ],
      popular: false
    }
  ];

  const benefits = [
    'Reduce infrastructure costs by up to 40%',
    'Improve scalability and flexibility',
    'Enhanced security and compliance',
    'Faster deployment and updates',
    'Better disaster recovery capabilities',
    'Access to latest cloud technologies',
    'Improved performance and reliability',
    '24/7 monitoring and support'
  ];

  const migrationSteps = [
    {
      step: '01',
      title: 'Assessment & Planning',
      description: 'Analyze current infrastructure and create detailed migration strategy'
    },
    {
      step: '02',
      title: 'Design & Architecture',
      description: 'Design cloud architecture and select optimal cloud services'
    },
    {
      step: '03',
      title: 'Migration Execution',
      description: 'Execute migration with minimal downtime and data integrity'
    },
    {
      step: '04',
      title: 'Testing & Optimization',
      description: 'Comprehensive testing and performance optimization'
    },
    {
      step: '05',
      title: 'Go-Live & Support',
      description: 'Deploy to production and provide ongoing support'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Cloud Migration Services | Zion Tech Group</title>
        <meta name="description" content="Expert cloud migration services for AWS, Azure, and Google Cloud. Seamless migration with zero downtime and maximum security." />
        <meta name="keywords" content="cloud migration, AWS migration, Azure migration, Google Cloud, cloud services, Zion Tech Group" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Cloud Migration
              </span>
              <br />
              <span className="text-white">Services</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Expert cloud migration services for AWS, Azure, and Google Cloud. 
              Seamless migration with zero downtime and maximum security.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center">
                Get Free Assessment
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300">
                View Case Studies
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Comprehensive Cloud Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We provide end-to-end cloud migration services across all major cloud platforms.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg mb-4">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Migration Process */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Migration Process
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A proven 5-step process for successful cloud migration.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {migrationSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">{step.step}</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{step.title}</h3>
                <p className="text-gray-300">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Transparent Pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the migration package that fits your needs and budget.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`relative bg-white/10 backdrop-blur-sm rounded-xl p-8 border transition-all duration-300 ${
                plan.popular 
                  ? 'border-purple-400 scale-105 shadow-2xl shadow-purple-500/25' 
                  : 'border-white/20 hover:border-white/40'
              }`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-300 ml-1">{plan.period}</span>
                  </div>
                  <p className="text-gray-300 mt-2">{plan.description}</p>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-400 mr-3 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-purple-500 to-blue-600 text-white hover:from-purple-600 hover:to-blue-700'
                    : 'border border-white text-white hover:bg-white hover:text-gray-900'
                }`}>
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Our Cloud Migration Services?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We have successfully migrated 500+ businesses to the cloud with zero data loss.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-purple-400 mt-1 flex-shrink-0" />
                <p className="text-gray-300 text-lg">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Migrate to the Cloud?
            </h2>
            <p className="text-xl text-purple-100 mb-8">
              Get a free cloud readiness assessment and migration strategy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center">
                <Phone className="mr-2 h-5 w-5" />
                Call: (302) 464-0950
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300 flex items-center justify-center">
                <Mail className="mr-2 h-5 w-5" />
                Email Us
              </button>
            </div>
            <p className="text-purple-200 text-sm mt-4">
              📍 364 E Main St STE 1008, Middletown, DE 19709
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CloudMigrationServicesPage;