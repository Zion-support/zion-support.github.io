'use client';
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';
import { CheckCircle, Star, Zap, Shield, Clock, Users, TrendingUp, Globe, Brain, Cpu, Target, BarChart, MessageSquare, Eye, Sparkles, ArrowRight, Phone, Mail, MapPin, Calendar, FileText, GitBranch, PieChart, Activity, AlertCircle, Settings, Users2, Target as TargetIcon, BarChart3, Clock3, DollarSign, Award, Lock, Database, Cloud, Code, Smartphone, Settings as SettingsIcon, BarChart as BarChartIcon, FileText as FileTextIcon, Search, Bot, Palette, Camera, Music, Video, Gamepad2, ShoppingCart, CreditCard, Building, Factory, Car, Plane, Ship, Train, Home, Heart, Stethoscope, GraduationCap, Briefcase, Wrench, Hammer, Paintbrush, Scissors, BookOpen, Calculator, Calendar as CalendarIcon, Compass, Globe2, Map, Navigation as NavigationIcon, TrendingDown, Package, Truck, Warehouse, AlertTriangle, TrendingUp as TrendingUpIcon } from 'lucide-react';

const AIInventoryManagementPage: React.FC = () => {
  const features = [
    'AI-powered demand forecasting and inventory optimization',
    'Real-time inventory tracking across multiple locations',
    'Automated reorder point calculations and purchase orders',
    'Predictive analytics for stock-out prevention',
    'Smart supplier management and vendor performance tracking',
    'Barcode and RFID scanning integration',
    'Multi-channel inventory synchronization',
    'Advanced reporting and analytics dashboard',
    'Mobile app for warehouse management',
    'Integration with e-commerce platforms and ERPs'
  ];

  const benefits = [
    'Reduce inventory costs by 25%',
    'Increase inventory turnover by 40%',
    'Eliminate stockouts by 90%',
    'Reduce excess inventory by 35%',
    'Improve order fulfillment accuracy to 99.5%',
    'Save 30+ hours per week on inventory management',
    'Optimize warehouse space utilization',
    'Enhance supplier relationships and negotiations'
  ];

  const pricing = [
    {
      name: 'Small Business',
      price: '$149/month',
      description: 'Perfect for small retailers',
      features: [
        'Up to 1,000 SKUs',
        '2 warehouse locations',
        'Basic AI forecasting',
        'Standard integrations',
        'Email support',
        'Mobile app access'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$299/month',
      description: 'Ideal for growing businesses',
      features: [
        'Up to 10,000 SKUs',
        '10 warehouse locations',
        'Advanced AI analytics',
        'All integrations',
        'Priority support',
        'Custom reporting',
        'API access'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$599/month',
      description: 'For large organizations',
      features: [
        'Unlimited SKUs',
        'Unlimited locations',
        'AI-powered optimization',
        'Custom integrations',
        'Dedicated support',
        'Advanced security',
        'Custom training',
        'White-label options'
      ],
      popular: false
    }
  ];

  const integrations = [
    'Shopify', 'WooCommerce', 'Amazon', 'eBay', 'Etsy', 'Magento',
    'SAP', 'Oracle', 'Microsoft Dynamics', 'QuickBooks', 'Xero',
    'UPS', 'FedEx', 'DHL', 'USPS', 'ShipStation', 'Zapier'
  ];

  return (
    <>
      <SEOOptimizer
        title="AI Inventory Management System - Zion Tech Group"
        description="Revolutionary AI-powered inventory management with demand forecasting, automated reordering, and real-time tracking. Reduce costs by 25% and eliminate stockouts."
        keywords={['AI inventory management', 'inventory tracking', 'demand forecasting', 'warehouse management', 'supply chain optimization', 'inventory analytics']}
        canonicalUrl="https://ziontechgroup.com/ai-inventory-management"
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        <main className="pt-16">
          {/* Hero Section */}
          <section className="container mx-auto px-4 py-16 text-center">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text">
                AI Inventory Management System
              </h1>
              <p className="text-xl md:text-2xl text-cyan-400 mb-8">
                Intelligent inventory optimization powered by artificial intelligence
              </p>
              <p className="text-lg text-gray-300 mb-12 max-w-3xl mx-auto">
                Transform your inventory management with AI-driven demand forecasting, automated reordering, 
                and real-time tracking. Reduce costs by 25% while eliminating stockouts and excess inventory.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
                <a
                  href="tel:+13024640950"
                  className="cyber-button flex items-center space-x-2"
                >
                  <Phone className="w-5 h-5" />
                  <span>Call (302) 464-0950</span>
                </a>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="cyber-button flex items-center space-x-2"
                  style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
                >
                  <Mail className="w-5 h-5" />
                  <span>Get Free Demo</span>
                </a>
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section className="py-16 px-4">
            <div className="container mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
                Advanced AI Features
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {features.map((feature, index) => (
                  <div key={index} className="cyber-card p-6 hover:scale-105 transition-all duration-300">
                    <div className="flex items-center mb-4">
                      <CheckCircle className="w-6 h-6 text-green-400 mr-3" />
                      <h3 className="text-lg font-bold text-white">{feature}</h3>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Benefits Section */}
          <section className="py-16 px-4 bg-gradient-to-r from-purple-600/20 to-blue-600/20">
            <div className="container mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
                Proven Results
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {benefits.map((benefit, index) => (
                  <div key={index} className="cyber-card p-6 text-center">
                    <div className="text-3xl font-bold text-cyan-400 mb-2 neon-text">
                      {benefit.split(' ')[0]}
                    </div>
                    <div className="text-gray-300">{benefit}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Pricing Section */}
          <section className="py-16 px-4">
            <div className="container mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
                Flexible Pricing Plans
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {pricing.map((plan, index) => (
                  <div key={index} className={`cyber-card p-8 relative ${plan.popular ? 'ring-2 ring-cyan-400' : ''}`}>
                    {plan.popular && (
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                        <span className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                          Most Popular
                        </span>
                      </div>
                    )}
                    <div className="text-center mb-6">
                      <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                      <p className="text-gray-300 mb-4">{plan.description}</p>
                      <div className="text-4xl font-bold text-cyan-400 mb-2">{plan.price}</div>
                    </div>
                    <ul className="space-y-3 mb-8">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-300">
                          <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <a
                      href={`mailto:kleber@ziontechgroup.com?subject=Interest in ${plan.name} Plan`}
                      className="w-full cyber-button text-center block"
                    >
                      Get Started
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Integrations Section */}
          <section className="py-16 px-4 bg-gradient-to-r from-purple-600/20 to-blue-600/20">
            <div className="container mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
                Seamless Integrations
              </h2>
              <p className="text-lg text-gray-300 text-center mb-12 max-w-3xl mx-auto">
                Connect with your existing e-commerce platforms, ERPs, and shipping providers for a unified inventory experience.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
                {integrations.map((integration, index) => (
                  <div key={index} className="cyber-card p-4 text-center hover:scale-105 transition-all duration-300">
                    <div className="text-2xl mb-2">🔗</div>
                    <div className="text-white font-medium">{integration}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="container mx-auto px-4 py-16 text-center">
            <div className="cyber-card p-12 max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 neon-text">
                Ready to Optimize Your Inventory?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join hundreds of businesses already using AI to optimize their inventory management
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+13024640950"
                  className="cyber-button flex items-center justify-center space-x-2"
                >
                  <Phone className="w-5 h-5" />
                  <span>Call (302) 464-0950</span>
                </a>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="cyber-button flex items-center justify-center space-x-2"
                  style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
                >
                  <Mail className="w-5 h-5" />
                  <span>Get Free Demo</span>
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

export default AIInventoryManagementPage;