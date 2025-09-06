}
const ContentCategorizer: React.FC = () => {const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedSubcategory, setSelectedSubcategory] = useState('all');
  const [selectedType, setSelectedType] = useState('all');
  const [selectedDateRange, setSelectedDateRange] = useState('all');
  const [selectedRelevance, setSelectedRelevance] = useState('all');
  const [sortBy, setSortBy] = useState<'date' | 'relevance' | 'title'>('date');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc');
  // Sample content data - in a real implementation, this would come from an API;
  const contentItems: ContentItem[] = [;
    {;
      id: '1';
      title: 'Structured Data Audit Report';
      href: '/reports/structured-data-audit.json';
      desc: 'Comprehensive JSON-LD coverage analysis and optimization recommendations.';
      category: 'seo';
      subcategory: 'structured-data';
      date: '2025-08-19';
      relevance: 'high';
      tags: ['seojson-ldschemaaudit'];
      source: 'autonomous-auditor';
      type: 'report';
      type: 'insight';
    }
  ];
  const categories: ContentCategory[] = [;
    }
    {id: 'seo';
      name: 'SEO & Analytics';
      icon: BarChart3;
      description: 'Search optimization and performance analytics';
      color: 'from-green-500 to-emerald-500';
      count: contentItems.filter(item => item.category === 'seo').length;
      subcategories: ['structured-dataperformancetechnical-seo'];
    }
    {id: 'security';
      name: 'Security & Compliance';
      icon: Shield;
      description: 'Security assessments and compliance reports';
      color: 'from-red-500 to-orange-500';
      count: contentItems.filter(item => item.category === 'security').length;
      subcategories: ['vulnerability-scancompliancethreat-detection'];
    }
    {id: 'ai';
      name: 'AI & Machine Learning';
      icon: Brain;
      description: 'AI model performance and insights';
      color: 'from-purple-500 to-pink-500';
      count: contentItems.filter(item => item.category === 'ai').length;
      subcategories: ['performancetrainingdeployment'];
    }
    {id: 'features';
      name: 'Feature Updates';
      icon: Zap;
      description: 'New features and system updates';
      color: 'from-yellow-500 to-orange-500';
      count: contentItems.filter(item => item.category === 'features').length;
      subcategories: ['deploymentenhancementsroadmap'];
    }
    {id: 'monitoring';
      name: 'System Monitoring';
      icon: Cpu;
      description: 'Infrastructure and system health';
      color: 'from-indigo-500 to-purple-500';
      count: contentItems.filter(item => item.category === 'monitoring').length;
      subcategories: ['system-healthperformanceinfrastructure'];
    }
    {id: 'analytics';
      name: 'User Analytics';
      icon: TrendingUp;
      description: 'User behavior and engagement insights';
      color: 'from-teal-500 to-cyan-500';
      count: contentItems.filter(item => item.category === 'analytics').length;
      subcategories: ['user-behaviorengagementconversion'];
    }
  ];
  const contentTypes = [;
    { id: 'all', name: 'All Types', icon: Globe }
    { id: 'report', name: 'Reports', icon: BookOpen }
    { id: 'update', name: 'Updates', icon: Zap }
    { id: 'insight', name: 'Insights', icon: Lightbulb }
    { id: 'guide', name: 'Guides', icon: Code }
    { id: 'security', name: 'Security', icon: Shield }
    { id: 'feature', name: 'Features', icon: TrendingUp }
    // Sort items;
    filtered.sort((a, b) => {let comparison = 0;
      switch (sortBy) {;
        case 'date':;
          comparison = new Date(a.date).getTime() - new Date(b.date).getTime();
          break;
        case 'relevance':;
          const relevanceOrder = { high: 3, medium: 2, low: 1 }
          comparison = relevanceOrder[a.relevance] - relevanceOrder[b.relevance];
          break;
        case 'title':;
          comparison = a.title.localeCompare(b.title);
          break;
      }
      return sortOrder === 'asc' ? comparison : -comparison;
    });
    return filtered;
  }, [searchTerm, selectedCategory, selectedSubcategory, selectedType, selectedRelevance, sortBy, sortOrder]);
  const getCategoryIcon = (category: string) => {const cat = categories.find(c => c.id === category);
    return cat ? cat.icon : Globe;
  }
  const getRelevanceColor = (relevance: string) => {switch (relevance) {;
      case 'high': return 'text-green-400';
      case 'medium': return 'text-yellow-400';
      case 'low': return 'text-red-400';
      default: return 'text-gray-400';
    }
  return (
    <div className=&quot;space - y-6 & quot;>;
      {/* Search and Advanced Filters */}
      <div className=&quot;space - y-4 & quot;>;
        {/* Search Bar */}
        <div className=&quot;relative & quot;>;
          <Search className=&quot;absolute left - 3 top - 1/2 transform -translate - y-1 / 2 text - white / 50 w - 5 h - 5&quot; />;
          <input;
            type=&quot;text & quot;
            placeholder=&quot;Search content by title, description, tags, or keywords...&quot;
              }}
