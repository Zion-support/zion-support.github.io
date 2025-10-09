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
        description="Advanced AI voice synthesis solutions including voice cloning, text-to-speech, emotion control, and multi-language support. Create realistic AI voices for your applications."
        keywords={['AI voice synthesis', 'voice cloning', 'text-to-speech', 'voice AI', 'speech generation', 'voice technology']}
        canonicalUrl="https://ziontechgroup.com/ai-voice-synthesis"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900">
        <Navigation />
        
        <main className="container mx-auto px-4 py-16 pt-24">
          <section className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 cyber-text-3d neon-pulse">
              AI Voice Synthesis
            </h1>
            <p className="text-xl text-indigo-400 mb-8 font-medium">
              Advanced Voice AI Technology
            </p>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-8">
              Create realistic, natural-sounding AI voices with our advanced voice synthesis technology. 
              From voice cloning to emotion-controlled speech, we bring your content to life.
            </p>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">Voice Capabilities</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300">
                <Mic className="w-12 h-12 text-indigo-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Voice Cloning</h3>
                <p className="text-gray-300">Create realistic voice clones from audio samples</p>
              </div>
              <div className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300">
                <Volume2 className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Text-to-Speech</h3>
                <p className="text-gray-300">Convert text into natural-sounding speech</p>
              </div>
              <div className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300">
                <Languages className="w-12 h-12 text-green-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Multi-Language</h3>
                <p className="text-gray-300">Support for 50+ languages and accents</p>
              </div>
            </div>
          </section>

          <section className="text-center">
            <div className="cyber-card p-8">
              <h2 className="text-3xl font-bold text-white mb-4 neon-text">Ready to Create Amazing Voices?</h2>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                Contact our voice AI experts today to discuss how voice synthesis can enhance your applications.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/contact" className="cyber-button px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300">
                  Get Started Today
                </a>
                <a href="tel:+13024640950" className="flex items-center justify-center gap-2 border-2 border-indigo-400 text-indigo-400 px-8 py-4 rounded-lg font-semibold hover:bg-indigo-400 hover:text-slate-900 transition-all duration-300">
                  Call +1 302 464 0950
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