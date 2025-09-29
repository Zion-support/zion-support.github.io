import React, { useState, useEffect } from 'react';
import Link from 'next/link';

interface ContentItem {
  id: string;
  title: string;
  excerpt: string;
  type: 'article' | 'case-study' | 'guide' | 'service';
  readTime?: string;
  category: string;
  href: string;
  featured?: boolean;
  publishedDate: string;
  metrics?: {
    value: string;
    label: string;
  }[];
}

const contentItems: ContentItem[] = [
  {
    id: 'ai-business-transformation-2025',
    title: 'AI Business Transformation 2025: Complete Implementation Guide',
    excerpt: 'Transform your business with AI in 2025. Learn proven strategies, implementation frameworks, and real-world case studies for successful AI adoption.',
    type: 'article',
    readTime: '15 min read',
    category: 'AI Strategy',
    href: '/blog/ai-business-transformation-2025',
    featured: true,
    publishedDate: '2025-01-20',
    metrics: [
      { value: '80%', label: 'Productivity Gain' },
      { value: '40%', label: 'Cost Reduction' }
    ]
  },
  {
    id: 'ai-automation-workflows-2025',
    title: 'AI Automation Workflows 2025: Reduce Manual Work by 80%',
    excerpt: 'Learn how to implement AI-powered workflow automation that reduces manual work by 80%. Complete guide with strategies, tools, and real-world examples.',
    type: 'guide',
    readTime: '12 min read',
    category: 'AI Automation',
    href: '/blog/ai-automation-workflows-2025',
    featured: true,
    publishedDate: '2025-01-20',
    metrics: [
      { value: '80%', label: 'Manual Work Reduction' },
      { value: '60%', label: 'Faster Processing' }
    ]
  },
  {
    id: 'enterprise-ai-security-2025',
    title: 'Enterprise AI Security 2025: Comprehensive Security Framework',
    excerpt: 'Secure your AI systems with enterprise-grade security frameworks. Learn about AI security best practices, compliance, and threat protection strategies.',
    type: 'article',
    readTime: '18 min read',
    category: 'AI Security',
    href: '/blog/enterprise-ai-security-2025',
    featured: true,
    publishedDate: '2025-01-20',
    metrics: [
      { value: '99%', label: 'Threat Protection' },
      { value: '5', label: 'Security Layers' }
    ]
  },
  {
    id: 'ai-governance-framework-2025',
    title: 'AI Governance Framework 2025: Enterprise-Ready Implementation Guide',
    excerpt: 'Master AI governance with our comprehensive framework covering risk management, compliance, and ethical deployment strategies.',
    type: 'article',
    readTime: '15 min read',
    category: 'AI Governance',
    href: '/blog/ai-governance-framework-2025',
    featured: true,
    publishedDate: '2025-01-20',
    metrics: [
      { value: '70%', label: 'Risk Reduction' },
      { value: '12', label: 'Framework Areas' }
    ]
  },
  {
    id: 'ai-mlops-vector-databases-2025',
    title: 'AI MLOps with Vector Databases 2025: Production-Ready RAG Architecture',
    excerpt: 'Master MLOps for AI applications with vector databases. Learn production-ready RAG architecture and scalable deployment patterns.',
    type: 'article',
    readTime: '18 min read',
    category: 'MLOps',
    href: '/blog/ai-mlops-vector-databases-2025',
    featured: true,
    publishedDate: '2025-01-20',
    metrics: [
      { value: '<50ms', label: 'Search Latency' },
      { value: '10M+', label: 'Vector Capacity' }
    ]
  },
  {
    id: 'fintech-ai-risk-compliance-2025',
    title: 'FinTech AI Risk Compliance 2025: 70% Risk Reduction with Automated Governance',
    excerpt: 'See how a leading fintech company achieved 70% AI risk reduction and regulatory compliance with automated governance frameworks.',
    type: 'case-study',
    category: 'FinTech',
    href: '/case-studies/fintech-ai-risk-compliance-2025',
    featured: true,
    publishedDate: '2025-01-20',
    metrics: [
      { value: '70%', label: 'Risk Reduction' },
      { value: '$2.5M', label: 'Cost Savings' }
    ]
  },
  {
    id: 'ai-risk-register',
    title: 'AI Risk Register: Practical Framework for Managing AI Risks',
    excerpt: 'Production-ready risk register covering model, data, privacy, security, ethics, and ops.',
    type: 'article',
    readTime: '10 min read',
    category: 'AI Reliability',
    href: '/blog/ai-risk-register',
    featured: true,
    publishedDate: '2025-09-29',
    metrics: [
      { value: '12', label: 'Risk Areas' },
      { value: '24x7', label: 'Monitoring' }
    ]
  },
  {
    id: 'practical-rag-in-production',
    title: 'Practical RAG in Production: Patterns that Actually Work',
    excerpt: 'Battle-tested RAG patterns for groundedness, latency, and cost at scale.',
    type: 'article',
    readTime: '9 min read',
    category: 'AI Platforms',
    href: '/blog/practical-rag-in-production',
    featured: true,
    publishedDate: '2025-09-29',
    metrics: [
      { value: '30–70%', label: 'Cost Reduction' },
      { value: '<200ms', label: 'P95 Latency' }
    ]
  },
  {
    id: 'ai-revolution-2025',
    title: 'AI Revolution 2025: Complete Business Transformation Guide',
    excerpt: 'Discover how AI is reshaping industries and creating unprecedented opportunities for growth in 2025.',
    type: 'article',
    readTime: '12 min read',
    category: 'AI Trends',
    href: '/blog/ai-revolution-2025',
    featured: true,
    publishedDate: '2025-01-17',
    metrics: [
      { value: '300%', label: 'ROI Improvement' },
      { value: '85%', label: 'Enterprise Adoption' }
    ]
  },
  {
    id: 'ai-workflow-automation-guide',
    title: 'AI Workflow Automation: Complete Implementation Guide',
    excerpt: 'Master AI workflow automation with our comprehensive guide. Reduce manual work by 80% and improve efficiency.',
    type: 'guide',
    readTime: '15 min read',
    category: 'Automation',
    href: '/blog/ai-workflow-automation-guide',
    featured: true,
    publishedDate: '2025-01-17',
    metrics: [
      { value: '80%', label: 'Work Reduction' },
      { value: '99.9%', label: 'Accuracy' }
    ]
  },
  {
    id: 'ai-analytics-implementation',
    title: 'AI Analytics Implementation: Transform Data into Insights',
    excerpt: 'Learn how to implement AI-powered analytics that transform raw data into actionable business insights.',
    type: 'article',
    readTime: '18 min read',
    category: 'Analytics',
    href: '/blog/ai-analytics-implementation',
    featured: true,
    publishedDate: '2025-01-17',
    metrics: [
      { value: '25%', label: 'Faster Decisions' },
      { value: '40%', label: 'Revenue Growth' }
    ]
  },
  {
    id: 'healthtech-ai-transformation',
    title: 'HealthTech Solutions: 80% Efficiency Gain with AI',
    excerpt: 'See how HealthTech Solutions achieved 80% faster response times and 95% customer satisfaction.',
    type: 'case-study',
    category: 'Healthcare',
    href: '/case-studies/healthtech-ai-transformation',
    featured: true,
    publishedDate: '2025-01-17',
    metrics: [
      { value: '80%', label: 'Faster Response' },
      { value: '95%', label: 'Customer Satisfaction' }
    ]
  },
  {
    id: 'ai-virtual-assistant',
    title: 'AI Virtual Assistant: 24/7 Intelligent Support',
    excerpt: 'Transform your customer support with AI-powered virtual assistants that provide instant, accurate responses.',
    type: 'service',
    category: 'AI Services',
    href: '/services/ai-virtual-assistant',
    publishedDate: '2025-01-17',
    metrics: [
      { value: '24/7', label: 'Availability' },
      { value: '90%', label: 'Query Resolution' }
    ]
  },
  {
    id: 'ai-analytics-platform',
    title: 'AI Analytics Platform: Real-time Business Intelligence',
    excerpt: 'Transform your data into actionable insights with our comprehensive AI-powered analytics platform.',
    type: 'service',
    category: 'Analytics',
    href: '/services/ai-analytics-platform',
    publishedDate: '2025-01-17',
    metrics: [
      { value: 'Real-time', label: 'Insights' },
      { value: '85%', label: 'Forecast Accuracy' }
    ]
  },
  {
    id: 'ai-customer-service-2025',
    title: 'AI-Powered Customer Service Revolution',
    excerpt: 'Discover how AI is transforming customer service with 80% faster response times and 90% cost reduction.',
    type: 'article',
    readTime: '15 min read',
    category: 'Customer Service',
    href: '/blog/ai-customer-service-2025',
    featured: true,
    publishedDate: '2025-01-17',
    metrics: [
      { value: '80%', label: 'Faster Response' },
      { value: '90%', label: 'Cost Reduction' }
    ]
  },
  {
    id: 'ai-healthcare-transformation-2025',
    title: 'AI Healthcare Transformation Guide',
    excerpt: 'How AI is revolutionizing patient care with 40% better diagnostics and 60% improved outcomes.',
    type: 'article',
    readTime: '18 min read',
    category: 'Healthcare',
    href: '/blog/ai-healthcare-transformation-2025',
    featured: true,
    publishedDate: '2025-01-17',
    metrics: [
      { value: '40%', label: 'Better Diagnostics' },
      { value: '60%', label: 'Improved Outcomes' }
    ]
  },
  {
    id: 'retail-ai-transformation',
    title: 'RetailAI Corp: 150% Revenue Growth',
    excerpt: 'See how RetailAI Corp achieved 150% revenue growth and 80% cost reduction with AI transformation.',
    type: 'case-study',
    category: 'Retail',
    href: '/case-studies/retail-ai-transformation',
    featured: true,
    publishedDate: '2025-01-17',
    metrics: [
      { value: '150%', label: 'Revenue Growth' },
      { value: '80%', label: 'Cost Reduction' }
    ]
  }
];

