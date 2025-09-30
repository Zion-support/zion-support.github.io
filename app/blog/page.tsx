import React from 'react';
import Link from 'next/link';

const blogPosts = [
  {
<<<<<<< HEAD
    title: 'AI 2026 Neural Superintelligence: The Next Frontier of Artificial Intelligence',
    slug: 'ai-2026-neural-superintelligence',
    excerpt: 'Explore the revolutionary AI 2026 neural superintelligence systems that surpass human intelligence, delivering 1000x performance gains and transforming enterprise operations.',
    category: 'Breakthrough Technology',
    publishedAt: 'January 20, 2026',
    image: '🧠',
    color: 'indigo',
    readTime: '18 min read'
  },
  {
    title: 'AI 2026 Enterprise Autonomous Systems: The Future of Business Automation',
    slug: 'ai-2026-enterprise-autonomous-systems',
    excerpt: 'Discover how next-generation AI autonomous systems are revolutionizing enterprise operations, delivering 400% efficiency gains, 70% cost reduction, and complete business process automation.',
    category: 'Revolutionary Technology',
    publishedAt: 'January 20, 2026',
    image: '🤖',
    color: 'purple',
    readTime: '15 min read'
=======
    title: 'AI 2026: The Complete Future Guide',
    slug: 'ai-2026-comprehensive-future-guide',
    excerpt: 'Discover the revolutionary AI technologies that will reshape enterprise operations in 2026. From quantum computing to neural interfaces, explore breakthrough innovations delivering unprecedented ROI.',
    category: 'Comprehensive Guide',
    readTime: '25 min read',
    publishedAt: 'January 20, 2025',
    image: '🚀',
    color: 'purple',
    featured: true
>>>>>>> origin/cursor/create-and-deploy-new-content-049c
  },
  {
    title: 'AI 2026: Revolutionary Trends Transforming Enterprise',
    slug: 'ai-2026-revolutionary-trends',
    excerpt: 'Discover the revolutionary AI trends shaping 2026. From autonomous enterprise systems to quantum AI, explore how these breakthroughs are transforming business operations.',
    category: 'Featured Article',
    publishedAt: 'January 15, 2026',
    image: '🚀',
<<<<<<< HEAD
    color: 'blue',
    readTime: '12 min read'
  },
  {
    title: 'AI 2026 Quantum Computing Breakthrough: Revolutionary Processing Power',
    slug: 'quantum-ai-breakthrough-2026',
    excerpt: 'Explore the revolutionary AI quantum computing breakthrough of 2026. Discover how quantum-enhanced AI is solving complex problems 1000x faster and transforming enterprise computing.',
    category: 'Breakthrough Technology',
    publishedAt: 'January 10, 2026',
    image: '⚛️',
    color: 'purple',
    readTime: '14 min read'
  },
  {
    title: 'AI Enterprise Transformation 2026: Complete Implementation Guide',
    slug: 'ai-enterprise-transformation-2026',
    excerpt: 'Master AI enterprise transformation with proven strategies, ROI frameworks, and implementation roadmaps. Achieve 300% ROI and 70% cost reduction.',
    category: 'Implementation Guide',
    publishedAt: 'January 5, 2026',
    image: '🏢',
    color: 'green',
    readTime: '20 min read'
  },
  {
    title: 'AI Autonomous Agents 2025: Enterprise Implementation Guide',
    slug: 'ai-autonomous-agents-2025',
    excerpt: 'Master autonomous AI agents with 300% ROI strategies and enterprise-ready deployment patterns. Achieve 80% automation and 90% efficiency gains.',
    category: 'Implementation Guide',
    publishedAt: 'December 28, 2025',
    image: '🤖',
    color: 'blue',
    readTime: '16 min read'
=======
    color: 'blue'
  },
  {
    title: 'Quantum AI Computing: The Next Frontier',
    slug: 'quantum-ai-computing-next-frontier',
    excerpt: 'Explore how quantum computing is revolutionizing AI processing, delivering 1000x faster results and solving previously impossible optimization problems.',
    category: 'Technology Deep Dive',
    readTime: '18 min read',
    publishedAt: 'January 18, 2026',
    image: '⚛️',
    color: 'purple'
  },
  {
    title: 'Neural Interfaces: Direct Brain-AI Communication',
    slug: 'neural-interfaces-brain-ai-communication',
    excerpt: 'Discover how neural interfaces are enabling direct brain-computer communication, revolutionizing human-AI collaboration and productivity.',
    category: 'Breakthrough Technology',
    readTime: '20 min read',
    publishedAt: 'January 16, 2026',
    image: '🧠',
    color: 'indigo'
  },
  {
    title: 'Autonomous AI Agents: Self-Managing Enterprise Systems',
    slug: 'autonomous-ai-agents-enterprise',
    excerpt: 'Learn how autonomous AI agents are creating self-managing enterprise systems that operate independently with 99.9% accuracy.',
    category: 'Enterprise AI',
    readTime: '14 min read',
    publishedAt: 'January 14, 2026',
    image: '🤖',
    color: 'green'
  },
  {
    title: 'Multimodal AI Integration: The Future of Enterprise AI',
    slug: 'multimodal-ai-integration-future',
    excerpt: 'Explore how multimodal AI systems are processing text, images, audio, and video simultaneously to create more natural human-AI interactions.',
    category: 'AI Integration',
    readTime: '16 min read',
    publishedAt: 'January 12, 2026',
    image: '🎯',
    color: 'orange'
>>>>>>> origin/cursor/create-and-deploy-new-content-049c
  }
];

