import React from 'react';
import Link from 'next/link';

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
}

const featuredContent: ContentItem[] = [
  {
    title: "AI Enterprise Integration Success: 2025 Complete Guide",
    description: "Master AI enterprise integration with proven strategies, real-world case studies, and step-by-step implementation frameworks for 2025 success.",
    href: "/blog/ai-2025-enterprise-integration-success",
    category: "Enterprise AI",
    readTime: "25 min read",
    isNew: true,
    icon: "🏢",
    stats: "300% ROI potential"
  },
  {
    title: "AI Multimodal Revolution 2025: The Future of Human-Computer Interaction",
    description: "Explore the groundbreaking multimodal AI revolution transforming how humans interact with technology through text, voice, images, and video in 2025.",
    href: "/blog/ai-2025-multimodal-revolution",
    category: "AI Innovation",
    readTime: "18 min read",
    isNew: true,
    icon: "🧠",
    stats: "Revolutionary technology"
  },
  {
    title: "AI Manufacturing Transformation: $75M Cost Savings Success Story",
    description: "Discover how a global manufacturing company achieved $75M in annual savings and 85% efficiency gains through comprehensive AI transformation.",
    href: "/case-studies/ai-manufacturing-transformation-2025",
    category: "Case Study",
    readTime: "22 min read",
    isNew: true,
    icon: "🏭",
    stats: "$75M savings achieved"
  },
  {
    title: "AI Business Automation 2025: Complete Implementation Guide",
    description: "Transform your business operations with AI automation. Learn proven strategies to boost productivity by 40% and reduce costs by 60% in 2025.",
    href: "/blog/ai-business-automation-2025",
    category: "AI & Automation",
    readTime: "12 min read",
    isNew: true,
    icon: "🤖",
    stats: "40% productivity boost"
  }
];

const trendingContent: ContentItem[] = [
  {
    title: "AI Multimodal Revolution 2025: The Future of Human-Computer Interaction",
    description: "Explore the groundbreaking multimodal AI revolution transforming how humans interact with technology through text, voice, images, and video in 2025.",
    href: "/blog/ai-2025-multimodal-revolution",
    category: "AI Innovation",
    readTime: "18 min read",
    isTrending: true,
    icon: "🧠",
    stats: "Revolutionary technology"
  },
  {
    title: "AI Enterprise Integration Success: 2025 Complete Guide",
    description: "Master AI enterprise integration with proven strategies, real-world case studies, and step-by-step implementation frameworks for 2025 success.",
    href: "/blog/ai-2025-enterprise-integration-success",
    category: "Enterprise AI",
    readTime: "25 min read",
    isTrending: true,
    icon: "🏢",
    stats: "300% ROI potential"
  },
  {
    title: "AI Manufacturing Transformation: $75M Cost Savings Success Story",
    description: "Discover how a global manufacturing company achieved $75M in annual savings and 85% efficiency gains through comprehensive AI transformation.",
    href: "/case-studies/ai-manufacturing-transformation-2025",
    category: "Case Study",
    readTime: "22 min read",
    isTrending: true,
    icon: "🏭",
    stats: "$75M savings achieved"
  }
];

const latestContent: ContentItem[] = [
  {
    title: "AI Productivity Automation 2025: Complete Implementation Guide",
    description: "Transform your business operations with AI automation. Learn proven strategies to boost productivity by 40% in 2025.",
    href: "/blog/ai-productivity-automation-2025",
    category: "Productivity",
    readTime: "12 min read",
    isNew: true,
    icon: "🚀",
    stats: "40% productivity boost"
  },
  {
    title: "Startup Pricing Strategy 2025: Validate Willingness to Pay",
    description: "Master startup pricing with data-driven strategies. Learn to validate willingness to pay and scale with confidence.",
    href: "/blog/startup-pricing-strategy-2025",
    category: "Startup Strategy",
    readTime: "15 min read",
    isNew: true,
    icon: "💡",
    stats: "Data-driven pricing"
  },
  {
    title: "AI Healthcare Diagnosis Success: 95% Accuracy",
    description: "Discover how a leading healthcare provider achieved 95% accuracy in medical diagnosis using AI automation.",
    href: "/case-studies/ai-healthcare-diagnosis-success-2025",
    category: "Healthcare AI",
    readTime: "8 min read",
    isNew: true,
    icon: "🏥",
    stats: "95% accuracy achieved"
  }
];

