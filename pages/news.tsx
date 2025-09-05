import React from 'react';
import Layout from '../components/Layout';
import { Calendar, User, ArrowRight, Tag, Clock } from 'lucide-react';

const newsArticles = [
  {
    title: 'Zion Tech Group Launches New AI-Powered Healthcare Platform',
    excerpt: 'Our latest AI solution is revolutionizing patient care with advanced diagnostic capabilities and predictive analytics.',
    content: 'Zion Tech Group is proud to announce the launch of our new AI-powered healthcare platform, designed to transform patient care through advanced diagnostic capabilities and predictive analytics. The platform leverages machine learning algorithms to assist healthcare professionals in making more accurate diagnoses and treatment recommendations.',
    author: 'Sarah Johnson',
    date: 'March 10, 2024',
    category: 'Product Launch',
    readTime: '5 min read',
    image: '/images/news/ai-healthcare-platform.jpg',
    featured: true
  },
  {
    title: 'Company Expands Cloud Services to European Market',
    excerpt: 'We\'re bringing our comprehensive cloud solutions to European businesses, starting with major cities across the continent.',
    content: 'Zion Tech Group is excited to announce our expansion into the European market, bringing our comprehensive cloud services to businesses across the continent. This expansion includes new data centers in London, Frankfurt, and Amsterdam, ensuring low-latency services for our European clients.',
    author: 'Michael Chen',
    date: 'March 5, 2024',
    category: 'Company News',
    readTime: '4 min read',
    image: '/images/news/european-expansion.jpg',
    featured: false
  },
  {
    title: 'Partnership with Leading Cybersecurity Firm Announced',
    excerpt: 'Strategic partnership will enhance our security offerings and provide clients with advanced threat protection.',
    content: 'Zion Tech Group has entered into a strategic partnership with CyberShield Solutions, a leading cybersecurity firm, to enhance our security offerings. This partnership will provide our clients with advanced threat protection, 24/7 monitoring, and comprehensive security consulting services.',
    author: 'Jennifer Martinez',
    date: 'February 28, 2024',
    category: 'Partnerships',
    readTime: '3 min read',
    image: '/images/news/cybersecurity-partnership.jpg',
    featured: false
  },
  {
    title: 'Zion Tech Group Recognized as Top AI Company',
    excerpt: 'Industry recognition for our innovative AI solutions and commitment to advancing artificial intelligence technology.',
    content: 'Zion Tech Group has been recognized as one of the top AI companies by TechInnovate Magazine for our innovative solutions and commitment to advancing artificial intelligence technology. This recognition highlights our dedication to pushing the boundaries of what\'s possible with AI.',
    author: 'David Thompson',
    date: 'February 20, 2024',
    category: 'Awards',
    readTime: '6 min read',
    image: '/images/news/ai-recognition.jpg',
    featured: false
  },
  {
    title: 'New Office Opening in Austin, Texas',
    excerpt: 'Our new Austin office will serve as a hub for our growing team and provide enhanced support for clients in the region.',
    content: 'Zion Tech Group is pleased to announce the opening of our new office in Austin, Texas. This new location will serve as a hub for our growing team and provide enhanced support for clients in the region. The office features state-of-the-art facilities and collaborative workspaces.',
    author: 'Lisa Wang',
    date: 'February 15, 2024',
    category: 'Company News',
    readTime: '3 min read',
    image: '/images/news/austin-office.jpg',
    featured: false
  },
  {
    title: 'Sustainability Initiative: Carbon Neutral Operations',
    excerpt: 'Zion Tech Group commits to carbon neutral operations by 2025, implementing green technology and sustainable practices.',
    content: 'Zion Tech Group is proud to announce our commitment to achieving carbon neutral operations by 2025. This initiative includes implementing green technology, optimizing our data centers for energy efficiency, and supporting renewable energy projects.',
    author: 'Robert Kim',
    date: 'February 10, 2024',
    category: 'Sustainability',
    readTime: '4 min read',
    image: '/images/news/sustainability-initiative.jpg',
    featured: false
  }
];

const categories = ['All', 'Product Launch', 'Company News', 'Partnerships', 'Awards', 'Sustainability'];

export default function NewsPage() {
  return (
    <Layout
      title="News & Updates - Zion Tech Group"
      description="Stay updated with the latest news, announcements, and insights from Zion Tech Group. Company updates, product launches, and industry trends."
      keywords="news, updates, announcements, company news, product launches, industry insights, technology trends"
    >
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-600 to-blue-600">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                News & Updates
              </h1>
              <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
                Stay informed with the latest news, announcements, and insights from Zion Tech Group. 
                Discover our latest innovations, partnerships, and industry developments.
              </p>
            </div>
          </div>
        </section>

        {/* Featured Article */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Featured News
              </h2>
            </div>

            {newsArticles.filter(article => article.featured).map((article, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden mb-12">
                <div className="h-64 bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
                  <div className="text-center text-white">
                    <h3 className="text-3xl font-bold mb-2">{article.title}</h3>
                    <p className="text-blue-100">{article.category}</p>
                  </div>
                </div>
                
                <div className="p-8">
                  <div className="flex flex-wrap items-center gap-4 text-gray-600 mb-6">
                    <span className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {article.date}
                    </span>
                    <span className="flex items-center">
                      <User className="h-4 w-4 mr-1" />
                      {article.author}
                    </span>
                    <span className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {article.readTime}
                    </span>
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                      {article.category}
                    </span>
                  </div>
                  
                  <p className="text-lg text-gray-600 mb-6">{article.excerpt}</p>
                  <p className="text-gray-700 mb-6">{article.content}</p>
                  
                  <button className="flex items-center text-purple-600 hover:text-purple-700 font-medium">
                    Read Full Article
                    <ArrowRight className="h-4 w-4 ml-1" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* News Grid */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Latest News
              </h2>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {categories.map((category, index) => (
                <button
                  key={index}
                  className={`px-4 py-2 rounded-full font-medium transition-colors ${
                    category === 'All'
                      ? 'bg-purple-600 text-white'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {newsArticles.filter(article => !article.featured).map((article, index) => (
                <div key={index} className="bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition-colors">
                  <div className="flex items-center justify-between mb-4">
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                      {article.category}
                    </span>
                    <span className="text-gray-500 text-sm">{article.readTime}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{article.title}</h3>
                  <p className="text-gray-600 mb-4">{article.excerpt}</p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <span className="flex items-center">
                      <User className="h-4 w-4 mr-1" />
                      {article.author}
                    </span>
                    <span className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {article.date}
                    </span>
                  </div>
                  
                  <button className="flex items-center text-purple-600 hover:text-purple-700 font-medium">
                    Read More
                    <ArrowRight className="h-4 w-4 ml-1" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-16 bg-purple-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Stay Updated
            </h2>
            <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter to receive the latest news and updates directly in your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900"
              />
              <button className="bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}