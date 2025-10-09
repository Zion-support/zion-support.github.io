import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, Star, Phone, ArrowRight, Mail, Brain, Zap, Cloud, Shield } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
<<<<<<< HEAD
<<<<<<< HEAD

const PricingPage: React.FC = () => {
<<<<<<< HEAD
<<<<<<< HEAD
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [billingPeriod, setBillingPeriod] = useState<'month' | 'year'>('month');

=======
import { CheckCircle, Star, Phone, ArrowRight, Mail, ExternalLink, Brain, Zap, Cloud, Rocket, Award } from 'lucide-react';
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-6669

const PricingPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [billingPeriod, setBillingPeriod] = useState<'month' | 'year'>('month');

  const categories = [
    { id: 'all', name: 'All Services', icon: Star },
    { id: 'ai', name: 'AI Services', icon: Brain },
    { id: 'it', name: 'IT Services', icon: Cloud },
    { id: 'security', name: 'Security', icon: Shield }
  ];

<<<<<<< HEAD
  const services = [
    {
      id: 'ai-marketing',
      name: 'AI Marketing Automation',
      description: 'Automated marketing campaigns with AI-powered personalization and optimization.',
      category: 'ai',
      icon: '🤖',
      popular: true,
      new: false,
      pricing: { starting: 2999, period: 'month', custom: false },
      marketPrice: { min: 2000, max: 5000 },
      features: ['Campaign Automation', 'Personalization', 'A/B Testing', 'Analytics Dashboard'],
      benefits: ['300% ROI Increase', '50% Time Savings'],
      useCases: ['E-commerce', 'SaaS'],
      contact: {
        demo: 'https://demo.ziontechgroup.com/ai-marketing'
      }
    },
    {
      id: 'ai-automation',
      name: 'AI Workflow Automation',
      description: 'Intelligent process automation to streamline your business operations.',
      category: 'ai',
      icon: '⚡',
      popular: false,
      new: true,
      pricing: { starting: 1999, period: 'month', custom: false },
      marketPrice: { min: 1500, max: 4000 },
      features: ['Process Automation', 'Smart Routing', 'Exception Handling', 'Real-time Monitoring'],
      benefits: ['80% Efficiency Gain', 'Error Reduction'],
      useCases: ['Manufacturing', 'Healthcare'],
      contact: {
        demo: 'https://demo.ziontechgroup.com/ai-automation'
      }
    },
    {
      id: 'micro-saas-platform',
      name: 'Micro SAAS Platform',
      description: 'Custom micro SAAS solutions built for your specific business needs.',
      category: 'micro-saas',
      icon: '🚀',
      popular: true,
      new: false,
      pricing: { starting: 4999, period: 'month', custom: false },
      marketPrice: { min: 3000, max: 8000 },
      features: ['Custom Development', 'User Management', 'Payment Integration', 'Analytics'],
      benefits: ['Scalable Architecture', 'Quick Deployment'],
      useCases: ['Startups', 'SMBs'],
      contact: {
        demo: 'https://demo.ziontechgroup.com/micro-saas'
      }
    },
    {
      id: 'cloud-infrastructure',
      name: 'Cloud Infrastructure',
      description: 'Scalable cloud solutions with AWS, Azure, and GCP expertise.',
      category: 'it',
      icon: '☁️',
      popular: false,
      new: false,
      pricing: { starting: 1499, period: 'month', custom: false },
      marketPrice: { min: 1000, max: 3000 },
      features: ['Cloud Migration', 'Auto-scaling', 'Security', 'Monitoring'],
      benefits: ['99.9% Uptime', 'Cost Optimization'],
      useCases: ['Enterprise', 'E-commerce'],
      contact: {
        demo: 'https://demo.ziontechgroup.com/cloud'
      }
    },
    {
      id: 'quantum-computing',
      name: 'Quantum Computing Solutions',
      description: 'Next-generation quantum computing applications for complex problem solving.',
      category: 'emerging-tech',
      icon: '🔬',
      popular: false,
      new: true,
      pricing: { starting: 0, period: 'one-time', custom: true },
      marketPrice: { min: 50000, max: 200000 },
      features: ['Quantum Algorithms', 'Optimization', 'Simulation', 'Research Support'],
      benefits: ['Exponential Speed', 'Future-Proof'],
      useCases: ['Research', 'Finance'],
      contact: {
        demo: 'https://demo.ziontechgroup.com/quantum'
      }
    },
    {
      id: 'ai-healthcare',
      name: 'AI Healthcare Solutions',
      description: 'AI-powered healthcare applications for diagnosis and treatment optimization.',
      category: 'ai',
      icon: '🏥',
      popular: false,
      new: false,
      pricing: { starting: 7999, period: 'month', custom: false },
      marketPrice: { min: 5000, max: 15000 },
      features: ['Diagnostic AI', 'Treatment Planning', 'Patient Monitoring', 'Compliance'],
      benefits: ['Improved Outcomes', 'Reduced Costs'],
      useCases: ['Hospitals', 'Clinics'],
      contact: {
        demo: 'https://demo.ziontechgroup.com/ai-healthcare'
      }
    }
  ];

>>>>>>> cursor/analyze-improve-and-deploy-application-f5c8
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
<<<<<<< HEAD
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid-advanced neural-network-bg">
      {/* Header */}
      <div className="container mx-auto px-4 py-16 pt-24">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 neon-text-advanced cyber-text-advanced" data-text="Pricing">
            Pricing
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Transparent, competitive pricing for all our AI, IT, and Micro SAAS solutions. 
            Choose the perfect plan for your business needs.
          </p>
          
          {/* Contact Info Banner */}
          <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-lg p-6 mb-8 cyber-card">
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
=======
=======
>>>>>>> cursor/website-audit-and-update-with-deployment-f409
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-6669
  const plans = [
    {
      id: 'starter',
      name: 'Starter',
      description: 'Perfect for small businesses getting started',
      price: { month: 999, year: 9999 },
      category: 'all',
      features: [
        'Basic AI Integration',
        'Cloud Infrastructure Setup',
        'Security Assessment',
        'Email Support',
        'Monthly Reports'
      ],
      popular: false
    },
    {
      id: 'professional',
      name: 'Professional',
      description: 'Ideal for growing businesses',
      price: { month: 2999, year: 29999 },
      category: 'all',
      features: [
        'Advanced AI Solutions',
        'Custom Development',
        '24/7 Support',
        'Priority Support',
        'Quarterly Reviews',
        'Performance Monitoring'
      ],
      popular: true
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      description: 'Comprehensive solutions for large organizations',
      price: { month: 9999, year: 99999 },
      category: 'all',
      features: [
        'Full AI Suite',
        'Custom Solutions',
        'Dedicated Team',
        '24/7 Phone Support',
        'Monthly Reviews',
        'SLA Guarantee',
        'Training & Support'
      ],
      popular: false
    }
  ];

  const filteredPlans = selectedCategory === 'all' 
    ? plans 
    : plans.filter(plan => plan.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Pricing - Zion Tech Group</title>
        <meta name="description" content="Transparent pricing for AI and IT solutions. Choose the plan that fits your business needs." />
        <meta name="keywords" content="pricing, AI services, IT services, business solutions, enterprise" />
      </Helmet>
      
      <Navigation />
      
<<<<<<< HEAD
      <main className="pt-24">
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Simple, <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Transparent Pricing</span>
            </h1>
            <p className="text-xl text-cyan-400 mb-8 max-w-4xl mx-auto">
              Choose the perfect plan for your business needs. All plans include our core AI and IT services 
              with no hidden fees or surprises.
            </p>
          </div>
        </section>
=======
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Simple, <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Transparent</span> Pricing
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Choose the perfect plan for your business. All plans include our core services with no hidden fees.
          </p>
        </div>
      </section>
>>>>>>> cursor/fix-errors-and-merge-to-main-6669

      {/* Category Filter */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-cyan-600 text-white'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                <category.icon className="w-5 h-5 mr-2" />
                {category.name}
              </button>
            ))}
          </div>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center mb-12">
            <span className={`text-lg font-semibold mr-4 ${billingPeriod === 'month' ? 'text-white' : 'text-gray-400'}`}>
              Monthly
            </span>
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
            <span className={`text-lg font-semibold ml-4 ${billingPeriod === 'year' ? 'text-white' : 'text-gray-400'}`}>
              Yearly
              <span className="text-cyan-400 text-sm ml-2">(Save 20%)</span>
            </span>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {filteredPlans.map((plan) => (
              <div
                key={plan.id}
                className={`relative bg-white/10 backdrop-blur-lg rounded-xl p-8 border transition-all duration-300 hover:scale-105 ${
                  plan.popular
                    ? 'border-cyan-400/50 ring-2 ring-cyan-400/20'
                    : 'border-white/20 hover:border-cyan-400/50'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-400 to-purple-400 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-6">{plan.description}</p>
                  <div className="mb-6">
                    <span className="text-5xl font-bold text-white">
                      ${plan.price[billingPeriod].toLocaleString()}
                    </span>
                    <span className="text-gray-400 ml-2">
                      /{billingPeriod === 'month' ? 'month' : 'year'}
                    </span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

<<<<<<< HEAD
                <a
                  href="/contact"
                  className={`w-full text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 inline-flex items-center justify-center ${
=======
                <button
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
>>>>>>> cursor/fix-errors-and-merge-to-main-6669
                    plan.popular
                      ? 'bg-gradient-to-r from-cyan-600 to-purple-600 text-white hover:from-cyan-700 hover:to-purple-700'
                      : 'border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900'
                  }`}
                >
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Solutions */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Need a <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Custom Solution</span>?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            We offer tailored solutions for unique business requirements. Contact us for a personalized quote.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="bg-gradient-to-r from-cyan-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call (302) 464-0950
            </a>
            <a
              href="mailto:info@ziontechgroup.com"
              className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center"
            >
              <Mail className="w-5 h-5 mr-2" />
              Get Custom Quote
            </a>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default PricingPage;