'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Cloud, ArrowRight, Shield, Zap, CheckCircle, Star } from 'lucide-react';

export default function CloudMigrationProPage() {
  const features = [
    {
      icon: <Cloud className="w-6 h-6 text-cyan-400" />,
      title: 'Zero-Downtime Migration',
      description: 'Seamless migration with zero business disruption using advanced migration strategies'
    },
    {
      icon: <Shield className="w-6 h-6 text-purple-400" />,
      title: 'Security-First Approach',
      description: 'Ensure data security and compliance throughout the migration process'
    },
    {
      icon: <Zap className="w-6 h-6 text-yellow-400" />,
      title: 'Performance Optimization',
      description: 'Optimize applications and infrastructure for cloud-native performance'
    },
    {
      icon: <ArrowRight className="w-6 h-6 text-green-400" />,
      title: 'Automated Migration',
      description: 'Leverage automation tools for faster, more reliable migrations'
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
      description: 'Seamless execution with minimal downtime and maximum data integrity'
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
      price: '$5,999',
      period: '/project',
      description: 'Perfect for small applications',
      features: [
        'Up to 5 applications',
        'Basic migration planning',
        'Email support',
        '30-day warranty',
        'Documentation'
      ],
      popular: false
    },
    {
      name: 'Professional Migration',
      price: '$19,999',
      period: '/project',
      description: 'Ideal for medium enterprises',
      features: [
        'Up to 20 applications',
        'Advanced planning',
        'Priority support',
        '90-day warranty',
        'Performance optimization',
        'Training included'
      ],
      popular: true
    },
    {
      name: 'Enterprise Migration',
      price: '$49,999',
      period: '/project',
      description: 'For large-scale migrations',
      features: [
        'Unlimited applications',
        'Custom strategy',
        'Dedicated support',
        '1-year warranty',
        'Full optimization',
        'Ongoing maintenance'
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'TechCorp Solutions',
      content: 'The migration was flawless. We had zero downtime and improved performance by 40%.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      company: 'Global Enterprises',
      content: 'Professional team, excellent communication, and outstanding results. Highly recommended!',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      company: 'Digital Innovations',
      content: 'The cost savings from the migration paid for itself within 6 months.',
      rating: 5
    }
  ];

  return (
    <>
      <Helmet>
        <title>Cloud Migration Pro - Zion Tech Group</title>
        <meta name="description" content="Professional cloud migration services with zero downtime. Expert migration solutions for AWS, Azure, and Google Cloud." />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="container mx-auto text-center">
            <div className="inline-flex items-center bg-cyan-500/10 border border-cyan-500/20 rounded-full px-4 py-2 mb-6">
              <Cloud className="w-5 h-5 text-cyan-400 mr-2" />
              <span className="text-cyan-400 font-medium">Cloud Migration Pro</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Cloud Migration Pro
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Professional cloud migration services with zero downtime. We help you seamlessly migrate 
              to AWS, Azure, Google Cloud, or any cloud platform with expert planning and execution.
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
                View Case Studies
              </Link>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold text-white text-center mb-16">
              Why Choose Our Migration Services
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
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
          </div>
        </section>

        {/* Migration Process */}
        <section className="py-20 px-4 bg-gray-900/50">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold text-white text-center mb-16">
              Our Migration Process
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {migrationSteps.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-white">{step.step}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-gray-300">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold text-white text-center mb-16">
              Migration Pricing
            </h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`bg-white/10 backdrop-blur-sm rounded-lg p-8 border-2 relative ${plan.popular ? 'border-cyan-500' : 'border-gray-600'}`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-cyan-500 text-white px-4 py-1 rounded-full text-sm font-medium">
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
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
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
        <section className="py-20 px-4 bg-gray-900/50">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold text-white text-center mb-16">
              Client Success Stories
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
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
        <section className="py-20 px-4">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Migrate to the Cloud?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Let our experts handle your cloud migration with zero downtime and maximum efficiency.
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