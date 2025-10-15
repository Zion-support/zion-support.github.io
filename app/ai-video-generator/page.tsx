'use client';
import React from 'react';
import SEOHead from '../components/SEOHead';
import { 
  VideoCameraIcon, 
  CheckCircleIcon, 
  ArrowRightIcon,
  CpuChipIcon,
  SparklesIcon,
  ClockIcon,
  ShieldCheckIcon,
  DocumentTextIcon,
  ChatBubbleLeftRightIcon,
  MicrophoneIcon,
  PhotoIcon
} from '@heroicons/react/24/outline';

const AIVideoGeneratorPage: React.FC = () => {
  const features = [
    {
      icon: VideoCameraIcon,
      title: 'AI Video Creation',
      description: 'Generate professional videos from text prompts with advanced AI models.',
      benefits: ['Text-to-video generation', 'Multiple video styles', 'HD quality output']
    },
    {
      icon: MicrophoneIcon,
      title: 'Voice Synthesis',
      description: 'Create natural-sounding voiceovers in 50+ languages and accents.',
      benefits: ['Natural voice generation', 'Multiple accents', 'Emotion control']
    },
    {
      icon: PhotoIcon,
      title: 'Image to Video',
      description: 'Transform static images into dynamic videos with AI animation.',
      benefits: ['Image animation', 'Motion effects', 'Style transfer']
    },
    {
      icon: DocumentTextIcon,
      title: 'Script Generation',
      description: 'AI-powered script writing for various video types and industries.',
      benefits: ['Industry-specific scripts', 'SEO optimization', 'Engagement optimization']
    },
    {
      icon: CpuChipIcon,
      title: 'Smart Editing',
      description: 'Automated video editing with AI-powered scene detection and transitions.',
      benefits: ['Auto-editing', 'Smart transitions', 'Color correction']
    },
    {
      icon: ShieldCheckIcon,
      title: 'Rights Management',
      description: 'Full commercial rights and licensing for all generated content.',
      benefits: ['Commercial usage rights', 'No attribution required', 'Global licensing']
    }
  ];

  const pricingPlans = [
    {
      name: 'Creator',
      price: '$39',
      period: '/month',
      description: 'Perfect for content creators and influencers',
      features: [
        '10 videos per month',
        '1080p HD quality',
        'Basic voice synthesis',
        '5 video styles',
        'Watermark removal',
        'Email support'
      ],
      cta: 'Start Free Trial',
      popular: false
    },
    {
      name: 'Professional',
      price: '$99',
      period: '/month',
      description: 'Ideal for businesses and agencies',
      features: [
        '50 videos per month',
        '4K UHD quality',
        'Advanced voice synthesis',
        '20+ video styles',
        'Custom branding',
        'API access',
        'Priority support',
        'Commercial rights'
      ],
      cta: 'Start Free Trial',
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$299',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Unlimited videos',
        '8K quality available',
        'Premium voice synthesis',
        'All video styles',
        'White-label solution',
        'Custom AI models',
        '24/7 dedicated support',
        'On-premise deployment',
        'SLA guarantee'
      ],
      cta: 'Contact Sales',
      popular: false
    }
  ];

  const useCases = [
    {
      title: 'Marketing Videos',
      description: 'Create engaging promotional videos for social media and advertising',
      icon: VideoCameraIcon,
      benefit: '10x faster production'
    },
    {
      title: 'Educational Content',
      description: 'Generate educational videos and tutorials with AI narration',
      icon: DocumentTextIcon,
      benefit: '95% cost reduction'
    },
    {
      title: 'Product Demos',
      description: 'Create compelling product demonstration videos automatically',
      icon: SparklesIcon,
      benefit: 'Professional quality'
    }
  ];

  const videoStyles = [
    'Corporate', 'Lifestyle', 'Animation', 'Documentary', 'Tutorial', 'Promotional',
    'Educational', 'Entertainment', 'News', 'Sports', 'Technology', 'Healthcare',
    'Finance', 'Real Estate', 'E-commerce', 'Gaming', 'Fashion', 'Food',
    'Travel', 'Fitness', 'Music', 'Art', 'Science', 'Nature'
  ];

  return (
    <>
      <SEOHead 
        title="AI Video Generator - Create Professional Videos with AI | Zion Tech Group"
        description="Generate professional videos from text with our AI video generator. Create marketing videos, tutorials, and content in minutes. 4K quality, voice synthesis, and commercial rights included."
        keywords="AI video generator, video creation, text to video, video marketing, content creation, video automation, voice synthesis, video editing"
      />
      
      <div className="min-h-screen bg-slate-900 text-white">
        {/* Hero Section */}
        <section className="relative overflow-hidden min-h-screen flex items-center">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-slate-900 to-pink-900/30"></div>
          <div className="absolute inset-0 cyber-grid opacity-20"></div>
          
          {/* Floating Particles */}
          <div className="floating-particles">
            {[...Array(30)].map((_, i) => (
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
                  AI Video Generator
                </h1>
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 rounded-lg blur opacity-30 animate-pulse"></div>
              </div>
              <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 mb-8 lg:mb-12 max-w-4xl mx-auto leading-relaxed px-4">
                Create professional videos from text in minutes. Generate marketing content, tutorials, and promotional videos with AI-powered automation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 lg:mb-16 px-4">
                <button className="relative group cyber-button px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40">
                  <span className="relative z-10 flex items-center">
                    Start Free Trial
                    <ArrowRightIcon className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </span>
                </button>
                <button className="border-2 border-purple-400 text-purple-300 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-purple-400 hover:text-white transition-all duration-300 text-sm sm:text-base hover:shadow-lg hover:shadow-purple-400/25 neon-border-animated">
                  Watch Demo
                </button>
              </div>
              
              {/* Stats */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 max-w-4xl mx-auto px-4">
                <div className="text-center p-4 bg-slate-800/30 rounded-lg backdrop-blur-sm hover:bg-slate-700/30 transition-all duration-300 hover:scale-105">
                  <div className="text-2xl sm:text-3xl font-bold text-purple-400 mb-2">4K</div>
                  <div className="text-gray-300 text-sm">Quality</div>
                </div>
                <div className="text-center p-4 bg-slate-800/30 rounded-lg backdrop-blur-sm hover:bg-slate-700/30 transition-all duration-300 hover:scale-105">
                  <div className="text-2xl sm:text-3xl font-bold text-pink-400 mb-2">24+</div>
                  <div className="text-gray-300 text-sm">Styles</div>
                </div>
                <div className="text-center p-4 bg-slate-800/30 rounded-lg backdrop-blur-sm hover:bg-slate-700/30 transition-all duration-300 hover:scale-105">
                  <div className="text-2xl sm:text-3xl font-bold text-cyan-400 mb-2">50+</div>
                  <div className="text-gray-300 text-sm">Languages</div>
                </div>
                <div className="text-center p-4 bg-slate-800/30 rounded-lg backdrop-blur-sm hover:bg-slate-700/30 transition-all duration-300 hover:scale-105">
                  <div className="text-2xl sm:text-3xl font-bold text-green-400 mb-2">10x</div>
                  <div className="text-gray-300 text-sm">Faster</div>
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
                Powerful <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Video Features</span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
                Everything you need to create professional videos with AI-powered automation and creativity.
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
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, idx) => (
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

        {/* Video Styles Section */}
        <section className="py-16 sm:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
                <span className="bg-gradient-to-r from-pink-400 to-cyan-400 bg-clip-text text-transparent">24+ Video Styles</span> Available
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
                Choose from a wide variety of professional video styles to match your brand and message.
              </p>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {videoStyles.map((style, index) => (
                <div key={index} className="text-center p-3 bg-slate-800/30 rounded-lg hover:bg-slate-700/30 transition-all duration-300 hover:scale-105 group">
                  <span className="text-gray-300 group-hover:text-white transition-colors text-sm font-medium">
                    {style}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-16 sm:py-20 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
                Perfect For <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Every Industry</span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
                From marketing to education, our AI video generator adapts to your specific needs and industry.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {useCases.map((useCase, index) => (
                <div key={index} className="text-center group">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform neon-border-animated">
                    <useCase.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-cyan-300 transition-colors">
                    {useCase.title}
                  </h3>
                  <p className="text-gray-400 mb-4">
                    {useCase.description}
                  </p>
                  <div className="text-lg font-semibold text-purple-400 neon-text">
                    {useCase.benefit}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-16 sm:py-20 relative overflow-hidden">
          <div className="absolute inset-0 cyber-grid opacity-20"></div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
                Simple <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Pricing</span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
                Choose the plan that fits your video creation needs. All plans include a 14-day free trial.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`group holographic-card p-8 hover:scale-105 transition-all duration-300 hover:shadow-xl ${
                  plan.popular ? 'ring-2 ring-purple-500 shadow-purple-500/20' : ''
                }`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-1 rounded-full text-sm font-semibold neon-glow">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">
                      {plan.name}
                    </h3>
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
                      ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600 shadow-lg shadow-purple-500/25' 
                      : 'cyber-button'
                  }`}>
                    {plan.cta}
                  </button>
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
              Create Professional Videos Today
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 mb-6 sm:mb-8">
              Join thousands of creators and businesses who are already using AI to produce stunning videos in minutes.
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

export default AIVideoGeneratorPage;