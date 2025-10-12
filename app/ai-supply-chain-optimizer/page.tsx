'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
<<<<<<< HEAD
<<<<<<< HEAD
import { Truck, Package, TrendingUp, Shield, Target, Globe, Clock, CheckCircle } from 'lucide-react';
=======
import { Truck, Package, TrendingUp, Shield, CheckCircle } from 'lucide-react';
>>>>>>> cursor/fix-errors-and-merge-to-main-9c1a
=======
import { Truck, Package, TrendingUp, Shield } from 'lucide-react';
>>>>>>> cursor/fix-errors-and-merge-to-main-0823
import FuturisticBackground from '../components/FuturisticBackground';
import FuturisticCard from '../components/FuturisticCard';
import FuturisticButton from '../components/FuturisticButton';

export default function AISupplyChainOptimizerPage() {
  const features = [
    {
      title: 'Predictive Demand Forecasting',
      description: 'AI algorithms analyze historical data, market trends, and external factors to predict demand with 92% accuracy.',
      icon: <TrendingUp className="w-5 h-5" />,
      benefits: ['Demand prediction', 'Seasonal analysis', 'Market trend insights', 'Inventory optimization']
    },
    {
      title: 'Smart Route Optimization',
      description: 'Advanced logistics algorithms optimize delivery routes, reduce fuel costs, and improve delivery times.',
      icon: <Truck className="w-5 h-5" />,
      benefits: ['Route optimization', 'Fuel cost reduction', 'Delivery time improvement', 'Real-time tracking']
    },
    {
      title: 'Automated Inventory Management',
      description: 'Intelligent inventory control with automated reordering, stock level monitoring, and waste reduction.',
      icon: <Package className="w-5 h-5" />,
      benefits: ['Auto reordering', 'Stock monitoring', 'Waste reduction', 'Cost optimization']
    },
    {
      title: 'Risk Management & Compliance',
      description: 'Comprehensive risk assessment and compliance monitoring to ensure supply chain resilience.',
      icon: <Shield className="w-5 h-5" />,
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
        'Standard reporting'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$499',
      period: '/month',
      description: 'Ideal for growing enterprises',
      features: [
        'Up to 25 warehouses',
        'Advanced AI forecasting',
        'Real-time optimization',
        'Priority support',
        'Custom integrations',
<<<<<<< HEAD
        'Advanced analytics'
=======
        'API access'
>>>>>>> cursor/fix-errors-and-merge-to-main-0823
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'Tailored for large organizations',
      features: [
        'Unlimited warehouses',
        'Custom AI models',
<<<<<<< HEAD
        'Dedicated support',
        'White-label options',
        'API access',
        'Custom reporting'
=======
        '24/7 dedicated support',
        'White-label solution',
        'Advanced analytics',
        'On-premise deployment'
>>>>>>> cursor/fix-errors-and-merge-to-main-0823
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
<<<<<<< HEAD
      company: 'TechCorp Industries',
      role: 'Supply Chain Director',
      content: 'The AI optimization reduced our logistics costs by 35% and improved delivery times significantly.',
=======
      role: 'Supply Chain Director',
      company: 'TechCorp Industries',
      content: 'The AI optimization reduced our logistics costs by 40% and improved delivery times by 25%. Incredible results!',
>>>>>>> cursor/fix-errors-and-merge-to-main-0823
      rating: 5
    },
    {
      name: 'Michael Chen',
<<<<<<< HEAD
      company: 'Global Logistics Ltd',
      role: 'Operations Manager',
      content: 'Outstanding predictive capabilities. We can now anticipate demand fluctuations with incredible accuracy.',
=======
      role: 'Operations Manager',
      company: 'Global Logistics Co.',
      content: 'The predictive forecasting has been spot-on. We\'ve eliminated stockouts and reduced excess inventory significantly.',
>>>>>>> cursor/fix-errors-and-merge-to-main-0823
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
<<<<<<< HEAD
      company: 'Manufacturing Solutions',
      role: 'VP of Operations',
      content: 'The automated inventory management has eliminated stockouts while reducing excess inventory by 40%.',
=======
      role: 'VP of Operations',
      company: 'RetailMax',
      content: 'Implementation was seamless and the ROI was immediate. Our supply chain is now truly intelligent.',
>>>>>>> cursor/fix-errors-and-merge-to-main-0823
      rating: 5
    }
  ];

  return (
    <>
      <Helmet>
<<<<<<< HEAD
        <title>AI Supply Chain Optimizer - Zion Tech Group</title>
        <meta name="description" content="Revolutionize your supply chain with AI-powered optimization, predictive analytics, and automated inventory management." />
=======
        <title>AI Supply Chain Optimizer | Zion Tech Group</title>
        <meta name="description" content="Transform your supply chain with AI-powered optimization. Reduce costs, improve efficiency, and enhance visibility with our advanced supply chain management solutions." />
        <meta name="keywords" content="AI supply chain, supply chain optimization, logistics AI, inventory management, demand forecasting" />
>>>>>>> cursor/fix-errors-and-merge-to-main-9c1a
      </Helmet>

      <FuturisticBackground>
        <div className="min-h-screen">
          {/* Hero Section */}
          <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                AI-Powered
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                  {' '}Supply Chain Optimization
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
<<<<<<< HEAD
                Transform your supply chain with intelligent AI solutions that predict demand, optimize routes, 
                and automate inventory management for maximum efficiency and cost savings.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <FuturisticButton variant="primary" size="lg">
                  Start Free Trial
                </FuturisticButton>
                <FuturisticButton variant="secondary" size="lg">
=======
                Revolutionize your supply chain with AI-powered demand forecasting, route optimization, 
                and intelligent inventory management. Reduce costs by 35% and improve efficiency by 40%.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <FuturisticButton
                  variant="primary"
                  size="lg"
                  onClick={() => window.open('/contact', '_blank')}
                >
                  Start Free Trial
                </FuturisticButton>
                <FuturisticButton
                  variant="secondary"
                  size="lg"
                  onClick={() => window.open('/contact', '_blank')}
                >
>>>>>>> cursor/fix-errors-and-merge-to-main-0823
                  Schedule Demo
                </FuturisticButton>
              </div>
            </div>
<<<<<<< HEAD
          </section>

          {/* Features Section */}
          <section className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-white mb-4">
                  Intelligent Supply Chain Features
                </h2>
                <p className="text-gray-300 text-lg">
                  Powered by advanced AI to optimize every aspect of your supply chain
                </p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {features.map((feature, index) => (
                  <FuturisticCard key={index} className="p-6">
                    <div className="flex items-center mb-4">
                      {feature.icon}
                      <h3 className="text-xl font-semibold text-white ml-3">{feature.title}</h3>
                    </div>
                    <p className="text-gray-300 mb-4">{feature.description}</p>
                    <ul className="space-y-2">
                      {feature.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center text-sm text-gray-400">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
=======

            {/* Features Section */}
            <div className="mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 text-center">
                Advanced Supply Chain Intelligence
              </h2>
              <p className="text-gray-300 text-center mb-12">
                Cutting-edge artificial intelligence meets supply chain expertise to optimize your operations
              </p>
              <div className="grid md:grid-cols-2 gap-8">
                {features.map((feature, index) => (
                  <FuturisticCard key={index}>
                    <div className="flex items-start mb-4">
                      {feature.icon}
                      <h3 className="text-xl font-semibold text-white ml-3">{feature.title}</h3>
                    </div>
                    <p className="text-gray-300 mb-6">{feature.description}</p>
                    <ul className="space-y-2">
                      {feature.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="text-gray-300 flex items-center">
                          <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>
>>>>>>> cursor/fix-errors-and-merge-to-main-0823
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </FuturisticCard>
                ))}
              </div>
            </div>
<<<<<<< HEAD
          </section>

          {/* Pricing Section */}
<<<<<<< HEAD
          <section className="py-20 px-4">
=======
          <section className="py-20 px-4 sm:px-6 lg:px-8">
>>>>>>> cursor/fix-errors-and-merge-to-main-9c1a
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-white mb-4">
                  Flexible Pricing Plans
                </h2>
                <p className="text-gray-300 text-lg">
                  Choose the plan that scales with your business
                </p>
              </div>
              <div className="grid md:grid-cols-3 gap-8">
                {pricingPlans.map((plan, index) => (
                  <FuturisticCard key={index} className={`p-8 relative ${plan.popular ? 'border-cyan-400' : ''}`}>
                    {plan.popular && (
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                        <span className="bg-cyan-400 text-black px-4 py-1 rounded-full text-sm font-semibold">
                          Most Popular
                        </span>
                      </div>
                    )}
                    <h3 className="text-2xl font-bold text-white mb-4">{plan.name}</h3>
                    <div className="text-4xl font-bold text-cyan-400 mb-2">
                      {plan.price}<span className="text-lg text-gray-400">{plan.period}</span>
                    </div>
                    <p className="text-gray-300 mb-6">{plan.description}</p>
                    <ul className="space-y-3 mb-8">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <FuturisticButton 
                      variant={plan.popular ? "primary" : "secondary"}
                      className="w-full"
                    >
                      Get Started
                    </FuturisticButton>
                  </FuturisticCard>
                ))}
              </div>
            </div>
          </section>

<<<<<<< HEAD
          {/* Pricing Section */}
          <section className="py-20">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-white mb-4">
                  Flexible Pricing Plans
                </h2>
                <p className="text-gray-300 text-lg">
                  Choose the plan that scales with your business
                </p>
              </div>
              <div className="grid md:grid-cols-3 gap-8">
                {pricingPlans.map((plan, index) => (
                  <FuturisticCard key={index} className={`p-8 ${plan.popular ? 'ring-2 ring-cyan-400' : ''}`}>
                    {plan.popular && (
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                        <span className="bg-cyan-400 text-gray-900 px-4 py-2 rounded-full text-sm font-semibold">
=======

            {/* Pricing Section */}
            <div className="mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 text-center">
                Choose Your Plan
              </h2>
              <p className="text-gray-300 text-center mb-12">
                Scalable pricing options to match your supply chain needs
              </p>
              <div className="grid md:grid-cols-3 gap-8">
                {pricingPlans.map((plan, index) => (
                  <FuturisticCard key={index} className={`${plan.popular ? 'ring-2 ring-cyan-400' : ''}`}>
                    {plan.popular && (
                      <div className="text-center mb-4">
                        <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
>>>>>>> cursor/fix-errors-and-merge-to-main-0823
                          Most Popular
                        </span>
                      </div>
                    )}
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
<<<<<<< HEAD
                    <p className="text-gray-300 mb-6">{plan.description}</p>
                    <div className="mb-6">
                      <span className="text-4xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-400">{plan.period}</span>
                    </div>
                    <ul className="space-y-3 mb-8">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-300">
                          <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>
                          <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
=======
                    <div className="mb-4">
                      <span className="text-4xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-400 ml-1">{plan.period}</span>
                    </div>
                    <p className="text-gray-300 text-sm mb-6">{plan.description}</p>
                    <ul className="space-y-3 mb-8">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="text-gray-300 flex items-center">
                          <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>
>>>>>>> cursor/fix-errors-and-merge-to-main-0823
                          {feature}
                        </li>
                      ))}
                    </ul>
<<<<<<< HEAD
                    <FuturisticButton 
                      variant={plan.popular ? "primary" : "secondary"} 
                      href="/contact" 
                      variant={plan.popular ? 'primary' : 'secondary'}
                      className="w-full"
=======
                    <FuturisticButton
                      variant={plan.popular ? "primary" : "ghost"}
                      className="w-full"
                      onClick={() => window.open('/contact', '_blank')}
>>>>>>> cursor/fix-errors-and-merge-to-main-0823
                    >
                      Get Started
                    </FuturisticButton>
                  </FuturisticCard>
                ))}
              </div>
            </div>
<<<<<<< HEAD
          </section>

          {/* Testimonials */}
          <section className="py-20">
            <div className="container mx-auto px-4">
=======
          {/* Testimonials */}
          <section className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
>>>>>>> cursor/fix-errors-and-merge-to-main-9c1a
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-white mb-4">
                  Trusted by Industry Leaders
                </h2>
                <p className="text-gray-300 text-lg">
                  See how companies are transforming their supply chains
                </p>
              </div>
              <div className="grid md:grid-cols-3 gap-8">
                {testimonials.map((testimonial, index) => (
                  <FuturisticCard key={index} className="p-6">
=======

            {/* Testimonials Section */}
            <div className="mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 text-center">
                What Our Clients Say
              </h2>
              <p className="text-gray-300 text-center mb-12">
                Join hundreds of companies optimizing their supply chains
              </p>
              <div className="grid md:grid-cols-3 gap-8">
                {testimonials.map((testimonial, index) => (
                  <FuturisticCard key={index}>
>>>>>>> cursor/fix-errors-and-merge-to-main-0823
                    <div className="flex mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <span key={i} className="text-yellow-400">★</span>
                      ))}
                    </div>
<<<<<<< HEAD
                    <p className="text-gray-300 mb-4">"{testimonial.content}"</p>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-sm text-gray-400">{testimonial.role}</div>
                    <div className="text-sm text-gray-500">{testimonial.company}</div>
=======
                    <blockquote className="text-gray-300 mb-6 italic">"{testimonial.content}"</blockquote>
                    <div>
                      <p className="font-semibold text-white">{testimonial.name}</p>
                      <p className="text-gray-400 text-sm">{testimonial.role}</p>
                      <p className="text-gray-500 text-sm">{testimonial.company}</p>
                    </div>
>>>>>>> cursor/fix-errors-and-merge-to-main-0823
                  </FuturisticCard>
                ))}
              </div>
            </div>
<<<<<<< HEAD
          </section>

          {/* CTA Section */}
<<<<<<< HEAD
          <section className="py-20 px-4">
=======
          <section className="py-20 px-4 sm:px-6 lg:px-8">
>>>>>>> cursor/fix-errors-and-merge-to-main-9c1a
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold text-white mb-4">
                Ready to Optimize Your Supply Chain?
              </h2>
              <p className="text-gray-300 text-lg mb-8">
                Join industry leaders who are already transforming their supply chains with AI
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <FuturisticButton variant="primary" size="lg">
                  Start Your Free Trial
                </FuturisticButton>
                <FuturisticButton variant="secondary" size="lg">
                  Schedule Demo
                </FuturisticButton>
              </div>
            </div>
          </section>
=======

            {/* CTA Section */}
            <div className="text-center">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Optimize Your Supply Chain?
              </h2>
              <p className="text-gray-300 mb-8">
                Start your free 14-day trial today. No credit card required. Join 500+ companies optimizing their supply chains.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <FuturisticButton
                  variant="primary"
                  size="lg"
                  onClick={() => window.open('/contact', '_blank')}
                >
                  Start Free Trial
                </FuturisticButton>
                <FuturisticButton
                  variant="secondary"
                  size="lg"
                  onClick={() => window.open('/contact', '_blank')}
                >
                  Contact Sales
                </FuturisticButton>
              </div>
            </div>
          </div>
>>>>>>> cursor/fix-errors-and-merge-to-main-0823
        </div>
      </FuturisticBackground>
    </>
  );
}