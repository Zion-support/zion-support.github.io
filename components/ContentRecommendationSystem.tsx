'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

interface ContentItem {
  id: string;
  title: string;
  description: string;
  type: 'blog' | 'case-study' | 'guide' | 'tool';
  category: string;
  readTime: string;
  publishedDate: string;
  tags: string[];
  href: string;
  popularity: number;
  relevanceScore: number;
}

interface UserProfile {
  interests: string[];
  readingHistory: string[];
  role: string;
  industry: string;
}

const contentDatabase: ContentItem[] = [
  {
    id: '1',
    title: 'AI Cost Calculator 2026: Optimize Your AI Spending',
    description: 'Calculate and optimize your AI costs with our comprehensive guide. Save up to 70% on LLM expenses.',
    type: 'tool',
    category: 'Cost Optimization',
    readTime: '12 min read',
    publishedDate: '2026-01-20',
    tags: ['AI costs', 'LLM optimization', 'ROI calculator', 'cost reduction'],
    href: '/blog/ai-cost-calculator-2026',
    popularity: 95,
    relevanceScore: 0
  },
  {
    id: '2',
    title: 'AI Implementation Playbook 2026: Complete Enterprise Guide',
    description: 'Master AI implementation with our comprehensive enterprise guide. Achieve 300% ROI with proven methodologies.',
    type: 'guide',
    category: 'Implementation',
    readTime: '20 min read',
    publishedDate: '2026-01-20',
    tags: ['AI strategy', 'enterprise AI', 'implementation', 'ROI'],
    href: '/blog/ai-implementation-playbook-2026',
    popularity: 92,
    relevanceScore: 0
  },
  {
    id: '3',
    title: 'AI Supply Chain Optimization: 85% Efficiency Gain & $5M Savings',
    description: 'See how we helped a global manufacturer achieve 85% efficiency improvement and $5M annual savings.',
    type: 'case-study',
    category: 'Manufacturing',
    readTime: '15 min read',
    publishedDate: '2026-01-20',
    tags: ['supply chain', 'manufacturing', 'efficiency', 'cost savings'],
    href: '/case-studies/ai-supply-chain-optimization-2026',
    popularity: 88,
    relevanceScore: 0
  },
  {
    id: '4',
    title: 'Trustworthy AI Agents 2026: Safety, Compliance, and Observability',
    description: 'Deploy trustworthy AI agents with guardrails, approvals, and end-to-end observability.',
    type: 'blog',
    category: 'AI Agents',
    readTime: '11 min read',
    publishedDate: '2026-01-18',
    tags: ['AI agents', 'safety', 'compliance', 'observability'],
    href: '/blog/ai-trustworthy-agents-2026',
    popularity: 85,
    relevanceScore: 0
  },
  {
    id: '5',
    title: 'FinTech AI Risk Compliance: 70% Risk Reduction & $2.5M Savings',
    description: 'See how a leading fintech achieved 70% risk reduction with automated governance frameworks.',
    type: 'case-study',
    category: 'FinTech',
    readTime: '12 min read',
    publishedDate: '2026-01-15',
    tags: ['fintech', 'risk management', 'compliance', 'AI governance'],
    href: '/case-studies/fintech-ai-risk-compliance-2025',
    popularity: 82,
    relevanceScore: 0
  },
  {
    id: '6',
    title: 'AI Value Stream Analytics 2026: Trace ROI from Token to Revenue',
    description: 'Tie AI cost, latency, and quality to business value with end-to-end tracing.',
    type: 'blog',
    category: 'Analytics',
    readTime: '9 min read',
    publishedDate: '2026-01-17',
    tags: ['analytics', 'ROI', 'value stream', 'AI metrics'],
    href: '/blog/ai-value-stream-analytics-2026',
    popularity: 78,
    relevanceScore: 0
  }
];

