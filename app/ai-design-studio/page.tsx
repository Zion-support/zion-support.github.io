'use client';
import React from 'react';
import { Palette, Wand2, Image, Video, Layers, Sparkles, ArrowRight, Phone, Mail, Download, Share2, Eye } from 'lucide-react';
import Link from 'next/link';

const AIDesignStudioPage: React.FC = () => {
  const features = [
    {
      icon: Wand2,
      title: 'AI-Powered Design Generation',
      description: 'Create stunning visuals instantly with our advanced AI design algorithms'
    },
    {
      icon: Palette,
      title: 'Smart Color Matching',
      description: 'Automatically generate harmonious color palettes based on your brand'
    },
    {
      icon: Image,
      title: 'Image Enhancement',
      description: 'Upscale, retouch, and optimize images with AI-powered tools'
    },
    {
      icon: Video,
      title: 'Video Creation',
      description: 'Generate professional videos from text descriptions and images'
    },
    {
      icon: Layers,
      title: 'Template Library',
      description: 'Access thousands of customizable design templates'
    },
    {
      icon: Sparkles,
      title: 'Brand Consistency',
      description: 'Maintain consistent branding across all your design assets'
    }
  ];

  const tools = [
    {
      title: 'Logo Generator',
      description: 'Create professional logos in seconds',
      features: ['Multiple style options', 'Brand-appropriate colors', 'Vector format output']
    },
    {
      title: 'Social Media Graphics',
      description: 'Design posts for all social platforms',
      features: ['Platform-specific sizing', 'Trending templates', 'Auto-optimization']
    },
    {
      title: 'Marketing Materials',
      description: 'Create brochures, flyers, and presentations',
      features: ['Professional layouts', 'Print-ready formats', 'Custom branding']
    },
    {
      title: 'Web Design Elements',
      description: 'Generate UI components and web graphics',
      features: ['Modern design trends', 'Responsive layouts', 'Developer-friendly exports']
    }
  ];

  const benefits = [
    {
      title: '10x Faster Design',
      description: 'Create professional designs in minutes instead of hours'
    },
    {
      title: 'Cost Effective',
      description: 'Reduce design costs by up to 80% compared to traditional methods'
    },
    {
      title: 'No Design Skills Required',
      description: 'Anyone can create stunning visuals with our intuitive interface'
    },
    {
      title: 'Unlimited Creativity',
      description: 'Generate endless variations and explore new design possibilities'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">
            AI <span className="text-cyan-400">Design Studio</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Create stunning visuals, logos, and marketing materials with the power of AI. 
            Our design studio combines artificial intelligence with professional design tools to help you create amazing content in minutes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center"
            >
              <Palette className="w-5 h-5 mr-2" />
              Start Creating
            </Link>
            <Link
              href="/demo"
              className="bg-white/10 text-white px-8 py-4 rounded-lg font-semibold border border-gray-600 hover:border-cyan-400 hover:bg-cyan-400/10 transition-all duration-300 flex items-center justify-center"
            >
              <Eye className="w-5 h-5 mr-2" />
              View Gallery
            </Link>
          </div>
        </div>

        {/* Features Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Powerful <span className="text-cyan-400">Design Tools</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-gray-600 hover:border-cyan-400/50 transition-all duration-300"
              >
                <div className="p-3 bg-cyan-400 rounded-lg w-fit mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Tools Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Design <span className="text-cyan-400">Categories</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {tools.map((tool, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-gray-600 hover:border-cyan-400/50 transition-all duration-300"
              >
                <h3 className="text-2xl font-semibold text-white mb-4">{tool.title}</h3>
                <p className="text-gray-300 mb-6">{tool.description}</p>
                <ul className="space-y-2">
                  {tool.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-cyan-400">
                      <Sparkles className="w-5 h-5 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Why Choose Our <span className="text-cyan-400">AI Design Studio</span>?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="p-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full w-fit mx-auto mb-4">
                  <Wand2 className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Process Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            How It <span className="text-cyan-400">Works</span>
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-cyan-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Describe</h3>
              <p className="text-gray-300">Tell us what you want to create with simple text descriptions</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-cyan-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Generate</h3>
              <p className="text-gray-300">Our AI creates multiple design options based on your requirements</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-cyan-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Customize</h3>
              <p className="text-gray-300">Fine-tune colors, text, and layout to match your brand</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-cyan-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">4</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Export</h3>
              <p className="text-gray-300">Download in high-resolution formats ready for any use</p>
            </div>
          </div>
        </div>

        {/* Gallery Preview */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Design <span className="text-cyan-400">Gallery</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-2xl p-8 text-center">
              <Image className="w-16 h-16 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Logos</h3>
              <p className="text-gray-300">Professional logos for any industry</p>
            </div>
            <div className="bg-gradient-to-br from-purple-500/20 to-pink-600/20 rounded-2xl p-8 text-center">
              <Share2 className="w-16 h-16 text-purple-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Social Media</h3>
              <p className="text-gray-300">Eye-catching posts for all platforms</p>
            </div>
            <div className="bg-gradient-to-br from-green-500/20 to-emerald-600/20 rounded-2xl p-8 text-center">
              <Download className="w-16 h-16 text-green-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Marketing</h3>
              <p className="text-gray-300">Brochures, flyers, and presentations</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-cyan-600/20 to-blue-600/20 rounded-2xl p-12 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Start Creating Amazing Designs Today
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of creators using our AI Design Studio to bring their ideas to life with professional-quality visuals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center"
            >
              <ArrowRight className="w-5 h-5 mr-2" />
              Get Started Now
            </Link>
            <Link
              href="/pricing"
              className="bg-white/10 text-white px-8 py-4 rounded-lg font-semibold border border-gray-600 hover:border-cyan-400 hover:bg-cyan-400/10 transition-all duration-300 flex items-center justify-center"
            >
              <Palette className="w-5 h-5 mr-2" />
              View Pricing
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIDesignStudioPage;