import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Clock, ArrowRight, Star, TrendingUp } from 'lucide-react';

interface ContentItem {
  id: string;
  title: string;
  type: 'blog' | 'case-study' | 'guide';
  category: string;
  readTime: number;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  rating: number;
  views: number;
  url: string;
  description: string;
  tags: string[];
  featured?: boolean;
  trending?: boolean;
}

interface UserPreferences {
  interests: string[];
  experience: 'beginner' | 'intermediate' | 'advanced';
  role: string;
  industry: string;
}

export default function PersonalizedContentRecommendation() {
  const [userPreferences, setUserPreferences] = useState<UserPreferences>({
    interests: [],
    experience: 'intermediate',
    role: '',
    industry: ''
  });
  const [recommendations, setRecommendations] = useState<ContentItem[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);

  const availableInterests = [
    'AI Neural Interfaces', 'Space Technology', 'Quantum Computing', 'Autonomous Systems',
    'Enterprise Automation', 'Cognitive Enhancement', 'Robotics', 'Data Analytics',
    'Cybersecurity', 'Sustainability', 'FinTech', 'Healthcare AI', 'Manufacturing AI'
  ];

  const allContent: ContentItem[] = [
    {
      id: '1',
      title: 'AI Neural Interfaces 2026: Brain-Computer Integration Revolution',
      type: 'blog',
      category: 'AI Neural Interfaces',
      readTime: 28,
      difficulty: 'advanced',
      rating: 4.9,
      views: 15420,
      url: '/blog/ai-neural-interfaces-2026',
      description: 'Explore the cutting-edge world of AI neural interfaces and brain-computer integration with 95% accuracy.',
      tags: ['neural interfaces', 'brain-computer interface', 'cognitive enhancement'],
      featured: true,
      trending: true
    },
    {
      id: '2',
      title: 'AI Space Technology 2026: Autonomous Space Operations',
      type: 'blog',
      category: 'Space Technology',
      readTime: 32,
      difficulty: 'advanced',
      rating: 4.8,
      views: 12850,
      url: '/blog/ai-space-tech-2026',
      description: 'Discover how AI is revolutionizing space exploration with 99.9% reliability and $10B+ opportunities.',
      tags: ['space technology', 'autonomous systems', 'satellite AI'],
      featured: true
    },
    {
      id: '3',
      title: 'AI Neural Interface Success: $15M ROI with 95% Enhancement',
      type: 'case-study',
      category: 'AI Neural Interfaces',
      readTime: 18,
      difficulty: 'intermediate',
      rating: 4.9,
      views: 9850,
      url: '/case-studies/ai-neural-interface-success-2026',
      description: 'See how a Fortune 500 company achieved $15M ROI with AI neural interfaces.',
      tags: ['case study', 'neural interfaces', 'manufacturing', 'ROI'],
      featured: true
    },
    {
      id: '4',
      title: 'AI Enterprise Automation 2026: Complete Business Transformation',
      type: 'blog',
      category: 'Enterprise Automation',
      readTime: 18,
      difficulty: 'intermediate',
      rating: 4.7,
      views: 11200,
      url: '/blog/ai-enterprise-automation-2026',
      description: 'Transform your enterprise with AI automation achieving 95% efficiency and $5M+ savings.',
      tags: ['enterprise automation', 'business transformation', 'AI implementation'],
      trending: true
    },
    {
      id: '5',
      title: 'AI Autonomous Enterprise Success: $25M ROI Case Study',
      type: 'case-study',
      category: 'Autonomous Systems',
      readTime: 30,
      difficulty: 'advanced',
      rating: 4.8,
      views: 8750,
      url: '/case-studies/ai-autonomous-enterprise-success-2026',
      description: 'Fortune 500 case study showing $25M ROI with autonomous AI systems.',
      tags: ['autonomous systems', 'case study', 'enterprise AI', 'ROI']
    },
    {
      id: '6',
      title: 'AI Quantum Computing 2026: Next-Generation Intelligence',
      type: 'blog',
      category: 'Quantum Computing',
      readTime: 25,
      difficulty: 'advanced',
      rating: 4.9,
      views: 14200,
      url: '/blog/ai-quantum-computing-2026',
      description: 'Harness quantum computing for AI breakthroughs with 1000x faster optimization.',
      tags: ['quantum computing', 'AI optimization', 'next-generation'],
      featured: true,
      trending: true
    }
  ];

  const generateRecommendations = async () => {
    setIsLoading(true);
    
    // Simulate AI recommendation delay
    await new Promise(resolve => setTimeout(resolve, 1500));

    let filteredContent = allContent;

    // Filter by interests
    if (userPreferences.interests.length > 0) {
      filteredContent = filteredContent.filter(item =>
        userPreferences.interests.some(interest =>
          item.category.includes(interest) || 
          item.tags.some(tag => tag.toLowerCase().includes(interest.toLowerCase()))
        )
      );
    }

    // Filter by experience level
    filteredContent = filteredContent.filter(item => {
      if (userPreferences.experience === 'beginner') {
        return item.difficulty === 'beginner' || item.difficulty === 'intermediate';
      } else if (userPreferences.experience === 'advanced') {
        return item.difficulty === 'advanced' || item.difficulty === 'intermediate';
      }
      return true;
    });

    // Sort by relevance score (combination of rating, views, and featured status)
    const scoredContent = filteredContent.map(item => ({
      ...item,
      relevanceScore: (item.rating * 0.4) + 
                     (Math.log(item.views) * 0.3) + 
                     (item.featured ? 0.2 : 0) + 
                     (item.trending ? 0.1 : 0)
    }));

    scoredContent.sort((a, b) => b.relevanceScore - a.relevanceScore);

    setRecommendations(scoredContent.slice(0, 6));
    setIsLoading(false);
  };

  const handleInterestToggle = (interest: string) => {
    setUserPreferences(prev => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter(i => i !== interest)
        : [...prev.interests, interest]
    }));
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'beginner': return 'bg-green-100 text-green-800';
      case 'intermediate': return 'bg-yellow-100 text-yellow-800';
      case 'advanced': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'blog': return '📝';
      case 'case-study': return '📊';
      case 'guide': return '📚';
      default: return '📄';
    }
  };

  useEffect(() => {
    if (userPreferences.interests.length > 0) {
      generateRecommendations();
    }
  }, [userPreferences]);

  return (
    <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-200">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Personalized AI Content Recommendations
        </h2>
        <p className="text-lg text-gray-600">
          Discover content tailored to your interests and expertise level
        </p>
      </div>

      {/* Preferences Panel */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-semibold text-gray-900">Your Preferences</h3>
          <button
            onClick={() => setShowPreferences(!showPreferences)}
            className="text-blue-600 hover:text-blue-700 font-medium"
          >
            {showPreferences ? 'Hide' : 'Customize'}
          </button>
        </div>

        {showPreferences && (
          <div className="bg-gray-50 rounded-xl p-6 space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Areas of Interest
              </label>
              <div className="flex flex-wrap gap-2">
                {availableInterests.map(interest => (
                  <button
                    key={interest}
                    onClick={() => handleInterestToggle(interest)}
                    className={`px-3 py-2 rounded-full text-sm font-medium transition-colors ${
                      userPreferences.interests.includes(interest)
                        ? 'bg-blue-600 text-white'
                        : 'bg-white text-gray-700 border border-gray-300 hover:border-blue-300'
                    }`}
                  >
                    {interest}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Experience Level
                </label>
                <select
                  value={userPreferences.experience}
                  onChange={(e) => setUserPreferences(prev => ({
                    ...prev,
                    experience: e.target.value as 'beginner' | 'intermediate' | 'advanced'
                  }))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                >
                  <option value="beginner">Beginner</option>
                  <option value="intermediate">Intermediate</option>
                  <option value="advanced">Advanced</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Role
                </label>
                <input
                  type="text"
                  value={userPreferences.role}
                  onChange={(e) => setUserPreferences(prev => ({
                    ...prev,
                    role: e.target.value
                  }))}
                  placeholder="e.g., CTO, Engineer, Manager"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Recommendations */}
      {isLoading ? (
        <div className="text-center py-12">
          <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Analyzing your preferences and generating personalized recommendations...</p>
        </div>
      ) : recommendations.length > 0 ? (
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-semibold text-gray-900">
              Recommended for You
            </h3>
            <span className="text-sm text-gray-500">
              {recommendations.length} recommendations
            </span>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {recommendations.map((item, index) => (
              <Link key={item.id} href={item.url} className="group">
                <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:scale-105">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{getTypeIcon(item.type)}</span>
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className={`px-2 py-1 rounded-full text-xs font-semibold ${getDifficultyColor(item.difficulty)}`}>
                            {item.difficulty}
                          </span>
                          {item.featured && (
                            <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                              <Star className="w-3 h-3" />
                              Featured
                            </span>
                          )}
                          {item.trending && (
                            <span className="bg-red-100 text-red-800 px-2 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                              <TrendingUp className="w-3 h-3" />
                              Trending
                            </span>
                          )}
                        </div>
                        <div className="text-sm text-gray-500">
                          {item.category} • {item.readTime} min read
                        </div>
                      </div>
                    </div>
                  </div>

                  <h4 className="text-lg font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {item.title}
                  </h4>

                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {item.description}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span>{item.rating}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>{item.readTime}m</span>
                      </div>
                      <span>{item.views.toLocaleString()} views</span>
                    </div>
                    <div className="flex items-center text-blue-600 font-semibold text-sm group-hover:text-blue-700 transition-colors">
                      Read More
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1 mt-3">
                    {item.tags.slice(0, 3).map(tag => (
                      <span key={tag} className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">
                        #{tag}
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
          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-2xl">🎯</span>
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            Select Your Interests
          </h3>
          <p className="text-gray-600 mb-4">
            Choose your areas of interest above to get personalized content recommendations
          </p>
          <button
            onClick={() => setShowPreferences(true)}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Get Started
          </button>
        </div>
      )}

      {recommendations.length > 0 && (
        <div className="mt-8 pt-6 border-t border-gray-200">
          <div className="text-center">
            <h4 className="text-lg font-semibold text-gray-900 mb-4">
              Want More Personalized Content?
            </h4>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/blog"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Browse All Content
              </Link>
              <button
                onClick={() => setShowPreferences(true)}
                className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                Update Preferences
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}