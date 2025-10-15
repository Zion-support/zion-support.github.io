'use client';
import React, { useState } from 'react';
import SEOHead from '../components/SEOHead';
import { 
  MicrophoneIcon, 
  CheckCircleIcon, 
  ArrowRightIcon,
  SparklesIcon,
  CpuChipIcon,
  BoltIcon,
  ShieldCheckIcon,
  SpeakerWaveIcon,
  MusicalNoteIcon,
  ChatBubbleLeftRightIcon,
  ChartBarIcon,
  CogIcon,
  PlayIcon,
  PauseIcon,
  StopIcon
} from '@heroicons/react/24/outline';

const AIAudioProcessorPage: React.FC = () => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState('pro');

  const features = [
    {
      icon: MicrophoneIcon,
      title: 'AI Noise Reduction',
      description: 'Remove background noise, echo, and unwanted sounds with 99% accuracy',
      details: ['Real-time noise cancellation', 'Echo suppression', 'Wind noise removal', 'Background music isolation']
    },
    {
      icon: SpeakerWaveIcon,
      title: 'Audio Enhancement',
      description: 'Improve audio quality with AI-powered enhancement algorithms',
      details: ['Volume normalization', 'Dynamic range compression', 'EQ optimization', 'Spatial audio processing']
    },
    {
      icon: MusicalNoteIcon,
      title: 'Music Processing',
      description: 'Advanced music analysis and processing capabilities',
      details: ['BPM detection', 'Key signature analysis', 'Instrument separation', 'Harmony extraction']
    },
    {
      icon: ChatBubbleLeftRightIcon,
      title: 'Speech Recognition',
      description: 'Convert speech to text with 98% accuracy in 50+ languages',
      details: ['Real-time transcription', 'Speaker identification', 'Emotion detection', 'Sentiment analysis']
    },
    {
      icon: CpuChipIcon,
      title: 'AI Voice Cloning',
      description: 'Create realistic voice clones for text-to-speech applications',
      details: ['Voice synthesis', 'Emotion control', 'Accent modification', 'Voice aging/de-aging']
    },
    {
      icon: BoltIcon,
      title: 'Real-time Processing',
      description: 'Process audio in real-time with ultra-low latency',
      details: ['<50ms latency', 'Live streaming support', 'Batch processing', 'Cloud processing']
    }
  ];

  const pricingPlans = [
    {
      name: 'Creator',
      price: '$39',
      period: '/month',
      description: 'Perfect for content creators',
      features: [
        '10 hours audio processing/month',
        'Basic noise reduction',
        'Standard audio enhancement',
        '5 voice clones',
        'Email support',
        'Mobile app access'
      ],
      popular: false,
      cta: 'Start Free Trial'
    },
    {
      name: 'Professional',
      price: '$129',
      period: '/month',
      description: 'Ideal for professionals and studios',
      features: [
        '100 hours audio processing/month',
        'Advanced noise reduction',
        'Premium audio enhancement',
        'Unlimited voice clones',
        'Music processing tools',
        'Real-time processing',
        'Priority support',
        'API access',
        'Custom AI models'
      ],
      popular: true,
      cta: 'Start Free Trial'
    },
    {
      name: 'Enterprise',
      price: '$499',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Unlimited audio processing',
        'Enterprise-grade processing',
        'Custom enhancement algorithms',
        'Advanced voice cloning',
        '24/7 dedicated support',
        'On-premise deployment',
        'SLA guarantee',
        'White-label options',
        'Custom integrations'
      ],
      popular: false,
      cta: 'Contact Sales'
    }
  ];

  const useCases = [
    {
      title: 'Podcast Production',
      description: 'Create professional-quality podcasts with AI-powered audio enhancement.',
      icon: '🎙️',
      benefits: ['Professional sound quality', 'Faster editing process', 'Consistent audio levels']
    },
    {
      title: 'Music Production',
      description: 'Enhance music tracks with AI-powered mastering and mixing tools.',
      icon: '🎵',
      benefits: ['AI mastering', 'Instrument separation', 'Harmony analysis', 'BPM detection']
    },
    {
      title: 'Video Content',
      description: 'Improve audio quality in videos for YouTube, TikTok, and social media.',
      icon: '🎬',
      benefits: ['Background noise removal', 'Voice enhancement', 'Music optimization']
    },
    {
      title: 'Voice Overs',
      description: 'Create professional voice overs with AI voice cloning and enhancement.',
      icon: '🎭',
      benefits: ['Voice cloning', 'Emotion control', 'Multiple language support']
    },
    {
      title: 'Meeting Recording',
      description: 'Enhance meeting recordings for better clarity and comprehension.',
      icon: '📹',
      benefits: ['Noise reduction', 'Speaker separation', 'Transcription accuracy']
    },
    {
      title: 'Accessibility',
      description: 'Make audio content accessible with AI-powered enhancements.',
      icon: '♿',
      benefits: ['Volume normalization', 'Clear speech enhancement', 'Hearing aid optimization']
    }
  ];

  const testimonials = [
    {
      name: 'Jessica Martinez',
      role: 'Podcast Producer',
      company: 'AudioCast Studios',
      content: 'Zion AI Audio Processor has transformed our podcast production. We can now produce episodes 3x faster with studio-quality sound, even when recording remotely.',
      rating: 5
    },
    {
      name: 'Alex Chen',
      role: 'Music Producer',
      company: 'SoundWave Records',
      content: 'The AI mastering features are incredible. Our tracks sound professional without expensive studio equipment. The instrument separation tool is a game-changer.',
      rating: 5
    },
    {
      name: 'Sarah Johnson',
      role: 'Content Creator',
      company: 'Creative Media',
      content: 'Voice cloning has revolutionized our content creation. We can create multiple voice overs in different languages without hiring voice actors.',
      rating: 5
    }
  ];

  return (
    <>
      <SEOHead 
        title="AI Audio Processor - Zion Tech Group"
        description="Advanced AI-powered audio processing tool for noise reduction, enhancement, voice cloning, and real-time audio processing. Professional audio quality made simple."
        keywords="AI audio processor, noise reduction, audio enhancement, voice cloning, speech recognition, music processing, audio editing"
      />
      
      <div className="min-h-screen bg-slate-900 text-white">
        {/* Hero Section */}
        <section className="relative overflow-hidden min-h-screen flex items-center">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-slate-900 to-pink-900/30"></div>
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
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 rounded-lg blur opacity-30 animate-pulse"></div>
              </div>
              <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 mb-8 lg:mb-12 max-w-4xl mx-auto leading-relaxed px-4">
                Transform your audio with AI-powered processing. Noise reduction, enhancement, voice cloning, and real-time processing for professional results.
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
              
              {/* Audio Processing Demo */}
              <div className="max-w-2xl mx-auto mb-12">
                <div className="bg-slate-800/50 rounded-lg p-6 border border-slate-700">
                  <div className="text-center mb-4">
                    <h3 className="text-lg font-semibold text-white mb-2">Try AI Audio Processing</h3>
                    <p className="text-sm text-gray-400">Upload an audio file to see our AI in action</p>
                  </div>
                  <div className="space-y-4">
                    <div className="flex justify-center">
                      <button className="flex items-center px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded-lg transition-colors">
                        <MicrophoneIcon className="w-5 h-5 mr-2" />
                        Upload Audio File
                      </button>
                    </div>
                    <div className="bg-slate-700 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-gray-300">Original Audio</span>
                        <div className="flex space-x-2">
                          <button className="p-1 hover:bg-slate-600 rounded">
                            <PlayIcon className="w-4 h-4 text-green-400" />
                          </button>
                          <button className="p-1 hover:bg-slate-600 rounded">
                            <PauseIcon className="w-4 h-4 text-yellow-400" />
                          </button>
                          <button className="p-1 hover:bg-slate-600 rounded">
                            <StopIcon className="w-4 h-4 text-red-400" />
                          </button>
                        </div>
                      </div>
                      <div className="w-full bg-slate-600 rounded h-2 mb-2">
                        <div className="bg-purple-500 h-2 rounded" style={{width: '30%'}}></div>
                      </div>
                      <div className="text-xs text-gray-400">0:15 / 2:30</div>
                    </div>
                    <div className="bg-slate-700 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-gray-300">AI Enhanced Audio</span>
                        <span className="text-xs text-green-400">✓ Processed</span>
                      </div>
                      <div className="w-full bg-slate-600 rounded h-2 mb-2">
                        <div className="bg-green-500 h-2 rounded" style={{width: '30%'}}></div>
                      </div>
                      <div className="text-xs text-gray-400">0:15 / 2:30</div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Stats */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 max-w-4xl mx-auto px-4">
                <div className="text-center p-4 bg-slate-800/30 rounded-lg backdrop-blur-sm hover:bg-slate-700/30 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/10">
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-purple-400 mb-2">99%</div>
                  <div className="text-gray-300 text-sm lg:text-base">Noise Reduction</div>
                </div>
                <div className="text-center p-4 bg-slate-800/30 rounded-lg backdrop-blur-sm hover:bg-slate-700/30 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/10">
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-purple-400 mb-2">&lt;50ms</div>
                  <div className="text-gray-300 text-sm lg:text-base">Latency</div>
                </div>
                <div className="text-center p-4 bg-slate-800/30 rounded-lg backdrop-blur-sm hover:bg-slate-700/30 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/10">
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-purple-400 mb-2">50+</div>
                  <div className="text-gray-300 text-sm lg:text-base">Languages</div>
                </div>
                <div className="text-center p-4 bg-slate-800/30 rounded-lg backdrop-blur-sm hover:bg-slate-700/30 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/10">
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-purple-400 mb-2">Real-time</div>
                  <div className="text-gray-300 text-sm lg:text-base">Processing</div>
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
                Everything you need to create professional-quality audio with AI assistance.
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
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 mb-4 group-hover:text-gray-300 transition-colors">
                    {feature.description}
                  </p>
                  <ul className="space-y-2">
                    {feature.details.map((detail, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-300">
                        <CheckCircleIcon className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
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
                Perfect for <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Every Creator</span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
                See how creators and professionals use our AI audio processor to enhance their content.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {useCases.map((useCase, index) => (
                <div key={index} className="group holographic-card p-6 hover:scale-105 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/20">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">{useCase.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">
                    {useCase.title}
                  </h3>
                  <p className="text-gray-400 mb-4 group-hover:text-gray-300 transition-colors">
                    {useCase.description}
                  </p>
                  <ul className="space-y-2">
                    {useCase.benefits.map((benefit, idx) => (
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

        {/* Pricing Section */}
        <section className="py-16 sm:py-20 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
                Simple <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Pricing</span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
                Choose the plan that fits your audio processing needs. All plans include a 14-day free trial.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`relative group holographic-card p-6 hover:scale-105 transition-all duration-300 hover:shadow-xl ${
                  plan.popular ? 'hover:shadow-purple-500/30 border-2 border-purple-500' : 'hover:shadow-purple-500/20'
                }`}>
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-400 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-purple-400 neon-text">{plan.price}</span>
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
                      ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700 shadow-lg shadow-purple-500/25' 
                      : 'border-2 border-purple-400 text-purple-300 hover:bg-purple-400 hover:text-white'
                  }`}>
                    {plan.cta}
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
                Loved by <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Creators</span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
                See what creators and professionals are saying about our AI audio processor.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="group holographic-card p-6 hover:scale-105 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/20">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <SparklesIcon key={i} className="w-5 h-5 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4 italic group-hover:text-white transition-colors">
                    "{testimonial.content}"
                  </p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold mr-3">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <h4 className="text-white font-semibold group-hover:text-purple-300 transition-colors">{testimonial.name}</h4>
                      <p className="text-sm text-gray-400">{testimonial.role} at {testimonial.company}</p>
                    </div>
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
              Ready to Transform Your Audio?
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 mb-6 sm:mb-8">
              Start your free trial today and experience professional audio processing with AI.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="relative group bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 text-sm sm:text-base shadow-lg shadow-purple-500/25">
                <span className="relative z-10 flex items-center">
                  Start Free Trial
                  <ArrowRightIcon className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
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