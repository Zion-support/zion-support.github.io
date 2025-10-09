'use client';
import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { CheckCircle, Star, Zap, Shield, Globe, Brain, Cpu, Target, BarChart, MessageSquare, Eye, Sparkles, ArrowRight, TrendingUp, Users, Award, Lock, Database, Cloud, Code, Smartphone, Settings, FileText, Search, Bot, Palette, Camera, Music, Video, Gamepad2, ShoppingCart, CreditCard, Building, Factory, Car, Plane, Ship, Train, Home, Heart, Stethoscope, GraduationCap, Briefcase, Wrench, Hammer, Paintbrush, Scissors, BookOpen, Calculator, Calendar, Clock3, Compass, Navigation as NavIcon, PieChart, TrendingDown, Activity, Zap as Lightning, Target as Crosshair, Shield as Security, Users as People, Star as StarIcon, CheckCircle as Check, ArrowRight as Arrow, Phone as PhoneIcon, Mail as MailIcon, MapPin as Location, Truck, Link, HardDrive, FileCheck } from 'lucide-react';

const PricingPage: React.FC = () => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');

  const microSaasPlans = [
    {
      name: 'Starter',
      price: { monthly: 79, yearly: 790 },
      description: 'Perfect for small businesses getting started with AI',
      features: [
        '1 AI tool of choice',
        'Basic analytics dashboard',
        'Email support',
        'Standard templates',
        'Up to 1,000 operations/month',
        'Basic integrations'
      ],
      limitations: [
        'Limited customization',
        'Standard response times',
        'Basic reporting'
      ],
      popular: false,
      color: 'from-gray-500 to-gray-600'
    },
    {
      name: 'Professional',
      price: { monthly: 149, yearly: 1490 },
      description: 'Ideal for growing businesses with multiple AI needs',
      features: [
        '3 AI tools of choice',
        'Advanced analytics dashboard',
        'Priority email support',
        'Custom templates',
        'Up to 10,000 operations/month',
        'Advanced integrations',
        'API access',
        'Custom branding'
      ],
      limitations: [
        'Limited to 3 tools',
        'Standard SLA'
      ],
      popular: true,
      color: 'from-cyan-500 to-blue-600'
    },
    {
      name: 'Enterprise',
      price: { monthly: 299, yearly: 2990 },
      description: 'Complete AI suite for large organizations',
      features: [
        'Unlimited AI tools',
        'Custom analytics dashboard',
        '24/7 phone & email support',
        'Fully custom solutions',
        'Unlimited operations',
        'Enterprise integrations',
        'Full API access',
        'White-label options',
        'Dedicated account manager',
        'Custom SLA'
      ],
      limitations: [],
      popular: false,
      color: 'from-purple-500 to-pink-600'
    }
  ];

  const aiServicePlans = [
    {
      name: 'AI Development',
      price: { monthly: 1000, yearly: 10000 },
      description: 'Custom AI model development and deployment',
      features: [
        'Custom ML model development',
        'Data preprocessing & analysis',
        'Model training & optimization',
        'API development & deployment',
        'Performance monitoring',
        'Monthly model updates',
        'Technical documentation',
        'Integration support'
      ],
      color: 'from-purple-500 to-indigo-600'
    },
    {
      name: 'AI Consulting',
      price: { monthly: 1500, yearly: 15000 },
      description: 'Strategic AI consulting and implementation',
      features: [
        'AI strategy development',
        'Technology assessment',
        'Implementation planning',
        'Change management',
        'Training & workshops',
        'Ongoing optimization',
        'ROI analysis',
        'Executive reporting'
      ],
      color: 'from-green-500 to-teal-600'
    },
    {
      name: 'AI Infrastructure',
      price: { monthly: 2000, yearly: 20000 },
      description: 'Complete AI infrastructure setup and management',
      features: [
        'GPU cluster setup',
        'ML platform deployment',
        'Data pipeline architecture',
        'Model serving infrastructure',
        'Monitoring & alerting',
        'Security & compliance',
        'Scalability planning',
        '24/7 infrastructure support'
      ],
      color: 'from-orange-500 to-red-600'
    }
  ];

  const itServicePlans = [
    {
      name: 'Basic IT Support',
      price: { monthly: 800, yearly: 8000 },
      description: 'Essential IT support and maintenance',
      features: [
        '24/7 helpdesk support',
        'System monitoring',
        'Software updates',
        'Backup management',
        'Security patches',
        'Basic troubleshooting',
        'Email support',
        'Monthly reports'
      ],
      color: 'from-blue-500 to-cyan-600'
    },
    {
      name: 'Managed IT Services',
      price: { monthly: 1500, yearly: 15000 },
      description: 'Comprehensive IT management and support',
      features: [
        'Proactive monitoring',
        'Preventive maintenance',
        'Security management',
        'Cloud migration support',
        'Network optimization',
        'Disaster recovery',
        'Compliance management',
        'Dedicated account manager'
      ],
      color: 'from-indigo-500 to-purple-600'
    },
    {
      name: 'Enterprise IT',
      price: { monthly: 3000, yearly: 30000 },
      description: 'Full-scale enterprise IT solutions',
      features: [
        'Complete IT transformation',
        'Custom infrastructure design',
        'Advanced security solutions',
        'Multi-cloud strategy',
        'DevOps implementation',
        'AI/ML infrastructure',
        'Compliance & governance',
        '24/7 dedicated support team'
      ],
      color: 'from-red-500 to-pink-600'
    }
  ];

  const addOns = [
    {
      name: 'Additional AI Tools',
      price: { monthly: 50, yearly: 500 },
      description: 'Add more AI tools to your plan',
      features: ['One additional AI tool', 'Same features as base plan']
    },
    {
      name: 'Priority Support',
      price: { monthly: 100, yearly: 1000 },
      description: 'Faster response times and dedicated support',
      features: ['2-hour response time', 'Phone support', 'Dedicated support agent']
    },
    {
      name: 'Custom Development',
      price: { monthly: 200, yearly: 2000 },
      description: 'Custom features and integrations',
      features: ['Custom development', 'API integrations', 'White-label options']
    },
    {
      name: 'Training & Workshops',
      price: { monthly: 150, yearly: 1500 },
      description: 'Team training and skill development',
      features: ['Monthly training sessions', 'Workshop materials', 'Certification programs']
    }
  ];

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0
    }).format(price);
  };

  const getDiscount = () => {
    return billingCycle === 'yearly' ? 17 : 0;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16 pt-24">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 neon-text">
            Pricing Plans
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Choose the perfect plan for your business needs. All plans include 24/7 support, 
            regular updates, and comprehensive training.
          </p>
          
          {/* Billing Toggle */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <span className={`text-lg ${billingCycle === 'monthly' ? 'text-white' : 'text-gray-400'}`}>
              Monthly
            </span>
            <button
              onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')}
              className="relative inline-flex h-6 w-11 items-center rounded-full bg-gray-600 transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-slate-900"
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
              <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                Save 17%
              </span>
            )}
          </div>
        </section>

        {/* Micro SAAS Plans */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-4 text-center neon-text">
            Micro SAAS Solutions
          </h2>
          <p className="text-lg text-gray-300 text-center mb-12 max-w-3xl mx-auto">
            Affordable AI-powered tools for modern businesses
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {microSaasPlans.map((plan, index) => (
              <div key={index} className={`cyber-card p-8 relative ${plan.popular ? 'ring-2 ring-cyan-400' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-cyan-400 text-slate-900 px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </div>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-4">{plan.description}</p>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-white">
                      {formatPrice(plan.price[billingCycle])}
                    </span>
                    <span className="text-gray-400">/{billingCycle === 'monthly' ? 'month' : 'year'}</span>
                  </div>
                  {billingCycle === 'yearly' && (
                    <div className="text-green-400 text-sm font-semibold">
                      Save {formatPrice(plan.price.monthly * 12 - plan.price.yearly)}/year
                    </div>
                  )}
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-3">Features</h4>
                  <ul className="space-y-2">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {plan.limitations.length > 0 && (
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Limitations</h4>
                    <ul className="space-y-2">
                      {plan.limitations.map((limitation, limitationIndex) => (
                        <li key={limitationIndex} className="flex items-center text-gray-400">
                          <span className="w-4 h-4 mr-3 flex-shrink-0">•</span>
                          {limitation}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <a
                  href="/contact"
                  className={`w-full py-3 px-6 rounded-lg font-semibold text-center transition-all duration-300 hover:scale-105 bg-gradient-to-r ${plan.color} text-white`}
                >
                  Get Started
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* AI Services Plans */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-4 text-center neon-text">
            AI Services
          </h2>
          <p className="text-lg text-gray-300 text-center mb-12 max-w-3xl mx-auto">
            Advanced artificial intelligence solutions for enterprise applications
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {aiServicePlans.map((plan, index) => (
              <div key={index} className="cyber-card p-8">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-4">{plan.description}</p>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-white">
                      {formatPrice(plan.price[billingCycle])}
                    </span>
                    <span className="text-gray-400">/{billingCycle === 'monthly' ? 'month' : 'year'}</span>
                  </div>
                </div>

                <div className="mb-6">
                  <ul className="space-y-2">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href="/contact"
                  className={`w-full py-3 px-6 rounded-lg font-semibold text-center transition-all duration-300 hover:scale-105 bg-gradient-to-r ${plan.color} text-white`}
                >
                  Contact Sales
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* IT Services Plans */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-4 text-center neon-text">
            IT Services
          </h2>
          <p className="text-lg text-gray-300 text-center mb-12 max-w-3xl mx-auto">
            Comprehensive IT solutions for modern enterprise infrastructure
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {itServicePlans.map((plan, index) => (
              <div key={index} className="cyber-card p-8">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-4">{plan.description}</p>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-white">
                      {formatPrice(plan.price[billingCycle])}
                    </span>
                    <span className="text-gray-400">/{billingCycle === 'monthly' ? 'month' : 'year'}</span>
                  </div>
                </div>

                <div className="mb-6">
                  <ul className="space-y-2">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href="/contact"
                  className={`w-full py-3 px-6 rounded-lg font-semibold text-center transition-all duration-300 hover:scale-105 bg-gradient-to-r ${plan.color} text-white`}
                >
                  Contact Sales
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Add-ons Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-4 text-center neon-text">
            Add-ons & Extensions
          </h2>
          <p className="text-lg text-gray-300 text-center mb-12 max-w-3xl mx-auto">
            Enhance your plan with additional features and services
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {addOns.map((addon, index) => (
              <div key={index} className="cyber-card p-6">
                <h3 className="text-xl font-bold text-white mb-2">{addon.name}</h3>
                <p className="text-gray-300 mb-4 text-sm">{addon.description}</p>
                <div className="mb-4">
                  <span className="text-2xl font-bold text-cyan-400">
                    {formatPrice(addon.price[billingCycle])}
                  </span>
                  <span className="text-gray-400">/{billingCycle === 'monthly' ? 'month' : 'year'}</span>
                </div>
                <ul className="space-y-1 mb-4">
                  {addon.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href="/contact"
                  className="w-full py-2 px-4 rounded-lg font-semibold text-center transition-all duration-300 hover:scale-105 bg-cyan-400 text-slate-900"
                >
                  Add to Plan
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">
            Frequently Asked Questions
          </h2>
          
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="cyber-card p-6">
              <h3 className="text-xl font-bold text-white mb-3">Can I change my plan anytime?</h3>
              <p className="text-gray-300">Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate any billing differences.</p>
            </div>
            
            <div className="cyber-card p-6">
              <h3 className="text-xl font-bold text-white mb-3">What's included in support?</h3>
              <p className="text-gray-300">All plans include email support. Professional and Enterprise plans include priority support with faster response times. Enterprise plans include 24/7 phone support.</p>
            </div>
            
            <div className="cyber-card p-6">
              <h3 className="text-xl font-bold text-white mb-3">Do you offer custom pricing?</h3>
              <p className="text-gray-300">Yes, we offer custom pricing for large enterprises with specific requirements. Contact our sales team to discuss your needs.</p>
            </div>
            
            <div className="cyber-card p-6">
              <h3 className="text-xl font-bold text-white mb-3">Is there a free trial?</h3>
              <p className="text-gray-300">We offer a 14-day free trial for all Micro SAAS plans. AI and IT services include a consultation and proof-of-concept phase.</p>
            </div>
            
            <div className="cyber-card p-6">
              <h3 className="text-xl font-bold text-white mb-3">What payment methods do you accept?</h3>
              <p className="text-gray-300">We accept all major credit cards, bank transfers, and can arrange enterprise billing for large organizations.</p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <div className="cyber-card p-12 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-4 neon-text">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Choose the perfect plan for your business or contact us for a custom solution. 
              Our team is ready to help you succeed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact" 
                className="cyber-button px-8 py-4 text-lg font-semibold"
              >
                Contact Sales
              </a>
              <a 
                href="tel:+13024640950" 
                className="flex items-center justify-center gap-2 border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                <PhoneIcon className="w-5 h-5" />
                +1 302 464 0950
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default PricingPage;