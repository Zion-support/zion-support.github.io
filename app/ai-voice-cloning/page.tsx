'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, TrendingUp, Phone, Mail, MapPin, Star, Zap, Shield, Clock, Users, Award, ArrowRight } from 'lucide-react';

const AIVoiceCloningPage: React.FC = () => {
  const features = [
    'High-fidelity voice synthesis with 99.9% accuracy',
    'Real-time voice cloning in under 30 seconds',
    'Multi-language support (50+ languages)',
    'Emotion and tone control capabilities',
    'Custom voice training with minimal samples',
    'API integration for seamless deployment',
    'Voice aging and gender transformation',
    'Batch processing for multiple voices'
  ];

  const benefits = [
    'Reduce voice production costs by 95%',
    'Scale voice content creation instantly',
    'Maintain brand voice consistency',
    'Enable multilingual content easily',
    'Accelerate content production',
    'Personalize user experiences'
  ];

  const useCases = [
    {
      industry: 'Entertainment',
      description: 'Create character voices for games and animations',
      icon: '🎬'
    },
    {
      industry: 'Education',
      description: 'Generate personalized learning content',
      icon: '📚'
    },
    {
      industry: 'Marketing',
      description: 'Create consistent brand voice across campaigns',
      icon: '📢'
    },
    {
      industry: 'Accessibility',
      description: 'Provide voice assistance for visually impaired users',
      icon: '♿'
    }
  ];

  const pricing = [
    {
      plan: 'Starter',
      price: '$99/month',
      features: ['10 voice clones', 'Basic emotions', 'Standard quality', 'Email support'],
      popular: false
    },
    {
      plan: 'Professional',
      price: '$299/month',
      features: ['50 voice clones', 'Advanced emotions', 'High quality', 'Priority support', 'API access'],
      popular: true
    },
    {
      plan: 'Enterprise',
      price: 'Custom',
      features: ['Unlimited clones', 'Custom emotions', 'Premium quality', '24/7 support', 'Custom integration'],
      popular: false
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Voice Cloning - Zion Tech Group</title>
        <meta name="description" content="Create high-fidelity voice clones with our AI voice cloning service. Perfect for entertainment, education, and marketing applications." />
        <meta name="keywords" content="AI voice cloning, voice synthesis, text to speech, voice generation, voice AI, speech synthesis" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-24 pb-16 px-4">
          <div className="container mx-auto text-center">
            <div className="mb-8">
              <div className="w-20 h-20 bg-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-4xl">🎤</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                AI Voice Cloning
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Create high-fidelity voice clones with our advanced AI technology. 
                Perfect for entertainment, education, marketing, and accessibility applications.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="/contact"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all inline-flex items-center"
              >
                <Phone className="w-5 h-5 mr-2" />
                Get Started
              </a>
              <a
                href="tel:+13024640950"
                className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all inline-flex items-center"
              >
                <Phone className="w-4 h-4 mr-2" />
                (302) 464-0950
              </a>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
              Advanced Voice Cloning Features
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-cyan-400/20 hover:border-cyan-400/40 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <CheckCircle className="w-6 h-6 text-green-400 mr-3" />
                    <h3 className="text-lg font-semibold text-white">{feature}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-4 bg-slate-800/30">
          <div className="container mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
              Why Choose Our AI Voice Cloning?
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="w-8 h-8 text-cyan-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{benefit}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
              Industry Applications
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {useCases.map((useCase, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-cyan-400/20 hover:border-cyan-400/40 transition-all duration-300 text-center">
                  <div className="text-4xl mb-4">{useCase.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-2">{useCase.industry}</h3>
                  <p className="text-gray-300">{useCase.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-16 px-4 bg-slate-800/30">
          <div className="container mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
              Pricing Plans
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricing.map((plan, index) => (
                <div key={index} className={`bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border transition-all duration-300 ${
                  plan.popular 
                    ? 'border-cyan-400/60 scale-105' 
                    : 'border-cyan-400/20 hover:border-cyan-400/40'
                }`}>
                  {plan.popular && (
                    <div className="bg-cyan-500 text-white text-sm font-semibold px-3 py-1 rounded-full text-center mb-4">
                      Most Popular
                    </div>
                  )}
                  
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.plan}</h3>
                  <div className="text-3xl font-bold text-cyan-400 mb-6">{plan.price}</div>
                  
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <a
                    href="/contact"
                    className={`w-full block text-center py-3 rounded-lg font-semibold transition-all ${
                      plan.popular
                        ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-600 hover:to-blue-700'
                        : 'border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900'
                    }`}
                  >
                    Get Started
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <div className="bg-gradient-to-r from-indigo-900/50 to-purple-900/50 rounded-2xl p-8 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Clone Voices with AI?
              </h2>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                Start creating high-fidelity voice clones today. 
                Get a free consultation and see how our AI can transform your voice content.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="/contact"
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all inline-flex items-center"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Get Free Consultation
                </a>
                <a
                  href="tel:+13024640950"
                  className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all inline-flex items-center"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  (302) 464-0950
                </a>
              </div>
              <div className="mt-8 text-sm text-gray-400">
                <p>📧 kleber@ziontechgroup.com | 📍 364 E Main St STE 1008, Middletown DE 19709</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AIVoiceCloningPage;