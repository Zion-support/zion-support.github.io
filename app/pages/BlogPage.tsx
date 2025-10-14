import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRightIcon, CalendarIcon, UserIcon, TagIcon } from '@heroicons/react/24/outline';

const BlogPage: React.FC = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'The Future of AI in Business: Trends and Predictions for 2024',
      excerpt: 'Explore the latest AI trends that are reshaping how businesses operate and compete in the digital landscape.',
      author: 'Kleber Santos',
      date: '2024-01-15',
      category: 'AI Solutions',
      readTime: '5 min read',
      image: '/api/placeholder/600/400'
    },
    {
      id: 2,
      title: 'Cloud Migration Best Practices: A Complete Guide',
      excerpt: 'Learn the essential steps and strategies for successfully migrating your infrastructure to the cloud.',
      author: 'Sarah Johnson',
      date: '2024-01-10',
      category: 'Cloud Infrastructure',
      readTime: '8 min read',
      image: '/api/placeholder/600/400'
    },
    {
      id: 3,
      title: 'Cybersecurity in 2024: Protecting Your Business from Emerging Threats',
      excerpt: 'Stay ahead of cyber threats with our comprehensive guide to modern security practices and technologies.',
      author: 'Michael Chen',
      date: '2024-01-05',
      category: 'Cybersecurity',
      readTime: '6 min read',
      image: '/api/placeholder/600/400'
    },
    {
      id: 4,
      title: 'Micro SAAS Development: Building Scalable Solutions',
      excerpt: 'Discover how to create and scale micro SAAS applications that solve specific business problems effectively.',
      author: 'Emily Rodriguez',
      date: '2024-01-01',
      category: 'Micro SAAS',
      readTime: '7 min read',
      image: '/api/placeholder/600/400'
    },
    {
      id: 5,
      title: 'Data Analytics: Turning Information into Business Intelligence',
      excerpt: 'Learn how to leverage data analytics to make informed business decisions and drive growth.',
      author: 'David Kim',
      date: '2023-12-28',
      category: 'Data Analytics',
      readTime: '4 min read',
      image: '/api/placeholder/600/400'
    },
    {
      id: 6,
      title: 'DevOps Best Practices: Streamlining Your Development Process',
      excerpt: 'Implement DevOps practices to improve collaboration, deployment speed, and system reliability.',
      author: 'Lisa Wang',
      date: '2023-12-20',
      category: 'DevOps',
      readTime: '9 min read',
      image: '/api/placeholder/600/400'
    }
  ];

  const categories = ['All', 'AI Solutions', 'Cloud Infrastructure', 'Cybersecurity', 'Micro SAAS', 'Data Analytics', 'DevOps'];

  return (
    <>
      <Helmet>
        <title>Blog - Zion Tech Group | AI, IT & Technology Insights</title>
        <meta name="description" content="Stay updated with the latest insights on AI solutions, IT services, cloud infrastructure, cybersecurity, and technology trends from Zion Tech Group experts." />
        <meta name="keywords" content="AI blog, IT blog, technology insights, cloud computing, cybersecurity, micro SAAS, data analytics" />
        <meta property="og:title" content="Blog - Zion Tech Group" />
        <meta property="og:description" content="Stay updated with the latest insights on AI solutions, IT services, cloud infrastructure, cybersecurity, and technology trends." />
        <meta property="og:url" content="https://ziontechgroup.com/blog" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 gradient-text">
            Technology Blog
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Stay updated with the latest insights on AI solutions, IT services, cloud infrastructure, 
            cybersecurity, and technology trends from our expert team.
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 bg-slate-900 border-b border-slate-700">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                className="px-6 py-3 bg-slate-800 text-gray-300 rounded-lg hover:bg-purple-600 hover:text-white transition-all duration-300"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article key={post.id} className="group bg-gradient-to-br from-slate-800 to-slate-700 rounded-xl border border-slate-600 hover:border-purple-500 transition-all duration-300 hover-lift hover-glow glass-dark overflow-hidden">
                <div className="aspect-w-16 aspect-h-9 bg-slate-700">
                  <div className="w-full h-48 bg-gradient-to-br from-purple-500/20 to-cyan-500/20 flex items-center justify-center">
                    <div className="text-4xl text-purple-400">📝</div>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="inline-block bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm font-medium">
                      {post.category}
                    </span>
                    <span className="text-gray-400 text-sm">{post.readTime}</span>
                  </div>
                  
                  <h2 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">
                    {post.title}
                  </h2>
                  
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                    <div className="flex items-center gap-2">
                      <UserIcon className="w-4 h-4" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CalendarIcon className="w-4 h-4" />
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                    </div>
                  </div>
                  
                  <Link 
                    to={`/blog/${post.id}`}
                    className="inline-flex items-center text-purple-400 hover:text-purple-300 font-semibold group-hover:gap-3 transition-all"
                  >
                    Read More
                    <ArrowRightIcon className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Stay <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Updated</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Subscribe to our newsletter and never miss the latest insights on AI, IT, and technology trends.
            </p>
            
            <div className="max-w-md mx-auto">
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Enter your email address" 
                  className="flex-1 px-4 py-3 bg-slate-700 border border-slate-600 rounded-l-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
                <button className="px-6 py-3 bg-gradient-to-r from-purple-600 to-cyan-600 text-white rounded-r-lg hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 font-semibold">
                  Subscribe
                </button>
              </div>
              <p className="text-sm text-gray-400 mt-3">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-900 to-cyan-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Let's discuss how our AI and IT solutions can help you achieve your business goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              to="/contact" 
              className="bg-white text-purple-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-300 flex items-center gap-2"
            >
              Get In Touch
              <ArrowRightIcon className="w-5 h-5" />
            </Link>
            <Link 
              to="/services" 
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-purple-900 transition-all duration-300 flex items-center gap-2"
            >
              View Our Services
              <ArrowRightIcon className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogPage;