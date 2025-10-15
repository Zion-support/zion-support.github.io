import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  BarChart3, 
  TrendingUp, 
  PieChart, 
  LineChart, 
  Zap, 
  Globe,
  ArrowRight,
  CheckCircle,
  Star,
  Award,
  Clock,
  Brain,
  Target,
  FileText,
  Smartphone,
  Monitor,
  Activity,
  Database,
  Settings,
  Bell,
  MessageSquare,
  Upload,
  Download,
  Search,
  Filter,
  Users,
  Key,
  Bug,
  Network,
  Server,
  Cloud,
  HardDrive,
  Eye,
  Lock,
  RefreshCw,
  Play,
  Pause,
  Square
} from 'lucide-react';

const AIDataAnalyticsPlatformPage: React.FC = () => {
  const features = [
    {
      title: 'AI-Powered Insights',
      description: 'Advanced machine learning algorithms automatically discover patterns and insights in your data.',
      icon: <Brain className="w-6 h-6" />,
      benefits: ['Pattern recognition', 'Anomaly detection', 'Predictive modeling', 'Automated insights']
    },
    {
      title: 'Real-Time Analytics',
      description: 'Process and analyze data in real-time with instant visualizations and alerts.',
      icon: <Activity className="w-6 h-6" />,
      benefits: ['Live dashboards', 'Stream processing', 'Real-time alerts', 'Instant updates']
    },
    {
      title: 'Advanced Visualizations',
      description: 'Create stunning, interactive charts and graphs that tell your data story.',
      icon: <PieChart className="w-6 h-6" />,
      benefits: ['Interactive charts', 'Custom visualizations', '3D graphics', 'Mobile responsive']
    },
    {
      title: 'Data Integration',
      description: 'Connect to any data source with our comprehensive integration platform.',
      icon: <Database className="w-6 h-6" />,
      benefits: ['100+ connectors', 'API integration', 'Data transformation', 'ETL pipelines']
    },
    {
      title: 'Collaborative Workspace',
      description: 'Share insights and collaborate with your team in real-time.',
      icon: <Users className="w-6 h-6" />,
      benefits: ['Team sharing', 'Comment system', 'Version control', 'Access management']
    },
    {
      title: 'Automated Reporting',
      description: 'Generate and distribute reports automatically with AI-powered insights.',
      icon: <FileText className="w-6 h-6" />,
      benefits: ['Scheduled reports', 'Custom templates', 'Multi-format export', 'Email delivery']
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$149',
      period: '/month',
      description: 'Perfect for small teams getting started with analytics',
      features: [
        'Up to 5 data sources',
        'Basic visualizations',
        'Standard reports',
        'Email support',
        '1GB data storage',
        '5 users included'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$399',
      period: '/month',
      description: 'Advanced features for growing businesses',
      features: [
        'Unlimited data sources',
        'Advanced AI features',
        'Custom dashboards',
        'Priority support',
        '10GB data storage',
        '25 users included',
        'API access',
        'White-label options'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$799',
      period: '/month',
      description: 'Complete solution for large organizations',
      features: [
        'Everything in Professional',
        'Dedicated account manager',
        'Custom integrations',
        'Unlimited data storage',
        'Unlimited users',
        'Advanced security',
        'On-premise deployment',
        '24/7 phone support'
      ],
      popular: false
    }
  ];

  const analyticsTypes = [
    {
      title: 'Business Intelligence',
      description: 'Transform raw data into actionable business insights',
      icon: <TrendingUp className="w-8 h-8" />,
      features: ['KPI tracking', 'Performance metrics', 'Trend analysis', 'Forecasting']
    },
    {
      title: 'Customer Analytics',
      description: 'Understand customer behavior and preferences',
      icon: <Users className="w-8 h-8" />,
      features: ['Customer segmentation', 'Behavior analysis', 'Churn prediction', 'Lifetime value']
    },
    {
      title: 'Marketing Analytics',
      description: 'Measure and optimize your marketing campaigns',
      icon: <Target className="w-8 h-8" />,
      features: ['Campaign performance', 'ROI analysis', 'Attribution modeling', 'A/B testing']
    },
    {
      title: 'Financial Analytics',
      description: 'Monitor financial health and performance',
      icon: <BarChart3 className="w-8 h-8" />,
      features: ['Revenue analysis', 'Cost optimization', 'Budget tracking', 'Financial forecasting']
    }
  ];

  const dataSources = [
    { name: 'Google Analytics', icon: <Globe className="w-6 h-6" />, description: 'Web analytics data' },
    { name: 'Salesforce', icon: <Users className="w-6 h-6" />, description: 'CRM data integration' },
    { name: 'MySQL', icon: <Database className="w-6 h-6" />, description: 'Database connections' },
    { name: 'Excel', icon: <FileText className="w-6 h-6" />, description: 'Spreadsheet data' },
    { name: 'API', icon: <Network className="w-6 h-6" />, description: 'REST API integration' },
    { name: 'Cloud Storage', icon: <Cloud className="w-6 h-6" />, description: 'Cloud data sources' }
  ];

  return (
    <>
      <Helmet>
        <title>AI Data Analytics Platform - Advanced Business Intelligence | Zion Tech Group</title>
        <meta name="description" content="Transform your data into actionable insights with our AI-powered analytics platform. Advanced visualizations, real-time analytics, and machine learning for modern businesses." />
        <meta name="keywords" content="data analytics, business intelligence, AI analytics, data visualization, predictive analytics, data insights, BI platform" />
        <link rel="canonical" href="https://ziontechgroup.com/ai-data-analytics-platform" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
              <BarChart3 className="w-4 h-4 text-cyan-400 mr-2" />
              <span className="text-cyan-400 text-sm font-medium">AI-Powered Data Analytics</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI Data Analytics <span className="text-cyan-400">Platform</span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Transform your data into actionable insights with our advanced AI-powered analytics platform. 
              Discover patterns, predict trends, and make data-driven decisions with confidence.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-cyan-500/25"
              >
                <span>Start Free Trial</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/demo"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <Monitor className="w-5 h-5" />
                <span>Watch Demo</span>
              </Link>
            </div>

            {/* Key Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">100+</div>
                <div className="text-gray-300 text-sm">Data Sources</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">50x</div>
                <div className="text-gray-300 text-sm">Faster Insights</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">99.9%</div>
                <div className="text-gray-300 text-sm">Uptime SLA</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">24/7</div>
                <div className="text-gray-300 text-sm">AI Processing</div>
              </div>
            </div>
          </div>
        </section>

        {/* Data Sources Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Connect Any Data Source
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Seamlessly integrate with your existing data sources and systems.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {dataSources.map((source, index) => (
                <div
                  key={index}
                  className="bg-slate-800/50 backdrop-blur-sm border border-white/20 rounded-xl p-6 hover:border-cyan-500/40 transition-all duration-300 group text-center"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    {source.icon}
                  </div>
                  
                  <h3 className="text-sm font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                    {source.name}
                  </h3>
                  
                  <p className="text-xs text-gray-300">
                    {source.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Powerful Analytics Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Everything you need to turn your data into strategic insights.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-slate-800/50 backdrop-blur-sm border border-white/20 rounded-xl p-8 hover:border-cyan-500/40 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                    {feature.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {feature.description}
                  </p>
                  
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center space-x-2 text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                        <span className="text-sm">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Analytics Types Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Analytics for Every Business Need
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Specialized analytics solutions for different business functions.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {analyticsTypes.map((type, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-slate-800/50 to-purple-900/50 border border-purple-500/30 rounded-xl p-8 hover:border-cyan-400/50 transition-all duration-300 group"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    {type.icon}
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                    {type.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {type.description}
                  </p>
                  
                  <ul className="space-y-2">
                    {type.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2 text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
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
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Choose Your Analytics Plan
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Flexible pricing options to fit your data analytics needs.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`bg-slate-800/50 backdrop-blur-sm border rounded-xl p-8 relative ${
                    plan.popular 
                      ? 'border-cyan-500/50 ring-2 ring-cyan-500/20' 
                      : 'border-white/20'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center space-x-1">
                        <Star className="w-4 h-4" />
                        <span>Most Popular</span>
                      </span>
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
                      <li key={featureIndex} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link
                    to="/contact"
                    className={`w-full py-3 px-6 rounded-lg font-semibold text-center transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700'
                        : 'border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900'
                    }`}
                  >
                    Get Started
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-cyan-900/30 to-purple-900/30 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Transform Your Data?
              </h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Join thousands of businesses already using our AI analytics platform to make data-driven decisions.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-cyan-500/25"
                >
                  <span>Start Free Trial</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  to="/demo"
                  className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <Monitor className="w-5 h-5" />
                  <span>Schedule Demo</span>
                </Link>
              </div>
              
              <div className="mt-8 text-sm text-gray-400">
                <p>✓ 14-day free trial • ✓ No credit card required • ✓ Cancel anytime</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AIDataAnalyticsPlatformPage;