

import React, {useState} from 'react';

import {Helmet} from 'react-helmet-async';
import {Link} from 'react-router-dom';
import {ArrowRight, CheckCircle, Users, Zap, Shield, Brain, BarChart, MessageCircle, Target, ShoppingCart, Globe, Clock} from 'lucide-react';

const AiChatbotBuilderPage: React.FC = () => {const features = [{
      title: 'No-Code Builder',
      description: 'Create sophisticated chatbots without any programming knowledge using our visual interface',
      icon: <Zap className="w-5 h-5 ml-2"   />,
      color: 'from-blue-500 to-cyan-500'},
    {title: 'AI-Powered Responses',
      description: 'Natural language processing and machine learning for intelligent, contextual conversations',
      icon: <Brain className="w-5 h-5 ml-2"   />,
      color: 'from-yellow-500 to-orange-500'},
    {title: 'Multi-Channel Deployment',
      description: 'Deploy your chatbot across websites, mobile apps, social media, and messaging platforms',
      icon: <Globe className="w-5 h-5 ml-2"   />,
      color: 'from-green-500 to-emerald-500'},
    {title: 'Advanced Analytics',
      description: 'Track performance, user engagement, and conversation insights with detailed analytics',
      icon: <BarChart className="w-5 h-5 ml-2"   />,
      color: 'from-indigo-500 to-purple-500'},
    {title: 'Custom Integrations',
      description: 'Connect with CRM, helpdesk, payment systems, and other business tools seamlessly',
      icon: <Shield className="w-5 h-5 ml-2"   />,
      color: 'from-red-500 to-pink-500'},
    {title: 'Real-time Monitoring',
      description: 'Monitor conversations in real-time and intervene when human assistance is needed',
      icon: <MessageCircle className="w-5 h-5 ml-2"   />,
      color: 'from-teal-500 to-cyan-500'}];

  const useCases = [{title: 'Customer Support',
      description: '24/7 automated customer support with instant responses and issue resolution',
      icon: <MessageCircle className="w-6 h-6"   />,
      popular: true},
    {title: 'Lead Generation',
      description: 'Qualify leads and capture contact information through engaging conversations',
      icon: <Target className="w-6 h-6"   />,
      popular: false},
    {title: 'E-commerce Assistant',
      description: 'Help customers find products, answer questions, and complete purchases',
      icon: <ShoppingCart className="w-6 h-6"   />,
      popular: true},
    {title: 'Appointment Booking',
      description: 'Schedule appointments, send reminders, and manage calendar availability',
      icon: <Clock className="w-6 h-6"   />,
      popular: false}];

  const pricingPlans = [{name: 'Starter',
      price: '$29',
      period: '/month',
      description: 'Perfect for small businesses getting started',
      features: [
        'Up to 1,000 conversations/month',
        'Basic AI responses',
        'Website integration',
        'Email support',
        'Basic analytics'],
      popular: false;},
    {name: 'Professional',
      price: '$99',
      period: '/month',
      description: 'Ideal for growing businesses with advanced needs',
      features: ['Up to 10,000 conversations/month',
        'Advanced AI with custom training',
        'Multi-channel deployment',
        'Priority support',
        'Advanced analytics & reporting',
        'Custom integrations'],
      popular: true;},
    {name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'For large organizations with complex requirements',
      features: ['Unlimited conversations',
        'Custom AI model training',
        'White-label solution',
        'Dedicated support',
        'Custom analytics dashboard',
        'API access',
        'SLA guarantee'],
      popular: false;}
  ];

export default function AiChatbotBuilder() {<title>AI Chatbot Builder - Zion Tech Group</title>
        <meta name="description" content="Build intelligent chatbots without coding. Deploy across multiple channels with advanced AI capabilities."   /></meta>
        <meta name="keywords" content="AI chatbot builder, no-code chatbot, conversational AI, customer support automation"   /></meta>
      </Helmet>

      {/* Hero Section */}

              </div>
  ))}
          </div>
        </div>
      </section>
      {/* Pricing Section */}

