import { ArrowRight, Globe, BarChart3, Zap, Target, CheckCircle, Star, Sparkles, Mail, Smartphone, TrendingUp } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Truck, Package, TrendingUp, Shield, Target, Globe, Clock, CheckCircle } from 'lucide-react';
import FuturisticBackground from '../components/FuturisticBackground';
import FuturisticCard from '../components/FuturisticCard';
import FuturisticButton from '../components/FuturisticButton';

export default function AISupplyChainOptimizerPage() {  const features = [
    {
      title: "Demand Forecasting",
      description: "AI-powered demand prediction with 95% accuracy using machine learning and market analysis",
      icon: <BarChart3 className="w-6 h-6" />,
      benefits: ["95% Forecast Accuracy", "Seasonal Pattern Recognition", "Market Trend Analysis", "Inventory Optimization"]
    },
    {
      title: "Route Optimization",
      description: "Intelligent logistics planning with real-time traffic, weather, and cost optimization",
      icon: <Globe className="w-6 h-6" />,
      benefits: ["30% Cost Reduction", "Faster Delivery Times", "Fuel Efficiency", "Carbon Footprint Reduction"]
    },
    {
      title: "Supplier Management",
      description: "Automated supplier evaluation, risk assessment, and performance monitoring",
      icon: <Target className="w-6 h-6" />,
      benefits: ["Risk Mitigation", "Performance Tracking", "Cost Analysis", "Quality Control"]
    },
    {
      title: "Inventory Intelligence",
      description: "Smart inventory management with automated reordering and waste reduction",
      icon: <Zap className="w-6 h-6" />,
      benefits: ["25% Inventory Reduction", "Zero Stockouts", "Waste Elimination", "Cash Flow Optimization"]
    }
  ];

  const industries = [
    {
      name: 'Starter',
      price: '$199',
      period: '/month',
      description: 'Perfect for small to medium businesses',
      features: [
        'Up to 5 warehouses',
        'Basic demand forecasting',
        'Route optimization',
        'Inventory tracking',
        'Email support',
        'Basic analytics'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$499',
      period: '/month',
      description: 'Ideal for growing businesses',
      features: [
        'Up to 25 warehouses',
        'Advanced AI forecasting',
        'Multi-modal optimization',
        'Real-time analytics',
        'Priority support',
        'API access',
        'Custom integrations'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$999',
      period: '/month',
      description: 'For large enterprises',
      features: [
        'Unlimited warehouses',
        'Custom AI models',
        'Advanced risk management',
        'Dedicated support',
        'Custom development',
        'SLA guarantees',
        'On-premise deployment'
      ],      popular: false
    }
  ];

  const benefits = [
    {
      icon: <Target className="w-6 h-6 text-cyan-400" />,
      title: 'Reduce Costs by 25%',
      description: 'Optimize inventory levels and reduce waste through intelligent demand forecasting'
    },
    {
      icon: <Clock className="w-6 h-6 text-purple-400" />,
      title: 'Improve Delivery Times',
      description: 'Smart route optimization reduces delivery times by up to 40%'
    },
    {
      icon: <Globe className="w-6 h-6 text-yellow-400" />,
      title: 'Global Visibility',
      description: 'Real-time tracking and monitoring across your entire supply chain network'
    },
    {
      icon: <Shield className="w-6 h-6 text-green-400" />,
      title: 'Risk Mitigation',
      description: 'Proactive risk assessment and automated compliance monitoring'    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Supply Chain Optimizer - Zion Tech Group</title>
        <meta name="description" content="Transform your supply chain with AI-powered optimization. Reduce costs, improve efficiency, and enhance visibility with our advanced supply chain intelligence platform." />
        <meta name="keywords" content="AI supply chain, supply chain optimization, demand forecasting, logistics, inventory management" />
      </Helmet>
      
      <FuturisticBackground>
        <div className="min-h-screen">
          {/* Hero Section */}
          <section className="relative py-20">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                  AI Supply Chain Optimizer
                </h1>
                <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
                  Transform your supply chain with intelligent AI that predicts demand, optimizes routes, 
                  and automates inventory management for maximum efficiency and cost savings.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <FuturisticButton href="/contact" variant="primary">
                    Start Free Trial
                  </FuturisticButton>
                  <FuturisticButton href="#demo" variant="secondary">
                    Watch Demo
                  </FuturisticButton>
                </div>
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section className="py-20">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 text-center">
                Advanced Supply Chain Intelligence
              </h2>
              <p className="text-gray-300 text-center mb-12">
                Harness the power of AI to optimize every aspect of your supply chain
              </p>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {features.map((feature, index) => (
                  <FuturisticCard key={index} className="p-6">
                    <div className="text-cyan-400 mb-4">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-gray-300 mb-4">
                      {feature.description}
                    </p>
                    <ul className="space-y-2">
                      {feature.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="text-gray-300 flex items-center text-sm">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </FuturisticCard>
                ))}
              </div>
            </div>
          </section>

          {/* Benefits Section */}
          <section className="py-20 bg-white/5">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 text-center">
                Proven Results
              </h2>
              <p className="text-gray-300 text-center mb-12">
                Join industry leaders who are already transforming their supply chains
              </p>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {benefits.map((benefit, index) => (
                  <div key={index} className="text-center">
                    <div className="text-cyan-400 mb-4 flex justify-center">
                      {benefit.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-300">
                      {benefit.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Pricing Section */}
          <section className="py-20">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 text-center">
                Choose Your Plan
              </h2>
              <p className="text-gray-300 text-center mb-12">
                Flexible pricing options to fit your business needs
              </p>
              <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {pricingPlans.map((plan, index) => (
                  <FuturisticCard
                    key={index}
                    className={`p-8 ${
                      plan.popular ? 'ring-2 ring-cyan-400' : ''
                    }`}
                  >
                    {plan.popular && (
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                        <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                          Most Popular
                        </span>
                      </div>
                    )}
                    <div className="text-center mb-6">
                      <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                      <div className="text-4xl font-bold text-cyan-400 mb-2">
                        {plan.price}
                        <span className="text-lg text-gray-400">{plan.period}</span>
                      </div>
                      <p className="text-gray-300">{plan.description}</p>
                    </div>
                    <ul className="space-y-3 mb-8">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="text-gray-300 flex items-center">
                          <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <FuturisticButton
                      variant={plan.popular ? 'primary' : 'secondary'}
                      className="w-full"                    >
                      Get Started
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-4xl font-bold text-white mb-4">
                Ready to Optimize Your Supply Chain?
              </h2>
              <p className="text-gray-300 text-lg mb-8">
                Join industry leaders who are already transforming their supply chains with AI
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <FuturisticButton href="/contact" variant="primary">
                  Start Your Free Trial
                </FuturisticButton>
                <FuturisticButton href="/about" variant="secondary">
                  Learn More
                </FuturisticButton>
              </div>
            </div>
          </section>
        </div>
      </FuturisticBackground>    </>
  );
}