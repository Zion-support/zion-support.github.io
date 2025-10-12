'use client';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Brain, Zap, Shield, BarChart, MessageCircle, Eye, Mic, 
  FileText, Users, Heart, DollarSign, Target, Settings, 
  CheckCircle, ArrowRight, Star, Clock, Award, TrendingUp,
  Cpu, Database, Globe, Smartphone, Lock, Workflow, Sparkles
} from 'lucide-react';

const AiServicesPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const aiServices = [
    {
      icon: <Brain className="w-8 h-8 text-cyan-400" />,
      title: 'AI Analytics & Business Intelligence',
      description: 'Transform your data into actionable insights with advanced AI-powered analytics.',
      features: ['Predictive Analytics', 'Real-time Dashboards', 'Custom Reports', 'Data Visualization']
    },
    {
      icon: <MessageCircle className="w-8 h-8 text-purple-400" />,
      title: 'AI Chatbots & Virtual Assistants',
      description: 'Deploy intelligent conversational AI to enhance customer experience and support.',
      features: ['Natural Language Processing', 'Multi-channel Support', '24/7 Availability', 'Custom Training']
    },
    {
      icon: <Eye className="w-8 h-8 text-green-400" />,
      title: 'Computer Vision & Image Recognition',
      description: 'Extract valuable insights from images and videos using advanced computer vision.',
      features: ['Object Detection', 'Facial Recognition', 'Quality Control', 'Automated Analysis']
    },
    {
      icon: <Mic className="w-8 h-8 text-yellow-400" />,
      title: 'Speech & Voice Processing',
      description: 'Convert speech to text and enable voice-controlled applications.',
      features: ['Speech Recognition', 'Voice Synthesis', 'Language Translation', 'Voice Analytics']
    },
    {
      icon: <FileText className="w-8 h-8 text-red-400" />,
      title: 'Document Intelligence',
      description: 'Automate document processing and extract structured data from unstructured content.',
      features: ['OCR Technology', 'Data Extraction', 'Form Processing', 'Content Analysis']
    },
    {
      icon: <Users className="w-8 h-8 text-blue-400" />,
      title: 'AI-Powered HR Solutions',
      description: 'Streamline HR processes with intelligent automation and analytics.',
      features: ['Resume Screening', 'Employee Analytics', 'Performance Tracking', 'Recruitment Automation']
    }
  ];

  const benefits = [
    {
      icon: <CheckCircle className="w-6 h-6 text-green-400" />,
      title: 'Increased Efficiency',
      description: 'Automate repetitive tasks and focus on strategic initiatives'
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-blue-400" />,
      title: 'Better Decision Making',
      description: 'Leverage AI insights for data-driven business decisions'
    },
    {
      icon: <DollarSign className="w-6 h-6 text-green-400" />,
      title: 'Cost Reduction',
      description: 'Reduce operational costs through intelligent automation'
    },
    {
      icon: <Heart className="w-6 h-6 text-red-400" />,
      title: 'Enhanced Customer Experience',
      description: 'Deliver personalized and responsive customer interactions'
    }
  ];

  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'services', label: 'Our Services' },
    { id: 'benefits', label: 'Benefits' },
    { id: 'pricing', label: 'Pricing' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Services</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Transform your business with cutting-edge AI solutions designed to drive growth, efficiency, and innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300"
              >
                Get Started
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/demo"
                className="inline-flex items-center px-8 py-3 border border-gray-600 text-white font-semibold rounded-lg hover:bg-gray-800 transition-all duration-300"
              >
                View Demo
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Tabs Navigation */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white'
                    : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Overview Tab */}
      {activeTab === 'overview' && (
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Why Choose Our AI Services?</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We combine cutting-edge AI technology with deep industry expertise to deliver solutions that drive real business value.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700 text-center">
                  <div className="flex justify-center mb-4">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Services Tab */}
      {activeTab === 'services' && (
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Our AI Services</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive AI solutions tailored to your business needs and industry requirements.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {aiServices.map((service, index) => (
                <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700">
                  <div className="flex justify-center mb-4">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Benefits Tab */}
      {activeTab === 'benefits' && (
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Business Benefits</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Discover how our AI services can transform your business operations and drive growth.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center">
                      <TrendingUp className="w-6 h-6 text-blue-400" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Increased Productivity</h3>
                    <p className="text-gray-300">Automate routine tasks and free up your team to focus on high-value activities.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center">
                      <DollarSign className="w-6 h-6 text-green-400" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Cost Savings</h3>
                    <p className="text-gray-300">Reduce operational costs through intelligent automation and process optimization.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center">
                      <Target className="w-6 h-6 text-purple-400" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Better Accuracy</h3>
                    <p className="text-gray-300">Minimize human errors and improve decision-making with AI-powered insights.</p>
                  </div>
                </div>
              </div>
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-red-500/20 rounded-lg flex items-center justify-center">
                      <Heart className="w-6 h-6 text-red-400" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Enhanced Customer Experience</h3>
                    <p className="text-gray-300">Deliver personalized and responsive customer interactions 24/7.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-yellow-500/20 rounded-lg flex items-center justify-center">
                      <BarChart className="w-6 h-6 text-yellow-400" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Data-Driven Insights</h3>
                    <p className="text-gray-300">Unlock valuable insights from your data to make informed business decisions.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center">
                      <Zap className="w-6 h-6 text-cyan-400" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Scalable Solutions</h3>
                    <p className="text-gray-300">Grow your AI capabilities as your business expands and evolves.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Pricing Tab */}
      {activeTab === 'pricing' && (
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Flexible Pricing Plans</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the plan that best fits your business needs and budget.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-8 border border-gray-700">
                <h3 className="text-2xl font-bold text-white mb-4">Starter</h3>
                <div className="text-4xl font-bold text-white mb-6">$2,999<span className="text-lg text-gray-400">/month</span></div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Basic AI Analytics
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Simple Chatbot
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Email Support
                  </li>
                </ul>
                <Link
                  to="/contact"
                  className="w-full inline-flex items-center justify-center px-6 py-3 border border-gray-600 text-white font-semibold rounded-lg hover:bg-gray-800 transition-all duration-300"
                >
                  Get Started
                </Link>
              </div>
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-8 border border-blue-400 relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Professional</h3>
                <div className="text-4xl font-bold text-white mb-6">$7,999<span className="text-lg text-gray-400">/month</span></div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Advanced AI Analytics
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Custom AI Solutions
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Priority Support
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Training & Onboarding
                  </li>
                </ul>
                <Link
                  to="/contact"
                  className="w-full inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300"
                >
                  Get Started
                </Link>
              </div>
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-8 border border-gray-700">
                <h3 className="text-2xl font-bold text-white mb-4">Enterprise</h3>
                <div className="text-4xl font-bold text-white mb-6">Custom</div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Full AI Suite
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Custom Development
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Dedicated Support
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    SLA Guarantee
                  </li>
                </ul>
                <Link
                  to="/contact"
                  className="w-full inline-flex items-center justify-center px-6 py-3 border border-gray-600 text-white font-semibold rounded-lg hover:bg-gray-800 transition-all duration-300"
                >
                  Contact Sales
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business with AI?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss how our AI services can help you achieve your business goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300"
            >
              Start Your AI Journey
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              to="/demo"
              className="inline-flex items-center px-8 py-3 border border-gray-600 text-white font-semibold rounded-lg hover:bg-gray-800 transition-all duration-300"
            >
              Schedule Demo
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AiServicesPage;