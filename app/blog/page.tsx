import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight, Clock, Tag } from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';
import FuturisticCard from '../components/FuturisticCard';
import FuturisticButton from '../components/FuturisticButton';
import ResponsiveContainer from '../components/ResponsiveContainer';
import ResponsiveGrid from '../components/ResponsiveGrid';

const BlogPage = () => {
  const blogPosts = [
    {
      id: 'ai-revolution-2024',
      title: 'The AI Revolution: How Artificial Intelligence is Transforming Business in 2024',
      excerpt: 'Discover how AI is revolutionizing business operations, from automation to predictive analytics, and learn how to stay ahead of the curve.',
      author: 'Dr. Sarah Chen',
      date: '2024-01-15',
      readTime: '8 min read',
      category: 'AI & Technology',
      image: '/api/placeholder/600/300',
      featured: true
    },
    {
      id: 'quantum-computing-future',
      title: 'Quantum Computing: The Next Frontier in Business Technology',
      excerpt: 'Explore the potential of quantum computing and how it will reshape industries from finance to healthcare.',
      author: 'Michael Rodriguez',
      date: '2024-01-10',
      readTime: '6 min read',
      category: 'Quantum Computing',
      image: '/api/placeholder/600/300',
      featured: true
    },
    {
      id: 'cybersecurity-trends-2024',
      title: 'Cybersecurity Trends 2024: Protecting Your Digital Assets',
      excerpt: 'Stay updated with the latest cybersecurity trends and learn how to protect your business from emerging threats.',
      author: 'Emily Watson',
      date: '2024-01-05',
      readTime: '5 min read',
      category: 'Cybersecurity',
      image: '/api/placeholder/600/300',
      featured: false
    },
    {
      id: 'micro-saas-success',
      title: 'Building Successful Micro SAAS: A Complete Guide',
      excerpt: 'Learn the secrets to building and scaling micro SAAS applications that deliver real value to users.',
      author: 'James Wilson',
      date: '2024-01-01',
      readTime: '10 min read',
      category: 'Micro SAAS',
      image: '/api/placeholder/600/300',
      featured: false
    },
    {
      id: '5g-business-impact',
      title: '5G Technology: Transforming Business Connectivity',
      excerpt: 'Discover how 5G technology is revolutionizing business connectivity and enabling new possibilities.',
      author: 'Dr. Lisa Park',
      date: '2023-12-28',
      readTime: '7 min read',
      category: '5G Technology',
      image: '/api/placeholder/600/300',
      featured: false
    },
    {
      id: 'cloud-migration-guide',
      title: 'Cloud Migration: A Step-by-Step Guide for Businesses',
      excerpt: 'Navigate the cloud migration process with our comprehensive guide and best practices.',
      author: 'David Kim',
      date: '2023-12-20',
      readTime: '9 min read',
      category: 'Cloud Computing',
      image: '/api/placeholder/600/300',
      featured: false
    }
  ];

  const categories = [
    'All',
    'AI & Technology',
    'Quantum Computing',
    'Cybersecurity',
    'Micro SAAS',
    '5G Technology',
    'Cloud Computing'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <EnhancedSEO
        title="Blog - Zion Tech Group | Technology Insights and Industry News"
        description="Stay updated with the latest technology insights, AI trends, cybersecurity news, and industry developments from Zion Tech Group experts."
        keywords="technology blog, AI insights, cybersecurity news, quantum computing, micro SAAS, 5G technology, cloud computing"
      />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Technology Blog
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Stay ahead of the curve with insights from our technology experts. 
              Discover the latest trends, innovations, and best practices in AI, cybersecurity, and beyond.
            </p>
          </div>
        </ResponsiveContainer>
      </section>

      {/* Featured Posts */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Featured Articles
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Our most popular and insightful articles
            </p>
          </div>

          <ResponsiveGrid className="grid-cols-1 md:grid-cols-2 gap-8">
            {blogPosts.filter(post => post.featured).map((post) => (
              <FuturisticCard key={post.id} className="p-6 hover:scale-105 transition-transform">
                <div className="aspect-video bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-lg mb-4 flex items-center justify-center">
                  <div className="text-cyan-400 text-sm">Featured Image</div>
                </div>
                
                <div className="flex items-center space-x-4 text-sm text-gray-400 mb-3">
                  <span className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    {new Date(post.date).toLocaleDateString()}
                  </span>
                  <span className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    {post.readTime}
                  </span>
                  <span className="flex items-center">
                    <Tag className="w-4 h-4 mr-1" />
                    {post.category}
                  </span>
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-3">
                  {post.title}
                </h3>
                
                <p className="text-gray-300 mb-4">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-gray-400">
                    <User className="w-4 h-4 mr-2" />
                    {post.author}
                  </div>
                  <Link
                    to={`/blog/${post.id}`}
                    className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </FuturisticCard>
            ))}
          </ResponsiveGrid>
        </ResponsiveContainer>
      </section>

      {/* All Posts */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              All Articles
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Browse our complete collection of technology insights
            </p>
          </div>

          <ResponsiveGrid className="grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <FuturisticCard key={post.id} className="p-6 hover:scale-105 transition-transform">
                <div className="aspect-video bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-lg mb-4 flex items-center justify-center">
                  <div className="text-cyan-400 text-sm">Article Image</div>
                </div>
                
                <div className="flex items-center space-x-4 text-sm text-gray-400 mb-3">
                  <span className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    {new Date(post.date).toLocaleDateString()}
                  </span>
                  <span className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    {post.readTime}
                  </span>
                </div>
                
                <h3 className="text-lg font-semibold text-white mb-3">
                  {post.title}
                </h3>
                
                <p className="text-gray-300 mb-4 text-sm">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="text-xs text-cyan-400 bg-cyan-400/10 px-2 py-1 rounded">
                    {post.category}
                  </span>
                  <Link
                    to={`/blog/${post.id}`}
                    className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium text-sm"
                  >
                    Read More
                    <ArrowRight className="w-3 h-3 ml-1" />
                  </Link>
                </div>
              </FuturisticCard>
            ))}
          </ResponsiveGrid>
        </ResponsiveContainer>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <FuturisticCard className="text-center p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Stay Updated with Our Latest Insights
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter and never miss the latest technology trends and insights.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <FuturisticButton
                href="/contact"
                className="bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-700 hover:to-purple-700"
              >
                Subscribe Now
                <ArrowRight className="w-5 h-5 ml-2" />
              </FuturisticButton>
              <FuturisticButton
                href="/contact"
                variant="outline"
                className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white"
              >
                Contact Us
              </FuturisticButton>
            </div>
          </FuturisticCard>
        </ResponsiveContainer>
      </section>
    </div>
  );
};

export default BlogPage;
