'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Users, 
  Heart, 
  Activity, 
  Target, 
  Smartphone, 
  Globe,
  ArrowRight,
  Star,
  Calendar,
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
  Android
} from 'lucide-react';
import AnimatedBackground from '../components/AnimatedBackground';
import NeonButton from '../components/NeonButton';
import FuturisticCard from '../components/FuturisticCard';

export default function AIHealthTrackerPage() {
  const features = [
    {
      title: 'AI Health Insights',
      description: 'Get personalized health insights and recommendations based on your data patterns',
      icon: <Brain className="w-8 h-8 text-pink-400" />,
      details: ['Pattern recognition', 'Health predictions', 'Risk assessment', 'Personalized tips']
    },
    {
      title: 'Activity Tracking',
      description: 'Comprehensive activity tracking with smart goal setting and progress monitoring',
      icon: <Activity className="w-8 h-8 text-green-400" />,
      details: ['Step counting', 'Calorie tracking', 'Exercise logging', 'Sleep monitoring']
    },
    {
      title: 'Vital Signs Monitoring',
      description: 'Track vital signs and health metrics with AI-powered analysis',
      icon: <Heart className="w-8 h-8 text-red-400" />,
      details: ['Heart rate monitoring', 'Blood pressure tracking', 'Weight management', 'BMI calculation']
    },
    {
      title: 'Wellness Goals',
      description: 'Set and achieve wellness goals with AI-powered coaching and motivation',
      icon: <Target className="w-8 h-8 text-blue-400" />,
      details: ['Goal setting', 'Progress tracking', 'Achievement rewards', 'Habit building']
    },
    {
      title: 'Mobile Integration',
      description: 'Seamless integration with mobile devices and wearable technology',
      icon: <Smartphone className="w-8 h-8 text-cyan-400" />,
      details: ['Wearable sync', 'Mobile notifications', 'Offline tracking', 'Cloud backup']
    },
    {
      title: 'Health Reports',
      description: 'Comprehensive health reports and analytics for better understanding',
      icon: <PieChart className="w-8 h-8 text-purple-400" />,
      details: ['Health analytics', 'Trend analysis', 'Progress reports', 'Export options']
    }
  ];

  const pricingPlans = [
    {
      name: 'Personal',
      price: '$35',
      period: '/month',
      description: 'Perfect for individuals focused on personal health',
      features: [
        'Basic health tracking',
        'AI insights',
        'Mobile app',
        'Goal setting',
        'Email support',
        '5GB storage'
      ],
      popular: false
    },
    {
      name: 'Family',
      price: '$59',
      period: '/month',
      description: 'Ideal for families and health-conscious households',
      features: [
        'Up to 6 family members',
        'Advanced AI features',
        'Family health dashboard',
        'Shared goals',
        'Priority support',
        '50GB storage',
        'Health reports'
      ],
      popular: true
    },
    {
      name: 'Premium',
      price: '$99',
      period: '/month',
      description: 'For health enthusiasts and fitness professionals',
      features: [
        'Unlimited users',
        'Professional analytics',
        'Custom integrations',
        'Advanced coaching',
        'Dedicated support',
        'Unlimited storage',
        'API access'
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: 'Dr. Sarah Johnson',
      company: 'Family Physician',
      content: 'The AI health insights are incredibly accurate. It helps my patients understand their health patterns better.',
      rating: 5,
      avatar: 'SJ'
    },
    {
      name: 'Mike Chen',
      company: 'Fitness Trainer',
      content: 'The activity tracking and goal setting features are outstanding. My clients love the progress visualization.',
      rating: 5,
      avatar: 'MC'
    },
    {
      name: 'Lisa Rodriguez',
      company: 'Health Coach',
      content: 'The wellness coaching features are game-changing. It provides personalized recommendations that actually work.',
      rating: 5,
      avatar: 'LR'
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Health Tracker - Personal Health Management | Zion Tech Group</title>
        <meta name="description" content="Transform your health with AI-powered tracking, insights, and wellness coaching. Start your journey to better health today!" />
        <meta name="keywords" content="health tracking, fitness app, wellness coaching, AI health insights, personal health management" />
      </Helmet>
      
      <div className="min-h-screen relative">
        <AnimatedBackground />
        
        {/* Hero Section */}
        <section className="relative pt-20 px-4 py-12 sm:py-16 lg:py-20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <div className="inline-flex items-center px-4 py-2 bg-pink-500/10 border border-pink-500/20 rounded-full text-pink-400 text-sm font-medium mb-6">
                <Heart className="w-4 h-4 mr-2" />
                AI-Powered Health
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
                AI Health Tracker
              </h1>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-6 sm:mb-8 px-4">
                Transform your health journey with AI-powered insights, comprehensive tracking, 
                and personalized wellness coaching. Achieve your health goals faster and smarter.
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
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-pink-400 mb-1 sm:mb-2">85%</div>
                <div className="text-gray-300 text-xs sm:text-sm">Goal Achievement</div>
              </div>
              <div className="text-center px-2">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-green-400 mb-1 sm:mb-2">2.5hrs</div>
                <div className="text-gray-300 text-xs sm:text-sm">Exercise/Week</div>
              </div>
              <div className="text-center px-2">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-cyan-400 mb-1 sm:mb-2">92%</div>
                <div className="text-gray-300 text-xs sm:text-sm">User Satisfaction</div>
              </div>
              <div className="text-center px-2">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-purple-400 mb-1 sm:mb-2">50k+</div>
                <div className="text-gray-300 text-xs sm:text-sm">Health Goals Achieved</div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-12 sm:py-16 lg:py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 px-4">Comprehensive Health Features</h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto px-4">
                Everything you need to track, understand, and improve your health
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
                Choose the health plan that fits your lifestyle
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`relative bg-white/10 backdrop-blur-lg rounded-2xl p-6 sm:p-8 border ${
                  plan.popular ? 'border-pink-400/50 bg-pink-500/5' : 'border-white/20'
                } hover:bg-white/15 transition-all duration-300`}>
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-medium">
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
                Join thousands of users already improving their health
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
                    <div className="w-10 h-10 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold text-sm mr-3">
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
              <div className="bg-gradient-to-r from-pink-600 to-purple-600 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 px-4">Ready to Transform Your Health?</h2>
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