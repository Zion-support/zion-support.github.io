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
      description: 'High contrast modes, text scaling, and screen reader compatibility.',
      benefits: ['High contrast themes', 'Text scaling options', 'Screen reader support', 'Color blind friendly']
    },
    {
      icon: Volume2,
      title: 'Audio Accessibility',
      description: 'Audio descriptions, captions, and sound alternatives.',
      benefits: ['Audio descriptions', 'Closed captions', 'Sound alternatives', 'Voice navigation']
    },
    {
      icon: MousePointer,
      title: 'Motor Accessibility',
      description: 'Keyboard navigation and alternative input methods.',
      benefits: ['Keyboard navigation', 'Voice control', 'Switch control', 'Gesture alternatives']
    },
    {
      icon: Keyboard,
      title: 'Cognitive Accessibility',
      description: 'Clear navigation and simplified interfaces.',
      benefits: ['Clear navigation', 'Simplified interfaces', 'Consistent layouts', 'Error prevention']
    }
  ];

  const benefits = [
    'WCAG 2.1 AA compliance',
    'Screen reader compatibility',
    'Keyboard navigation support',
    'High contrast mode',
    'Text scaling options',
    'Voice control integration',
    'Alternative text for images',
    'Focus indicators'
  ];

  const stats = [
    { number: '100%', label: 'WCAG Compliance' },
    { number: '15%', label: 'Global Population' },
    { number: '2.2B', label: 'People with Disabilities' },
    { number: '30%', label: 'Better Performance' }
  ];

  return (
    <>
      <Helmet>
        <title>Accessibility - Zion Tech Group</title>
        <meta name="description" content="Comprehensive accessibility solutions ensuring inclusive digital experiences for all users" />
        <meta name="keywords" content="accessibility, WCAG, inclusive design, digital accessibility, screen reader, keyboard navigation" />
      </Helmet>
      <Navigation />
      
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Digital <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Accessibility</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Creating inclusive digital experiences that work for everyone, ensuring your website and applications are accessible to all users.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Accessibility Features
              </h2>
              <p className="text-xl text-gray-300">
                Comprehensive accessibility solutions for modern web applications
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-blue-400/50 transition-all duration-300">
                  <div className="text-blue-400 mb-4">
                    <feature.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="h-4 w-4 text-blue-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 px-4 bg-black/20">
          <div className="container mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Why Accessibility Matters
              </h2>
              <p className="text-xl text-gray-300">
                Creating inclusive experiences that benefit everyone
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-blue-400 mr-4 flex-shrink-0 mt-1" />
                    <p className="text-gray-300 text-lg">{benefit}</p>
                  </div>
                ))}
              </div>
              <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold text-white mb-4">Ready to Make a Difference?</h3>
                <p className="text-gray-300 mb-6">
                  Join us in creating a more inclusive digital world where everyone can participate and thrive.
                </p>
                <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300">
                  Start Your Journey
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Improve Accessibility?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Let's work together to create digital experiences that are truly inclusive and accessible to all.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300">
                Contact Us Now
              </button>
              <button className="border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </section>
      </div>
      
      <Footer />
    </>
  );
};

export default AccessibilityPage;