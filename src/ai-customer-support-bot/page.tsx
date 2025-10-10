import React from 'react';
import { Helmet } from 'react-helmet-async';
import {CheckCircle, Star, Users, TrendingUp, Clock, MessageSquare, Bot, Phone} from 'lucide-react';
import { Bot, MessageSquare, Users, BarChart, TrendingUp, Clock, Star, CheckCircle } from 'lucide-react';
'use client';
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
;
const AICustomerSupportBotPage: React.FC = () => {;
const features = []
import Navigation from '../components;
import Footer from '../components;
const AICustomerSupportBotPage: React.FC = () => {}
  const features = []
    {}
      ico,
    n: Bot,
      title: '24;
      descriptio,
    n: 'Round-the-clock customer support with intelligent AI chatbot capabilities',
      benefits: ['90% response time reduction', 'Instant responses', 'Always available']
    },
      icon: MessageSquare,
      title: 'Natural Language Processing',
      description: 'Advanced NLP for understanding and responding to customer queries naturally',
      benefits: ['Human-like conversations', 'Context awareness', 'Multi-language support']
      icon: Users,
      title: 'Human Handoff',
      description: 'Seamless escalation to human agents when complex issues arise',
      benefits: ['Smart escalation', 'Seamless transitions', 'Expert support']
      icon: BarChart,
      title: 'Analytics & Insights',
      description: 'Comprehensive analytics to track performance and improve customer experience',
      benefits: ['Real-time analytics', 'Performance tracking', 'Continuous improvement']
    }
  ];
;
const pricingPlans = []
      name: 'Starter',
      price: '$149',
      period: '
      descriptio,
    n: 'Perfect for small businesses',
      features: []
        'Up to 1,000 conversations;
        'Basic AI responses',
        'Email support',
        'Basic analytics',
        'Standard integrations'
      ],
      popular: false;
      nam,
    e: 'Professional',
      price: '$299',
      description: 'Ideal for growing companies',
        'Up to 10,000 conversations;
        'Advanced AI responses',
        'Priority support',
        'Advanced analytics',
        'Custom integrations',
        'Multi-language support'
      popular: true;
      nam,
    e: 'Enterprise',
      price: '$599',
      description: 'For large organizations',
        'Unlimited conversations',
        'Premium AI features',
        '24;
        'Custom analytics',
        'White-label options',
        'API access',
        'Custom training';
const stats = []
    { icon: Users, value: '1,000+', label: 'Happy Customers' },
    { icon: TrendingUp, value: '90%', label: 'Response Time Reduction' },
    { icon: Clock, value: '45%', label: 'Satisfaction Increase' },
    { icon: Star, value: '4.8;
  return (<div className=""min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>"
        <title>AI Customer Support Bot | Zion Tech Group<)
        <meta name="description" content=""Enhance customer experience with our AI-powered support bot. 24/7 assistance), natural language processing, and seamless human handoff."></meta>"
      <

        <div className=""text-center mb-16"></div>"
          <h1 className=""text-5xl font-bold text-white mb-6">AI Customer Support Bot<"
          <p className=""text-xl text-gray-300 max-w-3xl mx-auto"></p>"
            Provide exceptional customer support 24;
            natural language and escalates complex issues to human agents seamlessly.
          <
        <

        <div className=""grid md: grid-cols-2 l,"></div>"
    g:grid-cols-4 gap-8 mb-16">
          {stats.map((stat), index) => (<div key={index} className=""text-center"></div>"
              <stat .icon className=""h-12 w-12 text-cyan-400 mx-auto mb-4"></stat>"
              <div className=""text-3xl font-bold text-white mb-2">{stat.value}<"
              <div className=""text-gray-300">{stat.label}<)"
          ))}

        <div className=""grid md: grid-cols-2 gap-8 mb-16"></div>"
          {features.map((feature), index) => (<div key={index} className=""bg-slate-800"></div>"
              <feature .icon className=""h-10 w-10 text-cyan-400 mb-4"></feature>"
              <h3 className=""text-xl font-semibold text-white mb-3">{feature.title}<"
              <p className=""text-gray-300 mb-4">{feature.description}<"
              <ul className=""space-y-2">)"
                {feature.benefits.map((benefit, benefitIndex) => (<li key={benefitIndex} className=""flex items-center text-gray-300"></li>"
                    <CheckCircle className=""h-4 w-4 text-green-400 mr-2"></CheckCircle>"
                    {benefit}
                  <
              <

          <h2 className=""text-3xl font-bold text-white mb-8">Pricing Plans<"
          <div className=""grid md: grid-cols-3 gap-8">)"
            {pricingPlans.map((plan), index) => (
              <div key={index} className="{ `bg-slate-800></div>"
                {plan.popular && (
                  <div className=""bg-cyan-400 text-slate-900 text-sm font-semibold px-3 py-1 rounded-full inline-block mb-4"></div>"
                    Most Popular;
                ) };
                <h3 className=""text-xl font-semibold text-white mb-2">{plan.name}<"
                <div className=""text-3xl font-bold text-white mb-1"></div>"
                  {plan.price}<span className=""text-lg text-gray-400">{plan.period}<"
                <p className=""text-gray-300 mb-6">{plan.description}<"
                <ul className=""space-y-3 mb-6"></ul>"
                  {plan.features.map((feature, featureIndex) => (<li key={featureIndex} className=""flex items-center text-gray-300"></li>"
                      {feature}
                <button className=""w-full bg-cyan-500 text-white py-3 rounded-lg hover: bg-cyan-600 transition-colors"></button>"
                  Get Started;
                <

        <div className=""text-center"></div>"
          <h2 className=""text-3xl font-bold text-white mb-6">Ready to Transform Your Customer Support?<"
          <p className=""text-xl text-gray-300 mb-8"></p>"
            Contact our experts to discuss your support needs and get a custom AI solution.
          <div className=""flex flex-col sm:flex-row gap-4 justify-center"></div>"
            <button className=""bg-cyan-500 text-white px-8 py-3 rounded-lg hover:bg-cyan-600 transition-colors"></button>"
              Schedule Demo;
            <button className=""border border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg hover:bg-cyan-400 hove,"></button>"
    r:text-slate-900 transition-colors">
              View Case Studies;
      <Footer /></Footer>
  )};
      <Footer )></Footer>
  );
};
export default $1;
'use client';
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, Star, Zap, Shield, Clock, Users, TrendingUp, BarChart, Calendar, Target, ArrowRight, Phone, Mail, MapPin, Brain, Cpu, Database, Cloud, Code, Smartphone, Settings, FileText, Search, Bot, Palette, Camera, Music, Video, Gamepad2, ShoppingCart, CreditCard, Building, Factory, Car, Plane, Ship, Train, Home, Heart, Stethoscope, GraduationCap, Briefcase, Wrench, Hammer, Paintbrush, Scissors, BookOpen, Calculator, Clock3, Compass, Navigation, PieChart, TrendingDown, Activity, Zap as Lightning, Target as Crosshair, Shield as Security, Users as People, Star as StarIcon, CheckCircle as Check, ArrowRight as Arrow, Phone as PhoneIcon, Mail as MailIcon, MapPin as Location, MessageSquare, Headphones, Globe, Languages } from 'lucide-react';
export default AICustomerSupportBotPage;