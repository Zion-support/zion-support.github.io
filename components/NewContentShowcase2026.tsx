import React from 'react';
import Link from 'next/link';
import { Clock, ArrowRight, Star, TrendingUp, Zap } from 'lucide-react';

interface ContentItem {
  title: string;
  description: string;
  link: string;
  type: 'article' | 'case-study' | 'guide';
  readTime: string;
  metrics: {
    primary: string;
    secondary: string;
    primaryLabel: string;
    secondaryLabel: string;
  };
  category: string;
  featured?: boolean;
  new?: boolean;
}

const newContent2026: ContentItem[] = [
  {
    title: 'AI Cognitive Computing 2026: Brain-Inspired Intelligence',
    description: 'Next-generation brain-inspired intelligence with human-level reasoning and $20M+ enterprise value creation.',
    link: '/blog/ai-cognitive-computing-2026',
    type: 'article',
    readTime: '32 min read',
    metrics: {
      primary: '98%',
      secondary: '$20M+',
      primaryLabel: 'Accuracy',
      secondaryLabel: 'Value'
    },
    category: 'Cognitive AI',
    featured: true,
    new: true
  },
  {
    title: 'AI Next-Generation Autonomous Systems 2026',
    description: 'Self-managing enterprise infrastructure with 99.9% autonomy and $15M+ operational savings.',
    link: '/blog/ai-next-generation-autonomous-systems-2026',
    type: 'article',
    readTime: '28 min read',
    metrics: {
      primary: '99.9%',
      secondary: '$15M+',
      primaryLabel: 'Autonomy',
      secondaryLabel: 'Savings'
    },
    category: 'Autonomous Systems',
    featured: true,
    new: true
  },
  {
    title: 'AI Cognitive Enterprise Transformation 2026: $25M ROI Case Study',
    description: 'See how GlobalTech achieved $25M ROI with human-level AI decision making and 99.5% automation.',
    link: '/case-studies/ai-cognitive-enterprise-transformation-2026',
    type: 'case-study',
    readTime: '18 min read',
    metrics: {
      primary: '$25M+',
      secondary: '99.5%',
      primaryLabel: 'ROI',
      secondaryLabel: 'Automation'
    },
    category: 'Enterprise AI',
    featured: true,
    new: true
  },
  {
    title: 'AI Agent Orchestration 2026: Multi-Agent System Architecture',
    description: 'Master multi-agent systems with 95% automation efficiency and $5M+ ROI through advanced orchestration patterns.',
    link: '/blog/ai-agent-orchestration-2026',
    type: 'article',
    readTime: '22 min read',
    metrics: {
      primary: '95%',
      secondary: '$5M+',
      primaryLabel: 'Automation',
      secondaryLabel: 'ROI'
    },
    category: 'AI Orchestration',
    new: true
  },
  {
    title: 'AI Quantum Computing 2026: Next-Generation Intelligence',
    description: 'Harness quantum computing for AI breakthroughs with 1000x faster optimization and revolutionary capabilities.',
    link: '/blog/ai-quantum-computing-2026',
    type: 'article',
    readTime: '25 min read',
    metrics: {
      primary: '1000x',
      secondary: '95%',
      primaryLabel: 'Faster',
      secondaryLabel: 'Accuracy'
    },
    category: 'Quantum AI',
    new: true
  },
  {
    title: 'AI Sustainability & Green Tech 2026: Carbon-Neutral Operations',
    description: 'Achieve carbon-neutral AI operations with 80% energy reduction and $2M+ savings through sustainable technology.',
    link: '/blog/ai-sustainability-green-tech-2026',
    type: 'article',
    readTime: '18 min read',
    metrics: {
      primary: '80%',
      secondary: '$2M+',
      primaryLabel: 'Energy Saved',
      secondaryLabel: 'Savings'
    },
    category: 'Green AI',
    new: true
  }
];

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
    'Cognitive AI': 'from-indigo-500 to-purple-500',
    'Autonomous Systems': 'from-purple-500 to-pink-500',
    'Enterprise AI': 'from-green-500 to-blue-500',
    'AI Orchestration': 'from-blue-500 to-cyan-500',
    'Quantum AI': 'from-purple-500 to-indigo-500',
    'Green AI': 'from-green-500 to-emerald-500'
  };
  return colors[category] || 'from-gray-500 to-gray-600';
};

export default function NewContentShowcase2026() {
  const featuredContent = newContent2026.filter(item => item.featured);
  const regularContent = newContent2026.filter(item => !item.featured);

  return (
    <section className="py-20 bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-sm font-medium mb-6">
            <Star className="w-4 h-4 mr-2" />
            EXCLUSIVE 2026 CONTENT
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Revolutionary AI Content for 2026
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover cutting-edge AI innovations, breakthrough case studies, and next-generation 
            technologies that are transforming enterprise operations worldwide.
          </p>
        </div>

        {/* Featured Content Grid */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Featured Content
          </h3>
          <div className="grid lg:grid-cols-3 gap-8">
            {featuredContent.map((item, index) => (
              <Link key={index} to={item.link} className="group">
                <div className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-indigo-200 hover:scale-105">
                  {/* Header with gradient */}
                  <div className={`relative h-32 bg-gradient-to-br ${getCategoryColor(item.category)}`}>
                    <div className="absolute inset-0 bg-black opacity-20"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center text-white">
                        <div className="w-12 h-12 mx-auto mb-2 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                          <span className="text-xl">{getTypeIcon(item.type)}</span>
                        </div>
                        <h4 className="text-lg font-bold">{item.category}</h4>
                      </div>
                    </div>
                    <div className="absolute top-3 left-3 flex gap-2">
                      <span className="bg-green-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                        NEW 2026
                      </span>
                      <span className="bg-yellow-400 text-white px-2 py-1 rounded-full text-xs font-semibold">
                        FEATURED
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${getTypeColor(item.type)}`}>
                        {getTypeIcon(item.type)} {item.type.charAt(0).toUpperCase() + item.type.slice(1).replace('-', ' ')}
                      </span>
                      <span className="text-gray-500 text-sm">{item.readTime}</span>
                    </div>

                    <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors line-clamp-2">
                      {item.title}
                    </h4>
                    
                    <p className="text-gray-600 mb-6 text-sm leading-relaxed line-clamp-3">
                      {item.description}
                    </p>

                    {/* Metrics */}
                    <div className="flex gap-4 mb-6">
                      <div className="text-center flex-1">
                        <div className="text-2xl font-bold text-indigo-600">{item.metrics.primary}</div>
                        <div className="text-xs text-gray-500">{item.metrics.primaryLabel}</div>
                      </div>
                      <div className="text-center flex-1">
                        <div className="text-2xl font-bold text-green-600">{item.metrics.secondary}</div>
                        <div className="text-xs text-gray-500">{item.metrics.secondaryLabel}</div>
                      </div>
                    </div>

                    {/* CTA */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-indigo-600 font-semibold text-sm group-hover:text-indigo-700 transition-colors">
                        Read More →
                      </div>
                      <div className="flex items-center gap-1">
                        <TrendingUp className="w-4 h-4 text-green-500" />
                        <span className="text-xs text-gray-500">Trending</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Regular Content Grid */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Latest Innovations
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regularContent.map((item, index) => (
              <Link key={index} to={item.link} className="group">
                <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-100 hover:border-indigo-200 hover:scale-105">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                      NEW 2026
                    </span>
                  </div>
                  
                  <div className="flex items-center justify-between mb-3">
                    <span className={`text-sm font-medium px-2 py-1 rounded ${getTypeColor(item.type)}`}>
                      {getTypeIcon(item.type)} {item.type.charAt(0).toUpperCase() + item.type.slice(1).replace('-', ' ')}
                    </span>
                    <span className="text-sm text-gray-500">{item.category}</span>
                  </div>

                  <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors line-clamp-2">
                    {item.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {item.description}
                  </p>

                  <div className="flex gap-4 mb-4">
                    <div className="text-center flex-1">
                      <div className="text-lg font-bold text-indigo-600">{item.metrics.primary}</div>
                      <div className="text-xs text-gray-500">{item.metrics.primaryLabel}</div>
                    </div>
                    <div className="text-center flex-1">
                      <div className="text-lg font-bold text-green-600">{item.metrics.secondary}</div>
                      <div className="text-xs text-gray-500">{item.metrics.secondaryLabel}</div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-gray-500">
                      <Clock className="w-4 h-4 mr-1" />
                      {item.readTime}
                    </div>
                    <div className="flex items-center text-indigo-600 font-semibold text-sm group-hover:text-indigo-700 transition-colors">
                      Read More →
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Explore All 2026 AI Innovations</h3>
            <p className="text-lg mb-6 opacity-90">
              Discover comprehensive guides, case studies, and cutting-edge research
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/blog"
                className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center"
              >
                <Zap className="w-5 h-5 mr-2" />
                Browse All Articles
              </Link>
              <Link
                to="/case-studies"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-colors inline-flex items-center justify-center"
              >
                <TrendingUp className="w-5 h-5 mr-2" />
                View Case Studies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}