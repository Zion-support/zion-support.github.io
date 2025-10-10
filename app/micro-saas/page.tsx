'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Zap, CheckCircle, ArrowRight, Star, Users, Shield, Cloud, BarChart3, Target, Rocket, Brain, Heart, Home, Package, Calendar, BookOpen, Lock, Sun, TrendingUp, PawPrint, FileText, Leaf, Clock, Utensils, MapPin, Activity, Sprout, Timer } from 'lucide-react';

interface MicroSaasProduct {
  id: string;
  icon: any;
  title: string;
  description: string;
  features: string[];
  price: string;
  users: string;
  popular: boolean;
  category: string;
}

const MicroSaasPage: React.FC = () => {
  const microSaasProducts: MicroSaasProduct[] = [
    {
      id: '1',
      icon: BarChart3,
      title: 'AI Analytics Dashboard',
      description: 'Real-time business intelligence and predictive analytics for small to medium businesses',
      features: ['Real-time dashboards', 'Predictive analytics', 'Custom reports', 'Mobile app', 'API integration'],
      price: '$99/month',
      users: 'Up to 50 users',
      popular: true,
      category: 'Analytics'
    },
    {
      id: '2',
      icon: Users,
      title: 'AI-Powered CRM',
      description: 'Intelligent customer relationship management with automated lead scoring and personalized interactions',
      features: ['Lead management', 'Email automation', 'Sales forecasting', 'Integration APIs', 'Custom fields'],
      price: '$149/month',
      users: 'Up to 100 users',
      popular: false,
      category: 'CRM'
    },
    {
      id: '3',
      icon: Shield,
      title: 'Security Monitoring Suite',
      description: 'Comprehensive cybersecurity monitoring and threat detection for growing businesses',
      features: ['Threat detection', 'Vulnerability scanning', 'Compliance reporting', '24/7 monitoring', 'Incident response'],
      price: '$199/month',
      users: 'Up to 200 users',
      popular: false,
      category: 'Security'
    },
    {
      id: '4',
      icon: Cloud,
      title: 'Cloud Infrastructure Manager',
      description: 'Automated cloud resource management and cost optimization for multi-cloud environments',
      features: ['Resource optimization', 'Cost tracking', 'Auto-scaling', 'Multi-cloud support', 'Backup management'],
      price: '$299/month',
      users: 'Unlimited users',
      popular: false,
      category: 'Infrastructure'
    },
    {
      id: '5',
      icon: TrendingUp,
      title: 'AI Financial Planner Pro',
      description: 'Personalized financial planning and investment optimization with AI-powered insights and risk assessment',
      features: ['Portfolio optimization', 'Risk analysis', 'Tax planning', 'Retirement planning', 'Real-time alerts'],
      price: '$79/month',
      users: 'Up to 5 portfolios',
      popular: true,
      category: 'Finance'
    },
    {
      id: '6',
      icon: Activity,
      title: 'AI Fitness Coach',
      description: 'Personalized fitness and nutrition coaching with AI-powered workout plans and meal recommendations',
      features: ['Custom workout plans', 'Nutrition tracking', 'Progress monitoring', 'Wearable integration', 'Goal setting'],
      price: '$29/month',
      users: 'Individual plans',
      popular: false,
      category: 'Health'
    },
    {
      id: '7',
      icon: Home,
      title: 'AI Home Security Manager',
      description: 'Smart home security system with AI-powered threat detection and automated response protocols',
      features: ['Motion detection', 'Facial recognition', 'Smart alerts', 'Remote monitoring', 'Emergency response'],
      price: '$49/month',
      users: 'Up to 10 cameras',
      popular: false,
      category: 'Security'
    },
    {
      id: '8',
      icon: Package,
      title: 'AI Inventory Optimizer',
      description: 'Intelligent inventory management with demand forecasting and automated reorder suggestions',
      features: ['Demand forecasting', 'Stock optimization', 'Reorder automation', 'Supplier management', 'Cost analysis'],
      price: '$89/month',
      users: 'Up to 1000 SKUs',
      popular: true,
      category: 'Business'
    },
    {
      id: '9',
      icon: Calendar,
      title: 'AI Social Media Scheduler',
      description: 'Intelligent social media management with optimal posting times and content performance analytics',
      features: ['Auto-scheduling', 'Content optimization', 'Performance analytics', 'Multi-platform', 'Engagement tracking'],
      price: '$39/month',
      users: 'Up to 10 accounts',
      popular: false,
      category: 'Marketing'
    },
    {
      id: '10',
      icon: BookOpen,
      title: 'AI Language Learning Tutor',
      description: 'Personalized language learning with AI-powered conversation practice and pronunciation coaching',
      features: ['Conversation practice', 'Pronunciation analysis', 'Progress tracking', 'Adaptive learning', 'Cultural insights'],
      price: '$19/month',
      users: 'Individual learning',
      popular: true,
      category: 'Education'
    },
    {
      id: '11',
      icon: Lock,
      title: 'AI Password Manager Pro',
      description: 'Advanced password management with AI-powered security analysis and breach monitoring',
      features: ['Password generation', 'Security scoring', 'Breach monitoring', 'Multi-device sync', 'Family sharing'],
      price: '$9/month',
      users: 'Up to 5 users',
      popular: false,
      category: 'Security'
    },
    {
      id: '12',
      icon: Sun,
      title: 'AI Weather Predictor',
      description: 'Hyperlocal weather forecasting with AI-powered predictions for agriculture and outdoor activities',
      features: ['Hyperlocal forecasts', 'Agricultural insights', 'Outdoor activity planning', 'Severe weather alerts', 'Historical data'],
      price: '$15/month',
      users: 'Unlimited locations',
      popular: false,
      category: 'Weather'
    },
    {
      id: '13',
      icon: TrendingUp,
      title: 'AI Stock Trader Assistant',
      description: 'AI-powered stock analysis and trading signals with portfolio optimization and risk management',
      features: ['Market analysis', 'Trading signals', 'Portfolio optimization', 'Risk assessment', 'Real-time alerts'],
      price: '$99/month',
      users: 'Up to 3 portfolios',
      popular: true,
      category: 'Finance'
    },
    {
      id: '14',
      icon: PawPrint,
      title: 'AI Pet Care Manager',
      description: 'Comprehensive pet health monitoring with AI-powered health insights and veterinary recommendations',
      features: ['Health tracking', 'Vaccination reminders', 'Diet recommendations', 'Behavior analysis', 'Vet integration'],
      price: '$24/month',
      users: 'Up to 5 pets',
      popular: false,
      category: 'Health'
    },
    {
      id: '15',
      icon: FileText,
      title: 'AI Document Scanner Pro',
      description: 'Advanced document scanning with AI-powered text extraction and intelligent organization',
      features: ['OCR technology', 'Smart categorization', 'Search functionality', 'Cloud storage', 'Multi-format support'],
      price: '$29/month',
      users: 'Unlimited documents',
      popular: false,
      category: 'Productivity'
    },
    {
      id: '16',
      icon: Zap,
      title: 'AI Energy Monitor',
      description: 'Smart energy consumption tracking with AI-powered optimization recommendations and cost analysis',
      features: ['Usage tracking', 'Cost analysis', 'Optimization tips', 'Appliance monitoring', 'Bill prediction'],
      price: '$19/month',
      users: 'Single household',
      popular: true,
      category: 'Energy'
    },
    {
      id: '17',
      icon: Utensils,
      title: 'AI Recipe Generator',
      description: 'Personalized recipe creation with AI-powered nutrition analysis and dietary restriction compliance',
      features: ['Custom recipes', 'Nutrition analysis', 'Dietary restrictions', 'Shopping lists', 'Meal planning'],
      price: '$14/month',
      users: 'Individual plans',
      popular: false,
      category: 'Food'
    },
    {
      id: '18',
      icon: MapPin,
      title: 'AI Travel Planner',
      description: 'Intelligent travel planning with AI-powered itinerary optimization and real-time recommendations',
      features: ['Itinerary planning', 'Budget optimization', 'Real-time updates', 'Local recommendations', 'Booking integration'],
      price: '$34/month',
      users: 'Unlimited trips',
      popular: false,
      category: 'Travel'
    },
    {
      id: '19',
      icon: Heart,
      title: 'AI Mental Health Tracker',
      description: 'Personal mental health monitoring with AI-powered mood analysis and wellness recommendations',
      features: ['Mood tracking', 'Wellness insights', 'Meditation guides', 'Progress monitoring', 'Professional resources'],
      price: '$39/month',
      users: 'Individual plans',
      popular: true,
      category: 'Health'
    },
    {
      id: '20',
      icon: Sprout,
      title: 'AI Garden Assistant',
      description: 'Smart gardening companion with AI-powered plant care recommendations and growth monitoring',
      features: ['Plant identification', 'Care schedules', 'Growth tracking', 'Pest detection', 'Harvest planning'],
      price: '$18/month',
      users: 'Up to 50 plants',
      popular: false,
      category: 'Gardening'
    },
    {
      id: '21',
      icon: Timer,
      title: 'AI Time Tracker Pro',
      description: 'Intelligent time tracking with AI-powered productivity analysis and work pattern optimization',
      features: ['Automatic tracking', 'Productivity insights', 'Distraction alerts', 'Goal setting', 'Team analytics'],
      price: '$22/month',
      users: 'Up to 10 projects',
      popular: false,
      category: 'Productivity'
    },
    {
      id: '22',
      icon: Brain,
      title: 'AI Code Review Assistant',
      description: 'Automated code review with AI-powered bug detection, security analysis, and performance optimization',
      features: ['Bug detection', 'Security scanning', 'Performance analysis', 'Code quality metrics', 'Best practices'],
      price: '$49/month',
      users: 'Up to 5 repositories',
      popular: true,
      category: 'Development'
    },
    {
      id: '23',
      icon: Target,
      title: 'AI Lead Scoring Engine',
      description: 'Intelligent lead qualification with AI-powered scoring and automated follow-up recommendations',
      features: ['Lead scoring', 'Behavioral analysis', 'Automated follow-ups', 'CRM integration', 'ROI tracking'],
      price: '$69/month',
      users: 'Up to 1000 leads',
      popular: false,
      category: 'Sales'
    },
    {
      id: '24',
      icon: Rocket,
      title: 'AI Project Manager',
      description: 'Intelligent project management with AI-powered resource allocation and timeline optimization',
      features: ['Resource optimization', 'Timeline prediction', 'Risk assessment', 'Team collaboration', 'Progress tracking'],
      price: '$59/month',
      users: 'Up to 20 projects',
      popular: true,
      category: 'Management'
    }
  ];

  const benefits = [
    'No upfront costs or setup fees',
    'Quick deployment in 24-48 hours',
    'Scalable solutions that grow with you',
    'Regular updates and new features',
    '24/7 technical support',
    'Easy integration with existing tools',
    'Free trial for all products',
    'Cancel anytime, no long-term contracts'
  ];

  const features = [
    {
      icon: Zap,
      title: 'Lightning Fast Setup',
      description: 'Get up and running in minutes with our streamlined onboarding process'
    },
    {
      icon: Target,
      title: 'Focused Solutions',
      description: 'Each micro SaaS is designed to solve specific business challenges effectively'
    },
    {
      icon: Rocket,
      title: 'Rapid Innovation',
      description: 'Frequent updates and new features based on user feedback and market needs'
    }
  ];

  const categories = ['All', 'Analytics', 'CRM', 'Security', 'Infrastructure', 'Finance', 'Health', 'Business', 'Marketing', 'Education', 'Weather', 'Food', 'Travel', 'Gardening', 'Productivity', 'Development', 'Sales', 'Management'];

  const [selectedCategory, setSelectedCategory] = React.useState('All');

  const filteredProducts = selectedCategory === 'All' 
    ? microSaasProducts 
    : microSaasProducts.filter(product => product.category === selectedCategory);

  return (
    <>
      <Helmet>
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Micro SaaS Solutions
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Focused, affordable AI and IT tools designed for specific business needs. 
              Quick deployment, scalable, and cost-effective solutions for growing businesses.
            </p>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">Why Choose Micro SaaS?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-8 h-8 text-slate-900" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    category === selectedCategory
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white'
                      : 'bg-white/10 text-gray-300 hover:bg-white/20'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">Our Micro SaaS Products</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {filteredProducts.map((product) => (
                <div key={product.id} className={`relative bg-slate-800/50 backdrop-blur-sm border rounded-xl p-6 hover:border-cyan-400/50 transition-all duration-300 group ${
                  product.popular ? 'border-cyan-400/50 ring-2 ring-cyan-400/20' : 'border-slate-700'
                }`}>
                  {product.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gradient-to-r from-cyan-400 to-purple-400 text-slate-900 px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                        <Star className="w-3 h-3 fill-current" />
                        Most Popular
                      </div>
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-400/20 to-purple-400/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <product.icon className="w-8 h-8 text-cyan-400" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                      {product.title}
                    </h3>
                    <p className="text-gray-300 text-sm mb-4">{product.description}</p>
                    <div className="text-3xl font-bold text-cyan-400 mb-1">{product.price}</div>
                    <div className="text-gray-400 text-sm">{product.users}</div>
                    <div className="inline-block px-2 py-1 bg-cyan-500/20 text-cyan-400 text-xs rounded-full mt-2">
                      {product.category}
                    </div>
                  </div>
                  
                  <ul className="space-y-3 mb-6">
                    {product.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-3">
                        <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <button className={`w-full py-3 px-4 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center gap-2 ${
                    product.popular
                      ? 'bg-gradient-to-r from-cyan-400 to-purple-400 text-slate-900 hover:from-cyan-300 hover:to-purple-300'
                      : 'bg-slate-700 text-white hover:bg-slate-600 border border-slate-600'
                  }`}>
                    Start Free Trial
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
                    <span className="text-gray-300">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-12 border border-white/20">
              <h2 className="text-3xl font-bold text-white mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Choose the micro SaaS solution that fits your business needs. 
                Start with a free trial and scale as you grow.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105"
                >
                  <Zap className="w-5 h-5" />
                  Start Free Trial
                </Link>
                <Link
                  to="/pricing"
                  className="inline-flex items-center gap-2 bg-white/10 text-white px-8 py-4 rounded-lg font-semibold border border-white/20 hover:bg-white/20 transition-all duration-300"
                >
                  View All Plans
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default MicroSaasPage;