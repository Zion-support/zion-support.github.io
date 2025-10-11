'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import { BarChart, Brain, Zap, Shield, TrendingUp, Users, Clock, CheckCircle, Star, ArrowRight, Phone, Mail, MapPin, Globe, Settings, Target, Award, Database, Cpu, Wifi, Smartphone, Monitor, Laptop, Tablet, PieChart, LineChart, Activity, Eye, Lock, RefreshCw, Download, Share, Filter, Search, Calendar, AlertCircle, ThumbsUp, ThumbsDown } from 'lucide-react';

const AiAnalyticsDashboardProPage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Insights',
      description: 'Advanced machine learning algorithms analyze your data to provide actionable insights and predictions',
      benefits: ['Predictive analytics', 'Anomaly detection', 'Trend forecasting', 'Smart recommendations']
    },
    {
      icon: BarChart,
      title: 'Real-Time Dashboards',
      description: 'Live data visualization with customizable dashboards that update in real-time',
      benefits: ['Live data feeds', 'Custom widgets', 'Interactive charts', 'Mobile responsive']
    },
    {
      icon: Zap,
      title: 'Automated Reporting',
      description: 'Generate comprehensive reports automatically with AI-powered data analysis and insights',
      benefits: ['Scheduled reports', 'Custom templates', 'Email delivery', 'PDF/Excel export']
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security with role-based access control and data encryption',
      benefits: ['Role-based access', 'Data encryption', 'Audit logs', 'GDPR compliant']
    },
    {
      icon: Users,
      title: 'Team Collaboration',
      description: 'Share insights and collaborate with your team through advanced sharing and commenting features',
      benefits: ['Team sharing', 'Comment system', 'Version control', 'Permission management']
    },
    {
      icon: Settings,
      title: 'Custom Integrations',
      description: 'Connect with 100+ data sources and APIs for comprehensive business intelligence',
      benefits: ['100+ integrations', 'Custom APIs', 'Data connectors', 'ETL pipelines']
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$89',
      period: '/month',
      description: 'Perfect for small teams',
      features: [
        'Up to 5 dashboards',
        'Basic AI insights',
        '5 data sources',
        'Standard reports',
        '3 team members',
        'Email support',
        'Basic integrations'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$199',
      period: '/month',
      description: 'Ideal for growing businesses',
      features: [
        'Unlimited dashboards',
        'Advanced AI analytics',
        '25 data sources',
        'Custom reports & alerts',
        '10 team members',
        'Priority support',
        'Advanced integrations',
        'API access',
        'White-label options'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$499',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Everything in Professional',
        'Custom AI models',
        'Unlimited data sources',
        'Real-time streaming',
        'Unlimited team members',
        '24/7 dedicated support',
        'Custom integrations',
        'On-premise deployment',
        'SLA guarantee',
        'Custom training & onboarding'
      ],
      popular: false
    }
  ];

  const dataSources = [
    { name: 'Google Analytics', icon: Globe, description: 'Website analytics' },
    { name: 'Salesforce', icon: Database, description: 'CRM data' },
    { name: 'HubSpot', icon: Target, description: 'Marketing automation' },
    { name: 'Stripe', icon: CreditCard, description: 'Payment processing' },
    { name: 'Shopify', icon: Monitor, description: 'E-commerce platform' },
    { name: 'Facebook Ads', icon: Globe, description: 'Social media ads' },
    { name: 'Google Ads', icon: Search, description: 'Search advertising' },
    { name: 'Mailchimp', icon: Mail, description: 'Email marketing' },
    { name: 'Slack', icon: MessageSquare, description: 'Team communication' },
    { name: 'Zendesk', icon: Headphones, description: 'Customer support' },
    { name: 'MySQL', icon: Database, description: 'Database' },
    { name: 'PostgreSQL', icon: Database, description: 'Database' },
    { name: 'MongoDB', icon: Database, description: 'NoSQL database' },
    { name: 'AWS S3', icon: Cloud, description: 'Cloud storage' },
    { name: 'Google Sheets', icon: FileText, description: 'Spreadsheets' },
    { name: 'Excel', icon: FileText, description: 'Microsoft Excel' },
    { name: 'CSV Files', icon: FileText, description: 'Data files' },
    { name: 'REST APIs', icon: Settings, description: 'Custom APIs' },
    { name: 'Webhooks', icon: Zap, description: 'Real-time data' },
    { name: 'Custom Connectors', icon: Settings, description: 'Bespoke integrations' }
  ];

  const testimonials = [
    {
      name: 'David Kim',
      company: 'DataCorp Solutions',
      role: 'Chief Data Officer',
      content: 'AI Analytics Dashboard Pro transformed how we analyze our business data. The AI insights helped us identify new revenue opportunities worth $2M annually.',
      rating: 5,
      avatar: '👨‍💼'
    },
    {
      name: 'Lisa Wang',
      company: 'GrowthTech Inc.',
      role: 'VP of Marketing',
      content: 'The real-time dashboards and automated reporting saved us 20 hours per week. Our team can now focus on strategy instead of data preparation.',
      rating: 5,
      avatar: '👩‍💻'
    },
    {
      name: 'James Rodriguez',
      company: 'RetailMax',
      role: 'Head of Analytics',
      content: 'The predictive analytics feature helped us optimize our inventory management, reducing costs by 30% and improving customer satisfaction.',
      rating: 5,
      avatar: '👨‍🔬'
    }
  ];

  const stats = [
    { number: '100+', label: 'Data Sources', icon: Database },
    { number: '99.9%', label: 'Uptime', icon: Shield },
    { number: '50ms', label: 'Query Speed', icon: Zap },
    { number: '1000+', label: 'Happy Users', icon: Users },
    { number: '24/7', label: 'Support', icon: Clock },
    { number: '95%', label: 'Time Saved', icon: TrendingUp }
  ];

  const dashboardTypes = [
    {
      title: 'Executive Dashboard',
      description: 'High-level KPIs and business metrics for C-level executives',
      icon: Target,
      features: ['Revenue tracking', 'Growth metrics', 'ROI analysis', 'Strategic insights']
    },
    {
      title: 'Marketing Dashboard',
      description: 'Comprehensive marketing performance and campaign analytics',
      icon: TrendingUp,
      features: ['Campaign performance', 'Lead generation', 'Conversion rates', 'ROI tracking']
    },
    {
      title: 'Sales Dashboard',
      description: 'Sales pipeline, performance metrics, and forecasting',
      icon: BarChart,
      features: ['Pipeline analysis', 'Sales forecasting', 'Team performance', 'Revenue tracking']
    },
    {
      title: 'Customer Analytics',
      description: 'Customer behavior, satisfaction, and retention insights',
      icon: Users,
      features: ['Customer journey', 'Satisfaction scores', 'Retention analysis', 'Churn prediction']
    },
    {
      title: 'Financial Dashboard',
      description: 'Financial performance, budgeting, and expense tracking',
      icon: DollarSign,
      features: ['P&L analysis', 'Budget tracking', 'Expense analysis', 'Cash flow']
    },
    {
      title: 'Operations Dashboard',
      description: 'Operational efficiency and process optimization metrics',
      icon: Settings,
      features: ['Process metrics', 'Efficiency tracking', 'Resource utilization', 'Performance KPIs']
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Analytics Dashboard Pro - Advanced Business Intelligence Platform | Zion Tech Group</title>
        <meta name="description" content="Revolutionary AI-powered analytics platform with real-time dashboards, predictive insights, and automated reporting. Transform your data into actionable business intelligence." />
        <meta name="keywords" content="AI analytics, business intelligence, data visualization, predictive analytics, real-time dashboards, automated reporting" />
        <meta property="og:title" content="AI Analytics Dashboard Pro - Zion Tech Group" />
        <meta property="og:description" content="Advanced AI-powered analytics platform with real-time dashboards and predictive insights." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/ai-analytics-dashboard-pro" />
      </Helmet>

      <Navigation />
      
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg matrix-rain pt-20">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-400 text-sm font-medium mb-6">
                <BarChart className="w-4 h-4 mr-2" />
                AI Analytics Dashboard Pro
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  AI Analytics
                </span>
                <br />
                <span className="text-4xl md:text-6xl">That Drives Results</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
                Revolutionary AI-powered analytics platform with real-time dashboards, 
                predictive insights, and automated reporting. Transform your data into 
                actionable business intelligence that drives growth.
              </p>

              {/* Key Benefits */}
              <div className="flex flex-wrap justify-center gap-6 mb-12 text-sm text-gray-300">
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                  <span>100+ Data Sources</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                  <span>Real-Time Updates</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                  <span>AI-Powered Insights</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                  <span>Enterprise Security</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <a 
                  href="/contact" 
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center group shadow-lg shadow-cyan-500/25 hover:shadow-xl hover:shadow-cyan-500/40 transform hover:scale-105"
                >
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
                <a 
                  href="#demo" 
                  className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center group"
                >
                  <Eye className="w-5 h-5 mr-2" />
                  View Demo
                </a>
              </div>

              {/* Trust Indicators */}
              <div className="flex flex-wrap justify-center items-center gap-8 text-gray-400 text-sm">
                <div className="flex items-center">
                  <Star className="w-4 h-4 text-yellow-400 mr-1" />
                  <span>4.9/5 Rating</span>
                </div>
                <div className="flex items-center">
                  <Users className="w-4 h-4 text-cyan-400 mr-1" />
                  <span>1000+ Users</span>
                </div>
                <div className="flex items-center">
                  <Award className="w-4 h-4 text-green-400 mr-1" />
                  <span>Enterprise Ready</span>
                </div>
                <div className="flex items-center">
                  <Shield className="w-4 h-4 text-purple-400 mr-1" />
                  <span>99.9% Uptime</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Why Choose <span className="text-cyan-400">AI Analytics Dashboard Pro</span>?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Advanced AI technology combined with powerful visualization tools to deliver 
                insights that drive business growth and operational efficiency.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="group bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-cyan-400/30 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-cyan-300 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {feature.description}
                  </p>
                  <div className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-center text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                        {benefit}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Dashboard Types Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Pre-Built <span className="text-cyan-400">Dashboard Templates</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Get started quickly with our professionally designed dashboard templates 
                for every business function.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {dashboardTypes.map((dashboard, index) => (
                <div
                  key={index}
                  className="group bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-cyan-400/30 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <dashboard.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-cyan-300 transition-colors">
                    {dashboard.title}
                  </h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {dashboard.description}
                  </p>
                  <div className="space-y-2">
                    {dashboard.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Data Sources Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Connect <span className="text-cyan-400">100+ Data Sources</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Seamlessly integrate with your existing tools and data sources. 
                From databases to APIs, we connect to everything you need.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
              {dataSources.map((source, index) => (
                <div
                  key={index}
                  className="group bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-cyan-400/30 transition-all duration-300 hover:transform hover:scale-105 text-center"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <source.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-white font-semibold mb-2 text-sm">{source.name}</h3>
                  <p className="text-gray-400 text-xs">{source.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Simple, Transparent <span className="text-cyan-400">Pricing</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the plan that fits your business needs. All plans include 24/7 support 
                and 30-day money-back guarantee.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`relative bg-white/5 backdrop-blur-lg rounded-2xl p-8 border transition-all duration-300 hover:transform hover:scale-105 ${
                    plan.popular 
                      ? 'border-cyan-400/50 shadow-2xl shadow-cyan-500/20' 
                      : 'border-white/10 hover:border-cyan-400/30'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-6 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-400 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-5xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-400 ml-2">{plan.period}</span>
                    </div>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href="/contact"
                    className={`w-full py-3 px-6 rounded-lg font-semibold text-center transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white hover:from-cyan-600 hover:to-purple-600'
                        : 'border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900'
                    }`}
                  >
                    Get Started
                  </a>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <p className="text-gray-400 mb-4">Need a custom solution?</p>
              <a 
                href="/contact" 
                className="text-cyan-400 hover:text-cyan-300 font-semibold"
              >
                Contact our sales team →
              </a>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                What Our <span className="text-cyan-400">Clients Say</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Join 1000+ companies using AI Analytics Dashboard Pro to make data-driven decisions.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-cyan-400/30 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-6 leading-relaxed italic">
                    "{testimonial.content}"
                  </p>
                  <div className="border-t border-white/10 pt-4">
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mr-4 text-2xl">
                        {testimonial.avatar}
                      </div>
                      <div>
                        <div className="font-semibold text-white">{testimonial.name}</div>
                        <div className="text-sm text-cyan-400">{testimonial.role}, {testimonial.company}</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center bg-gradient-to-r from-slate-800/50 to-purple-900/50 rounded-3xl p-12 border border-cyan-500/20">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Data Analytics?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join 1000+ companies using AI Analytics Dashboard Pro to make better 
              data-driven decisions. Start your free trial today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <a 
                href="/contact" 
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center group shadow-lg shadow-cyan-500/25 hover:shadow-xl hover:shadow-cyan-500/40 transform hover:scale-105"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="tel:+13024640950" 
                className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center group"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call (302) 464-0950
              </a>
            </div>
            <div className="text-sm text-gray-400">
              <p>✓ 30-day free trial • ✓ No credit card required • ✓ 24/7 support</p>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default AiAnalyticsDashboardProPage;