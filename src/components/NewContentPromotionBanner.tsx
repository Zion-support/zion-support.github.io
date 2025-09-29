import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, TrendingUp, BookOpen, X, Zap } from 'lucide-react';

interface NewContentPromotionBannerProps {
  variant?: 'info' | 'success' | 'warning' | 'error';
  title: string;
  description: string;
  ctaText: string;
  ctaLink: string;
  dismissible?: boolean;
  showFeaturedContent?: boolean;
  className?: string;
}

const NewContentPromotionBanner: React.FC<NewContentPromotionBannerProps> = ({
  variant = 'info',
  title,
  description,
  ctaText,
  ctaLink,
  dismissible = true,
  showFeaturedContent = true,
  className = '',
}) => {
  const [isDismissed, setIsDismissed] = useState(false);

  if (isDismissed) return null;

  const variantStyles = {
    info: 'bg-gradient-to-r from-blue-500/20 to-purple-500/20 border-blue-400/30 text-blue-100',
    success: 'bg-gradient-to-r from-green-500/20 to-emerald-500/20 border-green-400/30 text-green-100',
    warning: 'bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border-yellow-400/30 text-yellow-100',
    error: 'bg-gradient-to-r from-red-500/20 to-pink-500/20 border-red-400/30 text-red-100',
  };

  const featuredContent = [
    {
      title: "Quantum Computing's Business Impact",
      category: "Quantum Computing",
      readTime: "12 min read",
      link: "/blog/quantum-computing-business-impact-2025",
      icon: <TrendingUp className="w-4 h-4" />,
      featured: true
    },
    {
      title: "Edge AI Implementation Guide",
      category: "Edge AI",
      readTime: "10 min read",
      link: "/blog/edge-ai-implementation-guide",
      icon: <Zap className="w-4 h-4" />,
      featured: true
    },
    {
      title: "Zero Trust Security Implementation",
      category: "Cybersecurity",
      readTime: "9 min read",
      link: "/blog/zero-trust-security-implementation",
      icon: <BookOpen className="w-4 h-4" />,
      featured: true
    }
  ];

  return (
    <div className={`relative overflow-hidden border rounded-xl p-6 mb-8 animate-fade-in ${variantStyles[variant]} ${className}`}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/5 to-transparent"></div>
      </div>

      <div className="relative z-10">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-current animate-pulse" />
              <span className="text-sm font-semibold uppercase tracking-wider">NEW CONTENT</span>
            </div>
            <div className="bg-current/20 px-3 py-1 rounded-full text-xs font-medium">
              JUST PUBLISHED
            </div>
          </div>
          
          {dismissible && (
            <button
              onClick={() => setIsDismissed(true)}
              className="p-1 hover:bg-current/20 rounded-full transition-colors"
              aria-label="Dismiss banner"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Main Content */}
        <div className="mb-6">
          <h3 className="text-xl font-bold mb-2">{title}</h3>
          <p className="text-sm opacity-90 leading-relaxed">{description}</p>
        </div>

        {/* Featured Content Grid */}
        {showFeaturedContent && (
          <div className="mb-6">
            <h4 className="text-sm font-semibold mb-3 flex items-center gap-2">
              <BookOpen className="w-4 h-4" />
              Featured Articles
            </h4>
            <div className="grid gap-3 md:grid-cols-3">
              {featuredContent.map((item, index) => (
                <Link
                  key={index}
                  to={item.link}
                  className="bg-current/10 hover:bg-current/20 rounded-lg p-4 transition-all duration-300 hover:scale-105 group"
                >
                  <div className="flex items-start gap-3">
                    <div className="bg-current/20 p-2 rounded-lg group-hover:bg-current/30 transition-colors">
                      {item.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-xs uppercase tracking-wider opacity-70 mb-1">
                        {item.category}
                      </div>
                      <h5 className="font-semibold text-sm mb-1 line-clamp-2 group-hover:text-current/80 transition-colors">
                        {item.title}
                      </h5>
                      <div className="text-xs opacity-70">{item.readTime}</div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* CTA */}
        <div className="flex items-center justify-between">
          <div className="text-sm opacity-80">
            <span className="font-medium">10+ new articles</span> covering AI, quantum computing, and cybersecurity
          </div>
          <Link
            to={ctaLink}
            className="bg-current/20 hover:bg-current/30 text-current font-semibold px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105 inline-flex items-center gap-2 group"
          >
            {ctaText}
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Animated Elements */}
        <div className="absolute top-4 right-4 w-2 h-2 bg-current/30 rounded-full animate-ping"></div>
        <div className="absolute bottom-4 left-4 w-1 h-1 bg-current/20 rounded-full animate-pulse"></div>
      </div>
    </div>
  );
};

export default NewContentPromotionBanner;