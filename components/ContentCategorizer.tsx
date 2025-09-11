import React, { useState, useEffect, useMemo } from 'react',
import {
  Search, Filter, Calendar, Tag, TrendingUp, Shield, Code,
  BookOpen, Zap, AlertTriangle, Lightbulb, Settings,
  BarChart3, Globe, Database, Cpu, Rocket, Brain;
} from 'lucide-react',
interface ContentItem {
  id: string,
  title: string,
  href: string,
  desc: string,
  category: string,
  subcategory?: string,
  date: string,
  relevance: 'high' | 'medium' | 'low',
  tags: string[],
  source: string,
type: 'report' | 'update' | 'insight' | 'guide' | 'security' | 'feature';
}
interface ContentCategory {
  id: string,
  name: string,
  icon: any,
  description: string,
  color: string,
  count: number,
subcategories?: string[];
}
const ContentCategorizer: React.FC = () => {
  const [search_term, setSearchTerm] = useState (''),
  const [selected_category, setSelectedCategory] = useState ('all'),
  const [selected_subcategory, setSelectedSubcategory] = useState ('all'),
  const [selected_type, setSelectedType] = useState ('all'),
  const [selectedDateRange, setSelectedDateRange] = useState ('all'),
  const [selected_relevance, setSelectedRelevance] = useState ('all'),
  const [sort_by, setSortBy] = useState<'date' | 'relevance' | 'title'>('date'),
  const [sort_order, setSortOrder] = useState<'asc' | 'desc'>('desc'),
  // Sample content data - in a real implementation, this would come from an API;
  const content_items: ContentItem[] = [;
    {
      id: '1',
      title: 'Structured Data Audit Report',
      href: '/reports / structured - data - audit.json',
      desc: 'Comprehensive JSON - LD coverage analysis and optimization recommendations.',
      category: 'seo',
      subcategory: 'structured - data',
      date: '2025 - 08 - 19',
      relevance: 'high',
      tags: ['seojson - ldschemaaudit'],
      source: 'autonomous - auditor',
      type: 'report';

  // Sample content data - in a real implementation, _this would come from an API
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
      tags: ['seojson-ldschemaaudit'],
      source: 'autonomous-auditor',
      type: 'report'

    },
    {
      id: '2',
      title: 'Security Vulnerability Scan Results',
href: '/reports / security - scan - 2025 - 08 - 19',
      desc: 'Automated security assessment revealing potential vulnerabilities and remediation steps.',
      category: 'security',
      subcategory: 'vulnerability - scan',
      date: '2025 - 08 - 19',
      relevance: 'high',
      tags: ['securityvulnerabilityscanremediation'],
      source: 'security - scanner',
      type: 'security';
    },
    {
      id: '3',
      title: 'AI Model Performance Update',
href: '/reports / ai - model - performance - 2025 - 08 - 19',
      desc: 'Latest performance metrics and optimization insights for deployed AI models.',
      category: 'ai',
      subcategory: 'performance',
      date: '2025 - 08 - 19',
      relevance: 'high',
      tags: ['aiperformanceoptimizationmetrics'],
      source: 'ai - monitor',
      type: 'update';
    },
    {
      id: '4',
      title: 'Feature Deployment Summary',
href: '/reports / feature - deployment - 2025 - 08 - 19',
      desc: 'Overview of newly deployed features and their impact on user experience.',
      category: 'features',
      subcategory: 'deployment',
      date: '2025 - 08 - 19',
      relevance: 'medium',
      tags: ['featuresdeploymentuximpact'],
      source: 'deployment - tracker',
      type: 'feature';
    },
    {
      id: '5',
      title: 'System Health Dashboard',
href: '/reports / system - health - 2025 - 08 - 19',
      desc: 'Real - time system performance metrics and infrastructure health status.',
      category: 'monitoring',
      subcategory: 'system - health',
      date: '2025 - 08 - 19',
      relevance: 'medium',
      tags: ['monitoringperformanceinfrastructurehealth'],
      source: 'health - monitor',
      type: 'report';
    },
    {
      id: '6',
      title: 'User Behavior Insights',
href: '/reports / user - behavior - 2025 - 08 - 19',
      desc: 'Analysis of user interaction patterns and engagement optimization opportunities.',
      category: 'analytics',
      subcategory: 'user - behavior',
      date: '2025 - 08 - 19',
      relevance: 'high',
      tags: ['analyticsuser - behaviorengagementoptimization'],
      source: 'behavior - analyzer',
      type: 'insight';
    }
  ],
  const categories: ContentCategory[] = [;
    {
      id: 'all',
      name: 'All Content',
      icon: Globe,
      description: 'Complete collection of autonomous content',
color: 'from - blue - 500 to - cyan - 500',
      count: content_items.length;
    },
    {
      id: 'seo',
      name: 'SEO & Analytics',
      icon: BarChart3,
      description: 'Search optimization and performance analytics',
color: 'from - green - 500 to - emerald - 500',
      count: content_items.filter (item => item.category === 'seo').length,
      subcategories: ['structured - dataperformancetechnical - seo'];
    },
    {
      id: 'security',
      name: 'Security & Compliance',
      icon: Shield,
      description: 'Security assessments and compliance reports',
color: 'from - red - 500 to - orange - 500',
      count: content_items.filter (item => item.category === 'security').length,
      subcategories: ['vulnerability - scancompliancethreat - detection'];
    },
    {
      id: 'ai',
      name: 'AI & Machine Learning',
      icon: Brain,
      description: 'AI model performance and insights',
color: 'from - purple - 500 to - pink - 500',
      count: content_items.filter (item => item.category === 'ai').length,
      subcategories: ['performancetrainingdeployment'];
    },
    {
      id: 'features',
      name: 'Feature Updates',
      icon: Zap,
      description: 'New features and system updates',
color: 'from - yellow - 500 to - orange - 500',
      count: content_items.filter (item => item.category === 'features').length,
      subcategories: ['deploymentenhancementsroadmap'];
    },
    {
      id: 'monitoring',
      name: 'System Monitoring',
      icon: Cpu,
      description: 'Infrastructure and system health',
color: 'from - indigo - 500 to - purple - 500',
      count: content_items.filter (item => item.category === 'monitoring').length,
      subcategories: ['system - healthperformanceinfrastructure'];
    },
    {
      id: 'analytics',
      name: 'User Analytics',
      icon: TrendingUp,
      description: 'User behavior and engagement insights',
color: 'from - teal - 500 to - cyan - 500',
      count: content_items.filter (item => item.category === 'analytics').length,
      subcategories: ['user - behaviorengagementconversion'];
    }
  ],
  const content_types = [;
    { id: 'all', name: 'All Types', icon: Globe },
    { id: 'report', name: 'Reports', icon: BookOpen },
    { id: 'update', name: 'Updates', icon: Zap },
    { id: 'insight', name: 'Insights', icon: Lightbulb },
    { id: 'guide', name: 'Guides', icon: Code },
    { id: 'security', name: 'Security', icon: Shield },
    { id: 'feature', name: 'Features', icon: TrendingUp }
  ],
const date_ranges = [;
    { id: 'all', name: 'All Time' },
    { id: 'today', name: 'Today' },
    { id: 'week', name: 'This Week' },
    { id: 'month', name: 'This Month' },
    { id: 'quarter', name: 'This Quarter' }
  ],
const relevance_levels = [;
    { id: 'all', name: 'All Relevance', color: 'text - gray - 400' },
    { id: 'high', name: 'High Priority', color: 'text - green - 400' },
    { id: 'medium', name: 'Medium Priority', color: 'text - yellow - 400' },
    { id: 'low', name: 'Low Priority', color: 'text - red - 400' }
  ],
  const filtered_items = useMemo (() => {
    const filtered = content_items.filter (item => {
      const matches_search = item.title.toLowerCase ().includes (search_term.toLowerCase ()) ||;
                          item.desc.toLowerCase ().includes (search_term.toLowerCase ()) ||;
                          item.tags.some (tag => tag.toLowerCase ().includes (search_term.toLowerCase ())),
      const matches_category = selected_category === 'all' || item.category === selected_category,
      const matches_subcategory = selected_subcategory === 'all' || item.subcategory === selected_subcategory,
      const matches_type = selected_type === 'all' || item.type === selected_type,
      const matches_relevance = selected_relevance === 'all' || item.relevance === selected_relevance,
      return matches_search && matches_category && matches_subcategory && matches_type && matches_relevance;
    }),
    // Sort items;
    filtered.sort ((a, b) => {
      let comparison = 0,
      switch (sort_by) {
        case 'date':;
          comparison = new Date (a.date).get_time () - new Date (b.date).get_time (),
          break,
        case 'relevance':;
          const relevance_order = { high: 3, medium: 2, low: 1 },
          comparison = relevance_order[a.relevance] - relevance_order[b.relevance],
          break,
        case 'title':;
          comparison = a.title.locale_compare (b.title),
          break;
      }
      return sort_order === 'asc' ? comparison : -comparison;
    }),
    return filtered;
  }, [search_term, selected_category, selected_subcategory, selected_type, selected_relevance, sort_by, sort_order]),
  const getCategoryIcon = (category: string) =>: any {
    const cat = categories.find (c => c.id === category),
    return cat ? cat.icon : Globe;
  },
  const getRelevanceColor = (relevance: string) =>: any {
    switch (relevance) {
      case 'high': return 'text - green - 400',
      case 'medium': return 'text - yellow - 400',
      case 'low': return 'text - red - 400',
      default: return 'text - gray - 400';
    }
},
  const getTypeIcon = (type: string) =>: any {
    const type_info = content_types.find (t => t.id === type),
    return type_info ? type_info.icon : Globe;
  },
  const clearAllFilters = () =>: any {
    setSearchTerm (''),
    setSelectedCategory ('all'),
    setSelectedSubcategory ('all'),
    setSelectedType ('all'),
    setSelectedDateRange ('all'),
    setSelectedRelevance ('all');
  },
        {/* Advanced Filter Controls */}
        <div className=&quot;grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 4 gap - 4&quot;>;
          {/* Category Filter */}
          <div>;
            <label className=&quot;block text - sm font - medium text - white / 70 mb - 2&quot;>Category</label>;
            <select;
              value={selected_category}
              on_change={(e) => {
                setSelectedCategory (e.target.value),
                setSelectedSubcategory ('all');              }}
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
                {sort_order === 'asc' ? '↑' : '↓'}
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
              </h3>;
              <p className=&quot;text - sm text - white / 75 mb - 4 leading - relaxed & quot;>;
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
                </span>;
                <span className={`flex items - center gap - 1 ${getRelevanceColor (item.relevance)}`}>;
                  <TrendingUp className=&quot;w - 3 h - 3&quot; />;
                  {item.relevance} priority;
                </span>;
              </div>;
              {/* Source and Action */}
              <div className=&quot;flex items - center justify - between & quot;>;
                <span className=&quot;text - xs text - white / 40 & quot;>;
                  Source: {item.source}
                </span>;
                <a;
                  href={item.href}
        })}
      </div>;
      {/* No Results */}
{filtered_items.length === 0 && (
        <div className=&quot;text - center py - 12 & quot;>;
          <div className=&quot;text - white / 40 text - 6xl mb - 4&quot;>🔍</div>;
          <h3 className=&quot;text - xl font - semibold text - white / 70 mb - 2&quot;>No content found</h3>;
          <p className=&quot;text - white / 50 mb - 4&quot;>;
            Try adjusting your search terms or filters to find what you're looking for.;
          </p>;
          <button;
            on_click={clearAllFilters}
            className=&quot;px - 6 py - 2 bg - cyan - 500 / 20 border border - cyan - 500 / 50 rounded - lg text - cyan - 300 hover:bg - cyan - 500 / 30 transition - all duration - 200 & quot;
          >;
            Reset All Filters;
          </button>;
        </div>)}
    </div>);
},
export default ContentCategorizer;
        case 'title':
          comparison = a.title.localeCompare(b.title),
          break
      }
      return sortOrder === 'asc' ? comparison : -comparison
    }),

    return filtered
  }, [searchTerm, selectedCategory, selectedSubcategory, selectedType, selectedRelevance, sortBy, sortOrder]),

  const getCategoryIcon = (category: string) => {
    const cat = categories.find(c => c.id === category)
    return cat ? cat.icon : Globe
  },

  const getRelevanceColor = (relevance: string) => {
    switch (relevance) {
      case 'high': return 'text-green-400',
      case 'medium': return 'text-yellow-400',
      case 'low': return 'text-red-400',
      default: return 'text-gray-400'
    }
  },

  const getTypeIcon = (type: string) => {
    const typeInfo = contentTypes.find(t => t.id === type)
    return typeInfo ? typeInfo.icon : Globe
  },

  const clearAllFilters = () => {
    setSearchTerm(''),
    setSelectedCategory('all'),
    setSelectedSubcategory('all'),
    setSelectedType('all'),
    setSelectedDateRange('all'),
    setSelectedRelevance('all')
  },

  return (
    <div className=&quot;space-y-6&quot;>
      {/* Search and Advanced Filters */}
      <div className=&quot;space-y-4&quot;>
        {/* Search Bar */}
        <div className=&quot;relative&quot;>
          <Search className=&quot;absolute left-3 top-1/2 transform -translate-y-1/2 text-white/50 w-5 h-5&quot; />
          <input
            type=&quot;text&quot;
            placeholder=&quot;Search content by title, description, tags, or keywords...&quot;
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className=&quot;w-full pl-10 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 transition-all duration-200&quot;
          />
        </div>

        {/* Advanced Filter Controls */}
        <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4&quot;>
          {/* Category Filter */}
          <div>
            <label className=&quot;block text-sm font-medium text-white/70 mb-2&quot;>Category</label>
            <select
              value={selectedCategory}
              onChange={(e) => {
                setSelectedCategory(e.target.value),
                setSelectedSubcategory('all')
              }}
              className=&quot;w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 transition-all duration-200&quot;
            >
              {_categories.map(category => (
                <option key={category.id} value={_category.id}>
                  {_category.name} ({_category.count})
                </option>
              ))}
            </select>
          </div>

          {_/* Subcategory Filter */}
          <div>
            <label className=&quot;block text-sm font-medium text-white/70 mb-2&quot;>Subcategory</label>
            <select
              value={selectedSubcategory}
              onChange={(e) => setSelectedSubcategory(e.target.value)}
              className=&quot;w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 transition-all duration-200&quot;
            >
              <option value=&quot;all&quot;>All Subcategories</option>
              {selectedCategory !== 'all' && categories.find(c => c.id === selectedCategory)?.subcategories?.map(sub => (
                <option key={sub} value={sub}>
                  {sub.replace('- ').replace(/\b\w/g, l => l.toUpperCase())}

                </option>
              ))}
            </select>
          </div>

          {_/* Content Type Filter */}
          <div>
            <label className=&quot;block text-sm font-medium text-white/70 mb-2&quot;>Content Type</label>
            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className=&quot;w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 transition-all duration-200&quot;
            >
              {_contentTypes.map(type => (
                <option key={type.id} value={_type.id}>
                  {_type.name}
                </option>
              ))}
            </select>
          </div>

          {_/* Relevance Filter */}
          <div>
            <label className=&quot;block text-sm font-medium text-white/70 mb-2&quot;>Relevance</label>
            <select
              value={selectedRelevance}
              onChange={(e) => setSelectedRelevance(e.target.value)}
              className=&quot;w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 transition-all duration-200&quot;
            >
              {_relevanceLevels.map(level => (
                <option key={level.id} value={_level.id}>
                  {_level.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Sort Controls and Clear Filters */}
        <div className=&quot;flex flex-wrap items-center justify-between gap-4&quot;>
          <div className=&quot;flex items-center gap-4&quot;>
            <div className=&quot;flex items-center gap-2&quot;>
              <label className=&quot;text-sm text-white/70&quot;>Sort by:</label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as 'date' | 'relevance' | 'title')}
                className=&quot;px-3 py-1 bg-white/5 border border-white/10 rounded text-white text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500/50&quot;
              >
                <option value=&quot;date&quot;>Date</option>
                <option value=&quot;relevance&quot;>Relevance</option>
                <option value=&quot;title&quot;>Title</option>
              </select>
              <button
                onClick={() => setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')}
                className=&quot;p-1 bg-white/5 border border-white/10 rounded hover:bg-white/10 transition-colors duration-200&quot;
              >
                {_sortOrder === 'asc' ? '↑' : '↓'}
              </button>
            </div>
          </div>
          
          <button
            onClick={clearAllFilters}
            className=&quot;px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white/70 hover:text-white hover:bg-white/10 transition-all duration-200&quot;
          >
            Clear All Filters
          </button>
        </div>
      </div>

      {_/* Category Pills */}
      <div>
        <div className=&quot;flex flex-wrap gap-2&quot;>
          {categories.map(category => (
            <button
              key={category.id}
              onClick={_() => setSelectedCategory(category.id)}
              className={_`flex items-center gap-2 px-4 py-2 rounded-full border transition-all duration-200 ${
                selectedCategory === category.id
                  ? 'border-cyan-500 bg-cyan-500/20 text-cyan-300'
                  : 'border-white/10 bg-white/5 text-white/70 hover:border-white/20 hover:bg-white/10'}`}
            >
              <category.icon className=&quot;w-4 h-4&quot; />
              {category.name}
              <span className=&quot;text-xs bg-white/10 px-2 py-1 rounded-full&quot;>
                {category.count}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Results Summary */}
      <div className=&quot;text-sm text-white/60&quot;>
        Showing {filteredItems.length} of {contentItems.length} items
        {searchTerm && ` matching &quot;${searchTerm}&quot;`}
        {selectedCategory !== 'all' && ` in ${categories.find(c => c.id === selectedCategory)?.name}`}
        {selectedType !== 'all' && ` of type ${contentTypes.find(t => t.id === selectedType)?.name}`}
      </div>

      {/* Content Grid */}
        {filteredItems.map((item) => {
          const CategoryIcon = getCategoryIcon(item.category)
          const TypeIcon = getTypeIcon(item.type)
          const category = categories.find(c => c.id === item.category)

          return (
            <div key={item.id} className=&quot;group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/10 p-6 backdrop-blur-xl hover:border-cyan-400/30 transition-all duration-300 transform hover:scale-105&quot;>
              <div className=&quot;pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100&quot; />
              
              {/* Header with Category and Type */}
              <div className=&quot;flex items-center justify-between mb-3&quot;>
                <div className=&quot;flex items-center gap-2&quot;>
                  <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${category?.color || 'from-gray-500 to-gray-600'} p-2 flex items-center justify-center`}>
                    <CategoryIcon className=&quot;w-4 h-4 text-white&quot; />
                  </div>
                  <span className=&quot;text-xs text-white/60 uppercase tracking-wider&quot;>
                    {category?.name}
                  </span>
                </div>
                <div className=&quot;flex items-center gap-1 text-xs text-white/50&quot;>
                  <TypeIcon className=&quot;w-3 h-3&quot; />
                  {item.type}
                </div>
              </div>

              {/* Title and Description */}
              <h3 className=&quot;text-lg font-semibold text-white mb-2 group-hover:text-cyan-300 transition-colors duration-200&quot;>