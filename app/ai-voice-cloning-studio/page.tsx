import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  Mic, 
  Play, 
  Pause, 
  Download, 
  Upload, 
  Settings, 
  Volume2, 
  Zap, 
  CheckCircle, 
  Star, 
  Users, 
  Clock, 
  Globe, 
  Shield, 
  ArrowRight,
  Brain,
  Music,
  Video,
  FileText,
  Languages,
  Headphones,
  Radio,
  MicIcon,
  Waveform
} from 'lucide-react';

const AIVoiceCloningStudioPage: React.FC = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [selectedVoice, setSelectedVoice] = useState('professional-male');
  const [textInput, setTextInput] = useState('');
  const [generatedAudio, setGeneratedAudio] = useState<string | null>(null);

  const voiceOptions = [
    { id: 'professional-male', name: 'Professional Male', accent: 'American', age: '30-40' },
    { id: 'professional-female', name: 'Professional Female', accent: 'British', age: '25-35' },
    { id: 'warm-male', name: 'Warm Male', accent: 'Australian', age: '35-45' },
    { id: 'energetic-female', name: 'Energetic Female', accent: 'Canadian', age: '20-30' },
    { id: 'authoritative-male', name: 'Authoritative Male', accent: 'American', age: '40-50' },
    { id: 'friendly-female', name: 'Friendly Female', accent: 'Irish', age: '25-35' }
  ];

  const features = [
    {
      icon: Brain,
      title: 'AI Voice Synthesis',
      description: 'Advanced neural networks create natural-sounding voices with emotional range and intonation control'
    },
    {
      icon: Languages,
      title: 'Multi-Language Support',
      description: 'Generate voices in 50+ languages with native pronunciation and cultural nuances'
    },
    {
      icon: Volume2,
      title: 'Real-time Processing',
      description: 'Convert text to speech in under 3 seconds with high-quality audio output'
    },
    {
      icon: Shield,
      title: 'Voice Security',
      description: 'Enterprise-grade security with voice encryption and secure API endpoints'
    },
    {
      icon: Settings,
      title: 'Custom Voice Training',
      description: 'Train custom voices from your own recordings for brand-specific audio content'
    },
    {
      icon: Globe,
      title: 'Cloud Integration',
      description: 'Seamless integration with popular platforms and APIs for automated workflows'
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$29',
      period: '/month',
      description: 'Perfect for content creators and small businesses',
      features: [
        '10,000 characters/month',
        '5 voice options',
        'Standard quality (44.1kHz)',
        'Basic emotion control',
        'Email support',
        'Commercial license'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$79',
      period: '/month',
      description: 'Ideal for marketing agencies and growing companies',
      features: [
        '50,000 characters/month',
        '15 voice options',
        'High quality (48kHz)',
        'Advanced emotion control',
        'Custom voice training',
        'Priority support',
        'API access',
        'Commercial license'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$199',
      period: '/month',
      description: 'For large organizations with high-volume needs',
      features: [
        'Unlimited characters',
        'All voice options',
        'Premium quality (96kHz)',
        'Full emotion control',
        'Custom voice cloning',
        '24/7 dedicated support',
        'Advanced API',
        'White-label solution',
        'SLA guarantee'
      ],
      popular: false
    }
  ];

  const handleGenerateVoice = async () => {
    if (!textInput.trim()) return;
    
    setIsProcessing(true);
    // Simulate API call
    setTimeout(() => {
      setGeneratedAudio('generated-audio-url');
      setIsProcessing(false);
    }, 2000);
  };

  return (
    <>
      <Helmet>
        <title>AI Voice Cloning Studio Pro - Zion Tech Group</title>
        <meta name="description" content="Professional AI voice synthesis and cloning platform. Create natural-sounding voices in 50+ languages with advanced emotion control and real-time processing." />
        <meta name="keywords" content="AI voice cloning, text to speech, voice synthesis, voice generation, AI audio, voice technology" />
        <link rel="canonical" href="https://ziontechgroup.com/ai-voice-cloning-studio" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <div className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
          
          <div className="relative z-10 container mx-auto px-4">
            <div className="text-center mb-16">
              <div className="inline-flex items-center bg-cyan-400/10 text-cyan-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Mic className="w-4 h-4 mr-2" />
                AI Voice Technology
              </div>
              
              <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent neon-text">
                AI Voice Cloning Studio Pro
              </h1>
              
              <p className="text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
                Create natural-sounding voices with advanced AI technology. Perfect for content creators, 
                marketers, and businesses looking to scale their audio content production.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button className="group relative inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25">
                  <span className="relative z-10">Start Free Trial</span>
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
                
                <button className="group inline-flex items-center px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-xl hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 transform hover:scale-105">
                  <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                  Watch Demo
                </button>
              </div>
            </div>

            {/* Interactive Demo */}
            <div className="max-w-4xl mx-auto bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6 text-center">Try It Now</h3>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Enter text to convert to speech
                  </label>
                  <textarea
                    value={textInput}
                    onChange={(e) => setTextInput(e.target.value)}
                    placeholder="Type your text here... The AI will convert it to natural-sounding speech."
                    className="w-full h-32 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 resize-none"
                  />
                  
                  <div className="mt-4">
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Select Voice
                    </label>
                    <select
                      value={selectedVoice}
                      onChange={(e) => setSelectedVoice(e.target.value)}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
                    >
                      {voiceOptions.map((voice) => (
                        <option key={voice.id} value={voice.id} className="bg-slate-800">
                          {voice.name} ({voice.accent}, {voice.age})
                        </option>
                      ))}
                    </select>
                  </div>
                  
                  <button
                    onClick={handleGenerateVoice}
                    disabled={isProcessing || !textInput.trim()}
                    className="w-full mt-6 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold py-3 px-6 rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isProcessing ? (
                      <>
                        <Waveform className="w-5 h-5 mr-2 animate-pulse inline" />
                        Generating Voice...
                      </>
                    ) : (
                      <>
                        <Mic className="w-5 h-5 mr-2 inline" />
                        Generate Voice
                      </>
                    )}
                  </button>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Generated Audio
                  </label>
                  <div className="bg-white/5 border border-white/10 rounded-lg p-6 h-32 flex items-center justify-center">
                    {generatedAudio ? (
                      <div className="text-center">
                        <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                          <Play className="w-8 h-8 text-white" />
                        </div>
                        <p className="text-gray-300">Audio generated successfully!</p>
                        <button className="mt-2 text-cyan-400 hover:text-cyan-300 text-sm">
                          <Download className="w-4 h-4 inline mr-1" />
                          Download
                        </button>
                      </div>
                    ) : (
                      <div className="text-center text-gray-400">
                        <MicIcon className="w-12 h-12 mx-auto mb-2 opacity-50" />
                        <p>Generated audio will appear here</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent neon-text">
                Advanced Voice Technology
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Powered by cutting-edge AI, our voice cloning technology delivers natural, 
                expressive speech that's indistinguishable from human voices.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-cyan-400/50 transition-all duration-300 transform hover:scale-105">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform mb-4">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Pricing Section */}
        <div className="py-20 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent neon-text">
                Simple, Transparent Pricing
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the plan that fits your needs. All plans include commercial licensing and API access.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`relative bg-white/5 backdrop-blur-sm border rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 transform hover:scale-105 ${plan.popular ? 'border-cyan-400/50 ring-2 ring-cyan-400/30' : 'border-white/10'}`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-cyan-400 to-purple-600 text-white text-sm font-bold px-4 py-2 rounded-full">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-400 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-5xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-400 ml-1">{plan.period}</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular 
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700 transform hover:scale-105'
                      : 'border border-white/20 text-white hover:bg-white/10'
                  }`}>
                    {plan.popular ? 'Get Started' : 'Choose Plan'}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-2xl p-12 border border-cyan-400/20">
              <h2 className="text-4xl font-bold text-white mb-6 neon-text">
                Ready to Transform Your Audio Content?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Join thousands of content creators and businesses using AI Voice Cloning Studio Pro 
                to create professional audio content at scale.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button className="group relative inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25">
                  <span className="relative z-10">Start Free Trial</span>
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
                
                <div className="flex items-center space-x-6 text-gray-300">
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 text-cyan-400 mr-2" />
                    <span>14-day free trial</span>
                  </div>
                  <div className="flex items-center">
                    <Shield className="w-4 h-4 text-cyan-400 mr-2" />
                    <span>No credit card required</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AIVoiceCloningStudioPage;