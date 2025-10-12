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

import { ArrowRight, Calendar, BarChart3, Users, Zap, CheckCircle, Target, TrendingUp, Smartphone, Shield, Bot, Star, Smartphone as Mobile } from 'lucide-react';

=======
>>>>>>> origin/main
export default function AIProjectManagerPage() {
<<<<<<< HEAD
  const features = [
    {
      icon: <Bot className="w-5h-5ml-2" />,
      title: 'AI Task Prioritization',
      description: 'Intelligent task ranking based on deadlines, dependencies, and team capacity'
    },
    {
      icon: <BarChart3 className="w-5h-5ml-2" />,
      title: 'Predictive Analytics',
      description: 'AI-powered project forecasting and risk assessment with 95% accuracy'
    },
    {
      icon: <Users className="w-5h-5ml-2" />,
      title: 'Smart Team Matching',
      description: 'AI algorithms match tasks to team members based on skills and availability'
    },
    {
      icon: <Zap className="w-5h-5ml-2" />,
      title: 'Automated Workflows',
      description: 'Set up intelligent workflows that adapt and optimize based on project patterns'
    },
    {
      icon: <Target className="w-5h-5ml-2" />,
      title: 'Resource Optimization',
      description: 'AI-driven resource allocation and capacity planning for maximum efficiency'
    },
    {
      icon: <Shield className="w-5h-5ml-2" />,
      title: 'Risk Management',
      description: 'Proactive risk identification and mitigation strategies powered by machine learning'
    }
  ]

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$19',
      period: '/month',
      description: 'Perfect for small teams and freelancers',
      features: [
        'Up to 5 team members',
        'Unlimited projects',
        'Basic AI features',
        'Mobile app access',
        'Email support',
        'Basic reporting'
      ],
      popular: false;
    },
    {
      name: 'Professional',
      price: '$49',
      period: '/month',
      description: 'Ideal for growing teams and agencies',
      features: [
        'Up to 25 team members',
        'Advanced AI features',
        'Custom workflows',
        'Priority support',
        'Advanced analytics',
        'API access',
        'Time tracking',
        'Resource management'
      ],
      popular: true;
    },
    {
      name: 'Enterprise',
      price: '$149',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Unlimited team members',
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
      name: 'Alex Thompson',
      company: 'Software Development Agency',
      content: 'Our project delivery time improved by 40% with AI task prioritization. The predictive analytics are incredibly accurate.',
      rating: 5,
      avatar: 'AT'
    },
    {
      name: 'Maria Garcia',
      company: 'Marketing Agency',
      content: 'The smart team matching feature is a game-changer. It automatically assigns tasks to the right people every time.',
      rating: 5,
      avatar: 'MG'
    },
    {
      name: 'Robert Lee',
      company: 'Construction Company',
      content: 'Risk management features helped us avoid 3 major project delays. The AI insights are invaluable.',
      rating: 5,
      avatar: 'RL'
    }
  ]

  const benefits = [
    {
      icon: <TrendingUp className="w-5h-5ml-2" />,
      title: '40% Faster Delivery',
      description: 'AI optimization reduces project completion time significantly'
    },
    {
      icon: <Target className="w-5h-5ml-2" />,
      title: '95% Accuracy',
      description: 'Predictive analytics with industry-leading accuracy rates'
    },
    {
      icon: <Users className="w-5h-5ml-2" />,
      title: 'Team Productivity +60%',
      description: 'Smart task allocation maximizes team efficiency'
    },
    {
      icon: <Shield className="w-5h-5ml-2" />,
      title: 'Risk Reduction 80%',
      description: 'Proactive risk management prevents project failures'
    }
  ]

  const integrations = [
    { name: 'Slack', icon: '💬' },
    { name: 'Microsoft Teams', icon: '👥' },
    { name: 'Jira', icon: '🎯' },
    { name: 'Asana', icon: '📋' },
    { name: 'Trello', icon: '📌' },
    { name: 'GitHub', icon: '🐙' },
    { name: 'Google Workspace', icon: '📧' },
    { name: 'Zoom', icon: '📹' },
    { name: 'Figma', icon: '🎨' },
    { name: 'Notion', icon: '📝' }
  ]
=======
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
>>>>>>> cursor/fix-errors-and-merge-to-main-3e0a

export default function AiProjectManagerPage() {
  return (
<<<<<<< HEAD
<<<<<<< HEAD

        <>
      <title>5G Data Analytics - Zion Tech Group</title>
        <title>AI Project Manager - Zion Tech Group | Intelligent Project Management</title>

                    <span>Start Free Trial</span>
                    <span>View All Plans</span>

                  <p>✓ 14-day free trial • ✓ No credit card required • ✓ Cancel anytime</p>

<<<<<<< HEAD
=======
  return (
    <>
      <Helmet>
        <title>A I Project Manager - Zion Tech Group</title>
        <meta name="description" content="Revolutionary AI-powered project management with smart task prioritization, predictive analytics, and automated workflows. Increase team productivity by 60%. Starting at $19/month." />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h1 className="text-4xl font-bold text-white mb-6">A I Project Manager</h1>
          <p className="text-lg text-gray-300 mb-8">Transform your project management with AI-powered task prioritization, predictive analytics, 
            and intelligent automation. Deliver projects 40% faster with 95% accuracy.</p>
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
        <title />AI Project Manager - Zion Tech Group | Intelligent Project Management</title>
        <meta name="description" content="Revolutionary AI-powered project management with smart task prioritization, predictive analytics, and automated workflows. Increase team productivity by 60%. Starting at $19/month." /></meta>
        <meta name="keywords" content="AI project management, smart task prioritization, predictive analytics, team collaboration, project automation, resource optimization" /></meta>
        <meta name="robots" content="index, follow" /></meta>
        <link rel="canonical" href="https://ziontechgroup.com/micro-saas/ai-project-manager"  /></link>
=======
    <>
      <Helmet>
        <title>AiProjectManager - Zion Tech Group</title>
        <meta name="description" content="Professional ai project manager solutions and services." />
>>>>>>> cursor/fix-errors-and-merge-to-main-3e0a
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-6">AiProjectManager</h1>
          <p className="text-lg text-gray-300 mb-8">Professional ai project manager solutions coming soon.</p>
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