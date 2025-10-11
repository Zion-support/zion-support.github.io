'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { BarChart, TrendingUp, PieChart, Activity, Database, Zap } from 'lucide-react';

const AIAnalyticsDashboardPage: React.FC = () => {
  const features = [
    {
      icon: BarChart,
      title: 'Real-time Analytics',
      description: 'Comprehensive real-time analytics with live data visualization and monitoring.',
      benefits: ['Live dashboards', 'Real-time updates', 'Interactive charts', 'Custom metrics']
    },
    {
      icon: TrendingUp,
      title: 'Trend Analysis',
      description: 'Advanced trend analysis with predictive insights and forecasting capabilities.',
      benefits: ['Predictive analytics', 'Trend forecasting', 'Pattern recognition', 'Future insights']
    },
    {
      icon: PieChart,
      title: 'Data Visualization',
      description: 'Beautiful and intuitive data visualization with interactive charts and graphs.',
      benefits: ['Interactive charts', 'Custom visualizations', 'Export capabilities', 'Responsive design']
    },
    {
      icon: Activity,
      title: 'Performance Monitoring',
      description: 'Comprehensive performance monitoring with alerts and optimization recommendations.',
      benefits: ['Performance alerts', 'Optimization tips', 'Resource monitoring', 'Efficiency metrics']
    },
    {
      icon: Database,
      title: 'Data Management',
      description: 'Advanced data management with secure storage and efficient processing.',
      benefits: ['Secure storage', 'Data processing', 'Backup systems', 'Data integrity']
    },
    {
      icon: Zap,
      title: 'AI Insights',
      description: 'AI-powered insights and recommendations for data-driven decision making.',
      benefits: ['Smart recommendations', 'Automated insights', 'Pattern detection', 'Intelligent alerts']
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Analytics Dashboard - Zion Tech Group | Advanced Data Analytics</title>
        <meta name="description" content="Advanced AI-powered analytics dashboard with real-time data visualization, predictive insights, and intelligent recommendations for data-driven decisions." />
        <meta name="keywords" content="AI analytics, data dashboard, business intelligence, data visualization, predictive analytics" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI Analytics <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Dashboard</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Advanced AI-powered analytics dashboard with real-time data visualization and intelligent insights.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300">
                Get Started
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300">
                View Demo
              </button>
            </div>
          </div>
        </section>
        
        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Powerful Features
              </h2>
              <p className="text-xl text-gray-300">
                Everything you need to analyze and visualize your data
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-lg p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <feature.icon className="w-8 h-8 text-blue-400 mr-3" />
                    <h3 className="text-xl font-bold text-white">{feature.title}</h3>
                  </div>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  {feature.benefits && (
                    <ul className="space-y-2">
                      {feature.benefits.map((benefit, idx) => (
                        <li key={idx} className="text-sm text-gray-400 flex items-center">
                          <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose AI Analytics?
              </h2>
              <p className="text-xl text-gray-300">
                Transform your data into actionable insights with intelligent analytics
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-400">50%</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Faster Insights</h3>
                <p className="text-gray-300">Get insights 50% faster with AI-powered analytics</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-purple-400">99%</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Accuracy</h3>
                <p className="text-gray-300">99% accuracy in data analysis and predictions</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-green-400">24/7</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Monitoring</h3>
                <p className="text-gray-300">24/7 real-time monitoring and alerts</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-orange-400">10x</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Productivity</h3>
                <p className="text-gray-300">10x increase in data processing productivity</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Data Analytics?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Get started with our AI-powered analytics dashboard and unlock the full potential of your data.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300">
                Start Free Trial
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300">
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