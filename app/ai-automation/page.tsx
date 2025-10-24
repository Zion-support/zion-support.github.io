'use client';
import React from 'react';
import Link from 'next/link';
import { 
  ArrowRight, Zap, Brain, Settings, Globe, Users, Star, CheckCircle,
  Clock, Shield, TrendingUp, BarChart, MessageCircle, FileText, Cpu
} from 'lucide-react';

const AIAutomationPage: React.FC = () => {
  const features = [
    {
      icon: <Zap className="w-8 h-8 text-cyan-400" />,
      title: 'Workflow Automation',
      description: 'Streamline your business processes with intelligent automation that adapts to your needs.',
      benefits: ['Reduce manual tasks by 80%', '24/7 automated operations', 'Error-free processing', 'Scalable solutions']
    },
    {
      icon: <Brain className="w-8 h-8 text-purple-400" />,
      title: 'AI-Powered Intelligence',
      description: 'Leverage advanced AI algorithms to make smarter decisions and optimize your operations.',
      benefits: ['Predictive analytics', 'Smart recommendations', 'Automated decision making', 'Continuous learning']
    },
    {
      icon: <Settings className="w-8 h-8 text-green-400" />,
      title: 'Custom Integration',
      description: 'Seamlessly integrate with your existing systems and workflows for maximum efficiency.',
      benefits: ['API-first architecture', 'Easy customization', 'Third-party integrations', 'Flexible deployment']
    },
    {
      icon: <Globe className="w-8 h-8 text-orange-400" />,
      title: 'Global Scale',
      description: 'Deploy automation solutions that work across multiple locations and time zones.',
      benefits: ['Multi-region support', 'Cloud-native architecture', 'High availability', 'Global compliance']
    }
  ];

  const benefits = [
    'Increase productivity by up to 300%',
    'Reduce operational costs by 60%',
    'Eliminate human errors in repetitive tasks',
    'Scale operations without proportional staff increases',
    'Gain competitive advantage with advanced automation'
  ];

  const stats = [
    { number: '500+', label: 'Automated Processes' },
    { number: '99.9%', label: 'Uptime Guarantee' },
    { number: '50+', label: 'Enterprise Clients' },
    { number: '24/7', label: 'Support Available' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/20 to-purple-600/20"></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            AI <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Automation</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Transform your business with intelligent automation solutions that work 24/7 to optimize your operations and drive growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
            >
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link 
              href="/services" 
              className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 flex items-center justify-center"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">{stat.number}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Powerful Automation Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover the advanced capabilities that make our AI automation solutions stand out
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-cyan-400/40 transition-all duration-300">
                <div className="flex justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-300">
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

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Choose Our AI Automation?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the transformative benefits of intelligent automation
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-4">
                <CheckCircle className="w-8 h-8 text-green-400 flex-shrink-0 mt-1" />
                <p className="text-gray-300 text-lg">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Automate Your Future?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of businesses already using our AI automation solutions to transform their operations
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
            >
              Start Your Automation Journey
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link 
              href="/services" 
              className="border-2 border-white text-white hover:bg-white hover:text-gray-900 font-bold py-4 px-8 rounded-lg transition-all duration-300 flex items-center justify-center"
            >
              Explore Solutions
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIAutomationPage;