'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  BarChart3, 
  TrendingUp, 
  Brain, 
  Zap, 
  Shield, 
  Smartphone, 
  Globe,
  CheckCircle,
  ArrowRight,
  Star,
  Clock,
  DollarSign,
  Target,
  Database,
  Settings,
  RefreshCw,
  Eye,
  Filter,
  Download,
  Share2,
  AlertCircle,
  Activity,
  PieChart,
  LineChart
} from 'lucide-react';

const AIAnalyticsDashboardPage: React.FC = () => {
  const features = [
    {
      icon: <Brain className="w-6 h-6" />,
      title: 'AI-Powered Insights',
      description: 'Get intelligent insights and recommendations powered by machine learning algorithms that analyze your data patterns and trends.',
      benefits: ['Automated anomaly detection', 'Predictive trend analysis', 'Smart recommendations']
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: 'Real-Time Dashboards',
      description: 'Monitor your business metrics in real-time with customizable dashboards that update automatically as data flows in.',
      benefits: ['Live data updates', 'Customizable widgets', 'Mobile-responsive design']
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: 'Predictive Analytics',
      description: 'Forecast future performance with advanced predictive models that help you make data-driven decisions.',
      benefits: ['Revenue forecasting', 'Customer behavior prediction', 'Risk assessment']
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Automated Reporting',
      description: 'Generate comprehensive reports automatically with AI-powered insights and natural language explanations.',
      benefits: ['Scheduled reports', 'Natural language summaries', 'Executive summaries']
    },
    {
      icon: <Eye className="w-6 h-6" />,
      title: 'Data Visualization',
      description: 'Transform complex data into beautiful, interactive visualizations that make insights easy to understand.',
      benefits: ['Interactive charts', 'Multiple chart types', 'Drill-down capabilities']
    },
    {
      icon: <AlertCircle className="w-6 h-6" />,
      title: 'Smart Alerts',
      description: 'Get notified about important changes and anomalies in your data with intelligent alerting system.',
      benefits: ['Custom alert rules', 'Multi-channel notifications', 'Anomaly detection']
    }
  ];

  const dashboardTypes = [
    {
      title: 'Sales Analytics',
      description: 'Track sales performance, pipeline health, and revenue trends',
      metrics: ['Revenue Growth', 'Conversion Rates', 'Pipeline Value', 'Deal Velocity'],
      icon: <DollarSign className="w-8 h-8" />
    },
    {
      title: 'Marketing Analytics',
      description: 'Monitor campaign performance, lead generation, and ROI',
      metrics: ['Campaign ROI', 'Lead Quality', 'Cost per Acquisition', 'Engagement Rates'],
      icon: <Target className="w-8 h-8" />
    },
    {
      title: 'Customer Analytics',
      description: 'Understand customer behavior, satisfaction, and lifetime value',
      metrics: ['Customer Satisfaction', 'Churn Rate', 'Lifetime Value', 'Retention Rate'],
      icon: <Globe className="w-8 h-8" />
    },
    {
      title: 'Financial Analytics',
      description: 'Track financial performance, profitability, and cash flow',
      metrics: ['Profit Margins', 'Cash Flow', 'Expense Analysis', 'Revenue Breakdown'],
      icon: <BarChart3 className="w-8 h-8" />
    },
    {
      title: 'Operational Analytics',
      description: 'Monitor operational efficiency and process performance',
      metrics: ['Process Efficiency', 'Resource Utilization', 'Quality Metrics', 'Performance KPIs'],
      icon: <Settings className="w-8 h-8" />
    },
    {
      title: 'Custom Dashboards',
      description: 'Create custom dashboards tailored to your specific needs',
      metrics: ['Custom Metrics', 'Flexible Layouts', 'Personalized Views', 'Team Collaboration'],
      icon: <PieChart className="w-8 h-8" />
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$199',
      period: '/month',
      description: 'Perfect for small businesses starting with analytics',
      features: [
        'Up to 5 data sources',
        'Basic AI insights',
        '3 custom dashboards',
        'Email reports',
        'Mobile app access',
        'Email support'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$399',
      period: '/month',
      description: 'Advanced analytics for growing businesses',
      features: [
        'Up to 20 data sources',
        'Advanced AI insights',
        'Unlimited dashboards',
        'Automated reporting',
        'API access',
        'Custom integrations',
        'Priority support'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$799',
      period: '/month',
      description: 'Complete analytics solution for large organizations',
      features: [
        'Unlimited data sources',
        'Custom AI models',
        'White-label dashboards',
        'Advanced security',
        'Dedicated support',
        'Custom training',
        'On-premise deployment'
      ],
      popular: false
    }
  ];

  const dataSources = [
    'Google Analytics', 'Salesforce', 'HubSpot', 'Stripe', 'PayPal', 'Shopify',
    'WooCommerce', 'Mailchimp', 'Slack', 'Microsoft Teams', 'Zapier', 'MySQL',
    'PostgreSQL', 'MongoDB', 'Excel', 'CSV Files', 'REST APIs', 'Webhooks'
  ];

  return (
    <>
      <Helmet>
        <title>AI Analytics Dashboard - Zion Tech Group | Intelligent Business Intelligence</title>
        <meta name="description" content="Transform your data into actionable insights with our AI-powered analytics dashboard. Real-time dashboards, predictive analytics, and automated reporting for data-driven decisions." />
        <meta name="keywords" content="AI analytics, business intelligence, data visualization, predictive analytics, dashboard, Zion Tech Group" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 neural-network-bg matrix-rain">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full mb-6">
              <BarChart3 className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text">
              AI Analytics Dashboard
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your data into actionable insights with our intelligent analytics platform. 
              Get real-time dashboards, predictive analytics, and AI-powered recommendations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <button className="cyber-button text-lg px-8 py-4">
                Start Free Trial
              </button>
              <button className="border-2 border-white/20 text-white font-semibold py-4 px-8 rounded-lg hover:bg-white/10 transition-all duration-300">
                View Demo
              </button>
            </div>
            
            {/* Key Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="cyber-card p-6">
                <div className="text-3xl font-bold text-cyan-400 mb-2">90%</div>
                <div className="text-gray-300">Faster Insights</div>
              </div>
              <div className="cyber-card p-6">
                <div className="text-3xl font-bold text-green-400 mb-2">50+</div>
                <div className="text-gray-300">Data Sources</div>
              </div>
              <div className="cyber-card p-6">
                <div className="text-3xl font-bold text-purple-400 mb-2">24/7</div>
                <div className="text-gray-300">Real-time Updates</div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 neon-text">
                Powerful AI Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our AI-powered analytics platform provides intelligent insights and automated reporting to help you make better decisions.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="quantum-card p-8 hover:scale-105 transition-all duration-300">
                  <div className="text-cyan-400 mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
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
        <section className="py-20 px-4 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 neon-text">
                Pre-Built Dashboard Templates
              </h2>
              <p className="text-xl text-gray-300">
                Choose from our library of pre-built dashboards or create custom ones for your specific needs.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {dashboardTypes.map((dashboard, index) => (
                <div key={index} className="cyber-card p-8 hover:scale-105 transition-all duration-300">
                  <div className="text-cyan-400 mb-4">
                    {dashboard.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{dashboard.title}</h3>
                  <p className="text-gray-300 mb-6">{dashboard.description}</p>
                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold text-cyan-400 mb-2">Key Metrics:</h4>
                    {dashboard.metrics.map((metric, metricIndex) => (
                      <div key={metricIndex} className="flex items-center text-sm text-gray-300">
                        <div className="w-2 h-2 bg-cyan-400 rounded-full mr-2"></div>
                        {metric}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Data Sources Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 neon-text">
                Connect Any Data Source
              </h2>
              <p className="text-xl text-gray-300">
                Integrate with 50+ popular data sources and APIs for comprehensive analytics.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {dataSources.map((source, index) => (
                <div key={index} className="cyber-card p-4 text-center hover:scale-105 transition-all duration-300">
                  <div className="text-white font-medium text-sm">{source}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 px-4 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 neon-text">
                Simple, Transparent Pricing
              </h2>
              <p className="text-xl text-gray-300">
                Choose the plan that fits your analytics needs. All plans include our core AI features.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`quantum-card p-8 relative ${plan.popular ? 'ring-2 ring-cyan-400' : ''}`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-cyan-400">{plan.price}</span>
                      <span className="text-gray-300 ml-1">{plan.period}</span>
                    </div>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular 
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:from-cyan-600 hover:to-blue-600' 
                      : 'border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white'
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
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 neon-text">
              Ready to Transform Your Data into Insights?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of businesses using AI to make better data-driven decisions. 
              Start your free trial today - no credit card required.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="cyber-button text-lg px-8 py-4">
                Start Free Trial
              </button>
              <button className="border-2 border-white/20 text-white font-semibold py-4 px-8 rounded-lg hover:bg-white/10 transition-all duration-300">
                Schedule Demo
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AIAnalyticsDashboardPage;