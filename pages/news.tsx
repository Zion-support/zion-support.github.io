import React from 'react';
import MainLayout from '../components/layout/MainLayout';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Calendar, User, ArrowRight, Search, Tag, Clock, ExternalLink } from 'lucide-react';


const newsArticles = [
  {
    id: 1,
    title: 'Zion Tech Group Announces Major AI Breakthrough in Healthcare Analytics',
    excerpt: 'Our latest AI platform has achieved 95% accuracy in medical diagnosis, revolutionizing patient care and treatment outcomes.',
    author: 'Sarah Johnson',
    date: '2024-01-15',
    category: 'Company News',
    readTime: '3 min read',
    image: '/api/placeholder/600/400',
    featured: true,
    tags: ['AI', 'Healthcare', 'Innovation', 'Technology']
  },
  {
    id: 2,
    title: 'New Partnership with Microsoft Azure Expands Cloud Capabilities',
    excerpt: 'Strategic partnership enables enhanced cloud solutions and improved scalability for enterprise clients.',
    author: 'Michael Chen',
    date: '2024-01-12',
    category: 'Partnerships',
    readTime: '2 min read',
    image: '/api/placeholder/600/400',
    featured: false,
    tags: ['Partnership', 'Cloud', 'Microsoft', 'Enterprise']
  },
  {
    id: 3,
    title: 'Cybersecurity Threats on the Rise: How to Protect Your Business',
    excerpt: 'Expert analysis of the latest cybersecurity trends and practical steps to safeguard your digital assets.',
    author: 'David Rodriguez',
    date: '2024-01-10',
    category: 'Industry Insights',
    readTime: '5 min read',
    image: '/api/placeholder/600/400',
    featured: false,
    tags: ['Cybersecurity', 'Security', 'Business', 'Protection']
  },
  {
    id: 4,
    title: 'Zion Tech Group Wins "Best AI Solution Provider" Award',
    excerpt: 'Recognition for our innovative AI solutions and commitment to driving digital transformation across industries.',
    author: 'Emily Watson',
    date: '2024-01-08',
    category: 'Awards',
    readTime: '2 min read',
    image: '/api/placeholder/600/400',
    featured: false,
    tags: ['Award', 'AI', 'Recognition', 'Excellence']
  },
  {
    id: 5,
    title: 'The Future of Edge Computing: Trends and Opportunities',
    excerpt: 'Comprehensive analysis of edge computing trends and how businesses can leverage this technology for competitive advantage.',
    author: 'Alex Thompson',
    date: '2024-01-05',
    category: 'Technology Trends',
    readTime: '6 min read',
    image: '/api/placeholder/600/400',
    featured: false,
    tags: ['Edge Computing', 'Technology', 'Trends', 'Innovation']
  },
  {
    id: 6,
    title: 'Zion Tech Group Expands Team with 50 New Hires',
    excerpt: 'Major expansion brings top talent to support growing demand for technology solutions and services.',
    author: 'Lisa Park',
    date: '2024-01-03',
    category: 'Company News',
    readTime: '3 min read',
    image: '/api/placeholder/600/400',
    featured: false,
    tags: ['Hiring', 'Growth', 'Team', 'Expansion']
  },
  {
    id: 7,
    title: 'Digital Transformation: Lessons from Industry Leaders',
    excerpt: 'Key insights from successful digital transformation initiatives across various industries and sectors.',
    author: 'John Smith',
    date: '2024-01-01',
    category: 'Industry Insights',
    readTime: '7 min read',
    image: '/api/placeholder/600/400',
    featured: false,
    tags: ['Digital Transformation', 'Leadership', 'Success', 'Strategy']
  },
  {
    id: 8,
    title: 'New Data Privacy Regulations: What Businesses Need to Know',
    excerpt: 'Updated guidance on compliance with new data privacy laws and best practices for protecting customer information.',
    author: 'Maria Garcia',
    date: '2023-12-28',
    category: 'Compliance',
    readTime: '4 min read',
    image: '/api/placeholder/600/400',
    featured: false,
    tags: ['Privacy', 'Compliance', 'Regulations', 'Data Protection']

  }
];

