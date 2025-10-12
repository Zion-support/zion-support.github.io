'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Mic, Brain, Zap, Shield, Users, Settings } from 'lucide-react';

const AIVoiceAssistantPage: React.FC = () => {
  const features = [
    {
      icon: Mic,
      title: 'Natural Speech Recognition',
      description: 'Advanced voice recognition that understands context and accents',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Brain,
      title: 'Intelligent Responses',
      description: 'AI-powered responses that learn and adapt to user preferences',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Zap,
      title: 'Real-time Processing',
      description: 'Instant voice processing and response generation',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: Shield,
      title: 'Privacy & Security',
      description: 'Enterprise-grade security for voice data protection',
      color: 'from-red-500 to-orange-500'
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Voice Assistant - Zion Tech Group | Intelligent Voice AI Solutions</title>
        <meta name="description" content="Build intelligent voice assistants with natural speech recognition, real-time processing, and enterprise security. Transform customer interactions." />
        <meta name="keywords" content="AI voice assistant, voice AI, speech recognition, voice synthesis, conversational AI, voice automation" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
        {/* Hero Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                AI <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Voice Assistant</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Create intelligent voice assistants that understand natural speech, provide contextual responses, 
                and deliver exceptional user experiences across all devices.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105"
                >
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  to="/demo"
                  className="inline-flex items-center px-8 py-4 border-2 border-purple-400 text-purple-400 font-semibold rounded-lg hover:bg-purple-400 hover:text-white transition-all duration-300 transform hover:scale-105"
                >
                  View Demo
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Powerful Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Everything you need to build, deploy, and manage intelligent voice assistants.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="group">
                  <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 h-full hover:bg-gray-700/50 transition-all duration-300 transform hover:scale-105 border border-gray-700/50">
                    <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${feature.color} rounded-xl mb-6`}>
                      <feature.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                    <p className="text-gray-300">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-r from-purple-900/50 to-pink-900/50 backdrop-blur-sm rounded-2xl p-12 text-center border border-purple-500/20">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Build Your Voice Assistant?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Let's create an intelligent voice assistant that transforms how users interact with your applications.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105"
              >
                Start Building Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AIVoiceAssistantPage;
