'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { CheckCircle, PenTool, Zap, Brain, BarChart, Settings } from 'lucide-react'

const AIContentWriterPage: React.FC = () => {
  const features = [
    {
      icon: PenTool,
      title: 'Intelligent Writing',
      description: 'AI-powered writing assistance that understands context and creates engaging content.',
      benefits: ['Context awareness', 'Engaging content', 'Grammar correction', 'Style optimization']
    },
    {
      icon: Zap,
      title: 'Rapid Content Creation',
      description: 'Create high-quality content quickly with AI-powered automation.',
      benefits: ['Fast writing', 'Bulk generation', 'Automated workflows', 'Time savings']
    },
    {
      icon: Brain,
      title: 'Creative Assistance',
      description: 'Get creative suggestions and ideas to enhance your content.',
      benefits: ['Idea generation', 'Creative prompts', 'Content suggestions', 'Innovation support']
    },
    {
      icon: BarChart,
      title: 'Content Analytics',
      description: 'Track content performance and optimize based on data insights.',
      benefits: ['Performance metrics', 'Engagement tracking', 'ROI analysis', 'Optimization insights']
    },
    {
      icon: Settings,
      title: 'Customizable Writing',
      description: 'Customize writing style, tone, and format to match your brand.',
      benefits: ['Style adaptation', 'Tone control', 'Brand consistency', 'Format flexibility']
    }
  ]

  const benefits = [
    'Increase writing productivity by 180%',
    'Improve content quality and engagement',
    'Reduce writing time by 65%',
    'Enhance content marketing effectiveness',
    'Scale content creation efficiently',
    'Drive better business results'
  ]

  return (
    <>
      <Helmet>
        <title>AI Content Writer - Zion Tech Group</title>
        <meta name="description" content="Advanced AI-powered content writing platform for creating high-quality, engaging content across multiple formats and channels." />
        <meta name="keywords" content="AI content writer, content writing, automated writing, content creation, writing assistance" />
      </Helmet>
      
      <Navigation />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-cyan-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(6,182,212,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              AI Content
              <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                Writer
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Create compelling content with AI-powered writing assistance. 
              Write faster, better, and more effectively with intelligent automation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Get Started
              </button>
              <button className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
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
                Advanced Writing Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Powerful tools to enhance your writing process
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center hover:bg-white/10 transition-all duration-300">
                  <feature.icon className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  {feature.benefits && (
                    <ul className="space-y-2">
                      {feature.benefits.map((benefit, idx) => (
                        <li key={idx} className="text-sm text-gray-400 flex items-center">
                          <CheckCircle className="w-4 h-4 text-cyan-400 mr-2" />
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
              <h2 className="text-4xl font-bold text-white mb-4">
                Why Choose Our Content Writer?
              </h2>
              <p className="text-xl text-gray-300">
                Proven results that drive writing success
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center hover:bg-white/10 transition-all duration-300">
                  <CheckCircle className="w-8 h-8 text-cyan-400 mx-auto mb-4" />
                  <p className="text-lg text-white font-medium">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12">
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready to Write with AI?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Contact our experts to discuss your content writing needs and get started today
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300">
                  Contact Us
                </button>
                <button className="border border-white/30 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition-all duration-300">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  )
}

export default AIContentWriterPage