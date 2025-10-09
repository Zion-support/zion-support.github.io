'use client';
import React from 'react';
import { Mic, Volume2, Globe, Zap, Brain, Shield, Settings, Play } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';

const AIVoiceSynthesisPage: React.FC = () => {
  const voiceServices = [
    {
      title: 'Voice Cloning',
      description: 'Create realistic voice clones from minimal audio samples',
      icon: Mic,
      features: ['High-Quality Cloning', 'Minimal Training Data', 'Emotion Control', 'Multiple Languages']
    },
    {
      title: 'Text-to-Speech',
      description: 'Convert text to natural-sounding speech with various voices',
      icon: Volume2,
      features: ['Natural Voices', 'Multiple Languages', 'Emotion Control', 'SSML Support']
    },
    {
      title: 'Voice Conversion',
      description: 'Transform one voice to sound like another while preserving content',
      icon: Zap,
      features: ['Real-time Conversion', 'Voice Style Transfer', 'Quality Preservation', 'API Integration']
    },
    {
      title: 'Voice Analytics',
      description: 'Analyze voice characteristics and emotional content',
      icon: Brain,
      features: ['Emotion Detection', 'Speaker Identification', 'Voice Quality Analysis', 'Sentiment Analysis']
    }
  ];

  return (
    <>
      <SEOOptimizer
        title="AI Voice Synthesis - Zion Tech Group"
        description="Advanced AI voice synthesis solutions including voice cloning, text-to-speech, voice conversion, and voice analytics. Create natural-sounding AI voices."
        keywords={['voice synthesis', 'voice cloning', 'text-to-speech', 'voice conversion', 'AI voices', 'speech technology']}
        canonicalUrl="https://ziontechgroup.com/ai-voice-synthesis"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900">
        <Navigation />
        
        <main className="container mx-auto px-4 py-16 pt-24">
          {/* Hero Section */}
          <section className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 cyber-text-3d neon-pulse">
              AI Voice Synthesis
            </h1>
            <p className="text-xl text-indigo-400 mb-8 font-medium">
              Create Natural-Sounding AI Voices
            </p>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-8">
              Transform text into lifelike speech with our advanced AI voice synthesis technology. 
              From voice cloning to emotion control, create voices that sound truly human.
            </p>
          </section>

          {/* Voice Services Grid */}
          <section className="mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {voiceServices.map((service, index) => (
                <article key={index} className="cyber-card p-8 hover:scale-105 transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center mb-6">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 neon-text">{service.title}</h3>
                  <p className="text-gray-300 mb-6 text-lg leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-indigo-400 mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-300">
                          <div className="w-2 h-2 bg-green-400 rounded-full mr-3 flex-shrink-0"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* Benefits Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">Why Choose Our Voice Solutions?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="cyber-card p-6 text-center">
                <div className="text-4xl mb-4">🎵</div>
                <h3 className="text-xl font-bold text-white mb-3">Natural Quality</h3>
                <p className="text-gray-300">AI-generated voices that are virtually indistinguishable from human speech.</p>
              </div>
              <div className="cyber-card p-6 text-center">
                <div className="text-4xl mb-4">🌍</div>
                <h3 className="text-xl font-bold text-white mb-3">Multi-Language</h3>
                <p className="text-gray-300">Support for multiple languages and accents with native-level pronunciation.</p>
              </div>
              <div className="cyber-card p-6 text-center">
                <div className="text-4xl mb-4">⚡</div>
                <h3 className="text-xl font-bold text-white mb-3">Real-Time Processing</h3>
                <p className="text-gray-300">Fast, efficient voice synthesis for real-time applications and streaming.</p>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="cyber-card p-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4 neon-text">Ready to Create Amazing Voices?</h2>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Let our voice synthesis experts help you build intelligent systems with natural-sounding AI voices. 
              Get a free consultation and discover the potential of voice technology for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="cyber-button px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300"
              >
                Get Free Consultation
              </a>
              <a
                href="tel:+13024640950"
                className="flex items-center justify-center gap-2 border-2 border-indigo-400 text-indigo-400 px-8 py-4 rounded-lg font-semibold hover:bg-indigo-400 hover:text-slate-900 transition-all duration-300"
              >
                Call +1 302 464 0950
              </a>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default AIVoiceSynthesisPage;