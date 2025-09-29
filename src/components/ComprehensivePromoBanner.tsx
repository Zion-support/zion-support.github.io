import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Zap, Shield, Globe, CheckCircle, Star, TrendingUp, Clock, Award } from 'lucide-react';
import { newArticles2025, homepageFeaturedArticles } from '../content/new-articles-2025';
import { newServices, featuredServices } from '../content/new-services';

interface ComprehensivePromoBannerProps {
  className?: string;
  variant?: 'hero' | 'compact' | 'full';
  showCount?: number;
}

export default function ComprehensivePromoBanner({
  className = '',
  variant = 'hero',
  showCount = 4
}: ComprehensivePromoBannerProps) {
  const [isVisible, setIsVisible] = useState(true);
  const [activeTab, setActiveTab] = useState<'content' | 'services'>('content');

  if (!isVisible) {
    return null;
  }

  const getVariantStyles = () => {
    switch (variant) {
      case 'compact':
        return {
          container: 'bg-gradient-to-r from-indigo-600 to-purple-600 border-indigo-400/30 p-4',
          text: 'text-white',
          accent: 'text-indigo-200',
          button: 'bg-white text-indigo-600 hover:bg-indigo-50',
          buttonSecondary: 'border-white text-white hover:bg-white hover:text-indigo-600'
        };
      case 'full':
        return {
          container: 'bg-gradient-to-r from-purple-600 via-blue-600 to-teal-600 border-purple-400/30 p-8',
          text: 'text-white',
          accent: 'text-purple-200',
          button: 'bg-white text-purple-600 hover:bg-purple-50',
          buttonSecondary: 'border-white text-white hover:bg-white hover:text-purple-600'
        };
      default: // hero
        return {
          container: 'bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 border-blue-400/30 p-6',
          text: 'text-white',
          accent: 'text-blue-200',
          button: 'bg-white text-blue-600 hover:bg-blue-50',
          buttonSecondary: 'border-white text-white hover:bg-white hover:text-blue-600'
        };
    }
  };

  const styles = getVariantStyles();

  const featuredArticles = homepageFeaturedArticles.slice(0, 2);
  const featuredServicesList = newServices.filter(s => s.featured).slice(0, 2);

  return (
    <div className={`${styles.container} ${className} border rounded-xl mb-8 relative overflow-hidden`}>
      {/* Background Animation */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white to-transparent transform -skew-x-12 animate-shimmer"></div>
      </div>
      
      <div className="relative z-10">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <Sparkles className="w-6 h-6 animate-pulse" />
            <span className={`text-lg font-bold ${styles.text}`}>
              🚀 2025 TRANSFORMATION SUITE
            </span>
            <TrendingUp className="w-5 h-5 animate-bounce" />
          </div>
          <button
            onClick={() => setIsVisible(false)}
            className={`${styles.accent} hover:${styles.text} transition-colors`}
            aria-label="Dismiss banner"
          >
            ✕
          </button>
        </div>

        {/* Main Content */}
        <div className="mb-6">
          <h3 className={`text-xl font-bold ${styles.text} mb-2`}>
            🎯 Revolutionary AI Solutions + Expert Insights = Business Transformation
          </h3>
          <p className={`${styles.accent} text-sm mb-4`}>
            Get the complete package: cutting-edge AI services, autonomous infrastructure, 
            quantum computing solutions, and expert guidance through our latest articles.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex gap-2 mb-6">
          <button
            onClick={() => setActiveTab('content')}
            className={`px-4 py-2 rounded-lg font-semibold transition-all duration-300 ${
              activeTab === 'content'
                ? 'bg-white text-blue-600'
                : 'bg-white/10 text-white hover:bg-white/20'
            }`}
          >
            📚 Latest Articles
          </button>
          <button
            onClick={() => setActiveTab('services')}
            className={`px-4 py-2 rounded-lg font-semibold transition-all duration-300 ${
              activeTab === 'services'
                ? 'bg-white text-blue-600'
                : 'bg-white/10 text-white hover:bg-white/20'
            }`}
          >
            🛠️ New Services
          </button>
        </div>

        {/* Content Tabs */}
        {activeTab === 'content' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            {featuredArticles.map((article) => (
              <div key={article.id} className="bg-white/10 backdrop-blur-sm rounded-lg p-4 hover:bg-white/15 transition-all duration-300">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="bg-white/20 px-2 py-1 rounded text-xs font-medium">
                        {article.category}
                      </span>
                      <span className="bg-yellow-400 text-black px-2 py-1 rounded-full text-xs font-medium flex items-center gap-1">
                        <Star className="w-3 h-3" />
                        NEW
                      </span>
                    </div>
                    <h4 className={`font-semibold ${styles.text} mb-2 line-clamp-2`}>
                      {article.title}
                    </h4>
                    <p className={`${styles.accent} text-sm mb-3 line-clamp-2`}>
                      {article.excerpt}
                    </p>
                    <div className="flex items-center gap-4 text-xs">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {article.readTime}
                      </span>
                      <span>{new Date(article.date).toLocaleDateString()}</span>
                    </div>
                  </div>
                </div>
                <Link
                  to={`/blog/${article.slug}`}
                  className={`${styles.button} px-4 py-2 rounded-lg font-semibold text-sm inline-flex items-center gap-2 transition-all duration-300 hover:scale-105 w-full justify-center`}
                >
                  Read Article
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'services' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            {featuredServicesList.map((service) => (
              <div key={service.id} className="bg-white/10 backdrop-blur-sm rounded-lg p-4 hover:bg-white/15 transition-all duration-300">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{service.icon}</span>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className={`font-semibold ${styles.text} text-sm`}>
                          {service.title}
                        </h4>
                        <span className="bg-white/20 px-2 py-1 rounded text-xs font-medium">
                          {service.category}
                        </span>
                      </div>
                      <p className={`${styles.accent} text-xs mb-2 line-clamp-2`}>
                        {service.description}
                      </p>
                      <div className="flex items-center gap-2">
                        <span className={`font-bold ${styles.text} text-sm`}>
                          {service.pricing.starting}
                        </span>
                        {service.pricing.popular && (
                          <span className="bg-green-400 text-black px-2 py-1 rounded text-xs font-medium">
                            POPULAR
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                <Link
                  to={`/services/${service.id}`}
                  className={`${styles.button} px-4 py-2 rounded-lg font-semibold text-sm inline-flex items-center gap-2 transition-all duration-300 hover:scale-105 w-full justify-center`}
                >
                  Explore Service
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center mb-4">
          <Link
            to="/services"
            className={`${styles.button} px-6 py-3 rounded-lg font-semibold inline-flex items-center gap-2 transition-all duration-300 hover:scale-105`}
          >
            <Zap className="w-4 h-4" />
            Explore All Services
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            to="/blog"
            className={`${styles.button} px-6 py-3 rounded-lg font-semibold inline-flex items-center gap-2 transition-all duration-300 hover:scale-105`}
          >
            <Award className="w-4 h-4" />
            Read All Articles
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            to="/contact"
            className={`${styles.buttonSecondary} border px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105`}
          >
            Get Free Consultation
          </Link>
        </div>

        {/* Special Offer */}
        <div className="bg-white/10 rounded-lg p-4 border border-white/20">
          <div className="text-center">
            <p className={`${styles.text} font-bold text-lg mb-2`}>
              🔥 EXCLUSIVE 2025 TRANSFORMATION PACKAGE
            </p>
            <p className={`${styles.accent} text-sm mb-3`}>
              Get 50% OFF AI Autonomous Operations + FREE AI Strategy Consultation + 
              Complete Article Library Access
            </p>
            <div className="flex flex-col sm:flex-row gap-2 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-6 py-3 rounded-lg font-bold text-sm inline-flex items-center gap-2 transition-all duration-300 hover:scale-105"
              >
                <Star className="w-4 h-4" />
                Claim Your Package
                <ArrowRight className="w-4 h-4" />
              </Link>
              <span className={`${styles.accent} text-xs flex items-center justify-center`}>
                Valid until March 31, 2025
              </span>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div>
            <div className={`text-2xl font-bold ${styles.text}`}>500+</div>
            <div className={`${styles.accent} text-xs`}>Projects Delivered</div>
          </div>
          <div>
            <div className={`text-2xl font-bold ${styles.text}`}>99.9%</div>
            <div className={`${styles.accent} text-xs`}>Success Rate</div>
          </div>
          <div>
            <div className={`text-2xl font-bold ${styles.text}`}>24/7</div>
            <div className={`${styles.accent} text-xs`}>Expert Support</div>
          </div>
          <div>
            <div className={`text-2xl font-bold ${styles.text}`}>$2M+</div>
            <div className={`${styles.accent} text-xs`}>Cost Savings</div>
          </div>
        </div>
      </div>
    </div>
  );
}