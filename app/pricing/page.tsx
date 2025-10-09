import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, Star, Phone, ArrowRight, Mail, Brain, Zap, Cloud, Shield } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const PricingPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [billingPeriod, setBillingPeriod] = useState<'month' | 'year'>('month');

  const pricingPlans = [
    {
      id: 'starter',
      name: 'Starter',
      description: 'Perfect for small businesses getting started with AI',
      price: { month: 299, year: 2990 },
      features: [
        'Basic AI consultation',
        'Email support',
        'Standard implementation',
        'Monthly reporting',
        'Basic analytics'
      ],
      popular: false,
      category: 'ai'
    },
    {
      id: 'professional',
      name: 'Professional',
      description: 'Ideal for growing businesses with advanced needs',
      price: { month: 799, year: 7990 },
      features: [
        'Advanced AI solutions',
        'Priority support',
        'Custom implementation',
        'Weekly reporting',
        'Advanced analytics',
        'API access',
        'Training sessions'
      ],
      popular: true,
      category: 'ai'
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      description: 'Comprehensive solutions for large organizations',
      price: { month: 1999, year: 19990 },
      features: [
        'Full AI suite',
        '24/7 dedicated support',
        'Custom development',
        'Real-time reporting',
        'Enterprise analytics',
        'Full API access',
        'Unlimited training',
        'SLA guarantee'
      ],
      popular: false,
      category: 'ai'
    },
    {
      id: 'it-starter',
      name: 'IT Starter',
      description: 'Basic IT services for small businesses',
      price: { month: 199, year: 1990 },
      features: [
        'Basic IT support',
        'Email support',
        'Standard maintenance',
        'Monthly health checks',
        'Basic security'
      ],
      popular: false,
      category: 'it'
    },
    {
      id: 'it-professional',
      name: 'IT Professional',
      description: 'Comprehensive IT services for growing businesses',
      price: { month: 599, year: 5990 },
      features: [
        'Advanced IT support',
        'Priority support',
        'Proactive maintenance',
        'Weekly health checks',
        'Advanced security',
        'Cloud management',
        'Backup solutions'
      ],
      popular: true,
      category: 'it'
    },
    {
      id: 'it-enterprise',
      name: 'IT Enterprise',
      description: 'Full IT infrastructure management',
      price: { month: 1499, year: 14990 },
      features: [
        'Complete IT management',
        '24/7 dedicated support',
        'Continuous monitoring',
        'Real-time reporting',
        'Enterprise security',
        'Full cloud services',
        'Disaster recovery',
        'SLA guarantee'
      ],
      popular: false,
      category: 'it'
    }
  ];

  const filteredPlans = selectedCategory === 'all' 
    ? pricingPlans 
    : pricingPlans.filter(plan => plan.category === selectedCategory);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0
    }).format(price);
  };

  return (
    <>
      <Helmet>
        <title>Pricing - Zion Tech Group</title>
        <meta name="description" content="Transparent pricing for AI and IT solutions. Choose the plan that fits your business needs." />
        <meta name="keywords" content="pricing, AI solutions, IT services, enterprise, small business" />
      </Helmet>
      
      <Navigation />
      
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-24 pb-16 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Simple, Transparent
              <span className="block bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Pricing
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Choose the perfect plan for your business. All plans include our core features with no hidden fees.
            </p>
            
            {/* Billing Toggle */}
            <div className="flex items-center justify-center mb-12">
              <span className={`text-lg ${billingPeriod === 'month' ? 'text-white' : 'text-gray-400'}`}>
                Monthly
              </span>
              <button
                onClick={() => setBillingPeriod(billingPeriod === 'month' ? 'year' : 'month')}
                className="mx-4 relative inline-flex h-6 w-11 items-center rounded-full bg-gray-600 transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2"
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    billingPeriod === 'year' ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
              <span className={`text-lg ${billingPeriod === 'year' ? 'text-white' : 'text-gray-400'}`}>
                Yearly
              </span>
              {billingPeriod === 'year' && (
                <span className="ml-2 px-3 py-1 bg-green-500 text-white text-sm rounded-full">
                  Save 20%
                </span>
              )}
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="pb-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <button
                onClick={() => setSelectedCategory('all')}
                className={`px-6 py-3 rounded-full font-semibold transition-all ${
                  selectedCategory === 'all'
                    ? 'bg-cyan-500 text-white'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                All Services
              </button>
              <button
                onClick={() => setSelectedCategory('ai')}
                className={`px-6 py-3 rounded-full font-semibold transition-all ${
                  selectedCategory === 'ai'
                    ? 'bg-cyan-500 text-white'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                AI Solutions
              </button>
              <button
                onClick={() => setSelectedCategory('it')}
                className={`px-6 py-3 rounded-full font-semibold transition-all ${
                  selectedCategory === 'it'
                    ? 'bg-cyan-500 text-white'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                IT Services
              </button>
            </div>

            {/* Pricing Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPlans.map((plan) => (
                <div
                  key={plan.id}
                  className={`relative bg-white/10 backdrop-blur-lg rounded-2xl p-8 border transition-all duration-300 hover:scale-105 ${
                    plan.popular
                      ? 'border-cyan-400 ring-2 ring-cyan-400/50'
                      : 'border-white/20 hover:border-cyan-400/50'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gradient-to-r from-cyan-400 to-purple-400 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center">
                        <Star className="w-4 h-4 mr-1" />
                        Most Popular
                      </div>
                    </div>
                  )}

                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 mb-4">{plan.description}</p>
                    <div className="mb-4">
                      <span className="text-4xl font-bold text-white">
                        {formatPrice(plan.price[billingPeriod])}
                      </span>
                      <span className="text-gray-400">/{billingPeriod}</span>
                    </div>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <button className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 text-white py-3 px-6 rounded-xl font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center">
                    Get Started
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Need a Custom Solution?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              We can create a tailored plan that perfectly fits your business requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                className="bg-cyan-500 text-white px-8 py-4 rounded-xl font-semibold hover:bg-cyan-600 transition-colors flex items-center justify-center"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call (302) 464-0950
              </a>
              <a
                href="mailto:info@ziontechgroup.com"
                className="bg-white/10 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/20 transition-colors flex items-center justify-center"
              >
                <Mail className="w-5 h-5 mr-2" />
                Email Us
              </a>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default PricingPage;