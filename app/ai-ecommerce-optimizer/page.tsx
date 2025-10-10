'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, ArrowRight, Phone, Mail, MapPin, Zap, Shield, Brain, Globe } from 'lucide-react';

const PagePage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Solutions',
      description: 'Advanced AI technology to transform your business operations and improve efficiency'
    },
    {
      icon: Zap,
      title: 'High Performance',
      description: 'Lightning-fast processing and real-time analytics for optimal results'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security with encryption and compliance standards'
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Worldwide deployment and support for international businesses'
    }
  ];

  const benefits = [
    'Advanced AI technology integration',
    'Real-time processing and analytics',
    'Enterprise-grade security and compliance',
    'Scalable and flexible solutions',
    '24/7 technical support',
    'Easy integration with existing systems',
    'Cost-effective pricing plans',
    'Proven track record of success'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Page | Zion Tech Group</title>
        <meta name="description" content="Professional Page services by Zion Tech Group. Advanced AI and IT solutions for your business." />
        <meta name="keywords" content="page, AI solutions, IT services, Zion Tech Group, page" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Page
              </span>
              <br />
              <span className="text-white">Solutions</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your business with our advanced page solutions. 
              Powered by cutting-edge AI technology and industry expertise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300">
                Learn More
              </button>
const $1: React.FC = () => {
  const features = [,
    {,
      icon: BarChart,
      title: 'AI-Powered Analytics',
      description: 'Advanced machine learning algorithms analyze customer behavior, purchase patterns, and market trends to optimize your e-commerce strategy.',
      benefits: ['Real-time insights', 'Predictive analytics', 'Customer segmentation', 'Performance tracking']
    },
    {
      icon: Target,
      title: 'Smart Product Recommendations',
      description: 'Intelligent recommendation engine that increases conversion rates by suggesting relevant products to customers.',
      benefits: ['Personalized suggestions', 'Cross-selling optimization', 'Upselling strategies', 'Customer retention']
    },
    {
      icon: Zap,
      title: 'Automated Pricing Optimization',
      description: 'Dynamic pricing strategies that adjust product prices based on demand, competition, and market conditions.',
      benefits: ['Competitive pricing', 'Profit maximization', 'Demand forecasting', 'Price elasticity analysis']
    },
    {
      icon: Users,
      title: 'Customer Journey Optimization',
      description: 'AI-driven customer journey mapping and optimization to improve user experience and increase conversions.',
      benefits: ['Journey mapping', 'Funnel optimization', 'A/B testing', 'Conversion tracking']
    },
    {
      icon: Shield,
      title: 'Fraud Detection & Prevention',
      description: 'Advanced fraud detection system that protects your business from fraudulent transactions and chargebacks.',
      benefits: ['Real-time monitoring', 'Risk assessment', 'Chargeback prevention', 'Security alerts']
    },
    {
      icon: Globe,
      title: 'Multi-Channel Optimization',
      description: 'Seamless optimization across all sales channels including web, mobile, social media, and marketplaces.',
      benefits: ['Omnichannel strategy', 'Channel performance', 'Unified analytics', 'Cross-platform optimization']
    }
  ];

  const optimizationAreas = [
    {
      title: 'Product Catalog Management',
      description: 'AI-powered product categorization, tagging, and optimization for better searchability and discoverability.',
      icon: Package,
      metrics: ['40% faster product setup', '60% better search ranking', '35% increased visibility']
    },
    {
      title: 'Inventory Optimization',
      description: 'Smart inventory management with demand forecasting and automated reorder points.',
      icon: Database,
      metrics: ['50% reduction in stockouts', '30% lower inventory costs', '25% improved turnover']
    },
    {
      title: 'Search & Filter Enhancement',
      description: 'Intelligent search algorithms and dynamic filtering to help customers find products quickly.',
      icon: Search,
      metrics: ['45% faster product discovery', '55% improved search accuracy', '40% higher engagement']
    },
    {
      title: 'Checkout Process Optimization',
      description: 'Streamlined checkout experience with AI-powered form completion and payment optimization.',
      icon: CreditCard,
      metrics: ['35% reduction in cart abandonment', '50% faster checkout', '25% higher completion rate']
    },
    {
      title: 'Mobile Experience Enhancement',
      description: 'Mobile-first optimization with responsive design and touch-friendly interfaces.',
      icon: Mobile,
      metrics: ['60% better mobile performance', '45% increased mobile conversions', '30% faster load times']
    },
    {
      title: 'Customer Support Automation',
      description: 'AI-powered chatbots and automated support systems for 24/7 customer assistance.',
      icon: Bot,
      metrics: ['80% faster response times', '70% customer satisfaction', '50% reduced support costs']
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$99/month',
      description: 'Perfect for small e-commerce businesses',
      features: [,
        'Up to 1,000 products',
        'Basic analytics dashboard',
        'Standard recommendations',
        'Email support',
        'Mobile optimization',
        'Basic fraud detection'
      ],
      popular: false,
    },
    {
      name: 'Professional',
      price: '$299/month',
      description: 'Ideal for growing online stores',
      features: [,
        'Up to 10,000 products',
        'Advanced analytics & insights',
        'AI-powered recommendations',
        'Priority support',
        'Multi-channel optimization',
        'Advanced fraud detection',
        'A/B testing tools',
        'Custom integrations'
      ],
      popular: true,
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      description: 'For large-scale e-commerce operations',
      features: [,
        'Unlimited products',
        'Custom AI models',
        'Dedicated account manager',
        '24/7 phone support',
        'White-label solutions',
        'Advanced security features',
        'Custom reporting',
        'API access',
        'On-premise deployment'
      ],
      popular: false,
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'TechGear Store',
      role: 'E-commerce Director',
      content: 'AI E-commerce Optimizer increased our conversion rate by 45% and reduced cart abandonment by 35%. The AI recommendations are incredibly accurate.',
      rating: 5,
    },
    {
      name: 'Michael Chen',
      company: 'Fashion Forward',
      role: 'CEO',
      content: 'The pricing optimization feature alone paid for itself in the first month. We saw a 30% increase in profit margins.',
      rating: 5,
    },
    {
      name: 'Emily Rodriguez',
      company: 'Home & Garden Plus',
      role: 'Marketing Manager',
      content: 'The customer journey optimization helped us understand our customers better and increased our average order value by 25%.',
      rating: 5,
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
      <Navigation >{/* Hero Section */}</Navigation>
      </Navigation><section className="pt-24 pb-16 px-4">
  return(<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
      <Navigation />
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="container mx-auto max-w-6xl"></div>
          <div className="text-center mb-16"></div>
            <div className="inline-flex items-center space-x-2 bg-cyan-400/10 text-cyan-400 px-4 py-2 rounded-full text-sm font-medium mb-6"></div>
        <div className="container mx-auto max-w-6xl"></section>
          <div className="text-center mb-16"></div>
            <div className="inline-flex items-center space-x-2 bg-cyan-400/10 text-cyan-400 px-4 py-2 rounded-full text-sm font-medium mb-6"></div>
              <Brain className="w-4 h-4" />
              <span>AI-Powered E-commerce Optimization</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6"></h1>
              AI E-commerce</h1> <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Optimizer</span><p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">Transform your online store with AI-powered optimization. Increase conversions, reduce cart abandonment,</p>
              and maximize revenue with intelligent automation and analytics.</p>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
              <a href="/contact" className="cyber-button px-8 py-4 text-lg">Get Started Today</a>
                <ArrowRight className="w-5 h-5 ml-2" /></ArrowRigh>
              <a href="/demo" className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg hover:bg-cyan-400/10 transition-colors text-lg">View Demo</a>
            </div>)
            <h1 className="text-5xl md: text-6xl font-bold text-white mb-6">)</h1>
              AI E-commerce <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Optimizer</span>)
            </h1>)
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">),
              Transform your online store with AI-powered optimization. Increase conversions, reduce cart abandonment)
              and maximize revenue with intelligent automation and analytics.
            </p>
            <div className="flex flex-col sm: flex-row gap-4 justify-center"></div>
              <a href="/contact" className="cyber-button px-8 py-4 text-lg">
                Get Started Today;
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
              <a href="/demo" className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg hover:bg-cyan-400/10 transition-colors text-lg">
                View Demo;
              </a>
            </div>,
          </div>,
