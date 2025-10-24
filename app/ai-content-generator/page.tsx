'use client'

import React from 'react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { PenTool, Brain, Zap, Target, CheckCircle, Star, ArrowRight, Users, BarChart, Clock, FileText, Image, Video, Mic } from 'lucide-react'

const AIContentGeneratorPage: React.FC = () => {
  const features = [
    {
      icon: PenTool,
      title: 'Multi-Format Content',
      description: 'Generate articles, blogs, social media posts, emails, and more with AI-powered content creation.',
      benefits: ['Blog posts', 'Social media content', 'Email campaigns', 'Product descriptions']
    },
    {
      icon: Brain,
      title: 'AI-Powered Intelligence',
      description: 'Advanced natural language processing creates human-like content that engages your audience.',
      benefits: ['Natural language generation', 'Context awareness', 'Tone adaptation', 'Brand voice consistency']
    },
    {
      icon: Target,
      title: 'Targeted Content',
      description: 'Create content tailored to specific audiences, industries, and marketing objectives.',
      benefits: ['Audience targeting', 'Industry-specific content', 'SEO optimization', 'Conversion-focused copy']
    },
    {
      icon: Zap,
      title: 'Rapid Generation',
      description: 'Produce high-quality content in minutes instead of hours with automated content workflows.',
      benefits: ['Bulk content creation', 'Template-based generation', 'Quick iterations', 'Time-saving automation']
    }
  ]

  const contentTypes = [
    {
      icon: FileText,
      title: 'Blog Articles',
      description: 'Comprehensive blog posts with SEO optimization and engaging storytelling'
    },
    {
      icon: Image,
      title: 'Visual Content',
      description: 'Captions, descriptions, and text for images and infographics'
    },
    {
      icon: Video,
      title: 'Video Scripts',
      description: 'Scripts for marketing videos, tutorials, and promotional content'
    },
    {
      icon: Mic,
      title: 'Audio Content',
      description: 'Podcast scripts, voice-over text, and audio marketing content'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            AI Content
            <span className="block bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Generator
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Create high-quality, engaging content at scale with our AI-powered content generation platform. 
            From blog posts to social media content, generate everything you need in minutes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25">
              Start Creating Free
              <ArrowRight className="w-5 h-5 ml-2 inline" />
            </button>
            <button className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
              View Demo
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Powerful Content Generation Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Everything you need to create compelling content that resonates with your audience 
              and drives engagement.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-400">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Content Types Section */}
      <section className="py-20 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Create Any Type of Content
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From written content to multimedia scripts, our AI adapts to your content needs.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contentTypes.map((type, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center hover:bg-white/10 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <type.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{type.title}</h3>
                <p className="text-gray-300">{type.description}</p>
              </div>
            ))}
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
            Join thousands of content creators and marketers using AI to scale their content production 
            and improve engagement.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
              Start Creating Now
              <ArrowRight className="w-5 h-5 ml-2 inline" />
            </button>
            <button className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
              Contact Sales
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default AIContentGeneratorPage