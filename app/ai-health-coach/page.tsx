import React from 'react';
import { CheckCircle, ArrowRight, Heart, Activity, Target, Zap, BarChart3, Users, Shield, Globe } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AIHealthCoachPage: React.FC = () => {
  const features = [
    'AI-powered personalized workout plans',
    'Nutrition tracking and meal recommendations',
    'Health goal setting and progress tracking',
    'Wearable device integration (Fitbit, Apple Watch)',
    'Sleep pattern analysis and optimization',
    'Stress management and mindfulness exercises',
    'Injury prevention and recovery guidance',
    'Social features and community challenges',
    'Real-time health monitoring and alerts',
    'Integration with healthcare providers'
  ];

  const healthAreas = [
    {
      name: 'Fitness & Exercise',
      description: 'Personalized workout plans based on your fitness level, goals, and preferences',
      features: ['Custom workout plans', 'Exercise form analysis', 'Progress tracking', 'Injury prevention'],
      icon: <Activity className="w-8 h-8 text-blue-400" />
    },
    {
      name: 'Nutrition & Diet',
      description: 'AI-powered meal planning and nutrition tracking for optimal health',
      features: ['Meal planning', 'Nutrition tracking', 'Recipe suggestions', 'Dietary restrictions'],
      icon: <Heart className="w-8 h-8 text-red-400" />
    },
    {
      name: 'Mental Health',
      description: 'Stress management, mindfulness, and mental wellness support',
      features: ['Stress tracking', 'Meditation guides', 'Mood analysis', 'Sleep optimization'],
      icon: <Target className="w-8 h-8 text-purple-400" />
    },
    {
      name: 'Chronic Disease Management',
      description: 'Specialized support for diabetes, hypertension, and other chronic conditions',
      features: ['Symptom tracking', 'Medication reminders', 'Health monitoring', 'Provider communication'],
      icon: <Shield className="w-8 h-8 text-green-400" />
    }
  ];

  const pricingPlans = [
    {
      name: 'Basic',
      price: '$19',
      period: '/month',
      features: [
        'Basic workout plans',
        'Nutrition tracking',
        'Goal setting',
        'Mobile app access',
        'Email support'
      ],
      popular: false
    },
    {
      name: 'Premium',
      price: '$49',
      period: '/month',
      features: [
        'Personalized workout plans',
        'Advanced nutrition tracking',
        'Wearable device integration',
        'Sleep analysis',
        'Priority support',
        'Health reports',
        'Community access'
      ],
      popular: true
    },
    {
      name: 'Professional',
      price: '$99',
      period: '/month',
      features: [
        'AI-powered personal trainer',
        'Comprehensive health analysis',
        'Healthcare provider integration',
        'Chronic disease management',
        'Dedicated health coach',
        'Family plans',
        '24/7 support'
      ],
      popular: false
    }
  ];

  const stats = [
    { number: '85%', label: 'Goal Achievement Rate' },
    { number: '50,000+', label: 'Active Users' },
    { number: '95%', label: 'User Satisfaction' },
    { number: '24/7', label: 'AI Support' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Health Coach - Zion Tech Group</title>
        <meta name="description" content="Personalized AI health coach for fitness, nutrition, and wellness. Get customized workout plans, nutrition advice, and health monitoring powered by artificial intelligence." />
        <meta name="keywords" content="AI health coach, fitness AI, health tracking, personalized nutrition, wellness app, health technology" />
      </Helmet>
      
      <Navigation />
      
      <main className="pt-20 px-4 py-20">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-red-500 to-pink-600 rounded-full mb-6">
              <Heart className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI Health Coach
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Your personal AI health coach for fitness, nutrition, and wellness. 
              Get personalized workout plans, nutrition advice, and health monitoring powered by advanced artificial intelligence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-red-500 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-red-600 hover:to-pink-700 transition-all duration-300 flex items-center justify-center"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link 
                to="/micro-saas-services" 
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                View All Micro SAAS
              </Link>
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-300 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Features Section */}
          <div className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">Comprehensive Health Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
                  <div className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-400 mr-3 flex-shrink-0 mt-1" />
                    <span className="text-gray-300">{feature}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Health Areas */}
          <div className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">Health & Wellness Areas</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {healthAreas.map((area, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <div className="mr-4">{area.icon}</div>
                    <h3 className="text-xl font-semibold text-white">{area.name}</h3>
                  </div>
                  <p className="text-gray-300 mb-4">{area.description}</p>
                  <ul className="space-y-2">
                    {area.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* How It Works */}
          <div className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">How It Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">1. Set Your Goals</h3>
                <p className="text-gray-300">Define your health and fitness goals, preferences, and any medical conditions or restrictions.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">2. AI Creates Your Plan</h3>
                <p className="text-gray-300">Our AI analyzes your data and creates personalized workout and nutrition plans tailored to your needs.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BarChart3 className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">3. Track & Optimize</h3>
                <p className="text-gray-300">Monitor your progress, receive real-time feedback, and get plan adjustments based on your results.</p>
              </div>
            </div>
          </div>

          {/* Pricing Section */}
          <div className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">Pricing Plans</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 relative ${plan.popular ? 'ring-2 ring-purple-500' : ''}`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <h3 className="text-2xl font-bold text-white mb-4">{plan.name}</h3>
                  <div className="text-4xl font-bold text-white mb-6">
                    {plan.price}<span className="text-lg text-gray-400">{plan.period}</span>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link 
                    to="/contact" 
                    className={`w-full px-6 py-3 rounded-lg font-semibold transition-all duration-300 text-center block ${
                      plan.popular 
                        ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700' 
                        : 'bg-gradient-to-r from-red-500 to-pink-600 text-white hover:from-red-600 hover:to-pink-700'
                    }`}
                  >
                    Get Started
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Benefits Section */}
          <div className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">Why Choose Our AI Health Coach?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Activity className="w-8 h-8 text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Personalized Plans</h3>
                <p className="text-gray-300">AI creates customized workout and nutrition plans based on your unique needs and goals.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-green-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Holistic Health</h3>
                <p className="text-gray-300">Comprehensive approach covering fitness, nutrition, mental health, and chronic disease management.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BarChart3 className="w-8 h-8 text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Real-time Monitoring</h3>
                <p className="text-gray-300">Continuous health monitoring with instant feedback and plan adjustments based on your progress.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-pink-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-pink-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Community Support</h3>
                <p className="text-gray-300">Connect with like-minded individuals and participate in health challenges and group activities.</p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-red-600 to-pink-600 rounded-3xl p-12">
              <h2 className="text-4xl font-bold text-white mb-4">Ready to Transform Your Health?</h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Join thousands of users who have achieved their health goals with our AI-powered health coach.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact" 
                  className="bg-white text-red-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Start Free Trial
                </Link>
                <Link 
                  to="/about" 
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default AIHealthCoachPage;