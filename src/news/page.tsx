import React from 'react';
import { Calendar, ArrowRight, Star, Users, TrendingUp, Award, Globe, Zap } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const NewsPage: React.FC = () => {
  const newsItems = [
    {
      id: 1,
      title: 'Zion Tech Group Launches Revolutionary AI-Powered Enterprise Solutions',
      date: '2024-01-15',
      category: 'Product Launch',
      summary: 'We are excited to announce the launch of our next-generation AI platform that transforms how enterprises approach automation and intelligence.',
      image: '🚀',
      featured: true
    },
    {
      id: 2,
      title: 'Partnership with Leading Cloud Providers Expands Global Reach',
      date: '2024-01-10',
      category: 'Partnership',
      summary: 'Strategic partnerships with AWS, Azure, and Google Cloud enable us to serve clients worldwide with enhanced scalability and reliability.',
      image: '🤝',
      featured: false
    },
    {
      id: 3,
      title: 'Zion Tech Group Recognized as Top AI Company by TechCrunch',
      date: '2024-01-05',
      category: 'Award',
      summary: 'We are honored to be named one of the top 10 AI companies of 2024 by TechCrunch for our innovative solutions and industry impact.',
      image: '🏆',
      featured: false
    },
    {
      id: 4,
      title: 'New Quantum Computing Research Division Established',
      date: '2024-01-01',
      category: 'Research',
      summary: 'Our new quantum computing division will focus on developing breakthrough algorithms for next-generation AI applications.',
      image: '⚛️',
      featured: false
    },
    {
      id: 5,
      title: 'Client Success: 300% ROI Achieved for Fortune 500 Company',
      date: '2023-12-28',
      category: 'Case Study',
      summary: 'Our AI automation solution helped a Fortune 500 client achieve 300% ROI within the first year of implementation.',
      image: '📈',
      featured: false
    },
    {
      id: 6,
      title: 'Zion Tech Group Expands Team with 50 New AI Experts',
      date: '2023-12-20',
      category: 'Company',
      summary: 'We are thrilled to welcome 50 new AI experts to our team, strengthening our capabilities in machine learning and automation.',
      image: '👥',
      featured: false
    }
  ];

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Product Launch': return <Zap className="w-4 h-4" />;
      case 'Partnership': return <Globe className="w-4 h-4" />;
      case 'Award': return <Award className="w-4 h-4" />;
      case 'Research': return <TrendingUp className="w-4 h-4" />;
      case 'Case Study': return <Users className="w-4 h-4" />;
      case 'Company': return <Star className="w-4 h-4" />;
      default: return <Star className="w-4 h-4" />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      <main className="relative z-10">
        {/* Hero Section */}
        <section className="py-20 px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              News & Updates
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Stay informed about the latest developments, partnerships, and innovations at Zion Tech Group
            </p>
          </div>
        </section>

        {/* News Grid */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {newsItems.map((item) => (
                <article
                  key={item.id}
                  className={`bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 hover:bg-slate-800/70 transition-all duration-300 ${
                    item.featured ? 'ring-2 ring-cyan-400' : ''
                  }`}
                >
                  {item.featured && (
                    <div className="flex items-center gap-2 mb-4">
                      <Star className="w-4 h-4 text-yellow-400" />
                      <span className="text-yellow-400 text-sm font-semibold">Featured</span>
                    </div>
                  )}
                  
                  <div className="text-4xl mb-4">{item.image}</div>
                  
                  <div className="flex items-center gap-2 mb-3">
                    {getCategoryIcon(item.category)}
                    <span className="text-cyan-400 text-sm font-medium">{item.category}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3 hover:text-cyan-400 transition-colors">
                    {item.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {item.summary}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-gray-400 text-sm">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(item.date).toLocaleDateString()}</span>
                    </div>
                    <button className="flex items-center gap-1 text-cyan-400 hover:text-white transition-colors">
                      <span className="text-sm">Read More</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-8">
              <h2 className="text-3xl font-bold text-white mb-4">
                Stay Updated
              </h2>
              <p className="text-gray-300 mb-6">
                Subscribe to our newsletter for the latest news, updates, and insights from Zion Tech Group.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg bg-slate-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                />
                <button className="px-6 py-3 bg-cyan-400 text-slate-900 font-semibold rounded-lg hover:bg-cyan-300 transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};
export default NewsPage;