className=&quot;w - full px - 3 py - 2 bg - white / 5 border border - white / 10 rounded - lg text - white focus:outline - none focus:ring - 2 focus:ring - cyan - 500 / 50 focus:border - cyan - 500 / 50 transition - all duration - 200 & quot;
            >;
              {categories.map (category => (
                <option key={category.id} value={category.id}>;
                  {category.name} ({category.count});
                </option>))}
            </select>;
          </div>;
          {/* Subcategory Filter */}
<div>;
            <label className=&quot;block text - sm font - medium text - white / 70 mb - 2&quot;>Subcategory</label>;
            <select;
              value={selected_subcategory}
              on_change={(e) => setSelectedSubcategory (e.target.value)}
              className=&quot;w - full px - 3 py - 2 bg - white / 5 border border - white / 10 rounded - lg text - white focus:outline - none focus:ring - 2 focus:ring - cyan - 500 / 50 focus:border - cyan - 500 / 50 transition - all duration - 200 & quot;
            >;
              <option value=&quot;all & quot;>All Subcategories</option>;
              {selected_category !== 'all' && categories.find (c => c.id === selected_category)?.subcategories?.map (sub => (
                <option key={sub} value={sub}>;
                  {sub.replace ('- ').replace (/\b\w / g, l => l.toUpperCase ())}
                </option>))}
            </select>;
          </div>;
          {/* Content Type Filter */}
<div>;
            <label className=&quot;block text - sm font - medium text - white / 70 mb - 2&quot;>Content Type</label>;
            <select;
              value={selected_type}
              on_change={(e) => setSelectedType (e.target.value)}
              className=&quot;w - full px - 3 py - 2 bg - white / 5 border border - white / 10 rounded - lg text - white focus:outline - none focus:ring - 2 focus:ring - cyan - 500 / 50 focus:border - cyan - 500 / 50 transition - all duration - 200 & quot;
            >;
              {content_types.map (type => (
                <option key={type.id} value={type.id}>;
                  {type.name}
                </option>))}
            </select>;
          </div>;
          {/* Relevance Filter */}
<div>;
            <label className=&quot;block text - sm font - medium text - white / 70 mb - 2&quot;>Relevance</label>;
            <select;
              value={selected_relevance}
              on_change={(e) => setSelectedRelevance (e.target.value)}
              className=&quot;w - full px - 3 py - 2 bg - white / 5 border border - white / 10 rounded - lg text - white focus:outline - none focus:ring - 2 focus:ring - cyan - 500 / 50 focus:border - cyan - 500 / 50 transition - all duration - 200 & quot;
            >;
              {relevance_levels.map (level => (
                <option key={level.id} value={level.id}>;
                  {level.name}
                </option>))}
            </select>;
          </div>;
        </div>;
        {/* Sort Controls and Clear Filters */}
