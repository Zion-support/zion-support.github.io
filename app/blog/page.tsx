import React from 'react';
<<<<<<< HEAD
import { ArrowRight, Calendar, User, Clock } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
=======
import { Calendar, User, ArrowRight, Tag } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
>>>>>>> cursor/website-audit-and-update-with-deployment-7aba

const BlogPage: React.FC = () => {
  const blogPosts = [
    {
<<<<<<< HEAD
      id: 1,
      title: 'The Future of AI in Enterprise: Trends and Predictions for 2024',
      excerpt: 'Explore the latest trends in enterprise AI adoption and how businesses are leveraging artificial intelligence to drive innovation and growth.',
      author: 'Sarah Johnson',
      date: '2024-01-15',
      readTime: '8 min read',
      category: 'AI & Machine Learning',
      featured: true
    },
    {
      id: 2,
      title: '5G Implementation: A Complete Guide for Businesses',
      excerpt: 'Everything you need to know about implementing 5G technology in your business, from planning to deployment and optimization.',
      author: 'Michael Chen',
      date: '2024-01-12',
      readTime: '12 min read',
      category: '5G Technology',
      featured: false
    },
    {
      id: 3,
      title: 'Cloud Migration Best Practices: Avoiding Common Pitfalls',
      excerpt: 'Learn from our experience helping 500+ companies migrate to the cloud successfully. Discover the best practices and common mistakes to avoid.',
      author: 'Emily Rodriguez',
      date: '2024-01-10',
      readTime: '10 min read',
      category: 'Cloud Computing',
      featured: false
    }
  ];

=======
      title: 'The Future of AI in Business: Trends to Watch in 2024',
      excerpt: 'Explore the latest AI trends that are reshaping how businesses operate and compete in the digital landscape.',
      author: 'Sarah Johnson',
      date: '2024-01-15',
      category: 'AI & Technology',
      readTime: '5 min read',
      image: '/api/placeholder/600/300',
      link: '/blog/future-of-ai-in-business-2024'
    },
    {
      title: 'Cloud Migration Best Practices: A Complete Guide',
      excerpt: 'Learn the essential steps and strategies for a successful cloud migration that minimizes downtime and maximizes benefits.',
      author: 'Michael Chen',
      date: '2024-01-10',
      category: 'Cloud Computing',
      readTime: '8 min read',
      image: '/api/placeholder/600/300',
      link: '/blog/cloud-migration-best-practices'
    },
    {
      title: 'Cybersecurity in the Age of AI: New Threats and Solutions',
      excerpt: 'Discover how AI is both creating new security challenges and providing innovative solutions to protect your business.',
      author: 'Emily Rodriguez',
      date: '2024-01-05',
      category: 'Cybersecurity',
      readTime: '6 min read',
      image: '/api/placeholder/600/300',
      link: '/blog/cybersecurity-age-of-ai'
    },
    {
      title: 'Micro SaaS: Building Profitable Niche Applications',
      excerpt: 'Learn how to identify opportunities and build successful micro SaaS applications that solve specific business problems.',
      author: 'David Kim',
      date: '2024-01-01',
      category: 'SaaS',
      readTime: '7 min read',
      image: '/api/placeholder/600/300',
      link: '/blog/micro-saas-building-profitable-applications'
    },
    {
      title: '5G Implementation: Transforming Industries and Connectivity',
      excerpt: 'Explore how 5G technology is revolutionizing various industries and creating new opportunities for innovation.',
      author: 'Lisa Wang',
      date: '2023-12-28',
      category: '5G Technology',
      readTime: '9 min read',
      image: '/api/placeholder/600/300',
      link: '/blog/5g-implementation-transforming-industries'
    },
    {
      title: 'Data Analytics: Turning Information into Business Intelligence',
      excerpt: 'Learn how to leverage data analytics to gain actionable insights and drive better business decisions.',
      author: 'Alex Thompson',
      date: '2023-12-20',
      category: 'Data Analytics',
      readTime: '6 min read',
      image: '/api/placeholder/600/300',
      link: '/blog/data-analytics-business-intelligence'
    }
  ];

  const categories = [
    'All Posts',
    'AI & Technology',
    'Cloud Computing',
    'Cybersecurity',
    'SaaS',
    '5G Technology',
    'Data Analytics'
  ];

>>>>>>> cursor/website-audit-and-update-with-deployment-7aba
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Blog - Zion Tech Group</title>
<<<<<<< HEAD
        <meta name="description" content="Stay updated with the latest insights on AI, cloud computing, 5G technology, and digital transformation from Zion Tech Group experts." />
        <meta name="keywords" content="blog, AI insights, cloud computing, 5G technology, cybersecurity, digital transformation, technology trends" />
      </Helmet>
      
      <main className="pt-20 px-4 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Our <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Blog</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Insights, trends, and expert advice on AI, cloud computing, 5G technology, and digital transformation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {blogPosts.map((post) => (
              <article key={post.id} className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
                <div className="bg-gray-800 rounded-lg h-48 flex items-center justify-center mb-6">
                  <span className="text-gray-400">Post Image</span>
                </div>
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-purple-300 text-sm font-medium">{post.category}</span>
                  <span className="text-gray-400 text-sm">{post.readTime}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{post.title}</h3>
                <p className="text-gray-300 mb-4">{post.excerpt}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-gray-400">
                    <User className="w-4 h-4 mr-2" />
                    {post.author}
                  </div>
                  <div className="flex items-center text-sm text-gray-400">
                    <Calendar className="w-4 h-4 mr-2" />
                    {new Date(post.date).toLocaleDateString()}
                  </div>
                </div>
                <Link 
                  to={`/blog/${post.id}`}
                  className="inline-flex items-center text-purple-400 hover:text-purple-300 font-medium mt-4"
                >
                  Read More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </main>
=======
        <meta name="description" content="Stay updated with the latest insights on AI, cloud computing, cybersecurity, and technology trends from our expert team." />
        <meta name="keywords" content="technology blog, AI insights, cloud computing, cybersecurity, SaaS, 5G, data analytics" />
      </Helmet>
      
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Technology <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Insights</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Stay ahead of the curve with expert insights on AI, cloud computing, cybersecurity, and emerging technologies.
            </p>
          </div>
        </section>

        {/* Categories */}
        <section className="py-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category, index) => (
                <button
                  key={index}
                  className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    index === 0
                      ? 'bg-blue-500 text-white'
                      : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Blog Posts */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post, index) => (
                <article key={index} className="bg-white/10 backdrop-blur-lg rounded-xl overflow-hidden border border-white/20 hover:bg-white/20 transition-all duration-300 group">
                  <div className="aspect-w-16 aspect-h-9 bg-gray-700">
                    <div className="w-full h-48 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                      <span className="text-white text-sm font-medium">Featured Image</span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                        {post.category}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                      {post.title}
                    </h3>
                    
                    <p className="text-gray-300 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                      <div className="flex items-center">
                        <User className="w-4 h-4 mr-2" />
                        {post.author}
                      </div>
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-2" />
                        {new Date(post.date).toLocaleDateString()}
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-400">{post.readTime}</span>
                      <Link
                        to={post.link}
                        className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors group-hover:translate-x-1"
                      >
                        Read More
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Stay Updated
              </h2>
              <p className="text-xl text-blue-100 mb-8">
                Subscribe to our newsletter and never miss the latest technology insights and updates.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
                />
                <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
>>>>>>> cursor/website-audit-and-update-with-deployment-7aba
    </div>
  );
};

<<<<<<< HEAD
export default BlogPage;
=======
export default BlogPage;
>>>>>>> cursor/website-audit-and-update-with-deployment-7aba
