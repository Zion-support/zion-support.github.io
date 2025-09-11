:components/ContentCategorizer.tsx
import React, { useState, useEffect, useMemo } from 'react';
import {Search, Filter, Calendar, Tag, TrendingUp, Shield, Code;
  BookOpen, Zap, AlertTriangle, Lightbulb, Settings;
import React, { useState, useEffect, useMemo } from 'react',;
import {;
  Search, Filter, Calendar, Tag, TrendingUp, Shield, Code,;
  BookOpen, Zap, AlertTriangle, Lightbulb, Settings,;
  BarChart3, Globe, Database, Cpu, Rocket, Brain;
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
:backup-problematic-files/temp_broken_files/components/ContentCategorizer.tsx
:backup-problematic-files/temp_broken_files/components/ContentCategorizer.tsx
}
interface ContentCategory {id: string;
  name: string;
  icon: any;
  description: string;
  color: string;
  count: number;
  subcategories?: string[];
}
:components/ContentCategorizer.tsx
const ContentCategorizer: React.FC = () => {const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedSubcategory, setSelectedSubcategory] = useState('all');
  const [selectedType, setSelectedType] = useState('all');
  const [selectedDateRange, setSelectedDateRange] = useState('all');
  const [selectedRelevance, setSelectedRelevance] = useState('all');
  const [sortBy, setSortBy] = useState<'date' | 'relevance' | 'title'>('date');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc');
;
const ContentCategorizer: React.FC = () => {;
  const [searchTerm, setSearchTerm] = useState(''),;
  const [selectedCategory, setSelectedCategory] = useState('all'),;
  const [selectedSubcategory, setSelectedSubcategory] = useState('all'),;
  const [selectedType, setSelectedType] = useState('all'),;
  const [selectedDateRange, setSelectedDateRange] = useState('all'),;
  const [selectedRelevance, setSelectedRelevance] = useState('all'),;
  const [sortBy, setSortBy] = useState<'date' | 'relevance' | 'title'>('date'),;
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc'),;
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
    },;
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

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
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
:backup-problematic-files/temp_broken_files/components/ContentCategorizer.tsx
:backup-problematic-files/temp_broken_files/components/ContentCategorizer.tsx
              {/* Title and Description */}
<h3 className=&quot;text-lg font-semibold text-white mb-2 group-hover:text-cyan-300 transition-colors duration-200&quot;>
                {item.title}
              </h3>
              <p className=&quot;text-sm text-white/75 mb-4 leading-relaxed&quot;>
                {item.desc}
              </p>;
:components/ContentCategorizer.tsx
;
:backup-problematic-files/temp_broken_files/components/ContentCategorizer.tsx
:backup-problematic-files/temp_broken_files/components/ContentCategorizer.tsx
              {/* Tags */}
<div className=&quot;flex flex-wrap gap-1 mb-4&quot;>
                {item.tags.slice(0, 3).map((tag, index) => (
                  <span key={index} className=&quot;px-2 py-1 bg-white/5 border border-white/10 rounded text-xs text-white/60&quot;>
                    {tag}
                  </span>;
                ))}
:components/ContentCategorizer.tsx
{item.tags.length > 3 && (
                  <span className=&quot;px-2 py-1 bg-white/5 border border-white/10 rounded text-xs text-white/60&quot;>
                    +{item.tags.length - 3}
                  </span>;
                )}
              </div>;
                {item.tags.length > 3 && (
                  <span className=&quot;px-2 py-1 bg-white/5 border border-white/10 rounded text-xs text-white/60&quot;>                    +{item.tags.length - 3}
                  </span>
                )}
              </div>;
;
:backup-problematic-files/temp_broken_files/components/ContentCategorizer.tsx
:backup-problematic-files/temp_broken_files/components/ContentCategorizer.tsx
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
:components/ContentCategorizer.tsx
                <a
                  href={item.href}
                <a 
                  href={item.href} 

        })}
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
:backup-problematic-files/temp_broken_files/components/ContentCategorizer.tsx
:backup-problematic-files/temp_broken_files/components/ContentCategorizer.tsx
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