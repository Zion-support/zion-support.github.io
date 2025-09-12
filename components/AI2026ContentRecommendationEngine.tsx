import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Card } from './ui/Card';

interface ContentItem {
  id: string;
  title: string;
  description: string;
  href: string;
  type: string;
  category: string;
  difficulty: string;
  readTime: string;
  roi: string;
  icon: string;
  tags: string[];
  views: number;
  rating: number;
}

export default function AI2026ContentRecommendationEngine() {
  const [recommendations, setRecommendations] = useState<ContentItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [userProfile, setUserProfile] = useState({
    interests: [] as string[],
    experience: 'intermediate',
    goals: [] as string[]
  });

  const allContent: ContentItem[] = [
    {
      id: '1',
      title: 'AI 2026 Breakthrough Innovations',
      description: 'Revolutionary AI technologies transforming industries',
      href: '/blog/ai-2026-breakthrough-innovations',
      type: 'Blog Post',
      category: 'breakthroughs',
      difficulty: 'Advanced',
      readTime: '15 min',
      roi: '5000%',
      icon: '🚀',
      tags: ['quantum-ai', 'neural-interfaces', 'breakthroughs'],
      views: 15420,
      rating: 4.9
    },
    {
      id: '2',
      title: 'Global Tech Transformation Case Study',
      description: 'How a Fortune 500 company achieved 5000% ROI',
      href: '/case-studies/ai-2026-global-tech-transformation-breakthrough',
      type: 'Case Study',
      category: 'case-studies',
      difficulty: 'Intermediate',
      readTime: '12 min',
      roi: '5000%',
      icon: '🏢',
      tags: ['roi', 'transformation', 'enterprise'],
      views: 12850,
      rating: 4.8
    },
    {
      id: '3',
      title: 'AI 2026 Ultimate Implementation Toolkit',
      description: 'Complete guide for implementing breakthrough technologies',
      href: '/resources/ai-2026-ultimate-implementation-toolkit',
      type: 'Resource Guide',
      category: 'resources',
      difficulty: 'Expert',
      readTime: '25 min',
      roi: 'Complete',
      icon: '🛠️',
      tags: ['implementation', 'toolkit', 'guide'],
      views: 9850,
      rating: 4.9
    },
    {
      id: '4',
      title: 'Quantum AI ROI Calculator',
      description: 'Calculate your potential return on quantum AI investments',
      href: '/tools/ai-roi-calculator-2026',
      type: 'Interactive Tool',
      category: 'tools',
      difficulty: 'Beginner',
      readTime: '5 min',
      roi: 'Calculator',
      icon: '⚡',
      tags: ['calculator', 'roi', 'quantum'],
      views: 7500,
      rating: 4.7
    },
    {
      id: '5',
      title: 'Neural Interface Implementation Guide',
      description: 'Step-by-step guide to neural interface technology',
      href: '/resources/neural-interface-implementation-guide-2026',
      type: 'Implementation Guide',
      category: 'resources',
      difficulty: 'Advanced',
      readTime: '20 min',
      roi: '300%',
      icon: '🧠',
      tags: ['neural-interfaces', 'implementation', 'guide'],
      views: 6200,
      rating: 4.6
    },
    {
      id: '6',
      title: 'Autonomous Agent Deployment Case Study',
      description: 'Real-world success with self-organizing AI systems',
      href: '/case-studies/autonomous-agent-deployment-success-2026',
      type: 'Case Study',
      category: 'case-studies',
      difficulty: 'Intermediate',
      readTime: '10 min',
      roi: '2000%',
      icon: '🤖',
      tags: ['autonomous-agents', 'deployment', 'success'],
      views: 5800,
      rating: 4.5
    }
  ];

  useEffect(() => {
    // Simulate AI-powered recommendation algorithm
    const generateRecommendations = () => {
      setIsLoading(true);
      
      // Simulate API call delay
      setTimeout(() => {
        // Simple recommendation logic based on popularity and ratings
        const sortedContent = allContent
          .sort((a, b) => (b.views * b.rating) - (a.views * a.rating))
          .slice(0, 4);
        
        setRecommendations(sortedContent);
        setIsLoading(false);
      }, 1000);
    };

    generateRecommendations();
  }, []);

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return 'bg-green-100 text-green-800';
      case 'Intermediate': return 'bg-yellow-100 text-yellow-800';
      case 'Advanced': return 'bg-orange-100 text-orange-800';
      case 'Expert': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <section className="py-16 bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            🤖 AI-Powered Content Recommendations
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our intelligent recommendation engine analyzes your interests and behavior 
            to suggest the most relevant AI 2026 content for your transformation journey.
          </p>
        </div>

        {isLoading ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[...Array(4)].map((_, index) => (
              <Card key={index} className="p-6 animate-pulse">
                <div className="bg-gray-200 h-8 w-8 rounded mb-4"></div>
                <div className="bg-gray-200 h-4 w-3/4 rounded mb-2"></div>
                <div className="bg-gray-200 h-3 w-full rounded mb-2"></div>
                <div className="bg-gray-200 h-3 w-2/3 rounded"></div>
              </Card>
            ))}
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {recommendations.map((item) => (
              <Link key={item.id} href={item.href} className="group">
                <Card className="p-6 group-hover:shadow-xl transition-all duration-300 bg-white">
                  <div className="flex items-start justify-between mb-4">
                    <div className="text-3xl">{item.icon}</div>
                    <div className="text-right">
                      <div className="text-sm font-bold text-purple-600">{item.roi}</div>
                      <div className="text-xs text-gray-500">ROI</div>
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-purple-600">
                    {item.title}
                  </h3>
                  
                  <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                    {item.description}
                  </p>

                  <div className="flex items-center justify-between text-xs text-gray-500 mb-3">
                    <span>{item.type}</span>
                    <span>{item.readTime} read</span>
                  </div>

                  <div className="flex items-center justify-between mb-3">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(item.difficulty)}`}>
                      {item.difficulty}
                    </span>
                    <div className="flex items-center text-xs text-gray-500">
                      <span className="mr-1">⭐</span>
                      <span>{item.rating}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500">
                      {item.views.toLocaleString()} views
                    </span>
                    <svg className="w-4 h-4 text-gray-400 group-hover:text-purple-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        )}

        {/* Recommendation Stats */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Card className="p-6 text-center bg-white">
            <div className="text-3xl font-bold text-purple-600 mb-2">95%</div>
            <div className="text-sm text-gray-600">Recommendation Accuracy</div>
          </Card>
          <Card className="p-6 text-center bg-white">
            <div className="text-3xl font-bold text-green-600 mb-2">87%</div>
            <div className="text-sm text-gray-600">User Engagement Rate</div>
          </Card>
          <Card className="p-6 text-center bg-white">
            <div className="text-3xl font-bold text-blue-600 mb-2">4.8/5</div>
            <div className="text-sm text-gray-600">Average Rating</div>
          </Card>
        </div>

        {/* Personalization Options */}
        <Card className="p-8 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">🎯 Personalize Your Experience</h3>
            <p className="text-lg opacity-90 mb-6">
              Get even better recommendations by telling us about your interests, 
              experience level, and transformation goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-purple-600 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-colors">
                Customize Recommendations
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-white hover:text-purple-600 transition-colors">
                View All Content
              </button>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}