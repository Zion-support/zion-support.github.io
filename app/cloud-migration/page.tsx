'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Cloud, 
  ArrowRight, 
  CheckCircle, 
  Shield,
  Zap,
  Database,
  Server,
  Globe,
  Users,
  BarChart3,
  Clock,
  Target
} from 'lucide-react';

export default function CloudMigrationPage() {
  const features = [
    {
      icon: <Cloud className="w-8 h-8 text-blue-500" />,
      title: 'Multi-Cloud Strategy',
      description: 'Design and implement comprehensive multi-cloud strategies for optimal performance and cost efficiency.'
    },
    {
      icon: <Shield className="w-8 h-8 text-green-500" />,
      title: 'Security-First Approach',
      description: 'Ensure enterprise-grade security with encryption, compliance, and zero-trust architecture.'
    },
    {
      icon: <Zap className="w-8 h-8 text-yellow-500" />,
      title: 'Zero-Downtime Migration',
      description: 'Migrate your applications and data without any business disruption or downtime.'
    },
    {
      icon: <Database className="w-8 h-8 text-purple-500" />,
      title: 'Data Migration',
      description: 'Safely migrate databases, files, and applications with data integrity and consistency.'
    },
    {
      icon: <Server className="w-8 h-8 text-red-500" />,
      title: 'Infrastructure Optimization',
      description: 'Optimize cloud resources for performance, cost, and scalability requirements.'
    },
    {
      icon: <Globe className="w-8 h-8 text-cyan-500" />,
      title: 'Global Deployment',
      description: 'Deploy applications across multiple regions for optimal performance and availability.'
    }
  ];

  const migrationTypes = [
    {
      name: 'Lift and Shift',
      description: 'Quick migration of existing applications to cloud with minimal changes.',
      icon: <ArrowRight className="w-6 h-6 text-blue-500" />,
      timeline: '2-4 weeks',
      cost: 'Starting at $5,000'
    },
    {
      name: 'Replatforming',
      description: 'Optimize applications for cloud-native features and services.',
      icon: <Zap className="w-6 h-6 text-green-500" />,
      timeline: '4-8 weeks',
      cost: 'Starting at $15,000'
    },
    {
      name: 'Refactoring',
      description: 'Complete application redesign for cloud-native architecture.',
      icon: <Target className="w-6 h-6 text-purple-500" />,
      timeline: '8-16 weeks',
      cost: 'Starting at $50,000'
    },
    {
      name: 'Hybrid Cloud',
      description: 'Seamless integration between on-premises and cloud environments.',
      icon: <Server className="w-6 h-6 text-orange-500" />,
      timeline: '6-12 weeks',
      cost: 'Starting at $25,000'
    }
  ];

  const cloudProviders = [
    {
      name: 'Amazon Web Services',
      icon: <Cloud className="w-6 h-6 text-orange-500" />,
      features: ['EC2, S3, RDS', 'Lambda functions', 'Auto Scaling', 'CloudFormation']
    },
    {
      name: 'Microsoft Azure',
      icon: <Cloud className="w-6 h-6 text-blue-500" />,
      features: ['Virtual Machines', 'Azure SQL', 'Functions', 'Resource Manager']
    },
    {
      name: 'Google Cloud',
      icon: <Cloud className="w-6 h-6 text-green-500" />,
      features: ['Compute Engine', 'Cloud Storage', 'Cloud Functions', 'Deployment Manager']
    },
    {
      name: 'Multi-Cloud',
      icon: <Globe className="w-6 h-6 text-purple-500" />,
      features: ['Cross-platform', 'Vendor lock-in prevention', 'Best of breed', 'Cost optimization']
    }
  ];

  const pricingPlans = [
    {
      name: 'Assessment',
      price: '$2,500',
      description: 'Comprehensive cloud readiness assessment',
      features: [
        'Current infrastructure analysis',
        'Cloud readiness evaluation',
        'Cost optimization recommendations',
        'Security assessment',
        'Migration roadmap',
        'Risk analysis'
      ]
    },
    {
      name: 'Migration',
      price: 'Custom',
      description: 'Complete cloud migration service',
      features: [
        'End-to-end migration',
        'Zero-downtime deployment',
        'Data migration',
        'Application optimization',
        'Security implementation',
        'Performance monitoring',
        'Training and support'
      ],
      popular: true
    },
    {
      name: 'Optimization',
      price: '$1,500/month',
      description: 'Ongoing cloud optimization',
      features: [
        'Performance monitoring',
        'Cost optimization',
        'Security updates',
        'Scaling management',
        'Backup and recovery',
        '24/7 support',
        'Monthly reports'
      ]
    }
  ];

  const benefits = [
    'Reduce infrastructure costs by up to 40%',
    'Improve scalability and flexibility',
    'Enhance security and compliance',
    'Increase application performance',
    'Enable remote work capabilities',
    'Reduce maintenance overhead'
  ];

  const process = [
    {
      step: '1',
      title: 'Assessment',
      description: 'Analyze current infrastructure and identify migration requirements.'
    },
    {
      step: '2',
      title: 'Planning',
      description: 'Design cloud architecture and create detailed migration strategy.'
    },
    {
      step: '3',
      title: 'Migration',
      description: 'Execute migration with zero downtime and data integrity.'
    },
    {
      step: '4',
      title: 'Optimization',
      description: 'Fine-tune performance and optimize costs for maximum efficiency.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
      <Helmet>
        <title>Cloud Migration Services - Zion Tech Group | Seamless Cloud Transformation</title>
        <meta name="description" content="Transform your business with professional cloud migration services. Zero-downtime migration, security-first approach, and cost optimization for AWS, Azure, and Google Cloud." />
        <meta name="keywords" content="cloud migration, AWS migration, Azure migration, Google Cloud, cloud transformation, infrastructure migration, Zion Tech Group" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
              Cloud Migration Services
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Transform your business with seamless cloud migration. Zero-downtime deployment, 
              security-first approach, and cost optimization across all major cloud platforms.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
              >
                Get Free Assessment
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/demo"
                className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"
              >
                View Case Studies
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Comprehensive Migration Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Everything you need for a successful cloud transformation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 hover:border-cyan-500/30 transition-all duration-300">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Migration Types Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Migration Strategies
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the right migration approach for your business needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {migrationTypes.map((type, index) => (
              <div key={index} className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 hover:border-purple-500/30 transition-all duration-300">
                <div className="mb-4 flex justify-center">{type.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3 text-center">{type.name}</h3>
                <p className="text-gray-300 mb-4 text-center">{type.description}</p>
                <div className="text-center">
                  <p className="text-cyan-400 font-semibold mb-1">{type.timeline}</p>
                  <p className="text-green-400 font-semibold">{type.cost}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cloud Providers Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Cloud Platform Expertise
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Certified experts in all major cloud platforms.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {cloudProviders.map((provider, index) => (
              <div key={index} className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 hover:border-green-500/30 transition-all duration-300 text-center">
                <div className="mb-4 flex justify-center">{provider.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-4">{provider.name}</h3>
                <ul className="space-y-2">
                  {provider.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-gray-300 text-sm">
                      • {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Migration Process
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A proven methodology for successful cloud migration.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div key={index} className="text-center">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">{step.step}</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{step.title}</h3>
                <p className="text-gray-300">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Cloud Migration?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Transform your business with the power of cloud computing.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center space-x-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                <span className="text-gray-300">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Flexible Pricing Options
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the service level that fits your migration needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`bg-slate-800/50 rounded-xl p-8 border ${plan.popular ? 'border-blue-500' : 'border-slate-700'} hover:border-cyan-500/30 transition-all duration-300 relative`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="text-4xl font-bold text-white mb-2">{plan.price}</div>
                  <p className="text-gray-400">{plan.description}</p>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700'
                      : 'border border-slate-600 text-white hover:bg-slate-700'
                  }`}
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-6 sm:p-8 lg:p-12 text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Transform Your Infrastructure?
            </h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of businesses that have successfully migrated to the cloud with our expert guidance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300"
              >
                Get Free Assessment
              </Link>
              <Link
                to="/pricing"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                View All Plans
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}