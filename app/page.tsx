'use client';

import React from 'react';
import { CheckCircle, ArrowRight, Zap, Shield, Globe, Cloud, Database, Smartphone } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

export default function HomePage() {
  const features = [
    {
      icon: <Cloud className="w-8 h-8 text-cyan-500" />,
      title: 'IT Services & Solutions',
      description: 'Complete IT infrastructure services including cloud migration, cybersecurity, DevOps, and mobile development.',
      benefits: ['Cloud Migration - Starting at $2,500', 'Cybersecurity - $1,500/month', 'Mobile Development - Starting at $5,000', 'Data Analytics - $2,000/month'],
      link: '/it-services'
    },
    {
      icon: <Globe className="w-8 h-8 text-purple-500" />,
      title: 'Micro SAAS Applications',
      description: 'Powerful, affordable micro applications designed to solve specific business problems with AI intelligence.',
      benefits: ['AI Task Manager - $19/month', 'AI Expense Tracker - $15/month', 'AI Password Manager - $12/month', 'AI Invoice Generator - $25/month'],
      link: '/micro-saas-services'
    },
    {
      icon: <Database className="w-8 h-8 text-green-500" />,
      title: 'AI Services',
      description: 'Advanced AI solutions including content generation, chatbots, analytics, and automation tools.',
      benefits: ['AI Content Generator - $99/month', 'AI Chatbot Builder - $149/month', 'AI Analytics Dashboard - $199/month', 'AI Automation Suite - $299/month'],
      link: '/ai-services'
    }
  ];

  const stats = [
    { number: '500+', label: 'Projects Completed' },
    { number: '99.9%', label: 'Uptime Guarantee' },
    { number: '24/7', label: 'Support Available' },
    { number: '50+', label: 'Expert Engineers' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Zion Tech Group - Advanced AI and IT Solutions</title>
        <meta name="description" content="Leading provider of AI-powered IT solutions, cloud services, and micro SAAS applications. Transform your business with cutting-edge technology." />
        <meta name="keywords" content="AI solutions, IT services, cloud migration, cybersecurity, micro SAAS, business automation" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
            Advanced AI & IT Solutions
          </h1>
          <p className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Transform your business with cutting-edge AI technology, cloud infrastructure, and innovative micro SAAS applications.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300"
            >
              Get Started Today
            </Link>
            <Link 
              to="/about" 
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
            >
              Learn More
            </Link>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8 mb-20 mt-16">
            {stats.map((stat, index) => (
              <div key={index} className="text-center px-2">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-300 text-xs sm:text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              Our Services
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive solutions designed to accelerate your digital transformation and drive business growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 group">
                <div className="flex items-center mb-6">
                  {feature.icon}
                  <h3 className="text-xl font-semibold text-white ml-3 group-hover:text-purple-300 transition-colors">
                    {feature.title}
                  </h3>
                </div>
                <p className="text-gray-300 mb-6">{feature.description}</p>
                <ul className="space-y-2 mb-6">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      <span className="text-sm">{benefit}</span>
                    </li>
                  ))}
                </ul>
                <Link 
                  to={feature.link}
                  className="inline-flex items-center text-purple-400 hover:text-purple-300 font-semibold group-hover:translate-x-1 transition-all duration-300"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-8 sm:p-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-lg sm:text-xl text-white/90 mb-8">
              Join hundreds of companies already using our AI-powered solutions to drive growth and innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Get Free Consultation
              </Link>
              <Link 
                to="/demo" 
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                View Demo
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}