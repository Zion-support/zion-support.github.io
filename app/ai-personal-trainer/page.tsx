'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Dumbbell, Heart, Target, Zap, Shield, Globe, CheckCircle, ArrowRight, Star, Users, Clock, DollarSign, Database, PieChart, LineChart, TrendingUp, Activity, Award } from 'lucide-react';

const AIPersonalTrainerPage: React.FC = () => {
  const features = [
    'Personalized Workout Plans',
    'Real-time Form Analysis',
    'Nutrition Tracking',
    'Progress Monitoring',
    'Virtual Coaching',
    'Injury Prevention',
    'Goal Setting & Tracking',
    'Social Challenges'
  ];

  const pricingPlans = [
    {
      name: 'Basic',
      price: '$19',
      period: '/month',
      description: 'Perfect for beginners',
      features: [
        'Basic workout plans',
        'Progress tracking',
        'Nutrition guidance',
        'Email support',
        'Mobile app access'
      ],
      popular: false
    },
    {
      name: 'Pro',
      price: '$39',
      period: '/month',
      description: 'Ideal for fitness enthusiasts',
      features: [
        'AI-powered personalization',
        'Real-time form analysis',
        'Advanced nutrition tracking',
        'Virtual coaching sessions',
        'Priority support',
        'Wearable device integration'
      ],
      popular: true
    },
    {
      name: 'Elite',
      price: '$79',
      period: '/month',
      description: 'For serious athletes',
      features: [
        'Custom AI training programs',
        '1-on-1 virtual coaching',
        'Advanced analytics',
        'Injury prevention AI',
        'Dedicated support',
        'White-label solution'
      ],
      popular: false
    }
  ];

  const useCases = [
    {
      icon: Dumbbell,
      title: 'Strength Training',
      description: 'AI-powered strength training programs that adapt to your progress and optimize your workouts for maximum results.'
    },
    {
      icon: Heart,
      title: 'Cardio Optimization',
      description: 'Intelligent cardio programs that adjust intensity based on your heart rate, fitness level, and goals.'
    },
    {
      icon: Target,
      title: 'Weight Loss',
      description: 'Personalized weight loss programs combining exercise, nutrition, and lifestyle changes for sustainable results.'
    },
    {
      icon: Award,
      title: 'Muscle Building',
      description: 'Advanced muscle building programs with progressive overload and recovery optimization for maximum gains.'
    }
  ];

  const benefits = [
    {
      icon: TrendingUp,
      title: 'Better Results',
      description: 'Users see 3x faster progress with AI-optimized training programs.',
      value: '3x'
    },
    {
      icon: Clock,
      title: 'Time Efficient',
      description: 'Optimized workouts that deliver maximum results in minimum time.',
      value: '50%'
    },
    {
      icon: Shield,
      title: 'Injury Prevention',
      description: 'AI-powered form analysis reduces injury risk by 80%.',
      value: '80%'
    },
    {
      icon: Users,
      title: 'Personalization',
      description: '100% personalized programs based on your unique body and goals.',
      value: '100%'
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Personal Trainer - Zion Tech Group | Intelligent Fitness Solutions</title>
        <meta name="description" content="Revolutionary AI personal trainer with personalized workout plans, real-time form analysis, and virtual coaching. Achieve your fitness goals 3x faster with intelligent training." />
        <meta name="keywords" content="AI personal trainer, fitness AI, workout optimization, virtual coaching, fitness technology, Zion Tech Group" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-cyan-500/10 text-cyan-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Dumbbell className="w-4 h-4" />
              <span>AI Fitness Technology</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI Personal Trainer
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Your personal AI fitness coach that creates personalized workout plans, analyzes your form in real-time, 
              and adapts to your progress. Achieve your fitness goals 3x faster with intelligent training.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Start Free Trial
              </button>
              <button className="border border-white/20 text-white font-semibold py-4 px-8 rounded-lg hover:bg-white/10 transition-all duration-300">
                View Demo
              </button>
            </div>
          </div>
        </section>

        {/* Key Features */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Intelligent Fitness Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our AI personal trainer combines advanced machine learning with fitness expertise to deliver personalized training experiences.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 group">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Activity className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{feature}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-20 px-4 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Personalized Training for Every Goal
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Whether you want to build muscle, lose weight, or improve endurance, our AI adapts to your specific needs.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {useCases.map((useCase, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 group">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <useCase.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{useCase.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{useCase.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Proven Results
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our AI personal trainer delivers measurable improvements in fitness outcomes and user satisfaction.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center hover:bg-white/20 transition-all duration-300 group">
                  <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <benefit.icon className="w-10 h-10 text-white" />
                  </div>
                  <div className="text-4xl font-bold text-cyan-400 mb-2">{benefit.value}</div>
                  <h3 className="text-xl font-bold text-white mb-4">{benefit.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="py-20 px-4 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Choose Your Fitness Plan
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Flexible pricing options designed to support your fitness journey at every level.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 group ${plan.popular ? 'ring-2 ring-cyan-500' : ''}`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                      Most Popular
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-cyan-400">{plan.price}</span>
                      <span className="text-gray-300 ml-2">{plan.period}</span>
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
                  
                  <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular 
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white' 
                      : 'border border-white/20 text-white hover:bg-white/10'
                  }`}>
                    Get Started
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Fitness?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Start your free trial today and experience the power of AI-driven personal training.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Start Free Trial
              </button>
              <button className="border border-white/20 text-white font-semibold py-4 px-8 rounded-lg hover:bg-white/10 transition-all duration-300">
                Contact Sales
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AIPersonalTrainerPage;