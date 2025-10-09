import React from 'react';
import Link from 'next/link';
import { ArrowRight, Calendar, Clock, Tag, ExternalLink } from 'lucide-react';

const NewsPage: React.FC = () => {
  const newsArticles = [
    {
      id: 1,
      title: 'Zion Tech Group Announces $50M Series B Funding Round',
      excerpt: 'Leading AI solutions provider secures major investment to accelerate product development and market expansion.',
      date: '2024-12-15',
      category: 'Company News',
      readTime: '3 min read',
      image: '/images/news/funding-announcement.jpg',
      featured: true,
      external: false
    },
    {
      id: 2,
      title: 'Revolutionary AI Breakthrough: 300% Performance Improvement in Enterprise Automation',
      excerpt: 'Our latest AI algorithms have achieved unprecedented performance gains in business process automation.',
      date: '2024-12-10',
      category: 'Technology',
      readTime: '5 min read',
      image: '/images/news/ai-breakthrough.jpg',
      featured: true,
      external: false
    },
    {
      id: 3,
      title: 'Zion Tech Group Partners with Fortune 500 Companies for AI Transformation',
      excerpt: 'Major partnerships announced with leading enterprises to implement cutting-edge AI solutions.',
      date: '2024-12-05',
      category: 'Partnerships',
      readTime: '4 min read',
      image: '/images/news/partnerships.jpg',
      featured: false,
      external: false
    },
    {
      id: 4,
      title: 'AI-Powered Cybersecurity: The Future of Enterprise Security',
      excerpt: 'How artificial intelligence is revolutionizing cybersecurity and threat detection in enterprise environments.',
      date: '2024-11-28',
      category: 'Cybersecurity',
      readTime: '6 min read',
      image: '/images/news/cybersecurity.jpg',
      featured: false,
      external: false
    },
    {
      id: 5,
      title: 'Quantum Computing Breakthrough: Solving Complex Business Problems',
      excerpt: 'Our quantum computing division achieves major milestone in solving previously intractable optimization problems.',
      date: '2024-11-20',
      category: 'Quantum Computing',
      readTime: '7 min read',
      image: '/images/news/quantum-computing.jpg',
      featured: false,
      external: false
    },
    {
      id: 6,
      title: 'Zion Tech Group Named Top AI Company by TechCrunch',
      excerpt: 'Industry recognition for our innovative AI solutions and market leadership in enterprise automation.',
      date: '2024-11-15',
      category: 'Awards',
      readTime: '3 min read',
      image: '/images/news/awards.jpg',
      featured: false,
      external: true,
      externalUrl: 'https://techcrunch.com/zion-tech-group-top-ai-company'
    },
    {
      id: 7,
      title: 'The Future of Autonomous Business Operations',
      excerpt: 'Exploring how autonomous systems are transforming business operations and decision-making processes.',
      date: '2024-11-10',
      category: 'Autonomous Systems',
      readTime: '8 min read',
      image: '/images/news/autonomous-systems.jpg',
      featured: false,
      external: false
    },
    {
      id: 8,
      title: 'AI Ethics and Responsible Innovation: Our Commitment',
      excerpt: 'Zion Tech Group\'s approach to ethical AI development and responsible innovation practices.',
      date: '2024-11-05',
      category: 'Ethics',
      readTime: '5 min read',
      image: '/images/news/ai-ethics.jpg',
      featured: false,
      external: false
    },
    {
      id: 9,
      title: 'Blockchain and AI: The Perfect Combination for Enterprise Solutions',
      excerpt: 'How combining blockchain technology with AI creates powerful enterprise solutions for data integrity and automation.',
      date: '2024-10-30',
      category: 'Blockchain',
      readTime: '6 min read',
      image: '/images/news/blockchain-ai.jpg',
      featured: false,
      external: false
    },
    {
      id: 10,
      title: 'Zion Tech Group Expands Global Operations to Europe and Asia',
      excerpt: 'International expansion brings our AI solutions to new markets and strengthens global presence.',
      date: '2024-10-25',
      category: 'Expansion',
      readTime: '4 min read',
      image: '/images/news/global-expansion.jpg',
      featured: false,
      external: false
    }
  ];

  const categories = [
    'All',
    'Company News',
    'Technology',
    'Partnerships',
    'Cybersecurity',
    'Quantum Computing',
    'Awards',
    'Autonomous Systems',
    'Ethics',
    'Blockchain',
    'Expansion'
  ];

  const featuredArticles = newsArticles.filter(article => article.featured);
  const regularArticles = newsArticles.filter(article => !article.featured);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              News & Updates
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
              Stay informed about the latest developments in AI, technology, and our company milestones
            </p>
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured Stories
            </h2>
            <p className="text-xl text-gray-600">
              Our most important news and announcements
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredArticles.map((article) => (
              <div key={article.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="aspect-w-16 aspect-h-9 bg-gray-200">
                  <div className="w-full h-48 bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
                    <span className="text-white text-4xl">📰</span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-3">
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                      {article.category}
                    </span>
                    <div className="flex items-center text-sm text-gray-500">
                      <Calendar className="w-4 h-4 mr-1" />
                      {new Date(article.date).toLocaleDateString()}
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <Clock className="w-4 h-4 mr-1" />
                      {article.readTime}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <a 
                      href={article.external ? article.externalUrl : `/news/${article.id}`}
                      target={article.external ? '_blank' : '_self'}
                      rel={article.external ? 'noopener noreferrer' : ''}
                      className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center"
                    >
                      {article.external ? 'Read on External Site' : 'Read More'}
                      {article.external ? <ExternalLink className="w-4 h-4 ml-1" /> : <ArrowRight className="w-4 h-4 ml-1" />}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Articles */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              All News
            </h2>
            <p className="text-xl text-gray-600">
              Complete archive of our news and updates
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {categories.map((category) => (
              <button
                key={category}
                className="px-4 py-2 rounded-full text-sm font-medium bg-white text-gray-700 hover:bg-blue-600 hover:text-white transition-colors border border-gray-300"
              >
                {category}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularArticles.map((article) => (
              <div key={article.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="aspect-w-16 aspect-h-9 bg-gray-200">
                  <div className="w-full h-48 bg-gradient-to-r from-purple-500 to-pink-600 flex items-center justify-center">
                    <span className="text-white text-4xl">📰</span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-3">
                    <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">
                      {article.category}
                    </span>
                    <div className="flex items-center text-sm text-gray-500">
                      <Calendar className="w-4 h-4 mr-1" />
                      {new Date(article.date).toLocaleDateString()}
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3 line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm line-clamp-3">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-gray-500">
                      <Clock className="w-4 h-4 mr-1" />
                      {article.readTime}
                    </div>
                    <a 
                      href={article.external ? article.externalUrl : `/news/${article.id}`}
                      target={article.external ? '_blank' : '_self'}
                      rel={article.external ? 'noopener noreferrer' : ''}
                      className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center"
                    >
                      {article.external ? 'Read More' : 'Read More'}
                      {article.external ? <ExternalLink className="w-4 h-4 ml-1" /> : <ArrowRight className="w-4 h-4 ml-1" />}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Stay Updated
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Get the latest news and updates delivered directly to your inbox
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-4 py-3 rounded-lg bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
              Subscribe
            </button>
          </div>
          <p className="text-sm text-blue-200 mt-4">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </section>
    </div>
  );
};

export default NewsPage;