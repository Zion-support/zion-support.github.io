'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { CheckCircle, ArrowRight, Star, Clock, Zap, Shield, Brain, BarChart, Target, TrendingUp, Globe, Database, Users, Settings } from 'lucide-react';

const AiCrmAssistantPage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered CRM Assistant',
      description: 'Advanced AI algorithms that provide intelligent customer relationship management.',
      benefits: ['Lead scoring', 'Customer insights', 'Automated follow-ups', 'Predictive analytics']
    },
    {
      icon: Users,
      title: 'Customer Management',
      description: 'Comprehensive customer data management and relationship tracking.',
      benefits: ['Contact management', 'Interaction history', 'Customer profiles', 'Relationship mapping']
    },
    {
      icon: Target,
      title: 'Sales Automation',
      description: 'Automate sales processes and improve conversion rates.',
      benefits: ['Lead qualification', 'Sales pipeline', 'Deal tracking', 'Revenue forecasting']
    },
    {
      icon: Settings,
      title: 'Easy Integration',
      description: 'Seamlessly integrate with existing CRM systems and tools.',
      benefits: ['API integration', 'Data synchronization', 'Third-party tools', 'Custom workflows']
    },
    {
      icon: Shield,
      title: 'Data Security',
      description: 'Enterprise-grade security to protect customer data and privacy.',
      benefits: ['Data encryption', 'Access controls', 'Audit trails', 'Compliance support']
    },
    {
      icon: Globe,
      title: 'Multi-Channel Support',
      description: 'Manage customer interactions across multiple channels.',
      benefits: ['Email integration', 'Social media', 'Phone support', 'Chat support']
    }
  ];

  const benefits = [
    'Improve customer relationships with AI insights',
    'Automate sales processes and increase conversions',
    'Gain valuable customer insights and analytics',
    'Streamline customer service and support',
    'Scale CRM operations efficiently',
    'Ensure data security and compliance'
  ];

  const useCases = [
    {
      title: 'Lead Management',
      description: 'Qualify and manage leads with AI assistance',
      icon: Target
    },
    {
      title: 'Customer Service',
      description: 'Provide intelligent customer support and assistance',
      icon: Users
    },
    {
      title: 'Sales Forecasting',
      description: 'Predict sales outcomes with AI analytics',
      icon: BarChart
    },
    {
      title: 'Marketing Automation',
      description: 'Automate marketing campaigns and customer outreach',
      icon: Globe
    }
  ];

  return (
    <React.Fragment>
      <Helmet>
        <title>AI CRM Assistant - Zion Tech Group</title>
        <meta name="description" content="Advanced AI-powered CRM assistant for modern applications. Manage customer relationships with intelligent automation." />
        <meta name="keywords" content="CRM assistant, AI CRM, customer relationship management, sales automation, customer insights" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                AI CRM Assistant
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Transform your customer relationships with our AI-powered CRM assistant. 
                Automate processes, gain insights, and improve customer satisfaction.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <span>Get Started</span>
                  <ArrowRight className="w-5 h-5" />
                </a>
                <a
                  href="#features"
                  className="border border-white/20 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Comprehensive CRM Features</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our CRM assistant provides everything you need to manage customer relationships effectively.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-slate-800/50 rounded-xl p-8 backdrop-blur-sm border border-white/10 hover:border-cyan-500/50 transition-all duration-300">
                  <div className="bg-cyan-500/20 rounded-full w-12 h-12 flex items-center justify-center mb-6">
                    <feature.icon className="w-6 h-6 text-cyan-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300 mb-6">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                        <span className="text-sm">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20 bg-slate-800/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Use Cases</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Discover how our CRM assistant can transform your customer relationship management.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {useCases.map((useCase, index) => (
                <div key={index} className="bg-slate-800/50 rounded-xl p-6 backdrop-blur-sm border border-white/10 text-center">
                  <div className="bg-purple-500/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <useCase.icon className="w-8 h-8 text-purple-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-3">{useCase.title}</h3>
                  <p className="text-gray-300 text-sm">{useCase.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-white mb-6">Why Choose Our CRM Assistant?</h2>
                <p className="text-lg text-gray-300 mb-8">
                  Our AI-powered CRM assistant is designed to help you manage customer relationships 
                  more effectively with intelligent automation and insights.
                </p>
                <ul className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="w-6 h-6 text-green-400 mr-4 flex-shrink-0 mt-1" />
                      <span className="text-gray-300">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative">
                <div className="bg-gradient-to-br from-cyan-500/20 to-purple-600/20 rounded-2xl p-8 backdrop-blur-sm border border-white/10">
                  <div className="text-center">
                    <div className="bg-cyan-500/20 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                      <Users className="w-10 h-10 text-cyan-400" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">Customer Success</h3>
                    <p className="text-gray-300 mb-6">
                      Build stronger customer relationships with AI-powered insights and automation.
                    </p>
                    <div className="grid grid-cols-2 gap-4 text-center">
                      <div>
                        <div className="text-3xl font-bold text-cyan-400">40%</div>
                        <div className="text-gray-300 text-sm">Conversion Rate</div>
                      </div>
                      <div>
                        <div className="text-3xl font-bold text-purple-400">85%</div>
                        <div className="text-gray-300 text-sm">Customer Satisfaction</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-slate-800/50">
          <div className="container mx-auto px-4 text-center">
            <div className="bg-gradient-to-r from-cyan-500/10 to-purple-600/10 rounded-2xl p-12 backdrop-blur-sm border border-white/10">
              <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your CRM?</h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Start managing customer relationships with our AI-powered CRM assistant. 
                Get started today and see the difference intelligent CRM can make.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <span>Get Started Now</span>
                  <ArrowRight className="w-5 h-5" />
                </a>
                <a
                  href="/pricing"
                  className="border border-white/20 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <span>View Pricing</span>
                  <ArrowRight className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </React.Fragment>
  );
};

export default AiCrmAssistantPage;