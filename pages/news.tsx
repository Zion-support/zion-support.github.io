import React from 'react';
import MainLayout from '../components/layout/MainLayout';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Calendar, 
  User, 
  Tag, 
  ArrowRight,
  ExternalLink,
  TrendingUp,
  Award,
  Globe,
  Zap,
  Building
} from 'lucide-react';

const newsArticles = [
  {
    id: 1,
    title: "Zion Tech Group Launches New AI-Powered Analytics Platform",
    excerpt: "We're excited to announce the launch of our next-generation AI analytics platform that helps businesses make data-driven decisions with unprecedented accuracy.",
    content: "Our new AI analytics platform represents a major breakthrough in business intelligence. Built with advanced machine learning algorithms, it can process vast amounts of data in real-time and provide actionable insights that were previously impossible to obtain. The platform features intuitive dashboards, predictive analytics, and automated reporting capabilities that will revolutionize how businesses approach data analysis.",
    author: "Sarah Chen",
    authorRole: "CTO",
    date: "2024-01-15",
    category: "Product Launch",
    image: "/images/news/ai-platform.jpg",
    featured: true,
    tags: ["AI", "Analytics", "Product Launch", "Innovation"]
  },
  {
    id: 2,
    title: "Company Expands to European Market with New Office in London",
    excerpt: "Zion Tech Group announces the opening of its first European office in London, marking a significant milestone in our global expansion strategy.",
    content: "The new London office will serve as our European headquarters, providing local support and services to clients across the region. This expansion reflects our commitment to serving international clients and our confidence in the European market's potential for growth in technology services.",
    author: "Michael Rodriguez",
    authorRole: "VP of International Operations",
    date: "2024-01-10",
    category: "Company News",
    image: "/images/news/london-office.jpg",
    featured: true,
    tags: ["Expansion", "International", "Europe", "Growth"]
  },
  {
    id: 3,
    title: "Zion Tech Group Achieves SOC 2 Type II Certification",
    excerpt: "We're proud to announce that Zion Tech Group has successfully achieved SOC 2 Type II certification, demonstrating our commitment to the highest security standards.",
    content: "This certification validates our comprehensive security controls and processes, ensuring that our clients' data is protected according to industry best practices. The audit covered our security, availability, processing integrity, confidentiality, and privacy controls over a six-month period.",
    author: "David Kim",
    authorRole: "Chief Security Officer",
    date: "2024-01-05",
    category: "Security",
    image: "/images/news/soc2-certification.jpg",
    featured: false,
    tags: ["Security", "Certification", "Compliance", "Trust"]
  },
  {
    id: 4,
    title: "New Partnership with Leading Cloud Provider Accelerates Innovation",
    excerpt: "Strategic partnership with a major cloud provider enables us to offer enhanced scalability and performance to our enterprise clients.",
    content: "This partnership allows us to leverage cutting-edge cloud infrastructure and services, enabling us to deliver more robust and scalable solutions to our clients. The collaboration will focus on developing next-generation cloud-native applications and services.",
    author: "Emily Johnson",
    authorRole: "VP of Strategic Partnerships",
    date: "2023-12-28",
    category: "Partnerships",
    image: "/images/news/cloud-partnership.jpg",
    featured: false,
    tags: ["Partnership", "Cloud", "Innovation", "Enterprise"]
  },
  {
    id: 5,
    title: "Zion Tech Group Named 'Best AI Solutions Provider' by Tech Industry Awards",
    excerpt: "We're honored to receive the 'Best AI Solutions Provider' award at the annual Tech Industry Awards, recognizing our innovation and excellence in artificial intelligence.",
    content: "This prestigious award recognizes our outstanding contributions to the AI industry and our commitment to delivering cutting-edge solutions that drive real business value. Our team's expertise in machine learning, natural language processing, and computer vision has set new standards in the industry.",
    author: "Dr. Sarah Chen",
    authorRole: "CTO",
    date: "2023-12-20",
    category: "Awards",
    image: "/images/news/ai-award.jpg",
    featured: false,
    tags: ["Award", "AI", "Recognition", "Excellence"]
  },
  {
    id: 6,
    title: "Company Announces $10M Series A Funding Round",
    excerpt: "Zion Tech Group secures $10M in Series A funding to accelerate product development and market expansion.",
    content: "This funding round will enable us to significantly expand our engineering team, accelerate the development of new AI and cloud services, and expand our market presence. The investment reflects strong confidence in our vision and execution capabilities.",
    author: "Alex Thompson",
    authorRole: "CEO",
    date: "2023-12-15",
    category: "Funding",
    image: "/images/news/funding-round.jpg",
    featured: false,
    tags: ["Funding", "Growth", "Investment", "Expansion"]
  }
];

