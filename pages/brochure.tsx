import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Navigation from '../src/components/Navigation';
import Footer from '../src/components/Footer';
import { Download, FileText, ArrowRight, CheckCircle, Phone, Mail, Users, Award, Clock, Globe, Star } from 'lucide-react';

export default function Brochure() {
  const [selectedBrochure, setSelectedBrochure] = useState('comprehensive');

  const brochures = [
    {
      id: 'comprehensive',
      title: 'Comprehensive Services Guide',
      description: 'Complete overview of all our services including AI, IT, and Micro SaaS solutions',
      pages: '24 pages',
      format: 'PDF',
      size: '2.5 MB',
      features: ['Service Overview', 'Case Studies', 'Pricing Information', 'Technology Stack']
    },
    {
      id: 'ai-services',
      title: 'AI Services Brochure',
      description: 'Detailed guide to our artificial intelligence and machine learning services',
      pages: '16 pages',
      format: 'PDF',
      size: '1.8 MB',
      features: ['AI Solutions', 'Use Cases', 'Implementation Process', 'ROI Analysis']
    },
    {
      id: 'it-services',
      title: 'IT Services Guide',
      description: 'Comprehensive IT infrastructure, security, and support services overview',
      pages: '20 pages',
      format: 'PDF',
      size: '2.2 MB',
      features: ['Infrastructure Solutions', 'Security Services', 'Support Plans', 'Compliance']
    },
    {
      id: 'micro-saas',
      title: 'Micro SaaS Solutions',
      description: 'Guide to our scalable software-as-a-service development and deployment',
      pages: '18 pages',
      format: 'PDF',
      size: '2.0 MB',
      features: ['Development Process', 'Scalability Solutions', 'API Integration', 'Performance']
    }
  ];

  const benefits = [
    {
      icon: FileText,
      title: 'Detailed Information',
      description: 'Comprehensive details about our services, processes, and capabilities'
    },
    {
      icon: Users,
      title: 'Expert Insights',
      description: 'Insights from our technical experts and industry best practices'
    },
    {
      icon: Award,
      title: 'Case Studies',
      description: 'Real-world examples of successful implementations and results'
    },
    {
      icon: Star,
      title: 'Free Resource',
      description: 'Completely free resource to help you make informed decisions'
    }
  ];

  const stats = [
    { number: '500+', label: 'Downloads', icon: Download },
    { number: '95%', label: 'Satisfaction', icon: Star },
    { number: '24/7', label: 'Access', icon: Clock },
    { number: 'Free', label: 'Cost', icon: Award }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Head>
        <title>Download Brochures | Zion Tech Group</title>
        <meta name="description" content="Download our comprehensive service brochures and guides. Get detailed information about our AI services, IT solutions, and Micro SaaS platforms." />
        <meta name="keywords" content="brochure, download, services guide, AI services, IT solutions, Micro SaaS, PDF" />
        <link rel="canonical" href="https://ziontechgroup.com/brochure" />
      </Head>

      <Navigation />

      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-gray-900 via-green-900 to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-500 rounded-xl flex items-center justify-center">
                <Download className="w-8 h-8 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-green-400 to-teal-400 bg-clip-text text-transparent">
                Download Brochures
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Get detailed information about our services with our comprehensive brochures and guides. 
              Download free resources to help you make informed decisions about your technology needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#brochure-form"
                className="px-8 py-4 bg-gradient-to-r from-green-500 to-teal-500 text-white font-semibold rounded-lg hover:from-green-600 hover:to-teal-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-green-500/25"
              >
                Download Now
                <ArrowRight className="w-5 h-5 ml-2 inline" />
              </a>
              <Link
                href="/contact"
                className="px-8 py-4 border border-gray-600 text-white font-semibold rounded-lg hover:bg-gray-800 transition-all duration-300"
              >
                Contact Us Instead
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500/20 to-teal-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-green-400" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brochure Types Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Available Brochures
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose from our comprehensive collection of service guides and technical documentation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {brochures.map((brochure) => (
              <div
                key={brochure.id}
                className={`bg-gray-800/50 border rounded-xl p-8 cursor-pointer transition-all duration-300 ${
                  selectedBrochure === brochure.id
                    ? 'border-green-500/50 bg-green-900/20'
                    : 'border-gray-700 hover:border-green-500/30'
                }`}
                onClick={() => setSelectedBrochure(brochure.id)}
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold mb-2">{brochure.title}</h3>
                    <p className="text-gray-300 mb-4">{brochure.description}</p>
                  </div>
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500/20 to-teal-500/20 rounded-lg flex items-center justify-center ml-4">
                    <FileText className="w-6 h-6 text-green-400" />
                  </div>
                </div>
                
                <div className="grid grid-cols-3 gap-4 mb-6 text-sm">
                  <div className="text-center">
                    <div className="text-gray-400">Pages</div>
                    <div className="text-white font-medium">{brochure.pages}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-gray-400">Format</div>
                    <div className="text-white font-medium">{brochure.format}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-gray-400">Size</div>
                    <div className="text-white font-medium">{brochure.size}</div>
                  </div>
                </div>

                <ul className="space-y-2">
                  {brochure.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-400">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Download Our Brochures?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our brochures provide valuable insights and detailed information to help you make informed decisions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-gray-900/50 border border-gray-700 rounded-xl p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500/20 to-teal-500/20 rounded-lg flex items-center justify-center mr-4">
                    <benefit.icon className="w-6 h-6 text-green-400" />
                  </div>
                  <h3 className="text-2xl font-semibold">{benefit.title}</h3>
                </div>
                <p className="text-gray-300">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Download Form Section */}
      <section id="brochure-form" className="py-20 bg-gradient-to-r from-green-900/20 to-teal-900/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Download Your Brochure
            </h2>
            <p className="text-xl text-gray-300">
              Fill out the form below to download your selected brochure instantly.
            </p>
          </div>

          <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-8">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    First Name *
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-green-500 focus:ring-1 focus:ring-green-500"
                    placeholder="Enter your first name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-green-500 focus:ring-1 focus:ring-green-500"
                    placeholder="Enter your last name"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-green-500 focus:ring-1 focus:ring-green-500"
                    placeholder="Enter your email"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-green-500 focus:ring-1 focus:ring-green-500"
                    placeholder="Enter your phone number"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Company Name *
                </label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-green-500 focus:ring-1 focus:ring-green-500"
                  placeholder="Enter your company name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Select Brochure *
                </label>
                <select
                  value={selectedBrochure}
                  onChange={(e) => setSelectedBrochure(e.target.value)}
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-600 rounded-lg text-white focus:border-green-500 focus:ring-1 focus:ring-green-500"
                >
                  {brochures.map((brochure) => (
                    <option key={brochure.id} value={brochure.id}>
                      {brochure.title}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  How did you hear about us?
                </label>
                <select className="w-full px-4 py-3 bg-gray-900 border border-gray-600 rounded-lg text-white focus:border-green-500 focus:ring-1 focus:ring-green-500">
                  <option value="">Select an option</option>
                  <option value="search">Search Engine</option>
                  <option value="social">Social Media</option>
                  <option value="referral">Referral</option>
                  <option value="website">Website</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="px-8 py-4 bg-gradient-to-r from-green-500 to-teal-500 text-white font-semibold rounded-lg hover:from-green-600 hover:to-teal-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-green-500/25"
                >
                  Download Brochure
                  <Download className="w-5 h-5 ml-2 inline" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}