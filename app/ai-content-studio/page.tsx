'use client';
import React from 'react';
import { Palette, FileText, Image, Video, ArrowRight, CheckCircle, Clock, Users, TrendingUp, Zap } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';

const AIContentStudioPage: React.FC = () => {
  const features = [
    {
      icon: FileText,
      title: 'AI Writing Assistant',
      description: 'Generate high-quality content for blogs, social media, and marketing materials with AI-powered writing tools.'
    },
    {
      icon: Image,
      title: 'AI Image Generation',
      description: 'Create stunning visuals, graphics, and artwork using advanced AI image generation technology.'
    },
    {
      icon: Video,
      title: 'AI Video Creation',
      description: 'Produce professional videos with AI-generated scripts, voiceovers, and visual effects.'
    },
    {
      icon: Palette,
      title: 'Design Automation',
      description: 'Automate design tasks and create consistent brand assets with AI-powered design tools.'
    }
  ];

  const benefits = [
    'Create content 10x faster',
    'Reduce content production costs by 70%',
    'Maintain consistent brand voice',
    'Generate unlimited content variations',
    'Multi-language content support',
    'SEO-optimized content generation'
  ];

  const contentTypes = [
    {
      type: 'Blog Posts',
      description: 'AI-generated blog articles with SEO optimization and engaging content',
      icon: FileText,
      color: 'text-blue-400'
    },
    {
      type: 'Social Media',
      description: 'Platform-specific content for Instagram, Twitter, LinkedIn, and more',
      icon: Users,
      color: 'text-purple-400'
    },
    {
      type: 'Marketing Copy',
      description: 'Compelling ad copy, email campaigns, and landing page content',
      icon: TrendingUp,
      color: 'text-green-400'
    },
    {
      type: 'Visual Content',
      description: 'AI-generated images, infographics, and visual assets',
      icon: Image,
      color: 'text-pink-400'
    }
  ];

  return (
    <>
      <SEOOptimizer
        title="AI Content Studio - Zion Tech Group"
        description="Create content 10x faster with our AI Content Studio. Generate blogs, social media, videos, and visuals with AI-powered tools."
        keywords={['AI content creation', 'content studio', 'AI writing', 'content generation', 'AI video', 'AI images']}
        canonicalUrl="https://ziontechgroup.com/ai-content-studio"
      />
      <Navigation />
      
      {/* Hero Section */}
      <section className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center pt-20">
        <div className="container mx-auto px-4 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="inline-flex items-center space-x-2 bg-purple-500/20 text-purple-300 px-4 py-2 rounded-full text-sm">
                  <Palette className="w-4 h-4" />
                  <span>AI Content Studio</span>
                </div>
                <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight">
                  Create Content
                  <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent"> 10x Faster</span>
                </h1>
                <p className="text-xl text-gray-300 leading-relaxed">
                  Transform your content creation process with AI-powered tools. Generate blogs, social media posts, videos, and visuals in minutes, not hours.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="cyber-button inline-flex items-center justify-center px-8 py-4 text-lg">
                  <Zap className="w-5 h-5 mr-2" />
                  Start Creating
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button>
                <button className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400/10 px-8 py-4 rounded-lg transition-all duration-300 text-lg">
                  Try Free Demo
                </button>
              </div>

              <div className="grid grid-cols-3 gap-8 pt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyan-400">10x</div>
                  <div className="text-sm text-gray-400">Faster Creation</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400">70%</div>
                  <div className="text-sm text-gray-400">Cost Reduction</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-400">24/7</div>
                  <div className="text-sm text-gray-400">Content Generation</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-purple-500/20 to-cyan-500/20 rounded-2xl p-8 backdrop-blur-sm border border-cyan-500/30">
                <div className="space-y-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-white font-medium">Content Studio Active</span>
                  </div>
                  <div className="space-y-4">
                    <div className="bg-slate-800/50 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-cyan-400 text-sm">Blog Post</span>
                        <span className="text-green-400 text-sm">Generated</span>
                      </div>
                      <div className="text-gray-300 text-sm">
                        "10 AI Trends That Will Transform Your Business in 2024"
                      </div>
                    </div>
                    <div className="bg-slate-800/50 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-purple-400 text-sm">Social Media</span>
                        <span className="text-green-400 text-sm">Ready</span>
                      </div>
                      <div className="text-gray-300 text-sm">
                        "🚀 Discover how AI is revolutionizing content creation..."
                      </div>
                    </div>
                    <div className="bg-slate-800/50 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-pink-400 text-sm">Video Script</span>
                        <span className="text-yellow-400 text-sm">Processing</span>
                      </div>
                      <div className="w-full bg-slate-700 rounded-full h-2">
                        <div className="bg-gradient-to-r from-pink-400 to-orange-400 h-2 rounded-full w-3/5"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              Complete Content Creation Suite
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI Content Studio provides everything you need to create professional content across all platforms and formats.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-6 border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300 group">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Content Types Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              Create Any Type of Content
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From blog posts to social media content, our AI can generate any type of content you need for your business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contentTypes.map((content, index) => (
              <div key={index} className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-6 border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300 group">
                <div className={`w-12 h-12 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <content.icon className={`w-6 h-6 ${content.color}`} />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{content.type}</h3>
                <p className="text-gray-300">{content.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">
                Why Choose Our AI Content Studio?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Our AI Content Studio delivers measurable improvements in content creation speed, quality, and cost efficiency.
              </p>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                    <span className="text-gray-300 text-lg">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-purple-500/20 to-cyan-500/20 rounded-2xl p-8">
              <div className="space-y-6">
                <div className="text-center">
                  <div className="text-6xl font-bold text-cyan-400 mb-2">10x</div>
                  <div className="text-white text-xl">Faster Creation</div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-slate-800/50 rounded-lg">
                    <div className="text-2xl font-bold text-purple-400">70%</div>
                    <div className="text-sm text-gray-300">Cost Reduction</div>
                  </div>
                  <div className="text-center p-4 bg-slate-800/50 rounded-lg">
                    <div className="text-2xl font-bold text-green-400">24/7</div>
                    <div className="text-sm text-gray-300">Generation</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-2xl p-12 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Content Creation?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Start creating professional content 10x faster with our AI Content Studio. Try it free today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="cyber-button inline-flex items-center justify-center px-8 py-4 text-lg">
                <Clock className="w-5 h-5 mr-2" />
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400/10 px-8 py-4 rounded-lg transition-all duration-300 text-lg">
                Schedule Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default AIContentStudioPage;