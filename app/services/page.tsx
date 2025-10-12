'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Star, Users, Award, Zap, Shield, Brain, Cloud, Code, Target, Lightbulb, Globe, Heart, TrendingUp, BarChart, Rocket, Cpu, Database, Smartphone, Lock, Settings, MessageCircle, FileText, Calendar, Phone, Mail, MapPin, DollarSign } from 'lucide-react';

const ServicesPage: React.FC = () => {
  const serviceCategories = [
    {
      title: 'AI Services',
      description: 'Cutting-edge artificial intelligence solutions',
      icon: <Brain className="w-8 h-8 text-purple-400" />,
      color: 'from-purple-500 to-pink-500',
      services: [
        'AI Chatbots & NLP',
        'AI Content Generation',
        'AI Data Analytics',
        'AI Computer Vision',
        'AI Voice Solutions',
        'AI Automation'
      ],
      link: '/ai-services'
    },
    {
      title: 'IT Services',
      description: 'Comprehensive technology infrastructure',
      icon: <Code className="w-8 h-8 text-cyan-400" />,
      color: 'from-cyan-500 to-blue-500',
      services: [
        'Web Development',
        'Mobile Development',
        'Cloud Infrastructure',
        'Cybersecurity',
        'DevOps & CI/CD',
        'Database Management'
      ],
      link: '/it-services'
    },
    {
      title: 'Micro SAAS',
      description: 'Ready-to-use business applications',
      icon: <Settings className="w-8 h-8 text-green-400" />,
      color: 'from-green-500 to-emerald-500',
      services: [
        'Zion Analytics Pro',
        'Zion Chat AI',
        'Zion Security Shield',
        'Zion Cloud Vault',
        'Zion Content Studio',
        'Zion CRM Intelligence'
      ],
      link: '/micro-saas'
    }
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Discovery',
      description: 'We analyze your requirements and business goals',
      icon: <Target className="w-6 h-6" />
    },
    {
      step: '02',
      title: 'Planning',
      description: 'We create a detailed project roadmap and timeline',
      icon: <Calendar className="w-6 h-6" />
    },
    {
      step: '03',
      title: 'Development',
      description: 'We build your solution using best practices',
      icon: <Code className="w-6 h-6" />
    },
    {
      step: '04',
      title: 'Deployment',
      description: 'We launch and provide ongoing support',
      icon: <Rocket className="w-6 h-6" />
    }
  ];

  const features = [
    {
      icon: <Shield className="w-6 h-6 text-red-400" />,
      title: 'Enterprise Security',
      description: 'Bank-level security with end-to-end encryption'
    },
    {
      icon: <Cloud className="w-6 h-6 text-blue-400" />,
      title: 'Cloud-Native',
      description: 'Built for scalability and high availability'
    },
    {
      icon: <Zap className="w-6 h-6 text-yellow-400" />,
      title: 'Lightning Fast',
      description: 'Optimized for speed and performance'
    },
    {
      icon: <Users className="w-6 h-6 text-green-400" />,
      title: '24/7 Support',
      description: 'Round-the-clock technical support'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Services - Zion Tech Group | AI & IT Solutions</title>
        <meta name="description" content="Comprehensive AI and IT services including web development, mobile apps, cloud infrastructure, cybersecurity, and AI solutions. Expert technology services for your business." />
        <meta name="keywords" content="services, AI solutions, IT services, web development, mobile development, cloud infrastructure, cybersecurity" />
      </Helmet>

      <div className="pt-20 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Our
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                {' '}Services
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive AI and IT solutions designed to transform your business 
              and drive growth through cutting-edge technology.
            </p>
          </div>

          {/* Service Categories */}
          <div className="mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {serviceCategories.map((category, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 group">
                  <div className="mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-lg flex items-center justify-center mb-4`}>
                      {category.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">
                      {category.title}
                    </h3>
                    <p className="text-gray-300 mb-6">{category.description}</p>
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {category.services.map((service, serviceIndex) => (
                      <li key={serviceIndex} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                        <span className="text-gray-300">{service}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link
                    to={category.link}
                    className="inline-flex items-center space-x-2 text-purple-400 hover:text-purple-300 transition-colors"
                  >
                    <span>Explore {category.title}</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Process Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white text-center mb-12">Our Process</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {processSteps.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-lg">
                    {step.step}
                  </div>
                  <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                  <p className="text-gray-300">{step.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Features Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white text-center mb-12">Why Choose Us?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-slate-800/50 rounded-full flex items-center justify-center mx-auto mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Get Started?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's discuss your project requirements and create a custom solution that drives your business forward.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <span>Start Your Project</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/pricing"
                className="border border-purple-400 text-purple-400 px-8 py-3 rounded-lg font-semibold hover:bg-purple-400 hover:text-white transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <DollarSign className="w-4 h-4" />
                <span>View Pricing</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;