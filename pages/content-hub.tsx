<<<<<<< HEAD
import React from 'react';
import Head from 'next/head';
<<<<<<< HEAD
import Link from 'next/link';

const ContentHub: React.FC = () => {
  const contentCategories = [
    {
      title: 'Automation Insights',
      description: 'Deep dives into automation strategies and best practices',
      icon: '🤖',
      articles: [
        { title: 'Building Self-Healing Systems', excerpt: 'Learn how to create systems that automatically detect and fix issues', readTime: '5 min read' },
        { title: 'CI/CD Pipeline Optimization', excerpt: 'Streamline your deployment process with intelligent automation', readTime: '7 min read' },
        { title: 'Monitoring and Alerting', excerpt: 'Set up comprehensive monitoring for your automation workflows', readTime: '6 min read' }
      ]
    },
    {
      title: 'Cloud Architecture',
      description: 'Modern cloud-native design patterns and implementation',
      icon: '☁️',
      articles: [
        { title: 'Microservices Best Practices', excerpt: 'Design scalable microservices architecture for cloud deployment', readTime: '8 min read' },
        { title: 'Serverless Computing Guide', excerpt: 'Leverage serverless for cost-effective and scalable solutions', readTime: '6 min read' },
        { title: 'Container Orchestration', excerpt: 'Master Kubernetes and Docker for production deployments', readTime: '9 min read' }
      ]
    },
    {
      title: 'Performance Optimization',
      description: 'Techniques to improve application speed and efficiency',
      icon: '⚡',
      articles: [
        { title: 'Frontend Performance Tips', excerpt: 'Optimize your React applications for better user experience', readTime: '5 min read' },
        { title: 'Database Query Optimization', excerpt: 'Speed up your database operations with these techniques', readTime: '7 min read' },
        { title: 'CDN and Caching Strategies', excerpt: 'Implement effective caching for faster content delivery', readTime: '6 min read' }
      ]
    },
    {
      title: 'Security Best Practices',
      description: 'Protect your applications with industry-standard security measures',
      icon: '🔒',
      articles: [
        { title: 'API Security Fundamentals', excerpt: 'Secure your APIs with authentication and authorization', readTime: '6 min read' },
        { title: 'Data Encryption Guide', excerpt: 'Implement encryption for sensitive data at rest and in transit', readTime: '8 min read' },
        { title: 'Security Auditing', excerpt: 'Regular security assessments and vulnerability scanning', readTime: '7 min read' }
      ]
    }
  ];

  const featuredContent = [
    {
      title: 'The Future of Autonomous Cloud Operations',
      excerpt: 'Discover how AI-powered automation is revolutionizing cloud infrastructure management and reducing operational overhead.',
      category: 'Automation Insights',
      author: 'Zion Team',
      date: '2025-01-17',
      readTime: '10 min read',
      featured: true
    },
    {
      title: 'Building Resilient Systems with Redundancy',
      excerpt: 'Learn the principles of system redundancy and how to implement them for maximum uptime and reliability.',
      category: 'Cloud Architecture',
      author: 'Zion Team',
      date: '2025-01-16',
      readTime: '12 min read',
      featured: true
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <Head>
        <title>Content Hub - bolt.new.zion.app</title>
        <meta name="description" content="Comprehensive content hub featuring automation insights, cloud architecture, and best practices" />
        <meta name="keywords" content="content, automation, cloud, performance, security, best practices" />
      </Head>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
=======
import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';

const ContentHub: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const contentCategories = [
    { id: 'all', name: 'All Content', icon: '📚' },
    { id: 'guides', name: 'Guides', icon: '📖' },
    { id: 'tutorials', name: 'Tutorials', icon: '🎓' },
    { id: 'case-studies', name: 'Case Studies', icon: '📊' },
    { id: 'news', name: 'News', icon: '📰' },
    { id: 'insights', name: 'Insights', icon: '💡' }
  ];

  const contentItems = [
    {
      id: 1,
      title: 'Getting Started with Automation',
      category: 'guides',
      excerpt: 'Learn the fundamentals of setting up automated workflows in your development environment.',
      readTime: '5 min read',
      date: '2025-01-17',
      tags: ['automation', 'beginners', 'workflow'],
      featured: true
    },
    {
      id: 2,
      title: 'Advanced CI/CD Pipeline Optimization',
      category: 'tutorials',
      excerpt: 'Deep dive into optimizing your continuous integration and deployment pipelines for maximum efficiency.',
      readTime: '12 min read',
      date: '2025-01-16',
      tags: ['ci-cd', 'optimization', 'advanced'],
      featured: false
    },
    {
      id: 3,
      title: 'How We Achieved 99.9% Uptime',
      category: 'case-studies',
      excerpt: 'Real-world case study on implementing comprehensive redundancy systems for maximum reliability.',
      readTime: '8 min read',
      date: '2025-01-15',
      tags: ['uptime', 'redundancy', 'case-study'],
      featured: true
    },
    {
      id: 4,
      title: 'The Future of Autonomous Development',
      category: 'insights',
      excerpt: 'Exploring emerging trends in AI-powered development automation and what it means for developers.',
      readTime: '7 min read',
      date: '2025-01-14',
      tags: ['ai', 'future', 'automation'],
      featured: false
    },
    {
      id: 5,
      title: 'Security Best Practices for Cloud Automation',
      category: 'guides',
      excerpt: 'Essential security guidelines for implementing automation in cloud environments.',
      readTime: '10 min read',
      date: '2025-01-13',
      tags: ['security', 'cloud', 'best-practices'],
      featured: false
    },
    {
      id: 6,
      title: 'Performance Monitoring at Scale',
      category: 'tutorials',
      excerpt: 'Learn how to implement comprehensive performance monitoring across large-scale applications.',
      readTime: '15 min read',
      date: '2025-01-12',
      tags: ['monitoring', 'performance', 'scale'],
      featured: false
    }
  ];

  const filteredContent = activeCategory === 'all' 
    ? contentItems 
    : contentItems.filter(item => item.category === activeCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      <Head>
        <title>Content Hub - bolt.new.zion.app</title>
        <meta name="description" content="Comprehensive content hub featuring guides, tutorials, case studies, and insights" />
        <meta name="keywords" content="content, guides, tutorials, case studies, insights, bolt.new.zion.app" />
      </Head>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
>>>>>>> origin/cursor/update-content-and-fix-links-5397
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Content Hub
            </h1>
<<<<<<< HEAD
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our comprehensive collection of articles, guides, and insights on automation, 
              cloud architecture, performance optimization, and security best practices.
            </p>
          </div>

          {/* Navigation */}
          <nav className="mb-8">
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/" className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                Home
              </Link>
              <Link href="/automation" className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors">
                Automation
              </Link>
              <Link href="/component-library" className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors">
                Components
              </Link>
            </div>
          </nav>

          {/* Featured Content */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Featured Content</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {featuredContent.map((content, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-blue-500">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-sm text-blue-600 font-semibold">{content.category}</span>
                    <span className="text-sm text-gray-500">•</span>
                    <span className="text-sm text-gray-500">{content.readTime}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{content.title}</h3>
                  <p className="text-gray-600 mb-4">{content.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-gray-500">
                      By {content.author} • {content.date}
                    </div>
                    <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                      Read More
=======
            <p className="text-xl text-gray-600">
              Discover comprehensive guides, tutorials, and insights to master automation and development
            </p>
            <div className="mt-4">
              <Link href="/" className="text-blue-600 hover:text-blue-800 underline">
                ← Back to Home
              </Link>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Featured Content</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {contentItems.filter(item => item.featured).map((item) => (
                <div key={item.id} className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">
                      Featured
                    </span>
                    <span className="text-sm text-gray-500">{item.readTime}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">{item.title}</h3>
                  <p className="text-gray-600 mb-4">{item.excerpt}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {item.tags.map((tag) => (
                      <span key={tag} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{item.date}</span>
                    <button className="text-blue-600 hover:text-blue-800 font-medium">
                      Read More →
>>>>>>> origin/cursor/update-content-and-fix-links-5397
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

<<<<<<< HEAD
          {/* Content Categories */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Browse by Category</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {contentCategories.map((category, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg p-6 text-center">
                  <div className="text-4xl mb-4">{category.icon}</div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{category.title}</h3>
                  <p className="text-gray-600 mb-4 text-sm">{category.description}</p>
                  <div className="text-sm text-gray-500 mb-4">
                    {category.articles.length} articles
                  </div>
                  <button className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                    Explore
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Latest Articles */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Latest Articles</h2>
            <div className="space-y-6">
              {contentCategories.flatMap(category => 
                category.articles.map((article, index) => ({
                  ...article,
                  category: category.title,
                  icon: category.icon
                }))
              ).slice(0, 8).map((article, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                  <div className="flex items-start gap-4">
                    <div className="text-2xl">{article.icon}</div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-sm text-blue-600 font-semibold">{article.category}</span>
                        <span className="text-sm text-gray-500">•</span>
                        <span className="text-sm text-gray-500">{article.readTime}</span>
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{article.title}</h3>
                      <p className="text-gray-600">{article.excerpt}</p>
                    </div>
                    <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors">
                      Read
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold text-blue-900 mb-4">Stay Updated</h2>
            <p className="text-blue-700 mb-6">
              Get the latest insights on automation, cloud architecture, and best practices delivered to your inbox.
            </p>
            <div className="max-w-md mx-auto">
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                  Subscribe
=======
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <div className="flex flex-wrap gap-2 mb-6">
              {contentCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    activeCategory === category.id
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <span className="mr-2">{category.icon}</span>
                  {category.name}
                </button>
              ))}
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredContent.map((item) => (
                <div key={item.id} className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-sm text-gray-500">{item.readTime}</span>
                    <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full capitalize">
                      {item.category}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">{item.title}</h3>
                  <p className="text-gray-600 mb-4">{item.excerpt}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {item.tags.slice(0, 3).map((tag) => (
                      <span key={tag} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{item.date}</span>
                    <button className="text-blue-600 hover:text-blue-800 font-medium">
                      Read More →
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Stay Updated</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-medium text-gray-700 mb-3">Newsletter Subscription</h3>
                <p className="text-gray-600 mb-4">
                  Get the latest content updates and automation insights delivered to your inbox.
                </p>
                <div className="flex gap-2">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                    Subscribe
                  </button>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-700 mb-3">Content Requests</h3>
                <p className="text-gray-600 mb-4">
                  Have a topic you'd like us to cover? Let us know what content would be most helpful.
                </p>
                <button className="px-6 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors">
                  Suggest Topic
>>>>>>> origin/cursor/update-content-and-fix-links-5397
                </button>
              </div>
            </div>
          </div>
<<<<<<< HEAD

          {/* Quick Links */}
          <div className="bg-white rounded-lg shadow-lg p-8 mt-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Quick Links</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Resources</h3>
                <ul className="space-y-2">
                  <li><Link href="/api-documentation" className="text-blue-600 hover:text-blue-800">API Documentation</Link></li>
                  <li><Link href="/component-library" className="text-blue-600 hover:text-blue-800">Component Library</Link></li>
                  <li><Link href="/reports" className="text-blue-600 hover:text-blue-800">System Reports</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Support</h3>
                <ul className="space-y-2">
                  <li><Link href="/contact" className="text-blue-600 hover:text-blue-800">Contact Us</Link></li>
                  <li><a href="https://github.com/Zion-Holdings/zion.app/issues" className="text-blue-600 hover:text-blue-800">GitHub Issues</a></li>
                  <li><Link href="/automation-health" className="text-blue-600 hover:text-blue-800">System Health</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Community</h3>
                <ul className="space-y-2">
                  <li><a href="https://github.com/Zion-Holdings/zion.app" className="text-blue-600 hover:text-blue-800">GitHub Repository</a></li>
                  <li><Link href="/blog" className="text-blue-600 hover:text-blue-800">Blog</Link></li>
                  <li><Link href="/about" className="text-blue-600 hover:text-blue-800">About Us</Link></li>
                </ul>
              </div>
=======

const ContentHub = () => {
  return (
    <>
      <Head>
        <title>Content Hub - Zion.app</title>
        <meta name="description" content="Centralized content management and creation hub for Zion.app platform" />
        <meta name="keywords" content="content, hub, management, creation, Zion, AI" />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-7xl mx-auto">
            <header className="text-center mb-12">
              <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Content Hub
              </h1>
              <p className="text-xl text-gray-300">
                Centralized content management and AI-powered creation platform
              </p>
            </header>

            <div className="grid gap-8">
              {/* Content Overview */}
              <section className="bg-gray-800/50 rounded-lg p-6 border border-gray-700">
                <h2 className="text-2xl font-semibold mb-6 text-blue-400">Content Overview</h2>
                
                <div className="grid md:grid-cols-4 gap-6">
                  <div className="bg-gray-700/50 p-4 rounded text-center">
                    <div className="text-3xl font-bold text-green-400 mb-2">2,960</div>
                    <div className="text-gray-300">Total Pages</div>
                    <div className="text-xs text-green-400 mt-1">+156 this month</div>
                  </div>
                  
                  <div className="bg-gray-700/50 p-4 rounded text-center">
                    <div className="text-3xl font-bold text-blue-400 mb-2">847</div>
                    <div className="text-gray-300">Blog Posts</div>
                    <div className="text-xs text-blue-400 mt-1">+23 this month</div>
                  </div>
                  
                  <div className="bg-gray-700/50 p-4 rounded text-center">
                    <div className="text-3xl font-bold text-purple-400 mb-2">156</div>
                    <div className="text-gray-300">Services</div>
                    <div className="text-xs text-purple-400 mt-1">+8 this month</div>
                  </div>
                  
                  <div className="bg-gray-700/50 p-4 rounded text-center">
                    <div className="text-3xl font-bold text-yellow-400 mb-2">98.2%</div>
                    <div className="text-gray-300">SEO Score</div>
                    <div className="text-xs text-green-400 mt-1">+2.1% this month</div>
                  </div>
                </div>
              </section>

              {/* AI Content Creation */}
              <section className="bg-gray-800/50 rounded-lg p-6 border border-gray-700">
                <h2 className="text-2xl font-semibold mb-6 text-blue-400">AI Content Creation</h2>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-gray-700/50 p-4 rounded">
                    <h3 className="font-medium text-green-400 mb-3">Content Generation</h3>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-gray-300">AI Content Factory</span>
                        <span className="px-2 py-1 bg-green-600 text-white text-xs rounded">Active</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-300">SEO Optimization</span>
                        <span className="px-2 py-1 bg-green-600 text-white text-xs rounded">Active</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-300">Image Generation</span>
                        <span className="px-2 py-1 bg-green-600 text-white text-xs rounded">Active</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-300">Content Scheduling</span>
                        <span className="px-2 py-1 bg-green-600 text-white text-xs rounded">Active</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-700/50 p-4 rounded">
                    <h3 className="font-medium text-green-400 mb-3">Recent Creations</h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                        <span className="text-gray-300">New service page: AI Consulting</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                        <span className="text-gray-300">Blog post: Future of AI in 2025</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                        <span className="text-gray-300">Landing page: Enterprise Solutions</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                        <span className="text-gray-300">Case study: Startup Success Story</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 text-center">
                  <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors">
                    Create New Content
                  </button>
                </div>
              </section>

              {/* Content Categories */}
              <section className="bg-gray-800/50 rounded-lg p-6 border border-gray-700">
                <h2 className="text-2xl font-semibold mb-6 text-blue-400">Content Categories</h2>
                
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-gray-700/50 p-4 rounded">
                    <h3 className="font-medium text-green-400 mb-3">Services</h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center justify-between">
                        <span className="text-gray-300">AI Development</span>
                        <span className="text-blue-400">24 pages</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-300">Cloud Solutions</span>
                        <span className="text-blue-400">18 pages</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-300">Consulting</span>
                        <span className="text-blue-400">15 pages</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-300">Training</span>
                        <span className="text-blue-400">12 pages</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-700/50 p-4 rounded">
                    <h3 className="font-medium text-green-400 mb-3">Blog</h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center justify-between">
                        <span className="text-gray-300">Technology</span>
                        <span className="text-blue-400">156 posts</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-300">Industry News</span>
                        <span className="text-blue-400">89 posts</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-300">Tutorials</span>
                        <span className="text-blue-400">67 posts</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-300">Case Studies</span>
                        <span className="text-blue-400">45 posts</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-700/50 p-4 rounded">
                    <h3 className="font-medium text-green-400 mb-3">Resources</h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center justify-between">
                        <span className="text-gray-300">Whitepapers</span>
                        <span className="text-blue-400">23 docs</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-300">E-books</span>
                        <span className="text-blue-400">18 docs</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-300">Templates</span>
                        <span className="text-blue-400">34 docs</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-300">Guides</span>
                        <span className="text-blue-400">56 docs</span>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Content Performance */}
              <section className="bg-gray-800/50 rounded-lg p-6 border border-gray-700">
                <h2 className="text-2xl font-semibold mb-6 text-blue-400">Content Performance</h2>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-gray-700/50 p-4 rounded">
                    <h3 className="font-medium text-green-400 mb-3">Top Performing Content</h3>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-gray-300">AI Automation Guide</span>
                        <span className="text-green-400">15.2K views</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-300">Cloud Migration Tips</span>
                        <span className="text-green-400">12.8K views</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-300">Future of AI 2025</span>
                        <span className="text-green-400">11.5K views</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-300">Startup Success Story</span>
                        <span className="text-green-400">9.7K views</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-700/50 p-4 rounded">
                    <h3 className="font-medium text-green-400 mb-3">SEO Performance</h3>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-gray-300">Organic Traffic</span>
                        <span className="text-green-400">+23%</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-300">Keyword Rankings</span>
                        <span className="text-green-400">+156</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-300">Backlinks</span>
                        <span className="text-green-400">+89</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-300">Page Speed</span>
                        <span className="text-green-400">+15%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Content Calendar */}
              <section className="bg-gray-800/50 rounded-lg p-6 border border-gray-700">
                <h2 className="text-2xl font-semibold mb-6 text-blue-400">Content Calendar</h2>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-gray-700/50 p-4 rounded">
                    <h3 className="font-medium text-green-400 mb-3">This Week</h3>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3 text-sm">
                        <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                        <span className="text-gray-300">Monday: AI Trends Blog Post</span>
                      </div>
                      <div className="flex items-center space-x-3 text-sm">
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                        <span className="text-gray-300">Wednesday: Service Page Update</span>
                      </div>
                      <div className="flex items-center space-x-3 text-sm">
                        <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                        <span className="text-gray-300">Friday: Case Study Publication</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-700/50 p-4 rounded">
                    <h3 className="font-medium text-green-400 mb-3">Next Week</h3>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3 text-sm">
                        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                        <span className="text-gray-300">Monday: Whitepaper Release</span>
                      </div>
                      <div className="flex items-center space-x-3 text-sm">
                        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                        <span className="text-gray-300">Wednesday: Newsletter</span>
                      </div>
                      <div className="flex items-center space-x-3 text-sm">
                        <div className="w-3 h-3 bg-indigo-500 rounded-full"></div>
                        <span className="text-gray-300">Friday: Video Content</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 text-center">
                  <button className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors">
                    Schedule Content
                  </button>
                </div>
              </section>

              {/* Content Tools */}
              <section className="bg-gray-800/50 rounded-lg p-6 border border-gray-700">
                <h2 className="text-2xl font-semibold mb-6 text-blue-400">Content Tools</h2>
                
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-gray-700/50 p-4 rounded text-center">
                    <div className="text-4xl mb-3">📝</div>
                    <h3 className="font-medium text-green-400 mb-2">AI Writer</h3>
                    <p className="text-sm text-gray-300 mb-3">Generate high-quality content with AI assistance</p>
                    <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded text-sm transition-colors">
                      Start Writing
                    </button>
                  </div>

                  <div className="bg-gray-700/50 p-4 rounded text-center">
                    <div className="text-4xl mb-3">🔍</div>
                    <h3 className="font-medium text-green-400 mb-2">SEO Analyzer</h3>
                    <p className="text-sm text-gray-300 mb-3">Optimize content for search engines</p>
                    <button className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded text-sm transition-colors">
                      Analyze Content
                    </button>
                  </div>

                  <div className="bg-gray-700/50 p-4 rounded text-center">
                    <div className="text-4xl mb-3">📊</div>
                    <h3 className="font-medium text-green-400 mb-2">Analytics</h3>
                    <p className="text-sm text-gray-300 mb-3">Track content performance and engagement</p>
                    <button className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded text-sm transition-colors">
                      View Reports
                    </button>
                  </div>

                  <div className="bg-gray-700/50 p-4 rounded text-center">
                    <div className="text-4xl mb-3">🖼️</div>
                    <h3 className="font-medium text-green-400 mb-2">Image Generator</h3>
                    <p className="text-sm text-gray-300 mb-3">Create custom images with AI</p>
                    <button className="px-4 py-2 bg-yellow-600 hover:bg-yellow-700 text-white rounded text-sm transition-colors">
                      Generate Image
                    </button>
                  </div>

                  <div className="bg-gray-700/50 p-4 rounded text-center">
                    <div className="text-4xl mb-3">📅</div>
                    <h3 className="font-medium text-green-400 mb-2">Scheduler</h3>
                    <p className="text-sm text-gray-300 mb-3">Plan and schedule content publication</p>
                    <button className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded text-sm transition-colors">
                      Schedule
                    </button>
                  </div>

                  <div className="bg-gray-700/50 p-4 rounded text-center">
                    <div className="text-4xl mb-3">🔗</div>
                    <h3 className="font-medium text-green-400 mb-2">Link Manager</h3>
                    <p className="text-sm text-gray-300 mb-3">Manage internal and external links</p>
                    <button className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded text-sm transition-colors">
                      Manage Links
                    </button>
                  </div>
                </div>
              </section>

              {/* Content Insights */}
              <section className="bg-gray-800/50 rounded-lg p-6 border border-gray-700">
                <h2 className="text-2xl font-semibold mb-6 text-blue-400">Content Insights</h2>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-gray-700/50 p-4 rounded">
                    <h3 className="font-medium text-green-400 mb-3">Content Trends</h3>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-gray-300">AI-related content</span>
                        <span className="text-green-400">+45% engagement</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-300">Video content</span>
                        <span className="text-green-400">+67% views</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-300">Interactive guides</span>
                        <span className="text-green-400">+34% time on page</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-300">Case studies</span>
                        <span className="text-green-400">+28% conversions</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-700/50 p-4 rounded">
                    <h3 className="font-medium text-green-400 mb-3">Audience Insights</h3>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-gray-300">Primary audience</span>
                        <span className="text-blue-400">Tech professionals</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-300">Preferred format</span>
                        <span className="text-blue-400">Long-form content</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-300">Peak engagement</span>
                        <span className="text-blue-400">Tuesday 10AM</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-300">Content length</span>
                        <span className="text-blue-400">1500-2500 words</span>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Get Started */}
              <section className="bg-gray-800/50 rounded-lg p-6 border border-gray-700 text-center">
                <h2 className="text-2xl font-semibold mb-4 text-blue-400">Ready to Create Amazing Content?</h2>
                <p className="text-gray-300 mb-6">
                  Start building your content strategy with our AI-powered tools and comprehensive management platform
                </p>
                <div className="space-x-4">
                  <a 
                    href="/contact" 
                    className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors"
                  >
                    Get Started
                  </a>
                  <a 
                    href="/blog" 
                    className="inline-block bg-gray-600 hover:bg-gray-700 text-white px-6 py-3 rounded-lg transition-colors"
                  >
                    View Blog
                  </a>
                  <a 
                    href="/services" 
                    className="inline-block bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg transition-colors"
                  >
                    Explore Services
                  </a>
                </div>
              </section>
>>>>>>> origin/cursor/update-content-and-fix-links-32b9
            </div>
          </div>
        </div>
      </div>
<<<<<<< HEAD
    </div>
=======
    </>
>>>>>>> origin/cursor/update-content-and-fix-links-32b9
=======
        </div>
      </div>
    </div>
>>>>>>> origin/cursor/update-content-and-fix-links-5397
  );
};

export default ContentHub;