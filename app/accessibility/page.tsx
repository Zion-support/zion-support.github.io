'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
<<<<<<< HEAD
<<<<<<< HEAD
import { ArrowRight, CheckCircle, Star, Users, Zap, Shield, Brain, BarChart, Target, TrendingUp } from 'lucide-react';
=======
import { Accessibility, Eye, Volume2, MousePointer, Keyboard, CheckCircle, ArrowRight } from 'lucide-react';
>>>>>>> cursor/fix-errors-and-merge-to-main-8a51
=======
import { Accessibility, Eye, Volume2, MousePointer, Keyboard, CheckCircle, ArrowRight } from 'lucide-react';
>>>>>>> cursor/fix-errors-and-merge-to-main-54c9
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

<<<<<<< HEAD
const PagePage: React.FC = () => {
  const features = [
    {
<<<<<<< HEAD
<<<<<<< HEAD
      icon: Brain,
      title: 'AI-Powered Solutions',
      description: 'Advanced artificial intelligence technology to transform your business operations.',
      benefits: ['Machine learning', 'Natural language processing', 'Predictive analytics', 'Automated insights']
    },
    {
      icon: BarChart,
      title: 'Advanced Analytics',
      description: 'Comprehensive analytics dashboard with real-time data visualization.',
      benefits: ['Real-time dashboards', 'Custom reports', 'Data visualization', 'Performance metrics']
=======
'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Eye, Volume2, MousePointer, Shield, CheckCircle, ArrowRight } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AccessibilityPage: React.FC = () => {
  const features = [
    {
      icon: Eye,
      title: 'Visual Accessibility',
      description: 'High contrast modes, screen reader compatibility, and customizable text sizes for better visibility.',
      benefits: ['High contrast themes', 'Screen reader support', 'Text scaling', 'Color blind friendly']
>>>>>>> cursor/fix-errors-and-merge-to-main-fe05
=======
      icon: Eye,
      title: 'Visual Accessibility',
      description: 'High contrast modes, scalable fonts, and screen reader compatibility for users with visual impairments.',
      benefits: ['High contrast themes', 'Font scaling', 'Screen reader support', 'Color blind friendly']
>>>>>>> cursor/fix-errors-and-merge-to-main-8a51
=======
      icon: Eye,
      title: 'Visual Accessibility',
      description: 'High contrast modes, scalable text, and screen reader compatibility.',
      benefits: ['High contrast themes', 'Scalable fonts', 'Screen reader support', 'Color blind friendly']
>>>>>>> cursor/fix-errors-and-merge-to-main-54c9
    },
    {
      icon: Volume2,
      title: 'Audio Accessibility',
<<<<<<< HEAD
<<<<<<< HEAD
      description: 'Audio descriptions, captions, and alternative audio formats for hearing-impaired users.',
      benefits: ['Audio descriptions', 'Closed captions', 'Sign language support', 'Audio transcripts']
    },
    {
<<<<<<< HEAD
      icon: Target,
      title: 'Precision Targeting',
      description: 'Target specific goals and objectives with precision.',
      benefits: ['Goal tracking', 'Performance optimization', 'Strategic planning', 'Success metrics']
=======
      icon: MousePointer,
      title: 'Motor Accessibility',
      description: 'Keyboard navigation, voice control, and assistive technologies for users with motor impairments.',
      benefits: ['Keyboard navigation', 'Voice control', 'Switch control', 'Eye tracking support']
    },
    {
      icon: Shield,
      title: 'Cognitive Accessibility',
      description: 'Clear navigation, consistent layouts, and simplified interfaces for users with cognitive disabilities.',
      benefits: ['Clear navigation', 'Consistent layouts', 'Simplified interfaces', 'Progress indicators']
>>>>>>> cursor/fix-errors-and-merge-to-main-fe05
=======
      description: 'Audio descriptions, captions, and alternative audio formats for users with hearing impairments.',
      benefits: ['Closed captions', 'Audio descriptions', 'Sign language support', 'Visual alerts']
    },
    {
      icon: MousePointer,
      title: 'Motor Accessibility',
      description: 'Keyboard navigation, voice control, and alternative input methods for users with motor disabilities.',
      benefits: ['Keyboard navigation', 'Voice control', 'Switch control', 'Gesture alternatives']
    },
    {
      icon: Keyboard,
      title: 'Cognitive Accessibility',
      description: 'Clear navigation, consistent layouts, and simplified interfaces for users with cognitive disabilities.',
      benefits: ['Clear navigation', 'Consistent layouts', 'Simplified interfaces', 'Progress indicators']
>>>>>>> cursor/fix-errors-and-merge-to-main-8a51
    }
  ];

  const benefits = [
    'WCAG 2.1 AA compliance',
    'Screen reader compatibility',
    'Keyboard navigation support',
    'High contrast mode available',
<<<<<<< HEAD
    'Text scaling up to 200%',
=======
    'Font scaling up to 200%',
>>>>>>> cursor/fix-errors-and-merge-to-main-8a51
    'Alternative text for all images'
=======
      description: 'Audio descriptions, captions, and alternative audio formats.',
      benefits: ['Audio descriptions', 'Closed captions', 'Transcripts', 'Volume controls']
    },
    {
      icon: MousePointer,
      title: 'Motor Accessibility',
      description: 'Keyboard navigation, voice control, and assistive technologies.',
      benefits: ['Keyboard navigation', 'Voice control', 'Large click targets', 'Customizable controls']
    },
    {
      icon: Keyboard,
      title: 'Cognitive Accessibility',
      description: 'Clear navigation, consistent layouts, and simplified interfaces.',
      benefits: ['Clear navigation', 'Consistent layouts', 'Simple language', 'Progress indicators']
    }
  ];

  const standards = [
    'WCAG 2.1 AA Compliance',
    'Section 508 Compliance',
    'ADA Compliance',
    'EN 301 549 Compliance'
  ];

  const benefits = [
    'Improve user experience for all users',
    'Increase website reach and audience',
    'Enhance SEO and search rankings',
    'Reduce legal compliance risks',
    'Demonstrate social responsibility',
    'Improve overall usability'
>>>>>>> cursor/fix-errors-and-merge-to-main-54c9
  ];

  return (
    <>
      <Helmet>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
        <title>Page - Zion Tech Group</title>
        <meta name="description" content="Advanced page solutions powered by artificial intelligence and cutting-edge technology." />
        <meta name="keywords" content="AI, page, artificial intelligence, business solutions, automation" />
=======
        <title>Accessibility - Zion Tech Group</title>
        <meta name="description" content="Our commitment to digital accessibility and inclusive design for all users." />
        <meta name="keywords" content="accessibility, WCAG, inclusive design, screen reader, keyboard navigation" />
>>>>>>> cursor/fix-errors-and-merge-to-main-fe05
=======
        <title>Accessibility - Zion Tech Group</title>
        <meta name="description" content="Learn about our commitment to web accessibility and inclusive design practices." />
        <meta name="keywords" content="accessibility, inclusive design, WCAG, screen reader, disability access" />
>>>>>>> cursor/fix-errors-and-merge-to-main-8a51
=======
        <title>Accessibility - Zion Tech Group</title>
        <meta name="description" content="Comprehensive accessibility solutions for inclusive digital experiences" />
        <meta name="keywords" content="accessibility, WCAG, ADA compliance, inclusive design, digital accessibility" />
>>>>>>> cursor/fix-errors-and-merge-to-main-54c9
      </Helmet>
      <Navigation />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-54c9
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
<<<<<<< HEAD
                Page <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Solutions</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Discover our comprehensive page solutions designed to transform your business with AI and advanced technology.
=======
                Digital <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Accessibility</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Creating inclusive digital experiences that work for everyone, regardless of ability or disability.
>>>>>>> cursor/fix-errors-and-merge-to-main-54c9
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center">
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>
                <button className="border border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300">
                  Learn More
                </button>
              </div>
<<<<<<< HEAD
=======
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Digital <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Accessibility</span>
=======
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <Accessibility className="inline-block w-16 h-16 mr-4 text-cyan-400" />
              Accessibility
>>>>>>> cursor/fix-errors-and-merge-to-main-8a51
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              We believe technology should be accessible to everyone. Our commitment to inclusive design ensures our solutions work for users of all abilities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300">
                Learn More
                <ArrowRight className="ml-2 h-5 w-5" />
<<<<<<< HEAD
=======
              </button>
              <button className="border border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300">
                Accessibility Statement
>>>>>>> cursor/fix-errors-and-merge-to-main-8a51
              </button>
              <button className="border border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300">
                Accessibility Report
              </button>
>>>>>>> cursor/fix-errors-and-merge-to-main-fe05
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-54c9
            </div>
          </div>
        </section>

        {/* Features Section */}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Powerful Features</h2>
              <p className="text-xl text-gray-300">Everything you need to succeed with AI</p>
=======
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Accessibility Features</h2>
              <p className="text-xl text-gray-300">Comprehensive accessibility support for all users</p>
>>>>>>> cursor/fix-errors-and-merge-to-main-8a51
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-cyan-400/50 transition-all duration-300">
                  <div className="text-cyan-400 mb-4">
                    <feature.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="h-4 w-4 text-cyan-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
<<<<<<< HEAD
=======
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Accessibility Features
              </h2>
              <p className="text-xl text-gray-300">
                Comprehensive accessibility solutions for inclusive digital experiences
=======
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Accessibility Features
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Comprehensive accessibility solutions for all users
>>>>>>> cursor/fix-errors-and-merge-to-main-54c9
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => {
<<<<<<< HEAD
                const Icon = feature.icon;
=======
                const Icon = feature.icon
>>>>>>> cursor/fix-errors-and-merge-to-main-54c9
                return (
                  <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-cyan-400/50 transition-all duration-300">
                    <div className="text-cyan-400 mb-4">
                      <Icon className="h-8 w-8" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                    <p className="text-gray-300 mb-4">{feature.description}</p>
                    <ul className="space-y-2">
                      {feature.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="h-4 w-4 text-cyan-400 mr-2 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
<<<<<<< HEAD
                );
              })}
>>>>>>> cursor/fix-errors-and-merge-to-main-fe05
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-8a51
=======
                )
              })}
