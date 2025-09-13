import React from 'react';
import Link from 'next/link';
import { ArrowRight, Sparkles, TrendingUp, Clock, Star, Users, Zap, Brain } from 'lucide-react';

const LatestContent2025PromotionBanner = () => {
  const featuredContent = [
    {
      title: "AI Consciousness Breakthrough 2025",
      description: "Revolutionary advances in artificial consciousness and self-aware AI systems",
      readTime: "8 min read",
      views: "12.5K",
      rating: 4.9,
      category: "AI Research",
      isNew: true
    },
    {
      title: "Quantum Neural Networks: The Future",
      description: "How quantum computing is revolutionizing neural network architectures",
      readTime: "12 min read",
      views: "8.7K",
      rating: 4.8,
      category: "Quantum Computing",
      isNew: true
    },
    {
      title: "Enterprise Automation Success Stories",
      description: "Real-world case studies of companies achieving 300% efficiency gains",
      readTime: "15 min read",
      views: "25.3K",
      rating: 4.9,
      category: "Case Studies",
      isNew: false
    }
  ];

  const stats = [
    { icon: Users, label: "Active Readers", value: "50K+" },
    { icon: TrendingUp, label: "Content Views", value: "2.5M+" },
    { icon: Star, label: "Average Rating", value: "4.8/5" },
    { icon: Clock, label: "New Content", value: "Daily" }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white text-sm font-medium mb-8">
            <Sparkles className="w-5 h-5 mr-2" />
            Latest Content 2025 - Fresh Daily
          </div>
          
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Discover the
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"> Latest</span>
            <br />
            AI Breakthroughs
          </h2>
          
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Stay ahead of the curve with our daily content updates featuring the most cutting-edge AI research, 
            breakthrough technologies, and real-world success stories from industry leaders.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-gray-300 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Featured Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {featuredContent.map((content, index) => (
            <div key={index} className="group relative bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-blue-400/50 transition-all duration-300 hover:transform hover:scale-105">
              {content.isNew && (
                <div className="absolute -top-3 -right-3 px-4 py-1 bg-gradient-to-r from-green-500 to-blue-500 text-white text-xs font-bold rounded-full">
                  NEW
                </div>
              )}
              
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 bg-white/20 text-white text-xs font-medium rounded-full">
                  {content.category}
                </span>
                <div className="flex items-center text-yellow-400 text-sm">
                  <Star className="w-4 h-4 mr-1 fill-current" />
                  {content.rating}
                </div>
              </div>

              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-300 transition-colors">
                {content.title}
              </h3>

              <p className="text-gray-300 mb-6 leading-relaxed">
                {content.description}
              </p>

              <div className="flex items-center justify-between text-sm text-gray-400 mb-6">
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-1" />
                  {content.readTime}
                </div>
                <div className="flex items-center">
                  <Users className="w-4 h-4 mr-1" />
                  {content.views}
                </div>
              </div>

              <Link 
                href={`/content/${content.title.toLowerCase().replace(/\s+/g, '-')}`}
                className="inline-flex items-center text-blue-400 hover:text-blue-300 font-medium group-hover:translate-x-2 transition-all duration-300"
              >
                Read Now
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-center">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-4xl font-bold text-white mb-6">
              Never Miss a Breakthrough
            </h3>
            <p className="text-xl text-blue-100 mb-8">
              Join 50,000+ professionals who get our latest AI insights delivered daily
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link 
                href="/newsletter"
                className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-bold rounded-xl hover:bg-gray-100 transition-colors duration-300"
              >
                <Zap className="w-5 h-5 mr-2" />
                Subscribe to Newsletter
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link 
                href="/content-library"
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-bold rounded-xl hover:bg-white hover:text-blue-600 transition-all duration-300"
              >
                <Brain className="w-5 h-5 mr-2" />
                Browse All Content
              </Link>
            </div>

            <div className="flex items-center justify-center space-x-8 text-blue-100 text-sm">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
                Updated Daily
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-blue-400 rounded-full mr-2"></div>
                Expert Curated
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-purple-400 rounded-full mr-2"></div>
                Industry Leading
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestContent2025PromotionBanner;