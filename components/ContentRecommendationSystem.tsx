import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Clock, Star, TrendingUp } from 'lucide-react';
interface ContentItem {
  id: string;
  title: string;
  description: string;
  type: 'article' | 'case-study' | 'guide';
  category: string;
  readTime: number;
  featured: boolean;
  metrics: {
    roi?: string;
    efficiency?: string;
    accuracy?: string;
    savings?: string;
  };
  tags: string[];
  href: string;
  image?: string;
}

const contentItems: ContentItem[] = [
  {
    id: 'ai-2026-advanced-enterprise-automation-mastery',
    title: 'AI 2026 Advanced Enterprise Automation Mastery',
    description: 'Master advanced AI enterprise automation with 95% operational efficiency, $10M+ ROI, and zero-touch business operations.',
    type: 'article',
    category: 'Enterprise Automation',
    readTime: 28,
    featured: true,
    metrics: {
      efficiency: '95%',
      roi: '$10M+'
    },
    tags: ['AI', 'Enterprise Automation', 'ROI', '2026'],
    href: '/blog/ai-2026-advanced-enterprise-automation-mastery'
  },
  {
    id: 'ai-2026-quantum-enhanced-machine-learning-revolution',
    title: 'AI 2026 Quantum-Enhanced Machine Learning Revolution',
    description: 'Discover how quantum-enhanced machine learning is revolutionizing AI with 1000x faster processing and 99.9% accuracy.',
    type: 'article',
    category: 'Quantum AI',
    readTime: 32,
    featured: true,
    metrics: {
      accuracy: '99.9%',
      efficiency: '1000x'
    },
    tags: ['Quantum Computing', 'Machine Learning', 'AI Revolution', '2026'],
    href: '/blog/ai-2026-quantum-enhanced-machine-learning-revolution'
  },
  {
    id: 'ai-2026-enterprise-automation-15-billion-success',
    title: 'AI 2026 Enterprise Automation: $15B Success Story',
    description: 'See how Global Manufacturing Corp achieved $15B ROI with advanced AI enterprise automation and complete business transformation.',
    type: 'case-study',
    category: 'Success Stories',
    readTime: 22,
    featured: true,
    metrics: {
      roi: '$15B',
      efficiency: '95%'
    },
    tags: ['Enterprise Automation', 'AI Success', 'ROI', 'Business Transformation'],
    href: '/case-studies/ai-2026-enterprise-automation-15-billion-success'
  },
  {
    id: 'ai-autonomous-enterprise-2026',
    title: 'AI Autonomous Enterprise 2026: Complete Self-Managing Systems',
    description: 'Transform your enterprise into a fully autonomous, self-managing system with 95% operational automation and $15M+ ROI.',
    type: 'article',
    category: 'Autonomous Systems',
    readTime: 28,
    featured: false,
    metrics: {
      efficiency: '95%',
      roi: '$15M+'
    },
    tags: ['Autonomous Enterprise', 'AI', 'Self-Managing', '2026'],
    href: '/blog/ai-autonomous-enterprise-2026'
  },
  {
    id: 'ai-neural-interfaces-2026',
    title: 'AI Neural Interfaces 2026: Direct Brain-Computer Integration',
    description: 'Revolutionary neural interface technology enabling direct brain-computer communication with 10x productivity gains.',
    type: 'article',
    category: 'Neural Interfaces',
    readTime: 32,
    featured: false,
    metrics: {
      efficiency: '10x',
      accuracy: '95%'
    },
    tags: ['Neural Interfaces', 'Brain-Computer', 'Productivity', '2026'],
    href: '/blog/ai-neural-interfaces-2026'
  },
  {
    id: 'ai-sustainability-transformation-2026',
    title: 'AI Sustainability Transformation 2026: $10M ROI Case Study',
    description: 'See how a Fortune 500 company achieved carbon neutrality and $10M ROI with comprehensive AI sustainability transformation.',
    type: 'case-study',
    category: 'Sustainability',
    readTime: 15,
    featured: false,
    metrics: {
      roi: '$10M',
      efficiency: '100%'
    },
    tags: ['Sustainability', 'Carbon Neutral', 'Fortune 500', '2026'],
    href: '/case-studies/ai-sustainability-transformation-2026'
  }
];

export default function ContentRecommendationSystem() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedType, setSelectedType] = useState('all');
  const [filteredContent, setFilteredContent] = useState<ContentItem[]>(contentItems);
  const [userPreferences, setUserPreferences] = useState({
    interests: [] as string[],
    industry: 'all',
    experience: 'intermediate'
  });

  const categories = ['all', 'Enterprise Automation', 'Quantum AI', 'Success Stories', 'Autonomous Systems', 'Neural Interfaces', 'Sustainability'];
  const types = ['all', 'article', 'case-study', 'guide'];

  useEffect(() => {
    let filtered = contentItems;

    if (selectedCategory !== 'all') {
      filtered = filtered.filter(item => item.category === selectedCategory);
    }

    if (selectedType !== 'all') {
      filtered = filtered.filter(item => item.type === selectedType);
    }

    // Sort by featured first, then by read time
    filtered.sort((a, b) => {
      if (a.featured && !b.featured) return -1;
      if (!a.featured && b.featured) return 1;
      return a.readTime - b.readTime;
    });

    setFilteredContent(filtered);
  }, [selectedCategory, selectedType]);

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'article':
        return '📝';
      case 'case-study':
        return '📊';
      case 'guide':
        return '📖';
      default:
        return '📄';
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'article':
        return 'text-blue-600 bg-blue-100';
      case 'case-study':
        return 'text-green-600 bg-green-100';
      case 'guide':
        return 'text-purple-600 bg-purple-100';
      default:
        return 'text-gray-600 bg-gray-100';
    }
  };

  const getCategoryColor = (category: string) => {
    const colors = {
      'Enterprise Automation': 'border-green-200 hover:border-green-300',
      'Quantum AI': 'border-purple-200 hover:border-purple-300',
      'Success Stories': 'border-blue-200 hover:border-blue-300',
      'Autonomous Systems': 'border-indigo-200 hover:border-indigo-300',
      'Neural Interfaces': 'border-pink-200 hover:border-pink-300',
      'Sustainability': 'border-teal-200 hover:border-teal-300'
    };
    return colors[category as keyof typeof colors] || 'border-gray-200 hover:border-gray-300';
  };

  return (
    <div className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-medium mb-6">
            <TrendingUp className="w-4 h-4 mr-2" />
            AI-Powered Recommendations
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Personalized Content Recommendations
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover content tailored to your interests and industry. Our AI analyzes your preferences to suggest the most relevant articles and case studies.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <div className="flex flex-wrap gap-2">
            <span className="text-sm font-medium text-gray-700 mr-2">Category:</span>
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {category === 'all' ? 'All Categories' : category}
              </button>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <div className="flex flex-wrap gap-2">
            <span className="text-sm font-medium text-gray-700 mr-2">Type:</span>
            {types.map(type => (
              <button
                key={type}
                onClick={() => setSelectedType(type)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedType === type
                    ? 'bg-purple-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {type === 'all' ? 'All Types' : type.charAt(0).toUpperCase() + type.slice(1).replace('-', ' ')}
              </button>
            ))}
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredContent.map((item) => (
            <Link key={item.id} href={item.href} className="group">
              <div className={`bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border ${getCategoryColor(item.category)} hover:scale-105`}>
                {item.featured && (
                  <div className="flex items-center gap-2 mb-4">
                    <Star className="w-4 h-4 text-yellow-500 fill-current" />
                    <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                      FEATURED
                    </span>
                  </div>
                )}
                
                <div className="flex items-center gap-2 mb-3">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getTypeColor(item.type)}`}>
                    {getTypeIcon(item.type)} {item.type.charAt(0).toUpperCase() + item.type.slice(1).replace('-', ' ')}
                  </span>
                  <span className="text-sm text-gray-500">{item.category}</span>
                </div>

                <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                  {item.title}
                </h3>

                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {item.description}
                </p>

                {item.metrics && (
                  <div className="flex gap-4 mb-4">
                    {Object.entries(item.metrics).map(([key, value]) => (
                      <div key={key} className="text-center">
                        <div className="text-lg font-bold text-blue-600">{value}</div>
                        <div className="text-xs text-gray-500 capitalize">{key}</div>
                      </div>
                    ))}
                  </div>
                )}

                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-gray-500">
                    <Clock className="w-4 h-4 mr-1" />
                    {item.readTime} min read
                  </div>
                  <div className="flex items-center text-blue-600 font-semibold text-sm group-hover:text-blue-700 transition-colors">
                    Read More →
                  </div>
                </div>

                <div className="mt-4 flex flex-wrap gap-1">
                  {item.tags.slice(0, 3).map(tag => (
                    <span key={tag} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Want More Personalized Recommendations?
            </h3>
            <p className="text-gray-600 mb-6">
              Get AI-powered content recommendations tailored to your specific industry, role, and interests.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                Get Personalized Feed
              </button>
              <button className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                Browse All Content
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}