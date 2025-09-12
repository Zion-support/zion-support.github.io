import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, X, Star, Clock, Download, BookOpen, Award, Zap } from 'lucide-react';

interface NewContentPromotionalBannerProps {
  className?: string;
}

const NewContentPromotionalBanner: React.FC<NewContentPromotionalBannerProps> = ({ className = '' }) => {
  const [isVisible, setIsVisible] = useState(true);

  const newContent = [
    {
      title: "AI 2025 Revolutionary Breakthroughs",
      description: "Discover the most revolutionary AI breakthroughs reshaping industries",
      href: "/blog/ai-2025-revolutionary-breakthroughs",
      type: "Blog Post",
      icon: "🚀",
      badge: "New",
      badgeColor: "bg-red-500",
      readTime: "15 min read"
    },
    {
      title: "Healthcare AI Diagnosis Revolution",
      description: "95% accuracy breakthrough saving $2.3M annually",
      href: "/case-studies/ai-healthcare-diagnosis-revolution-2025",
      type: "Case Study",
      icon: "🏥",
      badge: "Featured",
      badgeColor: "bg-green-500",
      readTime: "12 min read"
    },
    {
      title: "AI Implementation Playbook 2025",
      description: "200-page comprehensive guide with 50+ templates",
      href: "/resources/ai-2025-comprehensive-implementation-playbook",
      type: "Resource",
      icon: "📚",
      badge: "Popular",
      badgeColor: "bg-purple-500",
      readTime: "200 pages"
    }
  ];

  if (!isVisible) return null;

  return (
    <div className={`relative bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white ${className}`}>
      <div className="absolute inset-0 bg-black opacity-10"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center">
            <div className="flex items-center px-3 py-1 bg-white/20 rounded-full mr-4">
              <Zap className="w-4 h-4 mr-2" />
              <span className="text-sm font-semibold">New Content</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold">Latest AI Insights & Resources</h2>
          </div>
          <button
            onClick={() => setIsVisible(false)}
            className="p-2 hover:bg-white/10 rounded-full transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {newContent.map((content, index) => (
            <Link key={index} href={content.href} className="group">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 group-hover:scale-105">
                <div className="flex items-start justify-between mb-4">
                  <div className="text-3xl">{content.icon}</div>
                  <div className="flex items-center space-x-2">
                    <span className={`px-2 py-1 text-xs font-semibold text-white rounded-full ${content.badgeColor}`}>
                      {content.badge}
                    </span>
                    <span className="text-xs text-white/70">{content.readTime}</span>
                  </div>
                </div>
                <h3 className="text-lg font-semibold mb-2 group-hover:text-yellow-300 transition-colors">
                  {content.title}
                </h3>
                <p className="text-sm text-white/80 mb-4 leading-relaxed">
                  {content.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-white/60 uppercase tracking-wide">{content.type}</span>
                  <div className="flex items-center text-sm font-medium group-hover:text-yellow-300 transition-colors">
                    {content.type === 'Resource' ? 'Download' : 'Read More'}
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
        
        <div className="mt-8 text-center">
          <Link 
            href="/content-showcase" 
            className="inline-flex items-center px-6 py-3 bg-white/20 backdrop-blur-sm text-white font-semibold rounded-lg hover:bg-white/30 transition-colors"
          >
            <BookOpen className="w-5 h-5 mr-2" />
            View All Content
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NewContentPromotionalBanner;