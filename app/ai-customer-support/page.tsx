'use client';
import React from 'react';
import { MessageCircle, Headphones, Bot, ArrowRight, CheckCircle, Clock, Users, TrendingUp, Shield, Star } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';

const AICustomerSupportPage: React.FC = () => {
  const features = [
    {
      icon: Bot,
      title: 'Intelligent Chatbots',
      description: 'AI-powered chatbots that understand context and provide accurate, helpful responses 24/7.'
    },
    {
      icon: MessageCircle,
      title: 'Multi-Channel Support',
      description: 'Seamless support across email, chat, phone, and social media platforms.'
    },
    {
      icon: Headphones,
      title: 'Human-AI Handoff',
      description: 'Smart escalation to human agents when complex issues require personal attention.'
    },
    {
      icon: Shield,
      title: 'Sentiment Analysis',
      description: 'Real-time emotion detection to provide personalized and empathetic support.'
    }
  ];

  const benefits = [
    'Resolve 80% of inquiries automatically',
    'Reduce response time by 90%',
    'Increase customer satisfaction by 40%',
    '24/7 multilingual support',
    'Seamless human-AI collaboration',
    'Real-time performance analytics'
  ];

  const metrics = [
    { value: '80%', label: 'Auto Resolution Rate', color: 'text-cyan-400' },
    { value: '90%', label: 'Faster Response Time', color: 'text-purple-400' },
    { value: '40%', label: 'Higher Satisfaction', color: 'text-green-400' },
    { value: '24/7', label: 'Always Available', color: 'text-pink-400' }
  ];

  return (
    <>
      <SEOOptimizer
        title="AI Customer Support - Zion Tech Group"
        description="Transform your customer service with AI-powered support solutions. Resolve 80% of inquiries automatically and increase satisfaction by 40%."
        keywords={['AI customer support', 'chatbot', 'customer service automation', 'AI support agent', 'multichannel support']}
        canonicalUrl="https://ziontechgroup.com/ai-customer-support"
      />
      <Navigation />
      
      {/* Hero Section */}
      <section className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center pt-20">
        <div className="container mx-auto px-4 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="inline-flex items-center space-x-2 bg-purple-500/20 text-purple-300 px-4 py-2 rounded-full text-sm">
                  <MessageCircle className="w-4 h-4" />
                  <span>AI Customer Support</span>
                </div>
                <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight">
                  Intelligent
                  <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent"> Customer Support</span>
                </h1>
                <p className="text-xl text-gray-300 leading-relaxed">
                  Revolutionize your customer service with AI-powered support that resolves 80% of inquiries automatically while providing personalized, empathetic assistance 24/7.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="cyber-button inline-flex items-center justify-center px-8 py-4 text-lg">
                  <Bot className="w-5 h-5 mr-2" />
                  Deploy AI Support
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button>
                <button className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400/10 px-8 py-4 rounded-lg transition-all duration-300 text-lg">
                  Try Live Demo
                </button>
              </div>

              <div className="grid grid-cols-2 gap-8 pt-8">
                {metrics.map((metric, index) => (
                  <div key={index} className="text-center">
                    <div className={`text-3xl font-bold ${metric.color}`}>{metric.value}</div>
                    <div className="text-sm text-gray-400">{metric.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-purple-500/20 to-cyan-500/20 rounded-2xl p-8 backdrop-blur-sm border border-cyan-500/30">
                <div className="space-y-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-white font-medium">AI Support Active</span>
                  </div>
                  <div className="space-y-4">
                    <div className="bg-slate-800/50 rounded-lg p-4">
                      <div className="flex items-center space-x-3 mb-3">
                        <div className="w-8 h-8 bg-cyan-400 rounded-full flex items-center justify-center">
                          <Bot className="w-4 h-4 text-white" />
                        </div>
                        <div>
                          <div className="text-white font-medium">AI Assistant</div>
                          <div className="text-cyan-400 text-sm">Online</div>
                        </div>
                      </div>
                      <div className="text-gray-300 text-sm">
                        "I can help you with your order status, product information, or any other questions you might have!"
                      </div>
                    </div>
                    <div className="bg-slate-800/50 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-purple-400 text-sm">Resolution Rate</span>
                        <span className="text-green-400 text-sm">80%</span>
                      </div>
                      <div className="w-full bg-slate-700 rounded-full h-2">
                        <div className="bg-gradient-to-r from-cyan-400 to-purple-400 h-2 rounded-full w-4/5"></div>
                      </div>
                    </div>
                    <div className="bg-slate-800/50 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-pink-400 text-sm">Customer Satisfaction</span>
                        <span className="text-green-400 text-sm">4.8/5</span>
                      </div>
                      <div className="flex space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              Advanced AI Support Capabilities
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI customer support platform combines natural language processing, machine learning, and human expertise to deliver exceptional customer experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-6 border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300 group">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">
                Why Choose Our AI Support?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Our AI customer support solutions deliver measurable improvements in efficiency, satisfaction, and cost reduction from day one.
              </p>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                    <span className="text-gray-300 text-lg">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-purple-500/20 to-cyan-500/20 rounded-2xl p-8">
              <div className="space-y-6">
                <div className="text-center">
                  <div className="text-6xl font-bold text-cyan-400 mb-2">80%</div>
                  <div className="text-white text-xl">Auto Resolution</div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-slate-800/50 rounded-lg">
                    <div className="text-2xl font-bold text-purple-400">90%</div>
                    <div className="text-sm text-gray-300">Faster Response</div>
                  </div>
                  <div className="text-center p-4 bg-slate-800/50 rounded-lg">
                    <div className="text-2xl font-bold text-green-400">40%</div>
                    <div className="text-sm text-gray-300">Higher Satisfaction</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-2xl p-12 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Customer Support?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Deploy AI-powered customer support that delights your customers while reducing costs. Start with a free trial today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="cyber-button inline-flex items-center justify-center px-8 py-4 text-lg">
                <Clock className="w-5 h-5 mr-2" />
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400/10 px-8 py-4 rounded-lg transition-all duration-300 text-lg">
                Schedule Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default AICustomerSupportPage;