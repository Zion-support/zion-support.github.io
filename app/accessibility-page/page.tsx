'use client';
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { ArrowRight, CheckCircle, Eye, Ear, Hand, Brain, Shield, Zap } from 'lucide-react';

const AccessibilityPage: React.FC = () => {
  const features = [
    {
      icon: Eye,
      title: 'Visual Accessibility',
      description: 'Comprehensive visual accessibility features including high contrast modes, text scaling, and screen reader compatibility.',
      benefits: ['High contrast themes', 'Text scaling options', 'Screen reader support', 'Color blind friendly design']
    },
    {
      icon: Ear,
      title: 'Audio Accessibility',
      description: 'Advanced audio accessibility features for users with hearing impairments.',
      benefits: ['Audio descriptions', 'Visual indicators', 'Subtitles support', 'Haptic feedback']
    },
    {
      icon: Hand,
      title: 'Motor Accessibility',
      description: 'Motor accessibility features for users with physical disabilities.',
      benefits: ['Keyboard navigation', 'Voice control', 'Switch control', 'Gesture alternatives']
    },
    {
      icon: Brain,
      title: 'Cognitive Accessibility',
      description: 'Cognitive accessibility features to support users with learning disabilities.',
      benefits: ['Clear navigation', 'Consistent layouts', 'Error prevention', 'Helpful tooltips']
    }
  ];

  const benefits = [
    'WCAG 2.1 AA compliance',
    'Screen reader compatibility',
    'Keyboard navigation support',
    'High contrast mode available',
    'Text scaling up to 200%',
    'Voice control integration'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 mb-6">
              Accessibility Features
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              We are committed to making our platform accessible to everyone. Our comprehensive accessibility features ensure that all users can fully utilize our services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center">
                Learn More
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300">
                Contact Support
              </button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Accessibility Features</h2>
              <p className="text-xl text-gray-300">Comprehensive accessibility support for all users</p>
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
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Accessibility Standards</h2>
              <p className="text-xl text-gray-300">We follow international accessibility standards</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="flex-shrink-0">
                    <Shield className="h-6 w-6 text-cyan-400" />
                  </div>
                  <p className="text-gray-300">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">Need Accessibility Support?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Our team is here to help ensure you have the best possible experience with our platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center">
                Contact Support
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300">
                Read Documentation
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