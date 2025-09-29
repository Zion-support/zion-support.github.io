import React, { useState, useEffect } from 'react';
import Link from 'next/link';

interface Recommendation {
  id: string;
  title: string;
  excerpt: string;
  type: 'article' | 'case-study' | 'guide' | 'service';
  category: string;
  href: string;
  readTime?: string;
  metrics?: {
    value: string;
    label: string;
  }[];
  reason: string;
  confidence: number;
}

const recommendations: Recommendation[] = [
  {
    id: 'ai-autonomous-infrastructure-2026',
    title: 'AI Autonomous Infrastructure 2026: Self-Managing Systems Guide',
    excerpt: 'Master autonomous infrastructure with AI-driven self-healing, predictive scaling, and zero-touch operations.',
    type: 'article',
    category: 'Infrastructure',
    href: '/blog/ai-autonomous-infrastructure-2026',
    readTime: '25 min read',
    metrics: [
      { value: '99.9%', label: 'Uptime' },
      { value: '90%', label: 'Cost Reduction' }
    ],
    reason: 'Based on your interest in automation and infrastructure',
    confidence: 95
  },
  {
    id: 'ai-quantum-hybrid-computing-2026',
    title: 'AI Quantum Hybrid Computing 2026: Next-Generation Intelligence',
    excerpt: 'Harness quantum computing for AI breakthroughs with 1000x faster optimization and revolutionary capabilities.',
    type: 'article',
    category: 'Quantum Computing',
    href: '/blog/ai-quantum-hybrid-computing-2026',
    readTime: '30 min read',
    metrics: [
      { value: '1000x', label: 'Faster' },
      { value: '95%', label: 'Accuracy' }
    ],
    reason: 'Recommended for cutting-edge AI innovation',
    confidence: 92
  },
  {
    id: 'ai-transformation-mega-success-2026',
    title: 'AI Transformation Mega Success 2026: $25M ROI Case Study',
    excerpt: 'See how a Fortune 500 company achieved $25M ROI with comprehensive AI transformation.',
    type: 'case-study',
    category: 'Case Study',
    href: '/case-studies/ai-transformation-mega-success-2026',
    readTime: '30 min read',
    metrics: [
      { value: '$25M', label: 'ROI' },
      { value: '99%', label: 'Automation' }
    ],
    reason: 'High-value transformation insights for your industry',
    confidence: 88
  },
  {
    id: 'ai-zero-trust-security-2026',
    title: 'AI Zero Trust Security 2026: Enterprise Security Revolution',
    excerpt: 'Revolutionary zero trust security architecture powered by AI with 99.7% threat detection accuracy.',
    type: 'article',
    category: 'Security',
    href: '/blog/ai-zero-trust-security-2026',
    readTime: '20 min read',
    metrics: [
      { value: '99.7%', label: 'Threat Detection' },
      { value: 'Zero', label: 'Trust' }
    ],
    reason: 'Essential for enterprise security transformation',
    confidence: 90
  },
  {
    id: 'ai-foundation-models-2026',
    title: 'AI Foundation Models Playbook 2026: Complete Implementation Guide',
    excerpt: 'Complete guide to foundation models selection, deployment, and optimization for enterprise AI.',
    type: 'guide',
    category: 'AI Strategy',
    href: '/blog/ai-foundation-models-2026',
    readTime: '35 min read',
    metrics: [
      { value: '12', label: 'Model Types' },
      { value: '70%', label: 'Cost Savings' }
    ],
    reason: 'Comprehensive guide for AI model selection',
    confidence: 87
  },
  {
    id: 'ai-governance-framework-2025',
    title: 'AI Governance Framework 2025: Enterprise Implementation Guide',
    excerpt: 'Master AI governance with comprehensive framework covering risk management and compliance.',
    type: 'article',
    category: 'AI Governance',
    href: '/blog/ai-governance-framework-2025',
    readTime: '15 min read',
    metrics: [
      { value: '70%', label: 'Risk Reduction' },
      { value: '12', label: 'Framework Areas' }
    ],
    reason: 'Critical for AI risk management and compliance',
    confidence: 85
  }
];

interface InteractiveContentRecommendationProps {
  title?: string;
  subtitle?: string;
  maxRecommendations?: number;
  showConfidence?: boolean;
}

