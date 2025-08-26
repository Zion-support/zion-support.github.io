import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

<<<<<<< HEAD
export default function ContentHubPage() {
  const contentCategories = [
    {
      title: "Tutorials",
      description: "Step-by-step guides to master autonomous automation",
      icon: "📚",
      count: 45,
      color: "blue"
    },
    {
      title: "Case Studies",
      description: "Real-world examples of successful automation implementations",
      icon: "📊",
      count: 23,
      color: "green"
    },
    {
      title: "Whitepapers",
      description: "In-depth research and technical documentation",
      icon: "📄",
      count: 12,
      color: "purple"
    },
    {
      title: "Webinars",
      description: "Live and recorded sessions with industry experts",
      icon: "🎥",
      count: 18,
      color: "red"
    },
    {
      title: "Templates",
      description: "Ready-to-use automation configurations and scripts",
      icon: "⚙️",
      count: 67,
      color: "orange"
    },
    {
      title: "Videos",
      description: "Visual guides and demonstrations",
      icon: "🎬",
      count: 34,
      color: "indigo"
=======
export default function ContentHub() {
  const contentCategories = [
    {
      name: 'Documentation',
      description: 'Comprehensive guides, API references, and technical documentation',
      icon: '📚',
      count: 156,
      items: [
        { title: 'Getting Started Guide', type: 'Guide', readTime: '10 min' },
        { title: 'API Reference', type: 'Reference', readTime: 'Reference' },
        { title: 'Deployment Tutorials', type: 'Tutorial', readTime: '15 min' }
      ]
    },
    {
      name: 'Tutorials',
      description: 'Step-by-step guides and hands-on learning resources',
      icon: '🎓',
      count: 89,
      items: [
        { title: 'Building Your First Automation', type: 'Tutorial', readTime: '20 min' },
        { title: 'Advanced CI/CD Pipelines', type: 'Tutorial', readTime: '25 min' },
        { title: 'Security Best Practices', type: 'Tutorial', readTime: '18 min' }
      ]
    },
    {
      name: 'Case Studies',
      description: 'Real-world examples and success stories from our customers',
      icon: '📊',
      count: 42,
      items: [
        { title: 'Enterprise Scale Automation', type: 'Case Study', readTime: '8 min' },
        { title: 'Cost Optimization Success', type: 'Case Study', readTime: '6 min' },
        { title: 'Security Implementation', type: 'Case Study', readTime: '10 min' }
      ]
    },
    {
      name: 'Videos',
      description: 'Video tutorials, demos, and presentations',
      icon: '🎥',
      count: 67,
      items: [
        { title: 'Product Demo Walkthrough', type: 'Video', duration: '12:34' },
        { title: 'Advanced Features Deep Dive', type: 'Video', duration: '28:15' },
        { title: 'Q&A Session', type: 'Video', duration: '45:22' }
      ]
    },
    {
      name: 'Webinars',
      description: 'Live and recorded webinars on various topics',
      icon: '🌐',
      count: 34,
      items: [
        { title: 'Future of Cloud Automation', type: 'Webinar', duration: '60 min' },
        { title: 'AI in DevOps', type: 'Webinar', duration: '45 min' },
        { title: 'Security Automation', type: 'Webinar', duration: '50 min' }
      ]
    },
    {
      name: 'Community',
      description: 'User-generated content, discussions, and contributions',
      icon: '👥',
      count: 128,
      items: [
        { title: 'User Forum Discussions', type: 'Discussion', readTime: 'Varies' },
        { title: 'Community Projects', type: 'Project', readTime: 'Varies' },
        { title: 'Contributor Guidelines', type: 'Guide', readTime: '5 min' }
      ]
>>>>>>> origin/cursor/update-content-and-fix-links-7079
    }
  ];

  const featuredContent = [
    {
<<<<<<< HEAD
      title: "Complete Guide to Autonomous Cloud Management",
      type: "Tutorial",
      description: "Learn how to set up and manage truly autonomous cloud infrastructure",
      readTime: "15 min read",
      difficulty: "Intermediate",
      author: "Zion Team"
    },
    {
      title: "AI Content Generation: From Theory to Practice",
      type: "Case Study",
      description: "How a Fortune 500 company automated their content creation process",
      readTime: "8 min read",
      difficulty: "Advanced",
      author: "Sarah Chen"
    },
    {
      title: "Building Self-Healing DevOps Pipelines",
      type: "Whitepaper",
      description: "Comprehensive guide to creating resilient automation workflows",
      readTime: "25 min read",
      difficulty: "Expert",
      author: "Dr. Michael Rodriguez"
=======
      title: 'Complete Guide to Autonomous Cloud Operations',
      description: 'Master the fundamentals of building and managing self-operating cloud infrastructure',
      category: 'Guide',
      readTime: '45 min',
      featured: true
    },
    {
      title: 'AI Automation: From Theory to Practice',
      description: 'Practical implementation of AI-driven automation in production environments',
      category: 'Tutorial',
      readTime: '35 min',
      featured: true
    },
    {
      title: 'Enterprise Security Automation Case Study',
      description: 'How a Fortune 500 company implemented automated security monitoring',
      category: 'Case Study',
      readTime: '12 min',
      featured: true
>>>>>>> origin/cursor/update-content-and-fix-links-7079
    }
  ];

  return (
<<<<<<< HEAD
    <>
      <Head>
        <title>Content Hub | Zion - AI & Automation Resources</title>
        <meta name="description" content="Access Zion's comprehensive library of tutorials, case studies, whitepapers, and resources on AI automation." />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Content Hub
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              Your central destination for AI automation knowledge, tutorials, and resources
            </p>
          </div>
        </div>

        {/* Search and Filter */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-10">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="text"
                placeholder="Search for content..."
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <select className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                <option>All Categories</option>
                <option>Tutorials</option>
                <option>Case Studies</option>
                <option>Whitepapers</option>
                <option>Webinars</option>
                <option>Templates</option>
                <option>Videos</option>
              </select>
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors">
=======
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Head>
        <title>Content Hub - Zion App</title>
        <meta name="description" content="Comprehensive collection of documentation, tutorials, and learning resources" />
      </Head>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-white mb-6">
              Content Hub
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore our comprehensive collection of documentation, tutorials, case studies, and learning resources
            </p>
          </div>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-16">
            <div className="relative">
              <input
                type="text"
                placeholder="Search for content, tutorials, or documentation..."
                className="w-full px-6 py-4 bg-white/20 border border-white/30 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 text-lg"
              />
              <button className="absolute right-2 top-2 px-6 py-2 bg-cyan-500 hover:bg-cyan-600 text-white font-medium rounded-xl transition-colors">
>>>>>>> origin/cursor/update-content-and-fix-links-7079
                Search
              </button>
            </div>
          </div>
<<<<<<< HEAD
        </div>

        {/* Content Categories */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Browse by Category</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {contentCategories.map((category, index) => (
              <Link 
                key={index}
                href={`/content-hub/${category.title.toLowerCase().replace(' ', '-')}`}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <div className="text-4xl mb-4">{category.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{category.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{category.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">{category.count} items</span>
                  <span className="text-blue-600 hover:text-blue-800 font-semibold text-sm">
                    Browse →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Featured Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Featured Content</h2>
          <div className="space-y-6">
            {featuredContent.map((content, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full">
                        {content.type}
                      </span>
                      <span className="text-sm text-gray-500">{content.readTime}</span>
                      <span className="text-sm text-gray-500">•</span>
                      <span className="text-sm text-gray-500">{content.difficulty}</span>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{content.title}</h3>
                    <p className="text-gray-600 mb-4">{content.description}</p>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">By {content.author}</span>
                      <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition-colors">
                        Read Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Content Statistics */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Content Hub Statistics</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">199</div>
                <div className="text-gray-600">Total Articles</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-600 mb-2">45k+</div>
                <div className="text-gray-600">Monthly Readers</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-green-600 mb-2">98%</div>
                <div className="text-gray-600">Satisfaction Rate</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-orange-600 mb-2">24/7</div>
                <div className="text-gray-600">Content Updates</div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Contribute to Our Content Hub
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Have expertise in AI automation? Share your knowledge with our community and help others learn.
          </p>
          <div className="space-x-4">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors">
              Submit Content
            </button>
            <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-3 px-8 rounded-lg transition-colors">
              Become an Author
            </button>
          </div>
        </div>
      </div>
    </>
=======

          {/* Featured Content */}
          <section className="mb-16">
            <h2 className="text-3xl font-semibold text-white mb-8">Featured Content</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {featuredContent.map((content, index) => (
                <div key={index} className="bg-gradient-to-br from-cyan-500/20 to-purple-500/20 backdrop-blur-xl rounded-2xl p-6 border border-cyan-400/30 hover:border-cyan-400/50 transition-all duration-300">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-3 py-1 bg-cyan-500/30 text-cyan-300 text-xs font-medium rounded-full">
                      {content.category}
                    </span>
                    <span className="text-gray-300 text-sm">{content.readTime}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {content.title}
                  </h3>
                  <p className="text-gray-300 text-sm mb-4">
                    {content.description}
                  </p>
                  <button className="text-cyan-400 hover:text-cyan-300 text-sm font-medium transition-colors">
                    Read More →
                  </button>
                </div>
              ))}
            </div>
          </section>

          {/* Content Categories */}
          <section className="mb-16">
            <h2 className="text-3xl font-semibold text-white mb-8">Browse by Category</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {contentCategories.map((category) => (
                <div key={category.name} className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20 hover:border-cyan-400/50 transition-all duration-300">
                  <div className="text-4xl mb-4">{category.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-2">{category.name}</h3>
                  <p className="text-gray-300 text-sm mb-4">{category.description}</p>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-cyan-400 text-sm font-medium">{category.count} items</span>
                    <button className="text-cyan-400 hover:text-cyan-300 text-sm font-medium transition-colors">
                      Browse All →
                    </button>
                  </div>
                  
                  <div className="space-y-2">
                    {category.items.map((item, index) => (
                      <div key={index} className="p-3 bg-white/5 rounded-lg">
                        <div className="flex items-center justify-between">
                          <span className="text-white text-sm font-medium">{item.title}</span>
                          <span className="text-gray-400 text-xs">
                            {item.readTime || item.duration}
                          </span>
                        </div>
                        <span className="text-gray-500 text-xs">{item.type}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Quick Actions */}
          <section className="mb-16">
            <h2 className="text-3xl font-semibold text-white mb-8">Quick Actions</h2>
            <div className="grid md:grid-cols-4 gap-6">
              <button className="p-6 bg-white/10 hover:bg-white/20 backdrop-blur-xl rounded-2xl border border-white/20 transition-all duration-300 text-center">
                <div className="text-3xl mb-3">🚀</div>
                <h3 className="text-white font-medium mb-2">Get Started</h3>
                <p className="text-gray-400 text-sm">Quick start guide for new users</p>
              </button>
              
              <button className="p-6 bg-white/10 hover:bg-white/20 backdrop-blur-xl rounded-2xl border border-white/20 transition-all duration-300 text-center">
                <div className="text-3xl mb-3">📖</div>
                <h3 className="text-white font-medium mb-2">Documentation</h3>
                <p className="text-gray-400 text-sm">Complete API and user documentation</p>
              </button>
              
              <button className="p-6 bg-white/10 hover:bg-white/20 backdrop-blur-xl rounded-2xl border border-white/20 transition-all duration-300 text-center">
                <div className="text-3xl mb-3">🎯</div>
                <h3 className="text-white font-medium mb-2">Examples</h3>
                <p className="text-gray-400 text-sm">Code examples and templates</p>
              </button>
              
              <button className="p-6 bg-white/10 hover:bg-white/20 backdrop-blur-xl rounded-2xl border border-white/20 transition-all duration-300 text-center">
                <div className="text-3xl mb-3">💬</div>
                <h3 className="text-white font-medium mb-2">Support</h3>
                <p className="text-gray-400 text-sm">Get help and ask questions</p>
              </button>
            </div>
          </section>

          {/* Newsletter Signup */}
          <section className="text-center">
            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-semibold text-white mb-4">
                Stay Updated with New Content
              </h3>
              <p className="text-gray-300 mb-6">
                Get notified when we publish new tutorials, guides, and resources
              </p>
              <div className="flex max-w-md mx-auto gap-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400"
                />
                <button className="px-6 py-3 bg-cyan-500 hover:bg-cyan-600 text-white font-medium rounded-lg transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
>>>>>>> origin/cursor/update-content-and-fix-links-7079
  );
}