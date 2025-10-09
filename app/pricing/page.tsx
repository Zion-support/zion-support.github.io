import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, Star, Phone, ArrowRight, Mail, ExternalLink, Brain, Zap, Cloud, Rocket, Award } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const PricingPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [billingPeriod, setBillingPeriod] = useState<'month' | 'year'>('month');

  const contactInfo = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008, Middletown DE 19709'
  };

  const pricingPlans = [
    {
      id: 'starter',
      name: 'Starter',
      description: 'Perfect for small businesses getting started',
      price: { month: 99, year: 999 },
      features: [
        'Basic AI content generation',
        'Email support',
        'Standard integrations',
        'Up to 5 users',
        'Basic analytics'
      ],
      popular: false,
      category: 'micro-saas'
    },
    {
      id: 'professional',
      name: 'Professional',
      description: 'Ideal for growing businesses',
      price: { month: 299, year: 2999 },
      features: [
        'Advanced AI features',
        'Priority support',
        'Advanced integrations',
        'Up to 25 users',
        'Advanced analytics',
        'Custom workflows',
        'API access'
      ],
      popular: true,
      category: 'micro-saas'
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      description: 'For large organizations',
      price: { month: 999, year: 9999 },
      features: [
        'Custom AI models',
        'Dedicated support',
        'White-label solution',
        'Unlimited users',
        'Custom analytics',
        'SLA guarantee',
        'Training and onboarding'
      ],
      popular: false,
      category: 'micro-saas'
    },
    {
      id: 'ai-services',
      name: 'AI Services',
      description: 'Comprehensive AI solutions',
      price: { month: 1999, year: 19999 },
      features: [
        'Custom AI development',
        'Machine learning models',
        'Data analytics platform',
        '24/7 support',
        'Dedicated team',
        'Custom integrations',
        'Performance monitoring'
      ],
      popular: false,
      category: 'ai'
    },
    {
      id: 'it-services',
      name: 'IT Services',
      description: 'Complete IT infrastructure management',
      price: { month: 2999, year: 29999 },
      features: [
        'Cloud migration',
        'Cybersecurity audit',
        'Infrastructure management',
        '24/7 monitoring',
        'Dedicated support',
        'Compliance management',
        'Disaster recovery'
      ],
      popular: false,
      category: 'it'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Plans', icon: Star },
    { id: 'micro-saas', name: 'Micro SAAS', icon: Zap },
    { id: 'ai', name: 'AI Services', icon: Brain },
    { id: 'it', name: 'IT Services', icon: Cloud }
  ];

  const filteredPlans = pricingPlans.filter(plan => 
    selectedCategory === 'all' || plan.category === selectedCategory
  );

  const formatPrice = (price: number) => {
    return billingPeriod === 'year' ? price : Math.round(price / 12);
  };

  const getSavings = (monthlyPrice: number, yearlyPrice: number) => {
    const monthlyTotal = monthlyPrice * 12;
    const savings = monthlyTotal - yearlyPrice;
    return Math.round((savings / monthlyTotal) * 100);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Pricing - Zion Tech Group | Transparent Pricing for AI & IT Solutions</title>
        <meta name="description" content="Transparent pricing for our AI services, IT solutions, and micro SAAS applications. Choose the plan that fits your business needs." />
        <meta name="keywords" content="pricing, AI services pricing, IT consulting pricing, micro SAAS pricing, business solutions" />
      </Helmet>
      
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Simple <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Pricing</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Choose the plan that fits your business needs. All plans include our core features with no hidden fees.
          </p>
          
          {/* Billing Toggle */}
          <div className="flex items-center justify-center space-x-4 mb-12">
            <span className={`text-lg ${billingPeriod === 'month' ? 'text-white' : 'text-gray-400'}`}>
              Monthly
            </span>
            <button
              onClick={() => setBillingPeriod(billingPeriod === 'month' ? 'year' : 'month')}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                billingPeriod === 'year' ? 'bg-cyan-600' : 'bg-gray-600'
              }`}
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
              <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                Save up to 20%
              </span>
            )}
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => {
              const IconComponent = category.icon;
              return (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 flex items-center space-x-2 ${
                    selectedCategory === category.id
                      ? 'bg-gradient-to-r from-cyan-600 to-purple-600 text-white'
                      : 'bg-slate-800 text-gray-300 hover:bg-slate-700'
                  }`}
                >
                  <IconComponent className="w-4 h-4" />
                  <span>{category.name}</span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPlans.map((plan) => (
              <div
                key={plan.id}
                className={`bg-white/10 backdrop-blur-lg rounded-xl p-8 border relative ${
                  plan.popular
                    ? 'border-cyan-400 ring-2 ring-cyan-400'
                    : 'border-white/20'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-400 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-4">{plan.description}</p>
                  <div className="text-4xl font-bold text-cyan-400 mb-2">
                    ${formatPrice(plan.price[billingPeriod]).toLocaleString()}
                    <span className="text-lg text-gray-400">/{billingPeriod}</span>
                  </div>
                  {billingPeriod === 'year' && (
                    <p className="text-sm text-green-400">
                      Save {getSavings(plan.price.month, plan.price.year)}% vs monthly
                    </p>
                  )}
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <a
                  href={`/contact?plan=${plan.id}`}
                  className={`w-full py-3 px-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center ${
                    plan.popular
                      ? 'bg-gradient-to-r from-cyan-600 to-purple-600 text-white hover:from-cyan-700 hover:to-purple-700'
                      : 'bg-slate-800 text-white hover:bg-slate-700'
                  }`}
                >
                  Get Started
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Solutions */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Need a <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Custom Solution</span>?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            We offer tailored solutions for enterprise clients with specific requirements. Let's discuss your needs and create a custom plan.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <Award className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Custom Development</h3>
              <p className="text-gray-300">Bespoke solutions tailored to your specific business requirements</p>
            </div>
            <div className="text-center">
              <Rocket className="w-12 h-12 text-purple-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Rapid Deployment</h3>
              <p className="text-gray-300">Fast implementation with dedicated project management</p>
            </div>
            <div className="text-center">
              <Star className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Premium Support</h3>
              <p className="text-gray-300">24/7 dedicated support with SLA guarantees</p>
            </div>
          </div>
          <a
            href="tel:+13024640950"
            className="bg-gradient-to-r from-cyan-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2"
          >
            <Phone className="w-5 h-5" />
            Call (302) 464-0950
          </a>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-12">
            Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Questions</span>
          </h2>
          <div className="space-y-6">
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
              <h3 className="text-xl font-bold text-white mb-3">Can I change my plan anytime?</h3>
              <p className="text-gray-300">Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate any billing differences.</p>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
              <h3 className="text-xl font-bold text-white mb-3">Do you offer refunds?</h3>
              <p className="text-gray-300">We offer a 30-day money-back guarantee for all our plans. If you're not satisfied, we'll provide a full refund.</p>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
              <h3 className="text-xl font-bold text-white mb-3">What payment methods do you accept?</h3>
              <p className="text-gray-300">We accept all major credit cards, PayPal, and bank transfers for enterprise clients. All payments are processed securely.</p>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
              <h3 className="text-xl font-bold text-white mb-3">Is there a setup fee?</h3>
              <p className="text-gray-300">No setup fees for any of our standard plans. Custom enterprise solutions may include implementation costs, which we'll discuss upfront.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-cyan-600/20 to-purple-600/20 rounded-2xl p-12 text-center border border-white/20">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Have questions about our pricing or need help choosing the right plan? Our team is here to help you find the perfect solution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`tel:${contactInfo.phone}`}
                className="bg-gradient-to-r from-cyan-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5" />
                Call {contactInfo.phone}
              </a>
              <a
                href={`mailto:${contactInfo.email}`}
                className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Mail className="w-5 h-5" />
                Email Us
              </a>
            </div>
            <div className="mt-6 text-sm text-gray-400">
              <p>📍 {contactInfo.address}</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PricingPage;