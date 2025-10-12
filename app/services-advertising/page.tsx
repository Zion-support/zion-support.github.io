'use client';

import React from 'react';
import { CheckCircle, ArrowRight, Target, BarChart3, Users, Zap, Globe, Shield, Brain, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export default function ServicesAdvertisingPage() {
  const features = [
    {
      icon: <Target className="w-8 h-8 text-blue-500" />,
      title: 'Targeted Campaigns',
      description: 'Precision-targeted advertising campaigns that reach your ideal customers.',
      benefits: ['Audience segmentation', 'Behavioral targeting', 'Demographic analysis', 'Custom audiences']
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-green-500" />,
      title: 'Analytics & Insights',
      description: 'Comprehensive analytics to track performance and optimize campaigns.',
      benefits: ['Real-time reporting', 'Conversion tracking', 'ROI analysis', 'Performance metrics']
    },
    {
      icon: <Users className="w-8 h-8 text-purple-500" />,
      title: 'Multi-Channel Marketing',
      description: 'Integrated advertising across all digital channels and platforms.',
      benefits: ['Social media ads', 'Search engine marketing', 'Display advertising', 'Video campaigns']
    },
    {
      icon: <Zap className="w-8 h-8 text-orange-500" />,
      title: 'AI-Powered Optimization',
      description: 'Machine learning algorithms that continuously optimize your campaigns.',
      benefits: ['Automated bidding', 'Creative optimization', 'Budget allocation', 'Performance tuning']
    }
  ];

  const services = [
    {
      title: 'Google Ads',
      description: 'Search and display advertising on Google and partner networks.',
      icon: <Globe className="w-6 h-6 text-blue-500" />
    },
    {
      title: 'Facebook Ads',
      description: 'Social media advertising on Facebook, Instagram, and Messenger.',
      icon: <Users className="w-6 h-6 text-green-500" />
    },
    {
      title: 'LinkedIn Ads',
      description: 'Professional B2B advertising on LinkedIn platform.',
      icon: <Shield className="w-6 h-6 text-purple-500" />
    },
    {
      title: 'YouTube Ads',
      description: 'Video advertising on YouTube and Google Video Partners.',
      icon: <TrendingUp className="w-6 h-6 text-orange-500" />
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SEOHead 
        title="Advertising Services - Zion Tech Group"
        description="Professional advertising services including Google Ads, Facebook Ads, LinkedIn Ads, and more to grow your business."
        keywords="advertising services, digital marketing, Google Ads, Facebook Ads, LinkedIn Ads, PPC"
      />
      
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Advertising
            <br />
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Services
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Drive growth with our comprehensive advertising services. From Google Ads to social media 
            marketing, we help you reach your target audience and maximize ROI.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center"
            >
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link 
              to="/about" 
              className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Comprehensive Advertising Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              End-to-end advertising services designed to maximize your reach and drive conversions.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-gray-300 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Advertising Platforms
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Expert management across all major advertising platforms and channels.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg mb-4 mx-auto">
                  {service.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{service.title}</h3>
                <p className="text-gray-300 text-sm">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Why Choose Our Advertising Services?
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Proven Results</h3>
                    <p className="text-gray-300">Track record of delivering measurable results and ROI for our clients.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Expert Management</h3>
                    <p className="text-gray-300">Certified advertising specialists with deep platform expertise.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Transparent Reporting</h3>
                    <p className="text-gray-300">Detailed reporting and analytics to track campaign performance.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Custom Strategies</h3>
                    <p className="text-gray-300">Tailored advertising strategies designed for your specific business goals.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-6">Get Free Campaign Audit</h3>
              <p className="text-gray-300 mb-6">
                Ready to optimize your advertising campaigns? Contact us for a free 
                audit and customized strategy recommendation.
              </p>
              <Link
                to="/contact"
                className="w-full bg-gradient-to-r from-purple-500 to-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center"
              >
                Get Free Audit
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Scale Your Advertising?
              </h2>
              <p className="text-lg sm:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
                Let our advertising experts help you reach more customers and grow your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact" 
                  className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Start Your Campaign
                </Link>
                <Link 
                  to="/pricing" 
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  View Pricing
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}