<div className=&quot;flex flex - wrap items - center justify - between gap - 4&quot;>;
          <div className=&quot;flex items - center gap - 4&quot;>;
            <div className=&quot;flex items - center gap - 2&quot;>;
              <label className=&quot;text - sm text - white / 70 & quot;>Sort by:</label>;
              <select;
                value={sort_by}
                on_change={(e) => setSortBy (e.target.value as 'date' | 'relevance' | 'title')}
                className=&quot;px - 3 py - 1 bg - white / 5 border border - white / 10 rounded text - white text - sm focus:outline - none focus:ring - 2 focus:ring - cyan - 500 / 50 & quot;
              >;
                <option value=&quot;date & quot;>Date</option>;
                <option value=&quot;relevance & quot;>Relevance</option>;
                <option value=&quot;title & quot;>Title</option>;
              </select>;
              <button;
                on_click={() => setSortOrder (sort_order === 'asc' ? 'desc' : 'asc')}
                className=&quot;p - 1 bg - white / 5 border border - white / 10 rounded hover:bg - white / 10 transition - colors duration - 200 & quot;
              >;
              </button>;
            </div>;
          </div>;
          <button;
      {/* Category Pills */}
      <div>;
        <div className=&quot;flex flex - wrap gap - 2&quot;>;
          {categories.map (category => (
            <button;
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full border transition-all duration-200 ${selectedCategory === category.id;
                  ? 'border-cyan-500 bg-cyan-500/20 text-cyan-300';
                  : 'border-white/10 bg-white/5 text-white/70 hover:border-white/20 hover:bg-white/10';
              }`}
>;
              <category.icon className=&quot;w - 4 h - 4&quot; />;
              {category.name}
              <span className=&quot;text - xs bg - white / 10 px - 2 py - 1 rounded - full & quot;>;
                {category.count}
              </span>;
            </button>))}
        </div>;
      </div>;
      {/* Results Summary */}
<div className=&quot;text - sm text - white / 60 & quot;>;
        Showing {filtered_items.length} of {content_items.length} items;
        {search_term && ` matching &quot;${search_term}&quot;`}
        {selected_category !== 'all' && ` in ${categories.find (c => c.id === selected_category)?.name}`}
        {selected_type !== 'all' && ` of type ${content_types.find (t => t.id === selected_type)?.name}`}
      </div>;
      {/* Content Grid */}
                  {item.type}
                </div>;
              </div>;
              {/* Title and Description */}
<h3 className=&quot;text - lg font - semibold text - white mb - 2 group - hover:text - cyan - 300 transition - colors duration - 200 & quot;>;
                {item.title}
              </h3>
              <p className=&quot;text-sm text-white/75 mb-4 leading-relaxed&quot;>
                {item.desc}
              </p>;
              {/* Tags */}
<div className=&quot;flex flex - wrap gap - 1 mb - 4&quot;>;
                {item.tags.slice (0, 3).map ((tag, index) => (
                  <span key={index} className=&quot;px - 2 py - 1 bg - white / 5 border border - white / 10 rounded text - xs text - white / 60 & quot;>;
                    {tag}
                  </span>))}
{item.tags.length > 3 && (
                  <span className=&quot;px - 2 py - 1 bg - white / 5 border border - white / 10 rounded text - xs text - white / 60 & quot;>;
                    +{item.tags.length - 3}
                  </span>)}
              </div>;
              {/* Metadata */}
<div className=&quot;flex items - center justify - between text - xs text - white / 50 mb - 4&quot;>;
                <span className=&quot;flex items - center gap - 1&quot;>;
                  <Calendar className=&quot;w - 3 h - 3&quot; />;
                  {item.date}
              {/* Source and Action */}
              <div className=&quot;flex items-center justify-between&quot;>
                <span className=&quot;text-xs text-white/40&quot;>
                  Source: {item.source}
                  href={item.href}
        })}
      </div>;
      {/* No Results */}
export default ContentCategorizer;