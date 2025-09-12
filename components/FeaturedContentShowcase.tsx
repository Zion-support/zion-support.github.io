import React from 'react';
import Link from 'next/link';

interface ContentItem {
  title: string;
  description: string;
  href: string;
  type: 'blog' | 'case-study' | 'resource';
  readTime?: string;
  pages?: string;
  featured?: boolean;
  image?: string;
}

const featuredContent: ContentItem[] = [
  {
    title: 'AI 2026: Revolutionary Trends That Will Transform Every Industry',
    description: 'Discover the groundbreaking AI trends of 2026 that are set to revolutionize industries, from quantum AI to autonomous business ecosystems.',
    href: '/blog/ai-2026-revolutionary-trends',
    type: 'blog',
    readTime: '30 min read',
    featured: true
  },
  {
    title: 'AI Agent Economy 2026: How Autonomous Agents Create New Markets',
    description: 'Why autonomous agents are moving into production and how new marketplaces, protocols, and ROI models are forming.',
    href: '/blog/ai-2026-agent-economy',
    type: 'blog',
    readTime: '18 min read',
    featured: true
  },
  {
    title: 'AI Industry Disruption 2025: How Every Sector is Changing',
    description: 'Deep analysis of AI-driven disruption across 12 industries with quantified impacts, adoption timelines, and risk controls.',
    href: '/blog/ai-2025-industry-disruption',
    type: 'blog',
    readTime: '25 min read',
    featured: true
  },
  {
    title: 'AI Enterprise Implementation Masterclass 2025',
    description: 'Comprehensive, 45-minute masterclass covering governance, data, architecture, security, and ROI for enterprise AI.',
    href: '/blog/ai-2025-enterprise-implementation-masterclass',
    type: 'blog',
    readTime: '45 min read',
    featured: true
  },
  {
    title: 'AI Go-To-Market 2025: From Zero to Traction',
    description: 'Positioning, pricing, distribution, and growth loops that work for AI products in 2025.',
    href: '/blog/ai-2025-go-to-market-playbook',
    type: 'blog',
    readTime: '22 min read'
  },
  {
    title: 'AI Manufacturing Transformation: 75% Efficiency Gain Case Study',
    description: 'How a Fortune 500 manufacturer achieved 75% efficiency gains, 50% cost reduction, and zero-defect production through comprehensive AI transformation.',
    href: '/case-studies/ai-manufacturing-transformation-2025',
    type: 'case-study',
    readTime: '20 min read',
    featured: true
  },
  {
    title: 'AI 2026 Strategy Playbook: Complete Guide to Future-Proof Your Business',
    description: 'Download our comprehensive 250-page AI 2026 strategy playbook with frameworks, templates, and actionable strategies.',
    href: '/resources/ai-2026-strategy-playbook',
    type: 'resource',
    pages: '250+ pages',
    featured: true
  },
  {
    title: 'AI Healthcare Transformation: 60% Faster Diagnosis Case Study',
    description: 'How a major healthcare system achieved 60% faster diagnosis times, 40% cost reduction, and 95% patient satisfaction through comprehensive AI transformation.',
    href: '/case-studies/ai-transformation-healthcare-2025',
    type: 'case-study',
    readTime: '15 min read'
  },
  {
    title: 'AI Implementation Master Guide 2025: Complete Playbook',
    description: 'The definitive guide to implementing AI in your organization. 200+ pages of strategies, frameworks, and best practices for successful AI transformation.',
    href: '/resources/ai-implementation-master-guide-2025',
    type: 'resource',
    pages: '200+ pages'
  },
  {
    title: 'AI Breakthrough Innovations 2025: The Technologies Reshaping Business',
    description: 'Explore the most significant AI breakthrough innovations of 2025 that are transforming industries and creating new business opportunities.',
    href: '/blog/ai-2025-breakthrough-innovations',
    type: 'blog',
    readTime: '25 min read'
  }
];

const getTypeIcon = (type: string) => {
  switch (type) {
    case 'blog':
      return '📝';
    case 'case-study':
      return '📊';
    case 'resource':
      return '📚';
    default:
      return '📄';
  }
};

const getTypeColor = (type: string) => {
  switch (type) {
    case 'blog':
      return 'bg-blue-100 text-blue-800';
    case 'case-study':
      return 'bg-green-100 text-green-800';
    case 'resource':
      return 'bg-purple-100 text-purple-800';
    default:
      return 'bg-gray-100 text-gray-800';
  }
};

interface FeaturedContentShowcaseProps {
  className?: string;
  showAll?: boolean;
}

export default function FeaturedContentShowcase({ className = '', showAll = false }: FeaturedContentShowcaseProps) {
  const displayContent = showAll ? featuredContent : featuredContent.slice(0, 3);
  const featuredItems = featuredContent.filter(item => item.featured);
  const regularItems = featuredContent.filter(item => !item.featured);

  return (
    <div className={`bg-white ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Latest AI Insights & Resources
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay ahead of the AI revolution with our comprehensive collection of articles, 
            case studies, and strategic resources.
          </p>
        </div>

        {/* Featured Content */}
        {featuredItems.length > 0 && (
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Featured Content</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredItems.map((item, index) => (
                <Link key={index} href={item.href} className="group">
                  <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="text-2xl">{getTypeIcon(item.type)}</span>
                        <span className={`text-xs font-medium px-2 py-1 rounded-full ${getTypeColor(item.type)}`}>
                          {item.type.replace('-', ' ').toUpperCase()}
                        </span>
                        {item.featured && (
                          <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white text-xs font-medium px-2 py-1 rounded-full">
                            FEATURED
                          </span>
                        )}
                      </div>
                      
                      <h4 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 mb-3 line-clamp-2">
                        {item.title}
                      </h4>
                      
                      <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                        {item.description}
                      </p>
                      
                      <div className="flex items-center justify-between text-sm text-gray-500">
                        <span>{item.readTime || item.pages}</span>
                        <span className="text-blue-600 group-hover:text-blue-800 font-medium">
                          {item.type === 'resource' ? 'Download' : 'Read More'} →
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Regular Content */}
        {regularItems.length > 0 && (
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8">More Content</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {regularItems.map((item, index) => (
                <Link key={index} href={item.href} className="group">
                  <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-xl">{getTypeIcon(item.type)}</span>
                      <span className={`text-xs font-medium px-2 py-1 rounded-full ${getTypeColor(item.type)}`}>
                        {item.type.replace('-', ' ').toUpperCase()}
                      </span>
                    </div>
                    
                    <h4 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 mb-3 line-clamp-2">
                      {item.title}
                    </h4>
                    
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                      {item.description}
                    </p>
                    
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <span>{item.readTime || item.pages}</span>
                      <span className="text-blue-600 group-hover:text-blue-800 font-medium">
                        {item.type === 'resource' ? 'Download' : 'Read More'} →
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* View All CTA */}
        {!showAll && (
          <div className="text-center mt-12">
            <Link 
              href="/content-showcase"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center gap-2"
            >
              View All Content
              <span>→</span>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}