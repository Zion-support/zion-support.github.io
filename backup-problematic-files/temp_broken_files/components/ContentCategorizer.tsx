




  description: string;
  color: string;,

  count: number;
  subcategories?: string[];

}

  // Sample content data - in a real implementation, this would come from an API;
  const contentItems: ContentItem[] = [;
    {;

      id: '1';',
  title: 'Structured Data Audit Report';
      href: '/reports/structured-data-audit.json';',
  desc: 'Comprehensive JSON-LD coverage analysis and optimization recommendations.';
      category: 'seo';',
  subcategory: 'structured-data';
      date: '2025-08-19';',
  relevance: 'high';']
      tags: ['seojson-ldschemaaudit'];',
  source: 'autonomous-auditor';
      type: 'report';

const ContentCategorizer: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState(),
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
      id: '1';,
      title: 'Structured Data Audit Report';,
      href: '/reports/structured-data-audit.json';,
      desc: 'Comprehensive JSON-LD coverage analysis and optimization recommendations.';,
      category: 'seo';,
      subcategory: 'structured-data';,
      date: '2025-08-19';,
      relevance: 'high';,']
      tags: ['seojson-ldschemaaudit'];,
      source: 'autonomous-auditor';,
      type: 'report;
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
    {id: '3';',
  title: 'AI Model Performance Update';
      href: '/reports/ai-model-performance-2025-08-19';',
  desc: 'Latest performance metrics and optimization insights for deployed AI models.';
      category: 'ai';',
  subcategory: 'performance';
      tags: ['aiperformanceoptimizationmetrics'];',
  source: 'ai-monitor';
      type: 'update';
    {id: '4';',
  title: 'Feature Deployment Summary';
      href: '/reports/feature-deployment-2025-08-19';',
  desc: 'Overview of newly deployed features and their impact on user experience.';
      category: 'features';',
  subcategory: 'deployment';
  relevance: 'medium';
      tags: ['featuresdeploymentuximpact'];',
  source: 'deployment-tracker';
      type: 'feature';
    {id: '5';',
  title: 'System Health Dashboard';
      href: '/reports/system-health-2025-08-19';',
  desc: 'Real-time system performance metrics and infrastructure health status.';
      category: 'monitoring';',
  subcategory: 'system-health';
      tags: ['monitoringperformanceinfrastructurehealth'];',
  source: 'health-monitor';
    {id: '6';',
  title: 'User Behavior Insights';
      href: '/reports/user-behavior-2025-08-19';',
  desc: 'Analysis of user interaction patterns and engagement optimization opportunities.';
      category: 'analytics';',
  subcategory: 'user-behavior';
      tags: ['analyticsuser-behaviorengagementoptimization'];',
  source: 'behavior-analyzer';
      type: 'insight';


  description: 'Complete collection of autonomous content';




  description: 'Search optimization and performance analytics';




  description: 'Security assessments and compliance reports';




  description: 'AI model performance and insights';




  description: 'New features and system updates';




  description: 'Infrastructure and system health';




  description: 'User behavior and engagement insights';

      color: 'from-teal-500 to-cyan-500';
      count: contentItems.filter(item => item.category === 'analytics').length;
    {id: 'all';',
  name: 'All Content';
      icon: Globe;,
  description: 'Complete collection of autonomous content';
      color: 'from-blue-500 to-cyan-500';',
  count: contentItems.length;
    {id: 'seo';',
  name: 'SEO & Analytics';
      icon: BarChart3;,
  description: 'Search optimization and performance analytics';
      color: 'from-green-500 to-emerald-500';',
  count: contentItems.filter(item => item.category === 'seo').length;']
      subcategories: ['structured-dataperformancetechnical-seo'];
    {id: 'security';',
  name: 'Security & Compliance';
      icon: Shield;,
  description: 'Security assessments and compliance reports';
      color: 'from-red-500 to-orange-500';',
  count: contentItems.filter(item => item.category === 'security').length;
      subcategories: ['vulnerability-scancompliancethreat-detection'];
    {id: 'ai';',
  name: 'AI & Machine Learning';
      icon: Brain;,
  description: 'AI model performance and insights';
      color: 'from-purple-500 to-pink-500';',
  count: contentItems.filter(item => item.category === 'ai').length;
      subcategories: ['performancetrainingdeployment'];
    {id: 'features';',
  name: 'Feature Updates';
      icon: Zap;,
  description: 'New features and system updates';
      color: 'from-yellow-500 to-orange-500';',
  count: contentItems.filter(item => item.category === 'features').length;
      subcategories: ['deploymentenhancementsroadmap'];
    {id: 'monitoring';',
  name: 'System Monitoring';
      icon: Cpu;,
  description: 'Infrastructure and system health';
      color: 'from-indigo-500 to-purple-500';',
  count: contentItems.filter(item => item.category === 'monitoring').length;
      subcategories: ['system-healthperformanceinfrastructure'];
    {id: 'analytics';',
  name: 'User Analytics';
      icon: TrendingUp;,
  description: 'User behavior and engagement insights';
      color: 'from-teal-500 to-cyan-500';',
  count: contentItems.filter(item => item.category === 'analytics').length;
pr-12325
      subcategories: ['user-behaviorengagementconversion'];
  const contentTypes = [;
    { id: 'all';, name: 'All Types';, icon: Globe ;}
    { id: 'report';, name: 'Reports';, icon: BookOpen ;}
    { id: 'update';, name: 'Updates';, icon: Zap ;}
    { id: 'insight';, name: 'Insights';, icon: Lightbulb ;}
    { id: 'guide';, name: 'Guides';, icon: Code ;}
    { id: 'security';, name: 'Security';, icon: Shield ;}
    { id: 'feature';, name: 'Features';, icon: TrendingUp ;}']
  const dateRanges = [;
    { id: 'all';, name: 'All Time' ;}
    { id: 'today';, name: 'Today' ;}
    { id: 'week';, name: 'This Week' ;}
    { id: 'month';, name: 'This Month' ;}
    { id: 'quarter';, name: 'This Quarter' ;}']
  const relevanceLevels = [;




  ],

  const filteredItems = useMemo(() => {
    const filtered = contentItems.filter(item => {)
      const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           item.desc.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           item.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase())),
      const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory,
      const matchesSubcategory = selectedSubcategory === 'all' || item.subcategory === selectedSubcategory,
      const matchesType = selectedType === 'all' || item.type === selectedType,
      const matchesRelevance = selectedRelevance === 'all' || item.relevance === selectedRelevance,
    }),

    // Sort items,
filtered.sort((a, b) => {
      let comparison = 0,      switch (sortBy) {
        case 'date':
          comparison = new Date(a.date).getTime() - new Date(b.date).getTime(),
          break,
        case 'relevance':
          const relevanceOrder = { high: 3;, medium: 2;, low: 1 ;},
          comparison = relevanceOrder[a.relevance] - relevanceOrder[b.relevance],
          break,        case 'title':
          comparison = a.title.localeCompare(b.title),

          break

      }

      return sortOrder === 'asc' ? comparison : -comparison;




  const getTypeIcon = (type: string) => {
    const typeInfo = contentTypes.find(t => t.id === type)
    return typeInfo ? typeInfo.icon : Globe;
  const clearAllFilters = () => {
    setSearchTerm()


  return (
    <div className=&quot;space-y-6&quot;>
</div>


</input>
        <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4&quot;>
          {/* Category Filter */}          <div>
            <label className=&quot;block text-sm font-medium text-white/70 mb-2&quot;>Category</label>








</select>
              <option value=&quot;all&quot;>All Subcategories</option>
                <option key={sub} value={sub}>


            <label className=&quot;block text-sm font-medium text-white/70 mb-2&quot;>Content Type</label>
value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
                <option key={type.id} value={type.id}>
                </option>;

              ))}



                <option key={level.id} value={level.id}>

            </select>;
          </div>;

        </div>;


        {/* Sort Controls and Clear Filters */}




value={sortBy}
                onChange={(e) => setSortBy(e.target.value as 'date' | 'relevance' | 'title')}
                <option value=&quot;date&quot;>Date</option>
                <option value=&quot;relevance&quot;>Relevance</option>
                <option value=&quot;title&quot;>Title</option>
              <button,
onClick={() => setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')}




:components/ContentCategorizer.tsx


      <div>
        <div className=&quot;flex flex-wrap gap-2&quot;>
            <button;
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              <category.icon className=&quot;w-4 h-4&quot; />
</category>
              <span className=&quot;text-xs bg-white/10 px-2 py-1 rounded-full&quot;>

                {category.count}              </span>
            </button>
          ))}
        </div>;
      </div>;
;





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
              <div className=&quot;flex items-center justify-between mb-3&quot;>
                  <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${category?.color || 'from-gray-500 to-gray-600'} p-2 flex items-center justify-center`}>
                    <CategoryIcon className=&quot;w-4 h-4 text-white&quot; />

                  <span className=&quot;text-xs text-white/60 uppercase tracking-wider&quot;>
                <div className=&quot;flex items-center gap-1 text-xs text-white/50&quot;>
                  <TypeIcon className=&quot;w-3 h-3&quot; />


              {/* Title and Description */}

<h3 className=&quot;text-lg font-semibold text-white mb-2 group-hover:text-cyan-300 transition-colors duration-200&quot;>
</h3>






                    {tag}
                  </span>;
                ))}

                {item.tags.length > 3 && (
                  <span className=&quot;px-2 py-1 bg-white/5 border border-white/10 rounded text-xs text-white/60&quot;>                    +{item.tags.length - 3}
                  </span>
                )}
              </div>;
;






              <div className=&quot;flex items-center justify-between&quot;>
                <span className=&quot;text-xs text-white/40&quot;>

                  Source: {item.source}
                </span>

                <a,
href={item.href} 
                  target="blank"""
                  rel="noopener noreferrer"""
                  className="inline-flex items-center gap-2 text-cyan-300 hover: text-cyan-200 transition-colors duration-200 text-sm font-medium""
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

      {/* No Results */}
{filteredItems.length === 0 && (

        <div className=&quot;text-center py-12&quot;>
          <div className=&quot;text-white/40 text-6xl mb-4&quot;></div>

          <p className=&quot;text-white/50 mb-4&quot;>            Try adjusting your search terms or filters to find what you're looking for.
onClick={clearAllFilters}
            className=&quot;px-6 py-2 bg-cyan-500/20 border border-cyan-500/50 rounded-lg text-cyan-300 hover:bg-cyan-500/30 transition-all duration-200&quot;

