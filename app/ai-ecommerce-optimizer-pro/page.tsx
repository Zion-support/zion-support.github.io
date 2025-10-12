<<<<<<< HEAD
<<<<<<< HEAD
import React  from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Zap, Shield, BarChart3, Users} from 'lucide-react';
=======
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-33de
'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
<<<<<<< HEAD
import { ArrowRight, CheckCircle, Zap, Shield, BarChart3, Users} from 'lucide-react';

>>>>>>> cursor/fix-errors-and-merge-to-main-3b8f
const AiEcommerceOptimizerProPage: React.FC = () => {
  const features = [
    {
      icon: Zap,
      title: 'AI-Powered Optimization',
      description: 'Advanced machine learning algorithms to optimize your e-commerce performance.'
    },
    {
      icon: BarChart3,
      title: 'Analytics Dashboard',
      description: 'Comprehensive analytics and insights to track your business growth.'
    },
    {
      icon: Shield,
      title: 'Security & Compliance',
      description: 'Enterprise-grade security with full compliance and data protection.'
    },
    {
      icon: Users,
      title: 'Customer Insights',
      description: 'Deep customer behavior analysis to improve conversion rates.'
    }
  ];
import { ArrowRight, CheckCircle, Zap, Shield, Brain } from 'lucide-react';

const Page: React.FC = () => {
  const pricingPlans = [
    {
      name: 'Starter',
      price: '$99',
      period: '/month',
      description: 'Ideal for growing e-commerce businesses',
      features: [
        'Up to 10,000 products',
        'Basic AI optimization',
        'Analytics dashboard',
        'Email support'
      ]
    },
    {
      name: 'Professional',
      price: '$299',
      period: '/month',
      description: 'Perfect for established online stores',
      features: [
        'Up to 50,000 products',
        'Advanced AI optimization',
        'Real-time analytics',
        'Priority support',
        'Custom integrations'
      ]
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'For large-scale e-commerce operations',
      features: [
        'Unlimited products',
        'Full AI suite',
        'Dedicated support',
        'Custom development',
        'SLA guarantee'
      ]
    }
  ];
  return (
<<<<<<< HEAD
    <div className="min-h-screen bg-gradient-to-brfrom-slate-50to-blue-50">
      <Helmet />
        <title />AI E-commerce Optimizer Pro - Zion Tech Group</title>
=======
    <>
    <div className="min-h-screen bg-gradient-to-brfrom-slate-50to-blue-50">
        </div>
      <Helmet>
        <title>5G Data Analytics - Zion Tech Group</title>
        <meta name="description" content="Professional 5G data analytics services by Zion Tech Group. Transform your business with our expert solutions." />
      </Helmet>
        <title>AI E-commerce Optimizer Pro - Zion Tech Group</title>
>>>>>>> cursor/fix-errors-and-merge-to-main-3b8f
        <meta name="description" content="Advanced AI-powered e-commerce optimization solutions. Boost sales, improve conversion rates, and maximize your online store performance." />
        <meta name="keywords" content="AI e-commerce, e-commerce optimization, AI solutions, online store optimization, Zion Tech Group" />
      </Helmet>

      {/* Hero Section */}
    <>
      <section className="relative py-20 px-4sm:px-6lg:px-8" />
        <div className="max-w-7xlmx-auto">
<<<<<<< HEAD
          <div className="text-center">
            <h1 className="text-4xl md:text-6 xl font-boldtext-gray-900mb-6" />
              AI E-commerce <span className="text-blue-600"   />Optimizer Pro</span>
=======
        </div>
          <div className="text-center" />
            <h1 className="text-4 xl md:text-6 xl font-boldtext-gray-900mb-6" />
              AI E-commerce <span className="text-blue-600">Optimizer Pro</span>
>>>>>>> cursor/fix-errors-and-merge-to-main-3b8f
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xlmx-auto">
              Transform your e-commerce business with advanced AI optimization solutions that boost sales, 
              improve conversion rates, and maximize your online store performance.
    <>
            </p>
            <div className="flex flex-col sm:flex-rowgap-4justify-center">
<<<<<<< HEAD
              <Link to="/contact" className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lghover:bg-blue-700transition-colors" >
          Get Started
                
          <ArrowRight className="ml-2h-5w-5"  />
        </Link>
              <Link to="/services" 
                className="inline-flex items-center px-8 py-4 border-2 border-blue-600 text-blue-600 font-semibold rounded-lghover:bg-blue-50transition-colors"
    < >
           
          <Helmet  />
        </Link>
        <title />AI E-commerce Optimizer Pro - Zion Tech Group</title>
=======
        </div>
              <Link to="/contact" className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lghover:bg-blue-700transition-colors" />
                Get Started
    <>
                <ArrowRight className="ml-2h-5w-5" />
              </Link>
              <Link 
                to="/services" 
                className="inline-flex items-center px-8 py-4 border-2 border-blue-600 text-blue-600 font-semibold rounded-lghover:bg-blue-50transition-colors"
    <>
        </Link>
    < />
      <Helmet>
        <title>5G Data Analytics - Zion Tech Group</title>
        <meta name="description" content="Professional 5G data analytics services by Zion Tech Group. Transform your business with our expert solutions." />
      </Helmet>
        <title>AI E-commerce Optimizer Pro - Zion Tech Group</title>
>>>>>>> cursor/fix-errors-and-merge-to-main-3b8f
        <meta name="description" content="Professional AI e-commerce optimization services by Zion Tech Group. Expert solutions tailored to your business needs." />
        <meta name="keywords" content="AI e-commerce, optimization, Zion Tech Group" />
=======
import { ArrowRight, CheckCircle, Star, Brain, BarChart3, Target, TrendingUp } from 'lucide-react';

export default function AIEcommerceOptimizerPro() {
  const features = [
    {
      icon: <Brain className="w-6 h-6 text-cyan-400" />,
      title: 'AI-Powered Analytics',
      description: 'Advanced machine learning algorithms analyze your e-commerce data to identify optimization opportunities'
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
  ]

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
  ]

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
  ]

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
  ]

  return (
    <>
      <Helmet>
        <title>AI E-commerce Optimizer Pro - Zion Tech Group</title>
        <meta name="description" content="Professional AI e-commerce optimization services by Zion Tech Group. Expert solutions tailored to your business needs." />
        <meta name="keywords" content="AI e-commerce, optimization, conversion, Zion Tech Group" />
>>>>>>> cursor/fix-errors-and-merge-to-main-33de
        <meta property="og:title" content="AI E-commerce Optimizer Pro - Zion Tech Group" />
        <meta property="og:description" content="Professional AI e-commerce optimization services by Zion Tech Group. Expert solutions tailored to your business needs." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/ai-ecommerce-optimizer-pro" />
      </Helmet>

<<<<<<< HEAD
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900to-slate-900pt-16">
<<<<<<< HEAD
=======
        </div>
>>>>>>> cursor/fix-errors-and-merge-to-main-3b8f
        {/* Hero Section */}
    <>
        <section className="py-20" />
          <div className="container mx-autopx-4text-center">
<<<<<<< HEAD
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6" />
=======
        </div>
            <h1 className="text-5xl md:text-6xl font-boldtext-whitemb-6" />
>>>>>>> cursor/fix-errors-and-merge-to-main-3b8f
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400bg-clip-texttext-transparent" />
                AI E-commerce Optimizer Pro
    <>
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8max-w-3xlmx-auto">
              Professional AI e-commerce optimization services by Zion Tech Group. Expert solutions tailored to your business needs.
    <>
            </p>
            <div className="flex flex-col sm:flex-row gap-4justify-centermb-12">
<<<<<<< HEAD
              <Link to="/contact" className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25 flex items-centerjustify-centergroup" >
          Get Started
                
          <ArrowRight className="ml-2group-hover:translate-x-1transition-transform"  />
        </Link>
              <Link to="/contact" className="border border-cyan-500 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-500/10 transition-all duration-300transformhover:scale-105" />
                Learn More
                />View All Services
=======
        </div>
              <Link to="/contact" className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25 flex items-centerjustify-centergroup" />
                Get Started
    <>
                <ArrowRight className="ml-2group-hover:translate-x-1transition-transform" />
              </Link>
              <Link to="/contact" className="border border-cyan-500 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-500/10 transition-all duration-300transformhover:scale-105" />
                Learn More
                />View All Services
    <>
>>>>>>> cursor/fix-errors-and-merge-to-main-3b8f
              </Link>
=======
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-16">
        {/* Hero Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                AI E-commerce Optimizer Pro
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Professional AI e-commerce optimization services by Zion Tech Group. Expert solutions tailored to your business needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link 
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25 flex items-center justify-center group"
              >
                Get Started
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                to="/contact"
                className="border border-cyan-500 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-500/10 transition-all duration-300 transform hover:scale-105"
              >
                Learn More
              </Link>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Key Features</h2>
              <p className="text-xl text-gray-300">Powerful AI capabilities for superior e-commerce optimization</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300">
                  <div className="mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              ))}
>>>>>>> cursor/fix-errors-and-merge-to-main-33de
            </div>
        </div>
      </section>

<<<<<<< HEAD
        {/* Features Section */}
    <>
        <section className="py-20" />
          <div className="containermx-autopx-4">
<<<<<<< HEAD
            <div className="text-centermb-16">
              <h2 className="text-4xl font-bold text-white mb-6" />
=======
        </div>
            <div className="text-centermb-16">
        </div>
              <h2 className="text-4xl font-boldtext-whitemb-6" />
>>>>>>> cursor/fix-errors-and-merge-to-main-3b8f
                Why Choose Our AI E-commerce Optimizer?
    <>
              </h2>
<<<<<<< HEAD
              <p className="text-xl text-gray-300max-w-3xlmx-auto">
              Our advanced AI technology helps you maximize your e-commerce potential
=======
              <p className="text-xl text-gray-300max-w-3xlmx-auto" />
                Our advanced AI technology helps you maximize your e-commerce potential
    <>
>>>>>>> cursor/fix-errors-and-merge-to-main-3b8f
              </p>
            </div>
            
            <div className="grid grid-cols-1md:grid-cols-3gap-8">
<<<<<<< HEAD
=======
        </div>
>>>>>>> cursor/fix-errors-and-merge-to-main-3b8f
              {[
                {
                  icon: <Brain className="w-12h-12text-cyan-400" />,
                  title: "AI-Powered Optimization",
                  description: "Advanced machine learning algorithms optimize your product listings, pricing, and recommendations."
                },
                {
                  icon: <Zap className="w-12h-12text-purple-400" />,
                  title: "Real-time Analytics",
                  description: "Get instant insights into customer behavior and sales performance with our comprehensive dashboard."
                },
                {
                  icon: <Shield className="w-12h-12text-green-400" />,
                  title: "Secure & Reliable",
                  description: "Enterprise-grade security ensures your data is protected while maintaining 99.9% uptime."
                }
              ].map((feature, index) => (
    <>
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8 text-center hover:border-cyan-500/50transition-allduration-300" />
                  <div className="flexjustify-centermb-4">
<<<<<<< HEAD
=======
        </div>
>>>>>>> cursor/fix-errors-and-merge-to-main-3b8f
                    {feature.icon}
    <>
=======
        {/* Detailed Features Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Comprehensive Features</h2>
              <p className="text-xl text-gray-300">Everything you need for effective e-commerce optimization</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {optimizationFeatures.map((category, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-white mb-4">{category.category}</h3>
                  <ul className="space-y-2">
                    {category.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
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
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Pricing Plans</h2>
              <p className="text-xl text-gray-300">Choose the perfect plan for your e-commerce needs</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`bg-slate-800/50 backdrop-blur-sm border rounded-xl p-8 relative ${plan.popular ? 'border-cyan-500 scale-105' : 'border-slate-700'}`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-400 ml-1">{plan.period}</span>
                    </div>
                    <p className="text-gray-300 mt-2">{plan.description}</p>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white hover:from-cyan-600 hover:to-purple-600'
                        : 'border border-cyan-500 text-cyan-400 hover:bg-cyan-500/10'
                    }`}
                  >
                    Get Started
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">What Our Clients Say</h2>
              <p className="text-xl text-gray-300">Real results from real businesses</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                  <div>
                    <p className="font-semibold text-white">{testimonial.name}</p>
                    <p className="text-cyan-400">{testimonial.company}</p>
>>>>>>> cursor/fix-errors-and-merge-to-main-33de
                  </div>
<<<<<<< HEAD
                  <h3 className="text-xl font-semiboldtext-white mb-4" />{feature.title}</h3>
                  <p className="text-gray-300">
              {feature.description}</p>
=======
                  <h3 className="text-xl font-semiboldtext-whitemb-4">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
>>>>>>> cursor/fix-errors-and-merge-to-main-3b8f
                </div>
              ))}
<<<<<<< HEAD
    <>
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-33de
            </div>
        </section>

<<<<<<< HEAD
        {/* Pricing Section */}
    <>
        <section className="py-20" />
          <div className="containermx-autopx-4">
<<<<<<< HEAD
            <div className="text-centermb-16">
              <h2 className="text-4xl font-bold text-white mb-6" />
=======
        </div>
            <div className="text-centermb-16">
        </div>
              <h2 className="text-4xl font-boldtext-whitemb-6" />
>>>>>>> cursor/fix-errors-and-merge-to-main-3b8f
                Choose Your Plan
    <>
              </h2>
<<<<<<< HEAD
              <p className="text-xl text-gray-300max-w-3xlmx-auto">
              Flexible pricing options to fit your business needs
=======
              <p className="text-xl text-gray-300max-w-3xlmx-auto" />
                Flexible pricing options to fit your business needs
    <>
>>>>>>> cursor/fix-errors-and-merge-to-main-3b8f
=======
        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="bg-gradient-to-r from-cyan-900/50 to-purple-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-12 text-center">
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready to Optimize Your E-commerce?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Contact us to learn more about our AI e-commerce optimization solutions and how we can help your business grow.
>>>>>>> cursor/fix-errors-and-merge-to-main-33de
              </p>
            </div>
            
            <div className="grid grid-cols-1md:grid-cols-3gap-8">
<<<<<<< HEAD
=======
        </div>
>>>>>>> cursor/fix-errors-and-merge-to-main-3b8f
              {pricingPlans.map((plan, index) => (
    <>
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8 hover:border-cyan-500/50transition-allduration-300" />
                  <div className="text-centermb-8">
<<<<<<< HEAD
                    <h3 className="text-2xl font-bold text-white mb-2" />{plan.name}</h3>
                    <div className="text-4xl font-boldtext-cyan-400mb-2">
=======
        </div>
                    <h3 className="text-2xl font-boldtext-whitemb-2">{plan.name}</h3>
                    <div className="text-4xl font-boldtext-cyan-400mb-2">
        </div>
>>>>>>> cursor/fix-errors-and-merge-to-main-3b8f
                      {plan.price}
    <>
                      <span className="text-lgtext-gray-400">{plan.period}</span>
                    </div>
<<<<<<< HEAD
                    <p className="text-gray-300">
              {plan.description}</p>
=======
                    <p className="text-gray-300">{plan.description}</p>
>>>>>>> cursor/fix-errors-and-merge-to-main-3b8f
                  </div>
                  
                  <ul className="space-y-4mb-8" />
                    {plan.features.map((feature, featureIndex) => (
<<<<<<< HEAD
                      <li key={featureIndex} className="flex items-center text-gray-300" />
=======
    <>
                      <li key={featureIndex} className="flexitems-centertext-gray-300" />
>>>>>>> cursor/fix-errors-and-merge-to-main-3b8f
                        <CheckCircle className="w-5 h-5 text-green-400mr-3flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Link to="/contact" className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 text-white py-3 rounded-lg font-semibold text-center block hover:from-cyan-600 hover:to-purple-600transition-allduration-300" />
                    Get Started
    <>
                  </Link>
                </div>
              ))}
    <>
            </div>
        </div>
      </section>

        {/* CTA Section */}
    <>
        <section className="py-20" />
          <div className="containermx-autopx-4">
<<<<<<< HEAD
            <div className="bg-gradient-to-r from-cyan-900/50 to-purple-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-2xlp-12text-center">
              <h2 className="text-4xl font-bold text-white mb-6" />
=======
        </div>
            <div className="bg-gradient-to-r from-cyan-900/50 to-purple-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-2xlp-12text-center">
        </div>
              <h2 className="text-4xl font-boldtext-whitemb-6" />
>>>>>>> cursor/fix-errors-and-merge-to-main-3b8f
                Ready to Get Started?
    <>
              </h2>
<<<<<<< HEAD
              <p className="text-xl text-gray-300 mb-8max-w-2xlmx-auto">
              Contact us to learn more about our solutions and how we can help your business.
              </p>
              <div className="flex flex-col sm:flex-rowgap-4justify-center">
=======
              <p className="text-xl text-gray-300 mb-8max-w-2xlmx-auto" />
                Contact us to learn more about our solutions and how we can help your business.
    <>
              </p>
              <div className="flex flex-col sm:flex-rowgap-4justify-center">
        </div>
>>>>>>> cursor/fix-errors-and-merge-to-main-3b8f
                <Link to="/contact" className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105shadow-lghover:shadow-cyan-500/25" />
                  Contact Us
    <>
                </Link>
                <Link to="/services" className="border border-cyan-500 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-500/10 transition-all duration-300transformhover:scale-105" />
                  View Services
    <>
                </Link>
              </div>
<<<<<<< HEAD
          </div>
        </section>
      </div>
        </div>
      </div>
          </div>
        </div>
      </div>
        </div>
      </div>
          </div>
        </div>
      </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default Page;
<<<<<<< HEAD
=======
    </>
>>>>>>> cursor/fix-errors-and-merge-to-main-3b8f
=======
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
>>>>>>> cursor/fix-errors-and-merge-to-main-33de