const categories = [
<<<<<<< HEAD
  { name: 'All', count: blogPosts.length, color: 'gray' },
  { name: 'Breakthrough Technology', count: blogPosts.filter(post => post.category === 'Breakthrough Technology').length, color: 'purple' },
  { name: 'Revolutionary Technology', count: blogPosts.filter(post => post.category === 'Revolutionary Technology').length, color: 'indigo' },
  { name: 'Implementation Guide', count: blogPosts.filter(post => post.category === 'Implementation Guide').length, color: 'green' },
  { name: 'Featured Article', count: blogPosts.filter(post => post.category === 'Featured Article').length, color: 'blue' }
=======
  { name: 'All', count: blogPosts.length },
  { name: 'Featured Article', count: blogPosts.filter(post => post.category === 'Featured Article').length },
  { name: 'Comprehensive Guide', count: blogPosts.filter(post => post.category === 'Comprehensive Guide').length },
  { name: 'Technology Deep Dive', count: blogPosts.filter(post => post.category === 'Technology Deep Dive').length },
  { name: 'Enterprise AI', count: blogPosts.filter(post => post.category === 'Enterprise AI').length },
  { name: 'ROI Guide', count: blogPosts.filter(post => post.category === 'ROI Guide').length }
>>>>>>> origin/cursor/create-and-deploy-new-content-049c
];

