'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
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

  return (
    <>
      <Helmet>
        <title>Cloud Migration Pro - Zion Tech Group</title>
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