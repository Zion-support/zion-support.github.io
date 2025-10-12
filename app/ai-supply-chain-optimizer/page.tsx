'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Truck, Package, TrendingUp, Shield, Clock, CheckCircle, ArrowRight, Star, Globe, Target } from 'lucide-react';

export default function AISupplyChainOptimizerPage() {
  const features = [
    {
      title: 'Predictive Demand Forecasting',
      description: 'AI algorithms analyze historical data, market trends, and external factors to predict demand with 92% accuracy.',
      icon: <TrendingUp className="w-8 h-8 text-cyan-400" />,
      benefits: ['Demand prediction', 'Seasonal analysis', 'Market trend insights', 'Inventory optimization']
    },
    {
      title: 'Smart Route Optimization',
      description: 'Optimize delivery routes in real-time to reduce costs, improve efficiency, and minimize environmental impact.',
      icon: <Truck className="w-8 h-8 text-green-400" />,
      benefits: ['Route optimization', 'Fuel efficiency', 'Delivery tracking', 'Cost reduction']
    },
    {
      title: 'Inventory Management',
      description: 'Intelligent inventory control that prevents stockouts while minimizing carrying costs and waste.',
      icon: <Package className="w-8 h-8 text-purple-400" />,
      benefits: ['Stock optimization', 'Waste reduction', 'Automated reordering', 'Quality control']
    },
    {
      title: 'Risk Assessment',
      description: 'Comprehensive risk analysis to identify potential disruptions and implement proactive mitigation strategies.',
      icon: <Shield className="w-8 h-8 text-yellow-400" />,
      benefits: ['Risk identification', 'Mitigation planning', 'Contingency management', 'Compliance monitoring']
    }
  ];

  const optimizationFeatures = [
    {
      category: 'Demand Planning',
      items: ['AI Forecasting', 'Seasonal Analysis', 'Market Intelligence', 'Customer Behavior', 'Trend Prediction', 'Demand Sensing']
    },
    {
      category: 'Inventory Optimization',
      items: ['Stock Level Optimization', 'ABC Analysis', 'Safety Stock Calculation', 'Reorder Point Management', 'Warehouse Optimization', 'Multi-location Planning']
    },
    {
      category: 'Logistics & Transportation',
      items: ['Route Optimization', 'Load Planning', 'Carrier Selection', 'Freight Management', 'Last-mile Delivery', 'Real-time Tracking']
    },
    {
      category: 'Risk Management',
      items: ['Supply Risk Assessment', 'Disruption Prediction', 'Contingency Planning', 'Supplier Evaluation', 'Compliance Monitoring', 'Crisis Management']
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$199',
      period: '/month',
      description: 'Perfect for small businesses',
      features: [
        'Up to 5 suppliers',
        'Basic AI optimization',
        'Standard reporting',
        'Email support',
        'Basic integrations',
        'Monthly insights'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$499',
      period: '/month',
      description: 'Ideal for growing companies',
      features: [
        'Up to 25 suppliers',
        'Advanced AI features',
        'Real-time analytics',
        'Priority support',
        'Custom integrations',
        'Weekly insights',
        'API access'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$999',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Unlimited suppliers',
        'Custom AI models',
        'White-label solution',
        'Dedicated support',
        'Advanced security',
        'Custom development',
        '24/7 support'
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: 'Robert Chen',
      company: 'Manufacturing Corp',
      content: 'AI Supply Chain Optimizer reduced our inventory costs by 30% and improved delivery times by 25%. The predictive analytics are incredibly accurate.',
      rating: 5
    },
    {
      name: 'Lisa Martinez',
      company: 'Retail Chain',
      content: 'The demand forecasting and route optimization features have transformed our supply chain operations. We\'ve seen significant cost savings and improved efficiency.',
      rating: 5
    },
    {
      name: 'David Thompson',
      company: 'Distribution Center',
      content: 'The risk assessment and inventory management tools have helped us avoid disruptions and maintain optimal stock levels across all our locations.',
      rating: 5
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Supply Chain Optimizer - Zion Tech Group</title>
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              AI Supply Chain <span className="text-cyan-400">Optimizer</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your supply chain with AI-powered optimization that reduces costs, improves efficiency, 
              and ensures seamless operations across your entire network.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="inline-flex items-center px-8 py-4 bg-cyan-600 text-white font-semibold rounded-lg hover:bg-cyan-700 transition-colors"
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link 
                to="/ai-services" 
                className="inline-flex items-center px-8 py-4 border border-cyan-600 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-600 hover:text-white transition-colors"
              >
                Learn More
              </Link>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">Key Features</h2>
              <p className="text-xl text-gray-300">Powerful AI capabilities for supply chain optimization</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-gray-800 p-6 rounded-lg">
                  <div className="mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  <ul className="space-y-1">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-gray-400">
                        <CheckCircle className="w-3 h-3 text-green-400 mr-2" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Detailed Features Section */}
        <section className="py-16 px-4 bg-gray-800">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">Comprehensive Optimization</h2>
              <p className="text-xl text-gray-300">Everything you need for effective supply chain management</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {optimizationFeatures.map((category, index) => (
                <div key={index} className="bg-gray-900 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-white mb-4">{category.category}</h3>
                  <ul className="space-y-2">
                    {category.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">Pricing Plans</h2>
              <p className="text-xl text-gray-300">Choose the perfect plan for your supply chain needs</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`bg-gray-800 p-8 rounded-lg ${plan.popular ? 'ring-2 ring-cyan-500' : ''}`}>
                  {plan.popular && (
                    <div className="bg-cyan-600 text-white text-sm font-semibold px-3 py-1 rounded-full inline-block mb-4">
                      Most Popular
                    </div>
                  )}
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400 ml-1">{plan.period}</span>
                  </div>
                  <p className="text-gray-300 mt-2">{plan.description}</p>
                  <ul className="mt-6 space-y-2">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link 
                    to="/contact" 
                    className="w-full mt-6 inline-flex items-center justify-center px-6 py-3 bg-cyan-600 text-white font-semibold rounded-lg hover:bg-cyan-700 transition-colors"
                  >
                    Get Started
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 px-4 bg-gray-800">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">What Our Clients Say</h2>
              <p className="text-xl text-gray-300">Real results from real businesses</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-gray-900 p-6 rounded-lg">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                  <p className="font-semibold text-white">{testimonial.name}</p>
                  <p className="text-cyan-400">{testimonial.company}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-4">
              Ready to Optimize Your Supply Chain?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join leading companies using our AI-powered supply chain optimization to reduce costs and improve efficiency.
            </p>
            <Link 
              to="/contact" 
              className="inline-flex items-center px-8 py-4 bg-cyan-600 text-white font-semibold rounded-lg hover:bg-cyan-700 transition-colors"
            >
              Contact Us Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}