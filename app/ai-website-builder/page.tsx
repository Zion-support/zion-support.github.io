'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import { Globe, Code, Palette, Smartphone, Zap, CheckCircle, ArrowRight, Phone, Mail, Star, Clock, Users, Award, TrendingUp, Layout, Image, ShoppingCart, Search, Shield, Rocket, Wrench, Eye, MousePointer } from 'lucide-react';

const AIWebsiteBuilderPage: React.FC = () => {
  const [selectedPlan, setSelectedPlan] = useState('pro');

  const features = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'AI-Powered Design',
      description: 'Describe your vision and watch AI create a stunning website in minutes',
      benefits: ['Natural language input', 'Instant design generation', 'No coding required']
    },
    {
      icon: <Palette className="w-6 h-6" />,
      title: 'Smart Branding',
      description: 'AI automatically matches colors, fonts, and style to your brand identity',
      benefits: ['Brand color extraction', 'Font pairing suggestions', 'Style consistency']
    },
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: 'Mobile-First Design',
      description: 'Every website is automatically optimized for all devices and screen sizes',
      benefits: ['Responsive design', 'Mobile optimization', 'Cross-device testing']
    },
    {
      icon: <Search className="w-6 h-6" />,
      title: 'SEO Optimization',
      description: 'Built-in SEO tools ensure your website ranks high in search results',
      benefits: ['Meta tag optimization', 'Schema markup', 'Page speed optimization']
    },
    {
      icon: <ShoppingCart className="w-6 h-6" />,
      title: 'E-commerce Ready',
      description: 'Add online stores, payment processing, and inventory management instantly',
      benefits: ['Product catalogs', 'Payment gateways', 'Order management']
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Security & Performance',
      description: 'Enterprise-grade security and lightning-fast loading speeds',
      benefits: ['SSL certificates', 'CDN delivery', 'Security monitoring']
    }
  ];

  const pricingPlans = [
    {
      id: 'starter',
      name: 'Starter',
      price: 19,
      period: 'month',
      description: 'Perfect for personal websites and small businesses',
      features: [
        'Up to 5 pages',
        'Custom domain',
        'Basic AI features',
        'Mobile optimization',
        'SSL certificate',
        'Email support',
        '1GB storage'
      ],
      popular: false
    },
    {
      id: 'pro',
      name: 'Pro',
      price: 49,
      period: 'month',
      description: 'Ideal for growing businesses and professionals',
      features: [
        'Unlimited pages',
        'Custom domain',
        'Advanced AI features',
        'E-commerce integration',
        'SEO optimization',
        'Priority support',
        '10GB storage',
        'Analytics dashboard'
      ],
      popular: true
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      price: 149,
      period: 'month',
      description: 'For large organizations and agencies',
      features: [
        'Everything in Pro',
        'White-label solution',
        'API access',
        'Custom integrations',
        'Dedicated support',
        'Unlimited storage',
        'Team collaboration',
        'Advanced analytics'
      ],
      popular: false
    }
  ];

  const stats = [
    { number: '100K+', label: 'Websites Created', icon: <Globe className="w-8 h-8" /> },
    { number: '95%', label: 'Time Saved', icon: <Clock className="w-8 h-8" /> },
    { number: '4.8/5', label: 'User Rating', icon: <Star className="w-8 h-8" /> },
    { number: '50K+', label: 'Happy Customers', icon: <Users className="w-8 h-8" /> }
  ];

  const templates = [
    {
      name: 'Business Pro',
      category: 'Business',
      image: '🏢',
      description: 'Professional business website with modern design',
      features: ['About page', 'Services', 'Contact form', 'Blog']
    },
    {
      name: 'E-commerce Store',
      category: 'E-commerce',
      image: '🛒',
      description: 'Complete online store with payment integration',
      features: ['Product catalog', 'Shopping cart', 'Checkout', 'Inventory']
    },
    {
      name: 'Portfolio',
      category: 'Creative',
      image: '🎨',
      description: 'Showcase your work with stunning portfolio design',
      features: ['Gallery', 'Project showcase', 'About', 'Contact']
    },
    {
      name: 'Restaurant',
      category: 'Food & Drink',
      image: '🍽️',
      description: 'Menu, reservations, and location information',
      features: ['Menu display', 'Online ordering', 'Reservations', 'Reviews']
    },
    {
      name: 'SaaS Landing',
      category: 'Technology',
      image: '💻',
      description: 'High-converting landing page for software products',
      features: ['Hero section', 'Features', 'Pricing', 'Testimonials']
    },
    {
      name: 'Blog & News',
      category: 'Content',
      image: '📰',
      description: 'Content-focused website with blog functionality',
      features: ['Article layout', 'Categories', 'Search', 'Comments']
    }
  ];

  const testimonials = [
    {
      name: 'Jennifer Martinez',
      role: 'Small Business Owner',
      company: 'Martinez Consulting',
      content: 'I built my entire business website in 30 minutes! The AI understood exactly what I wanted and created something better than I imagined.',
      rating: 5,
      avatar: '👩‍💼'
    },
    {
      name: 'David Kim',
      role: 'Freelance Designer',
      company: 'Kim Design Studio',
      content: 'As a designer, I was skeptical about AI website builders. But this one actually understands design principles and creates beautiful, functional sites.',
      rating: 5,
      avatar: '👨‍🎨'
    },
    {
      name: 'Sarah Thompson',
      role: 'Marketing Director',
      company: 'TechStart Inc',
      content: 'We needed a website fast for our product launch. AI Website Builder delivered a professional site that converted visitors into customers.',
      rating: 5,
      avatar: '👩‍💻'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Website Builder - Zion Tech Group | Create Professional Websites in Minutes</title>
        <meta name="description" content="Build stunning, professional websites with AI. No coding required. Choose from templates or describe your vision and watch AI create your perfect website." />
        <meta name="keywords" content="AI website builder, website creation, no-code website, professional websites, web design" />
        <link rel="canonical" href="https://ziontechgroup.com/ai-website-builder" />
      </Helmet>

      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl lg:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                AI Website Builder
              </span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-300 mb-8 leading-relaxed">
              Create professional websites in minutes with AI. 
              Just describe your vision and watch it come to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <a
                href="tel:+13024640950"
                className="cyber-button inline-flex items-center px-8 py-4 text-lg font-semibold rounded-lg"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call (302) 464-0950
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="cyber-button inline-flex items-center px-8 py-4 text-lg font-semibold rounded-lg"
              >
                <Mail className="w-5 h-5 mr-2" />
                Start Building
              </a>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Powerful AI Features
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Our AI understands your business and creates the perfect website
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-slate-800/50 rounded-lg p-6 hover:bg-slate-700/50 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mb-4 text-white">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-sm text-cyan-400">
                      <CheckCircle className="w-4 h-4 mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Templates Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Beautiful Templates
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Choose from professionally designed templates or let AI create something unique
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {templates.map((template, index) => (
              <div key={index} className="bg-slate-800/50 rounded-lg p-6 hover:bg-slate-700/50 transition-all duration-300">
                <div className="text-6xl mb-4 text-center">{template.image}</div>
                <h3 className="text-xl font-bold text-white mb-2">{template.name}</h3>
                <p className="text-cyan-400 text-sm mb-3">{template.category}</p>
                <p className="text-gray-300 mb-4">{template.description}</p>
                <ul className="space-y-1">
                  {template.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {feature}
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
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Choose Your Plan
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Start with a free trial and upgrade as you grow
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan) => (
              <div
                key={plan.id}
                className={`bg-slate-800/50 rounded-lg p-8 relative ${
                  plan.popular ? 'ring-2 ring-cyan-400/50 scale-105' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-bold">
                    Most Popular
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-4">{plan.description}</p>
                  <div className="text-4xl font-bold text-white mb-2">
                    ${plan.price}
                    <span className="text-lg text-gray-400">/{plan.period}</span>
                  </div>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => setSelectedPlan(plan.id)}
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-all ${
                    plan.popular
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700'
                      : 'bg-slate-700 text-white hover:bg-slate-600'
                  }`}
                >
                  {selectedPlan === plan.id ? 'Selected' : 'Choose Plan'}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              What Our Customers Say
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Join thousands of satisfied customers who built their dream websites with AI
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-slate-800/50 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <div className="text-4xl mr-4">{testimonial.avatar}</div>
                  <div>
                    <h4 className="text-lg font-bold text-white">{testimonial.name}</h4>
                    <p className="text-cyan-400">{testimonial.role}</p>
                    <p className="text-sm text-gray-400">{testimonial.company}</p>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 italic">"{testimonial.content}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-600 to-purple-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Build Your Dream Website?
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
            Start your free trial today and experience the power of AI website building. 
            No credit card required.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="bg-white text-cyan-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors inline-flex items-center"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call (302) 464-0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-cyan-600 transition-colors inline-flex items-center"
            >
              <Mail className="w-5 h-5 mr-2" />
              Start Free Trial
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AIWebsiteBuilderPage;
