import React from 'react';
import Link from 'next/link';
import { 
  Brain, 
  Zap, 
  Globe, 
  Rocket, 
  Star, 
  Clock, 
  TrendingUp, 
  Users,
  Filter,
  Search,
  Grid,
  List,
  ChevronDown,
  ExternalLink
} from 'lucide-react';

export default function ContentShowcase() {
  const contentItems = [
    {
      id: 1,
      title: 'Multimodal AI Revolution: Beyond Text and Images',
      description: 'Explore how AI systems are integrating vision, audio, and text processing to create more intelligent and context-aware applications.',
      category: 'AI Research',
      readTime: '12 min read',
      views: '2.3k',
      likes: '187',
      featured: true,
      href: '/ai-2026-multimodal-revolution',
      tags: ['AI', 'Multimodal', 'Machine Learning'],
      publishDate: '2026-01-15'
    },
    {
      id: 2,
      title: 'Neural Architecture Search: Automating AI Design',
      description: 'Discover how automated neural architecture search is revolutionizing AI model development and optimization.',
      category: 'AI Engineering',
      readTime: '8 min read',
      views: '1.8k',
      likes: '142',
      featured: false,
      href: '/ai-2026-neural-architecture-search',
      tags: ['AI', 'Neural Networks', 'Automation'],
      publishDate: '2026-01-12'
    },
    {
      id: 3,
      title: 'AI Consciousness: The Next Frontier',
      description: 'Dive deep into the philosophical and technical aspects of AI consciousness and self-awareness.',
      category: 'AI Philosophy',
      readTime: '15 min read',
      views: '3.1k',
      likes: '256',
      featured: true,
      href: '/ai-2026-consciousness-frontier',
      tags: ['AI', 'Consciousness', 'Philosophy'],
      publishDate: '2026-01-10'
    },
    {
      id: 4,
      title: 'Quantum AI: The Future of Computing',
      description: 'Learn how quantum computing is revolutionizing AI algorithms and problem-solving capabilities.',
      category: 'Quantum AI',
      readTime: '10 min read',
      views: '1.9k',
      likes: '134',
      featured: true,
      href: '/quantum-ai-2026-future',
      tags: ['Quantum', 'AI', 'Computing'],
      publishDate: '2026-01-08'
    },
    {
      id: 5,
      title: 'Green AI: Sustainable Technology Solutions',
      description: 'Discover how AI is being used to create more sustainable and environmentally friendly technologies.',
      category: 'Green Tech',
      readTime: '9 min read',
      views: '2.1k',
      likes: '178',
      featured: true,
      href: '/green-ai-sustainability-2026',
      tags: ['Sustainability', 'AI', 'Green Tech'],
      publishDate: '2026-01-05'
    },
    {
      id: 6,
      title: 'Autonomous Business Operations 2026',
      description: 'Explore how businesses are implementing fully autonomous operations using advanced AI and robotics.',
      category: 'Business Automation',
      readTime: '13 min read',
      views: '2.7k',
      likes: '201',
      featured: true,
      href: '/autonomous-business-ops-2026',
      tags: ['Automation', 'Business', 'AI'],
      publishDate: '2026-01-03'
    },
    {
      id: 7,
      title: 'Quantum Machine Learning Algorithms',
      description: 'Explore the latest quantum machine learning algorithms and their practical applications.',
      category: 'Quantum ML',
      readTime: '14 min read',
      views: '1.2k',
      likes: '98',
      featured: false,
      href: '/quantum-ml-algorithms-2026',
      tags: ['Quantum', 'Machine Learning', 'Algorithms'],
      publishDate: '2026-01-01'
    },
    {
      id: 8,
      title: 'Carbon-Neutral AI Infrastructure',
      description: 'Learn about building carbon-neutral AI infrastructure and sustainable computing practices.',
      category: 'Sustainability',
      readTime: '11 min read',
      views: '1.5k',
      likes: '123',
      featured: false,
      href: '/carbon-neutral-ai-infrastructure',
      tags: ['Sustainability', 'Infrastructure', 'AI'],
      publishDate: '2025-12-28'
    },
    {
      id: 9,
      title: 'Intelligent Process Automation',
      description: 'Master the art of intelligent process automation with cutting-edge AI technologies.',
      category: 'Process Automation',
      readTime: '7 min read',
      views: '1.6k',
      likes: '145',
      featured: false,
      href: '/intelligent-process-automation-2026',
      tags: ['Automation', 'Process', 'AI'],
      publishDate: '2025-12-25'
    }
  ];

  const categories = [
    'All',
    'AI Research',
    'AI Engineering',
    'AI Philosophy',
    'Quantum AI',
    'Green Tech',
    'Business Automation',
    'Quantum ML',
    'Sustainability',
    'Process Automation'
  ];

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'AI Research':
      case 'AI Engineering':
      case 'AI Philosophy':
        return Brain;
      case 'Quantum AI':
      case 'Quantum ML':
        return Zap;
      case 'Green Tech':
      case 'Sustainability':
        return Globe;
      case 'Business Automation':
      case 'Process Automation':
        return Rocket;
      default:
        return Star;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'AI Research':
      case 'AI Engineering':
      case 'AI Philosophy':
        return 'from-purple-500 to-pink-500';
      case 'Quantum AI':
      case 'Quantum ML':
        return 'from-blue-500 to-cyan-500';
      case 'Green Tech':
      case 'Sustainability':
        return 'from-green-500 to-emerald-500';
      case 'Business Automation':
      case 'Process Automation':
        return 'from-orange-500 to-red-500';
      default:
        return 'from-gray-500 to-gray-600';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Content Showcase
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our comprehensive library of AI insights, case studies, 
              and implementation guides. Stay ahead with cutting-edge content.
            </p>
          </div>
        </div>
      </header>

      {/* Filters and Search */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search content..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <Filter className="w-5 h-5 text-gray-500" />
                <select className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-purple-500 focus:border-transparent">
                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>

              {/* View Toggle */}
              <div className="flex border border-gray-300 rounded-lg">
                <button className="p-2 bg-purple-600 text-white rounded-l-lg">
                  <Grid className="w-4 h-4" />
                </button>
                <button className="p-2 text-gray-600 hover:bg-gray-50 rounded-r-lg">
                  <List className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content Grid */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {contentItems.map((item) => {
            const Icon = getCategoryIcon(item.category);
            const colorClass = getCategoryColor(item.category);
            
            return (
              <Link
                key={item.id}
                href={item.href}
                className="group bg-white rounded-xl border border-gray-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="p-6">
                  {/* Category and Featured Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <div className={`p-2 rounded-lg bg-gradient-to-r ${colorClass} text-white`}>
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className="ml-3 text-sm font-medium text-gray-600">
                        {item.category}
                      </span>
                    </div>
                    {item.featured && (
                      <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-2 py-1 rounded-full text-xs font-bold flex items-center">
                        <Star className="w-3 h-3 mr-1" />
                        FEATURED
                      </div>
                    )}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors line-clamp-2">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {item.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {item.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Stats and Meta */}
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {item.readTime}
                      </div>
                      <div className="flex items-center">
                        <TrendingUp className="w-4 h-4 mr-1" />
                        {item.views}
                      </div>
                      <div className="flex items-center">
                        <Users className="w-4 h-4 mr-1" />
                        {item.likes}
                      </div>
                    </div>
                    <div className="flex items-center text-purple-600 font-semibold group-hover:translate-x-1 transform duration-300">
                      Read More
                      <ExternalLink className="w-4 h-4 ml-1" />
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105">
            Load More Content
          </button>
        </div>
      </main>

      {/* Newsletter Signup */}
      <section className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Stay Updated with Latest Content
          </h2>
          <p className="text-xl opacity-90 mb-8">
            Get notified when we publish new articles, case studies, and implementation guides.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:ring-2 focus:ring-white focus:outline-none"
            />
            <button className="bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}