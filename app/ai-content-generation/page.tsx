import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { CheckCircle, Star, ArrowRight, FileText, Image, Video, Music, Globe, Zap, Brain, Target, Users, Phone, Mail, MapPin } from 'lucide-react';

const AIContentGenerationPage: React.FC = () => {
  const features = [
    {
      icon: FileText,
      title: 'AI Blog Content Generator',
      description: 'Advanced AI-powered blog content creation with SEO optimization and brand voice consistency.',
      benefits: ['SEO-optimized content', 'Brand voice consistency', 'Multi-language support', 'Content calendar automation']
    },
    {
      icon: Image,
      title: 'Visual Content Creation',
      description: 'Generate stunning images, graphics, and visual content using AI-powered design tools.',
      benefits: ['AI image generation', 'Custom graphics', 'Brand consistency', 'High-quality output']
    },
    {
      icon: Video,
      title: 'Video Content Production',
      description: 'Create engaging video content with AI-powered editing, scripting, and production tools.',
      benefits: ['AI video editing', 'Script generation', 'Auto-captioning', 'Multi-format export']
    },
    {
      icon: Music,
      title: 'Audio Content Generation',
      description: 'Generate podcasts, voiceovers, and audio content with AI-powered voice synthesis.',
      benefits: ['Voice synthesis', 'Podcast generation', 'Audio editing', 'Multi-language support']
    },
    {
      icon: Globe,
      title: 'Multi-Platform Content',
      description: 'Create content optimized for different platforms and social media channels.',
      benefits: ['Platform optimization', 'Social media content', 'Cross-platform consistency', 'Audience targeting']
    },
    {
      icon: Brain,
      title: 'Smart Content Strategy',
      description: 'AI-powered content strategy and planning with data-driven insights and recommendations.',
      benefits: ['Content strategy', 'Data insights', 'Performance tracking', 'ROI optimization']
    }
  ];

  const benefits = [
    'Increase content production by 500%',
    'Reduce content creation costs by 70%',
    'Improve content quality and consistency',
    'Scale content across multiple platforms',
    'Automate content calendar management',
    'Enhance SEO performance',
    'Boost engagement rates',
    'Accelerate time-to-market'
  ];

  const useCases = [
    {
      title: 'Marketing Teams',
      description: 'Scale content production for marketing campaigns and brand awareness.',
      icon: Target
    },
    {
      title: 'Content Creators',
      description: 'Enhance creativity and productivity for individual content creators.',
      icon: Users
    },
    {
      title: 'E-commerce',
      description: 'Generate product descriptions, reviews, and marketing content at scale.',
      icon: Globe
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Content Generation - Zion Tech Group</title>
        <meta name="description" content="AI-powered content generation for blogs, videos, images, and more. Create high-quality content at scale with intelligent automation." />
        <meta name="keywords" content="AI content generation, content creation, blog writing, video production, image generation, content automation" />
      </Helmet>

      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-pink-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(236,72,153,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              AI Content
              <span className="block bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Generation
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Create high-quality content at scale with AI-powered generation tools. 
              From blogs to videos, images to audio - generate engaging content that resonates with your audience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-pink-600 hover:to-purple-700 transition-all duration-300">
                Get Started
              </button>
              <button className="border border-pink-400 text-pink-300 px-8 py-4 rounded-lg font-semibold hover:bg-pink-500 hover:text-white transition-all duration-300">
                View Demo
              </button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Content Generation Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our AI-powered content generation tools provide comprehensive solutions for all content types.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700 hover:border-pink-500 transition-all duration-300">
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-pink-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-pink-900/20 to-purple-900/20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Content Use Cases
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Perfect for teams and individuals who need to create content at scale.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {useCases.map((useCase, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700 hover:border-pink-500 transition-all duration-300 text-center">
                  <div className="text-4xl mb-4 mx-auto">{useCase.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-3">{useCase.title}</h3>
                  <p className="text-gray-300">{useCase.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Why Choose Our Content Generation?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Experience the power of AI-powered content generation that transforms your workflow.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3 p-4 bg-white/5 rounded-lg">
                  <CheckCircle className="w-6 h-6 text-pink-400 flex-shrink-0" />
                  <p className="text-white font-medium">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Generate Content?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join thousands of creators who are already using our AI Content Generation tools.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                  Start Creating
                </button>
                <button className="border border-pink-400 text-pink-400 hover:bg-pink-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                  Contact Sales
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default AIContentGenerationPage;