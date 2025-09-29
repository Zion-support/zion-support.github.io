import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Sparkles, TrendingUp, Users, Zap } from 'lucide-react';

const NewContentPromotionBanner: React.FC = () => {
  const newContent = [
    {
      title: "Generative AI in Enterprise",
      description: "Real adoption strategies for 2025",
      category: "AI Strategy",
      readTime: "11 min",
      href: "/blog/generative-ai-enterprise-adoption-2025",
      featured: true
    },
    {
      title: "Cloud-Native Architecture",
      description: "Building scalable systems for the future",
      category: "Architecture", 
      readTime: "13 min",
      href: "/blog/cloud-native-architecture-2025",
      featured: true
    },
    {
      title: "AI Governance Framework",
      description: "Risk, ethics, and compliance for 2025",
      category: "AI Governance",
      readTime: "7 min",
      href: "/insights/ai-governance-framework-2025",
      featured: false
    },
    {
      title: "Microservices Anti-Patterns",
      description: "What to avoid in cloud-native implementations",
      category: "Architecture",
      readTime: "6 min", 
      href: "/insights/microservices-anti-patterns",
      featured: false
    }
  ];

  const stats = [
    { icon: BookOpen, value: "12+", label: "New Articles" },
    { icon: TrendingUp, value: "500+", label: "Readers This Week" },
    { icon: Users, value: "50+", label: "New Subscribers" },
    { icon: Zap, value: "99%", label: "Satisfaction Rate" }
  ];

  return (
    <div className="relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 opacity-90"></div>
      <div className="absolute inset-0 bg-black/20"></div>
      
      {/* Animated background elements */}
      <div className="absolute -top-20 -right-20 w-40 h-40 bg-white/10 rounded-full animate-pulse"></div>
      <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-white/10 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
      
      <div className="relative z-10 py-16 px-6">
        <div className="container mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/20 text-white text-sm font-medium mb-6 backdrop-blur-sm border border-white/30">
              <Sparkles className="w-4 h-4 mr-2 animate-pulse" />
              🚀 NEW CONTENT JUST DROPPED - JANUARY 2025
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Fresh Insights & Expert Guidance
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Stay ahead with our latest articles on Generative AI, Cloud-Native Architecture, 
              and cutting-edge technology strategies that are transforming businesses worldwide.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {stats.map((stat, index) => (
              <div key={index} className="text-center bg-white/10 rounded-xl p-6 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300">
                <stat.icon className="w-8 h-8 text-white mx-auto mb-3" />
                <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-white/80 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Featured Content Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {newContent.map((content, index) => (
              <div 
                key={index} 
                className={`bg-white/10 backdrop-blur-sm rounded-xl p-6 border transition-all duration-300 hover:scale-105 hover:shadow-xl ${
                  content.featured 
                    ? 'border-yellow-400/50 bg-gradient-to-br from-yellow-400/20 to-orange-400/20' 
                    : 'border-white/20 hover:border-white/40'
                }`}
              >
                {content.featured && (
                  <div className="inline-flex items-center px-2 py-1 rounded-full bg-yellow-400/20 text-yellow-300 text-xs font-medium mb-3 border border-yellow-400/30">
                    ⭐ FEATURED
                  </div>
                )}
                
                <div className="text-xs uppercase tracking-wider text-blue-300 mb-2 font-medium">
                  {content.category}
                </div>
                
                <h3 className="text-lg font-semibold text-white mb-2 line-clamp-2">
                  {content.title}
                </h3>
                
                <p className="text-white/80 text-sm mb-4 line-clamp-2">
                  {content.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="text-white/70 text-xs">{content.readTime} read</span>
                  <Link 
                    to={content.href}
                    className="text-white hover:text-yellow-300 transition-colors group"
                  >
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-white mb-4">
                Don't Miss Out on the Latest Tech Insights
              </h3>
              <p className="text-white/90 mb-6 max-w-2xl mx-auto">
                Join thousands of professionals who rely on Zion Tech Group for cutting-edge 
                technology insights, practical guides, and industry-leading expertise.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/blog"
                  className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl inline-flex items-center justify-center gap-2"
                >
                  <BookOpen className="w-5 h-5" />
                  Explore All Articles
                </Link>
                
                <Link 
                  to="/insights"
                  className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 inline-flex items-center justify-center gap-2"
                >
                  <TrendingUp className="w-5 h-5" />
                  View Insights
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewContentPromotionBanner;