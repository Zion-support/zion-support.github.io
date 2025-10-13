'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, ArrowRight, Eye, Ear, MousePointer, Keyboard, Shield, Brain, Globe, Zap } from 'lucide-react';

const AccessibilityPage: React.FC = () => {
  const features = [
    {
      icon: Eye,
      title: 'Visual Accessibility',
      description: 'High contrast modes, scalable fonts, and screen reader compatibility for users with visual impairments'
    },
    {
      icon: Ear,
      title: 'Audio Accessibility',
      description: 'Audio descriptions, captions, and alternative audio formats for users with hearing impairments'
    },
    {
      icon: MousePointer,
      title: 'Motor Accessibility',
      description: 'Keyboard navigation, voice control, and assistive technology support for users with motor disabilities'
    },
    {
      icon: Keyboard,
      title: 'Cognitive Accessibility',
      description: 'Clear navigation, consistent layouts, and simplified interfaces for users with cognitive disabilities'
    }
  ];

  const benefits = [
    {
      icon: Shield,
      title: 'WCAG 2.1 AA Compliance',
      description: 'Our solutions meet the highest accessibility standards set by the Web Content Accessibility Guidelines'
    },
    {
      icon: Brain,
      title: 'AI-Powered Accessibility',
      description: 'Advanced AI technology automatically detects and fixes accessibility issues in real-time'
    },
    {
      icon: Globe,
      title: 'Universal Design',
      description: 'Inclusive design principles ensure our solutions work for users of all abilities worldwide'
    },
    {
      icon: Zap,
      title: 'Performance Optimized',
      description: 'Accessibility features are built for speed and efficiency without compromising user experience'
    }
  ];

  const complianceFeatures = [
    'Screen Reader Compatibility',
    'Keyboard Navigation Support',
    'High Contrast Mode',
    'Text Scaling Options',
    'Alternative Text for Images',
    'Audio Descriptions',
    'Voice Control Integration',
    'Assistive Technology Support'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Accessibility - Zion Tech Group</title>
        <meta name="description" content="Comprehensive accessibility solutions ensuring inclusive digital experiences for all users" />
      </Helmet>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Accessibility Solutions
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Creating inclusive digital experiences that work for everyone. Our accessibility solutions 
            ensure your applications are usable by people of all abilities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center">
              Get Accessibility Audit
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
            <button className="border border-white/30 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300">
              Learn More
            </button>
          </div>
        </div>

        {/* Features Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Accessibility Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center hover:bg-white/20 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center text-white mx-auto mb-4">
                  <feature.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Why Choose Our Accessibility Solutions?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center hover:bg-white/20 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center text-white mx-auto mb-4">
                  <benefit.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Compliance Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
            <h2 className="text-2xl font-bold text-white mb-6">WCAG 2.1 AA Compliance</h2>
            <p className="text-gray-300 mb-6">
              Our solutions are built to meet and exceed WCAG 2.1 AA standards, ensuring your 
              applications are accessible to users with disabilities and compliant with legal requirements.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {complianceFeatures.map((feature, index) => (
                <div key={index} className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-2 flex-shrink-0" />
                  <span className="text-sm">{feature}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
            <h2 className="text-2xl font-bold text-white mb-6">Accessibility Testing</h2>
            <p className="text-gray-300 mb-6">
              We provide comprehensive accessibility testing using both automated tools and 
              manual testing with real users to ensure your applications work for everyone.
            </p>
            <div className="space-y-4">
              <div className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-white font-semibold mb-1">Automated Testing</h3>
                  <p className="text-gray-300 text-sm">AI-powered tools that scan for accessibility issues</p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-white font-semibold mb-1">Manual Testing</h3>
                  <p className="text-gray-300 text-sm">Real user testing with assistive technologies</p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-white font-semibold mb-1">Compliance Reports</h3>
                  <p className="text-gray-300 text-sm">Detailed reports with actionable recommendations</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-cyan-500/20 to-purple-600/20 backdrop-blur-sm rounded-xl p-8 border border-white/20 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Make Your App Accessible?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let us help you create inclusive digital experiences that work for everyone. 
            Get started with our accessibility audit today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center">
              Start Accessibility Audit
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
            <button className="border border-white/30 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300">
              Contact Our Experts
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccessibilityPage;