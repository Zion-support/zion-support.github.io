'use client'
import React from 'react'
import {Helmet} from 'react-helmet-async'
import {ArrowRight, CheckCircle, Star, Users, Zap, Shield, Brain, BarChart, Target, TrendingUp, AlertTriangle} from 'lucide-react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

const AiCustomerChurnPage: React.FC = () => {
  const features = [
    {
      icon: AlertTriangle,
      title: 'Churn Prediction',
      description: 'Advanced AI-powered prediction of customer churn with high accuracy.',
      benefits: ['Early warning', 'Risk scoring', 'Predictive modeling', 'Churn probability']
    },
    {
      icon: Brain,
      title: 'Intelligent Analysis',
      description: 'AI-driven analysis of customer behavior and churn patterns.',
      benefits: ['Behavior analysis', 'Pattern recognition', 'Trend identification', 'Insight generation']
    },
    {
      icon: Zap,
      title: 'Real-Time Monitoring',
      description: 'Real-time monitoring of customer churn indicators and alerts.',
      benefits: ['Live monitoring', 'Instant alerts', 'Real-time updates', 'Dynamic tracking']
    },
    {
      icon: Shield,
      title: 'Retention Strategies',
      description: 'AI-powered retention strategies and intervention recommendations.',
      benefits: ['Retention tactics', 'Intervention plans', 'Personalized offers', 'Engagement strategies']
    },
    {
      icon: BarChart,
      title: 'Analytics & Reporting',
      description: 'Comprehensive analytics and reporting for churn prevention and customer retention.',
      benefits: ['Churn metrics', 'Retention analysis', 'Performance tracking', 'Custom reports']
    },
    {
      icon: Target,
      title: 'Custom Solutions',
      description: 'Tailored churn prevention solutions for specific industries and business models.',
      benefits: ['Industry-specific', 'Custom models', 'Specialized strategies', 'Flexible configuration']
    }
  ];

  const services = [
    {
      title: 'Churn Analysis',
      description: 'Comprehensive analysis of customer churn patterns and risk factors.',
      icon: AlertTriangle,
      benefits: ['Data analysis', 'Pattern identification', 'Risk assessment', 'Insight generation']
    },
    {
      title: 'Retention Strategies',
      description: 'Development and implementation of AI-powered retention strategies.',
      icon: Brain,
      benefits: ['Strategy development', 'Implementation support', 'Performance optimization', 'ROI tracking']
    },
    {
      title: 'Ongoing Support',
      description: 'Continuous support and optimization of churn prevention systems.',
      icon: Shield,
      benefits: ['System maintenance', 'Performance monitoring', 'Issue resolution', 'Updates']
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>AI Customer Churn - Zion Tech Group</title>
        <meta name="description" content="Advanced AI-powered customer churn prediction and prevention platform for intelligent customer retention." />
        <meta name="keywords" content="AI customer churn, churn prediction, customer retention, churn prevention, AI retention" />
      </Helmet>
      <Navigation />
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4">
          <div className="container mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              AI <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Customer Churn</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Advanced AI-powered customer churn prediction and prevention platform for intelligent customer retention.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 flex items-center">
                Get Started
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="border border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300">
                View Demo
              </button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Customer Churn Features</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Powerful AI technology that predicts and prevents customer churn
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mr-4">
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
                  </div>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
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

        {/* Services Section */}
        <section className="py-20 px-4 bg-white/5">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Our Services</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive customer churn solutions for your business needs
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {services.map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-4">{service.title}</h3>
                    <p className="text-gray-300 mb-6">{service.description}</p>
                    <ul className="space-y-2">
                      {service.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto text-center">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-12">
              <h2 className="text-4xl font-bold text-white mb-4">Ready to Prevent Churn?</h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Start using our AI customer churn platform today and retain more customers.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Get Started
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AiCustomerChurnPage;