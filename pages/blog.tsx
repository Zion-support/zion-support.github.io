import React from 'react';
import Link from 'next/link';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOHead from '../src/components/seo/SEOHead';
import { Calendar, User, ArrowRight, Tag } from 'lucide-react';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'The Future of AI in Business: Trends and Predictions for 2024',
      excerpt: 'Explore the latest AI trends shaping the business landscape and how companies can leverage artificial intelligence for competitive advantage.',
      author: 'Zion Tech Team',
      date: '2024-01-15',
      category: 'AI & Machine Learning',
      readTime: '5 min read',
      image: '/api/placeholder/600/300',
      slug: 'future-ai-business-trends-2024'
    },
    {
      id: 2,
      title: 'Micro SaaS: Building Profitable Small-Scale Software Solutions',
      excerpt: 'Learn how to build and scale micro SaaS products that generate consistent revenue with minimal overhead.',
      author: 'Sarah Johnson',
      date: '2024-01-12',
      category: 'Micro SaaS',
      readTime: '7 min read',
      image: '/api/placeholder/600/300',
      slug: 'micro-saas-building-profitable-solutions'
    },
    {
      id: 3,
      title: 'Cloud Architecture Best Practices for Modern Applications',
      excerpt: 'Discover essential cloud architecture patterns and best practices for building scalable, resilient applications.',
      author: 'Michael Chen',
      date: '2024-01-10',
      category: 'Cloud Computing',
      readTime: '6 min read',
      image: '/api/placeholder/600/300',
      slug: 'cloud-architecture-best-practices'
    },
    {
      id: 4,
      title: 'Cybersecurity in 2024: Protecting Your Digital Assets',
      excerpt: 'Stay ahead of cyber threats with our comprehensive guide to modern cybersecurity strategies and tools.',
      author: 'Alex Rodriguez',
      date: '2024-01-08',
      category: 'Cybersecurity',
      readTime: '8 min read',
      image: '/api/placeholder/600/300',
      slug: 'cybersecurity-2024-protecting-digital-assets'
    },
    {
      id: 5,
      title: 'DevOps Automation: Streamlining Your Development Pipeline',
      excerpt: 'Learn how to implement effective DevOps automation to accelerate your development cycles and improve deployment reliability.',
      author: 'Emma Wilson',
      date: '2024-01-05',
      category: 'DevOps',
      readTime: '6 min read',
      image: '/api/placeholder/600/300',
      slug: 'devops-automation-streamlining-pipeline'
    },
    {
      id: 6,
      title: 'Data Analytics: Turning Information into Business Intelligence',
      excerpt: 'Explore advanced data analytics techniques and tools that help businesses make data-driven decisions.',
      author: 'David Kim',
      date: '2024-01-03',
      category: 'Data Analytics',
      readTime: '7 min read',
      image: '/api/placeholder/600/300',
      slug: 'data-analytics-business-intelligence'
    }
  ];

  const categories = ['All', 'AI & Machine Learning', 'Micro SaaS', 'Cloud Computing', 'Cybersecurity', 'DevOps', 'Data Analytics'];

  return (
    <>
      <SEOHead
        title="Blog - Zion Tech Group | Technology Insights & Industry News"
        description="Stay updated with the latest technology trends, AI insights, and industry best practices from Zion Tech Group's expert team."
        keywords="technology blog, AI trends, cloud computing, cybersecurity, DevOps, data analytics, micro SaaS"
        canonical="https://ziontechgroup.com/blog"
      />
      <Navigation />
      
      <main className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
        {/* Hero Section */}
        <section className="pt-24 pb-16">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Technology <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">Insights</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Stay ahead of the curve with expert insights on AI, cloud computing, cybersecurity, and emerging technologies.
              </p>
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="pb-8">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category}
                  className="px-6 py-3 rounded-full border border-white/20 text-white hover:bg-white/10 transition-all duration-300 hover:border-blue-500"
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="pb-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <article
                  key={post.id}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden hover:bg-white/10 transition-all duration-300 group"
                >
                  <div className="aspect-video bg-gradient-to-br from-blue-500/20 to-purple-600/20 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/30 to-purple-600/30" />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-blue-600/80 backdrop-blur-sm text-white text-sm rounded-full">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
                      <div className="flex items-center gap-1">
                        <User className="w-4 h-4" />
                        {post.author}
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {new Date(post.date).toLocaleDateString()}
                      </div>
                      <span>{post.readTime}</span>
                    </div>
                    
                    <h2 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                      {post.title}
                    </h2>
                    
                    <p className="text-gray-300 mb-4 leading-relaxed">
                      {post.excerpt}
                    </p>
                    
                    <Link
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-semibold transition-colors"
                    >
                      Read More
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-16 bg-gradient-to-r from-blue-600/20 to-purple-600/20 border-t border-white/10">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-white mb-4">
                Stay Updated
              </h2>
              <p className="text-gray-300 mb-8">
                Get the latest technology insights and industry news delivered to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                />
                <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Blog;