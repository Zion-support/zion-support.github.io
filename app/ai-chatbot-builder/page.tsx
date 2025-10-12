import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { MessageCircle, Brain, Zap, ArrowRight, Users, Shield, Globe, Settings } from 'lucide-react';

const AIChatbotBuilderPage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'Intelligent Conversations',
      description: 'Build chatbots that understand context and provide natural, human-like responses.'
    },
    {
      icon: Zap,
      title: 'Quick Setup',
      description: 'Deploy your chatbot in minutes with our intuitive drag-and-drop builder.'
    },
    {
      icon: Shield,
      title: 'Secure & Reliable',
      description: 'Enterprise-grade security with 99.9% uptime guarantee.'
    },
    {
      icon: Globe,
      title: 'Multi-Language Support',
      description: 'Support for 50+ languages to serve customers worldwide.'
    }
  ];

  const capabilities = [
    'Natural Language Processing',
    'Sentiment Analysis',
    'Multi-turn Conversations',
    'Integration with CRM Systems',
    'Real-time Analytics',
    'Custom Branding'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
      <Helmet>
        <title>AI Chatbot Builder - Zion Tech Group</title>
        <meta name="description" content="Build intelligent chatbots with our AI-powered chatbot builder. Create engaging customer experiences with natural language processing." />
        <meta name="keywords" content="ai chatbot builder, chatbot development, conversational ai, customer service automation" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            AI <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Chatbot</span> Builder
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Create intelligent, conversational chatbots that engage your customers and automate support with our powerful AI-powered builder.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 inline-flex items-center"
            >
              Start Building <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              to="/demo"
              className="border border-blue-400 text-blue-400 px-8 py-4 rounded-lg font-semibold hover:bg-blue-400 hover:text-white transition-all duration-300"
            >
              Try Demo
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-16">
            Powerful <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Features</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-16">
            Advanced <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Capabilities</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((capability, index) => (
              <div key={index} className="flex items-center space-x-3">
                <MessageCircle className="w-6 h-6 text-blue-400 flex-shrink-0" />
                <span className="text-gray-300">{capability}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Build Your Chatbot?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Start creating intelligent conversations that engage your customers and drive business growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 inline-flex items-center"
            >
              Get Started Today <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              to="/services"
              className="border border-blue-400 text-blue-400 px-8 py-4 rounded-lg font-semibold hover:bg-blue-400 hover:text-white transition-all duration-300"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIChatbotBuilderPage;
