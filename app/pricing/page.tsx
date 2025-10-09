'use client';
import React, { useState } from 'react';
import { CheckCircle, Star, Phone, Mail, ArrowRight, Zap, Brain, Cpu, Shield, Globe, Users, Award } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const PricingPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('micro-saas');

  const microSAASPricing = [
    {
      name: 'Starter',
      price: '$79',
      period: '/month',
      description: 'Perfect for small businesses and startups',
      features: [
        'Up to 5 services',
        'Basic AI features',
        'Email support',
        'Standard reporting',
        'Mobile app access'
      ],
      popular: false,
      color: 'cyan'
    },
    {
      name: 'Professional',
      price: '$199',
      period: '/month',
      description: 'Ideal for growing businesses',
      features: [
        'Up to 15 services',
        'Advanced AI features',
        'Priority support',
        'Custom integrations',
        'API access',
        'Team collaboration'
      ],
      popular: true,
      color: 'cyan'
    },
    {
      name: 'Enterprise',
      price: '$499',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Unlimited services',
        'Premium AI features',
        '24/7 dedicated support',
        'Custom development',
        'White-label options',
        'Advanced analytics'
      ],
      popular: false,
      color: 'cyan'
    }
  ];

  const aiServicesPricing = [
    {
      name: 'Basic AI',
      price: '$1,000',
      period: '/month',
      description: 'Essential AI services for small to medium businesses',
      features: [
        'Machine Learning models',
        'Natural Language Processing',
        'Basic computer vision',
        'Email support',
        'Standard deployment'
      ],
      popular: false,
      color: 'purple'
    },
    {
      name: 'Advanced AI',
      price: '$2,500',
      period: '/month',
      description: 'Comprehensive AI solutions for enterprise needs',
      features: [
        'Advanced ML algorithms',
        'Computer vision systems',
        'AI automation',
        'Priority support',
        'Custom model training',
        'API integration'
      ],
      popular: true,
      color: 'purple'
    },
    {
      name: 'Quantum AI',
      price: '$5,000',
      period: '/month',
      description: 'Cutting-edge quantum computing and AI',
      features: [
        'Quantum algorithms',
        'Edge computing',
        'Autonomous systems',
        '24/7 support',
        'Custom development',
        'Research collaboration'
      ],
      popular: false,
      color: 'purple'
    }
  ];

  const itServicesPricing = [
    {
      name: 'Basic IT',
      price: '$800',
      period: '/month',
      description: 'Essential IT services and support',
      features: [
        'Cloud migration',
        'Basic cybersecurity',
        'IT consulting',
        'Email support',
        'Standard maintenance'
      ],
      popular: false,
      color: 'green'
    },
    {
      name: 'Advanced IT',
      price: '$2,000',
      period: '/month',
      description: 'Comprehensive IT solutions',
      features: [
        'Full cloud services',
        'Advanced cybersecurity',
        'DevOps & CI/CD',
        'Priority support',
        'Custom integrations',
        'Performance optimization'
      ],
      popular: true,
      color: 'green'
    },
    {
      name: 'Enterprise IT',
      price: '$5,000',
      period: '/month',
      description: 'Complete enterprise IT infrastructure',
      features: [
        'Quantum computing services',
        '5G network solutions',
        'AR/VR development',
        '24/7 support',
        'Custom solutions',
        'Global deployment'
      ],
      popular: false,
      color: 'green'
    }
  ];

  const popularServices = [
    {
      name: 'AI Project Manager',
      price: '$99/month',
      icon: '📊',
      description: 'Intelligent project planning with AI-powered resource optimization'
    },
    {
      name: 'AI Social Media Manager',
      price: '$79/month',
      icon: '📱',
      description: 'Automate your social media with AI-powered content creation'
    },
    {
      name: 'AI Analytics Dashboard',
      price: '$149/month',
      icon: '📈',
      description: 'Transform your data into actionable insights with AI'
    },
    {
      name: 'AI Email Marketing',
      price: '$99/month',
      icon: '📧',
      description: 'Transform your email marketing with AI-powered automation'
    },
    {
      name: 'AI Customer Support Bot',
      price: '$149/month',
      icon: '🤖',
      description: 'Provide 24/7 intelligent customer support with AI'
    },
    {
      name: 'AI Video Generator',
      price: '$199/month',
      icon: '🎥',
      description: 'Create professional videos with AI-powered editing'
    }
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'cyan':
        return {
          bg: 'bg-cyan-400',
          text: 'text-cyan-400',
          border: 'border-cyan-400',
          hover: 'hover:bg-cyan-400 hover:text-slate-900'
        };
      case 'purple':
        return {
          bg: 'bg-purple-400',
          text: 'text-purple-400',
          border: 'border-purple-400',
          hover: 'hover:bg-purple-400 hover:text-slate-900'
        };
      case 'green':
        return {
          bg: 'bg-green-400',
          text: 'text-green-400',
          border: 'border-green-400',
          hover: 'hover:bg-green-400 hover:text-slate-900'
        };
      default:
        return {
          bg: 'bg-cyan-400',
          text: 'text-cyan-400',
          border: 'border-cyan-400',
          hover: 'hover:bg-cyan-400 hover:text-slate-900'
        };
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16 pt-24">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 cyber-text-3d neon-pulse">
            Pricing Plans
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
            Choose the perfect plan for your business needs. All plans include 24/7 support, 
            regular updates, and comprehensive training.
          </p>
        </section>

        {/* Tab Navigation */}
        <section className="mb-16">
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <button
              onClick={() => setActiveTab('micro-saas')}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeTab === 'micro-saas'
                  ? 'bg-cyan-400 text-slate-900'
                  : 'bg-slate-800 text-gray-300 hover:bg-slate-700'
              }`}
            >
              Micro SAAS Solutions
            </button>
            <button
              onClick={() => setActiveTab('ai-services')}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeTab === 'ai-services'
                  ? 'bg-purple-400 text-slate-900'
                  : 'bg-slate-800 text-gray-300 hover:bg-slate-700'
              }`}
            >
              AI Services
            </button>
            <button
              onClick={() => setActiveTab('it-services')}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeTab === 'it-services'
                  ? 'bg-green-400 text-slate-900'
                  : 'bg-slate-800 text-gray-300 hover:bg-slate-700'
              }`}
            >
              IT Services
            </button>
          </div>

          {/* Micro SAAS Pricing */}
          {activeTab === 'micro-saas' && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {microSAASPricing.map((plan, index) => {
                const colors = getColorClasses(plan.color);
                return (
                  <div key={index} className={`cyber-card p-8 relative ${plan.popular ? `ring-2 ring-${plan.color}-400` : ''}`}>
                    {plan.popular && (
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                        <div className={`${colors.bg} text-slate-900 px-4 py-2 rounded-full text-sm font-semibold`}>
                          Most Popular
                        </div>
                      </div>
                    )}
                    <div className="text-center mb-6">
                      <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                      <p className="text-gray-300 mb-4">{plan.description}</p>
                      <div className="flex items-baseline justify-center">
                        <span className={`text-4xl font-bold ${colors.text}`}>{plan.price}</span>
                        <span className="text-gray-300 ml-1">{plan.period}</span>
                      </div>
                    </div>
                    <ul className="space-y-3 mb-8">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-300">
                          <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <a
                      href="/contact"
                      className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                        plan.popular
                          ? 'cyber-button'
                          : `${colors.border} border-2 ${colors.text} ${colors.hover}`
                      }`}
                    >
                      Get Started
                    </a>
                  </div>
                );
              })}
            </div>
          )}

          {/* AI Services Pricing */}
          {activeTab === 'ai-services' && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {aiServicesPricing.map((plan, index) => {
                const colors = getColorClasses(plan.color);
                return (
                  <div key={index} className={`cyber-card p-8 relative ${plan.popular ? `ring-2 ring-${plan.color}-400` : ''}`}>
                    {plan.popular && (
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                        <div className={`${colors.bg} text-slate-900 px-4 py-2 rounded-full text-sm font-semibold`}>
                          Most Popular
                        </div>
                      </div>
                    )}
                    <div className="text-center mb-6">
                      <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                      <p className="text-gray-300 mb-4">{plan.description}</p>
                      <div className="flex items-baseline justify-center">
                        <span className={`text-4xl font-bold ${colors.text}`}>{plan.price}</span>
                        <span className="text-gray-300 ml-1">{plan.period}</span>
                      </div>
                    </div>
                    <ul className="space-y-3 mb-8">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-300">
                          <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <a
                      href="/contact"
                      className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                        plan.popular
                          ? 'cyber-button'
                          : `${colors.border} border-2 ${colors.text} ${colors.hover}`
                      }`}
                    >
                      Get Started
                    </a>
                  </div>
                );
              })}
            </div>
          )}

          {/* IT Services Pricing */}
          {activeTab === 'it-services' && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {itServicesPricing.map((plan, index) => {
                const colors = getColorClasses(plan.color);
                return (
                  <div key={index} className={`cyber-card p-8 relative ${plan.popular ? `ring-2 ring-${plan.color}-400` : ''}`}>
                    {plan.popular && (
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                        <div className={`${colors.bg} text-slate-900 px-4 py-2 rounded-full text-sm font-semibold`}>
                          Most Popular
                        </div>
                      </div>
                    )}
                    <div className="text-center mb-6">
                      <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                      <p className="text-gray-300 mb-4">{plan.description}</p>
                      <div className="flex items-baseline justify-center">
                        <span className={`text-4xl font-bold ${colors.text}`}>{plan.price}</span>
                        <span className="text-gray-300 ml-1">{plan.period}</span>
                      </div>
                    </div>
                    <ul className="space-y-3 mb-8">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-300">
                          <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <a
                      href="/contact"
                      className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                        plan.popular
                          ? 'cyber-button'
                          : `${colors.border} border-2 ${colors.text} ${colors.hover}`
                      }`}
                    >
                      Get Started
                    </a>
                  </div>
                );
              })}
            </div>
          )}
        </section>

        {/* Popular Services */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-white mb-12 text-center neon-text">
            Popular Micro SAAS Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {popularServices.map((service, index) => (
              <div key={index} className="cyber-card p-6 hover:scale-105 transition-all duration-300">
                <div className="text-4xl mb-4 text-center">{service.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3 text-center">{service.name}</h3>
                <p className="text-gray-300 mb-4 text-center text-sm">{service.description}</p>
                <div className="text-center">
                  <div className="text-2xl font-bold text-cyan-400 mb-4">{service.price}</div>
                  <a
                    href="/contact"
                    className="cyber-button px-4 py-2 text-sm font-medium transition-all duration-300 hover:scale-105"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <div className="cyber-card p-8 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-4 neon-text">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Contact us today to discuss your specific needs and get a customized quote for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="cyber-button px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300"
              >
                Get Free Consultation
              </a>
              <a
                href="tel:+13024640950"
                className="flex items-center justify-center gap-2 border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                <Phone className="w-5 h-5" />
                Call +1 302 464 0950
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default PricingPage;