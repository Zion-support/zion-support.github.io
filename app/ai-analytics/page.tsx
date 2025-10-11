'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { CheckCircle, ArrowRight, Star, Clock, Zap, Shield, Brain, BarChart, Target, TrendingUp, Globe, Database, Users, Settings, Eye } from 'lucide-react';

const AiAnalyticsPage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Intelligence',
      description: 'Advanced AI algorithms that provide intelligent insights and recommendations.',
      benefits: ['Smart recommendations', 'Predictive analytics', 'Automated insights', 'Real-time analysis']
    },
    {
      icon: BarChart,
      title: 'Real-time Dashboards',
      description: 'Monitor your business metrics in real-time with customizable, interactive dashboards.',
      benefits: ['Live data updates', 'Custom widgets', 'Interactive charts', 'Mobile responsive']
    },
    {
      icon: TrendingUp,
      title: 'Performance Optimization',
      description: 'Optimize your business performance with AI-driven recommendations and insights.',
      benefits: ['Performance tracking', 'Optimization suggestions', 'ROI analysis', 'Growth strategies']
    },
    {
      icon: Zap,
      title: 'Fast Processing',
      description: 'Process large datasets in seconds with our optimized AI analytics engine.',
      benefits: ['High-speed processing', 'Scalable infrastructure', 'Real-time analysis', 'Batch processing']
    },
    {
      icon: Eye,
      title: 'Visual Analytics',
      description: 'Transform complex data into intuitive visualizations and interactive charts.',
      benefits: ['Interactive charts', 'Custom visualizations', 'Data storytelling', 'Export capabilities']
    },
    {
      icon: Shield,
      title: 'Data Security',
      description: 'Enterprise-grade security to protect your sensitive business data and analytics.',
      benefits: ['End-to-end encryption', 'Access controls', 'Audit trails', 'Compliance support']
    }
  ];

  const benefits = [
    'Increase efficiency by up to 50%',
    'Reduce costs by 30% with automation',
    'Improve decision-making with AI insights',
    'Scale operations without proportional staff increases',
    'Gain competitive advantage with advanced technology'
  ];

  const useCases = [
    {
      title: 'Business Intelligence',
      description: 'Transform raw data into actionable business insights',
      icon: '📊'
    },
    {
      title: 'Marketing Analytics',
      description: 'Optimize marketing campaigns with AI-powered insights',
      icon: '📈'
    },
    {
      title: 'Financial Analysis',
      description: 'Monitor financial performance and identify trends',
      icon: '💰'
    },
    {
      title: 'Customer Analytics',
      description: 'Understand customer behavior and preferences',
      icon: '👥'
    },
    {
      title: 'Operations Monitoring',
      description: 'Track operational metrics and optimize processes',
      icon: '⚙️'
    },
    {
      title: 'Risk Management',
      description: 'Identify and mitigate business risks proactively',
      icon: '🛡️'
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Analytics - Zion Tech Group | Advanced Data Intelligence</title>
        <meta name="description" content="Transform your business with AI-powered analytics. Get real-time insights, predictive analytics, and intelligent recommendations to drive growth." />
        <meta name="keywords" content="AI analytics, artificial intelligence, data analytics, business intelligence, predictive analytics" />
        <meta property="og:title" content="AI Analytics - Zion Tech Group" />
        <meta property="og:description" content="Transform your business with AI-powered analytics and insights" />
        <meta property="og:type" content="website" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        <main className="container mx-auto px-4 py-16 pt-24">
          {/* Hero Section */}
          <section className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              AI Analytics
            </h1>
            <p className="text-xl md:text-2xl text-cyan-400 mb-8 font-medium">
              Transform Your Data into Intelligent Insights
            </p>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Harness the power of artificial intelligence to unlock hidden patterns in your data, 
              predict future trends, and make data-driven decisions that drive business growth.
            </p>
          </section>

          {/* Features Section */}
          <section className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">
                Powerful AI Analytics Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Discover how our AI analytics platform can revolutionize your business intelligence.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-cyan-400/30 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mr-4">
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white">{feature.title}</h3>
                  </div>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Benefits Section */}
          <section className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">
                Why Choose Our AI Analytics?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Proven results that drive business growth and efficiency
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-cyan-400/30 transition-all duration-300 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-white" />
                  </div>
                  <p className="text-lg text-white font-medium">{benefit}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Use Cases Section */}
          <section className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">
                Use Cases
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Discover how AI analytics can transform different aspects of your business
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {useCases.map((useCase, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-cyan-400/30 transition-all duration-300 text-center">
                  <div className="text-4xl mb-4">{useCase.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-3">{useCase.title}</h3>
                  <p className="text-gray-300">{useCase.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center">
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
              <h2 className="text-2xl font-bold text-white mb-6">
                Ready to Transform Your Analytics?
              </h2>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                Join thousands of businesses already using our AI analytics platform to make smarter decisions and drive growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center"
                >
                  Get Started
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
                <a
                  href="tel:+13024640950"
                  className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center"
                >
                  <Clock className="w-4 h-4 mr-2" />
                  Call: (302) 464-0950
                </a>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default AiAnalyticsPage;
