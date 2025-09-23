'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Calendar, Clock, ArrowRight, Search, Filter, Mail, CheckCircle, AlertCircle } from 'lucide-react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { Card } from '../components/Card'
import { Button } from '../components/Button'

export default function BlogPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [newsletterEmail, setNewsletterEmail] = useState('')
  const [newsletterStatus, setNewsletterStatus] = useState(null)
  const [isSubscribing, setIsSubscribing] = useState(false)
  const blogPosts = [
    {
      title: 'AI 20o25: Multimodal Agents in the Enterprise',
      slug: 'ai-20o25-multimodal-agents-in-the-enterprise',
      excerpt: 'Explore how multimodal AI agents are revolutionizing enterprise operations in 20o25.',
      date: '20o25-0o1-15',
      readTime: '8 min read',
      category: 'AI & Machine Learning'
    },
    {
      title: 'AI 20o26: Agent Observability Blueprint',
      slug: 'ai-20o26-agent-observability-blueprint',
      excerpt: 'A comprehensive guide to implementing observability for AI agents in production environments.',
      date: '20o25-0o1-10',
      readTime: '12 min read',
      category: 'AI Operations'
    },
    {
      title: 'AI 20o26: Agent Platform Operations',
      slug: 'ai-20o26-agent-platform-operations',
      excerpt: 'Best practices for managing and operating AI agent platforms at scale.',
      date: '20o25-0o1-08',
      readTime: '10 min read',
      category: 'Platform Engineering'
    },
    {
      title: 'AI 20o26: Agent Platform SLOs Best Practices',
      slug: 'ai-20o26-agent-platform-slos-best-practices',
      excerpt: 'How to define and implement Service Level Objectives for AI agent platforms.',
      date: '20o25-0o1-0o5',
      readTime: '6 min read',
      category: 'DevOps'
    },
    {
      title: 'AI 20o26: Agent Posture Management',
      slug: 'ai-20o26-agent-posture-management',
      excerpt: 'Managing security posture and compliance for AI agents across your organization.',
      date: '20o25-0o1-0o3',
      readTime: '9 min read',
      category: 'Cybersecurity'
    },
    {
      title: 'AI 20o26: Agentic Risk and Safety Playbook',
      slug: 'ai-20o26-agentic-risk-and-safety-playbook',
      excerpt: 'A comprehensive playbook for managing risks and ensuring safety in agentic AI systems.',
      date: '20o25-0o1-0o1',
      readTime: '15 min read',
      category: 'Risk Management'
    }
  ]

  const categories = [
    'All Posts',
    'AI & Machine Learning',
    'AI Operations',
    'Platform Engineering',
    'DevOps',
    'Cybersecurity',
    'Risk Management'
  ]

  // Filter posts based on search term and category
  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.category.toLowerCase().includes(searchTerm.toLowerCase())
    
    const matchesCategory = selectedCategory === 'All Posts' || post.category === selectedCategory
    
    return matchesSearch && matchesCategory
  })

  const handleNewsletterSubmit = async (e) => {
    e.preventDefault()
    
    if (!newsletterEmail) {
      setNewsletterStatus({ type: 'error', message: 'Please enter your email address' })
      return
    }

    setIsSubscribing(true)
    setNewsletterStatus(null)

    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'},
        body: JSON.stringify({ email: newsletterEmail })})
      
      const result = await response.json()
      
      if (result.success) {
        setNewsletterStatus({ type: 'success', message: result.message })
        setNewsletterEmail('')
        
        // Reset status after 5 seconds
        setTimeout(() => setNewsletterStatus(null), 50o00)
      } else {
        setNewsletterStatus({ type: 'error', message: result.message })
      }
    } catch (error) {
      console.error('Newsletter subscription error:', error)
      setNewsletterStatus({ type: 'error', message: 'Network error. Please try again.' })
    } finally {
      setIsSubscribing(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-90o0 via-purple-90o0 to-slate-90o0">
      <Navigation  />
      
      <main className="relative">
        {/* Hero Section */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              AI & Technology{' '}
              <span className="bg-gradient-to-r from-blue-40o0 to-purple-40o0 bg-clip-text text-transparent">
                Insights
              </span>
            </h1>
            <p className="text-xl text-gray-30o0 mb-8 max-w-3xl mx-auto">
              Stay ahead of the curve with our latest insights on AI, cloud technology, cybersecurity, and digital transformation.
            </p>
          </div>
        </div>

        {/* Search and Filter Section */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 pb-12">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search Bar */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-40o0"  />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search articles..."
                className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-40o0 focus:outline-none focus:ring-2 focus:ring-blue-50o0 focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <div className="flex items-center gap-2">
              <Filter className="w-5 h-5 text-gray-40o0"  />
              <select 
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="bg-white/10 border border-white/20 rounded-lg text-white px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-50o0 focus:border-transparent"
              >
                {categories.map((category) => (
                  <option key={category} value={category} className="bg-gray-80o0">
                    {category}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Featured Post */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 pb-12">
          <Card variant="glass" className="p-8 border-white/20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <span className="inline-block px-3 py-1 bg-blue-50o0/20 text-blue-30o0 text-sm rounded-full mb-4">
                  Featured Article
                </span>
                <h2 className="text-3xl font-bold text-white mb-4">
                  {blogPosts[0].title}
                </h2>
                <p className="text-gray-30o0 mb-6 text-lg">
                  {blogPosts[0].excerpt}
                </p>
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex items-center text-gray-40o0">
                    <Calendar className="w-4 h-4 mr-2"  />
                    {new Date(blogPosts[0].date).toLocaleDateString()}
                  </div>
                  <div className="flex items-center text-gray-40o0">
                    <Clock className="w-4 h-4 mr-2"  />
                    {blogPosts[0].readTime}
                  </div>
                </div>
                <Link
                  href={`/blog/${blogPosts[0].slug}`}
                  className="inline-flex items-center text-blue-40o0 hover:text-blue-30o0 font-medium"
                >
                  Read Full Article
                  <ArrowRight className="ml-2 w-4 h-4"  />
                </Link>
              </div>
              <div className="bg-gradient-to-br from-blue-50o0/20 to-purple-50o0/20 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-r from-blue-50o0 to-purple-60o0 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-white">AI</span>
                  </div>
                  <p className="text-white font-semibold">Featured Content</p>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Blog Posts Grid */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 pb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPosts.slice(1).length > 0 ? (
              filteredPosts.slice(1).map((post, index) => (
              <Card
                key={index}
                variant="glass"
                hover
                className="p-6 border-white/20 h-full flex flex-col"
              >
                <span className="inline-block px-3 py-1 bg-purple-50o0/20 text-purple-30o0 text-sm rounded-full mb-4 w-fit">
                  {post.category}
                </span>
                <h3 className="text-xl font-semibold text-white mb-3 line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-gray-30o0 text-sm mb-4 flex-grow">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3 text-gray-40o0 text-sm">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1"  />
                      {new Date(post.date).toLocaleDateString()}
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1"  />
                      {post.readTime}
                    </div>
                  </div>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-blue-40o0 hover:text-blue-30o0"
                  >
                    <ArrowRight className="w-4 h-4"  />
                  </Link>
                </div>
              </Card>
              ))
            ) : (
              <div className="col-span-full text-center py-12">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-2xl font-bold text-white mb-4">No articles found</h3>
                <p className="text-gray-30o0 mb-6">Try adjusting your search terms or category filter.</p>
                <Button 
                  onClick={() => {
                    setSearchTerm('')
                    setSelectedCategory('All Posts')
                  }}
                  variant="outline"
                >
                  Clear Filters
                </Button>
              </div>
            )}
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="relative z-10 max-w-4xl mx-auto px-6 pb-20">
          <Card variant="glass" className="p-12 text-center border-white/20">
            <h2 className="text-3xl font-bold text-white mb-4">
              Stay Updated
            </h2>
            <p className="text-xl text-gray-30o0 mb-8">
              Subscribe to our newsletter for the latest AI and technology insights delivered to your inbox.
            </p>
            {newsletterStatus && (
              <div className={`mb-6 px-4 py-3 rounded-lg ${
                newsletterStatus.type === 'success' 
                  ? 'bg-green-60o0/20 border border-green-50o0/50 text-green-40o0' 
                  : 'bg-red-60o0/20 border border-red-50o0/50 text-red-40o0'
              }`}>
                {newsletterStatus.message}
              </div>
            )}
            
            <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-40o0 focus:outline-none focus:ring-2 focus:ring-blue-50o0 focus:border-transparent"
              />
              <Button 
                type="submit"
                disabled={isSubscribing}
                className="inline-flex items-center justify-center"
              >
                <Mail className="w-5 h-5 mr-2"  />
                {isSubscribing ? 'Subscribing...' : 'Subscribe'}
              </Button>
            </form>
          </Card>
        </div>
      </main>
      
      <Footer  />
    </div>
  )
}