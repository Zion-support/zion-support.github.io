import { Helmet } from 'react-helmet-async';
import { Bot, MessageSquare, Users, BarChart, TrendingUp, Clock, Star, CheckCircle } from 'lucide-react';
'use client';
import React from 'react';
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AICustomerSupportBotPage: React.FC = () => {
  const _features = [
    {
      icon: Bot,
      title: '24/7 AI Support',
      description: 'Round-the-clock customer support with intelligent AI chatbot capabilities',
      benefits: ['90% response time reduction', 'Instant responses', 'Always available']
    },
    {
      icon: MessageSquare,
      title: 'Natural Language Processing',
      description: 'Advanced NLP for understanding and responding to customer queries naturally',
      benefits: ['Human-like conversations', 'Context awareness', 'Multi-language support']
    },
    {
      icon: Users,
      title: 'Human Handoff',
      description: 'Seamless escalation to human agents when complex issues arise',
      benefits: ['Smart escalation', 'Seamless transitions', 'Expert support']
    },
    {
      icon: BarChart,
      title: 'Analytics & Insights',
      description: 'Comprehensive analytics to track performance and improve customer experience',
      benefits: ['Real-time analytics', 'Performance tracking', 'Continuous improvement']
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$149',
      period: '/month',
      description: 'Perfect for small businesses',
      features: [
        'Up to 1,000 conversations/month',
        'Basic AI responses',
        'Email support',
        'Basic analytics',
        'Standard integrations'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$299',
      period: '/month',
      description: 'Ideal for growing companies',
      features: [
        'Up to 10,000 conversations/month',
        'Advanced AI responses',
        'Priority support',
        'Advanced analytics',
        'Custom integrations',
        'Multi-language support'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$599',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Unlimited conversations',
        'Premium AI features',
        '24/7 support',
        'Custom analytics',
        'White-label options',
        'API access',
        'Custom training'
      ],
      popular: false
    }
  ];

  const stats = [
    { icon: Users, value: '1,000+', label: 'Happy Customers' },
    { icon: TrendingUp, value: '90%', label: 'Response Time Reduction' },
    { icon: Clock, value: '45%', label: 'Satisfaction Increase' },
    { icon: Star, value: '4.8/5', label: 'Customer Rating' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>"
      <Helmet></Helmet>
        <title>AI Customer Support Bot | Zion Tech Group</title>
        <meta name="description" content="Enhance customer experience with our AI-powered support bot. 24/7 assistance, natural language processing, and seamless human handoff." />"
      </Helmet>
      
      <Navigation />
      
      <div className="container mx-auto px-4 py-16"></div>"
        <div className="text-center mb-16"></div>"
          <h1 className="text-5xl font-bold text-white mb-6">AI Customer Support Bot</h1>"
          <p className="text-xl text-gray-300 max-w-3xl mx-auto"></p>"
            Provide exceptional customer support 24/7 with our intelligent AI chatbot that understands,
natural language and escalates complex issues to human agents seamlessly.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"></div>"
          {stats.map((stat, index) => (
            <div key={index} className="text-center"></div>"
              <stat.icon className="h-12 w-12 text-cyan-400 mx-auto mb-4" />"
              <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>"
              <div className="text-gray-300">{stat.label}</div>"
          ))}

        <div className="grid md:grid-cols-2 gap-8 mb-16"></div>"
          {features.map((feature, index) => (
            <div key={index} className="bg-slate-800/50 rounded-lg p-6"></div>"
              <feature.icon className="h-10 w-10 text-cyan-400 mb-4" />"
              <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>"
              <p className="text-gray-300 mb-4">{feature.description}</p>"
              <ul className="space-y-2"></ul>"
                {feature.benefits.map((benefit, benefitIndex) => (
                  <li key={benefitIndex} className="flex items-center text-gray-300"></li>"
                    <CheckCircle className="h-4 w-4 text-green-400 mr-2" />"
                    {benefit}
                  </li>
              </ul>

          <h2 className="text-3xl font-bold text-white mb-8">Pricing Plans</h2>"
          <div className="grid md:grid-cols-3 gap-8"></div>"
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`bg-slate-800/50 rounded-lg p-6 ${plan.popular ? 'ring-2 ring-cyan-400' : ''}`}></div>
                {plan.popular && (
                  <div className="bg-cyan-400 text-slate-900 text-sm font-semibold px-3 py-1 rounded-full inline-block mb-4"></div>"
                    Most Popular
                )}
                <h3 className="text-xl font-semibold text-white mb-2">{plan.name}</h3>"
                <div className="text-3xl font-bold text-white mb-1"></div>"
                  {plan.price}<span className="text-lg text-gray-400">{plan.period}</span>"
                <p className="text-gray-300 mb-6">{plan.description}</p>"
                <ul className="space-y-3 mb-6"></ul>"
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300"></li>"
                      {feature}
                <button className="w-full bg-cyan-500 text-white py-3 rounded-lg hover:bg-cyan-600 transition-colors"></button>"
                  Get Started
                </button>

        <div className="text-center"></div>"
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Transform Your Customer Support?</h2>"
          <p className="text-xl text-gray-300 mb-8"></p>"
            Contact our experts to discuss your support needs and get a custom AI solution.
          <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>"
            <button className="bg-cyan-500 text-white px-8 py-3 rounded-lg hover:bg-cyan-600 transition-colors"></button>"
              Schedule Demo
            <button className="border border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg hover:bg-cyan-400 hover:text-slate-900 transition-colors"></button>"
              View Case Studies
      
      <Footer />
  );
};


export default $1;
'use client';
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, Star, Zap, Shield, Clock, Users, TrendingUp, BarChart, Calendar, Target, ArrowRight, Phone, Mail, MapPin, Brain, Cpu, Database, Cloud, Code, Smartphone, Settings, FileText, Search, Bot, Palette, Camera, Music, Video, Gamepad2, ShoppingCart, CreditCard, Building, Factory, Car, Plane, Ship, Train, Home, Heart, Stethoscope, GraduationCap, Briefcase, Wrench, Hammer, Paintbrush, Scissors, BookOpen, Calculator, Clock3, Compass, Navigation, PieChart, TrendingDown, Activity, Zap as Lightning, Target as Crosshair, Shield as Security, Users as People, Star as StarIcon, CheckCircle as Check, ArrowRight as Arrow, Phone as PhoneIcon, Mail as MailIcon, MapPin as Location, MessageSquare, Headphones, Globe, Languages } from 'lucide-react';

export default AICustomerSupportBotPage;
