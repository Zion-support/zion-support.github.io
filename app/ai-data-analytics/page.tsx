'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { Brain, BarChart, Target, TrendingUp, CheckCircle, ArrowRight, Database, PieChart, Activity } from 'lucide-react'

const AIDataAnalyticsPage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Insights',
      description: 'Advanced machine learning algorithms that discover hidden patterns and trends in your data',
      benefits: ['Predictive Analytics', 'Anomaly Detection', 'Pattern Recognition', 'Automated Insights']
    },
    {
      icon: BarChart,
      title: 'Real-Time Dashboards',
      description: 'Interactive dashboards that provide real-time insights into your business performance',
      benefits: ['Live Data Visualization', 'Custom Metrics', 'Interactive Charts', 'Mobile Responsive']
    },
    {
      icon: Target,
      title: 'Predictive Modeling',
      description: 'Build accurate predictive models to forecast future trends and outcomes',
      benefits: ['Forecasting', 'Risk Assessment', 'Trend Analysis', 'Scenario Planning']
    },
    {
      icon: TrendingUp,
      title: 'Performance Optimization',
      description: 'Optimize your business processes based on data-driven insights and recommendations',
      benefits: ['Process Optimization', 'Cost Reduction', 'Efficiency Gains', 'ROI Improvement']
    }
  ];

  const analyticsTypes = [
    {
      icon: Database,
      title: 'Data Integration',
      description: 'Connect and integrate data from multiple sources for comprehensive analysis'
    },
    {
      icon: PieChart,
      title: 'Visual Analytics',
      description: 'Create compelling visualizations that make complex data easy to understand'
    },
    {
      icon: Activity,
      title: 'Real-Time Monitoring',
      description: 'Monitor key metrics and KPIs in real-time with automated alerts'
    }
  ];

  const benefits = [
    'Make data-driven decisions with confidence',
    'Identify new business opportunities',
    'Reduce operational costs through optimization',
    'Improve customer satisfaction and retention',
    'Accelerate time-to-insight by 80%',
    'Scale analytics across your entire organization'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <Helmet>
        <title>AI Data Analytics - Zion Tech Group | Advanced Analytics Solutions</title>
        <meta name="description" content="Transform your data into actionable insights with our AI-powered analytics solutions. Advanced machine learning, real-time dashboards, and predictive modeling." />
        <meta name="keywords" content="AI analytics, data analytics, machine learning, business intelligence, predictive analytics, data visualization" />
      </Helmet>

      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(120,119,198,0.3)_0%,transparent_50%)] animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            AI Data <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Analytics</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Transform your data into actionable insights with our AI-powered analytics solutions. Discover patterns, predict trends, and make data-driven decisions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300">
              Get Started
            </button>
            <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300">
              View Demo
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Advanced Analytics Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI-powered analytics platform provides everything you need to extract valuable insights from your data.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <feature.icon className="w-8 h-8 text-blue-400 mr-3" />
                  <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
                </div>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-400">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Analytics Types Section */}
      <section className="py-20 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Comprehensive Analytics Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From data integration to real-time monitoring, we provide end-to-end analytics capabilities.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {analyticsTypes.map((type, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 text-center">
                <div className="flex items-center justify-center mb-6">
                  <type.icon className="w-12 h-12 text-blue-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{type.title}</h3>
                <p className="text-gray-300">{type.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Why Choose Our AI Analytics?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the power of AI-driven analytics that transform your business intelligence.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                <p className="text-gray-300">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Unlock Your Data's Potential?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's work together to transform your data into actionable insights that drive business growth.
          </p>
          <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center mx-auto">
            Start Your Analytics Journey
            <ArrowRight className="w-5 h-5 ml-2" />
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AIDataAnalyticsPage;