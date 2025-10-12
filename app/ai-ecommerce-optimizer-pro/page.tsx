'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Star, Brain, BarChart3, Target, TrendingUp } from 'lucide-react';

export default function AIEcommerceOptimizerPro() {
  const features = [
    {
      icon: <Brain className="w-6 h-6 text-cyan-400" />,
      title: 'AI-Powered Optimization',
      description: 'Advanced machine learning algorithms analyze customer behavior and optimize your e-commerce platform in real-time'
    },
    {
      icon: <BarChart3 className="w-6 h-6 text-purple-400" />,
      title: 'Real-time Insights',
      description: 'Get instant insights into customer behavior, conversion rates, and sales performance'
    },
    {
      icon: <Target className="w-6 h-6 text-yellow-400" />,
      title: 'Conversion Optimization',
      description: 'Automatically optimize product pages, checkout flows, and marketing campaigns for maximum conversions'
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-green-400" />,
      title: 'Revenue Growth',
      description: 'Increase your e-commerce revenue by up to 40% with our proven optimization strategies'
    }
  ];

  const optimizationFeatures = [
    {
      category: 'Product Optimization',
      items: ['AI Product Recommendations', 'Dynamic Pricing', 'Inventory Management', 'Product Image Optimization', 'SEO Enhancement', 'Review Management']
    },
    {
      category: 'Customer Experience',
      items: ['Personalized Shopping', 'Smart Search', 'Chatbot Integration', 'Mobile Optimization', 'Fast Loading', 'User Journey Analysis']
    },
    {
      category: 'Marketing Automation',
      items: ['Email Campaigns', 'Social Media Integration', 'Retargeting Ads', 'A/B Testing', 'Customer Segmentation', 'Analytics Dashboard']
    },
    {
      category: 'Performance Monitoring',
      items: ['Real-time Analytics', 'Conversion Tracking', 'Revenue Reports', 'Customer Insights', 'Performance Alerts', 'ROI Analysis']
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$99',
      period: '/month',
      description: 'Perfect for small e-commerce stores',
      features: [
        'Up to 1,000 products',
        'Basic AI optimization',
        'Standard analytics',
        'Email support',
        'Basic integrations',
        'Monthly reports'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$299',
      period: '/month',
      description: 'Ideal for growing businesses',
      features: [
        'Up to 10,000 products',
        'Advanced AI features',
        'Real-time analytics',
        'Priority support',
        'Custom integrations',
        'Weekly reports',
        'A/B testing tools'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$799',
      period: '/month',
      description: 'For large e-commerce platforms',
      features: [
        'Unlimited products',
        'Custom AI training',
        'White-label solution',
        'Dedicated support',
        'Advanced integrations',
        'Real-time reports',
        'Custom development'
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: 'Michael Rodriguez',
      company: 'Fashion Store',
      content: 'AI E-commerce Optimizer Pro increased our conversion rate by 35% and boosted revenue by 50% in just 3 months.',
      rating: 5
    },
    {
      name: 'Emily Chen',
      company: 'Electronics Retailer',
      content: 'The AI recommendations and automated optimization features have transformed our online store performance.',
      rating: 5
    },
    {
      name: 'David Thompson',
      company: 'Home & Garden',
      content: 'Our sales have grown consistently since implementing the AI optimization tools. Highly recommended!',
      rating: 5
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI E-commerce Optimizer Pro - Zion Tech Group</title>
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              AI E-commerce <span className="text-blue-600">Optimizer Pro</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your e-commerce business with advanced AI optimization solutions that boost sales, 
              improve conversion rates, and maximize your online store performance.
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
              <p className="text-xl text-gray-300">Powerful AI capabilities for superior e-commerce optimization</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-gray-800 p-6 rounded-lg">
                  <div className="mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Detailed Features Section */}
        <section className="py-16 px-4 bg-gray-800">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">Comprehensive Features</h2>
              <p className="text-xl text-gray-300">Everything you need for effective e-commerce optimization</p>
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
              <p className="text-xl text-gray-300">Choose the perfect plan for your e-commerce needs</p>
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
              Ready to Transform Your E-commerce?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of businesses already using our AI-powered solutions to boost their online sales.
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