export default function InteractiveContentRecommendation({
  title = "AI-Powered Content Recommendations",
  subtitle = "Discover content tailored to your interests and industry. Our AI analyzes your preferences to suggest the most relevant articles and case studies.",
  maxRecommendations = 6,
  showConfidence = true
}: InteractiveContentRecommendationProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedType, setSelectedType] = useState<string>('all');
  const [filteredRecommendations, setFilteredRecommendations] = useState<Recommendation[]>(recommendations);

  const categories = ['all', ...Array.from(new Set(recommendations.map(r => r.category)))];
  const types = ['all', ...Array.from(new Set(recommendations.map(r => r.type)))];

  useEffect(() => {
    let filtered = recommendations;

    if (selectedCategory !== 'all') {
      filtered = filtered.filter(r => r.category === selectedCategory);
    }

    if (selectedType !== 'all') {
      filtered = filtered.filter(r => r.type === selectedType);
    }

    // Sort by confidence score
    filtered = filtered.sort((a, b) => b.confidence - a.confidence);

    setFilteredRecommendations(filtered.slice(0, maxRecommendations));
  }, [selectedCategory, selectedType, maxRecommendations]);

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

  const getConfidenceColor = (confidence: number) => {
    if (confidence >= 90) return 'text-green-600';
    if (confidence >= 80) return 'text-yellow-600';
    return 'text-orange-600';
  };

  return (
    <section className="py-20 bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-sm font-medium mb-6">
            <span className="w-4 h-4 mr-2">🤖</span>
            AI-Powered Recommendations
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            {title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {subtitle}
          </p>
        </div>

        {/* Filter Controls */}
        <div className="flex flex-wrap gap-4 justify-center mb-12">
          <div className="flex items-center gap-2">
            <label className="text-sm font-medium text-gray-700">Category:</label>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            >
              {categories.map(category => (
                <option key={category} value={category}>
                  {category === 'all' ? 'All Categories' : category}
                </option>
              ))}
            </select>
          </div>
          
          <div className="flex items-center gap-2">
            <label className="text-sm font-medium text-gray-700">Type:</label>
            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            >
              {types.map(type => (
                <option key={type} value={type}>
                  {type === 'all' ? 'All Types' : type.replace('-', ' ')}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Recommendations Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredRecommendations.map((recommendation) => (
            <div key={recommendation.id} className="group">
              <Link href={recommendation.href}>
                <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-100 hover:border-indigo-200 hover:scale-105">
                  {/* Header */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl">{getTypeIcon(recommendation.type)}</span>
                      <span className={`px-2 py-1 rounded-full text-xs font-semibold ${getTypeColor(recommendation.type)}`}>
                        {recommendation.category}
                      </span>
                    </div>
                    {showConfidence && (
                      <div className={`text-sm font-semibold ${getConfidenceColor(recommendation.confidence)}`}>
                        {recommendation.confidence}% match
                      </div>
                    )}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors line-clamp-2">
                    {recommendation.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {recommendation.excerpt}
                  </p>

                  {/* Metrics */}
                  {recommendation.metrics && (
                    <div className="mb-4 p-3 bg-gray-50 rounded-lg">
                      <div className="grid grid-cols-2 gap-2">
                        {recommendation.metrics.map((metric, index) => (
                          <div key={index} className="text-center">
                            <div className="text-sm font-bold text-indigo-600">{metric.value}</div>
                            <div className="text-xs text-gray-600">{metric.label}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Reason */}
                  <div className="mb-4 p-3 bg-indigo-50 rounded-lg">
                    <p className="text-sm text-indigo-700">
                      <span className="font-semibold">Why recommended:</span> {recommendation.reason}
                    </p>
                  </div>

                  {/* Footer */}
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>{recommendation.readTime}</span>
                    <div className="flex items-center text-indigo-600 font-semibold group-hover:text-indigo-700 transition-colors">
                      {recommendation.type === 'service' ? 'Explore Service →' : 
                       recommendation.type === 'case-study' ? 'View Case Study →' :
                       recommendation.type === 'guide' ? 'Read Guide →' : 'Read Article →'}
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="text-center space-y-4">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/blog"
              className="inline-flex items-center bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <span className="w-5 h-5 mr-2">📚</span>
              Explore All Content
            </Link>
            <Link
              href="/case-studies"
              className="inline-flex items-center border-2 border-indigo-600 text-indigo-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-indigo-600 hover:text-white transition-colors"
            >
              <span className="w-5 h-5 mr-2">📈</span>
              View Case Studies
            </Link>
          </div>
          
          {/* AI Recommendation Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 pt-8 border-t border-gray-200">
            <div className="text-center">
              <div className="text-2xl font-bold text-indigo-600">95%</div>
              <div className="text-sm text-gray-600">Accuracy</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-indigo-600">50+</div>
              <div className="text-sm text-gray-600">Content Items</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-indigo-600">10K+</div>
              <div className="text-sm text-gray-600">Users Served</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-indigo-600">85%</div>
              <div className="text-sm text-gray-600">Engagement</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}