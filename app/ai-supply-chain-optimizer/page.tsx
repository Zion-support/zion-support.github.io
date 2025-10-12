'use client';


import React from 'react';

import { Helmet } from 'react-helmet-async';
import { Truck, Package, TrendingUp, Shield, Clock, CheckCircle, ArrowRight, Star, Globe, Target } from 'lucide-react';

import FuturisticBackground from '../components/FuturisticBackground';
import FuturisticCard from '../components/FuturisticCard';
import FuturisticButton from '../components/FuturisticButton';

export default function AISupplyChainOptimizerPage() {
  const features = [
    {
      title: 'Predictive Demand Forecasting',
      description: 'AI algorithms analyze historical data, market trends, and external factors to predict demand with 92% accuracy.',
      icon: <TrendingUp className="w-5 h-5ml-2" />,
      benefits: ['Demand prediction', 'Seasonal analysis', 'Market trend insights', 'Inventory optimization']
    },
    {
      title: 'Smart Route Optimization',
      description: 'Advanced logistics algorithms optimize delivery routes, reduce fuel costs, and improve delivery times.',
      icon: <Truck className="w-5 h-5ml-2" />,
      benefits: ['Route optimization', 'Fuel cost reduction', 'Delivery time improvement', 'Real-time tracking']
    },
    {
      title: 'Automated Inventory Management',
      description: 'Intelligent inventory control with automated reordering, stock level monitoring, and waste reduction.',
      icon: <Package className="w-5 h-5ml-2" />,
      benefits: ['Auto reordering', 'Stock monitoring', 'Waste reduction', 'Cost optimization']
    },
    {
      title: 'Risk Management & Compliance',
      description: 'Comprehensive risk assessment and compliance monitoring to ensure supply chain resilience.',
      icon: <Shield className="w-5 h-5ml-2" />,
      benefits: ['Risk assessment', 'Compliance monitoring', 'Disruption alerts', 'Mitigation strategies']
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
      description: 'Advanced features for growing companies',
      features: [
        'Up to 25 warehouses',
        'Advanced AI forecasting',
        'Multi-modal optimization',
        'Priority support',
        'Custom integrations',
        'Real-time analytics'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$1,999',
      period: '/month',
      description: 'Complete solution for large organizations',
      features: [
        'Unlimited warehouses',
        'Custom AI models',
        'White-label options',
        'Dedicated account manager',
        'API access',
        'Advanced security'
      ],
      popular: false
  ];
  const testimonials = [
    {
      name: 'Robert Chen',
      role: 'Supply Chain Director',
      company: 'Global Logistics Inc.',
      content: 'AI Supply Chain Optimizer reduced our logistics costs by 35% and improved delivery times by 40%. The predictive analytics are game-changing.',
      rating: 5
    },
    {
      name: 'Maria Rodriguez',
      role: 'Operations Manager',
      company: 'RetailMax Corp',
      content: 'The automated inventory management saved us from stockouts and overstocking. Our inventory turnover improved by 50%.',
      rating: 5
    },
    {
      name: 'James Wilson',
      role: 'CEO',
      company: 'Manufacturing Solutions',
      content: 'This AI tool transformed our entire supply chain. We can now predict disruptions before they happen and optimize accordingly.',
      rating: 5
  ];
  const stats = [

    { number: '35%', label: 'Cost Reduction', icon: <TrendingUp className="w-6h-6" / /> },
    { number: '92%', label: 'Forecast Accuracy', icon: <Target className="w-6h-6" / /> },
    { number: '500+', label: 'Companies Using', icon: <Globe className="w-6h-6" / /> },
    { number: '40%', label: 'Delivery Improvement', icon: <Clock className="w-6h-6" / /> 

  ];
  return (

        <title>5G Data Analytics - Zion Tech Group</title>

        {/* Hero Section */

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-boldtext-whitemb-6">AI Supply Chain Optimizer</h1>
                Revolutionize your supply chain with AI-powered demand forecasting, route optimization, 

                and intelligent inventory management. Reduce costs by 35% and improve efficiency by 40%.

                  variant="primary"
                  size="lg"
 window.open('/contact', '_blank')
                  Start Free Trial

                  variant="ghost"
                  size="lg"
window.open('#demo', '_blank')
                  Watch Demo

            {/* Stats */

 (
    </h1>
                  <div className="flex items-centerjustify-centermb-2">{stat.icon
</div>
                  <div className="text-3xl font-boldtext-whitemb-2">{stat.number}</div>
                  <div className="text-gray-300">{stat.label}</div>

              ))

        {/* Features Section */
    
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-boldtext-whitemb-4">Advanced AI Features</h2>
                Cutting-edge artificial intelligence meets supply chain expertise to optimize your operations

 (

                    {feature.icon
    </h2>
                    <h3 className="text-xl font-semiboldtext-whiteml-3">{feature.title}</h3>

                  <p className="text-lg text-gray-300 mb-8">{feature.description}</p>

 (

                        {benefit
                    ))

              ))

        {/* Pricing Section */
    
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-boldtext-whitemb-4">Choose Your Plan</h2>
                Scalable pricing options to match your supply chain needs

 (
                  {plan.popular && (
</h2>
                      <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-1 rounded-fulltext-smfont-semibold">Most Popular

                  )
</span>
                    <h3 className="text-2xl font-boldtext-whitemb-2">{plan.name}</h3>
                      <span className="text-4xlfont-boldtext-white">{plan.price}</span>
                      <span className="text-gray-400ml-1">{plan.period}</span>
                    <p className="text-lg text-gray-300 mb-8">{plan.description}</p>

 (

                        {feature
                    ))

                    variant="{plan.popular" ? "primary" : "ghost"
                    className="w-full"
window.open('/contact', '_blank')
                    Get Started

              ))

        {/* Testimonials Section */
    
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-boldtext-whitemb-4">What Our Clients Say</h2>
                Join hundreds of companies optimizing their supply chains

 (

 (
                    ))
</h2>
                  <blockquote className="text-gray-300mb-6italic">"{testimonial.content}"
                    <p className="text-lg text-gray-300 mb-8">{testimonial.name}</p>
                    <p className="text-lg text-gray-300 mb-8">{testimonial.role}</p>
                    <p className="text-lg text-gray-300 mb-8">{testimonial.company}</p>

              ))

        {/* CTA Section */
    
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-boldtext-whitemb-4">Ready to Optimize Your Supply Chain?</h2>
                Start your free 14-day trial today. No credit card required. Join 500+ companies optimizing their supply chains.

                  variant="primary"
                  size="lg"
window.open('/contact', '_blank')

                  Start Free Trial
                
                  variant="secondary"
                  size="lg"
window.open('/contact', '_blank')</h2>
