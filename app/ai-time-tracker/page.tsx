'use client'
import React, { useState, useEffect, lazy } from 'react'
import { CheckCircle, Phone, Clock, BarChart, Users, Zap, TrendingUp, Brain, Settings, Timer, Target } from 'lucide-react';

const Navigation = lazy(() => import('../components/Navigation'))
const Footer = lazy(() => import('../components/Footer'))
const SEOOptimizer = lazy(() => import('../components/SEOOptimizer'))

const AITimeTrackerPage: React.FC = React.memo((props) => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Time Tracking',
      description: 'Automatic time tracking with intelligent activity recognition',
      benefits: ['95% automation', 'Zero manual entry', 'Accurate tracking', 'Real-time insights']
    },
    {
      icon: BarChart,
      title: 'Productivity Analytics',
      description: 'Advanced analytics to understand your work patterns and optimize productivity',
      benefits: ['Detailed insights', 'Performance trends', 'Time optimization', 'Goal tracking']
    },
    {
      icon: Target,
      title: 'Smart Goal Setting',
      description: 'AI-driven goal setting and progress monitoring',
      benefits: ['Realistic goals', 'Progress tracking', 'Achievement alerts', 'Performance metrics']
    },
    {
      icon: Users,
      title: 'Team Management',
      description: 'Comprehensive team time tracking and management tools',
      benefits: ['Team insights', 'Project tracking', 'Resource allocation', 'Performance reviews']
    }
  ]

  const benefits = [
    { metric: '95%', label: 'Automation Rate', icon: Zap },
    { metric: '40%', label: 'Productivity Increase', icon: TrendingUp },
    { metric: '99%', label: 'Accuracy Rate', icon: CheckCircle },
    { metric: '50+', label: 'Integrations', icon: Settings }
  ]

  return (
    <>
      <SEOOptimizer
        title="AI Time Tracker Pro - Intelligent Time Management | Zion Tech Group"
        description="Boost productivity by 40% with AI-powered time tracking. Automatic tracking, detailed analytics, and team management tools. Start your free trial today."
        keywords={['AI time tracker', 'time tracking', 'productivity tools', 'team management', 'time analytics', 'automatic tracking']}
        canonicalUrl="https://ziontechgroup.com/ai-time-tracker"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg matrix-rain particle-field">
        <Navigation />
        
        <main className="container mx-auto px-4 py-16 pt-24">
          <section className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 cyber-text-3d neon-pulse glitch" data-text="AI Time Tracker Pro">
              AI Time Tracker Pro
            </h1>
            <p className="text-xl text-cyan-400 mb-8 font-medium">
              Intelligent Time Management with AI-Powered Automation
            </p>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-8">
              Transform your time management with AI-powered time tracking. Automatic tracking, detailed analytics, 
              and intelligent insights help you optimize your productivity and achieve your goals.
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
                Ready to Optimize Your Time?
              </h2>
              <p className="text-lg text-gray-300 mb-8">
                Join thousands of users who have transformed their time management with AI Time Tracker Pro. 
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

export default AITimeTrackerPage;
