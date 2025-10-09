'use client';
import React from 'react';
import { CheckCircle, TrendingUp, Phone, Mail, MapPin, Star, Zap, Shield, Clock, Users, Award, ArrowRight, Bot, Settings, BarChart } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AIAutomationPage: React.FC = () => {
  const features = [
    'Intelligent process automation',
    'Workflow optimization',
    'Data processing automation',
    'Customer service automation',
    'Marketing automation',
    'Report generation',
    'Task scheduling',
    'Error handling and recovery',
    'Integration with existing systems',
    'Real-time monitoring and analytics'
  ];

  const benefits = [
    'Reduce manual work by 80%',
    'Increase productivity by 300%',
    'Eliminate human errors',
    '24/7 automated operations',
    'Faster response times',
    'Cost reduction',
    'Improved accuracy',
    'Scalable solutions'
  ];

  const automationTypes = [
    {
      title: 'Business Process Automation',
      description: 'Automate repetitive business tasks and workflows',
      examples: ['Invoice processing', 'Data entry', 'Report generation', 'Approval workflows']
    },
    {
      title: 'Customer Service Automation',
      description: 'AI-powered customer support and engagement',
      examples: ['Chatbots', 'Ticket routing', 'Response generation', 'Sentiment analysis']
    },
    {
      title: 'Marketing Automation',
      description: 'Streamline marketing campaigns and lead management',
      examples: ['Email campaigns', 'Social media posting', 'Lead scoring', 'Content scheduling']
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Automation - Zion Tech Group</title>
        <meta name="description" content="Transform your business with AI-powered automation solutions. Reduce manual work, increase efficiency, and scale your operations." />
        <meta name="keywords" content="AI automation, business process automation, workflow optimization, intelligent automation" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        <main className="pt-20">
          {/* Hero Section */}
          <section className="py-20 px-4">
            <div className="max-w-6xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                AI-Powered <span className="text-purple-400">Automation</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Transform your business with intelligent automation solutions that reduce manual work, 
                increase efficiency, and scale your operations 24/7.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center"
                >
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
                <a
                  href="/demo"
                  className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200"
                >
                  View Demo
                </a>
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center text-white mb-12">
              Key Features
            </h2>
            <div className="max-w-6xl mx-auto px-4">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {features.map((feature, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                    <div className="flex items-center mb-3">
                      <CheckCircle className="h-6 w-6 text-purple-400 mr-3" />
                      <h3 className="text-lg font-semibold text-white">{feature}</h3>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Benefits Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center text-white mb-12">
              Why Choose Our AI Automation?
            </h2>
            <div className="max-w-6xl mx-auto px-4">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 text-center">
                    <div className="text-2xl font-bold text-purple-400 mb-2">{benefit.split(' ')[0]}</div>
                    <p className="text-gray-300">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Automation Types Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center text-white mb-12">
              Types of Automation
            </h2>
            <div className="max-w-6xl mx-auto px-4">
              <div className="grid md:grid-cols-3 gap-8">
                {automationTypes.map((type, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20">
                    <h3 className="text-xl font-bold text-white mb-4">{type.title}</h3>
                    <p className="text-gray-300 mb-4">{type.description}</p>
                    <ul className="space-y-2">
                      {type.examples.map((example, exampleIndex) => (
                        <li key={exampleIndex} className="flex items-center text-gray-300">
                          <CheckCircle className="h-4 w-4 text-purple-400 mr-2" />
                          {example}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-16">
            <div className="max-w-4xl mx-auto text-center px-4">
              <h2 className="text-3xl font-bold text-white mb-6">
                Ready to Automate Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Let our AI automation experts help you identify opportunities and implement 
                solutions that will transform your operations.
              </p>
              <a
                href="/contact"
                className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200 inline-flex items-center"
              >
                Start Your Automation Journey
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default AIAutomationPage;