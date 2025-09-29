import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, TrendingUp, Star, Clock, Users } from 'lucide-react';

interface NewContent2026BannerProps {
  variant?: 'hero' | 'premium' | 'info' | 'success';
  className?: string;
  showCount?: number;
  autoRotate?: boolean;
  rotationInterval?: number;
}

const NewContent2026Banner: React.FC<NewContent2026BannerProps> = ({
  variant = 'hero',
  className = '',
  showCount = 4,
  autoRotate = false,
  rotationInterval = 8000
}) => {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const newContentItems = [
    {
      id: 'ai-platform-architecture-2026',
      title: 'AI Platform Architecture 2026',
      description: 'Scalable Enterprise AI Infrastructure',
      category: 'AI Architecture',
      metrics: '99.9% Uptime • 10x Scalability',
      url: '/blog/ai-platform-architecture-2026',
      badge: 'BREAKTHROUGH',
      color: 'from-blue-500 to-purple-600'
    },
    {
      id: 'multimodal-ai-applications-2026',
      title: 'Multimodal AI Applications 2026',
      description: 'Text, Image, Audio & Video Intelligence',
      category: 'Multimodal AI',
      metrics: '90% Accuracy • 5x Speed',
      url: '/blog/ai-multimodal-applications-2026',
      badge: 'REVOLUTIONARY',
      color: 'from-purple-500 to-pink-600'
    },
    {
      id: 'ai-ethics-framework-2026',
      title: 'AI Ethics Framework 2026',
      description: 'Responsible AI Development & Deployment',
      category: 'AI Ethics',
      metrics: '100% Compliance • 95% Trust',
      url: '/blog/ai-ethics-framework-2026',
      badge: 'ESSENTIAL',
      color: 'from-green-500 to-teal-600'
    },
    {
      id: 'ai-performance-monitoring-2026',
      title: 'AI Performance Monitoring 2026',
      description: 'Real-Time System Observability',
      category: 'AI Operations',
      metrics: '99.9% Reliability • <30s Detection',
      url: '/blog/ai-performance-monitoring-2026',
      badge: 'ADVANCED',
      color: 'from-orange-500 to-red-600'
    },
    {
      id: 'enterprise-ai-platform-modernization',
      title: 'Enterprise AI Platform Modernization',
      description: 'Fortune 500 Success Story',
      category: 'Case Study',
      metrics: '95% Automation • $15M Savings',
      url: '/case-studies/enterprise-ai-platform-modernization',
      badge: 'SUCCESS',
      color: 'from-indigo-500 to-blue-600'
    },
    {
      id: 'edge-ai-deployment-guide-2026',
      title: 'Edge AI Deployment Guide 2026',
      description: 'Production-Ready Edge Intelligence',
      category: 'Edge AI',
      metrics: '<50ms Inference • 80% Cost Reduction',
      url: '/blog/edge-ai-deployment-guide-2026',
      badge: 'PRODUCTION',
      color: 'from-cyan-500 to-blue-600'
    }
  ];

  const displayedItems = newContentItems.slice(0, showCount);

  React.useEffect(() => {
    if (autoRotate && displayedItems.length > 1) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % displayedItems.length);
      }, rotationInterval);
      return () => clearInterval(interval);
    }
  }, [autoRotate, rotationInterval, displayedItems.length]);

  const getVariantStyles = () => {
    switch (variant) {
      case 'hero':
        return 'bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white';
      case 'premium':
        return 'bg-gradient-to-r from-purple-600 to-pink-600 text-white';
      case 'info':
        return 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white';
      case 'success':
        return 'bg-gradient-to-r from-green-500 to-emerald-500 text-white';
      default:
        return 'bg-gradient-to-r from-blue-600 to-purple-600 text-white';
    }
  };

  return (
    <div className={`relative overflow-hidden rounded-2xl p-8 md:p-12 ${getVariantStyles()} ${className}`}>
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-32 translate-x-32"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-24 -translate-x-24"></div>
      
      <div className="relative z-10">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/20 text-white text-sm font-medium mb-4 border border-white/30">
            <Sparkles className="w-4 h-4 mr-2 animate-pulse" />
            🚀 BREAKTHROUGH 2026 CONTENT
            <Sparkles className="w-4 h-4 ml-2 animate-pulse" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Revolutionary AI Content & Services
          </h2>
          <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto">
            Discover breakthrough insights on AI platform architecture, multimodal AI applications, 
            edge AI deployment, AI ethics frameworks, and real-world success stories from Fortune 500 companies.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {displayedItems.map((item, index) => (
            <div
              key={item.id}
              className={`bg-white/10 backdrop-blur-lg rounded-xl p-6 hover:bg-white/20 transition-all duration-300 hover:scale-105 cursor-pointer ${
                autoRotate && index === currentIndex ? 'ring-2 ring-white/50' : ''
              }`}
              onClick={() => window.open(item.url, '_blank')}
            >
              <div className="flex items-center justify-between mb-3">
                <span className={`bg-gradient-to-r ${item.color} text-white text-xs px-2 py-1 rounded-full font-medium`}>
                  {item.badge}
                </span>
                <span className="text-xs text-white/70 uppercase tracking-wider">{item.category}</span>
              </div>
              
              <h3 className="text-lg font-bold text-white mb-2 line-clamp-2">{item.title}</h3>
              <p className="text-white/80 text-sm mb-3 line-clamp-2">{item.description}</p>
              
              <div className="flex items-center text-white/70 text-xs">
                <TrendingUp className="w-3 h-3 mr-1" />
                <span>{item.metrics}</span>
              </div>
              
              <div className="mt-4 flex items-center text-white text-sm font-medium">
                <span>Read More</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </div>
            </div>
          ))}
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-white mb-1">12+</div>
            <div className="text-sm text-white/80">New Articles</div>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-white mb-1">6</div>
            <div className="text-sm text-white/80">New Services</div>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-white mb-1">6</div>
            <div className="text-sm text-white/80">Success Stories</div>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-white mb-1">500+</div>
            <div className="text-sm text-white/80">Companies Served</div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/blog"
            className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-lg font-semibold text-lg inline-flex items-center justify-center gap-2 transition-all duration-300 hover:scale-105"
          >
            <Star className="w-5 h-5" />
            Read Latest Articles
          </Link>
          <Link
            to="/services"
            className="bg-white/20 border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg inline-flex items-center justify-center gap-2 transition-all duration-300 hover:scale-105"
          >
            <Users className="w-5 h-5" />
            Explore New Services
          </Link>
          <Link
            to="/case-studies"
            className="bg-white/20 border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg inline-flex items-center justify-center gap-2 transition-all duration-300 hover:scale-105"
          >
            <TrendingUp className="w-5 h-5" />
            View Success Stories
          </Link>
        </div>

        {/* Tags */}
        <div className="mt-6 flex flex-wrap gap-2 justify-center">
          <span className="bg-white/20 text-white px-3 py-1 rounded-full text-xs font-medium border border-white/30">AI Architecture</span>
          <span className="bg-white/20 text-white px-3 py-1 rounded-full text-xs font-medium border border-white/30">Multimodal AI</span>
          <span className="bg-white/20 text-white px-3 py-1 rounded-full text-xs font-medium border border-white/30">Edge Computing</span>
          <span className="bg-white/20 text-white px-3 py-1 rounded-full text-xs font-medium border border-white/30">AI Ethics</span>
          <span className="bg-white/20 text-white px-3 py-1 rounded-full text-xs font-medium border border-white/30">Performance Monitoring</span>
          <span className="bg-white/20 text-white px-3 py-1 rounded-full text-xs font-medium border border-white/30">Success Stories</span>
        </div>
      </div>
    </div>
  );
};

export default NewContent2026Banner;