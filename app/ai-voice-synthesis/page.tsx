'use client';
import React from 'react';
import { Mic, Volume2, Languages, Zap, Headphones, MessageSquare } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';
import PerformanceOptimizer from '../components/PerformanceOptimizer';
import AccessibilityEnhancer from '../components/AccessibilityEnhancer';
import SecurityEnhancer from '../components/SecurityEnhancer';
import Analytics from '../components/Analytics';

const AIVoiceSynthesisPage: React.FC = () => {
  const voiceServices = [
    {
      title: 'Voice Cloning',
      description: 'Create realistic voice clones for content creation and accessibility',
      icon: Mic,
      features: ['High-quality Voice Cloning', 'Multiple Voice Options', 'Real-time Synthesis', 'API Integration'],
      benefits: ['99% voice accuracy', 'Multiple languages', 'Real-time processing']
    },
    {
      title: 'Text-to-Speech',
      description: 'Convert text into natural-sounding speech with emotion control',
      icon: Volume2,
      features: ['Natural Speech', 'Emotion Control', 'Multiple Languages', 'Custom Voices'],
      benefits: ['Human-like quality', 'Emotional expression', '50+ languages']
    },
    {
      title: 'Voice Analytics',
      description: 'Analyze voice patterns and emotions for insights and optimization',
      icon: Headphones,
      features: ['Emotion Detection', 'Voice Quality Analysis', 'Sentiment Analysis', 'Performance Metrics'],
      benefits: ['Emotional insights', 'Quality optimization', 'Performance tracking']
    }
  ];

  return (
    <>
      <SEOOptimizer
        title="AI Voice Synthesis - Zion Tech Group"
        description="Advanced AI voice synthesis solutions including voice cloning, text-to-speech, and voice analytics. Create natural-sounding voices for any application."
        keywords={['AI voice synthesis', 'voice cloning', 'text-to-speech', 'voice analytics', 'speech generation']}
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
            <p className="text-xl text-cyan-400 mb-8 font-medium">
              Create Natural-Sounding Voices with AI
            </p>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-8">
              Our AI voice synthesis solutions create incredibly realistic and natural-sounding voices 
              for any application, from content creation to accessibility solutions.
            </p>
          </section>

          {/* Voice Services Grid */}
          <section className="mb-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {voiceServices.map((service, index) => (
                <article key={index} className="quantum-card p-8 energy-pulse hover:scale-105 transition-all duration-300">
                  <div className="w-20 h-20 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center mb-6 mx-auto">
                    <service.icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 text-center neon-text">{service.title}</h3>
                  <p className="text-gray-300 mb-6 text-center text-lg leading-relaxed">
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
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-pink-400 mb-3">Business Benefits:</h4>
                    <ul className="space-y-2">
                      {service.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center text-gray-300">
                          <div className="w-2 h-2 bg-pink-400 rounded-full mr-3 flex-shrink-0"></div>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* Contact CTA */}
          <section className="text-center">
            <div className="cyber-card p-8 max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-4 neon-text">Ready to Give Voice to Your Content?</h2>
              <p className="text-lg text-gray-300 mb-8">
                Let our voice synthesis experts help you create natural, engaging voices that bring your content to life.
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