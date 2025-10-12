<<<<<<< HEAD
import React from 'react'
import { Link } from 'react-router-dom'

import React from 'react';

=======
import React from 'react';
import { Helmet } from 'react-helmet-async';
>>>>>>> cursor/fix-errors-and-merge-to-main-b918
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

import { ArrowRight, Package, BarChart3, Zap, CheckCircle, Target, Smartphone, Shield, Bot, Star, Smartphone as Mobile, DollarSign, Activity } from 'lucide-react';

export default function AIInventoryManagerPage() {
<<<<<<< HEAD
  const features = [
      icon: <Bot className="w-6h-6text-cyan-400" />,
      title: 'AI Demand Forecasting',
      description: 'Predict inventory needs with 95% accuracy using machine learning algorithms'
    },
      icon: <Package className="w-6h-6text-emerald-400" />,
      title: 'Smart Reorder Points',
      description: 'Automatically trigger reorders based on sales velocity and lead times'
    },
      icon: <BarChart3 className="w-6h-6text-purple-400" />,
      title: 'Real-time Analytics',
      description: 'Comprehensive inventory insights with predictive analytics and trend analysis'
    },
      icon: <Zap className="w-6h-6text-orange-400" />,
      title: 'Automated Workflows',
      description: 'Streamline inventory processes with intelligent automation and alerts'
    },
      icon: <Target className="w-6h-6text-pink-400" />,
      title: 'Multi-location Sync',
      description: 'Seamlessly manage inventory across multiple warehouses and stores'
    },
      icon: <Shield className="w-6h-6text-red-400" />,

      title: 'Loss Prevention',
      description: 'AI-powered theft detection and shrinkage analysis with real-time alerts'
  ]

  const pricingPlans = [
      name: 'Starter',
      price: '$39',
      period: '/month',
      description: 'Perfect for small businesses',
      features: [
        'Up to 1,000 SKUs',
        'Basic AI forecasting',
        'Mobile app access',
        'Email support',
        'Basic reporting',
        '1 warehouse location'
      ],
      popular: false
    },
      name: 'Professional',
      price: '$99',
      period: '/month',
      description: 'Ideal for growing businesses',
      features: [
        'Up to 10,000 SKUs',
        'Advanced AI features',
        'Multi-location support',
        'Priority support',
        'Advanced analytics',
        'API access',
        'Barcode scanning',
        'Supplier integration'
      ],
      popular: true
    },
      name: 'Enterprise',
      price: '$299',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Unlimited SKUs',
        'All AI features',
        'Custom integrations',
        'Dedicated support',
        'White-label option',
        'Advanced security',
        'Custom reporting',
        'SLA guarantee'
      ],
      popular: false
  ]

  const testimonials = [
      name: 'Jennifer Walsh',
      company: 'Retail Chain Owner',
      content: 'Reduced our inventory costs by 25% and eliminated stockouts completely. The AI forecasting is incredibly accurate.',
      rating: 5,
      avatar: 'JW'
    },
      name: 'Michael Torres',
      company: 'E-commerce Store',
      content: 'The automated reorder system saves us hours every week. Never run out of stock again.',
      rating: 5,
      avatar: 'MT'
    },
      name: 'Sarah Kim',
      company: 'Manufacturing Company',
      content: 'Multi-location sync is a game-changer. We can see inventory across all our facilities in real-time.',
      rating: 5,
      avatar: 'SK'
  ]

  const benefits = [

      icon: <DollarSign className="w-8h-8text-cyan-400" />,
      title: '25% Cost Reduction',
      description: 'Optimize inventory levels and reduce carrying costs'
    },
      icon: <Target className="w-8h-8text-emerald-400" />,
      title: '95% Accuracy',
      description: 'AI forecasting with industry-leading accuracy rates'
    },
      icon: <Activity className="w-8h-8text-purple-400" />,
      title: 'Zero Stockouts',
      description: 'Smart reorder points prevent stockouts completely'
    },
      icon: <Zap className="w-8h-8text-orange-400" />,

      title: 'Real-time Sync',
      description: 'Instant updates across all locations and devices'
  ]

  const integrations = [
    { name: 'Shopify', icon: '🛍️' },
    { name: 'WooCommerce', icon: '🛒' },
    { name: 'Amazon', icon: '📦' },
    { name: 'eBay', icon: '🏪' },
    { name: 'QuickBooks', icon: '📊' },
    { name: 'Xero', icon: '💰' },
    { name: 'Sage', icon: '📈' },
    { name: 'NetSuite', icon: '☁️' },
    { name: 'Salesforce', icon: '⚡' },
    { name: 'Zapier', icon: '🔗' }
  ]

  return (

        <title>5G Data Analytics - Zion Tech Group</title>
        <title>AI Inventory Manager - Zion Tech Group | Smart Inventory Management</title>

      {/* Hero Section */}
    
            <span>AI-Powered Inventory Management</span>

            AI Inventory
    
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400bg-clip-texttext-transparent">Manager
          
            Transform your inventory management with AI-powered demand forecasting, automated reordering, 
            and real-time analytics. Reduce costs by 25% and eliminate stockouts completely.

              <span>Start Free Trial</span>
              <span>View Pricing</span>

          {/* Key Stats */}

              <div className="text-3 xl font-boldtext-cyan-400mb-2">25%</div>
              <div className="text-gray-300text-sm">Cost Reduction</div>
              <div className="text-3 xl font-boldtext-purple-400mb-2">95%</div>
              <div className="text-gray-300text-sm">Forecast Accuracy</div>
              <div className="text-3 xl font-boldtext-pink-400mb-2">0</div>
              <div className="text-gray-300text-sm">Stockouts</div>
              <div className="text-3 xl font-boldtext-emerald-400mb-2">15 K+</div>
              <div className="text-gray-300text-sm">Active Users</div>

      {/* Benefits Section */}
    
              Why Choose Our <span className="bg-gradient-to-r from-cyan-400 to-purple-400bg-clip-texttext-transparent">AI Inventory Manager?</span>

              Experience the future of inventory management with cutting-edge AI technology that works for your business.

 (
    
                <div className="flex items-center justify-center w-20 h-20 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2 xl mb-6 mx-auto group-hover:scale-110transition-transformduration-300">{benefit.icon}

                <h3 className="text-xl font-bold text-white mb-4group-hover:text-cyan-400transition-colors">{benefit.title}
                  {benefit.description}
    
            ))}

      {/* Features Section */}
    
              Powerful Features for <span className="bg-gradient-to-r from-cyan-400 to-purple-400bg-clip-texttext-transparent">Smart Inventory</span>

              Everything you need to manage inventory efficiently with AI-powered intelligence and automation.

 (
    
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2 xl mb-6 group-hover:scale-110transition-transformduration-300">{feature.icon}

                <h3 className="text-2 xl font-bold text-white mb-4group-hover:text-cyan-400transition-colors">{feature.title}
                  {feature.description}
    
            ))}

      {/* Integrations Section */}
    
              Seamless <span className="bg-gradient-to-r from-cyan-400 to-purple-400bg-clip-texttext-transparent">Integrations</span>

              Connect with your favorite e-commerce platforms, accounting software, and business tools.

 (
    
                  <span className="text-3xl">{integration.icon}</span>
                <div className="text-gray-300group-hover:text-whitetransition-colors">{integration.name}
            ))}

      {/* Pricing Section */}
    
              Simple, Transparent <span className="bg-gradient-to-r from-cyan-400 to-purple-400bg-clip-texttext-transparent">Pricing</span>

              Choose the plan that fits your business size and inventory needs. All plans include our core AI features.

 (
                {plan.popular && (

                    <div className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-2 rounded-fulltext-smfont-semibold">Most Popular
                )}

                  <h3 className="text-2 xl font-boldtext-whitemb-2">{plan.name}</h3>
                  <p className="text-gray-300text-smmb-4">{plan.description}</p>
                    <span className="text-5 xlfont-boldtext-cyan-400">{plan.price}</span>
                    <span className="text-gray-300ml-2">{plan.period}</span>

 (

                      <span className="text-gray-300">{feature}</span>

                  ))}

                  to="/contact"
                  className="{`block" w-full text-center py-3 rounded-xl font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700 shadow-lg shadow-cyan-500/25'
                      : 'border-2 border-cyan-400 text-cyan-400 hover: bg-cyan-400 hover:text-gray-900'
                  }`}

Get Started
    
            ))}

      {/* Testimonials Section */}
    
              Trusted by <span className="bg-gradient-to-r from-cyan-400 to-purple-400bg-clip-texttext-transparent">15,000+</span> Businesses

              See what our customers are saying about their success with our AI inventory manager.

 (
    
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center text-whitefont-boldmr-4">{testimonial.avatar}
                    <div className="font-semiboldtext-white">{testimonial.name}</div>
                    <div className="text-gray-400text-sm">{testimonial.company}</div>

 (
                  ))}

                <p className="text-gray-300italic">"{testimonial.content}"</p>

            ))}

      {/* CTA Section */}
    
                  Ready to Transform Your <span className="bg-gradient-to-r from-cyan-300 to-pink-300bg-clip-texttext-transparent">Inventory Management?</span>
                
                  Join thousands of businesses already reducing costs by 25% with our AI-powered inventory manager. 
                  Start your free trial today and experience the future of inventory management.

                    <span>Start Free Trial</span>
                    <span>View All Plans</span>

                  <p>✓ 14-day free trial • ✓ No credit card required • ✓ Cancel anytime</p>

=======
  return (
    <>
      <Helmet>
        <title>A I Inventory Manager - Zion Tech Group</title>
        <meta name="description" content="Revolutionary AI-powered inventory management with demand forecasting, automated reordering, and real-time analytics. Reduce costs by 25%. Starting at $39/month." />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h1 className="text-4xl font-bold text-white mb-6">A I Inventory Manager</h1>
          <p className="text-lg text-gray-300 mb-8">Transform your inventory management with AI-powered demand forecasting, automated reordering, 
            and real-time analytics. Reduce costs by 25% and eliminate stockouts completely.</p>
          <Link
            to="/contact"
            className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center mx-auto w-fit"
          >
            Contact Us
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </div>
    </>
>>>>>>> cursor/fix-errors-and-merge-to-main-b918
  );

