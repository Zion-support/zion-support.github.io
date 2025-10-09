'use client';

import React from 'react';
import Link from 'next/link';
import { 
  Calendar, 
  Users, 
  BarChart3, 
  Zap, 
  CheckCircle, 
  Clock, 
  Target,
  Brain,
  ArrowRight,
  Star,
  Shield,
  TrendingUp,
  Smartphone,
  Globe,
  Database,
  Settings,
  FileText,
  MessageSquare,
  PieChart,
  Activity
} from 'lucide-react';

export default function AIProjectManagementPage() {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Task Assignment',
      description: 'Automatically assign tasks based on team member skills, workload, and availability using advanced AI algorithms.',
      color: 'text-purple-400'
    },
    {
      icon: BarChart3,
      title: 'Predictive Analytics',
      description: 'Forecast project completion dates, identify potential bottlenecks, and suggest optimizations before issues arise.',
      color: 'text-blue-400'
    },
    {
      icon: Users,
      title: 'Smart Team Collaboration',
      description: 'AI-enhanced communication tools that facilitate seamless collaboration and reduce miscommunication.',
      color: 'text-green-400'
    },
    {
      icon: Target,
      title: 'Goal Tracking & Optimization',
      description: 'Intelligent goal setting and tracking with AI recommendations for achieving objectives faster.',
      color: 'text-orange-400'
    },
    {
      icon: Activity,
      title: 'Real-time Performance Monitoring',
      description: 'Continuous monitoring of team performance with AI insights and automated reporting.',
      color: 'text-cyan-400'
    },
    {
      icon: MessageSquare,
      title: 'AI Meeting Assistant',
      description: 'Automated meeting notes, action item extraction, and follow-up reminders powered by AI.',
      color: 'text-pink-400'
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$29',
      period: '/month',
      description: 'Perfect for small teams',
      features: [
        'Up to 5 team members',
        'Basic AI task assignment',
        'Project templates',
        'Basic analytics',
        'Email support',
        '5GB storage'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$79',
      period: '/month',
      description: 'Most popular for growing teams',
      features: [
        'Up to 25 team members',
        'Advanced AI features',
        'Predictive analytics',
        'Custom integrations',
        'Priority support',
        '50GB storage',
        'Advanced reporting',
        'API access'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$199',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Unlimited team members',
        'Full AI suite',
        'Custom AI training',
        'White-label options',
        '24/7 dedicated support',
        'Unlimited storage',
        'Advanced security',
        'Custom integrations',
        'On-premise deployment'
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Project Manager',
      company: 'TechCorp Inc.',
      content: 'AI Project Management has revolutionized how we handle complex projects. The AI predictions are incredibly accurate.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      role: 'CTO',
      company: 'StartupXYZ',
      content: 'The automated task assignment feature has saved us 40% of our planning time. Highly recommended!',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      role: 'Team Lead',
      company: 'Digital Agency Pro',
      content: 'The predictive analytics helped us identify bottlenecks before they became problems. Game changer!',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg">
      {/* Hero Section */}
      <section className="relative py-20 px-4 text-center overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="inline-flex items-center space-x-2 bg-purple-500/20 text-purple-300 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Brain className="w-4 h-4" />
            <span>AI-Powered Project Management</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 neon-text cyber-text">
            AI Project Management
          </h1>
          
          <p className="text-xl md:text-2xl text-cyan-400 mb-8 font-medium cyber-glow">
            Transform Your Team's Productivity with AI
          </p>
          
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">
            The most advanced AI-powered project management platform that learns from your team's patterns, 
            predicts project outcomes, and automates complex workflows to maximize efficiency and success.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <a
              href="tel:+13024640950"
              className="cyber-button w-full sm:w-auto text-center"
            >
              Get Started - (302) 464-0950
            </a>
            <Link
              href="/contact"
              className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300 w-full sm:w-auto text-center"
            >
              Schedule Demo
            </Link>
          </div>

          {/* Key Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-400 mb-2">95%</div>
              <div className="text-gray-300 text-sm">Accuracy Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-400 mb-2">40%</div>
              <div className="text-gray-300 text-sm">Time Saved</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-400 mb-2">500+</div>
              <div className="text-gray-300 text-sm">Happy Teams</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-400 mb-2">24/7</div>
              <div className="text-gray-300 text-sm">AI Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4 neon-text">
            Powerful AI Features
          </h2>
          <p className="text-lg text-gray-300 text-center mb-16 max-w-3xl mx-auto">
            Harness the power of artificial intelligence to transform your project management experience
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="cyber-card hologram-card p-6 hover:scale-105 transition-all duration-300">
                <div className={`text-4xl mb-4 ${feature.color}`}>
                  <feature.icon className="w-10 h-10" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 bg-gray-900/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4 neon-text">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg text-gray-300 text-center mb-16 max-w-3xl mx-auto">
            Choose the plan that fits your team size and needs. All plans include our core AI features.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`cyber-card hologram-card p-8 relative ${plan.popular ? 'ring-2 ring-cyan-400 scale-105' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-cyan-400 text-gray-900 px-4 py-1 rounded-full text-sm font-bold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-400 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-cyan-400">{plan.price}</span>
                    <span className="text-gray-400 ml-1">{plan.period}</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="tel:+13024640950"
                  className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-all duration-200 ${
                    plan.popular
                      ? 'bg-cyan-400 text-gray-900 hover:bg-cyan-300'
                      : 'border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-gray-900'
                  }`}
                >
                  Get Started
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4 neon-text">
            What Our Customers Say
          </h2>
          <p className="text-lg text-gray-300 text-center mb-16 max-w-3xl mx-auto">
            Join hundreds of teams who have transformed their project management with AI
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="cyber-card hologram-card p-6">
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-purple-600/20 to-cyan-600/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 neon-text">
            Ready to Transform Your Project Management?
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            Join thousands of teams already using AI to achieve better project outcomes. 
            Start your free trial today or contact us for a personalized demo.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="tel:+13024640950"
              className="cyber-button w-full sm:w-auto text-center"
            >
              Start Free Trial - (302) 464-0950
            </a>
            <Link
              href="/contact"
              className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300 w-full sm:w-auto text-center"
            >
              Contact Sales
            </Link>
          </div>

          <div className="mt-8 text-sm text-gray-400">
            <p>✓ 14-day free trial • ✓ No credit card required • ✓ Cancel anytime</p>
          </div>
        </div>
      </section>
    </div>
  );
}