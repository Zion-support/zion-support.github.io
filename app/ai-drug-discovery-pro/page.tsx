'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Shield, Brain, Zap, Target, CheckCircle, ArrowRight, Users, BarChart, Clock, Globe } from 'lucide-react';

const AiDrugDiscoveryProPage: React.FC = () => {
  const features = [
    'AI-Powered Molecular Design',
    'Drug-Target Interaction Prediction',
    'Side Effect Prediction & Analysis',
    'Clinical Trial Optimization',
    'Drug Repurposing Discovery',
    'Biomarker Identification',
    'Pharmacokinetics Modeling',
    'Toxicity Assessment',
    'Patent Analysis & IP Management',
    'Regulatory Compliance Support'
  ];

  const benefits = [
    'Reduce drug development time by 60%',
    'Lower R&D costs by 40-50%',
    'Improve success rates by 35%',
    'Accelerate time-to-market',
    'Enhanced patient safety',
    'Better drug efficacy prediction'
  ];

  const pricingTiers = [
    {
      name: 'Starter',
      price: '$2,999',
      period: '/month',
      description: 'Perfect for small biotech companies',
      features: [
        'Up to 5 drug targets',
        'Basic molecular modeling',
        'Standard toxicity screening',
        'Email support',
        'Basic reporting'
      ]
    },
    {
      name: 'Professional',
      price: '$7,999',
      period: '/month',
      description: 'Ideal for mid-size pharmaceutical companies',
      features: [
        'Up to 25 drug targets',
        'Advanced AI modeling',
        'Comprehensive toxicity analysis',
        'Priority support',
        'Advanced analytics',
        'API integration'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$19,999',
      period: '/month',
      description: 'For large pharmaceutical corporations',
      features: [
        'Unlimited drug targets',
        'Custom AI models',
        'Full regulatory support',
        '24/7 dedicated support',
        'Custom integrations',
        'White-label options'
      ]
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Drug Discovery Pro - Zion Tech Group | Pharmaceutical AI Solutions</title>
        <meta name="description" content="Revolutionary AI-powered drug discovery platform. Accelerate pharmaceutical research with machine learning, molecular modeling, and predictive analytics. Reduce development time by 60%." />
        <meta name="keywords" content="AI drug discovery, pharmaceutical AI, molecular modeling, drug development, machine learning, biotech, Zion Tech Group" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center bg-green-500/20 text-green-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Shield className="w-4 h-4 mr-2" />
              Pharmaceutical AI Solutions
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI Drug Discovery Pro
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Revolutionize pharmaceutical research with our advanced AI-powered drug discovery platform. 
              Accelerate drug development, reduce costs, and improve success rates using cutting-edge machine learning and molecular modeling.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Start Free Trial
              </button>
              <button className="border border-white/20 text-white font-semibold py-4 px-8 rounded-lg hover:bg-white/10 transition-all duration-300">
                Schedule Demo
              </button>
            </div>
          </div>
        </section>

        {/* Key Benefits */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
              Transform Drug Discovery with AI
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mr-4">
                      <CheckCircle className="w-6 h-6 text-green-400" />
                    </div>
                    <h3 className="text-xl font-semibold text-white">{benefit}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
              Advanced AI Capabilities
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3 p-4 bg-white/10 rounded-lg hover:bg-white/20 transition-all duration-300">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-gray-300">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
              Choose Your Plan
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {pricingTiers.map((tier, index) => (
                <div key={index} className={`bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 relative ${tier.popular ? 'ring-2 ring-green-500' : ''}`}>
                  {tier.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </div>
                  )}
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                    <p className="text-gray-300 mb-4">{tier.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-white">{tier.price}</span>
                      <span className="text-gray-300 ml-1">{tier.period}</span>
                    </div>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {tier.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    tier.popular 
                      ? 'bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white' 
                      : 'border border-white/20 text-white hover:bg-white/10'
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
              Ready to Accelerate Your Drug Discovery?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join leading pharmaceutical companies using AI to revolutionize drug development. 
              Start your free trial today and see the difference AI can make.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Start Free Trial
              </button>
              <button className="border border-white/20 text-white font-semibold py-4 px-8 rounded-lg hover:bg-white/10 transition-all duration-300">
                Contact Sales
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AiDrugDiscoveryProPage;