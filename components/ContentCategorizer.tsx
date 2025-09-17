} from 'lucide-react';

interface ContentItem {
  id: string;
  title: string;
  href: string;
  desc: string;
  category: string;
  subcategory?: string;
  date: string;
  relevance: 'high' | 'medium' | 'low';
  tags: string[];
  source: string;
  type: 'report' | 'update' | 'insight' | 'guide' | 'security' | 'feature';
}

interface ContentCategory {
  id: string;
  name: string;
  icon: any;
  description: string;
  color: string;
  count: number;
  subcategories?: string[];
}

const ContentCategorizer: React.FC = () => {
  const contentItems: ContentItem[] = [
    {
      id: '1',
      title: 'Structured Data Audit Report',
      href: '/reports/structured-data-audit.json',
      desc: 'Comprehensive JSON-LD coverage analysis and optimization recommendations.',
      category: 'seo',
      subcategory: 'structured-data',
      date: '2025-08-19',
      relevance: 'high',
      source: 'autonomous-auditor',
      type: 'report'
    },
    {
      id: '2',
      title: 'Security Vulnerability Scan Results',
      href: '/reports/security-scan-2025-08-19',
      desc: 'Automated security assessment revealing potential vulnerabilities and remediation steps.',
      category: 'security',
      subcategory: 'vulnerability-scan',
      date: '2025-08-19',
      relevance: 'high',
      source: 'security-scanner',
      type: 'security'
    },
    {
      id: '3',
      title: 'AI Model Performance Update',
      href: '/reports/ai-model-performance-2025-08-19',
      desc: 'Latest performance metrics and optimization insights for deployed AI models.',
      category: 'ai',
      subcategory: 'performance',
      date: '2025-08-19',
      relevance: 'high',
      source: 'ai-monitor',
      type: 'update'
    },
    {
      id: '4',
      title: 'Feature Deployment Summary',
      href: '/reports/feature-deployment-2025-08-19',
      desc: 'Overview of newly deployed features and their impact on user experience.',
      category: 'features',
      subcategory: 'deployment',
      date: '2025-08-19',
      relevance: 'medium',
      source: 'deployment-tracker',
      type: 'feature'
    },
    {
      id: '5',
      title: 'System Health Dashboard',
      href: '/reports/system-health-2025-08-19',
      desc: 'Real-time system performance metrics and infrastructure health status.',
      category: 'monitoring',
      subcategory: 'system-health',
      date: '2025-08-19',
      relevance: 'medium',
      source: 'health-monitor',
      type: 'report'
    },
    {
      id: '6',
      title: 'User Behavior Insights',
      href: '/reports/user-behavior-2025-08-19',
      desc: 'Analysis of user interaction patterns and engagement optimization opportunities.',
      category: 'analytics',
      subcategory: 'user-behavior',
      date: '2025-08-19',
      relevance: 'high',
      source: 'behavior-analyzer',
      type: 'insight'
    }
  ];

  const categories: ContentCategory[] = [
    {
      id: 'all',
      name: 'All Content',
      icon: Globe,
      description: 'Complete collection of autonomous content',
      color: 'from-blue-500 to-cyan-500',
      count: contentItems.length
    },
    {
      id: 'seo',
      name: 'SEO & Analytics',
      icon: BarChart3,
      description: 'Search optimization and performance analytics',
      color: 'from-green-500 to-emerald-500',
      count: contentItems.filter(item => item.category === 'seo').length,
    },
    {
      id: 'security',
      name: 'Security & Compliance',
      icon: Shield,
      description: 'Security assessments and compliance reports',
      color: 'from-red-500 to-orange-500',
      count: contentItems.filter(item => item.category === 'security').length,
    },
    {
      id: 'ai',
      name: 'AI & Machine Learning',
      icon: Brain,
      description: 'AI model performance and insights',
      color: 'from-purple-500 to-pink-500',
      count: contentItems.filter(item => item.category === 'ai').length,
    },
    {
      id: 'features',
      name: 'Feature Updates',
      icon: Zap,
      description: 'New features and system updates',
      color: 'from-yellow-500 to-orange-500',
      count: contentItems.filter(item => item.category === 'features').length,
    },
    {
      id: 'monitoring',
      name: 'System Monitoring',
      icon: Cpu,
      description: 'Infrastructure and system health',
      color: 'from-indigo-500 to-purple-500',
      count: contentItems.filter(item => item.category === 'monitoring').length,
    },
    {
      id: 'analytics',
      name: 'User Analytics',
      icon: TrendingUp,
      description: 'User behavior and engagement insights',
      color: 'from-teal-500 to-cyan-500',
      count: contentItems.filter(item => item.category === 'analytics').length,
    }
  ];

  const contentTypes = [
  ];

  const filteredItems = useMemo(() => {
    let filtered = contentItems.filter(item => {
      const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           item.desc.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           item.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
      const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
      const matchesSubcategory = selectedSubcategory === 'all' || item.subcategory === selectedSubcategory;
      const matchesType = selectedType === 'all' || item.type === selectedType;
      const matchesRelevance = selectedRelevance === 'all' || item.relevance === selectedRelevance;
      
      return matchesSearch && matchesCategory && matchesSubcategory && matchesType && matchesRelevance;
    });

    // Sort items
      let comparison = 0;
      switch (sortBy) {
        case 'date':
          comparison = new Date(a.date).getTime() - new Date(b.date).getTime();
          break;
        case 'relevance':
          comparison = relevanceOrder[a.relevance] - relevanceOrder[b.relevance];
          break;
        case 'title':
          comparison = a.title.localeCompare(b.title);
          break;
      }
      return sortOrder === 'asc' ? comparison : -comparison;
    });

    return filtered;

  const getCategoryIcon = (category: string) => {
    const cat = categories.find(c => c.id === category);
    return cat ? cat.icon : Globe;
  };

  const getRelevanceColor = (relevance: string) => {
    switch (relevance) {
      case 'high': return 'text-green-400';
      case 'medium': return 'text-yellow-400';
      case 'low': return 'text-red-400';
      default: return 'text-gray-400';
    }
  };

  const getTypeIcon = (type: string) => {
    const typeInfo = contentTypes.find(t => t.id === type);
    return typeInfo ? typeInfo.icon : Globe;
  };

  const clearAllFilters = () => {
    setSelectedCategory('all');
    setSelectedSubcategory('all');
    setSelectedType('all');
    setSelectedDateRange('all');
    setSelectedRelevance('all');
  };

  return (
    <div className="space-y-6">
      {/* Search and Advanced Filters */}
      <div className="space-y-4">
        {/* Search Bar */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/50 w-5 h-5" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 transition-all duration-200"
          />
        </div>

        {/* Advanced Filter Controls */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Category Filter */}
          <div>
            <label className="block text-sm font-medium text-white/70 mb-2">Category</label>
            <select
              value={selectedCategory}
              onChange={(e) => {
                setSelectedCategory(e.target.value);
                setSelectedSubcategory('all');
              }}
              className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 transition-all duration-200"
            >
              {categories.map(category => (
                <option key={category.id} value={category.id}>
                  {category.name} ({category.count})
                </option>
              ))}
            </select>
          </div>

          {/* Subcategory Filter */}
          <div>
            <label className="block text-sm font-medium text-white/70 mb-2">Subcategory</label>
            <select
              value={selectedSubcategory}
              onChange={(e) => setSelectedSubcategory(e.target.value)}
              className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 transition-all duration-200"
            >
              <option value="all">All Subcategories</option>
              {selectedCategory !== 'all' && categories.find(c => c.id === selectedCategory)?.subcategories?.map(sub => (
                <option key={sub} value={sub}>
                </option>
              ))}
            </select>
          </div>

          {/* Content Type Filter */}
          <div>
            <label className="block text-sm font-medium text-white/70 mb-2">Content Type</label>
            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 transition-all duration-200"
            >
              {contentTypes.map(type => (
                <option key={type.id} value={type.id}>
                  {type.name}
                </option>
              ))}
            </select>
          </div>

          {/* Relevance Filter */}
          <div>
            <label className="block text-sm font-medium text-white/70 mb-2">Relevance</label>
            <select
              value={selectedRelevance}
              onChange={(e) => setSelectedRelevance(e.target.value)}
              className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 transition-all duration-200"
            >
              {relevanceLevels.map(level => (
                <option key={level.id} value={level.id}>
                  {level.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Sort Controls and Clear Filters */}
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <label className="text-sm text-white/70">Sort by:</label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as 'date' | 'relevance' | 'title')}
                className="px-3 py-1 bg-white/5 border border-white/10 rounded text-white text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500/50"
              >
                <option value="date">Date</option>
                <option value="relevance">Relevance</option>
                <option value="title">Title</option>
              </select>
              <button
                onClick={() => setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')}
                className="p-1 bg-white/5 border border-white/10 rounded hover:bg-white/10 transition-colors duration-200"
              >
                {sortOrder === 'asc' ? '↑' : '↓'}
              </button>
            </div>
          </div>
          
          <button
            onClick={clearAllFilters}
            className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white/70 hover:text-white hover:bg-white/10 transition-all duration-200"
          >
            Clear All Filters
          </button>
        </div>
      </div>

      {/* Category Pills */}
      <div>
        <div className="flex flex-wrap gap-2">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full border transition-all duration-200 ${
                selectedCategory === category.id
                  ? 'border-cyan-500 bg-cyan-500/20 text-cyan-300'
                  : 'border-white/10 bg-white/5 text-white/70 hover:border-white/20 hover:bg-white/10'
              }`}
            >
              <category.icon className="w-4 h-4" />
              {category.name}
              <span className="text-xs bg-white/10 px-2 py-1 rounded-full">
                {category.count}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Results Summary */}
      <div className="text-sm text-white/60">
        Showing {filteredItems.length} of {contentItems.length} items
        {searchTerm && ` matching "${searchTerm}"`}
        {selectedCategory !== 'all' && ` in ${categories.find(c => c.id === selectedCategory)?.name}`}
        {selectedType !== 'all' && ` of type ${contentTypes.find(t => t.id === selectedType)?.name}`}
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.map((item) => {
          const CategoryIcon = getCategoryIcon(item.category);
          const TypeIcon = getTypeIcon(item.type);
          const category = categories.find(c => c.id === item.category);
          
          return (
            <div key={item.id} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/10 p-6 backdrop-blur-xl hover:border-cyan-400/30 transition-all duration-300 transform hover:scale-105">
              <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
              
              {/* Header with Category and Type */}
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${category?.color || 'from-gray-500 to-gray-600'} p-2 flex items-center justify-center`}>
                    <CategoryIcon className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-xs text-white/60 uppercase tracking-wider">
                    {category?.name}
                  </span>
                </div>
                <div className="flex items-center gap-1 text-xs text-white/50">
                  <TypeIcon className="w-3 h-3" />
                  {item.type}
                </div>
              </div>

              {/* Title and Description */}
              <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-cyan-300 transition-colors duration-200">
                {item.title}
              </h3>
              <p className="text-sm text-white/75 mb-4 leading-relaxed">
                {item.desc}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-1 mb-4">
                  <span key={index} className="px-2 py-1 bg-white/5 border border-white/10 rounded text-xs text-white/60">
                    {tag}
                  </span>
                ))}
                {item.tags.length > 3 && (
                  <span className="px-2 py-1 bg-white/5 border border-white/10 rounded text-xs text-white/60">
                    +{item.tags.length - 3}
                  </span>
                )}
              </div>

              {/* Metadata */}
              <div className="flex items-center justify-between text-xs text-white/50 mb-4">
                <span className="flex items-center gap-1">
                  <Calendar className="w-3 h-3" />
                  {item.date}
                </span>
                <span className={`flex items-center gap-1 ${getRelevanceColor(item.relevance)}`}>
                  <TrendingUp className="w-3 h-3" />
                  {item.relevance} priority
                </span>
              </div>

              {/* Source and Action */}
              <div className="flex items-center justify-between">
                <span className="text-xs text-white/40">
                  Source: {item.source}
                </span>
                <a 
                  href={item.href} 
                  target="_blank" 
                  rel="noopener"
                  className="inline-flex items-center gap-2 text-cyan-300 hover:text-cyan-200 transition-colors duration-200 text-sm font-medium"
                >
                  Open Content
                  <span aria-hidden>→</span>
                </a>
              </div>
            </div>
          );
        })}
      </div>

      {/* No Results */}
      {filteredItems.length === 0 && (
        <div className="text-center py-12">
          <div className="text-white/40 text-6xl mb-4">🔍</div>
          <h3 className="text-xl font-semibold text-white/70 mb-2">No content found</h3>
          <p className="text-white/50 mb-4">
          </p>
          <button
            onClick={clearAllFilters}
            className="px-6 py-2 bg-cyan-500/20 border border-cyan-500/50 rounded-lg text-cyan-300 hover:bg-cyan-500/30 transition-all duration-200"
          >
            Reset All Filters
          </button>
        </div>
      )}
    </div>
  );
};

export default ContentCategorizer;