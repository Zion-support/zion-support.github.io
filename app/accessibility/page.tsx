'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight, Shield, Zap, Globe, Database } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AccessibilityPage = () => {
  const services = [
    {
      icon: <Shield className="w-8 h-8 text-blue-500" />,
      title: 'Accessibility Audit',
      description: 'Comprehensive accessibility audit to identify and fix compliance issues.',
      features: ['WCAG 2.1 compliance', 'Screen reader testing', 'Keyboard navigation', 'Color contrast analysis'],
      pricing: 'Starting at $1,500'
    },
    {
      icon: <Zap className="w-8 h-8 text-green-500" />,
      title: 'Accessibility Implementation',
      description: 'Implement accessibility features to make your website inclusive for all users.',
      features: ['ARIA implementation', 'Semantic HTML', 'Focus management', 'Alternative text'],
      pricing: 'Starting at $2,500'
    },
    {
      icon: <Globe className="w-8 h-8 text-purple-500" />,
      title: 'Accessibility Training',
      description: 'Train your team on accessibility best practices and guidelines.',
      features: ['Team workshops', 'Developer training', 'Design guidelines', 'Testing procedures'],
      pricing: '$500/session'
    }
  ];

  const benefits = [
    'Improved user experience for all users',
    'WCAG 2.1 AA compliance',
    'Reduced legal risk',
    'Better SEO performance',
    'Increased market reach',
    'Enhanced brand reputation',
    'Future-proof design',
    'Inclusive user interface'
  ];

  const stats = [
    { number: '15%', label: 'of the population has disabilities' },
    { number: '71%', label: 'of users with disabilities leave inaccessible sites' },
    { number: '100%', label: 'WCAG 2.1 AA compliance' },
    { number: '24/7', label: 'Accessibility support' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Accessibility Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive accessibility services including audits, implementation, and training. Make your website inclusive and compliant with WCAG 2.1 standards." />
        <meta name="keywords" content="accessibility, WCAG compliance, inclusive design, screen reader, keyboard navigation, ARIA" />
      </Helmet>

      <Navigation />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Accessibility Services
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Make your website inclusive and accessible to all users. Our comprehensive accessibility services 
              ensure WCAG 2.1 compliance and improved user experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300"
              >
                Get Started
              </Link>
              <Link 
                to="/demo" 
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                View Demo
              </Link>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Accessibility Services</h2>
              <p className="text-lg text-gray-300">Comprehensive solutions to make your website accessible</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 group">
                  <div className="flex items-center mb-6">
                    {service.icon}
                    <h3 className="text-xl font-semibold text-white ml-3 group-hover:text-purple-300 transition-colors">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-white">{service.pricing}</span>
                    <Link 
                      to="/contact"
                      className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Accessibility Benefits</h2>
              <p className="text-lg text-gray-300">Why accessibility matters for your business</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center">
                  <CheckCircle className="w-6 h-6 text-green-400 mr-4 flex-shrink-0" />
                  <span className="text-gray-300">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-8 sm:p-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Ready to Make Your Website Accessible?
              </h2>
              <p className="text-lg sm:text-xl text-white/90 mb-8">
                Let our accessibility experts help you create an inclusive digital experience.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact" 
                  className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Get Free Audit
                </Link>
                <Link 
                  to="/about" 
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  Learn More About Us
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AccessibilityPage;