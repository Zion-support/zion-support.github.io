'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Truck, BarChart, Zap, Shield, CheckCircle, ArrowRight, Star, TrendingUp, Clock, Users, DollarSign, Target, Brain, Cloud, Smartphone, Globe, Database, Settings, Lock, FileText, BarChart3, Users as Team, Zap as Lightning, ArrowRight as Arrow, Star as StarIcon, TrendingUp as Growth, Lock as Secure, FileText as Document, BarChart as Analytics, Smartphone as Phone, Globe as World, Database as Data, Settings as Config, Target as Goal, Brain as AI, Cloud as CloudIcon, Truck as Logistics, BarChart as AnalyticsIcon, Zap as Efficiency, Shield as Security, CheckCircle as Check, ArrowRight as ArrowIcon, Star as StarIconAlt, TrendingUp as GrowthIcon, Clock as Time, Users as People, DollarSign as Money, Target as Objective, Brain as Intelligence, Cloud as CloudService, Smartphone as Mobile, Globe as Global, Database as DataStore, Settings as Configuration, Lock as Protection, FileText as Report, BarChart3 as Chart, Team as TeamIcon, Lightning as Speed, Arrow as Direction, StarIcon as StarAlt, Growth as GrowthAlt, Secure as SecurityAlt, Document as Doc, Analytics as AnalyticsAlt, Phone as MobileIcon, World as GlobalIcon, Data as DataAlt, Config as ConfigAlt, Goal as GoalAlt, AI as AIAlt, CloudIcon as CloudAlt } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AISupplyChainOptimizerPage: React.FC = () => {
  const features = [
    {
      icon: Truck,
      title: 'Intelligent Route Optimization',
      description: 'AI-powered logistics optimization that reduces delivery times by 30% and cuts transportation costs by 25%.',
      benefits: ['Real-time route planning', 'Multi-modal transportation', 'Dynamic rerouting', 'Fuel cost optimization']
    },
    {
      icon: BarChart,
      title: 'Demand Forecasting',
      description: 'Advanced machine learning models predict demand patterns with 95% accuracy, reducing stockouts and overstock.',
      benefits: ['95% forecast accuracy', 'Seasonal pattern analysis', 'Market trend prediction', 'Inventory optimization']
    },
    {
      icon: Zap,
      title: 'Automated Inventory Management',
      description: 'Smart inventory control with automated reorder points, supplier management, and warehouse optimization.',
      benefits: ['Automated reordering', 'Supplier performance tracking', 'Warehouse space optimization', 'Just-in-time delivery']
    },
    {
      icon: Shield,
      title: 'Risk Management',
      description: 'Comprehensive risk assessment and mitigation strategies for supply chain disruptions and market volatility.',
      benefits: ['Disruption prediction', 'Alternative supplier mapping', 'Risk scoring', 'Contingency planning']
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$1,299',
      period: '/month',
      description: 'Perfect for small to medium businesses',
      features: [
        'Up to 5 warehouses',
        'Basic demand forecasting',
        'Route optimization',
        'Email support',
        'Standard reporting'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$2,999',
      period: '/month',
      description: 'Ideal for growing enterprises',
      features: [
        'Up to 25 warehouses',
        'Advanced AI forecasting',
        'Multi-modal optimization',
        'Priority support',
        'Custom integrations',
        'Real-time analytics',
        'API access'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$7,999',
      period: '/month',
      description: 'For large-scale operations',
      features: [
        'Unlimited warehouses',
        'AI-powered deep analytics',
        'Custom optimization models',
        '24/7 dedicated support',
        'White-label solutions',
        'Advanced integrations',
        'Compliance reporting',
        'Custom training'
      ],
      popular: false
    }
  ];

  const stats = [
    { icon: Truck, value: '30%', label: 'Cost Reduction' },
    { icon: BarChart, value: '95%', label: 'Forecast Accuracy' },
    { icon: Clock, value: '25%', label: 'Faster Delivery' },
    { icon: Users, value: '500+', label: 'Companies Served' }
  ];

  const benefits = [
    'Reduce supply chain costs by 30%',
    'Improve delivery times by 25%',
    'Increase forecast accuracy to 95%',
    'Minimize inventory waste',
    'Optimize supplier relationships',
    'Enhance risk management',
    'Automate routine processes',
    'Scale operations efficiently'
  ];

  const useCases = [
    {
      title: 'E-commerce Optimization',
      description: 'Streamline fulfillment for online retailers with intelligent inventory placement and last-mile delivery optimization.',
      icon: Globe,
      results: '40% faster delivery, 35% cost reduction'
    },
    {
      title: 'Manufacturing Supply Chain',
      description: 'Optimize raw material procurement and production scheduling for manufacturing companies.',
      icon: Settings,
      results: '50% reduction in stockouts, 30% cost savings'
    },
    {
      title: 'Retail Distribution',
      description: 'Enhance retail distribution networks with demand-driven inventory management and store replenishment.',
      icon: Target,
      results: '45% inventory reduction, 25% faster restocking'
    },
    {
      title: 'Cold Chain Logistics',
      description: 'Specialized optimization for temperature-controlled supply chains with real-time monitoring.',
      icon: Shield,
      results: '99.9% compliance rate, 20% energy savings'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Supply Chain Optimizer - Zion Tech Group | Intelligent Logistics & Inventory Management</title>
        <meta name="description" content="Transform your supply chain with AI-powered optimization. Reduce costs by 30%, improve delivery times by 25%, and achieve 95% forecast accuracy with our intelligent logistics platform." />
        <meta name="keywords" content="supply chain optimization, AI logistics, inventory management, demand forecasting, route optimization, supply chain analytics, logistics automation" />
      </Helmet>
      
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              AI Supply Chain <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400">Optimizer</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Transform your supply chain with AI-powered optimization. Reduce costs by 30%, improve delivery times by 25%, 
              and achieve 95% forecast accuracy with intelligent logistics management.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact"
                className="bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                Start Free Trial
              </Link>
              <Link 
                to="/demo"
                className="border border-green-400 text-green-400 hover:bg-green-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300"
              >
                View Demo
              </Link>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-4">
                    <stat.icon className="w-8 h-8 text-green-400" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Intelligent Supply Chain Solutions
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive AI-powered tools for optimizing every aspect of your supply chain
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-8 hover:bg-white/10 transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-xl flex items-center justify-center mb-6">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300 mb-6">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-gray-300 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Industry Applications</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Proven solutions across various industries and supply chain models
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {useCases.map((useCase, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-8 hover:bg-white/10 transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mb-6">
                    <useCase.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{useCase.title}</h3>
                  <p className="text-gray-300 mb-4">{useCase.description}</p>
                  <div className="text-green-400 font-semibold text-sm">{useCase.results}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Pricing Plans</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the perfect plan for your supply chain optimization needs
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`bg-white/5 backdrop-blur-sm rounded-2xl p-8 border-2 transition-all duration-300 hover:scale-105 ${
                  plan.popular ? 'border-green-500 bg-green-500/10' : 'border-white/20'
                }`}>
                  {plan.popular && (
                    <div className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-medium text-center mb-6">
                      Most Popular
                    </div>
                  )}
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-6">{plan.description}</p>
                  <div className="mb-8">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-300">{plan.period}</span>
                  </div>
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link 
                    to="/contact"
                    className={`w-full py-3 px-6 rounded-lg font-semibold text-center transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white'
                        : 'border border-white/20 text-white hover:bg-white/10'
                    }`}
                  >
                    Get Started
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Why Choose Our AI Optimizer?</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Proven results that transform supply chain performance
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3 bg-white/5 backdrop-blur-sm rounded-lg p-4">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-gray-300">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Optimize Your Supply Chain Today
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Start your free trial and see how AI can transform your supply chain operations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact"
                  className="bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
                >
                  Start Free Trial
                </Link>
                <Link 
                  to="/consultation"
                  className="border border-green-400 text-green-400 hover:bg-green-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300"
                >
                  Schedule Demo
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default AISupplyChainOptimizerPage;