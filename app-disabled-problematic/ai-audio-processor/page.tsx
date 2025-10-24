'use client';
import React, { useState } from 'react';
import SEOHead from '../components/SEOHead';
import { 
  MicrophoneIcon, 
  CheckCircleIcon, 
  StarIcon,
  ArrowRightIcon,
  SparklesIcon,
  SpeakerWaveIcon,
  MusicalNoteIcon,
  DocumentTextIcon,
  ClockIcon,
  ShieldCheckIcon,
  CpuChipIcon,
  PlayIcon
} from '@heroicons/react/24/outline';

const AIAudioProcessorPage: React.FC = () => {
  const [selectedFeature, setSelectedFeature] = useState('noise-reduction');

  const features = [
    {
      icon: MicrophoneIcon,
      title: 'Noise Reduction',
      description: 'Remove background noise, echo, and unwanted sounds from audio recordings using advanced AI algorithms.',
      benefits: ['Crystal clear audio', 'Background noise removal', 'Echo cancellation', 'Professional quality']
    },
    {
      icon: SpeakerWaveIcon,
      title: 'Audio Enhancement',
      description: 'Enhance audio quality by adjusting levels, equalization, and dynamic range compression.',
      benefits: ['Volume normalization', 'EQ optimization', 'Dynamic range control', 'Frequency balancing']
    },
    {
      icon: MusicalNoteIcon,
      title: 'Music Generation',
      description: 'Create original music tracks, beats, and sound effects using AI-powered composition.',
      benefits: ['Original compositions', 'Multiple genres', 'Custom melodies', 'Royalty-free music']
    },
    {
      icon: DocumentTextIcon,
      title: 'Speech-to-Text',
      description: 'Convert speech to text with high accuracy using advanced speech recognition technology.',
      benefits: ['High accuracy transcription', 'Multiple languages', 'Speaker identification', 'Timestamp generation']
    },
    {
      icon: CpuChipIcon,
      title: 'Voice Cloning',
      description: 'Clone voices and create synthetic speech that sounds natural and realistic.',
      benefits: ['Voice synthesis', 'Emotion control', 'Language adaptation', 'Custom voice training']
    },
    {
      icon: ClockIcon,
      title: 'Real-time Processing',
      description: 'Process audio in real-time for live streaming, calls, and presentations.',
      benefits: ['Live audio enhancement', 'Low latency processing', 'Stream optimization', 'Real-time effects']
    }
  ];

  const audioFormats = [
    { format: 'MP3', quality: 'High', size: 'Small', compatibility: 'Universal' },
    { format: 'WAV', quality: 'Lossless', size: 'Large', compatibility: 'Professional' },
    { format: 'FLAC', quality: 'Lossless', size: 'Medium', compatibility: 'Audiophile' },
    { format: 'AAC', quality: 'High', size: 'Small', compatibility: 'Apple' },
    { format: 'OGG', quality: 'High', size: 'Small', compatibility: 'Open Source' },
    { format: 'M4A', quality: 'High', size: 'Small', compatibility: 'Apple' }
  ];

  const pricingPlans = [
    {
      id: 'basic',
      name: 'Basic',
      price: 19,
      period: 'month',
      description: 'Perfect for individuals',
      features: [
        '5 hours processing/month',
        'MP3, WAV output',
        'Basic noise reduction',
        'Standard quality',
        'Email support',
        'Mobile app access',
        'Cloud storage (1GB)'
      ],
      popular: false
    },
    {
      id: 'pro',
      name: 'Professional',
      price: 49,
      period: 'month',
      description: 'Ideal for content creators',
      features: [
        '25 hours processing/month',
        'All audio formats',
        'Advanced AI processing',
        'High quality output',
        'Priority support',
        'API access',
        'Cloud storage (10GB)',
        'Batch processing',
        'Custom presets',
        'Real-time processing'
      ],
      popular: true
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      price: 129,
      period: 'month',
      description: 'For businesses and studios',
      features: [
        'Unlimited processing',
        'All formats + custom',
        'Premium AI models',
        'Studio quality',
        '24/7 support',
        'White-label options',
        'Unlimited storage',
        'Dedicated server',
        'Custom integrations',
        'SLA guarantee'
      ],
      popular: false
    }
  ];

  const useCases = [
    {
      title: 'Podcast Production',
      description: 'Enhance podcast audio quality and create professional-sounding episodes',
      icon: '🎙️',
      examples: ['Noise reduction', 'Voice enhancement', 'Intro/outro music', 'Ad insertion']
    },
    {
      title: 'Music Production',
      description: 'Create, mix, and master music tracks with AI-powered tools',
      icon: '🎵',
      examples: ['Beat generation', 'Melody creation', 'Mixing assistance', 'Mastering optimization']
    },
    {
      title: 'Video Content',
      description: 'Improve audio quality for video content and social media',
      icon: '🎬',
      examples: ['Voice-over enhancement', 'Background music', 'Sound effects', 'Audio sync']
    },
    {
      title: 'Call Centers',
      description: 'Enhance call quality and improve customer experience',
      icon: '📞',
      examples: ['Call recording enhancement', 'Noise filtering', 'Voice clarity', 'Quality monitoring']
    }
  ];

  const testimonials = [
    {
      name: 'Alex Thompson',
      role: 'Podcast Host',
      company: 'TechTalk Podcast',
      content: 'Zion AI Audio Processor has transformed our podcast quality. The noise reduction is incredible and our listeners love the crystal-clear audio.',
      rating: 5
    },
    {
      name: 'Maria Rodriguez',
      role: 'Music Producer',
      company: 'SoundWave Studios',
      content: 'The AI music generation features are mind-blowing. I can create original tracks in minutes that would normally take hours.',
      rating: 5
    },
    {
      name: 'James Wilson',
      role: 'Content Creator',
      company: 'YouTube Channel',
      content: 'As a YouTuber, audio quality is crucial. This tool has helped me achieve professional-grade audio without expensive equipment.',
      rating: 5
    }
  ];

  return (
    <>
      <SEOHead 
        title="AI Audio Processor - Zion Tech Group"
        description="Advanced AI-powered audio processing service. Features noise reduction, audio enhancement, music generation, speech-to-text, and voice cloning."
        keywords="AI audio processor, audio enhancement, noise reduction, music generation, speech to text, voice cloning, audio editing, sound processing"
        canonicalUrl="https://ziontechgroup.com/ai-audio-processor"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-orange-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 lg:py-32">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-600/20 to-red-600/20"></div>
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 mb-8">
                <SparklesIcon className="w-5 h-5 text-orange-400 mr-2" />
                <span className="text-orange-300 text-sm font-medium">AI-Powered Audio Processing</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6">
                AI Audio Processor
              </h1>
              <p className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Transform your audio with advanced AI processing. Enhance quality, reduce noise, 
                generate music, and create professional audio content effortlessly.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <button className="bg-gradient-to-r from-orange-600 to-red-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-orange-700 hover:to-red-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-orange-500/25">
                  Start Free Trial
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-slate-900 transition-all duration-300">
                  Try Live Demo
                </button>
              </div>
              
              <div className="flex items-center justify-center space-x-8 text-gray-300">
                <div className="flex items-center">
                  <CheckCircleIcon className="w-5 h-5 text-green-400 mr-2" />
                  <span>5 hours free</span>
                </div>
                <div className="flex items-center">
                  <CheckCircleIcon className="w-5 h-5 text-green-400 mr-2" />
                  <span>Studio quality</span>
                </div>
                <div className="flex items-center">
                  <CheckCircleIcon className="w-5 h-5 text-green-400 mr-2" />
                  <span>Real-time processing</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Audio Processing Demo */}
        <section className="py-20 bg-slate-800/50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                Experience AI Audio Processing
              </h2>
              <p className="text-xl text-gray-300">
                Upload your audio and see the magic happen
              </p>
            </div>
            
            <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Original Audio
                  </label>
                  <div className="w-full h-32 p-4 bg-slate-700 border border-slate-600 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <MicrophoneIcon className="w-12 h-12 text-gray-400 mx-auto mb-2" />
                      <p className="text-gray-400">Upload audio file</p>
                      <p className="text-sm text-gray-500">MP3, WAV, FLAC supported</p>
                    </div>
                  </div>
                  <button className="mt-4 w-full bg-slate-700 text-white py-2 px-4 rounded-lg hover:bg-slate-600 transition-colors">
                    Choose File
                  </button>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Processed Audio
                  </label>
                  <div className="w-full h-32 p-4 bg-slate-700 border border-slate-600 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <SpeakerWaveIcon className="w-12 h-12 text-orange-400 mx-auto mb-2" />
                      <p className="text-orange-400">AI Enhanced Audio</p>
                      <p className="text-sm text-gray-500">Ready to download</p>
                    </div>
                  </div>
                  <button className="mt-4 w-full bg-gradient-to-r from-orange-600 to-red-600 text-white py-2 px-4 rounded-lg hover:from-orange-700 hover:to-red-700 transition-colors">
                    Download
                  </button>
                </div>
              </div>
              
              <div className="mt-6 text-center">
                <button className="bg-gradient-to-r from-orange-600 to-red-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-orange-700 hover:to-red-700 transition-all duration-300">
                  Process Audio
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
                Powerful Audio Processing Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Everything you need to create professional audio content
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-slate-800/50 rounded-xl p-8 hover:bg-slate-700/50 transition-all duration-300 hover:scale-105 border border-slate-700">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center mb-6">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300 mb-6">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-400">
                        <CheckCircleIcon className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Supported Formats */}
        <section className="py-20 bg-slate-800/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
                Supported Audio Formats
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Process audio in all major formats with high quality output
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {audioFormats.map((format, index) => (
                <div key={index} className="bg-slate-800 rounded-lg p-6 border border-slate-700">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-white">{format.format}</h3>
                    <div className="text-2xl">🎵</div>
                  </div>
                  <div className="space-y-2 text-sm text-gray-300">
                    <div className="flex justify-between">
                      <span>Quality:</span>
                      <span className="text-orange-400">{format.quality}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Size:</span>
                      <span className="text-orange-400">{format.size}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Compatibility:</span>
                      <span className="text-orange-400">{format.compatibility}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
                Perfect for Every Audio Need
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                From podcast production to music creation, enhance your audio content
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {useCases.map((useCase, index) => (
                <div key={index} className="text-center">
                  <div className="text-6xl mb-4">{useCase.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-3">{useCase.title}</h3>
                  <p className="text-gray-300 mb-4">{useCase.description}</p>
                  <ul className="text-sm text-gray-400 space-y-1">
                    {useCase.examples.map((example, idx) => (
                      <li key={idx}>• {example}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 bg-slate-800/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
                Simple, Transparent Pricing
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the plan that fits your audio processing needs
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan) => (
                <div key={plan.id} className={`relative bg-slate-800 rounded-2xl p-8 ${
                  plan.popular ? 'ring-2 ring-orange-500 scale-105' : ''
                }`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-400 mb-4">{plan.description}</p>
                    <div className="text-4xl font-bold text-white mb-2">
                      ${plan.price}
                      <span className="text-lg text-gray-400">/{plan.period}</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-gray-300">
                        <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-orange-600 to-red-600 text-white hover:from-orange-700 hover:to-red-700'
                      : 'bg-slate-700 text-white hover:bg-slate-600'
                  }`}>
                    {plan.id === 'enterprise' ? 'Contact Sales' : 'Start Free Trial'}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
                Trusted by Audio Professionals
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See what our users have to say about their audio processing experience
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-slate-800/50 rounded-xl p-8 border border-slate-700">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <StarIcon key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-sm text-gray-400">{testimonial.role} at {testimonial.company}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-orange-600 to-red-600">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Transform Your Audio Today
            </h2>
            <p className="text-xl text-orange-100 mb-8">
              Join thousands of creators who are already producing professional audio with AI assistance
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-orange-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
                Start Free Trial
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-orange-600 transition-all duration-300">
                Schedule Demo
              </button>
            </div>
            <div className="mt-8 text-orange-100">
              <p>📞 <strong>Phone:</strong> +1 302 464 0950</p>
              <p>✉️ <strong>Email:</strong> kleber@ziontechgroup.com</p>
              <p>📍 <strong>Address:</strong> 364 E Main St STE 1008, Middletown DE 19709</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AIAudioProcessorPage;