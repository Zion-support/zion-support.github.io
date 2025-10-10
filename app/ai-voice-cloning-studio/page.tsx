'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Mic, Play, Download, Upload, Settings, Users, Star, CheckCircle, ArrowRight, Zap, Shield, Globe } from 'lucide-react';

const AiVoiceCloningStudioPage: React.FC = () => {
  const features = [
    'High-quality voice synthesis',
    'Multi-language support',
    'Real-time voice conversion',
    'Custom voice training',
    'API integration',
    'Commercial usage rights'
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$49/month',
      description: 'Perfect for content creators',
      features: [
        '5 voice clones',
        '10 hours/month generation',
        'Basic voice effects',
        'Standard quality',
        'Email support'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$149/month',
      description: 'For professional use',
      features: [
        '25 voice clones',
        '50 hours/month generation',
        'Advanced voice effects',
        'High quality output',
        'Priority support',
        'API access'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$399/month',
      description: 'For large organizations',
      features: [
        'Unlimited voice clones',
        'Unlimited generation',
        'Premium voice effects',
        'Ultra-high quality',
        '24/7 support',
        'Custom integrations',
        'White-label options'
      ],
      popular: false
    }
  ];

  const useCases = [
    {
      icon: <Globe className="w-8 h-8 text-blue-500" />,
      title: 'Content Creation',
      description: 'Create engaging audio content for videos, podcasts, and presentations'
    },
    {
      icon: <Users className="w-8 h-8 text-green-500" />,
      title: 'Accessibility',
      description: 'Generate voiceovers for accessibility features and assistive technologies'
    },
    {
      icon: <Settings className="w-8 h-8 text-purple-500" />,
      title: 'Automation',
      description: 'Automate voice responses for customer service and interactive systems'
    },
    {
      icon: <Shield className="w-8 h-8 text-red-500" />,
      title: 'Security',
      description: 'Create secure voice authentication and verification systems'
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Voice Cloning Studio - Zion Tech Group | Professional Voice Synthesis</title>
        <meta name="description" content="Create realistic voice clones with our AI Voice Cloning Studio. Professional voice synthesis for content creation, accessibility, and automation." />
        <meta name="keywords" content="AI voice cloning, voice synthesis, text-to-speech, voice generation, content creation, accessibility" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-purple-500/20 text-purple-400 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Mic className="w-4 h-4" />
              AI Voice Technology
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI Voice <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Cloning Studio</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
              Create realistic voice clones with cutting-edge AI technology. Perfect for content creators, developers, and businesses looking to enhance their audio experiences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105">
                Start Free Trial
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-slate-900 transition-all duration-300">
                Watch Demo
              </button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-6">Powerful Voice Cloning Features</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our AI-powered voice cloning technology delivers exceptional quality and natural-sounding results.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-purple-400 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <CheckCircle className="w-6 h-6 text-green-400 mr-3" />
                    <h3 className="text-lg font-semibold text-white">{feature}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-6">Use Cases</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Discover how our voice cloning technology can transform your projects.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {useCases.map((useCase, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                    {useCase.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{useCase.title}</h3>
                  <p className="text-gray-300">{useCase.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-6">Simple, Transparent Pricing</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the plan that fits your needs. All plans include our core voice cloning features.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`relative bg-white/10 backdrop-blur-lg rounded-2xl p-8 border ${
                    plan.popular
                      ? 'border-purple-400 shadow-2xl shadow-purple-500/25 scale-105'
                      : 'border-white/20'
                  } hover:border-purple-400 transition-all duration-300`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2">
                        <Star className="w-4 h-4 fill-current" />
                        Most Popular
                      </div>
                    </div>
                  )}

                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 mb-4">{plan.description}</p>
                    <div className="text-4xl font-bold text-white mb-2">{plan.price}</div>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white hover:from-purple-600 hover:to-blue-600 transform hover:scale-105'
                      : 'bg-white/10 text-white border border-white/20 hover:bg-white/20'
                  }`}>
                    Get Started
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Create Amazing Voice Content?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of creators and businesses using our AI voice cloning technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105">
                Start Free Trial
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-slate-900 transition-all duration-300">
                Contact Sales
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AiVoiceCloningStudioPage;
