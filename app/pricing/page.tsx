'use client';
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, Star, Zap, Shield, Clock, Users, TrendingUp, ArrowRight, Phone, Mail, MapPin, Award, Globe, Brain, Cloud, Code, BarChart, Target, MessageSquare, Database, Settings, Network, RefreshCw } from 'lucide-react';

export default function PricingPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState('professional');

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const pricingPlans = [
    {
      id: 'starter',
      name: 'Starter',
      description: 'Perfect for small businesses getting started with AI',
      price: '$2,500',
      period: '/month',
      features: [
        'Basic AI automation tools',
        'Up to 5 AI models',
        'Email support',
        'Standard analytics',
        'Basic integrations',
        'Monthly reporting'
      ],
      icon: Zap,
      color: 'from-blue-500 to-cyan-600',
      popular: false
    },
    {
      id: 'professional',
      name: 'Professional',
      description: 'Ideal for growing businesses with advanced AI needs',
      price: '$7,500',
      period: '/month',
      features: [
        'Advanced AI automation suite',
        'Up to 25 AI models',
        'Priority support',
        'Advanced analytics & reporting',
        'Custom integrations',
        'Real-time monitoring',
        'Dedicated account manager',
        'Training & onboarding'
      ],
      icon: Target,
      color: 'from-purple-500 to-pink-600',
      popular: true
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      description: 'Complete AI transformation for large organizations',
      price: '$18,000',
      period: '/month',
      features: [
        'Complete AI platform access',
        'Unlimited AI models',
        '24/7 dedicated support',
        'Custom AI development',
        'White-label solutions',
        'Advanced security & compliance',
        'Dedicated team',
        'SLA guarantee',
        'Custom training programs',
        'Quarterly business reviews'
      ],
      icon: Shield,
      color: 'from-green-500 to-emerald-600',
      popular: false
    }
  ];

  const serviceCategories = [
    {
      title: 'AI Services',
      icon: Brain,
      color: 'text-cyan-400',
      services: [
        { name: 'AI Process Automation', price: '$2,500-15,000/month' },
        { name: 'AI Analytics Dashboard', price: '$3,000-18,000/month' },
        { name: 'AI Customer Support', price: '$1,500-12,000/month' },
        { name: 'AI Content Generation', price: '$2,000-15,000/month' },
        { name: 'AI Cybersecurity', price: '$4,000-25,000/month' },
        { name: 'AI/ML Platform', price: '$3,500-20,000/month' }
      ]
    },
    {
      title: 'IT Services',
      icon: Cloud,
      color: 'text-blue-400',
      services: [
        { name: 'Cloud Infrastructure', price: '$3,500-18,000/month' },
        { name: 'Cybersecurity & Compliance', price: '$4,500-25,000/month' },
        { name: 'DevOps & CI/CD', price: '$2,500-15,000/month' },
        { name: 'Database Management', price: '$2,000-12,000/month' },
        { name: 'Network Solutions', price: '$3,000-16,000/month' },
        { name: 'Managed IT Services', price: '$1,500-6,000/user/month' }
      ]
    },
    {
      title: 'Micro SAAS',
      icon: Zap,
      color: 'text-purple-400',
      services: [
        { name: 'AI Project Manager', price: '$29-199/month' },
        { name: 'AI Social Media Manager', price: '$19-99/month' },
        { name: 'AI Analytics Dashboard', price: '$39-199/month' },
        { name: 'AI Email Marketing', price: '$25-149/month' },
        { name: 'AI Customer Support Bot', price: '$35-199/month' },
        { name: 'AI Content Generator', price: '$29-149/month' }
      ]
    }
  ];

  const stats = [
    { icon: Users, value: '500+', label: 'AI Models Deployed', color: 'text-cyan-400' },
    { icon: TrendingUp, value: '300%', label: 'Average ROI', color: 'text-green-400' },
    { icon: Clock, value: '24/7', label: 'Support Available', color: 'text-blue-400' },
    { icon: Award, value: '99.9%', label: 'Uptime Guarantee', color: 'text-purple-400' }
  ];

  return (
    <>
      <Helmet>
        <title>Pricing - Zion Tech Group | AI & IT Solutions Pricing Plans</title>
        <meta name="description" content="Transparent pricing for AI and IT services. Choose from Starter ($2,500/month), Professional ($7,500/month), or Enterprise ($18,000/month) plans. Get 300% ROI with our solutions." />
        <meta name="keywords" content="AI pricing, IT services pricing, micro saas pricing, AI automation cost, IT infrastructure pricing, business AI solutions" />
        <meta property="og:title" content="Pricing - Zion Tech Group" />
        <meta property="og:description" content="Get transparent pricing for our AI and IT services. Start from $2,500/month and achieve 300% ROI with our comprehensive solutions." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/pricing" />
      </Helmet>

      <div className="min-h-screen bg-slate-900 cyber-grid">
        {/* Hero Section */}
        <section className="relative py-20 lg:py-32 overflow-hidden">
          <div className="container mx-auto px-4">
            <div className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h1 className="text-5xl lg:text-7xl font-bold mb-6">
                <span className="holographic-text cyber-text">Pricing</span>
              </h1>
              <p className="text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Transparent pricing for AI and IT solutions that deliver measurable results. 
                Choose the plan that fits your business needs and start transforming today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+13024640950"
                  className="cyber-button inline-flex items-center px-8 py-4 text-lg"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  (302) 464-0950
                </a>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="cyber-button inline-flex items-center px-8 py-4 text-lg"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Get Quote
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-gradient-to-r from-slate-800/50 to-slate-900/50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className={`w-16 h-16 mx-auto mb-4 ${stat.color} bg-gradient-to-br from-cyan-500/20 to-purple-600/20 rounded-lg flex items-center justify-center`}>
                    <stat.icon className="w-8 h-8" />
                  </div>
                  <div className={`text-3xl font-bold ${stat.color} mb-2`}>{stat.value}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Plans */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                <span className="neon-text">Choose Your Plan</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Flexible pricing plans designed to scale with your business growth and AI adoption.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {pricingPlans.map((plan, index) => (
                <div key={plan.id} className={`quantum-card p-8 ${plan.popular ? 'energy-pulse' : ''}`}>
                  {plan.popular && (
                    <div className="bg-gradient-to-r from-yellow-500 to-orange-500 text-black px-4 py-2 rounded-full text-sm font-bold text-center mb-6">
                      Most Popular
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-br ${plan.color} rounded-lg flex items-center justify-center`}>
                      <plan.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 mb-4">{plan.description}</p>
                    <div className="text-4xl font-bold text-cyan-400 mb-2">
                      {plan.price}
                      <span className="text-lg text-gray-400">{plan.period}</span>
                    </div>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="space-y-3">
                    <a
                      href="tel:+13024640950"
                      className="w-full cyber-button text-center py-3 block"
                    >
                      Get Started
                    </a>
                    <a
                      href="mailto:kleber@ziontechgroup.com"
                      className="w-full bg-slate-800 text-white py-3 px-4 rounded-lg hover:bg-slate-700 transition-colors text-center block"
                    >
                      Learn More
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Service Categories Pricing */}
        <section className="py-20 bg-gradient-to-r from-slate-800/30 to-slate-900/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                <span className="neon-text">Service-Specific Pricing</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Detailed pricing for individual services. Mix and match based on your specific needs.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {serviceCategories.map((category, index) => (
                <div key={index} className="quantum-card p-6">
                  <div className="flex items-center mb-6">
                    <category.icon className={`w-8 h-8 ${category.color} mr-3`} />
                    <h3 className="text-xl font-bold text-white">{category.title}</h3>
                  </div>
                  
                  <ul className="space-y-3">
                    {category.services.map((service, serviceIndex) => (
                      <li key={serviceIndex} className="flex justify-between items-center">
                        <span className="text-gray-300">{service.name}</span>
                        <span className="text-cyan-400 font-semibold">{service.price}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ROI Calculator */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                <span className="neon-text">ROI Calculator</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Calculate your potential return on investment with our AI and IT solutions.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="quantum-card p-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-6">Calculate Your ROI</h3>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-gray-300 mb-2">Current Monthly Revenue</label>
                        <input
                          type="number"
                          placeholder="$100,000"
                          className="w-full px-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-cyan-400"
                        />
                      </div>
                      <div>
                        <label className="block text-gray-300 mb-2">Current Monthly Costs</label>
                        <input
                          type="number"
                          placeholder="$60,000"
                          className="w-full px-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-cyan-400"
                        />
                      </div>
                      <div>
                        <label className="block text-gray-300 mb-2">Selected Plan</label>
                        <select className="w-full px-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-cyan-400">
                          <option>Starter ($2,500/month)</option>
                          <option>Professional ($7,500/month)</option>
                          <option>Enterprise ($18,000/month)</option>
                        </select>
                      </div>
                      <button className="w-full cyber-button py-3">
                        Calculate ROI
                      </button>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-6">Projected Results</h3>
                    <div className="space-y-4">
                      <div className="bg-slate-800/50 p-4 rounded-lg">
                        <div className="text-3xl font-bold text-green-400 mb-2">+300%</div>
                        <div className="text-gray-300">Revenue Increase</div>
                      </div>
                      <div className="bg-slate-800/50 p-4 rounded-lg">
                        <div className="text-3xl font-bold text-blue-400 mb-2">-70%</div>
                        <div className="text-gray-300">Cost Reduction</div>
                      </div>
                      <div className="bg-slate-800/50 p-4 rounded-lg">
                        <div className="text-3xl font-bold text-purple-400 mb-2">+90%</div>
                        <div className="text-gray-300">Efficiency Gains</div>
                      </div>
                      <div className="bg-slate-800/50 p-4 rounded-lg">
                        <div className="text-3xl font-bold text-cyan-400 mb-2">6 months</div>
                        <div className="text-gray-300">Payback Period</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-cyan-600/20 to-purple-600/20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Contact us today to discuss your specific needs and get a customized quote for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                className="cyber-button inline-flex items-center px-8 py-4 text-lg"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call (302) 464-0950
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="cyber-button inline-flex items-center px-8 py-4 text-lg"
              >
                <Mail className="w-5 h-5 mr-2" />
                Email Us
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
