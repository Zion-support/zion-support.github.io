import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { CheckCircle, Star, Phone, ArrowRight, Award, Mail, MapPin } from 'lucide-react';

const PricingPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [billingPeriod, setBillingPeriod] = useState<'month' | 'year'>('month');

  const plans = [
    {
      name: 'Starter',
      price: '$2,999',
      period: '/month',
      description: 'Perfect for small businesses getting started with AI',
      features: [
        'Basic AI Automation',
        'Email Support',
        'Monthly Reports',
        'Up to 5 Users',
        'Standard Security',
        'Basic Analytics'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$7,999',
      period: '/month',
      description: 'Ideal for growing businesses with advanced needs',
      features: [
        'Advanced AI Solutions',
        'Priority Support',
        'Weekly Reports',
        'Up to 25 Users',
        'Enhanced Security',
        'Advanced Analytics',
        'Custom Integrations',
        'Training Sessions'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$19,999',
      period: '/month',
      description: 'Complete AI transformation for large organizations',
      features: [
        'Full AI Suite',
        '24/7 Dedicated Support',
        'Real-time Reports',
        'Unlimited Users',
        'Enterprise Security',
        'Custom Analytics',
        'White-label Solutions',
        'Dedicated Account Manager',
        'Custom Development',
        'SLA Guarantee'
      ],
      popular: false
    }
  ];

  const services = [
    {
      id: 'ai-marketing',
      name: 'AI Marketing Suite',
      category: 'ai',
      description: 'Comprehensive AI-powered marketing automation and analytics',
      features: ['Campaign Automation', 'Predictive Analytics', 'Personalization', 'ROI Optimization'],
      benefits: ['300% ROI Increase', '50% Time Savings', '90% Better Targeting'],
      pricing: { starting: 2999, period: 'month', custom: false }
    },
    {
      id: 'ai-automation',
      name: 'AI Process Automation',
      category: 'ai',
      description: 'Intelligent automation for business processes and workflows',
      features: ['Workflow Automation', 'Document Processing', 'Data Extraction', 'Smart Routing'],
      benefits: ['80% Process Efficiency', '60% Cost Reduction', '99% Accuracy'],
      pricing: { starting: 4999, period: 'month', custom: false }
    },
    {
      id: 'ai-analytics',
      name: 'AI Business Intelligence',
      category: 'ai',
      description: 'Advanced analytics and insights powered by artificial intelligence',
      features: ['Predictive Analytics', 'Real-time Dashboards', 'Custom Reports', 'Trend Analysis'],
      benefits: ['500% Faster Insights', '90% Better Decisions', 'Real-time Monitoring'],
      pricing: { starting: 3999, period: 'month', custom: false }
    },
    {
      id: 'cloud-infrastructure',
      name: 'Cloud Infrastructure',
      category: 'it',
      description: 'Scalable and secure cloud solutions for modern businesses',
      features: ['AWS/Azure/GCP', 'Auto-scaling', 'Disaster Recovery', 'Security Hardening'],
      benefits: ['99.9% Uptime', '50% Cost Savings', 'Unlimited Scalability'],
      pricing: { starting: 5999, period: 'month', custom: false }
    },
    {
      id: 'cybersecurity',
      name: 'Cybersecurity Suite',
      category: 'it',
      description: 'Comprehensive security solutions to protect your digital assets',
      features: ['Threat Detection', 'Vulnerability Assessment', 'Compliance Management', 'Incident Response'],
      benefits: ['99.5% Threat Detection', 'Zero Breaches', '24/7 Monitoring'],
      pricing: { starting: 7999, period: 'month', custom: false }
    },
    {
      id: 'custom-solution',
      name: 'Custom AI Solution',
      category: 'custom',
      description: 'Tailored AI solutions designed specifically for your business needs',
      features: ['Custom Development', 'Dedicated Team', 'Unlimited Support', 'White-label Options'],
      benefits: ['100% Customized', 'Dedicated Support', 'Unlimited Scalability'],
      pricing: { starting: 0, period: 'project', custom: true }
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
    
    return `$${price.toLocaleString()}/${billingPeriod === 'year' ? 'year' : pricing.period}`;
  };

  const contactInfo = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008, Middletown DE 19709'
  };

  return (
    <>
      <Helmet>
        <title>Pricing - Zion Tech Group</title>
        <meta name="description" content="Transparent pricing for AI and IT services. Choose the perfect plan for your business needs." />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        <main className="pt-24">
          {/* Hero Section */}
          <section className="container mx-auto px-4 py-16">
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Transparent <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Pricing</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Choose the perfect plan for your business needs. All plans include our core AI and IT services with transparent pricing.
              </p>
              
              {/* Billing Toggle */}
              <div className="flex items-center justify-center mb-8">
                <span className={`mr-3 ${billingPeriod === 'month' ? 'text-white' : 'text-gray-400'}`}>Monthly</span>
                <button
                  onClick={() => setBillingPeriod(billingPeriod === 'month' ? 'year' : 'month')}
                  className="relative inline-flex h-6 w-11 items-center rounded-full bg-gray-600 transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2"
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      billingPeriod === 'year' ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
                <span className={`ml-3 ${billingPeriod === 'year' ? 'text-white' : 'text-gray-400'}`}>
                  Yearly <span className="text-green-400">(20% off)</span>
                </span>
              </div>
            </div>

            {/* Pricing Plans */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {plans.map((plan, index) => (
                <div
                  key={index}
                  className={`relative bg-white/10 backdrop-blur-lg rounded-xl p-8 border ${
                    plan.popular 
                      ? 'border-cyan-400/50 ring-2 ring-cyan-400/20' 
                      : 'border-white/20'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-cyan-400 to-purple-400 text-slate-900 px-4 py-2 rounded-full text-sm font-bold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <div className="flex items-baseline justify-center mb-2">
                      <span className="text-5xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-400 ml-1">{plan.period}</span>
                    </div>
                    <p className="text-gray-300">{plan.description}</p>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <a
                    href="/contact"
                    className={`w-full cyber-button inline-flex items-center justify-center ${
                      plan.popular ? 'bg-gradient-to-r from-cyan-500 to-purple-600' : ''
                    }`}
                  >
                    Get Started
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                </div>
              ))}
            </div>
          </section>

          {/* Services Pricing */}
          <section className="container mx-auto px-4 py-16">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">Service Pricing</h2>
              <p className="text-xl text-gray-300">Individual services and add-ons</p>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <button
                onClick={() => setSelectedCategory('all')}
                className={`px-6 py-3 rounded-lg font-medium transition-all ${
                  selectedCategory === 'all'
                    ? 'bg-cyan-500 text-white'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                All Services
              </button>
              <button
                onClick={() => setSelectedCategory('ai')}
                className={`px-6 py-3 rounded-lg font-medium transition-all ${
                  selectedCategory === 'ai'
                    ? 'bg-cyan-500 text-white'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                AI Services
              </button>
              <button
                onClick={() => setSelectedCategory('it')}
                className={`px-6 py-3 rounded-lg font-medium transition-all ${
                  selectedCategory === 'it'
                    ? 'bg-cyan-500 text-white'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                IT Services
              </button>
              <button
                onClick={() => setSelectedCategory('custom')}
                className={`px-6 py-3 rounded-lg font-medium transition-all ${
                  selectedCategory === 'custom'
                    ? 'bg-cyan-500 text-white'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                Custom Solutions
              </button>
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service) => (
                <div key={service.id} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
                  <h3 className="text-xl font-bold text-white mb-3">{service.name}</h3>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-cyan-400 mb-3 flex items-center">
                      <CheckCircle className="w-4 h-4 mr-2" />
                      Key Features
                    </h4>
                    <ul className="space-y-2">
                      {service.features.slice(0, 4).map((feature, idx) => (
                        <li key={idx} className="text-xs text-gray-300 flex items-center">
                          <div className="w-1 h-1 bg-cyan-400 rounded-full mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-green-400 mb-3 flex items-center">
                      <Award className="w-4 h-4 mr-2" />
                      Key Benefits
                    </h4>
                    <div className="grid grid-cols-1 gap-2">
                      {service.benefits.slice(0, 2).map((benefit, idx) => (
                        <div key={idx} className="text-xs text-gray-300 bg-slate-800/50 rounded px-2 py-1">
                          {benefit}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="text-center mb-6">
                    <div className="text-3xl font-bold text-white mb-2">
                      {formatPrice(service.pricing)}
                    </div>
                    {service.pricing.custom && (
                      <p className="text-sm text-gray-400">Contact us for a quote</p>
                    )}
                  </div>

                  <div className="space-y-3">
                    <a
                      href={`tel:${contactInfo.phone}`}
                      className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-3 px-4 rounded-lg font-medium hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center group"
                    >
                      <Phone className="w-4 h-4 mr-2" />
                      Call Now
                    </a>
                    <a
                      href={`mailto:${contactInfo.email}`}
                      className="w-full border border-cyan-400 text-cyan-400 py-3 px-4 rounded-lg font-medium hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center"
                    >
                      <Mail className="w-4 h-4 mr-2" />
                      Get Quote
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Contact Section */}
          <section className="container mx-auto px-4 py-16">
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 text-center">
              <h2 className="text-3xl font-bold text-white mb-4">Need a Custom Solution?</h2>
              <p className="text-xl text-gray-300 mb-8">
                Contact us for a personalized quote tailored to your specific needs.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                <div className="flex items-center justify-center text-gray-300">
                  <Phone className="w-5 h-5 mr-3 text-cyan-400" />
                  <span>{contactInfo.phone}</span>
                </div>
                <div className="flex items-center justify-center text-gray-300">
                  <Mail className="w-5 h-5 mr-3 text-cyan-400" />
                  <span>{contactInfo.email}</span>
                </div>
                <div className="flex items-center justify-center text-gray-300">
                  <MapPin className="w-5 h-5 mr-3 text-cyan-400" />
                  <span>{contactInfo.address}</span>
                </div>
              </div>
              
              <a
                href="/contact"
                className="inline-flex items-center bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
              >
                Get Custom Quote
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default PricingPage;