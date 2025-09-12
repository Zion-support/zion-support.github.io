import React from 'react';
import Link from 'next/link';
import { ArrowRight, Star, Clock, TrendingUp, Sparkles, Zap, Globe, Shield } from 'lucide-react';

interface RevolutionaryContentBannerProps {
  variant?: 'default' | 'featured' | 'trending';
  maxItems?: number;
}

const RevolutionaryContentBanner: React.FC<RevolutionaryContentBannerProps> = ({ 
  variant = 'default', 
  maxItems = 6 
}) => {
  const featuredContent = [
    {
      title: "AI 2025 Breakthrough Innovations",
      description: "Revolutionary AI technologies reshaping industries",
      href: "/blog/ai-2025-breakthrough-innovations",
      icon: "🚀",
      category: "AI Innovation",
      readTime: "25 min",
      isNew: true,
      trending: true
    },
    {
      title: "AI Sustainability & Green Tech 2025",
      description: "Building eco-friendly AI systems for the future",
      href: "/blog/ai-sustainability-green-tech-2025",
      icon: "🌱",
      category: "Sustainability",
      readTime: "20 min",
      isNew: true,
      trending: false
    },
    {
      title: "AI Robotics & Automation 2025",
      description: "The future of intelligent machines",
      href: "/blog/ai-robotics-automation-2025",
      icon: "🤖",
      category: "Robotics",
      readTime: "22 min",
      isNew: true,
      trending: true
    },
    {
      title: "$200M Manufacturing Success Story",
      description: "AI autonomous systems case study",
      href: "/case-studies/ai-autonomous-manufacturing-success-2025",
      icon: "💰",
      category: "Case Study",
      readTime: "15 min",
      isNew: true,
      trending: true
    },
    {
      title: "AI Workforce Transformation 2025",
      description: "Reskilling strategies for the AI era",
      href: "/blog/ai-workforce-transformation-2025",
      icon: "👥",
      category: "Workforce",
      readTime: "18 min",
      isNew: false,
      trending: true
    },
    {
      title: "AI Data Privacy & Compliance 2025",
      description: "Complete guide to AI privacy regulations",
      href: "/blog/ai-data-privacy-compliance-2025",
      icon: "🔒",
      category: "Privacy",
      readTime: "22 min",
      isNew: true,
      trending: false
    }
  ];

  const getVariantStyles = () => {
    switch (variant) {
      case 'featured':
        return {
          container: "bg-gradient-to-r from-purple-600 via-pink-600 to-red-600",
          badge: "bg-white bg-opacity-20",
          badgeText: "text-white",
          title: "text-white",
          description: "text-white opacity-90",
          card: "bg-white bg-opacity-10 backdrop-blur-sm border-white border-opacity-20",
          cardHover: "hover:bg-opacity-20",
          text: "text-white",
          accent: "text-pink-400"
        };
      case 'trending':
        return {
          container: "bg-gradient-to-r from-orange-600 via-red-600 to-pink-600",
          badge: "bg-white bg-opacity-20",
          badgeText: "text-white",
          title: "text-white",
          description: "text-white opacity-90",
          card: "bg-white bg-opacity-10 backdrop-blur-sm border-white border-opacity-20",
          cardHover: "hover:bg-opacity-20",
          text: "text-white",
          accent: "text-orange-400"
        };
      default:
        return {
          container: "bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600",
          badge: "bg-white bg-opacity-20",
          badgeText: "text-white",
          title: "text-white",
          description: "text-white opacity-90",
          card: "bg-white bg-opacity-10 backdrop-blur-sm border-white border-opacity-20",
          cardHover: "hover:bg-opacity-20",
          text: "text-white",
          accent: "text-cyan-400"
        };
    }
  };

  const styles = getVariantStyles();
  const displayContent = featuredContent.slice(0, maxItems);

  return (
    <section className={`py-20 ${styles.container} text-white relative overflow-hidden`}>
      <div className="absolute inset-0 bg-black opacity-10"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className={`inline-flex items-center ${styles.badge} rounded-full px-6 py-2 mb-6`}>
            <Sparkles className="w-4 h-4 mr-2" />
            <span className={`text-sm font-medium ${styles.badgeText}`}>
              {variant === 'featured' ? '✨ FEATURED CONTENT' : 
               variant === 'trending' ? '🔥 TRENDING NOW' : 
               '🚀 REVOLUTIONARY CONTENT DROP'}
            </span>
          </div>
          
          <h2 className={`text-4xl md:text-6xl font-bold mb-6 ${styles.title}`}>
            {variant === 'featured' ? '🎯 Featured AI & Tech Insights' :
             variant === 'trending' ? '🔥 Trending This Week' :
             '🚀 Revolutionary AI Content Just Dropped'}
          </h2>
          
          <p className={`text-xl md:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed ${styles.description}`}>
            {variant === 'featured' ? 
              'Discover our most popular and impactful content covering AI innovations, sustainability, robotics, and breakthrough case studies.' :
             variant === 'trending' ? 
              'Explore the most popular and trending AI content this week, from breakthrough innovations to real-world success stories.' :
              'Discover our latest breakthrough content: AI 2025 Breakthrough Innovations, Sustainability & Green Tech, Robotics & Automation, plus the $200M Manufacturing Success case study. Get expert insights on the technologies transforming 2025 and beyond.'}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link
              href="/content-showcase"
              className={`bg-white ${variant === 'featured' ? 'text-purple-600' : 
                         variant === 'trending' ? 'text-orange-600' : 'text-indigo-600'} px-10 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg shadow-lg`}
            >
              🎯 Explore All Content
            </Link>
            <Link
              href="/blog"
              className={`border-2 border-white ${styles.text} px-10 py-4 rounded-lg font-semibold hover:bg-white ${variant === 'featured' ? 'hover:text-purple-600' : 
                         variant === 'trending' ? 'hover:text-orange-600' : 'hover:text-indigo-600'} transition-colors text-lg`}
            >
              📚 Read Latest Articles
            </Link>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {displayContent.map((item, index) => (
            <Link key={index} href={item.href} className="group">
              <div className={`${styles.card} ${styles.cardHover} p-6 rounded-xl transition-all duration-300 border`}>
                <div className="flex items-start justify-between mb-4">
                  <div className="text-4xl group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <div className="flex items-center space-x-2">
                    {item.isNew && (
                      <span className="bg-green-500 text-white text-xs font-medium px-2 py-1 rounded-full">
                        NEW
                      </span>
                    )}
                    {item.trending && (
                      <span className="bg-orange-500 text-white text-xs font-medium px-2 py-1 rounded-full">
                        TRENDING
                      </span>
                    )}
                  </div>
                </div>
                
                <div className="mb-3">
                  <span className={`text-xs font-medium ${styles.accent} bg-white bg-opacity-20 px-2 py-1 rounded-full`}>
                    {item.category}
                  </span>
                </div>
                
                <h3 className={`text-lg font-semibold mb-2 group-hover:underline ${styles.text}`}>
                  {item.title}
                </h3>
                
                <p className={`text-sm mb-4 leading-relaxed ${styles.description}`}>
                  {item.description}
                </p>
                
                <div className="flex items-center justify-between text-xs opacity-75">
                  <div className="flex items-center">
                    <Clock className="w-3 h-3 mr-1" />
                    <span>{item.readTime} read</span>
                  </div>
                  <div className="flex items-center">
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 mb-12">
          <h3 className="text-2xl font-bold text-center mb-8">Content Impact Metrics</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold mb-2 flex items-center justify-center">
                <Star className="w-8 h-8 text-yellow-400 mr-2" />
                25K+
              </div>
              <div className="text-sm opacity-90">Monthly Readers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2 flex items-center justify-center">
                <TrendingUp className="w-8 h-8 text-green-400 mr-2" />
                95%
              </div>
              <div className="text-sm opacity-90">Reader Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2 flex items-center justify-center">
                <Zap className="w-8 h-8 text-blue-400 mr-2" />
                50+
              </div>
              <div className="text-sm opacity-90">Expert Articles</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2 flex items-center justify-center">
                <Globe className="w-8 h-8 text-purple-400 mr-2" />
                15+
              </div>
              <div className="text-sm opacity-90">Countries Reached</div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Stay Ahead with AI Insights</h3>
            <p className="text-lg opacity-90 mb-6">
              Get weekly updates on AI trends, implementation guides, and exclusive content 
              delivered straight to your inbox. Join 10,000+ AI professionals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/newsletter"
                className={`bg-white ${variant === 'featured' ? 'text-purple-600' : 
                           variant === 'trending' ? 'text-orange-600' : 'text-indigo-600'} px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors`}
              >
                📧 Subscribe to Newsletter
              </Link>
              <Link
                href="/resources"
                className={`border-2 border-white ${styles.text} px-8 py-3 rounded-lg font-semibold hover:bg-white ${variant === 'featured' ? 'hover:text-purple-600' : 
                           variant === 'trending' ? 'hover:text-orange-600' : 'hover:text-indigo-600'} transition-colors`}
              >
                📋 Download Free Resources
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RevolutionaryContentBanner;