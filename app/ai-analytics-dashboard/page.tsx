'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  BarChart3, 
  TrendingUp, 
  Brain, 
  Zap, 
  Shield, 
  CheckCircle, 
  ArrowRight, 
  Star,
  Phone,
  Mail,
  MapPin,
  Clock,
  Users,
  Target,
  MessageSquare,
  Settings,
  Database,
  Cloud,
  Lock,
  Award,
  Globe,
  Smartphone,
  Monitor,
  Headphones,
  FileText,
  Calendar,
  DollarSign,
  PieChart,
  Activity,
  UserCheck,
  MailCheck,
  PhoneCall,
  MessageCircle,
  CalendarCheck,
  TargetIcon,
  Zap as Lightning,
  Shield as Security,
  Globe as World,
  Smartphone as Mobile,
  Monitor as Desktop,
  Headphones as Support,
  FileText as Document,
  Calendar as Schedule,
  DollarSign as Money,
  PieChart as Chart,
  Activity as Analytics,
  UserCheck as Verified,
  MailCheck as EmailVerified,
  PhoneCall as Call,
  MessageCircle as Chat,
  CalendarCheck as Scheduled,
  Eye,
  Filter,
  Download,
  RefreshCw,
  Maximize,
  Minimize,
  RotateCcw,
  Play,
  Pause,
  Square,
  Circle,
  Triangle,
  Hexagon,
  Octagon,
  Square as SquareIcon,
  Circle as CircleIcon,
  Triangle as TriangleIcon,
  Hexagon as HexagonIcon,
  Octagon as OctagonIcon
} from 'lucide-react';

const AiAnalyticsDashboardPage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Insights',
      description: 'Get intelligent insights and recommendations from your data automatically',
      details: ['Predictive analytics', 'Anomaly detection', 'Trend analysis', 'Smart alerts']
    },
    {
      icon: BarChart3,
      title: 'Real-time Dashboards',
      description: 'Monitor your business metrics in real-time with customizable dashboards',
      details: ['Live data updates', 'Custom widgets', 'Interactive charts', 'Mobile responsive']
    },
    {
      icon: TrendingUp,
      title: 'Advanced Analytics',
      description: 'Deep dive into your data with advanced statistical analysis and modeling',
      details: ['Statistical analysis', 'Regression models', 'Time series', 'Correlation analysis']
    },
    {
      icon: Zap,
      title: 'Automated Reports',
      description: 'Generate and schedule automated reports with AI-powered insights',
      details: ['Scheduled reports', 'Custom templates', 'Email delivery', 'PDF export']
    },
    {
      icon: Database,
      title: 'Data Integration',
      description: 'Connect to 100+ data sources and APIs for comprehensive analytics',
      details: ['100+ integrations', 'API connections', 'Data warehousing', 'ETL processes']
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security with role-based access control and audit trails',
      details: ['Role-based access', 'Audit trails', 'Data encryption', 'Compliance ready']
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$199',
      period: '/month',
      description: 'Perfect for small businesses',
      features: [
        'Up to 5 users',
        '10 data sources',
        'Basic AI insights',
        'Standard dashboards',
        'Email support',
        'Monthly reports',
        'Basic integrations'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$499',
      period: '/month',
      description: 'Ideal for growing companies',
      features: [
        'Up to 25 users',
        '50 data sources',
        'Advanced AI insights',
        'Custom dashboards',
        'Priority support',
        'Real-time reports',
        'Advanced integrations',
        'API access',
        'Custom metrics'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$999',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Unlimited users',
        'Unlimited data sources',
        'Premium AI insights',
        'White-label solution',
        'Dedicated support',
        'Custom development',
        'Advanced security',
        'SLA guarantee',
        'Dedicated account manager'
      ],
      popular: false
    }
  ];

  const dataSources = [
    { name: 'Google Analytics', icon: BarChart3, description: 'Website analytics' },
    { name: 'Salesforce', icon: Users, description: 'CRM data' },
    { name: 'HubSpot', icon: Target, description: 'Marketing data' },
    { name: 'Stripe', icon: DollarSign, description: 'Payment data' },
    { name: 'Shopify', icon: Globe, description: 'E-commerce data' },
    { name: 'Facebook Ads', icon: MessageSquare, description: 'Social media ads' },
    { name: 'Google Ads', icon: Target, description: 'Search advertising' },
    { name: 'Mailchimp', icon: Mail, description: 'Email marketing' },
    { name: 'Zendesk', icon: Headphones, description: 'Support data' },
    { name: 'Slack', icon: MessageCircle, description: 'Team communication' },
    { name: 'Jira', icon: Settings, description: 'Project management' },
    { name: 'GitHub', icon: Code, description: 'Development data' }
  ];

  const benefits = [
    {
      icon: TrendingUp,
      title: 'Increase Revenue by 25%',
      description: 'Data-driven insights help optimize business performance'
    },
    {
      icon: Clock,
      title: 'Save 15+ Hours/Week',
      description: 'Automated reporting eliminates manual data analysis'
    },
    {
      icon: Target,
      title: 'Improve Decision Making',
      description: 'AI-powered insights provide actionable recommendations'
    },
    {
      icon: Users,
      title: 'Better Team Alignment',
      description: 'Shared dashboards keep everyone on the same page'
    }
  ];

  const stats = [
    { value: '25%', label: 'Revenue Increase', description: 'Average improvement' },
    { value: '15+', label: 'Hours Saved', description: 'Per week per user' },
    { value: '99.9%', label: 'Uptime', description: 'Reliable service' },
    { value: '100+', label: 'Integrations', description: 'Available connections' },
    { value: '24/7', label: 'Support', description: 'Always available' },
    { value: '5K+', label: 'Companies', description: 'Trust our platform' }
  ];

  const dashboardTypes = [
    {
      icon: BarChart3,
      title: 'Sales Dashboard',
      description: 'Track sales performance, pipeline, and revenue metrics',
      features: ['Revenue tracking', 'Pipeline analysis', 'Conversion rates', 'Sales forecasting']
    },
    {
      icon: Users,
      title: 'Marketing Dashboard',
      description: 'Monitor marketing campaigns and customer acquisition',
      features: ['Campaign performance', 'Lead generation', 'ROI analysis', 'Customer acquisition cost']
    },
    {
      icon: Headphones,
      title: 'Support Dashboard',
      description: 'Track customer support metrics and satisfaction',
      features: ['Ticket volume', 'Response times', 'Satisfaction scores', 'Agent performance']
    },
    {
      icon: Settings,
      title: 'Operations Dashboard',
      description: 'Monitor operational efficiency and resource utilization',
      features: ['Resource utilization', 'Process efficiency', 'Cost analysis', 'Performance metrics']
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Analytics Dashboard - Zion Tech Group | Business Intelligence Platform</title>
        <meta name="description" content="Advanced AI-powered analytics dashboard with real-time insights, predictive analytics, and automated reporting. Connect 100+ data sources and increase revenue by 25%." />
        <meta name="keywords" content="AI analytics, business intelligence, data visualization, predictive analytics, dashboard, reporting, data analysis" />
        <meta property="og:title" content="AI Analytics Dashboard - Zion Tech Group" />
        <meta property="og:description" content="Advanced business intelligence platform with AI-powered insights and real-time dashboards" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/ai-analytics-dashboard" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(0,255,255,0.1)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(139,92,246,0.1)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          
          <div className="relative max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full px-4 py-2 mb-8">
              <BarChart3 className="w-4 h-4 text-cyan-400" />
              <span className="text-cyan-400 text-sm font-medium">AI Analytics Dashboard</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                AI Analytics
              </span>
              <br />
              <span className="text-white">Dashboard</span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Transform your data into actionable insights with our AI-powered analytics platform. 
              Connect 100+ data sources, get real-time dashboards, and make data-driven decisions.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
                <BarChart3 className="w-5 h-5 mr-2" />
                Start Free Trial
              </button>
              <button className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center">
                <Phone className="w-5 h-5 mr-2" />
                Schedule Demo
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-5xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-cyan-400 mb-2">{stat.value}</div>
                  <div className="text-gray-300 text-sm font-medium">{stat.label}</div>
                  <div className="text-gray-500 text-xs">{stat.description}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">
                Powerful Analytics Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Everything you need to turn data into actionable insights
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-cyan-500/50 transition-all duration-300 group">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-8 h-8 text-cyan-400" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                    {feature.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {feature.description}
                  </p>
                  
                  <ul className="space-y-2">
                    {feature.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-center text-sm text-gray-400">
                        <CheckCircle className="w-4 h-4 text-cyan-400 mr-3 flex-shrink-0" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Dashboard Types Section */}
        <section className="py-20 px-4 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">
                Pre-built Dashboard Templates
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Get started quickly with our ready-to-use dashboard templates
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {dashboardTypes.map((dashboard, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-cyan-500/50 transition-all duration-300 group">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <dashboard.icon className="w-8 h-8 text-cyan-400" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                    {dashboard.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {dashboard.description}
                  </p>
                  
                  <ul className="space-y-2">
                    {dashboard.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-400">
                        <CheckCircle className="w-4 h-4 text-cyan-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Data Sources Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">
                Connect Your Data Sources
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Integrate with 100+ popular tools and platforms
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {dataSources.map((source, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-cyan-500/50 transition-all duration-300 text-center group">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <source.icon className="w-6 h-6 text-cyan-400" />
                  </div>
                  <h3 className="text-white font-semibold mb-2 text-sm">{source.name}</h3>
                  <p className="text-gray-400 text-xs">{source.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">
                Proven Results
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See how our AI analytics platform transforms businesses
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <benefit.icon className="w-10 h-10 text-cyan-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{benefit.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">
                Simple, Transparent Pricing
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the plan that fits your business needs. All plans include our core AI features.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 border transition-all duration-300 ${
                  plan.popular 
                    ? 'border-cyan-500/50 ring-2 ring-cyan-500/20 scale-105' 
                    : 'border-white/10 hover:border-cyan-500/30'
                }`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2">
                        <Star className="w-4 h-4 fill-current" />
                        Most Popular
                      </div>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-400 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-5xl font-bold text-cyan-400">{plan.price}</span>
                      <span className="text-gray-400 ml-2">{plan.period}</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <button className={`w-full py-4 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white hover:from-cyan-600 hover:to-purple-600 transform hover:scale-105'
                      : 'border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900'
                  }`}>
                    {plan.popular ? 'Start Free Trial' : 'Get Started'}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 backdrop-blur-sm rounded-2xl p-12 border border-cyan-500/20">
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready to Transform Your Data?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Join thousands of businesses already using our AI analytics platform 
                to make data-driven decisions and grow faster.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
                  <BarChart3 className="w-5 h-5 mr-2" />
                  Start Free Trial
                </button>
                <button className="border border-white/20 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300 flex items-center justify-center">
                  <Phone className="w-5 h-5 mr-2" />
                  Contact Sales
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 px-4 bg-white/5">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Get in Touch</h2>
              <p className="text-gray-300">Ready to unlock the power of your data?</p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-300 text-sm">Phone</p>
                    <a href="tel:+13024640950" className="text-cyan-400 hover:text-cyan-300 font-semibold text-lg">
                      +1 (302) 464-0950
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-300 text-sm">Email</p>
                    <a href="mailto:kleber@ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300 font-semibold text-lg">
                      kleber@ziontechgroup.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-600 rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-300 text-sm">Address</p>
                    <p className="text-white font-semibold">
                      364 E Main St STE 1008<br />
                      Middletown, DE 19709
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                <h3 className="text-2xl font-bold text-white mb-6">Request a Demo</h3>
                <form className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                      placeholder="Enter your full name"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                      placeholder="Enter your company name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                      placeholder="Tell us about your analytics needs"
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-300 transform hover:scale-105"
                  >
                    Request Demo
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AiAnalyticsDashboardPage;