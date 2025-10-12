'use client';

import React from 'react';
import { CheckCircle, ArrowRight, Smartphone, Brain, Database, Shield, Code, Star, DollarSign, Users, Clock, Zap } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export default function MicroSaasServicesPage() {
  const services = [
    {
      id: 'ai-content-writer-pro',
      title: 'AI Content Writer Pro',
      description: 'Professional AI-powered content creation tool for blogs, articles, and marketing materials.',
      price: '$29/month',
      features: ['Unlimited content generation', 'SEO optimization', 'Multiple content types', 'Brand voice training'],
      icon: <Brain className="w-8 h-8 text-blue-500" />,
      popular: true,
      users: '500+',
      rating: 4.9
    },
    {
      id: 'ai-analytics-dashboard',
      title: 'AI Analytics Dashboard',
      description: 'Comprehensive analytics and insights powered by artificial intelligence.',
      price: '$39/month',
      features: ['Real-time analytics', 'Predictive insights', 'Custom reports', 'Data visualization'],
      icon: <Database className="w-8 h-8 text-green-500" />,
      popular: false,
      users: '300+',
      rating: 4.8
    },
    {
      id: 'ai-email-marketing',
      title: 'AI Email Marketing',
      description: 'Automated email campaigns with AI-powered personalization and optimization.',
      price: '$19/month',
      features: ['Smart segmentation', 'A/B testing', 'Automated sequences', 'Performance tracking'],
      icon: <Code className="w-8 h-8 text-purple-500" />,
      popular: false,
      users: '200+',
      rating: 4.7
    },
    {
      id: 'ai-crm-assistant',
      title: 'AI CRM Assistant',
      description: 'Intelligent customer relationship management with AI-powered insights.',
      price: '$49/month',
      features: ['Lead scoring', 'Automated follow-ups', 'Sales forecasting', 'Customer insights'],
      icon: <Users className="w-8 h-8 text-orange-500" />,
      popular: false,
      users: '150+',
      rating: 4.9
    },
    {
      id: 'ai-social-scheduler',
      title: 'AI Social Media Manager',
      description: 'Automated social media management with AI-powered content scheduling.',
      price: '$24/month',
      features: ['Multi-platform posting', 'Optimal timing', 'Content suggestions', 'Engagement tracking'],
      icon: <Smartphone className="w-8 h-8 text-pink-500" />,
      popular: false,
      users: '400+',
      rating: 4.6
    },
    {
      id: 'ai-expense-tracker',
      title: 'AI Expense Tracker',
      description: 'Smart expense tracking and financial management with AI categorization.',
      price: '$14/month',
      features: ['Receipt scanning', 'Auto-categorization', 'Budget alerts', 'Tax preparation'],
      icon: <DollarSign className="w-8 h-8 text-yellow-500" />,
      popular: false,
      users: '250+',
      rating: 4.5
    }
  ];

  const benefits = [
    {
      icon: <Zap className="w-6 h-6 text-blue-500" />,
      title: 'Lightning Fast Setup',
      description: 'Get started in minutes with our intuitive onboarding process.'
    },
    {
      icon: <Shield className="w-6 h-6 text-green-500" />,
      title: 'Enterprise Security',
      description: 'Bank-level security with end-to-end encryption and compliance.'
    },
    {
      icon: <Clock className="w-6 h-6 text-purple-500" />,
      title: '24/7 Support',
      description: 'Round-the-clock support from our expert team.'
    },
    {
      icon: <Users className="w-6 h-6 text-orange-500" />,
      title: 'Scalable Solutions',
      description: 'Grow with confidence as your business expands.'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'Content Marketing Pro',
      content: 'AI Content Writer Pro has revolutionized our content creation process. We can now produce 10x more content with better quality.',
      rating: 5,
      avatar: 'SJ',
      service: 'AI Content Writer Pro'
    },
    {
      name: 'Michael Chen',
      company: 'Data Insights Co.',
      content: 'The analytics dashboard provides insights we never had before. It\'s like having a data scientist on our team.',
      rating: 5,
      avatar: 'MC',
      service: 'AI Analytics Dashboard'
    },
    {
      name: 'Emily Rodriguez',
      company: 'Social Media Agency',
      content: 'Our social media management is now completely automated. The AI knows exactly when to post for maximum engagement.',
      rating: 5,
      avatar: 'ER',
      service: 'AI Social Media Manager'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Micro SaaS Services - Zion Tech Group</title>
        <meta name="description" content="Discover our range of AI-powered micro SaaS solutions. From content creation to analytics, we provide specialized tools for modern businesses." />
        <meta name="keywords" content="micro SaaS, AI tools, business software, content creation, analytics, automation, productivity tools" />
      </Helmet>
      
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 px-4 py-20">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Micro SaaS Services
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Powerful AI-driven tools designed for modern businesses. Choose from our suite of specialized 
            micro SaaS solutions to streamline your operations and boost productivity.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
            >
              Start Free Trial
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link 
              to="/contact" 
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Micro SaaS Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose from our range of specialized AI-powered tools designed to solve specific business challenges.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div key={service.id} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 relative">
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-gray-300 mb-4">{service.description}</p>
                
                <div className="flex items-center justify-between mb-4">
                  <div className="text-2xl font-bold text-white">{service.price}</div>
                  <div className="flex items-center">
                    <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
                    <span className="text-gray-300 text-sm">{service.rating}</span>
                  </div>
                </div>
                
                <div className="text-sm text-gray-400 mb-4">{service.users} active users</div>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
                >
                  Start Free Trial
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Our Micro SaaS Solutions?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We combine cutting-edge AI technology with user-friendly design to deliver exceptional results.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-600 rounded-full mb-4 mx-auto">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              What Our Users Say
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Join thousands of satisfied users who have transformed their businesses with our micro SaaS solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-blue-600 rounded-full flex items-center justify-center text-white font-semibold mr-3">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <p className="font-semibold text-white">{testimonial.name}</p>
                    <p className="text-gray-400 text-sm">{testimonial.company}</p>
                    <p className="text-blue-400 text-xs">{testimonial.service}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Start your free trial today and experience the power of AI-driven micro SaaS solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center"
                >
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link 
                  to="/contact" 
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  Schedule Demo
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
