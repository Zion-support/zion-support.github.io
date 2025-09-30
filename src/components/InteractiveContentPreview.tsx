import React, { useState, useEffect } from 'react';
import { ArrowRight, TrendingUp, Clock, Eye, Heart, Share2, BookOpen, Zap } from 'lucide-react';

interface ContentPreviewProps {
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  date: string;
  slug: string;
  icon: string;
  trending?: boolean;
  featured?: boolean;
  views?: number;
  likes?: number;
  className?: string;
}

const InteractiveContentPreview: React.FC<ContentPreviewProps> = ({
  title,
  excerpt,
  category,
  readTime,
  date,
  slug,
  icon,
  trending = false,
  featured = false,
  views = 0,
  likes = 0,
  className = ''
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [currentViews, setCurrentViews] = useState(views);
  const [currentLikes, setCurrentLikes] = useState(likes);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    // Simulate view count increment on mount
    const timer = setTimeout(() => {
      setCurrentViews(prev => prev + Math.floor(Math.random() * 10) + 1);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleLike = () => {
    if (!isLiked) {
      setCurrentLikes(prev => prev + 1);
      setIsLiked(true);
      setIsAnimating(true);
      setTimeout(() => setIsAnimating(false), 600);
    }
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title,
          text: excerpt,
          url: `https://ziontechgroup.com${slug}`
        });
      } catch (err) {
        // Fallback to clipboard
        navigator.clipboard.writeText(`https://ziontechgroup.com${slug}`);
      }
    } else {
      navigator.clipboard.writeText(`https://ziontechgroup.com${slug}`);
    }
  };

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      'AI Trends': 'from-blue-500/20 to-purple-500/20 text-blue-400 border-blue-500/30',
      'Case Study': 'from-green-500/20 to-emerald-500/20 text-green-400 border-green-500/30',
      'Technical': 'from-purple-500/20 to-fuchsia-500/20 text-purple-400 border-purple-500/30',
      'Security': 'from-red-500/20 to-orange-500/20 text-red-400 border-red-500/30',
      'Implementation': 'from-orange-500/20 to-yellow-500/20 text-orange-400 border-orange-500/30',
      'Industry': 'from-indigo-500/20 to-blue-500/20 text-indigo-400 border-indigo-500/30'
    };
    return colors[category] || 'from-gray-500/20 to-gray-600/20 text-gray-400 border-gray-500/30';
  };

  return (
    <div 
      className={`group relative bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 hover:border-blue-500/50 transition-all duration-500 overflow-hidden hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20 p-8 cursor-pointer ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => window.location.href = slug}
    >
      {/* Card glow effect */}
      <div className={`absolute inset-0 bg-gradient-to-br from-blue-500/0 via-purple-500/0 to-blue-500/0 transition-all duration-500 ${
        isHovered ? 'from-blue-500/10 via-purple-500/10 to-blue-500/10' : ''
      }`}></div>
      
      <div className="relative">
        {/* Header with icon and badges */}
        <div className="flex items-start justify-between mb-6">
          <div className={`text-6xl transition-transform duration-300 ${
            isHovered ? 'scale-110' : ''
          }`}>
            {icon}
          </div>
          <div className="flex flex-col gap-2">
            {trending && (
              <div className="flex items-center gap-1 px-3 py-1.5 rounded-full bg-gradient-to-r from-orange-500 to-red-500 text-white text-xs font-bold shadow-lg animate-pulse">
                <TrendingUp className="w-3 h-3" />
                <span>TRENDING</span>
              </div>
            )}
            {featured && (
              <span className="px-3 py-1.5 rounded-full bg-blue-500/20 text-blue-400 text-xs font-semibold border border-blue-500/30">
                FEATURED
              </span>
            )}
          </div>
        </div>

        {/* Category Tag */}
        <div className="mb-4">
          <span className={`inline-block px-3 py-1 rounded-full bg-gradient-to-r border text-xs font-semibold ${getCategoryColor(category)}`}>
            {category}
          </span>
        </div>

        {/* Title */}
        <h3 className={`text-2xl font-bold mb-4 transition-colors duration-300 leading-tight ${
          isHovered ? 'text-blue-400' : 'text-white'
        }`}>
          {title}
        </h3>

        {/* Excerpt */}
        <p className="text-gray-400 mb-6 leading-relaxed text-sm">
          {excerpt}
        </p>

        {/* Meta Info */}
        <div className="flex items-center justify-between text-sm text-gray-500 mb-6 pb-6 border-b border-white/10">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-blue-400" />
              {readTime}
            </span>
            <span className="flex items-center gap-2">
              <Eye className="w-4 h-4 text-gray-400" />
              {currentViews.toLocaleString()}
            </span>
          </div>
          <span>{new Date(date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
        </div>

        {/* Interactive Actions */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleLike();
              }}
              className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-all duration-300 ${
                isLiked 
                  ? 'bg-red-500/20 text-red-400 border border-red-500/30' 
                  : 'bg-white/5 text-gray-400 hover:bg-red-500/20 hover:text-red-400 border border-white/10 hover:border-red-500/30'
              }`}
            >
              <Heart className={`w-4 h-4 transition-all duration-300 ${
                isAnimating ? 'scale-125 fill-current' : ''
              }`} />
              <span className="text-sm font-medium">{currentLikes}</span>
            </button>
            
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleShare();
              }}
              className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/5 text-gray-400 hover:bg-blue-500/20 hover:text-blue-400 border border-white/10 hover:border-blue-500/30 transition-all duration-300"
            >
              <Share2 className="w-4 h-4" />
              <span className="text-sm font-medium">Share</span>
            </button>
          </div>

          {/* CTA Button */}
          <div className="flex items-center justify-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-400 hover:to-purple-500 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-blue-500/50 transform hover:-translate-y-1">
            <BookOpen className="w-4 h-4" />
            <span>Read Article</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
          </div>
        </div>

        {/* Progress Bar (appears on hover) */}
        {isHovered && (
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-b-2xl animate-pulse"></div>
        )}
      </div>
    </div>
  );
};

export default InteractiveContentPreview;