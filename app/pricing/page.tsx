'use client';

import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, Star, Phone, Mail, MapPin, Zap, Shield, Clock, Users, TrendingUp, ArrowRight, Brain, Cloud, Code, Target, BarChart, MessageSquare, FileText, Headphones, DollarSign, Award, Lock, Globe, Sparkles } from 'lucide-react';

interface PricingTier {
  id: string;
  name: string;
  description: string;
  price: string;
  period: string;
  features: string[];
  popular: boolean;
  icon: React.ComponentType<any>;
  color: string;
  bgColor: string;
  cta: string;
  services: string[];
  support: string[];
  sla: string;
  uptime: string;
}

const PricingCard: React.FC<{ tier: PricingTier; onSelect: (tier: PricingTier) => void }> = ({ tier, onSelect }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`quantum-card p-8 cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-2xl relative ${
        tier.popular ? 'border-2 border-cyan-400' : ''
      } ${isHovered ? 'energy-pulse' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => onSelect(tier)}
    >
      {tier.popular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-4 py-1 rounded-full text-sm font-bold">
            MOST POPULAR
          </span>
        </div>
      )}

      <div className="text-center mb-6">
        <div className={`w-16 h-16 ${tier.bgColor} rounded-lg flex items-center justify-center mx-auto mb-4`}>
          <tier.icon className={`w-8 h-8 ${tier.color}`} />
        </div>
        <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
        <p className="text-gray-300 text-sm mb-4">{tier.description}</p>
        <div className="text-4xl font-bold text-cyan-400 mb-2">{tier.price}</div>
        <div className="text-gray-400 text-sm">{tier.period}</div>
      </div>

      <div className="space-y-3 mb-8">
        {tier.features.map((feature, index) => (
          <div key={index} className="flex items-center space-x-2">
            <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
            <span className="text-gray-300 text-sm">{feature}</span>
          </div>
        ))}
      </div>

      <button className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${
        tier.popular 
          ? 'cyber-button' 
          : 'bg-slate-800 border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black'
      }`}>
        {tier.cta}
      </button>
    </div>
  );
};

