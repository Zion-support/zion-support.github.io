import React from 'react'
import { Helmet } from 'react-helmet-async'
import Layout from '../layout'
import { FileText, Image, Video, Music, Globe, Zap, CheckCircle, ArrowRight, Users, Clock, BarChart3, Search, Edit, Share } from 'lucide-react'
import { Link } from 'react-router-dom'

const AIContentManagementPage: React.FC = () => {
  const features = [
    {
      icon: <FileText className="w-8 h-8 text-blue-500" />,
      title: 'Content Creation',
      description: 'AI-powered content generation for blogs, articles, social media posts, and marketing materials.'
    },
    {
      icon: <Image className="w-8 h-8 text-green-500" />,
      title: 'Visual Content',
      description: 'Generate and manage images, graphics, and visual content with AI assistance.'
    },
    {
      icon: <Video className="w-8 h-8 text-purple-500" />,
      title: 'Video Content',
      description: 'Create and edit video content with AI-powered tools and automated editing features.'
    },
    {
      icon: <Music className="w-8 h-8 text-orange-500" />,
      title: 'Audio Content',
      description: 'Generate voiceovers, podcasts, and audio content using advanced AI voice synthesis.'
    }
  ]

  const services = [
    {
      icon: <Search className="w-6 h-6 text-blue-500" />,
      title: 'Content Discovery',
      description: 'AI-powered content research and topic discovery based on trending keywords and audience interests.'
    },
    {
      icon: <Edit className="w-6 h-6 text-green-500" />,
      title: 'Content Optimization',
      description: 'Automated content optimization for SEO, readability, and engagement across all platforms.'
    },
    {
      icon: <Share className="w-6 h-6 text-purple-500" />,
      title: 'Multi-Platform Publishing',
      description: 'Automated content distribution across multiple channels and social media platforms.'
    },
    {
      icon: <BarChart3 className="w-6 h-6 text-orange-500" />,
      title: 'Performance Analytics',
      description: 'Comprehensive analytics and insights on content performance and audience engagement.'
    }
  ]

  const benefits = [
    'Streamlined content creation workflow with AI assistance',
    'Consistent brand voice and messaging across all content',
    'Reduced time and cost for content production',
    'Improved content quality and engagement rates',
    'Automated content optimization for better SEO performance',
    'Centralized content management and collaboration tools'
  ]

  const contentTypes = [
    {
      title: 'Blog Posts & Articles',
      description: 'AI-generated blog posts, articles, and long-form content optimized for your target audience.',
      icon: <FileText className="w-8 h-8 text-blue-500" />
    },
    {
      title: 'Social Media Content',
      description: 'Engaging social media posts, captions, and content tailored for each platform.',
      icon: <Share className="w-8 h-8 text-green-500" />
    },
    {
      title: 'Email Marketing',
      description: 'Personalized email campaigns and newsletters with AI-powered content generation.',
      icon: <Globe className="w-8 h-8 text-purple-500" />
    },
    {
      title: 'Product Descriptions',
      description: 'Compelling product descriptions and marketing copy for e-commerce and sales.',
      icon: <Zap className="w-8 h-8 text-orange-500" />
    }
  ]

  return (
    <Layout
      title="AI Content Management - Zion Tech Group"
      description="Revolutionary AI-powered content management system for creating, optimizing, and distributing content across all your marketing channels."
      keywords="AI content management, content creation, content optimization, social media management, content automation, AI writing"
    >
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              AI Content
              <br />
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Management
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Revolutionize your content strategy with our AI-powered content management system. 
              Create, optimize, and distribute engaging content across all your marketing channels.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center"
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link 
                to="/pricing" 
                className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"
              >
                View Pricing
              </Link>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose Our AI Content Management?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Transform your content strategy with AI-powered tools that create, optimize, and distribute content automatically.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Content Types Section */}
        <section className="py-20 px-4 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Content Types We Handle
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                From blog posts to social media content, our AI creates engaging content for every platform.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {contentTypes.map((type, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    {type.icon}
                    <h3 className="text-xl font-semibold text-white ml-4">{type.title}</h3>
                  </div>
                  <p className="text-gray-300">{type.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our Content Management Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive content management solutions powered by advanced AI technology.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    {service.icon}
                    <h3 className="text-lg font-semibold text-white ml-3">{service.title}</h3>
                  </div>
                  <p className="text-gray-300 text-sm">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Benefits of AI Content Management
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Transform your content strategy with measurable improvements in efficiency, quality, and engagement.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-400 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-300 text-lg">{benefit}</span>
                  </div>
                ))}
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold text-white mb-6">Ready to Transform Your Content?</h3>
                <p className="text-gray-300 mb-6">
                  Let our AI content management experts help you create a comprehensive content strategy 
                  that will engage your audience and drive results across all platforms.
                </p>
                <Link 
                  to="/contact" 
                  className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 inline-flex items-center"
                >
                  Start Your Content Journey
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
                  Ready to Revolutionize Your Content?
                </h2>
                <p className="text-lg sm:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
                  Let's discuss how our AI content management system can transform your content strategy and drive better results.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link 
                    to="/contact" 
                    className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                  >
                    Get Started Today
                  </Link>
                  <Link 
                    to="/pricing" 
                    className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                  >
                    View Pricing
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  )
}

export default AIContentManagementPage