import React from 'react';
import MainLayout from '../components/layout/MainLayout';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Download, FileText, Calendar, User, ArrowRight, Search, Filter } from 'lucide-react';

const whitePapers = [
  {
    id: 1,
    title: 'The Future of AI in Enterprise: A Comprehensive Guide',
    description: 'Explore the latest trends and best practices for implementing AI solutions in enterprise environments. This comprehensive guide covers everything from strategy to implementation.',
    author: 'Dr. Sarah Johnson',
    date: '2024-01-15',
    category: 'Artificial Intelligence',
    pages: 45,
    downloadCount: 1250,
    featured: true,
    image: '/api/placeholder/400/300',
    topics: ['Machine Learning', 'Enterprise AI', 'Digital Transformation', 'ROI Analysis']
  },
  {
    id: 2,
    title: 'Cybersecurity in the Cloud: Best Practices and Strategies',
    description: 'Learn how to secure your cloud infrastructure with proven strategies and best practices. Includes real-world case studies and implementation guides.',
    author: 'Michael Chen',
    date: '2024-01-12',
    category: 'Cybersecurity',
    pages: 32,
    downloadCount: 980,
    featured: false,
    image: '/api/placeholder/400/300',
    topics: ['Cloud Security', 'Compliance', 'Risk Management', 'Zero Trust']
  },
  {
    id: 3,
    title: 'Digital Transformation: A Strategic Framework',
    description: 'A complete framework for planning and executing digital transformation initiatives. Includes assessment tools and implementation roadmaps.',
    author: 'David Rodriguez',
    date: '2024-01-10',
    category: 'Digital Transformation',
    pages: 38,
    downloadCount: 1150,
    featured: false,
    image: '/api/placeholder/400/300',
    topics: ['Strategy', 'Change Management', 'Technology Adoption', 'ROI']
  },
  {
    id: 4,
    title: 'Edge Computing: The Next Frontier in IT Infrastructure',
    description: 'Discover how edge computing is revolutionizing data processing and what it means for your organization. Includes technical deep-dives and use cases.',
    author: 'Emily Watson',
    date: '2024-01-08',
    category: 'Technology Trends',
    pages: 28,
    downloadCount: 750,
    featured: false,
    image: '/api/placeholder/400/300',
    topics: ['Edge Computing', 'IoT', '5G', 'Data Processing']
  },
  {
    id: 5,
    title: 'Microservices Architecture: Design Patterns and Implementation',
    description: 'A comprehensive guide to designing and implementing microservices architecture. Includes patterns, anti-patterns, and real-world examples.',
    author: 'Alex Thompson',
    date: '2024-01-05',
    category: 'Software Development',
    pages: 42,
    downloadCount: 890,
    featured: false,
    image: '/api/placeholder/400/300',
    topics: ['Microservices', 'Architecture', 'Scalability', 'DevOps']
  },
  {
    id: 6,
    title: 'Data Privacy and Compliance: A Complete Guide',
    description: 'Navigate the complex landscape of data privacy regulations and compliance requirements. Includes GDPR, CCPA, and industry-specific guidelines.',
    author: 'Lisa Park',
    date: '2024-01-03',
    category: 'Compliance',
    pages: 35,
    downloadCount: 1100,
    featured: false,
    image: '/api/placeholder/400/300',
    topics: ['GDPR', 'CCPA', 'Data Privacy', 'Compliance']
  }
];

const categories = [
  'All',
  'Artificial Intelligence',
  'Cybersecurity',
  'Digital Transformation',
  'Technology Trends',
  'Software Development',
  'Compliance',
  'Cloud Computing'
];

const featuredPaper = whitePapers.find(paper => paper.featured);
const regularPapers = whitePapers.filter(paper => !paper.featured);

export default function WhitePapersPage() {
  return (
    <MainLayout
      title="White Papers - Zion Tech Group"
      description="Access our comprehensive research and analysis on the latest technology trends and best practices."
      keywords="white papers, research, technology insights, AI, cybersecurity, digital transformation"
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
                White Papers
                <span className="block text-yellow-400">Expert Insights</span>
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto mb-8">
                Access our comprehensive research and analysis on the latest technology trends and best practices.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Featured White Paper */}
        {featuredPaper && (
          <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Featured White Paper</h2>
                <div className="w-20 h-1 bg-blue-600"></div>
              </div>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl overflow-hidden shadow-xl"
              >
                <div className="md:flex">
                  <div className="md:w-1/3">
                    <img
                      src={featuredPaper.image}
                      alt={featuredPaper.title}
                      className="w-full h-64 md:h-full object-cover"
                    />
                  </div>
                  <div className="md:w-2/3 p-8 md:p-12">
                    <div className="flex items-center mb-4">
                      <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                        {featuredPaper.category}
                      </span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                      {featuredPaper.title}
                    </h3>
                    <p className="text-gray-600 mb-6 text-lg">
                      {featuredPaper.description}
                    </p>
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <div className="flex items-center">
                          <User className="w-4 h-4 mr-1" />
                          {featuredPaper.author}
                        </div>
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          {new Date(featuredPaper.date).toLocaleDateString()}
                        </div>
                        <div className="flex items-center">
                          <FileText className="w-4 h-4 mr-1" />
                          {featuredPaper.pages} pages
                        </div>
                      </div>
                      <div className="text-sm text-gray-500">
                        {featuredPaper.downloadCount} downloads
                      </div>
                    </div>
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-2">Key Topics:</h4>
                      <div className="flex flex-wrap gap-2">
                        {featuredPaper.topics.map((topic, index) => (
                          <span
                            key={index}
                            className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm"
                          >
                            {topic}
                          </span>
                        ))}
                      </div>
                    </div>
                    <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center">
                      <Download className="w-5 h-5 mr-2" />
                      Download White Paper
                    </button>
                  </div>
                </div>
              </motion.div>
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
                  placeholder="Search white papers..."
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

        {/* White Papers Grid */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">All White Papers</h2>
              <div className="w-20 h-1 bg-blue-600"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularPapers.map((paper, index) => (
                <motion.div
                  key={paper.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                >
                  <img
                    src={paper.image}
                    alt={paper.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <div className="flex items-center mb-3">
                      <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">
                        {paper.category}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                      {paper.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {paper.description}
                    </p>
                    <div className="flex items-center justify-between mb-4 text-sm text-gray-500">
                      <div className="flex items-center">
                        <User className="w-4 h-4 mr-1" />
                        {paper.author}
                      </div>
                      <div className="flex items-center">
                        <FileText className="w-4 h-4 mr-1" />
                        {paper.pages} pages
                      </div>
                    </div>
                    <div className="mb-4">
                      <div className="flex flex-wrap gap-1">
                        {paper.topics.slice(0, 3).map((topic, topicIndex) => (
                          <span
                            key={topicIndex}
                            className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs"
                          >
                            {topic}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="text-sm text-gray-500">
                        {paper.downloadCount} downloads
                      </div>
                      <button className="text-blue-600 hover:text-blue-700 font-medium flex items-center">
                        Download
                        <Download className="w-4 h-4 ml-1" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-16 bg-blue-600">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Stay Updated
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Get notified when we publish new white papers and research
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