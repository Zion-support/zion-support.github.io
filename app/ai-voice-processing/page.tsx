'use client';
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Mic, Volume2, Headphones, MessageSquare, CheckCircle, ArrowRight, Star, Users, Award, Zap } from 'lucide-react';

const AIVoiceProcessingPage: React.FC = () => {
  const features = [
    {
      icon: Mic,
      title: 'Speech Recognition',
      description: 'Convert speech to text with 99% accuracy in multiple languages and accents.'
    },
    {
      icon: Volume2,
      title: 'Text-to-Speech',
      description: 'Generate natural-sounding speech from text with human-like intonation and emotion.'
    },
    {
      icon: Headphones,
      title: 'Voice Cloning',
      description: 'Create custom voice models for personalized audio experiences and content creation.'
    },
    {
      icon: MessageSquare,
      title: 'Voice Analytics',
      description: 'Analyze voice patterns, emotions, and sentiment for deeper customer insights.'
    }
  ];

  const applications = [
    {
      title: 'Voice Assistants',
      description: 'Build intelligent voice assistants for customer service and automation.',
      accuracy: '99%',
      icon: '🤖'
    },
    {
      title: 'Call Center AI',
      description: 'Automated call routing, transcription, and sentiment analysis.',
      accuracy: '97%',
      icon: '📞'
    },
    {
      title: 'Content Creation',
      description: 'Generate podcasts, audiobooks, and voice content at scale.',
      accuracy: '98%',
      icon: '🎙️'
    },
    {
      title: 'Accessibility',
      description: 'Voice interfaces for users with visual or motor impairments.',
      accuracy: '99%',
      icon: '♿'
    },
    {
      title: 'Language Learning',
      description: 'Interactive voice-based language learning and pronunciation training.',
      accuracy: '96%',
      icon: '🌍'
    },
    {
      title: 'Voice Security',
      description: 'Biometric voice authentication and fraud detection.',
      accuracy: '99.5%',
      icon: '🔐'
    }
  ];

  const benefits = [
    'Reduce customer service costs by 60%',
    'Improve accessibility for all users',
    'Enable hands-free operation of systems',
    'Scale voice interactions without human agents',
    'Support 50+ languages and dialects',
    'Real-time processing with low latency'
  ];

  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 neon-text">
                AI Voice Processing
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Transform speech into powerful business solutions with our advanced AI voice processing platform. 
                From speech recognition to voice synthesis, unlock the potential of human communication.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="cyber-button px-8 py-4 text-lg">
                  Start Processing
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button>
                <button className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg hover:bg-cyan-400/10 transition-colors">
                  Listen to Demo
                </button>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
              <div className="text-center">
                <div className="text-4xl font-bold text-cyan-400 mb-2">99%</div>
                <div className="text-gray-300">Speech Accuracy</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-cyan-400 mb-2">50+</div>
                <div className="text-gray-300">Languages</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-cyan-400 mb-2">60%</div>
                <div className="text-gray-300">Cost Reduction</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-cyan-400 mb-2">&lt;200ms</div>
                <div className="text-gray-300">Response Time</div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Advanced Voice Processing Features</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our AI voice processing platform combines speech recognition, natural language processing, 
                and voice synthesis to deliver comprehensive voice solutions.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-slate-800/50 rounded-xl p-6 hover:bg-slate-800/70 transition-colors">
                  <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-cyan-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Applications Section */}
        <section className="py-20 px-4 bg-slate-800/30">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Voice Processing Applications</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                From customer service to content creation, our voice processing solutions 
                are transforming how businesses interact with their customers.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {applications.map((app, index) => (
                <div key={index} className="bg-slate-900/50 rounded-xl p-6 hover:bg-slate-900/70 transition-colors">
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-4xl">{app.icon}</div>
                    <div className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm font-semibold">
                      {app.accuracy} accuracy
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{app.title}</h3>
                  <p className="text-gray-300">{app.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-7xl">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl font-bold text-white mb-6">Why Choose Our Voice Processing?</h2>
                <p className="text-xl text-gray-300 mb-8">
                  Our AI voice processing platform delivers enterprise-grade performance 
                  with the accuracy and reliability your business demands.
                </p>
                <div className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="w-6 h-6 text-cyan-400 flex-shrink-0" />
                      <span className="text-gray-300">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Voice Processing Metrics</h3>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-gray-300">Speech Recognition:</span>
                    <span className="text-green-400 font-semibold">99%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Voice Synthesis:</span>
                    <span className="text-green-400 font-semibold">98%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Language Support:</span>
                    <span className="text-green-400 font-semibold">50+</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Response Time:</span>
                    <span className="text-green-400 font-semibold">&lt;200ms</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-cyan-600/20 to-purple-600/20">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-4xl font-bold text-white mb-6">Hear the Future with AI Voice</h2>
            <p className="text-xl text-gray-300 mb-8">
              Transform your voice interactions with our advanced AI voice processing platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="cyber-button px-8 py-4 text-lg">
                Get Started
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg hover:bg-cyan-400/10 transition-colors">
                Request Demo
              </button>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default AIVoiceProcessingPage;