import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, Star, Phone, ArrowRight, Mail, ExternalLink, Brain, Zap, Cloud, Rocket } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const PricingPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [billingPeriod, setBillingPeriod] = useState<'month' | 'year'>('month');

  const contactInfo = {
    phone: '(302) 464-0950',
    email: 'info@ziontechgroup.com',
    website: 'ziontechgroup.com'
  };

  const plans = [
    {
      name: 'Starter',
      price: { month: 999, year: 9999 },
      period: 'month',
      popular: false,
      features: [
        'Basic AI Integration',
        'Cloud Infrastructure Setup',
        'Email Support',
        'Monthly Reports',
        'Basic Analytics'
      ]
    },
    {
      name: 'Professional',
      price: { month: 2499, year: 24999 },
      period: 'month',
      popular: true,
      features: [
        'Advanced AI Solutions',
        'Full Cloud Migration',
        'Priority Support',
        'Weekly Reports',
        'Advanced Analytics',
        'Custom Integrations',
        '24/7 Monitoring'
      ]
    },
    {
      name: 'Enterprise',
      price: { month: 4999, year: 49999 },
      period: 'month',
      popular: false,
      features: [
        'Custom AI Development',
        'Dedicated Infrastructure',
        'Dedicated Support Team',
        'Real-time Reports',
        'Enterprise Analytics',
        'Custom Solutions',
        'SLA Guarantee',
        'Training & Onboarding'
      ]
    }
  ];

  const services = [
    {
      title: 'AI Marketing Automation',
      category: 'ai',
      pricing: { starting: 2999, period: 'month', custom: false },
      description: 'Revolutionize your marketing with AI-powered automation',
      features: ['Campaign Management', 'Predictive Analytics', 'Personalization'],
      useCases: ['E-commerce', 'SaaS', 'Enterprise']
    },
    {
      title: 'Cloud Infrastructure',
      category: 'it',
      pricing: { starting: 1999, period: 'month', custom: false },
      description: 'Scalable and secure cloud solutions',
      features: ['AWS/Azure/GCP', 'DevOps', 'Monitoring'],
      useCases: ['Startups', 'SMEs', 'Enterprise']
    },
    {
      title: 'Custom AI Development',
      category: 'ai',
      pricing: { starting: 0, period: 'project', custom: true },
      description: 'Bespoke AI solutions for your business',
      features: ['Custom Models', 'API Development', 'Integration'],
      useCases: ['All Industries', 'Complex Requirements']
    }
  ];

  const filteredServices = selectedCategory === 'all' 
    ? services 
    : services.filter(service => service.category === selectedCategory);

  const formatPrice = (pricing: typeof services[0]['pricing']) => {
    if (pricing.custom) {
      return 'Custom Pricing';
    }
    
    let price = pricing.starting;
    if (billingPeriod === 'year' && pricing.period === 'month') {
      price = price * 12 * 0.8; // 20% discount for annual billing
    }
    
    const period = billingPeriod === 'year' && pricing.period === 'month' ? 'year' : pricing.period;
    return `$${Math.round(price).toLocaleString()}/${period === 'month' ? 'mo' : period === 'year' ? 'yr' : 'one-time'}`;
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'ai': return Brain;
      case 'micro-saas': return Zap;
      case 'it': return Cloud;
      case 'emerging-tech': return Rocket;
      default: return Star;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Header />
      
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 pt-24">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
              Pricing
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Transparent, competitive pricing for all our AI, IT, and Micro SAAS solutions. 
            Choose the perfect plan for your business needs.
          </p>
          
          {/* Contact Info Banner */}
          <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-lg p-6 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
              <div className="flex items-center justify-center space-x-2">
                <Phone className="w-5 h-5 text-cyan-400" />
                <div>
                  <div className="text-white font-medium">{contactInfo.phone}</div>
                  <div className="text-gray-400 text-sm">Call for custom pricing</div>
                </div>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <Mail className="w-5 h-5 text-cyan-400" />
                <div>
                  <div className="text-white font-medium">{contactInfo.email}</div>
                  <div className="text-gray-400 text-sm">Email for quotes</div>
                </div>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <ExternalLink className="w-5 h-5 text-cyan-400" />
                <div>
                  <div className="text-white font-medium">{contactInfo.website}</div>
                  <div className="text-gray-400 text-sm">Visit our site</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Pricing Plans */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20 relative hover:border-cyan-400/50 transition-all duration-300 ${
                plan.popular ? 'ring-2 ring-cyan-400 scale-105' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-cyan-400 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center">
                    <Star className="w-4 h-4 mr-1" />
                    Most Popular
                  </div>
                </div>
              )}
              
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <div className="text-4xl font-bold text-cyan-400 mb-2">
                  ${billingPeriod === 'year' ? Math.round(plan.price.year / 12) : plan.price.month}
                  <span className="text-lg text-gray-400">/{billingPeriod === 'year' ? 'mo' : 'mo'}</span>
                </div>
                {billingPeriod === 'year' && (
                  <div className="text-sm text-green-400">Save 20% with annual billing</div>
                )}
              </div>
              
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
              
              <button className="w-full bg-gradient-to-r from-cyan-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-cyan-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center">
                Get Started
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
            </div>
          ))}
        </div>

        {/* Billing Toggle */}
        <div className="text-center mt-12">
          <div className="inline-flex bg-white/10 rounded-lg p-1">
            <button
              onClick={() => setBillingPeriod('month')}
              className={`px-6 py-2 rounded-md transition-all duration-300 ${
                billingPeriod === 'month' 
                  ? 'bg-cyan-600 text-white' 
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingPeriod('year')}
              className={`px-6 py-2 rounded-md transition-all duration-300 ${
                billingPeriod === 'year' 
                  ? 'bg-cyan-600 text-white' 
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              Annual (20% off)
            </button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Services</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Detailed pricing for our comprehensive range of AI and IT services.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {['all', 'ai', 'it', 'micro-saas', 'emerging-tech'].map((category) => {
              const Icon = getCategoryIcon(category);
              return (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-lg transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-cyan-600 text-white'
                      : 'bg-white/10 text-gray-300 hover:bg-white/20'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span className="capitalize">{category.replace('-', ' ')}</span>
                </button>
              );
            })}
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service, index) => {
              const Icon = getCategoryIcon(service.category);
              return (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-cyan-400/50 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <Icon className="w-8 h-8 text-cyan-400 mr-3" />
                    <h3 className="text-xl font-bold text-white">{service.title}</h3>
                  </div>
                  
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  
                  <div className="text-2xl font-bold text-cyan-400 mb-4">
                    {formatPrice(service.pricing)}
                  </div>
                  
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-cyan-400 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {service.useCases.slice(0, 2).map((useCase, idx) => (
                      <span key={idx} className="text-xs bg-slate-700/50 text-gray-300 px-2 py-1 rounded">
                        {useCase}
                      </span>
                    ))}
                  </div>
                  
                  <button className="w-full bg-gradient-to-r from-cyan-600 to-purple-600 text-white py-2 rounded-lg font-semibold hover:from-cyan-700 hover:to-purple-700 transition-all duration-300">
                    Get Quote
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Enterprise CTA */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-lg p-8">
            <h3 className="text-3xl font-bold text-white mb-4">
              Need Custom Solutions?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              We offer custom enterprise solutions tailored to your specific needs. 
              Contact us for a personalized quote and consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                className="bg-gradient-to-r from-cyan-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5" />
                Call (302) 464-0950
              </a>
              <a
                href="mailto:info@ziontechgroup.com"
                className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Mail className="w-5 h-5" />
                Get Quote
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PricingPage;