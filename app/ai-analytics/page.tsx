<<<<<<< HEAD
'use client';
<<<<<<< HEAD
import React, { useState, useEffect, lazy } from 'react';
import { BarChart, TrendingUp, Users, Target, Zap, CheckCircle, ArrowRight, Star, Award, Brain, Cpu, Database, Cloud, Code, Smartphone, Settings, Lock, Building, Factory, Car, Plane, Ship, Train, Home, Heart, Stethoscope, GraduationCap, Briefcase, Wrench, Hammer, Paintbrush, Scissors, BookOpen, Calculator, Calendar, Clock3, Compass, Navigation as NavIcon, PieChart, TrendingDown, Activity, Phone, Mail, MapPin, Eye, Sparkles, Globe, Shield } from 'lucide-react';
import SEOOptimizer from '../components/SEOOptimizer';
=======
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { CheckCircle, TrendingUp, Brain, BarChart, Target, Zap, Users, Star, Award, Activity, PieChart, Globe, Shield, ArrowRight } from 'lucide-react';
>>>>>>> origin/main

const AIAnalyticsPage: React.FC = () => {
  const features = [
    {
=======
'use client',
import React, { useState, useEffect } from 'react',
import { BarChart, TrendingUp, Users, Target, Zap, CheckCircle, ArrowRight, Star, Award, Brain, Cpu, Database, Cloud, Code, Smartphone, Settings, Lock, Building, Factory, Car, Plane, Ship, Train, Home, Heart, Stethoscope, GraduationCap, Briefcase, Wrench, Hammer, Paintbrush, Scissors, BookOpen, Calculator, Calendar, Clock3, Compass, Navigation as NavIcon, PieChart, TrendingDown, Activity, Phone, Mail, MapPin, Eye, Sparkles, Globe, Shield } from 'lucide-react',
import Navigation from '../components/Navigation',
import Footer from '../components/Footer',
import SEOOptimizer from '../components/SEOOptimizer',
import React, { lazy } from 'react',
import { CheckCircle, TrendingUp, Brain, BarChart } from 'lucide-react',

const Navigation = lazy(() => import('../components/Navigation')),
const Footer = lazy(() => import('../components/Footer')),

const AIAnalyticsPage: React.FC = React.memo((props) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Insights',
      description: 'Get intelligent insights and recommendations powered by advanced machine learning algorithms.',
      benefits: ['Predictive analytics', 'Anomaly detection', 'Trend analysis', 'Smart recommendations']
    },
    {
      icon: BarChart,
      title: 'Real-Time Dashboards',
      description: 'Monitor your business metrics in real-time with customizable, interactive dashboards.',
      benefits: ['Live data updates', 'Custom widgets', 'Interactive charts', 'Mobile responsive']
    },
    {
      icon: Target,
      title: 'Automated Reporting',
      description: 'Generate comprehensive reports automatically with AI-optimized content and visualizations.',
      benefits: ['Scheduled reports', 'Custom templates', 'PDF export', 'Email delivery']
<<<<<<< HEAD
    },
    {
      icon: TrendingUp,
      title: 'Real-time Analytics',
      description: 'Get instant insights with real-time data processing and visualization',
      benefits: ['Live dashboards', 'Instant updates', 'Real-time alerts']
    },
    {
      icon: Database,
      title: 'Data Integration',
      description: 'Seamlessly connect with 100+ data sources and platforms',
      benefits: ['API integrations', 'Database connections', 'File uploads']
    },
    {
=======
    },
    {
>>>>>>> origin/main
      icon: TrendingUp,
      icon: BarChart,
      title: 'Real-time Analytics',
      description: 'Get instant insights with real-time data processing and visualization',
      benefits: ['Live dashboards', 'Instant updates', 'Real-time alerts']
    },
    {
>>>>>>> cursor/fix-errors-and-merge-to-main-e3dc
      icon: Brain,
      title: 'AI-Powered Insights',
      description: 'Get intelligent insights and recommendations powered by advanced machine learning algorithms.',
      benefits: ['Predictive analytics', 'Anomaly detection', 'Trend analysis', 'Smart recommendations']
    },
    {
      icon: BarChart,
      title: 'Real-Time Dashboards',
      description: 'Monitor your business metrics in real-time with customizable, interactive dashboards.',
      benefits: ['Live data updates', 'Custom widgets', 'Interactive charts', 'Mobile responsive']
    },
    {
      icon: Target,
      title: 'Automated Reporting',
      description: 'Generate comprehensive reports automatically with AI-optimized content and visualizations.',
      benefits: ['Scheduled reports', 'Custom templates', 'PDF export', 'Email delivery']
    },
    {
      icon: TrendingUp,
<<<<<<< HEAD
      title: 'Performance Analytics',
      description: 'Track and analyze performance metrics across all your business operations.',
      benefits: ['KPI tracking', 'Performance monitoring', 'Efficiency metrics', 'Growth analysis']
    },
    {
      icon: Activity,
      title: 'Real-time Monitoring',
      description: 'Monitor your systems and processes in real-time with instant alerts and notifications.',
      benefits: ['Live monitoring', 'Instant alerts', 'System health', 'Performance tracking']
    },
    {
      icon: PieChart,
      title: 'Data Visualization',
      description: 'Transform complex data into clear, actionable insights with advanced visualization tools.',
      benefits: ['Interactive charts', 'Custom visualizations', 'Data storytelling', 'Export options']
=======
      title: 'Performance Tracking',
      description: 'Track KPIs and performance metrics with advanced analytics and benchmarking.',
      benefits: ['KPI monitoring', 'Goal tracking', 'Benchmarking', 'Performance alerts']
    }
  ];

  const analyticsTypes = [
    {
      title: 'Sales Analytics',
      description: 'Track sales performance, pipeline health, and revenue trends.',
      icon: TrendingUp,
      metrics: ['Revenue tracking', 'Sales forecasting', 'Pipeline analysis', 'Conversion rates']
    },
    {
      title: 'Marketing Analytics',
      description: 'Measure marketing campaign effectiveness and ROI.',
      icon: Target,
      metrics: ['Campaign performance', 'Lead generation', 'Customer acquisition', 'ROI analysis']
    },
    {
      title: 'Customer Analytics',
      description: 'Understand customer behavior and preferences.',
      icon: Users,
      metrics: ['Customer segmentation', 'Behavior analysis', 'Retention rates', 'Lifetime value']
    },
    {
      title: 'Financial Analytics',
      description: 'Monitor financial health and profitability.',
      icon: BarChart,
      metrics: ['Revenue analysis', 'Cost tracking', 'Profit margins', 'Cash flow']
<<<<<<< HEAD
=======
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security with encryption and compliance standards',
      benefits: ['Data encryption', 'Access controls', 'Audit logs']
    },
    {
      icon: Zap,
      title: 'Automated Reports',
      description: 'Generate and schedule automated reports for stakeholders',
      benefits: ['Scheduled reports', 'Email delivery', 'Custom formats']
>>>>>>> cursor/fix-errors-and-merge-to-main-e3dc
>>>>>>> origin/main
    }
  ],

  const benefits = [
<<<<<<< HEAD
    'Increase data accuracy by 95%',
    'Reduce analysis time by 80%',
    'Improve decision-making speed by 70%',
    'Lower operational costs by 40%',
    'Enable real-time business insights',
    'Automate routine analytics tasks',
    'Scale analytics across departments',
    'Enhance competitive advantage'
  ];
=======
    'Reduce data analysis time by 90%',
    'Increase decision-making speed by 5x',
    'Improve accuracy with AI-powered insights',
    'Automate reporting and dashboards',
    'Scale analytics across all departments',
    'Integrate with existing systems seamlessly'
  ],

  const pricing = [
    {
      name: 'Starter',
      price: '$299',
      period: '/month',
      description: 'Perfect for small businesses getting started with AI analytics',
      features: [
        'Up to 5 data sources',
        'Basic dashboards',
        'Standard reports',
        'Email support',
        '1GB data storage',
        'Real-time processing'
      ],
<<<<<<< HEAD
=======
      popular: false,
    },
    {
      name: 'Professional'
      price: '$79',
      period: '/month',
      description: 'Ideal for growing businesses with advanced analytics needs',
      features: [,
        'Up to 25 dashboards',
        'Advanced AI insights',
      cta: 'Start Free Trial',
>>>>>>> origin/main
      popular: false
    },
    {
      name: 'Professional',
      price: '$599',
      period: '/month',
      description: 'Advanced features for growing businesses and teams',
      features: [
        'Up to 25 data sources',
        'Advanced dashboards',
        'Custom reports',
        'Priority support',
        '10GB data storage',
        'AI-powered insights',
        'API access',
        'Team collaboration'
      ],
<<<<<<< HEAD
=======
      popular: true,
    },
    {
      name: 'Enterprise'
      price: '$199',
      period: '/month',
      description: 'Comprehensive solution for large organizations',
      features: [,
        'Unlimited dashboards',
        'Full AI suite',
        'White-label reports',
        '24/7 dedicated support',
        'Unlimited data points',
        'Custom integrations',
        'SLA guarantee'
      ],
      popular: false,
      cta: 'Start Free Trial',
>>>>>>> origin/main
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$1,299',
      period: '/month',
      description: 'Full-featured solution for large organizations',
      features: [
        'Unlimited data sources',
        'Custom dashboards',
        'Advanced analytics',
        '24/7 support',
        'Unlimited storage',
        'Custom AI models',
        'White-label options',
        'Dedicated account manager'
      ],
      cta: 'Contact Sales',
      popular: false
    }
  ],
>>>>>>> cursor/fix-errors-and-merge-to-main-e3dc

  const useCases = [
    {
<<<<<<< HEAD
      title: 'E-commerce Analytics',
      description: 'Track customer behavior, conversion rates, and sales performance',
      icon: '🛒',
      metrics: ['Conversion rate', 'Average order value', 'Customer lifetime value']
    },
    {
      title: 'Marketing Performance',
      description: 'Measure campaign effectiveness and optimize marketing spend',
      icon: '📈',
      metrics: ['ROI', 'Click-through rate', 'Cost per acquisition']
    },
    {
      title: 'Financial Reporting',
      description: 'Monitor revenue, expenses, and profitability in real-time',
      icon: '💰',
      metrics: ['Revenue growth', 'Profit margins', 'Cash flow']
=======
      title: 'Business Intelligence',
      description: 'Transform raw data into actionable business insights',
      icon: '📊'
    },
    {
      title: 'Performance Monitoring',
      description: 'Track and monitor business performance in real-time',
      icon: '📈'
    },
    {
      title: 'Predictive Analytics',
      description: 'Predict future trends and outcomes with AI',
      icon: '🔮'
    },
    {
<<<<<<< HEAD
      title: 'Customer Analytics',
      description: 'Understand customer behavior and preferences',
      icon: '👥'
=======
      industry: 'Finance',
      icon: CreditCard,
      description: 'Risk assessment, fraud detection, and investment analysis',
      metrics: ['Risk scores', 'Fraud detection rates', 'Portfolio performance']
>>>>>>> origin/main
    }
  ],

  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'TechCorp',
      role: 'CEO',
      quote: 'The AI analytics platform transformed our decision-making process. We now have insights we never had before.',
      rating: 5,
      image: '👩‍💼'
>>>>>>> cursor/fix-errors-and-merge-to-main-e3dc
    },
    {
<<<<<<< HEAD
      name: 'Michael Chen',
      company: 'DataFlow Inc',
      role: 'CTO',
      quote: 'Implementation was seamless and the results were immediate. Our team productivity increased by 300%.',
      rating: 5,
      image: '👨‍💻'
=======
      title: 'Financial Analytics',
      description: 'Monitor financial performance and predict trends',
      icon: '💰'
>>>>>>> origin/main
    },
    {
      title: 'Operational Analytics',
      description: 'Optimize operations with data-driven insights',
      icon: '⚙️'
    }
  ],

  return (
    <>
      <Helmet>
        <title>AI Analytics - Zion Tech Group</title>
        <meta name="description" content="Transform your data into actionable insights with our AI Analytics solution. Advanced analytics, real-time monitoring, and predictive modeling for better business decisions." />
        <meta name="keywords" content="AI analytics, business intelligence, data analysis, predictive analytics, real-time monitoring, data visualization" />
      </Helmet>

      <Navigation />
<<<<<<< HEAD

      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mb-8">
              <Brain className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI Analytics
=======
      
<<<<<<< HEAD
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
=======
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg matrix-rain particle-field"></div>
>>>>>>> origin/main
        <main className="container mx-auto px-4 py-16 pt-24">
          {/* Hero Section */}
          <section className={`text-center mb-16 transition-all duration-1000 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <div className="text-6xl mb-6 animate-bounce">📊</div>
<<<<<<< HEAD
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              AI Analytics Platform
=======
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 holographic-text cyber-text glitch" data-text="AI Analytics Platform">
              AI Analytics Platform</h1>
>>>>>>> origin/main
            </h1>
            <p className="text-xl md:text-2xl text-cyan-400 mb-8 font-medium">
              Transform Data into Actionable Intelligence
            </p>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">
              Our AI-powered analytics platform delivers real-time insights, predictive analytics, and custom dashboards 
              that help businesses make data-driven decisions and achieve unprecedented growth.
            </p>
            
            {/* Key Stats */}
<<<<<<< HEAD
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-12">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">95%</div>
                <div className="text-gray-300">Accuracy Rate</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">10x</div>
                <div className="text-gray-300">Faster Insights</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
                <div className="text-3xl font-bold text-pink-400 mb-2">300%</div>
                <div className="text-gray-300">ROI Increase</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">24/7</div>
                <div className="text-gray-300">Monitoring</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Start Free Trial
              </button>
              <button className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                View Demo
              </button>
            </div>
          </section>

          {/* Features Section */}
          <section className="mb-20">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Powerful AI Analytics Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Leverage cutting-edge AI technology to unlock insights from your data
              </p>
            </div>

=======
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-12"></div>
              <div className="cyber-card p-6 text-center"></div>
                <div className="text-3xl font-bold text-cyan-400 neon-text mb-2">95%</div>
                <div className="text-gray-300">Accuracy Rate</div>
              </div>
              <div className="cyber-card p-6 text-center"></div>
                <div className="text-3xl font-bold text-purple-400 neon-text mb-2">10x</div>
                <div className="text-gray-300">Faster Insights</div>
              </div>
              <div className="cyber-card p-6 text-center"></div>
                <div className="text-3xl font-bold text-pink-400 neon-text mb-2">300%</div>
                <div className="text-gray-300">ROI Increase</div>
  ]
  const integrations = [
    { name: 'Google Analytics', icon: 'bar-chart' },
    { name: 'Salesforce', icon: '☁️' },
    { name: 'HubSpot', icon: 'target' },
    { name: 'Shopify', icon: '🛒' },
    { name: 'Stripe', icon: '💳' },
    { name: 'Mailchimp', icon: 'Email:' },
    { name: 'Facebook Ads', icon: 'smartphone' },
    { name: 'Google Ads', icon: 'search' }
  ]
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
      <Navigation >{/* Hero Section */}</Navigation>
      </Navigation><section className="pt-20 pb-16 px-4">
        <div className="max-w-7xl mx-auto"></section>
          <div className="text-center mb-16"></div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 neon-text">AI-Powered Analytics Dashboard</h1><p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">Transform your data into actionable insights with our intelligent analytics platform. Make data-driven decisions with AI-powered recommendations.</p>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
              <button className="cyber-button px-8 py-4 text-lg" aria-label="Start Free Trial" tabIndex="0">Start Free Trial<button className="cyber-button-outline px-8 py-4 text-lg" aria-label="View Demo" tabIndex="0">View Demo</button>
  return(<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
      <Navigation />
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4">
        <div className="max-w-7xl mx-auto"></div>
          <div className="text-center mb-16"></div>
            <h1 className="text-5xl md: text-6xl font-bold text-white mb-6 neon-text">
              AI-Powered Analytics Dashboard,</h1>
>>>>>>> cursor/fix-errors-and-merge-to-main-e3dc
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your data into actionable insights with our advanced AI Analytics solution. 
              Real-time monitoring, predictive modeling, and intelligent reporting for better business decisions.
            </p>
<<<<<<< HEAD
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-indigo-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center">
                Start Analyzing
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
              <button className="border border-indigo-400 text-indigo-300 px-8 py-4 rounded-lg font-semibold hover:bg-indigo-500 hover:text-white transition-all duration-300">
                View Demo
              </button>
=======
            <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
              <button className="cyber-button px-8 py-4 text-lg" aria-label="Start Free Trial" tabIndex="0">
                Start Free Trial,
              </button>
              <button className="cyber-button-outline px-8 py-4 text-lg" aria-label="View Demo" tabIndex="0">
                View Demo,
              </button>
            </div>,
          </div>,
,
          {/* Stats */}
          <div className="grid grid-cols-2 md: grid-cols-4 gap-8 mb-16"></div>
            <div className="text-center"></div>
              <div className="text-4xl font-bold text-cyan-400 mb-2">95%<div className="text-gray-300">Faster Insights</div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"></div>
            <div className="text-center"></div>
              <div className="text-4xl font-bold text-cyan-400 mb-2">95%</div><div className="text-gray-300">Faster Insights</div>
            </div>
            <div className="text-center"></div>
              <div className="text-4xl font-bold text-cyan-400 mb-2">50+</div><div className="text-gray-300">Integrations</div>
            </div>
            <div className="text-center"></div>
              <div className="text-4xl font-bold text-cyan-400 mb-2">99.9%</div><div className="text-gray-300">Uptime</div>
            </div>
            <div className="text-center"></div>
              <div className="text-4xl font-bold text-cyan-400 mb-2">24/7<div className="text-gray-300">Real-time Data</div>
            <div className="text-center"></div>
              <div className="text-4xl font-bold text-cyan-400 mb-2">24/7</div><div className="text-gray-300">Real-time Data</div>
>>>>>>> cursor/fix-errors-and-merge-to-main-e3dc
            </div>
          </div>
        </section>

<<<<<<< HEAD
        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Advanced AI Analytics Features
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Our AI Analytics solution combines cutting-edge technology with intuitive design
              </p>
=======
              <div className="text-4xl font-bold text-cyan-400 mb-2">24/7</div>
              <div className="text-gray-300">Real-time Data</div>
            </div>,
          </div>,
        </div>,
      </section>,
,
      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto"></div>
          <div className="text-center mb-16"></div>
            <h2 className="text-4xl font-bold text-white mb-4">Powerful Analytics Features<p className="text-xl text-gray-300">Everything you need to understand your business data<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">{features.map((feature, index) => (</div>
            <h2 className="text-4xl font-bold text-white mb-4">Powerful Analytics Features</h2>
            <p className="text-xl text-gray-300">Everything you need to understand your business data</p>)
          </div>)
)
          <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-4 gap-8">),
            {features.map((feature, index) => (</div>
              <div key={index} className="cyber-card p-6"></div>
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mb-4"></div>
        <div className="max-w-7xl mx-auto"></section>
          <div className="text-center mb-16"></div>
            <h2 className="text-4xl font-bold text-white mb-4">Powerful Analytics Features</h2><p className="text-xl text-gray-300">Everything you need to understand your business data</p><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">{features.map((feature, index) => (</div>
              <div key={index} className="cyber-card p-6"></div>
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mb-4"></div>
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 mb-4">{feature.description}</p><ul className="space-y-2" role="list">{feature.benefits.map((benefit, idx) => (</ul>
                    <li key={idx} className="flex items-center text-sm text-gray-400" style={{ color: "#9CA3AF" }}>
                      <CheckCircle className="w-4 h-4 text-cyan-400 mr-2" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Analytics Types Section */}
      <section className="py-16 px-4 bg-slate-800/50">
        <div className="max-w-7xl mx-auto"></div>
          <div className="text-center mb-16"></div>
            <h2 className="text-4xl font-bold text-white mb-4">Comprehensive Analytics Coverage<p className="text-xl text-gray-300">Track every aspect of your business with specialized analytics<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">{analyticsTypes.map((type, index) => (</div>
            <h2 className="text-4xl font-bold text-white mb-4">Comprehensive Analytics Coverage</h2>
            <p className="text-xl text-gray-300">Track every aspect of your business with specialized analytics</p>
          </div>

          <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-4 gap-8">,
            {analyticsTypes.map((type, index) => (</div>
              <div key={index} className="cyber-card p-6"></div>
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mb-4"></div>
        <div className="max-w-7xl mx-auto"></section>
          <div className="text-center mb-16"></div>
            <h2 className="text-4xl font-bold text-white mb-4">Comprehensive Analytics Coverage</h2><p className="text-xl text-gray-300">Track every aspect of your business with specialized analytics</p><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">{analyticsTypes.map((type, index) => (</div>
              <div key={index} className="cyber-card p-6"></div>
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mb-4"></div>
                  <type.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{type.title}</h3>
                <p className="text-gray-300 mb-4">{type.description}</p><ul className="space-y-1" role="list">{type.metrics.map((metric, idx) => (<li key={idx} className="text-sm text-gray-400" style={{ color: "#9CA3AF" }}>• {metric}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

      {/* Integrations Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto"></div>
          <div className="text-center mb-16"></div>
            <h2 className="text-4xl font-bold text-white mb-4">Seamless Integrations<p className="text-xl text-gray-300">Connect with your favorite tools and platforms<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">{integrations.map((integration, index) => (</div>
            <h2 className="text-4xl font-bold text-white mb-4">Seamless Integrations</h2>
            <p className="text-xl text-gray-300">Connect with your favorite tools and platforms</p>
          </div>

          <div className="grid grid-cols-2 md: grid-cols-4 lg:grid-cols-8 gap-6">,
            {integrations.map((integration, index) => (</div>
              <div key={index} className="cyber-card p-4 text-center"></div>
                <div className="text-3xl mb-2">{integration.icon}<div className="text-sm text-gray-300">{integration.name}</div>
        <div className="max-w-7xl mx-auto"></section>
          <div className="text-center mb-16"></div>
            <h2 className="text-4xl font-bold text-white mb-4">Seamless Integrations</h2><p className="text-xl text-gray-300">Connect with your favorite tools and platforms</p><div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">{integrations.map((integration, index) => (</div>
              <div key={index} className="cyber-card p-4 text-center"></div>
                <div className="text-3xl mb-2">{integration.icon}</div><div className="text-sm text-gray-300">{integration.name}</div>
              </div>
              <div className="cyber-card p-6 text-center"></div>
                <div className="text-3xl font-bold text-green-400 neon-text mb-2">24/7</div>
                <div className="text-gray-300">Real-time Monitoring</div>
              </div>
>>>>>>> cursor/fix-errors-and-merge-to-main-e3dc
            </div>
>>>>>>> origin/main
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
<<<<<<< HEAD
              {features.map((feature, index) => (
<<<<<<< HEAD
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300">
                  <div className="text-4xl mb-4">
                    <feature.icon className="text-cyan-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300 mb-6">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-gray-300">
                        <CheckCircle className="text-green-400 mr-2 w-4 h-4" />
=======
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg mb-4">
                    <feature.icon className="w-6 h-6 text-white" />
=======
              {features.map((feature, index) => (</div>
                <div key={feature.title} className={`cyber-card p-8 hover:scale-105 transition-all duration-300 ${
                  isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`} style={{ transitionDelay: `${index * 100}ms` }}></div>
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-6"></div>
                    <feature.icon className="w-8 h-8 text-white" />
>>>>>>> cursor/fix-errors-and-merge-to-main-e3dc
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-indigo-400 mr-2 flex-shrink-0" />
>>>>>>> origin/main
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

<<<<<<< HEAD
          {/* Analytics Types Section */}
          <section className="mb-20">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Comprehensive Analytics Solutions
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Cover every aspect of your business with specialized analytics modules
              </p>
=======
<<<<<<< HEAD
        {/* Use Cases Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Applications & Use Cases
=======
          {/* Pricing Section */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center neon-text">
              Simple, Transparent Pricing
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {pricingPlans.map((plan, index) => (</div>
                <div key={plan.name} className={`cyber-card p-8 relative hover:scale-105 transition-all duration-300 ${
                  plan.popular ? 'border-2 border-cyan-400' : ''
                } ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} 
                style={{ transitionDelay: `${index * 100}ms` }}>
                  {plan.popular && (</div>
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2"></div>
                      <span className="bg-gradient-to-r from-cyan-400 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-bold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-6"></div>
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <div className="text-4xl font-bold text-cyan-400 mb-2">
                      {plan.price}</div>
                      <span className="text-lg text-gray-400">{plan.period}</span>
                    </div>
                    <p className="text-gray-300 text-sm">{plan.description}</p>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href="/contact"
                    className={`w-full text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                      plan.popular
                        ? 'cyber-button'
                        : 'border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900'
                    }`}
                  >
                    {plan.cta}
                  </a>
                </div>
              ))}
>>>>>>> origin/main
            </div>

<<<<<<< HEAD
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {analyticsTypes.map((type, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                  <div className="flex items-center mb-4">
                    <type.icon className="text-cyan-400 mr-4 w-8 h-8" />
                    <h3 className="text-2xl font-bold text-white">{type.title}</h3>
                  </div>
                  <p className="text-gray-300 mb-6">{type.description}</p>
                  <div className="grid grid-cols-2 gap-2">
                    {type.metrics.map((metric, idx) => (
                      <div key={idx} className="bg-white/5 rounded-lg p-3 text-center">
                        <span className="text-cyan-400 font-semibold">{metric}</span>
=======
          {/* Use Cases Section */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center neon-text">
              Industry Use Cases
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {useCases.map((useCase, index) => (</div>
                <div key={useCase.industry} className={`cyber-card p-6 text-center hover:scale-105 transition-all duration-300 ${
                  isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`} style={{ transitionDelay: `${index * 100}ms` }}></div>
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4"></div>
                    <useCase.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3">{useCase.industry}</h3>
                  <p className="text-gray-300 text-sm mb-4">{useCase.description}</p>
                  
                  <div className="space-y-1">
                    {useCase.metrics.map((metric, idx) => (</div>
                      <div key={idx} className="text-xs text-cyan-400 bg-cyan-400/20 px-2 py-1 rounded">
                        {metric}</div>
>>>>>>> origin/main
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Pricing Section */}
          <section className="mb-20">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Choose Your Plan
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Flexible pricing options to fit your business needs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {pricing.map((plan, index) => (
                <div key={index} className={`bg-white/10 backdrop-blur-sm rounded-2xl p-8 relative ${
                  plan.popular ? 'ring-2 ring-cyan-400 scale-105' : ''
                }`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-bold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <div className="text-4xl font-bold text-cyan-400 mb-2">
                      {plan.price}<span className="text-lg text-gray-400">{plan.period}</span>
                    </div>
                    <p className="text-gray-300">{plan.description}</p>
                  </div>
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-300">
                        <CheckCircle className="text-green-400 mr-3 w-5 h-5" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button className={`w-full py-4 px-6 rounded-lg font-bold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white'
                      : 'border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white'
                  }`}>
                    {plan.cta || 'Get Started'}
                  </button>
                </div>
              ))}
            </div>
          </section>

          {/* Testimonials Section */}
          <section className="mb-20">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                What Our Clients Say
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Join thousands of businesses already using our AI analytics platform
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
<<<<<<< HEAD
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                  <div className="flex items-center mb-4">
                    <div className="text-4xl mr-4">{testimonial.image}</div>
                    <div>
                      <h4 className="text-lg font-bold text-white">{testimonial.name}</h4>
                      <p className="text-cyan-400">{testimonial.role}, {testimonial.company}</p>
                    </div>
                  </div>
                  <p className="text-gray-300 mb-4 italic">"{testimonial.quote}"</p>
                  <div className="flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="text-yellow-400 w-5 h-5" />
=======
              {testimonials.map((testimonial, index) => (</div>
                <div key={testimonial.name} className={`cyber-card p-6 ${
                  isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`} style={{ transitionDelay: `${index * 100}ms` }}></div>
                  <div className="flex items-center mb-4"></div>
                    <div className="text-4xl mr-4">{testimonial.image}</div>
                    <div></div>
                      <h4 className="text-white font-semibold">{testimonial.name}</h4>
                      <p className="text-cyan-400 text-sm">{testimonial.role}</p>
                      <p className="text-gray-400 text-sm">{testimonial.company}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (</div>
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
>>>>>>> origin/main
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* CTA Section */}
<<<<<<< HEAD
          <section className="text-center">
            <div className="bg-gradient-to-r from-cyan-500/20 to-purple-600/20 backdrop-blur-sm rounded-2xl p-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Transform Your Data?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Start your free trial today and experience the power of AI-driven analytics
=======
          <section className="text-center py-16">
            <div className="cyber-card p-12 max-w-4xl mx-auto"></div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 neon-text">
                Ready to Transform Your Data into Intelligence?
>>>>>>> cursor/fix-errors-and-merge-to-main-e3dc
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                From startups to enterprises, our AI Analytics solution serves diverse industries
>>>>>>> origin/main
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {useCases.map((useCase, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 text-center">
                  <div className="text-4xl mb-4">{useCase.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-3">{useCase.title}</h3>
                  <p className="text-gray-300">{useCase.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose Our AI Analytics?
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Experience the future of data analytics with our revolutionary AI technology
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg mb-4">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-white font-medium">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl p-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Transform Your Data?
              </h2>
              <p className="text-xl text-indigo-100 mb-8">
                Join thousands of businesses who are already using our AI Analytics solution
              </p>
<<<<<<< HEAD
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
<<<<<<< HEAD
                <button className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
=======
                <button className="bg-white text-indigo-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center">
                  Get Started Now
                  <ArrowRight className="ml-2 w-5 h-5" />
                </button>
                <button className="border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-all duration-300">
                  Schedule Demo
=======
              <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
                <a
                  href="/contact"
                  className="cyber-button inline-flex items-center px-8 py-4 text-lg"
                >
                  <Phone className="w-5 h-5 mr-2" />
>>>>>>> origin/main
                  Start Free Trial
                </button>
                <button className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                  Schedule Demo
                </button>
              </div>
            </div>
          </section>
        </main>
      </div>
<<<<<<< HEAD

      <Footer />
    </>
  );
});

AIAnalyticsPage.displayName = 'AIAnalyticsPage';
=======
      
      {/* Pricing Section */}
      <section className="py-16 px-4 bg-slate-800/50">
        <div className="max-w-7xl mx-auto"></div>
          <div className="text-center mb-16"></div>
            <h2 className="text-4xl font-bold text-white mb-4">Simple, Transparent Pricing<p className="text-xl text-gray-300">Choose the plan that fits your analytics needs<div className="grid grid-cols-1 md:grid-cols-3 gap-8">{pricingPlans.map((plan, index) => (<div key={index} className={`cyber-card p-8 relative ${plan.popular ? 'ring-2 ring-cyan-500' : ''}`}>{plan.popular && (</div>
            <h2 className="text-4xl font-bold text-white mb-4">Simple, Transparent Pricing</h2>
            <p className="text-xl text-gray-300">Choose the plan that fits your analytics needs</p>
          </div>

          <div className="grid grid-cols-1 md: grid-cols-3 gap-8">,
            {pricingPlans.map((plan, index) => (</div>
              <div key={index} className={`cyber-card p-8 relative ${plan.popular ? 'ring-2 ring-cyan-500' : ''}`}>
                {plan.popular && (</div>
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2"></div>
                    <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold"><span className="sr-only">Screen reader: </span>
                      Most Popular,
                    </span>,
                  </div>,
        <div className="max-w-7xl mx-auto"></section>
          <div className="text-center mb-16"></div>
            <h2 className="text-4xl font-bold text-white mb-4">Simple, Transparent Pricing</h2><p className="text-xl text-gray-300">Choose the plan that fits your analytics needs</p><div className="grid grid-cols-1 md:grid-cols-3 gap-8">{pricingPlans.map((plan, index) => (</div><div key={index} className={`cyber-card p-8 relative ${plan.popular ? 'ring-2 ring-cyan-500' : ''}`}>{plan.popular && (</div>
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2"></div>
                    <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold"></span><span className="sr-only">Screen reader: </span>
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-6"></div>
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3><div className="text-4xl font-bold text-cyan-400 mb-2">{plan.price}</div>
                    <span className="text-lg text-gray-400" style={{ color: "#9CA3AF" }}></span><span className="sr-only">Screen reader: </span>{plan.period}<p className="text-gray-300">{plan.description}</p><ul className="space-y-3 mb-8" role="list">{plan.features.map((feature, idx) => (</ul>
                    <li key={idx} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-cyan-400 mr-3" >{feature}</CheckCircle>
                    </CheckCircle>
                  ))}
                <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all ${
                  plan.popular
                    ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700'
                    : 'bg-slate-700 text-white hover:bg-slate-600'
                }`} aria-label="Get Started" tabIndex="0">Get Started</button>
                  plan.popular,
                    ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover: from-cyan-600 hover:to-purple-700'}
                    : 'bg-slate-700 text-white hover:bg-slate-600'}
                }`} aria-label="Get Started" tabIndex="0">
                  Get Started,
>>>>>>> cursor/fix-errors-and-merge-to-main-e3dc
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

<<<<<<< HEAD
=======
      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-purple-600/20 to-blue-600/20">
        <div className="max-w-4xl mx-auto text-center"></section>
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Data?</h2><p className="text-xl text-gray-300 mb-8">Join thousands of businesses using AI analytics to make smarter decisions and drive growth.</p>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
            <button className="cyber-button px-8 py-4 text-lg" aria-label="Start Free Trial" tabIndex="0">Start Free Trial<button className="cyber-button-outline px-8 py-4 text-lg" aria-label="Contact Sales" tabIndex="0">Contact Sales</button>
          <div className="flex flex-col sm: flex-row gap-4 justify-center"></div>
            <button className="cyber-button px-8 py-4 text-lg" aria-label="Start Free Trial" tabIndex="0">
              Start Free Trial,
            </button>
            <button className="cyber-button-outline px-8 py-4 text-lg" aria-label="Contact Sales" tabIndex="0">
              Contact Sales,
            </button>
          </div>
        </div>
      </section>

      <Footer />,
    </div>,
>>>>>>> cursor/fix-errors-and-merge-to-main-e3dc
      <Footer />
    </>
  ),
},
>>>>>>> origin/main

<<<<<<< HEAD
export default AIAnalyticsPage;
=======
export default AIAnalyticsPage,
>>>>>>> cursor/fix-errors-and-merge-to-main-e3dc
