'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { CheckCircle, ArrowRight, Mic, Brain, Volume2, Zap, Target, Shield, Headphones } from 'lucide-react';

const AiSpeechSynthesisPage: React.FC = () => {
  const features = [
    {
      icon: Mic,
      title: 'Natural Voice Generation',
      description: 'Generate human-like speech with advanced neural text-to-speech technology.',
      benefits: ['Natural intonation', 'Emotional expression', 'Multiple languages', 'Voice cloning']
    },
    {
      icon: Brain,
      title: 'AI-Powered Synthesis',
      description: 'Advanced AI models that understand context and deliver natural-sounding speech.',
      benefits: ['Context awareness', 'Emotional intelligence', 'Adaptive learning', 'Quality optimization']
    },
    {
      icon: Volume2,
      title: 'Multiple Voice Options',
      description: 'Choose from a variety of voices, accents, and speaking styles for your content.',
      benefits: ['Diverse voice library', 'Custom voice training', 'Accent variations', 'Style adaptation']
    },
    {
      icon: Zap,
      title: 'Real-time Processing',
      description: 'Generate speech in real-time for interactive applications and live content.',
      benefits: ['Low latency', 'Stream processing', 'Live synthesis', 'Interactive responses']
    },
    {
      icon: Target,
      title: 'Custom Voice Training',
      description: 'Train custom voices for your brand or specific requirements.',
      benefits: ['Brand voice creation', 'Personalized voices', 'Custom training', 'Voice adaptation']
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Secure voice synthesis with enterprise-grade security and compliance.',
      benefits: ['Data protection', 'Secure processing', 'Compliance support', 'Privacy controls']
    }
  ];

  const benefits = [
    'Reduce content production time by 70%',
    'Improve accessibility with voice content',
    'Scale voice content production efficiently',
    'Maintain consistent brand voice across platforms',
    'Enhance user engagement with natural speech'
  ];

  return (
    <>
      <Helmet>
        <title>AI Speech Synthesis - Zion Tech Group</title>
        <meta name="description" content="Advanced AI-powered speech synthesis and text-to-speech solutions. Generate natural, human-like voices for your applications." />
        <meta name="keywords" content="AI speech synthesis, text-to-speech, voice generation, TTS, voice AI, speech technology" />
      </Helmet>
      
      <Navigation />
      
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                AI Speech Synthesis
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600">
                  Natural Voice Generation
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Transform text into natural, human-like speech with our advanced AI-powered 
                speech synthesis technology. Perfect for content creation, accessibility, and interactive applications.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center">
                  Get Started
                  <ArrowRight className="ml-2 w-5 h-5" />
                </button>
                <button className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300">
                  Listen to Demo
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Advanced Speech Synthesis Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our AI speech synthesis platform delivers natural, high-quality voice generation 
                with advanced features and customization options.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center mb-6">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300 mb-6">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-400">
                        <CheckCircle className="w-4 h-4 text-cyan-400 mr-2" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose Our AI Speech Synthesis?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Experience the power of natural voice generation with measurable business benefits.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center bg-slate-800/30 backdrop-blur-sm rounded-xl p-6 border border-cyan-500/20">
                  <CheckCircle className="w-6 h-6 text-cyan-400 mr-4 flex-shrink-0" />
                  <span className="text-white font-medium">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-500/10 to-purple-500/10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Generate Natural Speech?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Get started with our AI speech synthesis platform and create natural, engaging voice content.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center">
                Start Free Trial
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
              <button className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300">
                Contact Sales
              </button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default AiSpeechSynthesisPage;