interface ContentShowcaseProps {
  title?: string;
  subtitle?: string;
  maxItems?: number;
  showMetrics?: boolean;
  autoRotate?: boolean;
  rotationInterval?: number;
}

export default function ContentShowcase({
  title = "Latest AI Insights & Success Stories",
  subtitle = "Stay ahead with our latest content, case studies, and AI innovations",
  maxItems = 6,
  showMetrics = true,
  autoRotate = true,
  rotationInterval = 10000
}: ContentShowcaseProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isRotating, setIsRotating] = useState(autoRotate);

  const displayedItems = contentItems.slice(0, maxItems);

  useEffect(() => {
    if (isRotating && displayedItems.length > 1) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % displayedItems.length);
      }, rotationInterval);
      return () => clearInterval(interval);
    }
  }, [isRotating, displayedItems.length, rotationInterval]);

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'article':
        return 'bg-blue-100 text-blue-800';
      case 'guide':
        return 'bg-emerald-100 text-emerald-800';
      case 'case-study':
        return 'bg-green-100 text-green-800';
      case 'service':
        return 'bg-purple-100 text-purple-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'article':
        return '📄';
      case 'guide':
        return '📚';
      case 'case-study':
        return '📈';
      case 'service':
        return '🚀';
      default:
        return '📄';
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 to-blue-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            {title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {subtitle}
          </p>
        </div>

        {/* Auto-rotation Controls */}
        {displayedItems.length > 1 && (
          <div className="flex justify-center mb-8">
            <button
              onClick={() => setIsRotating(!isRotating)}
              className={`px-4 py-2 rounded-lg font-semibold transition-colors ${
                isRotating
                  ? 'bg-blue-600 text-white hover:bg-blue-700'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {isRotating ? '⏸️ Pause Auto-rotation' : '▶️ Start Auto-rotation'}
            </button>
          </div>
        )}

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {displayedItems.map((item, index) => (
            <ContentCard
              key={item.id}
              item={item}
              isActive={index === currentIndex}
              showMetrics={showMetrics}
              getTypeColor={getTypeColor}
              getTypeIcon={getTypeIcon}
            />
          ))}
        </div>

        {/* Rotation Indicators */}
        {displayedItems.length > 1 && (
          <div className="flex justify-center space-x-2 mb-12">
            {displayedItems.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-blue-600' : 'bg-gray-300'
                }`}
                aria-label={`Go to content ${index + 1}`}
              />
            ))}
          </div>
        )}

        {/* Action Buttons */}
        <div className="text-center space-y-4">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/blog"
              className="inline-block bg-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-purple-700 transition-colors shadow-lg hover:shadow-xl"
            >
              View All Content
            </Link>
            <Link
              href="/case-studies"
              className="inline-block border-2 border-purple-600 text-purple-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-purple-600 hover:text-white transition-colors"
            >
              View Case Studies
            </Link>
          </div>
          
          {/* Content Statistics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 pt-8 border-t border-gray-200">
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600">18+</div>
              <div className="text-sm text-gray-600">AI Articles</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600">10+</div>
              <div className="text-sm text-gray-600">Case Studies</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600">25+</div>
              <div className="text-sm text-gray-600">AI Services</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600">75K+</div>
              <div className="text-sm text-gray-600">Monthly Readers</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContentCard({
  item,
  isActive,
  showMetrics,
  getTypeColor,
  getTypeIcon
}: {
  item: ContentItem;
  isActive: boolean;
  showMetrics: boolean;
  getTypeColor: (type: string) => string;
  getTypeIcon: (type: string) => string;
}) {
  return (
    <Link href={item.href} className="group">
      <div className={`bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-200 ${
        isActive ? 'ring-2 ring-blue-500 transform scale-105' : ''
      }`}>
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <span className="text-2xl">{getTypeIcon(item.type)}</span>
            <span className={`px-2 py-1 rounded-full text-xs font-semibold ${getTypeColor(item.type)}`}>
              {item.category}
            </span>
          </div>
          {item.featured && (
            <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded-full text-xs font-semibold">
              Featured
            </span>
          )}
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
          {item.title}
        </h3>

        {/* Excerpt */}
        <p className="text-gray-600 mb-4 line-clamp-3">
          {item.excerpt}
        </p>

        {/* Metrics */}
        {showMetrics && item.metrics && (
          <div className="mb-4 p-3 bg-gray-50 rounded-lg">
            <div className="grid grid-cols-2 gap-2">
              {item.metrics.map((metric, index) => (
                <div key={index} className="text-center">
                  <div className="text-sm font-bold text-blue-600">{metric.value}</div>
                  <div className="text-xs text-gray-600">{metric.label}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Footer */}
        <div className="flex items-center justify-between text-sm text-gray-500">
          <span>{new Date(item.publishedDate).toLocaleDateString()}</span>
          {item.readTime && <span>{item.readTime}</span>}
        </div>

        {/* CTA */}
        <div className="mt-4 pt-4 border-t border-gray-100">
          <div className="flex items-center text-blue-600 font-semibold group-hover:text-blue-700 transition-colors">
            {item.type === 'service' ? 'Explore Service →' : 
             item.type === 'case-study' ? 'View Case Study →' :
             item.type === 'guide' ? 'Read Guide →' : 'Read Article →'}
          </div>
        </div>
      </div>
    </Link>
  );
}
