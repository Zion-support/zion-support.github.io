'use client';
import React, { useState, useEffect } from 'react';
import { 
  Code, 
  BarChart, 
  Mail, 
  Calendar, 
  FileText, 
  Users, 
  Shield, 
  Zap, 
  Target, 
  Globe, 
  Smartphone, 
  Database,
  TrendingUp,
  Settings,
  Star,
  CheckCircle,
  ArrowRight,
  Play,
  Download,
  ExternalLink,
  Clock,
  DollarSign,
  Award
} from 'lucide-react';

const MicroSAASPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const categories = [
    { id: 'all', name: 'All Tools', icon: Zap, count: 50 },
    { id: 'productivity', name: 'Productivity', icon: Target, count: 12 },
    { id: 'marketing', name: 'Marketing', icon: TrendingUp, count: 10 },
    { id: 'analytics', name: 'Analytics', icon: BarChart, count: 8 },
    { id: 'development', name: 'Development', icon: Code, count: 15 },
    { id: 'communication', name: 'Communication', icon: Users, count: 5 }
  ];

  const microSaasTools = [
    // Productivity Tools
    {
      id: 'ai-task-manager',
      name: 'AI Task Manager Pro',
      description: 'Intelligent task management with AI-powered prioritization, deadline prediction, and automated scheduling.',
      category: 'productivity',
      icon: Target,
      price: 29,
      features: ['AI Priority Scoring', 'Smart Deadlines', 'Team Collaboration', 'Progress Tracking'],
      benefits: ['40% faster task completion', '95% on-time delivery', 'Reduced project stress'],
      rating: 4.9,
      users: 2500,
      demo: 'https://demo.ziontechgroup.com/ai-task-manager',
      pricing: 'monthly'
    },
    {
      id: 'smart-calendar',
      name: 'Smart Calendar AI',
      description: 'AI-powered calendar that automatically schedules meetings, blocks focus time, and optimizes your schedule.',
      category: 'productivity',
      icon: Calendar,
      price: 19,
      features: ['Auto-scheduling', 'Focus Time Blocks', 'Meeting Optimization', 'Conflict Resolution'],
      benefits: ['30% more productive time', 'Zero scheduling conflicts', 'Perfect work-life balance'],
      rating: 4.8,
      users: 1800,
      demo: 'https://demo.ziontechgroup.com/smart-calendar',
      pricing: 'monthly'
    },
    {
      id: 'ai-document-writer',
      name: 'AI Document Writer',
      description: 'Generate professional documents, reports, and proposals with AI assistance and real-time collaboration.',
      category: 'productivity',
      icon: FileText,
      price: 39,
      features: ['AI Writing Assistant', 'Template Library', 'Real-time Collaboration', 'Version Control'],
      benefits: ['80% faster document creation', 'Professional quality output', 'Team collaboration'],
      rating: 4.7,
      users: 3200,
      demo: 'https://demo.ziontechgroup.com/ai-document-writer',
      pricing: 'monthly'
    },
    {
      id: 'email-optimizer',
      name: 'Email Optimizer Pro',
      description: 'AI-powered email management with smart categorization, auto-responses, and productivity insights.',
      category: 'productivity',
      icon: Mail,
      price: 24,
      features: ['Smart Categorization', 'Auto-responses', 'Sentiment Analysis', 'Productivity Metrics'],
      benefits: ['60% less email time', 'Better response rates', 'Reduced email stress'],
      rating: 4.6,
      users: 4100,
      demo: 'https://demo.ziontechgroup.com/email-optimizer',
      pricing: 'monthly'
    },

    // Marketing Tools
    {
      id: 'ai-content-generator',
      name: 'AI Content Generator',
      description: 'Create engaging blog posts, social media content, and marketing copy with advanced AI technology.',
      category: 'marketing',
      icon: FileText,
      price: 49,
      features: ['Multi-platform Content', 'SEO Optimization', 'Brand Voice Training', 'A/B Testing'],
      benefits: ['10x content output', 'Higher engagement rates', 'Consistent brand voice'],
      rating: 4.9,
      users: 5600,
      demo: 'https://demo.ziontechgroup.com/ai-content-generator',
      pricing: 'monthly'
    },
    {
      id: 'social-media-scheduler',
      name: 'Social Media Scheduler AI',
      description: 'Intelligent social media scheduling with optimal timing, hashtag suggestions, and performance analytics.',
      category: 'marketing',
      icon: Globe,
      price: 34,
      features: ['Optimal Timing', 'Hashtag Research', 'Performance Analytics', 'Multi-platform Posting'],
      benefits: ['3x more engagement', 'Perfect posting times', 'Data-driven decisions'],
      rating: 4.8,
      users: 2800,
      demo: 'https://demo.ziontechgroup.com/social-scheduler',
      pricing: 'monthly'
    },
    {
      id: 'email-marketing-ai',
      name: 'Email Marketing AI',
      description: 'Advanced email marketing with AI-powered segmentation, personalization, and campaign optimization.',
      category: 'marketing',
      icon: Mail,
      price: 59,
      features: ['AI Segmentation', 'Personalization Engine', 'A/B Testing', 'Predictive Analytics'],
      benefits: ['40% higher open rates', '25% more conversions', 'Automated optimization'],
      rating: 4.7,
      users: 1900,
      demo: 'https://demo.ziontechgroup.com/email-marketing-ai',
      pricing: 'monthly'
    },
    {
      id: 'seo-optimizer',
      name: 'SEO Optimizer Pro',
      description: 'AI-powered SEO analysis and optimization for better search rankings and organic traffic growth.',
      category: 'marketing',
      icon: TrendingUp,
      price: 44,
      features: ['Keyword Research', 'Content Optimization', 'Technical SEO', 'Competitor Analysis'],
      benefits: ['50% more organic traffic', 'Higher search rankings', 'Competitive advantage'],
      rating: 4.8,
      users: 3400,
      demo: 'https://demo.ziontechgroup.com/seo-optimizer',
      pricing: 'monthly'
    },

    // Analytics Tools
    {
      id: 'business-intelligence-ai',
      name: 'Business Intelligence AI',
      description: 'Transform raw data into actionable insights with AI-powered analytics and predictive modeling.',
      category: 'analytics',
      icon: BarChart,
      price: 79,
      features: ['Predictive Analytics', 'Custom Dashboards', 'Automated Reports', 'Data Visualization'],
      benefits: ['Data-driven decisions', 'Predict future trends', 'Automated insights'],
      rating: 4.9,
      users: 1200,
      demo: 'https://demo.ziontechgroup.com/business-intelligence-ai',
      pricing: 'monthly'
    },
    {
      id: 'website-analytics-ai',
      name: 'Website Analytics AI',
      description: 'Advanced website analytics with AI-powered insights, user behavior analysis, and conversion optimization.',
      category: 'analytics',
      icon: Globe,
      price: 39,
      features: ['User Behavior Analysis', 'Conversion Funnels', 'Heatmaps', 'AI Recommendations'],
      benefits: ['Higher conversion rates', 'Better user experience', 'Data-driven improvements'],
      rating: 4.7,
      users: 2200,
      demo: 'https://demo.ziontechgroup.com/website-analytics-ai',
      pricing: 'monthly'
    },
    {
      id: 'customer-insights-ai',
      name: 'Customer Insights AI',
      description: 'Understand your customers better with AI-powered sentiment analysis and behavioral predictions.',
      category: 'analytics',
      icon: Users,
      price: 54,
      features: ['Sentiment Analysis', 'Behavioral Predictions', 'Customer Segmentation', 'Churn Prediction'],
      benefits: ['Better customer retention', 'Improved satisfaction', 'Predictive insights'],
      rating: 4.8,
      users: 1600,
      demo: 'https://demo.ziontechgroup.com/customer-insights-ai',
      pricing: 'monthly'
    },

    // Development Tools
    {
      id: 'ai-code-reviewer',
      name: 'AI Code Reviewer',
      description: 'Automated code review with AI-powered suggestions, security scanning, and best practices enforcement.',
      category: 'development',
      icon: Code,
      price: 69,
      features: ['Automated Reviews', 'Security Scanning', 'Best Practices', 'Performance Analysis'],
      benefits: ['Faster code reviews', 'Higher code quality', 'Reduced bugs'],
      rating: 4.9,
      users: 1800,
      demo: 'https://demo.ziontechgroup.com/ai-code-reviewer',
      pricing: 'monthly'
    },
    {
      id: 'api-testing-ai',
      name: 'API Testing AI',
      description: 'Intelligent API testing with automated test generation, performance monitoring, and error detection.',
      category: 'development',
      icon: Settings,
      price: 49,
      features: ['Auto Test Generation', 'Performance Monitoring', 'Error Detection', 'Load Testing'],
      benefits: ['Comprehensive testing', 'Faster development', 'Reliable APIs'],
      rating: 4.7,
      users: 2100,
      demo: 'https://demo.ziontechgroup.com/api-testing-ai',
      pricing: 'monthly'
    },
    {
      id: 'database-optimizer',
      name: 'Database Optimizer AI',
      description: 'AI-powered database optimization with query analysis, performance tuning, and automated maintenance.',
      category: 'development',
      icon: Database,
      price: 89,
      features: ['Query Optimization', 'Performance Tuning', 'Auto Maintenance', 'Security Scanning'],
      benefits: ['Faster queries', 'Better performance', 'Automated maintenance'],
      rating: 4.8,
      users: 900,
      demo: 'https://demo.ziontechgroup.com/database-optimizer',
      pricing: 'monthly'
    },
    {
      id: 'mobile-app-analyzer',
      name: 'Mobile App Analyzer',
      description: 'Comprehensive mobile app analysis with performance monitoring, crash reporting, and user experience insights.',
      category: 'development',
      icon: Smartphone,
      price: 59,
      features: ['Performance Monitoring', 'Crash Reporting', 'User Experience', 'A/B Testing'],
      benefits: ['Better app performance', 'Reduced crashes', 'Improved UX'],
      rating: 4.6,
      users: 1500,
      demo: 'https://demo.ziontechgroup.com/mobile-app-analyzer',
      pricing: 'monthly'
    },

    // Communication Tools
    {
      id: 'ai-meeting-assistant',
      name: 'AI Meeting Assistant',
      description: 'Intelligent meeting management with transcription, action items, and follow-up automation.',
      category: 'communication',
      icon: Users,
      price: 39,
      features: ['Live Transcription', 'Action Items', 'Follow-up Automation', 'Meeting Analytics'],
      benefits: ['Better meeting outcomes', 'Automated follow-ups', 'Clear action items'],
      rating: 4.8,
      users: 3200,
      demo: 'https://demo.ziontechgroup.com/ai-meeting-assistant',
      pricing: 'monthly'
    },
    {
      id: 'team-collaboration-ai',
      name: 'Team Collaboration AI',
      description: 'Enhanced team collaboration with AI-powered project management, communication, and productivity insights.',
      category: 'communication',
      icon: Users,
      price: 44,
      features: ['Project Management', 'Smart Notifications', 'Productivity Insights', 'Team Analytics'],
      benefits: ['Better collaboration', 'Higher productivity', 'Clear project visibility'],
      rating: 4.7,
      users: 1900,
      demo: 'https://demo.ziontechgroup.com/team-collaboration-ai',
      pricing: 'monthly'
    }
  ];

  const filteredTools = selectedCategory === 'all' 
    ? microSaasTools 
    : microSaasTools.filter(tool => tool.category === selectedCategory);

  const formatPrice = (price: number, pricing: string) => {
    return `$${price}/${pricing === 'monthly' ? 'mo' : 'yr'}`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header Section */}
      <div className="container mx-auto px-4 py-16 pt-24">
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Micro SAAS Solutions
          </h1>
          <p className="text-xl md:text-2xl text-cyan-400 mb-8 font-medium">
            50+ AI-Powered Tools for Modern Businesses
          </p>
          <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-12">
            Discover our comprehensive suite of micro SAAS applications designed to streamline your workflow, 
            boost productivity, and drive business growth. Each tool is powered by cutting-edge AI technology.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-4xl mx-auto mb-12">
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-400 mb-2">50+</div>
              <div className="text-gray-300">AI-Powered Tools</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-pink-400 mb-2">25K+</div>
              <div className="text-gray-300">Active Users</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">99.9%</div>
              <div className="text-gray-300">Uptime</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">4.8★</div>
              <div className="text-gray-300">Average Rating</div>
            </div>
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-lg transition-all duration-200 ${
                selectedCategory === category.id
                  ? 'bg-cyan-600 text-white shadow-lg'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              <category.icon className="w-5 h-5" />
              <span>{category.name}</span>
              <span className="bg-gray-600 text-xs px-2 py-1 rounded-full">
                {category.count}
              </span>
            </button>
          ))}
        </div>

        {/* Tools Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredTools.map((tool) => (
            <div
              key={tool.id}
              className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 overflow-hidden"
            >
              <div className="p-6">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
                      <tool.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{tool.name}</h3>
                      <div className="flex items-center space-x-2">
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-4 h-4 ${
                                i < Math.floor(tool.rating)
                                  ? 'text-yellow-400 fill-current'
                                  : 'text-gray-300'
                              }`}
                            />
                          ))}
                        </div>
                        <span className="text-sm text-gray-600">{tool.rating}</span>
                        <span className="text-sm text-gray-500">({tool.users} users)</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-gray-900">
                      {formatPrice(tool.price, tool.pricing)}
                    </div>
                    <div className="text-sm text-gray-500">per month</div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-600 mb-4 leading-relaxed">{tool.description}</p>

                {/* Features */}
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
                  <div className="flex flex-wrap gap-2">
                    {tool.features.map((feature, index) => (
                      <span
                        key={index}
                        className="bg-cyan-100 text-cyan-800 text-xs px-2 py-1 rounded-full"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Benefits */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-2">Benefits:</h4>
                  <ul className="space-y-1">
                    {tool.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Actions */}
                <div className="flex space-x-3">
                  <a
                    href={tool.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 flex items-center justify-center space-x-2"
                  >
                    <Play className="w-4 h-4" />
                    <span>Try Demo</span>
                  </a>
                  <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-200 flex items-center space-x-2">
                    <Download className="w-4 h-4" />
                    <span>Download</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-cyan-600 to-blue-700 rounded-2xl p-12 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-cyan-100 mb-8 max-w-3xl mx-auto">
            Join thousands of businesses already using our AI-powered micro SAAS solutions 
            to increase productivity, reduce costs, and drive growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="bg-white text-cyan-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center space-x-2"
            >
              <Phone className="w-5 h-5" />
              <span>Call (302) 464-0950</span>
            </a>
            <a
              href="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-cyan-600 transition-all duration-200"
            >
              Get Free Consultation
            </a>
          </div>
        </div>

        {/* Pricing Tiers */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg text-gray-300 mb-12 max-w-3xl mx-auto">
            Choose the perfect plan for your business needs. All plans include 24/7 support and regular updates.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Starter Plan */}
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Starter</h3>
              <div className="text-4xl font-bold text-gray-900 mb-6">$29<span className="text-lg text-gray-500">/mo</span></div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  Up to 5 tools
                </li>
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  Basic AI features
                </li>
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  Email support
                </li>
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  Standard templates
                </li>
              </ul>
              <button className="w-full bg-gray-900 text-white py-3 rounded-lg hover:bg-gray-800 transition-colors duration-200">
                Get Started
              </button>
            </div>

            {/* Professional Plan */}
            <div className="bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl p-8 shadow-2xl transform scale-105">
              <div className="flex items-center justify-center mb-4">
                <Award className="w-6 h-6 text-white mr-2" />
                <span className="text-white font-semibold">Most Popular</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Professional</h3>
              <div className="text-4xl font-bold text-white mb-6">$79<span className="text-lg text-cyan-100">/mo</span></div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-cyan-100">
                  <CheckCircle className="w-5 h-5 text-white mr-3" />
                  Up to 20 tools
                </li>
                <li className="flex items-center text-cyan-100">
                  <CheckCircle className="w-5 h-5 text-white mr-3" />
                  Advanced AI features
                </li>
                <li className="flex items-center text-cyan-100">
                  <CheckCircle className="w-5 h-5 text-white mr-3" />
                  Priority support
                </li>
                <li className="flex items-center text-cyan-100">
                  <CheckCircle className="w-5 h-5 text-white mr-3" />
                  Custom integrations
                </li>
                <li className="flex items-center text-cyan-100">
                  <CheckCircle className="w-5 h-5 text-white mr-3" />
                  Analytics dashboard
                </li>
              </ul>
              <button className="w-full bg-white text-cyan-600 py-3 rounded-lg hover:bg-gray-100 transition-colors duration-200 font-semibold">
                Get Started
              </button>
            </div>

            {/* Enterprise Plan */}
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Enterprise</h3>
              <div className="text-4xl font-bold text-gray-900 mb-6">$199<span className="text-lg text-gray-500">/mo</span></div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  Unlimited tools
                </li>
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  Premium AI features
                </li>
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  24/7 phone support
                </li>
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  Custom development
                </li>
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  Dedicated account manager
                </li>
              </ul>
              <button className="w-full bg-gray-900 text-white py-3 rounded-lg hover:bg-gray-800 transition-colors duration-200">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MicroSAASPage;