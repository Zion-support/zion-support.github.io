import React from 'react'
import { Helmet } from 'react-helmet-async'
import Layout from '../layout'
import { Link } from 'react-router-dom'
import { ArrowRight, Heart, Activity, Smartphone, Shield, CheckCircle, Star, Zap, TrendingUp, Globe } from 'lucide-react'

const AIHealthTrackerPage: React.FC = () => {
  const features = [
    {
      icon: <Heart className="w-6 h-6 text-red-400" />,
      title: "Health Monitoring",
      description: "AI-powered health tracking with vital signs monitoring and trend analysis"
    },
    {
      icon: <Activity className="w-6 h-6 text-green-400" />,
      title: "Fitness Tracking",
      description: "Comprehensive fitness tracking with personalized workout recommendations"
    },
    {
      icon: <Smartphone className="w-6 h-6 text-blue-400" />,
      title: "Mobile Integration",
      description: "Seamless integration with wearables and health apps for complete data sync"
    },
    {
      icon: <Shield className="w-6 h-6 text-purple-400" />,
      title: "Privacy First",
      description: "HIPAA-compliant data storage with end-to-end encryption for your health data"
    }
  ]

  const pricingPlans = [
    {
      name: "Basic",
      price: "$9.99",
      period: "/month",
      features: [
        "Basic health tracking",
        "Activity monitoring",
        "Simple reports",
        "Mobile app access",
        "Email support"
      ],
      popular: false
    },
    {
      name: "Premium",
      price: "$19.99",
      period: "/month",
      features: [
        "Advanced AI insights",
        "Personalized recommendations",
        "Doctor integration",
        "Advanced analytics",
        "Priority support",
        "Wearable sync"
      ],
      popular: true
    },
    {
      name: "Family",
      price: "$39.99",
      period: "/month",
      features: [
        "Up to 6 family members",
        "Everything in Premium",
        "Family health dashboard",
        "Emergency alerts",
        "Dedicated support",
        "Custom health plans"
      ],
      popular: false
    }
  ]

  return (
    <Layout
      title="AI Health Tracker - Zion Tech Group"
      description="Comprehensive health and fitness tracking with AI-powered insights, personalized recommendations, and HIPAA-compliant data protection."
      keywords="AI health tracker, fitness tracking, health monitoring, wellness app, health analytics, personal health"
    >
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI Health Tracker
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Take control of your health with AI-powered tracking, personalized insights, and comprehensive 
              wellness monitoring. Achieve your health goals with intelligent recommendations.
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
                to="/demo"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                Watch Demo
              </Link>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="text-3xl font-bold text-red-400 mb-2">500K+</div>
              <div className="text-gray-300">Users</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">2M+</div>
              <div className="text-gray-300">Health Records</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400 mb-2">95%</div>
              <div className="text-gray-300">User Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">24/7</div>
              <div className="text-gray-300">Monitoring</div>
            </div>
          </div>

          {/* Features */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white text-center mb-12">Comprehensive Health Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
                  <div className="mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Health Categories */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white text-center mb-12">Track Everything That Matters</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white/5 rounded-xl p-8">
                <h3 className="text-2xl font-semibold text-white mb-4">Vital Signs</h3>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Heart rate monitoring
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Blood pressure tracking
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Sleep quality analysis
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Stress level monitoring
                  </li>
                </ul>
              </div>
              <div className="bg-white/5 rounded-xl p-8">
                <h3 className="text-2xl font-semibold text-white mb-4">Fitness & Activity</h3>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Step counting
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Calorie tracking
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Workout logging
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Goal setting
                  </li>
                </ul>
              </div>
              <div className="bg-white/5 rounded-xl p-8">
                <h3 className="text-2xl font-semibold text-white mb-4">Nutrition & Wellness</h3>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Meal tracking
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Water intake monitoring
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Supplement tracking
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Mood tracking
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Pricing */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white text-center mb-12">Choose Your Health Plan</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`bg-white/10 backdrop-blur-sm rounded-xl p-8 border ${plan.popular ? 'border-red-500' : 'border-white/20'} relative`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-red-500 to-pink-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-red-400">{plan.price}</span>
                      <span className="text-gray-300 ml-1">{plan.period}</span>
                    </div>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className={`w-full py-3 px-6 rounded-lg font-semibold text-center transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-red-500 to-pink-600 text-white hover:from-red-600 hover:to-pink-700'
                        : 'border-2 border-white text-white hover:bg-white/10'
                    }`}
                  >
                    Get Started
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Benefits */}
          <div className="bg-white/5 rounded-2xl p-8 mb-16">
            <h2 className="text-3xl font-bold text-white text-center mb-12">Why Choose Our AI Health Tracker?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <Zap className="w-12 h-12 text-red-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">AI-Powered Insights</h3>
                <p className="text-gray-300">Get personalized health recommendations and insights powered by advanced AI algorithms.</p>
              </div>
              <div className="text-center">
                <TrendingUp className="w-12 h-12 text-green-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Proven Results</h3>
                <p className="text-gray-300">Users see 40% improvement in health metrics within the first 3 months of use.</p>
              </div>
              <div className="text-center">
                <Globe className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Comprehensive Tracking</h3>
                <p className="text-gray-300">Track all aspects of your health in one place with seamless integration across devices.</p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Ready to Transform Your Health?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join over 500,000 users who have improved their health and wellness with our AI-powered tracking platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-red-500 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-red-600 hover:to-pink-700 transition-all duration-300 flex items-center justify-center"
              >
                Start Your Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/pricing"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                View All Plans
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default AIHealthTrackerPage