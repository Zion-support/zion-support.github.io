'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Truck, Package, TrendingUp, Shield, Target, Globe, Clock, CheckCircle } from 'lucide-react';
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
      title: 'Route Optimization',
      description: 'Intelligent routing algorithms minimize transportation costs and delivery times while maximizing efficiency.',
      icon: <Truck className="w-5 h-5 ml-2" />,
      benefits: ['Cost reduction', 'Faster delivery', 'Fuel efficiency', 'Real-time tracking']
    },
    {
      title: 'Inventory Management',
      description: 'Smart inventory control that prevents stockouts and overstock situations through predictive analytics.',
      icon: <Package className="w-5 h-5 ml-2" />,
      benefits: ['Stock optimization', 'Automated reordering', 'Waste reduction', 'Space utilization']
    },
    {
      title: 'Risk Assessment',
      description: 'Comprehensive risk analysis to identify potential supply chain disruptions before they impact operations.',
      icon: <Shield className="w-5 h-5 ml-2" />,
      benefits: ['Risk prediction', 'Mitigation strategies', 'Contingency planning', 'Business continuity']
    }
  ];

  const benefits = [
    {
      title: 'Cost Reduction',
      description: 'Reduce operational costs by up to 35% through optimized processes and resource allocation.',
      icon: <TrendingUp className="w-6 h-6 text-green-400" />
    },
    {
      title: 'Improved Efficiency',
      description: 'Streamline operations with AI-driven automation and intelligent decision-making.',
      icon: <Target className="w-6 h-6 text-blue-400" />
    },
    {
      title: 'Global Scale',
      description: 'Manage complex supply chains across multiple countries and time zones seamlessly.',
      icon: <Globe className="w-6 h-6 text-purple-400" />
    },
    {
      title: 'Real-time Monitoring',
      description: 'Get instant visibility into your entire supply chain with real-time tracking and alerts.',
      icon: <Clock className="w-6 h-6 text-yellow-400" />
    }
  ];

  const stats = [
    { number: '35%', label: 'Cost Reduction', icon: <TrendingUp className="w-6 h-6" /> },
    { number: '92%', label: 'Forecast Accuracy', icon: <Target className="w-6 h-6" /> },
    { number: '500+', label: 'Companies Using', icon: <Globe className="w-6 h-6" /> },
    { number: '40%', label: 'Delivery Improvement', icon: <Clock className="w-6 h-6" /> }
  ];

  const testimonials = [
    {
      name: 'James Wilson',
      role: 'CEO',
      company: 'Manufacturing Solutions',
      content: 'This AI tool transformed our entire supply chain. We can now predict disruptions before they happen and optimize accordingly.',
      rating: 5
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Supply Chain Optimizer - Zion Tech Group</title>
        <meta name="description" content="Revolutionize your supply chain with AI-powered optimization, predictive analytics, and automated inventory management." />
      </Helmet>
      
      <FuturisticBackground>
        <div className="min-h-screen">
          {/* Hero Section */}
          <section className="relative py-20 px-4">
            <div className="container mx-auto text-center">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
                AI Supply Chain Optimizer
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Transform your supply chain with cutting-edge AI technology. Optimize demand forecasting, 
                route planning, and inventory management for maximum efficiency and cost savings.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <FuturisticButton href="/contact" variant="primary" size="lg">
                  Start Free Trial
                </FuturisticButton>
                <FuturisticButton href="#demo" variant="secondary" size="lg">
                  Watch Demo
                </FuturisticButton>
              </div>
            </div>
          </section>

          {/* Stats Section */}
          <section className="py-16 px-4">
            <div className="container mx-auto">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="flex justify-center mb-2">
                      {stat.icon}
                    </div>
                    <div className="text-3xl font-bold text-white mb-1">{stat.number}</div>
                    <div className="text-gray-300">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section className="py-20 px-4">
            <div className="container mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                  Powerful AI Features
                </h2>
                <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                  Leverage advanced artificial intelligence to optimize every aspect of your supply chain
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                {features.map((feature, index) => (
                  <FuturisticCard key={index} className="p-6">
                    <div className="flex items-start mb-4">
                      <div className="flex-shrink-0 mr-4">
                        {feature.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-white mb-2">
                          {feature.title}
                        </h3>
                        <p className="text-gray-300 mb-4">
                          {feature.description}
                        </p>
                        <ul className="space-y-2">
                          {feature.benefits.map((benefit, benefitIndex) => (
                            <li key={benefitIndex} className="flex items-center text-gray-300">
                              <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </FuturisticCard>
                ))}
              </div>
            </div>
          </section>

          {/* Benefits Section */}
          <section className="py-20 px-4 bg-gray-900/50">
            <div className="container mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                  Why Choose Our AI Solution?
                </h2>
                <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                  Experience the benefits of AI-powered supply chain optimization
                </p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {benefits.map((benefit, index) => (
                  <div key={index} className="text-center">
                    <div className="flex justify-center mb-4">
                      {benefit.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">
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

          {/* Testimonials Section */}
          <section className="py-20 px-4">
            <div className="container mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                  What Our Customers Say
                </h2>
                <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                  Join industry leaders who trust our AI solutions
                </p>
              </div>
              <div className="max-w-4xl mx-auto">
                {testimonials.map((testimonial, index) => (
                  <FuturisticCard key={index} className="p-8 text-center">
                    <div className="flex justify-center mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <CheckCircle key={i} className="w-5 h-5 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-gray-300 text-lg mb-6 italic">
                      "{testimonial.content}"
                    </p>
                    <div>
                      <p className="font-semibold text-white text-lg">{testimonial.name}</p>
                      <p className="text-gray-400">{testimonial.role}, {testimonial.company}</p>
                    </div>
                  </FuturisticCard>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20 px-4">
            <div className="container mx-auto text-center">
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
      </FuturisticBackground>
    </>
  );
}