export default function BlogPage() {
  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  return (
<<<<<<< HEAD
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            AI & Technology
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              {' '}Insights
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Stay ahead with the latest AI breakthroughs, implementation guides, and revolutionary technologies 
            that are transforming enterprise operations worldwide.
          </p>
=======
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-purple-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              AI Blog
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                Latest Insights & Breakthroughs
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Stay ahead with cutting-edge AI insights, revolutionary technologies, 
              and proven strategies that are transforming enterprise operations worldwide.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-6">
              <div className="flex items-center gap-2">
                <span className="text-2xl">🚀</span>
                <span className="text-lg font-semibold">Latest Trends</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">⚡</span>
                <span className="text-lg font-semibold">Breakthrough Tech</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">💡</span>
                <span className="text-lg font-semibold">Expert Insights</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      {featuredPost && (
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <span className="bg-gradient-to-r from-purple-100 to-blue-100 text-purple-800 px-4 py-2 rounded-full text-sm font-semibold mb-4 inline-block">
                FEATURED ARTICLE
              </span>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Must-Read Content</h2>
            </div>
            
            <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-2xl p-8 md:p-12 border border-purple-200">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                      {featuredPost.category}
                    </span>
                    <span className="text-gray-600 text-sm">{featuredPost.readTime}</span>
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">
                    {featuredPost.title}
                  </h3>
                  <p className="text-lg text-gray-600 mb-6">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center gap-4">
                    <Link
                      href={`/blog/${featuredPost.slug}`}
                      className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                    >
                      Read Full Article
                    </Link>
                    <div className="text-gray-500 text-sm">
                      Published {featuredPost.publishedAt}
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-8xl mb-4">{featuredPost.image}</div>
                  <div className="text-2xl font-bold text-gray-900">AI 2026</div>
                  <div className="text-gray-600">Revolutionary Technologies</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Categories */}
      <section className="py-12 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Browse by Category</h2>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.name}
                className="bg-white text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 hover:text-blue-700 transition-colors border border-gray-200 hover:border-blue-300"
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>
>>>>>>> origin/cursor/create-and-deploy-new-content-049c
        </div>

<<<<<<< HEAD
        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.name}
              className={`px-6 py-3 rounded-full font-semibold transition-colors ${
                category.color === 'gray'
                  ? 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  : category.color === 'purple'
                  ? 'bg-purple-100 text-purple-700 hover:bg-purple-200'
                  : category.color === 'indigo'
                  ? 'bg-indigo-100 text-indigo-700 hover:bg-indigo-200'
                  : category.color === 'green'
                  ? 'bg-green-100 text-green-700 hover:bg-green-200'
                  : 'bg-blue-100 text-blue-700 hover:bg-blue-200'
              }`}
            >
              {category.name} ({category.count})
            </button>
          ))}
        </div>

        {/* Featured Posts */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(0, 3).map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="group">
                <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border border-gray-200 hover:border-indigo-200">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                      post.color === 'indigo' ? 'bg-indigo-100' :
                      post.color === 'purple' ? 'bg-purple-100' :
                      post.color === 'blue' ? 'bg-blue-100' :
                      'bg-green-100'
                    }`}>
                      <span className="text-2xl">{post.image}</span>
                    </div>
                    <div>
                      <div className={`text-sm font-semibold ${
                        post.color === 'indigo' ? 'text-indigo-600' :
                        post.color === 'purple' ? 'text-purple-600' :
                        post.color === 'blue' ? 'text-blue-600' :
                        'text-green-600'
                      }`}>
                        {post.category}
                      </div>
                      <div className="text-sm text-gray-500">{post.readTime}</div>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors">
=======
      {/* Blog Posts Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Latest Articles</h2>
            <p className="text-lg text-gray-600">
              Discover the latest insights, trends, and breakthroughs in AI technology
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-blue-300 overflow-hidden"
              >
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      post.color === 'blue' ? 'bg-blue-100 text-blue-800' :
                      post.color === 'green' ? 'bg-green-100 text-green-800' :
                      post.color === 'purple' ? 'bg-purple-100 text-purple-800' :
                      post.color === 'indigo' ? 'bg-indigo-100 text-indigo-800' :
                      post.color === 'orange' ? 'bg-orange-100 text-orange-800' :
                      'bg-gray-100 text-gray-800'
                    }`}>
                      {post.category}
                    </span>
                    <span className="text-gray-500 text-sm">{post.readTime}</span>
                  </div>
                  
                  <div className="text-4xl mb-4">{post.image}</div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
>>>>>>> origin/cursor/create-and-deploy-new-content-049c
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
<<<<<<< HEAD
                    <div className="text-sm text-gray-500">{post.publishedAt}</div>
                    <div className="text-indigo-600 font-semibold group-hover:text-indigo-700 transition-colors">
                      Read Article →
                    </div>
=======
                    <div className="text-blue-600 font-semibold group-hover:text-blue-700 transition-colors">
                      Read Article →
                    </div>
                    <div className="text-gray-500 text-sm">
                      {post.publishedAt}
                    </div>
>>>>>>> origin/cursor/create-and-deploy-new-content-049c
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

<<<<<<< HEAD
        {/* All Posts */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-8">All Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="group">
                <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-200">
                  <div className="flex items-center gap-2 mb-3">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      post.color === 'indigo' ? 'bg-indigo-100 text-indigo-800' :
                      post.color === 'purple' ? 'bg-purple-100 text-purple-800' :
                      post.color === 'blue' ? 'bg-blue-100 text-blue-800' :
                      'bg-green-100 text-green-800'
                    }`}>
                      {post.category}
                    </span>
                    <span className="text-sm text-gray-500">{post.readTime}</span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-3 text-sm line-clamp-2">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-gray-500">{post.publishedAt}</div>
                    <div className="text-indigo-600 font-semibold group-hover:text-indigo-700 transition-colors">
                      Read →
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Stay Updated with AI Insights</h3>
          <p className="text-indigo-100 mb-6 max-w-2xl mx-auto">
            Get the latest AI breakthroughs, implementation guides, and industry insights delivered to your inbox.
=======
      {/* Newsletter Signup */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated with AI Insights</h2>
          <p className="text-xl text-blue-100 mb-8">
            Get the latest AI trends, breakthroughs, and enterprise insights delivered to your inbox
>>>>>>> origin/cursor/create-and-deploy-new-content-049c
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
            />
<<<<<<< HEAD
            <button className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Subscribe
            </button>
          </div>
=======
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Subscribe
            </button>
          </div>
          <p className="text-sm text-blue-200 mt-4">
            Join 10,000+ professionals. Unsubscribe anytime.
          </p>
>>>>>>> origin/cursor/create-and-deploy-new-content-049c
        </div>
      </div>
    </div>
  );
}