'use client';
import React from 'react';
import { PenTool, Camera, Video, Mic, Image, FileText, Zap, Star, Shield, CheckCircle, ArrowRight, Phone, Mail } from 'lucide-react';

const ContentCreationToolsPage: React.FC = () => {
  const tools = [
    {
      name: 'AI Content Writer',
      description: 'Advanced AI writing assistant that creates high-quality blog posts, articles, and marketing copy.',
      features: ['SEO optimization', 'Multiple tones', 'Plagiarism check', 'Grammar correction', 'Content templates'],
      price: '$79/month',
      icon: PenTool,
      color: 'text-blue-500'
    },
    {
      name: 'Video Editor Pro',
      description: 'AI-powered video editing with automatic cuts, transitions, and professional effects.',
      features: ['Auto-editing', 'Smart cuts', 'Transitions', 'Color correction', 'Audio sync'],
      price: '$99/month',
      icon: Video,
      color: 'text-red-500'
    },
    {
      name: 'Image Generator',
      description: 'Create stunning images and graphics using AI with custom styles and brand consistency.',
      features: ['AI generation', 'Style transfer', 'Brand consistency', 'High resolution', 'Custom templates'],
      price: '$59/month',
      icon: Image,
      color: 'text-purple-500'
    },
    {
      name: 'Podcast Producer',
      description: 'Complete podcast production suite with AI voice synthesis and audio enhancement.',
      features: ['Voice synthesis', 'Audio enhancement', 'Noise reduction', 'Auto-transcription', 'Publishing tools'],
      price: '$89/month',
      icon: Mic,
      color: 'text-green-500'
    },
    {
      name: 'Social Media Manager',
      description: 'Automated social media content creation and scheduling across all platforms.',
      features: ['Multi-platform', 'Auto-scheduling', 'Hashtag optimization', 'Engagement tracking', 'Content calendar'],
      price: '$69/month',
      icon: Camera,
      color: 'text-cyan-500'
    },
    {
      name: 'Content Analytics',
      description: 'Comprehensive content performance tracking with engagement insights and optimization suggestions.',
      features: ['Performance tracking', 'Engagement metrics', 'A/B testing', 'Optimization tips', 'ROI analysis'],
      price: '$49/month',
      icon: FileText,
      color: 'text-orange-500'
    }
  ];

  const benefits = [
    {
      title: 'Create 10x More Content',
      description: 'AI automation helps you produce high-quality content at scale without sacrificing quality',
      icon: Zap
    },
    {
      title: 'Save 30+ Hours Weekly',
      description: 'Automated tools handle routine tasks, letting you focus on creative strategy',
      icon: Star
    },
    {
      title: 'Boost Engagement by 200%',
      description: 'AI-optimized content performs better and drives more engagement across platforms',
      icon: Shield
    },
    {
      title: 'Maintain Brand Consistency',
      description: 'AI ensures all content follows your brand guidelines and voice automatically',
      icon: CheckCircle
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <section className="container mx-auto px-4 py-16 pt-24">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Content Creation Tools
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Revolutionize your content creation with AI-powered tools. 
            Create, edit, and optimize content that engages your audience and drives results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="cyber-button inline-flex items-center justify-center"
            >
              <Phone className="w-4 h-4 mr-2" />
              Call (302) 464-0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-all duration-300 inline-flex items-center justify-center"
            >
              <Mail className="w-4 h-4 mr-2" />
              Get Free Demo
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {tools.map((tool, index) => (
            <div key={index} className="cyber-card p-6 hover:scale-105 transition-all duration-300">
              <div className="flex items-center mb-4">
                <tool.icon className={`w-8 h-8 ${tool.color} mr-3`} />
                <h3 className="text-xl font-bold text-white">{tool.name}</h3>
              </div>
              <p className="text-gray-300 mb-4">{tool.description}</p>
              <ul className="space-y-2 mb-4">
                {tool.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-400">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-cyan-400">{tool.price}</span>
                <a
                  href="/contact"
                  className="text-cyan-400 hover:text-cyan-300 font-medium flex items-center"
                >
                  Learn More <ArrowRight className="w-4 h-4 ml-1" />
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gray-800/50 rounded-xl p-8 mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Why Choose Our Content Tools?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <benefit.icon className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl p-8">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Create Amazing Content?
          </h2>
          <p className="text-xl text-cyan-100 mb-6">
            Join 3,000+ creators already using our tools to produce engaging content at scale.
          </p>
          <a
            href="tel:+13024640950"
            className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 inline-flex items-center"
          >
            <Phone className="w-4 h-4 mr-2" />
            Call (302) 464-0950
          </a>
        </div>
      </section>
    </div>
  );
};

export default ContentCreationToolsPage;
