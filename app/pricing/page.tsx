'use client';
import React, { useState } from 'react';
import { CheckCircle, Star, Zap, Brain, Settings, Shield, Users, DollarSign, Clock, ArrowRight } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const PricingPage: React.FC = () => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');

  const microSaasPlans = [
    {
      name: 'Starter',
      price: { monthly: 79, yearly: 79 * 12 * 0.8 },
      description: 'Perfect for small businesses getting started with AI',
      features: [
        '1 AI Project Manager',
        'Basic AI Analytics',
        'Email Support',
        '5GB Storage',
        'Standard Templates',
        'Basic Reporting'
      ],
      limitations: [
        'Up to 5 projects',
        '1 user account',
        'Basic integrations'
      ],
      popular: false,
      color: 'text-blue-400',
      bgColor: 'bg-blue-500/20',
      borderColor: 'border-blue-400/30'
    },
    {
      name: 'Professional',
      price: { monthly: 149, yearly: 149 * 12 * 0.8 },
      description: 'Ideal for growing businesses with multiple AI needs',
      features: [
        '5 AI Tools Included',
        'Advanced Analytics',
        'Priority Support',
        '50GB Storage',
        'Custom Templates',
        'Advanced Reporting',
        'API Access',
        'Team Collaboration'
      ],
      limitations: [
        'Up to 25 projects',
        '5 user accounts',
        'Advanced integrations'
      ],
      popular: true,
      color: 'text-cyan-400',
      bgColor: 'bg-cyan-500/20',
      borderColor: 'border-cyan-400/50'
    },
    {
      name: 'Enterprise',
      price: { monthly: 299, yearly: 299 * 12 * 0.8 },
      description: 'Complete AI solution for large organizations',
      features: [
        'Unlimited AI Tools',
        'Custom AI Development',
        '24/7 Dedicated Support',
        'Unlimited Storage',
        'White-label Solutions',
        'Custom Integrations',
        'Advanced Security',
        'Unlimited Users',
        'Custom Training'
      ],
      limitations: [],
      popular: false,
      color: 'text-purple-400',
      bgColor: 'bg-purple-500/20',
      borderColor: 'border-purple-400/30'
    }
  ];

  const aiServicePlans = [
    {
      name: 'AI Development',
      price: { monthly: 1000, yearly: 1000 * 12 * 0.85 },
      description: 'Custom AI model development and deployment',
      features: [
        'Custom ML Models',
        'Data Pipeline Setup',
        'Model Training & Optimization',
        'API Development',
        'Performance Monitoring',
        'Monthly Updates',
        'Technical Support',
        'Documentation'
      ],
      popular: false,
      color: 'text-green-400',
      bgColor: 'bg-green-500/20',
      borderColor: 'border-green-400/30'
    },
    {
      name: 'AI Consulting',
      price: { monthly: 1500, yearly: 1500 * 12 * 0.85 },
      description: 'Strategic AI consulting and implementation',
      features: [
        'AI Strategy Development',
        'Technology Assessment',
        'Implementation Planning',
        'Change Management',
        'Training & Workshops',
        'Ongoing Consultation',
        'ROI Analysis',
        'Best Practices'
      ],
      popular: true,
      color: 'text-orange-400',
      bgColor: 'bg-orange-500/20',
      borderColor: 'border-orange-400/50'
    },
    {
      name: 'AI Infrastructure',
      price: { monthly: 2000, yearly: 2000 * 12 * 0.85 },
      description: 'Complete AI infrastructure setup and management',
      features: [
        'GPU Cluster Setup',
        'Cloud Infrastructure',
        'Data Storage Solutions',
        'Security Implementation',
        'Monitoring & Alerting',
        'Backup & Recovery',
        'Scalability Planning',
        '24/7 Support'
      ],
      popular: false,
      color: 'text-red-400',
      bgColor: 'bg-red-500/20',
      borderColor: 'border-red-400/30'
    }
  ];

  const itServicePlans = [
    {
      name: 'Basic IT Support',
      price: { monthly: 800, yearly: 800 * 12 * 0.9 },
      description: 'Essential IT support and maintenance',
      features: [
        '24/7 Help Desk',
        'Remote Support',
        'Software Updates',
        'Security Monitoring',
        'Backup Management',
        'Performance Optimization',
        'Incident Response',
        'Monthly Reports'
      ],
      popular: false,
      color: 'text-blue-400',
      bgColor: 'bg-blue-500/20',
      borderColor: 'border-blue-400/30'
    },
    {
      name: 'Managed IT Services',
      price: { monthly: 1200, yearly: 1200 * 12 * 0.9 },
      description: 'Comprehensive IT management and support',
      features: [
        'Proactive Monitoring',
        'Infrastructure Management',
        'Security Services',
        'Cloud Management',
        'Disaster Recovery',
        'Compliance Support',
        'Strategic Planning',
        'Dedicated Account Manager'
      ],
      popular: true,
      color: 'text-cyan-400',
      bgColor: 'bg-cyan-500/20',
      borderColor: 'border-cyan-400/50'
    },
    {
      name: 'Enterprise IT',
      price: { monthly: 2000, yearly: 2000 * 12 * 0.9 },
      description: 'Full-scale enterprise IT solutions',
      features: [
        'Complete IT Transformation',
        'Custom Solutions',
        'Advanced Security',
        'Multi-cloud Strategy',
        'Digital Transformation',
        'Executive Consulting',
        'Vendor Management',
        'Custom SLA'
      ],
      popular: false,
      color: 'text-purple-400',
      bgColor: 'bg-purple-500/20',
      borderColor: 'border-purple-400/30'
    }
  ];

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0
    }).format(price);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16 pt-24">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 neon-text">
            Transparent Pricing
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Choose the perfect plan for your business needs. All plans include 24/7 support and regular updates.
          </p>
          
          {/* Billing Toggle */}
          <div className="flex items-center justify-center mb-12">
            <div className="bg-slate-800 rounded-lg p-1 flex">
              <button
                onClick={() => setBillingCycle('monthly')}
                className={`px-6 py-2 rounded-md transition-all duration-300 ${
                  billingCycle === 'monthly'
                    ? 'bg-cyan-400 text-slate-900 font-semibold'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setBillingCycle('yearly')}
                className={`px-6 py-2 rounded-md transition-all duration-300 ${
                  billingCycle === 'yearly'
                    ? 'bg-cyan-400 text-slate-900 font-semibold'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                Yearly
                <span className="ml-2 text-xs bg-green-500 text-white px-2 py-1 rounded-full">
                  Save 20%
                </span>
              </button>
            </div>
          </div>
        </section>

        {/* Micro SAAS Plans */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 neon-text">
              Micro SAAS Solutions
            </h2>
            <p className="text-lg text-gray-300">
              Affordable AI-powered tools for modern businesses
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {microSaasPlans.map((plan, index) => (
              <div
                key={index}
                className={`cyber-card p-8 relative hover:scale-105 transition-all duration-300 ${
                  plan.popular ? 'ring-2 ring-cyan-400' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-cyan-400 text-slate-900 px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </div>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2 neon-text">{plan.name}</h3>
                  <p className="text-gray-300 mb-4">{plan.description}</p>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-white">
                      {formatPrice(plan.price[billingCycle])}
                    </span>
                    <span className="text-gray-400">/{billingCycle === 'monthly' ? 'month' : 'year'}</span>
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
                  className={`w-full py-3 px-6 rounded-lg font-semibold text-center transition-all duration-300 hover:scale-105 ${
                    plan.popular
                      ? 'cyber-button'
                      : 'border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900'
                  }`}
                >
                  Get Started
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* AI Services Plans */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 neon-text">
              AI Services
            </h2>
            <p className="text-lg text-gray-300">
              Advanced AI solutions for enterprise applications
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {aiServicePlans.map((plan, index) => (
              <div
                key={index}
                className={`cyber-card p-8 relative hover:scale-105 transition-all duration-300 ${
                  plan.popular ? 'ring-2 ring-orange-400' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-orange-400 text-slate-900 px-4 py-2 rounded-full text-sm font-semibold">
                      Recommended
                    </div>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2 neon-text">{plan.name}</h3>
                  <p className="text-gray-300 mb-4">{plan.description}</p>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-white">
                      {formatPrice(plan.price[billingCycle])}
                    </span>
                    <span className="text-gray-400">/{billingCycle === 'monthly' ? 'month' : 'year'}</span>
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
                  className={`w-full py-3 px-6 rounded-lg font-semibold text-center transition-all duration-300 hover:scale-105 ${
                    plan.popular
                      ? 'bg-orange-400 text-slate-900 hover:bg-orange-500'
                      : 'border-2 border-orange-400 text-orange-400 hover:bg-orange-400 hover:text-slate-900'
                  }`}
                >
                  Contact Sales
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* IT Services Plans */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 neon-text">
              IT Services
            </h2>
            <p className="text-lg text-gray-300">
              Comprehensive IT solutions for modern infrastructure
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {itServicePlans.map((plan, index) => (
              <div
                key={index}
                className={`cyber-card p-8 relative hover:scale-105 transition-all duration-300 ${
                  plan.popular ? 'ring-2 ring-cyan-400' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-cyan-400 text-slate-900 px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </div>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2 neon-text">{plan.name}</h3>
                  <p className="text-gray-300 mb-4">{plan.description}</p>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-white">
                      {formatPrice(plan.price[billingCycle])}
                    </span>
                    <span className="text-gray-400">/{billingCycle === 'monthly' ? 'month' : 'year'}</span>
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
                  className={`w-full py-3 px-6 rounded-lg font-semibold text-center transition-all duration-300 hover:scale-105 ${
                    plan.popular
                      ? 'cyber-button'
                      : 'border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900'
                  }`}
                >
                  Get Started
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Custom Solutions */}
        <section className="mb-16">
          <div className="cyber-card p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 neon-text">
              Need a Custom Solution?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              We offer custom AI and IT solutions tailored to your specific business requirements. 
              Contact us for a personalized quote.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="cyber-button px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300"
              >
                Request Custom Quote
              </a>
              <a
                href="tel:+13024640950"
                className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                Call +1 302 464 0950
              </a>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center neon-text">
            Frequently Asked Questions
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="cyber-card p-6">
              <h3 className="text-xl font-semibold text-white mb-3">Can I change plans anytime?</h3>
              <p className="text-gray-300">
                Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, 
                and we'll prorate any billing differences.
              </p>
            </div>
            
            <div className="cyber-card p-6">
              <h3 className="text-xl font-semibold text-white mb-3">Do you offer refunds?</h3>
              <p className="text-gray-300">
                We offer a 30-day money-back guarantee for all our services. If you're not satisfied, 
                we'll provide a full refund.
              </p>
            </div>
            
            <div className="cyber-card p-6">
              <h3 className="text-xl font-semibold text-white mb-3">What support do you provide?</h3>
              <p className="text-gray-300">
                All plans include email support. Professional and Enterprise plans include priority support, 
                and Enterprise includes 24/7 dedicated support.
              </p>
            </div>
            
            <div className="cyber-card p-6">
              <h3 className="text-xl font-semibold text-white mb-3">Can I get a custom quote?</h3>
              <p className="text-gray-300">
                Absolutely! Contact our sales team for a personalized quote based on your specific 
                requirements and business needs.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default PricingPage;