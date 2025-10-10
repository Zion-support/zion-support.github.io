'use client';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  CheckCircle, Star, Zap, Brain, Cloud, Shield, Code, Users, 
  BarChart, MessageCircle, Eye, Mic, Workflow, Heart, DollarSign, 
  Globe, Cpu, Target, Database, Settings, Calendar, CheckSquare, 
  FileText, Package, Monitor, Wifi, Mail, Phone, MapPin, ArrowRight,
  Award, Rocket, Sparkles, ExternalLink, Crown, Diamond, Gem
} from 'lucide-react';

const PricingPage: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');
  const [selectedCategory, setSelectedCategory] = useState('all');

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Comprehensive pricing plans
  const pricingPlans = [
    {
      id: 'starter',
      name: 'Starter',
      description: 'Perfect for small businesses and startups',
      icon: Zap,
      price: { monthly: '$99', yearly: '$999' },
      originalPrice: { monthly: '$149', yearly: '$1499' },
      popular: false,
      category: 'all',
      features: [
        'Up to 5 AI services',
        'Basic analytics dashboard',
        'Email support',
        'Standard integrations',
        '1TB data storage',
        'Basic security features',
        'Mobile app access',
        'API access (1000 calls/month)',
        'Basic reporting',
        'Community support'
      ],
      limitations: [
        'Limited to 5 team members',
        'Basic customization options',
        'Standard response times',
        'Limited advanced features'
      ],
      cta: 'Start Free Trial',
      ctaLink: '/contact',
      color: 'from-blue-500 to-cyan-600'
    },
    {
      id: 'professional',
      name: 'Professional',
      description: 'Ideal for growing businesses and teams',
      icon: Star,
      price: { monthly: '$299', yearly: '$2999' },
      originalPrice: { monthly: '$399', yearly: '$3999' },
      popular: true,
      category: 'all',
      features: [
        'Up to 20 AI services',
        'Advanced analytics & BI',
        'Priority email & chat support',
        'Advanced integrations (50+)',
        '5TB data storage',
        'Advanced security features',
        'Mobile & desktop apps',
        'API access (10,000 calls/month)',
        'Advanced reporting & insights',
        'Priority support',
        'Custom workflows',
        'Team collaboration tools',
        'Advanced automation',
        'White-label options',
        'Custom integrations'
      ],
      limitations: [
        'Up to 25 team members',
        'Standard customization',
        'Business hours support'
      ],
      cta: 'Start Free Trial',
      ctaLink: '/contact',
      color: 'from-purple-500 to-pink-600'
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      description: 'For large organizations with complex needs',
      icon: Crown,
      price: { monthly: '$799', yearly: '$7999' },
      originalPrice: { monthly: '$999', yearly: '$9999' },
      popular: false,
      category: 'all',
      features: [
        'Unlimited AI services',
        'Enterprise analytics & BI',
        '24/7 phone & chat support',
        'Unlimited integrations',
        'Unlimited data storage',
        'Enterprise security & compliance',
        'All platform access',
        'Unlimited API access',
        'Custom reporting & dashboards',
        'Dedicated account manager',
        'Custom workflows & automation',
        'Advanced team management',
        'Advanced automation & AI',
        'Full white-label solution',
        'Custom development',
        'SLA guarantees',
        'On-premise deployment option',
        'Advanced monitoring & alerting',
        'Custom training & onboarding',
        'Priority feature requests'
      ],
      limitations: [],
      cta: 'Contact Sales',
      ctaLink: '/contact',
      color: 'from-cyan-500 to-blue-600'
    },
    {
      id: 'ai-services',
      name: 'AI Services',
      description: 'Comprehensive AI solutions package',
      icon: Brain,
      price: { monthly: '$199', yearly: '$1999' },
      originalPrice: { monthly: '$299', yearly: '$2999' },
      popular: false,
      category: 'ai',
      features: [
        'AI Chatbots & NLP',
        'AI Content Generation',
        'AI Data Analytics',
        'AI Computer Vision',
        'AI Voice Processing',
        'AI Workflow Automation',
        'AI Healthcare Solutions',
        'AI Financial Services',
        'AI E-commerce Solutions',
        'AI Cybersecurity',
        'AI HR Solutions',
        'AI Document Processing',
        'AI Edge Computing',
        'AI Quantum Computing',
        'AI Autonomous Systems',
        'AI Blockchain Solutions',
        'Custom AI model training',
        'AI consulting & strategy',
        'AI implementation support',
        'AI performance optimization'
      ],
      limitations: [
        'Standard AI models',
        'Basic customization',
        'Email support only'
      ],
      cta: 'Get AI Services',
      ctaLink: '/ai-services',
      color: 'from-green-500 to-emerald-600'
    },
    {
      id: 'it-services',
      name: 'IT Services',
      description: 'Complete IT infrastructure and support',
      icon: Cloud,
      price: { monthly: '$149', yearly: '$1499' },
      originalPrice: { monthly: '$199', yearly: '$1999' },
      popular: false,
      category: 'it',
      features: [
        'Cloud Infrastructure Solutions',
        'API Development & Management',
        'Cybersecurity Solutions',
        'Database Management',
        'Mobile App Development',
        'Web Development Services',
        'DevOps & CI/CD Solutions',
        'IT Support & Helpdesk',
        'Data Analytics & BI',
        'Custom Software Development',
        'Network Infrastructure',
        'IT Asset Management',
        'Blockchain Development',
        'IoT Development',
        'E-commerce Platform Development',
        'MLOps & AI Operations',
        '24/7 technical support',
        'Infrastructure monitoring',
        'Security compliance',
        'Performance optimization'
      ],
      limitations: [
        'Standard infrastructure',
        'Basic security features',
        'Business hours support'
      ],
      cta: 'Get IT Services',
      ctaLink: '/it-services',
      color: 'from-orange-500 to-red-600'
    },
    {
      id: 'micro-saas',
      name: 'Micro SAAS',
      description: 'Ready-to-use business tools and applications',
      icon: Cpu,
      price: { monthly: '$79', yearly: '$799' },
      originalPrice: { monthly: '$99', yearly: '$999' },
      popular: false,
      category: 'saas',
      features: [
        'Zion Analytics Pro',
        'Zion Chat AI',
        'Zion Security Shield',
        'Zion Cloud Vault',
        'Zion Content Studio',
        'Zion CRM Intelligence',
        'Zion Data Sync',
        'Zion Lead Magnet',
        'Zion Project Master',
        'Zion Email Automation',
        'Zion Inventory Smart',
        'Zion Invoice Genius',
        'Zion Workflow Automation',
        'Zion Performance Monitor',
        'Zion Compliance Manager',
        'Zion Social Scheduler',
        'Zion AI Video Editor',
        'Zion AI Translator Pro',
        'Zion AI Code Reviewer',
        'Zion Customer Insights Pro',
        'Zion AI Email Assistant',
        'Zion AI Meeting Assistant',
        'Zion AI SEO Optimizer',
        'Zion AI Data Cleaner',
        'Zion AI Contract Analyzer',
        'Zion AI Survey Builder',
        'Zion AI Accounting Assistant',
        'Zion AI Recruitment Pro',
        'Zion AI Content Moderation',
        'Zion AI Predictive Maintenance',
        'Zion AI Energy Manager',
        'Zion AI Supply Chain Optimizer',
        'Zion AI Fraud Detector',
        'Zion AI Customer Service Pro',
        'Zion AI Marketing Automation',
        'Zion AI Document AI'
      ],
      limitations: [
        'Basic features only',
        'Limited customization',
        'Community support'
      ],
      cta: 'Get Micro SAAS',
      ctaLink: '/micro-saas',
      color: 'from-indigo-500 to-purple-600'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Plans', count: pricingPlans.filter(p => p.category === 'all').length },
    { id: 'ai', name: 'AI Services', count: pricingPlans.filter(p => p.category === 'ai').length },
    { id: 'it', name: 'IT Services', count: pricingPlans.filter(p => p.category === 'it').length },
    { id: 'saas', name: 'Micro SAAS', count: pricingPlans.filter(p => p.category === 'saas').length }
  ];

  const filteredPlans = selectedCategory === 'all' 
    ? pricingPlans.filter(p => p.category === 'all')
    : pricingPlans.filter(p => p.category === selectedCategory);

  const savings = billingCycle === 'yearly' ? 'Save 17%' : '';

  return (
    <div className={`min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg matrix-rain ${isVisible ? 'opacity-100' : 'opacity-0'} transition-opacity duration-1000`}>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 neon-text-enhanced">
              Pricing Plans
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Choose the perfect plan for your business. All plans include 14-day free trial, 
              no setup fees, and 24/7 support.
            </p>
            
            {/* Billing Toggle */}
            <div className="flex items-center justify-center space-x-4 mb-8">
              <span className={`text-lg font-medium ${billingCycle === 'monthly' ? 'text-white' : 'text-gray-400'}`}>
                Monthly
              </span>
              <button
                onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')}
                className="relative inline-flex h-8 w-16 items-center rounded-full bg-slate-700 transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-slate-900"
              >
                <span
                  className={`inline-block h-6 w-6 transform rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 transition-transform ${
                    billingCycle === 'yearly' ? 'translate-x-9' : 'translate-x-1'
                  }`}
                />
              </button>
              <span className={`text-lg font-medium ${billingCycle === 'yearly' ? 'text-white' : 'text-gray-400'}`}>
                Yearly
              </span>
              {billingCycle === 'yearly' && (
                <span className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {savings}
                </span>
              )}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="tel:+13024640950"
                className="flex items-center space-x-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 shadow-lg shadow-cyan-500/25"
              >
                <Phone className="w-5 h-5" />
                <span>(302) 464-0950</span>
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="flex items-center space-x-2 bg-gradient-to-r from-purple-500 to-pink-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-purple-600 hover:to-pink-700 transition-all duration-300 shadow-lg shadow-purple-500/25"
              >
                <Mail className="w-5 h-5" />
                <span>kleber@ziontechgroup.com</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-2 justify-center mb-8">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/25'
                    : 'bg-slate-800/50 text-gray-300 hover:bg-slate-700/50 hover:text-white'
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPlans.map((plan, index) => (
              <div
                key={plan.id}
                className={`relative bg-slate-900/80 backdrop-blur-xl rounded-2xl p-8 border transition-all duration-500 hover:shadow-2xl group cyber-card-enhanced ${
                  plan.popular 
                    ? 'border-cyan-500/50 ring-2 ring-cyan-500/50 scale-105' 
                    : 'border-cyan-500/20 hover:border-cyan-500/40'
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-2 rounded-full text-sm font-semibold flex items-center">
                      <Crown className="w-4 h-4 mr-2" />
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <div className={`w-16 h-16 bg-gradient-to-r ${plan.color} rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <plan.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                    {plan.name}
                  </h3>
                  <p className="text-gray-300 mb-6">{plan.description}</p>
                  
                  <div className="mb-6">
                    <div className="flex items-baseline justify-center">
                      <span className="text-5xl font-bold text-white">
                        {plan.price[billingCycle]}
                      </span>
                      <span className="text-gray-400 ml-2">
                        /{billingCycle === 'monthly' ? 'month' : 'year'}
                      </span>
                    </div>
                    {plan.originalPrice && (
                      <div className="text-lg text-gray-400 line-through mt-2">
                        {plan.originalPrice[billingCycle]}
                      </div>
                    )}
                  </div>
                </div>

                <div className="mb-8">
                  <h4 className="text-lg font-semibold text-white mb-4">What's included:</h4>
                  <ul className="space-y-3">
                    {plan.features.slice(0, 8).map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                    {plan.features.length > 8 && (
                      <li className="text-sm text-cyan-400 ml-7">
                        +{plan.features.length - 8} more features
                      </li>
                    )}
                  </ul>
                </div>

                {plan.limitations.length > 0 && (
                  <div className="mb-8 p-4 bg-slate-800/50 rounded-xl">
                    <h4 className="text-sm font-semibold text-gray-400 mb-2">Limitations:</h4>
                    <ul className="space-y-1">
                      {plan.limitations.map((limitation, idx) => (
                        <li key={idx} className="text-xs text-gray-500">
                          • {limitation}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="space-y-3">
                  <a
                    href={plan.ctaLink}
                    className={`w-full bg-gradient-to-r ${plan.color} text-white py-3 px-6 rounded-xl font-semibold hover:opacity-90 transition-all duration-300 flex items-center justify-center group`}
                  >
                    {plan.cta}
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </a>
                  
                  <div className="text-center">
                    <span className="text-sm text-gray-400">
                      14-day free trial • No credit card required
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enterprise CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-slate-900/80 to-slate-800/80 backdrop-blur-xl rounded-2xl p-12 border border-cyan-500/20 cyber-card-enhanced">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Need a Custom Solution?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              We offer custom enterprise solutions tailored to your specific needs. 
              Get in touch with our team to discuss your requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 shadow-lg shadow-cyan-500/25"
              >
                Call (302) 464-0950
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-purple-600 hover:to-pink-700 transition-all duration-300 shadow-lg shadow-purple-500/25"
              >
                Email Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-12">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {[
              {
                question: "What's included in the free trial?",
                answer: "The 14-day free trial includes full access to all features of your chosen plan, with no limitations or restrictions. No credit card required to start."
              },
              {
                question: "Can I change plans anytime?",
                answer: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate any billing differences."
              },
              {
                question: "Do you offer custom pricing?",
                answer: "Yes, we offer custom pricing for enterprise customers with specific requirements. Contact our sales team to discuss your needs."
              },
              {
                question: "What payment methods do you accept?",
                answer: "We accept all major credit cards, PayPal, bank transfers, and cryptocurrency payments for enterprise customers."
              },
              {
                question: "Is there a setup fee?",
                answer: "No, there are no setup fees for any of our plans. You only pay the monthly or yearly subscription fee."
              },
              {
                question: "What kind of support do you provide?",
                answer: "We provide 24/7 support via email, chat, and phone. Enterprise customers get dedicated account managers and priority support."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-slate-900/50 backdrop-blur-xl rounded-xl p-6 border border-cyan-500/20">
                <h3 className="text-lg font-semibold text-white mb-3">{faq.question}</h3>
                <p className="text-gray-300">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default PricingPage;