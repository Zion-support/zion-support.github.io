import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Calendar, User, ArrowRight, ExternalLink } from 'lucide-react';

const NewsPage: React.FC = () => {
  const newsArticles = [
    {
      title: 'Zion Tech Group Launches Revolutionary AI-Powered Business Intelligence Platform',
      excerpt: 'Our new platform combines machine learning with real-time analytics to provide unprecedented insights for enterprise decision-making.',
      date: '2024-01-15',
      author: 'Sarah Johnson',
      category: 'Product Launch',
      image: '/api/placeholder/600/300',
      readTime: '5 min read'
    },
    {
      title: 'Partnership with Microsoft Azure Expands Cloud Infrastructure Capabilities',
      excerpt: 'Strategic partnership enables enhanced cloud migration services and improved scalability for our enterprise clients.',
      date: '2024-01-10',
      author: 'Michael Chen',
      category: 'Partnership',
      image: '/api/placeholder/600/300',
      readTime: '3 min read'
    },
    {
      title: 'Zion Tech Group Achieves SOC 2 Type II Compliance Certification',
      excerpt: 'This certification demonstrates our commitment to the highest standards of security and data protection for our clients.',
      date: '2024-01-05',
      author: 'Emily Rodriguez',
      category: 'Security',
      image: '/api/placeholder/600/300',
      readTime: '4 min read'
    },
    {
      title: 'New Quantum Computing Research Lab Opens in Delaware',
      excerpt: 'State-of-the-art facility will focus on developing next-generation quantum algorithms for enterprise applications.',
      date: '2024-01-01',
      author: 'David Kim',
      category: 'Research',
      image: '/api/placeholder/600/300',
      readTime: '6 min read'
    },
    {
      title: 'AI Healthcare Solutions Show 95% Accuracy in Medical Diagnosis',
      excerpt: 'Our AI-powered diagnostic tools are revolutionizing healthcare with unprecedented accuracy and speed.',
      date: '2023-12-28',
      author: 'Dr. Lisa Wang',
      category: 'Healthcare',
      image: '/api/placeholder/600/300',
      readTime: '7 min read'
    },
    {
      title: 'Zion Tech Group Named Top AI Company by TechCrunch',
      excerpt: 'Recognition highlights our innovative approach to AI solutions and commitment to ethical technology development.',
      date: '2023-12-20',
      author: 'Alex Thompson',
      category: 'Awards',
      image: '/api/placeholder/600/300',
      readTime: '4 min read'
    }
  ];

  const categories = ['All', 'Product Launch', 'Partnership', 'Security', 'Research', 'Healthcare', 'Awards'];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16 pt-24">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text">
            Latest News & Updates
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Stay informed about our latest innovations, partnerships, and industry insights 
            that are shaping the future of AI and IT solutions.
          </p>
        </section>

        {/* Category Filter */}
        <section className="mb-12">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                  category === 'All' 
                    ? 'bg-cyan-600 text-white' 
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </section>

        {/* News Grid */}
        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsArticles.map((article, index) => (
              <article key={index} className="cyber-card hologram-card overflow-hidden hover:scale-105 transition-all duration-300">
                <div className="aspect-video bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center">
                  <div className="text-white text-4xl">📰</div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-3 text-sm text-gray-400">
                    <span className="bg-purple-600 text-white px-2 py-1 rounded text-xs">
                      {article.category}
                    </span>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {new Date(article.date).toLocaleDateString()}
                    </div>
                    <div className="flex items-center gap-1">
                      <User className="w-4 h-4" />
                      {article.author}
                    </div>
                  </div>
                  
                  <h2 className="text-xl font-bold text-white mb-3 line-clamp-2">
                    {article.title}
                  </h2>
                  
                  <p className="text-gray-300 mb-4 line-clamp-3">
                    {article.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-400">{article.readTime}</span>
                    <a
                      href="#"
                      className="text-cyan-400 hover:text-cyan-300 font-medium inline-flex items-center gap-1"
                    >
                      Read More
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="mb-16">
          <div className="cyber-card hologram-card p-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4 neon-text">
              Stay Updated
            </h2>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Subscribe to our newsletter and be the first to know about our latest 
              innovations, industry insights, and company updates.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-200">
                Subscribe
              </button>
            </div>
          </div>
        </section>

        {/* Press Kit */}
        <section className="text-center">
          <div className="cyber-card hologram-card p-8">
            <h2 className="text-3xl font-bold text-white mb-4 neon-text">
              Press Resources
            </h2>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Access our press kit, company logos, and media resources for journalists and media professionals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="cyber-button inline-flex items-center"
              >
                Download Press Kit
                <ExternalLink className="w-4 h-4 ml-2" />
              </a>
              <a
                href="/contact"
                className="cyber-button inline-flex items-center"
                style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
              >
                Contact Media Team
              </a>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default NewsPage;
