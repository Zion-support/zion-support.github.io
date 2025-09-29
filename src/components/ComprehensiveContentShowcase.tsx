import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  BookOpen, 
  TrendingUp, 
  Clock, 
  Star,
  Sparkles,
  Zap,
  Target,
  Users,
  Award,
  Calendar,
  Eye
} from 'lucide-react';
import { posts } from '../content/posts';
import { latestInsights } from '../content/insights';

interface ComprehensiveContentShowcaseProps {
  title?: string;
  subtitle?: string;
  maxItems?: number;
  showBlogPosts?: boolean;
  showInsights?: boolean;
  showFeatured?: boolean;
  className?: string;
}

const ComprehensiveContentShowcase: React.FC<ComprehensiveContentShowcaseProps> = ({
  title = "Latest Technology Insights & Expert Content",
  subtitle = "Stay ahead with our cutting-edge research, expert analysis, and actionable insights from the world of AI, cybersecurity, and emerging technologies",
  maxItems = 9,
  showBlogPosts = true,
  showInsights = true,
  showFeatured = true,
  className = "",
}) => {
  // Get featured posts
  const featuredPosts = posts.filter(post => post.featured).slice(0, 6);
  
  // Get latest insights
  const recentInsights = latestInsights.slice(0, 6);

  // Combine and sort by date
  const allContent = [
    ...featuredPosts.map(post => ({
      id: post.slug,
      title: post.title,
      description: post.description,
      category: post.category,
      date: post.publishedAt,
      type: 'blog' as const,
      readTime: post.readTime || '5 min read',
      featured: post.featured
    })),
    ...recentInsights.map(insight => ({
      id: insight.id,
      title: insight.title,
      description: insight.summary,
      category: insight.category,
      date: insight.date,
      type: 'insight' as const,
      readTime: `${insight.readMinutes} min read`,
      featured: false
    }))
  ].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()).slice(0, maxItems);

  const getCategoryIcon = (category: string) => {
    switch (category.toLowerCase()) {
      case 'ai & automation':
      case 'genai':
        return <Sparkles className="w-4 h-4" />;
      case 'platform engineering':
        return <Zap className="w-4 h-4" />;
      case 'data engineering':
      case 'data analytics':
        return <TrendingUp className="w-4 h-4" />;
      case 'security':
      case 'cybersecurity':
        return <Target className="w-4 h-4" />;
      case 'observability':
        return <Eye className="w-4 h-4" />;
      default:
        return <BookOpen className="w-4 h-4" />;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category.toLowerCase()) {
      case 'ai & automation':
      case 'genai':
        return 'text-purple-400 bg-purple-500/20 border-purple-400/30';
      case 'platform engineering':
        return 'text-blue-400 bg-blue-500/20 border-blue-400/30';
      case 'data engineering':
      case 'data analytics':
        return 'text-green-400 bg-green-500/20 border-green-400/30';
      case 'security':
      case 'cybersecurity':
        return 'text-red-400 bg-red-500/20 border-red-400/30';
      case 'observability':
        return 'text-orange-400 bg-orange-500/20 border-orange-400/30';
      default:
        return 'text-gray-400 bg-gray-500/20 border-gray-400/30';
    }
  };

  return (
    <section className={`py-20 relative overflow-hidden ${className}`}>
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full mix-blend-multiply filter blur-xl animate-float"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/10 rounded-full mix-blend-multiply filter blur-xl animate-float" style={{ animationDelay: "2s" }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-300 text-sm font-medium mb-6 animate-pulse border border-blue-400/30">
            <Sparkles className="w-4 h-4 mr-2 animate-spin" />
            Fresh Content & Expert Insights
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-slide-up">
            {title}
          </h2>
          
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed animate-fade-in">
            {subtitle}
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {allContent.map((item, index) => (
            <article 
              key={item.id} 
              className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:border-white/20"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Featured Badge */}
              {item.featured && (
                <div className="absolute -top-2 -right-2 bg-gradient-to-r from-yellow-400 to-orange-400 text-black px-2 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                  <Star className="w-3 h-3 fill-current" />
                  Featured
                </div>
              )}

              {/* Content Type Badge */}
              <div className="flex items-center justify-between mb-4">
                <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium border ${getCategoryColor(item.category)}`}>
                  {getCategoryIcon(item.category)}
                  {item.category}
                </div>
                <div className="flex items-center gap-1 text-xs text-gray-400">
                  <Clock className="w-3 h-3" />
                  {item.readTime}
                </div>
              </div>

              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors line-clamp-2">
                {item.title}
              </h3>

              <p className="text-gray-300 text-sm mb-4 line-clamp-3 leading-relaxed">
                {item.description}
              </p>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs text-gray-400">
                  <Calendar className="w-3 h-3" />
                  {new Date(item.date).toLocaleDateString('en-US', { 
                    month: 'short', 
                    day: 'numeric',
                    year: 'numeric'
                  })}
                </div>
                
                <Link 
                  to={item.type === 'blog' ? `/blog/${item.id}` : `/insights/${item.id}`}
                  className="inline-flex items-center gap-1 text-blue-400 hover:text-blue-300 font-medium text-sm transition-colors group-hover:translate-x-1"
                >
                  Read more
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Statistics Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div className="text-center group">
            <div className="text-3xl font-bold text-blue-400 mb-2 group-hover:scale-110 transition-transform">
              {posts.length}+
            </div>
            <div className="text-sm text-gray-300">Expert Articles</div>
          </div>
          <div className="text-center group">
            <div className="text-3xl font-bold text-purple-400 mb-2 group-hover:scale-110 transition-transform">
              {latestInsights.length}+
            </div>
            <div className="text-sm text-gray-300">Tech Insights</div>
          </div>
          <div className="text-center group">
            <div className="text-3xl font-bold text-green-400 mb-2 group-hover:scale-110 transition-transform">
              50K+
            </div>
            <div className="text-sm text-gray-300">Monthly Readers</div>
          </div>
          <div className="text-center group">
            <div className="text-3xl font-bold text-orange-400 mb-2 group-hover:scale-110 transition-transform">
              95%
            </div>
            <div className="text-sm text-gray-300">Reader Satisfaction</div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-400/30 rounded-2xl p-8 mb-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              Stay Ahead of the Technology Curve
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Get exclusive access to our latest insights, expert analysis, and actionable guides delivered to your inbox weekly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/blog"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl inline-flex items-center justify-center gap-2"
              >
                <BookOpen className="w-5 h-5" />
                Explore All Articles
              </Link>
              <Link
                to="/insights"
                className="border-2 border-blue-400 text-blue-300 hover:bg-blue-400 hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 inline-flex items-center justify-center gap-2"
              >
                <TrendingUp className="w-5 h-5" />
                View Insights
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComprehensiveContentShowcase;