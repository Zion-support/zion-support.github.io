'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Truck, Package, TrendingUp, Shield } from 'lucide-react';
import FuturisticBackground from '../components/FuturisticBackground';
import FuturisticCard from '../components/FuturisticCard';
import FuturisticButton from '../components/FuturisticButton';

export default function AISupplyChainOptimizerPage() {
  const features = [
    {
      title: 'Predictive Demand Forecasting',
      description: 'AI algorithms analyze historical data, market trends, and external factors to predict demand with 92% accuracy.',
      icon: <TrendingUp className="w-5 h-5 ml-2" />,
      benefits: ['Demand prediction', 'Seasonal analysis', 'Market trend insights', 'Inventory optimization']
    },
    {
      title: 'Smart Route Optimization',
      description: 'Advanced logistics algorithms optimize delivery routes, reduce fuel costs, and improve delivery times.',
      icon: <Truck className="w-5 h-5 ml-2" />,
      benefits: ['Route optimization', 'Fuel cost reduction', 'Delivery time improvement', 'Real-time tracking']
    },
    {
      title: 'Automated Inventory Management',
      description: 'Intelligent inventory control with automated reordering, stock level monitoring, and waste reduction.',
      icon: <Package className="w-5 h-5 ml-2" />,
      benefits: ['Auto reordering', 'Stock monitoring', 'Waste reduction', 'Cost optimization']
    },
    {
      title: 'Risk Management & Compliance',
      description: 'Comprehensive risk assessment and compliance monitoring to ensure supply chain resilience.',
      icon: <Shield className="w-5 h-5 ml-2" />,
      benefits: ['Risk assessment', 'Compliance monitoring', 'Disruption alerts', 'Mitigation strategies']
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$199',
      period: '/month',
      description: 'Perfect for small to medium businesses',
      features: [
        'Up to 5 warehouses',
        'Basic demand forecasting',
        'Route optimization',
        'Email support',
        'Standard integrations'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$599',
      period: '/month',
      description: 'Ideal for growing enterprises',
      features: [
        'Up to 25 warehouses',
        'Advanced AI forecasting',
        'Multi-modal optimization',
        'Priority support',
        'Custom integrations',
        'Analytics dashboard'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$1,299',
      period: '/month',
      description: 'For large-scale operations',
      features: [
        'Unlimited warehouses',
        'Custom AI models',
        'White-label solutions',
        'Dedicated support',
        'API access',
        'Advanced analytics'
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: 'David Kim',
      company: 'Global Logistics Corp',
      content: 'Our supply chain efficiency improved by 40% within the first quarter. The AI predictions are incredibly accurate.',
      rating: 5
    },
    {
      name: 'Maria Rodriguez',
      company: 'RetailMax Inc',
      content: 'The automated inventory management saved us millions in carrying costs. Highly recommended!',
      rating: 5
    },
    {
      name: 'James Wilson',
      company: 'Manufacturing Plus',
      content: 'The risk management features helped us avoid major disruptions. The ROI was immediate.',
      rating: 5
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Supply Chain Optimizer - Zion Tech Group</title>
        <meta name="description" content="Optimize your supply chain with AI-powered demand forecasting, route optimization, and inventory management solutions." />
      </Helmet>
      
      <FuturisticBackground>
        <div className="min-h-screen">
          {/* Hero Section */}
          <section className="relative py-20 px-4">
            <div className="container mx-auto text-center">
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                AI Supply Chain Optimizer
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Transform your supply chain with intelligent AI solutions that predict demand, optimize routes, 
                and automate inventory management for maximum efficiency and cost savings.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <FuturisticButton href="/contact" variant="primary">
                  Get Started
                </FuturisticButton>
                <FuturisticButton href="#demo" variant="secondary">
                  Watch Demo
                </FuturisticButton>
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section className="py-20 px-4">
            <div className="container mx-auto">
              <h2 className="text-4xl font-bold text-white text-center mb-16">
                Advanced Supply Chain Intelligence
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                {features.map((feature, index) => (
                  <FuturisticCard key={index} className="p-8">
                    <div className="flex items-start mb-4">
                      {feature.icon}
                      <h3 className="text-2xl font-bold text-white ml-3">{feature.title}</h3>
                    </div>
                    <p className="text-gray-300 mb-6">{feature.description}</p>
                    <div className="grid grid-cols-2 gap-2">
                      {feature.benefits.map((benefit, benefitIndex) => (
                        <div key={benefitIndex} className="flex items-center text-sm text-cyan-400">
                          <span className="w-2 h-2 bg-cyan-400 rounded-full mr-2"></span>
                          {benefit}
                        </div>
                      ))}
                    </div>
                  </FuturisticCard>
                ))}
              </div>
            </div>
          </section>

          {/* Pricing Section */}
          <section className="py-20 px-4">
            <div className="container mx-auto">
              <h2 className="text-4xl font-bold text-white text-center mb-16">
                Flexible Pricing Plans
              </h2>
              <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {pricingPlans.map((plan, index) => (
                  <FuturisticCard key={index} className={`p-8 relative ${plan.popular ? 'border-cyan-500' : ''}`}>
                    {plan.popular && (
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                        <span className="bg-cyan-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                          Most Popular
                        </span>
                      </div>
                    )}
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 mb-6">{plan.description}</p>
                    <div className="mb-6">
                      <span className="text-4xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-400">{plan.period}</span>
                    </div>
                    <ul className="space-y-3 mb-8">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-300">
                          <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <FuturisticButton 
                      href="/contact" 
                      variant={plan.popular ? 'primary' : 'secondary'}
                      className="w-full"
                    >
                      Get Started
                    </FuturisticButton>
                  </FuturisticCard>
                ))}
              </div>
            </div>
          </section>

          {/* Testimonials */}
          <section className="py-20 px-4">
            <div className="container mx-auto">
              <h2 className="text-4xl font-bold text-white text-center mb-16">
                Trusted by Industry Leaders
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                {testimonials.map((testimonial, index) => (
                  <FuturisticCard key={index} className="p-6">
                    <div className="flex mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <span key={i} className="text-yellow-400">★</span>
                      ))}
                    </div>
                    <p className="text-gray-300 mb-4">"{testimonial.content}"</p>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-sm text-gray-400">{testimonial.company}</div>
                  </FuturisticCard>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20 px-4">
            <div className="container mx-auto text-center">
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready to Optimize Your Supply Chain?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Join leading companies using AI to revolutionize their supply chain operations and achieve unprecedented efficiency.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <FuturisticButton href="/contact" variant="primary" size="lg">
                  Start Your Free Trial
                </FuturisticButton>
                <FuturisticButton href="/about" variant="secondary" size="lg">
                  Learn More
                </FuturisticButton>
              </div>
            </div>
          </section>
        </div>
      </FuturisticBackground>
    </>
  );
}