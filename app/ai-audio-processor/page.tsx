'use client';
import React, { useState } from 'react';
import SEOHead from '../components/SEOHead';
import { 
  MusicalNoteIcon, 
  CheckCircleIcon, 
  ArrowRightIcon,
  MicrophoneIcon,
  SpeakerWaveIcon,
  AdjustmentsHorizontalIcon
} from '@heroicons/react/24/outline';

const AIAudioProcessorPage: React.FC = () => {
  const [audioFile, setAudioFile] = useState<File | null>(null);
  const [processedAudio, setProcessedAudio] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [processingType, setProcessingType] = useState('enhance');

  const features = [
    'AI-powered noise reduction and enhancement',
    'Real-time audio processing',
    'Voice isolation and background removal',
    'Audio quality enhancement',
    'Automatic transcription and subtitles',
    'Music generation and composition',
    'Voice cloning and synthesis',
    'Audio format conversion',
    'Batch processing capabilities',
    'Professional audio mastering'
  ];

  const processingTypes = [
    { id: 'enhance', name: 'Audio Enhancement', description: 'Improve clarity and quality' },
    { id: 'noise', name: 'Noise Reduction', description: 'Remove background noise' },
    { id: 'voice', name: 'Voice Isolation', description: 'Extract voice from music' },
    { id: 'transcribe', name: 'Transcription', description: 'Convert speech to text' },
    { id: 'music', name: 'Music Generation', description: 'Create original music' },
    { id: 'master', name: 'Audio Mastering', description: 'Professional mastering' }
  ];

  const pricingPlans = [
    {
      name: 'Basic',
      price: '$29',
      period: '/month',
      description: 'For individual creators',
      features: [
        '5 hours of processing/month',
        'Basic enhancement tools',
        'Standard quality output',
        'Email support',
        'MP3/WAV export'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$99',
      period: '/month',
      description: 'For professional audio work',
      features: [
        '20 hours of processing/month',
        'All processing tools',
        'High-quality output',
        'Priority support',
        'API access',
        'Batch processing',
        'Custom presets'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$299',
      period: '/month',
      description: 'For studios and agencies',
      features: [
        'Unlimited processing',
        'All features included',
        '24/7 support',
        'Custom AI training',
        'On-premise deployment',
        'White-label options',
        'SLA guarantee'
      ],
      popular: false
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
    }, 2000);
  };

  return (
    <>
      <SEOHead 
        title="AI Audio Processor - Zion Tech Group"
        description="Advanced AI-powered audio processing service with noise reduction, enhancement, transcription, and music generation. Transform your audio with cutting-edge AI technology."
        keywords="AI audio processor, audio enhancement, noise reduction, voice isolation, audio transcription, music generation, audio mastering"
      />
      
      <div className="min-h-screen bg-slate-900 text-white">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 lg:py-32">
          <div className="absolute inset-0 bg-gradient-to-br from-orange-900/30 via-slate-900 to-red-900/30"></div>
          <div className="absolute inset-0 cyber-grid opacity-20"></div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl mb-8 neon-glow">
                <MusicalNoteIcon className="w-10 h-10 text-white" />
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 holographic">
                AI Audio Processor
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Transform your audio with our advanced AI-powered processing service. 
                Enhance quality, reduce noise, generate music, and transcribe speech with unprecedented accuracy.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={handleProcessing}
                  disabled={!audioFile || isProcessing}
                  className="cyber-button px-8 py-4 text-lg disabled:opacity-50"
                >
                  {isProcessing ? 'Processing...' : 'Process Audio'}
                </button>
                <a href="#pricing" className="border-2 border-orange-400 text-orange-300 px-8 py-4 rounded-lg font-semibold hover:bg-orange-400 hover:text-white transition-all duration-300">
                  View Pricing
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Interactive Demo Section */}
        <section className="py-16 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-gradient">
                  Process Your Audio
                </h2>
                <p className="text-gray-300 mb-8">
                  Upload your audio file and let our AI process it with advanced algorithms.
                </p>
                
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Upload Audio File:
                    </label>
                    <div className="border-2 border-dashed border-slate-600 rounded-lg p-6 text-center hover:border-orange-500 transition-colors">
                      <input
                        type="file"
                        accept="audio/*"
                        onChange={handleFileUpload}
                        className="hidden"
                        id="audio-upload"
                      />
                      <label htmlFor="audio-upload" className="cursor-pointer">
                        <MicrophoneIcon className="w-12 h-12 text-orange-400 mx-auto mb-4" />
                        <p className="text-gray-300 mb-2">Click to upload audio file</p>
                        <p className="text-sm text-gray-400">MP3, WAV, M4A supported</p>
                      </label>
                    </div>
                    {audioFile && (
                      <p className="mt-2 text-sm text-green-400">
                        ✓ {audioFile.name} selected
                      </p>
                    )}
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Processing Type:
                    </label>
                    <select
                      value={processingType}
                      onChange={(e) => setProcessingType(e.target.value)}
                      className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
                    >
                      {processingTypes.map((type) => (
                        <option key={type.id} value={type.id}>
                          {type.name} - {type.description}
                        </option>
                      ))}
                    </select>
                  </div>
                  
                  <button
                    onClick={handleProcessing}
                    disabled={!audioFile || isProcessing}
                    className="w-full cyber-button py-3 disabled:opacity-50"
                  >
                    {isProcessing ? (
                      <div className="flex items-center justify-center">
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        Processing Audio...
                      </div>
                    ) : (
                      'Process with AI'
                    )}
                  </button>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-4 text-gradient">Processed Audio:</h3>
                <div className="bg-slate-800 rounded-lg p-6 h-64 flex items-center justify-center">
                  {processedAudio ? (
                    <div className="text-center">
                      <SpeakerWaveIcon className="w-16 h-16 text-orange-400 mx-auto mb-4" />
                      <audio controls className="w-full">
                        <source src={processedAudio} type="audio/wav" />
                        Your browser does not support the audio element.
                      </audio>
                      <p className="text-sm text-gray-400 mt-2">Processed audio ready for download</p>
                    </div>
                  ) : (
                    <div className="text-center text-gray-400">
                      <MusicalNoteIcon className="w-16 h-16 mx-auto mb-4 opacity-50" />
                      <p>Your processed audio will appear here...</p>
                    </div>
                  )}
                </div>
                
                <div className="mt-6 grid grid-cols-3 gap-4">
                  <div className="text-center p-4 bg-slate-700 rounded-lg">
                    <AdjustmentsHorizontalIcon className="w-8 h-8 text-orange-400 mx-auto mb-2" />
                    <p className="text-sm text-gray-300">Enhancement</p>
                  </div>
                  <div className="text-center p-4 bg-slate-700 rounded-lg">
                    <MicrophoneIcon className="w-8 h-8 text-red-400 mx-auto mb-2" />
                    <p className="text-sm text-gray-300">Transcription</p>
                  </div>
                  <div className="text-center p-4 bg-slate-700 rounded-lg">
                    <MusicalNoteIcon className="w-8 h-8 text-pink-400 mx-auto mb-2" />
                    <p className="text-sm text-gray-300">Music Gen</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Advanced <span className="text-gradient">Features</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our AI Audio Processor comes equipped with cutting-edge features for professional audio work.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="holographic-card p-6 hover:scale-105 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <CheckCircleIcon className="w-6 h-6 text-orange-400 mr-3" />
                    <h3 className="text-lg font-semibold text-white">{feature}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-16 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Choose Your <span className="text-gradient">Plan</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Select the perfect plan for your audio processing needs. All plans include our core AI features.
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
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-orange-400">{plan.price}</span>
                      <span className="text-gray-400 ml-1">{plan.period}</span>
                    </div>
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
                      ? 'cyber-button' 
                      : 'border-2 border-gray-600 text-gray-300 hover:border-orange-500 hover:text-orange-300'
                  }`}>
                    Get Started
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-orange-900/40 via-slate-900 to-red-900/40">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-gradient">
              Ready to Transform Your Audio?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of creators who are already using our AI Audio Processor for professional results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="cyber-button px-8 py-4 text-lg">
                Start Free Trial
              </a>
              <a href="/demo" className="border-2 border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 rounded-lg font-semibold transition-all duration-300">
                Schedule Demo
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AIAudioProcessorPage;