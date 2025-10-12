'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Cloud, Shield, Zap, CheckCircle } from 'lucide-react';

export default function CloudMigrationPro() {
import { Cloud, Shield, Zap, Database, Users } from 'lucide-react';
import Layout from '../layout';

export default function CloudMigrationProPage() {
  const features = [
    {
      icon: <Cloud className="w-6 h-6 text-cyan-400" />,
      title: 'Seamless Migration',
      description: 'Zero-downtime migration to cloud platforms with minimal business disruption'
    },
    {
      icon: <Shield className="w-6 h-6 text-purple-400" />,
      title: 'Security First',
      description: 'Enterprise-grade security protocols throughout the migration process'
    },
    {
      icon: <Zap className="w-6 h-6 text-yellow-400" />,
      title: 'Performance Optimization',
      description: 'Optimize applications for cloud-native performance and scalability'
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-green-400" />,
      title: 'Quality Assurance',
      description: 'Comprehensive testing and validation to ensure migration success'
    }
  ];

  const migrationSteps = [
    {
      step: '01',
      title: 'Assessment & Planning',
      description: 'Comprehensive analysis of your current infrastructure and migration requirements'
    },
    {
      step: '02',
      title: 'Strategy Development',
      description: 'Custom migration strategy tailored to your business needs and goals'
    },
    {
      step: '03',
      title: 'Migration Execution',
      description: 'Seamless migration with minimal downtime and maximum data integrity'
    },
    {
      step: '04',
      title: 'Optimization & Support',
      description: 'Post-migration optimization and ongoing support for optimal performance'
    }
  ];

  const pricingPlans = [
    {
      name: 'Basic Migration',
      price: '$5,000',
      description: 'Perfect for small applications',
      features: [
        'Single application migration',
        'Basic security setup',
        'Email support',
        '30-day warranty',
        'Performance testing'
      ],
      popular: false
    },
    {
      name: 'Professional Migration',
      price: '$15,000',
      description: 'Ideal for medium businesses',
      features: [
        'Up to 5 applications',
        'Advanced security',
        'Priority support',
        '90-day warranty',
        'Performance optimization',
        'Training included'
      ],
      popular: true
    },
    {
      name: 'Enterprise Migration',
      price: '$50,000',
      description: 'For large organizations',
      features: [
        'Unlimited applications',
        'Enterprise security',
        'Dedicated support',
        '1-year warranty',
        'Custom optimization',
        '24/7 monitoring',
        'White-label solution'
      ],
      popular: false
    }
  ];

  const migrationFeatures = [
    {
      icon: <Database className="w-6 h-6 text-green-400" />,
      title: 'Data Migration',
      description: 'Safe and secure migration of databases and data warehouses'
    },
    {
      icon: <Users className="w-6 h-6 text-orange-400" />,
      title: 'Team Training',
      description: 'Comprehensive training for your team on new cloud technologies'
    }
  ];

  const pricingPlans = [
    {
      name: 'Assessment',
      price: '$2,999',
      period: '/project',
      description: 'Comprehensive cloud readiness assessment',
      features: [
        'Infrastructure analysis',
        'Security assessment',
        'Cost analysis',
        'Migration roadmap',
        'Risk evaluation'
      ],
      popular: false
    },
    {
      name: 'Migration',
      price: '$9,999',
      period: '/project',
      description: 'Complete cloud migration service',
      features: [
        'Full migration execution',
        'Data migration',
        'Application optimization',
        'Testing & validation',
        'Go-live support',
        '30 days post-migration support'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$24,999',
      period: '/project',
      description: 'Large-scale enterprise migration',
      features: [
        'Multi-cloud strategy',
        'Custom migration tools',
        'Dedicated team',
        '24/7 support',
        'Training & documentation',
        '90 days post-migration support'
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'TechCorp Solutions',
      content: 'The migration was seamless. We experienced zero downtime and improved performance by 40%.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      company: 'Global Enterprises',
      content: 'Their expertise in cloud migration saved us months of work and potential security risks.',
      rating: 5
    },
    {
      name: 'Emily Davis',
      company: 'StartupScale Inc',
      content: 'The team training was excellent. Our staff was fully prepared for the new cloud environment.',
      rating: 5
    }
  ];

import { Cloud, Shield, Zap, CheckCircle } from 'lucide-react';

export default function CloudMigrationPro() {
  const features = [
    {
      icon: <Cloud className="w-6 h-6 text-cyan-400" />,
      title: 'Seamless Migration',
      description: 'Zero-downtime migration to cloud platforms with minimal business disruption'
    },
    {
      icon: <Shield className="w-6 h-6 text-purple-400" />,
      title: 'Security First',
      description: 'Enterprise-grade security measures throughout the migration process'
    },
    {
      icon: <Zap className="w-6 h-6 text-yellow-400" />,
      title: 'Performance Optimization',
      description: 'Optimize applications for cloud-native performance and scalability'
    }
  ];

  const migrationSteps = [
    {
      step: 'Assessment',
      description: 'Comprehensive analysis of your current infrastructure and applications',
      features: ['Infrastructure audit', 'Application inventory', 'Dependency mapping', 'Risk assessment']
    },
    {
      step: 'Planning',
      description: 'Detailed migration strategy and timeline development',
      features: ['Migration strategy', 'Timeline planning', 'Resource allocation', 'Testing plan']
    },
    {
      step: 'Migration',
      description: 'Execute migration with minimal downtime and maximum security',
      features: ['Data migration', 'Application migration', 'Configuration management', 'Testing']
    },
    {
      step: 'Optimization',
      description: 'Post-migration optimization and performance tuning',
      features: ['Performance tuning', 'Cost optimization', 'Security hardening', 'Monitoring setup']
    }
  ];

  return (
    <>
      <Helmet>
        <title>Cloud Migration Pro - Zion Tech Group</title>
        <meta name="description" content="Professional cloud migration services by Zion Tech Group. Seamless, secure, and optimized cloud transitions." />
        <meta name="description" content="Professional cloud migration services by Zion Tech Group. Seamless, secure, and optimized cloud migration solutions." />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
        {/* Hero Section */}
        <div className="container mx-auto px-4 py-20">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-white mb-6">
              Cloud Migration Pro
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Professional cloud migration services by Zion Tech Group. Seamless, secure, and optimized cloud transitions.
              Professional cloud migration services by Zion Tech Group. Seamless, secure, and optimized cloud migration solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
              >
                Get Started
              </Link>
              <Link 
                to="/contact" 
                className="border border-cyan-500 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-500/10 transition-all duration-300 transform hover:scale-105"
              >
                Learn More
              </Link>
            </div>
          </div>

          {/* Features Section */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
                <div className="flex justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* Migration Process Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white text-center mb-12">Our Migration Process</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {migrationSteps.map((step, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
                  <div className="text-4xl font-bold text-cyan-400 mb-4">{step.step}</div>
                  <h3 className="text-xl font-semibold text-white mb-2">{step.title}</h3>
                  <p className="text-gray-300">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                Migration Features
              </h2>
              <p className="text-gray-300 text-lg">
                Comprehensive cloud migration solutions
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-lg border border-gray-700">
                  <div className="flex items-center mb-4">
                    {feature.icon}
                    <h3 className="text-xl font-semibold text-white ml-3">{feature.title}</h3>
                  </div>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Pricing Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white text-center mb-12">Migration Packages</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`bg-white/10 backdrop-blur-sm rounded-lg p-8 ${plan.popular ? 'ring-2 ring-cyan-400' : ''}`}>
                  {plan.popular && (
                    <div className="text-center mb-4">
                      <span className="bg-cyan-400 text-white px-4 py-2 rounded-full text-sm font-medium">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-6">{plan.description}</p>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-gray-300 flex items-center">
                        <CheckCircle className="w-5 h-5 text-cyan-400 mr-3" />
        </div>

        {/* Migration Steps */}
        <div className="py-20 bg-gray-900/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                Our Migration Process
              </h2>
              <p className="text-gray-300 text-lg">
                Proven methodology for successful cloud migration
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {migrationSteps.map((step, index) => (
                <div key={index} className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-lg border border-gray-700">
                  <div className="text-cyan-400 font-bold text-lg mb-2">Step {index + 1}</div>
                  <h3 className="text-xl font-semibold text-white mb-4">{step.step}</h3>
                  <p className="text-gray-300 mb-4">{step.description}</p>
                  <ul className="space-y-2">
                    {step.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-400">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link 
                    to="/contact" 
                    className={`w-full py-3 px-6 rounded-lg font-semibold text-center transition-colors ${
                      plan.popular 
                        ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white hover:from-cyan-600 hover:to-purple-600' 
                        : 'bg-white/20 text-white hover:bg-white/30'
                    }`}
                  >
                    Get Started
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Migrate to the Cloud?</h2>
            <p className="text-lg text-gray-300 mb-8">Contact us today to discuss your cloud migration needs and get a free consultation.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
        </div>

        {/* CTA Section */}
        <div className="py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold text-white mb-4">
              Ready to Migrate to the Cloud?
            </h2>
            <p className="text-gray-300 text-lg mb-8">
              Let our experts guide you through a seamless cloud migration
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
              >
                Start Migration
              </Link>
              <Link 
                to="/services" 
                className="border border-cyan-500 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-500/10 transition-all duration-300 transform hover:scale-105"
              >
                View All Services
        <meta name="description" content="Professional cloud migration services with zero downtime and enhanced security." />
      </Helmet>
      
      <Layout>
        {/* Hero Section */}
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 flex items-center justify-center px-4">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
              Cloud Migration Pro
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Seamlessly migrate your infrastructure to the cloud with our professional migration 
              services. Zero downtime, enhanced security, and optimized performance guaranteed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-500 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-600 hover:to-cyan-700 transition-all">
                Start Migration
              </button>
              <Link to="#demo" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors">
                View Case Studies
                to="/about" 
                className="border border-cyan-500 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-500/10 transition-all duration-300 transform hover:scale-105"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="py-20 bg-gray-900">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 text-center">
              Professional Migration Services
            </h2>
            <p className="text-gray-300 text-center mb-12">
              Comprehensive cloud migration with enterprise-grade security and performance
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-blue-400 transition-colors">
                  <div className="flex items-center mb-4">
                    {feature.icon}
                    <h3 className="text-xl font-semibold text-white ml-3">{feature.title}</h3>
                  </div>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Pricing Section */}
        <div className="py-20 bg-slate-900">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 text-center">
              Migration Service Packages
            </h2>
            <p className="text-gray-300 text-center mb-12">
              Choose the migration package that fits your infrastructure needs
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`bg-gray-800 p-8 rounded-lg border-2 relative ${plan.popular ? 'border-blue-400' : 'border-gray-700'}`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-blue-400 text-black px-4 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-6">{plan.description}</p>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400">{plan.period}</span>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <Cloud className="w-5 h-5 text-blue-400 mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-blue-500 to-cyan-600 text-white hover:from-blue-600 hover:to-cyan-700'
                        : 'border-2 border-blue-400 text-blue-400 hover:bg-blue-400/10'
                    }`}
                  >
                    Get Started
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="py-20 bg-gray-900">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-white mb-4 text-center">
              Trusted by Industry Leaders
            </h2>
            <p className="text-gray-300 text-center mb-12">
              See how companies successfully migrated to the cloud
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-gray-800 p-6 rounded-lg border border-gray-700">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="text-yellow-400">★</span>
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4">"{testimonial.content}"</p>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-sm text-gray-400">{testimonial.company}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="py-20 bg-slate-900">
          <div className="max-w-4xl mx-auto text-center px-4">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Migrate to the Cloud?
            </h2>
            <p className="text-gray-300 mb-8">
              Join thousands of companies that have successfully migrated with our expert team
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="bg-gradient-to-r from-blue-500 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-600 hover:to-cyan-700 transition-all duration-300">
                Start Your Migration
              </Link>
              <Link to="/about" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}