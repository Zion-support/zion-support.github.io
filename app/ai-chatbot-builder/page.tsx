import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, MessageCircle, Brain, Settings, Zap, Users, CheckCircle } from 'lucide-react';

export default function AiChatbotBuilder() {
  const features = [
    {
      icon: <MessageCircle className="w-8 h-8 text-blue-500" />,
      title: 'Natural Language Processing',
      description: 'Build chatbots that understand and respond to natural human language with advanced NLP capabilities.'
    },
    {
      icon: <Brain className="w-8 h-8 text-purple-500" />,
      title: 'AI-Powered Responses',
      description: 'Create intelligent chatbots that learn from interactions and provide contextual responses.'
    },
    {
      icon: <Settings className="w-8 h-8 text-green-500" />,
      title: 'Easy Customization',
      description: 'Customize your chatbot\'s personality, responses, and behavior to match your brand.'
    },
    {
      icon: <Zap className="w-8 h-8 text-yellow-500" />,
      title: 'Multi-Channel Support',
      description: 'Deploy your chatbot across websites, mobile apps, social media, and messaging platforms.'
    },
    {
      icon: <Users className="w-8 h-8 text-red-500" />,
      title: 'Human Handoff',
      description: 'Seamlessly transfer complex conversations to human agents when needed.'
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-indigo-500" />,
      title: 'Analytics & Insights',
      description: 'Track performance, analyze conversations, and optimize your chatbot\'s effectiveness.'
    }
  ];

  const benefits = [
    '24/7 customer support availability',
    'Reduce support costs by up to 60%',
    'Improve response time by 90%',
    'Handle multiple conversations simultaneously',
    'Scale customer service without additional staff',
    'Collect valuable customer insights'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Chatbot Builder - Zion Tech Group</title>
        <meta name="description" content="Build intelligent chatbots with our AI-powered platform. Natural language processing, multi-channel support, and advanced analytics." />
      </Helmet>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold text-white mb-6">AI Chatbot Builder</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Create intelligent, conversational chatbots that engage your customers and automate support. 
            No coding required - build, deploy, and scale in minutes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105"
            >
              Start Building
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 border-2 border-purple-400 text-purple-400 font-semibold rounded-lg hover:bg-purple-400 hover:text-white transition-all duration-300"
            >
              View Demo
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Powerful Features</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Everything you need to build and deploy intelligent chatbots
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 hover:bg-slate-800/70 transition-all duration-300">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-12">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">Why Choose Our Chatbot Builder?</h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Transform your customer service with intelligent automation
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-semibold text-white mb-6">Key Benefits</h3>
                <ul className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-xl p-8">
                <h3 className="text-2xl font-semibold text-white mb-4">Ready to Get Started?</h3>
                <p className="text-gray-300 mb-6">
                  Build your first chatbot in minutes with our intuitive drag-and-drop interface.
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300"
                >
                  Start Building
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-2xl p-12">
            <h2 className="text-4xl font-bold text-white mb-6">Build Your Chatbot Today</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of businesses already using our platform to create engaging customer experiences.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105"
            >
              Start Free Trial
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}