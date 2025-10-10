'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, ArrowRight, Phone, Mail, MapPin, Zap, Shield, Brain, Globe, Smartphone, Code, Palette, Database, Cloud, Users, BarChart, Settings, Lock, Rocket } from 'lucide-react';

const AIMobileBuilderPage: React.FC = () => {
  const features = [
    {
      icon: Smartphone,
      title: 'AI-Powered Mobile App Builder',
      description: 'Build native mobile applications with AI assistance, drag-and-drop interface, and instant deployment.'
    },
    {
      icon: Code,
      title: 'No-Code Development',
      description: 'Create complex mobile apps without writing a single line of code using our intuitive visual builder.'
    },
    {
      icon: Palette,
      title: 'Custom UI/UX Design',
      description: 'AI-generated designs that adapt to your brand and user preferences automatically.'
    },
    {
      icon: Database,
      title: 'Backend Integration',
      description: 'Seamlessly connect to databases, APIs, and cloud services with built-in integrations.'
    }
  ];

  const benefits = [
    'Build apps 10x faster than traditional development',
    'AI-powered code generation and optimization',
    'Cross-platform compatibility (iOS & Android)',
    'Real-time preview and testing',
    'Built-in analytics and performance monitoring',
    'One-click deployment to app stores',
    '24/7 AI assistance and support',
    'Scalable cloud infrastructure'
  ];

  const pricing = [
    {
      name: 'Starter',
      price: '$99',
      period: '/month',
      description: 'Perfect for small businesses and startups',
      features: [
        'Up to 3 mobile apps',
        'Basic AI features',
        'Standard templates',
        'Email support',
        'Basic analytics'
      ]
    },
    {
      name: 'Professional',
      price: '$299',
      period: '/month',
      description: 'Ideal for growing companies',
      features: [
        'Up to 10 mobile apps',
        'Advanced AI features',
        'Custom templates',
        'Priority support',
        'Advanced analytics',
        'API integrations'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$799',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Unlimited mobile apps',
        'Premium AI features',
        'White-label solution',
        '24/7 dedicated support',
        'Custom analytics',
        'Advanced integrations',
        'Team collaboration'
      ]
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Mobile App Builder - Zion Tech Group | Build Apps 10x Faster</title>
        <meta name="description" content="Build native mobile applications with AI assistance. No-code development, instant deployment, and cross-platform compatibility. Start building today!" />
        <meta name="keywords" content="AI mobile app builder, no-code development, mobile app development, cross-platform apps, AI-powered development" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16 pt-24">
          {/* Hero Section */}
          <section className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text">
              AI Mobile App Builder
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Build native mobile applications with AI assistance, drag-and-drop interface, and instant deployment. 
              Create apps 10x faster than traditional development.
            </p>
          </section>

          {/* Features Section */}
          <section className="mb-16">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-12 text-center neon-text">Powerful Features</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {features.map((feature, index) => (
                  <div key={index} className="cyber-card hologram-card p-6 text-center hover:scale-105 transition-all duration-300">
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <feature.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                    <p className="text-gray-300 text-sm">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Benefits Section */}
          <section className="mb-16">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-12 text-center neon-text">Why Choose Our AI Mobile Builder?</h2>
              <div className="cyber-card hologram-card p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span className="text-gray-300">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Pricing Section */}
          <section className="mb-16">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-12 text-center neon-text">Pricing Plans</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {pricing.map((plan, index) => (
                  <div
                    key={index}
                    className={`cyber-card hologram-card p-8 relative ${
                      plan.popular ? 'ring-2 ring-cyan-500 scale-105' : ''
                    }`}
                  >
                    {plan.popular && (
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                        <div className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                          Most Popular
                        </div>
                      </div>
                    )}
                    
                    <div className="text-center mb-6">
                      <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                      <p className="text-gray-300 mb-4">{plan.description}</p>
                      <div className="flex items-baseline justify-center">
                        <span className="text-4xl font-bold text-cyan-400">{plan.price}</span>
                        <span className="text-gray-400 ml-1">{plan.period}</span>
                      </div>
                    </div>

                    <ul className="space-y-4 mb-8">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center">
                          <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                          <span className="text-gray-300">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <button className="w-full cyber-button text-center py-3">
                      Get Started
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center">
            <div className="cyber-card hologram-card p-8 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-white mb-4">Ready to Build Your Mobile App?</h3>
              <p className="text-gray-300 mb-6">
                Start building your mobile app today with our AI-powered builder. 
                No coding experience required - just drag, drop, and deploy!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="cyber-button text-center py-3 px-8"
                >
                  Start Building
                </a>
                <a
                  href="/demo"
                  className="border-2 border-cyan-500 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-500 hover:text-white transition-all duration-300"
                >
                  View Demo
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default AIMobileBuilderPage;