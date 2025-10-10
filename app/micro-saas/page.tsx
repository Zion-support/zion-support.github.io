'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { CheckCircle, ArrowRight, Star, Clock, Zap, Shield, Heart, Box, Calendar, Target, Globe, Settings, Mic, TrendingUp, FileText, Brain } from 'lucide-react';

const MicroSaasPage: React.FC = () => {
  const microSaasTools = [
    {
      title: 'Zion Analytics Pro',
      description: 'Advanced real-time business intelligence and analytics platform with AI-powered insights and predictive modeling.',
      features: ['Real-time Data Visualization', 'AI-powered Predictive Analytics', 'Custom Dashboard Builder', 'Advanced Data Connectors', 'Automated Report Generation', 'Multi-tenant Architecture'],
      price: '$89/month',
      marketPrice: '$150-500/month',
      benefits: ['Data-driven decision making', 'Real-time insights', 'Custom dashboards', 'Automated reporting'],
      icon: Star,
      category: 'Analytics',
      popular: true
    },
    {
      title: 'Zion Chat AI',
      description: 'Next-generation AI customer support platform with advanced NLP, sentiment analysis, and multi-channel support.',
      features: ['GPT-4 Powered AI', 'Multi-channel Support', 'Advanced Sentiment Analysis', 'Automated Ticket Routing', 'Live Agent Handoff', 'Multi-language Support'],
      price: '$149/month',
      marketPrice: '$300-800/month',
      benefits: ['24/7 customer support', 'Reduced response time', 'Improved customer satisfaction', 'Lead generation'],
      icon: Zap,
      category: 'Customer Service',
      popular: true
    },
    {
      title: 'Zion Security Shield',
      description: 'Enterprise-grade cybersecurity monitoring and threat detection with automated incident response.',
      features: ['Real-time Threat Detection', 'Automated Incident Response', 'Compliance Monitoring', 'Vulnerability Scanning', 'Security Analytics', '24/7 SOC Support'],
      price: '$199/month',
      marketPrice: '$400-1200/month',
      benefits: ['Proactive threat protection', 'Reduced security incidents', 'Compliance assurance', 'Expert security team'],
      icon: Shield,
      category: 'Security',
      popular: true
    },
    {
      title: 'Zion Content Studio',
      description: 'AI-powered content creation platform for blogs, social media, marketing materials, and multimedia content.',
      features: ['AI Content Generation', 'Multi-platform Publishing', 'SEO Optimization', 'Brand Voice Training', 'Content Calendar', 'Performance Analytics'],
      price: '$79/month',
      marketPrice: '$150-400/month',
      benefits: ['Save 80% content creation time', 'Consistent brand voice', 'SEO optimization', 'Multi-platform publishing'],
      icon: Clock,
      category: 'Content',
      popular: false
    },
    {
      title: 'Zion CRM Intelligence',
      description: 'AI-enhanced customer relationship management with predictive analytics and automated workflows.',
      features: ['AI Lead Scoring', 'Predictive Analytics', 'Automated Workflows', 'Customer Segmentation', 'Sales Forecasting', 'Integration Hub'],
      price: '$129/month',
      marketPrice: '$200-600/month',
      benefits: ['Increase sales by 35%', 'Better lead qualification', 'Automated follow-ups', 'Data-driven insights'],
      icon: Star,
      category: 'CRM',
      popular: false
    },
    {
      title: 'Zion Lead Magnet',
      description: 'Advanced lead generation and qualification platform with AI-powered prospect scoring and nurturing.',
      features: ['AI-powered Lead Scoring', 'Multi-channel Lead Capture', 'Automated Lead Nurturing', 'CRM Integration', 'Advanced Analytics', 'A/B Testing'],
      price: '$99/month',
      marketPrice: '$200-600/month',
      benefits: ['Increase qualified leads by 300%', 'Automated lead nurturing', 'Better conversion rates', 'ROI optimization'],
      icon: Zap,
      category: 'Marketing',
      popular: true
    },
    {
      title: 'Zion Project Master',
      description: 'AI-powered project management with intelligent resource allocation and automated reporting.',
      features: ['AI Resource Allocation', 'Predictive Timeline Management', 'Risk Assessment', 'Team Collaboration', 'Progress Tracking', 'Automated Reporting'],
      price: '$69/month',
      marketPrice: '$120-350/month',
      benefits: ['Improved project success rate', 'Better resource utilization', 'Reduced project delays', 'Automated reporting'],
      icon: Clock,
      category: 'Project Management',
      popular: false
    },
    {
      title: 'Zion Email Automation',
      description: 'Intelligent email marketing platform with AI-powered personalization and automated campaigns.',
      features: ['AI Personalization', 'Automated Campaigns', 'A/B Testing', 'Advanced Segmentation', 'Deliverability Optimization', 'Performance Analytics'],
      price: '$59/month',
      marketPrice: '$100-300/month',
      benefits: ['Increase open rates by 40%', 'Automated campaigns', 'Better personalization', 'ROI optimization'],
      icon: Zap,
      category: 'Marketing',
      popular: false
    },
    {
      title: 'Zion Invoice Genius',
      description: 'AI-powered invoice generation and management with automated billing and payment tracking.',
      features: ['AI-powered Invoice Generation', 'Automated Recurring Billing', 'Multi-currency Support', 'Payment Tracking', 'Tax Calculation', 'Client Portal'],
      price: '$49/month',
      marketPrice: '$100-300/month',
      benefits: ['Save 90% invoice creation time', 'Reduce payment delays', 'Automated follow-ups', 'Professional invoices'],
      icon: Shield,
      category: 'Finance',
      popular: true
    },
    {
      title: 'Zion Workflow Automation',
      description: 'Intelligent business process automation with AI-powered workflow optimization and monitoring.',
      features: ['Process Mining', 'Workflow Optimization', 'Task Automation', 'Exception Handling', 'Performance Monitoring', 'Custom Integrations'],
      price: '$89/month',
      marketPrice: '$150-500/month',
      benefits: ['Process efficiency', 'Error reduction', 'Cost savings', 'Scalable automation'],
      icon: Clock,
      category: 'Automation',
      popular: false
    },
    {
      title: 'Zion Social Scheduler',
      description: 'AI-powered social media management with content optimization and automated posting.',
      features: ['AI Content Optimization', 'Multi-platform Scheduling', 'Hashtag Research', 'Engagement Analytics', 'Competitor Analysis', 'Content Calendar'],
      price: '$39/month',
      marketPrice: '$80-200/month',
      benefits: ['Increase engagement by 60%', 'Automated posting', 'Better content strategy', 'Time savings'],
      icon: Star,
      category: 'Social Media',
      popular: false
    },
    {
      title: 'Zion AI Video Editor',
      description: 'AI-powered video editing platform with automated editing, effects, and optimization.',
      features: ['AI Auto-editing', 'Smart Cut Detection', 'Automated Subtitles', 'Color Correction', 'Audio Enhancement', 'Multi-format Export'],
      price: '$79/month',
      marketPrice: '$150-400/month',
      benefits: ['Save 70% editing time', 'Professional quality', 'Automated features', 'Easy to use'],
      icon: Zap,
      category: 'Video',
      popular: false
    },
    {
      title: 'Zion AI Translator Pro',
      description: 'Advanced AI translation platform with context-aware translations and real-time language processing.',
      features: ['100+ Languages', 'Context-aware Translation', 'Real-time Processing', 'Document Translation', 'Voice Translation', 'API Integration'],
      price: '$59/month',
      marketPrice: '$100-300/month',
      benefits: ['Accurate translations', 'Real-time processing', 'Multiple formats', 'API integration'],
      icon: Shield,
      category: 'Translation',
      popular: false
    },
    {
      title: 'Zion AI Code Reviewer',
      description: 'Intelligent code review platform with automated bug detection and security analysis.',
      features: ['Automated Code Review', 'Security Vulnerability Detection', 'Performance Analysis', 'Code Quality Metrics', 'Best Practice Suggestions', 'Team Collaboration'],
      price: '$99/month',
      marketPrice: '$200-500/month',
      benefits: ['Reduce bugs by 50%', 'Improve code quality', 'Security enhancement', 'Team learning'],
      icon: Clock,
      category: 'Development',
      popular: false
    },
    {
      title: 'Zion Customer Insights Pro',
      description: 'AI-powered customer analytics platform with sentiment analysis and behavioral insights.',
      features: ['Sentiment Analysis', 'Behavioral Tracking', 'Customer Segmentation', 'Churn Prediction', 'Lifetime Value Analysis', 'Real-time Dashboards'],
      price: '$119/month',
      marketPrice: '$250-600/month',
      benefits: ['Better customer understanding', 'Churn prevention', 'Personalized experiences', 'Data-driven decisions'],
      icon: Star,
      category: 'Analytics',
      popular: false
    },
    {
      title: 'Zion AI Email Assistant',
      description: 'Smart email management with AI-powered sorting, drafting, and response suggestions.',
      features: ['Smart Email Sorting', 'AI Draft Suggestions', 'Priority Classification', 'Auto-responses', 'Email Analytics', 'Calendar Integration'],
      price: '$39/month',
      marketPrice: '$80-200/month',
      benefits: ['Save 2 hours daily', 'Better email organization', 'Faster responses', 'Reduced email stress'],
      icon: Zap,
      category: 'Productivity',
      popular: false
    },
    {
      title: 'Zion AI Meeting Assistant',
      description: 'Intelligent meeting management with automated transcription, action items, and follow-ups.',
      features: ['Automated Transcription', 'Action Item Extraction', 'Meeting Summaries', 'Calendar Integration', 'Follow-up Automation', 'Team Collaboration'],
      price: '$69/month',
      marketPrice: '$120-350/month',
      benefits: ['Better meeting efficiency', 'Automated follow-ups', 'Improved accountability', 'Time savings'],
      icon: Shield,
      category: 'Productivity',
      popular: false
    },
    {
      title: 'Zion AI SEO Optimizer',
      description: 'AI-powered SEO optimization platform with keyword research and content optimization.',
      features: ['Keyword Research', 'Content Optimization', 'Competitor Analysis', 'Rank Tracking', 'Technical SEO Audit', 'Performance Monitoring'],
      price: '$79/month',
      marketPrice: '$150-400/month',
      benefits: ['Increase organic traffic', 'Better search rankings', 'Automated optimization', 'Competitive advantage'],
      icon: Clock,
      category: 'SEO',
      popular: false
    },
    {
      title: 'Zion AI Data Cleaner',
      description: 'Intelligent data cleaning and validation platform with automated data quality management.',
      features: ['Automated Data Cleaning', 'Duplicate Detection', 'Data Validation', 'Format Standardization', 'Quality Scoring', 'Error Reporting'],
      price: '$59/month',
      marketPrice: '$100-300/month',
      benefits: ['Improve data quality', 'Reduce errors', 'Automated cleaning', 'Better analytics'],
      icon: Star,
      category: 'Data',
      popular: false
    },
    {
      title: 'Zion AI Contract Analyzer',
      description: 'AI-powered contract analysis and risk assessment with automated legal document processing.',
      features: ['Contract Analysis', 'Risk Assessment', 'Clause Extraction', 'Compliance Checking', 'Automated Summaries', 'Legal Database Integration'],
      price: '$149/month',
      marketPrice: '$300-800/month',
      benefits: ['Faster contract review', 'Risk reduction', 'Compliance assurance', 'Time savings'],
      icon: Zap,
      category: 'Legal',
      popular: false
    },
    {
      title: 'Zion AI Climate Optimizer',
      description: 'AI-powered carbon footprint tracking and sustainability optimization for businesses.',
      features: ['Carbon Footprint Analysis', 'Sustainability Scoring', 'Green Energy Recommendations', 'Waste Reduction Planning', 'ESG Reporting', 'Climate Risk Assessment'],
      price: '$199/month',
      marketPrice: '$400-1200/month',
      benefits: ['Reduce carbon footprint by 40%', 'Improve ESG scores', 'Compliance with regulations', 'Cost savings on energy'],
      icon: Star,
      category: 'Sustainability',
      popular: true
    },
    {
      title: 'Zion AI Mental Health Assistant',
      description: 'AI-powered workplace mental health monitoring and wellness recommendations.',
      features: ['Stress Level Monitoring', 'Mood Tracking', 'Wellness Recommendations', 'Crisis Intervention Alerts', 'Team Health Analytics', 'Privacy-First Design'],
      price: '$89/month',
      marketPrice: '$200-500/month',
      benefits: ['Improve employee wellbeing', 'Reduce workplace stress', 'Early intervention', 'Better team dynamics'],
      icon: Heart,
      category: 'Wellness',
      popular: true
    },
    {
      title: 'Zion AI Supply Chain Optimizer',
      description: 'Intelligent supply chain optimization with real-time risk assessment and cost optimization.',
      features: ['Real-time Risk Monitoring', 'Cost Optimization', 'Supplier Performance Tracking', 'Demand Forecasting', 'Sustainability Metrics', 'Crisis Management'],
      price: '$299/month',
      marketPrice: '$600-2000/month',
      benefits: ['Reduce supply chain costs by 25%', 'Improve resilience', 'Better supplier relationships', 'Risk mitigation'],
      icon: Box,
      category: 'Supply Chain',
      popular: true
    },
    {
      title: 'Zion AI Learning Platform',
      description: 'Personalized AI learning platform with adaptive content and skill assessment.',
      features: ['Adaptive Learning Paths', 'Skill Assessment', 'Personalized Content', 'Progress Tracking', 'Certification Management', 'Team Learning Analytics'],
      price: '$79/month',
      marketPrice: '$150-400/month',
      benefits: ['Improve learning outcomes', 'Personalized education', 'Track skill development', 'Team upskilling'],
      icon: Clock,
      category: 'Education',
      popular: false
    },
    {
      title: 'Zion AI Event Planner Pro',
      description: 'AI-powered event planning and management with automated coordination and optimization.',
      features: ['Event Planning Automation', 'Vendor Management', 'Budget Optimization', 'Guest Experience Tracking', 'Real-time Analytics', 'Mobile Event App'],
      price: '$129/month',
      marketPrice: '$250-700/month',
      benefits: ['Save 60% planning time', 'Better event experiences', 'Cost optimization', 'Automated coordination'],
      icon: Calendar,
      category: 'Events',
      popular: false
    },
    {
      title: 'Zion AI Real Estate Analyzer',
      description: 'AI-powered real estate market analysis and investment opportunity identification.',
      features: ['Market Analysis', 'Property Valuation', 'Investment Scoring', 'Neighborhood Insights', 'Rental Yield Prediction', 'Risk Assessment'],
      price: '$179/month',
      marketPrice: '$350-1000/month',
      benefits: ['Better investment decisions', 'Market insights', 'Risk reduction', 'ROI optimization'],
      icon: Target,
      category: 'Real Estate',
      popular: true
    },
    {
      title: 'Zion AI Fitness Coach',
      description: 'Personalized AI fitness coaching with workout optimization and health tracking.',
      features: ['Personalized Workouts', 'Nutrition Planning', 'Progress Tracking', 'Injury Prevention', 'Goal Setting', 'Community Features'],
      price: '$49/month',
      marketPrice: '$100-300/month',
      benefits: ['Achieve fitness goals faster', 'Personalized guidance', 'Injury prevention', 'Better health outcomes'],
      icon: Zap,
      category: 'Fitness',
      popular: true
    },
    {
      title: 'Zion AI Travel Optimizer',
      description: 'AI-powered travel planning with cost optimization and personalized recommendations.',
      features: ['Smart Itinerary Planning', 'Cost Optimization', 'Real-time Updates', 'Local Recommendations', 'Weather Integration', 'Group Travel Coordination'],
      price: '$39/month',
      marketPrice: '$80-200/month',
      benefits: ['Save 30% on travel costs', 'Better travel experiences', 'Time optimization', 'Personalized recommendations'],
      icon: Globe,
      category: 'Travel',
      popular: false
    },
    {
      title: 'Zion AI Pet Care Assistant',
      description: 'AI-powered pet health monitoring and care recommendations for pet owners.',
      features: ['Health Monitoring', 'Vaccination Reminders', 'Diet Planning', 'Behavior Analysis', 'Vet Appointment Scheduling', 'Emergency Alerts'],
      price: '$29/month',
      marketPrice: '$60-150/month',
      benefits: ['Better pet health', 'Preventive care', 'Cost savings', 'Peace of mind'],
      icon: Heart,
      category: 'Pet Care',
      popular: false
    },
    {
      title: 'Zion AI Home Automation',
      description: 'Smart home automation with AI-powered energy optimization and security monitoring.',
      features: ['Energy Optimization', 'Security Monitoring', 'Climate Control', 'Appliance Management', 'Voice Control', 'Predictive Maintenance'],
      price: '$99/month',
      marketPrice: '$200-500/month',
      benefits: ['Reduce energy costs by 35%', 'Enhanced security', 'Convenience', 'Smart living'],
      icon: Settings,
      category: 'Smart Home',
      popular: true
    },
    {
      title: 'Zion AI Language Learning',
      description: 'AI-powered language learning with personalized curriculum and pronunciation coaching.',
      features: ['Personalized Learning', 'Speech Recognition', 'Cultural Context', 'Progress Tracking', 'Conversation Practice', 'Multi-language Support'],
      price: '$59/month',
      marketPrice: '$120-350/month',
      benefits: ['Faster language acquisition', 'Better pronunciation', 'Cultural understanding', 'Flexible learning'],
      icon: Mic,
      category: 'Language',
      popular: false
    },
    {
      title: 'Zion AI Investment Tracker',
      description: 'AI-powered investment portfolio analysis and market prediction for individual investors.',
      features: ['Portfolio Analysis', 'Market Predictions', 'Risk Assessment', 'Tax Optimization', 'Rebalancing Alerts', 'Performance Tracking'],
      price: '$149/month',
      marketPrice: '$300-800/month',
      benefits: ['Better investment returns', 'Risk management', 'Tax optimization', 'Informed decisions'],
      icon: TrendingUp,
      category: 'Finance',
      popular: true
    },
    {
      title: 'Zion AI Garden Planner',
      description: 'AI-powered garden planning and plant care optimization for home gardeners.',
      features: ['Garden Design', 'Plant Selection', 'Care Schedules', 'Pest Detection', 'Harvest Planning', 'Weather Integration'],
      price: '$39/month',
      marketPrice: '$80-200/month',
      benefits: ['Better garden yields', 'Plant health', 'Time savings', 'Gardening success'],
      icon: Globe,
      category: 'Gardening',
      popular: false
    },
    {
      title: 'Zion AI Sleep Optimizer',
      description: 'AI-powered sleep analysis and optimization for better rest and productivity.',
      features: ['Sleep Pattern Analysis', 'Environment Optimization', 'Sleep Coaching', 'Progress Tracking', 'Smart Alarms', 'Health Integration'],
      price: '$49/month',
      marketPrice: '$100-300/month',
      benefits: ['Better sleep quality', 'Improved productivity', 'Health insights', 'Energy optimization'],
      icon: Clock,
      category: 'Health',
      popular: true
    },
    {
      title: 'Zion AI Recipe Generator',
      description: 'AI-powered recipe creation and meal planning with dietary restrictions and preferences.',
      features: ['Personalized Recipes', 'Dietary Restrictions', 'Nutritional Analysis', 'Shopping Lists', 'Meal Planning', 'Cooking Instructions'],
      price: '$29/month',
      marketPrice: '$60-150/month',
      benefits: ['Varied meal options', 'Nutritional balance', 'Time savings', 'Dietary compliance'],
      icon: FileText,
      category: 'Cooking',
      popular: false
    },
    {
      title: 'Zion AI Time Tracker Pro',
      description: 'Advanced time tracking with AI-powered productivity analysis and optimization.',
      features: ['Automatic Time Tracking', 'Productivity Analysis', 'Distraction Detection', 'Focus Sessions', 'Goal Setting', 'Team Analytics'],
      price: '$79/month',
      marketPrice: '$150-400/month',
      benefits: ['Increase productivity by 40%', 'Better time management', 'Focus improvement', 'Goal achievement'],
      icon: Clock,
      category: 'Productivity',
      popular: true
    },
    {
      title: 'Zion AI Habit Builder',
      description: 'AI-powered habit formation and tracking with personalized motivation and rewards.',
      features: ['Habit Tracking', 'Motivation System', 'Progress Analytics', 'Social Accountability', 'Reward System', 'Habit Stacking'],
      price: '$19/month',
      marketPrice: '$40-100/month',
      benefits: ['Build lasting habits', 'Personal growth', 'Motivation boost', 'Goal achievement'],
      icon: Target,
      category: 'Personal Development',
      popular: false
    },
    {
      title: 'Zion AI Memory Palace',
      description: 'AI-powered memory enhancement and learning optimization using advanced techniques.',
      features: ['Memory Techniques', 'Spaced Repetition', 'Visual Learning', 'Progress Tracking', 'Custom Algorithms', 'Performance Analytics'],
      price: '$69/month',
      marketPrice: '$140-350/month',
      benefits: ['Improve memory retention', 'Faster learning', 'Better recall', 'Cognitive enhancement'],
      icon: Brain,
      category: 'Learning',
      popular: true
    },
    {
      title: 'Zion AI Meditation Guide',
      description: 'AI-powered meditation and mindfulness platform with personalized guidance.',
      features: ['Personalized Sessions', 'Progress Tracking', 'Mood Integration', 'Guided Meditations', 'Biofeedback', 'Community Support'],
      price: '$39/month',
      marketPrice: '$80-200/month',
      benefits: ['Reduce stress', 'Improve focus', 'Better sleep', 'Mental clarity'],
      icon: Heart,
      category: 'Mindfulness',
      popular: false
    }
  ]

  const features = [
    {
      title: 'Rapid Deployment',
      description: 'Get your micro SaaS solution up and running in days, not months.',
      icon: Zap
    },
    {
      title: 'Scalable Architecture',
      description: 'Built to handle growth from startup to enterprise scale.',
      icon: Star
    },
    {
      title: 'AI-Powered',
      description: 'Leverage cutting-edge AI to provide intelligent features and automation.',
      icon: CheckCircle
    },
    {
      title: 'Secure & Compliant',
      description: 'Enterprise-grade security and compliance built-in from day one.',
      icon: Shield
    }
  ]

  return (
    <>
      <Helmet>
        <title>Micro SaaS Solutions | Zion Tech Group</title>
        <meta name="description" content="Discover our micro SaaS solutions designed to solve specific business problems with AI-powered tools and rapid deployment." />
        <meta name="keywords" content="micro SaaS, AI tools, business automation, SaaS solutions, productivity tools" />
      </Helmet>

      <Navigation />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Micro SaaS Solutions
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Powerful, focused tools that solve specific business problems with AI-powered intelligence and rapid deployment.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {microSaasTools.map((tool, index) => (
                <div key={index} className={`bg-white/5 backdrop-blur-lg rounded-2xl p-6 border transition-all duration-300 hover:scale-105 group ${
                  tool.popular ? 'border-cyan-400/50 shadow-lg shadow-cyan-500/20' : 'border-white/10 hover:border-cyan-400/30'
                }`}>
                  {tool.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                        POPULAR
                      </span>
                    </div>
                  )}
                  
                  <div className="flex items-center mb-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                      <tool.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-1">{tool.title}</h3>
                      <div className="flex items-center space-x-2">
                        <span className="text-cyan-400 font-bold text-lg">{tool.price}</span>
                        {tool.marketPrice && (
                          <span className="text-gray-400 text-sm line-through">{tool.marketPrice}</span>
                        )}
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-4 text-sm leading-relaxed">{tool.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-white mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {tool.features.slice(0, 4).map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-300 text-sm">
                          <CheckCircle className="w-3 h-3 text-cyan-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {tool.benefits && (
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-white mb-2">Benefits:</h4>
                      <ul className="space-y-1">
                        {tool.benefits.slice(0, 3).map((benefit, benefitIndex) => (
                          <li key={benefitIndex} className="flex items-center text-green-300 text-sm">
                            <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <div className="flex items-center justify-between">
                    <div className="text-xs text-gray-400">
                      <span className="bg-gray-700 px-2 py-1 rounded">{tool.category}</span>
                    </div>
                    <button className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-500 text-white text-sm font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300">
                      Try Now
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-8 text-center">Why Choose Our Micro SaaS Solutions?</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {features.map((feature, index) => (
                  <div key={index} className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <feature.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                    <p className="text-gray-300 text-sm">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 text-center">
              <h2 className="text-3xl font-bold text-white mb-4">Ready to Get Started?</h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Choose from our ready-made solutions or let us build a custom micro SaaS tool for your specific needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-full hover:from-cyan-600 hover:to-purple-600 transition-all duration-300">
                  Browse Solutions
                </button>
                <button className="px-8 py-4 bg-white/10 text-white font-semibold rounded-full hover:bg-white/20 transition-all duration-300">
                  Custom Development
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
}

export default MicroSaasPage;