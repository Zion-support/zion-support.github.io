import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  CheckCircleIcon,
  ArrowRightIcon,
  StarIcon,
  CurrencyDollarIcon,
  ClockIcon,
  UsersIcon,
  CpuChipIcon,
  ShieldCheckIcon,
  CloudIcon,
  ChartBarIcon,
  AcademicCapIcon,
  PlayIcon,
  PhoneIcon,
  DocumentTextIcon,
  GlobeAltIcon,
  CogIcon,
  EyeIcon,
  TrendingUpIcon,
  LightBulbIcon
} from '@heroicons/react/24/outline';

const AIAnalyticsDashboardPage: React.FC = () => {
  const features = [
    {
      icon: CpuChipIcon,
      title: 'Real-time Data Processing',
      description: 'Process and analyze data in real-time with our advanced AI algorithms for instant insights.'
    },
    {
      icon: ChartBarIcon,
      title: 'Predictive Analytics',
      description: 'Forecast trends and outcomes using machine learning models trained on your specific data.'
    },
    {
      icon: CogIcon,
      title: 'Custom Dashboard Builder',
      description: 'Create personalized dashboards with drag-and-drop widgets tailored to your business needs.'
    },
    {
      icon: DocumentTextIcon,
      title: 'Automated Reports',
      description: 'Generate comprehensive reports automatically with AI-powered insights and recommendations.'
    },
    {
      icon: GlobeAltIcon,
      title: 'Data Source Integrations',
      description: 'Connect to 100+ data sources including Google Analytics, Salesforce, HubSpot, and more.'
    },
    {
      icon: EyeIcon,
      title: 'Mobile App Access',
      description: 'Access your analytics anywhere with our native mobile apps for iOS and Android.'
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$49',
      period: 'month',
      description: 'Perfect for small businesses and startups',
      features: [
        'Up to 5 data sources',
        'Basic dashboard templates',
        'Standard reporting',
        'Email support',
        '1 user account',
        '7-day data retention'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$99',
      period: 'month',
      description: 'Ideal for growing businesses and teams',
      features: [
        'Up to 25 data sources',
        'Custom dashboard builder',
        'Advanced analytics',
        'Priority support',
        'Up to 10 user accounts',
        '90-day data retention',
        'API access',
        'Scheduled reports'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$249',
      period: 'month',
      description: 'For large organizations with complex needs',
      features: [
        'Unlimited data sources',
        'Full customization',
        'AI-powered insights',
        'Dedicated support',
        'Unlimited users',
        'Unlimited data retention',
        'Full API access',
        'White-label options',
        'Custom integrations',
        'On-premise deployment'
      ],
      popular: false
    }
  ];

  const analyticsTypes = [
    {
      title: 'Business Intelligence',
      description: 'Comprehensive business metrics and KPIs with automated insights and recommendations.',
      icon: TrendingUpIcon,
      metrics: ['Revenue Analysis', 'Customer Acquisition', 'Market Trends', 'Performance KPIs']
    },
    {
      title: 'Marketing Analytics',
      description: 'Track marketing campaigns, ROI, and customer journey across all channels.',
      icon: EyeIcon,
      metrics: ['Campaign Performance', 'Conversion Tracking', 'Customer Journey', 'Attribution Analysis']
    },
    {
      title: 'Sales Analytics',
      description: 'Monitor sales performance, pipeline health, and revenue forecasting.',
      icon: ChartBarIcon,
      metrics: ['Sales Pipeline', 'Revenue Forecasting', 'Lead Analysis', 'Performance Tracking']
    },
    {
      title: 'Customer Analytics',
      description: 'Understand customer behavior, satisfaction, and lifetime value.',
      icon: UsersIcon,
      metrics: ['Customer Segmentation', 'Behavior Analysis', 'Satisfaction Scores', 'Lifetime Value']
    }
  ];

  const integrations = [
    'Google Analytics', 'Google Ads', 'Facebook Ads', 'LinkedIn Ads', 'Twitter Ads',
    'Salesforce', 'HubSpot', 'Pipedrive', 'Zendesk', 'Intercom',
    'Shopify', 'WooCommerce', 'Magento', 'Stripe', 'PayPal',
    'Slack', 'Microsoft Teams', 'Trello', 'Asana', 'Jira',
    'MySQL', 'PostgreSQL', 'MongoDB', 'Redis', 'Elasticsearch'
  ];

  return (
    <>
      <Helmet>
        <title>AI Analytics Dashboard - Zion Tech Group</title>
        <meta name="description" content="Intelligent business analytics platform with predictive insights, automated reporting, and real-time data visualization powered by AI." />
        <meta name="keywords" content="AI analytics, business intelligence, data visualization, predictive analytics, dashboard, Zion Tech Group" />
      </Helmet>
      
      <div className="min-h-screen bg-slate-900 text-white">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 lg:py-32">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-cyan-900/20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="inline-flex items-center space-x-2 bg-slate-800/50 px-4 py-2 rounded-full border border-purple-500/50 mb-8">
                <ChartBarIcon className="w-5 h-5 text-purple-400" />
                <span className="text-purple-300 text-sm font-medium">AI-Powered Analytics</span>
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                AI Analytics Dashboard
              </h1>
              
              <p className="text-xl lg:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
                Transform your data into actionable insights with our intelligent analytics platform. Get real-time visualizations, predictive analytics, and automated reporting powered by advanced AI.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
                <Link
                  to="/contact"
                  className="neon-button px-8 py-4 rounded-lg font-semibold text-lg"
                >
                  Start Free Trial
                </Link>
                <Link
                  to="/demo"
                  className="border-2 border-purple-400 text-purple-300 px-8 py-4 rounded-lg font-semibold hover:bg-purple-400 hover:text-white transition-all duration-300"
                >
                  View Live Demo
                </Link>
              </div>
              
              {/* Stats */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
                <div className="text-center">
                  <div className="text-3xl lg:text-4xl font-bold text-purple-400 mb-2">100+</div>
                  <div className="text-gray-300 text-sm">Data Sources</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl lg:text-4xl font-bold text-cyan-400 mb-2">50K+</div>
                  <div className="text-gray-300 text-sm">Dashboards Created</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl lg:text-4xl font-bold text-green-400 mb-2">99.9%</div>
                  <div className="text-gray-300 text-sm">Uptime</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl lg:text-4xl font-bold text-yellow-400 mb-2">24/7</div>
                  <div className="text-gray-300 text-sm">Support</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-slate-800/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                Powerful <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Features</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Everything you need to turn your data into actionable business insights.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-slate-800/50 p-8 rounded-xl border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300 hover-lift">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center mb-6">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-white">{feature.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Analytics Types Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                Comprehensive <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Analytics</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Cover all aspects of your business with specialized analytics modules.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {analyticsTypes.map((type, index) => (
                <div key={index} className="bg-slate-800/50 p-8 rounded-xl border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300 hover-lift">
                  <div className="flex items-start space-x-4 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <type.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-3 text-white">{type.title}</h3>
                      <p className="text-gray-300 leading-relaxed">{type.description}</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-2">
                    {type.metrics.map((metric, metricIndex) => (
                      <div key={metricIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircleIcon className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
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
        <section className="py-20 bg-slate-800/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                Seamless <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Integrations</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Connect with your favorite tools and data sources for a unified analytics experience.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {integrations.map((integration, index) => (
                <div key={index} className="bg-slate-800/50 p-4 rounded-lg border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300 text-center">
                  <span className="text-gray-300 text-sm font-medium">{integration}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                Flexible <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Pricing</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the plan that fits your analytics needs. Scale up or down as your business grows.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`bg-slate-800/50 p-8 rounded-xl border transition-all duration-300 hover-lift ${
                  plan.popular 
                    ? 'border-purple-500/50 relative' 
                    : 'border-slate-700/50 hover:border-purple-500/50'
                }`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-400 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-5xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-400 ml-2">/{plan.period}</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Link
                    to="/contact"
                    className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                      plan.popular
                        ? 'neon-button'
                        : 'border-2 border-purple-400 text-purple-300 hover:bg-purple-400 hover:text-white'
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
        <section className="py-20 bg-gradient-to-r from-purple-900/30 to-cyan-900/30">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Ready to Unlock Your Data's Potential?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of businesses that are already making data-driven decisions with our AI analytics platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="neon-button px-8 py-4 rounded-lg font-semibold text-lg"
              >
                Start Free Trial
              </Link>
              <Link
                to="/demo"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-slate-900 transition-all duration-300"
              >
                Schedule Demo
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AIAnalyticsDashboardPage;