'use client';
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';
import { CheckCircle, Star, Zap, Phone, Mail, ArrowRight, Users, Clock, Shield, Award } from 'lucide-react';

const PricingPage: React.FC = () => {
  const aiServices = [
    {
      name: 'AI Starter',
      price: '$1,500',
      period: '/month',
      description: 'Perfect for small businesses getting started with AI',
      features: [
        'Basic AI consultation',
        'Simple automation setup',
        'Email support',
        'Monthly reporting',
        'Up to 5 users'
      ],
      popular: false,
      color: 'text-blue-400'
    },
    {
      name: 'AI Professional',
      price: '$3,500',
      period: '/month',
      description: 'Ideal for growing businesses with complex AI needs',
      features: [
        'Advanced AI solutions',
        'Custom model development',
        'Priority support',
        'Real-time monitoring',
        'Up to 25 users',
        'API access',
        'Training included'
      ],
      popular: true,
      color: 'text-cyan-400'
    },
    {
      name: 'AI Enterprise',
      price: 'Custom',
      period: '',
      description: 'Comprehensive AI solutions for large organizations',
      features: [
        'Full AI transformation',
        'Dedicated AI team',
        '24/7 support',
        'Custom integrations',
        'Unlimited users',
        'White-label options',
        'SLA guarantees',
        'On-site support'
      ],
      popular: false,
      color: 'text-purple-400'
    }
  ];

  const itServices = [
    {
      name: 'IT Basic',
      price: '$999',
      period: '/month',
      description: 'Essential IT support for small businesses',
      features: [
        '24/7 monitoring',
        'Basic security',
        'Email support',
        'Monthly maintenance',
        'Up to 10 devices'
      ],
      popular: false,
      color: 'text-green-400'
    },
    {
      name: 'IT Professional',
      price: '$2,499',
      period: '/month',
      description: 'Comprehensive IT solutions for growing companies',
      features: [
        'Advanced security suite',
        'Cloud migration',
        'Priority support',
        'Proactive monitoring',
        'Up to 50 devices',
        'Backup & recovery',
        'Training included'
      ],
      popular: true,
      color: 'text-cyan-400'
    },
    {
      name: 'IT Enterprise',
      price: 'Custom',
      period: '',
      description: 'Full IT transformation for large enterprises',
      features: [
        'Complete IT infrastructure',
        'Dedicated team',
        '24/7 on-site support',
        'Custom solutions',
        'Unlimited devices',
        'Compliance management',
        'SLA guarantees',
        'Strategic consulting'
      ],
      popular: false,
      color: 'text-purple-400'
    }
  ];

  const microSaas = [
    {
      name: 'AI CRM',
      price: '$49',
      period: '/user/month',
      description: 'Intelligent customer relationship management',
      features: [
        'AI-powered lead scoring',
        'Automated follow-ups',
        'Predictive analytics',
        'Mobile app access',
        'Basic integrations'
      ],
      popular: true,
      color: 'text-blue-400'
    },
    {
      name: 'AI Analytics',
      price: '$79',
      period: '/month',
      description: 'Real-time business intelligence dashboard',
      features: [
        'Real-time dashboards',
        'AI insights',
        'Custom reports',
        'Data visualization',
        'API access'
      ],
      popular: false,
      color: 'text-green-400'
    },
    {
      name: 'AI Marketing',
      price: '$99',
      period: '/month',
      description: 'AI-powered marketing automation',
      features: [
        'Content generation',
        'Campaign optimization',
        'A/B testing',
        'Social media management',
        'Email automation'
      ],
      popular: false,
      color: 'text-pink-400'
    }
  ];

  return (
    <>
      <SEOOptimizer
        title="Pricing - Zion Tech Group"
        description="Transparent pricing for AI and IT solutions. Choose from our flexible plans designed for businesses of all sizes. Get started with a free consultation."
        keywords={['pricing', 'AI pricing', 'IT services pricing', 'enterprise solutions', 'subscription plans', 'cost']}
        canonicalUrl="https://ziontechgroup.com/pricing"
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        <main className="pt-16">
          {/* Hero Section */}
          <section className="container mx-auto px-4 py-16 text-center">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text">
                Transparent Pricing
              </h1>
              <p className="text-xl md:text-2xl text-cyan-400 mb-8">
                Choose the Perfect Plan for Your Business
              </p>
              <p className="text-lg text-gray-300 mb-12 max-w-3xl mx-auto">
                Flexible pricing options designed to scale with your business. 
                All plans include our commitment to your success and ongoing support.
              </p>
            </div>
          </section>

          {/* AI Services Pricing */}
          <section className="container mx-auto px-4 py-16">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
                AI Services
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {aiServices.map((service, index) => (
                  <div key={index} className={`cyber-card p-8 relative hover:scale-105 transition-all duration-300 ${
                    service.popular ? 'ring-2 ring-cyan-500' : ''
                  }`}>
                    {service.popular && (
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                        <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                          Most Popular
                        </span>
                      </div>
                    )}
                    <div className="text-center mb-6">
                      <h3 className="text-2xl font-bold text-white mb-2">{service.name}</h3>
                      <div className="text-4xl font-bold text-cyan-400 mb-2">
                        {service.price}
                        <span className="text-lg text-gray-400">{service.period}</span>
                      </div>
                      <p className="text-gray-300">{service.description}</p>
                    </div>
                    <ul className="space-y-3 mb-8">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-300">
                          <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all ${
                      service.popular 
                        ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700' 
                        : 'bg-slate-700 text-white hover:bg-slate-600'
                    }`}>
                      Get Started
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* IT Services Pricing */}
          <section className="container mx-auto px-4 py-16">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
                IT Services
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {itServices.map((service, index) => (
                  <div key={index} className={`cyber-card p-8 relative hover:scale-105 transition-all duration-300 ${
                    service.popular ? 'ring-2 ring-cyan-500' : ''
                  }`}>
                    {service.popular && (
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                        <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                          Most Popular
                        </span>
                      </div>
                    )}
                    <div className="text-center mb-6">
                      <h3 className="text-2xl font-bold text-white mb-2">{service.name}</h3>
                      <div className="text-4xl font-bold text-cyan-400 mb-2">
                        {service.price}
                        <span className="text-lg text-gray-400">{service.period}</span>
                      </div>
                      <p className="text-gray-300">{service.description}</p>
                    </div>
                    <ul className="space-y-3 mb-8">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-300">
                          <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all ${
                      service.popular 
                        ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700' 
                        : 'bg-slate-700 text-white hover:bg-slate-600'
                    }`}>
                      Get Started
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Micro SAAS Pricing */}
          <section className="container mx-auto px-4 py-16">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
                Micro SAAS Solutions
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {microSaas.map((service, index) => (
                  <div key={index} className={`cyber-card p-8 relative hover:scale-105 transition-all duration-300 ${
                    service.popular ? 'ring-2 ring-cyan-500' : ''
                  }`}>
                    {service.popular && (
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                        <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                          Most Popular
                        </span>
                      </div>
                    )}
                    <div className="text-center mb-6">
                      <h3 className="text-2xl font-bold text-white mb-2">{service.name}</h3>
                      <div className="text-4xl font-bold text-cyan-400 mb-2">
                        {service.price}
                        <span className="text-lg text-gray-400">{service.period}</span>
                      </div>
                      <p className="text-gray-300">{service.description}</p>
                    </div>
                    <ul className="space-y-3 mb-8">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-300">
                          <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all ${
                      service.popular 
                        ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700' 
                        : 'bg-slate-700 text-white hover:bg-slate-600'
                    }`}>
                      Get Started
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="container mx-auto px-4 py-16">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
                Frequently Asked Questions
              </h2>
              <div className="space-y-6">
                <div className="cyber-card p-6">
                  <h3 className="text-xl font-bold text-white mb-3">Can I change my plan anytime?</h3>
                  <p className="text-gray-300">Yes, you can upgrade or downgrade your plan at any time. Changes take effect at the next billing cycle.</p>
                </div>
                <div className="cyber-card p-6">
                  <h3 className="text-xl font-bold text-white mb-3">Do you offer custom solutions?</h3>
                  <p className="text-gray-300">Absolutely! We provide custom AI and IT solutions tailored to your specific business needs. Contact us for a consultation.</p>
                </div>
                <div className="cyber-card p-6">
                  <h3 className="text-xl font-bold text-white mb-3">What support is included?</h3>
                  <p className="text-gray-300">All plans include email support. Professional and Enterprise plans include priority support and dedicated account managers.</p>
                </div>
                <div className="cyber-card p-6">
                  <h3 className="text-xl font-bold text-white mb-3">Is there a free trial?</h3>
                  <p className="text-gray-300">Yes, we offer a 30-day free trial for all our services. No credit card required to get started.</p>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="container mx-auto px-4 py-16">
            <div className="max-w-4xl mx-auto text-center">
              <div className="cyber-card p-8">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 neon-text">
                  Ready to Get Started?
                </h2>
                <p className="text-lg text-gray-300 mb-8">
                  Not sure which plan is right for you? Let's discuss your needs and find the perfect solution.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="/contact"
                    className="cyber-button flex items-center justify-center space-x-2"
                  >
                    <Phone className="w-5 h-5" />
                    <span>Get Free Consultation</span>
                  </a>
                  <a
                    href="/demo"
                    className="border-2 border-cyan-400 text-cyan-400 px-6 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
                  >
                    Schedule Demo
                  </a>
                </div>
              </div>
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default PricingPage;
