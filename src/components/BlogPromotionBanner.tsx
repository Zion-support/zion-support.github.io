import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, TrendingUp, Star, Clock, Users, Award, Sparkles } from 'lucide-react';

interface BlogPromotionBannerProps {
  className?: string;
}

const featuredBlogPosts = [
  {
    id: 1,
    title: "AI Workflow Automation ROI Calculator",
    description: "Interactive tool to calculate your potential savings",
    category: "AI & Automation",
    readTime: "Interactive",
    views: "2.3k",
    rating: 4.9,
    badge: "Featured Tool",
    link: "/blog/ai-workflow-automation-roi-calculator",
    color: "green"
  },
  {
    id: 2,
    title: "Micro SAAS Platform Comparison 2025",
    description: "Ultimate guide to choosing the right platform",
    category: "Technology",
    readTime: "12 min read",
    views: "1.8k",
    rating: 4.8,
    badge: "New Release",
    link: "/blog/micro-saas-platform-comparison-2025",
    color: "blue"
  },
  {
    id: 3,
    title: "AI Virtual Assistant Implementation Checklist",
    description: "25 critical steps for successful deployment",
    category: "AI & Automation",
    readTime: "8 min read",
    views: "3.1k",
    rating: 4.9,
    badge: "Popular",
    link: "/blog/ai-virtual-assistant-implementation-checklist",
    color: "purple"
  }
];

export const BlogPromotionBanner: React.FC<BlogPromotionBannerProps> = ({
  className = ""
}) => {
  const getColorClasses = (color: string) => {
    const colorMap = {
      green: 'from-green-500 to-emerald-600',
      blue: 'from-blue-500 to-cyan-600',
      purple: 'from-purple-500 to-pink-600'
    };
    return colorMap[color as keyof typeof colorMap] || 'from-gray-500 to-gray-600';
  };

  return (
    <div className={`bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 rounded-2xl p-8 ${className}`}>
      <div className="text-center mb-8">
        <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-300 text-sm font-medium mb-4 border border-blue-500/30">
          <Sparkles className="w-4 h-4 mr-2 animate-pulse" />
          Latest & Most Popular Content
        </div>
        <h2 className="text-3xl font-bold text-white mb-4">
          Don't Miss These Trending Articles
        </h2>
        <p className="text-gray-300 text-lg max-w-2xl mx-auto">
          Our most-read articles this week, featuring interactive tools, comprehensive guides, and actionable insights.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mb-8">
        {featuredBlogPosts.map((post) => {
          const colorGradient = getColorClasses(post.color);
          
          return (
            <article
              key={post.id}
              className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105 group"
            >
              <div className="flex items-center justify-between mb-4">
                <span className={`px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${colorGradient} text-white`}>
                  {post.badge}
                </span>
                <div className="flex items-center gap-1 text-yellow-400">
                  <Star className="w-4 h-4 fill-current" />
                  <span className="text-sm font-medium">{post.rating}</span>
                </div>
              </div>

              <h3 className="text-lg font-bold text-white mb-3 group-hover:text-blue-300 transition-colors">
                {post.title}
              </h3>
              <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                {post.description}
              </p>

              <div className="flex items-center justify-between text-xs text-gray-400 mb-4">
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1">
                    <Users className="w-3 h-3" />
                    {post.views}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {post.readTime}
                  </div>
                </div>
                <span className="text-xs bg-gray-700/50 px-2 py-1 rounded-full">
                  {post.category}
                </span>
              </div>

              <Link
                to={post.link}
                className={`w-full bg-gradient-to-r ${colorGradient} text-white px-4 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 group/btn`}
              >
                {post.badge === 'Featured Tool' ? 'Try Tool' : 'Read Article'}
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </Link>
            </article>
          );
        })}
      </div>

      <div className="text-center">
        <div className="flex items-center justify-center gap-3 mb-4">
          <Award className="w-6 h-6 text-yellow-400" />
          <span className="text-lg font-semibold text-white">Join 10,000+ Weekly Readers</span>
        </div>
        <p className="text-gray-300 mb-6">
          Get our best content delivered to your inbox every week. No spam, just valuable insights.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-4 py-3 bg-white/10 backdrop-blur-lg border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2">
            Subscribe
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogPromotionBanner;