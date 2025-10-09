'use client';
import React from 'react';
import { Mic, Volume2, Headphones, Languages, CheckCircle, ArrowRight, Phone as PhoneIcon } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import PerformanceOptimizer from '../components/PerformanceOptimizer';
import SEOOptimizer from '../components/SEOOptimizer';
import AccessibilityEnhancer from '../components/AccessibilityEnhancer';
import Analytics from '../components/Analytics';
import SecurityEnhancer from '../components/SecurityEnhancer';

const AIVoiceSynthesisPage: React.FC = () => {
  const voiceServices = [
    {
      title: 'Voice Cloning',
      description: 'Create realistic voice clones for personalized audio content',
      features: ['High-quality Synthesis', 'Emotion Control', 'Custom Voice Training', 'Real-time Generation'],
      icon: Mic
    },
    {
      title: 'Text-to-Speech',
      description: 'Convert written text into natural-sounding speech',
      features: ['Multiple Languages', 'Voice Customization', 'SSML Support', 'Batch Processing'],
      icon: Volume2
    },
    {
      title: 'Voice Conversion',
      description: 'Transform one voice into another while preserving speech content',
      features: ['Real-time Conversion', 'Style Transfer', 'Gender Conversion', 'Accent Modification'],
      icon: Headphones
    },
    {
      title: 'Multi-language Support',
      description: 'Generate speech in 50+ languages with native pronunciation',
      features: ['Language Detection', 'Accent Adaptation', 'Cultural Context', 'Regional Dialects'],
      icon: Languages
    }
  ];

  return (
    <>
      <SEOOptimizer
        title="AI Voice Synthesis - Zion Tech Group"
        description="Advanced AI voice synthesis solutions including voice cloning, text-to-speech, and voice conversion. Create natural-sounding audio content with cutting-edge technology."
        keywords={['AI voice synthesis', 'voice cloning', 'text-to-speech', 'voice conversion', 'speech generation', 'audio AI']}
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
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900 cyber-grid neural-network-bg matrix-rain particle-field">
        <Navigation />
        
        <main className="container mx-auto px-4 py-16 pt-24" role="main">
          <section className="text-center mb-16 cyber-scan-line" aria-labelledby="hero-heading">
            <div className="max-w-6xl mx-auto">
              <h1 
                id="hero-heading" 
                className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 cyber-text-3d neon-pulse glitch"
                data-text="AI Voice Synthesis"
              >
                AI Voice Synthesis
              </h1>
              <p className="text-xl md:text-2xl text-cyan-400 mb-8 font-medium neon-pulse cyber-scan-effect">
                Advanced AI for Natural Speech Generation
              </p>
              <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
                Create natural-sounding speech with our advanced AI voice synthesis technology. 
                From voice cloning to text-to-speech, we help businesses communicate more effectively through AI-powered audio.
              </p>
            </div>
          </section>

          <section className="mb-16" aria-labelledby="voice-services-heading">
            <h2 id="voice-services-heading" className="text-3xl md:text-4xl font-bold text-white mb-4 text-center neon-text">
              Our Voice Synthesis Services
            </h2>
            <p className="text-lg text-gray-300 text-center mb-12 max-w-3xl mx-auto px-4">
              Comprehensive voice synthesis solutions for modern applications
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {voiceServices.map((service, index) => (
                <article key={index} className="quantum-card p-6 energy-pulse hover:scale-105 transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center mb-6 mx-auto">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 text-center neon-text">{service.title}</h3>
                  <p className="text-gray-300 mb-4 text-center">
                    {service.description}
                  </p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-indigo-400 mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-xs text-gray-300">
                          <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className="mb-16" aria-labelledby="contact-cta-heading">
            <div className="cyber-card p-8 text-center">
              <h2 id="contact-cta-heading" className="text-3xl font-bold text-white mb-4 neon-text">
                Ready to Give Voice to Your Content?
              </h2>
              <p className="text-gray-300 mb-6 max-w-3xl mx-auto">
                Let our voice synthesis experts help you create natural, engaging audio content 
                that connects with your audience and enhances your brand communication.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="/contact"
                  className="cyber-button px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300"
                >
                  Get Free Voice Consultation
                </a>
                <a
                  href="tel:+13024640950"
                  className="flex items-center gap-2 border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
                >
                  <PhoneIcon className="w-5 h-5" />
                  +1 302 464 0950
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