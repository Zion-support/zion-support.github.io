import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Calendar, User, ArrowRight, ExternalLink, Tag } from 'lucide-react';

const NewsPage: React.FC = () => {
  const newsArticles = [
    {
      id: 1,
      title: 'Zion Tech Group Launches Revolutionary AI-Powered Business Intelligence Platform',
      excerpt: 'Our new platform combines machine learning with real-time analytics to provide unprecedented insights into business operations.',
      date: '2024-01-15',
      author: 'Sarah Johnson',
      category: 'Product Launch',
      image: '/api/placeholder/600/400',
      featured: true
    },
    {
      id: 2,
      title: 'Zion Tech Group Partners with Leading Healthcare Organizations for AI Implementation',
      excerpt: 'Strategic partnerships will accelerate the adoption of AI solutions in healthcare, improving patient outcomes and operational efficiency.',
      date: '2024-01-10',
      author: 'Michael Chen',
      category: 'Partnerships',
      image: '/api/placeholder/600/400',
      featured: false
    },
    {
      id: 3,
      title: 'Company Receives ISO 27001 Certification for Information Security Management',
      excerpt: 'This certification demonstrates our commitment to maintaining the highest standards of information security and data protection.',
      date: '2024-01-05',
      author: 'Emily Rodriguez',
      category: 'Certification',
      image: '/api/placeholder/600/400',
      featured: false
    },
    {
      id: 4,
      title: 'Zion Tech Group Expands Team with Key AI Research Hires',
      excerpt: 'We welcome five new AI researchers and engineers to strengthen our R&D capabilities and accelerate innovation.',
      date: '2023-12-28',
      author: 'David Kim',
      category: 'Company News',
      image: '/api/placeholder/600/400',
      featured: false
    },
    {
      id: 5,
      title: 'Client Success Story: 300% ROI Achieved with AI Automation Implementation',
      excerpt: 'A Fortune 500 client achieved remarkable results through our AI automation solutions, reducing costs and improving efficiency.',
      date: '2023-12-20',
      author: 'Lisa Wang',
      category: 'Case Study',
      image: '/api/placeholder/600/400',
      featured: false
    },
    {
      id: 6,
      title: 'Zion Tech Group Opens New Research Lab in Silicon Valley',
      excerpt: 'Our new facility will focus on cutting-edge AI research and development, bringing us closer to the heart of innovation.',
      date: '2023-12-15',
      author: 'Alex Thompson',
      category: 'Company News',
      image: '/api/placeholder/600/400',
      featured: false
    }
  ];

  const categories = ['All', 'Product Launch', 'Partnerships', 'Certification', 'Company News', 'Case Study'];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16 pt-24">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Latest <span className="text-cyan-400">News & Updates</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Stay informed about our latest innovations, partnerships, and achievements in the world of AI technology.
          </p>
        </section>

        {/* Featured Article */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-8">Featured Story</h2>
          {newsArticles.filter(article => article.featured).map((article) => (
            <div key={article.id} className="bg-white/10 backdrop-blur-md rounded-xl overflow-hidden border border-white/20">
              <div className="md:flex">
                <div className="md:w-1/2">
                  <img 
                    src={article.image} 
                    alt={article.title}
                    className="w-full h-64 md:h-full object-cover"
                  />
                </div>
                <div className="md:w-1/2 p-8">
                  <div className="flex items-center space-x-4 mb-4">
                    <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-sm">
                      {article.category}
                    </span>
                    <div className="flex items-center text-gray-400 text-sm">
                      <Calendar className="w-4 h-4 mr-2" />
                      {new Date(article.date).toLocaleDateString()}
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{article.title}</h3>
                  <p className="text-gray-300 mb-6">{article.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-gray-400 text-sm">
                      <User className="w-4 h-4 mr-2" />
                      By {article.author}
                    </div>
                    <button className="flex items-center text-cyan-400 hover:text-cyan-300 transition-colors">
                      Read More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </section>

        {/* Category Filter */}
        <section className="mb-12">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-6 py-2 rounded-full transition-all duration-200 ${
                  category === 'All' 
                    ? 'bg-cyan-500 text-white' 
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </section>

        {/* News Grid */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-8">All News</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsArticles.filter(article => !article.featured).map((article) => (
              <article key={article.id} className="bg-white/10 backdrop-blur-md rounded-xl overflow-hidden border border-white/20 hover:bg-white/15 transition-all duration-200">
                <img 
                  src={article.image} 
                  alt={article.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center space-x-4 mb-3">
                    <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm">
                      {article.category}
                    </span>
                    <div className="flex items-center text-gray-400 text-sm">
                      <Calendar className="w-4 h-4 mr-1" />
                      {new Date(article.date).toLocaleDateString()}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 line-clamp-2">{article.title}</h3>
                  <p className="text-gray-300 mb-4 line-clamp-3">{article.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-gray-400 text-sm">
                      <User className="w-4 h-4 mr-2" />
                      {article.author}
                    </div>
                    <button className="flex items-center text-cyan-400 hover:text-cyan-300 transition-colors">
                      Read More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="text-center">
          <div className="bg-gradient-to-r from-cyan-500/20 to-blue-600/20 rounded-xl p-8 border border-cyan-500/30">
            <h2 className="text-3xl font-bold text-white mb-4">
              Stay Updated
            </h2>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Subscribe to our newsletter to receive the latest news, insights, and updates about AI technology and our company.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              />
              <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-200">
                Subscribe
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default NewsPage;
