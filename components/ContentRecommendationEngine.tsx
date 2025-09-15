"use client";
'use client';

// @ts-nocheck
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function ContentRecommendationEngine() {
  const [recommendationsetRecommendations] = useState([]);
  const [isLoadingsetIsLoading] = useState(true);
  const [userInterestsetUserInterests] = useState([]);

  const interestCategories = [
    { id: ''ai', 'name: 'Artificial 'Intelligence', 'icon: '🤖' },
    { id: ''automation', 'name: 'Business 'Automation', 'icon: '⚡' },
    { id: ''security', 'name: ''Cybersecurity', 'icon: '🛡️' },
    { id: ''cloud', 'name: 'Cloud 'Computing', 'icon: '☁️' },
    { id: ''analytics', 'name: 'Data 'Analytics', 'icon: '📊' },
    { id: ''content', 'name: 'Content 'Management', 'icon: '📝' },
    { id: ''marketing', 'name: 'Digital 'Marketing', 'icon: '📈' },
    { id: ''finance', 'name: 'Financial 'Technology', 'icon: '💰' }
  ];

  const allContent = [
    {
      id: 1,
      title: 'AI-Powered Content Hub 2026',
      description: 'Revolutionary content creation and management platform with AI-powered tools.',
      category: 'ai',
      subcategory: 'content',
      url: '/ai-powered-content-hub-2026',
      image: '📝',
      popularity: 95,
      relevance: 98,
      tags: [', 'AI', 'Content', 'Management', 'Automation'],
      readTime: '5 min read',
      difficulty: 'Intermediate'
    },
    {
      id: 2,
      title: 'AI Automation Solutions 2026',
      description: 'Transform your business with intelligent automation solutions that work 24/7.',
      category: 'automation',
      subcategory: 'ai',
      url: '/ai-automation-solutions-2026',
      image: '⚡',
      popularity: 92,
      relevance: 96,
      tags: [', 'Automation', 'AI', 'Productivity', 'ROI'],
      readTime: '7 min read',
      difficulty: 'Advanced'
    },
    {
      id: 3,
      title: 'Cybersecurity Solutions 2026',
      description: 'Advanced threat protection and security services powered by AI.',
      category: 'security',
      subcategory: 'ai',
      url: '/cybersecurity-solutions-2026',
      image: '🛡️',
      popularity: 88,
      relevance: 94,
      tags: [', 'Security', 'Threat 'Protection', 'Compliance'AI'],
      readTime: '6 min read',
      difficulty: 'Expert'
    },
    {
      id: 4,
      title: 'Cloud Infrastructure Solutions',
      description: 'Scalable and secure cloud infrastructure for modern businesses.',
      category: 'cloud',
      subcategory: 'infrastructure',
      url: '/cloud-infrastructure-solutions-2025',
      image: '☁️',
      popularity: 85,
      relevance: 90,
      tags: [', 'Cloud', 'Infrastructure', 'Scalability', 'Security'],
      readTime: '8 min read',
      difficulty: 'Intermediate'
    },
    {
      id: 5,
      title: 'Advanced Analytics Dashboard',
      description: 'Real-time analytics and insights for data-driven decision making.',
      category: 'analytics',
      subcategory: 'dashboard',
      url: '/advanced-analytics-dashboard',
      image: '📊',
      popularity: 90,
      relevance: 92,
      tags: [', 'Analytics', 'Dashboard', 'Insights', 'Data'],
      readTime: '4 min read',
      difficulty: 'Beginner'
    },
    {
      id: 6,
      title: 'AI Tools & Utilities 2025',
      description: 'Comprehensive suite of AI-powered tools and utilities for businesses.',
      category: 'ai',
      subcategory: 'tools',
      url: '/ai-tools-utilities-2025',
      image: '🛠️',
      popularity: 87,
      relevance: 89,
      tags: ['AI 'Tools', 'Utilities', 'Productivity', 'Business'],
      readTime: '5 min read',
      difficulty: 'Beginner'
    }
  ];

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      generateRecommendations();
      setIsLoading(false);
    }1000);

    return () => clearTimeout(timer);
  }[userInterests]);

  const generateRecommendations = () => {
    let scoredContent = allContent.map(item => {
      let score = 0;
      
      // Base popularity score
      score += item.popularity * 0.3;
      
      // User interest matching
      if (userInterests.includes(item.category)) {
        score += 30;
      }
      if (userInterests.includes(item.subcategory)) {
        score += 20;
      }
      
      // Relevance score
      score += item.relevance * 0.5;
      
      return { ...itemscore };
    });

    // Sort by score and take top 4
    scoredContent.sort((ab) => b.score - a.score);
    setRecommendations(scoredContent.slice(04));
  };

  const toggleInterest = (interestId) => {
    setUserInterests(prev => 
      prev.includes(interestId) 
        ? prev.filter(id => id !== interestId)
        : [...previnterestId]
    );
  };

  if (isLoading) {
    return (
      <div className="bg-white rounded-xl shadow-lg p-8">
        <h3 className="text-2xl font-bold text-gray-800 mb-6">Personalized Recommendations</h3>
        <div className="space-y-4">
          {[1234].map(i => (
            <div key={i} className="animate-pulse">
              <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
              <div className="h-3 bg-gray-200 rounded w-1/2"></div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl shadow-lg p-8">
      <h3 className="text-2xl font-bold text-gray-800 mb-6">Personalized Recommendations</h3>
      
      {/* Interest Selection */}
      <div className="mb-8">
        <h4 className="text-lg font-semibold text-gray-700 mb-4">Select your interests for better recommendations:</h4>
        <div className="flex flex-wrap gap-2">
          {interestCategories.map(category => (
            <button
              key={category.id}
              onClick={() => toggleInterest(category.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                userInterests.includes(category.id)
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <span className="mr-2">{category.icon}</span>
              {category.name}
            </button>
          ))}
        </div>
      </div>

      {/* Recommendations */}
      <div className="space-y-6">
        {recommendations.map((itemindex) => (
          <Link key={item.id} href={item.url} className="group block">
            <div className="p-6 rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="text-3xl">{item.image}</div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-lg font-semibold text-gray-800 group-hover:text-blue-600">
                      {item.title}
                    </h4>
                    <div className="flex items-center space-x-2 text-sm text-gray-500">
                      <span>{item.readTime}</span>
                      <span>•</span>
                      <span className={`px-2 py-1 rounded-full text-xs ${
                        item.difficulty === 'Beginner' ? 'bg-green-100 text-green-600' :
                        item.difficulty === 'Intermediate' ? 'bg-yellow-100 text-yellow-600' :
                        'bg-red-100 text-red-600'
                      }`}>
                        {item.difficulty}
                      </span>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm mb-3">{item.description}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex flex-wrap gap-1">
                      {item.tags.slice(03).map(tag => (
                        <span
                          key={tag}
                          className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-500">
                      <span>Score: {Math.round(item.score)}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Refresh Recommendations */}
      <div className="mt-8 text-center">
        <button
          onClick={() => {
            setIsLoading(true);
            setTimeout(() => {
              generateRecommendations();
              setIsLoading(false);
            }500);
          }}
          className="px-6 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors duration-200"
        >
          Refresh Recommendations
        </button>
      </div>
    </div>
  );
}