'use client';
import React from 'react';
import SEOHead from '../components/SEOHead';
import { 
  MicrophoneIcon, 
  SpeakerWaveIcon, 
  SparklesIcon, 
  CheckCircleIcon,
  ArrowRightIcon,
  ClockIcon,
  EyeIcon,
  DocumentTextIcon,
  BoltIcon,
  ShieldCheckIcon,
  CloudIcon,
  CpuChipIcon
} from '@heroicons/react/24/outline';

const AIVoiceSynthesisProPage: React.FC = () => {
  const features = [
    {
      icon: SpeakerWaveIcon,
      title: 'Natural Voice Synthesis',
      description: 'Generate human-like voices with advanced neural text-to-speech technology.',
      price: '$39/mo'
    },
    {
      icon: MicrophoneIcon,
      title: 'Voice Cloning',
      description: 'Clone any voice with just a few seconds of audio sample.',
      price: '$79/mo'
    },
    {
      icon: SparklesIcon,
      title: 'Emotion Control',
      description: 'Add emotions and expressions to synthesized speech naturally.',
      price: '$49/mo'
    },
    {
      icon: DocumentTextIcon,
      title: 'Multi-Language Support',
      description: 'Support for 100+ languages with native pronunciation.',
      price: '$29/mo'
    },
    {
      icon: BoltIcon,
      title: 'Real-time Synthesis',
      description: 'Generate speech in real-time for live applications.',
      price: '$59/mo'
    },
    {
      icon: CloudIcon,
      title: 'API Integration',
      description: 'Easy integration with your applications via REST API.',
      price: '$19/mo'
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$29',
      period: '/month',
      description: 'Perfect for individual creators and small projects',
      features: [
        '10,000 Characters/Month',
        'Basic Voice Models',
        'Standard Quality',
        'Email Support',
        '5 Voice Clones',
        'Basic Languages'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$99',
      period: '/month',
      description: 'Ideal for content creators and businesses',
      features: [
        'Everything in Starter',
        '100,000 Characters/Month',
        'Premium Voice Models',
        'High Quality Audio',
        'Priority Support',
        'Unlimited Voice Clones',
        'All Languages',
        'Emotion Control',
        'API Access'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$299',
      period: '/month',
      description: 'For large organizations with high-volume needs',
      features: [
        'Everything in Professional',
        'Unlimited Characters',
        'Custom Voice Models',
        'Studio Quality Audio',
        'Dedicated Account Manager',
        'Custom Training',
        'White-label Solution',
        'On-premise Deployment',
        '24/7 Support'
      ],
      popular: false
    }
  ];

  const benefits = [
    'Create natural-sounding voices instantly',
    'Reduce voice production costs by 90%',
    'Support for 100+ languages',
    'Generate unlimited voice variations',
    'Easy integration with existing systems',
    'Real-time voice synthesis capabilities'
  ];

  return (
    <>
      <SEOHead 
        title="AI Voice Synthesis Pro - Zion Tech Group"
        description="Advanced AI-powered voice synthesis with voice cloning, emotion control, and multi-language support. Create natural-sounding voices from text!"
        keywords="AI voice synthesis, text to speech, voice cloning, voice generation, TTS, voice AI"
      />
      
      <div className="min-h-screen bg-slate-900 text-white">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 lg:py-32">
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/30 via-slate-900 to-blue-900/30"></div>
          <div className="absolute inset-0 opacity-30" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="inline-flex items-center bg-emerald-500/10 rounded-full px-4 py-2 mb-6">
                <SpeakerWaveIcon className="w-5 h-5 text-emerald-400 mr-2" />
                <span className="text-emerald-300 text-sm font-medium">AI Voice Synthesis Pro</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-emerald-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  AI Voice Synthesis Pro
                </span>
              </h1>
              
              <p className="text-lg sm:text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Revolutionize your audio content with AI-powered voice synthesis, voice cloning, 
                and emotion control. Create natural-sounding voices from any text input.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <button className="bg-gradient-to-r from-emerald-600 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-emerald-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-emerald-500/25">
                  Start Free Trial
                </button>
                <button className="border-2 border-emerald-400 text-emerald-300 px-8 py-4 rounded-lg font-semibold hover:bg-emerald-400 hover:text-white transition-all duration-300">
                  Listen to Demo
                </button>
              </div>
              
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
                <div className="text-center">
                  <div className="text-3xl font-bold text-emerald-400 mb-2">100+</div>
                  <div className="text-gray-300 text-sm">Languages</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-emerald-400 mb-2">90%</div>
                  <div className="text-gray-300 text-sm">Cost Reduction</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-emerald-400 mb-2">Real-time</div>
                  <div className="text-gray-300 text-sm">Synthesis</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-emerald-400 mb-2">Studio</div>
                  <div className="text-gray-300 text-sm">Quality</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                Why Choose <span className="bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">AI Voice Synthesis Pro</span>?
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
                Transform your audio content creation with AI-powered voice synthesis and cloning.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-4 p-6 bg-slate-800/50 rounded-lg hover:bg-slate-700/50 transition-all duration-300 group">
                  <CheckCircleIcon className="w-6 h-6 text-emerald-400 flex-shrink-0 mt-1 group-hover:scale-110 transition-transform" />
                  <span className="text-gray-300 group-hover:text-white transition-colors">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                Powerful <span className="bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">Features</span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
                Everything you need to create natural-sounding voices with AI-powered intelligence.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="group bg-slate-800/50 p-8 rounded-xl border border-slate-700 hover:border-emerald-500 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl hover:shadow-emerald-500/20">
                  <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-emerald-300 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 mb-4 group-hover:text-gray-300 transition-colors">
                    {feature.description}
                  </p>
                  <div className="text-2xl font-bold text-emerald-400">
                    {feature.price}
                  </div>
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
                Choose Your <span className="bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">Plan</span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
                Flexible pricing plans designed to scale with your voice synthesis needs.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`relative bg-slate-800/50 p-8 rounded-xl border transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl ${
                  plan.popular 
                    ? 'border-emerald-500 shadow-emerald-500/20' 
                    : 'border-slate-700 hover:border-emerald-500'
                }`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-emerald-600 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-400 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-5xl font-bold text-emerald-400">{plan.price}</span>
                      <span className="text-gray-400 ml-2">{plan.period}</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircleIcon className="w-5 h-5 text-emerald-400 mr-3 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-emerald-600 to-blue-600 text-white hover:from-emerald-700 hover:to-blue-700'
                      : 'border-2 border-emerald-400 text-emerald-300 hover:bg-emerald-400 hover:text-white'
                  }`}>
                    {plan.popular ? 'Start Free Trial' : 'Get Started'}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-emerald-900/40 via-slate-900 to-blue-900/40">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">
              Ready to Create Amazing Voices?
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 mb-8">
              Join thousands of creators already using AI Voice Synthesis Pro to produce natural-sounding audio.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-emerald-600 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-emerald-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105">
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

export default AIVoiceSynthesisProPage;