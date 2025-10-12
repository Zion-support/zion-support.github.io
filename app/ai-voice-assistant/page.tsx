import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, CheckCircle, Star, Users, Award, Zap, Brain, Cloud, Shield, Code, BarChart, Settings, Target, TrendingUp, Lightbulb, Rocket, Award, Globe, Database, Smartphone, Cpu, Lock, Settings, Target, TrendingUp, Lightbulb, Rocket, Award, CheckCircle, ExternalLink, Mic, Volume2, Headphones, MessageCircle } from 'lucide-react';

const AIVoiceAssistantPage: React.FC = () => {
  const features = [
    {
      icon: Mic,
      title: 'Natural Speech Recognition',
      description: 'Advanced AI understands natural language with 99% accuracy'
    },
    {
      icon: Volume2,
      title: 'Human-like Voice Synthesis',
      description: 'Generate natural-sounding speech in multiple languages'
    },
    {
      icon: Headphones,
      title: 'Real-time Processing',
      description: 'Instant response and processing for seamless conversations'
    },
    {
      icon: MessageCircle,
      title: 'Context Awareness',
      description: 'Maintains conversation context for intelligent interactions'
    }
  ];

  const useCases = [
    {
      title: 'Customer Support',
      description: '24/7 automated customer service with natural conversations',
      icon: Users
    },
    {
      title: 'Voice Commands',
      description: 'Control applications and devices through voice commands',
      icon: Settings
    },
    {
      title: 'Accessibility',
      description: 'Help users with disabilities interact with technology',
      icon: Shield
    },
    {
      title: 'Content Creation',
      description: 'Generate audio content and voiceovers automatically',
      icon: Lightbulb
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Voice Assistant Solutions - Zion Tech Group</title>
        <meta name="description" content="Transform your business with AI voice assistant technology. Natural language processing, speech recognition, and voice synthesis solutions." />
        <meta name="keywords" content="AI voice assistant, speech recognition, voice synthesis, natural language processing, voice AI, conversational AI" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-16">
        {/* Hero Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                AI <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Voice Assistant</span> Solutions
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Transform your business with intelligent voice assistants that understand, respond, and interact naturally with your customers.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="#features"
                  className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
                >
                  Explore Features
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
                Powerful <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Voice AI</span> Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Advanced technology that makes voice interactions natural and intelligent
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
                Real-World <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Applications</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See how AI voice assistants can transform your business operations
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
                  Why Choose Our <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Voice AI</span>?
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <CheckCircle className="w-6 h-6 text-green-400 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">99% Accuracy</h3>
                      <p className="text-gray-300">Advanced speech recognition with industry-leading accuracy rates</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <CheckCircle className="w-6 h-6 text-green-400 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">Multi-language Support</h3>
                      <p className="text-gray-300">Support for 50+ languages and dialects worldwide</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <CheckCircle className="w-6 h-6 text-green-400 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">Custom Training</h3>
                      <p className="text-gray-300">Train the AI on your specific domain and terminology</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <CheckCircle className="w-6 h-6 text-green-400 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">Scalable Infrastructure</h3>
                      <p className="text-gray-300">Handle thousands of concurrent voice interactions</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-cyan-900/50 to-purple-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Ready to Get Started?</h3>
                <p className="text-gray-300 mb-6">
                  Transform your customer experience with intelligent voice assistants. Get a free consultation and see how we can help your business.
                </p>
                <div className="space-y-4">
                  <a 
                    href="/contact"
                    className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-6 py-3 rounded-lg font-semibold text-center hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 block"
                  >
                    Get Free Consultation
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
                  Ready to Transform Your Voice Experience?
                </h2>
                <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                  Let's build an AI voice assistant that understands your customers and delivers exceptional experiences.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a 
                    href="/contact"
                    className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
                  >
                    Start Your Project
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

export default AIVoiceAssistantPage;
