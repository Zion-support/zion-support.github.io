'use client';
import React, { useState } from 'react';
import SEOHead from '../components/SEOHead';
import { 
  VideoCameraIcon, 
  SparklesIcon, 
  CheckCircleIcon, 
  ArrowRightIcon,
  CpuChipIcon,
  ClockIcon,
  ShieldCheckIcon,
  PhotoIcon,
  SpeakerWaveIcon,
  PlayIcon,
  PauseIcon
} from '@heroicons/react/24/outline';

const AIVideoGeneratorPage: React.FC = () => {
  const [prompt, setPrompt] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedVideo, setGeneratedVideo] = useState('');
  const [videoDuration, setVideoDuration] = useState('10');

  const features = [
    {
      icon: CpuChipIcon,
      title: 'AI Video Generation',
      description: 'Generate high-quality videos from text prompts using advanced AI models',
      price: 'Included'
    },
    {
      icon: PhotoIcon,
      title: 'Image to Video',
      description: 'Transform static images into dynamic video content with AI animation',
      price: 'Included'
    },
    {
      icon: SpeakerWaveIcon,
      title: 'Voice Synthesis',
      description: 'Add realistic voiceovers and narration to your generated videos',
      price: 'Included'
    },
    {
      icon: ClockIcon,
      title: 'Real-time Generation',
      description: 'Generate videos in minutes, not hours, with our optimized AI pipeline',
      price: 'Included'
    }
  ];

  const pricingPlans = [
    {
      name: 'Creator',
      price: '$39',
      period: '/month',
      description: 'Perfect for content creators',
      features: [
        '10 videos/month',
        'Up to 30 seconds each',
        'HD quality (1080p)',
        'Basic templates',
        'Email support',
        'Watermark included'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$99',
      period: '/month',
      description: 'Ideal for professionals',
      features: [
        '50 videos/month',
        'Up to 2 minutes each',
        '4K quality (2160p)',
        'Premium templates',
        'Voice synthesis',
        'Priority support',
        'No watermark',
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
        'Up to 10 minutes each',
        '8K quality (4320p)',
        'Custom templates',
        'Advanced voice synthesis',
        '24/7 dedicated support',
        'White-label solution',
        'Custom AI training',
        'SLA guarantee'
      ],
      popular: false
    }
  ];

  const videoTemplates = [
    {
      name: 'Explainer Video',
      description: 'Perfect for product demos and tutorials',
      duration: '30s',
      style: 'Modern, clean, professional'
    },
    {
      name: 'Social Media Ad',
      description: 'Eye-catching videos for social platforms',
      duration: '15s',
      style: 'Dynamic, colorful, engaging'
    },
    {
      name: 'Presentation Video',
      description: 'Professional presentations and pitches',
      duration: '60s',
      style: 'Corporate, sleek, informative'
    },
    {
      name: 'Story Video',
      description: 'Narrative-driven content for storytelling',
      duration: '90s',
      style: 'Cinematic, emotional, compelling'
    }
  ];

  const handleVideoGeneration = async () => {
    if (!prompt.trim()) return;
    
    setIsGenerating(true);
    // Simulate AI video generation
    setTimeout(() => {
      setGeneratedVideo('https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4');
      setIsGenerating(false);
    }, 3000);
  };

  return (
    <>
      <SEOHead 
        title="AI Video Generator - Zion Tech Group"
        description="Create stunning videos from text prompts using advanced AI. Generate professional-quality videos in minutes with our AI video generation platform."
        keywords="AI video generator, video creation, AI video, automated video, video marketing, content creation"
      />
      
      <div className="min-h-screen bg-slate-900 text-white">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 lg:py-32">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-slate-900 to-pink-900/30"></div>
          <div className="absolute inset-0 cyber-grid"></div>
          
          {/* Animated Background Elements */}
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 mb-8">
                <VideoCameraIcon className="w-5 h-5 text-purple-400 mr-2" />
                <span className="text-purple-400 font-medium">AI Video Generation</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6">
                <span className="animated-gradient-text">AI Video Generator</span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
                Create stunning, professional-quality videos from simple text prompts. 
                Our AI generates videos in minutes, not hours, with advanced visual effects and voice synthesis.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <button 
                  onClick={handleVideoGeneration}
                  disabled={isGenerating || !prompt.trim()}
                  className="cyber-button text-lg px-8 py-4 disabled:opacity-50"
                >
                  {isGenerating ? 'Generating Video...' : 'Generate Video Now'}
                </button>
                <button className="border-2 border-purple-400 text-purple-300 px-8 py-4 rounded-lg font-semibold hover:bg-purple-400 hover:text-white transition-all duration-300">
                  View Templates
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Live Video Generation Demo */}
        <section className="py-20 bg-slate-800/30">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                Live <span className="animated-gradient-text">Video Generation</span> Demo
              </h2>
              <p className="text-xl text-gray-300">
                Experience AI video generation in real-time
              </p>
            </div>
            
            <div className="holographic-card p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Input Section */}
                <div>
                  <div className="mb-6">
                    <label className="block text-sm font-medium mb-2">Video Prompt</label>
                    <textarea
                      value={prompt}
                      onChange={(e) => setPrompt(e.target.value)}
                      placeholder="Describe the video you want to create... (e.g., 'A futuristic city with flying cars and neon lights at night')"
                      className="w-full h-32 p-4 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 resize-none"
                    />
                  </div>
                  
                  <div className="mb-6">
                    <label className="block text-sm font-medium mb-2">Video Duration</label>
                    <select
                      value={videoDuration}
                      onChange={(e) => setVideoDuration(e.target.value)}
                      className="w-full p-3 bg-slate-800 border border-slate-600 rounded-lg text-white focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
                    >
                      <option value="10">10 seconds</option>
                      <option value="30">30 seconds</option>
                      <option value="60">1 minute</option>
                      <option value="120">2 minutes</option>
                    </select>
                  </div>
                  
                  <button
                    onClick={handleVideoGeneration}
                    disabled={isTranslating || !prompt.trim()}
                    className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white py-3 rounded-lg font-semibold transition-all duration-300 disabled:opacity-50 flex items-center justify-center"
                  >
                    {isGenerating ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        Generating Video...
                      </>
                    ) : (
                      <>
                        <SparklesIcon className="w-5 h-5 mr-2" />
                        Generate Video
                      </>
                    )}
                  </button>
                </div>
                
                {/* Output Section */}
                <div>
                  <label className="block text-sm font-medium mb-2">Generated Video</label>
                  <div className="w-full h-64 bg-slate-800 border border-slate-600 rounded-lg flex items-center justify-center">
                    {generatedVideo ? (
                      <video
                        controls
                        className="w-full h-full rounded-lg"
                        poster="https://via.placeholder.com/640x360/1a1a1a/ffffff?text=Generated+Video"
                      >
                        <source src={generatedVideo} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    ) : (
                      <div className="text-center text-gray-400">
                        <VideoCameraIcon className="w-16 h-16 mx-auto mb-4 opacity-50" />
                        <p>Generated video will appear here</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Video Templates */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                Video <span className="animated-gradient-text">Templates</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose from our professionally designed video templates
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {videoTemplates.map((template, index) => (
                <div key={index} className="holographic-card p-6 group hover:scale-105 transition-all duration-300">
                  <div className="w-full h-32 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-lg mb-4 flex items-center justify-center">
                    <PlayIcon className="w-12 h-12 text-purple-400" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-white group-hover:text-purple-300 transition-colors">
                    {template.name}
                  </h3>
                  <p className="text-gray-400 mb-3 group-hover:text-gray-300 transition-colors">
                    {template.description}
                  </p>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-purple-400 font-semibold">{template.duration}</span>
                    <span className="text-gray-500">{template.style}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                Powerful <span className="animated-gradient-text">Features</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Everything you need to create professional videos with AI
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="holographic-card p-6 group hover:scale-105 transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white group-hover:text-purple-300 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 mb-4 group-hover:text-gray-300 transition-colors">
                    {feature.description}
                  </p>
                  <span className="text-purple-400 font-semibold">{feature.price}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                Simple <span className="animated-gradient-text">Pricing</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the perfect plan for your video creation needs
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
                    <div className="flex items-baseline justify-center mb-2">
                      <span className="text-4xl font-bold">{plan.price}</span>
                      <span className="text-gray-400 ml-1">{plan.period}</span>
                    </div>
                    <p className="text-gray-400">{plan.description}</p>
                  </div>
                  
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircleIcon className="w-5 h-5 text-purple-400 mr-3 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <button className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular 
                      ? 'bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white' 
                      : 'border-2 border-purple-400 text-purple-300 hover:bg-purple-400 hover:text-white'
                  }`}>
                    Get Started
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-purple-900/40 via-slate-900 to-pink-900/40">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Ready to <span className="animated-gradient-text">Create</span> Amazing Videos?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of creators who are already using AI to produce professional videos.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="cyber-button text-lg px-8 py-4">
                Start Creating Videos
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

export default AIVideoGeneratorPage;