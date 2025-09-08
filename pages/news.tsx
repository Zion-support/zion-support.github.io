import React from 'react';
import { motion } from 'framer-motion';
import { 
  Calendar, 
  Clock, 
  User, 
  ArrowRight, 
  Tag,
  ExternalLink,
  TrendingUp,
  Globe
} from 'lucide-react';
import MainLayout from './components/layout/MainLayout';

const newsArticles = [
  {
    id: 1,
    title: 'Zion Tech Group Launches New AI-Powered Analytics Platform',
    excerpt: 'Revolutionary AI platform transforms business intelligence with real-time insights and predictive analytics.',
    content: 'We are excited to announce the launch of our new AI-powered analytics platform that revolutionizes how businesses analyze and interpret their data. This cutting-edge solution combines machine learning algorithms with intuitive visualization tools to provide real-time insights and predictive analytics.',
    author: 'Sarah Johnson',
    date: '2024-01-15',
    readTime: '5 min read',
    category: 'Product Launch',
    image: '/images/news/ai-analytics.jpg',
    featured: true
  },
  {
    id: 2,
    title: 'Partnership with Microsoft Azure Expands Cloud Solutions',
    excerpt: 'Strategic partnership brings enhanced cloud infrastructure and AI services to our clients.',
    content: 'Our new partnership with Microsoft Azure enables us to offer enhanced cloud infrastructure and AI services to our clients. This collaboration provides access to cutting-edge cloud technologies and advanced AI capabilities.',
    author: 'Michael Chen',
    date: '2024-01-10',
    readTime: '3 min read',
    category: 'Partnership',
    image: '/images/news/azure-partnership.jpg',
    featured: false
  },
  {
    id: 3,
    title: 'Cybersecurity Best Practices for Remote Work',
    excerpt: 'Essential security measures to protect your business in the remote work environment.',
    content: 'As remote work becomes the new norm, cybersecurity has never been more important. Learn about the essential security measures every business should implement to protect their data and systems.',
    author: 'David Rodriguez',
    date: '2024-01-05',
    readTime: '7 min read',
    category: 'Security',
    image: '/images/news/cybersecurity.jpg',
    featured: false
  },
  {
    id: 4,
    title: 'Machine Learning Trends for 2024',
    excerpt: 'Explore the latest trends and innovations in machine learning that will shape the future.',
    content: 'Machine learning continues to evolve rapidly, with new trends emerging that will shape the future of technology. From edge computing to federated learning, discover what\'s next in ML.',
    author: 'Emily Watson',
    date: '2024-01-01',
    readTime: '6 min read',
    category: 'Technology',
    image: '/images/news/ml-trends.jpg',
    featured: false
  }
];

const categories = ['All', 'Product Launch', 'Partnership', 'Security', 'Technology'];

export default function NewsPage() {
  return (
    <MainLayout
      title="News & Updates - Zion Tech Group"
      description="Stay updated with the latest news, product launches, partnerships, and industry insights from Zion Tech Group."
      keywords="news, updates, company news, product launches, partnerships, industry insights, technology news"
    >
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                News & <span className="text-blue-600">Updates</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Stay informed with the latest developments, product launches, and industry insights from Zion Tech Group.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Featured Article */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="mb-12"
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Article</h2>
                {newsArticles.filter(article => article.featured).map((article) => (
                  <div key={article.id} className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8">
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                      <div>
                        <div className="flex items-center mb-4">
                          <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                            {article.category}
                          </span>
                          <span className="ml-4 text-gray-500 text-sm">{article.readTime}</span>
                        </div>
                        <h3 className="text-3xl font-bold text-gray-900 mb-4">{article.title}</h3>
                        <p className="text-lg text-gray-600 mb-6">{article.excerpt}</p>
                        <div className="flex items-center text-gray-500 text-sm mb-6">
                          <User className="w-4 h-4 mr-2" />
                          <span className="mr-4">{article.author}</span>
                          <Calendar className="w-4 h-4 mr-2" />
                          <span>{new Date(article.date).toLocaleDateString()}</span>
                        </div>
                        <button className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium">
                          Read More
                          <ArrowRight className="ml-2 w-4 h-4" />
                        </button>
                      </div>
                      <div className="bg-gray-200 rounded-lg h-64 flex items-center justify-center">
                        <span className="text-gray-500">Article Image</span>
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* News Grid */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="mb-12"
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-8">Latest News</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {newsArticles.filter(article => !article.featured).map((article, index) => (
                    <motion.article
                      key={article.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: index * 0.1 }}
                      className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
                    >
                      <div className="bg-gray-200 h-48 flex items-center justify-center">
                        <span className="text-gray-500">Article Image</span>
                      </div>
                      <div className="p-6">
                        <div className="flex items-center mb-3">
                          <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs font-medium">
                            {article.category}
                          </span>
                          <span className="ml-2 text-gray-500 text-xs">{article.readTime}</span>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2">
                          {article.title}
                        </h3>
                        <p className="text-gray-600 mb-4 line-clamp-3">{article.excerpt}</p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center text-gray-500 text-sm">
                            <User className="w-4 h-4 mr-1" />
                            <span className="mr-3">{article.author}</span>
                            <Calendar className="w-4 h-4 mr-1" />
                            <span>{new Date(article.date).toLocaleDateString()}</span>
                          </div>
                          <button className="text-blue-600 hover:text-blue-700">
                            <ArrowRight className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </motion.article>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-16 bg-blue-600">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-4xl font-bold text-white mb-6">Stay Updated</h2>
                <p className="text-xl text-blue-100 mb-8">
                  Subscribe to our newsletter for the latest news and updates.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-blue-300"
                  />
                  <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                    Subscribe
                  </button>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
}