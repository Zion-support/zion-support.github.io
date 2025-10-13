import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Right, Star, Brain, BarChart3, Zap, FileText, MessageCircle, Shield } from 'lucide-react';
import FuturisticBackground from '../components/FuturisticBackground';

const AiServicesPage: React.FC = () => {
  const services = [
    {
      icon: Brain,
      title: 'AI Consulting',
      description: 'Strategic AI consulting to help you identify opportunities and develop AI roadmaps.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: BarChart3,
      title: 'AI Analytics',
      description: 'Advanced analytics and machine learning solutions to extract insights from your data.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Zap,
      title: 'AI Automation',
      description: 'Automate repetitive tasks and processes with intelligent AI solutions.',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: FileText,
      title: 'AI Content Generation',
      description: 'Generate high-quality content at scale using advanced AI models.',
      color: 'from-green-500 to-teal-500'
    },
    {
      icon: MessageCircle,
      title: 'AI Customer Support',
      description: 'Intelligent chatbots and customer service automation solutions.',
      color: 'from-indigo-500 to-purple-500'
    },
    {
      icon: Shield,
      title: 'AI Security',
      description: 'AI-powered security solutions to protect your business from threats.',
      color: 'from-red-500 to-pink-500'
    }
  ];

  const features = [
    'Custom AI model development',
    'Machine learning pipeline optimization',
    'Real-time AI decision making',
    'AI integration with existing systems',
    'Continuous learning and improvement',
    '24/7 AI monitoring and support'
  ];

  return (
    <>
      <Helmet>
        <title>AI Services - Zion Tech Group</title>
        <meta name="description" content="Transform your business with our comprehensive AI services including consulting, analytics, automation, and more." />
        <meta name="keywords" content="AI services, artificial intelligence, machine learning, AI consulting, AI automation" />
      </Helmet>
      
      <FuturisticBackground />
      
      <div className="relative z-10 min-h-screen">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                AI Services That
                <span className="block bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                  Transform Your Business
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Leverage the power of artificial intelligence to automate processes, 
                gain insights, and drive innovation across your organization.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105">
                  Get Started Today
                </button>
                <button className="border border-gray-400 text-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-lg font-medium transition-all duration-300">
                  View Our Work
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our AI Services
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Comprehensive AI solutions tailored to your business needs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <div
                    key={service.title}
                    className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 hover:bg-slate-800/70 transition-all duration-300 group"
                  >
                    <div className={`w-12 h-12 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3">
                      {service.title}
                    </h3>
                    <p className="text-gray-300 mb-4">
                      {service.description}
                    </p>
                    <button className="text-purple-400 hover:text-purple-300 font-medium flex items-center group-hover:translate-x-1 transition-transform duration-300">
                      Learn More
                      <Right className="w-4 h-4 ml-1" />
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose Our AI Services?
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                We combine cutting-edge technology with deep industry expertise
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, _index) => (
                <div
                  key={_index}
                  className="flex items-center space-x-3 bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-lg p-4"
                >
                  <div className="w-6 h-6 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <Star className="w-3 h-3 text-white" />
                  </div>
                  <span className="text-gray-300">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business with AI?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how our AI services can help you achieve your goals
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105">
                Schedule a Consultation
              </button>
              <button className="border border-gray-400 text-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-lg font-medium transition-all duration-300">
                Download Our AI Guide
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AiServicesPage;