'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  CheckCircle, 
  X, 
  Star, 
  ArrowRight,
  Zap,
  Shield,
  Crown,
  DollarSign,
  Clock,
  Users,
  Award,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const PricingPage: React.FC = () => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');

  const aiServicesPricing = [
    {
      name: 'AI Chatbot Basic',
      price: { monthly: '$299', yearly: '$2990' },
      description: 'Perfect for small businesses starting with AI',
      features: [
        'Up to 1,000 conversations/month',
        'Basic NLP capabilities',
        'Email support',
        'Standard integrations',
        'Basic analytics'
      ],
      popular: false,
      category: 'AI Services'
    },
    {
      name: 'AI Content Generator Pro',
      price: { monthly: '$199', yearly: '$1990' },
      description: 'Advanced content creation for marketing teams',
      features: [
        'Unlimited content generation',
        'Multi-language support',
        'SEO optimization',
        'Brand voice training',
        'Priority support',
        'API access'
      ],
      popular: true,
      category: 'AI Services'
    },
    {
      name: 'AI Analytics Enterprise',
      price: { monthly: '$399', yearly: '$3990' },
      description: 'Comprehensive AI-powered business intelligence',
      features: [
        'Real-time dashboards',
        'Predictive analytics',
        'Custom reports',
        'Advanced visualizations',
        'White-label options',
        'Dedicated support'
      ],
      popular: false,
      category: 'AI Services'
    }
  ];

  const itServicesPricing = [
    {
      name: 'Cloud Infrastructure Starter',
      price: { monthly: '$2,500', yearly: '$25,000' },
      description: 'Essential cloud setup for growing businesses',
      features: [
        'AWS/Azure/GCP setup',
        'Basic monitoring',
        'Email support',
        'Monthly maintenance',
        'Security basics'
      ],
      popular: false,
      category: 'IT Services'
    },
    {
      name: 'Cybersecurity Standard',
      price: { monthly: '$1,800', yearly: '$18,000' },
      description: 'Comprehensive security for medium businesses',
      features: [
        'Security assessment',
        'Firewall configuration',
        '24/7 monitoring',
        'Incident response',
        'Compliance support',
        'Monthly reports'
      ],
      popular: true,
      category: 'IT Services'
    },
    {
      name: 'DevOps Complete',
      price: { monthly: '$3,200', yearly: '$32,000' },
      description: 'Full DevOps implementation and management',
      features: [
        'CI/CD pipeline setup',
        'Container orchestration',
        'Infrastructure as Code',
        'Automated testing',
        'Performance optimization',
        'Team training'
      ],
      popular: false,
      category: 'IT Services'
    }
  ];

  const microSaasPricing = [
    {
      name: 'Analytics Dashboard',
      price: { monthly: '$29', yearly: '$290' },
      description: 'Real-time business analytics and insights',
      features: [
        'Up to 10 users',
        'Real-time data visualization',
        'Custom reports',
        'Export capabilities',
        'Mobile responsive',
        'Email support'
      ],
      popular: true,
      category: 'Micro SaaS'
    },
    {
      name: 'CRM Master Suite',
      price: { monthly: '$19', yearly: '$190' },
      description: 'Complete customer relationship management',
      features: [
        'Up to 5 users',
        'Contact management',
        'Sales pipeline',
        'Email automation',
        'Basic analytics',
        'Integration APIs'
      ],
      popular: false,
      category: 'Micro SaaS'
    },
    {
      name: 'Project Tracker Elite',
      price: { monthly: '$39', yearly: '$390' },
      description: 'AI-enhanced project management',
      features: [
        'Up to 15 users',
        'Task management',
        'Team collaboration',
        'Time tracking',
        'AI scheduling',
        'Resource allocation'
      ],
      popular: false,
      category: 'Micro SaaS'
    }
  ];

  const allPricing = [...aiServicesPricing, ...itServicesPricing, ...microSaasPricing];

  const enterpriseFeatures = [
    'Custom pricing based on requirements',
    'Dedicated account manager',
    '24/7 priority support',
    'Custom integrations',
    'On-site training',
    'SLA guarantees',
    'White-label options',
    'Advanced security features'
  ];

  const savings = {
    ai: { monthly: 0, yearly: 17 },
    it: { monthly: 0, yearly: 17 },
    micro: { monthly: 0, yearly: 17 }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Pricing - Zion Tech Group | Transparent Pricing for AI & IT Solutions</title>
        <meta name="description" content="Transparent pricing for our AI services, IT solutions, and micro SaaS products. Choose the perfect plan for your business needs with competitive rates." />
        <meta name="keywords" content="pricing, AI services pricing, IT services cost, micro SaaS pricing, business solutions pricing" />
      </Helmet>
      
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Transparent <span className="text-cyan-400">Pricing</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Choose the perfect plan for your business. All our services come with transparent pricing, 
              no hidden fees, and flexible options to scale with your growth.
            </p>
            
            {/* Billing Toggle */}
            <div className="flex items-center justify-center mb-12">
              <span className={`text-lg font-medium mr-4 ${billingCycle === 'monthly' ? 'text-white' : 'text-gray-400'}`}>
                Monthly
              </span>
              <button
                onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')}
                className="relative inline-flex h-6 w-11 items-center rounded-full bg-gray-600 transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-slate-900"
              >
                <span
                  className={`${
                    billingCycle === 'yearly' ? 'translate-x-6' : 'translate-x-1'
                  } inline-block h-4 w-4 transform rounded-full bg-white transition-transform`}
                />
              </button>
              <span className={`text-lg font-medium ml-4 ${billingCycle === 'yearly' ? 'text-white' : 'text-gray-400'}`}>
                Yearly
              </span>
              {billingCycle === 'yearly' && (
                <span className="ml-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                  Save 17%
                </span>
              )}
            </div>
          </div>
        </section>

        {/* AI Services Pricing */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">AI Services Pricing</h2>
              <p className="text-xl text-gray-300">Transform your business with AI-powered solutions</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {aiServicesPricing.map((service, index) => (
                <div
                  key={index}
                  className={`bg-white/5 backdrop-blur-sm rounded-2xl p-8 border ${
                    service.popular ? 'border-cyan-400 ring-2 ring-cyan-400/20' : 'border-white/20'
                  } hover:bg-white/10 transition-all duration-300`}
                >
                  {service.popular && (
                    <div className="flex justify-center mb-4">
                      <span className="bg-cyan-500/20 text-cyan-300 text-xs font-semibold px-3 py-1 rounded-full flex items-center gap-1">
                        <Star className="w-3 h-3" />
                        Most Popular
                      </span>
                    </div>
                  )}
                  <h3 className="text-2xl font-bold text-white mb-2">{service.name}</h3>
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-white">
                      {billingCycle === 'monthly' ? service.price.monthly : service.price.yearly}
                    </span>
                    <span className="text-gray-400">/{billingCycle === 'monthly' ? 'month' : 'year'}</span>
                    {billingCycle === 'yearly' && (
                      <div className="text-sm text-green-400 mt-1">
                        Save ${parseInt(service.price.monthly.replace('$', '')) * 12 - parseInt(service.price.yearly.replace('$', ''))}/year
                      </div>
                    )}
                  </div>
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center ${
                      service.popular
                        ? 'bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white'
                        : 'border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white'
                    }`}
                  >
                    Get Started
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* IT Services Pricing */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">IT Services Pricing</h2>
              <p className="text-xl text-gray-300">Complete IT solutions for modern businesses</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {itServicesPricing.map((service, index) => (
                <div
                  key={index}
                  className={`bg-white/5 backdrop-blur-sm rounded-2xl p-8 border ${
                    service.popular ? 'border-cyan-400 ring-2 ring-cyan-400/20' : 'border-white/20'
                  } hover:bg-white/10 transition-all duration-300`}
                >
                  {service.popular && (
                    <div className="flex justify-center mb-4">
                      <span className="bg-cyan-500/20 text-cyan-300 text-xs font-semibold px-3 py-1 rounded-full flex items-center gap-1">
                        <Star className="w-3 h-3" />
                        Most Popular
                      </span>
                    </div>
                  )}
                  <h3 className="text-2xl font-bold text-white mb-2">{service.name}</h3>
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-white">
                      {billingCycle === 'monthly' ? service.price.monthly : service.price.yearly}
                    </span>
                    <span className="text-gray-400">/{billingCycle === 'monthly' ? 'month' : 'year'}</span>
                    {billingCycle === 'yearly' && (
                      <div className="text-sm text-green-400 mt-1">
                        Save ${parseInt(service.price.monthly.replace('$', '').replace(',', '')) * 12 - parseInt(service.price.yearly.replace('$', '').replace(',', ''))}/year
                      </div>
                    )}
                  </div>
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center ${
                      service.popular
                        ? 'bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white'
                        : 'border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white'
                    }`}
                  >
                    Get Quote
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Micro SaaS Pricing */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Micro SaaS Pricing</h2>
              <p className="text-xl text-gray-300">Affordable tools for small to medium businesses</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {microSaasPricing.map((service, index) => (
                <div
                  key={index}
                  className={`bg-white/5 backdrop-blur-sm rounded-2xl p-8 border ${
                    service.popular ? 'border-cyan-400 ring-2 ring-cyan-400/20' : 'border-white/20'
                  } hover:bg-white/10 transition-all duration-300`}
                >
                  {service.popular && (
                    <div className="flex justify-center mb-4">
                      <span className="bg-cyan-500/20 text-cyan-300 text-xs font-semibold px-3 py-1 rounded-full flex items-center gap-1">
                        <Star className="w-3 h-3" />
                        Most Popular
                      </span>
                    </div>
                  )}
                  <h3 className="text-2xl font-bold text-white mb-2">{service.name}</h3>
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-white">
                      {billingCycle === 'monthly' ? service.price.monthly : service.price.yearly}
                    </span>
                    <span className="text-gray-400">/{billingCycle === 'monthly' ? 'month' : 'year'}</span>
                    {billingCycle === 'yearly' && (
                      <div className="text-sm text-green-400 mt-1">
                        Save ${parseInt(service.price.monthly.replace('$', '')) * 12 - parseInt(service.price.yearly.replace('$', ''))}/year
                      </div>
                    )}
                  </div>
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center ${
                      service.popular
                        ? 'bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white'
                        : 'border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white'
                    }`}
                  >
                    Try Free
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Enterprise Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-2xl p-12 text-center">
              <Crown className="w-16 h-16 text-cyan-400 mx-auto mb-6" />
              <h2 className="text-3xl font-bold text-white mb-4">Enterprise Solutions</h2>
              <p className="text-xl text-gray-300 mb-8">
                Need something custom? We offer tailored solutions for large organizations with specific requirements.
              </p>
              <ul className="grid md:grid-cols-2 gap-4 mb-8 text-left">
                {enterpriseFeatures.map((feature, index) => (
                  <li key={index} className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 inline-flex items-center"
              >
                Contact Sales
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </div>
        </section>

        {/* Contact Info Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 text-center">
              <h2 className="text-3xl font-bold text-white mb-6">Questions About Pricing?</h2>
              <p className="text-xl text-gray-300 mb-8">
                Our team is here to help you choose the right solution for your business needs.
              </p>
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="flex items-center justify-center space-x-2">
                  <Phone className="w-5 h-5 text-cyan-400" />
                  <span className="text-white">+1 302 464 0950</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <Mail className="w-5 h-5 text-cyan-400" />
                  <span className="text-white">kleber@ziontechgroup.com</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <MapPin className="w-5 h-5 text-cyan-400" />
                  <span className="text-white">Middletown, DE</span>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
                >
                  Get Custom Quote
                </Link>
                <Link
                  to="/consultation"
                  className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300"
                >
                  Free Consultation
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default PricingPage;