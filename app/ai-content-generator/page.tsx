import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle, Brain, FileText, Zap, Users, BarChart3, Clock } from 'lucide-react'

export default function AIContentGeneratorPage() {
  const features = [
    {
      icon: <FileText className="w-8 h-8 text-blue-500" />,
      title: 'Multi-Format Content',
      description: 'Generate blog posts, articles, social media content, emails, and more in various formats and styles.'
    },
    {
      icon: <Brain className="w-8 h-8 text-purple-500" />,
      title: 'AI-Powered Writing',
      description: 'Advanced natural language processing creates human-like content that engages your audience.'
    },
    {
      icon: <Zap className="w-8 h-8 text-yellow-500" />,
      title: 'Lightning Fast',
      description: 'Generate high-quality content in seconds, not hours. Boost your productivity exponentially.'
    },
    {
      icon: <Users className="w-8 h-8 text-green-500" />,
      title: 'Brand Voice Consistency',
      description: 'Maintain consistent tone and style across all your content with customizable brand guidelines.'
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-red-500" />,
      title: 'SEO Optimized',
      description: 'Content optimized for search engines with keyword integration and readability scores.'
    },
    {
      icon: <Clock className="w-8 h-8 text-indigo-500" />,
      title: '24/7 Availability',
      description: 'Access your AI content generator anytime, anywhere. Never run out of content ideas.'
    }
  ]

  const useCases = [
    'Blog posts and articles',
    'Social media content',
    'Email marketing campaigns',
    'Product descriptions',
    'Website copy',
    'Press releases',
    'Technical documentation',
    'Creative writing'
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Content Generator - Zion Tech Group</title>
        <meta name="description" content="Generate high-quality content instantly with our AI-powered content generator. Create blog posts, articles, social media content, and more." />
        <meta name="keywords" content="AI content generator, content creation, automated writing, blog posts, social media content" />
      </Helmet>
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
              AI Content Generator
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Create high-quality, engaging content in seconds with our advanced AI-powered content generator. 
              Perfect for blogs, social media, emails, and more.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center"
              >
                Get Started
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/demo"
                className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"
              >
                Try Demo
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Powerful Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Everything you need to create compelling content at scale.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 lg:p-12 border border-white/20">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Perfect For
              </h2>
              <p className="text-xl text-gray-300">
                Our AI content generator excels at creating various types of content
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {useCases.map((useCase, index) => (
                <div key={index} className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                  <span className="text-sm">{useCase}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-6 sm:p-8 lg:p-12 text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Transform Your Content Creation?
            </h2>
            <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Start generating high-quality content in minutes with our AI-powered content generator.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300"
              >
                Get Started Today
              </Link>
              <Link
                to="/ai-services"
                className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300"
              >
                View All AI Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}