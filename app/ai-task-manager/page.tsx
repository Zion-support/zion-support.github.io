'use client'
import React, { useState, useEffect, lazy } from 'react'
import { CheckCircle, Phone, Target, BarChart, Users, Clock, Zap, TrendingUp, Brain, Settings, Calendar, CheckSquare } from 'lucide-react';

const Navigation = lazy(() => import('../components/Navigation'))
const Footer = lazy(() => import('../components/Footer'))
const SEOOptimizer = lazy(() => import('../components/SEOOptimizer'))

const AITaskManagerPage: React.FC = React.memo((props) => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Task Prioritization',
      description: 'Intelligent task prioritization based on deadlines, importance, and dependencies',
      benefits: ['60% productivity boost', 'Never miss deadlines', 'Better focus', 'Achieve more goals']
    },
    {
      icon: Target,
      title: 'Smart Scheduling',
      description: 'Automated scheduling that optimizes your time and energy levels',
      benefits: ['Optimal time allocation', 'Energy-based scheduling', 'Conflict resolution', 'Buffer time management']
    },
    {
      icon: BarChart,
      title: 'Progress Tracking',
      description: 'Real-time progress monitoring with predictive analytics',
      benefits: ['Visual progress tracking', 'Predictive completion times', 'Performance insights', 'Goal achievement']
    },
    {
      icon: Users,
      title: 'Team Collaboration',
      description: 'Enhanced team coordination with AI-powered task distribution',
      benefits: ['Better team coordination', 'Reduced conflicts', 'Improved communication', 'Shared accountability']
    }
  ]

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$49/month',
      description: 'Perfect for individuals and small teams',
      features: [
        'Up to 5 team members',
        'Unlimited tasks',
        'Basic AI prioritization',
        'Standard reporting',
        'Email support',
        'Mobile app access'
      ],
      popular: false,
      cta: 'Get Started',
      href: '/contact?plan=ai-task-manager-starter'
    },
    {
      name: 'Professional',
      price: '$99/month',
      description: 'Ideal for growing teams and businesses',
      features: [
        'Up to 25 team members',
        'Advanced AI features',
        'Custom workflows',
        'Advanced analytics',
        'Priority support',
        'API access',
        'Integrations'
      ],
      popular: true,
      cta: 'Most Popular',
      href: '/contact?plan=ai-task-manager-professional'
    },
    {
      name: 'Enterprise',
      price: '$199/month',
      description: 'For large organizations with complex needs',
      features: [
        'Unlimited team members',
        'Full AI suite access',
        'Custom AI training',
        'White-label options',
        'Dedicated support',
        'Advanced security',
        'Custom integrations'
      ],
      popular: false,
      cta: 'Contact Sales',
      href: '/contact?plan=ai-task-manager-enterprise'
    }
  ]

  const benefits = [
    { metric: '60%', label: 'Productivity Increase', icon: TrendingUp },
    { metric: '85%', label: 'Task Completion Rate', icon: CheckCircle },
    { metric: '40%', label: 'Time Saved Weekly', icon: Clock },
    { metric: '95%', label: 'User Satisfaction', icon: Users }
  ]

  return (
    <>
      <SEOOptimizer
        title="AI Task Manager Pro - Intelligent Task Management | Zion Tech Group"
        description="Boost productivity by 60% with AI-powered task management. Smart prioritization, automated scheduling, and team collaboration tools. Start your free trial today."
        keywords={['AI task manager', 'task management', 'productivity tools', 'team collaboration', 'smart scheduling', 'task prioritization']}
        canonicalUrl="https://ziontechgroup.com/ai-task-manager"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg matrix-rain particle-field">
        <Navigation />
        
        <main className="container mx-auto px-4 py-16 pt-24">
          <section className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 cyber-text-3d neon-pulse glitch" data-text="AI Task Manager Pro">
              AI Task Manager Pro
            </h1>
            <p className="text-xl text-cyan-400 mb-8 font-medium">
              Intelligent Task Management with AI-Powered Optimization
            </p>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-8">
              Transform your productivity with AI-powered task management. Smart prioritization, automated scheduling, 
              and intelligent insights help you achieve more in less time.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="cyber-button px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300"
              >
                Start Free Trial
              </a>
              <a
                href="tel:+13024640950"
                className="flex items-center justify-center gap-2 border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                <Phone className="w-5 h-5" />
                Call +1 302 464 0950
              </a>
            </div>
          </section>

          <section className="mb-16">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300">
                  <benefit.icon className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                  <div className="text-3xl font-bold text-white mb-2 neon-text">{benefit.metric}</div>
                  <div className="text-sm text-gray-300">{benefit.label}</div>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-4xl font-bold text-white mb-12 text-center neon-text">Key Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="cyber-card p-6 hover:scale-105 transition-all duration-300">
                  <feature.icon className="w-16 h-16 text-purple-400 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-white mb-3 neon-text">{feature.title}</h3>
                  <p className="text-gray-300 mb-4 text-sm leading-relaxed">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-xs text-gray-300">
                        <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          <section className="text-center">
            <div className="cyber-card p-8 max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-4 neon-text">
                Ready to Boost Your Productivity?
              </h2>
              <p className="text-lg text-gray-300 mb-8">
                Join thousands of users who have transformed their productivity with AI Task Manager Pro. 
                Start your free trial today and see the difference AI can make.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="cyber-button px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300"
                >
                  Start Free Trial
                </a>
                <a
                  href="tel:+13024640950"
                  className="flex items-center justify-center gap-2 border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
                >
                  <Phone className="w-5 h-5" />
                  Call +1 302 464 0950
                </a>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
});

export default AITaskManagerPage;
