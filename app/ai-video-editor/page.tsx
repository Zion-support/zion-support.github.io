'use client';
import React from 'react';
import { Phone, CheckCircle, TrendingUp, Video, Play, Scissors, Palette, Zap } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';

const AIVideoEditorPage: React.FC = () => {
  const features = [
    'AI-Powered Auto-Editing',
    'Smart Cut Detection',
    'Automatic Color Correction',
    'Audio Enhancement & Sync',
    'Motion Tracking',
    'Background Removal',
    'Text-to-Video Generation',
    'Bulk Processing',
    'Template Library',
    'Real-time Preview',
    'Export in Multiple Formats',
    'Cloud-based Processing'
  ];

  const benefits = [
    '80% Faster Video Editing',
    'Professional Quality Output',
    'Bulk Video Processing',
    'No Technical Skills Required',
    'Consistent Brand Styling',
    'Automated Workflows',
    'Cost-effective Solution',
    'Scalable Processing',
    'Time-saving Automation',
    'High-quality Results'
  ];

  const useCases = [
    {
      title: 'Marketing Videos',
      description: 'Create engaging promotional content with AI-powered editing and effects',
      icon: '📢'
    },
    {
      title: 'Social Media',
      description: 'Generate platform-optimized content for Instagram, TikTok, and YouTube',
      icon: '📱'
    },
    {
      title: 'Training Content',
      description: 'Produce educational videos with automated editing and subtitles',
      icon: '🎓'
    },
    {
      title: 'E-commerce',
      description: 'Create product videos and demos with professional quality',
      icon: '🛍️'
    }
  ];

  return (
    <>
      <SEOOptimizer
        title="AI Video Editor - Zion Tech Group"
        description="Automated video editing with AI-powered content optimization and effects. 80% faster editing, professional quality, and bulk processing capabilities."
        keywords={['AI video editor', 'video editing', 'automated editing', 'video production', 'AI video tools', 'video automation']}
        canonicalUrl="https://ziontechgroup.com/ai-video-editor"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        <main className="container mx-auto px-4 py-16 pt-24">
          {/* Hero Section */}
          <section className="text-center mb-16">
            <div className="max-w-4xl mx-auto">
              <div className="text-6xl mb-6">🎬</div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text">
                AI Video Editor
              </h1>
              <p className="text-xl text-cyan-400 mb-8 font-medium">
                Automated video editing with AI-powered content optimization and effects
              </p>
              <p className="text-lg text-gray-300 mb-8 max-w-3xl mx-auto">
                Transform your video production workflow with our AI-powered video editor. 
                Create professional-quality videos 80% faster with automated editing, smart cuts, and intelligent effects.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="/contact"
                  className="cyber-button px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 hover:scale-105"
                >
                  Get Started - $79/month
                </a>
                <a
                  href="tel:+13024640950"
                  className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
                >
                  Call (302) 464-0950
                </a>
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">
              Advanced AI Video Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="cyber-card p-6 hover:scale-105 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <CheckCircle className="w-6 h-6 text-green-400 mr-3" />
                    <h3 className="text-lg font-semibold text-white">{feature}</h3>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Benefits Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">
              Proven Business Benefits
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="cyber-card p-8">
                <h3 className="text-2xl font-bold text-cyan-400 mb-6">Performance Metrics</h3>
                <div className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center">
                      <TrendingUp className="w-5 h-5 text-pink-400 mr-3" />
                      <span className="text-gray-300">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="cyber-card p-8">
                <h3 className="text-2xl font-bold text-purple-400 mb-6">Key Capabilities</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Video className="w-5 h-5 text-blue-400 mr-3 mt-1" />
                    <span className="text-gray-300">AI-powered scene detection and smart cuts</span>
                  </li>
                  <li className="flex items-start">
                    <Play className="w-5 h-5 text-green-400 mr-3 mt-1" />
                    <span className="text-gray-300">Real-time preview and instant rendering</span>
                  </li>
                  <li className="flex items-start">
                    <Scissors className="w-5 h-5 text-yellow-400 mr-3 mt-1" />
                    <span className="text-gray-300">Automated trimming and pacing optimization</span>
                  </li>
                  <li className="flex items-start">
                    <Palette className="w-5 h-5 text-red-400 mr-3 mt-1" />
                    <span className="text-gray-300">Intelligent color grading and enhancement</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Use Cases Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">
              Industry Applications
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {useCases.map((useCase, index) => (
                <div key={index} className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300">
                  <div className="text-4xl mb-4">{useCase.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-3">{useCase.title}</h3>
                  <p className="text-gray-300 text-sm">{useCase.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Pricing Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">
              Flexible Pricing Plans
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="cyber-card p-8 text-center">
                <h3 className="text-2xl font-bold text-white mb-4">Starter</h3>
                <div className="text-4xl font-bold text-cyan-400 mb-6">$79/month</div>
                <ul className="space-y-3 mb-8">
                  <li className="text-gray-300">Up to 10 hours of video processing</li>
                  <li className="text-gray-300">Basic AI editing features</li>
                  <li className="text-gray-300">HD export quality</li>
                  <li className="text-gray-300">Email support</li>
                </ul>
                <a href="/contact" className="cyber-button w-full py-3">Get Started</a>
              </div>
              
              <div className="cyber-card p-8 text-center ring-2 ring-cyan-400">
                <div className="bg-cyan-400 text-slate-900 px-3 py-1 rounded-full text-sm font-semibold mb-4 inline-block">
                  Most Popular
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Professional</h3>
                <div className="text-4xl font-bold text-cyan-400 mb-6">$199/month</div>
                <ul className="space-y-3 mb-8">
                  <li className="text-gray-300">Up to 50 hours of video processing</li>
                  <li className="text-gray-300">Advanced AI editing features</li>
                  <li className="text-gray-300">4K export quality</li>
                  <li className="text-gray-300">Bulk processing</li>
                  <li className="text-gray-300">Priority support</li>
                </ul>
                <a href="/contact" className="cyber-button w-full py-3">Get Started</a>
              </div>
              
              <div className="cyber-card p-8 text-center">
                <h3 className="text-2xl font-bold text-white mb-4">Enterprise</h3>
                <div className="text-4xl font-bold text-cyan-400 mb-6">Custom</div>
                <ul className="space-y-3 mb-8">
                  <li className="text-gray-300">Unlimited video processing</li>
                  <li className="text-gray-300">Premium AI features</li>
                  <li className="text-gray-300">8K export quality</li>
                  <li className="text-gray-300">Custom integrations</li>
                  <li className="text-gray-300">24/7 dedicated support</li>
                </ul>
                <a href="/contact" className="cyber-button w-full py-3">Contact Sales</a>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section className="text-center">
            <div className="bg-gradient-to-r from-indigo-900/50 to-purple-900/50 rounded-2xl p-8">
              <h2 className="text-3xl font-bold text-white mb-4">
                Ready to Transform Your Video Production?
              </h2>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                Get a free consultation and discover how our AI video editor can revolutionize your content creation workflow.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="/contact"
                  className="cyber-button px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 hover:scale-105"
                >
                  Get Free Consultation
                </a>
                <a
                  href="tel:+13024640950"
                  className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
                >
                  Call (302) 464-0950
                </a>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default AIVideoEditorPage;
