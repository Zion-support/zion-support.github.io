'use client';
import React, { useState } from 'react';
import SEOHead from '../components/SEOHead';
import { 
  VideoCameraIcon, 
  CheckCircleIcon, 
  ArrowRightIcon,
  SparklesIcon,
  PlayIcon,
  PauseIcon,
  PhotoIcon,
  MusicalNoteIcon
} from '@heroicons/react/24/outline';

const AIVideoGeneratorPage: React.FC = () => {
  const [prompt, setPrompt] = useState('');
  const [generatedVideo, setGeneratedVideo] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [videoDuration, setVideoDuration] = useState('10');

  const features = [
    'AI-powered video generation from text prompts',
    'Multiple video styles and themes',
    'HD and 4K video output',
    'Custom voice synthesis',
    'Background music generation',
    'Text-to-speech integration',
    'Video editing and effects',
    'Batch video processing',
    'Social media optimization',
    'Commercial usage rights'
  ];

  const videoStyles = [
    { name: 'Realistic', description: 'Photorealistic videos', icon: '🎬' },
    { name: 'Animated', description: '2D/3D animations', icon: '🎨' },
    { name: 'Documentary', description: 'Professional documentary style', icon: '📹' },
    { name: 'Cinematic', description: 'Hollywood-style production', icon: '🎭' },
    { name: 'Educational', description: 'Explainer and tutorial videos', icon: '📚' },
    { name: 'Marketing', description: 'Promotional and ad videos', icon: '📢' }
  ];

  const pricingPlans = [
    {
      name: 'Creator',
      price: '$49',
      period: '/month',
      description: 'Perfect for content creators',
      features: [
        '10 videos/month (up to 60 seconds)',
        'HD quality output',
        'Basic video styles',
        'Text-to-speech',
        'Email support',
        'Commercial license'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$149',
      period: '/month',
      description: 'For professional video creators',
      features: [
        '50 videos/month (up to 5 minutes)',
        '4K quality output',
        'All video styles',
        'Custom voice synthesis',
        'Priority support',
        'API access',
        'Advanced editing tools'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$499',
      period: '/month',
      description: 'For agencies and large teams',
      features: [
        'Unlimited videos',
        'All quality options',
        'Custom AI training',
        '24/7 dedicated support',
        'White-label options',
        'Team collaboration',
        'SLA guarantee'
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
    }, 3000);
  };

  return (
    <>
      <SEOHead 
        title="AI Video Generator - Zion Tech Group"
        description="Create stunning videos from text prompts with our AI Video Generator. Generate HD and 4K videos with custom voice synthesis, music, and effects for any purpose."
        keywords="AI video generator, video creation, text to video, AI video, video automation, content creation, video marketing"
      />
      
      <div className="min-h-screen bg-slate-900 text-white">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 lg:py-32">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-slate-900 to-pink-900/30"></div>
          <div className="absolute inset-0 cyber-grid opacity-20"></div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl mb-8 neon-glow">
                <VideoCameraIcon className="w-10 h-10 text-white" />
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 holographic">
                AI Video Generator
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Transform your ideas into stunning videos with our AI Video Generator. 
                Create professional-quality videos from simple text prompts in minutes.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={handleVideoGeneration}
                  disabled={!prompt.trim() || isGenerating}
                  className="cyber-button px-8 py-4 text-lg disabled:opacity-50"
                >
                  {isGenerating ? 'Generating Video...' : 'Generate Video'}
                </button>
                <a href="#pricing" className="border-2 border-purple-400 text-purple-300 px-8 py-4 rounded-lg font-semibold hover:bg-purple-400 hover:text-white transition-all duration-300">
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
                  Create Your AI Video
                </h2>
                <p className="text-gray-300 mb-8">
                  Describe your video idea and let our AI create a professional video for you.
                </p>
                
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Video Description:
                    </label>
                    <textarea
                      value={prompt}
                      onChange={(e) => setPrompt(e.target.value)}
                      placeholder="e.g., A professional explainer video about AI technology with smooth animations and modern graphics..."
                      className="w-full h-32 px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Video Duration (seconds):
                    </label>
                    <select
                      value={videoDuration}
                      onChange={(e) => setVideoDuration(e.target.value)}
                      className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
                    >
                      <option value="10">10 seconds</option>
                      <option value="30">30 seconds</option>
                      <option value="60">1 minute</option>
                      <option value="120">2 minutes</option>
                      <option value="300">5 minutes</option>
                    </select>
                  </div>
                  
                  <button
                    onClick={handleVideoGeneration}
                    disabled={!prompt.trim() || isGenerating}
                    className="w-full cyber-button py-3 disabled:opacity-50"
                  >
                    {isGenerating ? (
                      <div className="flex items-center justify-center">
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        Generating Video...
                      </div>
                    ) : (
                      'Generate Video with AI'
                    )}
                  </button>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-4 text-gradient">Generated Video:</h3>
                <div className="bg-slate-800 rounded-lg p-6 h-64 flex items-center justify-center">
                  {generatedVideo ? (
                    <video 
                      controls 
                      className="w-full h-full rounded-lg"
                      poster="https://via.placeholder.com/640x360/4f46e5/ffffff?text=AI+Generated+Video"
                    >
                      <source src={generatedVideo} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  ) : (
                    <div className="text-center text-gray-400">
                      <VideoCameraIcon className="w-16 h-16 mx-auto mb-4 opacity-50" />
                      <p>Your AI-generated video will appear here...</p>
                    </div>
                  )}
                </div>
                
                <div className="mt-6 grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-slate-700 rounded-lg">
                    <PhotoIcon className="w-8 h-8 text-purple-400 mx-auto mb-2" />
                    <p className="text-sm text-gray-300">Image Generation</p>
                  </div>
                  <div className="text-center p-4 bg-slate-700 rounded-lg">
                    <MusicalNoteIcon className="w-8 h-8 text-pink-400 mx-auto mb-2" />
                    <p className="text-sm text-gray-300">Music Generation</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Video Styles Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Video <span className="text-gradient">Styles</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose from a variety of professional video styles to match your content needs.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {videoStyles.map((style, index) => (
                <div key={index} className="holographic-card p-6 hover:scale-105 transition-all duration-300">
                  <div className="text-center">
                    <div className="text-4xl mb-4">{style.icon}</div>
                    <h3 className="text-xl font-semibold text-white mb-2">{style.name}</h3>
                    <p className="text-gray-300">{style.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Powerful <span className="text-gradient">Features</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our AI Video Generator comes packed with advanced features for professional video creation.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="holographic-card p-6 hover:scale-105 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <CheckCircleIcon className="w-6 h-6 text-purple-400 mr-3" />
                    <h3 className="text-lg font-semibold text-white">{feature}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Choose Your <span className="text-gradient">Plan</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Select the perfect plan for your video creation needs. All plans include our core AI features.
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
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-purple-400">{plan.price}</span>
                      <span className="text-gray-400 ml-1">{plan.period}</span>
                    </div>
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
                      ? 'cyber-button' 
                      : 'border-2 border-gray-600 text-gray-300 hover:border-purple-500 hover:text-purple-300'
                  }`}>
                    Get Started
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-purple-900/40 via-slate-900 to-pink-900/40">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-gradient">
              Ready to Create Amazing Videos?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of creators who are already using our AI Video Generator to produce professional content.
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

export default AIVideoGeneratorPage;