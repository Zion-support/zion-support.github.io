'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  CheckCircle, 
  Star,
  Users,
  TrendingUp,
  Shield,
  BarChart3,
  MessageSquare,
  FileText,
  Mail,
  Calendar,
  CreditCard,
  Lock,
  Zap,
  Globe,
  Smartphone,
  Database,
  Settings,
  Target,
  Award,
  Clock,
  Sparkles,
  Brain,
  Cloud,
  Wifi,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Twitter,
  PieChart,
  Activity,
  LineChart,
  TrendingDown
} from 'lucide-react';

export default function AnalyticsDashboardPage() {
  const features = [
    {
      title: 'Real-time Analytics',
      description: 'Monitor your business performance with live data updates and instant insights across all your key metrics and KPIs.',
      icon: Activity,
      benefits: ['Live data streaming', 'Instant metric updates', 'Real-time alerts', 'Custom refresh rates']
    },
    {
      title: 'Predictive Analytics',
      description: 'Leverage machine learning algorithms to forecast trends, predict customer behavior, and make data-driven decisions.',
      icon: TrendingUp,
      benefits: ['Sales forecasting', 'Customer churn prediction', 'Demand forecasting', 'Risk assessment']
    },
    {
      title: 'Custom Dashboards',
      description: 'Create personalized dashboards tailored to your business needs with drag-and-drop widgets and customizable layouts.',
      icon: BarChart3,
      benefits: ['Drag-and-drop builder', 'Custom widgets', 'Multiple layouts', 'Role-based access']
    },
    {
      title: 'Data Visualization',
      description: 'Transform complex data into clear, actionable insights with interactive charts, graphs, and visual representations.',
      icon: PieChart,
      benefits: ['Interactive charts', 'Multiple chart types', 'Drill-down capabilities', 'Export options']
    },
    {
      title: 'Export Capabilities',
      description: 'Export your data and reports in multiple formats including PDF, Excel, CSV, and share them with stakeholders.',
      icon: FileText,
      benefits: ['Multiple export formats', 'Scheduled reports', 'Automated delivery', 'Custom templates']
    },
    {
      title: 'API Integration',
      description: 'Connect with your existing tools and data sources through our comprehensive API suite and pre-built connectors.',
      icon: Database,
      benefits: ['100+ integrations', 'Custom API endpoints', 'Real-time sync', 'Webhook support']
    }
  ];

  const dashboardTypes = [
    {
      name: 'Sales Analytics',
      description: 'Track sales performance, pipeline health, and revenue trends',
      icon: TrendingUp,
      metrics: ['Revenue Growth', 'Conversion Rate', 'Average Deal Size', 'Sales Cycle Length']
    },
    {
      name: 'Marketing Analytics',
      description: 'Monitor campaign performance, lead generation, and ROI',
      icon: Target,
      metrics: ['Lead Generation', 'Campaign ROI', 'Cost Per Lead', 'Conversion Funnel']
    },
    {
      name: 'Customer Analytics',
      description: 'Understand customer behavior, satisfaction, and lifetime value',
      icon: Users,
      metrics: ['Customer Satisfaction', 'Lifetime Value', 'Churn Rate', 'Engagement Score']
    },
    {
      name: 'Financial Analytics',
      description: 'Track financial performance, expenses, and profitability',
      icon: CreditCard,
      metrics: ['Revenue', 'Profit Margins', 'Expense Tracking', 'Cash Flow']
    },
    {
      name: 'Operational Analytics',
      description: 'Monitor operational efficiency and performance metrics',
      icon: Settings,
      metrics: ['Productivity', 'Efficiency', 'Resource Utilization', 'Process Metrics']
    },
    {
      name: 'Custom Analytics',
      description: 'Create custom analytics tailored to your specific business needs',
      icon: BarChart3,
      metrics: ['Custom KPIs', 'Business Metrics', 'Industry-specific', 'Tailored Insights']
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$149',
      period: '/month',
      description: 'Perfect for small teams and startups',
      features: [
        'Up to 5 users',
        '10 data sources',
        'Basic dashboards',
        'Standard reports',
        'Email support',
        'Mobile app access'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$299',
      period: '/month',
      description: 'Ideal for growing businesses',
      features: [
        'Up to 25 users',
        'Unlimited data sources',
        'Advanced dashboards',
        'Custom reports',
        'Priority support',
        'API access',
        'Predictive analytics'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$599',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Unlimited users',
        'Unlimited data sources',
        'White-label dashboards',
        'Custom integrations',
        'Dedicated support',
        'Advanced security',
        'On-premise deployment'
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: 'David Kim',
      company: 'DataDriven Corp.',
      content: 'The predictive analytics have revolutionized our decision-making process. We can now anticipate market trends and stay ahead of the competition.',
      rating: 5,
      avatar: 'DK'
    },
    {
      name: 'Lisa Wang',
      company: 'GrowthMetrics',
      content: 'The custom dashboards are incredibly powerful. We can now visualize our data exactly how we need it, and the insights are actionable.',
      rating: 5,
      avatar: 'LW'
    },
    {
      name: 'James Rodriguez',
      company: 'AnalyticsPro',
      content: 'The real-time analytics have given us a competitive edge. We can respond to changes instantly and make data-driven decisions faster.',
      rating: 5,
      avatar: 'JR'
    }
  ];

  const stats = [
    { number: '50%', label: 'Faster Decision Making', icon: <Clock className="w-6 h-6" /> },
    { number: '85%', label: 'Accuracy in Predictions', icon: <Target className="w-6 h-6" /> },
    { number: '200%', label: 'Increase in Data Insights', icon: <TrendingUp className="w-6 h-6" /> },
    { number: '24/7', label: 'Real-time Monitoring', icon: <Activity className="w-6 h-6" /> }
  ];

  return (
    <>
      <Helmet>
        <title>AI Analytics Dashboard - Zion Tech Group | Business Intelligence & Data Visualization</title>
        <meta name="description" content="Transform your data into actionable insights with our AI-powered analytics dashboard. Features include real-time analytics, predictive modeling, custom dashboards, and data visualization." />
        <meta name="keywords" content="analytics dashboard, business intelligence, data visualization, predictive analytics, real-time analytics, Zion Tech Group" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Zion Tech Group" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#8b5cf6" />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="AI Analytics Dashboard - Zion Tech Group" />
        <meta property="og:description" content="Transform your data into actionable insights with our AI-powered analytics dashboard." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/micro-saas/analytics-dashboard" />
        <meta property="og:image" content="https://ziontechgroup.com/og-image.jpg" />
        <meta property="og:site_name" content="Zion Tech Group" />
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="AI Analytics Dashboard - Zion Tech Group" />
        <meta name="twitter:description" content="Transform your data into actionable insights with our AI-powered analytics dashboard." />
        <meta name="twitter:image" content="https://ziontechgroup.com/twitter-image.jpg" />
        <meta name="twitter:site" content="@ziontechgroup" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative pt-20 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
          {/* Animated Background */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-green-500/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-emerald-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
          </div>
          
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 mb-8">
                <BarChart3 className="w-5 h-5 text-green-400 mr-2" />
                <span className="text-green-300 text-sm font-medium">Business Intelligence Platform</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                AI Analytics{' '}
                <span className="bg-gradient-to-r from-green-400 via-emerald-500 to-cyan-500 bg-clip-text text-transparent animate-pulse">
                  Dashboard
                </span>
              </h1>
              
              <p className="text-lg sm:text-xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
                Transform your data into actionable insights with our AI-powered analytics dashboard. Get real-time analytics, predictive modeling, custom dashboards, and comprehensive data visualization.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <Link
                  to="/contact"
                  className="group bg-gradient-to-r from-green-500 to-emerald-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-green-600 hover:to-emerald-700 transition-all duration-300 flex items-center justify-center transform hover:scale-105"
                >
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="#demo"
                  className="group border-2 border-white/30 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300 flex items-center justify-center backdrop-blur-sm"
                >
                  Watch Demo
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-green-900/30">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-white mb-2 group-hover:text-green-400 transition-colors">{stat.number}</div>
                  <div className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Powerful Analytics Features
              </h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                Our AI-powered analytics platform provides everything you need to transform your data into actionable business insights.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="group bg-gradient-to-br from-slate-800/50 to-green-900/30 rounded-xl p-6 border border-green-500/20 hover:border-green-400/40 transition-all duration-300 hover:transform hover:scale-105">
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-lg mr-4">
                      <feature.icon className="w-6 h-6 text-green-400" />
                    </div>
                    <h3 className="text-xl font-semibold text-white group-hover:text-green-300 transition-colors">{feature.title}</h3>
                  </div>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-gray-400">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Dashboard Types Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/30 to-green-900/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Pre-built Dashboard Templates
              </h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                Choose from our collection of pre-built dashboard templates designed for different business functions and industries.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {dashboardTypes.map((dashboard, index) => (
                <div key={index} className="group bg-gradient-to-br from-slate-800/50 to-green-900/30 rounded-xl p-6 border border-green-500/20 hover:border-green-400/40 transition-all duration-300 hover:transform hover:scale-105">
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-lg mr-4">
                      <dashboard.icon className="w-6 h-6 text-green-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white group-hover:text-green-300 transition-colors">{dashboard.name}</h3>
                      <p className="text-sm text-gray-400">{dashboard.description}</p>
                    </div>
                  </div>
                  <ul className="space-y-2">
                    {dashboard.metrics.map((metric, metricIndex) => (
                      <li key={metricIndex} className="flex items-center text-sm text-gray-400">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {metric}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Choose Your Plan
              </h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                Select the perfect plan for your analytics needs. All plans include our core features and 24/7 support.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`group bg-gradient-to-br from-slate-800/50 to-green-900/30 rounded-xl p-6 border border-green-500/20 hover:border-green-400/40 transition-all duration-300 hover:transform hover:scale-105 relative ${plan.popular ? 'ring-2 ring-green-400/50' : ''}`}>
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <div className="flex items-center justify-center mb-2">
                      <span className="text-4xl font-bold text-green-400">{plan.price}</span>
                      <span className="text-gray-400 ml-1">{plan.period}</span>
                    </div>
                    <p className="text-gray-300 text-sm">{plan.description}</p>
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Link
                    to="/contact"
                    className="w-full bg-gradient-to-r from-green-600 to-emerald-600 text-white py-3 rounded-lg font-semibold hover:from-green-700 hover:to-emerald-700 transition-all duration-300 flex items-center justify-center group"
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
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/30 to-green-900/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                What Our Customers Say
              </h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                Join thousands of businesses that have transformed their data analysis with our AI-powered analytics platform.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="group bg-gradient-to-br from-slate-800/50 to-green-900/30 rounded-xl p-6 border border-white/20 hover:border-green-400/40 transition-all duration-300 hover:transform hover:scale-105">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center text-white font-semibold mr-3">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <p className="font-semibold text-white">{testimonial.name}</p>
                      <p className="text-gray-400 text-sm">{testimonial.company}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-2xl p-8 lg:p-12 border border-green-500/30">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Ready to Transform Your Data Analysis?
              </h2>
              <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
                Start your free trial today and experience the power of AI-driven business intelligence and analytics.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="group bg-gradient-to-r from-green-500 to-emerald-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-green-600 hover:to-emerald-700 transition-all duration-300 flex items-center justify-center transform hover:scale-105"
                >
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/pricing"
                  className="group border-2 border-white/30 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300 flex items-center justify-center backdrop-blur-sm"
                >
                  View Pricing
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}