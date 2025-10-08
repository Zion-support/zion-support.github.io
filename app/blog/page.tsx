import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, User, Tag, Clock } from 'lucide-react';

const BlogPage: React.FC = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'The Future of AI in Enterprise: 2024 Trends and Predictions',
      excerpt: 'Explore the latest AI trends shaping enterprise technology and how businesses can leverage these innovations for competitive advantage.',
      author: 'Dr. Sarah Johnson',
      date: '2024-01-15',
      readTime: '8 min read',
      category: 'AI & Machine Learning',
      image: '🤖',
      featured: true
    },
    {
      id: 2,
      title: 'Quantum Computing: Breaking Through Classical Limitations',
      excerpt: 'Understanding how quantum computing is revolutionizing problem-solving in cryptography, optimization, and scientific research.',
      author: 'Michael Chen',
      date: '2024-01-10',
      readTime: '12 min read',
      category: 'Quantum Computing',
      image: '⚛️',
      featured: false
    },
    {
      id: 3,
      title: 'Autonomous Systems: The Self-Managing Future of IT Infrastructure',
      excerpt: 'Discover how autonomous systems are transforming IT operations through self-healing, self-optimizing, and self-managing capabilities.',
      author: 'Dr. Emily Rodriguez',
      date: '2024-01-05',
      readTime: '10 min read',
      category: 'Autonomous Systems',
      image: '🔄',
      featured: false
    },
    {
      id: 4,
      title: 'Digital Transformation: A Complete Guide for Enterprise Leaders',
      excerpt: 'A comprehensive guide to digital transformation strategies, technologies, and best practices for enterprise organizations.',
      author: 'David Kim',
      date: '2024-01-01',
      readTime: '15 min read',
      category: 'Digital Transformation',
      image: '💻',
      featured: false
    },
    {
      id: 5,
      title: 'Cybersecurity in the Age of AI: Protecting Your Digital Assets',
      excerpt: 'Learn how AI-powered cybersecurity solutions are defending against sophisticated threats and protecting enterprise data.',
      author: 'Dr. Sarah Johnson',
      date: '2023-12-28',
      readTime: '9 min read',
      category: 'Cybersecurity',
      image: '🛡️',
      featured: false
    },
    {
      id: 6,
      title: 'Blockchain and Web3: Building the Decentralized Future',
      excerpt: 'Explore the potential of blockchain technology and Web3 applications in transforming business processes and creating new opportunities.',
      author: 'Michael Chen',
      date: '2023-12-20',
      readTime: '11 min read',
      category: 'Blockchain & Web3',
      image: '🔗',
      featured: false
    }
  ];

  const categories = [
    'All Posts',
    'AI & Machine Learning',
    'Quantum Computing',
    'Autonomous Systems',
    'Digital Transformation',
    'Cybersecurity',
    'Blockchain & Web3'
  ];

  return (
    <>
      <Helmet>
        <title>Blog & Insights - Zion Tech Group</title>
        <meta name="description" content="Stay updated with the latest insights on AI, quantum computing, autonomous systems, and enterprise technology from Zion Tech Group experts." />
        <meta name="keywords" content="AI blog, technology insights, enterprise AI, quantum computing, autonomous systems, digital transformation" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        {/* Header */}
        <header className="bg-white shadow-sm border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <Link to="/" className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-200">
              <ArrowRight className="w-4 h-4 mr-2 rotate-180" />
              Back to Home
            </Link>
          </div>
        </header>

        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Blog & Insights
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto">
                Expert insights on AI, quantum computing, and cutting-edge technology
              </p>
              <p className="text-lg mb-8 text-gray-300 max-w-4xl mx-auto">
                Stay ahead of the curve with our latest articles, research findings, and industry insights 
                from our team of technology experts and thought leaders.
              </p>
            </div>
          </div>
        </section>

        {/* Categories Filter */}
        <section className="py-8 bg-white border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    category === 'All Posts'
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
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Featured Article
              </h2>
            </div>
            {blogPosts
              .filter(post => post.featured)
              .map((post) => (
                <div key={post.id} className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 md:p-12">
                  <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div>
                      <div className="flex items-center mb-4">
                        <span className="text-6xl mr-4">{post.image}</span>
                        <div>
                          <span className="inline-block bg-blue-100 text-blue-800 text-sm font-semibold px-3 py-1 rounded-full mb-2">
                            {post.category}
                          </span>
                        </div>
                      </div>
                      <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        {post.title}
                      </h3>
                      <p className="text-xl text-gray-600 mb-6">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center text-gray-500 text-sm mb-6">
                        <User className="w-4 h-4 mr-2" />
                        <span className="mr-4">{post.author}</span>
                        <Calendar className="w-4 h-4 mr-2" />
                        <span className="mr-4">{new Date(post.date).toLocaleDateString()}</span>
                        <Clock className="w-4 h-4 mr-2" />
                        <span>{post.readTime}</span>
                      </div>
                      <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 inline-flex items-center">
                        Read Full Article
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </button>
                    </div>
                    <div className="bg-white rounded-lg p-8 shadow-lg">
                      <div className="text-8xl text-center mb-4">{post.image}</div>
                      <div className="text-center">
                        <h4 className="text-lg font-semibold text-gray-900 mb-2">Quick Stats</h4>
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div>
                            <div className="font-semibold text-blue-600">2.5K</div>
                            <div className="text-gray-500">Views</div>
                          </div>
                          <div>
                            <div className="font-semibold text-green-600">95%</div>
                            <div className="text-gray-500">Rating</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Latest Articles
              </h2>
              <p className="text-xl text-gray-600">
                Explore our collection of expert insights and technology articles
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts
                .filter(post => !post.featured)
                .map((post) => (
                  <article key={post.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-200">
                    <div className="p-6">
                      <div className="flex items-center mb-4">
                        <span className="text-4xl mr-3">{post.image}</span>
                        <div>
                          <span className="inline-block bg-gray-100 text-gray-800 text-xs font-semibold px-2 py-1 rounded-full">
                            {post.category}
                          </span>
                        </div>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-gray-600 mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center text-gray-500 text-sm mb-4">
                        <User className="w-4 h-4 mr-2" />
                        <span className="mr-4">{post.author}</span>
                        <Calendar className="w-4 h-4 mr-2" />
                        <span className="mr-4">{new Date(post.date).toLocaleDateString()}</span>
                        <Clock className="w-4 h-4 mr-2" />
                        <span>{post.readTime}</span>
                      </div>
                      <button className="w-full bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold py-2 px-4 rounded-lg transition-colors duration-200">
                        Read More
                      </button>
                    </div>
                  </article>
                ))}
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Stay Updated with Our Latest Insights
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Subscribe to our newsletter for the latest AI and technology insights delivered to your inbox
            </p>
            <div className="max-w-md mx-auto flex gap-4">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button className="bg-white text-blue-600 hover:bg-gray-100 font-semibold py-3 px-6 rounded-lg transition-colors duration-200">
                Subscribe
              </button>
            </div>
            <p className="text-sm text-blue-200 mt-4">
              No spam, unsubscribe at any time. We respect your privacy.
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default BlogPage;