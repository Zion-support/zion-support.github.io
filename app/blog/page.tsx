import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const BlogPage: React.FC = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'The Future of AI in Business: 2024 Trends and Predictions',
      excerpt: 'Discover the latest AI trends that are transforming businesses in 2024 and how you can leverage them for growth.',
      author: 'Zion Tech Group Team',
      date: '2024-01-15',
      readTime: '5 min read',
      category: 'AI & Technology',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=400&fit=crop',
      featured: true
    },
    {
      id: 2,
      title: 'Micro SaaS Success Stories: How Small Solutions Drive Big Results',
      excerpt: 'Learn from real success stories of micro SaaS businesses and discover strategies for building your own.',
      author: 'Kleber Santos',
      date: '2024-01-10',
      readTime: '7 min read',
      category: 'Micro SaaS',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop',
      featured: true
    },
    {
      id: 3,
      title: 'Cloud Infrastructure Best Practices for 2024',
      excerpt: 'Essential cloud infrastructure strategies to optimize performance, security, and costs for your business.',
      author: 'Zion Tech Group Team',
      date: '2024-01-08',
      readTime: '6 min read',
      category: 'IT Solutions',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=400&fit=crop',
      featured: false
    },
    {
      id: 4,
      title: 'AI-Powered Customer Support: Reducing Costs While Improving Experience',
      excerpt: 'How AI chatbots and automation can transform your customer support while reducing operational costs.',
      author: 'Zion Tech Group Team',
      date: '2024-01-05',
      readTime: '4 min read',
      category: 'AI & Technology',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=400&fit=crop',
      featured: false
    },
    {
      id: 5,
      title: 'Building Scalable Micro SaaS Applications: A Complete Guide',
      excerpt: 'Step-by-step guide to building, launching, and scaling micro SaaS applications that generate recurring revenue.',
      author: 'Kleber Santos',
      date: '2024-01-03',
      readTime: '8 min read',
      category: 'Micro SaaS',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop',
      featured: false
    },
    {
      id: 6,
      title: 'Data Analytics for Small Businesses: Making Data-Driven Decisions',
      excerpt: 'How small businesses can leverage data analytics to make informed decisions and drive growth.',
      author: 'Zion Tech Group Team',
      date: '2024-01-01',
      readTime: '5 min read',
      category: 'IT Solutions',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop',
      featured: false
    }
  ];

  const categories = ['All', 'AI & Technology', 'Micro SaaS', 'IT Solutions', 'Business Growth'];

  return (
    <>
      <Helmet>
        <title>Blog - Zion Tech Group | AI & IT Insights</title>
        <meta name="description" content="Stay updated with the latest insights on AI, micro SaaS, IT solutions, and business growth. Expert articles from Zion Tech Group." />
        <meta name="keywords" content="AI blog, micro SaaS blog, IT solutions blog, business technology, AI insights" />
      </Helmet>
      
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-700 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Blog</h1>
              <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto mb-8">
                Insights, trends, and expert advice on AI, micro SaaS, and IT solutions
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="tel:+13024640950" className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Call: +1 302 464 0950
                </a>
                <a href="mailto:kleber@ziontechgroup.com" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                  Email: kleber@ziontechgroup.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Featured Posts */}
        <div className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Articles</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Our most popular and insightful articles on AI, technology, and business growth
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
              {blogPosts.filter(post => post.featured).map((post) => (
                <article key={post.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="aspect-w-16 aspect-h-9">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-48 object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm font-semibold text-blue-600 bg-blue-100 px-3 py-1 rounded-full">
                        {post.category}
                      </span>
                      <span className="text-sm text-gray-500">{post.readTime}</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 hover:text-blue-600 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{post.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="w-8 h-8 bg-gray-300 rounded-full mr-3"></div>
                        <div>
                          <p className="text-sm font-semibold text-gray-900">{post.author}</p>
                          <p className="text-xs text-gray-500">{post.date}</p>
                        </div>
                      </div>
                      <button className="text-blue-600 hover:text-blue-800 font-semibold">
                        Read More →
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>

        {/* All Posts */}
        <div className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Sidebar */}
              <div className="lg:w-1/4">
                <div className="bg-white p-6 rounded-xl shadow-lg mb-8">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Categories</h3>
                  <div className="space-y-2">
                    {categories.map((category) => (
                      <button 
                        key={category}
                        className={`block w-full text-left px-3 py-2 rounded-lg transition-colors ${
                          category === 'All' 
                            ? 'bg-blue-100 text-blue-700' 
                            : 'text-gray-600 hover:bg-gray-100'
                        }`}
                      >
                        {category}
                      </button>
                    ))}
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Contact Us</h3>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <span className="text-blue-600 mr-3">📞</span>
                      <a href="tel:+13024640950" className="text-gray-600 hover:text-blue-600">
                        +1 302 464 0950
                      </a>
                    </div>
                    <div className="flex items-center">
                      <span className="text-blue-600 mr-3">✉️</span>
                      <a href="mailto:kleber@ziontechgroup.com" className="text-gray-600 hover:text-blue-600">
                        kleber@ziontechgroup.com
                      </a>
                    </div>
                    <div className="flex items-center">
                      <span className="text-blue-600 mr-3">🌐</span>
                      <a href="https://ziontechgroup.com" className="text-gray-600 hover:text-blue-600">
                        ziontechgroup.com
                      </a>
                    </div>
                    <div className="flex items-start">
                      <span className="text-blue-600 mr-3 mt-1">📍</span>
                      <span className="text-gray-600 text-sm">
                        364 E Main St STE 1008<br />
                        Middletown DE 19709
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Main Content */}
              <div className="lg:w-3/4">
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">All Articles</h2>
                  <p className="text-gray-600">Stay updated with the latest insights and trends in AI, micro SaaS, and IT solutions.</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {blogPosts.map((post) => (
                    <article key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                      <div className="aspect-w-16 aspect-h-9">
                        <img 
                          src={post.image} 
                          alt={post.title}
                          className="w-full h-40 object-cover"
                        />
                      </div>
                      <div className="p-4">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-xs font-semibold text-blue-600 bg-blue-100 px-2 py-1 rounded">
                            {post.category}
                          </span>
                          <span className="text-xs text-gray-500">{post.readTime}</span>
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2 hover:text-blue-600 transition-colors">
                          {post.title}
                        </h3>
                        <p className="text-sm text-gray-600 mb-3 line-clamp-2">{post.excerpt}</p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <div className="w-6 h-6 bg-gray-300 rounded-full mr-2"></div>
                            <div>
                              <p className="text-xs font-semibold text-gray-900">{post.author}</p>
                              <p className="text-xs text-gray-500">{post.date}</p>
                            </div>
                          </div>
                          <button className="text-blue-600 hover:text-blue-800 text-sm font-semibold">
                            Read →
                          </button>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>

                {/* Pagination */}
                <div className="mt-12 flex justify-center">
                  <nav className="flex items-center space-x-2">
                    <button className="px-3 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-md hover:bg-gray-50">
                      Previous
                    </button>
                    <button className="px-3 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md">
                      1
                    </button>
                    <button className="px-3 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-md hover:bg-gray-50">
                      2
                    </button>
                    <button className="px-3 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-md hover:bg-gray-50">
                      3
                    </button>
                    <button className="px-3 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-md hover:bg-gray-50">
                      Next
                    </button>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="py-16 bg-gradient-to-r from-blue-600 to-purple-700 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
            <p className="text-xl text-blue-100 mb-8">
              Subscribe to our newsletter for the latest insights on AI, micro SaaS, and IT solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Subscribe
              </button>
            </div>
            <p className="text-sm text-blue-200 mt-4">
              No spam, unsubscribe at any time. We respect your privacy.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogPage;