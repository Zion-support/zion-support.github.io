import React, { useState, useEffect } from 'react';
import { TrendingUp, Fire, Clock, ArrowRight, Star, Eye, MessageCircle, Share2 } from 'lucide-react';

interface TrendingTopic {
  id: string;
  title: string;
  category: string;
  engagement: number;
  growth: number;
  posts: number;
  lastUpdated: string;
  tags: string[];
  featured: boolean;
}

interface TrendingTopicsWidget2026Props {
  topics?: TrendingTopic[];
  maxTopics?: number;
  showEngagement?: boolean;
  showGrowth?: boolean;
  autoUpdate?: boolean;
  updateInterval?: number;
}

const TrendingTopicsWidget2026: React.FC<TrendingTopicsWidget2026Props> = ({
  topics = [],
  maxTopics = 8,
  showEngagement = true,
  showGrowth = true,
  autoUpdate = true,
  updateInterval = 30000
}) => {
  const [currentTopics, setCurrentTopics] = useState<TrendingTopic[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  // Default trending topics
  const defaultTopics: TrendingTopic[] = [
    {
      id: '1',
      title: 'Quantum Computing Breakthrough',
      category: 'Quantum Computing',
      engagement: 95,
      growth: 45,
      posts: 127,
      lastUpdated: '2 hours ago',
      tags: ['Quantum', 'Computing', 'Innovation'],
      featured: true
    },
    {
      id: '2',
      title: 'Neural Interface Technology',
      category: 'Emerging Technology',
      engagement: 88,
      growth: 32,
      posts: 89,
      lastUpdated: '4 hours ago',
      tags: ['Neural', 'BCI', 'Interface'],
      featured: true
    },
    {
      id: '3',
      title: 'Synthetic Intelligence Evolution',
      category: 'Artificial Intelligence',
      engagement: 92,
      growth: 28,
      posts: 156,
      lastUpdated: '1 hour ago',
      tags: ['Synthetic', 'AI', 'Intelligence'],
      featured: true
    },
    {
      id: '4',
      title: 'Autonomous Business Operations',
      category: 'Business Automation',
      engagement: 76,
      growth: 41,
      posts: 73,
      lastUpdated: '3 hours ago',
      tags: ['Autonomous', 'Business', 'Automation'],
      featured: false
    },
    {
      id: '5',
      title: 'AI-Powered Cybersecurity',
      category: 'Cybersecurity',
      engagement: 84,
      growth: 23,
      posts: 98,
      lastUpdated: '5 hours ago',
      tags: ['AI', 'Security', 'Cybersecurity'],
      featured: false
    },
    {
      id: '6',
      title: 'Green Technology Revolution',
      category: 'Sustainability',
      engagement: 79,
      growth: 36,
      posts: 64,
      lastUpdated: '6 hours ago',
      tags: ['Green', 'Technology', 'Sustainability'],
      featured: false
    },
    {
      id: '7',
      title: 'Holographic Reality Displays',
      category: 'Immersive Technology',
      engagement: 71,
      growth: 29,
      posts: 45,
      lastUpdated: '8 hours ago',
      tags: ['Holographic', 'Reality', 'Displays'],
      featured: false
    },
    {
      id: '8',
      title: 'Advanced AI Consciousness',
      category: 'Artificial Intelligence',
      engagement: 87,
      growth: 34,
      posts: 112,
      lastUpdated: '1 hour ago',
      tags: ['AI', 'Consciousness', 'Advanced'],
      featured: true
    }
  ];

  useEffect(() => {
    const initialTopics = topics.length > 0 ? topics : defaultTopics;
    setCurrentTopics(initialTopics.slice(0, maxTopics));

    if (autoUpdate) {
      const interval = setInterval(() => {
        updateTopics();
      }, updateInterval);
      return () => clearInterval(interval);
    }
  }, [topics, maxTopics, autoUpdate, updateInterval]);

  const updateTopics = async () => {
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      const updatedTopics = currentTopics.map(topic => ({
        ...topic,
        engagement: Math.max(0, Math.min(100, topic.engagement + (Math.random() - 0.5) * 10)),
        growth: Math.max(0, Math.min(100, topic.growth + (Math.random() - 0.5) * 5)),
        posts: topic.posts + Math.floor(Math.random() * 3),
        lastUpdated: 'Just now'
      }));
      setCurrentTopics(updatedTopics);
      setIsLoading(false);
    }, 1000);
  };

  const getGrowthColor = (growth: number) => {
    if (growth >= 40) return 'text-green-500';
    if (growth >= 20) return 'text-yellow-500';
    return 'text-red-500';
  };

  const getEngagementColor = (engagement: number) => {
    if (engagement >= 90) return 'text-red-500';
    if (engagement >= 70) return 'text-orange-500';
    return 'text-blue-500';
  };

  const getCategoryIcon = (category: string) => {
    switch (category.toLowerCase()) {
      case 'quantum computing':
        return '⚛️';
      case 'artificial intelligence':
        return '🤖';
      case 'emerging technology':
        return '🚀';
      case 'business automation':
        return '⚙️';
      case 'cybersecurity':
        return '🔒';
      case 'sustainability':
        return '🌱';
      case 'immersive technology':
        return '🥽';
      default:
        return '💡';
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-white/20 rounded-lg">
              <TrendingUp className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">Trending Topics</h3>
              <p className="text-blue-100 text-sm">What's hot in tech right now</p>
            </div>
          </div>
          {isLoading && (
            <div className="animate-spin rounded-full h-6 w-6 border-2 border-white border-t-transparent"></div>
          )}
        </div>
      </div>

      {/* Topics List */}
      <div className="divide-y divide-gray-100">
        {currentTopics.map((topic, index) => (
          <div
            key={topic.id}
            className={`p-4 hover:bg-gray-50 transition-colors duration-200 ${
              topic.featured ? 'bg-gradient-to-r from-yellow-50 to-orange-50 border-l-4 border-yellow-400' : ''
            }`}
          >
            <div className="flex items-start justify-between">
              <div className="flex-1 min-w-0">
                {/* Topic Header */}
                <div className="flex items-center space-x-2 mb-2">
                  <span className="text-lg">{getCategoryIcon(topic.category)}</span>
                  <span className="text-xs font-medium text-gray-500 uppercase tracking-wide">
                    {topic.category}
                  </span>
                  {topic.featured && (
                    <div className="flex items-center space-x-1 px-2 py-1 bg-yellow-100 text-yellow-800 text-xs rounded-full">
                      <Star className="w-3 h-3" />
                      <span>Featured</span>
                    </div>
                  )}
                </div>

                {/* Topic Title */}
                <h4 className="font-semibold text-gray-900 mb-2 line-clamp-2">
                  {topic.title}
                </h4>

                {/* Tags */}
                <div className="flex flex-wrap gap-1 mb-3">
                  {topic.tags.slice(0, 3).map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                {/* Stats */}
                <div className="flex items-center space-x-4 text-sm text-gray-600">
                  {showEngagement && (
                    <div className="flex items-center space-x-1">
                      <Fire className={`w-4 h-4 ${getEngagementColor(topic.engagement)}`} />
                      <span className={getEngagementColor(topic.engagement)}>
                        {topic.engagement}%
                      </span>
                    </div>
                  )}
                  {showGrowth && (
                    <div className="flex items-center space-x-1">
                      <TrendingUp className={`w-4 h-4 ${getGrowthColor(topic.growth)}`} />
                      <span className={getGrowthColor(topic.growth)}>
                        +{topic.growth}%
                      </span>
                    </div>
                  )}
                  <div className="flex items-center space-x-1">
                    <MessageCircle className="w-4 h-4" />
                    <span>{topic.posts}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>{topic.lastUpdated}</span>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="ml-4 flex-shrink-0">
                <button className="p-2 text-gray-400 hover:text-blue-500 hover:bg-blue-50 rounded-lg transition-colors duration-200">
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="bg-gray-50 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Clock className="w-4 h-4" />
            <span>Updated {new Date().toLocaleTimeString()}</span>
          </div>
          <button className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-medium text-sm transition-colors duration-200">
            <span>View All Topics</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TrendingTopicsWidget2026;