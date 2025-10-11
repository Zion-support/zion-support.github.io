'use client'
import React from 'react'
import {Helmet} from 'react-helmet-async'
import {Eye, Ear, Hand, Brain, Shield, CheckCircle, ArrowRight, Target, BarChart, Zap} from 'lucide-react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

const AccessibilityPage: React.FC = () => {
  const features = [
    {
      icon: Eye,
      title: 'Visual Accessibility',
      description: 'Comprehensive solutions for users with visual impairments and color vision deficiencies.',
      benefits: ['Screen reader compatibility', 'High contrast modes', 'Color blind support', 'Text scaling']
    },
    {
      icon: Ear,
      title: 'Audio Accessibility',
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
      benefits: ['WCAG 2.1 AA assessment', 'Automated testing', 'Manual testing', 'Detailed reports']
    },
    {
      title: 'Design & Development',
      description: 'Creating accessible user interfaces and experiences from the ground up.',
      icon: BarChart,
      benefits: ['Inclusive design patterns', 'Accessible components', 'User testing', 'Implementation support']
    },
    {
      title: 'Training & Consulting',
      description: 'Empowering your team with accessibility knowledge and best practices.',
      icon: Zap,
      benefits: ['Team training', 'Best practices', 'Ongoing support', 'Compliance guidance']
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
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mr-4">
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
                  </div>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
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
                Our Accessibility Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                From audits to implementation, we provide comprehensive accessibility solutions.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {services.map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-8 text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-4">{service.title}</h3>
                    <p className="text-gray-300 mb-6">{service.description}</p>
                    <ul className="space-y-2">
                      {service.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Make Your Product Accessible?
              </h2>
              <p className="text-xl text-white/90 mb-8">
                Let's work together to create inclusive digital experiences that everyone can use.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center">
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>
                <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300">
                  Contact Us
                </button>
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