,
          {/* Key Metrics */}
          <div className="grid grid-cols-2 md: grid-cols-4 gap-6 mb-16"></div>
            <div className="text-center"></div>
              <div className="text-3xl font-bold text-cyan-400 mb-2">45%<div className="text-gray-300">Conversion Increase</div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"></div>
            <div className="text-center"></div>
              <div className="text-3xl font-bold text-cyan-400 mb-2">45%</div><div className="text-gray-300">Conversion Increase</div>
            </div>
            <div className="text-center"></div>
              <div className="text-3xl font-bold text-purple-400 mb-2">35%</div><div className="text-gray-300">Cart Abandonment Reduction</div>
            </div>
            <div className="text-center"></div>
              <div className="text-3xl font-bold text-green-400 mb-2">30%</div><div className="text-gray-300">Revenue Growth</div>
            </div>
            <div className="text-center"></div>
              <div className="text-3xl font-bold text-yellow-400 mb-2">50%<div className="text-gray-300">Faster Checkout</div>
            <div className="text-center"></div>
              <div className="text-3xl font-bold text-yellow-400 mb-2">50%</div><div className="text-gray-300">Faster Checkout</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Our Page?
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl"></div>
          <div className="text-center mb-16"></div>
            <h2 className="text-4xl font-bold text-white mb-6">Powerful AI Features for E-commerce Success<p className="text-xl text-gray-300 max-w-3xl mx-auto">Our AI-powered platform provides comprehensive optimization tools to maximize your online store's performance.<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">{features.map((feature, index) => (</div>
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-cyan-400/20 rounded-lg p-6 hover:border-cyan-400/40 transition-colors"></div>
                <div className="w-12 h-12 bg-cyan-400/10 rounded-lg flex items-center justify-center mb-4"></div>
        <div className="container mx-auto max-w-6xl"></section>
          <div className="text-center mb-16"></div>
            <h2 className="text-4xl font-bold text-white mb-6">Powerful AI Features for E-commerce Success</h2><p className="text-xl text-gray-300 max-w-3xl mx-auto">Our AI-powered platform provides comprehensive optimization tools to maximize your online store's performance.</p><div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">{features.map((feature, index) => (</div>
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-cyan-400/20 rounded-lg p-6 hover:border-cyan-400/40 transition-colors"></div>
                <div className="w-12 h-12 bg-cyan-400/10 rounded-lg flex items-center justify-center mb-4"></div>
                  <feature.icon className="w-6 h-6 text-cyan-400" />
            <h2 className="text-4xl font-bold text-white mb-6">
              Powerful AI Features for E-commerce Success;
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our page solutions deliver unmatched performance, security, and scalability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg mb-4">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
          <div className="grid md: grid-cols-2 lg:grid-cols-3 gap-8">,
            {features.map((feature, index) => (</div>
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-cyan-400/20 rounded-lg p-6 hover: border-cyan-400/40 transition-colors">,</div>
                <div className="w-12 h-12 bg-cyan-400/10 rounded-lg flex items-center justify-center mb-4">,</div>
                  <feature.icon className="w-6 h-6 text-cyan-400" />,
                </div>,
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Key Benefits
      {/* Optimization Areas */}
      <section className="py-16 px-4 bg-slate-800/30">
        <div className="container mx-auto max-w-6xl"></div>
          <div className="text-center mb-16"></div>
            <h2 className="text-4xl font-bold text-white mb-6">Comprehensive E-commerce Optimization<p className="text-xl text-gray-300 max-w-3xl mx-auto">Every aspect of your online store optimized with AI for maximum performance and customer satisfaction.<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">{optimizationAreas.map((area, index) => (</div>
              <div key={index} className="bg-slate-900/50 backdrop-blur-sm border border-purple-400/20 rounded-lg p-6 hover:border-purple-400/40 transition-colors"></div>
                <div className="w-12 h-12 bg-purple-400/10 rounded-lg flex items-center justify-center mb-4"></div>
        <div className="container mx-auto max-w-6xl"></section>
          <div className="text-center mb-16"></div>
            <h2 className="text-4xl font-bold text-white mb-6">Comprehensive E-commerce Optimization</h2><p className="text-xl text-gray-300 max-w-3xl mx-auto">Every aspect of your online store optimized with AI for maximum performance and customer satisfaction.</p><div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">{optimizationAreas.map((area, index) => (</div>
              <div key={index} className="bg-slate-900/50 backdrop-blur-sm border border-purple-400/20 rounded-lg p-6 hover:border-purple-400/40 transition-colors"></div>
                <div className="w-12 h-12 bg-purple-400/10 rounded-lg flex items-center justify-center mb-4"></div>
                  <area.icon className="w-6 h-6 text-purple-400" />
            <h2 className="text-4xl font-bold text-white mb-6">
              Comprehensive E-commerce Optimization;
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the power of our page solutions for your business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-purple-400 mt-1 flex-shrink-0" />
                <p className="text-gray-300 text-lg">{benefit}</p>
          <div className="grid md: grid-cols-2 lg:grid-cols-3 gap-8">,
            {optimizationAreas.map((area, index) => (</div>
              <div key={index} className="bg-slate-900/50 backdrop-blur-sm border border-purple-400/20 rounded-lg p-6 hover: border-purple-400/40 transition-colors">,</div>
                <div className="w-12 h-12 bg-purple-400/10 rounded-lg flex items-center justify-center mb-4">,</div>
                  <area.icon className="w-6 h-6 text-purple-400" />,
                </div>,
                <h3 className="text-xl font-semibold text-white mb-3">{area.title}</h3>
                <p className="text-gray-300 mb-4">{area.description}</p><div className="space-y-2">{area.metrics.map((metric, idx) => (</div>
                    <div key={idx} className="flex items-center text-sm text-green-400"></div>
                      <TrendingUp className="w-4 h-4 mr-2" >{metric}</TrendingUp>
                    </TrendingUp>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl"></div>
          <div className="text-center mb-16"></div>
            <h2 className="text-4xl font-bold text-white mb-6">Choose Your Optimization Plan<p className="text-xl text-gray-300 max-w-3xl mx-auto">Flexible pricing plans designed to scale with your business growth.<div className="grid md:grid-cols-3 gap-8">{pricingPlans.map((plan, index) => (<div key={index} className={`relative bg-slate-800/50 backdrop-blur-sm border rounded-lg p-8 ${
        <div className="container mx-auto max-w-6xl"></section>
          <div className="text-center mb-16"></div>
            <h2 className="text-4xl font-bold text-white mb-6">Choose Your Optimization Plan</h2><p className="text-xl text-gray-300 max-w-3xl mx-auto">Flexible pricing plans designed to scale with your business growth.</p><div className="grid md:grid-cols-3 gap-8">{pricingPlans.map((plan, index) => (</div><div key={index} className={`relative bg-slate-800/50 backdrop-blur-sm border rounded-lg p-8 ${
                plan.popular
                  ? 'border-cyan-400/40 ring-2 ring-cyan-400/20'
                  : 'border-gray-600/50'
              }`}>{plan.popular && (</div>
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2"></div>
                    <span className="bg-cyan-400 text-slate-900 px-4 py-1 rounded-full text-sm font-medium">Most Popular</span>
            <h2 className="text-4xl font-bold text-white mb-6">
              Choose Your Optimization Plan;
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Flexible pricing plans designed to scale with your business growth.
            </p>
          </div>

          <div className="grid md: grid-cols-3 gap-8">,
            {pricingPlans.map((plan, index) => (</div>
              <div key={index} className={`relative bg-slate-800/50 backdrop-blur-sm border rounded-lg p-8 ${
                plan.popular;
                  ? 'border-cyan-400/40 ring-2 ring-cyan-400/20'}
                  : 'border-gray-600/50'}
              }`}>
                {plan.popular && (</div>
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2"></div>
                    <span className="bg-cyan-400 text-slate-900 px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular;
                    </span>
                  </div>
                )}
                <div className="text-center mb-6"></div>
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3><div className="text-4xl font-bold text-cyan-400 mb-2">{plan.price}</div><p className="text-gray-300">{plan.description}</p><ul className="space-y-3 mb-8">{plan.features.map((feature, idx) => (</ul>
                    <li key={idx} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3" >{feature}</CheckCircle>
                    </CheckCircle>
                  ))}
                <a href="/contact" className={`w-full block text-center py-3 px-6 rounded-lg font-medium transition-colors ${
                  plan.popular
                    ? 'bg-cyan-400 text-slate-900 hover:bg-cyan-300'
                    : 'border border-cyan-400 text-cyan-400 hover:bg-cyan-400/10'
                }`}>Get Started</a>
                  plan.popular;
                    ? 'bg-cyan-400 text-slate-900 hover: bg-cyan-300'}
                    : 'border border-cyan-400 text-cyan-400 hover:bg-cyan-400/10'}
                }`}>
                  Get Started;
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4 bg-slate-800/30">
        <div className="container mx-auto max-w-6xl"></div>
          <div className="text-center mb-16"></div>
            <h2 className="text-4xl font-bold text-white mb-6">What Our Customers Say<p className="text-xl text-gray-300 max-w-3xl mx-auto">Join thousands of successful e-commerce businesses using AI optimization.<div className="grid md:grid-cols-3 gap-8">{testimonials.map((testimonial, index) => (</div>
            <h2 className="text-4xl font-bold text-white mb-6">
              What Our Customers Say;
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Join thousands of successful e-commerce businesses using AI optimization.
            </p>
          </div>

          <div className="grid md: grid-cols-3 gap-8">,
            {testimonials.map((testimonial, index) => (</div>
              <div key={index} className="bg-slate-900/50 backdrop-blur-sm border border-gray-600/50 rounded-lg p-6"></div>
                <div className="flex items-center mb-4">{[...Array(testimonial.rating)].map((_, i) => (<Star key={i} className="w-5 h-5 text-yellow-400 fill-current" >))}<p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                <div></div>
                  <div className="font-semibold text-white">{testimonial.name}<div className="text-cyan-400 text-sm">{testimonial.role}<div className="text-gray-400 text-sm">{testimonial.company}</div>
        <div className="container mx-auto max-w-6xl"></section>
          <div className="text-center mb-16"></div>
            <h2 className="text-4xl font-bold text-white mb-6">What Our Customers Say</h2><p className="text-xl text-gray-300 max-w-3xl mx-auto">Join thousands of successful e-commerce businesses using AI optimization.</p><div className="grid md:grid-cols-3 gap-8">{testimonials.map((testimonial, index) => (</div>
              <div key={index} className="bg-slate-900/50 backdrop-blur-sm border border-gray-600/50 rounded-lg p-6"></div>
                <div className="flex items-center mb-4">{[...Array(testimonial.rating)].map((_, i) => (</div><Star key={i} className="w-5 h-5 text-yellow-400 fill-current" >))}<p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                <div></div>
                  <div className="font-semibold text-white">{testimonial.name}</div><div className="text-cyan-400 text-sm">{testimonial.role}</div><div className="text-gray-400 text-sm">{testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-purple-100 mb-8">
              Contact our experts to discuss your page needs and get a customized solution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center">
                <Phone className="mr-2 h-5 w-5" />
                Call Now
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300 flex items-center justify-center">
                <Mail className="mr-2 h-5 w-5" />
                Email Us
              </button>
            </div>
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl text-center"></section>
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Optimize Your E-commerce Store?</h2><p className="text-xl text-gray-300 mb-8">Start your AI-powered optimization journey today and see immediate results.</p>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
            <a href="/contact" className="cyber-button px-8 py-4 text-lg">Start Free Trial</a>
              <ArrowRight className="w-5 h-5 ml-2" /></ArrowRigh>
            <a href="/demo" className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg hover:bg-cyan-400/10 transition-colors text-lg">Schedule Demo</a>
          <div className="flex flex-col sm: flex-row gap-4 justify-center"></div>
            <a href="/contact" className="cyber-button px-8 py-4 text-lg">
              Start Free Trial;
              <ArrowRight className="w-5 h-5 ml-2" />
            </a>
            <a href="/demo" className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg hover:bg-cyan-400/10 transition-colors text-lg">
              Schedule Demo;
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PagePage;
