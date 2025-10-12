'use client';

import React from 'react';
import { 
  CheckCircle, 
  ArrowRight, 
  FileText, 
  BarChart3, 
  Clock, 
  Zap,
  Target,
  Users,
  DollarSign,
  TrendingUp,
  Database,
  Settings
} from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const AIAutomatedReportingPage: React.FC = () => {
  const services = [
    {
      icon: <FileText className="w-8 h-8 text-blue-500" />,
      title: 'Automated Reports',
      description: 'Generate comprehensive reports automatically with AI',
      features: ['Real-time data', 'Custom templates', 'Scheduled delivery', 'Multi-format export']
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-green-500" />,
      title: 'Data Visualization',
      description: 'Create interactive charts and dashboards automatically',
      features: ['Dynamic charts', 'Interactive dashboards', 'Real-time updates', 'Custom styling']
    },
    {
      icon: <Clock className="w-8 h-8 text-purple-500" />,
      title: 'Scheduled Reports',
      description: 'Automatically generate and deliver reports on schedule',
      features: ['Custom schedules', 'Email delivery', 'Multiple recipients', 'Report history']
    },
    {
      icon: <Zap className="w-8 h-8 text-orange-500" />,
      title: 'Smart Analytics',
      description: 'AI-powered insights and recommendations in reports',
      features: ['Trend analysis', 'Anomaly detection', 'Predictive insights', 'Action recommendations']
    }
  ];

  const benefits = [
    {
      icon: <Target className="w-6 h-6 text-green-500" />,
      title: 'Time Savings',
      description: 'Save hours of manual work with automated report generation'
    },
    {
      icon: <DollarSign className="w-6 h-6 text-blue-500" />,
      title: 'Cost Reduction',
      description: 'Reduce reporting costs by up to 80% with automation'
    },
    {
      icon: <Users className="w-6 h-6 text-purple-500" />,
      title: 'Better Insights',
      description: 'Get deeper insights with AI-powered analysis and recommendations'
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-orange-500" />,
      title: 'Improved Accuracy',
      description: 'Eliminate human errors with automated data processing'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Automated Reporting - Zion Tech Group</title>
        <meta name="description" content="Transform your reporting with AI-powered automated reporting solutions. Generate comprehensive reports, dashboards, and insights automatically." />
        <meta name="keywords" content="AI reporting, automated reports, data visualization, business intelligence, report automation" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            AI Automated
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent"> Reporting</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Transform your reporting process with AI-powered automation. 
            Generate comprehensive reports, dashboards, and insights automatically to save time and improve accuracy.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center"
            >
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link 
              to="/pricing" 
              className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              AI Reporting Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive AI-powered reporting solutions to automate your data analysis and reporting processes.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-gray-300 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
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
              Why Choose Our AI Reporting?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI-powered reporting solutions deliver measurable results and competitive advantages.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg mb-4 mx-auto">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Automate Your Reporting?
              </h2>
              <p className="text-lg sm:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
                Let's discuss how our AI automated reporting solutions can transform your data analysis and reporting processes.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact" 
                  className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Get Free Demo
                </Link>
                <Link 
                  to="/contact" 
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  Contact Our Team
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIAutomatedReportingPage;
