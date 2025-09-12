import React from 'react';
import Link from 'next/link';

interface ContentItem {
  id: string;
  title: string;
  description: string;
  type: 'blog' | 'resource' | 'case-study';
  category: string;
  readTime?: string;
  downloadCount?: string;
  icon: string;
  href: string;
  isNew?: boolean;
  isTrending?: boolean;
  isFeatured?: boolean;
}

interface NewContentShowcaseProps {
  variant?: 'default' | 'featured' | 'trending' | 'latest';
  maxItems?: number;
  showCategories?: boolean;
}

const contentItems: ContentItem[] = [
  {
    id: 'ai-2025-year-review',
    title: 'AI 2025: Year in Review - Major Breakthroughs and Industry Impact',
    description: 'Comprehensive review of AI breakthroughs, enterprise adoption, and market trends that defined 2025.',
    type: 'blog',
    category: 'AI & Technology',
    readTime: '18 min read',
    icon: '🤖',
    href: '/blog/ai-2025-year-in-review',
    isNew: true,
    isFeatured: true
  },
  {
    id: 'ai-roi-calculator',
    title: 'AI Automation ROI Calculator 2025: Measure Your Business Impact',
    description: 'Calculate the return on investment for AI automation projects with our comprehensive ROI calculator.',
    type: 'blog',
    category: 'Business Strategy',
    readTime: '12 min read',
    icon: '💰',
    href: '/blog/ai-automation-roi-calculator-2025',
    isNew: true,
    isTrending: true
  },
  {
    id: 'ai-implementation-guide',
    title: 'AI Implementation Master Guide 2025: Complete Blueprint for Success',
    description: 'Comprehensive 150-page guide covering AI strategy, implementation, governance, and optimization.',
    type: 'resource',
    category: 'Implementation',
    downloadCount: '10,000+ downloads',
    icon: '📚',
    href: '/resources/ai-implementation-master-guide-2025',
    isNew: true,
    isFeatured: true
  },
  {
    id: 'retail-transformation',
    title: 'AI Retail Transformation Success: 60% Revenue Increase Case Study',
    description: 'How a major retail chain achieved 60% revenue increase through AI-powered personalization and automation.',
    type: 'case-study',
    category: 'Success Stories',
    readTime: '15 min read',
    icon: '🛍️',
    href: '/case-studies/ai-retail-transformation-success-2025',
    isNew: true,
    isTrending: true
  },
  {
    id: 'ai-enterprise-integration',
    title: 'AI Enterprise Integration 2025: Complete Implementation Guide',
    description: 'Step-by-step guide to integrating AI into enterprise environments with real-world case studies.',
    type: 'blog',
    category: 'Enterprise AI',
    readTime: '15 min read',
    icon: '🏢',
    href: '/blog/ai-enterprise-integration-2025',
    isNew: true
  },
  {
    id: 'ai-governance-practice',
    title: 'AI Governance in Practice 2025: Controls that Reduce Risk',
    description: 'Practical framework for implementing AI governance that reduces risk without blocking delivery.',
    type: 'blog',
    category: 'AI Governance',
    readTime: '9 min read',
    icon: '🛡️',
    href: '/blog/ai-governance-in-practice-2025',
    isNew: true
  },
  {
    id: 'ai-cost-optimization',
    title: 'Advanced AI Cost Optimization 2025: Reduce Costs by 60%',
    description: 'Advanced strategies for optimizing AI costs while maintaining performance and quality.',
    type: 'blog',
    category: 'AI Engineering',
    readTime: '12 min read',
    icon: '⚡',
    href: '/blog/ai-cost-optimization-advanced-2025',
    isNew: true,
    isTrending: true
  },
  {
    id: 'genai-evaluation-playbook',
    title: 'GenAI Evaluation Playbook 2025: Ship Quality with Confidence',
    description: 'Complete playbook for evaluating and testing generative AI systems in production environments.',
    type: 'blog',
    category: 'AI Testing',
    readTime: '9 min read',
    icon: '🧪',
    href: '/blog/genai-evaluation-playbook-2025',
    isNew: true
  }
];

const getFilteredContent = (variant: string, maxItems: number): ContentItem[] => {
  let filtered = contentItems;
  
  switch (variant) {
    case 'featured':
      filtered = contentItems.filter(item => item.isFeatured);
      break;
    case 'trending':
      filtered = contentItems.filter(item => item.isTrending);
      break;
    case 'latest':
      filtered = contentItems.filter(item => item.isNew);
      break;
    default:
      filtered = contentItems;
  }
  
  return filtered.slice(0, maxItems);
};

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

export default function NewContentShowcase({ 
  variant = 'default', 
  maxItems = 4,
  showCategories = true 
}: NewContentShowcaseProps) {
  const filteredContent = getFilteredContent(variant, maxItems);
  
  if (filteredContent.length === 0) {
    return null;
  }

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-blue-100 text-blue-800 rounded-full px-4 py-2 mb-6">
            <span className="text-sm font-medium">
              {variant === 'featured' && '✨ FEATURED CONTENT'}
              {variant === 'trending' && '🔥 TRENDING NOW'}
              {variant === 'latest' && '🆕 JUST PUBLISHED'}
              {variant === 'default' && '📚 NEW CONTENT'}
            </span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {variant === 'featured' && 'Featured AI & Tech Content'}
            {variant === 'trending' && 'Trending This Week'}
            {variant === 'latest' && 'Latest Publications'}
            {variant === 'default' && 'Fresh AI & Tech Insights'}
          </h2>
          
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            {variant === 'featured' && 'Discover our most popular and impactful content covering AI implementation, business strategy, and technology trends.'}
            {variant === 'trending' && 'See what our community is reading and sharing this week. Stay ahead with trending insights and analysis.'}
            {variant === 'latest' && 'Get the latest insights, guides, and case studies fresh from our expert team. New content published weekly.'}
            {variant === 'default' && 'Explore our latest articles, resources, and case studies covering AI, automation, and business transformation.'}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/blog"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              View All Articles
            </Link>
            <Link
              href="/resources"
              className="border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors"
            >
              Browse Resources
            </Link>
            <Link
              href="/case-studies"
              className="border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors"
            >
              View Case Studies
            </Link>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredContent.map((item) => (
            <Link key={item.id} href={item.href} className="group">
              <div className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 overflow-hidden">
                {/* Image/Icon Header */}
                <div className="aspect-video bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center relative">
                  <div className="text-6xl group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  
                  {/* Badges */}
                  <div className="absolute top-3 left-3 flex flex-col gap-2">
                    {item.isNew && (
                      <span className="bg-green-600 text-white px-2 py-1 rounded-full text-xs font-medium">
                        NEW
                      </span>
                    )}
                    {item.isTrending && (
                      <span className="bg-orange-600 text-white px-2 py-1 rounded-full text-xs font-medium">
                        TRENDING
                      </span>
                    )}
                    {item.isFeatured && (
                      <span className="bg-purple-600 text-white px-2 py-1 rounded-full text-xs font-medium">
                        FEATURED
                      </span>
                    )}
                  </div>
                  
                  {/* Type Badge */}
                  <div className="absolute top-3 right-3">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getTypeColor(item.type)}`}>
                      {getTypeLabel(item.type)}
                    </span>
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-6">
                  {showCategories && (
                    <div className="text-xs font-medium text-blue-700 mb-2">
                      {item.category}
                    </div>
                  )}
                  
                  <h3 className="text-lg font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                    {item.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {item.description}
                  </p>
                  
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <div className="flex items-center gap-2">
                      {item.readTime && (
                        <>
                          <span>{item.readTime}</span>
                          <span>•</span>
                        </>
                      )}
                      {item.downloadCount && (
                        <>
                          <span>{item.downloadCount}</span>
                          <span>•</span>
                        </>
                      )}
                      <span>Free</span>
                    </div>
                    <span className="text-blue-600 font-medium group-hover:underline">
                      {item.type === 'resource' ? 'Download' : 'Read More'} →
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Stay Updated with Latest Content
            </h3>
            <p className="text-gray-600 mb-6">
              Get notified when we publish new articles, resources, and case studies. 
              Join 10,000+ professionals who trust our content.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/newsletter"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Subscribe to Newsletter
              </Link>
              <Link
                href="/rss"
                className="border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors"
              >
                RSS Feed
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}