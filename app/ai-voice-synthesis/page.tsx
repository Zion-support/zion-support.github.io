'use client';
import React from 'react';
import { Mic, Volume2, Globe, Zap, Headphones, MessageSquare, Bot, Settings } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';
import PerformanceOptimizer from '../components/PerformanceOptimizer';
import AccessibilityEnhancer from '../components/AccessibilityEnhancer';
import SecurityEnhancer from '../components/SecurityEnhancer';
import Analytics from '../components/Analytics';

const AIVoiceSynthesisPage: React.FC = () => {
  const features = [
    {
      title: 'Voice Cloning',
      description: 'Create realistic voice clones from just a few minutes of audio',
      icon: Mic,
      benefits: ['High-quality synthesis', 'Emotion control', 'Multiple voice options', 'Real-time processing']
    },
    {
      title: 'Text-to-Speech',
      description: 'Convert text to natural-sounding speech in multiple languages',
      icon: Volume2,
      benefits: ['100+ languages', 'Custom voices', 'SSML support', 'Batch processing']
    },
    {
      title: 'Voice Conversion',
      description: 'Transform one voice to sound like another while preserving content',
      icon: Headphones,
      benefits: ['Voice identity transfer', 'Real-time conversion', 'Quality preservation', 'Privacy protection']
    },
    {
      title: 'Emotion Control',
      description: 'Control emotional tone and expression in synthesized speech',
      icon: MessageSquare,
      benefits: ['Multiple emotions', 'Intensity control', 'Context awareness', 'Natural expression']
    }
  ];

  const applications = [
    {
      title: 'Accessibility',
      description: 'Voice assistance for visually impaired users',
      icon: Bot,
      impact: 'Improved accessibility for millions'
    },
    {
      title: 'Content Creation',
      description: 'Automated voiceovers for videos and presentations',
      icon: Volume2,
      impact: '90% faster content production'
    },
    {
      title: 'Customer Service',
      description: 'Natural-sounding voice assistants and IVR systems',
      icon: MessageSquare,
      impact: 'Enhanced customer experience'
    },
    {
      title: 'Language Learning',
      description: 'Pronunciation training and language practice',
      icon: Globe,
      impact: 'Improved learning outcomes'
    }
  ];

  return (
    <>
      <SEOOptimizer
        title="AI Voice Synthesis - Zion Tech Group"
        description="Advanced AI voice synthesis solutions including voice cloning, text-to-speech, voice conversion, and emotion control. Create natural-sounding voices for any application."
        keywords={['AI voice synthesis', 'voice cloning', 'text-to-speech', 'voice conversion', 'TTS', 'voice AI']}
        canonicalUrl="https://ziontechgroup.com/ai-voice-synthesis"
      />
      <PerformanceOptimizer
        enableImageOptimization={true}
        enableLazyLoading={true}
        enableCodeSplitting={true}
        enablePrefetching={true}
      />
      <AccessibilityEnhancer
        enableKeyboardNavigation={true}
        enableScreenReader={true}
        enableHighContrast={true}
        enableFocusManagement={true}
      />
      <SecurityEnhancer
        enableCSP={true}
        enableHSTS={true}
        enableXSSProtection={true}
        enableClickjackingProtection={true}
      />
      <Analytics />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900">
        <Navigation />
        
        <main className="container mx-auto px-4 py-16 pt-24">
          {/* Hero Section */}
          <section className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 cyber-text-3d neon-pulse">
              AI Voice Synthesis
            </h1>
            <p className="text-xl md:text-2xl text-indigo-400 mb-8 font-medium">
              Advanced Voice Cloning and Text-to-Speech Solutions
            </p>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
              Create natural-sounding voices with our advanced AI voice synthesis technology. 
              From voice cloning to text-to-speech, we help you bring your content to life 
              with human-like voice generation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="cyber-button px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300"
              >
                Get Voice Consultation
              </a>
              <a
                href="tel:+13024640950"
                className="flex items-center justify-center gap-2 border-2 border-indigo-400 text-indigo-400 px-8 py-4 rounded-lg font-semibold hover:bg-indigo-400 hover:text-slate-900 transition-all duration-300"
              >
                <span>+1 302 464 0950</span>
              </a>
            </div>
          </section>

          {/* Features Section */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center neon-text">
              Our Voice Synthesis Capabilities
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="quantum-card p-6 energy-pulse hover:scale-105 transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-3 neon-text">{feature.title}</h3>
                      <p className="text-gray-300 mb-4 leading-relaxed">{feature.description}</p>
                      <ul className="space-y-2">
                        {feature.benefits.map((benefit, benefitIndex) => (
                          <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                            <div className="w-2 h-2 bg-indigo-400 rounded-full mr-3 flex-shrink-0"></div>
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Applications Section */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center neon-text">
              Real-World Applications
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {applications.map((app, index) => (
                <div key={index} className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center mb-4 mx-auto">
                    <app.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 neon-text">{app.title}</h3>
                  <p className="text-gray-300 text-sm mb-3 leading-relaxed">{app.description}</p>
                  <div className="text-indigo-400 font-semibold text-sm">{app.impact}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Pricing Section */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center neon-text">
              Voice Synthesis Pricing
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <div className="cyber-card p-6 text-center">
                <h3 className="text-xl font-bold text-white mb-4 neon-text">Basic</h3>
                <div className="text-3xl font-bold text-indigo-400 mb-4">$1,300<span className="text-lg text-gray-400">/month</span></div>
                <ul className="space-y-2 text-gray-300 mb-6">
                  <li>Text-to-speech conversion</li>
                  <li>Basic voice options</li>
                  <li>API access</li>
                  <li>Standard quality</li>
                  <li>Email support</li>
                </ul>
                <a href="/contact" className="cyber-button px-6 py-3 text-sm font-medium transition-all duration-300 hover:scale-105">
                  Get Started
                </a>
              </div>
              
              <div className="cyber-card p-6 text-center ring-2 ring-indigo-400">
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <div className="bg-indigo-400 text-slate-900 px-3 py-1 rounded-full text-xs font-semibold">
                    Popular
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-4 neon-text">Professional</h3>
                <div className="text-3xl font-bold text-indigo-400 mb-4">$2,800<span className="text-lg text-gray-400">/month</span></div>
                <ul className="space-y-2 text-gray-300 mb-6">
                  <li>Voice cloning</li>
                  <li>Emotion control</li>
                  <li>High-quality synthesis</li>
                  <li>Custom voice training</li>
                  <li>Real-time processing</li>
                  <li>Priority support</li>
                </ul>
                <a href="/contact" className="cyber-button px-6 py-3 text-sm font-medium transition-all duration-300 hover:scale-105">
                  Get Started
                </a>
              </div>
              
              <div className="cyber-card p-6 text-center">
                <h3 className="text-xl font-bold text-white mb-4 neon-text">Enterprise</h3>
                <div className="text-3xl font-bold text-indigo-400 mb-4">Custom</div>
                <ul className="space-y-2 text-gray-300 mb-6">
                  <li>Custom voice platform</li>
                  <li>Unlimited voice options</li>
                  <li>24/7 monitoring</li>
                  <li>Dedicated team</li>
                  <li>Custom integrations</li>
                  <li>White-label solutions</li>
                </ul>
                <a href="/contact" className="cyber-button px-6 py-3 text-sm font-medium transition-all duration-300 hover:scale-105">
                  Contact Sales
                </a>
              </div>
            </div>
          </section>

          {/* Contact CTA */}
          <section className="text-center">
            <div className="cyber-card p-8 max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-4 neon-text">Ready to Give Your Content a Voice?</h2>
              <p className="text-lg text-gray-300 mb-6">
                Let our voice synthesis experts help you create natural-sounding voices for your applications.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="cyber-button px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300"
                >
                  Start Your Voice Project
                </a>
                <a
                  href="tel:+13024640950"
                  className="flex items-center justify-center gap-2 border-2 border-indigo-400 text-indigo-400 px-8 py-4 rounded-lg font-semibold hover:bg-indigo-400 hover:text-slate-900 transition-all duration-300"
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