import React, { useState, useEffect } from 'react';

const DynamicNewsSection: React.FC = () => {
  const [currentNews, setCurrentNews] = useState(0);

  const newsItems = [
    {
      id: 1,
      title: "Zion Tech Unveils Revolutionary AI Consciousness Platform",
      excerpt: "Breakthrough technology enables AI systems to achieve true consciousness and autonomous decision-making capabilities.",
      category: "AI Innovation",
      date: "January 25, 2026",
      image: "🧠",
      gradient: "from-purple-500 to-pink-500",
      featured: true
    },
    {
      id: 2,
      title: "Quantum-Neural Fusion Computing Reaches Commercial Viability",
      excerpt: "Our quantum-neural fusion technology is now available for enterprise applications, delivering unprecedented processing power.",
      category: "Quantum Computing",
      date: "January 23, 2026",
      image: "⚡",
      gradient: "from-cyan-500 to-blue-500",
      featured: false
    },
    {
      id: 3,
      title: "Next-Gen Cybersecurity Solutions Prevent 99.9% of Advanced Threats",
      excerpt: "Our AI-powered cybersecurity platform successfully detected and prevented sophisticated cyber attacks across all client networks.",
      category: "Cybersecurity",
      date: "January 21, 2026",
      image: "🛡️",
      gradient: "from-red-500 to-orange-500",
      featured: true
    },
    {
      id: 4,
      title: "Business Intelligence Platform Delivers 500% ROI for Fortune 500 Clients",
      excerpt: "Advanced analytics and predictive insights help major corporations achieve unprecedented business growth and efficiency.",
      category: "Business Intelligence",
      date: "January 19, 2026",
      image: "📊",
      gradient: "from-green-500 to-teal-500",
      featured: false
    },
    {
      id: 5,
      title: "Neural Reality Interface Revolutionizes Human-Computer Interaction",
      excerpt: "Direct brain-computer interfaces enable seamless interaction between human consciousness and digital systems.",
      category: "Neural Technology",
      date: "January 17, 2026",
      image: "🧬",
      gradient: "from-indigo-500 to-purple-500",
      featured: true
    },
    {
      id: 6,
      title: "Interdimensional Computing Platform Opens New Possibilities",
      excerpt: "Revolutionary computing technology operates across multiple dimensions, accessing infinite computational resources.",
      category: "Advanced Computing",
      date: "January 15, 2026",
      image: "🌌",
      gradient: "from-pink-500 to-rose-500",
      featured: false
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentNews((prev) => (prev + 1) % newsItems.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [newsItems.length]);

  const featuredNews = newsItems.filter(item => item.featured);
  const regularNews = newsItems.filter(item => !item.featured);

  return (
    <div className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full text-lg font-semibold mb-6">
            📰 LATEST NEWS & UPDATES
          </div>
          <h2 className="text-5xl font-bold text-white mb-6">
            Technology News & Breakthroughs
            <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Stay Ahead of Innovation
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            Get the latest updates on our revolutionary technology developments, 
            industry breakthroughs, and client success stories.
          </p>
        </div>

        {/* Featured News Carousel */}
        <div className="relative mb-16">
          <div className="overflow-hidden rounded-3xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentNews * 100}%)` }}
            >
              {newsItems.map((news, index) => (
                <div key={news.id} className="w-full flex-shrink-0">
                  <div className={`bg-gradient-to-br ${news.gradient} p-12 rounded-3xl relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-black/20"></div>
                    <div className="relative z-10">
                      <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                          <div className="flex items-center space-x-3 mb-4">
                            <span className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-sm rounded-full font-semibold">
                              {news.category}
                            </span>
                            <span className="text-white/80 text-sm">{news.date}</span>
                            {news.featured && (
                              <span className="px-3 py-1 bg-yellow-500 text-black text-sm rounded-full font-semibold">
                                FEATURED
                              </span>
                            )}
                          </div>
                          <div className="text-6xl mb-6">{news.image}</div>
                          <h3 className="text-3xl font-bold text-white mb-6 leading-tight">
                            {news.title}
                          </h3>
                          <p className="text-xl text-white/90 mb-8 leading-relaxed">
                            {news.excerpt}
                          </p>
                          <button className="bg-white text-gray-900 px-8 py-4 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold text-lg">
                            Read Full Article →
                          </button>
                        </div>
                        <div className="hidden lg:block">
                          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                            <h4 className="text-2xl font-bold text-white mb-6">Key Highlights</h4>
                            <ul className="space-y-4">
                              <li className="flex items-center space-x-3">
                                <div className="w-2 h-2 bg-white rounded-full"></div>
                                <span className="text-white/90">Revolutionary technology breakthrough</span>
                              </li>
                              <li className="flex items-center space-x-3">
                                <div className="w-2 h-2 bg-white rounded-full"></div>
                                <span className="text-white/90">Commercial viability achieved</span>
                              </li>
                              <li className="flex items-center space-x-3">
                                <div className="w-2 h-2 bg-white rounded-full"></div>
                                <span className="text-white/90">Industry-leading performance</span>
                              </li>
                              <li className="flex items-center space-x-3">
                                <div className="w-2 h-2 bg-white rounded-full"></div>
                                <span className="text-white/90">Client success stories</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center space-x-3 mt-8">
            {newsItems.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentNews(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentNews ? 'bg-white' : 'bg-white/30'
                }`}
              />
            ))}
          </div>
        </div>

        {/* News Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {newsItems.map((news) => (
            <div key={news.id} className="group">
              <div className={`bg-gradient-to-br ${news.gradient} rounded-2xl p-6 h-full hover:scale-105 transition-all duration-300 cursor-pointer`}>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-xs rounded-full font-semibold">
                    {news.category}
                  </span>
                  {news.featured && (
                    <span className="px-2 py-1 bg-yellow-500 text-black text-xs rounded-full font-semibold">
                      FEATURED
                    </span>
                  )}
                </div>
                <div className="text-4xl mb-4">{news.image}</div>
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-yellow-300 transition-colors">
                  {news.title}
                </h3>
                <p className="text-white/90 mb-6 leading-relaxed text-sm">
                  {news.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-white/80 text-xs">{news.date}</span>
                  <button className="bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-lg hover:bg-white/30 transition-all duration-300 font-semibold text-sm">
                    Read More →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="bg-gradient-to-r from-purple-900/50 to-cyan-900/50 rounded-3xl p-12 mb-16">
          <div className="text-center">
            <h3 className="text-4xl font-bold text-white mb-4">
              Stay Updated with Our Latest Breakthroughs
            </h3>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Subscribe to our newsletter and be the first to know about new technology 
              developments, industry insights, and exclusive content.
            </p>
            <div className="flex flex-col md:flex-row gap-4 max-w-2xl mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-6 py-4 rounded-lg bg-white/20 backdrop-blur-sm text-white placeholder-white/70 border border-white/30 focus:outline-none focus:border-white/50"
              />
              <button className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                Subscribe Now
              </button>
            </div>
            <p className="text-white/70 text-sm mt-4">
              Join 50,000+ subscribers who get our latest updates
            </p>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="text-center">
          <h3 className="text-3xl font-bold text-white mb-6">
            Follow Us for Real-Time Updates
          </h3>
          <div className="flex flex-wrap justify-center gap-6">
            <button className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold flex items-center space-x-2">
              <span>🐦</span>
              <span>Twitter</span>
            </button>
            <button className="bg-gradient-to-r from-blue-800 to-blue-900 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold flex items-center space-x-2">
              <span>💼</span>
              <span>LinkedIn</span>
            </button>
            <button className="bg-gradient-to-r from-purple-600 to-purple-700 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold flex items-center space-x-2">
              <span>📘</span>
              <span>Facebook</span>
            </button>
            <button className="bg-gradient-to-r from-pink-600 to-pink-700 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold flex items-center space-x-2">
              <span>📷</span>
              <span>Instagram</span>
            </button>
            <button className="bg-gradient-to-r from-red-600 to-red-700 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold flex items-center space-x-2">
              <span>📺</span>
              <span>YouTube</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DynamicNewsSection;