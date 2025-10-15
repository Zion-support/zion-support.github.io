'use client';
import React from 'react';
import SEOHead from '../components/SEOHead';
import { 
  GlobeAltIcon, 
  CheckCircleIcon, 
  ArrowRightIcon,
  CpuChipIcon,
  SparklesIcon,
  RocketLaunchIcon,
  ShieldCheckIcon,
  ClockIcon,
  UserGroupIcon,
  ChartBarIcon,
  LanguageIcon,
  DocumentTextIcon,
  MicrophoneIcon,
  EyeIcon
} from '@heroicons/react/24/outline';

const AITranslatorPage: React.FC = () => {
  const features = [
    {
      icon: LanguageIcon,
      title: '100+ Languages',
      description: 'Translate between 100+ languages with industry-leading accuracy and context understanding',
      stats: '99.2% accuracy'
    },
    {
      icon: MicrophoneIcon,
      title: 'Real-time Voice Translation',
      description: 'Translate spoken language instantly with advanced speech recognition and synthesis',
      stats: '< 200ms latency'
    },
    {
      icon: DocumentTextIcon,
      title: 'Document Translation',
      description: 'Translate entire documents while preserving formatting, structure, and context',
      stats: '50+ file formats'
    },
    {
      icon: CpuChipIcon,
      title: 'AI Context Understanding',
      description: 'Advanced AI understands context, idioms, and cultural nuances for natural translations',
      stats: '95% context accuracy'
    },
    {
      icon: ShieldCheckIcon,
      title: 'Enterprise Security',
      description: 'Bank-level encryption and compliance with GDPR, HIPAA, and SOC 2 standards',
      stats: '256-bit encryption'
    },
    {
      icon: ChartBarIcon,
      title: 'Translation Analytics',
      description: 'Track translation quality, usage patterns, and optimize your multilingual content',
      stats: 'Real-time insights'
    }
  ];

  const pricingPlans = [
    {
      name: 'Personal',
      price: '$19',
      period: '/month',
      description: 'Perfect for individual users',
      features: [
        '50,000 characters/month',
        '50+ languages',
        'Basic document translation',
        'Mobile app access',
        'Email support',
        'API access'
      ],
      popular: false,
      gradient: 'from-green-500 to-cyan-500'
    },
    {
      name: 'Business',
      price: '$79',
      period: '/month',
      description: 'Ideal for small businesses',
      features: [
        '200,000 characters/month',
        '100+ languages',
        'Advanced document translation',
        'Real-time voice translation',
        'Team collaboration',
        'Priority support',
        'Custom glossaries',
        'Translation memory'
      ],
      popular: true,
      gradient: 'from-blue-500 to-purple-500'
    },
    {
      name: 'Enterprise',
      price: '$299',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Unlimited characters',
        'All languages',
        'Advanced AI features',
        '24/7 dedicated support',
        'Custom integrations',
        'On-premise deployment',
        'SLA guarantee',
        'White-label solution',
        'Advanced analytics'
      ],
      popular: false,
      gradient: 'from-purple-500 to-pink-500'
    }
  ];

  const supportedLanguages = [
    'English', 'Spanish', 'French', 'German', 'Italian', 'Portuguese', 'Russian', 'Chinese', 'Japanese', 'Korean',
    'Arabic', 'Hindi', 'Dutch', 'Swedish', 'Norwegian', 'Danish', 'Finnish', 'Polish', 'Czech', 'Hungarian',
    'Greek', 'Turkish', 'Hebrew', 'Thai', 'Vietnamese', 'Indonesian', 'Malay', 'Filipino', 'Swahili', 'Zulu'
  ];

  const testimonials = [
    {
      name: 'Maria Rodriguez',
      role: 'Global Marketing Director',
      company: 'International Corp',
      content: 'Zion AI Translator has revolutionized our global communication. We can now reach customers in their native language with perfect accuracy.',
      rating: 5
    },
    {
      name: 'David Kim',
      role: 'Content Manager',
      company: 'TechStartup',
      content: 'The real-time voice translation feature is incredible. We can conduct meetings with international clients seamlessly.',
      rating: 5
    },
    {
      name: 'Sarah Johnson',
      role: 'E-commerce Manager',
      company: 'OnlineStore',
      content: 'Document translation with formatting preservation saved us weeks of work. Our product descriptions are now available in 20+ languages.',
      rating: 5
    }
  ];

  return (
    <>
      <SEOHead 
        title="AI Translator - Zion Tech Group"
        description="Advanced AI-powered translation service supporting 100+ languages with real-time voice translation and document processing."
        keywords="AI translator, translation service, multilingual, voice translation, document translation, language AI"
      />
      
      <div className="min-h-screen bg-slate-900 text-white">
        {/* Hero Section */}
        <section className="relative overflow-hidden min-h-screen flex items-center">
          <div className="absolute inset-0 bg-gradient-to-br from-green-900/30 via-slate-900 to-blue-900/30"></div>
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
                  AI Translator
                </h1>
                <div className="absolute -inset-1 bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 rounded-lg blur opacity-30 animate-pulse"></div>
              </div>
              <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 mb-8 lg:mb-12 max-w-4xl mx-auto leading-relaxed px-4">
                Break down language barriers with our advanced AI translation service. 
                Translate text, voice, and documents across 100+ languages with industry-leading accuracy.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 lg:mb-16 px-4">
                <button className="relative group cyber-button px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base shadow-lg shadow-green-500/25 hover:shadow-green-500/40">
                  <span className="relative z-10 flex items-center">
                    Start Free Trial
                    <ArrowRightIcon className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </span>
                </button>
                <button className="border-2 border-green-400 text-green-300 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-green-400 hover:text-white transition-all duration-300 text-sm sm:text-base hover:shadow-lg hover:shadow-green-400/25 neon-border-animated">
                  Try Demo
                </button>
              </div>
              
              {/* Stats */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 max-w-4xl mx-auto px-4">
                <div className="text-center p-4 bg-slate-800/30 rounded-lg backdrop-blur-sm hover:bg-slate-700/30 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-green-500/10">
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-green-400 mb-1 lg:mb-2">100+</div>
                  <div className="text-gray-300 text-xs sm:text-sm lg:text-base">Languages</div>
                </div>
                <div className="text-center p-4 bg-slate-800/30 rounded-lg backdrop-blur-sm hover:bg-slate-700/30 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/10">
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-400 mb-1 lg:mb-2">99.2%</div>
                  <div className="text-gray-300 text-xs sm:text-sm lg:text-base">Accuracy</div>
                </div>
                <div className="text-center p-4 bg-slate-800/30 rounded-lg backdrop-blur-sm hover:bg-slate-700/30 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/10">
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-purple-400 mb-1 lg:mb-2">200ms</div>
                  <div className="text-gray-300 text-xs sm:text-sm lg:text-base">Response Time</div>
                </div>
                <div className="text-center p-4 bg-slate-800/30 rounded-lg backdrop-blur-sm hover:bg-slate-700/30 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/10">
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-cyan-400 mb-1 lg:mb-2">50+</div>
                  <div className="text-gray-300 text-xs sm:text-sm lg:text-base">File Formats</div>
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
                Powerful <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">Features</span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
                Everything you need for seamless multilingual communication and content localization.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="group holographic-card p-6 hover:scale-105 transition-all duration-300 hover:shadow-xl hover:shadow-green-500/20">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform neon-border-animated">
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-sm text-green-400 font-medium neon-text">{feature.stats}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-green-300 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 mb-4 text-sm">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Supported Languages Section */}
        <section className="py-16 sm:py-20 bg-slate-800/30 relative overflow-hidden">
          <div className="absolute inset-0 cyber-grid opacity-20"></div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
                Supported <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Languages</span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
                Translate between 100+ languages with native-level accuracy and cultural context understanding.
              </p>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {supportedLanguages.map((language, index) => (
                <div key={index} className="group p-4 bg-slate-800/50 rounded-lg hover:bg-slate-700/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/10 text-center">
                  <span className="text-gray-300 group-hover:text-white transition-colors font-medium">{language}</span>
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
                Choose the perfect plan for your translation needs. All plans include our core AI features.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`group relative ${plan.popular ? 'scale-105' : ''} holographic-card p-8 hover:scale-105 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/20`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-semibold neon-glow">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-400 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-400 ml-1">{plan.period}</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 hover:scale-105 ${
                    plan.popular 
                      ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg shadow-purple-500/25' 
                      : 'border-2 border-purple-400 text-purple-300 hover:bg-purple-400 hover:text-white'
                  }`}>
                    Get Started
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
                What Our <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Users Say</span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
                Join thousands of users who have transformed their multilingual communication.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="holographic-card p-6 hover:scale-105 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/20">
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
                    <div className="text-sm text-gray-400">{testimonial.role} at {testimonial.company}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-16 sm:py-20 bg-gradient-to-r from-green-900/40 via-slate-900 to-blue-900/40 overflow-hidden">
          <div className="absolute top-10 left-10 w-64 h-64 bg-green-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative z-10">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
              Ready to Break Language Barriers?
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 mb-6 sm:mb-8">
              Start your free trial today and experience seamless multilingual communication.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="relative group bg-gradient-to-r from-green-600 to-blue-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:from-green-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 text-sm sm:text-base shadow-lg shadow-green-500/25">
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

export default AITranslatorPage;