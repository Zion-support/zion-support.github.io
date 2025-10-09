import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { FileText, Image, Video, Music, CheckCircle, Zap } from 'lucide-react';

const AiContentGenerationPage: React.FC = () => {
  const features = [
    {
      icon: FileText,
      title: 'Text Generation',
      description: 'AI-powered content creation for blogs, articles, and marketing copy',
      benefits: ['SEO-optimized content', 'Multiple formats', 'Brand voice consistency']
    },
    {
      icon: Image,
      title: 'Visual Content',
      description: 'Generate stunning images, graphics, and visual assets',
      benefits: ['Custom designs', 'Brand consistency', 'High resolution']
    },
    {
      icon: Video,
      title: 'Video Production',
      description: 'Create engaging videos with AI assistance',
      benefits: ['Automated editing', 'Voice synthesis', 'Template library']
    },
    {
      icon: Music,
      title: 'Audio Content',
      description: 'Generate music, voiceovers, and audio content',
      benefits: ['Custom compositions', 'Voice cloning', 'Sound effects']
    },
    {
      icon: Zap,
      title: 'Rapid Creation',
      description: 'Fast content generation with quality assurance',
      benefits: ['Bulk generation', 'Quality checks', 'Instant delivery']
    },
    {
      icon: CheckCircle,
      title: 'Quality Control',
      description: 'Automated quality assessment and optimization',
      benefits: ['Content scoring', 'Improvement suggestions', 'Compliance checks']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      <main className="container mx-auto px-4 py-16 pt-24">
        <section className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            AI Content Generation
          </h1>
          <p className="text-xl text-cyan-400 mb-8 font-medium">
            Create compelling content at scale with AI
          </p>
          <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
            Transform your content strategy with our advanced AI content generation platform.
            Create high-quality text, images, videos, and audio content that resonates with your audience.
          </p>
        </section>

        {/* Features Grid */}
        <section className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-cyan-500 rounded-lg mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="text-sm text-cyan-300 flex items-center">
                      <CheckCircle className="w-4 h-4 mr-2" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Content Types Section */}
        <section className="py-16 bg-white/5 rounded-2xl">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-white text-center mb-12">
              Content Types We Generate
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FileText className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Blog Posts</h3>
                <p className="text-gray-300">Engaging articles and blog content</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Image className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Social Media</h3>
                <p className="text-gray-300">Posts, captions, and visual content</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Video className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Marketing</h3>
                <p className="text-gray-300">Ads, campaigns, and promotional content</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Music className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Multimedia</h3>
                <p className="text-gray-300">Audio, video, and interactive content</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Scale Your Content?
            </h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Start creating high-quality content at scale with our AI-powered generation platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-cyan-500 text-white px-8 py-3 rounded-lg hover:bg-cyan-600 transition-colors font-semibold">
                Get Started
              </button>
              <button className="border border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg hover:bg-cyan-400 hover:text-white transition-colors font-semibold">
                Learn More
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AiContentGenerationPage;