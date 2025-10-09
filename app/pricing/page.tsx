import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, Star, Phone, Mail, ArrowRight, Zap, Shield, Cloud, Brain, Code, Users, Building, Crown, Rocket, DollarSign, Clock, Award, Target, BarChart, MessageSquare, Eye, Settings, FileText, Calendar, PieChart, TrendingUp, Activity, Globe, Database, Smartphone, Lock, ExternalLink } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const PricingPage: React.FC = () => {
  const [selectedPlan, setSelectedPlan] = useState('ai-services');
  const [billingCycle, setBillingCycle] = useState('monthly');

  const contactInfo = {
    phone: '(302) 464-0950',
    email: 'kleber@ziontechgroup.com',
    website: 'https://ziontechgroup.com',
    address: '364 E Main St STE 1008, Middletown DE 19709'
  };

  const aiServicesPricing = [
    {
      name: 'AI Starter',
      description: 'Perfect for small businesses getting started with AI',
      price: { monthly: 199, yearly: 1990 },
      icon: Brain,
      popular: false,
      features: [
        'Basic AI automation',
        'Email support',
        'Up to 5 AI models',
        'Standard integrations',
        'Basic analytics'
      ]
    },
    {
      name: 'AI Professional',
      description: 'Advanced AI solutions for growing businesses',
      price: { monthly: 499, yearly: 4990 },
      icon: Brain,
      popular: true,
      features: [
        'Advanced AI automation',
        'Priority support',
        'Up to 25 AI models',
        'Custom integrations',
        'Advanced analytics',
        'API access',
        'Custom training'
      ]
    },
    {
      name: 'AI Enterprise',
      description: 'Complete AI transformation for large organizations',
      price: { monthly: 999, yearly: 9990 },
      icon: Brain,
      popular: false,
      features: [
        'Unlimited AI models',
        '24/7 dedicated support',
        'White-label solutions',
        'Custom development',
        'SLA guarantee',
        'On-site training',
        'Dedicated account manager'
      ]
    }
  ];

  const microSaasPricing = [
    {
      name: 'Micro SAAS Basic',
      description: 'Essential micro services for small teams',
      price: { monthly: 29, yearly: 290 },
      icon: Code,
      popular: false,
      features: [
        'Up to 3 micro services',
        'Basic support',
        'Standard templates',
        'Email integration'
      ]
    },
    {
      name: 'Micro SAAS Pro',
      description: 'Comprehensive micro services for growing businesses',
      price: { monthly: 79, yearly: 790 },
      icon: Code,
      popular: true,
      features: [
        'Up to 15 micro services',
        'Priority support',
        'Custom templates',
        'Advanced integrations',
        'API access',
        'Analytics dashboard'
      ]
    },
    {
      name: 'Micro SAAS Enterprise',
      description: 'Unlimited micro services for large organizations',
      price: { monthly: 199, yearly: 1990 },
      icon: Code,
      popular: false,
      features: [
        'Unlimited micro services',
        '24/7 support',
        'White-label solutions',
        'Custom development',
        'SLA guarantee',
        'Dedicated support'
      ]
    }
  ];

  const itServicesPricing = [
    {
      name: 'IT Support Basic',
      description: 'Essential IT support for small businesses',
      price: { monthly: 199, yearly: 1990 },
      icon: Cloud,
      popular: false,
      features: [
        'Business hours support',
        'Remote assistance',
        'Basic monitoring',
        'Email support'
      ]
    },
    {
      name: 'IT Support Professional',
      description: 'Comprehensive IT support for growing businesses',
      price: { monthly: 399, yearly: 3990 },
      icon: Cloud,
      popular: true,
      features: [
        '24/7 support',
        'Priority response',
        'Advanced monitoring',
        'Phone and email support',
        'On-site visits',
        'Proactive maintenance'
      ]
    },
    {
      name: 'IT Support Enterprise',
      description: 'Complete IT management for large organizations',
      price: { monthly: 799, yearly: 7990 },
      icon: Cloud,
      popular: false,
      features: [
        'Dedicated support team',
        'Custom SLA',
        'Full IT management',
        'Strategic consulting',
        'Compliance support',
        'Disaster recovery'
      ]
    }
  ];

  const getCurrentPricing = () => {
    switch (selectedPlan) {
      case 'ai-services':
        return aiServicesPricing;
      case 'micro-saas':
        return microSaasPricing;
      case 'it-services':
        return itServicesPricing;
      default:
        return aiServicesPricing;
    }
  };

  const formatPrice = (price: number) => {
    return billingCycle === 'yearly' ? `$${price}` : `$${price}`;
  };

  const getSavings = (monthly: number, yearly: number) => {
    const monthlyTotal = monthly * 12;
    const savings = monthlyTotal - yearly;
    const percentage = Math.round((savings / monthlyTotal) * 100);
    return { amount: savings, percentage };
  };

  return (
    <>
      <Helmet>
        <title>Pricing - Zion Tech Group | AI Services, Micro SAAS, IT Solutions</title>
        <meta name="description" content="Transparent pricing for AI services, Micro SAAS solutions, and IT consulting. Get custom quotes for your business needs. Call (302) 464-0950." />
        <meta name="keywords" content="AI pricing, micro saas pricing, IT services pricing, technology consulting costs, custom quotes" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Header />
        
        <main>
          {/* Hero Section */}
          <section className="relative py-20 px-4 sm:px-6 lg:px-8 cyber-grid neural-network-bg">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20" aria-hidden="true"></div>
            <div className="relative z-10 max-w-7xl mx-auto text-center">
              <div className="inline-block px-6 py-3 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full border border-cyan-400/30 mb-6">
                <span className="text-cyan-400 font-semibold text-sm uppercase tracking-wider cyber-text">
                  💰 Transparent Pricing
                </span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight cyber-text neon-pulse">
                Simple <span className="holographic-text">Pricing</span>
              </h1>
              <p className="text-xl md:text-2xl text-cyan-400 mb-8 max-w-4xl mx-auto neon-glow">
                Choose the perfect plan for your business. All plans include our core features with transparent pricing and no hidden fees.
              </p>
              
              {/* Contact Info Banner */}
              <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-lg p-6 mb-8 cyber-card max-w-4xl mx-auto">
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
          </section>

          {/* Plan Selection */}
          <section className="py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 cyber-text">
                  Choose Your <span className="holographic-text">Service Category</span>
                </h2>
                <div className="flex flex-wrap justify-center gap-4 mb-8">
                  <button
                    onClick={() => setSelectedPlan('ai-services')}
                    className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                      selectedPlan === 'ai-services'
                        ? 'bg-cyan-500 text-slate-900 cyber-glow-pulse'
                        : 'bg-white/10 text-white hover:bg-cyan-400/20 hover:text-cyan-400'
                    }`}
                  >
                    <Brain className="w-5 h-5 inline mr-2" />
                    AI Services
                  </button>
                  <button
                    onClick={() => setSelectedPlan('micro-saas')}
                    className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                      selectedPlan === 'micro-saas'
                        ? 'bg-cyan-500 text-slate-900 cyber-glow-pulse'
                        : 'bg-white/10 text-white hover:bg-cyan-400/20 hover:text-cyan-400'
                    }`}
                  >
                    <Code className="w-5 h-5 inline mr-2" />
                    Micro SAAS
                  </button>
                  <button
                    onClick={() => setSelectedPlan('it-services')}
                    className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                      selectedPlan === 'it-services'
                        ? 'bg-cyan-500 text-slate-900 cyber-glow-pulse'
                        : 'bg-white/10 text-white hover:bg-cyan-400/20 hover:text-cyan-400'
                    }`}
                  >
                    <Cloud className="w-5 h-5 inline mr-2" />
                    IT Services
                  </button>
                </div>
                
                {/* Billing Toggle */}
                <div className="flex items-center justify-center space-x-4">
                  <span className={`text-sm font-medium ${billingCycle === 'monthly' ? 'text-cyan-400' : 'text-gray-400'}`}>
                    Monthly
                  </span>
                  <button
                    onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')}
                    className="relative inline-flex h-6 w-11 items-center rounded-full bg-gray-600 transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-slate-900"
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                        billingCycle === 'yearly' ? 'translate-x-6' : 'translate-x-1'
                      }`}
                    />
                  </button>
                  <span className={`text-sm font-medium ${billingCycle === 'yearly' ? 'text-cyan-400' : 'text-gray-400'}`}>
                    Yearly
                    {billingCycle === 'yearly' && (
                      <span className="ml-2 px-2 py-1 bg-green-500 text-white text-xs rounded-full">
                        Save 20%
                      </span>
                    )}
                  </span>
                </div>
              </div>

              {/* Pricing Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {getCurrentPricing().map((plan, index) => {
                  const savings = billingCycle === 'yearly' ? getSavings(plan.price.monthly, plan.price.yearly) : null;
                  
                  return (
                    <div
                      key={index}
                      className={`quantum-card p-8 group hover:scale-105 transition-all duration-300 energy-pulse ${
                        plan.popular ? 'ring-2 ring-cyan-400' : ''
                      }`}
                    >
                      {plan.popular && (
                        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                          <span className="bg-cyan-500 text-slate-900 px-4 py-1 rounded-full text-sm font-semibold">
                            Most Popular
                          </span>
                        </div>
                      )}
                      
                      <div className="text-center mb-6">
                        <div className="text-cyan-400 mb-4 group-hover:text-cyan-300 transition-colors animate-float">
                          <plan.icon className="w-12 h-12 mx-auto" />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-2 neon-glow">{plan.name}</h3>
                        <p className="text-gray-300 text-sm">{plan.description}</p>
                      </div>
                      
                      <div className="text-center mb-6">
                        <div className="text-4xl font-bold text-white mb-2">
                          {formatPrice(billingCycle === 'yearly' ? plan.price.yearly : plan.price.monthly)}
                        </div>
                        <div className="text-gray-400 text-sm">
                          per {billingCycle === 'yearly' ? 'year' : 'month'}
                        </div>
                        {savings && (
                          <div className="text-green-400 text-sm mt-2">
                            Save ${savings.amount} ({savings.percentage}% off)
                          </div>
                        )}
                      </div>
                      
                      <ul className="space-y-3 mb-8">
                        {plan.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center text-sm text-gray-300">
                            <CheckCircle className="w-4 h-4 text-cyan-400 mr-3 flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                      
                      <button className="w-full cyber-button py-3 px-6 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
                        Get Started
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* Custom Pricing CTA */}
          <section className="py-20 px-4 sm:px-6 lg:px-8 cyber-scan-effect">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 cyber-text neon-pulse">
                Need <span className="holographic-text">Custom Pricing?</span>
              </h2>
              <p className="text-xl text-cyan-400 mb-8 neon-glow">
                We offer custom solutions tailored to your specific business needs. Contact us for a personalized quote.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+13024640950"
                  className="cyber-button px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
                >
                  <Phone className="w-5 h-5" />
                  Call (302) 464-0950
                </a>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center gap-2 neon-glow"
                >
                  <Mail className="w-5 h-5" />
                  Email Us
                </a>
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
