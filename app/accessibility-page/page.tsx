'use client';
import React from 'react';
import { CheckCircle, Eye, Ear, Hand, Brain, Shield, Target, BarChart, Zap, ArrowRight } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export default PagePage;
const AccessibilityPage: React.FC = () => {
  const features = [
    {
      icon: <Eye className="w-8 h-8" />,
      title: 'Visual Accessibility',
      description: 'Screen reader compatibility, high contrast modes, and visual indicators for better user experience.',
      benefits: ['Screen reader support', 'High contrast themes', 'Focus indicators', 'Text scaling']
    },
    {
      icon: <Ear className="w-8 h-8" />,
      title: 'Audio Accessibility',
      description: 'Audio descriptions, captions, and alternative audio formats for hearing-impaired users.',
      benefits: ['Closed captions', 'Audio descriptions', 'Sign language support', 'Visual alerts']
    },
    {
      icon: <Hand className="w-8 h-8" />,
      title: 'Motor Accessibility',
      description: 'Keyboard navigation, voice control, and alternative input methods for users with motor disabilities.',
      benefits: ['Keyboard navigation', 'Voice control', 'Switch navigation', 'Gesture alternatives']
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: 'Cognitive Accessibility',
      description: 'Clear language, consistent navigation, and simplified interfaces for cognitive accessibility.',
      benefits: ['Clear language', 'Consistent design', 'Error prevention', 'Progress indicators']
    }
  ];

  const services = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Accessibility Audits',
      description: 'Comprehensive evaluation of your digital products against WCAG 2.1 AA standards.',
      benefits: ['WCAG compliance check', 'Detailed reports', 'Remediation guidance', 'Follow-up testing']
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: 'Implementation Support',
      description: 'Hands-on assistance implementing accessibility features and best practices.',
      benefits: ['Code implementation', 'Design consultation', 'Testing support', 'Training sessions']
    }
  ];

  const standards = [
    'WCAG 2.1 AA Compliance',
    'Section 508 Compliance',
    'ADA Compliance',
    'EN 301 549 Compliance'
  ];

  const benefits = [
    {
      icon: <BarChart className="w-8 h-8" />,
      title: 'Increased Reach',
      description: 'Access your products to 15% of the global population with disabilities.'
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Better Performance',
      description: 'Accessible design often leads to better overall user experience and performance.'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Legal Compliance',
      description: 'Meet legal requirements and avoid potential lawsuits and penalties.'
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: 'Brand Reputation',
      description: 'Demonstrate your commitment to inclusion and social responsibility.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>Accessibility - Zion Tech Group</title>
        <meta name="description" content="Learn about our commitment to web accessibility and inclusive design practices." />
        <meta name="keywords" content="accessibility, inclusive design, WCAG compliance, ADA compliance, web accessibility" />
      </Helmet>
      <Navigation />

      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4">
          <div className="container mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Accessibility</span> First
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              We believe technology should be accessible to everyone. Our commitment to inclusive design ensures that our solutions work for all users.
            </p>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Accessibility Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our accessibility solutions cover all aspects of digital inclusion, ensuring your products work for everyone.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                  Quality Assurance
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                  Fast Delivery
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                  24/7 Support
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                  Custom Solutions
                </li>
              </ul>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="flex items-center mb-4">
                <CheckCircle className="h-8 w-8 text-blue-400 mr-3" />
                <h3 className="text-xl font-semibold text-white">Advanced Technology</h3>
              </div>
              <p className="text-gray-300 mb-4">
                Cutting-edge tools and technologies to deliver superior results.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="h-4 w-4 text-blue-400 mr-2" />
                  Latest Tools
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="h-4 w-4 text-blue-400 mr-2" />
                  Modern Methods
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="h-4 w-4 text-blue-400 mr-2" />
                  Scalable Solutions
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="h-4 w-4 text-blue-400 mr-2" />
                  Future-Ready
                </li>
              </ul>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="flex items-center mb-4">
                <CheckCircle className="h-8 w-8 text-purple-400 mr-3" />
                <h3 className="text-xl font-semibold text-white">Proven Results</h3>
              </div>
              <p className="text-gray-300 mb-4">
                Track record of successful projects and satisfied clients.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="h-4 w-4 text-purple-400 mr-2" />
                  High Success Rate
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="h-4 w-4 text-purple-400 mr-2" />
                  Client Satisfaction
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="h-4 w-4 text-purple-400 mr-2" />
                  Ongoing Support
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="h-4 w-4 text-purple-400 mr-2" />
                  Continuous Improvement
                </li>
              </ul>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                  <div className="w-12 h-12 text-purple-400 mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 mb-4">
                    {feature.description}
                  </p>
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
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Our Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive accessibility services to make your digital products inclusive
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                  <div className="w-12 h-12 text-blue-400 mb-4">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 mb-4">
                    {service.description}
                  </p>
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
            </div>
          </div>
        </section>

        {/* Standards Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Compliance Standards
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We ensure your products meet all major accessibility standards and regulations
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {standards.map((standard, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
                  <Shield className="w-12 h-12 text-green-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-white">
                    {standard}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Why Accessibility Matters
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Beyond compliance, accessibility brings real business value
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 text-purple-400 mx-auto mb-4">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-300">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Make Your Products Accessible?
            </h2>
            <p className="text-xl text-gray-100 mb-8">
              Let's work together to create inclusive digital experiences that work for everyone.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center">
                Start Your Accessibility Journey
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300">
                Schedule Consultation
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AccessibilityPage;
