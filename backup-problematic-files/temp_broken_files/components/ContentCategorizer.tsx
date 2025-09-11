>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======import React, { useState, useEffect, useMemo } from 'react',;
import {;
  Search, Filter, Calendar, Tag, TrendingUp, Shield, Code,;
  BookOpen, Zap, AlertTriangle, Lightbulb, Settings,;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======  BarChart3, Globe, Database, Cpu, Rocket, Brain;
} from 'lucide-react';
interface ContentItem {id: string;
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
import React, { useState, useEffect, useMemo } from 'react',
import { 
  Search, Filter, Calendar, Tag, TrendingUp, Shield, Code,
  BookOpen, Zap, AlertTriangle, Lightbulb, Settings,
  BarChart3, Globe, Database, Cpu, Rocket, Brain
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
  type: 'report' | 'update' | 'insight' | 'guide' | 'security' | 'feature'
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
:backup-problematic-files/temp_broken_files/components/ContentCategorizer.tsx
:backup-problematic-files/temp_broken_files/components/ContentCategorizer.tsx
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
}
interface ContentCategory {id: string;
  name: string;
  icon: any;
  description: string;
  color: string;
  count: number;
  subcategories?: string[];
}
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======;
const ContentCategorizer: React.FC = () => {;
  const [searchTerm, setSearchTerm] = useState(''),;
  const [selectedCategory, setSelectedCategory] = useState('all'),;
  const [selectedSubcategory, setSelectedSubcategory] = useState('all'),;
  const [selectedType, setSelectedType] = useState('all'),;
  const [selectedDateRange, setSelectedDateRange] = useState('all'),;
  const [selectedRelevance, setSelectedRelevance] = useState('all'),;
  const [sortBy, setSortBy] = useState<'date' | 'relevance' | 'title'>('date'),;
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc'),;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======  // Sample content data - in a real implementation, this would come from an API;
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
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======    },;
    {;
      id: '2',;
      title: 'Security Vulnerability Scan Results',;
      href: '/reports/security-scan-2025-08-19',;
      desc: 'Automated security assessment revealing potential vulnerabilities and remediation steps.',;
      category: 'security',;
      subcategory: 'vulnerability-scan',;
      date: '2025-08-19',;
      relevance: 'high',;
      tags: ['securityvulnerabilityscanremediation'],;
      source: 'security-scanner',;
      type: 'security';
    },;
    {;
      id: '3',;
      title: 'AI Model Performance Update',;
      href: '/reports/ai-model-performance-2025-08-19',;
      desc: 'Latest performance metrics and optimization insights for deployed AI models.',;
      category: 'ai',;
      subcategory: 'performance',;
      date: '2025-08-19',;
      relevance: 'high',;
      tags: ['aiperformanceoptimizationmetrics'],;
      source: 'ai-monitor',;
      type: 'update';
    },;
    {;
      id: '4',;
      title: 'Feature Deployment Summary',;
      href: '/reports/feature-deployment-2025-08-19',;
      desc: 'Overview of newly deployed features and their impact on user experience.',;
      category: 'features',;
      subcategory: 'deployment',;
      date: '2025-08-19',;
      relevance: 'medium',;
      tags: ['featuresdeploymentuximpact'],;
      source: 'deployment-tracker',;
      type: 'feature';
    },;
    {;
      id: '5',;
      title: 'System Health Dashboard',;
      href: '/reports/system-health-2025-08-19',;
      desc: 'Real-time system performance metrics and infrastructure health status.',;
      category: 'monitoring',;
      subcategory: 'system-health',;
      date: '2025-08-19',;
      relevance: 'medium',;
      tags: ['monitoringperformanceinfrastructurehealth'],;
      source: 'health-monitor',;
      type: 'report';
    },;
    {;
      id: '6',;
      title: 'User Behavior Insights',;
      href: '/reports/user-behavior-2025-08-19',;
      desc: 'Analysis of user interaction patterns and engagement optimization opportunities.',;
      category: 'analytics',;
      subcategory: 'user-behavior',;
      date: '2025-08-19',;
      relevance: 'high',;
      tags: ['analyticsuser-behaviorengagementoptimization'],;
      source: 'behavior-analyzer',;
      type: 'insight';
=======
const ContentCategorizer: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState(''),
  const [selectedCategory, setSelectedCategory] = useState('all'),
  const [selectedSubcategory, setSelectedSubcategory] = useState('all'),
  const [selectedType, setSelectedType] = useState('all'),
  const [selectedDateRange, setSelectedDateRange] = useState('all'),
  const [selectedRelevance, setSelectedRelevance] = useState('all'),
  const [sortBy, setSortBy] = useState<'date' | 'relevance' | 'title'>('date'),
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc'),
  // Sample content data - in a real implementation, this would come from an API,
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
      href: '/reports/security-scan-2025-08-19',
      desc: 'Automated security assessment revealing potential vulnerabilities and remediation steps.',
      category: 'security',
      subcategory: 'vulnerability-scan',
      date: '2025-08-19',
      relevance: 'high',
      tags: ['securityvulnerabilityscanremediation'],
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
      tags: ['aiperformanceoptimizationmetrics'],
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
      tags: ['featuresdeploymentuximpact'],
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
      tags: ['monitoringperformanceinfrastructurehealth'],
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
      tags: ['analyticsuser-behaviorengagementoptimization'],
      source: 'behavior-analyzer',
      type: 'insight'
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    }
    {id: '2';
      title: 'Security Vulnerability Scan Results';
      href: '/reports/security-scan-2025-08-19';
      desc: 'Automated security assessment revealing potential vulnerabilities and remediation steps.';
      category: 'security';
      subcategory: 'vulnerability-scan';
      date: '2025-08-19';
      relevance: 'high';
      tags: ['securityvulnerabilityscanremediation'];
      source: 'security-scanner';
      type: 'security';
    }
    {id: '3';
      title: 'AI Model Performance Update';
      href: '/reports/ai-model-performance-2025-08-19';
      desc: 'Latest performance metrics and optimization insights for deployed AI models.';
      category: 'ai';
      subcategory: 'performance';
      date: '2025-08-19';
      relevance: 'high';
      tags: ['aiperformanceoptimizationmetrics'];
      source: 'ai-monitor';
      type: 'update';
    }
    {id: '4';
      title: 'Feature Deployment Summary';
      href: '/reports/feature-deployment-2025-08-19';
      desc: 'Overview of newly deployed features and their impact on user experience.';
      category: 'features';
      subcategory: 'deployment';
      date: '2025-08-19';
      relevance: 'medium';
      tags: ['featuresdeploymentuximpact'];
      source: 'deployment-tracker';
      type: 'feature';
    }
    {id: '5';
      title: 'System Health Dashboard';
      href: '/reports/system-health-2025-08-19';
      desc: 'Real-time system performance metrics and infrastructure health status.';
      category: 'monitoring';
      subcategory: 'system-health';
      date: '2025-08-19';
      relevance: 'medium';
      tags: ['monitoringperformanceinfrastructurehealth'];
      source: 'health-monitor';
      type: 'report';
    }
    {id: '6';
      title: 'User Behavior Insights';
      href: '/reports/user-behavior-2025-08-19';
      desc: 'Analysis of user interaction patterns and engagement optimization opportunities.';
      category: 'analytics';
      subcategory: 'user-behavior';
      date: '2025-08-19';
      relevance: 'high';
      tags: ['analyticsuser-behaviorengagementoptimization'];
      source: 'behavior-analyzer';
      type: 'insight';
    }
  ];
  const categories: ContentCategory[] = [;
    {id: 'all';
      name: 'All Content';
      icon: Globe;
      description: 'Complete collection of autonomous content';
      color: 'from-blue-500 to-cyan-500';
      count: contentItems.length;
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
  ];
  const dateRanges = [;
    { id: 'all', name: 'All Time' }
    { id: 'today', name: 'Today' }
    { id: 'week', name: 'This Week' }
    { id: 'month', name: 'This Month' }
    { id: 'quarter', name: 'This Quarter' }
  ];
  const relevanceLevels = [;
    { id: 'all', name: 'All Relevance', color: 'text-gray-400' }
    { id: 'high', name: 'High Priority', color: 'text-green-400' }
    { id: 'medium', name: 'Medium Priority', color: 'text-yellow-400' }
    { id: 'low', name: 'Low Priority', color: 'text-red-400' }
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  ],;
  const filteredItems = useMemo(() => {;
    const filtered = contentItems.filter(item => {;
      const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||;
                           item.desc.toLowerCase().includes(searchTerm.toLowerCase()) ||;
                           item.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase())),;
      const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory,;
      const matchesSubcategory = selectedSubcategory === 'all' || item.subcategory === selectedSubcategory,;
      const matchesType = selectedType === 'all' || item.type === selectedType,;
      const matchesRelevance = selectedRelevance === 'all' || item.relevance === selectedRelevance,;
=======  ],

  const filteredItems = useMemo(() => {
    const filtered = contentItems.filter(item => {
      const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           item.desc.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           item.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase())),
      const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory,
      const matchesSubcategory = selectedSubcategory === 'all' || item.subcategory === selectedSubcategory,
      const matchesType = selectedType === 'all' || item.type === selectedType,
      const matchesRelevance = selectedRelevance === 'all' || item.relevance === selectedRelevance,
      
      return matchesSearch && matchesCategory && matchesSubcategory && matchesType && matchesRelevance
    }),

    // Sort items,
filtered.sort((a, b) => {
      let comparison = 0,      switch (sortBy) {
        case 'date':
          comparison = new Date(a.date).getTime() - new Date(b.date).getTime(),
          break,
        case 'relevance':
          const relevanceOrder = { high: 3, medium: 2, low: 1 },
          comparison = relevanceOrder[a.relevance] - relevanceOrder[b.relevance],
          break,        case 'title':
          comparison = a.title.localeCompare(b.title),
          break      }
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
}
  const getTypeIcon = (type: string) => {
    const typeInfo = contentTypes.find(t => t.id === type)
    return typeInfo ? typeInfo.icon : Globe
  }
  const clearAllFilters = () => {
    setSearchTerm('')
    setSelectedCategory('all')
    setSelectedSubcategory('all')
    setSelectedType('all')
    setSelectedDateRange('all')
    setSelectedRelevance('all')
  }
  return (
    <div className=&quot;space-y-6&quot;>
      {/* Search and Advanced Filters */}
      <div className=&quot;space-y-4&quot;>
        {/* Search Bar */}
        <div className=&quot;relative&quot;>
          <Search className=&quot;absolute left-3 top-1/2 transform -translate-y-1/2 text-white/50 w-5 h-5&quot; />
          <input,
type=&quot;text&quot;
            placeholder=&quot;Search content by title, description, tags, or keywords...&quot;
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className=&quot;w-full pl-10 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 transition-all duration-200&quot;
          />
        </div>
        {/* Advanced Filter Controls */}
        <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4&quot;>
          {/* Category Filter */}          <div>
            <label className=&quot;block text-sm font-medium text-white/70 mb-2&quot;>Category</label>
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            <select,
value={selectedCategory}
              onChange={(e) => {
                setSelectedCategory(e.target.value),
                setSelectedSubcategory('all')
              }}
              className=&quot;w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 transition-all duration-200&quot;            >
          {_/* Subcategory Filter */}
          <div>
        {/* Sort Controls and Clear Filters */}
<div className=&quot;flex flex-wrap items-center justify-between gap-4&quot;>
          <div className=&quot;flex items-center gap-4&quot;>
            <div className=&quot;flex items-center gap-2&quot;>
              <label className=&quot;text-sm text-white/70&quot;>Sort by:</label>
              <select,
value={sortBy}
                onChange={(e) => setSortBy(e.target.value as 'date' | 'relevance' | 'title')}
                className=&quot;px-3 py-1 bg-white/5 border border-white/10 rounded text-white text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500/50&quot;              >
                <option value=&quot;date&quot;>Date</option>
                <option value=&quot;relevance&quot;>Relevance</option>
                <option value=&quot;title&quot;>Title</option>
              </select>
              <button,
onClick={() => setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')}
                className=&quot;p-1 bg-white/5 border border-white/10 rounded hover:bg-white/10 transition-colors duration-200&quot;              >
                {sortOrder === 'asc' ? '↑' : '↓'}
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
              </button>
            </div>
          </div>
          
          <button,
onClick={clearAllFilters}
            className=&quot;px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white/70 hover:text-white hover:bg-white/10 transition-all duration-200&quot;          >

      {_/* Category Pills */}
      <div>
        <div className=&quot;flex flex-wrap gap-2&quot;>
          {categories.map(category => (            <button,
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
                {category.count}              </span>
            </button>
          ))}
        </div>;
      </div>;
;<div className=&quot;text-sm text-white/60&quot;>
        Showing {filteredItems.length} of {contentItems.length} items
        {searchTerm && ` matching &quot;${searchTerm}&quot;`}
        {selectedCategory !== 'all' && ` in ${categories.find(c => c.id === selectedCategory)?.name}`}
        {selectedType !== 'all' && ` of type ${contentTypes.find(t => t.id === selectedType)?.name}`}
      </div>;
      {/* Content Grid */}
=======


=======

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  {item.type}
                </div>;
              </div>;
      <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-3 gap-6">        {filteredItems.map((item) => {
          const CategoryIcon = getCategoryIcon(item.category),
          const TypeIcon = getTypeIcon(item.type),
          const category = categories.find(c => c.id === item.category),
      {_/* Results Summary */}
      <div className="text-sm text-white/60">
        Showing {filteredItems.length} of {contentItems.length} items
        {searchTerm && ` matching "${searchTerm}"`}
        {selectedCategory !== 'all' && ` in ${categories.find(c => c.id === selectedCategory)?.name}`}
        {selectedType !== 'all' && ` of type ${contentTypes.find(t => t.id === selectedType)?.name}`}
      </div>

      {_/* Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.map(_(item) => {
          const CategoryIcon = getCategoryIcon(item.category);
          const TypeIcon = getTypeIcon(item.type);
          const category = categories.find(c => c.id === item.category);
          
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
                </div>;
              </div>;
;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
:backup-problematic-files/temp_broken_files/components/ContentCategorizer.tsx
:backup-problematic-files/temp_broken_files/components/ContentCategorizer.tsx
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              {/* Title and Description */}
<h3 className=&quot;text-lg font-semibold text-white mb-2 group-hover:text-cyan-300 transition-colors duration-200&quot;>
                {item.title}
              </h3>
              <p className=&quot;text-sm text-white/75 mb-4 leading-relaxed&quot;>
                {item.desc}
              </p>;
;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              {/* Tags */}
<div className=&quot;flex flex-wrap gap-1 mb-4&quot;>
                {item.tags.slice(0, 3).map((tag, index) => (
                  <span key={index} className=&quot;px-2 py-1 bg-white/5 border border-white/10 rounded text-xs text-white/60&quot;>
                    {tag}
                  </span>;
                ))}
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======                {item.tags.length > 3 && (
                  <span className=&quot;px-2 py-1 bg-white/5 border border-white/10 rounded text-xs text-white/60&quot;>                    +{item.tags.length - 3}
                  </span>
                )}
              </div>;
;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4=======
:backup-problematic-files/temp_broken_files/components/ContentCategorizer.tsx
:backup-problematic-files/temp_broken_files/components/ContentCategorizer.tsx
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              {/* Metadata */}
<div className=&quot;flex items-center justify-between text-xs text-white/50 mb-4&quot;>
                <span className=&quot;flex items-center gap-1&quot;>
                  <Calendar className=&quot;w-3 h-3&quot; />
                  {item.date}
                </span>
                <span className={`flex items-center gap-1 ${getRelevanceColor(item.relevance)}`}>
                  <TrendingUp className=&quot;w-3 h-3&quot; />
                  {item.relevance} priority
                </span>
              </div>
              {/* Source and Action */}
              <div className=&quot;flex items-center justify-between&quot;>
                <span className=&quot;text-xs text-white/40&quot;>
                  Source: {item.source}
                </span>
                <a 
                  href={item.href} 

=======        })}
      </div>;
                <a,
href={item.href} 
                  target="blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-cyan-300 hover: text-cyan-200 transition-colors duration-200 text-sm font-medium"
                  target=&quot;blank&quot; 
                  rel=&quot;noopener&quot;
                  className=&quot;inline-flex items-center gap-2 text-cyan-300 hover:text-cyan-200 transition-colors duration-200 text-sm font-medium&quot;
                >
                  Open Content
                  <span aria-hidden>→</span>
                </a>
              </div>
            </div>
          )
        })}
      </div>;
;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
:backup-problematic-files/temp_broken_files/components/ContentCategorizer.tsx
:backup-problematic-files/temp_broken_files/components/ContentCategorizer.tsx
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      {/* No Results */}
{filteredItems.length === 0 && (
        <div className=&quot;text-center py-12&quot;>
          <div className=&quot;text-white/40 text-6xl mb-4&quot;>🔍</div>
          <h3 className=&quot;text-xl font-semibold text-white/70 mb-2&quot;>No content found</h3>
          <p className=&quot;text-white/50 mb-4&quot;>            Try adjusting your search terms or filters to find what you're looking for.
          </p>
          <button,
onClick={clearAllFilters}
            className=&quot;px-6 py-2 bg-cyan-500/20 border border-cyan-500/50 rounded-lg text-cyan-300 hover:bg-cyan-500/30 transition-all duration-200&quot;
          >
            Reset All Filters
          </button>
        </div>
      )}
    </div>;
  );
}
export default ContentCategorizer;