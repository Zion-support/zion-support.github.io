'use client';

import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  CheckCircle, 
  Star, 
  Phone, 
  Mail, 
  MapPin, 
  Zap, 
  Shield, 
  Users, 
  BarChart, 
  Brain, 
  Cloud, 
  Code, 
  Target, 
  TrendingUp, 
  Award, 
  Clock, 
  ArrowRight,
  Download,
  Play,
  DollarSign,
  Calendar,
  MessageSquare,
  Settings,
  Database,
  Globe,
  Lock,
  Smartphone,
  FileText,
  Palette,
  ShoppingCart,
  CreditCard,
  Video,
  Music
} from 'lucide-react';

const PricingPage: React.FC = () => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const pricingPlans = [
    {
      id: 'ai-services',
      name: 'AI Services',
      description: 'Comprehensive AI solutions for business transformation',
      icon: Brain,
      color: 'from-purple-500 to-pink-500',
      plans: [
        {
          name: 'Starter',
          price: { monthly: 299, yearly: 2990 },
          description: 'Perfect for small businesses',
          features: [
            'AI CRM with basic features',
            'Email marketing automation',
            'Basic analytics dashboard',
            'Email support',
            '5 user accounts',
            '10GB storage'
          ],
          popular: false
        },
        {
          name: 'Professional',
          price: { monthly: 599, yearly: 5990 },
          description: 'Ideal for growing companies',
          features: [
            'Full AI CRM suite',
            'Advanced analytics & BI',
            'AI content generation',
            'Priority support',
            '25 user accounts',
            '100GB storage',
            'API access',
            'Custom integrations'
          ],
          popular: true
        },
        {
          name: 'Enterprise',
          price: { monthly: 1299, yearly: 12990 },
          description: 'For large organizations',
          features: [
            'Complete AI platform',
            'Custom AI development',
            'Dedicated support team',
            'Unlimited users',
            'Unlimited storage',
            'White-label options',
            'SLA guarantee',
            'Custom training'
          ],
          popular: false
        }
      ]
    },
    {
      id: 'it-services',
      name: 'IT Services',
      description: 'Complete IT infrastructure and support solutions',
      icon: Cloud,
      color: 'from-blue-500 to-cyan-500',
      plans: [
        {
          name: 'Basic',
          price: { monthly: 199, yearly: 1990 },
          description: 'Essential IT support',
          features: [
            '24/7 helpdesk support',
            'Basic monitoring',
            'Email support',
            '5 devices',
            'Monthly reports',
            'Standard SLA'
          ],
          popular: false
        },
        {
          name: 'Professional',
          price: { monthly: 499, yearly: 4990 },
          description: 'Comprehensive IT management',
          features: [
            '24/7 priority support',
            'Advanced monitoring',
            'Cloud infrastructure',
            '25 devices',
            'Weekly reports',
            '99.9% uptime SLA',
            'Security scanning',
            'Backup solutions'
          ],
          popular: true
        },
        {
          name: 'Enterprise',
          price: { monthly: 999, yearly: 9990 },
          description: 'Full IT transformation',
          features: [
            'Dedicated IT team',
            'Custom infrastructure',
            'Unlimited devices',
            'Real-time monitoring',
            'Daily reports',
            '99.99% uptime SLA',
            'Advanced security',
            'Disaster recovery'
          ],
          popular: false
        }
      ]
    },
    {
      id: 'micro-saas',
      name: 'Micro SAAS Tools',
      description: 'AI-powered productivity and business tools',
      icon: Zap,
      color: 'from-green-500 to-emerald-500',
      plans: [
        {
          name: 'Individual',
          price: { monthly: 29, yearly: 290 },
          description: 'For solo entrepreneurs',
          features: [
            '5 micro SAAS tools',
            'Basic AI features',
            'Email support',
            '1 user account',
            '5GB storage',
            'Standard templates'
          ],
          popular: false
        },
        {
          name: 'Team',
          price: { monthly: 79, yearly: 790 },
          description: 'For small teams',
          features: [
            '15 micro SAAS tools',
            'Advanced AI features',
            'Priority support',
            '10 user accounts',
            '50GB storage',
            'Custom templates',
            'Team collaboration',
            'API access'
          ],
          popular: true
        },
        {
          name: 'Business',
          price: { monthly: 199, yearly: 1990 },
          description: 'For growing businesses',
          features: [
            'Unlimited tools',
            'Full AI capabilities',
            'Dedicated support',
            'Unlimited users',
            'Unlimited storage',
            'White-label options',
            'Custom development',
            'SLA guarantee'
          ],
          popular: false
        }
      ]
    }
  ];

  const addOnServices = [
    {
      name: 'AI Custom Development',
      description: 'Custom AI solutions tailored to your business needs',
      price: { monthly: 999, yearly: 9990 },
      icon: Code,
      features: ['Custom AI models', 'Integration support', 'Training and documentation']
    },
    {
      name: 'Cybersecurity Suite',
      description: 'Advanced security solutions for your business',
      price: { monthly: 299, yearly: 2990 },
      icon: Shield,
      features: ['Threat detection', 'Security monitoring', 'Compliance management']
    },
    {
      name: 'Cloud Migration',
      description: 'Seamless migration to cloud platforms',
      price: { monthly: 499, yearly: 4990 },
      icon: Cloud,
      features: ['Migration planning', 'Data transfer', 'Post-migration support']
    },
    {
      name: 'Training & Certification',
      description: 'Comprehensive training for your team',
      price: { monthly: 199, yearly: 1990 },
      icon: Users,
      features: ['Custom training programs', 'Certification preparation', 'Ongoing support']
    }
  ];

  const categories = [
    { id: 'all', name: 'All Services', icon: Target },
    { id: 'ai-services', name: 'AI Services', icon: Brain },
    { id: 'it-services', name: 'IT Services', icon: Cloud },
    { id: 'micro-saas', name: 'Micro SAAS', icon: Zap }
  ];

  const filteredPlans = selectedCategory === 'all' 
    ? pricingPlans 
    : pricingPlans.filter(plan => plan.id === selectedCategory);

  return (
    <>
      <Helmet>
        <title>Pricing - Zion Tech Group | Transparent AI & IT Service Pricing</title>
        <meta name="description" content="Transparent pricing for AI services, IT solutions, and micro SAAS tools. Choose the perfect plan for your business needs with flexible billing options." />
        <meta name="keywords" content="pricing, AI services pricing, IT services cost, micro SAAS pricing, business solutions" />
        <link rel="canonical" href="https://ziontechgroup.com/pricing" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid">
        {/* Hero Section */}
        <div className="relative pt-20 pb-16">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 cyber-text neon-pulse">
                Transparent Pricing
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Choose the perfect plan for your business needs. All our services come with 
                flexible billing options, no hidden fees, and a 30-day money-back guarantee.
              </p>
              
              {/* Billing Toggle */}
              <div className="flex items-center justify-center space-x-4 mb-12">
                <span className={`text-lg ${billingCycle === 'monthly' ? 'text-white' : 'text-gray-400'}`}>
                  Monthly
                </span>
                <button
                  onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    billingCycle === 'yearly' ? 'bg-cyan-500' : 'bg-gray-600'
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      billingCycle === 'yearly' ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
                <span className={`text-lg ${billingCycle === 'yearly' ? 'text-white' : 'text-gray-400'}`}>
                  Yearly
                </span>
                {billingCycle === 'yearly' && (
                  <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm font-medium">
                    Save 20%
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Category Filter */}
        <div className="container mx-auto px-4 mb-12">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-cyan-500 text-white'
                    : 'bg-slate-800/50 text-gray-300 hover:bg-slate-700'
                }`}
              >
                <category.icon className="w-5 h-5" />
                <span>{category.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Pricing Plans */}
        <div className="container mx-auto px-4 mb-16">
          {filteredPlans.map((service) => (
            <div key={service.id} className="mb-16">
              <div className="text-center mb-12">
                <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center mx-auto mb-4`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-white mb-4 neon-text">{service.name}</h2>
                <p className="text-gray-300 text-lg">{service.description}</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {service.plans.map((plan, index) => (
                  <div
                    key={index}
                    className={`bg-slate-800/50 backdrop-blur-sm rounded-lg p-8 cyber-card hover:bg-slate-800/70 transition-all duration-300 relative ${
                      plan.popular ? 'ring-2 ring-cyan-400 scale-105' : ''
                    }`}
                  >
                    {plan.popular && (
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                        <span className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                          Most Popular
                        </span>
                      </div>
                    )}
                    
                    <div className="text-center mb-6">
                      <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                      <p className="text-gray-400 mb-4">{plan.description}</p>
                      <div className="mb-4">
                        <span className="text-4xl font-bold text-cyan-400">
                          ${billingCycle === 'monthly' ? plan.price.monthly : plan.price.yearly}
                        </span>
                        <span className="text-gray-400 text-lg">
                          /{billingCycle === 'monthly' ? 'month' : 'year'}
                        </span>
                      </div>
                      {billingCycle === 'yearly' && (
                        <p className="text-green-400 text-sm">
                          Save ${(plan.price.monthly * 12) - plan.price.yearly} per year
                        </p>
                      )}
                    </div>
                    
                    <ul className="space-y-3 mb-8">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center space-x-3">
                          <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                          <span className="text-gray-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <button className={`w-full py-3 px-6 rounded-lg font-medium transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-600 hover:to-blue-700'
                        : 'border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white'
                    }`}>
                      Get Started
                    </button>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Add-on Services */}
        <div className="container mx-auto px-4 mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4 neon-text">Add-on Services</h2>
            <p className="text-gray-300 text-lg">Enhance your plan with additional services</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {addOnServices.map((service, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 cyber-card hover:bg-slate-800/70 transition-all duration-300">
                <div className="text-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{service.name}</h3>
                  <p className="text-gray-400 text-sm mb-4">{service.description}</p>
                  <div className="text-2xl font-bold text-cyan-400 mb-4">
                    ${billingCycle === 'monthly' ? service.price.monthly : service.price.yearly}
                    <span className="text-gray-400 text-sm">/{billingCycle === 'monthly' ? 'month' : 'year'}</span>
                  </div>
                </div>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button className="w-full py-2 px-4 border border-cyan-400 text-cyan-400 rounded-lg hover:bg-cyan-400 hover:text-white transition-all duration-300">
                  Add to Plan
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="container mx-auto px-4 mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4 neon-text">Frequently Asked Questions</h2>
            <p className="text-gray-300 text-lg">Everything you need to know about our pricing</p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 cyber-card">
                <h3 className="text-xl font-bold text-white mb-3">Can I change my plan anytime?</h3>
                <p className="text-gray-300">
                  Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, 
                  and we'll prorate any billing differences.
                </p>
              </div>
              
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 cyber-card">
                <h3 className="text-xl font-bold text-white mb-3">Is there a free trial?</h3>
                <p className="text-gray-300">
                  Yes, we offer a 30-day free trial for all our services. No credit card required, 
                  and you can cancel anytime during the trial period.
                </p>
              </div>
              
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 cyber-card">
                <h3 className="text-xl font-bold text-white mb-3">What payment methods do you accept?</h3>
                <p className="text-gray-300">
                  We accept all major credit cards, PayPal, and bank transfers. Enterprise customers 
                  can also pay via invoice.
                </p>
              </div>
              
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 cyber-card">
                <h3 className="text-xl font-bold text-white mb-3">Do you offer custom pricing?</h3>
                <p className="text-gray-300">
                  Yes, we offer custom pricing for enterprise customers with specific requirements. 
                  Contact our sales team for a personalized quote.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="container mx-auto px-4 mb-16">
          <div className="bg-gradient-to-r from-cyan-600/20 to-purple-600/20 rounded-lg p-8 cyber-card text-center">
            <h2 className="text-3xl font-bold text-white mb-4 neon-text">Ready to Get Started?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Choose your plan and start transforming your business today
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center space-x-2">
                <Play className="w-5 h-5" />
                <span>Start Free Trial</span>
              </button>
              <button className="border border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg hover:bg-cyan-400 hover:text-white transition-all duration-300 flex items-center justify-center space-x-2">
                <Phone className="w-5 h-5" />
                <span>Contact Sales</span>
              </button>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="container mx-auto px-4 mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Call Us</h3>
              <p className="text-cyan-400 font-medium">+1 (302) 464-0950</p>
              <p className="text-gray-400 text-sm">24/7 Support Available</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Email Us</h3>
              <p className="text-cyan-400 font-medium">kleber@ziontechgroup.com</p>
              <p className="text-gray-400 text-sm">Quick Response Guaranteed</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Visit Us</h3>
              <p className="text-cyan-400 font-medium">Middletown, DE</p>
              <p className="text-gray-400 text-sm">364 E Main St STE 1008</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PricingPage;