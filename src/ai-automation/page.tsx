import React from 'react';
import { Helmet } from 'react-helmet-async';

import { CheckCircle, Star, Users, TrendingUp, Clock, Shield, Zap, Settings, Phone } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

  const _features = [
    {
      icon: Settings,
      title: 'Process Automation',
      description: 'Intelligent automation of complex business processes with decision-making capabilities',
      benefits: ['80% process efficiency', 'Zero human error', '24/7 operation']
    },
    {
      icon: Zap,
      title: 'Workflow Optimization',
      description: 'AI-powered workflow analysis and optimization for maximum productivity',
      benefits: ['60% time savings', 'Smart routing', 'Dynamic optimization']
    },
    {
      icon: Shield,
      title: 'Decision Trees',
      description: 'Advanced decision-making algorithms for complex business scenarios',
      benefits: ['Consistent decisions', 'Risk mitigation', 'Compliance assurance']
    },
    {
      icon: Clock,
      title: 'Exception Handling',
      description: 'Intelligent handling of exceptions and edge cases in automated processes',
      benefits: ['Smart escalation', 'Context awareness', 'Learning capabilities']
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$1,400',
      period: '/month',
      description: 'Perfect for small businesses',
      features: [
        'Up to 10 automated processes',
        'Basic AI decision making',
        'Email support',
        'Standard integrations',
        'Basic analytics'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$2,800',
      period: '/month',
      description: 'Ideal for growing companies',
      features: [
        'Up to 50 automated processes',
        'Advanced AI decision making',
        'Priority support',
        'Custom integrations',
        'Advanced analytics',
        'Workflow optimization'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$5,600',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Unlimited processes',
        'Premium AI features',
        '24/7 support',
        'Custom development',
        'White-label options',
        'API access',
        'Dedicated support'
      ],
      popular: false
    }
  ];

  const stats = [
    { icon: Users, value: '200+', label: 'Automated Processes' },
    { icon: TrendingUp, value: '80%', label: 'Efficiency Increase' },
    { icon: Clock, value: '60%', label: 'Time Saved' },
    { icon: Star, value: '4.9/5', label: 'Client Rating' }
  ];


const AiAutomationPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-white mb-4">Ai Automation</h1>
        <p className="text-gray-300 mb-8">Coming Soon - Advanced ai automation solutions</p>
        <a href="/contact" className="bg-cyan-500 text-white px-6 py-3 rounded-lg hover:bg-cyan-600 transition-colors">
          Contact Us
        </a>
      </div>
    </div>
  );
};

export default AiAutomationPage;