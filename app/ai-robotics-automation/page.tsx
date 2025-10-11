import React from 'react';
import { CheckCircle, ArrowRight, Bot, Cpu, Shield, Zap, Brain, Database, Globe, Star, Wrench, Target } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AIRoboticsAutomationPage: React.FC = () => {
  const roboticsServices = [
    {
      icon: <Bot className="w-12 h-12 text-blue-500" />,
      title: 'AI-Powered Industrial Robots',
      description: 'Intelligent robotic systems for manufacturing, assembly, and quality control with advanced computer vision and machine learning.',
      features: [
        'Computer vision integration',
        'Adaptive learning algorithms',
        'Predictive maintenance',
        'Quality control automation',
        'Collaborative robot systems',
        'Real-time decision making'
      ],
      pricing: '$25,000/month',
      popular: true,
      link: '/ai-industrial-robots',
      category: 'Industrial'
    },
    {
      icon: <Brain className="w-12 h-12 text-green-500" />,
      title: 'Autonomous Mobile Robots',
      description: 'Self-navigating robots for warehouses, hospitals, and logistics with AI pathfinding and obstacle avoidance.',
      features: [
        'SLAM navigation technology',
        'Dynamic obstacle avoidance',
        'Fleet management systems',
        'Load optimization',
        'Real-time tracking',
        'Multi-robot coordination'
      ],
      pricing: '$15,000/month',
      popular: false,
      link: '/ai-mobile-robots',
      category: 'Mobile'
    },
    {
      icon: <Cpu className="w-12 h-12 text-purple-500" />,
      title: 'AI Service Robots',
      description: 'Intelligent service robots for hospitality, healthcare, and customer service with natural language processing.',
      features: [
        'Natural language processing',
        'Facial recognition',
        'Gesture recognition',
        'Emotion detection',
        'Multi-language support',
        'Learning from interactions'
      ],
      pricing: '$12,000/month',
      popular: true,
      link: '/ai-service-robots',
      category: 'Service'
    },
    {
      icon: <Wrench className="w-12 h-12 text-orange-500" />,
      title: 'Robotic Process Automation',
      description: 'Software robots that automate repetitive tasks across business processes with AI decision-making capabilities.',
      features: [
        'Process mining and discovery',
        'Intelligent document processing',
        'Workflow automation',
        'Exception handling',
        'Process optimization',
        'Compliance monitoring'
      ],
      pricing: '$8,000/month',
      popular: false,
      link: '/ai-rpa',
      category: 'RPA'
    },
    {
      icon: <Target className="w-12 h-12 text-red-500" />,
      title: 'Precision Agriculture Robots',
      description: 'Autonomous farming robots for planting, harvesting, and crop monitoring with AI-powered agricultural intelligence.',
      features: [
        'Crop monitoring and analysis',
        'Precision planting and harvesting',
        'Pest and disease detection',
        'Soil analysis',
        'Weather prediction integration',
        'Yield optimization'
      ],
      pricing: '$18,000/month',
      popular: false,
      link: '/ai-agriculture-robots',
      category: 'Agriculture'
    },
    {
      icon: <Shield className="w-12 h-12 text-yellow-500" />,
      title: 'Security & Surveillance Robots',
      description: 'Autonomous security robots with AI-powered threat detection, facial recognition, and emergency response capabilities.',
      features: [
        'Threat detection algorithms',
        'Facial recognition systems',
        'Emergency response protocols',
        'Patrol route optimization',
        'Real-time alerting',
        'Evidence collection'
      ],
      pricing: '$10,000/month',
      popular: true,
      link: '/ai-security-robots',
      category: 'Security'
    }
  ];

  const stats = [
    { number: '500+', label: 'Robots Deployed' },
    { number: '99.8%', label: 'Uptime Guarantee' },
    { number: '60%', label: 'Efficiency Improvement' },
    { number: '24/7', label: 'Monitoring & Support' }
  ];

  const industries = [
    {
      industry: 'Manufacturing',
      applications: ['Assembly automation', 'Quality control', 'Material handling', 'Welding & cutting'],
      icon: '🏭'
    },
    {
      industry: 'Healthcare',
      applications: ['Surgical assistance', 'Patient care', 'Medication delivery', 'Rehabilitation'],
      icon: '🏥'
    },
    {
      industry: 'Logistics',
      applications: ['Warehouse automation', 'Order picking', 'Inventory management', 'Last-mile delivery'],
      icon: '📦'
    },
    {
      industry: 'Agriculture',
      applications: ['Precision farming', 'Crop monitoring', 'Harvesting', 'Livestock management'],
      icon: '🌾'
    }
  ];

  const technologies = [
    { name: 'Computer Vision', description: 'Advanced image recognition and processing' },
    { name: 'Machine Learning', description: 'Adaptive learning and decision making' },
    { name: 'Natural Language Processing', description: 'Human-robot communication' },
    { name: 'SLAM Navigation', description: 'Simultaneous localization and mapping' },
    { name: 'Edge Computing', description: 'Real-time processing and decision making' },
    { name: 'IoT Integration', description: 'Connected robotic ecosystems' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Robotics & Automation - Zion Tech Group</title>
        <meta name="description" content="Advanced AI-powered robotics and automation solutions for manufacturing, healthcare, logistics, and agriculture. Intelligent robots with computer vision and machine learning." />
        <meta name="keywords" content="AI robotics, automation, industrial robots, service robots, RPA, computer vision, machine learning, autonomous systems" />
      </Helmet>
      
      <Navigation />
      
      <main className="pt-20 px-4 py-20">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI Robotics & Automation
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Transform your operations with intelligent robots and automation systems powered by advanced AI. 
              From manufacturing to healthcare, our solutions deliver unprecedented efficiency and precision.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
              >
                Get Robotics Consultation
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link 
                to="/ai-services" 
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                Explore AI Services
              </Link>
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-300 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Industries We Serve */}
          <div className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">Industries We Serve</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {industries.map((industry, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
                  <div className="text-4xl mb-4">{industry.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-4">{industry.industry}</h3>
                  <ul className="space-y-2">
                    {industry.applications.map((app, appIndex) => (
                      <li key={appIndex} className="text-gray-300 text-sm flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {app}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Technologies We Use */}
          <div className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">Advanced Technologies</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {technologies.map((tech, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
                  <h3 className="text-xl font-semibold text-white mb-4">{tech.name}</h3>
                  <p className="text-gray-300">{tech.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Robotics Services Grid */}
          <div className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">Our Robotics & Automation Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {roboticsServices.map((service, index) => (
                <div key={index} className={`bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 group relative ${service.popular ? 'ring-2 ring-purple-500' : ''}`}>
                  {service.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <div className="mb-6 group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
                  <div className="mb-2">
                    <span className="bg-blue-600/20 text-blue-400 px-3 py-1 rounded-full text-xs font-semibold">
                      {service.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-purple-300 transition-colors">{service.title}</h3>
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-2xl font-bold text-white">{service.pricing}</span>
                    <Link 
                      to={service.link}
                      className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Why Choose Our Robotics Solutions */}
          <div className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">Why Choose Our Robotics Solutions?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Bot className="w-8 h-8 text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Intelligent Automation</h3>
                <p className="text-gray-300">AI-powered robots that learn, adapt, and optimize their performance over time.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-green-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Safety First</h3>
                <p className="text-gray-300">Advanced safety systems and human-robot collaboration protocols for secure operations.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Cpu className="w-8 h-8 text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Scalable Solutions</h3>
                <p className="text-gray-300">Modular systems that grow with your business and adapt to changing requirements.</p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-12">
              <h2 className="text-4xl font-bold text-white mb-4">Ready to Automate Your Future?</h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Transform your operations with intelligent robotics and automation solutions tailored to your industry.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact" 
                  className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Start Automation Journey
                </Link>
                <Link 
                  to="/about" 
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  Learn More About Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default AIRoboticsAutomationPage;