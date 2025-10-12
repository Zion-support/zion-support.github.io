import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { ArrowRight, Box, Truck, Target, CheckCircle, Phone, Mail, BarChart, Settings, AlertTriangle, Clock, Users, DollarSign, Globe, Activity, Shield, TrendingUp } from 'lucide-react'

export default function AiSupplyChainOptimizerPage() {
  const features = [
    {
      icon: Box,
      title: 'Demand Forecasting',
      description: 'AI-powered demand prediction with 95% accuracy to optimize inventory levels and reduce stockouts'
    },
    {
      icon: Truck,
      title: 'Route Optimization',
      description: 'Intelligent logistics planning that reduces delivery times by 30% and cuts transportation costs by 25%'
    },
    {
      icon: Target,
      title: 'Inventory Management',
      description: 'Smart inventory optimization that maintains optimal stock levels while minimizing carrying costs'
    },
    {
      icon: Globe,
      title: 'Supplier Analytics',
      description: 'Comprehensive supplier performance analysis and risk assessment for better vendor relationships'
    },
    {
      icon: Activity,
      title: 'Real-time Tracking',
      description: 'End-to-end visibility across your entire supply chain with real-time monitoring and alerts'
    },
    {
      icon: Settings,
      title: 'Automated Planning',
      description: 'AI-driven production and procurement planning that adapts to changing market conditions'
    }
  ];

  const benefits = [
    'Reduce supply chain costs by 35%',
    'Improve delivery performance by 50%',
    'Decrease inventory levels by 40%',
    'Increase supplier reliability by 60%',
    'Reduce stockouts by 80%',
    'Optimize warehouse operations by 45%'
  ];

  const pricingPlans = [
    {
      name: 'Startup',
      price: '$399',
      period: '/month',
      description: 'Perfect for small businesses and startups',
      features: [
        'Up to 100 SKUs',
        'Basic demand forecasting',
        'Route optimization',
        'Email support',
        'Standard reporting',
        'Mobile app access'
      ],
      popular: false
    },
    {
      name: 'Enterprise',
      price: '$999',
      period: '/month',
      description: 'Ideal for growing companies and mid-size businesses',
      features: [
        'Unlimited SKUs',
        'Advanced AI analytics',
        'Real-time tracking',
        'Priority support',
        'Custom dashboards',
        'API integration',
        'Multi-location support',
        'Advanced reporting'
      ],
      popular: true
    },
    {
      name: 'Global',
      price: '$2,499',
      period: '/month',
      description: 'For large enterprises and global operations',
      features: [
        'Everything in Enterprise',
        'Custom AI models',
        '24/7 monitoring',
        'Dedicated support',
        'White-label solution',
        'Custom integrations',
        'SLA guarantee',
        'On-site training',
        'Global compliance'
      ],
      popular: false
    }
  ];

  const industries = [
    {
      title: 'Manufacturing',
      description: 'Optimize production planning, raw material procurement, and finished goods distribution',
      icon: Settings,
      savings: '40% cost reduction'
    },
    {
      title: 'Retail',
      description: 'Streamline inventory management, demand forecasting, and omnichannel fulfillment',
      icon: Target,
      savings: '35% efficiency gain'
    },
    {
      title: 'E-commerce',
      description: 'Optimize fulfillment centers, last-mile delivery, and returns processing',
      icon: Globe,
      savings: '50% faster delivery'
    },
    {
      title: 'Healthcare',
      description: 'Ensure critical supplies availability, optimize pharmaceutical distribution, and manage cold chain',
      icon: Shield,
      savings: '60% risk reduction'
    }
  ];

  const testimonials = [
    {
      name: 'Michael Thompson',
      company: 'Global Manufacturing Inc.',
      role: 'Supply Chain Director',
      content: 'The AI supply chain optimizer has revolutionized our operations. We\'ve reduced costs by 40% and improved delivery performance by 50%. The ROI was achieved in just 4 months.',
      rating: 5
    },
    {
      name: 'Lisa Wang',
      company: 'Retail Chain Corp',
      role: 'Operations Manager',
      content: 'Inventory management has never been easier. We\'ve reduced stockouts by 80% and cut carrying costs by 35%. The demand forecasting accuracy is remarkable.',
      rating: 5
    },
    {
      name: 'James Rodriguez',
      company: 'E-commerce Platform',
      role: 'Logistics Director',
      content: 'Our delivery times have improved by 50% since implementing this system. The route optimization and real-time tracking features have transformed our logistics operations.',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
      <Helmet>
        <title>AI Supply Chain Optimizer - Smart Logistics Management | Zion Tech Group</title>
        <meta name="description" content="Optimize your supply chain with AI-powered logistics management. Reduce costs by 35%, improve delivery by 50%, and streamline operations. Starting at $399/month." />
        <meta name="keywords" content="supply chain optimization, AI logistics, inventory management, demand forecasting, route optimization, supply chain AI" />
      </Helmet>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="mb-6">
            <span className="inline-block px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-sm font-medium mb-4">
              📦 Reduce Supply Chain Costs by 35%
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            AI Supply Chain Optimizer
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Transform your supply chain operations with our AI-powered optimization platform. 
            Streamline logistics, reduce costs, and improve delivery performance with intelligent automation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a 
              href="tel:+13024640950" 
              className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center group shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/40 transform hover:scale-105"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call (302) 464-0950
            </a>
            <a 
              href="mailto:kleber@ziontechgroup.com" 
              className="px-8 py-4 border-2 border-blue-400 text-blue-400 rounded-lg font-semibold hover:bg-blue-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center group"
            >
              <Mail className="w-5 h-5 mr-2" />
              Get Free Demo
            </a>
          </div>
        </div>

        {/* Key Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-400 mb-2">35%</div>
            <div className="text-gray-300 text-sm">Cost Reduction</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-400 mb-2">50%</div>
            <div className="text-gray-300 text-sm">Delivery Improvement</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-400 mb-2">40%</div>
            <div className="text-gray-300 text-sm">Inventory Reduction</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-orange-400 mb-2">95%</div>
            <div className="text-gray-300 text-sm">Forecast Accuracy</div>
          </div>
        </div>

        {/* Features Section */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              Advanced AI Supply Chain Features
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Our comprehensive AI platform optimizes every aspect of your supply chain operations
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-blue-400/30 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/10">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Industries Section */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              Perfect for Every Industry
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Our AI supply chain optimizer works across all industries and business models
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {industries.map((industry, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-purple-400/30 transition-all duration-300 text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <industry.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{industry.title}</h3>
                <p className="text-gray-300 text-sm mb-3">{industry.description}</p>
                <div className="text-blue-400 font-bold text-sm">{industry.savings}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Benefits Section */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              Transform Your Supply Chain
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Experience the benefits of AI-powered supply chain optimization
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center">
                  <CheckCircle className="w-6 h-6 text-green-400 mr-4 flex-shrink-0" />
                  <span className="text-gray-300 text-lg">{benefit}</span>
                </div>
              ))}
            </div>
            <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl p-8 border border-blue-500/20">
              <h3 className="text-2xl font-bold text-white mb-4">Proven Results</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Average Cost Savings</span>
                  <span className="text-blue-400 font-bold text-xl">35%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Delivery Performance</span>
                  <span className="text-purple-400 font-bold text-xl">+50%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Inventory Reduction</span>
                  <span className="text-green-400 font-bold text-xl">40%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Forecast Accuracy</span>
                  <span className="text-orange-400 font-bold text-xl">95%</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              Choose Your Supply Chain Plan
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Flexible pricing options designed for businesses of all sizes
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`bg-white/5 backdrop-blur-lg rounded-2xl p-8 border transition-all duration-300 hover:transform hover:scale-105 ${
                plan.popular 
                  ? 'border-blue-400/50 shadow-2xl shadow-blue-500/20' 
                  : 'border-white/10 hover:border-blue-400/30'
              }`}>
                {plan.popular && (
                  <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white text-center py-2 px-4 rounded-full text-sm font-semibold mb-6 -mt-4">
                    Most Popular
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="text-4xl font-bold text-blue-400 mb-2">
                    {plan.price}
                    <span className="text-lg text-gray-400">{plan.period}</span>
                  </div>
                  <p className="text-gray-300">{plan.description}</p>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="/contact"
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center group ${
                    plan.popular
                      ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:from-blue-600 hover:to-purple-600 shadow-lg shadow-blue-500/25'
                      : 'border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-slate-900'
                  }`}
                >
                  Get Started
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              Trusted by Supply Chain Leaders
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              See what our clients are saying about our AI supply chain optimization platform
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-blue-400/30 transition-all duration-300">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Box key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed italic">
                  "{testimonial.content}"
                </p>
                <div className="border-t border-white/10 pt-4">
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-sm text-blue-400">{testimonial.role}, {testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center bg-gradient-to-r from-slate-800/50 to-purple-900/50 rounded-3xl p-12 border border-blue-500/20">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Optimize Your Supply Chain?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join 500+ companies that have already transformed their supply chain operations with our AI platform. 
              Get started with a free consultation today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <a 
                href="/contact" 
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center group shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/40 transform hover:scale-105"
              >
                Get Free Consultation
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="tel:+13024640950" 
                className="px-8 py-4 border-2 border-blue-400 text-blue-400 rounded-lg font-semibold hover:bg-blue-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center group"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call (302) 464-0950
              </a>
            </div>
            <div className="text-sm text-gray-400">
              <p>✓ Free consultation • ✓ No obligation • ✓ 30-day results guarantee</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}