const industryKeywords = {
  'manufacturing': ['supply chain', 'production', 'automation', 'efficiency', 'manufacturing'],
  'fintech': ['fintech', 'financial', 'risk', 'compliance', 'banking'],
  'healthcare': ['healthcare', 'medical', 'patient', 'diagnosis', 'health'],
  'retail': ['retail', 'e-commerce', 'customer', 'sales', 'inventory'],
  'technology': ['AI', 'automation', 'development', 'software', 'tech'],
  'general': ['AI', 'automation', 'efficiency', 'cost reduction', 'ROI']
};

const roleKeywords = {
  'cto': ['implementation', 'strategy', 'technology', 'architecture', 'scaling'],
  'cfo': ['cost optimization', 'ROI', 'financial', 'budget', 'savings'],
  'ceo': ['strategy', 'transformation', 'business', 'growth', 'innovation'],
  'manager': ['implementation', 'team', 'process', 'efficiency', 'management'],
  'developer': ['technical', 'implementation', 'code', 'development', 'tools'],
  'analyst': ['analytics', 'data', 'insights', 'metrics', 'reporting']
};

export default function ContentRecommendationSystem() {
  const [userProfile, setUserProfile] = useState<UserProfile>({
    interests: [],
    readingHistory: [],
    role: '',
    industry: ''
  });
  const [recommendations, setRecommendations] = useState<ContentItem[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const calculateRelevanceScore = (content: ContentItem, profile: UserProfile): number => {
    let score = 0;

    // Base popularity score (0-100)
    score += content.popularity * 0.3;

    // Interest matching (0-100)
    const interestMatches = content.tags.filter(tag => 
      profile.interests.some(interest => 
        interest.toLowerCase().includes(tag.toLowerCase()) ||
        tag.toLowerCase().includes(interest.toLowerCase())
      )
    ).length;
    score += (interestMatches / content.tags.length) * 100 * 0.4;

    // Industry relevance
    if (profile.industry && industryKeywords[profile.industry as keyof typeof industryKeywords]) {
      const industryMatches = content.tags.filter(tag =>
        industryKeywords[profile.industry as keyof typeof industryKeywords].some(keyword =>
          tag.toLowerCase().includes(keyword.toLowerCase())
        )
      ).length;
      score += (industryMatches / content.tags.length) * 100 * 0.2;
    }

    // Role relevance
    if (profile.role && roleKeywords[profile.role as keyof typeof roleKeywords]) {
      const roleMatches = content.tags.filter(tag =>
        roleKeywords[profile.role as keyof typeof roleKeywords].some(keyword =>
          tag.toLowerCase().includes(keyword.toLowerCase())
        )
      ).length;
      score += (roleMatches / content.tags.length) * 100 * 0.1;
    }

    return Math.min(100, Math.max(0, score));
  };

  const generateRecommendations = (profile: UserProfile) => {
    setIsLoading(true);
    
    setTimeout(() => {
      const scoredContent = contentDatabase.map(content => ({
        ...content,
        relevanceScore: calculateRelevanceScore(content, profile)
      }));

      const sortedContent = scoredContent
        .sort((a, b) => b.relevanceScore - a.relevanceScore)
        .slice(0, 6);

      setRecommendations(sortedContent);
      setIsLoading(false);
    }, 1000);
  };

  const handleProfileUpdate = (field: keyof UserProfile, value: any) => {
    const newProfile = { ...userProfile, [field]: value };
    setUserProfile(newProfile);
    generateRecommendations(newProfile);
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'blog': return '📝';
      case 'case-study': return '📊';
      case 'guide': return '📖';
      case 'tool': return '🛠️';
      default: return '📄';
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'blog': return 'bg-blue-100 text-blue-800';
      case 'case-study': return 'bg-green-100 text-green-800';
      case 'guide': return 'bg-purple-100 text-purple-800';
      case 'tool': return 'bg-orange-100 text-orange-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getRelevanceColor = (score: number) => {
    if (score >= 80) return 'text-green-600';
    if (score >= 60) return 'text-blue-600';
    if (score >= 40) return 'text-yellow-600';
    return 'text-gray-600';
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Personalized Content Recommendations
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get AI-powered content recommendations tailored to your role, industry, and interests.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Profile Configuration */}
          <div className="lg:col-span-1">
            <div className="bg-gray-50 rounded-xl p-6 sticky top-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6">
                Tell us about yourself
              </h3>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Your Role
                  </label>
                  <select
                    value={userProfile.role}
                    onChange={(e) => handleProfileUpdate('role', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">Select your role</option>
                    <option value="ceo">CEO/Executive</option>
                    <option value="cto">CTO/Technical Lead</option>
                    <option value="cfo">CFO/Finance</option>
                    <option value="manager">Manager</option>
                    <option value="developer">Developer</option>
                    <option value="analyst">Analyst</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Industry
                  </label>
                  <select
                    value={userProfile.industry}
                    onChange={(e) => handleProfileUpdate('industry', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">Select your industry</option>
                    <option value="manufacturing">Manufacturing</option>
                    <option value="fintech">FinTech</option>
                    <option value="healthcare">Healthcare</option>
                    <option value="retail">Retail</option>
                    <option value="technology">Technology</option>
                    <option value="general">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Areas of Interest
                  </label>
                  <div className="space-y-2">
                    {[
                      'Cost Optimization',
                      'AI Implementation',
                      'Supply Chain',
                      'Risk Management',
                      'Analytics',
                      'Automation',
                      'ROI',
                      'Efficiency'
                    ].map(interest => (
                      <label key={interest} className="flex items-center">
                        <input
                          type="checkbox"
                          checked={userProfile.interests.includes(interest)}
                          onChange={(e) => {
                            const newInterests = e.target.checked
                              ? [...userProfile.interests, interest]
                              : userProfile.interests.filter(i => i !== interest);
                            handleProfileUpdate('interests', newInterests);
                          }}
                          className="mr-2"
                        />
                        <span className="text-sm text-gray-700">{interest}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Recommendations */}
          <div className="lg:col-span-2">
            {isLoading ? (
              <div className="flex items-center justify-center h-64">
                <div className="text-center">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
                  <p className="text-gray-600">Finding your perfect content...</p>
                </div>
              </div>
            ) : recommendations.length > 0 ? (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold text-gray-900">
                    Recommended for You
                  </h3>
                  <span className="text-sm text-gray-500">
                    {recommendations.length} recommendations
                  </span>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  {recommendations.map((item, index) => (
                    <Link key={item.id} href={item.href} className="group">
                      <div className="bg-white border border-gray-200 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6">
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center gap-2">
                            <span className={`px-2 py-1 rounded-full text-xs font-semibold ${getTypeColor(item.type)}`}>
                              {getTypeIcon(item.type)} {item.type}
                            </span>
                            <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-semibold">
                              #{index + 1} Match
                            </span>
                          </div>
                          <div className={`text-sm font-semibold ${getRelevanceColor(item.relevanceScore)}`}>
                            {item.relevanceScore.toFixed(0)}% Match
                          </div>
                        </div>
                        
                        <h4 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                          {item.title}
                        </h4>
                        
                        <p className="text-gray-600 mb-4 text-sm">
                          {item.description}
                        </p>
                        
                        <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                          <span>{item.readTime}</span>
                          <span>{new Date(item.publishedDate).toLocaleDateString()}</span>
                        </div>
                        
                        <div className="flex flex-wrap gap-2">
                          {item.tags.slice(0, 3).map(tag => (
                            <span key={tag} className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <div className="text-center py-12">
                <div className="text-6xl mb-4">🎯</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Get Personalized Recommendations
                </h3>
                <p className="text-gray-600 mb-6">
                  Tell us about your role, industry, and interests to receive 
                  AI-powered content recommendations tailored just for you.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}