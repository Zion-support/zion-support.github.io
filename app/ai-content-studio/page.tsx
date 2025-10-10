import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, Palette, Image, Video, FileText, ArrowRight, Zap, Users, Target } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AIContentStudioPage: React.FC = () => {
  const features = [
    {
      title: 'AI Design Tools',
      description: 'Advanced AI-powered design tools for creating stunning visual content.',
      icon: Palette,
      benefits: [
        'AI-powered design generation',
        'Brand consistency',
        'Template library',
        'Custom graphics'
      ]
    },
    {
      title: 'Content Generation',
      description: 'Generate high-quality content across multiple formats and platforms.',
      icon: FileText,
      benefits: [
        'Multi-format content',
        'SEO optimization',
        'Brand voice consistency',
        'Content templates'
      ]
    },
    {
      title: 'Visual Content',
      description: 'Create engaging images, videos, and graphics with AI assistance.',
      icon: Image,
      benefits: [
        'AI image generation',
        'Video editing tools',
        'Graphic design',
        'Visual effects'
      ]
    },
    {
      title: 'Collaboration',
      description: 'Team collaboration features for content creation and review.',
      icon: Users,
      benefits: [
        'Real-time collaboration',
        'Version control',
        'Comment system',
        'Approval workflows'
      ]
    }
  ];

  const benefits = [
    'Increase content production by 400%',
    'Reduce design time by 80%',
    'Improve content quality',
    'Streamline workflows',
    'Enhance team collaboration',
    'Scale content creation',
    'Maintain brand consistency',
    'Automate content workflows',
    'Scale content across channels',
    'Enhance content quality'
  ];

  const useCases = [
    {
      title: 'Marketing Teams',
      description: 'Create compelling marketing content and campaigns at scale.',
      icon: Target
    },
    {
      title: 'Content Creators',
      description: 'Enhance creativity and productivity for individual creators.',
      icon: Users
    },
    {
      title: 'Design Agencies',
      description: 'Streamline design workflows and deliver projects faster.',
      icon: Palette
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Content Studio - Zion Tech Group</title>
        <meta name="description" content="AI-powered content studio for creating stunning visual content, designs, and multimedia. Advanced tools for content creators and marketing teams." />
        <meta name="keywords" content="AI content studio, content creation, design tools, visual content, multimedia, content marketing" />
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
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Create stunning content with our AI Content Studio. Advanced design tools, 
              content generation, and collaboration features for better content creation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-rose-500 to-pink-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-rose-600 hover:to-pink-600 transition-all duration-300 flex items-center justify-center">
                Start Creating
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
              <button className="border border-rose-400 text-rose-300 px-8 py-4 rounded-lg font-semibold hover:bg-rose-500 hover:text-white transition-all duration-300">
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
                Content Studio Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our AI-powered content studio provides comprehensive tools for content creation.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700 hover:border-rose-500 transition-all duration-300">
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-rose-400 mr-2 flex-shrink-0" />
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
        <section className="py-20 px-4 bg-gradient-to-r from-rose-900/20 to-pink-900/20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Content Studio Use Cases
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Perfect for teams and individuals who need to create content at scale.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {useCases.map((useCase, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700 hover:border-rose-500 transition-all duration-300 text-center">
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
                Why Choose Our Content Studio?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Experience the power of AI-powered content creation that transforms your workflow.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3 p-4 bg-white/5 rounded-lg">
                  <CheckCircle className="w-6 h-6 text-rose-400 flex-shrink-0" />
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
                Ready to Create Content?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join thousands of creators who are already using our AI Content Studio.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-rose-500 to-pink-600 hover:from-rose-600 hover:to-pink-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                  Start Creating
                </button>
                <button className="border border-rose-400 text-rose-400 hover:bg-rose-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
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

export default AIContentStudioPage;