const categories = [
  'All',
  'Company News',
  'Partnerships',
  'Industry Insights',
  'Awards',
  'Technology Trends',
  'Compliance',
  'Product Updates'

];

const featuredArticle = newsArticles.find(article => article.featured);
const regularArticles = newsArticles.filter(article => !article.featured);

export default function NewsPage() {
  return (
    <MainLayout
      title="News - Zion Tech Group"
      description="Stay updated with the latest news, announcements, and insights from Zion Tech Group and the technology industry."
      keywords="news, announcements, technology news, company updates, industry insights"
    >
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Latest News
                <span className="block text-yellow-400">& Updates</span>
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto mb-8">
                Stay informed with the latest news, announcements, and insights from Zion Tech Group.

              </p>
            </motion.div>
          </div>
        </section>

        {/* Featured Article */}
        {featuredArticle && (
          <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Featured Story</h2>
                <div className="w-20 h-1 bg-blue-600"></div>
              </div>
              
              <motion.article
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl overflow-hidden shadow-xl"
              >
                <div className="md:flex">
                  <div className="md:w-1/2">
                    <img
                      src={featuredArticle.image}
                      alt={featuredArticle.title}
                      className="w-full h-64 md:h-full object-cover"
                    />
                  </div>
                  <div className="md:w-1/2 p-8 md:p-12">
                    <div className="flex items-center mb-4">
                      <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                        {featuredArticle.category}
                      </span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                      {featuredArticle.title}
                    </h3>
                    <p className="text-gray-600 mb-6 text-lg">
                      {featuredArticle.excerpt}
                    </p>
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <div className="flex items-center">
                          <User className="w-4 h-4 mr-1" />
                          {featuredArticle.author}
                        </div>
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          {new Date(featuredArticle.date).toLocaleDateString()}
                        </div>
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          {featuredArticle.readTime}
                        </div>
                      </div>
                    </div>
                    <div className="mb-6">
                      <div className="flex flex-wrap gap-2">
                        {featuredArticle.tags.map((tag, index) => (
                          <span
                            key={index}
                            className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    <Link
                      href={`/news/${featuredArticle.id}`}
                      className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center"
                    >
                      Read Full Article
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </div>
                </div>
              </motion.article>

            </div>
          </section>
        )}

        {/* Filter Section */}
        <section className="py-8 bg-white border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search news..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div className="flex flex-wrap gap-2">
                {categories.map((category, index) => (
                  <button
                    key={index}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      category === 'All'
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* News Grid */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">All News</h2>
              <div className="w-20 h-1 bg-blue-600"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

              {regularArticles.map((article, index) => (
                <motion.div
                  key={article.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                >
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <div className="flex items-center mb-3">
                      <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">
                        {article.category}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                      {article.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {article.excerpt}
                    </p>
                    <div className="flex items-center justify-between mb-4 text-sm text-gray-500">
                      <div className="flex items-center">
                        <User className="w-4 h-4 mr-1" />
                        {article.author}
                      </div>
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {new Date(article.date).toLocaleDateString()}
                      </div>
                    </div>
                    <div className="mb-4">
                      <div className="flex flex-wrap gap-1">
                        {article.tags.slice(0, 3).map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="text-sm text-gray-500">
                        {article.readTime}
                      </div>
                      <Link
                        href={`/news/${article.id}`}
                        className="text-blue-600 hover:text-blue-700 font-medium flex items-center"
                      >
                        Read More
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </Link>
                    </div>

                  </div>
                </motion.div>
              ))}
            </div>

            {filteredArticles.length === 0 && (
              <div className="text-center py-12">
                <div className="text-gray-400 mb-4">
                  <Search className="w-16 h-16 mx-auto" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">No articles found</h3>
                <p className="text-gray-600">Try adjusting your search or filter criteria.</p>
              </div>
            )}
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-16 bg-blue-600">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Stay Updated
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Get the latest news and updates delivered to your inbox
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-yellow-400"
              />
              <button className="bg-yellow-500 text-blue-900 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </section>
      </div>
    </MainLayout>

  );
}