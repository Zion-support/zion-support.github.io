'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
<<<<<<< HEAD
import { Users, Target, CheckCircle, Star, ArrowRight, Phone, Mail, MapPin, Brain, Shield, Zap, Globe, Lock, Settings, Activity, TrendingUp, BarChart, MessageSquare, Calendar, FileText } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
=======
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { CheckCircle, Users, Target, ArrowRight, Brain, Zap, Shield, Clock, Activity, TrendingUp, Star, Phone, Mail, MapPin, BarChart, MessageSquare, Eye, Sparkles, DollarSign, Award, Lock, Database, Cloud, Code, Smartphone, Settings, Search, Bot, Camera, Music, Video, Gamepad2, ShoppingCart, CreditCard, Building, Factory, Car, Plane, Ship, Train, Home, Heart, Stethoscope, GraduationCap, Briefcase, Wrench, Hammer, Paintbrush, Scissors, BookOpen, Calculator, Calendar, Compass, Navigation as NavIcon, PieChart, TrendingDown } from 'lucide-react';
>>>>>>> origin/main

const AICRMAssistantPage: React.FC = () => {
  const features = [
    {
      icon: Users,
<<<<<<< HEAD
      title: 'Customer Intelligence',
      description: 'AI-powered customer insights and behavior analysis for better relationship management',
      benefits: ['Customer profiling', 'Behavior analysis', 'Predictive insights', 'Personalization']
=======
      title: 'Customer Management',
      description: 'AI-powered customer relationship management with intelligent insights and automation.',
      benefits: ['Customer profiling', 'Behavior analysis', 'Predictive insights', 'Automated follow-ups']
>>>>>>> origin/main
    },
    {
      icon: Target,
      title: 'Lead Scoring',
<<<<<<< HEAD
      description: 'Intelligent lead scoring and qualification using machine learning algorithms',
      benefits: ['Automated scoring', 'Lead prioritization', 'Conversion prediction', 'ROI optimization']
    },
    {
      icon: MessageSquare,
      title: 'Automated Communication',
      description: 'AI-driven email campaigns, follow-ups, and customer communication',
      benefits: ['Email automation', 'Personalized messages', 'Follow-up sequences', 'Response optimization']
    },
    {
      icon: BarChart,
      title: 'Sales Analytics',
      description: 'Advanced analytics and reporting for sales performance and forecasting',
      benefits: ['Sales forecasting', 'Performance tracking', 'Trend analysis', 'Custom reports']
    },
    {
      icon: Brain,
      title: 'Predictive Analytics',
      description: 'Machine learning models for predicting customer behavior and sales outcomes',
      benefits: ['Churn prediction', 'Upsell opportunities', 'Risk assessment', 'Market trends']
=======
      description: 'Intelligent lead scoring and qualification using AI algorithms and machine learning.',
      benefits: ['Lead prioritization', 'Scoring algorithms', 'Qualification automation', 'Conversion prediction']
    },
    {
      icon: Brain,
      title: 'Sales Intelligence',
      description: 'AI-powered sales insights and recommendations for better decision making.',
      benefits: ['Sales forecasting', 'Opportunity analysis', 'Performance insights', 'Recommendation engine']
    },
    {
      icon: Zap,
      title: 'Automation',
      description: 'Automate repetitive tasks and workflows to improve efficiency and productivity.',
      benefits: ['Workflow automation', 'Task automation', 'Process optimization', 'Time savings']
    },
    {
      icon: BarChart,
      title: 'Analytics & Reporting',
      description: 'Comprehensive analytics and reporting for better business insights and decision making.',
      benefits: ['Real-time analytics', 'Custom reports', 'Performance tracking', 'Data visualization']
>>>>>>> origin/main
    },
    {
      icon: Shield,
      title: 'Data Security',
<<<<<<< HEAD
      description: 'Enterprise-grade security and compliance for customer data protection',
      benefits: ['Data encryption', 'Access controls', 'Compliance monitoring', 'Audit trails']
=======
      description: 'Enterprise-grade security and compliance for customer data protection.',
      benefits: ['Data encryption', 'Access control', 'Compliance management', 'Audit trails']
>>>>>>> origin/main
    }
  ];

  const benefits = [
    'Increase sales by 40%',
    'Improve lead conversion by 60%',
    'Reduce manual tasks by 80%',
<<<<<<< HEAD
    'Enhance customer satisfaction',
    'Optimize sales processes',
    'Scale CRM operations'
  ];

  const pricing = [
    {
      name: 'Starter',
      price: '$199',
      period: '/month',
      description: 'Perfect for small sales teams',
      features: [
        'Basic AI features',
        'Up to 1,000 contacts',
        'Email support',
        'Standard integrations',
        '1 user account',
        'Basic analytics'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$499',
      period: '/month',
      description: 'Ideal for growing sales teams',
      features: [
        'Advanced AI features',
        'Up to 10,000 contacts',
        'Priority support',
        'Advanced integrations',
        'Up to 10 users',
        'Advanced analytics',
        'Custom workflows',
        'API access'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$1,299',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Full AI suite',
        'Unlimited contacts',
        'Dedicated support',
        'White-label solution',
        'Unlimited users',
        'Custom integrations',
        'SLA guarantee',
        'Training & consulting'
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: 'David Kim',
      company: 'SalesTech Solutions',
      role: 'VP of Sales',
      quote: 'AI CRM Assistant increased our sales by 45% and improved lead conversion by 60%. Game changer!',
      rating: 5,
      image: '👨‍💼'
    },
    {
      name: 'Sarah Johnson',
      company: 'Growth Marketing Co',
      role: 'Sales Director',
      quote: 'The predictive analytics helped us identify high-value prospects. Our ROI improved by 200%.',
      rating: 5,
      image: '👩‍💼'
    },
    {
      name: 'Michael Chen',
      company: 'Enterprise Solutions',
      role: 'CRM Manager',
      quote: 'Automated communication saved us 30+ hours per week. Customer satisfaction increased dramatically.',
      rating: 5,
      image: '👨‍💻'
=======
    'Enhance customer satisfaction by 50%',
    'Enable data-driven decisions',
    'Automate sales processes',
    'Scale sales operations',
    'Improve team productivity'
  ];

  const useCases = [
    {
      title: 'Sales Management',
      description: 'Streamline sales processes and improve team performance with AI insights',
      icon: '💼'
    },
    {
      title: 'Lead Generation',
      description: 'Identify and qualify high-value leads with AI-powered scoring and analysis',
      icon: '🎯'
    },
    {
      title: 'Customer Support',
      description: 'Enhance customer support with AI-powered insights and automation',
      icon: '🎧'
    },
    {
      title: 'Marketing Automation',
      description: 'Automate marketing campaigns and improve customer engagement',
      icon: '📢'
    },
    {
      title: 'Sales Forecasting',
      description: 'Predict sales outcomes and optimize revenue with AI forecasting',
      icon: '📈'
    },
    {
      title: 'Customer Analytics',
      description: 'Gain deep insights into customer behavior and preferences',
      icon: '📊'
>>>>>>> origin/main
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI CRM Assistant - Zion Tech Group</title>
<<<<<<< HEAD
        <meta name="description" content="Advanced AI-powered CRM assistant. Customer intelligence, lead scoring, automated communication, and sales analytics for your business." />
        <meta name="keywords" content="AI CRM assistant, customer relationship management, lead scoring, sales automation, Zion Tech Group" />
      </Helmet>
      
      <Navigation />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <main className="container mx-auto px-4 py-16 pt-24">
          {/* Hero Section */}
          <section className="text-center mb-16">
            <div className="text-6xl mb-6 animate-bounce">🤖</div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              AI CRM Assistant
=======
        <meta name="description" content="Transform your customer relationship management with our AI CRM Assistant. Intelligent automation, lead scoring, and sales insights for better business growth." />
        <meta name="keywords" content="AI CRM, customer relationship management, sales automation, lead scoring, CRM AI, business intelligence" />
      </Helmet>

<<<<<<< HEAD
      <Navigation />
=======
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
        <div className="container mx-auto px-4 py-16"></div>
          <div className="max-w-4xl mx-auto text-center"></div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Ai Crm Assistant<p className="text-xl text-gray-300 mb-8">Professional ai crm assistant services powered by advanced AI and cutting-edge technology.</p>
            <h1 className="text-4xl md: text-6xl font-bold text-white mb-6">
              Ai Crm Assistant;</h1>
>>>>>>> origin/main
            </h1>
            <p className="text-xl md:text-2xl text-cyan-400 mb-8 font-medium">
              Intelligent Customer Relationship Management
            </p>
<<<<<<< HEAD
            <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">
              Transform your CRM with AI-powered customer intelligence, lead scoring, 
              automated communication, and predictive analytics.
            </p>
            
            {/* Key Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-12">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">40%</div>
                <div className="text-gray-300">Sales Increase</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">60%</div>
                <div className="text-gray-300">Lead Conversion</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
                <div className="text-3xl font-bold text-pink-400 mb-2">80%</div>
                <div className="text-gray-300">Task Automation</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">24/7</div>
                <div className="text-gray-300">AI Support</div>
              </div>
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-e3dc

      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mb-8">
              <Users className="w-10 h-10 text-white" />
>>>>>>> origin/main
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI CRM Assistant
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your customer relationship management with our AI CRM Assistant. Intelligent automation, 
              lead scoring, and sales insights for better business growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 flex items-center justify-center">
                Get Started
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
              <button className="border border-blue-400 text-blue-300 px-8 py-4 rounded-lg font-semibold hover:bg-blue-500 hover:text-white transition-all duration-300">
                View Demo
              </button>
            </div>
          </div>
        </section>

<<<<<<< HEAD
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
                Advanced CRM Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive AI-powered CRM capabilities for modern sales teams
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
=======
<<<<<<< HEAD
        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Advanced CRM Features
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Our AI CRM Assistant combines cutting-edge technology with sales expertise
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg mb-4">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-blue-400 mr-2 flex-shrink-0" />
>>>>>>> origin/main
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
<<<<<<< HEAD
          </section>

          {/* Benefits Section */}
          <section className="mb-20">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Why Choose AI CRM Assistant?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Transform your sales process with intelligent automation
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
                CRM Assistant Plans
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the right CRM solution for your team
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {pricing.map((plan, index) => (
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
                See how organizations transformed their sales process
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
                Ready to Transform Your CRM?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Start your AI-powered CRM transformation today
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                  Start Free Trial
                </button>
                <button className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                  Schedule Demo
                </button>
              </div>
            </div>
          </section>
        </main>
      </div>
=======
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Applications & Use Cases
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                From sales to marketing, our AI CRM Assistant serves diverse business needs
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {useCases.map((useCase, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 text-center">
                  <div className="text-4xl mb-4">{useCase.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-3">{useCase.title}</h3>
                  <p className="text-gray-300">{useCase.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose Our AI CRM Assistant?
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Experience the future of customer relationship management with our revolutionary AI technology
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg mb-4">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-white font-medium">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl p-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Transform Your CRM?
              </h2>
              <p className="text-xl text-blue-100 mb-8">
                Join thousands of businesses who are already using our AI CRM Assistant
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center">
                  Get Started Now
                  <ArrowRight className="ml-2 w-5 h-5" />
                </button>
                <button className="border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300">
                  Schedule Demo
                </button>
=======
            <div className="space-y-4"></div>
              <a;
            <div className="space-y-4"></div>
              <a
                href="/contact"
                className="inline-block bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25"
              >Get Started Today</a>
              >
                Get Started Today;
              </a>
              <div></div>
                <a;
              <div></div>
                <a
                  href="/"
                  className="text-cyan-400 hover:text-cyan-300 transition-colors"
                >← Back to Home</a>
                >
                  ← Back to Home;
                </a>
>>>>>>> cursor/fix-errors-and-merge-to-main-e3dc
              </div>
            </div>
          </div>
        </section>
      </main>
>>>>>>> origin/main

      <Footer />
    </>
  );
};

<<<<<<< HEAD
export default AICRMAssistantPage;
=======
export default AICRMAssistantPage;
>>>>>>> origin/main
