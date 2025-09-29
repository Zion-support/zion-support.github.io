import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, Clock, Star, TrendingUp, Sparkles, Award, BookOpen, Users, Shield, Zap } from 'lucide-react';
import { newContent2025, featuredNewContent, trendingNewContent } from '../content/new-content-2025';

interface NewContentShowcaseProps {
  className?: string;
  variant?: 'hero' | 'section' | 'compact';
  showMetrics?: boolean;
}

const NewContentShowcase: React.FC<NewContentShowcaseProps> = ({ 
  className = '', 
  variant = 'section',
  showMetrics = true 
}) => {
  const [activeTab, setActiveTab] = useState<'all' | 'featured' | 'trending'>('featured');

  const getContentByTab = () => {
    switch (activeTab) {
      case 'featured':
        return featuredNewContent;
      case 'trending':
        return trendingNewContent;
      default:
        return newContent2025.slice(0, 6);
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'blog':
        return <BookOpen className="w-4 h-4" />;
      case 'service':
        return <Zap className="w-4 h-4" />;
      case 'case-study':
        return <Users className="w-4 h-4" />;
      case 'whitepaper':
        return <Award className="w-4 h-4" />;
      case 'webinar':
        return <Calendar className="w-4 h-4" />;
      default:
        return <BookOpen className="w-4 h-4" />;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'blog':
        return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
      case 'service':
        return 'bg-purple-500/20 text-purple-400 border-purple-500/30';
      case 'case-study':
        return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'whitepaper':
        return 'bg-orange-500/20 text-orange-400 border-orange-500/30';
      case 'webinar':
        return 'bg-pink-500/20 text-pink-400 border-pink-500/30';
      default:
        return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    }
  };

  if (variant === 'hero') {
    return (
      <section className={`py-20 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 relative overflow-hidden ${className}`}>
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-white text-sm font-medium mb-8 border border-blue-400/30">
              <Sparkles className="w-5 h-5 mr-2 animate-pulse" />
              🚀 FRESH CONTENT ALERT - January 2025
              <Sparkles className="w-5 h-5 ml-2 animate-pulse" />
            </div>
            <h2 className="text-5xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Revolutionary New Content
              </span>
            </h2>
            <p className="text-xl text-indigo-100 max-w-4xl mx-auto mb-8">
              Discover cutting-edge insights on AI autonomous infrastructure, quantum machine learning, 
              zero-trust security, and enterprise AI governance. Fresh perspectives from industry experts.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredNewContent.slice(0, 6).map((item) => (
              <div key={item.id} className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 hover:scale-105 border border-white/20">
                <div className="flex items-center justify-between mb-4">
                  <div className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border ${getTypeColor(item.type)}`}>
                    {getTypeIcon(item.type)}
                    <span className="ml-1 capitalize">{item.type}</span>
                  </div>
                  {item.newBadge && (
                    <span className="bg-green-500 text-black text-xs px-2 py-1 rounded-full font-bold animate-pulse">
                      NEW
                    </span>
                  )}
                </div>
                <h3 className="text-xl font-bold text-white mb-3 line-clamp-2">{item.title}</h3>
                <p className="text-indigo-100 mb-4 text-sm line-clamp-3">{item.excerpt}</p>
                <div className="flex items-center justify-between text-sm text-indigo-200 mb-4">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    <span>{new Date(item.publishedDate).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    <span>{item.readTime}</span>
                  </div>
                </div>
                <Link 
                  to={item.url}
                  className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-lg font-semibold inline-flex items-center gap-2 hover:shadow-lg transition-all duration-300"
                >
                  {item.cta.primary}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link 
              to="/blog" 
              className="bg-white text-indigo-600 hover:bg-indigo-50 px-8 py-4 rounded-lg font-semibold text-lg inline-flex items-center gap-2 transition-all duration-300 hover:scale-105"
            >
              Explore All New Content
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    );
  }

  if (variant === 'compact') {
    return (
      <div className={`bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200/50 rounded-xl p-6 ${className}`}>
        <div className="flex items-center gap-3 mb-4">
          <Sparkles className="w-5 h-5 text-blue-500 animate-pulse" />
          <span className="text-lg font-bold text-blue-700">📚 NEW CONTENT HIGHLIGHTS</span>
          <Sparkles className="w-5 h-5 text-blue-500 animate-pulse" />
        </div>
        <p className="text-gray-700 font-semibold mb-4">
          🚀 Just Published: AI Autonomous Infrastructure, Quantum ML, Zero-Trust Security, and Edge AI Manufacturing Case Study
        </p>
        <div className="grid md:grid-cols-2 gap-4 mb-4">
          {featuredNewContent.slice(0, 4).map((item) => (
            <div key={item.id} className="bg-white rounded-lg p-4 border border-gray-200 hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between mb-2">
                <div className={`inline-flex items-center px-2 py-1 rounded text-xs font-medium border ${getTypeColor(item.type)}`}>
                  {getTypeIcon(item.type)}
                  <span className="ml-1 capitalize">{item.type}</span>
                </div>
                {item.newBadge && (
                  <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded font-medium">
                    NEW
                  </span>
                )}
              </div>
              <h4 className="font-semibold text-gray-900 mb-2 line-clamp-2">{item.title}</h4>
              <p className="text-gray-600 text-sm mb-3 line-clamp-2">{item.excerpt}</p>
              <Link 
                to={item.url}
                className="text-blue-600 hover:text-blue-800 font-medium text-sm inline-flex items-center gap-1"
              >
                {item.cta.primary}
                <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          ))}
        </div>
        <div className="text-center">
          <Link 
            to="/blog" 
            className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold inline-flex items-center gap-2 hover:bg-blue-700 transition-colors"
          >
            View All New Content
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    );
  }

  return (
    <section className={`py-20 bg-white ${className}`}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 text-blue-700 text-sm font-medium mb-8 border border-blue-200">
            <Sparkles className="w-4 h-4 mr-2" />
            Fresh Content - January 2025
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Revolutionary New Content & Insights
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover cutting-edge articles, case studies, and whitepapers on AI, quantum computing, 
            cybersecurity, and enterprise technology solutions.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-gray-100 rounded-lg p-1 inline-flex">
            {[
              { key: 'featured', label: 'Featured', count: featuredNewContent.length },
              { key: 'trending', label: 'Trending', count: trendingNewContent.length },
              { key: 'all', label: 'All New', count: newContent2025.length }
            ].map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key as any)}
                className={`px-6 py-2 rounded-md font-medium transition-all duration-300 ${
                  activeTab === tab.key
                    ? 'bg-white text-blue-600 shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {tab.label} ({tab.count})
              </button>
            ))}
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {getContentByTab().map((item) => (
            <article key={item.id} className="bg-white rounded-2xl shadow-sm border border-gray-200 hover:shadow-lg transition-all duration-300 hover:scale-105 overflow-hidden">
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border ${getTypeColor(item.type)}`}>
                    {getTypeIcon(item.type)}
                    <span className="ml-1 capitalize">{item.type}</span>
                  </div>
                  <div className="flex gap-1">
                    {item.newBadge && (
                      <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded font-bold">
                        NEW
                      </span>
                    )}
                    {item.trending && (
                      <span className="bg-orange-100 text-orange-700 text-xs px-2 py-1 rounded font-bold flex items-center gap-1">
                        <TrendingUp className="w-3 h-3" />
                        TRENDING
                      </span>
                    )}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">{item.title}</h3>
                <p className="text-gray-600 mb-4 line-clamp-3">{item.excerpt}</p>
                
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    <span>{new Date(item.publishedDate).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    <span>{item.readTime}</span>
                  </div>
                </div>

                {showMetrics && item.metrics && (
                  <div className="mb-4">
                    <div className="grid grid-cols-3 gap-2 text-center">
                      {item.metrics.slice(0, 3).map((metric, index) => (
                        <div key={index} className="bg-gray-50 rounded p-2">
                          <div className="text-lg font-bold text-blue-600">{metric.value}</div>
                          <div className="text-xs text-gray-600">{metric.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <div className="flex gap-2">
                  <Link 
                    to={item.url}
                    className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold text-center hover:bg-blue-700 transition-colors"
                  >
                    {item.cta.primary}
                  </Link>
                  {item.cta.secondary && (
                    <Link 
                      to={item.url}
                      className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-colors"
                    >
                      {item.cta.secondary}
                    </Link>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Stay Updated with Latest Insights</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Get early access to our latest articles, case studies, and whitepapers. 
              Join 10,000+ professionals staying ahead of the curve.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/blog" 
                className="bg-white text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-lg font-semibold inline-flex items-center gap-2 transition-colors"
              >
                <BookOpen className="w-5 h-5" />
                Read All Articles
              </Link>
              <Link 
                to="/newsletter" 
                className="border border-white text-white hover:bg-white hover:text-blue-600 px-6 py-3 rounded-lg font-semibold inline-flex items-center gap-2 transition-colors"
              >
                <Sparkles className="w-5 h-5" />
                Subscribe to Updates
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewContentShowcase;