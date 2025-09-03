import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { Calendar, Clock, User, ArrowRight, Tag, Search } from 'lucide-react';

export default function Blog() {
  const blogPosts = [
    {
      title: 'The Future of AI in Business: 2025 Trends and Predictions',
      excerpt: 'Explore the latest AI trends that are reshaping how businesses operate and compete in the digital landscape.',
      author: 'Sarah Johnson',
      date: '2025-01-15',
      readTime: '8 min read',
      category: 'AI & Machine Learning',
      image: '/blog/ai-trends-2025.jpg',
      slug: 'ai-trends-2025'
    },
    {
      title: 'Cloud Migration Best Practices: A Complete Guide',
      excerpt: 'Learn the essential strategies and considerations for successfully migrating your infrastructure to the cloud.',
      author: 'Michael Chen',
      date: '2025-01-12',
      readTime: '12 min read',
      category: 'Cloud Computing',
      image: '/blog/cloud-migration-guide.jpg',
      slug: 'cloud-migration-guide'
    },
    {
      title: 'Building Scalable Microservices Architecture',
      excerpt: 'Discover how to design and implement microservices that can grow with your business needs.',
      author: 'Emily Rodriguez',
      date: '2025-01-10',
      readTime: '10 min read',
      category: 'Software Architecture',
      image: '/blog/microservices-architecture.jpg',
      slug: 'microservices-architecture'
    },
    {
      title: 'Cybersecurity in the Age of AI: New Threats and Solutions',
      excerpt: 'Understanding the evolving cybersecurity landscape and how AI is both a threat and a solution.',
      author: 'David Kim',
      date: '2025-01-08',
      readTime: '9 min read',
      category: 'Cybersecurity',
      image: '/blog/ai-cybersecurity.jpg',
      slug: 'ai-cybersecurity'
    },
    {
      title: 'DevOps Automation: Streamlining Your Development Pipeline',
      excerpt: 'Learn how to implement effective DevOps practices that accelerate your development and deployment cycles.',
      author: 'Alex Thompson',
      date: '2025-01-05',
      readTime: '7 min read',
      category: 'DevOps',
      image: '/blog/devops-automation.jpg',
      slug: 'devops-automation'
    },
    {
      title: 'Data Analytics and Business Intelligence: Driving Decisions',
      excerpt: 'How modern data analytics tools are helping businesses make better, data-driven decisions.',
      author: 'Lisa Wang',
      date: '2025-01-03',
      readTime: '6 min read',
      category: 'Data Analytics',
      image: '/blog/data-analytics.jpg',
      slug: 'data-analytics'
    }
  ];

  const categories = [
    'All Posts',
    'AI & Machine Learning',
    'Cloud Computing',
    'Software Architecture',
    'Cybersecurity',
    'DevOps',
    'Data Analytics'
  ];

  const featuredPost = blogPosts[0];

  return (
    <>
      <Head>
        <title>Blog - Zion Tech Group</title>
        <meta name="description" content="Insights, trends, and best practices in technology from the experts at Zion Tech Group." />
      </Head>

      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Technology Insights
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                Stay ahead of the curve with expert insights, industry trends, and best practices 
                from our team of technology professionals.
              </p>
              <div className="max-w-md mx-auto">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search articles..."
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="py-8 border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((category, index) => (
                <button
                  key={index}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    index === 0 
                      ? 'bg-blue-600 text-white' 
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Post */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Featured Article</h2>
            </div>
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/2">
                  <div className="h-64 md:h-full bg-gradient-to-br from-blue-400 to-indigo-500 flex items-center justify-center">
                    <div className="text-center text-white">
                      <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-3xl">📊</span>
                      </div>
                      <p className="text-sm opacity-90">Featured Article</p>
                    </div>
                  </div>
                </div>
                <div className="md:w-1/2 p-8">
                  <div className="flex items-center gap-2 mb-4">
                    <Tag className="w-4 h-4 text-blue-600" />
                    <span className="text-sm text-blue-600 font-medium">{featuredPost.category}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{featuredPost.title}</h3>
                  <p className="text-gray-600 mb-6">{featuredPost.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <div className="flex items-center gap-1">
                        <User className="w-4 h-4" />
                        <span>{featuredPost.author}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{new Date(featuredPost.date).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>{featuredPost.readTime}</span>
                      </div>
                    </div>
                    <Link 
                      href={`/blog/${featuredPost.slug}`}
                      className="flex items-center gap-1 text-blue-600 hover:text-blue-700 font-medium"
                    >
                      Read More <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Latest Articles</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.slice(1).map((post, index) => (
                <article key={index} className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow overflow-hidden">
                  <div className="h-48 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                    <div className="text-center text-gray-500">
                      <div className="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center mx-auto mb-2">
                        <span className="text-2xl">📝</span>
                      </div>
                      <p className="text-sm">Article Image</p>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <Tag className="w-4 h-4 text-blue-600" />
                      <span className="text-sm text-blue-600 font-medium">{post.category}</span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2">{post.title}</h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <div className="flex items-center gap-1">
                        <User className="w-4 h-4" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">
                        {new Date(post.date).toLocaleDateString()}
                      </span>
                      <Link 
                        href={`/blog/${post.slug}`}
                        className="flex items-center gap-1 text-blue-600 hover:text-blue-700 font-medium"
                      >
                        Read More <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-blue-600 rounded-2xl p-8 md:p-12 text-center text-white">
              <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
              <p className="text-xl mb-8 opacity-90">
                Get the latest technology insights delivered to your inbox
              </p>
              <div className="max-w-md mx-auto flex gap-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:ring-2 focus:ring-white/50 focus:outline-none"
                />
                <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Subscribe
                </button>
              </div>
              <p className="text-sm mt-4 opacity-75">
                No spam, unsubscribe at any time.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Have a Topic in Mind?</h2>
              <p className="text-xl text-gray-600 mb-8">
                We're always looking for new topics to cover. Let us know what you'd like to learn about.
              </p>
              <Link 
                href="/contact"
                className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-block"
              >
                Suggest a Topic
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}