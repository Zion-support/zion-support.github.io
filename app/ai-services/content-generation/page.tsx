import React from 'react';
import { Helmet } from 'react-helmet-async';
import { FileText, PenTool, Image, Video, Mic, Globe } from 'lucide-react';

const AiContentGenerationPage: React.FC = () => {
  const features = [
    {
      icon: FileText,
      title: 'Text Generation',
      description: 'AI-powered content creation for blogs, articles, marketing copy, and documentation.',
      benefits: ['Blog posts', 'Marketing copy', 'Technical documentation', 'Social media content']
    },
    {
      icon: Image,
      title: 'Image Generation',
      description: 'Create stunning visuals, graphics, and images using advanced AI algorithms.',
      benefits: ['Product images', 'Marketing graphics', 'Social media visuals', 'Custom illustrations']
    },
    {
      icon: Video,
      title: 'Video Content',
      description: 'Generate engaging video content with AI-powered video creation tools.',
      benefits: ['Marketing videos', 'Tutorial content', 'Social media clips', 'Product demos']
    },
    {
      icon: Mic,
      title: 'Audio Generation',
      description: 'Create voiceovers, podcasts, and audio content with natural-sounding AI voices.',
      benefits: ['Voiceovers', 'Podcast content', 'Audio ads', 'Narration']
    },
    {
      icon: Globe,
      title: 'Multi-language Support',
      description: 'Generate content in multiple languages with accurate translation and localization.',
      benefits: ['Multi-language content', 'Localization', 'Translation', 'Cultural adaptation']
    },
    {
      icon: PenTool,
      title: 'Creative Writing',
      description: 'AI-assisted creative writing for stories, scripts, and creative content.',
      benefits: ['Story writing', 'Script creation', 'Creative copy', 'Brand storytelling']
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Content Generation - Automated Content Creation | Zion Tech Group</title>
        <meta name="description" content="Transform your content strategy with AI-powered content generation. Create text, images, videos, and audio content automatically." />
        <meta name="keywords" content="AI content generation, automated content, content creation, AI writing, content marketing, creative AI" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              AI Content
              <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Generation
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your content strategy with AI-powered content generation. 
              Create text, images, videos, and audio content automatically.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25">
                Get Started
              </button>
              <button className="px-8 py-4 border border-cyan-500/30 text-cyan-400 rounded-xl font-semibold hover:bg-cyan-500/10 transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-white text-center mb-16">
              AI Content Generation Features
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                    <p className="text-gray-300 mb-4">{feature.description}</p>
                    <ul className="space-y-2">
                      {feature.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center space-x-2 text-sm text-gray-400">
                          <div className="w-2 h-2 bg-cyan-400 rounded-full flex-shrink-0"></div>
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Content Strategy?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Get started with our AI content generation solutions and create engaging content at scale.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25">
                Start Creating Content
              </button>
              <button className="px-8 py-4 border border-cyan-500/30 text-cyan-400 rounded-xl font-semibold hover:bg-cyan-500/10 transition-all duration-300">
                Schedule Demo
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AiContentGenerationPage;