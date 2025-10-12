import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, CheckCircle, Star, Users, Award, Zap, Brain, Cloud, Shield, Code, BarChart, Settings, Target, TrendingUp, Lightbulb, Rocket, Award, Globe, Database, Smartphone, Cpu, Lock, Settings, Target, TrendingUp, Lightbulb, Rocket, Award, CheckCircle, ExternalLink, MessageCircle, Bot, Headphones, Mic, ShoppingCart, HelpCircle } from 'lucide-react';

const AIChatbotBuilderPage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'Natural Language Processing',
      description: 'Advanced AI understands context and intent with human-like conversations'
    },
    {
      icon: MessageCircle,
      title: 'Multi-Channel Support',
      description: 'Deploy across websites, mobile apps, and messaging platforms'
    },
    {
      icon: Settings,
      title: 'Easy Customization',
      description: 'No-code builder with drag-and-drop interface for easy setup'
    },
    {
      icon: BarChart,
      title: 'Analytics & Insights',
      description: 'Track performance and optimize conversations with detailed analytics'
    }
  ];

  const useCases = [
    {
      title: 'Customer Support',
      description: '24/7 automated customer service with instant responses',
      icon: Headphones
    },
    {
      title: 'Lead Generation',
      description: 'Qualify leads and capture contact information automatically',
      icon: Target
    },
    {
      title: 'E-commerce Assistant',
      description: 'Help customers find products and complete purchases',
      icon: ShoppingCart
    },
    {
      title: 'FAQ Automation',
      description: 'Answer common questions and reduce support workload',
      icon: HelpCircle
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Chatbot Builder - Zion Tech Group</title>
        <meta name="description" content="Build intelligent chatbots with our AI-powered platform. Natural language processing, multi-channel deployment, and easy customization." />
        <meta name="keywords" content="AI chatbot, chatbot builder, conversational AI, customer support, lead generation, natural language processing" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-16">
        {/* Hero Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                AI <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Chatbot Builder</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Create intelligent chatbots that understand, learn, and engage with your customers naturally. No coding required.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="#features"
                  className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
                >
                  Start Building
                </a>
                <a 
                  href="/contact"
                  className="border border-cyan-500 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-500/10 transition-all duration-300"
                >
                  Get Free Demo
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Powerful <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Features</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Everything you need to build and deploy intelligent chatbots
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="text-center group">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-10 h-10 text-cyan-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20 bg-gradient-to-r from-slate-800/30 to-slate-900/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Perfect For <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Every Business</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See how chatbots can transform your customer experience
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {useCases.map((useCase, index) => (
                <div 
                  key={index}
                  className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 hover:border-cyan-400/40 transition-all duration-300 group hover:transform hover:scale-105"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <useCase.icon className="w-6 h-6 text-cyan-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                        {useCase.title}
                      </h3>
                      <p className="text-gray-300 leading-relaxed">
                        {useCase.description}
                      </p>
                    </div>
                  </div>
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
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Why Choose Our <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Chatbot Builder</span>?
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <CheckCircle className="w-6 h-6 text-green-400 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">No Coding Required</h3>
                      <p className="text-gray-300">Build and deploy chatbots without any technical knowledge</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <CheckCircle className="w-6 h-6 text-green-400 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">Multi-Language Support</h3>
                      <p className="text-gray-300">Deploy chatbots in 50+ languages for global reach</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <CheckCircle className="w-6 h-6 text-green-400 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">Real-time Analytics</h3>
                      <p className="text-gray-300">Track performance and optimize conversations</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <CheckCircle className="w-6 h-6 text-green-400 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">Easy Integration</h3>
                      <p className="text-gray-300">Connect with your existing tools and platforms</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-cyan-900/50 to-purple-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Ready to Get Started?</h3>
                <p className="text-gray-300 mb-6">
                  Build your first chatbot in minutes. No credit card required for the free trial.
                </p>
                <div className="space-y-4">
                  <a 
                    href="/contact"
                    className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-6 py-3 rounded-lg font-semibold text-center hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 block"
                  >
                    Start Free Trial
                  </a>
                  <a 
                    href="/ai-services"
                    className="w-full border border-cyan-500 text-cyan-400 px-6 py-3 rounded-lg font-semibold text-center hover:bg-cyan-500/10 transition-all duration-300 block"
                  >
                    View All AI Services
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="bg-gradient-to-r from-cyan-900/50 to-purple-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-12 text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5"></div>
              <div className="relative z-10">
                <h2 className="text-4xl font-bold text-white mb-6">
                  Ready to Build Your First Chatbot?
                </h2>
                <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                  Join thousands of businesses already using our AI chatbot builder to improve customer experience.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a 
                    href="/contact"
                    className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
                  >
                    Start Building Now
                  </a>
                  <a 
                    href="/about"
                    className="border border-cyan-500 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-500/10 transition-all duration-300 transform hover:scale-105"
                  >
                    Learn More About Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AIChatbotBuilderPage;
