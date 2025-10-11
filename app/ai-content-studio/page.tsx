'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { CheckCircle, Palette, Zap, Brain, BarChart, Settings } from 'lucide-react'

const AIContentStudioPage: React.FC = () => {
  const features = [
    {
      icon: Palette,
      title: 'Creative Design Tools',
      description: 'Advanced design tools for creating visually stunning content.',
      benefits: ['Visual editor', 'Template library', 'Design automation', 'Brand consistency']
    },
    {
      icon: Zap,
      title: 'Rapid Content Creation',
      description: 'Create and publish content quickly with streamlined workflows.',
      benefits: ['Fast creation', 'Batch processing', 'Automated publishing', 'Workflow optimization']
    },
    {
      icon: Brain,
      title: 'AI-Powered Creativity',
      description: 'Leverage AI to enhance creativity and generate innovative content ideas.',
      benefits: ['Creative suggestions', 'Idea generation', 'Style adaptation', 'Innovation support']
    },
    {
      icon: BarChart,
      title: 'Performance Analytics',
      description: 'Track content performance and optimize based on data insights.',
      benefits: ['Performance metrics', 'Engagement analysis', 'ROI tracking', 'Optimization recommendations']
    },
    {
      icon: Settings,
      title: 'Collaborative Workspace',
      description: 'Team collaboration tools for content creation and management.',
      benefits: ['Team collaboration', 'Version control', 'Review workflows', 'Project management']
    }
  ]

  const benefits = [
    'Increase creative productivity by 150%',
    'Improve content quality and consistency',
    'Accelerate content creation workflows',
    'Enhance team collaboration and efficiency',
    'Scale content operations effectively',
    'Drive better content marketing results'
  ]

  return (
    <>
      <Helmet>
        <title>AI Content Studio - Zion Tech Group</title>
        <meta name="description" content="Advanced AI-powered content studio for creative design, content creation, and collaborative content management." />
        <meta name="keywords" content="AI content studio, content design, creative tools, content management, collaborative content" />
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
              <span className="block bg-gradient-to-r from-pink-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Studio
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Create, design, and manage content with our AI-powered content studio. 
              Unleash your creativity with intelligent design tools and collaborative workflows.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-pink-500 to-blue-600 hover:from-pink-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Get Started
              </button>
              <button className="border border-pink-400 text-pink-400 hover:bg-pink-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
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
                Advanced Studio Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Powerful tools for creative content creation and management
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center hover:bg-white/10 transition-all duration-300">
                  <feature.icon className="w-12 h-12 text-pink-400 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  {feature.benefits && (
                    <ul className="space-y-2">
                      {feature.benefits.map((benefit, idx) => (
                        <li key={idx} className="text-sm text-gray-400 flex items-center">
                          <CheckCircle className="w-4 h-4 text-pink-400 mr-2" />
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
                Why Choose Our Content Studio?
              </h2>
              <p className="text-xl text-gray-300">
                Proven results that drive creative success
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center hover:bg-white/10 transition-all duration-300">
                  <CheckCircle className="w-8 h-8 text-pink-400 mx-auto mb-4" />
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
                Ready to Create with AI?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Contact our experts to discuss your content studio needs and get started today
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-pink-500 to-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:from-pink-600 hover:to-blue-700 transition-all duration-300">
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

export default AIContentStudioPage