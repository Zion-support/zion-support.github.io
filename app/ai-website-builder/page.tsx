'use client';
import React from 'react';
<<<<<<< HEAD
import { Code, Palette, Zap, Smartphone, Globe, CheckCircle, ArrowRight, Phone, Mail, Monitor } from 'lucide-react';
=======
import { Code, Palette, Zap, Smartphone, Globe, CheckCircle, Star, Users, TrendingUp, Clock, Phone, Mail, MapPin } from 'lucide-react';
>>>>>>> cursor/fix-errors-and-merge-to-main-d48f
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AIWebsiteBuilderPage: React.FC = () => {
  const features = [
    {
      icon: Code,
      title: 'AI Code Generation',
<<<<<<< HEAD
      description: 'Generate clean, optimized code automatically from your descriptions',
      benefits: ['Clean code', 'Best practices', 'Auto-optimization']
=======
      description: 'Generate clean, optimized code automatically from your design requirements',
      benefits: ['Clean HTML/CSS', 'Responsive design', 'SEO optimized', 'Cross-browser compatible']
>>>>>>> cursor/fix-errors-and-merge-to-main-d48f
    },
    {
      icon: Palette,
      title: 'Smart Design System',
<<<<<<< HEAD
      description: 'AI-powered design suggestions that match your brand and industry',
      benefits: ['Brand consistency', 'Industry standards', 'Visual harmony']
=======
      description: 'AI-powered design suggestions and color palette generation',
      benefits: ['Brand consistency', 'Color harmony', 'Typography optimization', 'Layout suggestions']
>>>>>>> cursor/fix-errors-and-merge-to-main-d48f
    },
    {
      icon: Zap,
      title: 'Instant Deployment',
<<<<<<< HEAD
      description: 'Deploy your website in minutes with our automated hosting and CDN',
      benefits: ['Fast deployment', 'Global CDN', 'Auto-scaling']
=======
      description: 'Deploy your website instantly with one-click publishing',
      benefits: ['CDN distribution', 'SSL certificates', 'Performance optimization', 'Global availability']
>>>>>>> cursor/fix-errors-and-merge-to-main-d48f
    },
    {
      icon: Smartphone,
      title: 'Mobile-First Design',
<<<<<<< HEAD
      description: 'Every website is automatically optimized for all devices and screen sizes',
      benefits: ['Responsive design', 'Touch optimization', 'Performance']
    },
    {
      icon: Globe,
      title: 'SEO Optimization',
      description: 'Built-in SEO tools and optimization for better search engine rankings',
      benefits: ['Meta optimization', 'Schema markup', 'Performance scores']
    },
    {
      icon: Monitor,
      title: 'Analytics Integration',
      description: 'Comprehensive analytics and performance monitoring built-in',
      benefits: ['Real-time analytics', 'Performance tracking', 'User insights']
=======
      description: 'Automatically create mobile-responsive designs',
      benefits: ['Touch optimization', 'Mobile performance', 'Progressive web app', 'Offline functionality']
>>>>>>> cursor/fix-errors-and-merge-to-main-d48f
    }
  ];

  const benefits = [
<<<<<<< HEAD
    {
      title: '90% Faster Development',
      description: 'Build professional websites in hours instead of weeks',
      percentage: '90%'
    },
    {
      title: 'Zero Coding Required',
      description: 'Create complex websites using natural language descriptions',
      percentage: '100%'
    },
    {
      title: 'Professional Quality',
      description: 'Enterprise-grade websites that rival custom development',
      percentage: '99%'
    }
=======
    'Build websites 10x faster than traditional methods',
    'No coding knowledge required',
    'AI-powered design suggestions',
    'Automatic mobile optimization',
    'Built-in SEO optimization',
    'Real-time collaboration',
    'Professional templates library',
    '24/7 customer support'
>>>>>>> cursor/fix-errors-and-merge-to-main-d48f
  ];

  const pricingPlans = [
    {
      name: 'Starter',
<<<<<<< HEAD
      price: '$29',
      period: '/month',
      description: 'Perfect for small businesses and personal projects',
      features: [
        'Up to 5 websites',
        'Basic AI features',
        'Standard templates',
        'Email support',
        'Basic analytics',
        'Mobile optimization'
=======
      price: '$19',
      period: '/month',
      description: 'Perfect for personal projects',
      features: [
        'Up to 5 websites',
        'Basic AI features',
        'Mobile optimization',
        'SSL certificates',
        'Email support'
>>>>>>> cursor/fix-errors-and-merge-to-main-d48f
      ],
      popular: false
    },
    {
      name: 'Professional',
<<<<<<< HEAD
      price: '$79',
      period: '/month',
      description: 'Ideal for growing businesses and agencies',
      features: [
        'Up to 25 websites',
        'Advanced AI features',
        'Premium templates',
        'Priority support',
        'Advanced analytics',
        'Custom domains',
        'E-commerce integration'
=======
      price: '$49',
      period: '/month',
      description: 'Ideal for small businesses',
      features: [
        'Up to 25 websites',
        'Advanced AI features',
        'Custom domains',
        'E-commerce integration',
        'Priority support',
        'Analytics dashboard'
>>>>>>> cursor/fix-errors-and-merge-to-main-d48f
      ],
      popular: true
    },
    {
      name: 'Enterprise',
<<<<<<< HEAD
      price: '$199',
      period: '/month',
      description: 'For large organizations and white-label solutions',
      features: [
        'Unlimited websites',
        'Full AI capabilities',
        'Custom templates',
        '24/7 support',
        'White-label options',
        'API access',
        'Custom integrations',
        'Dedicated support'
=======
      price: '$99',
      period: '/month',
      description: 'For agencies and large teams',
      features: [
        'Unlimited websites',
        'White-label solution',
        'API access',
        'Custom integrations',
        'Dedicated support',
        'Advanced analytics'
>>>>>>> cursor/fix-errors-and-merge-to-main-d48f
      ],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
<<<<<<< HEAD
        <title>AI Website Builder - Create Websites with AI | Zion Tech Group</title>
        <meta name="description" content="Build professional websites in minutes with our AI-powered website builder. No coding required, mobile-first design, and instant deployment." />
        <meta name="keywords" content="AI website builder, website creation, no-code, web design, AI development" />
=======
        <title>AI Website Builder - Zion Tech Group</title>
        <meta name="description" content="Build stunning websites in minutes with our AI-powered website builder. No coding required." />
>>>>>>> cursor/fix-errors-and-merge-to-main-d48f
      </Helmet>
      
      <Navigation />
      
<<<<<<< HEAD
      <main className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <section className="text-center mb-16">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mr-4">
                <Code className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-5xl font-bold text-white neon-text">
                AI Website Builder
              </h1>
            </div>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Create stunning, professional websites in minutes with our AI-powered builder. 
              No coding required, mobile-first design, and instant deployment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="cyber-button inline-flex items-center justify-center px-8 py-4 text-lg font-semibold"
              >
                Start Building
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
              <a
                href="/demo"
                className="cyber-button-outline inline-flex items-center justify-center px-8 py-4 text-lg font-semibold"
              >
                View Demo
              </a>
=======
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI Website Builder
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Create stunning, professional websites in minutes with our AI-powered builder. No coding required.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                Start Building Free
              </button>
              <button className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                View Examples
              </button>
>>>>>>> cursor/fix-errors-and-merge-to-main-d48f
            </div>
          </section>

<<<<<<< HEAD
          {/* Features Section */}
          <section className="py-20 bg-slate-800/50">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-white mb-4">Powerful AI Features</h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Our AI website builder combines cutting-edge technology with intuitive design to create professional websites effortlessly.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {features.map((feature, index) => (
                  <div key={index} className="cyber-card p-8 text-center group hover:scale-105 transition-transform duration-300">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                      <feature.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                    <p className="text-gray-300 mb-6">{feature.description}</p>
                    <ul className="space-y-2">
                      {feature.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center text-sm text-gray-400">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
=======
      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Powerful AI Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI-powered website builder makes creating professional websites effortless.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                <feature.icon className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="text-sm text-gray-400 flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                      {benefit}
                    </li>
                  ))}
                </ul>
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
              Why Choose Our AI Website Builder?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the future of web development with AI-powered tools.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="bg-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <p className="text-white font-medium">{benefit}</p>
>>>>>>> cursor/fix-errors-and-merge-to-main-d48f
              </div>
            </div>
          </section>

<<<<<<< HEAD
          {/* Benefits Section */}
          <section className="py-16 px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-white mb-4">Why Choose Our AI Builder?</h2>
                <p className="text-xl text-gray-300">Revolutionary benefits that transform web development</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {benefits.map((benefit, index) => (
                  <div key={index} className="cyber-card p-6 text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Zap className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                    <p className="text-gray-300 mb-4">{benefit.description}</p>
                    <div className="text-3xl font-bold text-purple-400">{benefit.percentage}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Pricing Section */}
          <section className="py-16 px-4 bg-slate-800/50">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-white mb-4">Simple, Affordable Pricing</h2>
                <p className="text-xl text-gray-300">Choose the plan that fits your website needs</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {pricingPlans.map((plan, index) => (
                  <div key={index} className={`cyber-card p-8 relative ${plan.popular ? 'ring-2 ring-purple-500' : ''}`}>
                    {plan.popular && (
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                        <span className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                          Most Popular
                        </span>
                      </div>
                    )}
                    <div className="text-center mb-6">
                      <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                      <div className="text-4xl font-bold text-purple-400 mb-2">
                        {plan.price}
                        <span className="text-lg text-gray-400"> {plan.period}</span>
                      </div>
                      <p className="text-gray-300">{plan.description}</p>
                    </div>
                    <ul className="space-y-3 mb-8">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-gray-300">
                          <CheckCircle className="w-5 h-5 text-purple-400 mr-3" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all ${
                      plan.popular 
                        ? 'bg-gradient-to-r from-purple-500 to-pink-600 text-white hover:from-purple-600 hover:to-pink-700' 
                        : 'bg-slate-700 text-white hover:bg-slate-600'
                    }`}>
                      Get Started
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </section>
=======
      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Choose Your Plan
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Flexible pricing options for every need and budget.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`bg-white/10 backdrop-blur-sm rounded-xl p-8 relative ${plan.popular ? 'ring-2 ring-purple-400' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400 ml-1">{plan.period}</span>
                  </div>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 rounded-lg font-semibold transition-colors ${
                  plan.popular 
                    ? 'bg-purple-600 hover:bg-purple-700 text-white' 
                    : 'border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white'
                }`}>
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Build Your Website?
          </h2>
          <p className="text-xl text-gray-200 mb-8">
            Join thousands of users who have built amazing websites with our AI-powered builder.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors">
              Start Building Free
            </button>
            <button className="border border-white text-white hover:bg-white hover:text-purple-600 px-8 py-3 rounded-lg font-semibold transition-colors">
              Contact Sales
            </button>
          </div>
        </div>
      </section>
>>>>>>> cursor/fix-errors-and-merge-to-main-d48f

          {/* CTA Section */}
          <section className="py-16 px-4 bg-gradient-to-r from-purple-600/20 to-pink-600/20">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold text-white mb-6">Ready to Build Your Website?</h2>
              <p className="text-xl text-gray-300 mb-8">
                Join thousands of businesses that have already created stunning websites with our AI builder.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="cyber-button px-8 py-4 text-lg font-semibold inline-flex items-center"
                >
                  Start Building Now
                </a>
                <a
                  href="tel:+13024640950"
                  className="cyber-button-outline px-8 py-4 text-lg font-semibold inline-flex items-center"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call (302) 464-0950
                </a>
              </div>
            </div>
          </section>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default AIWebsiteBuilderPage;