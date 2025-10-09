'use client';
import React from 'react';
import Link from 'next/link';
import { BarChart3, Eye, TrendingUp, ArrowRight, CheckCircle, Star, Users, Shield, Clock, Zap } from 'lucide-react';

const AIDataVisualizationPage: React.FC = () => {
  const features = [
    {
      icon: BarChart3,
      title: 'Interactive Dashboards',
      description: 'Create stunning, interactive dashboards that bring your data to life',
      benefits: ['Real-time updates', 'Custom visualizations', 'Drill-down capabilities']
    },
    {
      icon: Eye,
      title: 'AI-Powered Insights',
      description: 'Automatically discover patterns and insights in your data with AI',
      benefits: ['Pattern recognition', 'Anomaly detection', 'Predictive insights']
    },
    {
      icon: TrendingUp,
      title: 'Advanced Analytics',
      description: 'Comprehensive analytics tools for deep data exploration and analysis',
      benefits: ['Statistical analysis', 'Trend forecasting', 'Correlation analysis']
    }
  ];

  const visualizationTypes = [
    {
      title: 'Business Intelligence',
      description: 'Executive dashboards and KPI monitoring for strategic decision making',
      icon: TrendingUp,
      features: ['KPI dashboards', 'Executive reports', 'Performance metrics']
    },
    {
      title: 'Operational Analytics',
      description: 'Real-time operational data visualization and monitoring',
      icon: Zap,
      features: ['Live monitoring', 'Alert systems', 'Process optimization']
    },
    {
      title: 'Customer Analytics',
      description: 'Customer behavior and engagement visualization and analysis',
      icon: Users,
      features: ['Customer journeys', 'Engagement metrics', 'Segmentation analysis']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <div className="relative overflow-hidden">
        <div className="cyber-grid"></div>
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center mr-4">
                <BarChart3 className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-5xl font-bold text-white neon-text">
                AI Data Visualization
              </h1>
            </div>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Transform complex data into compelling visual stories with our AI-powered 
              data visualization platform. Create interactive dashboards, discover hidden 
              insights, and make data-driven decisions with confidence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="cyber-button inline-flex items-center justify-center px-8 py-4 text-lg font-semibold"
              >
                Start Visualizing
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                href="/demo"
                className="cyber-button-outline inline-flex items-center justify-center px-8 py-4 text-lg font-semibold"
              >
                View Live Demo
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Advanced Data Visualization</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI data visualization platform combines powerful analytics with 
              intuitive design to make complex data accessible and actionable.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="cyber-card p-8 text-center group hover:scale-105 transition-transform duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300 mb-6">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-sm text-gray-400">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Visualization Types Section */}
      <div className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Visualization Solutions</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Create the perfect visualization for any data type or business need
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {visualizationTypes.map((type, index) => (
              <div key={index} className="cyber-card p-8 group hover:scale-105 transition-transform duration-300">
                <div className="flex items-center mb-4">
                  <type.icon className="w-8 h-8 text-cyan-400 mr-3" />
                  <h3 className="text-xl font-bold text-white">{type.title}</h3>
                </div>
                <p className="text-gray-300 mb-6">{type.description}</p>
                <ul className="space-y-2">
                  {type.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-400">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">Why Choose Our Data Visualization?</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-4 mt-1">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Instant Insights</h3>
                    <p className="text-gray-300">Discover patterns and insights in seconds, not hours</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mr-4 mt-1">
                    <Shield className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Easy to Use</h3>
                    <p className="text-gray-300">No coding required - drag and drop interface</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center mr-4 mt-1">
                    <Clock className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Real-time Updates</h3>
                    <p className="text-gray-300">Always see the latest data with live updates</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="cyber-card p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Ready to Visualize Your Data?</h3>
              <p className="text-gray-300 mb-6">
                Transform your data into actionable insights with our AI-powered 
                visualization platform. Get started with a free trial.
              </p>
              <div className="space-y-4">
                <Link
                  href="/contact"
                  className="cyber-button w-full inline-flex items-center justify-center py-3"
                >
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link
                  href="/demo"
                  className="cyber-button-outline w-full inline-flex items-center justify-center py-3"
                >
                  Schedule Demo
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Make Data-Driven Decisions
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Don't let valuable insights hide in your data. Our AI visualization platform 
            will help you see patterns, trends, and opportunities you never knew existed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="cyber-button inline-flex items-center justify-center px-8 py-4 text-lg font-semibold"
            >
              Get Started Today
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link
              href="/pricing"
              className="cyber-button-outline inline-flex items-center justify-center px-8 py-4 text-lg font-semibold"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIDataVisualizationPage;