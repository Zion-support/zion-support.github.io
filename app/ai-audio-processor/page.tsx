'use client';
import React from 'react';
import SEOHead from '../components/SEOHead';
import { 
  MicrophoneIcon, 
  CheckCircleIcon, 
  ArrowRightIcon,
  CpuChipIcon,
  ShieldCheckIcon,
  DocumentTextIcon,
  SpeakerWaveIcon,
  MusicalNoteIcon
} from '@heroicons/react/24/outline';

const AIAudioProcessorPage: React.FC = () => {
  const features = [
    {
      icon: MicrophoneIcon,
      title: 'Voice Enhancement',
      description: 'Automatically improve audio quality with AI-powered noise reduction and clarity enhancement.',
      benefits: ['Background noise removal', 'Voice clarity enhancement', 'Echo cancellation']
    },
    {
      icon: SpeakerWaveIcon,
      title: 'Audio Transcription',
      description: 'Convert speech to text with 99% accuracy in 50+ languages and dialects.',
      benefits: ['Real-time transcription', 'Speaker identification', 'Punctuation insertion']
    },
    {
      icon: MusicalNoteIcon,
      title: 'Music Generation',
      description: 'Create original music tracks and sound effects using advanced AI algorithms.',
      benefits: ['Genre-specific generation', 'Custom tempo and mood', 'Royalty-free output']
    },
    {
      icon: CpuChipIcon,
      title: 'Smart Editing',
      description: 'Automated audio editing with AI-powered cut detection and seamless transitions.',
      benefits: ['Auto-editing', 'Smart cuts', 'Fade in/out detection']
    },
    {
      icon: DocumentTextIcon,
      title: 'Podcast Production',
      description: 'Complete podcast production pipeline from recording to publishing.',
      benefits: ['Multi-track mixing', 'Intro/outro generation', 'Show notes creation']
    },
    {
      icon: ShieldCheckIcon,
      title: 'Copyright Protection',
      description: 'Ensure your audio content is original and copyright-compliant.',
      benefits: ['Copyright detection', 'Originality verification', 'Legal compliance']
    }
  ];

  const pricingPlans = [
    {
      name: 'Creator',
      price: '$29',
      period: '/month',
      description: 'Perfect for content creators and podcasters',
      features: [
        '10 hours of processing per month',
        'Basic voice enhancement',
        'Audio transcription',
        '5 music tracks per month',
        'Standard quality output',
        'Email support'
      ],
      cta: 'Start Free Trial',
      popular: false
    },
    {
      name: 'Professional',
      price: '$79',
      period: '/month',
      description: 'Ideal for professionals and businesses',
      features: [
        '50 hours of processing per month',
        'Advanced voice enhancement',
        'Real-time transcription',
        'Unlimited music generation',
        'High-quality output',
        'API access',
        'Priority support',
        'Commercial rights'
      ],
      cta: 'Start Free Trial',
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$199',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Unlimited processing',
        'Premium voice enhancement',
        'Custom AI models',
        'White-label solution',
        'Lossless quality output',
        '24/7 dedicated support',
        'On-premise deployment',
        'SLA guarantee',
        'Custom integrations'
      ],
      cta: 'Contact Sales',
      popular: false
    }
  ];

  const useCases = [
    {
      title: 'Podcast Production',
      description: 'Create professional podcasts with AI-enhanced audio and automated editing',
      icon: MicrophoneIcon,
      benefit: '90% time savings'
    },
    {
      title: 'Content Creation',
      description: 'Generate high-quality audio content for videos and presentations',
      icon: SpeakerWaveIcon,
      benefit: 'Professional quality'
    },
    {
      title: 'Music Production',
      description: 'Create original music tracks and sound effects for any project',
      icon: MusicalNoteIcon,
      benefit: 'Unlimited creativity'
    }
  ];

  const audioFormats = [
    'MP3', 'WAV', 'FLAC', 'AAC', 'OGG', 'M4A', 'WMA', 'AIFF', 'ALAC', 'OPUS'
  ];

  return (
    <>
      <SEOHead 
        title="AI Audio Processor - Professional Audio Enhancement & Generation | Zion Tech Group"
        description="Enhance audio quality, transcribe speech, and generate music with our AI audio processor. Professional-grade tools for podcasters, creators, and businesses. Start free trial today!"
        keywords="AI audio processor, audio enhancement, speech transcription, music generation, podcast production, audio editing, voice enhancement, sound processing"
      />
      
      <div className="min-h-screen bg-slate-900 text-white">
        {/* Hero Section */}
        <section className="relative overflow-hidden min-h-screen flex items-center">
          <div className="absolute inset-0 bg-gradient-to-br from-orange-900/30 via-slate-900 to-red-900/30"></div>
          <div className="absolute inset-0 cyber-grid opacity-20"></div>
          
          {/* Floating Particles */}
          <div className="floating-particles">
            {[...Array(25)].map((_, i) => (
              <div key={i} className="particle" style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 15}s`,
                animationDuration: `${15 + Math.random() * 10}s`
              }}></div>
            ))}
          </div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 w-full">
            <div className="text-center">
              <div className="relative inline-block mb-6">
                <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold holographic leading-tight neon-text">
                  AI Audio Processor
                </h1>
                <div className="absolute -inset-1 bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 rounded-lg blur opacity-30 animate-pulse"></div>
              </div>
              <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 mb-8 lg:mb-12 max-w-4xl mx-auto leading-relaxed px-4">
                Transform your audio with AI-powered enhancement, transcription, and music generation. Professional-grade tools for creators and businesses.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 lg:mb-16 px-4">
                <button className="relative group cyber-button px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40">
                  <span className="relative z-10 flex items-center">
                    Start Free Trial
                    <ArrowRightIcon className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </span>
                </button>
                <button className="border-2 border-orange-400 text-orange-300 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-orange-400 hover:text-white transition-all duration-300 text-sm sm:text-base hover:shadow-lg hover:shadow-orange-400/25 neon-border-animated">
                  Try Live Demo
                </button>
              </div>
              
              {/* Stats */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 max-w-4xl mx-auto px-4">
                <div className="text-center p-4 bg-slate-800/30 rounded-lg backdrop-blur-sm hover:bg-slate-700/30 transition-all duration-300 hover:scale-105">
                  <div className="text-2xl sm:text-3xl font-bold text-orange-400 mb-2">99%</div>
                  <div className="text-gray-300 text-sm">Accuracy</div>
                </div>
                <div className="text-center p-4 bg-slate-800/30 rounded-lg backdrop-blur-sm hover:bg-slate-700/30 transition-all duration-300 hover:scale-105">
                  <div className="text-2xl sm:text-3xl font-bold text-red-400 mb-2">50+</div>
                  <div className="text-gray-300 text-sm">Languages</div>
                </div>
                <div className="text-center p-4 bg-slate-800/30 rounded-lg backdrop-blur-sm hover:bg-slate-700/30 transition-all duration-300 hover:scale-105">
                  <div className="text-2xl sm:text-3xl font-bold text-pink-400 mb-2">10</div>
                  <div className="text-gray-300 text-sm">Formats</div>
                </div>
                <div className="text-center p-4 bg-slate-800/30 rounded-lg backdrop-blur-sm hover:bg-slate-700/30 transition-all duration-300 hover:scale-105">
                  <div className="text-2xl sm:text-3xl font-bold text-cyan-400 mb-2">90%</div>
                  <div className="text-gray-300 text-sm">Time Saved</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 sm:py-20 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
                Powerful <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">Audio Features</span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
                Everything you need to create, enhance, and process professional audio content with AI.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="group holographic-card p-6 hover:scale-105 transition-all duration-300 hover:shadow-xl hover:shadow-orange-500/20">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform neon-border-animated">
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-sm text-orange-400 font-medium neon-text">AI Powered</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-orange-300 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 mb-4 text-sm">
                    {feature.description}
                  </p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-300">
                        <CheckCircleIcon className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Supported Formats Section */}
        <section className="py-16 sm:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
                <span className="bg-gradient-to-r from-red-400 to-pink-400 bg-clip-text text-transparent">10+ Audio Formats</span> Supported
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
                Work with all major audio formats for maximum compatibility and flexibility.
              </p>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
              {audioFormats.map((format, index) => (
                <div key={index} className="text-center p-3 bg-slate-800/30 rounded-lg hover:bg-slate-700/30 transition-all duration-300 hover:scale-105 group">
                  <span className="text-gray-300 group-hover:text-white transition-colors text-sm font-medium">
                    {format}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-16 sm:py-20 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
                Perfect For <span className="bg-gradient-to-r from-pink-400 to-cyan-400 bg-clip-text text-transparent">Every Creator</span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
                From podcasters to musicians, our AI audio processor adapts to your creative needs.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {useCases.map((useCase, index) => (
                <div key={index} className="text-center group">
                  <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform neon-border-animated">
                    <useCase.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-pink-300 transition-colors">
                    {useCase.title}
                  </h3>
                  <p className="text-gray-400 mb-4">
                    {useCase.description}
                  </p>
                  <div className="text-lg font-semibold text-cyan-400 neon-text">
                    {useCase.benefit}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-16 sm:py-20 relative overflow-hidden">
          <div className="absolute inset-0 cyber-grid opacity-20"></div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
                Simple <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Pricing</span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
                Choose the plan that fits your audio processing needs. All plans include a 14-day free trial.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`group holographic-card p-8 hover:scale-105 transition-all duration-300 hover:shadow-xl ${
                  plan.popular ? 'ring-2 ring-orange-500 shadow-orange-500/20' : ''
                }`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-1 rounded-full text-sm font-semibold neon-glow">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-orange-300 transition-colors">
                      {plan.name}
                    </h3>
                    <p className="text-gray-400 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-orange-400 neon-text">{plan.price}</span>
                      <span className="text-gray-400 ml-1">{plan.period}</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-300">
                        <CheckCircleIcon className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <button className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular 
                      ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white hover:from-orange-600 hover:to-red-600 shadow-lg shadow-orange-500/25' 
                      : 'cyber-button'
                  }`}>
                    {plan.cta}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-16 sm:py-20 bg-gradient-to-r from-orange-900/40 via-slate-900 to-red-900/40 overflow-hidden">
          <div className="absolute top-10 left-10 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-red-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative z-10">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
              Transform Your Audio Today
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 mb-6 sm:mb-8">
              Join thousands of creators who are already using AI to produce professional audio content.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="relative group bg-gradient-to-r from-orange-600 to-red-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:from-orange-700 hover:to-red-700 transition-all duration-300 transform hover:scale-105 text-sm sm:text-base shadow-lg shadow-orange-500/25">
                <span className="relative z-10 flex items-center">
                  Start Free Trial
                  <ArrowRightIcon className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-slate-900 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold transition-all duration-300 text-sm sm:text-base hover:shadow-lg hover:shadow-white/25">
                Contact Sales
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AIAudioProcessorPage;