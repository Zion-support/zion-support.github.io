<<<<<<< HEAD
<<<<<<< HEAD
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
export default function Page() {
  return (
<<<<<<< HEAD
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
      <Helmet>
        <title>Page - Zion Tech Group</title>
        <meta name="description" content="Professional services coming soon." />
      </Helmet>
      <div className="text-center">
        <h1 className="text-4xl font-bold text-white mb-6">
          Coming Soon
        </h1>
        <p className="text-lg text-gray-300 mb-8">
          Professional services coming soon.
        </p>
        <Link
          to="/contact"
          className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
        >
          Contact Us
          <ArrowRight className="ml-2 h-5 w-5" />
        </Link>
      </div>
=======
    <div>
      <Head>
        <title>Ai Email Marketing Automation - Zion Tech Group</title>
        <meta name="description" content="Professional services by Zion Tech Group." />
      </Head>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h1 className="text-4xl font-bold text-white mb-6">
            Ai Email Marketing Automation
          </h1>
          <p className="text-lg text-gray-300 mb-8">
            ai-email-marketing-automation services Transform your business with our expert solutions. services coming soon.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200"
          >
            Contact Us
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
      <Footer />
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0210
    </div>
  );
}
=======
import React from 'react'
import {Link} from 'react-router-dom'

import React from 'react';

import {Link} from 'react-router-dom';
import {ArrowRight} from 'lucide-react';

import {ArrowRight, Mail, BarChart3, Users, Zap, CheckCircle, Clock, Target, TrendingUp, Smartphone, Shield, Bot, Star, Smartphone as Mobile, Eye} from 'lucide-react';

export default function AIEmailMarketingAutomationPage() {const features = [{
      icon: <Bot className="w-5h-5ml-2"   />,
      title: 'AI Content Generation',
      description: 'Generate personalized email content with AI that adapts to your brand voice and audience'},
    {icon: <Target className="w-5h-5ml-2"   />,
      title: 'Smart Segmentation',
      description: 'Automatically segment your audience based on behavior, preferences, and engagement patterns'},
    {icon: <BarChart3 className="w-5h-5ml-2"   />,
      title: 'Predictive Analytics',
      description: 'AI-powered insights predict the best send times, subject lines, and content for maximum engagement'},
    {icon: <Zap className="w-5h-5ml-2"   />,
      title: 'Automated Workflows',
      description: 'Create intelligent email sequences that adapt based on recipient behavior and engagement'},
    {icon: <Eye className="w-5h-5ml-2"   />,
      title: 'A/B Testing AI',
      description: 'Automatically test and optimize email elements with AI-driven insights and recommendations'},
    {icon: <Shield className="w-5h-5ml-2"   />,
      title: 'Deliverability Optimization',
      description: 'AI-powered tools ensure maximum inbox placement and compliance with email regulations'}]

  const pricingPlans = [{name: 'Starter',
      price: '$29',
      period: '/month',
      description: 'Perfect for small businesses and startups',
      features: [
        'Up to 5,000 subscribers',
        'Basic AI features',
        'Email templates',
        'Mobile app access',
        'Email support',
        'Basic analytics'],
      popular: false;},
    {name: 'Professional',
      price: '$79',
      period: '/month',
      description: 'Ideal for growing businesses and agencies',
      features: ['Up to 25,000 subscribers',
        'Advanced AI features',
        'Custom workflows',
        'Priority support',
        'Advanced analytics',
        'API access',
        'A/B testing',
        'Landing pages'],
      popular: true;},
    {name: 'Enterprise',
      price: '$199',
      period: '/month',
      description: 'For large organizations and agencies',
      features: ['Unlimited subscribers',
        'All AI features',
        'Custom integrations',
        'Dedicated support',
        'White-label option',
        'Advanced security',
        'Custom reporting',
        'SLA guarantee'],
      popular: false;}
  ]

  const testimonials = [{name: 'Rachel Green',
      company: 'E-commerce Store',
      content: 'Increased our email open rates by 150% and revenue by 40%. The AI content generation is incredible.',
      rating: 5,
      avatar: 'RG'},
    {name: 'David Park',
      company: 'SaaS Company',
      content: 'The automated workflows save us 20+ hours per week. Customer engagement has never been higher.',
      rating: 5,
      avatar: 'DP'},
    {name: 'Lisa Chen',
      company: 'Marketing Agency',
      content: 'Our clients love the results. The AI segmentation and personalization features are game-changers.',
      rating: 5,
      avatar: 'LC'}]

  const benefits = [{icon: <TrendingUp className="w-5h-5ml-2"   />,
      title: '150% Higher Open Rates',
      description: 'AI-optimized subject lines and send times maximize engagement'},
    {icon: <DollarSign className="w-5h-5ml-2"   />,
      title: '40% Revenue Increase',
      description: 'Personalized content and smart segmentation drive conversions'},
    {icon: <Clock className="w-5h-5ml-2"   />,
      title: 'Save 20+ Hours Weekly',
      description: 'Automated workflows and AI content generation eliminate manual work'},
    {icon: <Target className="w-5h-5ml-2"   />,
      title: '95% Deliverability',
      description: 'AI-powered optimization ensures maximum inbox placement'}]

  const emailTypes = [{name: 'Welcome Series', icon: '👋', description: 'Onboard new subscribers with personalized sequences'},
    {name: 'Product Recommendations', icon: '🛍️', description: 'AI-powered product suggestions based on behavior'},
    {name: 'Cart Abandonment', icon: '🛒', description: 'Recover lost sales with intelligent follow-up campaigns'},
    {name: 'Re-engagement', icon: '🔄', description: 'Win back inactive subscribers with targeted content'},
    {name: 'Birthday & Anniversaries', icon: '🎉', description: 'Celebrate special moments with personalized messages'},
    {name: 'Educational Content', icon: '📚', description: 'Nurture leads with valuable, AI-generated content'}]

  return (
    <>
      <title>5G Data Analytics - Zion Tech Group</title>
        <title>AI Email Marketing Automation - Zion Tech Group | Smart Email Campaigns</title>

                    <span>Start Free Trial</span>
                    <span>View All Plans</span>

                  <p>✓ 14-day free trial • ✓ No credit card required • ✓ Cancel anytime</p>
  );

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-048f
=======
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function AiemailmarketingautomationPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Ai Email Marketing Automation - Zion Tech Group</title>
        <meta name="description" content="Professional ai email marketing automation services by Zion Tech Group" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-6">Ai Email Marketing Automation</h1>
          <p className="text-lg text-gray-300 mb-8">Professional ai email marketing automation services coming soon.</p>
          
          <Link
            to="/contact"
            className="inline-flex items-center bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
          >
            Contact Us
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>
      </div>
    </div>
  );
}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0659
