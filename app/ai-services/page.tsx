'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
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
      icon: Brain,
      title: 'AI Analytics & Business Intelligence',
      description: 'Transform your data into actionable insights with advanced AI-powered analytics.',
      price: 'Starting at $2,999/month',
      features: ['Real-time data processing', 'Predictive analytics', 'Custom dashboards', 'API integration'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: MessageCircle,
      title: 'AI Chatbots & Conversational AI',
      description: 'Build intelligent chatbots that understand context and provide human-like interactions.',
      price: 'Starting at $1,999/month',
      features: ['Natural language processing', 'Multi-channel support', 'Sentiment analysis', 'Custom training'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: BarChart,
      title: 'AI Data Analytics',
      description: 'Unlock the power of your data with machine learning and advanced analytics.',
      price: 'Starting at $3,499/month',
      features: ['Machine learning models', 'Data visualization', 'Automated reporting', 'Trend analysis'],
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Eye,
      title: 'AI Computer Vision',
      description: 'Implement image recognition, object detection, and visual analysis solutions.',
      price: 'Starting at $4,999/month',
      features: ['Image classification', 'Object detection', 'Facial recognition', 'Quality control'],
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: Mic,
      title: 'AI Voice Solutions',
      description: 'Develop voice assistants, speech recognition, and audio processing applications.',
      price: 'Starting at $2,499/month',
      features: ['Speech-to-text', 'Text-to-speech', 'Voice commands', 'Audio analysis'],
      color: 'from-indigo-500 to-purple-500'
    },
    {
      icon: FileText,
      title: 'AI Content Generation',
      description: 'Automate content creation with AI-powered writing and creative tools.',
      price: 'Starting at $1,499/month',
      features: ['Blog writing', 'Social media content', 'Email campaigns', 'SEO optimization'],
      color: 'from-pink-500 to-rose-500'
    },
    {
      icon: Users,
      title: 'AI Customer Service',
      description: 'Enhance customer support with intelligent automation and personalization.',
      price: 'Starting at $2,999/month',
      features: ['24/7 support', 'Ticket routing', 'Customer insights', 'Escalation management'],
      color: 'from-teal-500 to-cyan-500'
    },
    {
      icon: Workflow,
      title: 'AI Workflow Automation',
      description: 'Streamline business processes with intelligent automation and decision-making.',
      price: 'Starting at $3,999/month',
      features: ['Process automation', 'Decision trees', 'Integration APIs', 'Performance monitoring'],
      color: 'from-yellow-500 to-orange-500'
    }
  ];

  const benefits = [
    {
      icon: Zap,
      title: 'Increased Efficiency',
      description: 'Automate repetitive tasks and processes to boost productivity by up to 300%.'
    },
    {
      icon: Target,
      title: 'Better Decision Making',
      description: 'Make data-driven decisions with AI-powered insights and predictions.'
    },
    {
      icon: Shield,
      title: 'Enhanced Security',
      description: 'Protect your business with AI-powered threat detection and prevention.'
    },
    {
      icon: TrendingUp,
      title: 'Scalable Solutions',
      description: 'Grow your business with AI solutions that scale with your needs.'
    }
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Discovery & Analysis',
      description: 'We analyze your business needs and identify AI opportunities.'
    },
    {
      step: '02',
      title: 'Strategy & Planning',
      description: 'Develop a comprehensive AI strategy tailored to your goals.'
    },
    {
      step: '03',
      title: 'Development & Testing',
      description: 'Build and test AI solutions with rigorous quality assurance.'
    },
    {
      step: '04',
      title: 'Deployment & Support',
      description: 'Deploy solutions and provide ongoing support and optimization.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Services - Zion Tech Group | Advanced AI Solutions</title>
        <meta name="description" content="Transform your business with our comprehensive AI services including analytics, chatbots, computer vision, and workflow automation. Expert AI solutions for every industry." />
        <meta name="keywords" content="AI services, artificial intelligence, machine learning, chatbots, data analytics, computer vision, AI automation" />
        <meta property="og:title" content="AI Services - Zion Tech Group" />
        <meta property="og:description" content="Advanced AI solutions to transform your business operations and drive growth." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/ai-services" />
      </Helmet>

      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20 pb-16">
          <div className="absolute inset-0 opacity-20" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                AI Services
                <span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  That Transform
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Harness the power of artificial intelligence to automate processes, gain insights, 
                and drive innovation across your entire organization.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  Get Started Today
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  to="/demo"
                  className="inline-flex items-center px-8 py-4 border-2 border-purple-400 text-purple-400 font-semibold rounded-lg hover:bg-purple-400 hover:text-white transition-all duration-300 transform hover:scale-105"
                >
                  View Demo
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 bg-gradient-to-br from-slate-900 to-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our AI Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive AI solutions designed to solve complex business challenges and drive growth.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {aiServices.map((service, index) => (
                <div key={index} className="group">
                  <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 h-full hover:bg-gray-700/50 transition-all duration-300 transform hover:scale-105 border border-gray-700/50">
                    <div className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r ${service.color} rounded-lg mb-4`}>
                      <service.icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                    <p className="text-gray-300 mb-4">{service.description}</p>
                    <div className="text-2xl font-bold text-purple-400 mb-4">{service.price}</div>
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Link
                      to="/contact"
                      className="w-full inline-flex items-center justify-center px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300"
                    >
                      Get Started
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-gradient-to-br from-purple-900 to-slate-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose Our AI Services?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our AI solutions deliver measurable results and transform how you do business.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mb-4">
                    <benefit.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-gradient-to-br from-slate-900 to-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our AI Implementation Process
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                A proven methodology that ensures successful AI implementation and maximum ROI.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {processSteps.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full mb-4 text-white font-bold text-xl">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{step.title}</h3>
                  <p className="text-gray-300">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-gray-900 to-purple-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Transform Your Business with AI?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Let's discuss your AI needs and discover how our solutions can drive innovation and growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  Start Your AI Journey
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  to="/case-studies"
                  className="inline-flex items-center px-8 py-4 border-2 border-purple-400 text-purple-400 font-semibold rounded-lg hover:bg-purple-400 hover:text-white transition-all duration-300 transform hover:scale-105"
                >
                  View Case Studies
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AiServicesPage;