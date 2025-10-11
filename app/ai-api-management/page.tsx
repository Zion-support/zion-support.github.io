'use client';
import React from 'react';
import {Helmet} from 'react-helmet-async';
import {ArrowRight, CheckCircle, Star, Users, Zap, Shield, Brain, BarChart, Target, TrendingUp} from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AiApiManagementPage: React.FC = () => {
  const features = [
    {
      title: 'API Gateway',
      description: 'Centralized API management and routing',
      benefits: ['Benefit 1', 'Benefit 2', 'Benefit 3']
    },
    {
      title: 'Rate Limiting',
      description: 'Control API usage and prevent abuse',
      benefits: ['Real-time dashboards', 'Custom reports', 'Data visualization', 'Performance metrics']
    },
    {
      title: 'Analytics & Monitoring',
      description: 'Track API performance and usage',
      benefits: ['Predictive analytics', 'Trend analysis', 'Performance metrics', 'Growth forecasting']
    },
    {
      title: 'Security & Authentication',
      description: 'Secure your APIs with advanced auth',
      benefits: ['Goal tracking', 'Performance optimization', 'Strategic planning', 'Success metrics']
    }
  ];
  const benefits = [
    'Increase efficiency by up to 80%',
    'Reduce costs by 30% with automation',
    'Improve decision-making with AI insights',
    'Scale operations without proportional staff increases',
    'Real-time processing and analysis',
    'Seamless integration with existing systems'
  ]
  return (
    <>
      <Helmet>
        <title>AI Analytics - Zion Tech Group</title>
        <meta name="description" content="Advanced AI-powered analytics solutions for data-driven insights" />
        <meta name="keywords" content="AI analytics, data analysis, machine learning, business intelligence" />
      <Navigation />

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI API Management - Zion Tech Group</title>
        <meta name="description" content="Advanced AI-powered API management solutions for seamless integration" />
        <meta name="keywords" content="AI API management, API integration, artificial intelligence, API gateway" />
      <Navigation />

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                AI <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">API Management</span>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Streamline your API operations with intelligent management solutions
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300">
                  Get Started
                </button>
                <button className="border border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300">
                  View Demo
                </button>
              </div>

      <Footer />
    </>

      <Footer />
    </>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Powerful Features</h2>
              <p className="text-xl text-gray-300">Everything you need to succeed with AI</p>

      <Footer />
    </>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              
                <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                  <div className="flex items-center mb-4">
                    <feature.icon className="h-8 w-8 text-blue-600 mr-3">
                    <h3 className="text-xl font-semibold text-gray-900">
</div>
      <Footer />
    </>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    
                      <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="h-4 w-4 text-cyan-400 mr-2 flex-shrink-0" />
                        {benefit}
                    )
    </>
  )

      <Footer />
    </>
              ))}

      <Footer />
    </>

        {/* Benefits Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Why Choose Our AI Solutions?</h2>
              <p className="text-xl text-gray-300">Transform your business with intelligent automation</p>

      <Footer />
    </>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              
                <div key={index} className="bg-white p-6 rounded-xl shadow-lg">
                  <div className="flex items-center">
                    <CheckCircle className="h-6 w-6 text-green-500 mr-3">
                    <span className="text-lg font-medium text-gray-900">
</div>
    </>
                  <p className="text-gray-300">{benefit}</p>

      <Footer />
    </>
              ))}

      <Footer />
    </>

        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Contact us today to learn how our solutions can transform your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                Contact Us
              </button>
              <button className=">
    ,>
    r: bg-blue-600 hove, r:text-white transition-colors">
                Schedule Demo
            </div>

      <Footer />
    </>

      <Footer />
    </>
  );
};

export default AiApiManagementPage;
</Footer>
</Footer>
</Footer>
</Footer>
</div>
</section>
</Footer>
</Footer>
</Footer>
</p>
</Footer>
</span>
</CheckCircle>
</div>
</div>
</div>
</Footer>
</p>
</h2>
</div>
</div>
</section>
</Footer>
</Footer>
</Footer>
</CheckCircle>
</li>
</ul>
</p>
</h3>
</Footer>
</h3>
</feature>
</div>
</div>
</div>
</Footer>
</p>
</h2>
</div>
</div>
</section>
</Footer>
</Footer>
</Footer>
</span>
</h1>
</div>
</div>
</section>
</div>
</Navigation>
</title>
</Helmet>
</div>
</Navigation>
</title>
</Helmet>
</button>
