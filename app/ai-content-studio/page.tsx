'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { CheckCircle, ArrowRight, Palette, Image, Video, FileText, Users, Zap, Target, BarChart } from 'lucide-react';

const AIContentStudioPage: React.FC = () => {
  const features = [
    {
      icon: Palette,
      title: 'AI Design Tools',
      description: 'Advanced AI-powered design tools for creating stunning visual content.',
      benefits: ['Auto-design generation', 'Brand consistency', 'Template library', 'Custom graphics']
    },
    {
      icon: Image,
      title: 'Image Generation',
      description: 'Create high-quality images and graphics using AI-powered generation tools.',
      benefits: ['AI image creation', 'Style transfer', 'Background removal', 'Image enhancement']
    },
    {
      icon: Video,
      title: 'Video Production',
      description: 'AI-powered video creation and editing tools for professional content.',
      benefits: ['Video generation', 'Auto-editing', 'Motion graphics', 'Multi-format export']
    },
    {
      icon: FileText,
      title: 'Content Writing',
      description: 'AI-powered content writing tools for blogs, social media, and marketing.',
      benefits: ['Content generation', 'SEO optimization', 'Tone adjustment', 'Multi-language support']
    },
    {
      icon: Users,
      title: 'Team Collaboration',
      description: 'Collaborative features for teams to work together on content projects.',
      benefits: ['Real-time collaboration', 'Version control', 'Comment system', 'Approval workflows']
    },
    {
      icon: Zap,
      title: 'Workflow Automation',
      description: 'Automate content creation workflows and publishing processes.',
      benefits: ['Automated workflows', 'Content scheduling', 'Multi-platform publishing', 'Analytics tracking']
    }
  ];

  const benefits = [
    'Increase content production by 300%',
    'Reduce content creation time by 80%',
    'Improve content quality and consistency',
    'Automate content workflows',
    'Scale content across channels',
    'Enhance content quality'
  ];

  const useCases = [
    {
      title: 'Marketing Teams',
      description: 'Create compelling marketing content and campaigns',
      icon: '📢'
    },
    {
      title: 'Social Media',
      description: 'Generate engaging social media posts and stories',
      icon: '📱'
    },
    {
      title: 'Blog Content',
      description: 'Create SEO-optimized blog posts and articles',
      icon: '📝'
    },
    {
      title: 'E-commerce',
      description: 'Generate product descriptions and marketing materials',
      icon: '🛍️'
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Content Studio - Zion Tech Group</title>
        <meta name="description" content="AI-powered content studio for creating stunning visual and written content. Advanced design tools, content generation, and collaboration features." />
        <meta name="keywords" content="AI content studio, content creation, design tools, video production, content generation, team collaboration" />
      </Helmet>

      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-rose-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(244,63,94,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              AI Content
              <span className="block bg-gradient-to-r from-rose-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
                Studio
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Create stunning content with our AI Content Studio. Advanced design tools, content generation, and collaboration features for better content creation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-rose-500 to-pink-600 hover:from-rose-600 hover:to-pink-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-rose-500/25">
                Start Creating
              </button>
              <button className="border border-rose-400 text-rose-400 hover:bg-rose-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
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
                Key Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Advanced AI capabilities for comprehensive content creation
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group">
                  <div className="w-16 h-16 bg-gradient-to-br from-rose-500 to-pink-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  {feature.benefits && (
                    <ul className="space-y-2">
                      {feature.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-400">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  )}
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
                Why Choose Our Content Studio?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Proven results that enhance your content creation capabilities
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform mx-auto">
                    <CheckCircle className="w-8 h-8 text-white" />
                  </div>
                  <p className="text-lg text-white font-medium">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Use Cases
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Perfect for teams and individuals across all industries
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {useCases.map((useCase, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group text-center">
                  <div className="text-4xl mb-4">{useCase.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-4">{useCase.title}</h3>
                  <p className="text-gray-300">{useCase.description}</p>
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
                Ready to Create Amazing Content?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Start using our AI Content Studio today and transform your content creation process.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-rose-500 to-pink-600 hover:from-rose-600 hover:to-pink-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                  Start Free Trial
                </button>
                <button className="border border-rose-400 text-rose-400 hover:bg-rose-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                  Learn More
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

export default AIContentStudioPage;