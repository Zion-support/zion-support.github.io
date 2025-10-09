'use client';
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
const AIVoiceCloningPage: React.FC = () => {
  const features = [
    'High-quality voice synthesis',
    'Emotion control and modulation',
    'Real-time voice cloning',
    'Multi-language support',
    'Custom voice training',
    'API integration'
  ];
  const useCases = [
    {
      title: 'Accessibility',
      description: 'Create voice interfaces for visually impaired users',
      icon: '♿'
    },
    {
      title: 'Entertainment',
      description: 'Generate character voices for games and animations',
      icon: '🎮'
    },
    {
      title: 'Education',
      description: 'Create personalized learning experiences with custom voices',
      icon: '📚'
    },
    {
      title: 'Customer Service',
      description: 'Deploy consistent brand voice across all touchpoints',
      icon: '🎧'
    },
    {
      title: 'Marketing',
      description: 'Produce consistent brand voice across all marketing materials',
      icon: '📢'
    }
  ];
  const applications = [
    'Podcast production',
    'E-learning content',
    'Customer service automation',
    'Accessibility solutions',
    'Marketing campaigns',
    'Entertainment industry'
  ];
  const pricing = [
    {
      plan: 'Starter',
      price: '$99/month',
      features: ['Up to 5 voice models', '10 hours of synthesis', 'Basic emotions', 'Standard quality'],
      popular: false
    },
    {
      plan: 'Professional',
      price: '$299/month',
      features: ['Up to 20 voice models', '50 hours of synthesis', 'Advanced emotions', 'High quality', 'API access'],
      popular: true
    },
    {
      plan: 'Enterprise',
      price: '$999/month',
      features: ['Unlimited voice models', 'Unlimited synthesis', 'All emotions', 'Premium quality', 'Custom training', 'Priority support'],
      popular: false
    }
  ];
  const technologies = [
    'Tacotron 2', 'WaveNet', 'MelGAN', 'Real-time Voice Cloning',
    'Custom Neural Networks', 'Deep Learning', 'Signal Processing',
    'Text-to-Speech Synthesis', 'Voice Conversion', 'Audio Processing'
  ];
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      <main className="container mx-auto px-4 py-16 pt-24">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-purple-600/20 text-purple-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Mic className="w-4 h-4" />
            <span>AI Voice Cloning Technology</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Advanced AI Voice Cloning
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Create realistic, customizable voice clones with our cutting-edge AI technology. 
            Perfect for accessibility, entertainment, and business applications.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-medium transition-colors inline-flex items-center space-x-2"
            >
              <Phone className="w-4 h-4" />
              <span>Call (302) 464-0950</span>
            </a>
            <a
              href="mailto:info@ziontechgroup.com"
              className="border border-purple-600 text-purple-400 hover:bg-purple-600 hover:text-white px-8 py-3 rounded-lg font-medium transition-colors inline-flex items-center space-x-2"
            >
              <Mail className="w-4 h-4" />
              <span>Email Us</span>
            </a>
          </div>
        </section>
        {/* Features Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            Powerful Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-purple-500/20">
                <div className="flex items-center space-x-3 mb-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <h3 className="text-lg font-semibold text-white">{feature}</h3>
                </div>
              </div>
            ))}
          </div>
        </section>
        {/* Use Cases Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            Use Cases
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20 hover:border-purple-400/40 transition-colors">
                <div className="text-4xl mb-4">{useCase.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{useCase.title}</h3>
                <p className="text-gray-300">{useCase.description}</p>
              </div>
            ))}
          </div>
        </section>
        {/* Applications Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            Applications
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {applications.map((app, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center border border-purple-500/20">
                <p className="text-white font-medium">{app}</p>
              </div>
            ))}
          </div>
        </section>
        {/* Pricing Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            Pricing Plans
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricing.map((plan, index) => (
              <div key={index} className={`bg-white rounded-xl shadow-lg p-8 relative ${plan.popular ? 'ring-2 ring-purple-500 scale-105' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-purple-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.plan}</h3>
                  <div className="text-4xl font-bold text-purple-600 mb-2">{plan.price}</div>
                  <p className="text-gray-600">per month</p>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-lg font-medium transition-colors">
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </section>
        {/* Technologies Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            Technologies
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {technologies.map((tech, index) => (
              <span key={index} className="bg-purple-600/20 text-purple-300 px-4 py-2 rounded-full text-sm font-medium">
                {tech}
              </span>
            ))}
          </div>
        </section>
        {/* CTA Section */}
        <section className="text-center bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl p-12">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Create Amazing Voice Experiences?
          </h2>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Contact us today to learn more about our AI voice cloning technology and how it can transform your applications.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="bg-white text-purple-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors inline-flex items-center space-x-2"
            >
              <Phone className="w-4 h-4" />
              <span>Call (302) 464-0950</span>
            </a>
            <a
              href="mailto:info@ziontechgroup.com"
              className="border border-white text-white hover:bg-white hover:text-purple-600 px-8 py-3 rounded-lg font-medium transition-colors inline-flex items-center space-x-2"
            >
              <Mail className="w-4 h-4" />
              <span>Email Us</span>
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};
export default AIVoiceCloningPage;