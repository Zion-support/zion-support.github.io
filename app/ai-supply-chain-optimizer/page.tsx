'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Truck, Package, TrendingUp, Shield, Target, Globe, Clock } from 'lucide-react';

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
        'White-label solution',
        'Dedicated support',
        'API access',
        'Custom development'
      ],
      popular: false
    }
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
      name: 'David Kim',
      company: 'Global Logistics Corp',
      content: 'Our supply chain efficiency improved by 40% within the first quarter. The AI predictions are incredibly accurate.',
      rating: 5
    },
    {
      name: 'Maria Santos',
      company: 'RetailMax Inc',
      content: 'The automated inventory management saved us from stockouts and overstocking. ROI was immediate.',
      rating: 5
    },
    {
      name: 'James Wilson',
      company: 'Manufacturing Plus',
      content: 'Route optimization reduced our fuel costs by 25% and improved delivery times significantly.',
      rating: 5
    }
  ];

  const stats = [
    { number: '35%', label: 'Cost Reduction', icon: <TrendingUp className="w-6 h-6" /> },
    { number: '92%', label: 'Forecast Accuracy', icon: <Target className="w-6 h-6" /> },
    { number: '500+', label: 'Companies Using', icon: <Globe className="w-6 h-6" /> },
    { number: '40%', label: 'Delivery Improvement', icon: <Clock className="w-6 h-6" /> }
  ];

  return (
    <>
      <Helmet>
        <title>AI Supply Chain Optimizer - Zion Tech Group</title>
        <meta name="description" content="Revolutionize your supply chain with AI-powered demand forecasting, route optimization, and intelligent inventory management." />
        <meta name="description" content="Revolutionize your supply chain with AI-powered optimization, predictive analytics, and automated inventory management." />
      </Helmet>

      <FuturisticBackground>
        <div className="min-h-screen"></div>
          {/* Hero Section */}
          <div className="container mx-auto px-4 py-20"></div>
            <div className="text-center mb-16"></div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                AI Supply Chain Optimizer
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
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
                  variant="ghost"
                  size="lg"
                  onClick={() => window.open('#demo', '_blank')}
                >
                  Watch Demo
                </FuturisticButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Powerful AI Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI-powered platform provides comprehensive supply chain optimization tools
            </p>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Advanced AI Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Cutting-edge artificial intelligence meets supply chain expertise to optimize your operations
            </p>
          </div>
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
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </FuturisticCard>
                ))}
              </div>

            {/* Pricing Section */}
            <div className="mb-16"></div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 text-center">
                Choose Your Plan
              </h2>
              <p className="text-gray-300 text-center mb-12"></p>
                Scalable pricing options to match your supply chain needs
              </p>
              <div className="grid md:grid-cols-3 gap-8"></div>
                {pricingPlans.map((plan, index) => (
                  <FuturisticCard key={index} className={`${plan.popular ? 'ring-2 ring-cyan-400' : ''}`}>
                    {plan.popular && (
                      <div className="text-center mb-4"></div>
                        <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-1 rounded-full text-sm font-semibold"></span>
                          Most Popular
                        </span>
                      </div>
                    )}
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <div className="mb-4"></div>
                      <span className="text-4xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-400 ml-1">{plan.period}</span>
                    </div>
                    <p className="text-gray-300 text-sm mb-6">{plan.description}</p>
                    <ul className="space-y-3 mb-8">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="text-gray-300 flex items-center">
                          <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <FuturisticButton
                      variant={plan.popular ? "primary" : "ghost"}
                      className="w-full"
                      onClick={() => window.open('/contact', '_blank')}
                    >
                      Get Started
                    </FuturisticButton>
                  </FuturisticCard>
                ))}
              </div>

            {/* Testimonials Section */}
            <div className="mb-16"></div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 text-center">
                What Our Clients Say
              </h2>
              <p className="text-gray-300 text-center mb-12"></p>
                Join hundreds of companies optimizing their supply chains
              </p>
              <div className="grid md:grid-cols-3 gap-8"></div>
                {testimonials.map((testimonial, index) => (
                  <FuturisticCard key={index}>
                    <div className="flex mb-4"></div>
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <span key={i} className="text-yellow-400">★</span>
                      ))}
                    </div>
                    <blockquote className="text-gray-300 mb-6 italic">"{testimonial.content}"</blockquote>
                    <div></div>
                      <p className="font-semibold text-white">{testimonial.name}</p>
                      <p className="text-gray-400 text-sm">{testimonial.role}</p>
                      <p className="text-gray-500 text-sm">{testimonial.company}</p>
                    </div>
                  </FuturisticCard>
                ))}
              </div>

            {/* CTA Section */}
            <div className="text-center"></div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Optimize Your Supply Chain?
              </h2>
              <p className="text-gray-300 mb-8"></p>
                Start your free 14-day trial today. No credit card required. Join 500+ companies optimizing their supply chains.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
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
          </div>

          {/* Features Section */}
          <div className="py-20 px-4"></div>
            <div className="max-w-6xl mx-auto"></div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 text-center">
                Advanced Supply Chain Intelligence
              </h2>
              <p className="text-gray-300 text-center mb-12"></p>
                Harness the power of AI to optimize every aspect of your supply chain
              </p>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"></div>
                {features.map((feature, index) => (
                  <FuturisticCard key={index} className="p-6">
                    <div className="flex items-center mb-4"></div>
                      {feature.icon}
                      <h3 className="text-xl font-semibold text-white ml-3">{feature.title}</h3>
                    </div>
                    <p className="text-gray-300 mb-4">{feature.description}</p>
                    <ul className="space-y-2">
                      {feature.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="text-sm text-cyan-400 flex items-center">
                          <span className="w-2 h-2 bg-cyan-400 rounded-full mr-2"></span>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </FuturisticCard>
                ))}
              </div>
          </div>

          {/* Pricing Section */}
          <div className="py-20 px-4"></div>
            <div className="max-w-6xl mx-auto"></div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 text-center">
                Flexible Pricing Plans
              </h2>
              <p className="text-gray-300 text-center mb-12"></p>
                Choose the plan that scales with your business
              </p>
              <div className="grid md:grid-cols-3 gap-8"></div>
                {pricingPlans.map((plan, index) => (
                  <FuturisticCard key={index} className={`p-8 relative ${plan.popular ? 'border-cyan-400' : ''}`}>
                    {plan.popular && (
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2"></div>
                        <span className="bg-cyan-400 text-black px-4 py-1 rounded-full text-sm font-semibold"></span>
                          Most Popular
                        </span>
                      </div>
                    )}
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 mb-6">{plan.description}</p>
                    <div className="mb-6"></div>
                      <span className="text-4xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-400">{plan.period}</span>
                    </div>
                    <ul className="space-y-3 mb-8">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-300">
                          <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>
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

          {/* Testimonials */}
          <div className="py-20 px-4"></div>
            <div className="max-w-6xl mx-auto"></div>
              <h2 className="text-3xl font-bold text-white mb-4 text-center">
                Trusted by Industry Leaders
              </h2>
              <p className="text-gray-300 text-center mb-12"></p>
                See how companies are transforming their supply chains
              </p>
              <div className="grid md:grid-cols-3 gap-8"></div>
                {testimonials.map((testimonial, index) => (
                  <FuturisticCard key={index} className="p-6">
                    <div className="flex mb-4"></div>
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

          {/* CTA Section */}
          <div className="py-20 px-4"></div>
            <div className="max-w-4xl mx-auto text-center"></div>
              <h2 className="text-3xl font-bold text-white mb-4">
                Ready to Optimize Your Supply Chain?
              </h2>
              <p className="text-gray-300 mb-8"></p>
                Join industry leaders who are already transforming their supply chains with AI
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
                <FuturisticButton variant="primary" size="lg">
                  Start Your Free Trial
                </FuturisticButton>
                <FuturisticButton variant="secondary" size="lg">
                  Schedule Demo
                </FuturisticButton>
              </div>
            </div>
          </div>
        </div>
      </FuturisticBackground>
    </>
  );
}