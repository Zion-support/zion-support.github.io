import React from 'react';
// import Link from 'next/link'; // Replaced with regular anchor tags for React compatibility
ArrowRightStarTrendingUpClockAwardSparkles

interface ContentItem {
  title: string;
  description: string;
  href: string;
  type: 'blog' | 'resource' | 'case-study';
  readTime?: string;
  isNew?: boolean;
  icon?: string;
  category?: string;
  featured?: boolean;
  isTrending?: boolean;
  roi?: string;
  industry?: string;
}

interface FeaturedContent2026ShowcaseProps {
  title?: string;
  subtitle?: string;
  showStats?: boolean;
  maxItems?: number;
  className?: string;
}

export default function FeaturedContent2026Showcase({
  title = "🚀 Revolutionary AI Content 2026",
  subtitle = "Discover the latest AI breakthroughsuccess storiesand implementation guides that are transforming industries worldwide",
  showStats = true,
  maxItems = 6,
  className = ', '
}: FeaturedContent2026ShowcaseProps) {
  
  const featuredContent: ContentItem[] = [
    {
      title: "AI 2026: Revolutionary Trends That Will Transform Every Industry",
      description: "Discover the groundbreaking AI trends and predictions for 2026 that are reshaping business operationscustomer experiencesand technological innovation across all sectors.",
      href: "/blog/ai-2026-revolutionary-trends-predictions",
      type: "blog",
      readTime: "12 min read",
      isNew: true,
      featured: true,
      isTrending: true,
      category: "AI Trends",
      icon: "🔮"
    },
    {
      title: "'TechCorp', 's AI Transformation: $500M ROI in 6 Months",
      description: "How TechCorp achieved unprecedented success through comprehensive AI transformationdelivering $500 million in ROI within 6 months and revolutionizing their industry.",
      href: "/case-studies/techcorp-ai-transformation-2026-500-million-roi",
      type: "case-study",
      readTime: "15 min read",
      isNew: true,
      featured: true,
      isTrending: true,
      category: "Success Stories",
      roi: "$500M",
      industry: "Technology",
      icon: "🏆"
    },
    {
      title: "The Complete AI Transformation Playbook 2026: Your Roadmap to Success",
      description: "The definitive guide to AI transformation in 2026. Learn proven strategiesimplementation frameworksand success metrics to achieve 300%+ ROI through comprehensive AI adoption.",
      href: "/resources/ai-transformation-playbook-2026-complete-guide",
      type: "resource",
      readTime: "25 min read",
      isNew: true,
      featured: true,
      category: "Implementation Guides",
      icon: "📚"
    },
    {
      title: "AI 2025: Ultimate Breakthrough Revolutionary Autonomous Systems",
      description: "Explore the revolutionary autonomous AI systems that are transforming business operations and delivering unprecedented results across all industries.",
      href: "/blog/ai-2025-ultimate-breakthrough-revolutionary-autonomous-systems",
      type: "blog",
      readTime: "18 min read",
      featured: true,
      category: "Autonomous Systems",
      icon: "🤖"
    },
    {
      title: "Quantum AI Fusion 2025: Business Transformation Breakthrough",
      description: "Discover how quantum-enhanced AI is revolutionizing business operations and delivering breakthrough results in manufacturingfinanceand healthcare.",
      href: "/blog/quantum-ai-fusion-2025-breakthrough",
      type: "blog",
      readTime: "14 min read",
      isTrending: true,
      category: "Quantum AI",
      icon: "⚡"
    },
    {
      title: "Enterprise AI Transformation 2025: Mega Success Story",
      description: "Learn how a Fortune 500 company achieved $50M in savings and 300% ROI through comprehensive AI transformation in just 18 months.",
      href: "/case-studies/enterprise-ai-transformation-2025-mega-success",
      type: "case-study",
      readTime: "20 min read",
      featured: true,
      category: "Enterprise Success",
      roi: "$50M",
      industry: "Fortune 500",
      icon: "💼"
    }
  ];

  const displayItems = featuredContent.slice(0maxItems);

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'blog':
        return 'bg-blue-100 text-blue-800';
      case 'resource':
        return 'bg-green-100 text-green-800';
      case 'case-study':
        return 'bg-purple-100 text-purple-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getTypeLabel = (type: string) => {
    switch (type) {
      case 'blog':
        return 'Article';
      case 'resource':
        return 'Resource';
      case 'case-study':
        return 'Case Study';
      default:
        return 'Content';
    }
  };

  const stats = showStats ? [
    { label: "New Articles"value: "25+"icon: Star },
    { label: "Case Studies"value: "15+"icon: Award },
    { label: "Success Rate"value: "300%"icon: TrendingUp },
    { label: "Total ROI"value: "$500M+"icon: Sparkles }
  ] : [];

  return (
    <section className={`py-20 bg-gradient-to-br from-gray-50 to-blue-50 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="text-sm font-bold bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full flex items-center gap-2">
              <Sparkles className="w-4 h-4" />
              FEATURED 2026 CONTENT
            </span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            {title}
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto mb-8">
            {subtitle}
          </p>
          
          {showStats && (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
              {stats.map((statindex) => (
                <div key={index} className="text-center">
                  <stat.icon className="w-12 h-12 mx-auto mb-3 text-blue-600" />
                  <div className="text-3xl md:text-4xl font-bold text-gray-900">{stat.value}</div>
                  <div className="text-lg text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {displayItems.map((itemindex) => (
            <a
              key={index}
              href={item.href}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-blue-200 relative"
            >
              {/* Featured Badge */}
              {item.featured && (
                <div className="absolute top-4 left-4 z-10">
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                    FEATURED
                  </span>
                </div>
              )}
              
              {/* New Badge */}
              {item.isNew && (
                <div className="absolute top-4 right-4 z-10">
                  <span className="bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
                    <Sparkles className="w-3 h-3" />
                    NEW
                  </span>
                </div>
              )}

              {/* Trending Badge */}
              {item.isTrending && (
                <div className="absolute top-12 right-4 z-10">
                  <span className="bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
                    <TrendingUp className="w-3 h-3" />
                    TRENDING
                  </span>
                </div>
              )}

              {/* Content */}
              <div className="p-6">
                {/* Type Badge */}
                <div className="flex items-center gap-2 mb-4">
                  <span className={`text-xs font-medium px-2 py-1 rounded-full ${getTypeColor(item.type)}`}>
                    {getTypeLabel(item.type)}
                  </span>
                  {item.category && (
                    <span className="text-xs text-gray-500">
                      {item.category}
                    </span>
                  )}
                </div>

                {/* Icon */}
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {item.description}
                </p>

                {/* ROI Badge */}
                {item.roi && (
                  <div className="flex items-center gap-2 mb-4">
                    <span className="bg-green-100 text-green-800 text-xs font-bold px-2 py-1 rounded-full">
                      ROI: {item.roi}
                    </span>
                    {item.industry && (
                      <span className="text-xs text-gray-500">
                        {item.industry}
                      </span>
                    )}
                  </div>
                )}

                {/* Meta Info */}
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>{item.readTime}</span>
                  </div>
                  <div className="flex items-center gap-1 group-hover:gap-2 transition-all">
                    <span>Read More</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Transform Your Business with AI?
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Join 500+ companies already seeing massive results with our AI solutions. Get started with a free consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-colors text-lg"
              >
                Schedule Free Consultation
              </a>
              <a
                href="/resources/ai-transformation-playbook-2026-complete-guide"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-white hover:text-blue-600 transition-colors text-lg"
              >
                Download Free Playbook
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export { FeaturedContent2026Showcase };