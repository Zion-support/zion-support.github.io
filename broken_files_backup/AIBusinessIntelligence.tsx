import React from 'react';
import { Helmet } from 'react-helmet-async';
import { BarChart3, TrendingUp, Target, Users, Zap, Shield, ArrowRight, CheckCircle, Brain } from 'lucide-react';
const AIBusinessIntelligence: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>AI Business Intelligence | Zion Tech Group</title>
        <meta name="description" content="Transform your business with AI-powered business intelligence. Get real-time insights, predictive analytics, and intelligent decision-making capabilities." />
        <meta name="keywords" content="AI business intelligence, business analytics, predictive analytics, data insights, Zion Tech Group" />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="p-3 bg-indigo-500/20 rounded-full">
                <Brain className="h-8 w-8 text-indigo-400" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI Business Intelligence
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Unlock the power of artificial intelligence to transform your business data into actionable insights.
              Make smarter decisions with predictive analytics, real-time monitoring, and intelligent reporting.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center">
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border border-white/20 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300">
                Watch Demo
              </button>
            </div>
          </div>
        </section>
        {/* Key Features */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Intelligent Business Insights
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Leverage AI to transform raw data into strategic business intelligence
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-indigo-500/50 transition-all duration-300">
                <div className="p-3 bg-indigo-500/20 rounded-lg w-fit mb-4">
                  <BarChart3 className="h-6 w-6 text-indigo-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Predictive Analytics</h3>
                <p className="text-gray-300">
                  Forecast trends and identify opportunities with machine learning algorithms
                </p>
              </div>
              <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-indigo-500/50 transition-all duration-300">
                <div className="p-3 bg-green-500/20 rounded-lg w-fit mb-4">
                  <TrendingUp className="h-6 w-6 text-green-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Real-time Monitoring</h3>
                <p className="text-gray-300">
                  Live dashboards and alerts for instant business intelligence
                </p>
              </div>
              <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-indigo-500/50 transition-all duration-300">
                <div className="p-3 bg-purple-500/20 rounded-lg w-fit mb-4">
                  <Target className="h-6 w-6 text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Goal Tracking</h3>
                <p className="text-gray-300">
                  Monitor KPIs and track progress toward business objectives
                </p>
              </div>
              <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-indigo-500/50 transition-all duration-300">
                <div className="p-3 bg-blue-500/20 rounded-lg w-fit mb-4">
                  <Users className="h-6 w-6 text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Customer Insights</h3>
                <p className="text-gray-300">
                  Deep understanding of customer behavior and preferences
                </p>
              </div>
              <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-indigo-500/50 transition-all duration-300">
                <div className="p-3 bg-yellow-500/20 rounded-lg w-fit mb-4">
                  <Zap className="h-6 w-6 text-yellow-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Automated Reporting</h3>
                <p className="text-gray-300">
                  Generate comprehensive reports automatically with AI insights
                </p>
              </div>
              <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-indigo-500/50 transition-all duration-300">
                <div className="p-3 bg-red-500/20 rounded-lg w-fit mb-4">
                  <Shield className="h-6 w-6 text-red-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Risk Assessment</h3>
                <p className="text-gray-300">
                  Identify and mitigate business risks with intelligent analysis
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* Capabilities */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Comprehensive BI Capabilities
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Everything you need for intelligent business decision-making
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Data Analytics</h3>
                <div className="space-y-4">
                  {[
                    'Advanced Statistical Analysis',
                    'Machine Learning Models',
                    'Natural Language Processing',
                    'Pattern Recognition',
                    'Anomaly Detection',
                    'Trend Forecasting',
                    'Correlation Analysis',
                    'Predictive Modeling'
                  ].map((capability, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0" />
                      <span className="text-gray-300">{capability}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Business Intelligence</h3>
                <div className="space-y-4">
                  {[
                    'Interactive Dashboards',
                    'Custom Report Builder',
                    'Real-time Data Streaming',
                    'Multi-source Data Integration',
                    'Automated Insights Generation',
                    'Collaborative Analytics',
                    'Mobile BI Access',
                    'Advanced Visualization'
                  ].map((capability, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0" />
                      <span className="text-gray-300">{capability}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Use Cases */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Industry Applications
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Transform operations across every industry with AI-powered business intelligence
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10">
                <h3 className="text-xl font-semibold text-white mb-3">Finance</h3>
                <p className="text-gray-300">
                  Risk assessment, fraud detection, and investment portfolio optimization
                </p>
              </div>
              <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10">
                <h3 className="text-xl font-semibold text-white mb-3">Healthcare</h3>
                <p className="text-gray-300">
                  Patient outcome prediction, resource optimization, and clinical decision support
                </p>
              </div>
              <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10">
                <h3 className="text-xl font-semibold text-white mb-3">Retail</h3>
                <p className="text-gray-300">
                  Customer segmentation, inventory optimization, and demand forecasting
                </p>
              </div>
              <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10">
                <h3 className="text-xl font-semibold text-white mb-3">Manufacturing</h3>
                <p className="text-gray-300">
                  Predictive maintenance, quality control, and supply chain optimization
                </p>
              </div>
              <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10">
                <h3 className="text-xl font-semibold text-white mb-3">Marketing</h3>
                <p className="text-gray-300">
                  Campaign performance analysis, customer lifetime value, and ROI optimization
                </p>
              </div>
              <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10">
                <h3 className="text-xl font-semibold text-white mb-3">Operations</h3>
                <p className="text-gray-300">
                  Process optimization, resource allocation, and performance monitoring
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business Intelligence?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join leading organizations using AI to make smarter business decisions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 text-lg">
                Get Started Today
              </button>
              <button className="border border-white/20 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300 text-lg">
                Schedule Demo
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
export default AIBusinessIntelligence;