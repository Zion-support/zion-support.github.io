import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, ArrowRight, TrendingUp, BarChart3, Cloud, Target, Database } from 'lucide-react';

export default function AiAnalyticsDashboardProPage() {
  const features = [
    'AI-powered data analysis and insights',
    'Real-time dashboard customization',
    'Predictive analytics and forecasting',
    'Automated report generation',
    'Multi-source data integration',
    'Advanced visualization tools',
    'Custom KPI tracking and alerts',
    'White-label dashboard options',
    'Mobile-responsive design',
    'API access and custom integrations'
  ];

  const benefits = [
    'Make data-driven decisions 3x faster',
    'Identify trends and opportunities automatically',
    'Reduce reporting time by 90%',
    'Improve business performance by 35%',
    'Save 20+ hours weekly on data analysis',
    'Scale analytics with business growth'
  ];

  const integrations = [
    { name: 'Google Analytics', icon: <BarChart3 className="w-6 h-6 text-orange-400" /> },
    { name: 'Salesforce', icon: <Cloud className="w-6 h-6 text-blue-400" /> },
    { name: 'HubSpot', icon: <Target className="w-6 h-6 text-orange-400" /> },
    { name: 'MySQL', icon: <Database className="w-6 h-6 text-blue-600" /> },
    { name: 'PostgreSQL', icon: <Database className="w-6 h-6 text-indigo-400" /> },
    { name: 'MongoDB', icon: <Database className="w-6 h-6 text-green-400" /> }
  ];

  return (
    <>
      <Helmet>
        <title>AI Analytics Dashboard Pro - Zion Tech Group</title>
        <meta name="description" content="Advanced AI-powered analytics dashboard for comprehensive business intelligence and data visualization." />
      </Helmet>
      
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-cyan-50 to-purple-50 py-20">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-5xl font-bold text-gray-900 mb-6">
                AI Analytics Dashboard Pro
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Transform your data into actionable insights with our advanced AI-powered analytics platform. 
                Make smarter decisions faster with real-time dashboards and predictive analytics.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 group"
                >
                  Contact Us
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href="/services"
                  className="inline-flex items-center px-8 py-4 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400/10 transition-all duration-300"
                >
                  View All Services
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Powerful Features</h2>
              <p className="text-xl text-gray-600">Everything you need to unlock the power of your data</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <div className="flex items-center mb-4">
                    <CheckCircle className="w-6 h-6 text-green-500 mr-3" />
                    <h3 className="text-lg font-semibold text-gray-900">{feature}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="bg-white py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Proven Benefits</h2>
              <p className="text-xl text-gray-600">See the impact on your business</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <TrendingUp className="w-12 h-12 text-cyan-500 mx-auto mb-4" />
                  <p className="text-lg text-gray-700">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Integrations Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Seamless Integrations</h2>
              <p className="text-xl text-gray-600">Connect with your favorite tools and data sources</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {integrations.map((integration, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
                  <div className="flex justify-center mb-4">
                    {integration.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">{integration.name}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-cyan-500 to-purple-600 py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold text-white mb-4">Ready to Get Started?</h2>
            <p className="text-xl text-cyan-100 mb-8">
              Transform your data into actionable insights today
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-white text-cyan-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
              >
                Start Free Trial
              </a>
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-4 border border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
              >
                Schedule Demo
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}