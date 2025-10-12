<<<<<<< HEAD
import React from 'react'
import { Link } from 'react-router-dom'

export default function AIProjectManagerPage() {
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

  return (

  );


=======
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function AiProjectManagerPage() {
  return (
    <>
      <Helmet>
        <title>Ai Project Manager - Zion Tech Group</title>
        <meta name="description" content="Professional ai project manager services by Zion Tech Group. Transform your business with our expert solutions." />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h1 className="text-4xl font-bold text-white mb-6">Ai Project Manager</h1>
          <p className="text-lg text-gray-300 mb-8">Professional ai project manager services coming soon.</p>
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
  );
}
>>>>>>> cursor/fix-errors-and-merge-to-main-d941
