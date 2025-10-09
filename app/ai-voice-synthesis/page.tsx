'use client';
import React from 'react';
import { Mic, Volume2, Globe, Zap, Target, TrendingUp, Users, Award } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';

const AIVoiceSynthesisPage: React.FC = () => {
  const features = [
    {
      title: 'Voice Cloning',
      description: 'Create realistic voice clones with just a few seconds of audio',
      icon: Mic,
      benefits: ['High-quality cloning', 'Quick setup', 'Multiple voices']
    },
    {
      title: 'Text-to-Speech',
      description: 'Convert text to natural-sounding speech in multiple languages',
      icon: Volume2,
      benefits: ['Natural voices', '100+ languages', 'Real-time synthesis']
    },
    {
      title: 'Emotion Control',
      description: 'Control emotional tone and expression in generated speech',
      icon: Target,
      benefits: ['Emotion variety', 'Context awareness', 'Natural expression']
    },
    {
      title: 'Multi-language Support',
      description: 'Generate speech in multiple languages with native accents',
      icon: Globe,
      benefits: ['Global reach', 'Native accents', 'Cultural adaptation']
    }
  ];

  return (
    <>
      <SEOOptimizer
        title="AI Voice Synthesis - Zion Tech Group"
        description="Advanced voice synthesis solutions including voice cloning, text-to-speech, emotion control, and multi-language support. Create natural-sounding AI voices."
        keywords={['voice synthesis', 'voice cloning', 'text-to-speech', 'TTS', 'voice AI', 'speech generation']}
        canonicalUrl="https://ziontechgroup.com/ai-voice-synthesis"
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        <main className="container mx-auto px-4 py-16 pt-24">
          <section className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              AI Voice Synthesis
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Create natural-sounding AI voices with our advanced voice synthesis technology. 
              From voice cloning to text-to-speech, we bring your content to life with realistic voices.
            </p>
            <div className="text-2xl font-bold text-cyan-400 mb-4">$1,300/month</div>
            <p className="text-gray-300">Advanced voice synthesis development and deployment</p>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Voice Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="cyber-card p-6 hover:scale-105 transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center mb-6 mx-auto">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 text-center">{feature.title}</h3>
                  <p className="text-gray-300 mb-4 text-center text-sm leading-relaxed">
                    {feature.description}
                  </p>
                  <ul className="space-y-1">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-xs text-gray-300">
                        <div className="w-1 h-1 bg-indigo-400 rounded-full mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          <section className="text-center">
            <div className="cyber-card p-8">
              <h2 className="text-3xl font-bold text-white mb-4">Bring Your Content to Life with AI Voices</h2>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                Our voice synthesis technology achieves 99% voice accuracy and supports 100+ languages. 
                Let's create the perfect voice for your content.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="cyber-button px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300"
                >
                  Start Your Voice Journey
                </a>
                <a
                  href="tel:+13024640950"
                  className="flex items-center justify-center gap-2 border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
                >
                  <span>+1 302 464 0950</span>
                </a>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default AIVoiceSynthesisPage;