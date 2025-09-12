import React from 'react';
import Link from 'next/link';
import { ArrowRight, Star, TrendingUp, Clock, Users, Zap } from 'lucide-react';

interface ContentItem {
  title: string;
  description: string;
  href: string;
  category: string;
  readTime: string;
  isNew?: boolean;
  isTrending?: boolean;
  icon: string;
  stats?: string;
  featured?: boolean;
}

const newContentItems: ContentItem[] = [
  {
    title: "AI Enterprise Readiness 2025: Complete Implementation Guide",
    description: "Master AI enterprise readiness with our comprehensive 2025 guide. Learn proven strategies, frameworks, and best practices for successful AI transformation at scale.",
    href: "/blog/ai-2025-enterprise-readiness-comprehensive-guide",
    category: "Enterprise AI",
    readTime: "25 min read",
    isNew: true,
    icon: "🏢",
    stats: "500+ enterprises using this",
    featured: true
  },
  {
    title: "AI Multimodal Revolution 2025: Comprehensive Market Analysis",
    description: "Explore the AI multimodal revolution transforming industries in 2025. Discover breakthrough technologies, market opportunities, and implementation strategies for multimodal AI systems.",
    href: "/blog/ai-2025-multimodal-revolution-comprehensive-analysis",
    category: "AI Revolution",
    readTime: "18 min read",
    isNew: true,
    icon: "🧠",
    stats: "$180B market value",
    featured: true
  },
  {
    title: "AI Transformation: Global Retail Giant Achieves $2.3B Revenue Growth",
    description: "Discover how a Fortune 500 retail giant achieved $2.3B revenue growth and 45% operational efficiency through comprehensive AI transformation. Real results, proven strategies.",
    href: "/case-studies/ai-transformation-retail-giant-success-2025",
    category: "Case Study",
    readTime: "15 min read",
    isNew: true,
    icon: "🏪",
    stats: "$2.3B revenue growth",
    featured: true
  }
];

const NewContentPromotionBanner: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-white text-sm font-medium mb-4">
            <Star className="w-4 h-4 mr-2" />
            New Content Available
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Discover Our Latest AI Insights & Success Stories
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Stay ahead of the curve with our newest content covering enterprise AI readiness, multimodal AI revolution, and real-world transformation success stories.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {newContentItems.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="text-4xl group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <div className="flex gap-2">
                  {item.isNew && (
                    <span className="bg-green-500 text-white text-xs font-medium px-2 py-1 rounded-full">
                      NEW
                    </span>
                  )}
                  {item.isTrending && (
                    <span className="bg-orange-500 text-white text-xs font-medium px-2 py-1 rounded-full">
                      TRENDING
                    </span>
                  )}
                </div>
              </div>

              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-100 transition-colors">
                {item.title}
              </h3>
              
              <p className="text-blue-100 mb-4 text-sm leading-relaxed">
                {item.description}
              </p>

              <div className="flex items-center justify-between text-sm text-blue-200">
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-1" />
                  {item.readTime}
                </div>
                <div className="flex items-center">
                  <TrendingUp className="w-4 h-4 mr-1" />
                  {item.stats}
                </div>
              </div>

              <div className="mt-4 flex items-center text-blue-200 group-hover:text-white transition-colors">
                <span className="text-sm font-medium">Read More</span>
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-white mb-2">500+</div>
              <div className="text-blue-200 text-sm">Enterprises Using Our Guides</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white mb-2">$2.3B</div>
              <div className="text-blue-200 text-sm">Revenue Growth Achieved</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white mb-2">$180B</div>
              <div className="text-blue-200 text-sm">Market Value Analyzed</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white mb-2">95%</div>
              <div className="text-blue-200 text-sm">Success Rate</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/blog"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors flex items-center justify-center"
            >
              <Users className="w-5 h-5 mr-2" />
              Explore All Content
            </Link>
            <Link
              href="/case-studies"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors flex items-center justify-center"
            >
              <Zap className="w-5 h-5 mr-2" />
              View Success Stories
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewContentPromotionBanner;