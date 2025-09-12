import React from 'react';
import Link from 'next/link';

interface ContentItem {
  title: string;
  description: string;
  href: string;
  icon: string;
  type: 'article' | 'resource' | 'case-study';
  readTime?: string;
  fileSize?: string;
  badge?: string;
  badgeColor?: string;
}

interface ContentShowcaseProps {
  title: string;
  subtitle: string;
  items: ContentItem[];
  backgroundColor?: string;
  textColor?: string;
  showViewAll?: boolean;
  viewAllHref?: string;
  viewAllText?: string;
}

export default function ContentShowcase({
  title,
  subtitle,
  items,
  backgroundColor = 'bg-gray-50',
  textColor = 'text-gray-900',
  showViewAll = true,
  viewAllHref = '/blog',
  viewAllText = 'View All'
}: ContentShowcaseProps) {
  const getTypeStyles = (type: string) => {
    switch (type) {
      case 'article':
        return {
          badge: 'Article',
          badgeColor: 'text-blue-700',
          hoverColor: 'group-hover:text-blue-600'
        };
      case 'resource':
        return {
          badge: 'Free Resource',
          badgeColor: 'text-green-700',
          hoverColor: 'group-hover:text-green-600'
        };
      case 'case-study':
        return {
          badge: 'Success Story',
          badgeColor: 'text-purple-700',
          hoverColor: 'group-hover:text-purple-600'
        };
      default:
        return {
          badge: 'Content',
          badgeColor: 'text-gray-700',
          hoverColor: 'group-hover:text-gray-600'
        };
    }
  };

  return (
    <section className={`py-20 ${backgroundColor}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold ${textColor} mb-6`}>
            {title}
          </h2>
          <p className={`text-xl ${textColor.replace('900', '600')} max-w-3xl mx-auto mb-8`}>
            {subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {items.map((item, index) => {
            const typeStyles = getTypeStyles(item.type);
            return (
              <Link key={index} href={item.href} className="group">
                <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 h-full">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <div className={`text-sm font-medium ${typeStyles.badgeColor} mb-2`}>
                    {item.badge || typeStyles.badge}
                  </div>
                  <h3 className={`text-xl font-bold ${textColor} mb-3 ${typeStyles.hoverColor} transition-colors`}>
                    {item.title}
                  </h3>
                  <p className={`${textColor.replace('900', '600')} mb-4`}>
                    {item.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">
                      {item.readTime && `${item.readTime} • `}
                      {item.fileSize && `${item.fileSize} • `}
                      {item.type === 'article' ? 'Article' : item.type === 'resource' ? 'PDF' : 'Case Study'}
                    </span>
                    <span className={`${typeStyles.badgeColor} font-medium group-hover:underline`}>
                      {item.type === 'resource' ? 'Download Free →' : 'Read More →'}
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {showViewAll && (
          <div className="text-center">
            <Link
              href={viewAllHref}
              className={`bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-lg`}
            >
              {viewAllText}
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}

// Predefined content collections for easy use
export const featuredArticles: ContentItem[] = [
  {
    title: 'AI Multimodal Applications 2025',
    description: 'Beyond text to vision, audio, and beyond - the future of AI',
    href: '/blog/ai-multimodal-applications-2025',
    icon: '🎭',
    type: 'article',
    readTime: '15 min read',
    badge: 'New'
  },
  {
    title: 'AI Cybersecurity Threats 2025',
    description: 'Protect against next-gen AI-powered attacks and deepfakes',
    href: '/blog/ai-cybersecurity-threats-2025',
    icon: '🛡️',
    type: 'article',
    readTime: '18 min read',
    badge: 'New'
  },
  {
    title: 'AI Edge Computing & IoT 2025',
    description: 'The future of distributed intelligence and real-time processing',
    href: '/blog/ai-edge-computing-iot-2025',
    icon: '⚡',
    type: 'article',
    readTime: '16 min read',
    badge: 'New'
  }
];

export const featuredResources: ContentItem[] = [
  {
    title: 'AI Edge Computing Implementation Guide',
    description: 'Complete 45-page guide covering hardware selection, model optimization, and deployment strategies',
    href: '/resources/ai-edge-computing-implementation-guide-2025',
    icon: '⚡',
    type: 'resource',
    fileSize: '45 pages • PDF',
    badge: 'Free Guide'
  },
  {
    title: 'AI Cybersecurity Checklist 2025',
    description: '80-item comprehensive checklist to protect your AI systems from emerging threats',
    href: '/resources/ai-cybersecurity-checklist-2025',
    icon: '🛡️',
    type: 'resource',
    fileSize: '80 items • PDF',
    badge: 'Security Checklist'
  },
  {
    title: 'AI Implementation Playbook 2025',
    description: 'Step-by-step implementation guide with best practices and real-world examples',
    href: '/resources/ai-implementation-playbook-2025',
    icon: '📋',
    type: 'resource',
    fileSize: '60 pages • PDF',
    badge: 'Free Download'
  }
];

export const featuredCaseStudies: ContentItem[] = [
  {
    title: 'AI Retail Transformation Success',
    description: 'How a major retail chain achieved 40% revenue increase and 60% cost reduction',
    href: '/case-studies/ai-retail-transformation-2025',
    icon: '🏪',
    type: 'case-study',
    readTime: '12 min read',
    badge: 'Success Story'
  },
  {
    title: 'AI Healthcare Diagnosis Success',
    description: '95% accuracy in medical diagnosis with 80% faster processing times',
    href: '/case-studies/ai-healthcare-diagnosis-success-2025',
    icon: '🏥',
    type: 'case-study',
    readTime: '10 min read',
    badge: 'Case Study'
  },
  {
    title: 'Fortune 500 AI Transformation',
    description: 'Complete digital transformation success story with measurable ROI',
    href: '/case-studies/fortune-500-ai-transformation',
    icon: '🏆',
    type: 'case-study',
    readTime: '15 min read',
    badge: 'Enterprise Success'
  }
];