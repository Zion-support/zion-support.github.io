'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { ArrowRight, CheckCircle, Star, Sparkles, Heart, TrendingUp, Target, Users, Shield, Activity, Zap } from 'lucide-react'
import { Link } from 'react-router-dom'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

export default function AIHealthTracker() {
  const features = [
    {
      icon: <Heart className="w-8 h-8 text-red-400" />,
      title: 'Health Data Analysis',
      description: 'AI-powered analysis of your health metrics and patterns',
      benefits: ['Heart rate monitoring', 'Sleep pattern analysis', 'Activity tracking', 'Vital signs monitoring']
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-green-400" />,
      title: 'Predictive Insights',
      description: 'Get personalized health predictions and recommendations',
      benefits: ['Health trend predictions', 'Risk assessments', 'Personalized recommendations', 'Early warning alerts']
    },
    {
      icon: <Target className="w-8 h-8 text-blue-400" />,
      title: 'Goal Tracking',
      description: 'Set and track personalized health and fitness goals',
      benefits: ['Custom goal setting', 'Progress tracking', 'Achievement rewards', 'Milestone celebrations']
    },
    {
      icon: <Activity className="w-8 h-8 text-purple-400" />,
      title: 'Medical Reminders',
      description: 'Smart reminders for medications, appointments, and checkups',
      benefits: ['Medication reminders', 'Appointment scheduling', 'Checkup alerts', 'Prescription tracking']
    }
  ];

  const pricingPlans = [
    {
      name: 'Basic',
      price: '$9',
      period: '/month',
      description: 'Essential health tracking features',
      features: [
        'Basic health metrics',
        'Simple goal tracking',
        'Email support',
        'Basic insights',
        'Mobile app access'
      ],
      popular: false
    },
    {
      name: 'Pro',
      price: '$24',
      period: '/month',
      description: 'Advanced AI-powered health insights',
      features: [
        'Advanced health analysis',
        'Predictive insights',
        'Priority support',
        'Detailed reports',
        'Wearable device sync',
        'Medical reminders',
        'Family sharing'
      ],
      popular: true
    },
    {
      name: 'Family',
      price: '$39',
      period: '/month',
      description: 'Complete health management for families',
      features: [
        'Up to 6 family members',
        'All Pro features',
        'Family health dashboard',
        '24/7 support',
        'Advanced analytics',
        'Health coach access',
        'Custom integrations'
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: 'Dr. Jennifer Martinez',
      role: 'Family Physician',
      company: 'HealthCare Plus',
      content: 'AI Health Tracker has helped my patients stay more engaged with their health. The predictive insights are remarkably accurate.',
      rating: 5
    },
    {
      name: 'Robert Kim',
      role: 'Fitness Enthusiast',
      company: 'Personal User',
      content: 'The goal tracking feature has completely transformed my fitness journey. I\'ve achieved goals I never thought possible.',
      rating: 5
    },
    {
      name: 'Lisa Thompson',
      role: 'Busy Mom',
      company: 'Family User',
      content: 'Managing my family\'s health has never been easier. The medical reminders are a lifesaver.',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-red-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-green-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-40 left-1/2 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      <Helmet>
        <title>AI Health Tracker - Personal Health Monitoring & Insights | Zion Tech Group</title>
        <meta name="description" content="Monitor your health with AI-powered insights, goal tracking, and predictive analytics. Personal health management made simple. Starting at $9/month." />
        <meta name="keywords" content="health tracking, AI health insights, fitness goals, medical reminders, health analytics" />
      </Helmet>
      
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-20 px-4 py-20 sm:py-24 lg:py-32">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-red-500/20 to-green-500/20 border border-red-500/30 mb-6 backdrop-blur-sm">
              <Sparkles className="w-4 h-4 text-red-400 mr-2" />
              <span className="text-red-300 text-sm font-medium">AI-Powered Health Management</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              AI Health
              <br />
              <span className="bg-gradient-to-r from-red-400 via-green-400 to-blue-400 bg-clip-text text-transparent">
                Tracker
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
              Take control of your health with AI-powered insights, personalized recommendations, and smart tracking. 
              Monitor your wellness journey with advanced analytics and predictive health insights.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="group bg-gradient-to-r from-red-600 to-green-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-red-700 hover:to-green-700 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-red-500/25">
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="border-2 border-white/30 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-all duration-300 backdrop-blur-sm">
                View Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Comprehensive Health Management
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Everything you need to monitor, analyze, and improve your health and wellness.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="group bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-red-500/20 to-green-500/20 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-red-300 transition-colors">{feature.title}</h3>
                <p className="text-gray-300 mb-6">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Choose Your Health Plan
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Select the plan that best fits your health tracking needs and goals.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`relative bg-white/10 backdrop-blur-lg rounded-2xl p-8 border transition-all duration-300 hover:scale-105 ${
                plan.popular 
                  ? 'border-red-500/50 ring-2 ring-red-500/20' 
                  : 'border-white/20 hover:border-white/30'
              }`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-red-600 to-green-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </div>
                  </div>
                )}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400 ml-1">{plan.period}</span>
                  </div>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-red-600 to-green-600 text-white hover:from-red-700 hover:to-green-700'
                    : 'bg-white/10 text-white border border-white/20 hover:bg-white/20'
                }`}>
                  {plan.popular ? 'Get Started' : 'Choose Plan'}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Trusted by Health Professionals
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Join thousands of users who have improved their health with AI-powered insights.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
                <div className="flex items-center mb-4">
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
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="bg-gradient-to-r from-red-600 to-green-600 rounded-3xl p-8 sm:p-12 lg:p-16 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-red-600/50 to-green-600/50"></div>
              <div className="relative z-10">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
                  Start Your Health Journey Today
                </h2>
                <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-3xl mx-auto">
                  Take the first step towards better health with AI-powered insights and personalized recommendations. 
                  Your wellness journey starts here.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="bg-white text-red-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors shadow-lg">
                    Start Free Trial
                  </button>
                  <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-colors">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  )
}
