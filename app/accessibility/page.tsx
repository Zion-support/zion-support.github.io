'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
<<<<<<< HEAD
import { Accessibility, Eye, Volume2, MousePointer, Keyboard, CheckCircle, ArrowRight } from 'lucide-react';
import { Eye, Ear, Hand, Brain, Shield, CheckCircle, ArrowRight } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

      icon: Eye,
      title: 'Visual Accessibility',
      description: 'High contrast modes, scalable fonts, and screen reader compatibility for users with visual impairments.',
      benefits: ['High contrast themes', 'Font scaling', 'Screen reader support', 'Color blind friendly']
      icon: Eye,
      title: 'Visual Accessibility',
      description: 'High contrast modes, scalable text, and screen reader compatibility.',
      benefits: ['High contrast themes', 'Scalable fonts', 'Screen reader support', 'Color blind friendly']
=======
import { Eye, Ear, Hand, Brain, Shield, CheckCircle, ArrowRight, Target, BarChart, Zap } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AccessibilityPage: React.FC = () => {
  const features = [
    {
      icon: Eye,
      title: 'Visual Accessibility',
      description: 'Comprehensive solutions for users with visual impairments and color vision deficiencies.',
      benefits: ['Screen reader compatibility', 'High contrast modes', 'Color blind support', 'Text scaling']
>>>>>>> cursor/fix-errors-and-merge-to-main-cd37
    },
    {
      icon: Ear,
      title: 'Audio Accessibility',
<<<<<<< HEAD
      description: 'Audio descriptions, captions, and alternative audio formats for users with hearing impairments.',
      benefits: ['Closed captions', 'Audio descriptions', 'Sign language support', 'Visual alerts']
=======
      description: 'Enhanced audio experiences for users with hearing impairments.',
      benefits: ['Closed captions', 'Sign language support', 'Audio descriptions', 'Visual alerts']
    },
    {
      icon: Hand,
      title: 'Motor Accessibility',
      description: 'Support for users with motor disabilities and mobility challenges.',
      benefits: ['Keyboard navigation', 'Voice control', 'Switch access', 'Gesture recognition']
    },
    {
      icon: Brain,
      title: 'Cognitive Accessibility',
      description: 'Features designed to support users with cognitive and learning disabilities.',
      benefits: ['Simplified interfaces', 'Clear instructions', 'Consistent navigation', 'Error prevention']
    },
    {
      icon: Shield,
      title: 'Compliance & Standards',
      description: 'Full compliance with WCAG 2.1 AA standards and accessibility regulations.',
      benefits: ['WCAG 2.1 AA compliance', 'Section 508 compliance', 'ADA compliance', 'International standards']
>>>>>>> cursor/fix-errors-and-merge-to-main-cd37
    },
    {
      icon: Zap,
      title: 'Performance Optimization',
      description: 'Fast, efficient accessibility features that don\'t compromise performance.',
      benefits: ['Optimized loading', 'Efficient rendering', 'Minimal overhead', 'Fast interactions']
    }
  ];

  const services = [
    {
      title: 'Accessibility Audits',
      description: 'Comprehensive evaluation of your digital products for accessibility compliance.',
      icon: Target,
      benefits: ['Automated testing', 'Manual evaluation', 'User testing', 'Compliance reporting']
    },
    {
<<<<<<< HEAD
      icon: Keyboard,
      title: 'Cognitive Accessibility',
      description: 'Clear navigation, consistent layouts, and simplified interfaces for users with cognitive disabilities.',
      benefits: ['Clear navigation', 'Consistent layouts', 'Simplified interfaces', 'Progress indicators']
      icon: Eye,
      title: 'Visual Accessibility',
      description: 'Screen reader compatibility, high contrast modes, and scalable text options.',
      benefits: ['Screen reader support', 'High contrast themes', 'Text scaling', 'Color blind friendly']
    },
    {
      icon: Ear,
      title: 'Audio Accessibility',
      description: 'Audio descriptions, captions, and alternative audio formats.',
      benefits: ['Audio descriptions', 'Closed captions', 'Sign language support', 'Audio transcripts']
    },
    {
      icon: Hand,
      title: 'Motor Accessibility',
      description: 'Keyboard navigation, voice control, and assistive technologies.',
      benefits: ['Keyboard navigation', 'Voice control', 'Switch control', 'Gesture alternatives']
    },
    {
      icon: Brain,
      title: 'Cognitive Accessibility',
      description: 'Clear language, consistent navigation, and cognitive load reduction.',
      benefits: ['Clear language', 'Consistent UI', 'Reduced complexity', 'Memory aids']
=======
      title: 'Implementation Services',
      description: 'Professional implementation of accessibility features and improvements.',
      icon: BarChart,
      benefits: ['Code implementation', 'Design updates', 'Testing & validation', 'Training & support']
    },
    {
      title: 'Ongoing Support',
      description: 'Continuous monitoring and maintenance of accessibility features.',
      icon: CheckCircle,
      benefits: ['Regular audits', 'Feature updates', 'Performance monitoring', 'Compliance tracking']
    },
    {
      title: 'Training & Education',
      description: 'Comprehensive training for your team on accessibility best practices.',
      icon: Brain,
      benefits: ['Team training', 'Best practices', 'Tool training', 'Compliance education']
>>>>>>> cursor/fix-errors-and-merge-to-main-cd37
    }
  ];

  const benefits = [
<<<<<<< HEAD
    'WCAG 2.1 AA compliance',
    'Screen reader compatibility',
    'Keyboard navigation support',
    'Alternative text for all images'
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
    'High contrast mode',
    'Text scaling up to 200%',
    'Alternative text for images',
    'Focus indicators',
    'Skip navigation links'
  ];

  const standards = [
    {
      icon: Shield,
      title: 'WCAG 2.1 AA',
      description: 'We follow Web Content Accessibility Guidelines 2.1 Level AA standards.'
    },
    {
      icon: CheckCircle,
      title: 'Section 508',
      description: 'Compliance with Section 508 of the Rehabilitation Act.'
    },
    {
      icon: Brain,
      title: 'ADA Compliance',
      description: 'Americans with Disabilities Act compliance for digital accessibility.'
=======
    {
      title: 'Legal Compliance',
      description: 'Meet accessibility requirements and avoid legal issues.',
      icon: Shield
    },
    {
      title: 'Broader Reach',
      description: 'Access your content and services to a wider audience.',
      icon: Target
    },
    {
      title: 'Better UX',
      description: 'Improved user experience for all users, not just those with disabilities.',
      icon: CheckCircle
    },
    {
      title: 'SEO Benefits',
      description: 'Accessibility improvements often lead to better search engine rankings.',
      icon: BarChart
>>>>>>> cursor/fix-errors-and-merge-to-main-cd37
    }
  ];

  return (
    <>
      <Helmet>
<<<<<<< HEAD
        <title>Accessibility - Zion Tech Group</title>
        <meta name="description" content="Learn about our commitment to web accessibility and inclusive design practices." />
        <meta name="keywords" content="accessibility, inclusive design, WCAG, screen reader, disability access" />
        <title>Accessibility - Zion Tech Group</title>
        <meta name="description" content="Comprehensive accessibility solutions for inclusive digital experiences" />
        <meta name="keywords" content="accessibility, WCAG, ADA compliance, inclusive design, digital accessibility" />
        <title>Accessibility - Zion Tech Group</title>
        <meta name="description" content="Accessible web design and development services ensuring inclusive digital experiences" />
        <meta name="keywords" content="accessibility, WCAG, inclusive design, web accessibility, ADA compliance" />
=======
        <title>Accessibility Services - Zion Tech Group</title>
        <meta name="description" content="Make your digital products accessible to everyone. Comprehensive accessibility services including audits, implementation, and ongoing support." />
>>>>>>> cursor/fix-errors-and-merge-to-main-cd37
      </Helmet>
      
      <Navigation />
      
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
<<<<<<< HEAD
=======
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Accessibility</span> Services
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Make your digital products accessible to everyone. We provide comprehensive accessibility solutions that ensure your content and services are inclusive for all users.
>>>>>>> cursor/fix-errors-and-merge-to-main-cd37
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 flex items-center justify-center">
                  Get Started
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button>
                <button className="border border-purple-400 text-purple-400 px-8 py-3 rounded-lg font-semibold hover:bg-purple-400 hover:text-white transition-all duration-300">
                  Learn More
                </button>
              </div>
<<<<<<< HEAD
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Digital <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Accessibility</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              We believe technology should be accessible to everyone. Our commitment to inclusive design ensures our solutions work for users of all abilities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300">
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Creating inclusive digital experiences that work for everyone, regardless of ability or disability.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300">
                Learn More
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300">
                Accessibility Report
              </button>
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-cd37
            </div>
          </div>
        </section>

        {/* Features Section */}
<<<<<<< HEAD
=======
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Comprehensive Accessibility Features</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our accessibility solutions cover all aspects of digital inclusion, ensuring your products work for everyone.
              </p>
>>>>>>> cursor/fix-errors-and-merge-to-main-cd37
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                  <feature.icon className="w-12 h-12 text-purple-400 mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
<<<<<<< HEAD
        <section className="py-20 px-4">
          <div className="container mx-auto">
=======
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
>>>>>>> cursor/fix-errors-and-merge-to-main-cd37
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Our Services</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                From initial assessment to ongoing support, we provide end-to-end accessibility solutions.
              </p>
            </div>
<<<<<<< HEAD
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => {
                const Icon = feature.icon;
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
                )
              })}
                );
              })}
