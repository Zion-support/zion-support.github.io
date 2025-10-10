'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  BarChart, 
  TrendingUp, 
  PieChart, 
  Activity, 
  Zap, 
  Shield, 
  CheckCircle, 
  ArrowRight,
  Clock,
  Target,
  FileText,
  Users,
  Bell,
  Settings,
  Database
} from 'lucide-react';

const MicroSaasAnalyticsPage: React.FC = () => {
  const features = [
    {
      icon: BarChart,
      title: 'Real-time Dashboards',
      description: 'Interactive dashboards with live data visualization and customizable widgets'
    },
    {
      icon: TrendingUp,
      title: 'Advanced Analytics',
      description: 'AI-powered insights and predictive analytics for data-driven decisions'
    },
    {
      icon: PieChart,
      title: 'Custom Reports',
      description: 'Create and schedule custom reports with automated delivery and sharing'
    },
    {
      icon: Activity,
      title: 'Performance Monitoring',
      description: 'Track KPIs and metrics with real-time alerts and notifications'
    },
    {
      icon: Zap,
      title: 'Data Automation',
      description: 'Automated data collection, processing, and analysis workflows'
    },
    {
      icon: Shield,
      title: 'Data Security',
      description: 'Enterprise-grade security with encryption and compliance standards'
    }
  ];

  const capabilities = [
    {
      title: 'Business Intelligence',
      description: 'Transform raw data into actionable business insights',
      features: ['Data visualization', 'Trend analysis', 'Forecasting', 'Benchmarking']
    },
    {
      title: 'Custom Dashboards',
      description: 'Build personalized dashboards for different roles and departments',
      features: ['Drag-and-drop builder', 'Real-time updates', 'Mobile responsive', 'Role-based access']
    },
    {
      title: 'Data Integration',
      description: 'Connect and consolidate data from multiple sources',
      features: ['API connections', 'Database integration', 'File imports', 'Real-time sync']
    },
    {
      title: 'Advanced Reporting',
      description: 'Generate comprehensive reports with automated scheduling',
      features: ['Scheduled reports', 'Email delivery', 'PDF export', 'Interactive reports']
    }
  ];

  const integrations = [
    { name: 'Google Analytics', icon: '📊', description: 'Web analytics' },
    { name: 'Salesforce', icon: '☁️', description: 'CRM data' },
    { name: 'HubSpot', icon: '🎯', description: 'Marketing data' },
    { name: 'Stripe', icon: '💳', description: 'Payment data' },
    { name: 'MySQL', icon: '🗄️', description: 'Database' },
    { name: 'Slack', icon: '💬', description: 'Team notifications' }
  ];

  return (
    <>
      <Helmet>
        <title>Micro SaaS Analytics - AI-Powered Business Intelligence | Zion Tech Group</title>
        <meta name="description" content="Transform your data into insights with our AI-powered micro SaaS analytics platform. Real-time dashboards, custom reports, and business intelligence." />
        <meta name="keywords" content="business analytics, data visualization, business intelligence, reporting, micro saas" />
        <link rel="canonical" href="https://ziontechgroup.com/micro-saas-analytics" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-2xl flex items-center justify-center">
                  <BarChart className="w-8 h-8 text-white" />
                </div>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Micro SaaS Analytics
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Transform your data into actionable insights with our AI-powered micro SaaS analytics platform. 
                Real-time dashboards, custom reports, and intelligent business intelligence.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center">
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button>
                <button className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-xl font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300">
                  View Demo
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Advanced Analytics Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our micro SaaS platform provides powerful analytics tools to help you make data-driven decisions.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-cyan-500/50 transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-xl flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Capabilities Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Comprehensive Analytics Capabilities
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Everything you need to analyze, visualize, and act on your data.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {capabilities.map((capability, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                  <h3 className="text-2xl font-semibold text-white mb-4">{capability.title}</h3>
                  <p className="text-gray-300 mb-6">{capability.description}</p>
                  <ul className="space-y-2">
                    {capability.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-cyan-500/10 to-purple-600/10 rounded-3xl p-12 border border-cyan-500/20">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Unlock Your Data's Potential?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Start your free trial and discover the power of AI-driven analytics.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300">
                  Start Free Trial
                </button>
                <button className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-xl font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300">
                  Schedule Demo
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default MicroSaasAnalyticsPage;