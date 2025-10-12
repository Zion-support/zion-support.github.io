'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Cloud, Shield, Zap, Database, Globe } from 'lucide-react';
import Layout from '../layout';

export default function CloudMigrationPro() {
  const features = [
    {
      icon: <Cloud className="w-6 h-6 text-cyan-400" />,
      title: 'Zero-Downtime Migration',
      description: 'Seamless migration to cloud platforms without interrupting your business operations'
    },
    {
      icon: <Shield className="w-6 h-6 text-purple-400" />,
      title: 'Security-First Approach',
      description: 'Enterprise-grade security measures throughout the migration process'
    },
    {
      icon: <Zap className="w-6 h-6 text-yellow-400" />,
      title: 'Performance Optimization',
      description: 'Optimize your applications for cloud-native performance and scalability'
    },
    {
      icon: <Database className="w-6 h-6 text-green-400" />,
      title: 'Data Migration',
      description: 'Safe and secure migration of your data with integrity verification'
    }
  ]

  const migrationSteps = [
    {
      step: '01',
      title: 'Assessment & Planning',
      description: 'Comprehensive analysis of your current infrastructure and migration requirements',
      icon: <Globe className="w-5 h-5" />
    },
    {
      step: '02',
      title: 'Strategy Development',
      description: 'Custom migration strategy tailored to your business needs and goals',
      icon: <Shield className="w-5 h-5" />
    },
    {
      step: '03',
      title: 'Migration Execution',
      description: 'Careful execution of the migration plan with minimal business disruption',
      icon: <Zap className="w-5 h-5" />
    },
    {
      step: '04',
      title: 'Optimization & Support',
      description: 'Post-migration optimization and ongoing support for your cloud infrastructure',
      icon: <Cloud className="w-5 h-5" />
    }
  ]

  const pricingPlans = [
    {
      name: 'Basic Migration',
      price: '$10,000',
      description: 'Perfect for small to medium applications',
      features: [
        'Single application migration',
        'Basic cloud setup',
        'Data migration',
        'Testing & validation',
        '30 days support'
      ],
      popular: false
    },
    {
      name: 'Professional Migration',
      price: '$25,000',
      description: 'Ideal for complex enterprise applications',
      features: [
        'Multiple application migration',
        'Advanced cloud architecture',
        'Security implementation',
        'Performance optimization',
        '90 days support',
        'Training & documentation'
      ],
      popular: true
    },
    {
      name: 'Enterprise Migration',
      price: '$75,000',
      description: 'Complete digital transformation',
      features: [
        'Full infrastructure migration',
        'Custom cloud solutions',
        'Advanced security & compliance',
        '24/7 monitoring setup',
        '6 months support',
        'Dedicated team',
        'Ongoing optimization'
      ],
      popular: false
    }
  ]

  const testimonials = [
    {
      name: 'Jennifer Martinez',
      company: 'Enterprise Solutions Inc.',
      content: 'The migration was flawless. We achieved 50% cost reduction and 3x performance improvement.',
      rating: 5
    },
    {
      name: 'Robert Chen',
      company: 'TechFlow Systems',
      content: 'Professional team with deep cloud expertise. Our migration exceeded all expectations.',
      rating: 5
    },
    {
      name: 'Amanda Wilson',
      company: 'DataCorp Ltd.',
      content: 'Zero downtime migration with excellent support. Highly recommend their services.',
      rating: 5
    }
  ]

  return (
    <>
      <Helmet>
        <title>Cloud Migration Pro - Zion Tech Group</title>
        <meta name="description" content="Professional cloud migration services with zero downtime. Expert migration to AWS, Azure, and Google Cloud." />
      </Helmet>

      <Layout>
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900">
          <div className="container mx-auto px-4 text-center">
            <div className="mb-8">
              <span className="inline-block px-4 py-2 bg-indigo-500/20 text-indigo-400 rounded-full text-sm font-semibold mb-4">
                Professional Cloud Migration
              </span>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
                Cloud Migration Pro
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Expert cloud migration services with zero downtime. Seamlessly migrate your applications 
                to AWS, Azure, Google Cloud, or any cloud platform with our proven methodology.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact" className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-indigo-600 hover:to-purple-700 transition-all duration-300">
                  Start Migration
                </Link>
                <Link to="#demo" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors">
                  View Case Studies
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-slate-800">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Migration Excellence
              </h2>
              <p className="text-gray-300 text-lg">
                Professional migration services with proven results
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-slate-700 p-6 rounded-lg">
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

        {/* Migration Process */}
        <section className="py-20 bg-slate-900">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Our Migration Process
              </h2>
              <p className="text-gray-300 text-lg">
                A proven 4-step methodology for successful cloud migration
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {migrationSteps.map((step, index) => (
                <div key={index} className="bg-slate-700 p-6 rounded-lg text-center">
                  <div className="text-4xl font-bold text-indigo-400 mb-4">{step.step}</div>
                  <div className="flex justify-center mb-4">{step.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-4">{step.title}</h3>
                  <p className="text-gray-300">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 bg-slate-800">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Migration Packages
              </h2>
              <p className="text-gray-300 text-lg">
                Choose the migration package that fits your needs
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`bg-slate-700 p-8 rounded-lg ${plan.popular ? 'ring-2 ring-indigo-400' : ''}`}>
                  {plan.popular && (
                    <div className="text-center mb-4">
                      <span className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
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
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <span className="w-2 h-2 bg-indigo-400 rounded-full mr-3"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white hover:from-indigo-600 hover:to-purple-700'
                        : 'border-2 border-indigo-400 text-indigo-400 hover:bg-indigo-400/10'
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
        <section className="py-20 bg-slate-900">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-4">
                Success Stories
              </h2>
              <p className="text-gray-300 text-lg">
                See what our clients say about our migration services
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-slate-700 p-6 rounded-lg">
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
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-indigo-500 to-purple-600">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Migrate to the Cloud?
            </h2>
            <p className="text-white/90 text-lg mb-8">
              Let our experts handle your cloud migration with zero downtime and maximum efficiency
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="bg-white text-indigo-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300">
                Start Migration
              </Link>
              <Link to="/about" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors">
                Learn More
              </Link>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}