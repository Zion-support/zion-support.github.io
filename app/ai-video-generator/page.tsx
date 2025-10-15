import React from 'react';
import SEOHead from '../components/SEOHead';
import { 
  VideoCameraIcon, 
  CheckCircleIcon, 
  ArrowRightIcon,
  SparklesIcon,
  EyeIcon,
  SpeakerWaveIcon,
  DocumentTextIcon,
  GlobeAltIcon
} from '@heroicons/react/24/outline';

const AIVideoGeneratorPage: React.FC = () => {
  const features = [
    'AI-powered video generation from text prompts',
    'Multiple video styles and templates',
    'Voice synthesis with natural speech',
    'Automatic subtitle generation',
    'Background music and sound effects',
    'Custom branding and logo integration',
    'Multiple aspect ratios (16:9, 9:16, 1:1)',
    'HD and 4K video output',
    'Batch video processing',
    'API integration for automated workflows'
  ];

  const videoTypes = [
    {
      title: 'Marketing Videos',
      description: 'Create compelling promotional content for your brand',
      icon: GlobeAltIcon,
      examples: ['Product demos', 'Social media ads', 'Explainer videos']
    },
    {
      title: 'Educational Content',
      description: 'Generate engaging educational and training videos',
      icon: DocumentTextIcon,
      examples: ['Tutorial videos', 'Course content', 'How-to guides']
    },
    {
      title: 'Social Media',
      description: 'Create viral content for all social platforms',
      icon: EyeIcon,
      examples: ['TikTok videos', 'Instagram reels', 'YouTube shorts']
    },
    {
      title: 'Presentations',
      description: 'Transform presentations into dynamic video content',
      icon: SpeakerWaveIcon,
      examples: ['Sales pitches', 'Webinars', 'Conference talks']
    }
  ];

  const pricingPlans = [
    {
      name: 'Creator',
      price: '$39',
      period: '/month',
      description: 'Perfect for content creators and small businesses',
      features: [
        'Up to 10 videos per month',
        'HD video output',
        'Basic templates',
        'Standard voice synthesis',
        'Email support',
        'Watermark included'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$99',
      period: '/month',
      description: 'Ideal for marketing agencies and content teams',
      features: [
        'Up to 50 videos per month',
        '4K video output',
        'Premium templates',
        'Advanced voice synthesis',
        'Priority support',
        'No watermark',
        'Custom branding',
        'API access'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$299',
      period: '/month',
      description: 'For large organizations and media companies',
      features: [
        'Unlimited videos',
        '4K and 8K output',
        'Custom templates',
        'Premium voice models',
        '24/7 dedicated support',
        'White-label solution',
        'Advanced analytics',
        'SLA guarantee'
      ],
      popular: false
    }
  ];

  const templates = [
    { name: 'Explainer Video', duration: '30-60s', style: 'Modern' },
    { name: 'Product Demo', duration: '15-30s', style: 'Clean' },
    { name: 'Social Media Ad', duration: '15s', style: 'Dynamic' },
    { name: 'Tutorial Video', duration: '2-5min', style: 'Educational' },
    { name: 'Testimonial Video', duration: '30-45s', style: 'Professional' },
    { name: 'Brand Story', duration: '1-2min', style: 'Cinematic' }
  ];

  return (
    <>
      <SEOHead
        title="AI Video Generator Pro - Zion Tech Group"
        description="Create professional videos from text with AI-powered video generation. Generate marketing videos, educational content, and social media videos with voice synthesis and custom branding."
        keywords="AI video generator, video creation, automated video, marketing videos, social media content, video templates, voice synthesis, content creation"
        canonicalUrl="https://ziontechgroup.com/ai-video-generator"
      />
      
      <div className="min-h-screen bg-slate-900 text-white">
        {/* Hero Section */}
        <section className="relative overflow-hidden min-h-screen flex items-center">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-slate-900 to-pink-900/30"></div>
          <div className="absolute inset-0 opacity-30" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
          
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 w-full">
            <div className="text-center">
              <div className="relative inline-block mb-6">
                <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent leading-tight">
                  AI Video Generator Pro
                </h1>
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 rounded-lg blur opacity-30 animate-pulse"></div>
              </div>
              <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 mb-8 lg:mb-12 max-w-4xl mx-auto leading-relaxed px-4">
                Create professional videos from text with AI-powered generation. Generate marketing videos, educational content, and social media videos with voice synthesis and custom branding.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 lg:mb-16 px-4">
                <a href="#pricing"
                  className="relative group bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 text-sm sm:text-base shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40"
                >
                  <span className="relative z-10 flex items-center">
                    Start Free Trial
                    <ArrowRightIcon className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                </a>
                <a href="#demo"
                  className="border-2 border-purple-400 text-purple-300 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-purple-400 hover:text-white transition-all duration-300 text-sm sm:text-base hover:shadow-lg hover:shadow-purple-400/25"
                >
                  Watch Demo
                </a>
              </div>
              
              {/* Key Stats */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 max-w-4xl mx-auto px-4">
                <div className="text-center p-4 bg-slate-800/30 rounded-lg backdrop-blur-sm hover:bg-slate-700/30 transition-all duration-300 hover:scale-105">
                  <div className="text-2xl sm:text-3xl font-bold text-purple-400 mb-1">50+</div>
                  <div className="text-gray-300 text-xs sm:text-sm">Templates</div>
                </div>
                <div className="text-center p-4 bg-slate-800/30 rounded-lg backdrop-blur-sm hover:bg-slate-700/30 transition-all duration-300 hover:scale-105">
                  <div className="text-2xl sm:text-3xl font-bold text-pink-400 mb-1">4K</div>
                  <div className="text-gray-300 text-xs sm:text-sm">Quality</div>
                </div>
                <div className="text-center p-4 bg-slate-800/30 rounded-lg backdrop-blur-sm hover:bg-slate-700/30 transition-all duration-300 hover:scale-105">
                  <div className="text-2xl sm:text-3xl font-bold text-cyan-400 mb-1">10x</div>
                  <div className="text-gray-300 text-xs sm:text-sm">Faster</div>
                </div>
                <div className="text-center p-4 bg-slate-800/30 rounded-lg backdrop-blur-sm hover:bg-slate-700/30 transition-all duration-300 hover:scale-105">
                  <div className="text-2xl sm:text-3xl font-bold text-green-400 mb-1">24/7</div>
                  <div className="text-gray-300 text-xs sm:text-sm">Available</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Video Types Section */}
        <section className="py-16 sm:py-20 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
                Create Any Type of <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Video Content</span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
                From marketing videos to educational content, our AI adapts to your specific needs.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {videoTypes.map((type, index) => (
                <div key={index} 
                  className="group bg-slate-800/50 p-6 sm:p-8 rounded-xl border border-slate-700 hover:border-purple-500 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl hover:shadow-purple-500/20 overflow-hidden"
                >
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <type.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-white group-hover:text-purple-300 transition-colors">
                    {type.title}
                  </h3>
                  <p className="text-gray-400 mb-4 group-hover:text-gray-300 transition-colors text-sm sm:text-base">
                    {type.description}
                  </p>
                  <div className="space-y-1">
                    {type.examples.map((example, exampleIndex) => (
                      <div key={exampleIndex} className="text-xs text-gray-500 group-hover:text-gray-400 transition-colors">
                        • {example}
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
                Powerful <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Features</span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
                Everything you need to create professional videos with AI-powered intelligence.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              {features.map((feature, index) => (
                <div key={index} 
                  className="flex items-start space-x-4 p-4 sm:p-6 bg-slate-800/50 rounded-lg hover:bg-slate-700/50 transition-all duration-300 group hover:scale-105 hover:shadow-lg hover:shadow-purple-500/10"
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

        {/* Templates Section */}
        <section className="py-16 sm:py-20 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
                Professional <span className="bg-gradient-to-r from-pink-400 to-cyan-400 bg-clip-text text-transparent">Templates</span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
                Choose from our collection of professionally designed video templates.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {templates.map((template, index) => (
                <div key={index} 
                  className="group bg-slate-800/50 p-6 rounded-lg border border-slate-700 hover:border-pink-500 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-lg hover:shadow-pink-500/10"
                >
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-white group-hover:text-pink-300 transition-colors">
                      {template.name}
                    </h3>
                    <span className="text-sm text-gray-400">{template.duration}</span>
                  </div>
                  <p className="text-gray-400 text-sm mb-4 group-hover:text-gray-300 transition-colors">
                    Style: {template.style}
                  </p>
                  <div className="w-full h-32 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-lg flex items-center justify-center group-hover:from-purple-500/30 group-hover:to-pink-500/30 transition-all duration-300">
                    <VideoCameraIcon className="w-8 h-8 text-purple-400 group-hover:text-pink-400 transition-colors" />
                  </div>
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
                Simple <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Pricing</span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
                Choose the perfect plan for your video creation needs. All plans include our core AI features.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              {pricingPlans.map((plan, index) => (
                <div key={index} 
                  className={`relative bg-slate-800/50 p-6 sm:p-8 rounded-xl border transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl ${
                    plan.popular 
                      ? 'border-purple-500 shadow-purple-500/20' 
                      : 'border-slate-700 hover:border-purple-500 hover:shadow-purple-500/20'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
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
                        ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700'
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
        <section className="relative py-16 sm:py-20 bg-gradient-to-r from-purple-900/40 via-slate-900 to-pink-900/40 overflow-hidden">
          <div className="absolute top-10 left-10 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative z-10">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Start Creating Amazing Videos Today
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 mb-6 sm:mb-8">
              Join thousands of creators who are already producing professional videos with AI.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact"
                className="relative group bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 text-sm sm:text-base shadow-lg shadow-purple-500/25"
              >
                <span className="relative z-10 flex items-center">
                  Start Free Trial
                  <ArrowRightIcon className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
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

export default AIVideoGeneratorPage;