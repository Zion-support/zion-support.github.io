'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import { CheckCircle, ArrowRight, Star, Clock, Zap, Shield, BarChart3, Users, Target, TrendingUp, Brain, Database, Globe, Smartphone, Mail, Phone, Calendar, Settings, PieChart, LineChart, Activity } from 'lucide-react';

const AiAnalyticsDashboardPage: React.FC = () => {
  const features = [
    'Real-time Data Visualization',
    'AI-Powered Predictive Analytics',
    'Custom Dashboard Builder',
    'Automated Report Generation',
    'Multi-Data Source Integration',
    'Advanced Filtering & Segmentation',
    'Interactive Charts & Graphs',
    'Mobile-Responsive Design',
    'Scheduled Report Delivery',
    'Data Export (PDF, Excel, CSV)',
    'White-label Customization',
    'API Access & Webhooks',
    'User Role Management',
    'Data Security & Encryption',
    'Performance Monitoring',
    'Custom KPI Tracking'
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$149',
      period: '/month',
      description: 'Perfect for small teams',
      features: [
        'Up to 5 dashboards',
        '3 data sources',
        'Basic AI insights',
        'Standard charts & graphs',
        'Email reports',
        'Mobile app access',
        'Email support'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$299',
      period: '/month',
      description: 'Most popular for growing businesses',
      features: [
        'Unlimited dashboards',
        '10 data sources',
        'Advanced AI analytics',
        'Custom chart types',
        'Scheduled reports',
        'API access',
        'Priority support',
        'Custom branding',
        'Advanced filters'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$599',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Unlimited everything',
        'Unlimited data sources',
        'Custom AI models',
        'White-label solution',
        'Dedicated account manager',
        'Custom integrations',
        'Advanced security',
        'SLA guarantee',
        'On-premise deployment',
        'Custom training'
      ],
      popular: false
    }
  ];

  const dataSources = [
    { name: 'Google Analytics', icon: '📊', description: 'Website analytics' },
    { name: 'Salesforce', icon: '🔗', description: 'CRM data' },
    { name: 'HubSpot', icon: '🔗', description: 'Marketing data' },
    { name: 'Stripe', icon: '💳', description: 'Payment data' },
    { name: 'Shopify', icon: '🛒', description: 'E-commerce data' },
    { name: 'Facebook Ads', icon: '📱', description: 'Social media ads' },
    { name: 'Google Ads', icon: '🔍', description: 'Search advertising' },
    { name: 'Mailchimp', icon: '📧', description: 'Email marketing' },
    { name: 'Slack', icon: '💬', description: 'Team communication' },
    { name: 'Zendesk', icon: '🎫', description: 'Support tickets' },
    { name: 'MySQL', icon: '🗄️', description: 'Database' },
    { name: 'PostgreSQL', icon: '🗄️', description: 'Database' },
    { name: 'MongoDB', icon: '🍃', description: 'NoSQL database' },
    { name: 'REST APIs', icon: '🔌', description: 'Custom APIs' },
    { name: 'CSV Upload', icon: '📁', description: 'File upload' },
    { name: 'Excel Files', icon: '📊', description: 'Spreadsheet data' }
  ];

  const chartTypes = [
    { name: 'Line Charts', icon: LineChart, description: 'Trend analysis over time' },
    { name: 'Bar Charts', icon: BarChart3, description: 'Category comparisons' },
    { name: 'Pie Charts', icon: PieChart, description: 'Proportion visualization' },
    { name: 'Scatter Plots', icon: Target, description: 'Correlation analysis' },
    { name: 'Heatmaps', icon: Activity, description: 'Pattern identification' },
    { name: 'Gauges', icon: TrendingUp, description: 'KPI monitoring' },
    { name: 'Tables', icon: Database, description: 'Detailed data views' },
    { name: 'Maps', icon: Globe, description: 'Geographic data' }
  ];

  const benefits = [
    'Make data-driven decisions with AI insights',
    'Save 20+ hours per week on report generation',
    'Identify trends and opportunities automatically',
    'Share insights across your organization',
    'Monitor KPIs in real-time',
    'Predict future performance',
    'Customize dashboards for each team',
    'Access data from anywhere, anytime'
  ];

  const stats = [
    { value: '95%', label: 'Time Saved', description: 'On report generation' },
    { value: '300%', label: 'Faster Insights', description: 'With AI analytics' },
    { value: '50+', label: 'Data Sources', description: 'Supported integrations' },
    { value: '24/7', label: 'Monitoring', description: 'Real-time updates' }
  ];

  return (
    <React.Fragment>
      <Helmet>
        <title>AI Analytics Dashboard - Zion Tech Group | Real-time Business Intelligence</title>
        <meta name="description" content="Powerful AI analytics dashboard with real-time data visualization, predictive analytics, and automated reporting. Transform your data into actionable insights. Starting at $149/month." />
        <meta name="keywords" content="AI analytics, business intelligence, data visualization, dashboard, predictive analytics, real-time analytics, KPI tracking" />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full mb-6">
                <BarChart3 className="w-10 h-10 text-white" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                AI Analytics <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Dashboard</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Transform your data into actionable insights with our AI-powered analytics dashboard. Real-time visualization, predictive analytics, and automated reporting for smarter business decisions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+13024640950"
                  className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 inline-flex items-center justify-center"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call: (302) 464-0950
                </a>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400/10 transition-all duration-300"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Get Free Demo
                </a>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">{stat.value}</div>
                  <div className="text-white font-semibold mb-1">{stat.label}</div>
                  <div className="text-gray-400 text-sm">{stat.description}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Powerful Analytics Features</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our AI analytics dashboard provides everything you need to understand your data and make informed decisions.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-lg rounded-lg p-6 border border-white/10 hover:border-cyan-400/50 transition-all duration-300">
                  <CheckCircle className="w-6 h-6 text-green-400 mb-3" />
                  <h3 className="text-white font-semibold mb-2">{feature}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Chart Types Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Rich Visualization Options</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose from a wide variety of chart types and visualization options to present your data in the most meaningful way.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {chartTypes.map((chart, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-lg rounded-lg p-6 border border-white/10 hover:border-cyan-400/50 transition-all duration-300 text-center">
                  <chart.icon className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
                  <h3 className="text-white font-semibold mb-2">{chart.name}</h3>
                  <p className="text-gray-400 text-sm">{chart.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Data Sources Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">50+ Data Source Integrations</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Connect all your data sources in one place. From CRM systems to social media platforms, we support it all.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {dataSources.map((source, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-lg rounded-lg p-6 border border-white/10 hover:border-cyan-400/50 transition-all duration-300 text-center">
                  <div className="text-3xl mb-3">{source.icon}</div>
                  <h3 className="text-white font-semibold mb-1">{source.name}</h3>
                  <p className="text-gray-400 text-sm">{source.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Simple, Transparent Pricing</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the plan that fits your business needs. All plans include our core analytics features and 24/7 support.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`relative bg-white/5 backdrop-blur-lg rounded-2xl p-8 border ${
                    plan.popular
                      ? 'border-purple-400 shadow-2xl shadow-purple-500/25 scale-105'
                      : 'border-white/20'
                  } hover:border-purple-400 transition-all duration-300`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2">
                        <Star className="w-4 h-4 fill-current" />
                        Most Popular
                      </div>
                    </div>
                  )}
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-400 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-400 ml-1">{plan.period}</span>
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
                  <button className="w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 bg-gradient-to-r from-purple-500 to-blue-500 text-white hover:from-purple-600 hover:to-blue-600 transform hover:scale-105">
                    Start Free Trial
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Why Choose Our AI Analytics?</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Join thousands of businesses that have transformed their data analysis with our AI-powered platform.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <CheckCircle className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{benefit}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-12 border border-white/20">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Transform Your Data Analysis?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Start your free trial today and discover how our AI analytics dashboard can revolutionize your business intelligence.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+13024640950"
                  className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 inline-flex items-center justify-center"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call: (302) 464-0950
                </a>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400/10 transition-all duration-300"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Get Free Demo
                </a>
              </div>
              <div className="mt-8 text-sm text-gray-400">
                <p>📍 364 E Main St STE 1008, Middletown, DE 19709</p>
                <p>⏰ Mon-Fri: 9AM-6PM EST | 24/7 Emergency Support Available</p>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default AiAnalyticsDashboardPage;