const categories = [
  { name: "All", count: newsArticles.length, active: true },
  { name: "Product Launch", count: 1, active: false },
  { name: "Company News", count: 1, active: false },
  { name: "Security", count: 1, active: false },
  { name: "Partnerships", count: 1, active: false },
  { name: "Awards", count: 1, active: false },
  { name: "Funding", count: 1, active: false }
];

const featuredArticle = newsArticles.find(article => article.featured);
const regularArticles = newsArticles.filter(article => !article.featured);

export default function NewsPage() {
  return (
    <MainLayout 
      title="News - Zion Tech Group"
      description="Latest news, announcements, and updates from Zion Tech Group. Stay informed about our products, partnerships, and company developments."
    >
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Latest{' '}
                <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                  News & Updates
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8">
                Stay informed about our latest products, partnerships, achievements, and company developments.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Categories Filter */}
        <section className="py-8 bg-white border-b">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((category, index) => (
                <button
                  key={index}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    category.active
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Article */}
        {featuredArticle && (
          <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
              <motion.div
                className="max-w-6xl mx-auto"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-2 rounded-lg mb-6 inline-block">
                  <span className="text-sm font-semibold">Featured Article</span>
                </div>
                
                <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                  <div className="md:flex">
                    <div className="md:w-1/2">
                      <div className="h-64 md:h-full bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
                        <div className="text-center">
                          <Globe className="w-16 h-16 text-blue-600 mx-auto mb-4" />
                          <p className="text-gray-600">Featured Image</p>
                        </div>
                      </div>
                    </div>
                    <div className="md:w-1/2 p-8">
                      <div className="flex items-center mb-4">
                        <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">
                          {featuredArticle.category}
                        </span>
                      </div>
                      
                      <h2 className="text-3xl font-bold text-gray-900 mb-4">
                        {featuredArticle.title}
                      </h2>
                      
                      <p className="text-gray-600 mb-6 leading-relaxed">
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
                        </div>
                      </div>
                      
                      <div className="flex flex-wrap gap-2 mb-6">
                        {featuredArticle.tags.map((tag, index) => (
                          <span key={index} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                            {tag}
                          </span>
                        ))}
                      </div>
                      
                      <Link
                        href={`/news/${featuredArticle.id}`}
                        className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold"
                      >
                        <span>Read Full Article</span>
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>
        )}

        {/* News Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Recent News</h2>
              <p className="text-lg text-gray-600">Stay updated with our latest announcements and developments</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularArticles.map((article, index) => (
                <motion.article
                  key={article.id}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="h-48 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                    <div className="text-center">
                      <Globe className="w-12 h-12 text-gray-400 mx-auto mb-2" />
                      <p className="text-gray-500 text-sm">Article Image</p>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center mb-3">
                      <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                        {article.category}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                      {article.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {article.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-3 text-sm text-gray-500">
                        <div className="flex items-center">
                          <User className="w-4 h-4 mr-1" />
                          {article.author}
                        </div>
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          {new Date(article.date).toLocaleDateString()}
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-1 mb-4">
                      {article.tags.slice(0, 3).map((tag, tagIndex) => (
                        <span key={tagIndex} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <Link
                      href={`/news/${article.id}`}
                      className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold group-hover:text-blue-700"
                    >
                      <span>Read More</span>
                      <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Stay Updated
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                Subscribe to our newsletter to receive the latest news, updates, and insights directly in your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:ring-2 focus:ring-blue-300 focus:outline-none"
                />
                <button className="px-6 py-3 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors font-semibold">
                  Subscribe
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
}