=======

            <div className="grid md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                  <service.icon className="w-12 h-12 text-purple-400 mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
>>>>>>> cursor/fix-errors-and-merge-to-main-cd37
            </div>
          </div>
        </section>

<<<<<<< HEAD
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="flex-shrink-0">
        <section className="py-20 px-4 bg-slate-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    <CheckCircle className="h-6 w-6 text-cyan-400" />
                  </div>
                  <p className="text-gray-300">{benefit}</p>
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
=======
        {/* Benefits Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Why Choose Accessibility?</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Accessibility isn't just the right thing to do—it's also good for business.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <benefit.icon className="w-16 h-16 text-purple-400 mx-auto mb-6" />
                  <h3 className="text-xl font-semibold text-white mb-4">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
>>>>>>> cursor/fix-errors-and-merge-to-main-cd37
                </div>
              ))}
            </div>
          </div>
        </section>

<<<<<<< HEAD
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
                Accessibility Benefits
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Why accessibility matters for your business and users
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-400 flex-shrink-0" />
                  <span className="text-gray-300 text-lg">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Standards Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Compliance Standards
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                We ensure compliance with international accessibility standards
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {standards.map((standard, index) => {
                const Icon = standard.icon
                return (
                  <div key={index} className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-4">{standard.title}</h3>
                    <p className="text-gray-300">{standard.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">Need Help with Accessibility?</h2>
=======
        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Make Your Products Accessible?
            </h2>
>>>>>>> cursor/fix-errors-and-merge-to-main-cd37
            <p className="text-xl text-gray-300 mb-8">
              Let's work together to create inclusive digital experiences that everyone can use and enjoy.
            </p>
<<<<<<< HEAD
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center">
                Contact Support
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300">
                Report Issue
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
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Make Your Site Accessible?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let us help you create an inclusive digital experience that works for everyone.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300">
                Start Accessibility Audit
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300">
                Contact Us
              </button>
            </div>
=======
            <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 flex items-center mx-auto">
              Start Your Accessibility Journey
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
>>>>>>> cursor/fix-errors-and-merge-to-main-cd37
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

<<<<<<< HEAD
export default AccessibilityPage;
export default AccessibilityPage;
export default AccessibilityPage;
=======
export default AccessibilityPage;
>>>>>>> cursor/fix-errors-and-merge-to-main-cd37
