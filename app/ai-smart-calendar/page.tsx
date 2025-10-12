'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Calendar, 
  Clock, 
  Users, 
  Target, 
  Smartphone, 
  Globe,
  ArrowRight,
  Star,
  TrendingUp,
  Brain,
  Lock,
  Download,
  PieChart,
  Bell,
  Zap,
  CheckCircle,
  Mail,
  Send,
  Apple,
  Android,
  Settings,
  BarChart3
} from 'lucide-react';
import AnimatedBackground from '../components/AnimatedBackground';
import NeonButton from '../components/NeonButton';
import FuturisticCard from '../components/FuturisticCard';

export default function AISmartCalendarPage() {
  const features = [
    {
      title: 'AI Smart Scheduling',
      description: 'Intelligent scheduling that optimizes your time and prevents conflicts automatically',
      icon: <Brain className="w-8 h-8 text-blue-400" />,
      details: ['Conflict detection', 'Time optimization', 'Smart suggestions', 'Auto-scheduling']
    },
    {
      title: 'Meeting Optimization',
      description: 'Optimize meeting times, durations, and participants for maximum productivity',
      icon: <Users className="w-8 h-8 text-green-400" />,
      details: ['Meeting analytics', 'Time blocking', 'Participant optimization', 'Agenda management']
    },
    {
      title: 'Time Blocking',
      description: 'Advanced time blocking with AI-powered focus time recommendations',
      icon: <Target className="w-8 h-8 text-purple-400" />,
      details: ['Focus time blocks', 'Break optimization', 'Energy management', 'Productivity tracking']
    },
    {
      title: 'Integration Sync',
      description: 'Seamless synchronization with all your favorite tools and platforms',
      icon: <Globe className="w-8 h-8 text-cyan-400" />,
      details: ['Google Calendar', 'Outlook sync', 'Slack integration', 'Zoom meetings']
    },
    {
      title: 'Mobile Experience',
      description: 'Full-featured mobile app with offline access and smart notifications',
      icon: <Smartphone className="w-8 h-8 text-yellow-400" />,
      details: ['Mobile app', 'Offline access', 'Push notifications', 'Quick actions']
    },
    {
      title: 'Analytics Dashboard',
      description: 'Comprehensive analytics to understand your time usage and productivity patterns',
      icon: <BarChart3 className="w-8 h-8 text-red-400" />,
      details: ['Time analytics', 'Productivity insights', 'Meeting reports', 'Trend analysis']
    }
  ];

  const pricingPlans = [
    {
      name: 'Personal',
      price: '$22',
      period: '/month',
      description: 'Perfect for individuals and freelancers',
      features: [
        'Basic AI scheduling',
        'Time blocking',
        'Mobile app',
        'Email integration',
        'Email support',
        '5GB storage'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$45',
      period: '/month',
      description: 'Ideal for professionals and small teams',
      features: [
        'Advanced AI features',
        'Meeting optimization',
        'Team collaboration',
        'Analytics dashboard',
        'Priority support',
        '50GB storage',
        'API access'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$89',
      period: '/month',
      description: 'For large organizations and teams',
      features: [
        'Unlimited users',
        'Custom integrations',
        'Advanced analytics',
        'White-label options',
        'Dedicated support',
        'Unlimited storage',
        'SSO integration'
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: 'David Park',
      company: 'Project Manager',
      content: 'The AI scheduling feature is incredible. It saved me 3 hours per week on calendar management.',
      rating: 5,
      avatar: 'DP'
    },
    {
      name: 'Emma Thompson',
      company: 'Executive Assistant',
      content: 'Meeting optimization has transformed how we schedule. Our meeting efficiency increased by 60%.',
      rating: 5,
      avatar: 'ET'
    },
    {
      name: 'James Wilson',
      company: 'Consultant',
      content: 'The time blocking feature helps me stay focused. My productivity has improved dramatically.',
      rating: 5,
      avatar: 'JW'
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Smart Calendar - Intelligent Scheduling | Zion Tech Group</title>
        <meta name="description" content="Optimize your schedule with AI-powered calendar management, meeting optimization, and time blocking. Boost productivity today!" />
        <meta name="keywords" content="smart calendar, AI scheduling, meeting optimization, time blocking, productivity tools" />
      </Helmet>
      
      <div className="min-h-screen relative">
        <AnimatedBackground />
        
        {/* Hero Section */}
        <section className="relative pt-20 px-4 py-12 sm:py-16 lg:py-20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <div className="inline-flex items-center px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-sm font-medium mb-6">
                <Calendar className="w-4 h-4 mr-2" />
                AI-Powered Scheduling
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
                AI Smart Calendar
              </h1>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-6 sm:mb-8 px-4">
                Optimize your schedule with AI-powered calendar management, intelligent meeting optimization, 
                and advanced time blocking. Maximize your productivity and reclaim your time.
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
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-400 mb-1 sm:mb-2">3hrs</div>
                <div className="text-gray-300 text-xs sm:text-sm">Time Saved/Week</div>
              </div>
              <div className="text-center px-2">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-green-400 mb-1 sm:mb-2">60%</div>
                <div className="text-gray-300 text-xs sm:text-sm">Meeting Efficiency</div>
              </div>
              <div className="text-center px-2">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-purple-400 mb-1 sm:mb-2">95%</div>
                <div className="text-gray-300 text-xs sm:text-sm">Scheduling Accuracy</div>
              </div>
              <div className="text-center px-2">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-cyan-400 mb-1 sm:mb-2">40k+</div>
                <div className="text-gray-300 text-xs sm:text-sm">Meetings Optimized</div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-12 sm:py-16 lg:py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 px-4">Intelligent Features</h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto px-4">
                Everything you need to optimize your schedule and boost productivity
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
                Choose the calendar plan that fits your needs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`relative bg-white/10 backdrop-blur-lg rounded-2xl p-6 sm:p-8 border ${
                  plan.popular ? 'border-blue-400/50 bg-blue-500/5' : 'border-white/20'
                } hover:bg-white/15 transition-all duration-300`}>
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-blue-500 to-cyan-600 text-white px-4 py-1 rounded-full text-sm font-medium">
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
                Join thousands of professionals already optimizing their schedules
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
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-full flex items-center justify-center text-white font-semibold text-sm mr-3">
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
              <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 px-4">Ready to Optimize Your Schedule?</h2>
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