>>>>>>> cursor/fix-errors-and-merge-to-main-54c9
            </div>
          </div>
        </section>

<<<<<<< HEAD
        {/* Benefits Section */}
<<<<<<< HEAD
<<<<<<< HEAD
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Why Choose Our AI Solutions?</h2>
              <p className="text-xl text-gray-300">Transform your business with intelligent automation</p>
=======
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Our Accessibility Standards</h2>
              <p className="text-xl text-gray-300">We follow international accessibility guidelines</p>
>>>>>>> cursor/fix-errors-and-merge-to-main-8a51
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="flex-shrink-0">
<<<<<<< HEAD
                    <Zap className="h-6 w-6 text-cyan-400" />
                  </div>
                  <p className="text-gray-300">{benefit}</p>
=======
        <section className="py-20 px-4 bg-slate-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our Accessibility Commitment
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                We ensure our digital solutions are accessible to everyone
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <p className="text-gray-300 text-lg">{benefit}</p>
>>>>>>> cursor/fix-errors-and-merge-to-main-fe05
=======
                    <CheckCircle className="h-6 w-6 text-cyan-400" />
                  </div>
                  <p className="text-gray-300">{benefit}</p>
>>>>>>> cursor/fix-errors-and-merge-to-main-8a51
=======
        {/* Standards Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Compliance Standards
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                We ensure compliance with international accessibility standards
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {standards.map((standard, index) => (
                <div key={index} className="flex items-center p-4 bg-white/5 backdrop-blur-sm rounded-lg">
                  <CheckCircle className="w-6 h-6 text-green-400 mr-3" />
                  <span className="text-white font-medium">{standard}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Accessibility Matters
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Benefits of implementing accessibility best practices
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="flex-shrink-0">
                    <Accessibility className="h-6 w-6 text-cyan-400" />
                  </div>
                  <p className="text-gray-300">{benefit}</p>
>>>>>>> cursor/fix-errors-and-merge-to-main-54c9
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of businesses already using our AI-powered solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center">
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300">
                Learn More
=======
        <section className="py-20 px-4 bg-gradient-to-r from-cyan-600 to-purple-600">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Need Help with Accessibility?
            </h2>
            <p className="text-xl text-cyan-100 mb-8">
              Our accessibility experts can help you make your digital products more inclusive and compliant.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-cyan-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300">
                Get Accessibility Audit
                <ArrowRight className="ml-2 h-5 w-5 inline" />
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-cyan-600 transition-all duration-300">
                Contact Us
>>>>>>> cursor/fix-errors-and-merge-to-main-fe05
=======
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">Need Help with Accessibility?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Contact us if you encounter any accessibility barriers or need assistance using our website.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center">
                Contact Support
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300">
                Report Issue
>>>>>>> cursor/fix-errors-and-merge-to-main-8a51
=======
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Make Your Site Accessible?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's work together to create an inclusive digital experience for all users.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center">
                Start Accessibility Audit
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300">
                Contact Us
>>>>>>> cursor/fix-errors-and-merge-to-main-54c9
              </button>
            </div>
          </div>
        </section>
      </div>
      
      <Footer />
    </>
  );
};

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
export default PagePage;
=======
export default AccessibilityPage;
>>>>>>> cursor/fix-errors-and-merge-to-main-fe05
=======
export default AccessibilityPage;
>>>>>>> cursor/fix-errors-and-merge-to-main-8a51
=======
export default AccessibilityPage;
>>>>>>> cursor/fix-errors-and-merge-to-main-54c9
