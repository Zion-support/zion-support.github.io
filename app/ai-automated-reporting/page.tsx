'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { FileText, BarChart, Clock, Zap, Shield, TrendingUp } from 'lucide-react';

const AIAutomatedReportingPage: React.FC = () => {
  const features = [
    {
      icon: FileText,
      title: 'Automated Report Generation',
      description: 'Generate comprehensive reports automatically with AI-powered data analysis and insights.',
      benefits: ['Auto-generation', 'Data analysis', 'Insight extraction', 'Custom formatting']
    },
    {
      icon: BarChart,
      title: 'Data Visualization',
      description: 'Create beautiful and interactive data visualizations with charts, graphs, and dashboards.',
      benefits: ['Interactive charts', 'Custom dashboards', 'Real-time updates', 'Export options']
    },
    {
      icon: Clock,
      title: 'Scheduled Reports',
      description: 'Set up automated report scheduling with customizable frequency and delivery options.',
      benefits: ['Custom scheduling', 'Email delivery', 'Multiple formats', 'Recipient management']
    },
    {
      icon: Zap,
      title: 'Real-time Processing',
      description: 'Process and generate reports in real-time with instant data updates and notifications.',
      benefits: ['Real-time updates', 'Instant processing', 'Live notifications', 'Dynamic content']
    },
    {
      icon: Shield,
      title: 'Security & Compliance',
      description: 'Enterprise-grade security with compliance monitoring and data protection standards.',
      benefits: ['Data encryption', 'Access control', 'Audit trails', 'Compliance reporting']
    },
    {
      icon: TrendingUp,
      title: 'Performance Analytics',
      description: 'Advanced performance analytics with trend analysis and predictive insights.',
      benefits: ['Trend analysis', 'Predictive insights', 'Performance metrics', 'Optimization tips']
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Automated Reporting - Zion Tech Group | Intelligent Report Generation</title>
        <meta name="description" content="Advanced AI-powered automated reporting solution with intelligent data analysis, real-time processing, and comprehensive visualization capabilities." />
        <meta name="keywords" content="AI reporting, automated reports, data visualization, business intelligence, report generation" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI Automated <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Reporting</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Advanced AI-powered automated reporting solution with intelligent data analysis and comprehensive visualization.
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
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Powerful Features
              </h2>
              <p className="text-xl text-gray-300">
                Everything you need for intelligent automated reporting
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
        
        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Automate Your Reporting?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Get started with our AI-powered automated reporting solution and transform your data into actionable insights.
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

export default AIAutomatedReportingPage;