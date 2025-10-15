'use client';
import React from 'react';
import SEOHead from '../components/SEOHead';
import { 
  SpeakerWaveIcon, 
  CheckCircleIcon, 
  ArrowRightIcon,
  SparklesIcon,
  CpuChipIcon,
  BoltIcon,
  ShieldCheckIcon,
  MicrophoneIcon
} from '@heroicons/react/24/outline';

const AIAudioProcessorPage: React.FC = () => {
  const features = [
    'AI-powered noise reduction',
    'Voice enhancement',
    'Audio transcription',
    'Real-time processing',
    'Multiple audio formats',
    'Batch processing',
    'Voice cloning',
    'Audio synthesis',
    'Music generation',
    'Podcast optimization',
    'Meeting transcription',
    'Audio restoration'
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$39',
      period: '/month',
      description: 'Perfect for content creators',
      features: [
        '10 hours audio processing/month',
        'Basic noise reduction',
        'Standard transcription',
        'Email support',
        'Web interface'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$99',
      period: '/month',
      description: 'Ideal for professionals',
      features: [
        '50 hours audio processing/month',
        'Advanced AI processing',
        'High-accuracy transcription',
        'Priority support',
        'API access',
        'Voice enhancement',
        'Batch processing'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$299',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Unlimited processing',
        'Premium AI models',
        '24/7 phone support',
        'Custom integrations',
        'White-label options',
        'Advanced analytics',
        'Dedicated support'
      ],
      popular: false
    }
  ];

  const useCases = [
    {
      title: 'Podcast Production',
      description: 'Enhance audio quality, remove background noise, and optimize for different platforms.',
      icon: SpeakerWaveIcon
    },
    {
      title: 'Meeting Transcription',
      description: 'Convert meetings to text with speaker identification and action item extraction.',
      icon: MicrophoneIcon
    },
    {
      title: 'Music Production',
      description: 'AI-powered mixing, mastering, and creative audio effects for musicians.',
      icon: SparklesIcon
    },
    {
      title: 'Voice Cloning',
      description: 'Create realistic voice clones for dubbing, accessibility, and content creation.',
      icon: CpuChipIcon
    }
  ];

  const supportedFormats = [
    'MP3', 'WAV', 'FLAC', 'AAC', 'OGG', 'M4A', 'WMA', 'AIFF', 'PCM', 'DSD'
  ];

  return (
    <>
      <SEOHead 
        title="AI Audio Processor - Zion Tech Group"
        description="Advanced AI-powered audio processing with noise reduction, voice enhancement, transcription, and music generation. Support for all major audio formats. Start your free trial today."
        keywords="AI audio processor, audio enhancement, noise reduction, voice transcription, audio restoration, music generation, voice cloning, podcast optimization"
      />
      
      <div className="min-h-screen bg-slate-900 text-white">
        {/* Hero Section */}
        <section className="relative overflow-hidden min-h-screen flex items-center">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-slate-900 to-pink-900/30"></div>
          <div className="absolute inset-0 cyber-grid opacity-20"></div>
          
          {/* Floating Cyber Elements */}
          <div className="floating-cyber-elements">
            {[...Array(25)].map((_, i) => (
              <div key={i} className="cyber-element" style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 12}s`,
                animationDuration: `${12 + Math.random() * 8}s`
              }}></div>
            ))}
          </div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 w-full">
            <div className="text-center">
              <div className="relative inline-block mb-6">
                <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold holographic leading-tight neon-text-glow">
                  AI Audio Processor
                </h1>
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 rounded-lg blur opacity-30 animate-pulse"></div>
              </div>
              <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 mb-8 lg:mb-12 max-w-4xl mx-auto leading-relaxed px-4">
                Transform your audio with AI-powered processing. Enhance quality, reduce noise, transcribe speech, and create music with cutting-edge artificial intelligence.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 lg:mb-16 px-4">
                <button className="relative group cyber-button px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40">
                  <span className="relative z-10 flex items-center">
                    Start Free Trial
                    <ArrowRightIcon className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </span>
                </button>
                <button className="border-2 border-purple-400 text-purple-300 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-purple-400 hover:text-white transition-all duration-300 text-sm sm:text-base hover:shadow-lg hover:shadow-purple-400/25 holographic-border">
                  Try Demo
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 sm:py-20 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
                Advanced <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Audio AI</span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
                Our AI Audio Processor uses state-of-the-art machine learning to deliver professional-quality audio processing.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {features.map((feature, index) => (
                <div key={index} 
                  className="group cyber-card-advanced p-6 hover:scale-105 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/20"
                  style={{
                    animationDelay: `${index * 100}ms`
                  }}
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform neon-border-animated">
                      <CheckCircleIcon className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-gray-300 font-medium text-sm sm:text-base group-hover:text-white transition-colors">{feature}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Supported Formats Section */}
        <section className="py-16 sm:py-20 bg-slate-800/30 relative overflow-hidden">
          <div className="absolute inset-0 cyber-grid opacity-20"></div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
                <span className="bg-gradient-to-r from-pink-400 to-cyan-400 bg-clip-text text-transparent">All Major Formats</span> Supported
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
                Process any audio format with our comprehensive format support and conversion capabilities.
              </p>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
              {supportedFormats.map((format, index) => (
                <div key={index} 
                  className="cyber-card-advanced p-4 text-center hover:scale-105 transition-all duration-300 hover:shadow-xl hover:shadow-pink-500/20"
                  style={{
                    animationDelay: `${index * 50}ms`
                  }}
                >
                  <SpeakerWaveIcon className="w-6 h-6 text-pink-400 mx-auto mb-2" />
                  <span className="text-gray-300 text-sm font-medium">{format}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-16 sm:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
                Perfect for <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Every Use Case</span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
                From podcasters to musicians, our AI Audio Processor adapts to your specific needs.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {useCases.map((useCase, index) => (
                <div key={index} 
                  className="group cyber-card-advanced p-6 hover:scale-105 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/20"
                  style={{
                    animationDelay: `${index * 200}ms`
                  }}
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform neon-border-animated">
                    <useCase.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                    {useCase.title}
                  </h3>
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                    {useCase.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-16 sm:py-20 bg-slate-800/30 relative overflow-hidden">
          <div className="absolute inset-0 cyber-grid opacity-20"></div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
                Simple <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Pricing</span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
                Choose the perfect plan for your audio processing needs. All plans include our core AI features.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div key={index} 
                  className={`group relative ${plan.popular ? 'cyber-card-advanced scale-105' : 'cyber-card-advanced'} p-8 hover:scale-105 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/20`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-semibold neon-text-glow">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-400 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-purple-400 neon-text-glow">{plan.price}</span>
                      <span className="text-gray-400 ml-1">{plan.period}</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <button className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular 
                      ? 'cyber-button bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700' 
                      : 'border-2 border-purple-400 text-purple-300 hover:bg-purple-400 hover:text-white'
                  }`}>
                    {plan.popular ? 'Start Free Trial' : 'Get Started'}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-16 sm:py-20 bg-gradient-to-r from-purple-900/40 via-slate-900 to-pink-900/40 overflow-hidden">
          <div className="absolute inset-0 cyber-grid opacity-20"></div>
          
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative z-10">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Transform Your Audio Today
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 mb-6 sm:mb-8">
              Start your free trial and experience the power of AI-powered audio processing. No credit card required.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="relative group bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 text-sm sm:text-base shadow-lg shadow-purple-500/25">
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