export default function PricingPage() {
  const [selectedTier, setSelectedTier] = useState<PricingTier | null>(null);
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'yearly'>('monthly');

  const pricingTiers: PricingTier[] = [
    {
      id: 'micro-saas',
      name: 'Micro SAAS Solutions',
      description: 'Perfect for small businesses and startups looking to automate specific processes',
      price: billingPeriod === 'yearly' ? '$99' : '$149',
      period: billingPeriod === 'yearly' ? '/month (billed yearly)' : '/month',
      features: [
        'Up to 5 AI services',
        'Basic analytics dashboard',
        'Email support',
        'Standard integrations',
        '99.5% uptime guarantee',
        'Basic customization'
      ],
      popular: false,
      icon: Zap,
      color: 'text-yellow-400',
      bgColor: 'bg-yellow-500/20',
      cta: 'Start Free Trial',
      services: ['AI Project Manager', 'AI Email Marketing', 'AI Content Generator', 'AI SEO Optimizer'],
      support: ['Email support', 'Documentation', 'Community forum'],
      sla: '99.5% uptime',
      uptime: '99.5%'
    },
    {
      id: 'ai-services',
      name: 'AI Services Suite',
      description: 'Comprehensive AI solutions for growing businesses with advanced features',
      price: billingPeriod === 'yearly' ? '$299' : '$399',
      period: billingPeriod === 'yearly' ? '/month (billed yearly)' : '/month',
      features: [
        'Up to 15 AI services',
        'Advanced analytics & reporting',
        'Priority support',
        'Custom integrations',
        '99.9% uptime guarantee',
        'Advanced customization',
        'API access',
        'White-label options'
      ],
      popular: true,
      icon: Brain,
      color: 'text-purple-400',
      bgColor: 'bg-purple-500/20',
      cta: 'Get Started',
      services: ['AI Business Intelligence', 'AI Marketing Automation', 'AI Customer Support', 'AI Predictive Analytics'],
      support: ['Priority support', 'Phone support', 'Dedicated account manager', 'Custom training'],
      sla: '99.9% uptime',
      uptime: '99.9%'
    },
    {
      id: 'it-services',
      name: 'IT Services Platform',
      description: 'Enterprise-grade IT infrastructure and support for large organizations',
      price: billingPeriod === 'yearly' ? '$599' : '$799',
      period: billingPeriod === 'yearly' ? '/month (billed yearly)' : '/month',
      features: [
        'Unlimited IT services',
        '24/7 monitoring & support',
        'Dedicated support team',
        'Custom infrastructure',
        '99.99% uptime guarantee',
        'Full customization',
        'Advanced security',
        'Compliance management'
      ],
      popular: false,
      icon: Cloud,
      color: 'text-blue-400',
      bgColor: 'bg-blue-500/20',
      cta: 'Contact Sales',
      services: ['Cloud Infrastructure', 'Cybersecurity Suite', 'DevOps Automation', 'Database Management'],
      support: ['24/7 support', 'Dedicated team', 'On-site support', 'Emergency response'],
      sla: '99.99% uptime',
      uptime: '99.99%'
    },
    {
      id: 'enterprise',
      name: 'Enterprise Solutions',
      description: 'Complete digital transformation with custom AI and IT solutions',
      price: 'Custom',
      period: 'Contact for pricing',
      features: [
        'Unlimited everything',
        'Custom AI development',
        'Dedicated engineering team',
        'On-premise deployment',
        '99.99% uptime guarantee',
        'Full customization',
        'Advanced security',
        'Compliance & certification',
        'Training & consulting'
      ],
      popular: false,
      icon: Award,
      color: 'text-gold-400',
      bgColor: 'bg-yellow-500/20',
      cta: 'Schedule Consultation',
      services: ['Custom AI Development', 'Enterprise Infrastructure', 'Digital Transformation', 'Compliance Solutions'],
      support: ['Dedicated team', '24/7 support', 'On-site support', 'Custom training'],
      sla: '99.99% uptime',
      uptime: '99.99%'
    }
  ];

  const handleTierSelect = (tier: PricingTier) => {
    setSelectedTier(tier);
  };

  const closeModal = () => {
    setSelectedTier(null);
  };

  const features = [
    {
      category: 'AI Services',
      icon: Brain,
      color: 'text-purple-400',
      services: [
        'AI Business Intelligence Suite',
        'AI Marketing Automation',
        'AI Customer Support',
        'AI Predictive Analytics',
        'AI Content Generation',
        'AI Data Visualization'
      ]
    },
    {
      category: 'IT Services',
      icon: Cloud,
      color: 'text-blue-400',
      services: [
        'Cloud Infrastructure Solutions',
        'Cybersecurity Suite',
        'DevOps & CI/CD Automation',
        'Database Management',
        'Network Solutions',
        'Managed IT Support'
      ]
    },
    {
      category: 'Micro SAAS',
      icon: Zap,
      color: 'text-yellow-400',
      services: [
        'AI Project Manager',
        'AI Email Marketing',
        'AI Social Media Manager',
        'AI Analytics Dashboard',
        'AI Customer Support Bot',
        'AI Content Generator'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid">
      <Helmet>
        <title>Pricing - Zion Tech Group</title>
        <meta name="description" content="Transparent pricing for our AI and IT services. Choose the perfect plan for your business needs with flexible options and guaranteed ROI." />
        <meta name="keywords" content="pricing, ai services pricing, it services pricing, micro saas pricing, enterprise solutions" />
      </Helmet>

      {/* Hero Section */}
      <div className="relative py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 holographic-text cyber-text">
            Transparent Pricing
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Choose the perfect plan for your business needs. All plans include our 300% ROI guarantee and 99.9% uptime commitment.
          </p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center space-x-4 mb-12">
            <span className={`text-lg ${billingPeriod === 'monthly' ? 'text-white' : 'text-gray-400'}`}>
              Monthly
            </span>
            <button
              onClick={() => setBillingPeriod(billingPeriod === 'monthly' ? 'yearly' : 'monthly')}
              className="relative inline-flex h-6 w-11 items-center rounded-full bg-slate-700 transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-slate-900"
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-cyan-400 transition-transform ${
                  billingPeriod === 'yearly' ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
            <span className={`text-lg ${billingPeriod === 'yearly' ? 'text-white' : 'text-gray-400'}`}>
              Yearly
            </span>
            {billingPeriod === 'yearly' && (
              <span className="bg-green-500 text-black px-2 py-1 rounded text-sm font-bold">
                Save 20%
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="container mx-auto px-4 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pricingTiers.map((tier) => (
            <PricingCard
              key={tier.id}
              tier={tier}
              onSelect={handleTierSelect}
            />
          ))}
        </div>
      </div>

      {/* Features Comparison */}
      <div className="relative py-20 px-4 neural-network-bg">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold text-center mb-12 neon-text cyber-text">
            What's Included
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="quantum-card p-8">
                <div className="flex items-center space-x-3 mb-6">
                  <feature.icon className={`w-8 h-8 ${feature.color}`} />
                  <h3 className="text-2xl font-bold text-white">{feature.category}</h3>
                </div>
                <ul className="space-y-3">
                  {feature.services.map((service, serviceIndex) => (
                    <li key={serviceIndex} className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                      <span className="text-gray-300">{service}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ROI Guarantee */}
      <div className="relative py-20 px-4 particle-field">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 neon-text cyber-text">
            Our Guarantees
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="quantum-card p-8">
              <div className="text-6xl mb-4">💰</div>
              <h3 className="text-2xl font-bold text-white mb-4">300% ROI Guarantee</h3>
              <p className="text-gray-300">
                We guarantee a minimum 300% return on investment within 6 months or we'll refund your investment.
              </p>
            </div>
            
            <div className="quantum-card p-8">
              <div className="text-6xl mb-4">⚡</div>
              <h3 className="text-2xl font-bold text-white mb-4">99.9% Uptime</h3>
              <p className="text-gray-300">
                Our services are backed by a 99.9% uptime guarantee with 24/7 monitoring and support.
              </p>
            </div>
            
            <div className="quantum-card p-8">
              <div className="text-6xl mb-4">🛡️</div>
              <h3 className="text-2xl font-bold text-white mb-4">Enterprise Security</h3>
              <p className="text-gray-300">
                Bank-level security with SOC 2, ISO 27001, and HIPAA compliance for all our services.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Service Detail Modal */}
      {selectedTier && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-slate-900 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-8">
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center space-x-4">
                  <div className={`p-4 rounded-lg ${selectedTier.bgColor}`}>
                    <selectedTier.icon className={`w-12 h-12 ${selectedTier.color}`} />
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-white neon-text">{selectedTier.name}</h2>
                    <p className="text-gray-300 text-lg">{selectedTier.description}</p>
                  </div>
                </div>
                <button
                  onClick={closeModal}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <X className="w-8 h-8" />
                </button>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-white mb-4">Included Services</h3>
                  <div className="space-y-2 mb-6">
                    {selectedTier.services.map((service, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                        <span className="text-gray-300">{service}</span>
                      </div>
                    ))}
                  </div>

                  <h3 className="text-xl font-bold text-white mb-4">Support Included</h3>
                  <div className="space-y-2 mb-6">
                    {selectedTier.support.map((support, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                        <span className="text-gray-300">{support}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white mb-4">Pricing Details</h3>
                  <div className="space-y-4 mb-6">
                    <div className="bg-slate-800/50 rounded-lg p-4">
                      <div className="text-3xl font-bold text-cyan-400 mb-2">{selectedTier.price}</div>
                      <div className="text-gray-300">{selectedTier.period}</div>
                    </div>
                    <div className="bg-slate-800/50 rounded-lg p-4">
                      <div className="text-gray-300 mb-1">SLA Guarantee</div>
                      <div className="text-lg font-semibold text-green-400">{selectedTier.sla}</div>
                    </div>
                    <div className="bg-slate-800/50 rounded-lg p-4">
                      <div className="text-gray-300 mb-1">Uptime</div>
                      <div className="text-lg font-semibold text-cyan-400">{selectedTier.uptime}</div>
                    </div>
                  </div>

                  <div className="flex space-x-4">
                    <button className="cyber-button flex-1 py-3">
                      {selectedTier.cta}
                    </button>
                    <button className="px-6 py-3 border border-cyan-400 text-cyan-400 rounded-lg hover:bg-cyan-400 hover:text-black transition-colors">
                      View Demo
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Contact Section */}
      <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-4 neon-text">Ready to Get Started?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Contact our team to discuss your specific needs and find the perfect solution for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="cyber-button inline-flex items-center justify-center px-8 py-4"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call (302) 464-0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="px-8 py-4 border border-cyan-400 text-cyan-400 rounded-lg hover:bg-cyan-400 hover:text-black transition-colors inline-flex items-center justify-center"
            >
              <Mail className="w-5 h-5 mr-2" />
              Email Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}