'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Mic, Volume2, Languages, Zap, Shield, Users, Clock, CheckCircle, ArrowRight, Brain, Headphones, TrendingUp } from 'lucide-react';

const AiSpeechSynthesisPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>AI Speech Synthesis - Natural Voice Generation | Zion Tech Group</title>
        <meta name="description" content="Create natural-sounding speech with our AI speech synthesis platform. High-quality voice generation, multiple languages, and customizable voices for any application." />
        <meta name="keywords" content="AI speech synthesis, text-to-speech, voice generation, natural voice, TTS, voice AI, speech technology" />
        <meta property="og:title" content="AI Speech Synthesis - Natural Voice Generation" />
        <meta property="og:description" content="Create natural-sounding speech with our AI speech synthesis platform. High-quality voice generation, multiple languages, and customizable voices." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="AI Speech Synthesis - Natural Voice Generation" />
        <meta name="twitter:description" content="Create natural-sounding speech with our AI speech synthesis platform. High-quality voice generation, multiple languages, and customizable voices." />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                AI Speech Synthesis
                <span className="block text-cyan-400">Natural Voice Generation</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Create natural-sounding speech with our advanced AI speech synthesis platform. 
                High-quality voice generation, multiple languages, and customizable voices for any application.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300">
                  Try Free Demo
                </button>
                <button className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300">
                  Listen to Samples
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">
              Advanced Speech Synthesis Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-slate-800/50 p-8 rounded-xl border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mb-6">
                  <Mic className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Natural Voice Quality</h3>
                <p className="text-gray-300 mb-4">
                  Generate human-like speech with natural intonation, rhythm, and emotional expression.
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-cyan-400 mr-2" />99.9% natural sounding</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-cyan-400 mr-2" />Emotional expression</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-cyan-400 mr-2" />Natural pauses</li>
                </ul>
              </div>

              <div className="bg-slate-800/50 p-8 rounded-xl border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mb-6">
                  <Languages className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Multi-Language Support</h3>
                <p className="text-gray-300 mb-4">
                  Support for 50+ languages with native pronunciation and cultural nuances.
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-purple-400 mr-2" />50+ languages</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-purple-400 mr-2" />Regional accents</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-purple-400 mr-2" />Cultural adaptation</li>
                </ul>
              </div>

              <div className="bg-slate-800/50 p-8 rounded-xl border border-green-500/20 hover:border-green-400/40 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg flex items-center justify-center mb-6">
                  <Volume2 className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Custom Voice Creation</h3>
                <p className="text-gray-300 mb-4">
                  Create unique voice profiles tailored to your brand and specific requirements.
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-400 mr-2" />Voice cloning</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-400 mr-2" />Brand voices</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-400 mr-2" />Custom training</li>
                </ul>
              </div>

              <div className="bg-slate-800/50 p-8 rounded-xl border border-orange-500/20 hover:border-orange-400/40 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-600 rounded-lg flex items-center justify-center mb-6">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Real-time Processing</h3>
                <p className="text-gray-300 mb-4">
                  Generate speech in real-time with ultra-low latency for interactive applications.
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-orange-400 mr-2" />Sub-100ms latency</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-orange-400 mr-2" />Streaming support</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-orange-400 mr-2" />Live conversion</li>
                </ul>
              </div>

              <div className="bg-slate-800/50 p-8 rounded-xl border border-blue-500/20 hover:border-blue-400/40 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-lg flex items-center justify-center mb-6">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Enterprise Security</h3>
                <p className="text-gray-300 mb-4">
                  Bank-level security with encryption, compliance, and privacy protection.
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-blue-400 mr-2" />End-to-end encryption</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-blue-400 mr-2" />SOC 2 compliant</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-blue-400 mr-2" />Data privacy</li>
                </ul>
              </div>

              <div className="bg-slate-800/50 p-8 rounded-xl border border-pink-500/20 hover:border-pink-400/40 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-600 rounded-lg flex items-center justify-center mb-6">
                  <Headphones className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Audio Formats</h3>
                <p className="text-gray-300 mb-4">
                  Support for all major audio formats with high-quality output options.
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-pink-400 mr-2" />MP3, WAV, AAC</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-pink-400 mr-2" />High-resolution audio</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-pink-400 mr-2" />Custom bitrates</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">
              Industry Applications
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Content Creation</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-cyan-400 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-lg font-semibold text-white">Audiobook Production</h4>
                      <p className="text-gray-300">Convert text to natural-sounding audiobooks with character voices</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-cyan-400 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-lg font-semibold text-white">Podcast Generation</h4>
                      <p className="text-gray-300">Create engaging podcast content with AI-generated voices</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-cyan-400 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-lg font-semibold text-white">Video Narration</h4>
                      <p className="text-gray-300">Add professional voiceovers to videos and presentations</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Accessibility & Assistive Technology</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-purple-400 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-lg font-semibold text-white">Screen Readers</h4>
                      <p className="text-gray-300">Enhanced screen reading with natural voice synthesis</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-purple-400 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-lg font-semibold text-white">Voice Assistants</h4>
                      <p className="text-gray-300">Create custom voice assistants for specific applications</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-purple-400 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-lg font-semibold text-white">Language Learning</h4>
                      <p className="text-gray-300">Interactive language learning with native pronunciation</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Voice Samples Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">
              Voice Samples
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-slate-800/50 p-6 rounded-xl border border-gray-700">
                <h3 className="text-lg font-bold text-white mb-4">Professional Male Voice</h3>
                <p className="text-gray-300 mb-4">"Welcome to our AI speech synthesis platform. Experience natural, high-quality voice generation for all your applications."</p>
                <button className="w-full bg-cyan-500 text-white py-2 rounded-lg hover:bg-cyan-600 transition-colors">
                  <Volume2 className="w-4 h-4 inline mr-2" />
                  Play Sample
                </button>
              </div>

              <div className="bg-slate-800/50 p-6 rounded-xl border border-gray-700">
                <h3 className="text-lg font-bold text-white mb-4">Friendly Female Voice</h3>
                <p className="text-gray-300 mb-4">"Hello! I'm your AI voice assistant. I can help you with any task using our advanced speech synthesis technology."</p>
                <button className="w-full bg-purple-500 text-white py-2 rounded-lg hover:bg-purple-600 transition-colors">
                  <Volume2 className="w-4 h-4 inline mr-2" />
                  Play Sample
                </button>
              </div>

              <div className="bg-slate-800/50 p-6 rounded-xl border border-gray-700">
                <h3 className="text-lg font-bold text-white mb-4">Multilingual Support</h3>
                <p className="text-gray-300 mb-4">"Bonjour! Hola! Guten Tag! Our platform supports over 50 languages with native pronunciation and cultural nuances."</p>
                <button className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition-colors">
                  <Volume2 className="w-4 h-4 inline mr-2" />
                  Play Sample
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">
              Flexible Pricing Plans
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-slate-800/50 p-8 rounded-xl border border-gray-700">
                <h3 className="text-2xl font-bold text-white mb-4">Starter</h3>
                <div className="text-4xl font-bold text-cyan-400 mb-6">$49<span className="text-lg text-gray-400">/month</span></div>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center text-gray-300"><CheckCircle className="w-5 h-5 text-cyan-400 mr-3" />Up to 10,000 characters/month</li>
                  <li className="flex items-center text-gray-300"><CheckCircle className="w-5 h-5 text-cyan-400 mr-3" />5 voice options</li>
                  <li className="flex items-center text-gray-300"><CheckCircle className="w-5 h-5 text-cyan-400 mr-3" />Email support</li>
                  <li className="flex items-center text-gray-300"><CheckCircle className="w-5 h-5 text-cyan-400 mr-3" />Standard quality</li>
                </ul>
                <button className="w-full bg-cyan-500 text-white py-3 rounded-lg font-semibold hover:bg-cyan-600 transition-colors">
                  Get Started
                </button>
              </div>

              <div className="bg-slate-800/50 p-8 rounded-xl border border-cyan-500 relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-cyan-500 text-white px-4 py-1 rounded-full text-sm font-semibold">Most Popular</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Professional</h3>
                <div className="text-4xl font-bold text-cyan-400 mb-6">$149<span className="text-lg text-gray-400">/month</span></div>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center text-gray-300"><CheckCircle className="w-5 h-5 text-cyan-400 mr-3" />Up to 100,000 characters/month</li>
                  <li className="flex items-center text-gray-300"><CheckCircle className="w-5 h-5 text-cyan-400 mr-3" />20+ voice options</li>
                  <li className="flex items-center text-gray-300"><CheckCircle className="w-5 h-5 text-cyan-400 mr-3" />Priority support</li>
                  <li className="flex items-center text-gray-300"><CheckCircle className="w-5 h-5 text-cyan-400 mr-3" />High quality audio</li>
                  <li className="flex items-center text-gray-300"><CheckCircle className="w-5 h-5 text-cyan-400 mr-3" />API access</li>
                </ul>
                <button className="w-full bg-cyan-500 text-white py-3 rounded-lg font-semibold hover:bg-cyan-600 transition-colors">
                  Get Started
                </button>
              </div>

              <div className="bg-slate-800/50 p-8 rounded-xl border border-gray-700">
                <h3 className="text-2xl font-bold text-white mb-4">Enterprise</h3>
                <div className="text-4xl font-bold text-cyan-400 mb-6">Custom</div>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center text-gray-300"><CheckCircle className="w-5 h-5 text-cyan-400 mr-3" />Unlimited characters</li>
                  <li className="flex items-center text-gray-300"><CheckCircle className="w-5 h-5 text-cyan-400 mr-3" />Custom voice creation</li>
                  <li className="flex items-center text-gray-300"><CheckCircle className="w-5 h-5 text-cyan-400 mr-3" />24/7 dedicated support</li>
                  <li className="flex items-center text-gray-300"><CheckCircle className="w-5 h-5 text-cyan-400 mr-3" />Custom integrations</li>
                  <li className="flex items-center text-gray-300"><CheckCircle className="w-5 h-5 text-cyan-400 mr-3" />On-premise deployment</li>
                </ul>
                <button className="w-full border-2 border-cyan-400 text-cyan-400 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-colors">
                  Contact Sales
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-500/10 to-purple-500/10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Create Natural-Sounding Speech?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of developers and businesses using our AI speech synthesis platform to create engaging voice experiences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center">
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-slate-900 transition-all duration-300">
                Listen to Demo
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AiSpeechSynthesisPage;