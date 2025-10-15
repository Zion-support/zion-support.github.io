import React from 'react';
import SEOHead from '../components/SEOHead';
import { 
  SpeakerWaveIcon, 
  CheckCircleIcon, 
  ArrowRightIcon,
  SparklesIcon,
  MicrophoneIcon,
  MusicalNoteIcon,
  VolumeUpIcon,
  WaveformIcon
} from '@heroicons/react/24/outline';

const AIAudioProcessorPage: React.FC = () => {
  const features = [
    'AI-powered noise reduction and audio enhancement',
    'Automatic speech recognition and transcription',
    'Voice cloning and synthesis',
    'Audio format conversion (MP3, WAV, FLAC, AAC)',
    'Real-time audio processing and filtering',
    'Podcast and music production tools',
    'Audio compression and optimization',
    'Background music generation',
    'Voice effects and modulation',
    'Batch audio processing'
  ];

  const audioTypes = [
    {
      title: 'Podcast Production',
      description: 'Professional podcast editing and enhancement',
      icon: MicrophoneIcon,
      features: ['Noise reduction', 'Level balancing', 'Intro/outro generation']
    },
    {
      title: 'Music Creation',
      description: 'AI-assisted music composition and production',
      icon: MusicalNoteIcon,
      features: ['Beat generation', 'Melody creation', 'Harmony suggestions']
    },
    {
      title: 'Voice Processing',
      description: 'Advanced voice enhancement and modification',
      icon: SpeakerWaveIcon,
      features: ['Voice cloning', 'Pitch correction', 'Emotion analysis']
    },
    {
      title: 'Audio Restoration',
      description: 'Clean up and restore old or damaged audio',
      icon: WaveformIcon,
      features: ['Noise removal', 'Crackle reduction', 'Volume normalization']
    }
  ];

  const pricingPlans = [
    {
      name: 'Creator',
      price: '$29',
      period: '/month',
      description: 'Perfect for content creators and podcasters',
      features: [
        'Up to 10 hours of audio processing per month',
        'Basic noise reduction',
        'Standard audio formats',
        'Email support',
        'Watermark included'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$79',
      period: '/month',
      description: 'Ideal for audio professionals and studios',
      features: [
        'Up to 50 hours of audio processing per month',
        'Advanced noise reduction',
        'All audio formats',
        'Priority support',
        'No watermark',
        'Voice cloning',
        'API access',
        'Custom presets'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$199',
      period: '/month',
      description: 'For large organizations and media companies',
      features: [
        'Unlimited audio processing',
        'Premium AI models',
        'Custom voice training',
        '24/7 dedicated support',
        'On-premise deployment',
        'White-label solution',
        'Advanced analytics',
        'SLA guarantee'
      ],
      popular: false
    }
  ];

  const formats = [
    { name: 'MP3', quality: 'High', size: 'Small' },
    { name: 'WAV', quality: 'Lossless', size: 'Large' },
    { name: 'FLAC', quality: 'Lossless', size: 'Medium' },
    { name: 'AAC', quality: 'High', size: 'Small' },
    { name: 'OGG', quality: 'High', size: 'Small' },
    { name: 'M4A', quality: 'High', size: 'Small' }
  ];

  return (
    <>
      <SEOHead
        title="AI Audio Processor Pro - Zion Tech Group"
        description="Advanced AI-powered audio processing with noise reduction, voice cloning, music generation, and professional audio enhancement. Transform your audio content with cutting-edge AI technology."
        keywords="AI audio processor, noise reduction, voice cloning, audio enhancement, music generation, podcast editing, audio restoration, voice synthesis"
        canonicalUrl="https://ziontechgroup.com/ai-audio-processor"
      />
      
      <div className="min-h-screen bg-slate-900 text-white">
        {/* Hero Section */}
        <section className="relative overflow-hidden min-h-screen flex items-center">
          <div className="absolute inset-0 bg-gradient-to-br from-orange-900/30 via-slate-900 to-red-900/30"></div>
          <div className="absolute inset-0 opacity-30" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
          
          <div className="absolute top-20 left-10 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-red-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 w-full">
            <div className="text-center">
              <div className="relative inline-block mb-6">
                <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold bg-gradient-to-r from-orange-400 via-red-400 to-pink-400 bg-clip-text text-transparent leading-tight">
                  AI Audio Processor Pro
                </h1>
                <div className="absolute -inset-1 bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 rounded-lg blur opacity-30 animate-pulse"></div>
              </div>
              <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 mb-8 lg:mb-12 max-w-4xl mx-auto leading-relaxed px-4">
                Transform your audio content with advanced AI-powered processing. Noise reduction, voice cloning, music generation, and professional audio enhancement in one powerful platform.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 lg:mb-16 px-4">
                <a href="#pricing"
                  className="relative group bg-gradient-to-r from-orange-600 to-red-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:from-orange-700 hover:to-red-700 transition-all duration-300 transform hover:scale-105 text-sm sm:text-base shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40"
                >
                  <span className="relative z-10 flex items-center">
                    Start Free Trial
                    <ArrowRightIcon className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-red-600 rounded-lg blur opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                </a>
                <a href="#demo"
                  className="border-2 border-orange-400 text-orange-300 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-orange-400 hover:text-white transition-all duration-300 text-sm sm:text-base hover:shadow-lg hover:shadow-orange-400/25"
                >
                  Try Live Demo
                </a>
              </div>
              
              {/* Key Stats */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 max-w-4xl mx-auto px-4">
                <div className="text-center p-4 bg-slate-800/30 rounded-lg backdrop-blur-sm hover:bg-slate-700/30 transition-all duration-300 hover:scale-105">
                  <div className="text-2xl sm:text-3xl font-bold text-orange-400 mb-1">99%</div>
                  <div className="text-gray-300 text-xs sm:text-sm">Noise Reduction</div>
                </div>
                <div className="text-center p-4 bg-slate-800/30 rounded-lg backdrop-blur-sm hover:bg-slate-700/30 transition-all duration-300 hover:scale-105">
                  <div className="text-2xl sm:text-3xl font-bold text-red-400 mb-1">6+</div>
                  <div className="text-gray-300 text-xs sm:text-sm">Formats</div>
                </div>
                <div className="text-center p-4 bg-slate-800/30 rounded-lg backdrop-blur-sm hover:bg-slate-700/30 transition-all duration-300 hover:scale-105">
                  <div className="text-2xl sm:text-3xl font-bold text-pink-400 mb-1">Real-time</div>
                  <div className="text-gray-300 text-xs sm:text-sm">Processing</div>
                </div>
                <div className="text-center p-4 bg-slate-800/30 rounded-lg backdrop-blur-sm hover:bg-slate-700/30 transition-all duration-300 hover:scale-105">
                  <div className="text-2xl sm:text-3xl font-bold text-cyan-400 mb-1">24/7</div>
                  <div className="text-gray-300 text-xs sm:text-sm">Available</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Audio Types Section */}
        <section className="py-16 sm:py-20 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
                Professional <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">Audio Processing</span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
                From podcast production to music creation, our AI adapts to your audio needs.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {audioTypes.map((type, index) => (
                <div key={index} 
                  className="group bg-slate-800/50 p-6 sm:p-8 rounded-xl border border-slate-700 hover:border-orange-500 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl hover:shadow-orange-500/20 overflow-hidden"
                >
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <type.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-white group-hover:text-orange-300 transition-colors">
                    {type.title}
                  </h3>
                  <p className="text-gray-400 mb-4 group-hover:text-gray-300 transition-colors text-sm sm:text-base">
                    {type.description}
                  </p>
                  <div className="space-y-1">
                    {type.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="text-xs text-gray-500 group-hover:text-gray-400 transition-colors">
                        • {feature}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 sm:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
                Powerful <span className="bg-gradient-to-r from-red-400 to-pink-400 bg-clip-text text-transparent">Features</span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
                Everything you need for professional audio processing and enhancement.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              {features.map((feature, index) => (
                <div key={index} 
                  className="flex items-start space-x-4 p-4 sm:p-6 bg-slate-800/50 rounded-lg hover:bg-slate-700/50 transition-all duration-300 group hover:scale-105 hover:shadow-lg hover:shadow-orange-500/10"
                >
                  <div className="relative">
                    <CheckCircleIcon className="w-5 h-5 sm:w-6 sm:h-6 text-green-400 flex-shrink-0 group-hover:scale-110 transition-transform" />
                    <div className="absolute inset-0 bg-green-400 rounded-full blur opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
                  </div>
                  <span className="text-gray-300 font-medium text-sm sm:text-base group-hover:text-white transition-colors">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Supported Formats */}
        <section className="py-16 sm:py-20 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
                Support for All <span className="bg-gradient-to-r from-pink-400 to-cyan-400 bg-clip-text text-transparent">Audio Formats</span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
                Process audio in any format with high-quality output options.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
              {formats.map((format, index) => (
                <div key={index} 
                  className="group bg-slate-800/50 p-4 rounded-lg border border-slate-700 hover:border-pink-500 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-lg hover:shadow-pink-500/10 text-center"
                >
                  <div className="text-2xl mb-2 group-hover:scale-110 transition-transform">🎵</div>
                  <div className="text-sm text-gray-300 group-hover:text-white transition-colors font-medium">{format.name}</div>
                  <div className="text-xs text-gray-500 group-hover:text-gray-400 transition-colors">{format.quality}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-16 sm:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
                Simple <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">Pricing</span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
                Choose the perfect plan for your audio processing needs. All plans include our core AI features.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              {pricingPlans.map((plan, index) => (
                <div key={index} 
                  className={`relative bg-slate-800/50 p-6 sm:p-8 rounded-xl border transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl ${
                    plan.popular 
                      ? 'border-orange-500 shadow-orange-500/20' 
                      : 'border-slate-700 hover:border-orange-500 hover:shadow-orange-500/20'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-400 text-sm sm:text-base mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-3xl sm:text-4xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-400 ml-1">{plan.period}</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircleIcon className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <a 
                    href="/contact"
                    className={`block w-full text-center py-3 px-4 rounded-lg font-semibold transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-orange-600 to-red-600 text-white hover:from-orange-700 hover:to-red-700'
                        : 'bg-slate-700 text-white hover:bg-slate-600'
                    }`}
                  >
                    Get Started
                  </a>
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
              Join thousands of creators who are already producing professional audio with AI.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact"
                className="relative group bg-gradient-to-r from-orange-600 to-red-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:from-orange-700 hover:to-red-700 transition-all duration-300 transform hover:scale-105 text-sm sm:text-base shadow-lg shadow-orange-500/25"
              >
                <span className="relative z-10 flex items-center">
                  Start Free Trial
                  <ArrowRightIcon className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-red-600 rounded-lg blur opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              </a>
              <a href="tel:+13024640950"
                className="border-2 border-white text-white hover:bg-white hover:text-slate-900 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold transition-all duration-300 text-sm sm:text-base hover:shadow-lg hover:shadow-white/25"
              >
                Call +1 302 464 0950
              </a>
            </div>
            <div className="mt-8 text-sm text-gray-400">
              <p>📧 Email: kleber@ziontechgroup.com</p>
              <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AIAudioProcessorPage;