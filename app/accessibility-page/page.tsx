'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Accessibility, Eye, Volume2, MousePointer, Keyboard, CheckCircle, ArrowRight } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AccessibilityPage: React.FC = () => {
  const features = [
    {
      icon: Eye,
      title: 'Visual Accessibility',
      description: 'High contrast modes, scalable text, and screen reader compatibility for users with visual impairments.',
      benefits: ['High contrast themes', 'Scalable fonts', 'Screen reader support', 'Color blind friendly']
    },
    {
      icon: Volume2,
      title: 'Audio Accessibility',
      description: 'Audio descriptions, captions, and alternative audio formats for users with hearing impairments.',
      benefits: ['Audio descriptions', 'Closed captions', 'Sign language support', 'Audio alternatives']
    },
    {
      icon: MousePointer,
      title: 'Motor Accessibility',
      description: 'Keyboard navigation, voice control, and assistive technologies for users with motor impairments.',
      benefits: ['Keyboard navigation', 'Voice control', 'Switch control', 'Eye tracking support']
    },
    {
      icon: Keyboard,
      title: 'Cognitive Accessibility',
      description: 'Clear navigation, simplified interfaces, and cognitive load reduction for users with cognitive disabilities.',
      benefits: ['Clear navigation', 'Simplified interfaces', 'Consistent patterns', 'Error prevention']
    }
  ];

  const standards = [
    {
      name: 'WCAG 2.1 AA',
      description: 'Web Content Accessibility Guidelines 2.1 Level AA compliance',
      status: 'Fully Compliant'
    },
    {
      name: 'Section 508',
      description: 'US federal accessibility standards compliance',
      status: 'Fully Compliant'
    },
    {
      name: 'ADA Compliance',
      description: 'Americans with Disabilities Act compliance',
      status: 'Fully Compliant'
    },
    {
      name: 'EN 301 549',
      description: 'European accessibility standard compliance',
      status: 'Fully Compliant'
    }
  ];

  const tools = [
    {
      name: 'Screen Reader Testing',
      description: 'Comprehensive testing with NVDA, JAWS, and VoiceOver',
      icon: Eye
    },
    {
      name: 'Keyboard Navigation',
      description: 'Full keyboard accessibility testing and optimization',
      icon: Keyboard
    },
    {
      name: 'Color Contrast',
      description: 'WCAG compliant color contrast ratio validation',
      icon: CheckCircle
    },
    {
      name: 'Automated Testing',
      description: 'Continuous accessibility testing with axe-core and WAVE',
      icon: Shield
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <Helmet>
        <title>Accessibility | Zion Tech Group - Inclusive Digital Solutions</title>
        <meta name="description" content="Comprehensive accessibility solutions ensuring your digital products are inclusive and accessible to all users. WCAG 2.1 AA compliant services." />
        <meta name="keywords" content="accessibility, WCAG, ADA compliance, inclusive design, screen reader, keyboard navigation" />
      </Helmet>
      
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Accessibility
              </span>
              <br />
              <span className="text-gray-700">Solutions</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Creating inclusive digital experiences that are accessible to everyone. 
              We ensure your products meet the highest accessibility standards and 
              provide equal access to all users.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
                Get Accessibility Audit
              </button>
              <button className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Accessibility Features
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We implement a wide range of accessibility features to ensure your 
              digital products are usable by everyone, regardless of their abilities.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="flex items-center mb-4">
                  <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-3 rounded-lg mr-4">
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">{feature.title}</h3>
                </div>
                <p className="text-gray-600 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Standards Compliance */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Standards Compliance
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We ensure your products meet and exceed international accessibility standards.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {standards.map((standard, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="text-center">
                  <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                    {standard.status}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {standard.name}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {standard.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testing Tools */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Testing Approach
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We use a combination of automated and manual testing to ensure 
              comprehensive accessibility coverage.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {tools.map((tool, index) => (
              <div key={index} className="text-center">
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                  <tool.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{tool.name}</h3>
                <p className="text-gray-600">{tool.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Accessibility Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A systematic approach to making your digital products accessible to everyone.
            </p>
          </div>
          
          <div className="space-y-12">
            <div className="flex flex-col lg:flex-row items-center">
              <div className="lg:w-1/3 mb-8 lg:mb-0">
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white text-2xl font-bold w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  01
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">Accessibility Audit</h3>
                <p className="text-gray-600">Comprehensive evaluation of your current accessibility status</p>
              </div>
              <div className="lg:w-2/3 lg:pl-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center bg-white p-4 rounded-lg shadow-sm">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    <span className="text-gray-700">Automated testing</span>
                  </div>
                  <div className="flex items-center bg-white p-4 rounded-lg shadow-sm">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    <span className="text-gray-700">Manual testing</span>
                  </div>
                  <div className="flex items-center bg-white p-4 rounded-lg shadow-sm">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    <span className="text-gray-700">User testing</span>
                  </div>
                  <div className="flex items-center bg-white p-4 rounded-lg shadow-sm">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    <span className="text-gray-700">Compliance report</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col lg:flex-row items-center">
              <div className="lg:w-1/3 mb-8 lg:mb-0">
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white text-2xl font-bold w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  02
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">Implementation</h3>
                <p className="text-gray-600">Implementing accessibility improvements and fixes</p>
              </div>
              <div className="lg:w-2/3 lg:pl-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center bg-white p-4 rounded-lg shadow-sm">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    <span className="text-gray-700">Code fixes</span>
                  </div>
                  <div className="flex items-center bg-white p-4 rounded-lg shadow-sm">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    <span className="text-gray-700">Design updates</span>
                  </div>
                  <div className="flex items-center bg-white p-4 rounded-lg shadow-sm">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    <span className="text-gray-700">Content optimization</span>
                  </div>
                  <div className="flex items-center bg-white p-4 rounded-lg shadow-sm">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    <span className="text-gray-700">Testing validation</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col lg:flex-row items-center">
              <div className="lg:w-1/3 mb-8 lg:mb-0">
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white text-2xl font-bold w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  03
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">Ongoing Support</h3>
                <p className="text-gray-600">Continuous monitoring and maintenance of accessibility standards</p>
              </div>
              <div className="lg:w-2/3 lg:pl-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center bg-white p-4 rounded-lg shadow-sm">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    <span className="text-gray-700">Regular audits</span>
                  </div>
                  <div className="flex items-center bg-white p-4 rounded-lg shadow-sm">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    <span className="text-gray-700">Team training</span>
                  </div>
                  <div className="flex items-center bg-white p-4 rounded-lg shadow-sm">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    <span className="text-gray-700">Best practices</span>
                  </div>
                  <div className="flex items-center bg-white p-4 rounded-lg shadow-sm">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    <span className="text-gray-700">Compliance updates</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Make Your Digital Products Accessible
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Ensure your digital products are inclusive and accessible to all users. 
            Get started with our comprehensive accessibility audit today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
              Start Accessibility Audit
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300">
              Contact Our Experts
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AccessibilityPage;