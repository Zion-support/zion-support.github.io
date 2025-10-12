import React, { useState } from 'react';
import { CheckCircle, X, Star, Zap, Shield, Globe, Cloud, Database, Smartphone, Brain, BarChart3, Mail, Users, Calendar, Camera, FileText, CreditCard, Search, MessageSquare, Lock, TrendingUp, Target, Wifi, Code } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import FuturisticBackground from '../components/FuturisticBackground';
import NeonButton from '../components/NeonButton';
import FuturisticCard from '../components/FuturisticCard';

const PricingPage: React.FC = () => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');

  const pricingPlans = [
    {
      name: 'Starter',
      price: { monthly: 29, yearly: 290 },
      description: 'Perfect for small businesses and startups',
      icon: <Zap className="w-8 h-8 text-blue-500" />,
      features: [
        'Up to 5 AI services',
        'Basic analytics dashboard',
        'Email support',
        'Standard security',
        '1GB storage',
        'Basic integrations'
      ],
      limitations: [
        'Limited API calls',
        'Basic customization',
        'Standard templates'
      ],
      popular: false,
      color: 'blue'
    },
    {
      name: 'Professional',
      price: { monthly: 79, yearly: 790 },
      description: 'Ideal for growing businesses and teams',
      icon: <Shield className="w-8 h-8 text-purple-500" />,
      features: [
        'Up to 20 AI services',
        'Advanced analytics dashboard',
        'Priority email support',
        'Enhanced security',
        '10GB storage',
        'Advanced integrations',
        'Custom branding',
        'API access',
        'Team collaboration',
        'Advanced reporting'
      ],
      limitations: [
        'Limited custom development',
        'Standard SLA'
      ],
      popular: true,
      color: 'purple'
    },
    {
      name: 'Enterprise',
      price: { monthly: 199, yearly: 1990 },
      description: 'For large organizations with complex needs',
      icon: <Globe className="w-8 h-8 text-green-500" />,
      features: [
        'Unlimited AI services',
        'Custom analytics dashboard',
        '24/7 phone support',
        'Enterprise security',
        'Unlimited storage',
        'Custom integrations',
        'White-label solution',
        'Unlimited API calls',
        'Advanced team management',
        'Custom reporting',
        'Dedicated account manager',
        'Custom development',
        'SLA guarantee',
        'On-premise deployment'
      ],
      limitations: [],
      popular: false,
      color: 'green'
    }
  ];

  const microSAASPricing = [
    {
      name: 'AI Content Generator Pro',
      price: 29,
      category: 'Content & Writing',
      icon: <Brain className="w-6 h-6 text-blue-500" />,
      features: ['50+ templates', 'SEO optimization', 'Multi-language', 'Brand voice training'],
      popular: true
    },
    {
      name: 'Analytics Dashboard AI',
      price: 39,
      category: 'Analytics & Data',
      icon: <BarChart3 className="w-6 h-6 text-green-500" />,
      features: ['Real-time dashboards', 'Predictive analytics', 'Custom reports', 'Data visualization'],
      popular: true
    },
    {
      name: 'Expense Tracker AI',
      price: 19,
      category: 'Finance & Accounting',
      icon: <CreditCard className="w-6 h-6 text-purple-500" />,
      features: ['Receipt scanning', 'Smart categorization', 'Budget alerts', 'Tax preparation'],
      popular: true
    },
    {
      name: 'Email Marketing Automation',
      price: 25,
      category: 'Marketing & Sales',
      icon: <Mail className="w-6 h-6 text-orange-500" />,
      features: ['Drag-and-drop builder', 'AI personalization', 'A/B testing', 'Advanced analytics'],
      popular: false
    },
    {
      name: 'Team Collaboration Hub',
      price: 35,
      category: 'Productivity & Communication',
      icon: <Users className="w-6 h-6 text-indigo-500" />,
      features: ['Real-time messaging', 'File sharing', 'Project boards', 'Video conferencing'],
      popular: false
    },
    {
      name: 'Smart Scheduling Assistant',
      price: 12,
      category: 'Productivity & Communication',
      icon: <Calendar className="w-6 h-6 text-teal-500" />,
      features: ['Smart scheduling', 'Conflict resolution', 'Time zone handling', 'Calendar sync'],
      popular: false
    },
    {
      name: 'AI Photo Editor Pro',
      price: 22,
      category: 'Design & Media',
      icon: <Camera className="w-6 h-6 text-pink-500" />,
      features: ['AI background removal', 'Auto enhancement', 'Batch processing', 'Filters & effects'],
      popular: true
    },
    {
      name: 'Document AI Processor',
      price: 45,
      category: 'Business & Productivity',
      icon: <FileText className="w-6 h-6 text-cyan-500" />,
      features: ['OCR text extraction', 'Data extraction', 'Document classification', 'Form processing'],
      popular: false
    },
    {
      name: 'SEO Optimizer Pro',
      price: 32,
      category: 'Marketing & Sales',
      icon: <Search className="w-6 h-6 text-amber-500" />,
      features: ['Keyword research', 'Content optimization', 'Ranking tracking', 'Competitor analysis'],
      popular: true
    },
    {
      name: 'AI Chatbot Builder',
      price: 28,
      category: 'Customer Service',
      icon: <MessageSquare className="w-6 h-6 text-violet-500" />,
      features: ['No-code builder', 'Multi-channel support', 'AI training', 'Analytics dashboard'],
      popular: true
    },
    {
      name: 'Security Audit AI',
      price: 42,
      category: 'Security & Privacy',
      icon: <Lock className="w-6 h-6 text-red-500" />,
      features: ['Vulnerability scanning', 'Compliance checking', 'Threat detection', 'Security reports'],
      popular: false
    },
    {
      name: 'Social Media Manager',
      price: 24,
      category: 'Marketing & Sales',
      icon: <TrendingUp className="w-6 h-6 text-lime-500" />,
      features: ['Multi-platform posting', 'Content calendar', 'Engagement analytics', 'Hashtag optimization'],
      popular: true
    }
  ];

  const faqs = [
    {
      question: 'Can I change my plan at any time?',
      answer: 'Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and we\'ll prorate any billing differences.'
    },
    {
      question: 'Do you offer custom pricing for large organizations?',
      answer: 'Absolutely! We offer custom enterprise solutions with dedicated support, custom integrations, and volume discounts. Contact our sales team for a personalized quote.'
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards, PayPal, and bank transfers. Enterprise customers can also pay via invoice.'
    },
    {
      question: 'Is there a free trial available?',
      answer: 'Yes! We offer a 14-day free trial for all plans. No credit card required to get started.'
    },
    {
      question: 'What happens if I exceed my plan limits?',
      answer: 'We\'ll notify you when you\'re approaching your limits. You can upgrade your plan or purchase additional capacity as needed.'
    },
    {
      question: 'Do you offer refunds?',
      answer: 'We offer a 30-day money-back guarantee for all paid plans. If you\'re not satisfied, we\'ll provide a full refund.'
    }
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      <FuturisticBackground />
      
      <Helmet>
        <title>Pricing - Zion Tech Group</title>
        <meta name="description" content="Transparent pricing for AI and IT solutions. Choose the perfect plan for your business needs with our flexible pricing options." />
        <meta name="keywords" content="pricing, AI services, IT solutions, enterprise, business plans, subscription" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 z-10">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Simple, Transparent Pricing
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Choose the perfect plan for your business. All plans include our core AI and IT services with no hidden fees.
          </p>
          
          {/* Billing Toggle */}
          <div className="flex items-center justify-center mb-12">
            <span className={`text-sm font-medium ${billingCycle === 'monthly' ? 'text-white' : 'text-gray-400'}`}>
              Monthly
            </span>
            <button
              onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')}
              className="mx-4 relative inline-flex h-6 w-11 items-center rounded-full bg-gray-600 transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  billingCycle === 'yearly' ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
            <span className={`text-sm font-medium ${billingCycle === 'yearly' ? 'text-white' : 'text-gray-400'}`}>
              Yearly
            </span>
            {billingCycle === 'yearly' && (
              <span className="ml-2 text-sm text-green-400 font-medium">Save 20%</span>
            )}
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <FuturisticCard 
                key={index} 
                className={`p-8 relative ${plan.popular ? 'ring-2 ring-purple-500/50' : ''}`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white text-sm font-medium px-4 py-1 rounded-full">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <div className="flex justify-center mb-4">
                    {plan.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 text-sm mb-6">{plan.description}</p>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-white">
                      ${billingCycle === 'monthly' ? plan.price.monthly : plan.price.yearly}
                    </span>
                    <span className="text-gray-400 text-lg">
                      /{billingCycle === 'monthly' ? 'month' : 'year'}
                    </span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                  {plan.limitations.map((limitation, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-500">
                      <X className="w-4 h-4 text-red-500 mr-3 flex-shrink-0" />
                      {limitation}
                    </li>
                  ))}
                </ul>

                <NeonButton
                  href="/contact"
                  variant={plan.popular ? 'primary' : 'secondary'}
                  size="lg"
                  className="w-full"
                >
                  Get Started
                </NeonButton>
              </FuturisticCard>
            ))}
          </div>
        </div>
      </section>

      {/* Micro SaaS Pricing */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Individual Micro SaaS Tools
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Pick and choose the specific tools you need. Mix and match to create your perfect toolkit.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {microSAASPricing.map((tool, index) => (
              <FuturisticCard key={index} className="p-6 group">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    {tool.icon}
                    <span className="text-xs text-gray-400 bg-gray-700/50 px-2 py-1 rounded-full">
                      {tool.category}
                    </span>
                  </div>
                  {tool.popular && (
                    <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white text-xs px-2 py-1 rounded-full">
                      Popular
                    </span>
                  )}
                </div>
                
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                  {tool.name}
                </h3>
                
                <div className="mb-4">
                  <span className="text-2xl font-bold text-white">${tool.price}</span>
                  <span className="text-gray-400 text-sm">/month</span>
                </div>

                <ul className="space-y-2 mb-6">
                  {tool.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-3 h-3 text-green-500 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <NeonButton
                  href="/contact"
                  variant="secondary"
                  size="sm"
                  className="w-full"
                >
                  Learn More
                </NeonButton>
              </FuturisticCard>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Frequently Asked Questions
              </span>
            </h2>
            <p className="text-xl text-gray-300">
              Everything you need to know about our pricing and services
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <FuturisticCard key={index} className="p-6">
                <h3 className="text-lg font-semibold text-white mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {faq.answer}
                </p>
              </FuturisticCard>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <FuturisticCard className="p-12 bg-gradient-to-r from-purple-900/50 to-pink-900/50 border-purple-400/30">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Ready to Get Started?
              </span>
            </h2>
            <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
              Join thousands of businesses already using our solutions to drive growth and innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <NeonButton
                href="/contact"
                variant="primary"
                size="lg"
                className="group"
              >
                Start Free Trial
              </NeonButton>
              <NeonButton
                href="/contact"
                variant="secondary"
                size="lg"
              >
                Contact Sales
              </NeonButton>
            </div>
          </FuturisticCard>
        </div>
      </section>
    </div>
  );
};

export default PricingPage;