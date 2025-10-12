import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { Search, BookOpen, Code, Zap, Shield, Brain, ChevronRight, Download, ExternalLink, FileText, Video, Users } from 'lucide-react'

const DocsPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')

  const categories = [
    { id: 'all', name: 'All Documentation', icon: <BookOpen className="w-5 h-5" /> },
    { id: 'getting-started', name: 'Getting Started', icon: <Zap className="w-5 h-5" /> },
    { id: 'api', name: 'API Reference', icon: <Code className="w-5 h-5" /> },
    { id: 'ai-services', name: 'AI Services', icon: <Brain className="w-5 h-5" /> },
    { id: 'security', name: 'Security', icon: <Shield className="w-5 h-5" /> }
  ]

  const documentation = [
    {
      id: 'getting-started',
      title: 'Getting Started with Zion Tech Group',
      description: 'Learn how to set up your account and start using our AI and IT services.',
      category: 'getting-started',
      type: 'guide',
      icon: <BookOpen className="w-6 h-6 text-blue-500" />,
      estimatedTime: '10 min read',
      lastUpdated: '2024-01-15'
    },
    {
      id: 'api-authentication',
      title: 'API Authentication Guide',
      description: 'Complete guide to authenticating with our APIs and managing access tokens.',
      category: 'api',
      type: 'guide',
      icon: <Code className="w-6 h-6 text-green-500" />,
      estimatedTime: '15 min read',
      lastUpdated: '2024-01-10'
    },
    {
      id: 'ai-content-generation',
      title: 'AI Content Generation API',
      description: 'Generate high-quality content using our AI-powered content generation API.',
      category: 'ai-services',
      type: 'api',
      icon: <Brain className="w-6 h-6 text-purple-500" />,
      estimatedTime: '20 min read',
      lastUpdated: '2024-01-12'
    },
    {
      id: 'security-best-practices',
      title: 'Security Best Practices',
      description: 'Essential security guidelines for protecting your data and applications.',
      category: 'security',
      type: 'guide',
      icon: <Shield className="w-6 h-6 text-red-500" />,
      estimatedTime: '25 min read',
      lastUpdated: '2024-01-08'
    },
    {
      id: 'webhook-setup',
      title: 'Webhook Configuration',
      description: 'Set up webhooks to receive real-time notifications from our services.',
      category: 'api',
      type: 'tutorial',
      icon: <Zap className="w-6 h-6 text-yellow-500" />,
      estimatedTime: '12 min read',
      lastUpdated: '2024-01-14'
    },
    {
      id: 'ai-chatbot-integration',
      title: 'AI Chatbot Integration',
      description: 'Integrate our AI chatbot into your website or application.',
      category: 'ai-services',
      type: 'tutorial',
      icon: <Brain className="w-6 h-6 text-indigo-500" />,
      estimatedTime: '18 min read',
      lastUpdated: '2024-01-11'
    },
    {
      id: 'data-privacy-compliance',
      title: 'Data Privacy & GDPR Compliance',
      description: 'Ensure your implementation meets data privacy and GDPR requirements.',
      category: 'security',
      type: 'guide',
      icon: <Shield className="w-6 h-6 text-orange-500" />,
      estimatedTime: '30 min read',
      lastUpdated: '2024-01-09'
    },
    {
      id: 'error-handling',
      title: 'Error Handling & Troubleshooting',
      description: 'Common error scenarios and how to handle them effectively.',
      category: 'api',
      type: 'guide',
      icon: <FileText className="w-6 h-6 text-gray-500" />,
      estimatedTime: '15 min read',
      lastUpdated: '2024-01-13'
    }
  ]

  const quickStartGuides = [
    {
      title: 'Quick Start: AI Content Generation',
      description: 'Generate your first AI content in 5 minutes',
      icon: <Brain className="w-6 h-6 text-purple-500" />,
      link: '/docs/quick-start-ai-content'
    },
    {
      title: 'Quick Start: API Integration',
      description: 'Integrate our APIs into your application',
      icon: <Code className="w-6 h-6 text-blue-500" />,
      link: '/docs/quick-start-api'
    },
    {
      title: 'Quick Start: Security Setup',
      description: 'Secure your implementation in minutes',
      icon: <Shield className="w-6 h-6 text-green-500" />,
      link: '/docs/quick-start-security'
    }
  ]

  const filteredDocs = documentation.filter(doc => {
    const matchesSearch = doc.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         doc.description.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = selectedCategory === 'all' || doc.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Documentation - Zion Tech Group</title>
        <meta name="description" content="Comprehensive documentation for Zion Tech Group's AI and IT solutions. API guides, tutorials, and best practices." />
        <meta name="keywords" content="documentation, API, guides, tutorials, AI services" />
      </Helmet>
      
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Documentation</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Comprehensive guides, API references, and tutorials to help you build amazing solutions with our AI and IT services.
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto relative mb-8">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search documentation..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-purple-500 text-white'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                {category.icon}
                <span className="ml-2">{category.name}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Start Guides */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Quick Start Guides
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Get up and running quickly with our step-by-step quick start guides.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {quickStartGuides.map((guide, index) => (
              <a
                key={index}
                href={guide.link}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 group"
              >
                <div className="flex items-center mb-4">
                  {guide.icon}
                  <h3 className="text-lg font-semibold text-white ml-3">{guide.title}</h3>
                </div>
                <p className="text-gray-300 text-sm mb-4">{guide.description}</p>
                <div className="flex items-center text-purple-400 text-sm font-medium group-hover:translate-x-2 transition-transform duration-300">
                  Start Guide
                  <ChevronRight className="w-4 h-4 ml-1" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Documentation Grid */}
      <section className="py-20 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Documentation Library
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Browse our comprehensive documentation to find answers and learn best practices.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredDocs.map((doc, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="flex items-start justify-between mb-4">
                  {doc.icon}
                  <div className="flex items-center space-x-2">
                    <span className="px-2 py-1 bg-white/20 text-white text-xs rounded">
                      {doc.type}
                    </span>
                    <span className="text-gray-400 text-xs">{doc.estimatedTime}</span>
                  </div>
                </div>
                
                <h3 className="text-lg font-semibold text-white mb-2">{doc.title}</h3>
                <p className="text-gray-300 text-sm mb-4">{doc.description}</p>
                
                <div className="flex items-center justify-between">
                  <span className="text-gray-400 text-xs">Updated {doc.lastUpdated}</span>
                  <div className="flex items-center space-x-2">
                    <button className="text-purple-400 hover:text-purple-300 transition-colors">
                      <Download className="w-4 h-4" />
                    </button>
                    <button className="text-purple-400 hover:text-purple-300 transition-colors">
                      <ExternalLink className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Resources */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Additional Resources
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore more resources to enhance your development experience.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg mx-auto mb-4">
                <Video className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Video Tutorials</h3>
              <p className="text-gray-300 mb-4">Watch step-by-step video tutorials for our services.</p>
              <a href="/tutorials" className="text-purple-400 hover:text-purple-300 font-medium">
                Watch Videos →
              </a>
            </div>
            
            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-500 to-blue-600 rounded-lg mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Community Forum</h3>
              <p className="text-gray-300 mb-4">Connect with other developers and get help from the community.</p>
              <a href="/community" className="text-purple-400 hover:text-purple-300 font-medium">
                Join Community →
              </a>
            </div>
            
            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg mx-auto mb-4">
                <FileText className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">API Reference</h3>
              <p className="text-gray-300 mb-4">Complete API documentation with examples and code snippets.</p>
              <a href="/api-docs" className="text-purple-400 hover:text-purple-300 font-medium">
                View API Docs →
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default DocsPage