'use client';
import React, { useState } from 'react';
import SEOHead from '../components/SEOHead';
import { 
  MicrophoneIcon, 
  CheckCircleIcon, 
  ArrowRightIcon,
  SpeakerWaveIcon,
  CpuChipIcon,
  DocumentTextIcon,
  MusicNoteIcon,
  ClockIcon,
  ShieldCheckIcon,
  WaveformIcon,
  AdjustmentsHorizontalIcon,
  PlayIcon
} from '@heroicons/react/24/outline';

const AIAudioProcessorPage: React.FC = () => {
  const [selectedPlan, setSelectedPlan] = useState('pro');

  const features = [
    {
      icon: MicrophoneIcon,
      title: 'AI Noise Reduction',
      description: 'Remove background noise, echo, and unwanted sounds with advanced AI algorithms for crystal-clear audio.',
      benefits: ['99% noise reduction', 'Real-time processing', 'Preserves voice quality']
    },
    {
      icon: SpeakerWaveIcon,
      title: 'Audio Enhancement',
      description: 'Automatically enhance audio quality with AI-powered equalization, compression, and dynamic range optimization.',
      benefits: ['Auto EQ adjustment', 'Dynamic range compression', 'Frequency optimization']
    },
    {
      icon: MusicNoteIcon,
      title: 'Music Separation',
      description: 'Separate vocals, instruments, and stems from mixed audio tracks using advanced AI source separation.',
      benefits: ['Vocal isolation', 'Instrument extraction', 'Stem separation']
    },
    {
      icon: DocumentTextIcon,
      title: 'Audio Transcription',
      description: 'Convert speech to text with 99.5% accuracy using advanced speech recognition and natural language processing.',
      benefits: ['99.5% accuracy', 'Multiple languages', 'Speaker identification']
    },
    {
      icon: WaveformIcon,
      title: 'Audio Analysis',
      description: 'Analyze audio characteristics, detect emotions, and extract metadata using AI-powered audio intelligence.',
      benefits: ['Emotion detection', 'Audio fingerprinting', 'Quality metrics']
    },
    {
      icon: AdjustmentsHorizontalIcon,
      title: 'Real-time Processing',
      description: 'Process audio in real-time with ultra-low latency for live streaming, podcasts, and video calls.',
      benefits: ['Ultra-low latency', 'Live processing', 'Stream optimization']
    }
  ];

  const pricingPlans = [
    {
      name: 'Creator',
      price: '$39',
      period: '/month',
      description: 'Perfect for content creators',
      features: [
        'Up to 10 hours/month processing',
        'Basic noise reduction',
        'Audio enhancement',
        'Email support',
        'MP3/WAV export'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$99',
      period: '/month',
      description: 'Ideal for professionals',
      features: [
        'Up to 50 hours/month processing',
        'Advanced AI features',
        'Music separation',
        'Priority support',
        'API access',
        'Batch processing',
        'High-quality exports'
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
        'All AI features',
        'Real-time processing',
        '24/7 dedicated support',
        'Custom integrations',
        'On-premise deployment',
        'Advanced analytics'
      ],
      popular: false
    }
  ];

  const useCases = [
    {
      title: 'Podcast Production',
      description: 'Clean up interviews, remove background noise, and enhance audio quality for professional podcasts.',
      icon: MicrophoneIcon
    },
    {
      title: 'Music Production',
      description: 'Separate instruments, enhance tracks, and create professional-quality music with AI assistance.',
      icon: MusicNoteIcon
    },
    {
      title: 'Video Content',
      description: 'Improve audio quality for YouTube videos, webinars, and online courses.',
      icon: PlayIcon
    },
    {
      title: 'Live Streaming',
      description: 'Real-time audio processing for Twitch, YouTube Live, and other streaming platforms.',
      icon: SpeakerWaveIcon
    },
    {
      title: 'Voice Recording',
      description: 'Professional voice-over recording with noise reduction and enhancement.',
      icon: DocumentTextIcon
    },
    {
      title: 'Conference Calls',
      description: 'Improve audio quality for remote meetings and virtual conferences.',
      icon: ClockIcon
    }
  ];

  const testimonials = [
    {
      name: 'Alex Thompson',
      role: 'Podcast Producer',
      content: 'Zion AI Audio Processor has transformed our podcast quality. The noise reduction is incredible and the audio enhancement features are game-changing.',
      rating: 5
    },
    {
      name: 'Sarah Martinez',
      role: 'Music Producer',
      content: 'The music separation feature is mind-blowing. I can extract individual instruments from mixed tracks with amazing quality.',
      rating: 5
    },
    {
      name: 'Mike Chen',
      role: 'Content Creator',
      content: 'Perfect for my YouTube videos. The real-time processing works flawlessly during live streams.',
      rating: 5
    }
  ];

  return (
    <>
      <SEOHead 
        title="AI Audio Processor - Zion Tech Group"
        description="Advanced AI-powered audio processing with noise reduction, enhancement, music separation, and real-time processing. Perfect for creators and professionals."
        keywords="AI audio processor, noise reduction, audio enhancement, music separation, audio transcription, real-time processing"
      />
      
      <div className="min-h-screen bg-slate-900 text-white">
        {/* Hero Section */}
        <section className="relative overflow-hidden min-h-screen flex items-center">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-slate-900 to-pink-900/30"></div>
          <div className="absolute inset-0 cyber-grid opacity-20"></div>
          
          {/* Floating Particles */}
          <div className="floating-particles">
            {[...Array(20)].map((_, i) => (
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
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 rounded-lg blur opacity-30 animate-pulse"></div>
              </div>
              <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 mb-8 lg:mb-12 max-w-4xl mx-auto leading-relaxed px-4">
                Transform your audio with AI-powered processing. Remove noise, enhance quality, separate music, and process audio in real-time with professional-grade results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 lg:mb-16 px-4">
                <button className="relative group cyber-button px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40">
                  <span className="relative z-10 flex items-center">
                    Start Free Trial
                    <ArrowRightIcon className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </span>
                </button>
                <button className="border-2 border-purple-400 text-purple-300 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-purple-400 hover:text-white transition-all duration-300 text-sm sm:text-base hover:shadow-lg hover:shadow-purple-400/25 neon-border-animated">
                  Try Live Demo
                </button>
              </div>
              
              {/* Stats */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 max-w-4xl mx-auto px-4">
                <div className="text-center p-4 bg-slate-800/30 rounded-lg backdrop-blur-sm hover:bg-slate-700/30 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/10">
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-purple-400 mb-2">99%</div>
                  <div className="text-gray-300 text-sm sm:text-base">Noise Reduction</div>
                </div>
                <div className="text-center p-4 bg-slate-800/30 rounded-lg backdrop-blur-sm hover:bg-slate-700/30 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/10">
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-purple-400 mb-2">Real-time</div>
                  <div className="text-gray-300 text-sm sm:text-base">Processing</div>
                </div>
                <div className="text-center p-4 bg-slate-800/30 rounded-lg backdrop-blur-sm hover:bg-slate-700/30 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/10">
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-purple-400 mb-2">50+</div>
                  <div className="text-gray-300 text-sm sm:text-base">Audio Formats</div>
                </div>
                <div className="text-center p-4 bg-slate-800/30 rounded-lg backdrop-blur-sm hover:bg-slate-700/30 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/10">
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-purple-400 mb-2">99.5%</div>
                  <div className="text-gray-300 text-sm sm:text-base">Transcription Accuracy</div>
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
                Advanced <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Audio Features</span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
                Experience professional-grade audio processing with cutting-edge AI technology.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="group holographic-card p-6 hover:scale-105 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/20">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform neon-border-animated">
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-sm text-purple-400 font-medium neon-text">AI Powered</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 mb-4 text-sm">
                    {feature.description}
                  </p>
                  <div className="space-y-2">
                    {feature.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-300">
                        <CheckCircleIcon className="w-4 h-4 text-green-400 mr-2" />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
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
                Perfect For <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Every Use Case</span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
                From content creators to music producers, our AI audio processor adapts to your needs.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {useCases.map((useCase, index) => (
                <div key={index} className="group holographic-card p-6 hover:scale-105 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/20">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform neon-border-animated">
                      <useCase.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white ml-4 group-hover:text-purple-300 transition-colors">
                      {useCase.title}
                    </h3>
                  </div>
                  <p className="text-gray-400 text-sm">
                    {useCase.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-16 sm:py-20 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
                Choose Your <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Plan</span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
                Flexible pricing options designed to meet your audio processing needs.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`relative group holographic-card p-6 hover:scale-105 transition-all duration-300 hover:shadow-xl ${
                  plan.popular ? 'hover:shadow-purple-500/20 border-2 border-purple-500' : 'hover:shadow-pink-500/20'
                }`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-400 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-purple-400">{plan.price}</span>
                      <span className="text-gray-400 ml-1">{plan.period}</span>
                    </div>
                  </div>
                  
                  <div className="space-y-3 mb-6">
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-300">
                        <CheckCircleIcon className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <button className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 ${
                    plan.popular 
                      ? 'cyber-button' 
                      : 'border-2 border-pink-400 text-pink-300 hover:bg-pink-400 hover:text-white'
                  }`}>
                    {plan.popular ? 'Start Free Trial' : 'Get Started'}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 sm:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
                What Creators <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Say</span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
                Join thousands of creators who have transformed their audio with our AI processor.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="holographic-card p-6 hover:scale-105 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/20">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-sm text-purple-400">{testimonial.role}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-16 sm:py-20 bg-gradient-to-r from-purple-900/40 via-slate-900 to-pink-900/40 overflow-hidden">
          <div className="absolute top-10 left-10 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative z-10">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Transform Your Audio Today
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 mb-6 sm:mb-8">
              Start your free trial and experience professional-grade AI audio processing.
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