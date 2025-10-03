import React from 'react';
// Metadata handled by React Helmet
import { 
  Heart, 
  Target, 
  TrendingUp, 
  Users, 
  Award, 
  CheckCircle, 
  Zap, 
  DollarSign,
  Star,
  Smartphone,
  Calendar,
  MessageSquare,
  FileText,
  Shield,
  BarChart3,
  Clock,
  Bell
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'AI Habit Tracking & Wellness Platform | Zion Tech Group - Smart Health Analytics',
  description: 'Transform your wellness journey with AI-powered habit tracking, personalized insights, and behavioral coaching. Achieve your health goals with intelligent analytics.',
  keywords: 'AI habit tracking, wellness platform, health analytics, behavioral coaching, fitness tracking, wellness AI',
};

export default function AIHabitTrackingWellnessPlatform() {
  const features = [
    {
      icon: Heart,
      title: 'Smart Habit Tracking',
      description: 'AI-powered habit formation with personalized recommendations and streak tracking'
    },
    {
      icon: Target,
      title: 'Goal Optimization',
      description: 'Intelligent goal setting based on your lifestyle, preferences, and behavioral patterns'
    },
    {
      icon: TrendingUp,
      title: 'Progress Analytics',
      description: 'Advanced analytics showing correlations between habits and wellness outcomes'
    },
    {
      icon: Users,
      title: 'Social Accountability',
      description: 'Connect with friends, family, or coaches for motivation and support'
    },
    {
      icon: Award,
      title: 'Achievement System',
      description: 'Gamified rewards and milestones to keep you motivated and engaged'
    },
    {
      icon: Bell,
      title: 'Smart Reminders',
      description: 'AI-powered reminder system that adapts to your schedule and preferences'
    }
  ];

  const benefits = [
    '85% increase in habit completion rates',
    '60% improvement in goal achievement',
    '40% reduction in wellness-related stress',
    'Personalized coaching recommendations'
  ];

  const wellnessCategories = [
    {
      title: 'Physical Health',
      description: 'Track exercise, nutrition, sleep, and physical wellness metrics',
      icon: Heart,
      features: ['Workout tracking', 'Nutrition monitoring', 'Sleep analysis', 'Hydration reminders']
    },
    {
      title: 'Mental Wellness',
      description: 'Meditation, mindfulness, stress management, and mental health tracking',
      icon: Brain,
      features: ['Meditation sessions', 'Mood tracking', 'Stress monitoring', 'Mindfulness exercises']
    },
    {
      title: 'Productivity',
      description: 'Focus time, work habits, learning goals, and productivity optimization',
      icon: Target,
      features: ['Focus sessions', 'Learning goals', 'Work habits', 'Time management']
    },
    {
      title: 'Social Connections',
      description: 'Relationship building, social activities, and community engagement',
      icon: Users,
      features: ['Social activities', 'Relationship goals', 'Community challenges', 'Support groups']
    }
  ];

  const pricingTiers = [
    {
      name: 'Personal',
      price: '$9.99',
      period: '/month',
      description: 'Perfect for individual wellness journeys',
      features: [
        'Unlimited habit tracking',
        'Basic analytics dashboard',
        'Smart reminders',
        'Goal setting & tracking',
        'Mobile app access',
        'Email support'
      ],
      popular: false
    },
    {
      name: 'Premium',
      price: '$19.99',
      period: '/month',
      description: 'Advanced features for serious wellness enthusiasts',
      features: [
        'Everything in Personal',
        'Advanced AI insights',
        'Custom coaching recommendations',
        'Social features & challenges',
        'Integration with fitness devices',
        'Priority support'
      ],
      popular: true
    },
    {
      name: 'Family',
      price: '$39.99',
      period: '/month',
      description: 'For families and groups up to 6 members',
      features: [
        'Everything in Premium',
        'Up to 6 family members',
        'Family wellness challenges',
        'Parental controls & insights',
        'Family goal tracking',
        '24/7 phone support'
      ],
      popular: false
    }
  ];

  const successStories = [
    {
      name: 'Sarah Johnson',
      role: 'Marketing Manager',
      story: 'Lost 30 pounds and built consistent exercise habits using the AI coaching features',
      achievement: '6 months streak'
    },
    {
      name: 'Mike Chen',
      role: 'Software Engineer',
      story: 'Improved sleep quality and reduced stress through personalized wellness recommendations',
      achievement: '85% sleep score improvement'
    },
    {
      name: 'The Rodriguez Family',
      role: 'Family of 4',
      story: 'Built healthier family routines and improved overall wellness together',
      achievement: '4x family engagement'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              AI Habit Tracking & Wellness Platform
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-green-100 max-w-4xl mx-auto">
              Transform your wellness journey with AI-powered habit tracking, personalized insights, 
              and intelligent behavioral coaching
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+13024640950" 
                className="bg-white text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-green-50 transition-colors"
              >
                Call +1 302 464 0950
              </a>
              <a 
                href="mailto:kleber@ziontechgroup.com" 
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors"
              >
                Start Free Trial
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              AI-Powered Wellness Features
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to build lasting healthy habits and achieve your wellness goals
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="bg-green-100 p-3 rounded-lg">
                    <feature.icon className="h-6 w-6 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 ml-4">{feature.title}</h3>
                </div>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Wellness Categories */}
      <div className="py-20 bg-gradient-to-r from-green-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Wellness Tracking
            </h2>
            <p className="text-xl text-gray-600">
              Cover all aspects of your wellness journey with specialized tracking categories
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {wellnessCategories.map((category, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
                <div className="flex items-center mb-6">
                  <div className="bg-blue-100 p-4 rounded-lg">
                    <category.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-2xl font-semibold text-gray-900">{category.title}</h3>
                    <p className="text-gray-600">{category.description}</p>
                  </div>
                </div>
                <ul className="space-y-2">
                  {category.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Proven Results & Benefits
            </h2>
            <p className="text-xl text-gray-600">
              Join thousands of users who have transformed their wellness journey
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                  <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="h-8 w-8 text-green-600" />
                  </div>
                  <p className="text-lg font-semibold text-gray-900">{benefit}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Success Stories */}
      <div className="py-20 bg-gradient-to-r from-blue-50 to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Success Stories
            </h2>
            <p className="text-xl text-gray-600">
              Real people, real results with our AI wellness platform
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
                <div className="text-center mb-6">
                  <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="h-10 w-10 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">{story.name}</h3>
                  <p className="text-gray-600">{story.role}</p>
                </div>
                <p className="text-gray-700 mb-4 italic">"{story.story}"</p>
                <div className="bg-green-50 p-3 rounded-lg text-center">
                  <span className="text-green-700 font-semibold">{story.achievement}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Pricing Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Simple, Affordable Pricing
            </h2>
            <p className="text-xl text-gray-600">
              Choose the plan that fits your wellness journey
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingTiers.map((tier, index) => (
              <div key={index} className={`relative bg-white rounded-2xl shadow-lg border-2 p-8 ${
                tier.popular ? 'border-green-500 scale-105' : 'border-gray-200'
              }`}>
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-green-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{tier.name}</h3>
                  <p className="text-gray-600 mb-4">{tier.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-gray-900">{tier.price}</span>
                    <span className="text-gray-600 ml-1">{tier.period}</span>
                  </div>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <a 
                  href="tel:+13024640950" 
                  className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-colors ${
                    tier.popular 
                      ? 'bg-green-600 text-white hover:bg-green-700' 
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  }`}
                >
                  Start Free Trial
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Start Your Wellness Transformation Today
          </h2>
          <p className="text-xl mb-8 text-green-100">
            Join thousands of users who have achieved their wellness goals with AI-powered habit tracking
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+13024640950" 
              className="bg-white text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-green-50 transition-colors"
            >
              Call +1 302 464 0950
            </a>
            <a 
              href="mailto:kleber@ziontechgroup.com" 
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors"
            >
              Email kleber@ziontechgroup.com
            </a>
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-green-100 mb-4">Visit our website for more information:</p>
            <a 
              href="https://ziontechgroup.com" 
              className="text-white underline hover:text-green-200 transition-colors"
            >
              https://ziontechgroup.com
            </a>
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-green-100">
              <strong>Address:</strong> 364 E Main St STE 1008, Middletown, DE 19709
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}