interface ContentCardProps {
  item: ContentItem;
  variant?: 'default' | 'featured' | 'compact';
}

const ContentCard: React.FC<ContentCardProps> = ({ item, variant = 'default' }) => {
  const baseClasses = "group relative overflow-hidden rounded-xl transition-all duration-300 hover:shadow-xl";
  
  const variantClasses = {
    default: "bg-white border border-gray-200 hover:border-blue-300",
    featured: "bg-gradient-to-br from-blue-50 to-purple-50 border-2 border-blue-200 hover:border-blue-400",
    compact: "bg-white border border-gray-200 hover:border-gray-300"
  };

  return (
    <Link href={item.href} className={`${baseClasses} ${variantClasses[variant]}`}>
      <div className="p-6">
        {/* Header with icon and badges */}
        <div className="flex items-start justify-between mb-4">
          <div className="text-4xl group-hover:scale-110 transition-transform duration-300">
            {item.icon}
          </div>
          <div className="flex gap-2">
            {item.isNew && (
              <span className="bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded-full">
                NEW
              </span>
            )}
            {item.isTrending && (
              <span className="bg-orange-100 text-orange-800 text-xs font-medium px-2 py-1 rounded-full">
                TRENDING
              </span>
            )}
          </div>
        </div>

        {/* Category and stats */}
        <div className="flex items-center gap-3 mb-3">
          <span className="bg-blue-100 text-blue-800 text-xs font-medium px-3 py-1 rounded-full">
            {item.category}
          </span>
          {item.stats && (
            <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
              {item.stats}
            </span>
          )}
        </div>

        {/* Title */}
        <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
          {item.title}
        </h3>

        {/* Description */}
        <p className="text-gray-600 text-sm mb-4 line-clamp-3 leading-relaxed">
          {item.description}
        </p>

        {/* Footer */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs text-gray-500">
            <span>{item.readTime}</span>
            <span>•</span>
            <span>Jan 28, 2025</span>
          </div>
          <span className="text-blue-600 font-medium group-hover:underline text-sm">
            {item.category === 'Case Study' ? 'Read Case Study →' : 
             item.category === 'Master Guide' ? 'Download Guide →' : 'Read Article →'}
          </span>
        </div>
      </div>
    </Link>
  );
};

interface EnhancedContentShowcaseProps {
  variant?: 'default' | 'featured' | 'trending' | 'latest';
  showTitle?: boolean;
  maxItems?: number;
}

const EnhancedContentShowcase: React.FC<EnhancedContentShowcaseProps> = ({ 
  variant = 'default', 
  showTitle = true,
  maxItems = 4 
}) => {
  const getContent = () => {
    switch (variant) {
      case 'featured':
        return featuredContent.slice(0, maxItems);
      case 'trending':
        return trendingContent.slice(0, maxItems);
      case 'latest':
        return latestContent.slice(0, maxItems);
      default:
        return [...featuredContent, ...trendingContent, ...latestContent].slice(0, maxItems);
    }
  };

  const getTitle = () => {
    switch (variant) {
      case 'featured':
        return 'Featured Content';
      case 'trending':
        return 'Trending This Week';
      case 'latest':
        return 'Latest Articles';
      default:
        return 'Expert Insights & Resources';
    }
  };

  const getSubtitle = () => {
    switch (variant) {
      case 'featured':
        return 'Hand-picked content showcasing the best of our AI and business insights';
      case 'trending':
        return 'Most popular content this week based on reader engagement';
      case 'latest':
        return 'Fresh content published this week with expert insights';
      default:
        return 'Discover our latest articles, case studies, and resources covering AI implementation, startup strategies, and digital transformation';
    }
  };

  const content = getContent();

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {showTitle && (
          <div className="text-center mb-12">
            <div className="inline-flex items-center bg-blue-100 text-blue-800 rounded-full px-4 py-2 mb-6">
              <span className="text-sm font-medium">🔥 {variant.toUpperCase()} CONTENT</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {getTitle()}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              {getSubtitle()}
            </p>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {content.map((item, index) => (
            <ContentCard 
              key={`${item.href}-${index}`} 
              item={item} 
              variant={index === 0 && variant === 'featured' ? 'featured' : 'default'}
            />
          ))}
        </div>

        <div className="text-center">
          <Link 
            href="/blog" 
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-lg"
          >
            View All Content
            <span>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default EnhancedContentShowcase;
export { featuredContent, trendingContent, latestContent };