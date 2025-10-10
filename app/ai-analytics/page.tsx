<<<<<<< HEAD
=======
'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { CheckCircle, TrendingUp, Brain, BarChart, Target, Zap, Users, Star, Award, Activity, PieChart, Globe, Shield, ArrowRight } from 'lucide-react';

const AIAnalyticsPage: React.FC = () => {
  const features = [
    {
>>>>>>> cursor/fix-errors-and-merge-to-main-a7bb
      icon: Brain,
      title: 'AI-Powered Insights',
      description: 'Get intelligent insights and recommendations powered by advanced machine learning algorithms.',
      benefits: ['Predictive analytics', 'Anomaly detection', 'Trend analysis', 'Smart recommendations']
    },
    {
      icon: BarChart,
      title: 'Real-Time Dashboards',
      description: 'Monitor your business metrics in real-time with customizable, interactive dashboards.',
      benefits: ['Live data updates', 'Custom widgets', 'Interactive charts', 'Mobile responsive']
    },
    {
      icon: Target,
      title: 'Automated Reporting',
      description: 'Generate comprehensive reports automatically with AI-optimized content and visualizations.',
      benefits: ['Scheduled reports', 'Custom templates', 'PDF export', 'Email delivery']
    },
    {
      icon: TrendingUp,
<<<<<<< HEAD
=======
      title: 'Performance Analytics',
      description: 'Track and analyze performance metrics across all your business operations.',
      benefits: ['KPI tracking', 'Performance monitoring', 'Efficiency metrics', 'Growth analysis']
    },
    {
      icon: Activity,
      title: 'Real-time Monitoring',
      description: 'Monitor your systems and processes in real-time with instant alerts and notifications.',
      benefits: ['Live monitoring', 'Instant alerts', 'System health', 'Performance tracking']
    },
    {
      icon: PieChart,
      title: 'Data Visualization',
      description: 'Transform complex data into clear, actionable insights with advanced visualization tools.',
      benefits: ['Interactive charts', 'Custom visualizations', 'Data storytelling', 'Export options']
>>>>>>> cursor/fix-errors-and-merge-to-main-a7bb
    }
  ],

  const benefits = [
<<<<<<< HEAD
=======
    'Increase data accuracy by 95%',
    'Reduce analysis time by 80%',
    'Improve decision-making speed by 70%',
    'Lower operational costs by 40%',
    'Enable real-time business insights',
    'Automate routine analytics tasks',
    'Scale analytics across departments',
    'Enhance competitive advantage'
  ];
>>>>>>> cursor/fix-errors-and-merge-to-main-a7bb

  const useCases = [
    {
      title: 'Business Intelligence',
      description: 'Transform raw data into actionable business insights',
      icon: '📊'
    },
    {
      title: 'Performance Monitoring',
      description: 'Track and monitor business performance in real-time',
      icon: '📈'
    },
    {
      title: 'Predictive Analytics',
      description: 'Predict future trends and outcomes with AI',
      icon: '🔮'
    },
    {
<<<<<<< HEAD
=======
      title: 'Customer Analytics',
      description: 'Understand customer behavior and preferences',
      icon: '👥'
>>>>>>> cursor/fix-errors-and-merge-to-main-a7bb
    },
    {
      title: 'Financial Analytics',
      description: 'Monitor financial performance and predict trends',
      icon: '💰'
    },
    {
      title: 'Operational Analytics',
      description: 'Optimize operations with data-driven insights',
      icon: '⚙️'
    }
  ],

  return (
    <>
      <Helmet>
        <title>AI Analytics - Zion Tech Group</title>
        <meta name="description" content="Transform your data into actionable insights with our AI Analytics solution. Advanced analytics, real-time monitoring, and predictive modeling for better business decisions." />
        <meta name="keywords" content="AI analytics, business intelligence, data analysis, predictive analytics, real-time monitoring, data visualization" />
      </Helmet>

      <Navigation />
<<<<<<< HEAD
=======

      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mb-8">
              <Brain className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI Analytics
>>>>>>> cursor/fix-errors-and-merge-to-main-a7bb
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your data into actionable insights with our advanced AI Analytics solution. 
              Real-time monitoring, predictive modeling, and intelligent reporting for better business decisions.
            </p>
<<<<<<< HEAD
=======
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-indigo-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center">
                Start Analyzing
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
              <button className="border border-indigo-400 text-indigo-300 px-8 py-4 rounded-lg font-semibold hover:bg-indigo-500 hover:text-white transition-all duration-300">
                View Demo
              </button>
>>>>>>> cursor/fix-errors-and-merge-to-main-a7bb
            </div>
          </div>
        </section>

<<<<<<< HEAD
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
=======
        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Advanced AI Analytics Features
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Our AI Analytics solution combines cutting-edge technology with intuitive design
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg mb-4">
                    <feature.icon className="w-6 h-6 text-white" />
>>>>>>> cursor/fix-errors-and-merge-to-main-a7bb
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-indigo-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

<<<<<<< HEAD
=======
        {/* Use Cases Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Applications & Use Cases
>>>>>>> cursor/fix-errors-and-merge-to-main-a7bb
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                From startups to enterprises, our AI Analytics solution serves diverse industries
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {useCases.map((useCase, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 text-center">
                  <div className="text-4xl mb-4">{useCase.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-3">{useCase.title}</h3>
                  <p className="text-gray-300">{useCase.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose Our AI Analytics?
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Experience the future of data analytics with our revolutionary AI technology
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg mb-4">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-white font-medium">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl p-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Transform Your Data?
              </h2>
              <p className="text-xl text-indigo-100 mb-8">
                Join thousands of businesses who are already using our AI Analytics solution
              </p>
<<<<<<< HEAD
=======
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-indigo-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center">
                  Get Started Now
                  <ArrowRight className="ml-2 w-5 h-5" />
                </button>
                <button className="border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-all duration-300">
                  Schedule Demo
>>>>>>> cursor/fix-errors-and-merge-to-main-a7bb
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  ),
},

<<<<<<< HEAD
=======
export default AIAnalyticsPage;
>>>>>>> cursor/fix-errors-and-merge-to-main-a7bb
