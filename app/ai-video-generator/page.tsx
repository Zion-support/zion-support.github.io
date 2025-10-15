'use client';
import React, { useState } from 'react';
import SEOHead from '../components/SEOHead';
import { 
  VideoCameraIcon, 
  CheckCircleIcon, 
  ArrowRightIcon,
  SparklesIcon,
  CpuChipIcon,
  PhotoIcon,
  RocketLaunchIcon,
  ShieldCheckIcon,
  ClockIcon,
  CurrencyDollarIcon,
  StarIcon,
  UserGroupIcon,
  ChartBarIcon,
  MicrophoneIcon,
  DocumentTextIcon,
  PlayIcon
} from '@heroicons/react/24/outline';

const AIVideoGeneratorPage: React.FC = () => {
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedVideo, setGeneratedVideo] = useState('');

  const features = [
    {
      icon: CpuChipIcon,
      title: 'AI-Powered Video Creation',
      description: 'Generate professional videos from text prompts using advanced AI',
      benefits: ['Text-to-video', 'Scene generation', 'Character animation', 'Voice synthesis']
    },
    {
      icon: PhotoIcon,
      title: 'Image-to-Video',
      description: 'Transform static images into dynamic video content',
      benefits: ['Motion effects', 'Transitions', 'Animation', 'Depth mapping']
    },
    {
      icon: MicrophoneIcon,
      title: 'Voice & Audio',
      description: 'Add realistic voiceovers and background music',
      benefits: ['Text-to-speech', 'Voice cloning', 'Music generation', 'Audio mixing']
    },
    {
      icon: RocketLaunchIcon,
      title: 'Templates & Styles',
      description: 'Choose from hundreds of professional templates',
      benefits: ['Industry-specific', 'Customizable', 'Brand integration', 'Trending styles']
    }
  ];

  const videoTypes = [
    {
      name: 'Marketing Videos',
      description: 'Create compelling promotional content',
      duration: '15-60 seconds',
      price: '$29/video'
    },
    {
      name: 'Educational Content',
      description: 'Transform lessons into engaging videos',
      duration: '2-10 minutes',
      price: '$49/video'
    },
    {
      name: 'Social Media',
      description: 'Perfect for Instagram, TikTok, YouTube',
      duration: '15-60 seconds',
      price: '$19/video'
    },
    {
      name: 'Product Demos',
      description: 'Showcase your products effectively',
      duration: '1-5 minutes',
      price: '$79/video'
    },
    {
      name: 'Explainer Videos',
      description: 'Simplify complex concepts',
      duration: '1-3 minutes',
      price: '$59/video'
    },
    {
      name: 'Training Videos',
      description: 'Create employee training content',
      duration: '5-30 minutes',
      price: '$99/video'
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$39',
      period: '/month',
      description: 'Perfect for individuals',
      features: [
        '5 videos/month',
        '1080p quality',
        'Basic templates',
        'Standard voice',
        'Email support',
        'Watermark included'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$99',
      period: '/month',
      description: 'Ideal for businesses',
      features: [
        '25 videos/month',
        '4K quality',
        'Premium templates',
        'Custom voice',
        'Priority support',
        'No watermark',
        'Brand integration',
        'API access'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$299',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Unlimited videos',
        '8K quality',
        'All templates',
        'Voice cloning',
        '24/7 support',
        'White-label',
        'Custom integrations',
        'Dedicated account manager'
      ],
      popular: false
    }
  ];

  const handleVideoGeneration = async () => {
    setIsGenerating(true);
    // Simulate AI video generation
    setTimeout(() => {
      setGeneratedVideo('https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4');
      setIsGenerating(false);
    }, 5000);
  };

  return (
    <>
      <SEOHead 
        title="AI Video Generator - Zion Tech Group"
        description="Create professional videos from text prompts using AI. Generate marketing videos, educational content, and social media videos with our advanced AI video generator."
        keywords="AI video generator, video creation, text to video, video marketing, AI video maker, automated video"
      />
      
      <div className="min-h-screen bg-slate-900 text-white">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 lg:py-32">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-slate-900 to-pink-900/30"></div>
          <div className="absolute inset-0 cyber-grid opacity-20"></div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mb-8 neon-glow">
                <VideoCameraIcon className="w-10 h-10 text-white" />
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 holographic">
                AI Video Generator
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Create professional videos from text prompts using advanced AI. Generate marketing videos, educational content, and social media videos in minutes.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={handleVideoGeneration}
                  disabled={isGenerating}
                  className="cyber-button px-8 py-4 text-lg disabled:opacity-50"
                >
                  {isGenerating ? 'Generating Video...' : 'Try Free Demo'}
                  <ArrowRightIcon className="w-5 h-5 ml-2" />
                </button>
                <button className="border-2 border-purple-400 text-purple-300 px-8 py-4 rounded-lg font-semibold hover:bg-purple-400 hover:text-white transition-all duration-300">
                  View Pricing
                </button>
              </div>
            </div>

            {/* Live Video Generation Demo */}
            <div className="max-w-4xl mx-auto mb-16">
              <div className="holographic-card p-8">
                <h3 className="text-2xl font-bold mb-6 text-center">Live Video Generation Demo</h3>
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Video Prompt</label>
                    <textarea
                      className="w-full h-32 p-4 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-gray-400"
                      placeholder="Describe the video you want to create..."
                      defaultValue="Create a 30-second marketing video for a tech startup showcasing their AI-powered mobile app with modern animations and upbeat music"
                    />
                  </div>
                  <div className="text-center">
                    {generatedVideo ? (
                      <div className="space-y-4">
                        <video 
                          controls 
                          className="w-full max-w-2xl mx-auto rounded-lg"
                          poster="/api/placeholder/800/450"
                        >
                          <source src={generatedVideo} type="video/mp4" />
                          Your browser does not support the video tag.
                        </video>
                        <p className="text-green-400">Video generated successfully!</p>
                      </div>
                    ) : (
                      <div className="w-full h-64 bg-slate-800 border border-slate-600 rounded-lg flex items-center justify-center">
                        <div className="text-center">
                          <PlayIcon className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                          <p className="text-gray-400">Click "Try Free Demo" to generate video</p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                Powerful <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Features</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Everything you need to create professional videos with AI-powered precision.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="holographic-card p-6 hover:scale-105 transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-gray-400 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-center text-sm text-gray-300">
                        <CheckCircleIcon className="w-4 h-4 text-green-400 mr-2" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Video Types Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                Create Any Type of <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Video</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                From marketing videos to educational content, our AI can create any type of video you need.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {videoTypes.map((type, index) => (
                <div key={index} className="holographic-card p-6 hover:scale-105 transition-all duration-300">
                  <h3 className="text-xl font-bold mb-3">{type.name}</h3>
                  <p className="text-gray-400 mb-4">{type.description}</p>
                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-300">Duration:</span>
                      <span className="text-purple-400">{type.duration}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-300">Price:</span>
                      <span className="text-green-400 font-semibold">{type.price}</span>
                    </div>
                  </div>
                  <button className="w-full py-2 border border-purple-400 text-purple-300 rounded-lg hover:bg-purple-400 hover:text-white transition-all duration-300">
                    Create Now
                  </button>
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
                Simple <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Pricing</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the perfect plan for your video creation needs. All plans include our core AI features.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`holographic-card p-8 relative ${plan.popular ? 'ring-2 ring-purple-500' : ''}`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                    <p className="text-gray-400 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold">{plan.price}</span>
                      <span className="text-gray-400 ml-1">{plan.period}</span>
                    </div>
                  </div>
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center">
                        <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular 
                      ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600' 
                      : 'border-2 border-purple-400 text-purple-300 hover:bg-purple-400 hover:text-white'
                  }`}>
                    Get Started
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                Trusted by <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Creators</span>
              </h2>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-400 mb-2">100K+</div>
                <div className="text-gray-300">Videos Created</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-pink-400 mb-2">50K+</div>
                <div className="text-gray-300">Active Users</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-green-400 mb-2">95%</div>
                <div className="text-gray-300">Satisfaction Rate</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-yellow-400 mb-2">24/7</div>
                <div className="text-gray-300">Support Available</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-purple-900/40 via-slate-900 to-pink-900/40">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Start Creating Amazing Videos
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of creators who are already using AI to produce professional videos in minutes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="cyber-button px-8 py-4 text-lg">
                Start Free Trial
                <ArrowRightIcon className="w-5 h-5 ml-2" />
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 rounded-lg font-semibold transition-all duration-300">
                Schedule Demo
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AIVideoGeneratorPage;