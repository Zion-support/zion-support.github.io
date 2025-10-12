'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Brain, ArrowRight, CheckCircle, Zap, BarChart, Users, Shield, Code } from 'lucide-react';

const AiServicesPage: React.FC = () => {
  const aiServices = [
    {
      title: 'AI Analytics',
      description: 'Transform your data into actionable insights with advanced AI-powered analytics',
      icon: BarChart,
      color: 'from-cyan-500 to-blue-600',
      features: [
        'Predictive analytics',
        'Real-time data processing',
        'Custom dashboards',
        'Automated reporting'
      ],
      href: '/ai-analytics'
    },
    {
      title: 'AI Automation',
      description: 'Streamline your workflows with intelligent automation solutions',
      icon: Zap,
      color: 'from-purple-500 to-pink-600',
      features: [
        'Workflow automation',
        'Process optimization',
        'RPA integration',
        'Smart scheduling'
      ],
      href: '/ai-automation'
    },
    {
      title: 'AI Chatbot Builder',
      description: 'Create intelligent conversational AI for customer service and support',
      icon: Users,
      color: 'from-green-500 to-emerald-600',
      features: [
        'Natural language processing',
        'Multi-channel support',
        'Custom training',
        'Analytics dashboard'
      ],
      href: '/ai-chatbot-builder'
    },
    {
      title: 'AI Cybersecurity',
      description: 'Protect your business with AI-powered threat detection and response',
      icon: Shield,
      color: 'from-red-500 to-orange-600',
      features: [
        'Threat detection',
        'Automated response',
        'Security monitoring',
        'Compliance reporting'
      ],
      href: '/ai-cybersecurity'
    },
    {
      title: 'AI Computer Vision',
      description: 'Extract insights from images and videos with advanced computer vision',
      icon: Code,
      color: 'from-indigo-500 to-purple-600',
      features: [
        'Image recognition',
        'Video analysis',
        'Object detection',
        'Custom models'
      ],
      href: '/ai-computer-vision'
    },
    {
      title: 'AI Content Generation',
      description: 'Create high-quality content at scale with AI-powered generation',
      icon: Brain,
      color: 'from-yellow-500 to-orange-600',
      features: [
        'Text generation',
        'Content optimization',
        'Multi-language support',
        'Brand consistency'
      ],
      href: '/ai-content-generation'
    }
  ];

  const benefits = [
    {
      title: '30-Day Results Guarantee',
      description: 'See measurable results within 30 days or get your money back',
      icon: CheckCircle
    },
    {
      title: '24/7 Expert Support',
      description: 'Round-the-clock support from our AI specialists',
      icon: Users
    },
    {
      title: 'Custom Solutions',
      description: 'Tailored AI solutions designed for your specific needs',
      icon: Code
    },
    {
      title: 'Scalable Infrastructure',
      description: 'Solutions that grow with your business',
      icon: Zap
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive AI services including chatbots, analytics, automation, and computer vision solutions." />
        <meta name="keywords" content="AI services, artificial intelligence, machine learning, AI chatbots, AI analytics" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16 pt-24">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI <span className="text-cyan-400">Services</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Transform your business with cutting-edge artificial intelligence solutions. From chatbots to analytics, 
              we provide comprehensive AI services that drive real results.
            </p>
          </div>

          {/* Benefits */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white text-center mb-12">Why Choose Our AI Services?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-cyan-400/30 transition-all duration-300 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* AI Services Grid */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white text-center mb-12">Our AI Solutions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {aiServices.map((service, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-cyan-400/30 transition-all duration-300 group">
                  <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-300 transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-6">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-2 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <a
                    href={service.href}
                    className="w-full py-3 px-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center group"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Process Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white text-center mb-12">Our AI Implementation Process</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">1</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Discovery</h3>
                <p className="text-gray-300">We analyze your business needs and identify AI opportunities</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">2</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Design</h3>
                <p className="text-gray-300">We design a custom AI solution tailored to your requirements</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">3</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Development</h3>
                <p className="text-gray-300">We build and train your AI models with your data</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">4</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Deployment</h3>
                <p className="text-gray-300">We deploy your AI solution and provide ongoing support</p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-slate-800/50 to-purple-900/50 rounded-3xl p-12 border border-cyan-500/20 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business with AI?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join 500+ companies that have already transformed their operations with our AI solutions. 
              Get started with a free consultation today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center group shadow-lg shadow-cyan-500/25 hover:shadow-xl hover:shadow-cyan-500/40 transform hover:scale-105"
              >
                Get Free Consultation
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="tel:+13024640950"
                className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center group"
              >
                Call (302) 464-0950
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AiServicesPage;