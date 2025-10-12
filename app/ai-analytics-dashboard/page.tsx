'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  BarChart3, 
  TrendingUp, 
  Zap, 
  CheckCircle, 
  Star, 
  ArrowRight, 
  Sparkles,
  Target,
  Users,
  Brain,
  Lock,
  Globe,
  MessageSquare,
  Camera,
  Mail,
  Phone,
  MapPin,
  Shield,
  Cpu,
  Database,
  Code,
  Smartphone,
  Wifi,
  Settings,
  Play,
  Download,
  Upload,
  Eye,
  Edit3,
  Copy,
  Share2,
  Calendar,
  Clock,
  Award,
  DollarSign,
  PieChart,
  Activity,
  LineChart,
  BarChart,
  TrendingDown,
  AlertCircle,
  RefreshCw,
  Filter,
  Search,
  Download as DownloadIcon,
  Upload as UploadIcon,
  Maximize2,
  Minimize2,
  RotateCcw,
  Save,
  Trash2,
  Plus,
  Minus,
  X,
  Check,
  Info,
  HelpCircle,
  ExternalLink,
  ChevronRight,
  ChevronLeft,
  ChevronUp,
  ChevronDown,
  MoreHorizontal,
  MoreVertical,
  Grid,
  List,
  Layout,
  Palette,
  Layers,
  Monitor,
  Smartphone as Mobile,
  Tablet,
  Laptop,
  Desktop
} from 'lucide-react';

