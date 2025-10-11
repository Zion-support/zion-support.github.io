'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { CheckCircle, ArrowRight, Heart, Activity, Brain, Smartphone, Shield, Users, Zap, Globe } from 'lucide-react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

export default function AIHealthTrackerPage() {
  const features = [
    {
      icon: <Heart className="w-8 h-8 text-red-500" />,
      title: 'AI Health Monitoring',
      description: 'Advanced AI algorithms analyze your health data to provide personalized insights and recommendations.',
      benefits: ['Heart Rate Analysis', 'Sleep Pattern Tracking', 'Activity Monitoring', 'Health Trend Prediction']
    },
    {
      icon: <Brain className="w-8 h-8 text-blue-500" />,
      title: 'Smart Health Insights',
      description: 'Get personalized health recommendations based on your data patterns and medical best practices.',
      benefits: ['Personalized Recommendations', 'Risk Assessment', 'Goal Setting', 'Progress Tracking']
    },
    {
      icon: <Activity className="w-8 h-8 text-green-500" />,
      title: 'Fitness Tracking',
      description: 'Comprehensive fitness monitoring with AI-powered workout suggestions and performance analysis.',
      benefits: ['Workout Recommendations', 'Performance Analysis', 'Recovery Tracking', 'Goal Optimization']
    },
    {
      icon: <Users className="w-8 h-8 text-purple-500" />,
      title: 'Healthcare Integration',
      description: 'Seamlessly connect with healthcare providers and share your health data securely.',
      benefits: ['Doctor Integration', 'Medical Records Sync', 'Appointment Scheduling', 'Prescription Tracking']
    },
    {
      icon: <Shield className="w-8 h-8 text-orange-500" />,
      title: 'Privacy & Security',
      description: 'HIPAA-compliant platform with end-to-end encryption to protect your sensitive health data.',
      benefits: ['HIPAA Compliant', 'End-to-End Encryption', 'Data Anonymization', 'Secure Cloud Storage']
    },
    {
      icon: <Smartphone className="w-8 h-8 text-cyan-500" />,
      title: 'Mobile Health App',
      description: 'Beautiful, intuitive mobile app that makes health tracking effortless and engaging.',
      benefits: ['iOS & Android Apps', 'Offline Sync', 'Wearable Integration', 'Real-time Notifications']
    }
  ]

  const pricingPlans = [
    {
      name: 'Personal',
      price: '$12.99',
      period: '/month',
      description: 'Perfect for individual health tracking',
      features: [
        'Basic health monitoring',
        'AI health insights',
        'Fitness tracking',
        'Mobile app access',
        'Basic reports'
      ],
      popular: false
    },
    {
      name: 'Family',
      price: '$24.99',
      period: '/month',
      description: 'Ideal for families and couples',
      features: [
        'Up to 6 family members',
        'Advanced AI insights',
        'Family health dashboard',
        'Shared goals & challenges',
        'Priority support',
        'Advanced analytics'
      ],
      popular: true
    },
    {
      name: 'Professional',
      price: '$49.99',
      period: '/month',
      description: 'For healthcare professionals and clinics',
      features: [
        'Unlimited patients',
        'Clinical-grade analytics',
        'Healthcare provider integration',
        'Custom reporting',
        'API access',
        '24/7 support',
        'White-label options'
      ],
      popular: false
    }
  ]

  const healthMetrics = [
    {
      metric: 'Heart Rate Variability',
      description: 'Advanced HRV analysis for stress and recovery monitoring',
      icon: <Heart className="w-6 h-6 text-red-500" />
    },
    {
      metric: 'Sleep Quality Score',
      description: 'Comprehensive sleep analysis with improvement suggestions',
      icon: <Activity className="w-6 h-6 text-blue-500" />
    },
    {
      metric: 'Activity Level',
      description: 'Smart activity tracking with personalized recommendations',
      icon: <Zap className="w-6 h-6 text-green-500" />
    },
    {
      metric: 'Nutrition Analysis',
      description: 'AI-powered nutrition tracking and meal planning',
      icon: <Brain className="w-6 h-6 text-purple-500" />
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Health Tracker - Zion Tech Group</title>
        <meta name="description" content="Revolutionary AI-powered health tracking with personalized insights, fitness monitoring, and healthcare integration." />
        <meta name="keywords" content="AI health tracker, fitness tracking, health monitoring, wellness, healthcare" />
      </Helmet>
      
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-red-600/20 via-purple-600/20 to-blue-600/20 animate-pulse"></div>
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-20 left-10 w-72 h-72 bg-red-500/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          </div>
          
          <div className="relative max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-red-600 to-purple-600 rounded-full mb-6">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                AI Health Tracker
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Take control of your health with AI-powered insights, personalized recommendations, 
                and comprehensive health monitoring. Your personal health assistant is here.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-red-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-red-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-xl">
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors backdrop-blur-sm">
                  Watch Demo
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Health Metrics Section */}
        <section className="py-12 sm:py-16 lg:py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">Advanced Health Metrics</h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
                Track and analyze comprehensive health data with AI-powered insights
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-20">
              {healthMetrics.map((metric, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 group hover:scale-105 text-center">
                  <div className="mb-4 group-hover:scale-110 transition-transform duration-300 flex justify-center">{metric.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-purple-300 transition-colors">{metric.metric}</h3>
                  <p className="text-gray-300">{metric.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-12 sm:py-16 lg:py-20 px-4 bg-gradient-to-r from-purple-900/50 to-blue-900/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">Comprehensive Health Features</h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
                Everything you need to monitor and improve your health
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-20">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 group hover:scale-105">
                  <div className="mb-4 group-hover:scale-110 transition-transform duration-300">{feature.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-purple-300 transition-colors">{feature.title}</h3>
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
        <section className="py-12 sm:py-16 lg:py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">Choose Your Health Plan</h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
                Start your health journey today with our flexible pricing plans
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-20">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 group hover:scale-105 relative ${plan.popular ? 'ring-2 ring-purple-500' : ''}`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-red-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-300 ml-1">{plan.period}</span>
                    </div>
                    <p className="text-gray-300 mt-2">{plan.description}</p>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular 
                      ? 'bg-gradient-to-r from-red-600 to-purple-600 text-white hover:from-red-700 hover:to-purple-700' 
                      : 'bg-white/20 text-white hover:bg-white/30'
                  }`}>
                    Get Started
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 sm:py-16 lg:py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <div className="bg-gradient-to-r from-red-600 to-purple-600 rounded-3xl p-12">
                <h2 className="text-4xl font-bold text-white mb-4">Start Your Health Journey Today</h2>
                <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                  Join thousands of users who have transformed their health with AI-powered insights.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="bg-white text-red-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center">
                    Start Free Trial
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </button>
                  <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors">
                    Contact Sales
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  )
}