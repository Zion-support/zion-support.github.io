import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Calendar, User, ArrowRight, ExternalLink } from 'lucide-react';

const NewsPage: React.FC = () => {
  const newsArticles = [
    {
      id: 1,
      title: 'Zion Tech Group Launches Advanced AI Quantum Computing Platform',
      excerpt: 'Revolutionary quantum computing solutions now available for enterprise clients, offering unprecedented processing power and security.',
      content: 'Zion Tech Group has officially launched its next-generation quantum computing platform, designed specifically for enterprise applications. This breakthrough technology offers quantum advantage in optimization, cryptography, and machine learning applications.',
      author: 'Kleber Santos',
      date: '2024-12-15',
      category: 'Product Launch',
      readTime: '5 min read',
      image: '/images/news/quantum-launch.jpg',
      featured: true
    },
    {
      id: 2,
      title: 'AI Automation Reduces Client Costs by 70% in Q4 2024',
      excerpt: 'Our latest AI automation implementations have delivered exceptional results for enterprise clients across multiple industries.',
      content: 'Zion Tech Group\'s AI automation solutions have achieved remarkable success in Q4 2024, with clients reporting average cost reductions of 70% and productivity increases of 300%.',
      author: 'Sarah Johnson',
      date: '2024-12-10',
      category: 'Success Story',
      readTime: '3 min read',
      image: '/images/news/automation-success.jpg',
      featured: false
    },
    {
      id: 3,
      title: 'Partnership with Leading Cloud Providers Expands Global Reach',
      excerpt: 'Strategic partnerships with AWS, Azure, and Google Cloud enable worldwide deployment of our AI solutions.',
      content: 'We\'re excited to announce strategic partnerships with major cloud providers, expanding our global reach and enabling faster deployment of AI solutions worldwide.',
      author: 'Mike Chen',
      date: '2024-12-05',
      category: 'Partnership',
      readTime: '4 min read',
      image: '/images/news/cloud-partnerships.jpg',
      featured: false
    },
    {
      id: 4,
      title: 'New AI Cybersecurity Solutions Protect Against Advanced Threats',
      excerpt: 'Advanced AI-powered security solutions now detect and prevent 99.9% of cyber threats in real-time.',
      content: 'Our latest AI cybersecurity suite provides enterprise-grade protection against advanced persistent threats, zero-day attacks, and sophisticated malware.',
      author: 'Alex Rodriguez',
      date: '2024-11-28',
      category: 'Security',
      readTime: '6 min read',
      image: '/images/news/cybersecurity.jpg',
      featured: false
    },
    {
      id: 5,
      title: 'Zion Tech Group Recognized as Top AI Company 2024',
      excerpt: 'Industry recognition for innovation and excellence in artificial intelligence solutions and services.',
      content: 'We\'re honored to be recognized as one of the top AI companies of 2024 by leading industry publications and analyst firms.',
      author: 'Jennifer Lee',
      date: '2024-11-20',
      category: 'Awards',
      readTime: '3 min read',
      image: '/images/news/award-recognition.jpg',
      featured: false
    },
    {
      id: 6,
      title: 'AI Healthcare Solutions Improve Patient Outcomes by 40%',
      excerpt: 'Our AI-powered healthcare solutions are transforming patient care and improving outcomes across multiple medical specialties.',
      content: 'Healthcare providers using our AI solutions report significant improvements in patient outcomes, diagnostic accuracy, and treatment efficiency.',
      author: 'Dr. Maria Garcia',
      date: '2024-11-15',
      category: 'Healthcare',
      readTime: '5 min read',
      image: '/images/news/healthcare-ai.jpg',
      featured: false
    }
  ];

  const categories = ['All', 'Product Launch', 'Success Story', 'Partnership', 'Security', 'Awards', 'Healthcare'];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>News & Updates - Zion Tech Group</title>
        <meta name="description" content="Stay updated with the latest news, product launches, and success stories from Zion Tech Group." />
        <meta name="keywords" content="AI news, technology updates, product launches, success stories, Zion Tech Group" />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            News & Updates
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Stay informed about our latest innovations, product launches, success stories, and industry insights.
          </p>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Featured Story</h2>
          {newsArticles.filter(article => article.featured).map((article) => (
            <div key={article.id} className="bg-white rounded-xl shadow-2xl overflow-hidden mb-12">
              <div className="md:flex">
                <div className="md:w-1/2">
                  <div className="h-64 md:h-full bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center">
                    <div className="text-6xl">🚀</div>
                  </div>
                </div>
                <div className="md:w-1/2 p-8">
                  <div className="flex items-center space-x-4 mb-4">
                    <span className="bg-purple-100 text-purple-800 text-sm px-3 py-1 rounded-full">
                      {article.category}
                    </span>
                    <span className="text-gray-500 text-sm">{article.readTime}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{article.title}</h3>
                  <p className="text-gray-600 mb-6">{article.content}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-2">
                        <User className="w-4 h-4 text-gray-500" />
                        <span className="text-sm text-gray-600">{article.author}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Calendar className="w-4 h-4 text-gray-500" />
                        <span className="text-sm text-gray-600">{article.date}</span>
                      </div>
                    </div>
                    <button className="flex items-center space-x-2 text-purple-600 hover:text-purple-700 font-medium">
                      <span>Read More</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* News Grid */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Latest News</h2>
          
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  category === 'All'
                    ? 'bg-purple-600 text-white'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsArticles.filter(article => !article.featured).map((article) => (
              <article key={article.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                  <div className="text-4xl">📰</div>
                </div>
                <div className="p-6">
                  <div className="flex items-center space-x-4 mb-3">
                    <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full">
                      {article.category}
                    </span>
                    <span className="text-gray-500 text-xs">{article.readTime}</span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2">{article.title}</h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">{article.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2 text-xs text-gray-500">
                      <User className="w-3 h-3" />
                      <span>{article.author}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-xs text-gray-500">
                      <Calendar className="w-3 h-3" />
                      <span>{article.date}</span>
                    </div>
                  </div>
                  <button className="w-full mt-4 flex items-center justify-center space-x-2 text-purple-600 hover:text-purple-700 font-medium py-2 border border-purple-200 rounded-lg hover:bg-purple-50 transition-colors">
                    <span>Read Article</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 px-4 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Stay Updated
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Get the latest news and updates delivered directly to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button className="bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NewsPage;