'use client';
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Brain, BarChart, Zap, Shield, Users, CheckCircle, Star } from 'lucide-react';

const AiServicesPage: React.FC = () => {
  const aiServices = [
    {
      title: 'AI Analytics',
      description: 'Transform your data into actionable insights with advanced AI analytics solutions.',
      features: [
        'Predictive analytics and forecasting',
        'Real-time data processing',
        'Custom dashboard creation',
        'Automated reporting',
        'Machine learning models'
      ],
      href: '/ai-analytics',
      icon: BarChart,
      color: 'from-cyan-500 to-blue-500'
    },
    {
      title: 'AI Automation',
      description: 'Streamline your business processes with intelligent automation solutions.',
      features: [
        'Workflow automation',
        'Document processing',
        'Email automation',
        'Task scheduling',
        'Process optimization'
      ],
      href: '/ai-automation',
      icon: Zap,
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'AI Chatbot Builder',
      description: 'Create intelligent conversational AI solutions for customer engagement.',
      features: [
        'Natural language processing',
        'Multi-channel deployment',
        'Custom training',
        'Analytics and insights',
        '24/7 availability'
      ],
      href: '/ai-chatbot-builder',
      icon: Users,
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'AI Cybersecurity',
      description: 'Protect your business with AI-powered security solutions.',
      features: [
        'Threat detection',
        'Anomaly detection',
        'Automated response',
        'Security monitoring',
        'Compliance management'
      ],
      href: '/ai-cybersecurity',
      icon: Shield,
      color: 'from-red-500 to-orange-500'
    },
    {
      title: 'AI Data Analytics',
      description: 'Unlock the power of your data with advanced AI analytics.',
      features: [
        'Data visualization',
        'Pattern recognition',
        'Trend analysis',
        'Custom metrics',
        'Real-time insights'
      ],
      href: '/ai-data-analytics',
      icon: BarChart,
      color: 'from-indigo-500 to-purple-500'
    },
    {
      title: 'AI Content Generation',
      description: 'Create high-quality content at scale with AI-powered tools.',
      features: [
        'Content creation',
        'SEO optimization',
        'Multi-language support',
        'Brand voice consistency',
        'Content scheduling'
      ],
      href: '/ai-content-generator',
      icon: Brain,
      color: 'from-teal-500 to-cyan-500'
    }
  ];

  const benefits = [
    '300% average ROI increase',
    '70% reduction in operational costs',
    '90% improvement in efficiency',
    '24/7 automated operations',
    'Scalable solutions',
    'Custom integrations'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
      {/* Hero Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="text-cyan-400">AI Services</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your business with cutting-edge AI solutions. From analytics to automation, we provide comprehensive AI services that drive results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
              >
                Get Started
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/demo"
                className="border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 flex items-center justify-center"
              >
                View Demo
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* AI Services Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Our AI Solutions
            </h2>
            <p className="text-lg text-gray-300">
              Comprehensive AI services designed to transform your business
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aiServices.map((service, index) => (
              <div
                key={index}
                className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300 group"
              >
                <div className={`w-12 h-12 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center mb-4`}>
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Link
                  to={service.href}
                  className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium text-sm group-hover:translate-x-1 transition-all duration-300"
                >
                  Learn More
                  <ArrowRight className="ml-1 w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-slate-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Why Choose Our AI Services?
            </h2>
            <p className="text-lg text-gray-300">
              Proven results and comprehensive support
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-center space-x-3 bg-slate-800/50 backdrop-blur-sm rounded-lg p-4 border border-cyan-500/20"
              >
                <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                <span className="text-gray-300">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Our AI Implementation Process
            </h2>
            <p className="text-lg text-gray-300">
              A proven methodology for successful AI implementation
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Discovery</h3>
              <p className="text-gray-300 text-sm">
                Analyze your business needs and identify AI opportunities
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Strategy</h3>
              <p className="text-gray-300 text-sm">
                Develop a comprehensive AI strategy and roadmap
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Implementation</h3>
              <p className="text-gray-300 text-sm">
                Build and deploy AI solutions with best practices
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">4</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Optimization</h3>
              <p className="text-gray-300 text-sm">
                Monitor, optimize, and scale your AI solutions
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-slate-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Transform Your Business with AI?
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's discuss how our AI services can help you achieve your business goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center"
            >
              Start Your AI Journey
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              to="/pricing"
              className="border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 inline-flex items-center justify-center"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AiServicesPage;
