'use client';
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, Star, Zap, Shield, Clock, Users, TrendingUp, BarChart, Calendar, Target, ArrowRight, Phone, Mail, MapPin, Brain, Cpu, Database, Cloud, Code, Smartphone, Settings, FileText, Search, Bot, Palette, Camera, Music, Video, Gamepad2, ShoppingCart, CreditCard, Building, Factory, Car, Plane, Ship, Train, Home, Heart, Stethoscope, GraduationCap, Briefcase, Wrench, Hammer, Paintbrush, Scissors, BookOpen, Calculator, Clock3, Compass, Navigation, PieChart, TrendingDown, Activity, Zap as Lightning, Target as Crosshair, Shield as Security, Users as People, Star as StarIcon, CheckCircle as Check, ArrowRight as Arrow, Phone as PhoneIcon, Mail as MailIcon, MapPin as Location, BarChart3, PieChart as PieChartIcon, TrendingUp as TrendingUpIcon } from 'lucide-react';

const AIAnalyticsPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Insights',
      description: 'Advanced machine learning algorithms analyze your data to provide actionable insights',
      benefits: ['45% revenue increase', 'Predictive analytics', 'Automated insights']
    },
    {
      icon: BarChart3,
      title: 'Real-time Dashboards',
      description: 'Customizable dashboards with live data visualization and interactive charts',
      benefits: ['Real-time monitoring', 'Custom dashboards', 'Interactive visualizations']
    },
    {
      icon: TrendingUpIcon,
      title: 'Advanced Analytics',
      description: 'Deep dive into your data with advanced statistical analysis and forecasting',
      benefits: ['60% productivity boost', 'Advanced forecasting', 'Statistical analysis']
    },
    {
      icon: Users,
      title: 'User Behavior Tracking',
      description: 'Comprehensive user behavior analysis with AI-driven segmentation and targeting',
      benefits: ['30% conversion lift', 'User segmentation', 'Behavior prediction']
    }
  ];

  const analyticsTypes = [
    { name: 'Web Analytics', icon: Globe, color: 'text-blue-500' },
    { name: 'E-commerce Analytics', icon: ShoppingCart, color: 'text-green-500' },
    { name: 'Social Media Analytics', icon: Share2, color: 'text-pink-500' },
    { name: 'Marketing Analytics', icon: Target, color: 'text-purple-500' },
    { name: 'Financial Analytics', icon: DollarSign, color: 'text-yellow-500' },
    { name: 'Customer Analytics', icon: Users, color: 'text-cyan-500' }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$149',
      period: '/month',
      description: 'Perfect for small businesses and startups',
      features: [
        '5 data sources',
        'Basic AI insights',
        'Standard dashboards',
        'Email support',
        'Monthly reports'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$299',
      period: '/month',
      description: 'Ideal for growing businesses and agencies',
      features: [
        '20 data sources',
        'Advanced AI insights',
        'Custom dashboards',
        'Priority support',
        'Real-time alerts',
        'API access'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$599',
      period: '/month',
      description: 'For large organizations with complex needs',
      features: [
        'Unlimited data sources',
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
      name: 'Robert Johnson',
      role: 'Data Analyst',
      company: 'E-commerce Plus',
      content: 'AI Analytics Dashboard helped us increase revenue by 45% through better insights and predictions. The AI recommendations are incredibly accurate.',
      rating: 5
    },
    {
      name: 'Lisa Wang',
      role: 'Marketing Director',
      company: 'Digital Agency',
      content: 'The real-time dashboards and AI insights have transformed how we make decisions. Our team productivity increased by 60%.',
      rating: 5
    },
    {
      name: 'Michael Brown',
      role: 'CEO',
      company: 'TechStart Inc.',
      content: 'Finally, analytics that actually make sense. The AI-powered insights helped us understand our customers better than ever.',
      rating: 5
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Analytics Dashboard - Zion Tech Group</title>
        <meta name="description" content="Transform your data into actionable insights with AI-powered analytics, real-time dashboards, and predictive modeling. Start at $149/month." />
        <meta name="keywords" content="AI analytics, business intelligence, data visualization, predictive analytics, real-time dashboards" />
        <meta property="og:title" content="AI Analytics Dashboard - Zion Tech Group" />
        <meta property="og:description" content="Transform your data into actionable insights with AI-powered analytics and real-time dashboards." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/ai-analytics" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center bg-cyan-500/10 border border-cyan-500/20 rounded-full px-4 py-2 mb-6">
                <BarChart3 className="w-5 h-5 text-cyan-400 mr-2" />
                <span className="text-cyan-400 font-medium">AI-Powered Analytics</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 cyber-text-3d neon-pulse">
                AI Analytics Dashboard
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Transform your data into actionable insights with AI-powered analytics, real-time dashboards, and predictive modeling. 
                Achieve 45% revenue increase and 60% productivity boost with intelligent data analysis.
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
                  className="flex items-center gap-2 border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
                >
                  <Phone className="w-5 h-5" />
                  +1 302 464 0950
                </a>
              </div>

              {/* Key Stats */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                <div className="text-center">
                  <div className="text-4xl font-bold text-cyan-400 mb-2">45%</div>
                  <div className="text-gray-300">Revenue Increase</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-purple-400 mb-2">60%</div>
                  <div className="text-gray-300">Productivity Boost</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-green-400 mb-2">30%</div>
                  <div className="text-gray-300">Conversion Lift</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Analytics Types */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4 neon-text">
                Analytics Types
              </h2>
              <p className="text-xl text-gray-300">
                Comprehensive analytics solutions for every aspect of your business
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {analyticsTypes.map((type, index) => (
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
                Our AI Analytics Dashboard combines cutting-edge artificial intelligence with advanced data visualization to unlock insights from your data.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="cyber-card p-6 hover:scale-105 transition-all duration-300">
                  <div className="text-4xl mb-4 text-center">
                    <feature.icon className="w-12 h-12 text-cyan-400 mx-auto" />
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
        <section id="pricing" className="py-20 bg-gradient-to-r from-cyan-900/50 to-blue-900/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4 neon-text">
                Simple, Transparent Pricing
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the plan that fits your analytics needs. All plans include our core AI features.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`cyber-card p-8 relative ${plan.popular ? 'ring-2 ring-cyan-400 scale-105' : ''}`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-cyan-400 text-slate-900 px-4 py-1 rounded-full text-sm font-bold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-5xl font-bold text-cyan-400">{plan.price}</span>
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
                    href={`mailto:kleber@ziontechgroup.com?subject=Interest in ${plan.name} Plan - AI Analytics Dashboard`}
                    className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                      plan.popular
                        ? 'cyber-button'
                        : 'border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900'
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
                Join thousands of businesses who have transformed their analytics with AI.
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
                    <div className="text-sm text-cyan-400">{testimonial.role}, {testimonial.company}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-cyan-600 to-blue-600">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Analytics?
            </h2>
            <p className="text-xl text-cyan-100 mb-8 max-w-3xl mx-auto">
              Start your free trial today and experience the power of AI-driven analytics. 
              No credit card required.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:kleber@ziontechgroup.com?subject=AI Analytics Dashboard - Free Trial Request"
                className="bg-white text-cyan-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Start Free Trial
              </a>
              <a
                href="tel:+13024640950"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-cyan-600 transition-colors"
              >
                Call (302) 464-0950
              </a>
            </div>
            <div className="mt-8 text-sm text-cyan-100">
              <p>📧 kleber@ziontechgroup.com | 📍 364 E Main St STE 1008, Middletown DE 19709</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AIAnalyticsPage;