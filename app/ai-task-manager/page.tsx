import React from 'react';
import { CheckCircle, ArrowRight, CheckSquare, Zap, BarChart3, Shield, Globe, DollarSign, Star, Clock, TrendingUp, Users, Settings, Smartphone, Calendar } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

export default function AITaskManagerPage() {
  const features = [
    'AI-Powered Task Prioritization',
    'Smart Scheduling',
    'Team Collaboration',
    'Progress Tracking',
    'Automated Reminders',
    'Time Tracking',
    'Project Templates',
    'Mobile App Available'
  ];

  const pricingPlans = [
    {
      name: 'Personal',
      price: '$12',
      period: '/month',
      description: 'Perfect for individuals',
      features: [
        'Up to 10 projects',
        'Basic AI features',
        'Task automation',
        'Mobile app access',
        'Email support'
      ],
      popular: false
    },
    {
      name: 'Team',
      price: '$25',
      period: '/month',
      description: 'Ideal for small teams',
      features: [
        'Up to 50 projects',
        'Advanced AI features',
        'Team collaboration',
        'Priority support',
        'Time tracking',
        'Custom workflows'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$60',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Unlimited projects',
        'Full AI suite',
        'Advanced analytics',
        'API integration',
        'Custom integrations',
        'Dedicated support'
      ],
      popular: false
    }
  ];

  const capabilities = [
    {
      icon: <Zap className="w-8 h-8 text-blue-500" />,
      title: 'AI Task Prioritization',
      description: 'Intelligent algorithms automatically prioritize tasks based on deadlines, importance, and dependencies'
    },
    {
      icon: <Calendar className="w-8 h-8 text-green-500" />,
      title: 'Smart Scheduling',
      description: 'AI optimizes your schedule by considering your productivity patterns and available time slots'
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-purple-500" />,
      title: 'Progress Analytics',
      description: 'Get detailed insights into your productivity with AI-powered analytics and reporting'
    },
    {
      icon: <Users className="w-8 h-8 text-orange-500" />,
      title: 'Team Collaboration',
      description: 'Seamless team coordination with AI-powered task assignment and workload balancing'
    }
  ];

  const productivityFeatures = [
    'Smart Notifications',
    'Deadline Alerts',
    'Progress Tracking',
    'Time Estimation',
    'Workload Balancing',
    'Automated Reports'
  ];

  const testimonials = [
    {
      name: 'Alex Thompson',
      company: 'Project Manager',
      content: 'The AI prioritization feature is game-changing. I\'m 40% more productive now.',
      rating: 5
    },
    {
      name: 'Sarah Kim',
      company: 'Freelance Designer',
      content: 'Smart scheduling helped me balance multiple clients perfectly. Love the automation!',
      rating: 5
    },
    {
      name: 'Mike Johnson',
      company: 'Startup Founder',
      content: 'Team collaboration features are incredible. Our project delivery time improved by 50%.',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Task Manager - Zion Tech Group</title>
        <meta name="description" content="Intelligent AI-powered task management with smart prioritization, automated scheduling, and team collaboration. Boost your productivity with cutting-edge technology." />
        <meta name="keywords" content="task manager, AI productivity, project management, team collaboration, smart scheduling" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            AI Task Manager
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Boost your productivity with our AI-powered task manager. 
            Smart prioritization, automated scheduling, and seamless team collaboration.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 flex items-center justify-center"
            >
              Start Free Trial
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link
              to="/micro-saas-services"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
            >
              View All Micro SaaS
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Smart Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              AI-powered productivity tools that work for you
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 border border-white/20 text-center">
                <CheckCircle className="w-8 h-8 text-green-500 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">{feature}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Key Capabilities
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Everything you need for intelligent task management
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {capabilities.map((capability, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full mb-4">
                  {capability.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{capability.title}</h3>
                <p className="text-gray-300">{capability.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Productivity Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Productivity Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Advanced tools to maximize your efficiency
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {productivityFeatures.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 border border-white/20 text-center">
                <CheckSquare className="w-8 h-8 text-green-500 mx-auto mb-3" />
                <h3 className="text-sm font-semibold text-white">{feature}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Pricing Plans
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the perfect plan for your productivity needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`bg-white/10 backdrop-blur-sm rounded-xl p-8 hover:bg-white/20 transition-all duration-300 border ${plan.popular ? 'border-purple-500' : 'border-white/20'} relative`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white text-sm px-4 py-1 rounded-full">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-6">{plan.description}</p>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-300">{plan.period}</span>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link 
                    to="/contact"
                    className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center ${
                      plan.popular 
                        ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700' 
                        : 'border-2 border-white text-white hover:bg-white/10'
                    }`}
                  >
                    Get Started
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              What Our Users Say
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Real feedback from real users
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                <div>
                  <p className="font-semibold text-white">{testimonial.name}</p>
                  <p className="text-gray-400 text-sm">{testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to Boost Your Productivity?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of users already maximizing their productivity with our AI-powered task manager.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 flex items-center justify-center"
            >
              Start Your Free Trial
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link 
              to="/micro-saas-services" 
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
            >
              Explore All Micro SaaS
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}