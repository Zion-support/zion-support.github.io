'use client';
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, Star, Zap, Shield, Clock, Users, TrendingUp, BarChart, Calendar, Target, ArrowRight, Phone, Mail, MapPin, Brain, Cpu, Database, Cloud, Code, Smartphone, Settings, FileText, Search, Bot, Palette, Camera, Music, Video, Gamepad2, ShoppingCart, CreditCard, Building, Factory, Car, Plane, Ship, Train, Home, Heart, Stethoscope, GraduationCap, Briefcase, Wrench, Hammer, Paintbrush, Scissors, BookOpen, Calculator, Clock3, Compass, Navigation, PieChart, TrendingDown, Activity, Zap as Lightning, Target as Crosshair, Shield as Security, Users as People, Star as StarIcon, CheckCircle as Check, ArrowRight as Arrow, Phone as PhoneIcon, Mail as MailIcon, MapPin as Location, Mail as EmailIcon, Send, BarChart3 } from 'lucide-react';

const AIEmailMarketingPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const features = [
    {
      icon: Brain,
      title: 'AI Content Generation',
      description: 'Generate compelling email content, subject lines, and CTAs using advanced AI algorithms',
      benefits: ['65% open rate increase', 'Unlimited content ideas', 'Brand voice consistency']
    },
    {
      icon: Target,
      title: 'Smart Segmentation',
      description: 'AI-powered audience segmentation based on behavior, preferences, and engagement patterns',
      benefits: ['40% revenue growth', 'Personalized campaigns', 'Dynamic segmentation']
    },
    {
      icon: BarChart3,
      title: 'Advanced Analytics',
      description: 'Comprehensive email analytics with AI insights and performance predictions',
      benefits: ['80% time saved', 'Real-time insights', 'ROI tracking']
    },
    {
      icon: Send,
      title: 'Automated Campaigns',
      description: 'Intelligent email automation with AI-driven triggers and optimization',
      benefits: ['Automated workflows', 'Smart timing', 'A/B testing']
    }
  ];

  const emailTypes = [
    { name: 'Newsletter', icon: FileText, color: 'text-blue-500' },
    { name: 'Promotional', icon: ShoppingCart, color: 'text-green-500' },
    { name: 'Transactional', icon: CreditCard, color: 'text-purple-500' },
    { name: 'Welcome Series', icon: Users, color: 'text-pink-500' },
    { name: 'Abandoned Cart', icon: ShoppingCart, color: 'text-orange-500' },
    { name: 'Re-engagement', icon: RefreshCw, color: 'text-cyan-500' }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$99',
      period: '/month',
      description: 'Perfect for small businesses and startups',
      features: [
        '5,000 subscribers',
        'Unlimited emails',
        'Basic AI content generation',
        'Standard analytics',
        'Email support'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$199',
      period: '/month',
      description: 'Ideal for growing businesses and agencies',
      features: [
        '25,000 subscribers',
        'Advanced AI features',
        'Advanced analytics',
        'Priority support',
        'A/B testing',
        'API access'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$399',
      period: '/month',
      description: 'For large organizations with advanced needs',
      features: [
        'Unlimited subscribers',
        'Custom AI models',
        'White-label solution',
        'Dedicated support',
        'Custom integrations',
        'SLA guarantee'
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: 'Jennifer Lee',
      role: 'Marketing Manager',
      company: 'E-commerce Store',
      content: 'AI Email Marketing increased our open rates by 65% and revenue by 40%. The AI content generation is incredibly accurate and on-brand.',
      rating: 5
    },
    {
      name: 'Mark Thompson',
      role: 'CEO',
      company: 'SaaS Startup',
      content: 'The smart segmentation feature has been a game-changer. We now send highly targeted emails that actually convert.',
      rating: 5
    },
    {
      name: 'Sarah Davis',
      role: 'Digital Marketing Director',
      company: 'Marketing Agency',
      content: 'The automated campaigns save us 80% of our time while delivering better results. Our clients love the improved performance.',
      rating: 5
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Email Marketing - Zion Tech Group</title>
        <meta name="description" content="Transform your email marketing with AI-powered content generation, smart segmentation, and automation. Start at $99/month." />
        <meta name="keywords" content="AI email marketing, email automation, content generation, email analytics, marketing automation" />
        <meta property="og:title" content="AI Email Marketing - Zion Tech Group" />
        <meta property="og:description" content="Transform your email marketing with AI-powered content generation, smart segmentation, and advanced analytics." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/ai-email-marketing" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-purple-500/10"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center bg-indigo-500/10 border border-indigo-500/20 rounded-full px-4 py-2 mb-6">
                <EmailIcon className="w-5 h-5 text-indigo-400 mr-2" />
                <span className="text-indigo-400 font-medium">AI-Powered Email Marketing</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 cyber-text-3d neon-pulse">
                AI Email Marketing
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Transform your email marketing with AI-powered content generation, smart segmentation, and automated campaigns. 
                Achieve 65% open rate increase and 40% revenue growth with intelligent email automation.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
                <a
                  href="#pricing"
                  className="cyber-button px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300"
                >
                  Start Free Trial
                </a>
                <a
                  href="tel:+13024640950"
                  className="flex items-center gap-2 border-2 border-indigo-400 text-indigo-400 px-8 py-4 rounded-lg font-semibold hover:bg-indigo-400 hover:text-slate-900 transition-all duration-300"
                >
                  <Phone className="w-5 h-5" />
                  +1 302 464 0950
                </a>
              </div>

              {/* Key Stats */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                <div className="text-center">
                  <div className="text-4xl font-bold text-indigo-400 mb-2">65%</div>
                  <div className="text-gray-300">Open Rate Increase</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-purple-400 mb-2">40%</div>
                  <div className="text-gray-300">Revenue Growth</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-cyan-400 mb-2">80%</div>
                  <div className="text-gray-300">Time Saved</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Email Types */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4 neon-text">
                Email Types
              </h2>
              <p className="text-xl text-gray-300">
                AI-powered email campaigns for every stage of the customer journey
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {emailTypes.map((type, index) => (
                <div key={index} className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300">
                  <type.icon className={`w-12 h-12 ${type.color} mx-auto mb-3`} />
                  <h3 className="text-white font-semibold">{type.name}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4 neon-text">
                Powerful AI Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our AI Email Marketing platform combines cutting-edge artificial intelligence with email marketing expertise to maximize your campaign performance.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="cyber-card p-6 hover:scale-105 transition-all duration-300">
                  <div className="text-4xl mb-4 text-center">
                    <feature.icon className="w-12 h-12 text-indigo-400 mx-auto" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 text-center">{feature.title}</h3>
                  <p className="text-gray-300 mb-4 text-center">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-20 bg-gradient-to-r from-indigo-900/50 to-purple-900/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4 neon-text">
                Simple, Transparent Pricing
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the plan that fits your email marketing needs. All plans include our core AI features.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`cyber-card p-8 relative ${plan.popular ? 'ring-2 ring-indigo-400 scale-105' : ''}`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-indigo-400 text-slate-900 px-4 py-1 rounded-full text-sm font-bold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-5xl font-bold text-indigo-400">{plan.price}</span>
                      <span className="text-gray-300 ml-1">{plan.period}</span>
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

                  <a
                    href={`mailto:kleber@ziontechgroup.com?subject=Interest in ${plan.name} Plan - AI Email Marketing`}
                    className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                      plan.popular
                        ? 'cyber-button'
                        : 'border-2 border-indigo-400 text-indigo-400 hover:bg-indigo-400 hover:text-slate-900'
                    }`}
                  >
                    Get Started
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4 neon-text">
                What Our Customers Say
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Join thousands of businesses who have transformed their email marketing with AI.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="cyber-card p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-sm text-indigo-400">{testimonial.role}, {testimonial.company}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Email Marketing?
            </h2>
            <p className="text-xl text-indigo-100 mb-8 max-w-3xl mx-auto">
              Start your free trial today and experience the power of AI-driven email marketing. 
              No credit card required.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:kleber@ziontechgroup.com?subject=AI Email Marketing - Free Trial Request"
                className="bg-white text-indigo-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Start Free Trial
              </a>
              <a
                href="tel:+13024640950"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-colors"
              >
                Call (302) 464-0950
              </a>
            </div>
            <div className="mt-8 text-sm text-indigo-100">
              <p>📧 kleber@ziontechgroup.com | 📍 364 E Main St STE 1008, Middletown DE 19709</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AIEmailMarketingPage;