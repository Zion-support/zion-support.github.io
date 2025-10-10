'use client';
import React, { useState, useEffect } from 'react';
import { 
  Code, 
  BarChart, 
  Calendar, 
  FileText, 
  Video, 
  Smartphone, 
  Mail, 
  Users, 
  DollarSign, 
  Settings, 
  Shield, 
  Lock,
  Star,
  CheckCircle,
  ArrowRight,
  Zap,
  Brain,
  Globe,
  Rocket,
  Truck,
  Stethoscope,
  Clock,
  Database,
  ShoppingCart,
  Scale
} from 'lucide-react';

const MicroSAASPage: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const microSAASServices = [
    // Productivity & Project Management
    { 
      name: 'AI Project Manager Pro', 
      href: '/ai-project-manager', 
      icon: BarChart, 
      category: 'Productivity', 
      price: '$199/mo',
      description: 'Intelligent project management with AI-powered insights, predictive analytics, and automated resource allocation',
      features: ['Smart Task Assignment', 'Progress Tracking', 'Resource Optimization', 'Risk Assessment', 'Predictive Analytics', 'Team Performance Insights'],
      popular: true,
      rating: 4.8,
      users: '2,500+',
      trial: '14-day free trial'
    },
    { 
      name: 'AI Smart Calendar Pro', 
      href: '/ai-smart-calendar', 
      icon: Calendar, 
      category: 'Productivity', 
      price: '$89/mo',
      description: 'AI-powered calendar management with smart scheduling, conflict resolution, and productivity optimization',
      features: ['Smart Scheduling', 'Conflict Resolution', 'Time Optimization', 'Meeting Insights', 'Energy Level Tracking', 'Focus Time Blocks'],
      popular: true,
      rating: 4.7,
      users: '1,800+',
      trial: '7-day free trial'
    },
    { 
      name: 'AI Workflow Automation Studio', 
      href: '/ai-workflow-automation', 
      icon: Zap, 
      category: 'Productivity', 
      price: '$149/mo',
      description: 'Visual workflow builder with AI-powered automation for complex business processes',
      features: ['Visual Workflow Builder', 'AI Process Discovery', 'Smart Triggers', 'Error Handling', 'Performance Analytics', 'Integration Hub'],
      popular: true,
      rating: 4.9,
      users: '3,200+',
      trial: '21-day free trial'
    },
    { 
      name: 'AI Time Tracker Pro', 
      href: '/ai-time-tracker', 
      icon: Clock, 
      category: 'Productivity', 
      price: '$59/mo',
      description: 'Intelligent time tracking with automatic categorization and productivity insights',
      features: ['Auto Time Tracking', 'Smart Categorization', 'Productivity Analytics', 'Focus Mode', 'Distraction Alerts', 'Team Reports'],
      popular: false,
      rating: 4.6,
      users: '1,200+',
      trial: '14-day free trial'
    },

    // Content Creation & Marketing
    { 
      name: 'AI Content Writer Pro', 
      href: '/ai-content-writer', 
      icon: FileText, 
      category: 'Content', 
      price: '$129/mo',
      description: 'Advanced AI content creation with SEO optimization, brand consistency, and multi-platform publishing',
      features: ['SEO Optimization', 'Brand Voice Training', 'Content Templates', 'Multi-language Support', 'Plagiarism Check', 'Performance Analytics'],
      popular: true,
      rating: 4.9,
      users: '4,100+',
      trial: '10-day free trial'
    },
    { 
      name: 'AI Video Generator Pro', 
      href: '/ai-video-generator', 
      icon: Video, 
      category: 'Content', 
      price: '$199/mo',
      description: 'Create professional videos with AI-powered editing, voice synthesis, and automated storytelling',
      features: ['Auto Editing', 'Voice Synthesis', 'Visual Effects', 'Template Library', 'Brand Kit', 'Social Media Optimization'],
      popular: true,
      rating: 4.6,
      users: '2,800+',
      trial: '7-day free trial'
    },
    { 
      name: 'AI Social Media Manager Pro', 
      href: '/ai-social-media-manager', 
      icon: Smartphone, 
      category: 'Marketing', 
      price: '$99/mo',
      description: 'Automated social media management with AI content generation, scheduling, and engagement optimization',
      features: ['Auto Posting', 'Content Generation', 'Analytics Dashboard', 'Engagement Optimization', 'Hashtag Research', 'Competitor Analysis'],
      popular: true,
      rating: 4.8,
      users: '3,500+',
      trial: '14-day free trial'
    },
    { 
      name: 'AI Email Marketing Suite', 
      href: '/ai-email-marketing', 
      icon: Mail, 
      category: 'Marketing', 
      price: '$79/mo',
      description: 'Intelligent email marketing with personalization, A/B testing, and automated campaign optimization',
      features: ['Personalization Engine', 'A/B Testing', 'Automation Workflows', 'Advanced Analytics', 'Deliverability Optimization', 'Template Library'],
      popular: true,
      rating: 4.7,
      users: '2,900+',
      trial: '14-day free trial'
    },
    { 
      name: 'AI SEO Optimizer Pro', 
      href: '/ai-seo-optimizer', 
      icon: Globe, 
      category: 'Marketing', 
      price: '$149/mo',
      description: 'AI-powered SEO optimization with keyword research, content analysis, and ranking predictions',
      features: ['Keyword Research', 'Content Optimization', 'Ranking Predictions', 'Competitor Analysis', 'Technical SEO Audit', 'Link Building'],
      popular: false,
      rating: 4.5,
      users: '1,600+',
      trial: '7-day free trial'
    },

    // Business & Finance
    { 
      name: 'AI Financial Advisor Pro', 
      href: '/ai-financial-advisor', 
      icon: DollarSign, 
      category: 'Finance', 
      price: '$299/mo',
      description: 'Personalized financial planning and investment advice powered by advanced AI algorithms',
      features: ['Portfolio Analysis', 'Risk Assessment', 'Investment Recommendations', 'Tax Optimization', 'Retirement Planning', 'Market Predictions'],
      popular: true,
      rating: 4.8,
      users: '1,400+',
      trial: '30-day free trial'
    },
    { 
      name: 'AI Invoice Generator Pro', 
      href: '/ai-invoice-generator', 
      icon: FileText, 
      category: 'Business', 
      price: '$49/mo',
      description: 'Automated invoice generation with smart templates, payment tracking, and financial reporting',
      features: ['Smart Templates', 'Auto Calculations', 'Payment Tracking', 'Financial Reports', 'Tax Integration', 'Client Portal'],
      popular: true,
      rating: 4.7,
      users: '2,200+',
      trial: '14-day free trial'
    },
    { 
      name: 'AI Expense Tracker Pro', 
      href: '/ai-expense-tracker', 
      icon: BarChart, 
      category: 'Finance', 
      price: '$39/mo',
      description: 'Intelligent expense tracking with automatic categorization, receipt scanning, and budget management',
      features: ['Receipt Scanning', 'Auto Categorization', 'Budget Management', 'Tax Preparation', 'Expense Reports', 'Spending Insights'],
      popular: false,
      rating: 4.6,
      users: '1,800+',
      trial: '14-day free trial'
    },
    { 
      name: 'AI Lead Generation Suite', 
      href: '/ai-lead-generation', 
      icon: Users, 
      category: 'Business', 
      price: '$199/mo',
      description: 'AI-powered lead generation with automated prospecting, qualification, and nurturing',
      features: ['Lead Scoring', 'Auto Prospecting', 'Email Sequences', 'CRM Integration', 'Lead Nurturing', 'Conversion Analytics'],
      popular: true,
      rating: 4.8,
      users: '2,700+',
      trial: '21-day free trial'
    },

    // Development & Technical
    { 
      name: 'AI Code Assistant Pro', 
      href: '/ai-code-assistant', 
      icon: Code, 
      category: 'Development', 
      price: '$179/mo',
      description: 'Advanced AI coding assistant with code generation, debugging, and optimization suggestions',
      features: ['Code Generation', 'Debug Assistant', 'Code Review', 'Documentation', 'Test Generation', 'Performance Optimization'],
      popular: true,
      rating: 4.9,
      users: '4,500+',
      trial: '14-day free trial'
    },
    { 
      name: 'AI API Builder Pro', 
      href: '/ai-api-builder', 
      icon: Settings, 
      category: 'Development', 
      price: '$249/mo',
      description: 'Build and manage APIs with AI-powered code generation, testing, and documentation',
      features: ['API Generation', 'Auto Testing', 'Documentation', 'Rate Limiting', 'Authentication', 'Monitoring'],
      popular: false,
      rating: 4.7,
      users: '1,300+',
      trial: '21-day free trial'
    },
    { 
      name: 'AI Database Optimizer', 
      href: '/ai-database-optimizer', 
      icon: Database, 
      category: 'Development', 
      price: '$199/mo',
      description: 'AI-powered database optimization with query analysis, indexing suggestions, and performance monitoring',
      features: ['Query Optimization', 'Index Suggestions', 'Performance Monitoring', 'Security Analysis', 'Backup Management', 'Scaling Recommendations'],
      popular: false,
      rating: 4.6,
      users: '1,100+',
      trial: '14-day free trial'
    },

    // Security & Compliance
    { 
      name: 'AI Security Monitor Pro', 
      href: '/ai-security-monitor', 
      icon: Shield, 
      category: 'Security', 
      price: '$299/mo',
      description: 'AI-powered security monitoring with threat detection, vulnerability assessment, and incident response',
      features: ['Threat Detection', 'Vulnerability Scanning', 'Incident Response', 'Compliance Monitoring', 'Security Reports', 'Risk Assessment'],
      popular: true,
      rating: 4.8,
      users: '1,900+',
      trial: '30-day free trial'
    },
    { 
      name: 'AI Password Manager Pro', 
      href: '/ai-password-manager', 
      icon: Lock, 
      category: 'Security', 
      price: '$29/mo',
      description: 'Advanced password management with AI-powered security recommendations and breach monitoring',
      features: ['Password Generation', 'Security Analysis', 'Breach Monitoring', 'Multi-device Sync', 'Team Sharing', '2FA Integration'],
      popular: true,
      rating: 4.7,
      users: '3,800+',
      trial: '14-day free trial'
    },

    // Specialized Industry Solutions
    { 
      name: 'AI Healthcare Assistant Pro', 
      href: '/ai-healthcare-assistant', 
      icon: Stethoscope, 
      category: 'Healthcare', 
      price: '$399/mo',
      description: 'AI-powered healthcare management with patient scheduling, medical records, and diagnostic assistance',
      features: ['Patient Scheduling', 'Medical Records', 'Diagnostic Support', 'Prescription Management', 'Insurance Processing', 'Compliance Tracking'],
      popular: false,
      rating: 4.9,
      users: '800+',
      trial: '30-day free trial'
    },
    { 
      name: 'AI Legal Assistant Pro', 
      href: '/ai-legal-assistant', 
      icon: Scale, 
      category: 'Legal', 
      price: '$349/mo',
      description: 'AI-powered legal research, document analysis, and case management for law firms',
      features: ['Legal Research', 'Document Analysis', 'Case Management', 'Contract Review', 'Compliance Tracking', 'Client Communication'],
      popular: false,
      rating: 4.8,
      users: '600+',
      trial: '30-day free trial'
    },
    { 
      name: 'AI E-commerce Optimizer', 
      href: '/ai-ecommerce-optimizer', 
      icon: ShoppingCart, 
      category: 'E-commerce', 
      price: '$199/mo',
      description: 'AI-powered e-commerce optimization with product recommendations, pricing strategies, and inventory management',
      features: ['Product Recommendations', 'Dynamic Pricing', 'Inventory Management', 'Customer Segmentation', 'Conversion Optimization', 'Analytics Dashboard'],
      popular: true,
      rating: 4.7,
      users: '2,100+',
      trial: '14-day free trial'
    },
    { 
      name: 'AI HR Assistant Pro', 
      href: '/ai-hr-assistant', 
      icon: Users, 
      category: 'HR', 
      price: '$179/mo',
      description: 'AI-powered HR management with recruitment, employee engagement, and performance analytics',
      features: ['Resume Screening', 'Interview Scheduling', 'Employee Onboarding', 'Performance Tracking', 'Engagement Surveys', 'Compliance Management'],
      popular: true,
      rating: 4.6,
      users: '1,700+',
      trial: '21-day free trial'
    },

    // NEW INNOVATIVE MICRO SAAS SERVICES
    { 
      name: 'AI Voice Assistant Pro', 
      href: '/ai-voice-assistant', 
      icon: Users, 
      category: 'Productivity', 
      price: '$89/mo',
      description: 'Advanced voice-controlled AI assistant for hands-free productivity and task management',
      features: ['Voice Commands', 'Natural Language Processing', 'Multi-language Support', 'Calendar Integration', 'Email Management', 'Smart Reminders'],
      popular: true,
      rating: 4.8,
      users: '2,100+',
      trial: '14-day free trial'
    },
    { 
      name: 'AI Meeting Transcriber Pro', 
      href: '/ai-meeting-transcriber', 
      icon: FileText, 
      category: 'Productivity', 
      price: '$69/mo',
      description: 'Real-time meeting transcription with AI-powered insights and action item extraction',
      features: ['Real-time Transcription', 'Speaker Identification', 'Action Item Extraction', 'Meeting Summaries', 'Search & Archive', 'Multi-language Support'],
      popular: true,
      rating: 4.7,
      users: '1,900+',
      trial: '7-day free trial'
    },
    { 
      name: 'AI Data Scraper Pro', 
      href: '/ai-data-scraper', 
      icon: Database, 
      category: 'Data', 
      price: '$149/mo',
      description: 'Intelligent web scraping with AI-powered data extraction and cleaning capabilities',
      features: ['Smart Data Extraction', 'Anti-Detection Technology', 'Data Cleaning', 'API Integration', 'Scheduled Scraping', 'Export Formats'],
      popular: true,
      rating: 4.6,
      users: '1,400+',
      trial: '14-day free trial'
    },
    { 
      name: 'AI Logo Designer Pro', 
      href: '/ai-logo-designer', 
      icon: Palette, 
      category: 'Design', 
      price: '$79/mo',
      description: 'AI-powered logo design with brand analysis and multiple style variations',
      features: ['Brand Analysis', 'Style Variations', 'Vector Export', 'Brand Guidelines', 'Color Palette', 'Font Matching'],
      popular: true,
      rating: 4.9,
      users: '3,200+',
      trial: '10-day free trial'
    },
    { 
      name: 'AI Music Composer Pro', 
      href: '/ai-music-composer', 
      icon: Music, 
      category: 'Creative', 
      price: '$129/mo',
      description: 'AI-powered music composition with genre analysis and royalty-free generation',
      features: ['Genre Analysis', 'Mood Detection', 'Instrument Selection', 'Royalty-free Music', 'Custom Length', 'Export Options'],
      popular: false,
      rating: 4.5,
      users: '800+',
      trial: '14-day free trial'
    },
    { 
      name: 'AI Fitness Coach Pro', 
      href: '/ai-fitness-coach', 
      icon: Stethoscope, 
      category: 'Health', 
      price: '$99/mo',
      description: 'Personalized AI fitness coaching with workout plans and nutrition guidance',
      features: ['Personalized Workouts', 'Nutrition Planning', 'Progress Tracking', 'Form Analysis', 'Goal Setting', 'Community Features'],
      popular: true,
      rating: 4.7,
      users: '2,500+',
      trial: '21-day free trial'
    },
    { 
      name: 'AI Language Tutor Pro', 
      href: '/ai-language-tutor', 
      icon: Globe, 
      category: 'Education', 
      price: '$59/mo',
      description: 'AI-powered language learning with personalized curriculum and pronunciation coaching',
      features: ['Personalized Learning', 'Pronunciation Analysis', 'Conversation Practice', 'Progress Tracking', 'Multiple Languages', 'Gamification'],
      popular: true,
      rating: 4.8,
      users: '4,100+',
      trial: '14-day free trial'
    },
    { 
      name: 'AI Recipe Generator Pro', 
      href: '/ai-recipe-generator', 
      icon: ChefHat, 
      category: 'Lifestyle', 
      price: '$39/mo',
      description: 'AI-powered recipe creation with dietary restrictions and nutritional analysis',
      features: ['Dietary Restrictions', 'Nutritional Analysis', 'Ingredient Substitution', 'Cooking Instructions', 'Shopping Lists', 'Meal Planning'],
      popular: false,
      rating: 4.4,
      users: '1,200+',
      trial: '7-day free trial'
    },
    { 
      name: 'AI Travel Planner Pro', 
      href: '/ai-travel-planner', 
      icon: Plane, 
      category: 'Travel', 
      price: '$79/mo',
      description: 'Intelligent travel planning with itinerary optimization and real-time updates',
      features: ['Itinerary Optimization', 'Budget Planning', 'Real-time Updates', 'Local Recommendations', 'Weather Integration', 'Booking Integration'],
      popular: true,
      rating: 4.6,
      users: '1,800+',
      trial: '14-day free trial'
    },
    { 
      name: 'AI Stock Trader Pro', 
      href: '/ai-stock-trader', 
      icon: TrendingUp, 
      category: 'Finance', 
      price: '$199/mo',
      description: 'AI-powered stock trading with market analysis and automated portfolio management',
      features: ['Market Analysis', 'Automated Trading', 'Portfolio Management', 'Risk Assessment', 'Real-time Alerts', 'Backtesting'],
      popular: true,
      rating: 4.7,
      users: '1,100+',
      trial: '30-day free trial'
    },
    { 
      name: 'AI Home Automation Pro', 
      href: '/ai-home-automation', 
      icon: Home, 
      category: 'IoT', 
      price: '$149/mo',
      description: 'Smart home automation with AI learning and energy optimization',
      features: ['Device Integration', 'Learning Patterns', 'Energy Optimization', 'Voice Control', 'Security Monitoring', 'Remote Access'],
      popular: false,
      rating: 4.5,
      users: '900+',
      trial: '21-day free trial'
    },
    { 
      name: 'AI Plant Care Pro', 
      href: '/ai-plant-care', 
      icon: Sprout, 
      category: 'Lifestyle', 
      price: '$29/mo',
      description: 'AI-powered plant care with species identification and watering schedules',
      features: ['Species Identification', 'Care Schedules', 'Problem Diagnosis', 'Growth Tracking', 'Community Features', 'Expert Tips'],
      popular: false,
      rating: 4.3,
      users: '600+',
      trial: '14-day free trial'
    },
    { 
      name: 'AI Sleep Optimizer Pro', 
      href: '/ai-sleep-optimizer', 
      icon: Clock, 
      category: 'Health', 
      price: '$49/mo',
      description: 'AI-powered sleep analysis and optimization with personalized recommendations',
      features: ['Sleep Analysis', 'Personalized Recommendations', 'Sleep Tracking', 'Environment Optimization', 'Habit Building', 'Progress Reports'],
      popular: true,
      rating: 4.6,
      users: '1,500+',
      trial: '14-day free trial'
    },
    { 
      name: 'AI Memory Palace Pro', 
      href: '/ai-memory-palace', 
      icon: Brain, 
      category: 'Education', 
      price: '$69/mo',
      description: 'AI-powered memory enhancement with spaced repetition and visualization techniques',
      features: ['Spaced Repetition', 'Visualization Techniques', 'Memory Games', 'Progress Tracking', 'Custom Decks', 'Performance Analytics'],
      popular: false,
      rating: 4.4,
      users: '700+',
      trial: '14-day free trial'
    },
    { 
      name: 'AI Mood Tracker Pro', 
      href: '/ai-mood-tracker', 
      icon: Heart, 
      category: 'Health', 
      price: '$39/mo',
      description: 'AI-powered mood tracking with pattern analysis and wellness recommendations',
      features: ['Mood Tracking', 'Pattern Analysis', 'Wellness Recommendations', 'Journal Integration', 'Progress Reports', 'Professional Insights'],
      popular: true,
      rating: 4.7,
      users: '2,200+',
      trial: '14-day free trial'
    },
    { 
      name: 'AI Habit Builder Pro', 
      href: '/ai-habit-builder', 
      icon: Target, 
      category: 'Productivity', 
      price: '$49/mo',
      description: 'AI-powered habit formation with personalized strategies and progress tracking',
      features: ['Habit Formation', 'Personalized Strategies', 'Progress Tracking', 'Motivation System', 'Streak Tracking', 'Community Support'],
      popular: true,
      rating: 4.8,
      users: '3,000+',
      trial: '21-day free trial'
    },
    { 
      name: 'AI Weather Predictor Pro', 
      href: '/ai-weather-predictor', 
      icon: Cloud, 
      category: 'Data', 
      price: '$79/mo',
      description: 'Advanced weather prediction with AI analysis and personalized forecasts',
      features: ['Advanced Forecasting', 'Personalized Alerts', 'Historical Analysis', 'Location-based Data', 'API Integration', 'Custom Reports'],
      popular: false,
      rating: 4.5,
      users: '1,000+',
      trial: '7-day free trial'
    },
    { 
      name: 'AI Pet Care Pro', 
      href: '/ai-pet-care', 
      icon: Heart, 
      category: 'Lifestyle', 
      price: '$59/mo',
      description: 'AI-powered pet care with health monitoring and behavior analysis',
      features: ['Health Monitoring', 'Behavior Analysis', 'Vet Reminders', 'Nutrition Planning', 'Activity Tracking', 'Emergency Alerts'],
      popular: true,
      rating: 4.6,
      users: '1,300+',
      trial: '14-day free trial'
    },
    { 
      name: 'AI Meditation Guide Pro', 
      href: '/ai-meditation-guide', 
      icon: Brain, 
      category: 'Health', 
      price: '$39/mo',
      description: 'AI-powered meditation guidance with personalized sessions and progress tracking',
      features: ['Personalized Sessions', 'Progress Tracking', 'Mood-based Recommendations', 'Guided Breathing', 'Sleep Stories', 'Community Features'],
      popular: true,
      rating: 4.8,
      users: '2,800+',
      trial: '14-day free trial'
    },
    { 
      name: 'AI Investment Analyzer Pro', 
      href: '/ai-investment-analyzer', 
      icon: BarChart, 
      category: 'Finance', 
      price: '$179/mo',
      description: 'AI-powered investment analysis with market predictions and portfolio optimization',
      features: ['Market Analysis', 'Portfolio Optimization', 'Risk Assessment', 'Investment Recommendations', 'Performance Tracking', 'Tax Optimization'],
      popular: true,
      rating: 4.7,
      users: '1,600+',
      trial: '30-day free trial'
    },
    { 
      name: 'AI Learning Path Pro', 
      href: '/ai-learning-path', 
      icon: GraduationCap, 
      category: 'Education', 
      price: '$89/mo',
      description: 'AI-powered personalized learning paths with skill assessment and progress tracking',
      features: ['Skill Assessment', 'Personalized Paths', 'Progress Tracking', 'Certification Prep', 'Expert Content', 'Peer Learning'],
      popular: true,
      rating: 4.8,
      users: '2,400+',
      trial: '21-day free trial'
    }
  ];

  const categories = ['All', 'Productivity', 'Content', 'Marketing', 'Business', 'Finance', 'Development', 'Security', 'Healthcare', 'Legal', 'E-commerce', 'HR', 'Data', 'Design', 'Creative', 'Health', 'Education', 'Lifestyle', 'Travel', 'IoT'];

  if (!isLoaded) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-white"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      {/* Header */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Micro SAAS Solutions
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Powerful AI-powered micro SaaS tools to streamline your business operations
            </p>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
          {microSAASServices.map((service) => (
            <div
              key={service.name}
              className={`bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:border-white/40 transition-all duration-300 hover:scale-105 ${
                service.popular ? 'ring-2 ring-purple-500' : ''
              }`}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 rounded-lg bg-gradient-to-r from-purple-500 to-blue-600 text-white">
                  <service.icon className="h-8 w-8" />
                </div>
                <div className="flex items-center space-x-2">
                  {service.popular && (
                    <span className="px-2 py-1 bg-orange-500 text-white text-xs rounded-full flex items-center">
                      <Star className="w-3 h-3 mr-1" />
                      Popular
                    </span>
                  )}
                  <div className="flex items-center text-yellow-400">
                    <Star className="w-4 h-4 fill-current" />
                    <span className="ml-1 text-sm font-medium">{service.rating}</span>
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-white mb-4">
                {service.name}
              </h3>

              <p className="text-gray-300 mb-6 leading-relaxed">
                {service.description}
              </p>

              <div className="mb-6">
                <h4 className="text-lg font-semibold text-white mb-3">Features:</h4>
                <ul className="space-y-2">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex items-center justify-between mb-6">
                <div className="text-2xl font-bold text-white">
                  {service.price}
                </div>
                <div className="text-sm text-gray-400">
                  {service.category}
                </div>
              </div>

              <div className="flex items-center justify-between mb-6 text-sm">
                <div className="flex items-center text-gray-400">
                  <Users className="w-4 h-4 mr-1" />
                  {service.users}
                </div>
                <div className="text-cyan-400 font-medium">
                  {service.trial}
                </div>
              </div>

              <button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 flex items-center justify-center">
                Get Started
                <ArrowRight className="w-4 h-4 ml-2" />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-purple-600 to-blue-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Boost Your Productivity?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Start your free trial today and experience the power of AI-driven micro SaaS tools
          </p>
          <button className="bg-white text-purple-600 py-4 px-8 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-300">
            Start Your Free Trial
          </button>
        </div>
      </div>
    </div>
  );
};

export default MicroSAASPage;