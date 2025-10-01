import React, { useState } from 'react';

const ContentDiscoveryHub: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'blog' | 'case-studies' | 'services'>('all');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { id: 'all', label: 'All Content', icon: '📚' },
    { id: 'blog', label: 'Blog Posts', icon: '📝' },
    { id: 'case-studies', label: 'Case Studies', icon: '💰' },
    { id: 'services', label: 'Services', icon: '🚀' }
  ];

  const featuredContent = [
    {
      id: 1,
      type: 'blog',
      title: 'AI 2026: Quantum Neural Superintelligence Breakthrough',
      description: 'Discover the revolutionary quantum neural superintelligence architecture achieving 99.97% accuracy with $2.1B in enterprise value creation',
      metrics: { accuracy: '99.97%', value: '$2.1B', speed: '1000x' },
      readTime: '18 min read',
      date: '2026-01-15',
      featured: true,
      tags: ['Quantum Computing', 'Neural Networks', 'Superintelligence', 'Breakthrough'],
      link: '/blog/ai-2026-january-quantum-neural-superintelligence-breakthrough',
      category: 'Quantum AI',
      image: '🧠'
    },
    {
      id: 2,
      type: 'case-studies',
      title: 'AI 2026: Quantum Neural Enterprise - $2.1B Success Story',
      description: 'How a Fortune 500 technology company achieved $2.1B in enterprise value through quantum neural superintelligence systems',
      metrics: { value: '$2.1B', accuracy: '99.97%', speed: '1000x' },
      readTime: '12 min read',
      date: '2026-01-15',
      featured: true,
      tags: ['Fortune 500', 'Technology', 'Quantum Neural', 'Success Story'],
      link: '/case-studies/ai-2026-january-quantum-neural-2-1-billion-success',
      category: 'Quantum AI',
      image: '💰'
    },
    {
      id: 3,
      type: 'blog',
      title: 'AI 2026: Synthetic Consciousness & Emotional AI Revolution',
      description: 'Discover the breakthrough in synthetic consciousness achieving 98.4% emotional intelligence and $3.7B in human-AI collaboration value',
      metrics: { consciousness: '99.1%', emotional: '98.4%', value: '$3.7B' },
      readTime: '20 min read',
      date: '2026-02-15',
      featured: true,
      tags: ['Consciousness', 'Emotional AI', 'Human-AI', 'Collaboration'],
      link: '/blog/ai-2026-february-synthetic-consciousness-emotional-ai-revolution',
      category: 'Consciousness AI',
      image: '❤️'
    },
    {
      id: 4,
      type: 'case-studies',
      title: 'AI 2026: Synthetic Consciousness Healthcare - $3.7B Success',
      description: 'How a Fortune 500 healthcare company achieved $3.7B in human-AI collaboration value through synthetic consciousness systems',
      metrics: { value: '$3.7B', consciousness: '99.1%', emotional: '98.4%' },
      readTime: '14 min read',
      date: '2026-02-15',
      featured: true,
      tags: ['Healthcare', 'Consciousness', 'Human-AI', 'Success Story'],
      link: '/case-studies/ai-2026-february-synthetic-consciousness-3-7-billion-success',
      category: 'Consciousness AI',
      image: '🏥'
    },
    {
      id: 5,
      type: 'blog',
      title: 'AI 2026: Autonomous Business Intelligence & Cognitive Analytics',
      description: 'Discover revolutionary autonomous BI systems achieving 99.8% predictive accuracy with $4.2B in autonomous decision value',
      metrics: { accuracy: '99.8%', value: '$4.2B', speed: '2.1s' },
      readTime: '16 min read',
      date: '2026-03-15',
      featured: true,
      tags: ['Business Intelligence', 'Cognitive Analytics', 'Autonomous Systems', 'Predictive AI'],
      link: '/blog/ai-2026-march-autonomous-business-intelligence-cognitive-analytics-revolution',
      category: 'Business Intelligence',
      image: '📊'
    },
    {
      id: 6,
      type: 'case-studies',
      title: 'AI 2026: Autonomous BI Retail - $4.2B Success Story',
      description: 'How a Fortune 500 retail company achieved $4.2B in autonomous decision value through cognitive business intelligence systems',
      metrics: { value: '$4.2B', accuracy: '99.8%', autonomy: '97.3%' },
      readTime: '13 min read',
      date: '2026-03-15',
      featured: true,
      tags: ['Retail', 'Business Intelligence', 'Autonomous Systems', 'Success Story'],
      link: '/case-studies/ai-2026-march-autonomous-business-intelligence-4-2-billion-success',
      category: 'Business Intelligence',
      image: '🛒'
    },
    {
      id: 7,
      type: 'blog',
      title: 'AI 2025: Revolutionary Autonomous Enterprise Breakthrough',
      description: 'Discover the breakthrough in autonomous enterprise systems achieving 98.7% operational autonomy with $127M in proven savings',
      metrics: { autonomy: '98.7%', savings: '$127M', roi: '270%' },
      readTime: '15 min read',
      date: '2025-12-15',
      featured: true,
      tags: ['Autonomous Systems', 'Enterprise AI', 'Cost Savings', 'Breakthrough'],
      link: '/blog/ai-2025-december-revolutionary-autonomous-enterprise-breakthrough',
      category: 'Enterprise AI',
      image: '🚀'
    },
    {
      id: 8,
      type: 'case-studies',
      title: 'AI 2025: Autonomous Enterprise Manufacturing - $127M Success',
      description: 'How a Fortune 500 manufacturing company achieved $127M in savings through revolutionary autonomous enterprise systems',
      metrics: { savings: '$127M', roi: '270%', payback: '4.4 months' },
      readTime: '10 min read',
      date: '2025-12-15',
      featured: true,
      tags: ['Manufacturing', 'Autonomous Systems', 'Enterprise AI', 'Success Story'],
      link: '/case-studies/ai-2025-december-autonomous-enterprise-127-million-success',
      category: 'Enterprise AI',
      image: '🏭'
    }
  ];

  const filteredContent = featuredContent.filter(content => {
    const matchesCategory = selectedCategory === 'all' || content.type === selectedCategory;
    const matchesSearch = content.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         content.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         content.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const getMetricColor = (metric: string) => {
    if (metric.includes('%')) return 'text-blue-400';
    if (metric.includes('$')) return 'text-green-400';
    if (metric.includes('x')) return 'text-purple-400';
    return 'text-orange-400';
  };

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 mb-8">
            <span className="text-blue-400 font-bold text-xl tracking-wider uppercase">
              🔍 CONTENT DISCOVERY HUB
            </span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Discover Our Latest Content
          </h2>
          
          <p className="text-2xl text-gray-300 max-w-4xl mx-auto mb-12">
            Explore breakthrough AI innovations, success stories, and enterprise solutions that are transforming businesses worldwide.
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="relative">
              <input
                type="text"
                placeholder="Search for content, case studies, or services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-6 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
              />
              <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id as any)}
                className={`px-6 py-3 rounded-xl font-bold transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg'
                    : 'bg-white/10 text-gray-300 hover:text-white hover:bg-white/20'
                }`}
              >
                <span className="mr-2">{category.icon}</span>
                {category.label}
              </button>
            ))}
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-12">
          {filteredContent.map((content) => (
            <div key={content.id} className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-blue-500/50 transition-all duration-300 group">
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="text-3xl">
                    {content.image || (content.type === 'blog' ? '📝' : '💰')}
                  </div>
                  <div>
                    <div className={`font-bold text-sm uppercase tracking-wider ${
                      content.type === 'blog' ? 'text-blue-400' : 'text-green-400'
                    }`}>
                      {content.type === 'blog' ? 'BLOG POST' : 'CASE STUDY'}
                    </div>
                    <div className="text-xs text-gray-400 mb-1">
                      {content.category}
                    </div>
                    {content.featured && (
                      <div className="text-purple-400 font-bold text-xs uppercase tracking-wider">
                        ⭐ FEATURED
                      </div>
                    )}
                  </div>
                </div>
                <div className="text-sm text-gray-400">
                  {content.date}
                </div>
              </div>

              {/* Title and Description */}
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">
                {content.title}
              </h3>
              <p className="text-gray-300 mb-6 line-clamp-3">
                {content.description}
              </p>

              {/* Metrics */}
              <div className="grid grid-cols-3 gap-4 mb-6">
                {Object.entries(content.metrics).slice(0, 3).map(([key, value]) => (
                  <div key={key} className="text-center">
                    <div className={`text-xl font-extrabold ${getMetricColor(value)}`}>
                      {value}
                    </div>
                    <div className="text-xs text-gray-400 capitalize">
                      {key.replace(/([A-Z])/g, ' $1').trim()}
                    </div>
                  </div>
                ))}
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {content.tags.slice(0, 3).map((tag, index) => (
                  <span key={index} className="bg-white/10 px-3 py-1 rounded-full text-gray-300 text-sm">
                    {tag}
                  </span>
                ))}
                {content.tags.length > 3 && (
                  <span className="bg-white/10 px-3 py-1 rounded-full text-gray-300 text-sm">
                    +{content.tags.length - 3} more
                  </span>
                )}
              </div>

              {/* Footer */}
              <div className="flex items-center justify-between">
                <div className="text-sm text-gray-400">
                  {content.readTime}
                </div>
                <a 
                  href={content.link}
                  className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-400 hover:to-purple-500 text-white font-bold py-2 px-6 rounded-xl transition-all duration-300 text-sm"
                >
                  Read More →
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Show More Content */}
        <div className="text-center">
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 mb-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              Discover More Content
            </h3>
            <p className="text-gray-300 mb-6">
              Explore our complete library of AI insights, success stories, and enterprise solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/blog" 
                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-400 hover:to-purple-500 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300"
              >
                View All Blog Posts →
              </a>
              <a 
                href="/case-studies" 
                className="bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-400 hover:to-indigo-500 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300"
              >
                View All Case Studies →
              </a>
              <a 
                href="/services" 
                className="bg-gradient-to-r from-indigo-500 to-pink-600 hover:from-indigo-400 hover:to-pink-500 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300"
              >
                Explore Our Services →
              </a>
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm rounded-2xl p-8 border border-blue-500/30">
            <h3 className="text-2xl font-bold text-white mb-4">
              Stay Updated with Latest Breakthroughs
            </h3>
            <p className="text-gray-300 mb-6">
              Get notified about new AI innovations, success stories, and enterprise solutions delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
              />
              <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-400 hover:to-purple-500 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300">
                Subscribe →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentDiscoveryHub;