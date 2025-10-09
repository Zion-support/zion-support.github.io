import React from 'react';
import Link from 'next/link';
import { 
  ArrowRight, 
  CheckCircle, 
  BarChart, 
  TrendingUp, 
  Zap, 
  Brain, 
  Target,
  Users,
  Database,
  Smartphone,
  Globe,
  Clock,
  Star,
  Award,
  Phone,
  Mail,
  MapPin,
  Activity,
  FileText,
  Settings,
  Shield,
  RefreshCw,
  Monitor,
  PieChart,
  LineChart
} from 'lucide-react';

const AnalyticsToolsPage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Insights',
      description: 'Advanced machine learning algorithms that automatically analyze your data and provide actionable insights, predictions, and recommendations.',
      benefits: ['Predictive analytics', 'Automated insights', 'Pattern recognition', 'Trend forecasting']
    },
    {
      icon: BarChart,
      title: 'Real-Time Dashboards',
      description: 'Interactive, customizable dashboards that provide real-time visibility into your business performance across all key metrics.',
      benefits: ['Real-time data', 'Customizable views', 'Interactive charts', 'Mobile responsive']
    },
    {
      icon: Target,
      title: 'Advanced Reporting',
      description: 'Comprehensive reporting suite with automated report generation, scheduling, and distribution to stakeholders.',
      benefits: ['Automated reports', 'Scheduled delivery', 'Custom templates', 'Multi-format export']
    },
    {
      icon: Zap,
      title: 'Data Integration',
      description: 'Seamlessly connect and integrate data from multiple sources including databases, APIs, cloud services, and third-party platforms.',
      benefits: ['Multi-source integration', 'Real-time sync', 'Data transformation', 'API connectivity']
    }
  ];

  const analyticsTools = [
    {
      title: 'Business Intelligence',
      description: 'Comprehensive BI platform with advanced analytics and reporting capabilities.',
      price: 'Starting at $199/month',
      features: ['Interactive dashboards', 'Advanced analytics', 'Custom reports', 'Data visualization'],
      icon: BarChart
    },
    {
      title: 'Web Analytics',
      description: 'Advanced web analytics with AI-powered insights and user behavior tracking.',
      price: 'Starting at $99/month',
      features: ['User tracking', 'Conversion analysis', 'Traffic insights', 'Performance metrics'],
      icon: Globe
    },
    {
      title: 'Marketing Analytics',
      description: 'Complete marketing analytics suite with campaign tracking and ROI analysis.',
      price: 'Starting at $149/month',
      features: ['Campaign tracking', 'ROI analysis', 'Attribution modeling', 'Customer journey'],
      icon: Target
    },
    {
      title: 'Financial Analytics',
      description: 'Financial data analysis with forecasting and risk assessment capabilities.',
      price: 'Starting at $299/month',
      features: ['Financial forecasting', 'Risk analysis', 'Budget tracking', 'Profit analysis'],
      icon: TrendingUp
    }
  ];

  const dataSources = [
    { name: 'Google Analytics', description: 'Website and app analytics integration', coverage: '100%' },
    { name: 'Salesforce', description: 'CRM data integration and analysis', coverage: '100%' },
    { name: 'Facebook Ads', description: 'Social media advertising analytics', coverage: '100%' },
    { name: 'Google Ads', description: 'Search advertising performance tracking', coverage: '100%' },
    { name: 'Shopify', description: 'E-commerce analytics and reporting', coverage: '95%' },
    { name: 'HubSpot', description: 'Marketing automation analytics', coverage: '90%' }
  ];

  const industries = [
    { name: 'E-commerce', description: 'Online retail analytics with conversion tracking and customer insights' },
    { name: 'SaaS', description: 'Software analytics with user engagement and subscription metrics' },
    { name: 'Healthcare', description: 'HIPAA-compliant analytics for patient data and operational metrics' },
    { name: 'Finance', description: 'Financial analytics with compliance reporting and risk assessment' },
    { name: 'Education', description: 'Educational analytics with student performance and engagement tracking' },
    { name: 'Manufacturing', description: 'Industrial analytics with production metrics and quality control' }
  ];

  const stats = [
    { number: '50+', label: 'Data Sources', icon: Database },
    { number: '99.9%', label: 'Uptime', icon: Clock },
    { number: '10x', label: 'Faster Insights', icon: Zap },
    { number: '24/7', label: 'Real-time Data', icon: Activity }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-purple-600/20"></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center bg-indigo-600/20 text-indigo-300 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <BarChart className="w-4 h-4 mr-2" />
            AI-Powered Analytics Tools
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Analytics Tools
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Transform your data into actionable insights with our comprehensive suite of AI-powered analytics tools. 
            Make data-driven decisions with real-time dashboards, predictive analytics, and automated reporting.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a
              href="tel:+13024640950"
              className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all inline-flex items-center"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call: (302) 464-0950
            </a>
            <a
              href="/contact"
              className="border-2 border-indigo-600 text-indigo-300 px-8 py-4 rounded-lg font-semibold hover:bg-indigo-600 hover:text-white transition-all"
            >
              Get Analytics Demo
            </a>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-indigo-400 mb-2">{stat.number}</div>
                <div className="text-sm text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Analytics Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI-powered analytics platform provides comprehensive data analysis and visualization capabilities.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-indigo-600 rounded-lg flex items-center justify-center mr-4">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">{feature.title}</h3>
                </div>
                <p className="text-gray-300 mb-6">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Analytics Tools */}
      <section className="py-20 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Analytics Tools
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose from our comprehensive suite of analytics tools designed for different business needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {analyticsTools.map((tool, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-indigo-500/50 transition-all">
                <div className="w-12 h-12 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                  <tool.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{tool.title}</h3>
                <p className="text-gray-300 mb-4 text-sm">{tool.description}</p>
                <div className="text-2xl font-bold text-indigo-400 mb-4">{tool.price}</div>
                <ul className="space-y-2 mb-6">
                  {tool.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href="/contact"
                  className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-2 px-4 rounded-lg font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all text-center block"
                >
                  Get Started
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Data Sources */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Data Sources
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Connect and analyze data from all your favorite platforms and services.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {dataSources.map((source, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-white">{source.name}</h3>
                  <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                    {source.coverage}
                  </span>
                </div>
                <p className="text-gray-300">{source.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-20 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Industry Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Specialized analytics solutions for different industries and business types.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
                <h3 className="text-xl font-bold text-white mb-3">{industry.name}</h3>
                <p className="text-gray-300">{industry.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Analytics Pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Flexible pricing options for analytics tools. All plans include real-time data and AI insights.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-4">Starter</h3>
              <div className="text-4xl font-bold text-indigo-400 mb-6">$99<span className="text-lg text-gray-300">/month</span></div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Basic dashboards
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  5 data sources
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Standard reports
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Email support
                </li>
              </ul>
              <a
                href="/contact"
                className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all text-center block"
              >
                Get Started
              </a>
            </div>

            <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl p-8 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-yellow-400 text-black px-4 py-1 rounded-full text-sm font-bold flex items-center">
                  <Star className="w-4 h-4 mr-1" />
                  Most Popular
                </span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Professional</h3>
              <div className="text-4xl font-bold text-white mb-6">$299<span className="text-lg text-indigo-200">/month</span></div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-white">
                  <CheckCircle className="w-5 h-5 text-green-300 mr-3" />
                  Advanced dashboards
                </li>
                <li className="flex items-center text-white">
                  <CheckCircle className="w-5 h-5 text-green-300 mr-3" />
                  20 data sources
                </li>
                <li className="flex items-center text-white">
                  <CheckCircle className="w-5 h-5 text-green-300 mr-3" />
                  AI insights
                </li>
                <li className="flex items-center text-white">
                  <CheckCircle className="w-5 h-5 text-green-300 mr-3" />
                  Priority support
                </li>
                <li className="flex items-center text-white">
                  <CheckCircle className="w-5 h-5 text-green-300 mr-3" />
                  Custom reports
                </li>
              </ul>
              <a
                href="/contact"
                className="w-full bg-white text-indigo-600 py-3 px-6 rounded-lg font-semibold hover:bg-gray-100 transition-all text-center block"
              >
                Get Started
              </a>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-4">Enterprise</h3>
              <div className="text-4xl font-bold text-indigo-400 mb-6">Custom<span className="text-lg text-gray-300">/month</span></div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Unlimited dashboards
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Unlimited data sources
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Full AI suite
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Dedicated support
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Custom integrations
                </li>
              </ul>
              <a
                href="/contact"
                className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all text-center block"
              >
                Contact Sales
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Start Analyzing Your Data
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Transform your data into actionable insights with our AI-powered analytics tools.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all inline-flex items-center"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call: (302) 464-0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="border-2 border-indigo-600 text-indigo-300 px-8 py-4 rounded-lg font-semibold hover:bg-indigo-600 hover:text-white transition-all inline-flex items-center"
            >
              <Mail className="w-5 h-5 mr-2" />
              kleber@ziontechgroup.com
            </a>
          </div>
          <div className="mt-8 text-sm text-gray-400">
            <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AnalyticsToolsPage;