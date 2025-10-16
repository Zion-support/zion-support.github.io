'use client';
import React, { useState } from 'react';
import SEOHead from '../components/SEOHead';
import { 
  SpeakerWaveIcon, 
  SparklesIcon, 
  CheckCircleIcon, 
  ArrowRightIcon,
  CpuChipIcon,
  ClockIcon,
  ShieldCheckIcon,
  MicrophoneIcon,
  MusicalNoteIcon,
  PlayIcon,
  PauseIcon,
  StopIcon
} from '@heroicons/react/24/outline';

const AIAudioProcessorPage: React.FC = () => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [audioFile, setAudioFile] = useState<File | null>(null);
  const [processedAudio, setProcessedAudio] = useState<string>('');
  const [processingType, setProcessingType] = useState('enhance');

  const features = [
    {
      icon: CpuChipIcon,
      title: 'AI Audio Enhancement',
      description: 'Automatically enhance audio quality, remove noise, and improve clarity using advanced AI',
      price: 'Included'
    },
    {
      icon: MicrophoneIcon,
      title: 'Voice Processing',
      description: 'Real-time voice enhancement, noise reduction, and speech optimization',
      price: 'Included'
    },
    {
      icon: MusicalNoteIcon,
      title: 'Music Production',
      description: 'AI-powered music generation, mixing, mastering, and sound design',
      price: 'Included'
    },
    {
      icon: ClockIcon,
      title: 'Real-time Processing',
      description: 'Process audio in real-time with minimal latency for live applications',
      price: 'Included'
    }
  ];

  const pricingPlans = [
    {
      name: 'Creator',
      price: '$29',
      period: '/month',
      description: 'Perfect for content creators',
      features: [
        '10 hours audio processing/month',
        'Basic AI enhancement',
        'Noise reduction',
        'MP3/WAV export',
        'Email support',
        'Watermark included'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$79',
      period: '/month',
      description: 'Ideal for professionals',
      features: [
        '50 hours audio processing/month',
        'Advanced AI enhancement',
        'Voice optimization',
        'Music production tools',
        'Priority support',
        'No watermark',
        'API access',
        'Batch processing'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$199',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Unlimited audio processing',
        'Custom AI models',
        'Real-time processing',
        'Team collaboration',
        '24/7 dedicated support',
        'White-label solution',
        'Custom integrations',
        'SLA guarantee'
      ],
      popular: false
    }
  ];

  const processingTypes = [
    {
      id: 'enhance',
      name: 'Audio Enhancement',
      description: 'Improve quality, remove noise, enhance clarity',
      icon: SparklesIcon
    },
    {
      id: 'voice',
      name: 'Voice Processing',
      description: 'Optimize speech, reduce background noise',
      icon: MicrophoneIcon
    },
    {
      id: 'music',
      name: 'Music Production',
      description: 'Generate, mix, and master music tracks',
      icon: MusicalNoteIcon
    },
    {
      id: 'transcribe',
      name: 'Audio Transcription',
      description: 'Convert speech to text with high accuracy',
      icon: SpeakerWaveIcon
    }
  ];

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setAudioFile(file);
    }
  };

  const handleProcessing = async () => {
    if (!audioFile) return;
    
    setIsProcessing(true);
    // Simulate AI audio processing
    setTimeout(() => {
      setProcessedAudio('https://www.soundjay.com/misc/sounds/bell-ringing-05.wav');
      setIsProcessing(false);
    }, 3000);
  };

  return (
    <>
      <SEOHead 
        title="AI Audio Processor - Zion Tech Group"
        description="Advanced AI-powered audio processing platform. Enhance, generate, and optimize audio content with cutting-edge artificial intelligence technology."
        keywords="AI audio processor, audio enhancement, voice processing, music generation, audio AI, sound optimization"
      />
      
      <div className="min-h-screen bg-slate-900 text-white">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 lg:py-32">
          <div className="absolute inset-0 bg-gradient-to-br from-orange-900/30 via-slate-900 to-red-900/30"></div>
          <div className="absolute inset-0 cyber-grid"></div>
          
          {/* Animated Background Elements */}
          <div className="absolute top-20 left-10 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-red-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 mb-8">
                <SpeakerWaveIcon className="w-5 h-5 text-orange-400 mr-2" />
                <span className="text-orange-400 font-medium">AI Audio Processing</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6">
                <span className="animated-gradient-text">AI Audio Processor</span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
                Transform your audio content with our advanced AI-powered processing platform. 
                Enhance quality, generate music, optimize voice, and create professional audio content.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <button 
                  onClick={handleProcessing}
                  disabled={isProcessing || !audioFile}
                  className="cyber-button text-lg px-8 py-4 disabled:opacity-50"
                >
                  {isProcessing ? 'Processing...' : 'Process Audio Now'}
                </button>
                <button className="border-2 border-orange-400 text-orange-300 px-8 py-4 rounded-lg font-semibold hover:bg-orange-400 hover:text-white transition-all duration-300">
                  View Pricing
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Live Audio Processing Demo */}
        <section className="py-20 bg-slate-800/30">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                Live <span className="animated-gradient-text">Audio Processing</span> Demo
              </h2>
              <p className="text-xl text-gray-300">
                Experience AI audio processing in real-time
              </p>
            </div>
            
            <div className="holographic-card p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Input Section */}
                <div>
                  <div className="mb-6">
                    <label className="block text-sm font-medium mb-2">Upload Audio File</label>
                    <input
                      type="file"
                      accept="audio/*"
                      onChange={handleFileUpload}
                      className="w-full p-3 bg-slate-800 border border-slate-600 rounded-lg text-white file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-orange-500 file:text-white hover:file:bg-orange-600"
                    />
                  </div>
                  
                  <div className="mb-6">
                    <label className="block text-sm font-medium mb-2">Processing Type</label>
                    <div className="grid grid-cols-2 gap-2">
                      {processingTypes.map((type) => (
                        <button
                          key={type.id}
                          onClick={() => setProcessingType(type.id)}
                          className={`p-3 rounded-lg border transition-all duration-300 ${
                            processingType === type.id
                              ? 'border-orange-500 bg-orange-500/10 text-orange-300'
                              : 'border-slate-600 bg-slate-800 text-gray-300 hover:border-orange-400'
                          }`}
                        >
                          <type.icon className="w-5 h-5 mx-auto mb-1" />
                          <div className="text-xs font-medium">{type.name}</div>
                        </button>
                      ))}
                    </div>
                  </div>
                  
                  <button
                    onClick={handleProcessing}
                    disabled={isProcessing || !audioFile}
                    className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white py-3 rounded-lg font-semibold transition-all duration-300 disabled:opacity-50 flex items-center justify-center"
                  >
                    {isProcessing ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        Processing Audio...
                      </>
                    ) : (
                      <>
                        <SparklesIcon className="w-5 h-5 mr-2" />
                        Process Audio
                      </>
                    )}
                  </button>
                </div>
                
                {/* Output Section */}
                <div>
                  <label className="block text-sm font-medium mb-2">Processed Audio</label>
                  <div className="w-full h-64 bg-slate-800 border border-slate-600 rounded-lg flex items-center justify-center">
                    {processedAudio ? (
                      <div className="text-center">
                        <audio controls className="w-full mb-4">
                          <source src={processedAudio} type="audio/wav" />
                          Your browser does not support the audio element.
                        </audio>
                        <div className="text-green-400 text-sm">Audio processed successfully!</div>
                      </div>
                    ) : (
                      <div className="text-center text-gray-400">
                        <SpeakerWaveIcon className="w-16 h-16 mx-auto mb-4 opacity-50" />
                        <p>Processed audio will appear here</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                Powerful <span className="animated-gradient-text">Features</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Everything you need for professional audio processing with AI
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="holographic-card p-6 group hover:scale-105 transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white group-hover:text-orange-300 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 mb-4 group-hover:text-gray-300 transition-colors">
                    {feature.description}
                  </p>
                  <span className="text-orange-400 font-semibold">{feature.price}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                Simple <span className="animated-gradient-text">Pricing</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the perfect plan for your audio processing needs
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`holographic-card p-8 relative ${plan.popular ? 'ring-2 ring-orange-500' : ''}`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                    <div className="flex items-baseline justify-center mb-2">
                      <span className="text-4xl font-bold">{plan.price}</span>
                      <span className="text-gray-400 ml-1">{plan.period}</span>
                    </div>
                    <p className="text-gray-400">{plan.description}</p>
                  </div>
                  
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircleIcon className="w-5 h-5 text-orange-400 mr-3 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <button className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular 
                      ? 'bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white' 
                      : 'border-2 border-orange-400 text-orange-300 hover:bg-orange-400 hover:text-white'
                  }`}>
                    Get Started
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-orange-900/40 via-slate-900 to-red-900/40">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Ready to <span className="animated-gradient-text">Transform</span> Your Audio?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of creators who are already using AI to produce professional audio content.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="cyber-button text-lg px-8 py-4">
                Start Processing Audio
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

export default AIAudioProcessorPage;