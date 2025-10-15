'use client';
import React from 'react';
import SEOHead from '../components/SEOHead';
import { 
  VideoCameraIcon, 
  PlayIcon, 
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

const AIVideoGeneratorProPage: React.FC = () => {
  const features = [
    {
      icon: VideoCameraIcon,
      title: 'AI Video Generation',
      description: 'Create professional videos from text prompts with advanced AI video generation technology.',
      price: '$79/mo'
    },
    {
      icon: PlayIcon,
      title: 'Real-time Preview',
      description: 'Preview and edit your videos in real-time with instant rendering capabilities.',
      price: '$49/mo'
    },
    {
      icon: SparklesIcon,
      title: 'Style Transfer',
      description: 'Apply artistic styles and effects to your videos with AI-powered style transfer.',
      price: '$59/mo'
    },
    {
      icon: DocumentTextIcon,
      title: 'Script to Video',
      description: 'Convert written scripts into engaging videos with automated scene generation.',
      price: '$69/mo'
    },
    {
      icon: EyeIcon,
      title: 'Face Animation',
      description: 'Create realistic face animations and lip-sync from audio files.',
      price: '$89/mo'
    },
    {
      icon: CloudIcon,
      title: 'Cloud Rendering',
      description: 'High-performance cloud rendering for complex video projects.',
      price: '$39/mo'
    }
  ];

  const pricingPlans = [
    {
      name: 'Creator',
      price: '$49',
      period: '/month',
      description: 'Perfect for content creators and small businesses',
      features: [
        '5 Minutes Video/Month',
        'Basic AI Models',
        'Standard Resolution',
        'Email Support',
        'Basic Templates',
        'Watermark Included'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$149',
      period: '/month',
      description: 'Ideal for marketing agencies and video professionals',
      features: [
        'Everything in Creator',
        '30 Minutes Video/Month',
        'Advanced AI Models',
        '4K Resolution',
        'Priority Support',
        'No Watermark',
        'Custom Branding',
        'Team Collaboration (5 users)',
        'Advanced Templates'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$399',
      period: '/month',
      description: 'For large organizations with high-volume needs',
      features: [
        'Everything in Professional',
        'Unlimited Video Length',
        'Premium AI Models',
        '8K Resolution',
        'Dedicated Account Manager',
        'Custom AI Training',
        'API Access',
        'White-label Solution',
        'Unlimited Team Members',
        '24/7 Support'
      ],
      popular: false
    }
  ];

  const benefits = [
    'Create professional videos 10x faster',
    'Reduce video production costs by 80%',
    'Generate unlimited video variations',
    'No technical skills required',
    'Support for 50+ languages',
    'Export to all major video formats'
  ];

  return (
    <>
      <SEOHead 
        title="AI Video Generator Pro - Zion Tech Group"
        description="Advanced AI-powered video generation tool with real-time preview, style transfer, and automated scene creation. Create professional videos from text prompts!"
        keywords="AI video generator, video creation, automated video, AI video editing, video production, content creation"
      />
      
      <div className="min-h-screen bg-slate-900 text-white">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 lg:py-32">
          <div className="absolute inset-0 bg-gradient-to-br from-pink-900/30 via-slate-900 to-purple-900/30"></div>
          <div className="absolute inset-0 opacity-30" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="inline-flex items-center bg-pink-500/10 rounded-full px-4 py-2 mb-6">
                <VideoCameraIcon className="w-5 h-5 text-pink-400 mr-2" />
                <span className="text-pink-300 text-sm font-medium">AI Video Generator Pro</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                  AI Video Generator Pro
                </span>
              </h1>
              
              <p className="text-lg sm:text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Revolutionize your video content creation with AI-powered video generation, real-time editing, 
                and automated scene creation. Create professional videos from simple text prompts.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <button className="bg-gradient-to-r from-pink-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-pink-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-pink-500/25">
                  Start Free Trial
                </button>
                <button className="border-2 border-pink-400 text-pink-300 px-8 py-4 rounded-lg font-semibold hover:bg-pink-400 hover:text-white transition-all duration-300">
                  Watch Demo
                </button>
              </div>
              
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
                <div className="text-center">
                  <div className="text-3xl font-bold text-pink-400 mb-2">10x</div>
                  <div className="text-gray-300 text-sm">Faster Creation</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-pink-400 mb-2">80%</div>
                  <div className="text-gray-300 text-sm">Cost Reduction</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-pink-400 mb-2">50+</div>
                  <div className="text-gray-300 text-sm">Languages Supported</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-pink-400 mb-2">4K</div>
                  <div className="text-gray-300 text-sm">Video Quality</div>
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
                Why Choose <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">AI Video Generator Pro</span>?
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
                Transform your video content creation with AI-powered automation and intelligent features.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-4 p-6 bg-slate-800/50 rounded-lg hover:bg-slate-700/50 transition-all duration-300 group">
                  <CheckCircleIcon className="w-6 h-6 text-pink-400 flex-shrink-0 mt-1 group-hover:scale-110 transition-transform" />
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
                Powerful <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">Features</span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
                Everything you need to create professional videos with AI-powered intelligence.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="group bg-slate-800/50 p-8 rounded-xl border border-slate-700 hover:border-pink-500 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl hover:shadow-pink-500/20">
                  <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-500 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-pink-300 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 mb-4 group-hover:text-gray-300 transition-colors">
                    {feature.description}
                  </p>
                  <div className="text-2xl font-bold text-pink-400">
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
                Choose Your <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">Plan</span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
                Flexible pricing plans designed to scale with your video creation needs.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`relative bg-slate-800/50 p-8 rounded-xl border transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl ${
                  plan.popular 
                    ? 'border-pink-500 shadow-pink-500/20' 
                    : 'border-slate-700 hover:border-pink-500'
                }`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-pink-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-400 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-5xl font-bold text-pink-400">{plan.price}</span>
                      <span className="text-gray-400 ml-2">{plan.period}</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircleIcon className="w-5 h-5 text-pink-400 mr-3 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-pink-600 to-purple-600 text-white hover:from-pink-700 hover:to-purple-700'
                      : 'border-2 border-pink-400 text-pink-300 hover:bg-pink-400 hover:text-white'
                  }`}>
                    {plan.popular ? 'Start Free Trial' : 'Get Started'}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-pink-900/40 via-slate-900 to-purple-900/40">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
              Ready to Create Amazing Videos?
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 mb-8">
              Join thousands of creators already using AI Video Generator Pro to produce professional content.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-pink-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-pink-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
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

export default AIVideoGeneratorProPage;