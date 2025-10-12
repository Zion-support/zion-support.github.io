import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { 
  ArrowRight, Zap, BarChart3, CheckCircle, Star, Clock, Users, 
  Sparkles, Target, Award, Lightbulb, Globe, Shield, 
  MessageCircle, Mail, Phone, MapPin, Play, Pause, Download, Upload,
  Edit, Copy, Share, Bookmark, Heart, ThumbsUp, RefreshCw, Settings,
  Palette, Type, Image, Video, Music, Code, Database, Cloud, Lock,
  TrendingUp, PieChart, LineChart, Activity, Eye, Filter, Search,
  Calendar, DollarSign, Percent, ArrowUp, ArrowDown, Maximize
} from 'lucide-react'

export default function ZionAnalyticsProPage() {
  const [selectedPlan, setSelectedPlan] = useState('pro')

  const features = [
    {
      icon: <BarChart3 className="w-6 h-6 text-cyan-400" />,
      title: 'Real-Time Analytics',
      description: 'Live data visualization with instant updates and interactive dashboards for all your business metrics.',
      benefits: ['Live data streaming', 'Interactive charts', 'Custom dashboards', 'Real-time alerts']
    },
    {
      icon: <Brain className="w-6 h-6 text-emerald-400" />,
      title: 'AI-Powered Insights',
      description: 'Advanced machine learning algorithms that identify trends, patterns, and opportunities in your data.',
      benefits: ['Predictive analytics', 'Trend analysis', 'Anomaly detection', 'Smart recommendations']
    },
    {
      icon: <PieChart className="w-6 h-6 text-purple-400" />,
      title: 'Custom Reports',
      description: 'Create beautiful, professional reports with drag-and-drop builder and automated scheduling.',
      benefits: ['Drag-and-drop builder', 'Automated reports', 'Custom templates', 'Export options']
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-pink-400" />,
      title: 'Performance Tracking',
      description: 'Monitor KPIs, track goals, and measure success across all your business functions.',
      benefits: ['KPI monitoring', 'Goal tracking', 'Performance metrics', 'Success measurement']
    },
    {
      icon: <Users className="w-6 h-6 text-orange-400" />,
      title: 'Team Collaboration',
      description: 'Share insights, collaborate on reports, and work together on data analysis projects.',
      benefits: ['Shared dashboards', 'Team workspaces', 'Comment system', 'Role-based access']
    },
    {
      icon: <Shield className="w-6 h-6 text-red-400" />,
      title: 'Enterprise Security',
      description: 'Bank-level security with encryption, compliance, and advanced access controls.',
      benefits: ['End-to-end encryption', 'GDPR compliance', 'SSO integration', 'Audit logs']
    }
  ]

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$99',
      period: '/month',
      description: 'Perfect for small businesses and startups',
      features: [
        '5 data sources',
        'Basic dashboards',
        'Standard reports',
        'Email support',
        '1 user',
        '1GB data storage',
        'Basic integrations'
      ],
      popular: false,
      cta: 'Start Free Trial'
    },
    {
      name: 'Professional',
      price: '$299',
      period: '/month',
      description: 'Ideal for growing businesses and teams',
      features: [
        '25 data sources',
        'Advanced dashboards',
        'Custom reports',
        'Priority support',
        'Up to 10 users',
        '50GB data storage',
        'All integrations',
        'AI insights',
        'API access',
        'White-label options'
      ],
      popular: true,
      cta: 'Start Free Trial'
    },
    {
      name: 'Enterprise',
      price: '$799',
      period: '/month',
      description: 'For large organizations with custom needs',
      features: [
        'Unlimited data sources',
        'Unlimited dashboards',
        'Advanced reporting',
        '24/7 dedicated support',
        'Unlimited users',
        'Unlimited data storage',
        'Custom integrations',
        'Advanced AI insights',
        'Full API access',
        'Custom development',
        'Dedicated account manager',
        'SLA guarantees'
      ],
      popular: false,
      cta: 'Contact Sales'
    }
  ]

  const testimonials = [
    {
      name: 'Rachel Thompson',
      role: 'Data Analyst',
      company: 'DataDriven Corp.',
      content: 'Zion Analytics Pro has transformed how we analyze data. The AI insights are incredibly accurate and actionable.',
      rating: 5,
      avatar: 'RT'
    },
    {
      name: 'Kevin Park',
      role: 'Marketing Director',
      company: 'GrowthTech Solutions',
      content: 'Real-time analytics helped us increase our conversion rate by 35%. The dashboards are intuitive and powerful.',
      rating: 5,
      avatar: 'KP'
    },
    {
      name: 'Amanda Foster',
      role: 'CEO',
      company: 'InnovateNow Inc.',
      content: 'The team collaboration features are fantastic. Everyone can access the same data and work together seamlessly.',
      rating: 5,
      avatar: 'AF'
    }
  ]

  const integrations = [
    {
      name: 'Google Analytics',
      icon: <Globe className="w-8 h-8 text-blue-500" />,
      description: 'Connect your website analytics data'
    },
    {
      name: 'Salesforce',
      icon: <Users className="w-8 h-8 text-cyan-500" />,
      description: 'Import CRM data and sales metrics'
    },
    {
      name: 'HubSpot',
      icon: <Target className="w-8 h-8 text-orange-500" />,
      description: 'Sync marketing and sales data'
    },
    {
      name: 'Stripe',
      icon: <DollarSign className="w-8 h-8 text-purple-500" />,
      description: 'Track payment and revenue data'
    },
    {
      name: 'Slack',
      icon: <MessageCircle className="w-8 h-8 text-green-500" />,
      description: 'Share insights with your team'
    },
    {
      name: 'Zapier',
      icon: <Zap className="w-8 h-8 text-yellow-500" />,
      description: 'Connect with 3000+ apps'
    }
  ]

  const dashboardTypes = [
    {
      title: 'Executive Dashboard',
      description: 'High-level overview of business performance and key metrics.',
      icon: <TrendingUp className="w-8 h-8 text-cyan-400" />,
      metrics: ['Revenue', 'Growth Rate', 'Customer Acquisition', 'Profit Margins']
    },
    {
      title: 'Marketing Dashboard',
      description: 'Track marketing campaigns, leads, and conversion metrics.',
      icon: <Target className="w-8 h-8 text-emerald-400" />,
      metrics: ['Campaign Performance', 'Lead Generation', 'Conversion Rates', 'ROI']
    },
    {
      title: 'Sales Dashboard',
      description: 'Monitor sales performance, pipeline, and revenue tracking.',
      icon: <DollarSign className="w-8 h-8 text-purple-400" />,
      metrics: ['Sales Revenue', 'Pipeline Value', 'Deal Velocity', 'Win Rate']
    },
    {
      title: 'Customer Dashboard',
      description: 'Analyze customer behavior, satisfaction, and retention.',
      icon: <Users className="w-8 h-8 text-pink-400" />,
      metrics: ['Customer Satisfaction', 'Retention Rate', 'Churn Analysis', 'Lifetime Value']
    }
  ]

  return (
    <>
      <Helmet>
        <title>Zion Analytics Pro - Advanced Business Intelligence Platform | Zion Tech Group</title>
        <meta name="description" content="Transform your business with Zion Analytics Pro. Real-time analytics, AI insights, and custom dashboards. Starting at $99/month. Free trial available." />
        <meta name="keywords" content="business intelligence, analytics platform, data visualization, AI insights, custom dashboards, real-time analytics, business metrics" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://ziontechgroup.com/zion-analytics-pro" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          {/* Animated Background */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(6,182,212,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          
          {/* Floating Elements */}
          <div className="absolute top-20 left-10 w-16 h-16 bg-cyan-400/20 rounded-full blur-xl animate-bounce" style={{ animationDelay: '0.5s' }} />
          <div className="absolute top-40 right-20 w-12 h-12 bg-purple-400/20 rounded-full blur-xl animate-bounce" style={{ animationDelay: '1.5s' }} />
          <div className="absolute bottom-20 left-1/4 w-8 h-8 bg-pink-400/20 rounded-full blur-xl animate-bounce" style={{ animationDelay: '2.5s' }} />
          
          <div className="relative max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-400 px-6 py-3 rounded-full text-sm font-medium mb-8 border border-cyan-400/30">
              <BarChart3 className="w-4 h-4" />
              <span>Advanced Business Intelligence</span>
            </div>
            
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold text-white mb-8 leading-tight">
              Zion Analytics
              <br />
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Pro
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              Transform your business data into actionable insights with our advanced analytics platform.
              <br />
              <span className="text-cyan-400 font-semibold">Real-time analytics • AI insights • Custom dashboards</span>
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <button className="group bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-10 py-4 rounded-xl font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transform hover:scale-105">
                <span>Start Free Trial</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="group border-2 border-cyan-400 text-cyan-400 px-10 py-4 rounded-xl font-semibold hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300 flex items-center justify-center space-x-2 backdrop-blur-sm">
                <Play className="w-5 h-5" />
                <span>View Demo</span>
              </button>
            </div>
            
            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center items-center gap-8 text-gray-400 text-sm">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <span>10,000+ Active Users</span>
              </div>
              <div className="flex items-center space-x-2">
                <Star className="w-4 h-4 text-yellow-400" />
                <span>4.9/5 Rating</span>
              </div>
              <div className="flex items-center space-x-2">
                <Shield className="w-4 h-4 text-blue-400" />
                <span>Enterprise Security</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4 text-purple-400" />
                <span>24/7 Support</span>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5" />
          <div className="relative max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Powerful Analytics <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Features</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                Everything you need to analyze, visualize, and act on your business data with AI-powered insights.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="group bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10">
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {feature.description}
                  </p>
                  <div className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-center space-x-2 text-gray-400 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-400" />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Dashboard Types Section */}
        <section className="py-20 px-4 bg-gradient-to-br from-slate-800/50 to-purple-900/50 relative">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(6,182,212,0.1)_0%,transparent_50%)]" />
          <div className="relative max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Pre-Built <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Dashboards</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                Choose from our collection of professional dashboards designed for different business functions.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {dashboardTypes.map((dashboard, index) => (
                <div key={index} className="group bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                    {dashboard.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                    {dashboard.title}
                  </h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {dashboard.description}
                  </p>
                  <div className="space-y-1">
                    {dashboard.metrics.map((metric, metricIndex) => (
                      <div key={metricIndex} className="text-cyan-400 text-sm">
                        • {metric}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Integrations Section */}
        <section className="py-20 px-4 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-cyan-500/5 to-pink-500/5" />
          <div className="relative max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Seamless <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Integrations</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                Connect with your favorite tools and platforms to centralize all your business data.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
              {integrations.map((integration, index) => (
                <div key={index} className="group bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 text-center">
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300 mx-auto">
                    {integration.icon}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                    {integration.name}
                  </h3>
                  <p className="text-gray-400 text-sm">
                    {integration.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 px-4 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-cyan-500/5 to-pink-500/5" />
          <div className="relative max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Simple, Transparent <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Pricing</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                Choose the perfect plan for your analytics needs. All plans include our core features.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`group relative bg-white/10 backdrop-blur-lg rounded-2xl p-8 border transition-all duration-300 hover:scale-105 ${
                  plan.popular 
                    ? 'border-cyan-400/50 shadow-2xl shadow-cyan-500/20' 
                    : 'border-white/20 hover:border-cyan-400/30'
                }`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </div>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 mb-6">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-5xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-400 ml-2">{plan.period}</span>
                    </div>
                  </div>
                  
                  <div className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <button className={`w-full py-4 rounded-xl font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700 shadow-lg shadow-cyan-500/25'
                      : 'border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-gray-900'
                  }`}>
                    {plan.cta}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 px-4 bg-gradient-to-br from-purple-900/50 to-pink-900/50 relative">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(236,72,153,0.1)_0%,transparent_50%)]" />
          <div className="relative max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Trusted by <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">10,000+ Users</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                See what our customers say about their experience with Zion Analytics Pro.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-6 leading-relaxed">"{testimonial.content}"</p>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <div className="font-semibold text-white">{testimonial.name}</div>
                      <div className="text-gray-400 text-sm">{testimonial.role}, {testimonial.company}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10" />
          <div className="relative max-w-7xl mx-auto">
            <div className="text-center">
              <div className="bg-gradient-to-r from-cyan-600 via-purple-600 to-pink-600 rounded-3xl p-8 sm:p-12 lg:p-16 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.1)_0%,transparent_50%)] animate-pulse" />
                
                <div className="relative z-10">
                  <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                    Ready to Transform Your <span className="bg-gradient-to-r from-cyan-300 to-pink-300 bg-clip-text text-transparent">Data Strategy?</span>
                  </h2>
                  
                  <p className="text-xl sm:text-2xl text-white/90 mb-8 sm:mb-12 max-w-4xl mx-auto leading-relaxed">
                    Join thousands of businesses using Zion Analytics Pro to make data-driven decisions. 
                    Start your free trial today - no credit card required.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
                    <button className="group bg-white text-cyan-600 px-10 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl transform hover:scale-105">
                      <span>Start Free Trial</span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                    <Link 
                      to="/contact" 
                      className="group border-2 border-white text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-all duration-300 flex items-center justify-center space-x-2 backdrop-blur-sm"
                    >
                      <span>Contact Sales</span>
                      <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
                    </Link>
                  </div>
                  
                  {/* Contact Information */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-white/80">
                    <div className="flex items-center justify-center space-x-3">
                      <Phone className="w-5 h-5 text-cyan-300" />
                      <span className="text-sm">+1 302 464 0950</span>
                    </div>
                    <div className="flex items-center justify-center space-x-3">
                      <Mail className="w-5 h-5 text-purple-300" />
                      <span className="text-sm">kleber@ziontechgroup.com</span>
                    </div>
                    <div className="flex items-center justify-center space-x-3">
                      <MapPin className="w-5 h-5 text-pink-300" />
                      <span className="text-sm">Middletown DE 19709</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}