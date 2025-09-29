import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, Calendar, Clock, Eye, ArrowRight, TrendingUp } from 'lucide-react';
import { BlogPost, posts } from '../content/posts';
import { InsightArticle, latestInsights } from '../content/insights';

interface FeaturedContentShowcaseProps {
  title?: string;
  subtitle?: string;
  maxItems?: number;
  showInsights?: boolean;
  showBlogPosts?: boolean;
  className?: string;
}

export const FeaturedContentShowcase: React.FC<FeaturedContentShowcaseProps> = ({
  title = "Latest Insights & Trends",
  subtitle = "Stay ahead with our latest research, insights, and industry analysis",
  maxItems = 6,
  showInsights = true,
  showBlogPosts = true,
  className = ""
}) => {
  const [activeTab, setActiveTab] = useState<'all' | 'blog' | 'insights'>('all');

  type NormalizedItem = {
    type: 'blog' | 'insights';
    title: string;
    description: string;
    category: string;
    date: string;
    readTime: string;
    views?: string;
    href: string;
    tags: string[];
  };

  // Get featured blog posts
  const featuredBlogPosts = posts
    .filter(post => post.featured)
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
    .slice(0, 3);

  // Get latest insights
  const latestInsightsList = latestInsights
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 3);

  // Combine content for display (normalized shape)
  const allContent: NormalizedItem[] = [
    ...featuredBlogPosts.map(post => ({
      type: 'blog' as const,
      title: post.title,
      description: post.description,
      category: post.category,
      date: post.publishedAt,
      readTime: post.readTime ?? '5 min',
      views: undefined,
      href: `/blog/${post.slug}`,
      tags: []
    })),
    ...latestInsightsList.map(insight => ({
      type: 'insights' as const,
      title: insight.title,
      description: insight.summary,
      category: insight.category,
      date: insight.date,
      readTime: `${insight.readMinutes} min`,
      views: undefined,
      href: `/insights/${insight.id}`,
      tags: []
    })),
  ]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, maxItems);

  const filteredContent: NormalizedItem[] =
    activeTab === 'all'
      ? allContent
      : activeTab === 'blog'
        ? allContent.filter(item => item.type === 'blog')
        : allContent.filter(item => item.type === 'insights');

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      "Generative AI": "bg-purple-100 text-purple-800 border-purple-200",
      "Cloud Architecture": "bg-blue-100 text-blue-800 border-blue-200",
      "Quantum Computing": "bg-indigo-100 text-indigo-800 border-indigo-200",
      "Edge Computing": "bg-green-100 text-green-800 border-green-200",
      "Cybersecurity": "bg-red-100 text-red-800 border-red-200"
    };
    return colors[category] || "bg-gray-100 text-gray-800 border-gray-200";
  };

  return (
    <div className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-800 text-sm font-medium mb-6 border border-blue-200">
            <Star className="w-4 h-4 mr-2 text-yellow-500" />
            🔥 FEATURED CONTENT - TOP PICKS
          </div>
          
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            {title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {subtitle}
          </p>
        </div>

        {/* Featured Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Main Featured Article */}
          {allContent.length > 0 && (
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="md:flex">
                  <div className="md:w-1/2 p-8">
                    <div className="flex items-center gap-2 mb-4">
                      <div className={`px-3 py-1 rounded-full text-xs font-medium border ${getCategoryColor(allContent[0].category)}`}>
                        {allContent[0].category}
                      </div>
                      <div className="inline-flex items-center px-2 py-1 rounded-full bg-yellow-100 text-yellow-800 text-xs font-medium border border-yellow-200">
                        ⭐ EDITOR'S CHOICE
                      </div>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 leading-tight">
                      {allContent[0].title}
                    </h3>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {allContent[0].description}
                    </p>
                    
                    <div className="flex items-center gap-4 mb-6 text-sm text-gray-500">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {new Date(allContent[0].date).toLocaleDateString()}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {allContent[0].readTime}
                      </div>
                    </div>
                    
                    <Link 
                      to={allContent[0].href}
                      className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors group"
                    >
                      Read Full Article
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                  
                  <div className="md:w-1/2 bg-gradient-to-br from-blue-600 to-purple-600 p-8 flex items-center justify-center">
                    <div className="text-center text-white">
                      <TrendingUp className="w-16 h-16 mx-auto mb-4 opacity-80" />
                      <div className="text-3xl font-bold mb-2">Most Popular</div>
                      <div className="text-blue-200">This Week</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredContent.map((item, index) => (
            <div
              key={`${item.type}-${item.title}-${index}`}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
            >
              {/* Image / Placeholder */}
              <div className="aspect-video bg-gradient-to-br from-blue-500 to-purple-600 relative overflow-hidden">
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-white text-4xl font-bold opacity-80">
                    {item.type === 'blog' ? '📝' : '💡'}
                  </div>
                </div>
              </div>
              
              <h3 className="text-lg font-semibold text-gray-900 mb-3 line-clamp-2">
                {item.title}
              </h3>
              
              <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                {item.description}
              </p>
              
              <div className="flex items-center gap-3 mb-4 text-xs text-gray-500">
                <div className="flex items-center gap-1">
                  <Calendar className="w-3 h-3" />
                  {new Date(item.date).toLocaleDateString()}
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  {item.readTime}
                </div>
              </div>
              
              <Link 
                to={item.href}
                className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-700 font-medium text-sm group"
              >
                Read More
                <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Dive Deeper?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Explore our complete library of articles, insights, and case studies. 
              Get expert guidance on the technologies shaping tomorrow's businesses.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/blog"
                className="bg-blue-600 text-white hover:bg-blue-700 px-8 py-3 rounded-lg font-semibold transition-colors hover:scale-105 inline-flex items-center justify-center gap-2"
              >
                <TrendingUp className="w-5 h-5" />
                Explore All Articles
              </Link>
              
              <Link 
                to="/insights"
                className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors hover:scale-105 inline-flex items-center justify-center gap-2"
              >
                <Star className="w-5 h-5" />
                View Insights
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedContentShowcase;
