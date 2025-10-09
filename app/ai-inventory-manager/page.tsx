'use client';
import React from 'react';
import { SEOOptimizer } from '../components/SEOOptimizer';
import { PerformanceOptimizer } from '../components/PerformanceOptimizer';
import { AccessibilityEnhancer } from '../components/AccessibilityEnhancer';
import { SecurityEnhancer } from '../components/SecurityEnhancer';
import { Analytics } from '../components/Analytics';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { CheckCircle, Star, Zap, Brain, Package, TrendingUp, BarChart, AlertTriangle, Clock, Globe, Shield, ArrowRight, Phone, Mail, MapPin, Target, DollarSign } from 'lucide-react';

const AIInventoryManagerPage: React.FC = () => {
  const features = [
    'AI-powered demand forecasting',
    'Real-time inventory tracking',
    'Automated reorder points',
    'Multi-location inventory sync',
    'Supplier performance analytics',
    'Dead stock identification',
    'Seasonal trend analysis',
    'Cost optimization algorithms',
    'Integration with 50+ platforms',
    'Mobile inventory management'
  ];

  const benefits = [
    '30% reduction in inventory costs',
    '99% stock accuracy rate',
    'Zero stockouts with AI prediction',
    '40% faster order fulfillment',
    '25% improvement in cash flow',
    '90% reduction in manual counting',
    'Real-time visibility across locations',
    'Automated supplier negotiations',
    'Predictive maintenance alerts',
    'Compliance & audit automation'
  ];

  const pricingTiers = [
    {
      name: 'Starter',
      price: '$149',
      period: '/month',
      description: 'Perfect for small businesses with basic inventory needs',
      features: [
        'Up to 1,000 SKUs',
        '2 warehouse locations',
        'Basic demand forecasting',
        'Email support',
        'Standard integrations',
        'Mobile app access'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$299',
      period: '/month',
      description: 'Ideal for growing businesses with complex inventory',
      features: [
        'Up to 10,000 SKUs',
        '10 warehouse locations',
        'Advanced AI forecasting',
        'Priority support',
        'Advanced integrations',
        'Custom reporting',
        'Supplier management',
        'Multi-user access'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$599',
      period: '/month',
      description: 'For large organizations with complex supply chains',
      features: [
        'Unlimited SKUs',
        'Unlimited locations',
        'AI-powered optimization',
        'Dedicated support',
        'Custom integrations',
        'Advanced analytics',
        'White-label options',
        'API access',
        'Custom workflows'
      ],
      popular: false
    }
  ];

  const useCases = [
    {
      title: 'Retail & E-commerce',
      description: 'Optimize stock levels, prevent stockouts, and reduce carrying costs',
      icon: '🛒',
      results: '35% reduction in inventory costs'
    },
    {
      title: 'Manufacturing',
      description: 'Manage raw materials, work-in-progress, and finished goods efficiently',
      icon: '🏭',
      results: '50% improvement in production planning'
    },
    {
      title: 'Healthcare',
      description: 'Track medical supplies, pharmaceuticals, and equipment with precision',
      icon: '🏥',
      results: '99.9% compliance with regulations'
    },
    {
      title: 'Food & Beverage',
      description: 'Manage perishable inventory with expiration tracking and FIFO',
      icon: '🍎',
      results: '60% reduction in waste'
    },
    {
      title: 'Automotive',
      description: 'Track parts, components, and finished vehicles across supply chain',
      icon: '🚗',
      results: '40% faster parts availability'
    },
    {
      title: 'Fashion & Apparel',
      description: 'Manage seasonal inventory, sizes, and color variations',
      icon: '👗',
      results: '45% reduction in markdowns'
    }
  ];

  return (
    <>
      <SEOOptimizer
        title="AI Inventory Manager - Smart Inventory Optimization | Zion Tech Group"
        description="Revolutionize your inventory management with AI-powered forecasting, automated reordering, and real-time tracking. Reduce costs by 30% and achieve 99% stock accuracy."
        keywords={['AI inventory management', 'demand forecasting', 'inventory optimization', 'supply chain AI', 'stock management', 'automated reordering']}
        canonicalUrl="https://ziontechgroup.com/ai-inventory-manager"
      />
      <PerformanceOptimizer
        enableImageOptimization={true}
        enableLazyLoading={true}
        enableCodeSplitting={true}
        enablePrefetching={true}
      />
      <AccessibilityEnhancer
        enableKeyboardNavigation={true}
        enableScreenReader={true}
        enableHighContrast={true}
        enableFocusManagement={true}
      />
      <SecurityEnhancer
        enableCSP={true}
        enableHSTS={true}
        enableXSSProtection={true}
        enableClickjackingProtection={true}
      />
      <Analytics />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg matrix-rain particle-field">
        <Navigation />
        
        <main className="container mx-auto px-4 py-16 pt-24">
          {/* Hero Section */}
          <section className="text-center mb-16">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 cyber-text-3d neon-pulse glitch" data-text="AI Inventory Manager">
                AI Inventory Manager
              </h1>
              <p className="text-xl md:text-2xl text-cyan-400 mb-8 font-medium neon-pulse cyber-scan-effect">
                Smart Inventory Optimization & Forecasting
              </p>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                Transform your inventory management with AI-powered forecasting, automated reordering, 
                and real-time tracking. Reduce costs by 30%, achieve 99% stock accuracy, and eliminate 
                stockouts with predictive analytics.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
                <a
                  href="#pricing"
                  className="cyber-button px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300"
                >
                  Optimize Inventory Now
                </a>
                <a
                  href="tel:+13024640950"
                  className="flex items-center gap-2 border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
                >
                  <Phone className="w-5 h-5" />
                  +1 302 464 0950
                </a>
              </div>

              {/* Key Stats */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
                <div className="futuristic-glow neural-pattern p-6 text-center">
                  <div className="text-3xl font-bold text-cyan-400 mb-2">30%</div>
                  <div className="text-gray-300">Cost Reduction</div>
                </div>
                <div className="futuristic-glow neural-pattern p-6 text-center">
                  <div className="text-3xl font-bold text-purple-400 mb-2">99%</div>
                  <div className="text-gray-300">Stock Accuracy</div>
                </div>
                <div className="futuristic-glow neural-pattern p-6 text-center">
                  <div className="text-3xl font-bold text-pink-400 mb-2">Zero</div>
                  <div className="text-gray-300">Stockouts</div>
                </div>
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section className="mb-16" id="features">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center neon-text">
              Advanced AI Inventory Features
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {features.map((feature, index) => (
                <div key={index} className="cyber-card p-6 hover:scale-105 transition-all duration-300">
                  <div className="flex items-center space-x-3 mb-4">
                    <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                    <h3 className="text-lg font-semibold text-white">{feature}</h3>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Benefits Section */}
          <section className="mb-16" id="benefits">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center neon-text">
              Proven Results & Benefits
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {benefits.map((benefit, index) => (
                <div key={index} className="cyber-card p-6 hover:scale-105 transition-all duration-300">
                  <div className="flex items-center space-x-3 mb-4">
                    <TrendingUp className="w-6 h-6 text-pink-400 flex-shrink-0" />
                    <h3 className="text-lg font-semibold text-white">{benefit}</h3>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Use Cases Section */}
          <section className="mb-16" id="use-cases">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center neon-text">
              Industry Solutions
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {useCases.map((useCase, index) => (
                <div key={index} className="cyber-card p-6 hover:scale-105 transition-all duration-300">
                  <div className="text-4xl mb-4 text-center">{useCase.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-3 text-center">{useCase.title}</h3>
                  <p className="text-gray-300 mb-4 text-center">{useCase.description}</p>
                  <div className="text-center">
                    <div className="text-cyan-400 font-semibold">{useCase.results}</div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Pricing Section */}
          <section className="mb-16" id="pricing">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center neon-text">
              Flexible Pricing Plans
            </h2>
            <p className="text-lg text-gray-300 text-center mb-12 max-w-3xl mx-auto">
              Choose the perfect plan for your inventory needs. All plans include 24/7 support and regular updates.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {pricingTiers.map((tier, index) => (
                <div key={index} className={`cyber-card p-8 hover:scale-105 transition-all duration-300 ${tier.popular ? 'ring-2 ring-cyan-400' : ''}`}>
                  {tier.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-cyan-400 text-slate-900 px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </div>
                    </div>
                  )}
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                    <p className="text-gray-300 mb-4">{tier.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-cyan-400">{tier.price}</span>
                      <span className="text-gray-300 ml-1">{tier.period}</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {tier.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <a
                    href="/contact"
                    className={`w-full cyber-button px-6 py-3 text-center font-semibold transition-all duration-300 hover:scale-105 ${tier.popular ? 'bg-gradient-to-r from-cyan-400 to-purple-500' : ''}`}
                  >
                    Get Started
                  </a>
                </div>
              ))}
            </div>
          </section>

          {/* Contact Section */}
          <section className="mb-16" id="contact">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center neon-text">
              Ready to Optimize Your Inventory?
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300">
                <Phone className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Phone</h3>
                <p className="text-gray-300 mb-4">+1 302 464 0950</p>
                <a 
                  href="tel:+13024640950" 
                  className="text-cyan-400 hover:text-cyan-300 font-medium transition-colors"
                >
                  Call Now
                </a>
              </div>
              
              <div className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300">
                <Mail className="w-12 h-12 text-pink-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Email</h3>
                <p className="text-gray-300 mb-4">kleber@ziontechgroup.com</p>
                <a 
                  href="mailto:kleber@ziontechgroup.com" 
                  className="text-pink-400 hover:text-pink-300 font-medium transition-colors"
                >
                  Send Email
                </a>
              </div>
              
              <div className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300">
                <MapPin className="w-12 h-12 text-green-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Address</h3>
                <p className="text-gray-300 mb-4">364 E Main St STE 1008<br />Middletown, DE 19709</p>
                <a 
                  href="https://maps.google.com/?q=364+E+Main+St+STE+1008+Middletown+DE+19709" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-400 hover:text-green-300 font-medium transition-colors"
                >
                  View on Map
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

export default AIInventoryManagerPage;