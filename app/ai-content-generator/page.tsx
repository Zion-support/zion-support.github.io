'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { CheckCircle, ArrowRight, Phone, Mail, MapPin, Zap, Shield, Brain, Globe, FileText, Wand2, Sparkles, Type } from 'lucide-react'

const AIContentGeneratorPage: React.FC = () => {
  const features = [
    {
      icon: FileText,
      title: 'AI-Powered Content Creation',
      description: 'Generate high-quality content using advanced AI algorithms trained on millions of articles and documents'
    },
    {
      icon: Wand2,
      title: 'Multiple Content Types',
      description: 'Create blogs, articles, social media posts, product descriptions, and marketing copy'
    },
    {
      icon: Sparkles,
      title: 'SEO Optimization',
      description: 'Automatically optimize content for search engines with keyword integration and meta descriptions'
    },
    {
      icon: Type,
      title: 'Brand Voice Consistency',
      description: 'Maintain consistent brand voice and tone across all generated content'
    }
  ]

  const benefits = [
    'Save 80% of content creation time',
    'Generate unlimited high-quality content',
    'Improve SEO rankings and organic traffic',
    'Maintain consistent brand voice',
    'Support for 50+ languages',
    'Real-time content optimization',
    'Plagiarism-free content generation',
    'Easy integration with existing workflows'
  ]

  const contentTypes = [
    {
      title: 'Blog Posts & Articles',
      description: 'Long-form content optimized for engagement and SEO',
      features: ['SEO optimization', 'Multiple formats', 'Research integration', 'Fact-checking']
    },
    {
      title: 'Social Media Content',
      description: 'Engaging posts for all major social media platforms',
      features: ['Platform-specific formats', 'Hashtag suggestions', 'Visual descriptions', 'Engagement optimization']
    },
    {
      title: 'Marketing Copy',
      description: 'Compelling sales copy and marketing materials',
      features: ['A/B testing variants', 'CTA optimization', 'Conversion focus', 'Audience targeting']
    },
    {
      title: 'Product Descriptions',
      description: 'Detailed and persuasive product descriptions',
      features: ['Feature highlighting', 'Benefit focus', 'SEO keywords', 'Multiple variations']
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Content Generator | Zion Tech Group</title>
        <meta name="description" content="Advanced AI content generator by Zion Tech Group. Create high-quality blog posts, articles, social media content, and marketing copy with AI." />
        <meta name="keywords" content="AI content generator, content creation, blog writing, social media content, marketing copy, Zion Tech Group" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                AI Content
              </span>
              <br />
              <span className="text-white">Generator</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Create high-quality content at scale with our advanced AI content generator. 
              From blog posts to social media content, generate engaging copy in seconds.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 flex items-center">
                Start Generating
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
              <button className="border border-white/20 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300">
                Try Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Our AI Content Generator?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI-powered content generator delivers high-quality, engaging content that resonates with your audience.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Content Types Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Content Types We Generate
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Create various types of content tailored to your specific needs and audience.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {contentTypes.map((type, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-lg rounded-xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300">
                <h3 className="text-2xl font-semibold text-white mb-4">{type.title}</h3>
                <p className="text-gray-300 mb-6">{type.description}</p>
                <ul className="space-y-2">
                  {type.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Transform Your Content Strategy
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Our AI content generator delivers measurable improvements in content quality, production speed, and audience engagement.
              </p>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center text-gray-300">
                    <CheckCircle className="w-6 h-6 text-green-400 mr-4 flex-shrink-0" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-2xl p-8 border border-white/10">
              <div className="text-center">
                <FileText className="w-16 h-16 text-purple-400 mx-auto mb-4" />
                <h3 className="text-2xl font-semibold text-white mb-4">Ready to Create?</h3>
                <p className="text-gray-300 mb-6">
                  Contact our content experts to discuss your content needs and discover how our AI generator can transform your content strategy.
                </p>
                <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300">
                  Schedule Demo
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Revolutionize Your Content Creation?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Join thousands of content creators already using our AI generator to produce high-quality content at scale.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 flex items-center justify-center">
              Start Creating Content
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
            <button className="border border-white/20 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300">
              View Pricing
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AIContentGeneratorPage