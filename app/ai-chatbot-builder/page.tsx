import React from 'react';
import { ArrowRight, CheckCircle, MessageCircle, Brain, Zap, Users, Shield, BarChart } from 'lucide-react';

const AiChatbotBuilderPage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'Natural Language Processing',
      description: 'Advanced NLP capabilities that understand context and intent.',
      benefits: ['Context Awareness', 'Intent Recognition', 'Sentiment Analysis', 'Multi-language Support']
    },
    {
      icon: MessageCircle,
      title: 'Multi-Channel Support',
      description: 'Deploy chatbots across multiple platforms and channels.',
      benefits: ['Website Chat', 'Social Media', 'Mobile Apps', 'Messaging Platforms']
    },
    {
      icon: Zap,
      title: 'Quick Deployment',
      description: 'Build and deploy chatbots in minutes with our drag-and-drop builder.',
      benefits: ['Visual Builder', 'Pre-built Templates', 'One-Click Deploy', 'Custom Integration']
    },
    {
      icon: BarChart,
      title: 'Analytics & Insights',
      description: 'Comprehensive analytics to measure chatbot performance and optimize conversations.',
      benefits: ['Conversation Analytics', 'User Engagement', 'Performance Metrics', 'A/B Testing']
    }
  ];

  const useCases = [
    {
      title: 'Customer Support',
      description: 'Provide 24/7 customer support with intelligent responses to common queries.',
      impact: '70% reduction in support tickets'
    },
    {
      title: 'Lead Generation',
      description: 'Qualify leads and capture contact information through engaging conversations.',
      impact: '300% increase in lead conversion'
    },
    {
      title: 'Sales Assistant',
      description: 'Guide customers through the sales process and answer product questions.',
      impact: '250% improvement in sales conversion'
    },
    {
      title: 'Internal Support',
      description: 'Help employees with HR questions, IT support, and company policies.',
      impact: '80% faster employee support'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-16 pt-24">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            AI Chatbot Builder
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Create intelligent chatbots that provide 24/7 customer support and engagement with our advanced AI-powered platform.
          </p>
        </section>

        {/* Features Section */}
        <section className="py-16 mb-16">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Key Features</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our AI chatbot builder provides everything you need to create intelligent, engaging chatbots.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300">
                  <div className="flex items-start mb-6">
                    <feature.icon className="w-12 h-12 text-cyan-400 mr-4 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                      <p className="text-gray-300 mb-4">{feature.description}</p>
                    </div>
                  </div>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-gray-300 text-sm">
                        <CheckCircle className="w-4 h-4 text-cyan-400 mr-3 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-16 mb-16">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Use Cases</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Discover how AI chatbots can transform different aspects of your business.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {useCases.map((useCase, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8">
                  <h3 className="text-xl font-semibold text-white mb-3">{useCase.title}</h3>
                  <p className="text-gray-300 mb-4">{useCase.description}</p>
                  <div className="bg-cyan-500/20 text-cyan-400 px-4 py-2 rounded-lg text-sm font-medium inline-block">
                    {useCase.impact}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 mb-16">
          <div className="max-w-7xl mx-auto">
            <div className="bg-gradient-to-r from-cyan-500/10 to-blue-600/10 backdrop-blur-sm rounded-2xl p-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-white mb-6">Why Choose Our Chatbot Builder?</h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Our AI chatbot builder delivers intelligent, engaging chatbots that drive results.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-cyan-500/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Zap className="w-8 h-8 text-cyan-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">Easy to Use</h3>
                  <p className="text-gray-300">Drag-and-drop interface with no coding required</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-500/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Shield className="w-8 h-8 text-blue-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">Secure & Reliable</h3>
                  <p className="text-gray-300">Enterprise-grade security and 99.9% uptime</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-500/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Users className="w-8 h-8 text-green-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">Scalable</h3>
                  <p className="text-gray-300">Grows with your business and handles any volume</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16">
          <div className="bg-gradient-to-r from-cyan-500/10 to-blue-600/10 backdrop-blur-sm rounded-2xl p-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Ready to Build Your AI Chatbot?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Start creating intelligent chatbots that engage your customers and drive business growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Start Building
                <ArrowRight className="inline-block ml-2 w-5 h-5" />
              </button>
              <button className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                View Demo
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AiChatbotBuilderPage;