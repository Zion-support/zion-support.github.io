'use client';
import React, { useState } from 'react';
import SEOHead from '../components/SEOHead';
import { 
  SpeakerWaveIcon, 
  DocumentTextIcon, 
  CheckCircleIcon, 
  ClockIcon,
  ShieldCheckIcon,
  UserGroupIcon,
  ChartBarIcon,
  CogIcon,
  ArrowRightIcon,
  StarIcon,
  SparklesIcon,
  SpeakerWaveIcon as SpeakerWaveIconSolid,
  BeakerIcon,
  EyeIcon,
  MapIcon,
  CurrencyDollarIcon,
  MicrophoneIcon
} from '@heroicons/react/24/outline';

const ZionAIAudioProcessorPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const features = [
    {
      icon: SpeakerWaveIcon,
      title: 'AI Audio Enhancement',
      description: 'Advanced AI-powered audio enhancement with noise reduction, clarity improvement, and quality optimization.',
      stats: '2M+ audio files processed'
    },
    {
      icon: MicrophoneIcon,
      title: 'Voice Synthesis',
      description: 'High-quality AI voice synthesis with 50+ voice options and natural speech patterns.',
      stats: '500,000+ voice samples generated'
    },
    {
      icon: DocumentTextIcon,
      title: 'Speech-to-Text',
      description: 'Accurate speech-to-text conversion with 99.5% accuracy in multiple languages.',
      stats: '1M+ hours transcribed'
    },
    {
      icon: UserGroupIcon,
      title: 'Podcast Production',
      description: 'Complete podcast production suite with automated editing, mixing, and publishing tools.',
      stats: '100,000+ podcasts created'
    },
    {
      icon: ChartBarIcon,
      title: 'Audio Analytics',
      description: 'Advanced audio analysis with frequency analysis, emotion detection, and quality metrics.',
      stats: 'Real-time processing'
    },
    {
      icon: CogIcon,
      title: 'Batch Processing',
      description: 'Automated batch processing for large audio files with cloud-based processing power.',
      stats: '10,000+ files processed daily'
    }
  ];

  const pricingPlans = [
    {
      name: 'Creator',
      price: '$49',
      period: '/month',
      description: 'Perfect for individual creators and podcasters',
      features: [
        'Up to 10 hours audio processing/month',
        'Basic voice synthesis',
        'Standard audio enhancement',
        'Personal projects only',
        'Email support',
        'Basic export formats'
      ],
      popular: false
    },
    {
      name: 'Studio Pro',
      price: '$199',
      period: '/month',
      description: 'Ideal for audio studios and content creators',
      features: [
        'Unlimited audio processing',
        'Advanced voice synthesis',
        'High-quality enhancement',
        'Team collaboration (up to 5 users)',
        'Priority support',
        'All export formats',
        'API access',
        'Commercial license'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$799',
      period: '/month',
      description: 'For large media companies and broadcasters',
      features: [
        'Everything in Studio Pro',
        'Unlimited team members',
        'Custom AI model training',
        'Dedicated account manager',
        '24/7 phone support',
        'White-label options',
        'Custom integrations',
        'On-premise deployment',
        'SLA guarantee'
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Williams',
      title: 'Podcast Producer',
      company: 'Audio Creative Studio',
      content: 'Zion AI Audio Processor has transformed our podcast production. The voice enhancement quality is incredible.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      title: 'Music Producer',
      company: 'SoundWave Records',
      content: 'The AI-powered mixing and mastering features have saved us countless hours while improving audio quality.',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      title: 'Content Creator',
      company: 'Digital Media Group',
      content: 'The speech-to-text accuracy is outstanding. It has revolutionized our content creation workflow.',
      rating: 5
    }
  ];

  return (
    <>
      <SEOHead 
        title="Zion AI Audio Processor - AI-Powered Audio Enhancement & Voice Synthesis | Zion Tech Group"
        description="Transform audio with AI-powered enhancement, voice synthesis, and speech-to-text. 99.5% accuracy, 2M+ files processed."
        keywords="AI audio processor, voice synthesis, speech-to-text, audio enhancement, podcast production, voice generation, audio AI"
      />
      
      <div className="min-h-screen bg-slate-900 text-white">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 lg:py-32">
          <div className="absolute inset-0 bg-gradient-to-br from-pink-900/30 via-slate-900 to-rose-900/30"></div>
          <div className="absolute inset-0 cyber-grid-enhanced opacity-20"></div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-pink-500/10 border border-pink-500/20 mb-6">
                <SpeakerWaveIconSolid className="w-5 h-5 text-pink-400 mr-2" />
                <span className="text-pink-400 font-medium">AI Audio Technology</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-pink-400 to-rose-400 bg-clip-text text-transparent">
                  Zion AI Audio Processor
                </span>
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Transform audio with AI-powered enhancement, voice synthesis, and speech-to-text conversion. 
                Achieve 99.5% accuracy in speech recognition and create professional-quality audio content.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <button className="bg-gradient-to-r from-pink-600 to-rose-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-pink-700 hover:to-rose-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-pink-500/25">
                  Start Free Trial
                </button>
                <button className="border-2 border-pink-400 text-pink-300 px-8 py-4 rounded-lg font-semibold hover:bg-pink-400 hover:text-white transition-all duration-300">
                  Schedule Demo
                </button>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                <div className="text-center">
                  <div className="text-3xl font-bold text-pink-400 mb-2">99.5%</div>
                  <div className="text-gray-300 text-sm">Speech Accuracy</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-pink-400 mb-2">2M+</div>
                  <div className="text-gray-300 text-sm">Audio Files Processed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-pink-400 mb-2">1M+</div>
                  <div className="text-gray-300 text-sm">Hours Transcribed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-pink-400 mb-2">50+</div>
                  <div className="text-gray-300 text-sm">Voice Options</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Advanced AI Audio Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive audio processing technology solutions designed to enhance your audio content.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-pink-500 transition-all duration-300 hover:transform hover:scale-105 group">
                  <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-rose-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-pink-300 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 mb-4">
                    {feature.description}
                  </p>
                  <div className="text-sm text-pink-400 font-medium">
                    {feature.stats}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Flexible Pricing Plans
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the perfect plan for your audio processing needs. All plans include our core AI features.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`relative bg-slate-800/50 p-8 rounded-xl border transition-all duration-300 hover:transform hover:scale-105 ${
                  plan.popular 
                    ? 'border-pink-500 shadow-lg shadow-pink-500/25' 
                    : 'border-slate-700 hover:border-pink-400'
                }`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-pink-500 to-rose-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                    <p className="text-gray-400 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-pink-400">{plan.price}</span>
                      <span className="text-gray-400 ml-1">{plan.period}</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <button className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-pink-600 to-rose-600 text-white hover:from-pink-700 hover:to-rose-700'
                      : 'border-2 border-pink-400 text-pink-300 hover:bg-pink-400 hover:text-white'
                  }`}>
                    Get Started
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Trusted by Audio Professionals
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See what audio professionals are saying about Zion AI Audio Processor.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <StarIcon key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-sm text-gray-400">{testimonial.title}, {testimonial.company}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-pink-900/40 via-slate-900 to-rose-900/40">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Ready to Transform Your Audio?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of audio professionals who trust Zion AI Audio Processor for their content creation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-pink-600 to-rose-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-pink-700 hover:to-rose-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-pink-500/25">
                Start Free Trial
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 rounded-lg font-semibold transition-all duration-300">
                Contact Sales
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ZionAIAudioProcessorPage;