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
<<<<<<< HEAD
    title: "AI Enterprise Automation Success Stories 2025: Real-World Transformations",
    description: "Discover how Fortune 500 companies achieved 300% productivity gains and $50M+ cost savings through AI automation. Real case studies, implementation strategies, and ROI metrics.",
    href: "/blog/ai-2025-enterprise-automation-success",
    title: "AI Enterprise Automation Success Stories 2025: 90% Efficiency Gains",
    description: "Discover how Fortune 500 companies achieved 90% efficiency gains through AI automation. Real case studies, implementation strategies, and ROI metrics.",
    href: "/blog/ai-2025-enterprise-automation-success",
    category: "AI & Automation",
    readTime: "15 min read",
    isNew: true,
    icon: "🏢",
    stats: "90% efficiency gains"
  },
  {
    title: "AI 2025 Revolutionary Breakthroughs: 15 Game-Changing Technologies",
    description: "Discover the 15 most revolutionary AI breakthroughs of 2025 that are reshaping industries. From quantum AI to autonomous systems, explore the future of technology.",
    href: "/blog/ai-2025-revolutionary-breakthroughs",
    category: "AI Innovation",
    readTime: "18 min read",
    isNew: true,
    icon: "🚀",
    stats: "15 breakthrough technologies"
  },
  {
    title: "AI Retail Transformation Success: $2.5B Revenue Increase Case Study",
    description: "How a global retail giant achieved $2.5B revenue increase through AI transformation. Complete implementation strategy, results, and lessons learned.",
    href: "/case-studies/ai-2025-retail-transformation-success",
    category: "Case Study",
    readTime: "20 min read",
    isNew: true,
    icon: "🛍️",
    stats: "$2.5B revenue increase"
    title: "AI Enterprise Readiness 2025: Complete Implementation Guide",
    description: "Master AI enterprise readiness with our comprehensive 2025 guide. Learn proven strategies, frameworks, and best practices for successful AI transformation at scale.",
    href: "/blog/ai-2025-enterprise-readiness-comprehensive-guide",
    category: "Enterprise AI",
    readTime: "25 min read",
    isNew: true,
    icon: "🏢",
    stats: "500+ enterprises using this"
  },
  {
    title: "AI Multimodal Revolution 2025: Comprehensive Market Analysis",
    description: "Explore the AI multimodal revolution transforming industries in 2025. Discover breakthrough technologies, market opportunities, and implementation strategies for multimodal AI systems.",
    href: "/blog/ai-2025-multimodal-revolution-comprehensive-analysis",
    category: "AI Revolution",
    readTime: "18 min read",
    isNew: true,
    icon: "🧠",
    stats: "$180B market value"
  },
  {
    title: "AI Transformation: Global Retail Giant Achieves $2.3B Revenue Growth",
    description: "Discover how a Fortune 500 retail giant achieved $2.3B revenue growth and 45% operational efficiency through comprehensive AI transformation. Real results, proven strategies.",
    href: "/case-studies/ai-transformation-retail-giant-success-2025",
    category: "Case Study",
    readTime: "15 min read",
    isNew: true,
    icon: "🏪",
    stats: "$2.3B revenue growth"
  },
  {
    title: "AI Business Automation 2025: Complete Implementation Guide",
    description: "Transform your business operations with AI automation. Learn proven strategies to boost productivity by 40% and reduce costs by 60% in 2025.",
    href: "/blog/ai-business-automation-2025",
    category: "AI & Automation",
    readTime: "15 min read",
    isNew: true,
    icon: "🏢",
    stats: "300% productivity gain"
  },
  {
    title: "AI 2025 Revolutionary Breakthroughs: The Technologies Reshaping Our World",
    description: "Explore the groundbreaking AI technologies that will define 2025. From quantum AI to autonomous systems, discover the innovations transforming industries and creating unprecedented opportunities.",
    href: "/blog/ai-2025-revolutionary-breakthroughs",
    category: "AI Innovation",
    readTime: "18 min read",
    isNew: true,
    icon: "🧠",
    stats: "Revolutionary breakthroughs"
  },
  {
    title: "AI Retail Transformation Success: $200M Revenue Boost Case Study 2025",
    description: "Discover how a global retail giant achieved unprecedented success through comprehensive AI transformation, resulting in $200M revenue increase and 150% customer satisfaction improvement.",
    href: "/case-studies/ai-retail-transformation-success-2025",
    category: "Case Study",
    readTime: "20 min read",
    isNew: true,
    icon: "🛍️",
    stats: "$200M revenue boost"
  },
  {
    title: "AI Implementation Master Guide 2025: Complete 200-Page Playbook",
    description: "Master AI implementation with our comprehensive 200-page guide. Step-by-step framework, checklists, templates, and proven strategies for successful AI transformation in any organization.",
    href: "/resources/ai-implementation-master-guide-2025",
=======
    title: "AI Enterprise Transformation Success: $2B Revenue Growth Case Study",
    description: "Discover how a Fortune 500 company achieved $2B revenue growth through comprehensive AI transformation. Learn proven strategies, implementation roadmap, and key success metrics.",
    href: "/blog/ai-2025-enterprise-transformation-success",
    category: "Case Study",
    readTime: "25 min read",
    isNew: true,
    icon: "🏢",
    stats: "$2B revenue growth"
  },
  {
    title: "AI Startup Funding Revolution 2025: $100B Investment Boom",
    description: "Discover the AI startup funding revolution sweeping 2025. Learn how to secure funding, understand investor priorities, and capitalize on the $100B AI investment boom.",
    href: "/blog/ai-2025-startup-funding-revolution",
    category: "Startup Strategy",
    readTime: "18 min read",
    isNew: true,
    icon: "💰",
    stats: "$100B investment boom"
  },
  {
    title: "AI Cybersecurity Transformation: 99.9% Threat Detection Success",
    description: "Discover how a Fortune 500 company achieved 99.9% threat detection accuracy and $200M in security cost savings through AI-powered cybersecurity transformation.",
    href: "/case-studies/ai-cybersecurity-transformation-2025",
    category: "Cybersecurity",
    readTime: "22 min read",
    isNew: true,
    icon: "🛡️",
    stats: "99.9% detection rate"
  },
  {
    title: "AI 2025 Comprehensive Implementation Playbook: Complete Guide",
    description: "Master AI implementation with our comprehensive 200-page playbook. Step-by-step framework, checklists, templates, and proven strategies for successful AI transformation in 2025.",
    href: "/resources/ai-2025-comprehensive-implementation-playbook",
>>>>>>> cursor/create-and-deploy-new-content-46f8
    category: "Master Guide",
    readTime: "200 pages",
    isNew: true,
    icon: "📚",
<<<<<<< HEAD
    stats: "10,000+ downloads"
    icon: "🤖",
    stats: "40% productivity boost"
=======
    stats: "200+ pages guide"
>>>>>>> cursor/create-and-deploy-new-content-46f8
  }
];

const trendingContent: ContentItem[] = [
  {
<<<<<<< HEAD
    title: "AI 2025 Revolutionary Breakthroughs: The Technologies Reshaping Our World",
    description: "Explore the groundbreaking AI technologies that will define 2025. From quantum AI to autonomous systems, discover the innovations transforming industries.",
    title: "AI 2025 Revolutionary Breakthroughs: 15 Game-Changing Technologies",
    description: "Discover the 15 most revolutionary AI breakthroughs of 2025 that are reshaping industries. From quantum AI to autonomous systems, explore the future of technology.",
    href: "/blog/ai-2025-revolutionary-breakthroughs",
    category: "AI Innovation",
    title: "AI Multimodal Revolution 2025: Comprehensive Market Analysis",
    description: "Explore the AI multimodal revolution transforming industries in 2025. Discover breakthrough technologies, market opportunities, and implementation strategies for multimodal AI systems.",
    href: "/blog/ai-2025-multimodal-revolution-comprehensive-analysis",
    category: "AI Revolution",
    readTime: "18 min read",
    isTrending: true,
    icon: "🧠",
    stats: "Trending this week"
  },
  {
    title: "AI Enterprise Automation Success Stories 2025: Real-World Transformations",
    description: "Discover how Fortune 500 companies achieved 300% productivity gains and $50M+ cost savings through AI automation with real case studies.",
    icon: "🚀",
    stats: "15 breakthrough technologies"
  },
  {
    title: "AI Enterprise Automation Success Stories 2025: 90% Efficiency Gains",
    description: "Discover how Fortune 500 companies achieved 90% efficiency gains through AI automation. Real case studies, implementation strategies, and ROI metrics.",
    href: "/blog/ai-2025-enterprise-automation-success",
    category: "AI & Automation",
    readTime: "15 min read",
    isTrending: true,
    icon: "🏢",
    stats: "300% productivity gain"
  },
  {
    title: "AI Retail Transformation Success: $200M Revenue Boost Case Study 2025",
    description: "Discover how a global retail giant achieved unprecedented success through comprehensive AI transformation with $200M revenue increase.",
    href: "/case-studies/ai-retail-transformation-success-2025",
    stats: "90% efficiency gains"
  },
  {
    title: "AI Retail Transformation Success: $2.5B Revenue Increase Case Study",
    description: "How a global retail giant achieved $2.5B revenue increase through AI transformation. Complete implementation strategy, results, and lessons learned.",
    href: "/case-studies/ai-2025-retail-transformation-success",
    category: "Case Study",
    readTime: "20 min read",
    isTrending: true,
    icon: "🛍️",
    stats: "$200M revenue boost"
    stats: "$2.5B revenue increase"
    title: "AI Enterprise Readiness 2025: Complete Implementation Guide",
    description: "Master AI enterprise readiness with our comprehensive 2025 guide. Learn proven strategies, frameworks, and best practices for successful AI transformation at scale.",
    href: "/blog/ai-2025-enterprise-readiness-comprehensive-guide",
    category: "Enterprise AI",
    readTime: "25 min read",
    isTrending: true,
    icon: "🏢",
    stats: "500+ enterprises using this"
  },
  {
    title: "AI Transformation: Global Retail Giant Achieves $2.3B Revenue Growth",
    description: "Discover how a Fortune 500 retail giant achieved $2.3B revenue growth and 45% operational efficiency through comprehensive AI transformation. Real results, proven strategies.",
    href: "/case-studies/ai-transformation-retail-giant-success-2025",
    category: "Case Study",
    readTime: "15 min read",
    isTrending: true,
    icon: "🏪",
    stats: "$2.3B revenue growth"
=======
    title: "AI Enterprise Transformation Success: $2B Revenue Growth Case Study",
    description: "Discover how a Fortune 500 company achieved $2B revenue growth through comprehensive AI transformation. Learn proven strategies, implementation roadmap, and key success metrics.",
    href: "/blog/ai-2025-enterprise-transformation-success",
    category: "Case Study",
    readTime: "25 min read",
    isTrending: true,
    icon: "🏢",
    stats: "Trending this week"
  },
  {
    title: "AI Startup Funding Revolution 2025: $100B Investment Boom",
    description: "Discover the AI startup funding revolution sweeping 2025. Learn how to secure funding, understand investor priorities, and capitalize on the $100B AI investment boom.",
    href: "/blog/ai-2025-startup-funding-revolution",
    category: "Startup Strategy",
    readTime: "18 min read",
    isTrending: true,
    icon: "💰",
    stats: "300% growth in funding"
  },
  {
    title: "AI Cybersecurity Transformation: 99.9% Threat Detection Success",
    description: "Discover how a Fortune 500 company achieved 99.9% threat detection accuracy and $200M in security cost savings through AI-powered cybersecurity transformation.",
    href: "/case-studies/ai-cybersecurity-transformation-2025",
    category: "Cybersecurity",
    readTime: "22 min read",
    isTrending: true,
    icon: "🛡️",
    stats: "Zero security breaches"
>>>>>>> cursor/create-and-deploy-new-content-46f8
  }
];

const latestContent: ContentItem[] = [
  {
<<<<<<< HEAD
    title: "AI 2025 Revolutionary Breakthroughs: 15 Game-Changing Technologies",
    description: "Discover the 15 most revolutionary AI breakthroughs of 2025 that are reshaping industries. From quantum AI to autonomous systems, explore the future of technology.",
    href: "/blog/ai-2025-revolutionary-breakthroughs",
    category: "AI Innovation",
    readTime: "18 min read",
    isNew: true,
    icon: "🚀",
    stats: "15 breakthrough technologies"
  },
  {
    title: "AI Enterprise Automation Success Stories 2025: 90% Efficiency Gains",
    description: "Discover how Fortune 500 companies achieved 90% efficiency gains through AI automation. Real case studies, implementation strategies, and ROI metrics.",
    href: "/blog/ai-2025-enterprise-automation-success",
    category: "AI & Automation",
    readTime: "15 min read",
    isNew: true,
    icon: "🏢",
    stats: "90% efficiency gains"
  },
  {
    title: "AI Retail Transformation Success: $2.5B Revenue Increase Case Study",
    description: "How a global retail giant achieved $2.5B revenue increase through AI transformation. Complete implementation strategy, results, and lessons learned.",
    href: "/case-studies/ai-2025-retail-transformation-success",
    category: "Case Study",
    readTime: "20 min read",
    isNew: true,
    icon: "🛍️",
    stats: "$2.5B revenue increase"
=======
    title: "AI 2025 Comprehensive Implementation Playbook: Complete Guide",
    description: "Master AI implementation with our comprehensive 200-page playbook. Step-by-step framework, checklists, templates, and proven strategies for successful AI transformation in 2025.",
    href: "/resources/ai-2025-comprehensive-implementation-playbook",
    category: "Master Guide",
    readTime: "200 pages",
    isNew: true,
    icon: "📚",
    stats: "200+ pages guide"
  },
  {
    title: "AI Enterprise Transformation Success: $2B Revenue Growth Case Study",
    description: "Discover how a Fortune 500 company achieved $2B revenue growth through comprehensive AI transformation. Learn proven strategies, implementation roadmap, and key success metrics.",
    href: "/blog/ai-2025-enterprise-transformation-success",
    category: "Case Study",
    readTime: "25 min read",
    isNew: true,
    icon: "🏢",
    stats: "$2B revenue growth"
>>>>>>> cursor/create-and-deploy-new-content-46f8
  },
  {
    title: "AI Cybersecurity Transformation: 99.9% Threat Detection Success",
    description: "Discover how a Fortune 500 company achieved 99.9% threat detection accuracy and $200M in security cost savings through AI-powered cybersecurity transformation.",
    href: "/case-studies/ai-cybersecurity-transformation-2025",
    category: "Cybersecurity",
    readTime: "22 min read",
    isNew: true,
<<<<<<< HEAD
    icon: "🏥",
    stats: "95% accuracy achieved"
    title: "AI Enterprise Readiness 2025: Complete Implementation Guide",
    description: "Master AI enterprise readiness with our comprehensive 2025 guide. Learn proven strategies, frameworks, and best practices for successful AI transformation at scale.",
    href: "/blog/ai-2025-enterprise-readiness-comprehensive-guide",
    category: "Enterprise AI",
    readTime: "25 min read",
    isNew: true,
    icon: "🏢",
    stats: "500+ enterprises using this"
  },
  {
    title: "AI Multimodal Revolution 2025: Comprehensive Market Analysis",
    description: "Explore the AI multimodal revolution transforming industries in 2025. Discover breakthrough technologies, market opportunities, and implementation strategies for multimodal AI systems.",
    href: "/blog/ai-2025-multimodal-revolution-comprehensive-analysis",
    category: "AI Revolution",
    readTime: "18 min read",
    isNew: true,
    icon: "🧠",
    stats: "$180B market value"
  },
  {
    title: "AI Transformation: Global Retail Giant Achieves $2.3B Revenue Growth",
    description: "Discover how a Fortune 500 retail giant achieved $2.3B revenue growth and 45% operational efficiency through comprehensive AI transformation. Real results, proven strategies.",
    href: "/case-studies/ai-transformation-retail-giant-success-2025",
    category: "Case Study",
    readTime: "15 min read",
    isNew: true,
    icon: "🏪",
    stats: "$2.3B revenue growth"
  },
  {
    title: "AI Productivity Automation 2025: Complete Implementation Guide",
    description: "Transform your business operations with AI automation. Learn proven strategies to boost productivity by 40% in 2025.",
    href: "/blog/ai-productivity-automation-2025",
    category: "Productivity",
    readTime: "12 min read",
    isNew: true,
    icon: "🚀",
    stats: "40% productivity boost"
=======
    icon: "🛡️",
    stats: "99.9% detection rate"
>>>>>>> cursor/create-and-deploy-new-content-46f8
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