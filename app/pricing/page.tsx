'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { CheckCircle, Star, ArrowRight, Zap } from 'lucide-react';
const PricingPage: React.FC = () => {
  const plans = [
    {
      name: 'Starter',
      price: '$2,999',
      period: '/month',
      description: 'Perfect for small businesses getting started with AI and IT solutions',
      features: [
        'Basic AI Integration (1-2 AI models)',
        'Cloud Infrastructure Setup (AWS/Azure)',
        'Email Support (48-hour response)',
        'Monthly Performance Reports',
        'Basic Analytics Dashboard',
        'Up to 5 users',
        'Standard Security Features',
        'Basic Training (2 hours)',
        '99.5% Uptime SLA'
      ],
      popular: false,
      category: 'AI & IT Starter'
    },
    {
      name: 'Professional',
      price: '$7,999',
      period: '/month',
      description: 'Ideal for growing companies with advanced AI and IT needs',
      features: [
        'Advanced AI Solutions (3-5 AI models)',
        'Custom Development (up to 40 hours/month)',
        'Priority Support (24-hour response)',
        'Weekly Performance Reports',
        'Advanced Analytics & BI Dashboard',
        'API Access & Integration',
        'Up to 25 users',
        'Advanced Security & Compliance',
        'Comprehensive Training (8 hours)',
        '99.9% Uptime SLA',
        'Dedicated Account Manager'
      ],
      popular: true,
      category: 'AI & IT Professional'
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'Tailored solutions for large organizations with complex requirements',
      features: [
        'Unlimited AI Models & Custom Solutions',
        'Dedicated Development Team',
        '24/7 Premium Support',
        'Real-time Monitoring & Alerts',
        'Custom Integrations & APIs',
        'White-label Options',
        'Unlimited Users',
        'Enterprise Security & Compliance',
        'On-site Training & Workshops',
        '99.99% Uptime SLA',
        'Dedicated Success Manager',
        'Custom SLA Terms'
      ],
      popular: false,
      category: 'AI & IT Enterprise'
    }
  ];

  const servicePricing = [
    {
      category: 'AI Services',
      services: [
        { name: 'AI Strategy & Consulting', price: '$5,000/month', description: 'Strategic AI planning and implementation' },
        { name: 'Machine Learning Development', price: '$15,000/project', description: 'Custom ML model development' },
        { name: 'Natural Language Processing', price: '$8,000/project', description: 'NLP and chatbot solutions' },
        { name: 'Computer Vision Solutions', price: '$12,000/project', description: 'Image and video analysis' },
        { name: 'AI Automation & RPA', price: '$3,500/month', description: 'Process automation solutions' }
      ]
    },
    {
      category: 'IT Services',
      services: [
        { name: 'Cloud Infrastructure', price: '$2,500/month', description: 'AWS, Azure, GCP management' },
        { name: 'DevOps & CI/CD', price: '$3,000/month', description: 'Automation and deployment pipelines' },
        { name: 'Cybersecurity', price: '$4,000/month', description: 'Security monitoring and compliance' },
        { name: 'Managed IT Services', price: '$2,200/month', description: '24/7 IT support and management' },
        { name: 'Database Management', price: '$1,800/month', description: 'Database optimization and maintenance' }
      ]
    },
    {
      category: 'Micro SaaS',
      services: [
        { name: 'Business Intelligence Dashboard', price: '$89/month', description: 'Advanced analytics platform' },
        { name: 'AI Customer Support Suite', price: '$149/month', description: 'Complete customer support solution' },
        { name: 'Email Marketing Automation', price: '$99/month', description: 'AI-powered email marketing' },
        { name: 'Project Management Suite', price: '$119/month', description: 'AI-powered project management' },
        { name: 'Lead Generation Engine', price: '$179/month', description: 'AI-powered lead generation' }
      ]
    }
  ];
  return (
    <React.Fragment>
      <Helmet>
        <title>Pricing - Zion Tech Group | Transparent AI & IT Pricing</title>
        <meta name="description" content="Transparent pricing for AI and IT solutions. Choose from Starter, Professional, or Enterprise plans. Custom solutions available. Get started today." />
        <meta name="keywords" content="AI pricing, IT services pricing, cloud solutions cost, enterprise AI pricing, custom development pricing" />
        <meta property="og:title" content="Pricing - Zion Tech Group" />
        <meta property="og:description" content="Transparent pricing for AI and IT solutions" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/pricing" />
      </Helmet>

