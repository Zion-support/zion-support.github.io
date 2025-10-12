'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Cloud, CheckCircle, Shield, Zap, Globe } from 'lucide-react';

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
      description: 'Optimize your applications for cloud-native performance and scalability'
    },
    {
      icon: <Globe className="w-6 h-6 text-green-400" />,
      title: 'Multi-Cloud Support',
      description: 'Migrate to AWS, Azure, Google Cloud, or hybrid cloud environments'
    }
  ];

  const migrationSteps = [
    {
      step: 'Assessment',
      title: 'Cloud Readiness Assessment',
      description: 'Comprehensive analysis of your current infrastructure and applications'
    },
    {
      step: 'Planning',
      title: 'Migration Strategy',
      description: 'Detailed migration plan tailored to your business requirements'
    },
    {
      step: 'Migration',
      title: 'Seamless Migration',
      description: 'Execute migration with minimal downtime and maximum security'
    },
    {
      step: 'Optimization',
      title: 'Post-Migration Optimization',
      description: 'Fine-tune performance and costs for optimal cloud operations'
    }
  ];

  const pricingPlans = [
    {
      name: 'Basic Migration',
      price: '$5,000',
      period: '/project',
      description: 'Perfect for small applications',
      features: [
        'Single application migration',
        'Basic security setup',
        'Email support',
        '30-day warranty',
        'Documentation'
      ],
      popular: false
    },
    {
      name: 'Professional Migration',
      price: '$15,000',
      period: '/project',
      description: 'Ideal for medium businesses',
      features: [
        'Multiple applications',
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
      period: '/project',
      description: 'For large organizations',
      features: [
        'Full infrastructure migration',
        'Custom security solutions',
        'Dedicated support',
        '1-year warranty',
        'Ongoing optimization',
        '24/7 monitoring'
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: 'Michael Chen',
      company: 'TechCorp Solutions',
      content: 'The migration was seamless. We saved 40% on infrastructure costs and improved performance significantly.',
      rating: 5
    },
    {
      name: 'Sarah Williams',
      company: 'Global Enterprises',
      content: 'Zero downtime migration exceeded our expectations. The team was professional and efficient.',
      rating: 5
    },
    {
      name: 'David Rodriguez',
      company: 'StartupHub Inc',
      content: 'Cloud migration enabled us to scale rapidly. The optimization recommendations were spot-on.',
      rating: 5
    }
  ];

  return (
    <>
      <Helmet>
        <title>Cloud Migration Pro - Zion Tech Group</title>
        <meta name="description" content="Professional cloud migration services by Zion Tech Group. Seamless, secure, and cost-effective cloud migration solutions." />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-400/20 text-cyan-400 text-sm font-medium mb-6">
              <Cloud className="w-4 h-4 mr-2" />
              Cloud Migration Services
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
              Cloud Migration Pro
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Seamlessly migrate your applications and infrastructure to the cloud with our expert 
              migration services. Zero downtime, maximum security, and optimal performance.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
              >
                Start Migration
              </Link>
              <Link 
                to="#demo" 
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                View Portfolio
              </Link>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Expert Migration Services
              </h2>
              <p className="text-gray-300 text-lg">
                Professional cloud migration with zero downtime and maximum security
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                  <div className="flex items-center mb-4">
                    {feature.icon}
                    <h3 className="text-xl font-semibold text-white ml-3">{feature.title}</h3>
                  </div>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Migration Steps */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Our Migration Process
              </h2>
              <p className="text-gray-300 text-lg">
                A proven methodology for successful cloud migrations
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {migrationSteps.map((step, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                  <div className="flex items-center mb-4">
                    <div className="w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center text-white font-bold mr-3">
                      {index + 1}
                    </div>
                    <h3 className="text-xl font-semibold text-white">{step.title}</h3>
                  </div>
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
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Transparent Migration Pricing
              </h2>
              <p className="text-gray-300 text-lg">
                Clear pricing for cloud migration projects
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`relative bg-white/5 backdrop-blur-sm rounded-xl p-8 border ${plan.popular ? 'border-cyan-400' : 'border-white/10'}`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium">
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
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Link
                    to="/contact"
                    className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700'
                        : 'border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400/10'
                    }`}
                  >
                    Get Started
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-4">
                Trusted by Industry Leaders
              </h2>
              <p className="text-gray-300 text-lg">
                See how we're transforming businesses through cloud migration
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <CheckCircle key={i} className="w-5 h-5 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4">"{testimonial.content}"</p>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-sm text-gray-400">{testimonial.company}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Migrate to the Cloud?
            </h2>
            <p className="text-gray-300 text-lg mb-8">
              Join thousands of businesses that have successfully migrated to the cloud with our expert services
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
              >
                Start Your Migration
              </Link>
              <Link 
                to="/about" 
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                Learn More
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}