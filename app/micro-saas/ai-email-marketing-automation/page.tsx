<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react'
import { Link } from 'react-router-dom'
<<<<<<< HEAD

import React from 'react';

=======
import React from 'react';
import { Helmet } from 'react-helmet-async';
>>>>>>> cursor/fix-errors-and-merge-to-main-b918
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

import { ArrowRight, Mail, BarChart3, Users, Zap, CheckCircle, Clock, Target, TrendingUp, Smartphone, Shield, Bot, Star, Smartphone as Mobile, Eye } from 'lucide-react';

=======
>>>>>>> origin/main
export default function AIEmailMarketingAutomationPage() {
<<<<<<< HEAD
  const features = [
    {
      icon: <Bot className="w-5h-5ml-2" />,
      title: 'AI Content Generation',
      description: 'Generate personalized email content with AI that adapts to your brand voice and audience'
    },
    {
      icon: <Target className="w-5h-5ml-2" />,
      title: 'Smart Segmentation',
      description: 'Automatically segment your audience based on behavior, preferences, and engagement patterns'
    },
    {
      icon: <BarChart3 className="w-5h-5ml-2" />,
      title: 'Predictive Analytics',
      description: 'AI-powered insights predict the best send times, subject lines, and content for maximum engagement'
    },
    {
      icon: <Zap className="w-5h-5ml-2" />,
      title: 'Automated Workflows',
      description: 'Create intelligent email sequences that adapt based on recipient behavior and engagement'
    },
    {
      icon: <Eye className="w-5h-5ml-2" />,
      title: 'A/B Testing AI',
      description: 'Automatically test and optimize email elements with AI-driven insights and recommendations'
    },
    {
      icon: <Shield className="w-5h-5ml-2" />,
      title: 'Deliverability Optimization',
      description: 'AI-powered tools ensure maximum inbox placement and compliance with email regulations'
    }
  ]

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$29',
      period: '/month',
      description: 'Perfect for small businesses and startups',
      features: [
        'Up to 5,000 subscribers',
        'Basic AI features',
        'Email templates',
        'Mobile app access',
        'Email support',
        'Basic analytics'
      ],
      popular: false;
    },
    {
      name: 'Professional',
      price: '$79',
      period: '/month',
      description: 'Ideal for growing businesses and agencies',
      features: [
        'Up to 25,000 subscribers',
        'Advanced AI features',
        'Custom workflows',
        'Priority support',
        'Advanced analytics',
        'API access',
        'A/B testing',
        'Landing pages'
      ],
      popular: true;
    },
    {
      name: 'Enterprise',
      price: '$199',
      period: '/month',
      description: 'For large organizations and agencies',
      features: [
        'Unlimited subscribers',
        'All AI features',
        'Custom integrations',
        'Dedicated support',
        'White-label option',
        'Advanced security',
        'Custom reporting',
        'SLA guarantee'
      ],
      popular: false;
    }
  ]

  const testimonials = [
    {
      name: 'Rachel Green',
      company: 'E-commerce Store',
      content: 'Increased our email open rates by 150% and revenue by 40%. The AI content generation is incredible.',
      rating: 5,
      avatar: 'RG'
    },
    {
      name: 'David Park',
      company: 'SaaS Company',
      content: 'The automated workflows save us 20+ hours per week. Customer engagement has never been higher.',
      rating: 5,
      avatar: 'DP'
    },
    {
      name: 'Lisa Chen',
      company: 'Marketing Agency',
      content: 'Our clients love the results. The AI segmentation and personalization features are game-changers.',
      rating: 5,
      avatar: 'LC'
    }
  ]

  const benefits = [
    {
      icon: <TrendingUp className="w-5h-5ml-2" />,
      title: '150% Higher Open Rates',
      description: 'AI-optimized subject lines and send times maximize engagement'
    },
    {
      icon: <DollarSign className="w-5h-5ml-2" />,
      title: '40% Revenue Increase',
      description: 'Personalized content and smart segmentation drive conversions'
    },
    {
      icon: <Clock className="w-5h-5ml-2" />,
      title: 'Save 20+ Hours Weekly',
      description: 'Automated workflows and AI content generation eliminate manual work'
    },
    {
      icon: <Target className="w-5h-5ml-2" />,
      title: '95% Deliverability',
      description: 'AI-powered optimization ensures maximum inbox placement'
    }
  ]

  const emailTypes = [
    { name: 'Welcome Series', icon: '👋', description: 'Onboard new subscribers with personalized sequences' },
    { name: 'Product Recommendations', icon: '🛍️', description: 'AI-powered product suggestions based on behavior' },
    { name: 'Cart Abandonment', icon: '🛒', description: 'Recover lost sales with intelligent follow-up campaigns' },
    { name: 'Re-engagement', icon: '🔄', description: 'Win back inactive subscribers with targeted content' },
    { name: 'Birthday & Anniversaries', icon: '🎉', description: 'Celebrate special moments with personalized messages' },
    { name: 'Educational Content', icon: '📚', description: 'Nurture leads with valuable, AI-generated content' }
  ]
=======
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
>>>>>>> cursor/fix-errors-and-merge-to-main-3e0a

export default function AiEmailMarketingAutomationPage() {
  return (
<<<<<<< HEAD
<<<<<<< HEAD

        <>
      <title>5G Data Analytics - Zion Tech Group</title>
        <title>AI Email Marketing Automation - Zion Tech Group | Smart Email Campaigns</title>

                    <span>Start Free Trial</span>
                    <span>View All Plans</span>

                  <p>✓ 14-day free trial • ✓ No credit card required • ✓ Cancel anytime</p>

<<<<<<< HEAD
=======
  return (
    <>
      <Helmet>
        <title>A I Email Marketing Automation - Zion Tech Group</title>
        <meta name="description" content="Revolutionary AI-powered email marketing automation with smart segmentation, content generation, and predictive analytics. Increase open rates by 150%. Starting at $29/month." />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h1 className="text-4xl font-bold text-white mb-6">A I Email Marketing Automation</h1>
          <p className="text-lg text-gray-300 mb-8">Transform your email marketing with AI-powered automation, smart segmentation, and personalized content. 
            Increase open rates by 150% and revenue by 40% with intelligent campaigns.</p>
          <Link
            to="/contact"
            className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center mx-auto w-fit"
          >
            Contact Us
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </div>
    </>
>>>>>>> cursor/fix-errors-and-merge-to-main-b918
=======
      </>
>>>>>>> origin/main
  );

=======
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
      <Helmet></Helmet>
        <title />AI Email Marketing Automation - Zion Tech Group | Smart Email Campaigns</title>
        <meta name="description" content="Revolutionary AI-powered email marketing automation with smart segmentation, content generation, and predictive analytics. Increase open rates by 150%. Starting at $29/month." /></meta>
        <meta name="keywords" content="AI email marketing, email automation, smart segmentation, email content generation, email analytics, marketing automation" /></meta>
        <meta name="robots" content="index, follow" /></meta>
        <link rel="canonical" href="https://ziontechgroup.com/micro-saas/ai-email-marketing-automation"  /></link>
=======
    <>
      <Helmet>
        <title>AiEmailMarketingAutomation - Zion Tech Group</title>
        <meta name="description" content="Professional ai email marketing automation solutions and services." />
>>>>>>> cursor/fix-errors-and-merge-to-main-3e0a
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-6">AiEmailMarketingAutomation</h1>
          <p className="text-lg text-gray-300 mb-8">Professional ai email marketing automation solutions coming soon.</p>
          <Link 
            to="/contact" 
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
          >
            Contact Us
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </>
  );
}