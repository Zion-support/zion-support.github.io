'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Truck, BarChart3, Target, Zap, ArrowRight, Star, CheckSquare, Shield, Smartphone, Users, Globe, Settings } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AISupplyChainOptimizationPage: React.FC = () => {
  const features = [
    {
      icon: Truck,
      title: 'Demand Forecasting',
      description: 'Predict demand patterns with 92% accuracy using advanced machine learning algorithms',
      benefits: ['92% forecast accuracy', 'Real-time demand signals', 'Seasonal pattern recognition', 'Market trend analysis']
    },
    {
      icon: BarChart3,
      title: 'Inventory Optimization',
      description: 'Optimize inventory levels across your entire supply chain to reduce costs and improve availability',
      benefits: ['Reduce inventory costs by 25%', 'Improve stock availability', 'Automated reorder points', 'Multi-location optimization']
    },
    {
      icon: Target,
      title: 'Route Planning',
      description: 'AI-powered route optimization for logistics and transportation to minimize costs and delivery times',
      benefits: ['Reduce transportation costs by 30%', 'Optimize delivery routes', 'Real-time traffic updates', 'Fuel efficiency optimization']
    },
    {
      icon: Zap,
      title: 'Risk Management',
      description: 'Identify and mitigate supply chain risks with predictive analytics and real-time monitoring',
      benefits: ['Risk prediction', 'Supplier monitoring', 'Disruption alerts', 'Contingency planning']
    }
  ];

  const industries = [
    {
      title: 'Manufacturing',
      description: 'Optimize production planning and raw material procurement',
      icon: Settings,
      benefits: ['Reduce production costs by 20%', 'Improve on-time delivery by 35%', 'Minimize waste by 40%', 'Optimize supplier relationships']
    },
    {
      title: 'Retail & E-commerce',
      description: 'Streamline inventory management and fulfillment operations',
      icon: Globe,
      benefits: ['Reduce stockouts by 60%', 'Improve customer satisfaction', 'Optimize warehouse operations', 'Enhance last-mile delivery']
    },
    {
      title: 'Healthcare',
      description: 'Ensure critical medical supplies and pharmaceutical availability',
      icon: Users,
      benefits: ['Ensure supply continuity', 'Reduce waste and expiration', 'Optimize cold chain logistics', 'Improve patient care']
    },
    {
      title: 'Food & Beverage',
      description: 'Manage perishable goods and optimize distribution networks',
      icon: Smartphone,
      benefits: ['Reduce food waste by 45%', 'Optimize freshness', 'Improve distribution efficiency', 'Enhance quality control']
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$899',
      period: '/month',
      description: 'Perfect for small to medium businesses',
      features: [
        'Up to 10 locations',
        'Basic forecasting',
        'Standard analytics',
        'Email support',
        'Mobile app access'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$1,999',
      period: '/month',
      description: 'Ideal for growing enterprises',
      features: [
        'Up to 100 locations',
        'Advanced AI features',
        'Real-time analytics',
        'Priority support',
        'API access',
        'Custom integrations'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$4,999',
      period: '/month',
      description: 'For large organizations with complex supply chains',
      features: [
        'Unlimited locations',
        'Custom AI models',
        'White-label solution',
        'Dedicated support',
        'On-premise deployment',
        'Advanced reporting'
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: 'David Chen',
      role: 'Supply Chain Director',
      company: 'Global Manufacturing Corp',
      content: 'We reduced inventory costs by 30% and improved on-time delivery to 98%. The AI insights are incredibly accurate.',
      rating: 5
    },
    {
      name: 'Sarah Johnson',
      role: 'Operations Manager',
      company: 'RetailMax',
      content: 'Our stockout rate dropped by 70% and customer satisfaction increased by 25%. The optimization is game-changing.',
      rating: 5
    },
    {
      name: 'Michael Rodriguez',
      role: 'Logistics Director',
      company: 'PharmaSupply',
      content: 'We eliminated supply disruptions and reduced waste by 50%. The predictive capabilities are outstanding.',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Supply Chain Optimization - Zion Tech Group</title>
        <meta name="description" content="Optimize supply chain operations with AI-driven demand forecasting, inventory management, and logistics planning. Reduce costs by 30%." />
        <meta name="keywords" content="AI supply chain, supply chain optimization, demand forecasting, inventory management, logistics AI" />
      </Helmet>
      
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center bg-green-500/10 text-green-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Truck className="w-4 h-4 mr-2" />
              AI-Powered Supply Chain Optimization
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI Supply Chain Optimization
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Optimize your supply chain operations with AI-driven demand forecasting, inventory management, and logistics planning. 
              Reduce costs by 30% and improve efficiency by 40%.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <button className="bg-gradient-to-r from-green-500 to-teal-500 hover:from-green-600 hover:to-teal-600 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2 inline" />
              </button>
              <button className="border border-green-400 text-green-400 hover:bg-green-400 hover:text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300">
                Watch Demo
              </button>
            </div>
            <div className="text-sm text-gray-400">
              ✓ 14-day free trial • ✓ No credit card required • ✓ Cancel anytime
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Advanced AI Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Leverage artificial intelligence to optimize every aspect of your supply chain operations.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300 mb-6">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-400">
                        <CheckSquare className="w-4 h-4 text-green-400 mr-2" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Industries Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Industry Applications
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Deploy supply chain optimization across various industries with proven results.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {industries.map((industry, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <industry.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{industry.title}</h3>
                  <p className="text-gray-300 mb-6">{industry.description}</p>
                  <ul className="space-y-2">
                    {industry.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-400">
                        <CheckSquare className="w-4 h-4 text-green-400 mr-2" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Simple, Transparent Pricing
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the plan that fits your supply chain needs. All plans include our core AI features.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`bg-white/5 backdrop-blur-sm rounded-2xl p-8 relative ${plan.popular ? 'ring-2 ring-green-500' : ''}`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-green-500 to-teal-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                      Most Popular
                    </div>
                  )}
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-400 ml-2">{plan.period}</span>
                    </div>
                  </div>
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-300">
                        <CheckSquare className="w-5 h-5 text-green-400 mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular 
                      ? 'bg-gradient-to-r from-green-500 to-teal-500 hover:from-green-600 hover:to-teal-600 text-white transform hover:scale-105' 
                      : 'border border-green-400 text-green-400 hover:bg-green-400 hover:text-white'
                  }`}>
                    {plan.name === 'Enterprise' ? 'Contact Sales' : 'Start Free Trial'}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                What Our Customers Say
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Join thousands of organizations who have transformed their supply chain with AI.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8">
                  <div className="flex items-center mb-4">
                    {Service Feature.map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-green-500/10 to-teal-500/10 backdrop-blur-sm rounded-3xl p-12 border border-green-500/20">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Optimize Your Supply Chain?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Start your free trial today and experience the power of AI-driven supply chain optimization.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-green-500 to-teal-500 hover:from-green-600 hover:to-teal-600 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 ml-2 inline" />
                </button>
                <button className="border border-green-400 text-green-400 hover:bg-green-400 hover:text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300">
                  Schedule Demo
                </button>
              </div>
              <div className="mt-6 text-sm text-gray-400">
                Questions? Call us at <a href="tel:+13024640950" className="text-green-400 hover:text-green-300">(302) 464-0950</a> or email <a href="mailto:kleber@ziontechgroup.com" className="text-green-400 hover:text-green-300">kleber@ziontechgroup.com</a>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  )}

export default AISupplyChainOptimizationPage;