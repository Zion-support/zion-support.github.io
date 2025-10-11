'use client'
import React from 'react'
import {Helmet} from 'react-helmet-async'
import {ArrowRight, CheckCircle, Star, Users, Zap, Shield, Brain, BarChart, Target, TrendingUp, PieChart} from 'lucide-react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

const AiBusinessIntelligencePage: React.FC = () => {
  const features = [
    {
      icon: BarChart,
      title: 'Advanced Analytics',
      description: 'Comprehensive analytics dashboard with real-time data visualization and insights.',
      benefits: ['Real-time dashboards', 'Custom reports', 'Data visualization', 'Performance metrics']
    },
    {
      icon: Brain,
      title: 'AI-Powered Insights',
      description: 'Intelligent insights and recommendations powered by advanced AI algorithms.',
      benefits: ['Smart recommendations', 'Predictive analytics', 'Pattern recognition', 'Automated insights']
    },
    {
      icon: PieChart,
      title: 'Data Visualization',
      description: 'Stunning visualizations that make complex data easy to understand.',
      benefits: ['Interactive charts', 'Custom dashboards', 'Export capabilities', 'Mobile responsive']
    },
    {
      icon: Target,
      title: 'Goal Tracking',
      description: 'Set and track business goals with AI-powered monitoring and suggestions.',
      benefits: ['Goal setting', 'Progress tracking', 'Milestone alerts', 'Achievement insights']
    },
    {
      icon: Zap,
      title: 'Real-Time Processing',
      description: 'Process and analyze data in real-time for immediate insights.',
      benefits: ['Live data updates', 'Instant analysis', 'Real-time alerts', 'Automated workflows']
    },
    {
      icon: Shield,
      title: 'Data Security',
      description: 'Enterprise-grade security to protect your sensitive business data.',
      benefits: ['Data encryption', 'Access controls', 'Audit trails', 'Compliance ready']
    }
  ];

  const services = [
    {
      title: 'BI Platform Development',
      description: 'Custom business intelligence platform development for your specific needs.',
      icon: BarChart,
      benefits: ['Custom development', 'Platform integration', 'User interface', 'Data connectivity']
    },
    {
      title: 'Data Integration',
      description: 'Seamless integration with your existing data sources and systems.',
      icon: Zap,
      benefits: ['Data integration', 'API connections', 'Real-time sync', 'Data transformation']
    },
    {
      title: 'Analytics Consulting',
      description: 'Expert guidance on implementing business intelligence best practices.',
      icon: Brain,
      benefits: ['Strategy development', 'Best practices', 'Implementation support', 'Training']
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>AI Business Intelligence - Zion Tech Group</title>
        <meta name="description" content="Advanced AI-powered business intelligence solutions for data-driven decision making and insights." />
        <meta name="keywords" content="AI business intelligence, BI solutions, data analytics, business insights, AI analytics" />
      </Helmet>
      <Navigation />
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4">
          <div className="container mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              AI <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Business Intelligence</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Transform your data into actionable insights with AI-powered business intelligence solutions.
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
              <h2 className="text-4xl font-bold text-white mb-4">Business Intelligence Features</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Powerful AI technology that transforms your data into actionable business insights
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
                Comprehensive business intelligence solutions for your data needs
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
              <h2 className="text-4xl font-bold text-white mb-4">Ready to Transform Your Data?</h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Start using our AI business intelligence platform today and unlock the power of your data.
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

export default AiBusinessIntelligencePage;