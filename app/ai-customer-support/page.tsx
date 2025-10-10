'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
<<<<<<< HEAD
import SEOOptimizer from '../components/SEOOptimizer';
import { MessageCircle, Bot, Zap, Shield, BarChart, Clock, Users, CheckCircle, Star, ArrowRight, Brain, Target, Globe, Lock, Settings, Activity, TrendingUp, Phone, Mail, MapPin } from 'lucide-react';

const AICustomerSupportPage: React.FC = () => {
  const features = [
    {
=======
import { MessageCircle, Bot, Zap, Shield, BarChart, Clock, Users, CheckCircle, Star, ArrowRight, Brain, Target, Activity, TrendingUp, Award, Lock, Database, Cloud, Code, Smartphone, Settings, Search, Camera, Music, Video, Gamepad2, ShoppingCart, CreditCard, Building, Factory, Car, Plane, Ship, Train, Home, Heart, Stethoscope, GraduationCap, Briefcase, Wrench, Hammer, Paintbrush, Scissors, BookOpen, Calculator, Calendar, Compass, Navigation as NavIcon, PieChart, TrendingDown, Phone, Mail, MapPin } from 'lucide-react';

<<<<<<< HEAD
const AICustomerSupportPage: React.FC = () => {
  const features = [
    {
=======
const $1: React.FC = () => {
  const features = [,
    {,
>>>>>>> cursor/fix-errors-and-merge-to-main-e3dc
>>>>>>> origin/main
      icon: Bot,
      title: 'AI-Powered Chatbots',
      description: 'Intelligent chatbots that understand context, handle complex queries, and provide instant responses 24/7.',
      benefits: ['99.9% uptime', 'Instant responses', 'Multi-language support', 'Context understanding']
    },
    {
      icon: MessageCircle,
      title: 'Omnichannel Communication',
      description: 'Seamless integration across email, chat, phone, and social media platforms.',
      benefits: ['Unified experience', 'Context preservation', 'Cross-platform sync', 'Multi-channel support']
    },
    {
      icon: Zap,
      title: 'Intelligent Automation',
      description: 'Automated ticket routing, priority assignment, and resolution suggestions based on AI analysis.',
      benefits: ['Faster resolution', 'Reduced workload', 'Smart prioritization', 'Process automation']
    },
    {
      icon: Shield,
      title: 'Advanced Security',
      description: 'Enterprise-grade security with data encryption and compliance with industry standards.',
      benefits: ['Data protection', 'Compliance ready', 'Secure communication', 'Privacy protection']
    },
    {
      icon: BarChart,
      title: 'Analytics & Insights',
      description: 'Real-time analytics and performance metrics to optimize customer support operations.',
      benefits: ['Performance tracking', 'Data-driven insights', 'Continuous improvement', 'ROI measurement']
    },
    {
      icon: Users,
      title: 'Human-AI Collaboration',
      description: 'Seamless handoff between AI and human agents for complex issues requiring human touch.',
<<<<<<< HEAD
      benefits: ['Best of both worlds', 'Smooth transitions', 'Enhanced efficiency', 'Quality assurance']
=======
      benefits: ['Best of both worlds', 'Smooth transitions', 'Enhanced efficiency']
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$299',
      period: '/month',
      description: 'Perfect for small businesses',
      features: [
        'Basic AI chatbot',
        'Email support',
        '5 languages',
        'Standard integrations',
        '1,000 conversations/month',
        'Basic analytics'
      ],
<<<<<<< HEAD
      popular: false
=======
      popular: false,
>>>>>>> origin/main
    },
    {
      name: 'Professional',
      price: '$799',
      period: '/month',
      description: 'Ideal for growing businesses',
      features: [
        'Advanced AI features',
        'Multi-channel support',
        'All languages',
        'Advanced integrations',
        '10,000 conversations/month',
        'Advanced analytics',
        'Custom training',
        'API access'
      ],
<<<<<<< HEAD
      popular: true
=======
      popular: true,
>>>>>>> origin/main
    },
    {
      name: 'Enterprise',
      price: '$1,999',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Full AI suite',
        'Custom solutions',
        'White-label options',
        'Unlimited conversations',
        'Custom integrations',
        'Dedicated support',
        'SLA guarantee',
        'Training & consulting'
      ],
<<<<<<< HEAD
      popular: false
=======
      popular: false,
>>>>>>> cursor/fix-errors-and-merge-to-main-e3dc
>>>>>>> origin/main
    }
  ];

  const benefits = [
<<<<<<< HEAD
    'Reduce support costs by 60%',
    'Improve response time by 90%',
    'Increase customer satisfaction',
    'Scale support operations',
    'Provide 24/7 availability',
    'Handle multiple languages'
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'E-commerce Plus',
      role: 'Customer Service Manager',
      quote: 'AI customer support reduced our response time by 90% and improved customer satisfaction by 40%.',
      rating: 5,
      image: '👩‍💼'
    },
    {
      name: 'Michael Chen',
      company: 'Tech Solutions Inc',
      role: 'VP of Operations',
      quote: 'The omnichannel approach helped us provide consistent support across all platforms.',
      rating: 5,
      image: '👨‍💼'
    },
    {
      name: 'Lisa Rodriguez',
      company: 'Service Excellence Co',
      role: 'Customer Success Director',
      quote: '24/7 AI support transformed our operations. We now handle 5x more inquiries with better quality.',
      rating: 5,
      image: '👩‍💻'
=======
    'Increase customer satisfaction by 95%',
    'Reduce response time by 90%',
    'Lower support costs by 70%',
    'Handle 10x more inquiries',
    'Enable 24/7 support',
    'Improve resolution rates',
    'Scale support operations',
    'Enhance customer experience'
  ];

  const useCases = [
    {
<<<<<<< HEAD
      title: 'E-commerce Support',
      description: 'Handle product inquiries, order tracking, and returns with AI assistance',
      icon: '🛒'
    },
    {
      title: 'Technical Support',
      description: 'Provide technical assistance and troubleshooting for software and hardware',
      icon: '🔧'
    },
    {
      title: 'Billing & Payments',
      description: 'Assist with billing questions, payment issues, and account management',
      icon: '💳'
    },
    {
      title: 'Product Information',
      description: 'Answer questions about products, features, and specifications',
      icon: '📋'
    },
    {
      title: 'Appointment Scheduling',
      description: 'Help customers schedule appointments and manage bookings',
      icon: '📅'
    },
    {
      title: 'General Inquiries',
      description: 'Handle general questions and provide information about services',
      icon: '❓'
=======
      icon: Clock,
      title: '24/7 Availability',
      description: 'Never miss a customer inquiry with round-the-clock AI support'},
    {
      icon: Users,
      title: 'Scalable Solutions',
      description: 'Handle increasing support volume without proportional cost increase'},
    {
      icon: CheckCircle,
      title: 'Consistent Quality',
      description: 'Deliver consistent, high-quality support experiences every time'
    },
    {
      icon: Star,
      title: 'Customer Satisfaction',
      description: 'Improve customer satisfaction scores with faster, more accurate responses'
>>>>>>> cursor/fix-errors-and-merge-to-main-e3dc
>>>>>>> origin/main
    }
  ];

  return (
<<<<<<< HEAD
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SEOOptimizer
        title="AI Customer Support - Zion Tech Group"
        description="Advanced AI-powered customer support solutions with 24/7 availability, multilingual support, and 95% customer satisfaction. Starting at $299/month."
        keywords={['AI customer support', 'chatbot', 'virtual assistant', 'customer service automation', 'multilingual support', 'Zion Tech Group']}
        canonicalUrl="https://ziontechgroup.com/ai-customer-support"
      />
      
      <Navigation />

      <main className="container mx-auto px-4 py-16 pt-24">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <div className="text-6xl mb-6 animate-bounce">🤖</div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            AI Customer Support
          </h1>
          <p className="text-xl text-cyan-400 mb-8 font-medium">
            Intelligent 24/7 Customer Service Solutions
          </p>
          <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-8">
            Transform your customer support with AI-powered solutions that provide instant, 
            accurate, and personalized assistance across all channels.
          </p>
          
          {/* Key Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
              <div className="text-3xl font-bold text-cyan-400 mb-2">95%</div>
              <div className="text-gray-300">Satisfaction Rate</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">90%</div>
              <div className="text-gray-300">Faster Response</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
              <div className="text-3xl font-bold text-pink-400 mb-2">60%</div>
              <div className="text-gray-300">Cost Reduction</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">24/7</div>
              <div className="text-gray-300">Availability</div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
              Start Free Trial
            </button>
            <button className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
              View Demo
            </button>
          </div>
        </section>

        {/* Features Section */}
        <section className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Advanced AI Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive AI-powered customer support capabilities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300">
                <div className="text-4xl mb-4">
                  <feature.icon className="text-cyan-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300 mb-6">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <CheckCircle className="text-green-400 mr-2 w-4 h-4" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Benefits Section */}
        <section className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Why Choose AI Customer Support?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Transform your customer support with intelligent automation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
                <div className="text-4xl mb-4">🚀</div>
                <h3 className="text-lg font-bold text-white mb-2">{benefit}</h3>
              </div>
            ))}
          </div>
        </section>

        {/* Pricing Section */}
        <section className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Customer Support Plans
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the right AI customer support solution for your business
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`bg-white/10 backdrop-blur-sm rounded-2xl p-8 relative ${
                plan.popular ? 'ring-2 ring-cyan-400 scale-105' : ''
              }`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-bold">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="text-4xl font-bold text-cyan-400 mb-2">
                    {plan.price}<span className="text-lg text-gray-400">{plan.period}</span>
                  </div>
                  <p className="text-gray-300">{plan.description}</p>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <CheckCircle className="text-green-400 mr-3 w-5 h-5" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-4 px-6 rounded-lg font-bold transition-all duration-300 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white'
                    : 'border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white'
                }`}>
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Success Stories
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See how organizations transformed their customer support
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <div className="flex items-center mb-4">
                  <div className="text-4xl mr-4">{testimonial.image}</div>
                  <div>
                    <h4 className="text-lg font-bold text-white">{testimonial.name}</h4>
                    <p className="text-cyan-400">{testimonial.role}, {testimonial.company}</p>
                  </div>
                </div>
                <p className="text-gray-300 mb-4 italic">"{testimonial.quote}"</p>
                <div className="flex">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="text-yellow-400 w-5 h-5" />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <div className="bg-gradient-to-r from-cyan-500/20 to-purple-600/20 backdrop-blur-sm rounded-2xl p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
=======
    <>
      <Helmet>
        <title>AI Customer Support - Zion Tech Group</title>
        <meta name="description" content="Transform your customer support with our AI Customer Support solutions. Intelligent automation, omnichannel communication, and human-AI collaboration for better customer experience." />
        <meta name="keywords" content="AI customer support, customer service automation, omnichannel support, AI chatbots, customer experience, support AI" />
      </Helmet>

<<<<<<< HEAD
      <Navigation />

      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-teal-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full mb-8">
              <MessageCircle className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI Customer Support
=======
        <main className="container mx-auto px-4 py-16 pt-24">{/* Hero Section */}</main>
          <section className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text">AI Customer Support</h1><p className="text-xl text-cyan-400 mb-8 font-medium">Revolutionary AI-powered customer support solutions</p><p className="text-lg text-gray-300 max-w-4xl mx-auto mb-8">Transform your customer service with intelligent chatbots, omnichannel communication,</p>
              and automated workflows that deliver exceptional customer experiences 24/7.</p>
        canonicalUrl="https: //ziontechgroup.com/ai-customer-support",
      />,
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg">,</div>
        <Navigation />,
        <main className="container mx-auto px-4 py-16 pt-24">,
          {/* Hero Section */}
          <section className="text-center mb-16">
            <h1 className="text-4xl md: text-6xl font-bold text-white mb-6 neon-text">
              AI Customer Support;</h1>
>>>>>>> cursor/fix-errors-and-merge-to-main-e3dc
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your customer support with our AI Customer Support solutions. Intelligent automation, 
              omnichannel communication, and human-AI collaboration for better customer experience.
            </p>
<<<<<<< HEAD
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-teal-500 to-cyan-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-teal-600 hover:to-cyan-600 transition-all duration-300 flex items-center justify-center">
                Get Started
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
              <button className="border border-teal-400 text-teal-300 px-8 py-4 rounded-lg font-semibold hover:bg-teal-500 hover:text-white transition-all duration-300">
                View Demo
              </button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Advanced Customer Support Features
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Our AI Customer Support solutions combine cutting-edge technology with customer expertise
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-lg mb-4">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
=======
            <div className="flex flex-col sm: flex-row gap-4 justify-center"></div>
              <a;
            <div className="flex flex-col sm:flex-row gap-4 justify-center"></section>
              <a
                href="tel:+13024640950"
                className="cyber-button w-full sm:w-auto text-center"
              >📞 Call: (302) 464-0950<a
                href="mailto:kleber@ziontechgroup.com"
                className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300 w-full sm:w-auto text-center"
              >✉️ Get Quote</a>
              >
                📞 Call: (302) 464-0950;
              </a>
              <a;
                href="mailto:kleber@ziontechgroup.com"
                className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300 w-full sm:w-auto text-center"
              >
                ✉️ Get Quote;
              </a>
            </div>,
          </section>,
,
          {/* Features Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-12 text-center neon-text">Key Features<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">{features.map((feature, index) => (</div>
                <div key={index} className="cyber-card hologram-card p-6 hover:scale-105 transition-all duration-300"></div>
                  <feature.icon className="w-12 h-12 text-cyan-400 mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}<p className="text-gray-300 mb-4">{feature.description}<ul className="space-y-2">{feature.benefits.map((benefit, benefitIndex) => (</ul>
            <h2 className="text-3xl font-bold text-white mb-12 text-center neon-text">
              Key Features;
            </h2>
            <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-3 gap-8">,
              {features.map((feature, index) => (</div>
                <div key={index} className="cyber-card hologram-card p-6 hover: scale-105 transition-all duration-300">,</div>
                  <feature.icon className="w-12 h-12 text-cyan-400 mb-4" />,
>>>>>>> cursor/fix-errors-and-merge-to-main-e3dc
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-teal-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

<<<<<<< HEAD
        {/* Use Cases Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Applications & Use Cases
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                From e-commerce to technical support, our AI Customer Support serves diverse needs
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {useCases.map((useCase, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 text-center">
                  <div className="text-4xl mb-4">{useCase.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-3">{useCase.title}</h3>
                  <p className="text-gray-300">{useCase.description}</p>
=======
          {/* Pricing Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-12 text-center neon-text">Pricing Plans<div className="grid grid-cols-1 md:grid-cols-3 gap-8">{pricingPlans.map((plan, index) => (<div key={index} className={`cyber-card hologram-card p-8 relative ${plan.popular ? 'ring-2 ring-cyan-400' : ''}`}>{plan.popular && (</div>
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2"></div>
            <h2 className="text-3xl font-bold text-white mb-12 text-center neon-text">Pricing Plans</h2><div className="grid grid-cols-1 md:grid-cols-3 gap-8">{pricingPlans.map((plan, index) => (</section><div key={index} className={`cyber-card hologram-card p-8 relative ${plan.popular ? 'ring-2 ring-cyan-400' : ''}`}>{plan.popular && (</div>
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2"></div>
                      <span className="bg-cyan-400 text-black px-4 py-1 rounded-full text-sm font-bold">Most Popular</span>
            <h2 className="text-3xl font-bold text-white mb-12 text-center neon-text">
              Pricing Plans;
            </h2>
            <div className="grid grid-cols-1 md: grid-cols-3 gap-8">,
              {pricingPlans.map((plan, index) => (</div>
                <div key={index} className={`cyber-card hologram-card p-8 relative ${plan.popular ? 'ring-2 ring-cyan-400' : ''}`}>
                  {plan.popular && (</div>
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2"></div>
                      <span className="bg-cyan-400 text-black px-4 py-1 rounded-full text-sm font-bold">
                        Most Popular;
                      </span>
                    </div>
                  )}
                  <div className="text-center mb-6"></div>
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3><p className="text-gray-400 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center"></div>
                      <span className="text-4xl font-bold text-cyan-400">{plan.price}</span><span className="text-gray-400 ml-1">{plan.period}</span><ul className="space-y-3 mb-8">{plan.features.map((feature, featureIndex) => (</ul>
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" >{feature}</CheckCircle>
                      </CheckCircle>
                    ))}
                  <a
                    href="mailto:kleber@ziontechgroup.com"
                    className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                      plan.popular
                        ? 'bg-cyan-400 text-black hover:bg-cyan-300'
                        : 'border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white'
                    }`}
                  >Get Started</a>
                  </ul>
                  <a;
                    href="mailto: kleber@ziontechgroup.com",
                    className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${,
                      plan.popular;
                        ? 'bg-cyan-400 text-black hover:bg-cyan-300'}
                        : 'border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white'}
                    }`}
                  >
                    Get Started;
                  </a>
>>>>>>> cursor/fix-errors-and-merge-to-main-e3dc
                </div>
              ))}
            </div>
          </div>
        </section>

<<<<<<< HEAD
        {/* Benefits Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose Our AI Customer Support?
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Experience the future of customer support with our revolutionary AI technology
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-lg mb-4">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-white font-medium">{benefit}</p>
=======
          {/* Benefits Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-12 text-center neon-text">Why Choose Our AI Customer Support?<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">{benefits.map((benefit, index) => (</div>
            <h2 className="text-3xl font-bold text-white mb-12 text-center neon-text">
              Why Choose Our AI Customer Support?
            </h2>
            <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-4 gap-8">,
              {benefits.map((benefit, index) => (</div>
                <div key={index} className="text-center"></div>
            <h2 className="text-3xl font-bold text-white mb-12 text-center neon-text">Why Choose Our AI Customer Support?</h2><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">{benefits.map((benefit, index) => (</section>
                <div key={index} className="text-center"></div>
                  <benefit.icon className="w-16 h-16 text-cyan-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3><p className="text-gray-300">{benefit.description}</p>
>>>>>>> cursor/fix-errors-and-merge-to-main-e3dc
                </div>
              ))}
            </div>
          </div>
        </section>

<<<<<<< HEAD
        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-teal-500 to-cyan-500 rounded-2xl p-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Transform Your Customer Support?
              </h2>
              <p className="text-xl text-teal-100 mb-8">
                Join thousands of businesses who are already using our AI Customer Support solutions
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-teal-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center">
                  Get Started Now
                  <ArrowRight className="ml-2 w-5 h-5" />
                </button>
                <button className="border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-teal-600 transition-all duration-300">
                  Schedule Demo
                </button>
              </div>
=======
          {/* CTA Section */}
          <section className="text-center bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-xl p-12 border border-cyan-500/20">
            <h2 className="text-3xl font-bold text-white mb-6 neon-text">Ready to Transform Your Customer Support?<p className="text-gray-300 mb-8 max-w-2xl mx-auto">Get started with our AI customer support solutions today. Contact us for a free consultation</p>
            <h2 className="text-3xl font-bold text-white mb-6 neon-text">Ready to Transform Your Customer Support?</h2><p className="text-gray-300 mb-8 max-w-2xl mx-auto">Get started with our AI customer support solutions today. Contact us for a free consultation</p>
              and custom implementation plan.</p>
            <h2 className="text-3xl font-bold text-white mb-6 neon-text">
>>>>>>> origin/main
              Ready to Transform Your Customer Support?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Start your AI-powered customer support transformation today
            </p>
<<<<<<< HEAD
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Start Free Trial
              </button>
              <button className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                Schedule Demo
              </button>
=======
            <div className="flex flex-col sm: flex-row gap-4 justify-center"></div>
              <a;
            <div className="flex flex-col sm:flex-row gap-4 justify-center"></section>
              <a
                href="tel:+13024640950"
                className="cyber-button w-full sm:w-auto text-center"
              >📞 Call: (302) 464-0950<a
                href="mailto:kleber@ziontechgroup.com"
                className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300 w-full sm:w-auto text-center"
              >✉️ Email Us</a>
              >
                📞 Call: (302) 464-0950;
              </a>
              <a;
                href="mailto:kleber@ziontechgroup.com"
                className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300 w-full sm:w-auto text-center"
              >
                ✉️ Email Us;
              </a>
>>>>>>> cursor/fix-errors-and-merge-to-main-e3dc
>>>>>>> origin/main
            </div>
          </div>
        </section>
      </main>

      <Footer />
<<<<<<< HEAD
    </div>
=======
    </>
>>>>>>> origin/main
  );
};

export default AICustomerSupportPage;
