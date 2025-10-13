import React from 'react';
import { Calendar, User, ArrowRight, ExternalLink } from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';
import FuturisticButton from '../components/FuturisticButton';

const NewsPage = () => {
  const newsArticles = [
    {
      title: 'Zion Tech Group Launches Revolutionary AI Analytics Platform',
      excerpt: 'Our new AI-powered analytics platform is set to transform how businesses make data-driven decisions with real-time insights and predictive capabilities.',
      date: '2024-01-15',
      author: 'Sarah Johnson',
      category: 'Product Launch',
      image: '/api/placeholder/600/400',
      featured: true
    },
    {
      title: 'Company Expands to European Markets with New Office in London',
      excerpt: 'Zion Tech Group announces the opening of its European headquarters in London, marking a significant milestone in our global expansion strategy.',
      date: '2024-01-10',
      author: 'Michael Chen',
      category: 'Company News',
      image: '/api/placeholder/600/400',
      featured: false
    },
    {
      title: 'Partnership with Microsoft Azure Accelerates Cloud AI Solutions',
      excerpt: 'Strategic partnership with Microsoft Azure enables us to deliver more scalable and cost-effective AI solutions to our enterprise clients.',
      date: '2024-01-05',
      author: 'Emily Rodriguez',
      category: 'Partnership',
      image: '/api/placeholder/600/400',
      featured: false
    },
    {
      title: 'Zion Tech Group Recognized as Top AI Company by TechCrunch',
      excerpt: 'We are honored to be featured in TechCrunch\'s list of top AI companies to watch in 2024, highlighting our innovative approach to AI solutions.',
      date: '2024-01-01',
      author: 'David Kim',
      category: 'Awards',
      image: '/api/placeholder/600/400',
      featured: false
    },
    {
      title: 'New Research Paper Published on Ethical AI Implementation',
      excerpt: 'Our research team publishes groundbreaking paper on implementing ethical AI practices in enterprise environments, setting new industry standards.',
      date: '2023-12-28',
      author: 'Lisa Wang',
      category: 'Research',
      image: '/api/placeholder/600/400',
      featured: false
    },
    {
      title: 'Zion Tech Group Raises $50M Series B Funding Round',
      excerpt: 'Successful Series B funding round will accelerate our product development and expand our team to meet growing market demand.',
      date: '2023-12-20',
      author: 'Kleber Santos',
      category: 'Funding',
      image: '/api/placeholder/600/400',
      featured: false
    }
  ];

  const categories = ['All', 'Product Launch', 'Company News', 'Partnership', 'Awards', 'Research', 'Funding'];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <EnhancedSEO
        title="News - Zion Tech Group | Latest Updates"
        description="Stay updated with the latest news, announcements, and insights from Zion Tech Group. Read about our product launches, partnerships, and company milestones."
        keywords="news, updates, announcements, product launches, company news, AI news, technology news"
        canonical="https://ziontechgroup.com/news"
      />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              Latest News
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Stay informed about our latest developments, product launches, partnerships, and company milestones.
          </p>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {newsArticles.filter(article => article.featured).map((article, index) => (
            <div key={index} className="bg-gradient-to-r from-cyan-900/30 to-purple-900/30 rounded-xl p-8 mb-16">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="flex items-center mb-4">
                    <span className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-3 py-1 rounded-full text-sm font-semibold mr-4">
                      Featured
                    </span>
                    <span className="text-cyan-400 font-medium">{article.category}</span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{article.title}</h2>
                  <p className="text-xl text-gray-300 mb-6">{article.excerpt}</p>
                  <div className="flex items-center text-gray-400 mb-6">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span className="mr-6">{new Date(article.date).toLocaleDateString()}</span>
                    <User className="w-4 h-4 mr-2" />
                    <span>{article.author}</span>
                  </div>
                  <FuturisticButton
                    variant="primary"
                    size="lg"
                    to="/contact"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </FuturisticButton>
                </div>
                <div className="bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-xl p-8 h-full flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 flex items-center justify-center text-white">
                      <ExternalLink className="w-8 h-8" />
                    </div>
                    <h4 className="text-xl font-semibold text-white mb-2">Featured Article</h4>
                    <p className="text-gray-300">Click "Read More" to access the full article and detailed information.</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* News Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              All News
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Browse through all our latest news and announcements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsArticles.filter(article => !article.featured).map((article, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 group"
              >
                <div className="mb-4">
                  <span className="bg-cyan-500/20 text-cyan-400 px-3 py-1 rounded-full text-sm font-semibold">
                    {article.category}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {article.title}
                </h3>
                
                <p className="text-gray-300 mb-4 leading-relaxed">{article.excerpt}</p>
                
                <div className="flex items-center text-gray-400 text-sm mb-4">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span className="mr-4">{new Date(article.date).toLocaleDateString()}</span>
                  <User className="w-4 h-4 mr-2" />
                  <span>{article.author}</span>
                </div>
                
                <FuturisticButton
                  variant="outline"
                  size="sm"
                  to="/contact"
                  className="w-full"
                >
                  Read More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </FuturisticButton>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/30 to-purple-900/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Stay Updated
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Subscribe to our newsletter to get the latest news and updates delivered directly to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
            <FuturisticButton
              variant="primary"
              size="lg"
              to="/contact"
            >
              Subscribe
            </FuturisticButton>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NewsPage;