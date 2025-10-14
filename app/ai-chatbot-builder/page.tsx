import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, MessageCircle, Brain, Zap, Settings, Users, CheckCircle } from 'lucide-react';

export default function AiChatbotBuilder() {
  const features = [
    {
      icon: <Brain className="w-8 h-8 text-blue-500" />,
      title: 'AI-Powered Conversations',
      description: 'Create intelligent chatbots that understand context and provide natural responses.'
    },
    {
      icon: <Zap className="w-8 h-8 text-purple-500" />,
      title: 'Quick Setup',
      description: 'Build and deploy chatbots in minutes with our intuitive drag-and-drop interface.'
    },
    {
      icon: <Settings className="w-8 h-8 text-green-500" />,
      title: 'Customizable',
      description: 'Tailor your chatbot to match your brand and specific business requirements.'
    },
    {
      icon: <Users className="w-8 h-8 text-orange-500" />,
      title: 'Multi-Channel',
      description: 'Deploy across websites, social media, and messaging platforms seamlessly.'
    }
  ];

  const benefits = [
    'Reduce customer service costs by 60%',
    'Provide 24/7 customer support',
    'Handle multiple conversations simultaneously',
    'Improve customer satisfaction scores',
    'Generate qualified leads automatically',
    'Scale support without hiring more staff'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Chatbot Builder - Zion Tech Group</title>
        <meta name="description" content="Build intelligent chatbots with our AI-powered platform. Create, customize, and deploy chatbots that enhance customer experience and drive business growth." />
      </Helmet>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold text-white mb-6">AI Chatbot Builder</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Create intelligent chatbots that engage customers, answer questions, and drive conversions. 
            No coding required - just drag, drop, and deploy.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105">
              Start Building
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
            <button className="inline-flex items-center px-8 py-4 border-2 border-purple-400 text-purple-400 font-semibold rounded-lg hover:bg-purple-400 hover:text-white transition-all duration-300">
              <MessageCircle className="mr-2 w-5 h-5" />
              Try Demo
            </button>
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
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 hover:bg-slate-800/70 transition-all duration-300">
                <div className="mb-6">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">Why Choose Our Platform?</h2>
              <p className="text-xl text-gray-300 mb-8">
                Our AI chatbot builder makes it easy to create sophisticated chatbots that 
                understand your customers and provide exceptional service experiences.
              </p>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center text-gray-300">
                    <CheckCircle className="w-6 h-6 text-green-400 mr-3 flex-shrink-0" />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8">
              <div className="text-center">
                <MessageCircle className="w-16 h-16 text-blue-400 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-white mb-4">Ready to Build?</h3>
                <p className="text-gray-300 mb-6">
                  Join thousands of businesses using our platform to create amazing chatbot experiences.
                </p>
                <button className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300">
                  Start Building Now
                  <ArrowRight className="ml-2 w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-2xl p-12">
            <h2 className="text-4xl font-bold text-white mb-6">Build Your First Chatbot Today</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Don't let customer inquiries go unanswered. Create intelligent chatbots that 
              engage, assist, and convert visitors into customers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105">
                Start Building
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
              <button className="inline-flex items-center px-8 py-4 border-2 border-purple-400 text-purple-400 font-semibold rounded-lg hover:bg-purple-400 hover:text-white transition-all duration-300">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}</Brain></Zap></Settings></Users></meta></ArrowRight></ArrowRight></ArrowRight></MessageCircle></MessageCircle></CheckCircle>