export default function AIAnalyticsDashboardPage() {
  const features = [
    {
      icon: <Brain className="w-6 h-6" />,
      title: 'AI-Powered Insights',
      description: 'Get intelligent insights and predictions powered by advanced machine learning algorithms.'
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: 'Real-Time Analytics',
      description: 'Monitor your data in real-time with live dashboards and instant updates.'
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: 'Custom Dashboards',
      description: 'Create personalized dashboards tailored to your specific business needs and KPIs.'
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: 'Predictive Analytics',
      description: 'Forecast trends and outcomes with our advanced predictive modeling capabilities.'
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: 'Multi-Source Integration',
      description: 'Connect and analyze data from 100+ sources including APIs, databases, and cloud services.'
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Enterprise Security',
      description: 'Bank-level security with end-to-end encryption and compliance with industry standards.'
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$199',
      period: '/month',
      description: 'Perfect for small teams and startups',
      features: [
        '5 data sources',
        'Basic dashboards',
        'Standard reports',
        'Email support',
        '1GB data storage',
        'Basic AI insights'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$399',
      period: '/month',
      description: 'Ideal for growing businesses',
      features: [
        '25 data sources',
        'Advanced dashboards',
        'Custom reports',
        'Priority support',
        '10GB data storage',
        'Advanced AI insights',
        'Real-time alerts',
        'API access',
        'Team collaboration'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$999',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Unlimited data sources',
        'Unlimited dashboards',
        'Custom AI models',
        'Dedicated account manager',
        'Unlimited data storage',
        'Predictive analytics',
        'Custom integrations',
        'White-label solution',
        'SLA guarantee',
        '24/7 phone support'
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: 'David Kim',
      company: 'DataDriven Corp',
      content: 'The AI insights have completely transformed how we make business decisions. Our ROI increased by 250% in just 3 months.',
      rating: 5,
      avatar: 'DK'
    },
    {
      name: 'Lisa Wang',
      company: 'GrowthTech Solutions',
      content: 'The real-time analytics help us identify opportunities instantly. We\'ve saved countless hours and made better decisions.',
      rating: 5,
      avatar: 'LW'
    },
    {
      name: 'James Rodriguez',
      company: 'Analytics Pro',
      content: 'The predictive analytics are incredibly accurate. We can now forecast trends and plan accordingly with confidence.',
      rating: 5,
      avatar: 'JR'
    }
  ];

  const dashboardTypes = [
    {
      title: 'Sales Analytics',
      description: 'Track sales performance, pipeline analysis, and revenue forecasting with AI-powered insights.',
      icon: <TrendingUp className="w-8 h-8 text-green-400" />,
      metrics: ['Revenue Growth', 'Conversion Rates', 'Sales Pipeline', 'Customer Acquisition']
    },
    {
      title: 'Marketing Analytics',
      description: 'Monitor campaign performance, customer engagement, and marketing ROI across all channels.',
      icon: <Target className="w-8 h-8 text-blue-400" />,
      metrics: ['Campaign ROI', 'Engagement Rates', 'Lead Generation', 'Brand Awareness']
    },
    {
      title: 'Financial Analytics',
      description: 'Analyze financial performance, cash flow, and profitability with automated reporting.',
      icon: <DollarSign className="w-8 h-8 text-yellow-400" />,
      metrics: ['Revenue', 'Profit Margins', 'Cash Flow', 'Expense Analysis']
    },
    {
      title: 'Customer Analytics',
      description: 'Understand customer behavior, satisfaction, and lifetime value with detailed insights.',
      icon: <Users className="w-8 h-8 text-purple-400" />,
      metrics: ['Customer Satisfaction', 'Retention Rates', 'Lifetime Value', 'Churn Analysis']
    },
    {
      title: 'Operations Analytics',
      description: 'Optimize operational efficiency with real-time monitoring and performance metrics.',
      icon: <Settings className="w-8 h-8 text-orange-400" />,
      metrics: ['Efficiency Rates', 'Process Optimization', 'Resource Utilization', 'Quality Metrics']
    },
    {
      title: 'Product Analytics',
      description: 'Track product performance, user engagement, and feature adoption with detailed analytics.',
      icon: <BarChart3 className="w-8 h-8 text-cyan-400" />,
      metrics: ['User Engagement', 'Feature Adoption', 'Product Performance', 'Usage Analytics']
    }
  ];

  const integrations = [
    { name: 'Google Analytics', logo: 'GA', color: 'bg-orange-500' },
    { name: 'Salesforce', logo: 'SF', color: 'bg-blue-500' },
    { name: 'HubSpot', logo: 'HS', color: 'bg-orange-600' },
    { name: 'Stripe', logo: 'ST', color: 'bg-purple-500' },
    { name: 'Shopify', logo: 'SH', color: 'bg-green-500' },
    { name: 'Mailchimp', logo: 'MC', color: 'bg-yellow-500' },
    { name: 'Slack', logo: 'SL', color: 'bg-purple-600' },
    { name: 'Zapier', logo: 'ZP', color: 'bg-orange-500' },
    { name: 'AWS', logo: 'AW', color: 'bg-orange-400' },
    { name: 'Google Cloud', logo: 'GC', color: 'bg-blue-500' },
    { name: 'Microsoft Azure', logo: 'AZ', color: 'bg-blue-600' },
    { name: 'MongoDB', logo: 'MG', color: 'bg-green-600' }
  ];

  return (
    <>
      <Helmet>
        <title>AI Analytics Dashboard - Real-Time Business Intelligence | Zion Tech Group</title>
        <meta name="description" content="Transform your data into actionable insights with our AI Analytics Dashboard. Real-time analytics, predictive modeling, and custom dashboards. Starting at $199/month." />
        <meta name="keywords" content="AI analytics, business intelligence, data visualization, predictive analytics, real-time dashboards, Zion Tech Group" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Zion Tech Group" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#8b5cf6" />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="AI Analytics Dashboard - Real-Time Business Intelligence" />
        <meta property="og:description" content="Transform your data into actionable insights with our AI Analytics Dashboard. Real-time analytics, predictive modeling, and custom dashboards." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/ai-analytics-dashboard" />
        <meta property="og:image" content="https://ziontechgroup.com/og-ai-analytics-dashboard.jpg" />
        <meta property="og:site_name" content="Zion Tech Group" />
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="AI Analytics Dashboard - Real-Time Business Intelligence" />
        <meta name="twitter:description" content="Transform your data into actionable insights with our AI Analytics Dashboard. Real-time analytics, predictive modeling, and custom dashboards." />
        <meta name="twitter:image" content="https://ziontechgroup.com/twitter-ai-analytics-dashboard.jpg" />
        <meta name="twitter:site" content="@ziontechgroup" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 px-4 py-12 sm:py-16 lg:py-20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-600/20 to-cyan-600/20 border border-blue-500/30 mb-6">
                <Sparkles className="w-5 h-5 text-blue-400 mr-2" />
                <span className="text-blue-300 text-sm font-medium">AI Analytics Dashboard</span>
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                AI Analytics
                <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"> Dashboard</span>
              </h1>
              <p className="text-lg sm:text-xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
                Transform your data into actionable insights with our AI-powered analytics platform. 
                Get real-time dashboards, predictive analytics, and intelligent recommendations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact" 
                  className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center group"
                >
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link 
                  to="#demo" 
                  className="border-2 border-white/30 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300 backdrop-blur-sm flex items-center justify-center"
                >
                  <Play className="w-5 h-5 mr-2" />
                  Watch Demo
                </Link>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-16 lg:mb-20">
              <div className="text-center px-2 py-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1">100+</div>
                <div className="text-gray-300 text-xs sm:text-sm">Data Sources</div>
              </div>
              <div className="text-center px-2 py-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1">50ms</div>
                <div className="text-gray-300 text-xs sm:text-sm">Response Time</div>
              </div>
              <div className="text-center px-2 py-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1">99.9%</div>
                <div className="text-gray-300 text-xs sm:text-sm">Accuracy Rate</div>
              </div>
              <div className="text-center px-2 py-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1">24/7</div>
                <div className="text-gray-300 text-xs sm:text-sm">Real-Time Updates</div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-12 sm:py-16 lg:py-20 px-4 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
                Powerful Analytics Features
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
                Everything you need to turn your data into actionable business insights
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 group">
                  <div className="mb-4 group-hover:scale-110 transition-transform duration-300 text-blue-400">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-300 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Dashboard Types Section */}
        <section className="py-12 sm:py-16 lg:py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
                Dashboard Types
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
                Pre-built dashboards for every business function
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {dashboardTypes.map((dashboard, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 group">
                  <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
                    {dashboard.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-300 transition-colors">
                    {dashboard.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    {dashboard.description}
                  </p>
                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold text-gray-400 mb-2">Key Metrics:</h4>
                    {dashboard.metrics.map((metric, metricIndex) => (
                      <div key={metricIndex} className="flex items-center text-sm text-gray-300">
                        <div className="w-2 h-2 bg-blue-400 rounded-full mr-2"></div>
                        {metric}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Integrations Section */}
        <section className="py-12 sm:py-16 lg:py-20 px-4 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
                Seamless Integrations
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
                Connect with 100+ popular tools and services
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6">
              {integrations.map((integration, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-4 border border-white/20 hover:bg-white/15 transition-all duration-300 group text-center">
                  <div className={`w-12 h-12 ${integration.color} rounded-lg flex items-center justify-center text-white font-bold text-lg mx-auto mb-3 group-hover:scale-110 transition-transform`}>
                    {integration.logo}
                  </div>
                  <h3 className="text-sm font-semibold text-white group-hover:text-blue-300 transition-colors">
                    {integration.name}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-12 sm:py-16 lg:py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
                Simple, Transparent Pricing
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the plan that fits your analytics needs. All plans include our core features.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`bg-white/10 backdrop-blur-lg rounded-2xl p-6 border transition-all duration-300 hover:bg-white/15 relative ${
                  plan.popular ? 'border-blue-500/50 ring-2 ring-blue-500/20' : 'border-white/20'
                }`}>
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-400 ml-1">{plan.period}</span>
                    </div>
                    <p className="text-gray-300 mt-2">{plan.description}</p>
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
                    className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center group ${
                      plan.popular 
                        ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white hover:from-blue-700 hover:to-cyan-700' 
                        : 'border-2 border-white/30 text-white hover:bg-white/10'
                    }`}
                  >
                    Get Started
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-12 sm:py-16 lg:py-20 px-4 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
                What Our Customers Say
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
                Join thousands of businesses that have transformed their data strategy
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full flex items-center justify-center text-white font-semibold mr-4">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">{testimonial.name}</h4>
                      <p className="text-gray-400 text-sm">{testimonial.company}</p>
                    </div>
                  </div>
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 italic">"{testimonial.content}"</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 sm:py-16 lg:py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Data Strategy?
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Start your free trial today and experience the power of AI-driven analytics. 
              No credit card required.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center group"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                to="/contact" 
                className="border-2 border-white/30 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
              >
                Contact Sales
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}