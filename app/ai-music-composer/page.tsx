'use client';
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Music, Zap, CheckCircle, Star, ArrowRight, Headphones, Mic, Volume2 } from 'lucide-react';

export default function AIMusicComposerPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <div className="text-6xl mb-6">🎵</div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 neon-text">
              AI Music Composer
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Create original music, jingles, and soundtracks with AI-powered composition and mixing tools. 
              From background music to full orchestral pieces, bring your creative vision to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#pricing" 
                className="bg-gradient-to-r from-violet-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-violet-600 hover:to-purple-700 transition-all duration-300"
              >
                Start Creating
              </a>
              <a 
                href="#features" 
                className="border-2 border-violet-500 text-violet-400 px-8 py-4 rounded-lg font-semibold hover:bg-violet-500 hover:text-white transition-all duration-300"
              >
                Learn More
              </a>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-12 neon-text">
              Creative Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="cyber-card hologram-card p-6">
                <Music className="w-12 h-12 text-violet-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Genre Variety</h3>
                <p className="text-gray-300">
                  Generate music in any genre: classical, jazz, rock, electronic, ambient, and more.
                </p>
              </div>
              <div className="cyber-card hologram-card p-6">
                <Headphones className="w-12 h-12 text-violet-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">High-Quality Audio</h3>
                <p className="text-gray-300">
                  Professional-grade audio output with customizable tempo, key, and instrumentation.
                </p>
              </div>
              <div className="cyber-card hologram-card p-6">
                <Mic className="w-12 h-12 text-violet-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Voice Integration</h3>
                <p className="text-gray-300">
                  Add AI-generated vocals and harmonies to your compositions automatically.
                </p>
              </div>
              <div className="cyber-card hologram-card p-6">
                <Volume2 className="w-12 h-12 text-violet-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Smart Mixing</h3>
                <p className="text-gray-300">
                  AI automatically balances levels, applies effects, and optimizes the final mix.
                </p>
              </div>
              <div className="cyber-card hologram-card p-6">
                <Zap className="w-12 h-12 text-violet-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Instant Generation</h3>
                <p className="text-gray-300">
                  Create complete musical pieces in seconds with just a few clicks.
                </p>
              </div>
              <div className="cyber-card hologram-card p-6">
                <CheckCircle className="w-12 h-12 text-violet-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Copyright Safe</h3>
                <p className="text-gray-300">
                  All generated music is original and free from copyright issues.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-16 px-4 bg-gray-900/50">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-12 neon-text">
              Simple Pricing
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="cyber-card hologram-card p-8">
                <h3 className="text-2xl font-bold text-white mb-4">Creator</h3>
                <div className="text-4xl font-bold text-violet-400 mb-6">$69/month</div>
                <ul className="text-gray-300 space-y-3 mb-8">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-violet-400 mr-3" />
                    50 tracks/month
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-violet-400 mr-3" />
                    5 genres
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-violet-400 mr-3" />
                    Basic mixing
                  </li>
                </ul>
                <a href="/contact" className="w-full bg-violet-500 text-white py-3 rounded-lg font-semibold hover:bg-violet-600 transition-colors block text-center">
                  Get Started
                </a>
              </div>
              
              <div className="cyber-card hologram-card p-8 border-2 border-violet-500">
                <div className="bg-violet-500 text-white px-4 py-1 rounded-full text-sm font-semibold mb-4 inline-block">
                  Most Popular
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Professional</h3>
                <div className="text-4xl font-bold text-violet-400 mb-6">$149/month</div>
                <ul className="text-gray-300 space-y-3 mb-8">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-violet-400 mr-3" />
                    Unlimited tracks
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-violet-400 mr-3" />
                    All genres
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-violet-400 mr-3" />
                    Advanced mixing & mastering
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-violet-400 mr-3" />
                    Voice synthesis
                  </li>
                </ul>
                <a href="/contact" className="w-full bg-violet-500 text-white py-3 rounded-lg font-semibold hover:bg-violet-600 transition-colors block text-center">
                  Get Started
                </a>
              </div>
              
              <div className="cyber-card hologram-card p-8">
                <h3 className="text-2xl font-bold text-white mb-4">Studio</h3>
                <div className="text-4xl font-bold text-violet-400 mb-6">$299/month</div>
                <ul className="text-gray-300 space-y-3 mb-8">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-violet-400 mr-3" />
                    Everything in Professional
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-violet-400 mr-3" />
                    Custom AI training
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-violet-400 mr-3" />
                    Commercial licensing
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-violet-400 mr-3" />
                    Priority support
                  </li>
                </ul>
                <a href="/contact" className="w-full bg-violet-500 text-white py-3 rounded-lg font-semibold hover:bg-violet-600 transition-colors block text-center">
                  Contact Sales
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 neon-text">
              Ready to Create Amazing Music?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of creators who are already using AI to compose beautiful music.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact" 
                className="bg-gradient-to-r from-violet-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-violet-600 hover:to-purple-700 transition-all duration-300"
              >
                Start Creating
              </a>
              <a 
                href="tel:+13024640950" 
                className="border-2 border-violet-500 text-violet-400 px-8 py-4 rounded-lg font-semibold hover:bg-violet-500 hover:text-white transition-all duration-300"
              >
                Call +1 (302) 464-0950
              </a>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}