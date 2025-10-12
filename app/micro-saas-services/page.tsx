import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight, Zap, Brain, Database, Shield, Globe, Code, Smartphone, Cpu, Server, Wifi, DollarSign, Star, Users, Clock } from 'lucide-react';

export default function MicroSaasServices() {
  const microSaasServices = [
    {
      id: 'ai-task-manager',
      name: 'AI Task Manager Pro',
      description: 'Intelligent task management with AI-powered prioritization, automated scheduling, and smart notifications.',
      icon: <Brain className="w-8 h-8 text-blue-500" />,
      price: '$29/month',
      features: ['AI Priority Scoring', 'Smart Scheduling', 'Team Collaboration', 'Progress Analytics', 'Mobile App'],
      category: 'Productivity',
      rating: 4.9,
      users: '2.5K+',
      link: '/ai-task-manager'
    },
    {
      id: 'ai-expense-tracker',
      name: 'AI Expense Tracker',
      description: 'Automated expense tracking with receipt scanning, categorization, and financial insights.',
      icon: <Database className="w-8 h-8 text-green-500" />,
      price: '$19/month',
      features: ['Receipt Scanning', 'Auto Categorization', 'Budget Alerts', 'Tax Reports', 'Multi-Currency'],
      category: 'Finance',
      rating: 4.8,
      users: '1.8K+',
      link: '/ai-expense-tracker'
    },
    {
      id: 'ai-password-manager',
      name: 'AI Password Manager',
      description: 'Advanced password management with AI-powered security analysis and breach monitoring.',
      icon: <Shield className="w-8 h-8 text-red-500" />,
      price: '$15/month',
      features: ['AI Security Analysis', 'Breach Monitoring', 'Password Generator', '2FA Integration', 'Team Sharing'],
      category: 'Security',
      rating: 4.9,
      users: '3.2K+',
      link: '/ai-password-manager'
    },
    {
      id: 'ai-invoice-generator',
      name: 'AI Invoice Generator',
      description: 'Automated invoice creation with AI-powered templates, payment tracking, and client management.',
      icon: <Code className="w-8 h-8 text-purple-500" />,
      price: '$25/month',
      features: ['AI Templates', 'Auto Calculations', 'Payment Tracking', 'Client Portal', 'Tax Integration'],
      category: 'Business',
      rating: 4.7,
      users: '1.5K+',
      link: '/ai-invoice-generator'
    },
    {
      id: 'ai-health-tracker',
      name: 'AI Health Tracker',
      description: 'Personal health monitoring with AI insights, symptom tracking, and wellness recommendations.',
      icon: <Smartphone className="w-8 h-8 text-pink-500" />,
      price: '$22/month',
      features: ['Symptom Tracking', 'AI Health Insights', 'Medication Reminders', 'Doctor Integration', 'Privacy Focused'],
      category: 'Health',
      rating: 4.8,
      users: '4.1K+',
      link: '/ai-health-tracker'
    },
    {
      id: 'ai-smart-calendar',
      name: 'AI Smart Calendar',
      description: 'Intelligent calendar management with AI scheduling, meeting optimization, and time blocking.',
      icon: <Globe className="w-8 h-8 text-indigo-500" />,
      price: '$18/month',
      features: ['AI Scheduling', 'Meeting Optimization', 'Time Blocking', 'Team Coordination', 'Smart Reminders'],
      category: 'Productivity',
      rating: 4.6,
      users: '2.8K+',
      link: '/ai-smart-calendar'
    },
    {
      id: 'ai-climate-solutions',
      name: 'AI Climate Solutions Pro',
      description: 'Environmental impact tracking with AI-powered sustainability recommendations and carbon footprint analysis.',
      icon: <Globe className="w-8 h-8 text-emerald-500" />,
      price: '$35/month',
      features: ['Carbon Tracking', 'Sustainability Tips', 'Impact Analytics', 'Goal Setting', 'Community Features'],
      category: 'Environment',
      rating: 4.9,
      users: '1.2K+',
      link: '/ai-climate-solutions-pro'
    },
    {
      id: 'ai-content-scheduler',
      name: 'AI Content Scheduler',
      description: 'Smart social media content scheduling with AI optimization and engagement prediction.',
      icon: <Zap className="w-8 h-8 text-yellow-500" />,
      price: '$32/month',
      features: ['AI Optimization', 'Engagement Prediction', 'Multi-Platform', 'Content Library', 'Analytics'],
      category: 'Marketing',
      rating: 4.7,
      users: '2.1K+',
      link: '/ai-content-scheduler'
    },
    {
      id: 'ai-habit-tracker',
      name: 'AI Habit Tracker',
      description: 'Intelligent habit formation with AI coaching, streak tracking, and personalized motivation.',
      icon: <Cpu className="w-8 h-8 text-orange-500" />,
      price: '$16/month',
      features: ['AI Coaching', 'Streak Tracking', 'Habit Chains', 'Motivation System', 'Progress Visualization'],
      category: 'Lifestyle',
      rating: 4.8,
      users: '3.5K+',
      link: '/ai-habit-tracker'
    },
    {
      id: 'ai-meeting-assistant',
      name: 'AI Meeting Assistant',
      description: 'Automated meeting transcription, action item extraction, and follow-up management.',
      icon: <Server className="w-8 h-8 text-cyan-500" />,
      price: '$28/month',
      features: ['Auto Transcription', 'Action Items', 'Meeting Summaries', 'Integration Tools', 'Team Collaboration'],
      category: 'Productivity',
      rating: 4.9,
      users: '1.9K+',
      link: '/ai-meeting-assistant'
    },
    {
      id: 'ai-fitness-coach',
      name: 'AI Fitness Coach',
      description: 'Personalized workout plans with AI form analysis and nutrition guidance.',
      icon: <Smartphone className="w-8 h-8 text-rose-500" />,
      price: '$24/month',
      features: ['Personalized Workouts', 'Form Analysis', 'Nutrition Guidance', 'Progress Tracking', 'Community'],
      category: 'Fitness',
      rating: 4.8,
      users: '2.7K+',
      link: '/ai-fitness-coach'
    },
    {
      id: 'ai-language-tutor',
      name: 'AI Language Tutor',
      description: 'Personalized language learning with AI conversation practice and pronunciation coaching.',
      icon: <Globe className="w-8 h-8 text-violet-500" />,
      price: '$20/month',
      features: ['Conversation Practice', 'Pronunciation AI', 'Personalized Lessons', 'Progress Tracking', 'Multi-Language'],
      category: 'Education',
      rating: 4.7,
      users: '4.3K+',
      link: '/ai-language-tutor'
    },
    {
      id: 'ai-stock-analyzer',
      name: 'AI Stock Analyzer',
      description: 'Intelligent stock market analysis with AI predictions and portfolio optimization.',
      icon: <Database className="w-8 h-8 text-emerald-600" />,
      price: '$45/month',
      features: ['AI Predictions', 'Portfolio Analysis', 'Risk Assessment', 'Market Trends', 'Alerts'],
      category: 'Finance',
      rating: 4.6,
      users: '1.4K+',
      link: '/ai-stock-analyzer'
    },
    {
      id: 'ai-home-automation',
      name: 'AI Home Automation',
      description: 'Smart home control with AI learning and automated routines.',
      icon: <Wifi className="w-8 h-8 text-blue-600" />,
      price: '$38/month',
      features: ['Smart Controls', 'AI Learning', 'Automated Routines', 'Energy Optimization', 'Security Integration'],
      category: 'IoT',
      rating: 4.8,
      users: '1.6K+',
      link: '/ai-home-automation'
    },
    {
      id: 'ai-email-optimizer',
      name: 'AI Email Optimizer',
      description: 'Email productivity tool with AI writing assistance and smart organization.',
      icon: <Code className="w-8 h-8 text-indigo-600" />,
      price: '$21/month',
      features: ['AI Writing', 'Smart Organization', 'Response Suggestions', 'Email Analytics', 'Integration'],
      category: 'Productivity',
      rating: 4.7,
      users: '2.9K+',
      link: '/ai-email-optimizer'
    },
    {
      id: 'ai-project-planner',
      name: 'AI Project Planner',
      description: 'Intelligent project management with AI resource allocation and timeline optimization.',
      icon: <Cpu className="w-8 h-8 text-purple-600" />,
      price: '$42/month',
      features: ['AI Resource Allocation', 'Timeline Optimization', 'Risk Analysis', 'Team Management', 'Reporting'],
      category: 'Business',
      rating: 4.9,
      users: '1.3K+',
      link: '/ai-project-planner'
    },
    {
      id: 'ai-nutrition-planner',
      name: 'AI Nutrition Planner',
      description: 'Personalized meal planning with AI dietary analysis and recipe recommendations.',
      icon: <Smartphone className="w-8 h-8 text-green-600" />,
      price: '$26/month',
      features: ['Meal Planning', 'Dietary Analysis', 'Recipe AI', 'Grocery Lists', 'Health Tracking'],
      category: 'Health',
      rating: 4.8,
      users: '3.1K+',
      link: '/ai-nutrition-planner'
    },
    {
      id: 'ai-sleep-optimizer',
      name: 'AI Sleep Optimizer',
      description: 'Sleep quality analysis with AI recommendations and smart wake-up optimization.',
      icon: <Clock className="w-8 h-8 text-slate-600" />,
      price: '$17/month',
      features: ['Sleep Analysis', 'AI Recommendations', 'Smart Wake-up', 'Sleep Tracking', 'Environment Control'],
      category: 'Health',
      rating: 4.7,
      users: '2.4K+',
      link: '/ai-sleep-optimizer'
    },
    {
      id: 'ai-travel-planner',
      name: 'AI Travel Planner',
      description: 'Intelligent travel planning with AI recommendations and real-time optimization.',
      icon: <Globe className="w-8 h-8 text-teal-600" />,
      price: '$31/month',
      features: ['AI Recommendations', 'Real-time Updates', 'Budget Optimization', 'Itinerary Planning', 'Booking Integration'],
      category: 'Travel',
      rating: 4.8,
      users: '1.7K+',
      link: '/ai-travel-planner'
    },
    {
      id: 'ai-mood-tracker',
      name: 'AI Mood Tracker',
      description: 'Mental health monitoring with AI insights and personalized wellness recommendations.',
      icon: <Brain className="w-8 h-8 text-pink-600" />,
      price: '$23/month',
      features: ['Mood Tracking', 'AI Insights', 'Wellness Tips', 'Journal Integration', 'Professional Resources'],
      category: 'Health',
      rating: 4.9,
      users: '2.6K+',
      link: '/ai-mood-tracker'
    }
  ];

  const categories = ['All', 'Productivity', 'Finance', 'Health', 'Business', 'Marketing', 'Education', 'Lifestyle', 'IoT', 'Travel', 'Security', 'Environment', 'Fitness'];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="pt-20 px-4 py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
              Micro SAAS Services
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-6 sm:mb-8 px-4">
              Discover our collection of innovative micro SAAS solutions designed to solve specific business and personal challenges with AI-powered intelligence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
              >
                Get Started
                <ArrowRight className="w-5 h-5 ml-2" />
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
      </section>

      {/* Services Grid */}
      <section className="py-12 sm:py-16 lg:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 px-4">Our Micro SAAS Solutions</h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto px-4">
              Choose from our comprehensive collection of AI-powered micro SAAS applications
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {microSaasServices.map((service, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 sm:p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 group">
                <div className="flex items-center justify-between mb-4">
                  <div className="group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
                  <div className="flex items-center space-x-2">
                    <Star className="w-4 h-4 text-yellow-400" />
                    <span className="text-sm text-gray-300">{service.rating}</span>
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-purple-300 transition-colors">
                  {service.name}
                </h3>
                
                <p className="text-gray-300 mb-4 text-sm">
                  {service.description}
                </p>
                
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-bold text-green-400">{service.price}</span>
                  <div className="flex items-center space-x-1 text-sm text-gray-400">
                    <Users className="w-4 h-4" />
                    <span>{service.users}</span>
                  </div>
                </div>
                
                <div className="mb-4">
                  <span className="inline-block bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-xs font-medium">
                    {service.category}
                  </span>
                </div>
                
                <ul className="space-y-2 mb-6">
                  {service.features.slice(0, 3).map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Link 
                  to={service.link}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group-hover:scale-105"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 px-4">Ready to Transform Your Workflow?</h2>
              <p className="text-lg sm:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
                Start using our micro SAAS solutions today and experience the power of AI-driven productivity.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center"
                >
                  Get Free Trial
                  <ArrowRight className="w-5 h-5 ml-2" />
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
      </section>
    </div>
  );
}
