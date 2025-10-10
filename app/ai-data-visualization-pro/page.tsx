'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  BarChart3, 
  PieChart, 
  TrendingUp, 
  Activity, 
  Database, 
  Globe, 
  Users, 
  Clock, 
  CheckCircle, 
  ArrowRight,
  Brain,
  Shield,
  Target,
  Award,
  DollarSign,
  Star,
  Rocket,
  Zap,
  Eye,
  Settings
} from 'lucide-react';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';

const AIDataVisualizationPro: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Insights',
      description: 'Automatically generate insights and recommendations from your data using machine learning'
    },
    {
      icon: BarChart3,
      title: 'Interactive Dashboards',
      description: 'Create stunning, interactive dashboards with real-time data updates and drill-down capabilities'
    },
    {
      icon: Database,
      title: '100+ Data Sources',
      description: 'Connect to databases, APIs, spreadsheets, and cloud services with pre-built connectors'
    },
    {
      icon: Zap,
      title: 'Real-time Processing',
      description: 'Process and visualize data in real-time with sub-second latency and automatic updates'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security with role-based access control, encryption, and compliance features'
    },
    {
      icon: Users,
      title: 'Collaborative Analytics',
      description: 'Share insights and collaborate with your team through comments, annotations, and sharing'
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$149',
      period: '/month',
      description: 'Perfect for small teams',
      features: [
        'Up to 5 dashboards',
        'Basic visualizations',
        '10 data sources',
        'Basic analytics',
        '5 team members',
        'Standard support'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$399',
      period: '/month',
      description: 'Ideal for growing businesses',
      features: [
        'Up to 50 dashboards',
        'Advanced visualizations',
        '50 data sources',
        'AI-powered insights',
        'Unlimited team members',
        'Custom integrations',
        'Priority support'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$999',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Unlimited dashboards',
        'Custom visualizations',
        'Unlimited data sources',
        'Advanced AI analytics',
        'White-label solution',
        'Dedicated success manager',
        '24/7 phone support',
        'Custom SLA'
      ],
      popular: false
    }
  ];

  const benefits = [
    {
      icon: TrendingUp,
      title: '300% Faster Insights',
      description: 'Get actionable insights from your data in minutes, not hours'
    },
    {
      icon: Award,
      title: '95% User Adoption',
      description: 'Intuitive interface drives high user engagement and adoption'
    },
    {
      icon: Clock,
      title: 'Real-time Updates',
      description: 'Always see the latest data with automatic real-time updates'
    },
    {
      icon: DollarSign,
      title: '200% ROI',
      description: 'Significant cost savings and productivity improvements'
    }
  ];

  const visualizationTypes = [
    {
      title: 'Interactive Charts',
      description: 'Create stunning charts with hover effects, zoom, and filtering',
      types: ['Bar Charts', 'Line Charts', 'Pie Charts', 'Scatter Plots', 'Heatmaps']
    },
    {
      title: 'Real-time Dashboards',
      description: 'Monitor key metrics with live-updating dashboard widgets',
      types: ['KPI Cards', 'Gauges', 'Progress Bars', 'Timeline Views', 'Status Indicators']
    },
    {
      title: 'Geographic Visualizations',
      description: 'Map your data geographically with interactive maps and regions',
      types: ['World Maps', 'Country Maps', 'State Maps', 'Heat Maps', 'Bubble Maps']
    },
    {
      title: 'Advanced Analytics',
      description: 'Perform complex analysis with statistical and predictive models',
      types: ['Regression Analysis', 'Time Series', 'Clustering', 'Correlation Matrix', 'Forecasting']
    }
  ];

  const dataSources = [
    { name: 'MySQL', icon: '🗄️' },
    { name: 'PostgreSQL', icon: '🐘' },
    { name: 'MongoDB', icon: '🍃' },
    { name: 'Salesforce', icon: '☁️' },
    { name: 'Google Analytics', icon: '📊' },
    { name: 'HubSpot', icon: '🔗' },
    { name: 'Excel', icon: '📈' },
    { name: 'CSV', icon: '📄' },
    { name: 'JSON', icon: '🔧' },
    { name: 'REST API', icon: '🌐' }
  ];

  return (
    <>
      <Helmet>
        <title>AI Data Visualization Pro - Zion Tech Group</title>
        <meta name="description" content="Revolutionary AI-powered data visualization platform with interactive dashboards, real-time analytics, and 100+ data sources. Transform your data into insights." />
        <meta name="keywords" content="AI data visualization, business intelligence, interactive dashboards, data analytics, real-time reporting, data visualization tools" />
      </Helmet>
      
      <Navigation />
      
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-16">
        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-400 text-sm font-medium mb-6">
                <BarChart3 className="w-4 h-4 mr-2" />
                AI-Powered Data Visualization
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 neon-text-enhanced">
                AI Data Visualization Pro
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Transform your data into stunning, interactive visualizations with AI-powered insights. 
                Connect to 100+ data sources, create real-time dashboards, and make data-driven decisions faster.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="#pricing"
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
                >
                  Start Free Trial
                </a>
                <a
                  href="#demo"
                  className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 px-8 py-4 rounded-lg font-semibold transition-all duration-300"
                >
                  Watch Demo
                </a>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">300%</div>
                <div className="text-gray-300">Faster Insights</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">100+</div>
                <div className="text-gray-300">Data Sources</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">95%</div>
                <div className="text-gray-300">User Adoption</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-pink-400 mb-2">200%</div>
                <div className="text-gray-300">ROI</div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Powerful Visualization Features</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Everything you need to transform your data into actionable insights
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-slate-800/50 rounded-xl p-6 hover:bg-slate-800/70 transition-all duration-300 group">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Visualization Types */}
        <section className="py-20 px-4 bg-slate-800/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Visualization Types</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Create stunning visualizations with our comprehensive chart library
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {visualizationTypes.map((type, index) => (
                <div key={index} className="bg-slate-800/50 rounded-xl p-8">
                  <h3 className="text-2xl font-semibold text-white mb-4">{type.title}</h3>
                  <p className="text-gray-300 mb-6">{type.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {type.types.map((chartType, typeIndex) => (
                      <span key={typeIndex} className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-sm">
                        {chartType}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Data Sources */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Connect to Any Data Source</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Seamlessly connect to your existing data sources and systems
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
              {dataSources.map((source, index) => (
                <div key={index} className="text-center group">
                  <div className="w-16 h-16 bg-slate-700 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:bg-slate-600 transition-colors">
                    <span className="text-2xl">{source.icon}</span>
                  </div>
                  <div className="text-gray-300 font-medium">{source.name}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 bg-slate-800/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Proven Results</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Join thousands of businesses already transforming their data into insights
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Simple, Transparent Pricing</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the plan that fits your data needs. All plans include 14-day free trial.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`relative bg-slate-800/50 rounded-xl p-8 ${plan.popular ? 'ring-2 ring-cyan-500' : ''}`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-400 ml-1">{plan.period}</span>
                    </div>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="/contact"
                    className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white'
                        : 'border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900'
                    }`}
                  >
                    Start Free Trial
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-slate-800/30">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-cyan-500/10 to-blue-600/10 rounded-2xl p-12 border border-cyan-500/20">
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready to Transform Your Data?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join thousands of businesses already using AI Data Visualization Pro to make data-driven decisions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
                >
                  Start Free Trial
                </a>
                <a
                  href="tel:+13024640950"
                  className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 px-8 py-4 rounded-lg font-semibold transition-all duration-300"
                >
                  Call: (302) 464-0950
                </a>
              </div>
              <div className="mt-6 text-sm text-gray-400">
                No credit card required • 14-day free trial • Cancel anytime
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default AIDataVisualizationPro;