'use client';
import React from 'react';
import { Mic, Volume2, Languages, Headphones, Radio, Zap } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';

const AIVoiceSynthesisPage: React.FC = () => {
  return (
    <>
      <SEOOptimizer
        title="AI Voice Synthesis - Zion Tech Group"
        description="Advanced AI voice synthesis solutions including text-to-speech, voice cloning, and audio processing. Create natural-sounding voices for your applications."
        keywords={['AI voice synthesis', 'text-to-speech', 'voice cloning', 'audio AI', 'voice generation', 'TTS']}
        canonicalUrl="https://ziontechgroup.com/ai-voice-synthesis"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900">
        <Navigation />
        
        <main className="container mx-auto px-4 py-16 pt-24">
          <section className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 cyber-text-3d neon-pulse">
              AI Voice Synthesis
            </h1>
            <p className="text-xl text-indigo-400 mb-8 font-medium neon-pulse">
              Create Natural-Sounding Voices with AI
            </p>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
              Our AI voice synthesis solutions create natural, human-like voices for text-to-speech, 
              voice cloning, and audio content generation across multiple languages and accents.
            </p>
          </section>

          <section className="mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="cyber-card p-6 text-center">
                <Mic className="w-12 h-12 text-indigo-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Voice Cloning</h3>
                <p className="text-gray-300">Create realistic voice clones from just a few seconds of audio samples</p>
              </div>
              <div className="cyber-card p-6 text-center">
                <Volume2 className="w-12 h-12 text-green-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Text-to-Speech</h3>
                <p className="text-gray-300">Convert text into natural-sounding speech with emotion and intonation control</p>
              </div>
              <div className="cyber-card p-6 text-center">
                <Languages className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Multi-Language Support</h3>
                <p className="text-gray-300">Generate voices in multiple languages with native pronunciation and accents</p>
              </div>
            </div>
          </section>

          <section className="text-center">
            <div className="cyber-card p-8 max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-4 neon-text">Ready to Give Voice to Your Content?</h2>
              <p className="text-gray-300 mb-6 text-lg">
                Let our voice synthesis experts help you create engaging audio content for your applications.
              </p>
              <a
                href="/contact"
                className="cyber-button px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300"
              >
                Get Voice Synthesis Consultation
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