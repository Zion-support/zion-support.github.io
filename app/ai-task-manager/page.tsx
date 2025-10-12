'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  CheckCircle, 
  Clock, 
  Users, 
  BarChart3, 
  Zap, 
  Shield, 
  Smartphone, 
  Globe,
  ArrowRight,
  Star,
  Calendar,
  Target,
  TrendingUp,
  Brain,
  Lock,
  Download
} from 'lucide-react';
import AnimatedBackground from '../components/AnimatedBackground';
import NeonButton from '../components/NeonButton';
import FuturisticCard from '../components/FuturisticCard';

export default function AITaskManagerPage() {
  const features = [
    {
      title: 'AI-Powered Prioritization',
      description: 'Smart algorithms automatically prioritize tasks based on deadlines, importance, and dependencies',
      icon: <Brain className="w-8 h-8 text-cyan-400" />,
      details: ['Machine learning prioritization', 'Deadline optimization', 'Dependency mapping', 'Smart suggestions']
    },
    {
      title: 'Team Collaboration',
      description: 'Seamless team collaboration with real-time updates and communication tools',
      icon: <Users className="w-8 h-8 text-green-400" />,
      details: ['Real-time collaboration', 'Team chat integration', 'Assignment tracking', 'Progress sharing']
    },
    {
      title: 'Progress Analytics',
      description: 'Comprehensive analytics and reporting to track productivity and identify bottlenecks',
      icon: <BarChart3 className="w-8 h-8 text-purple-400" />,
      details: ['Productivity metrics', 'Time tracking', 'Performance reports', 'Bottleneck identification']
    },
    {
      title: 'Smart Automation',
      description: 'Automate repetitive tasks and workflows to boost team efficiency',
      icon: <Zap className="w-8 h-8 text-yellow-400" />,
      details: ['Workflow automation', 'Recurring task setup', 'Smart notifications', 'Auto-assignment']
    },
    {
      title: 'Cross-Platform Sync',
      description: 'Access your tasks anywhere with seamless synchronization across all devices',
      icon: <Globe className="w-8 h-8 text-blue-400" />,
      details: ['Multi-device sync', 'Offline access', 'Cloud backup', 'API integration']
    },
    {
      title: 'Enterprise Security',
      description: 'Bank-level security with advanced encryption and compliance features',
      icon: <Shield className="w-8 h-8 text-red-400" />,
      details: ['End-to-end encryption', 'GDPR compliance', 'SSO integration', 'Audit logs']
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$29',
      period: '/month',
      description: 'Perfect for small teams and individuals',
      features: [
        'Up to 5 team members',
        'Unlimited tasks',
        'Basic AI prioritization',
        'Mobile apps',
        'Email support',
        '5GB storage'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$59',
      period: '/month',
      description: 'Ideal for growing businesses',
      features: [
        'Up to 25 team members',
        'Advanced AI features',
        'Team collaboration tools',
        'Analytics dashboard',
        'Priority support',
        '50GB storage',
        'API access'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$99',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Unlimited team members',
        'Full AI suite',
        'Custom integrations',
        'Advanced analytics',
        'Dedicated support',
        'Unlimited storage',
        'White-label options'
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Chen',
      company: 'TechStart Inc.',
      content: 'AI Task Manager transformed our productivity. The AI prioritization alone saved us 10 hours per week.',
      rating: 5,
      avatar: 'SC'
    },
    {
      name: 'Michael Rodriguez',
      company: 'Digital Agency Co.',
      content: 'The team collaboration features are incredible. Our project completion rate increased by 40%.',
      rating: 5,
      avatar: 'MR'
    },
    {
      name: 'Emily Johnson',
      company: 'Consulting Firm',
      content: 'The analytics dashboard gives us insights we never had before. Highly recommended!',
      rating: 5,
      avatar: 'EJ'
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Task Manager Pro - Intelligent Task Management | Zion Tech Group</title>
        <meta name="description" content="Transform your productivity with AI Task Manager Pro. Smart prioritization, team collaboration, and analytics. Start your free trial today!" />
        <meta name="keywords" content="AI task management, productivity tools, team collaboration, project management, AI prioritization" />
      </Helmet>
      
      <div className="min-h-screen relative">
        <AnimatedBackground />
        
        {/* Hero Section */}
        <section className="relative pt-20 px-4 py-12 sm:py-16 lg:py-20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <div className="inline-flex items-center px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-400 text-sm font-medium mb-6">
                <Brain className="w-4 h-4 mr-2" />
                AI-Powered Productivity
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
                AI Task Manager Pro
              </h1>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-6 sm:mb-8 px-4">
                Intelligent task management with AI-powered prioritization, team collaboration, and comprehensive analytics. 
                Boost your productivity by 40% with smart automation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <NeonButton to="/contact" variant="primary" size="lg">
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 ml-2" />
                </NeonButton>
                <NeonButton to="#demo" variant="secondary" size="lg">
                  Watch Demo
                </NeonButton>
              </div>
            </div>

            {/* Key Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-16 lg:mb-20">
              <div className="text-center px-2">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-cyan-400 mb-1 sm:mb-2">40%</div>
                <div className="text-gray-300 text-xs sm:text-sm">Productivity Boost</div>
              </div>
              <div className="text-center px-2">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-green-400 mb-1 sm:mb-2">10hrs</div>
                <div className="text-gray-300 text-xs sm:text-sm">Time Saved/Week</div>
              </div>
              <div className="text-center px-2">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-purple-400 mb-1 sm:mb-2">99.9%</div>
                <div className="text-gray-300 text-xs sm:text-sm">Uptime</div>
              </div>
              <div className="text-center px-2">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-yellow-400 mb-1 sm:mb-2">50k+</div>
                <div className="text-gray-300 text-xs sm:text-sm">Happy Users</div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-12 sm:py-16 lg:py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 px-4">Powerful Features</h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto px-4">
                Everything you need to manage tasks intelligently and boost team productivity
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16 lg:mb-20">
              {features.map((feature, index) => (
                <FuturisticCard
                  key={index}
                  title={feature.title}
                  description={feature.description}
                  icon={feature.icon}
                  link="#"
                  features={feature.details}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-12 sm:py-16 lg:py-20 px-4 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 px-4">Simple Pricing</h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto px-4">
                Choose the plan that fits your team size and needs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`relative bg-white/10 backdrop-blur-lg rounded-2xl p-6 sm:p-8 border ${
                  plan.popular ? 'border-cyan-400/50 bg-cyan-500/5' : 'border-white/20'
                } hover:bg-white/15 transition-all duration-300`}>
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-semibold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 text-sm mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-400 ml-1">{plan.period}</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <NeonButton 
                    to="/contact" 
                    variant={plan.popular ? "primary" : "secondary"} 
                    size="md"
                    className="w-full justify-center"
                  >
                    Get Started
                  </NeonButton>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-12 sm:py-16 lg:py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 px-4">What Our Users Say</h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto px-4">
                Join thousands of teams already boosting their productivity
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 sm:p-8 border border-white/20">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="text-yellow-400">★</span>
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold text-sm mr-3">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <p className="font-semibold text-white">{testimonial.name}</p>
                      <p className="text-gray-400 text-sm">{testimonial.company}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 sm:py-16 lg:py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <div className="bg-gradient-to-r from-cyan-600 to-purple-600 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 px-4">Ready to Boost Your Productivity?</h2>
                <p className="text-lg sm:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
                  Start your free 14-day trial today. No credit card required.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <NeonButton to="/contact" variant="accent" size="lg">
                    Start Free Trial
                  </NeonButton>
                  <NeonButton to="/contact" variant="secondary" size="lg">
                    Contact Sales
                  </NeonButton>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}