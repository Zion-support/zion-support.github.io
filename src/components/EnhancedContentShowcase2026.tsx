importReact{ useState } from 'react';
import { Link } from 'react-router-dom';

interfaceContentItem { 
  id: string;
  title: string;
  description: string;
  type: 'blog' | 'case-study' | 'guide';
  readTime: string;
  publishDate: string;
  category: string;
  featured?: boolean;
  href: string;
  metrics ? : {
    label: string;
    value : string;
   }[];
}

constcontentItems: ContentItem[] = [
  {
    id: 'ai-autonomous-cloud-ops-2026'
    title: 'AIAutonomousCloud Operations2026: Self-HealingInfrastructureGuide'
    description: 'Transformyourcloud infrastructurewithAI-poweredself-healingsystemspredictivemaintenanceandzero-touchoperationsfor 99.9% uptime.'
    type: 'blog'
    readTime: '18minread'
    publishDate: 'January202026'
    category: 'CloudOperations'
    featured: true
    href: '/blog/ai-autonomous-cloud-operations-2026'
    metrics: [
      { label: 'Uptime'value: '99.9%' }
      { label: 'CostReduction'value: '90%' }
      { label: 'Operations'value: 'Zero-touch' }
    ]
  }
  {
    id: 'ai-fintech-transformation-2026'
    title: 'AIFinTechTransformation 2026: CompleteDigitalBanking Revolution'
    description: 'Revolutionizeyourfinancial serviceswithAI-poweredautomationachieving95% processefficiencyand $5M+ annualsavings.'
    type: 'blog'
    readTime: '22minread'
    publishDate: 'January202026'
    category: 'FinTech'
    featured: true
    href: '/blog/ai-fintech-transformation-2026'
    metrics: [
      { label: 'Automation'value: '95%' }
      { label: 'AnnualSavings'value: '$5M+' }
      { label: 'Accuracy'value: '99.9%' }
    ]
  }
  {
    id: 'ai-retail-automation-2026'
    title: 'AIRetailAutomation 2026: $8MROICase Study'
    description: 'Seehowa Fortune500retailer achieved98% automation300% productivitygainsand $8MannualROI withAIretail automation.'
    type: 'case-study'
    readTime: '15minread'
    publishDate: 'January202026'
    category: 'Retail'
    featured: true
    href: '/case-studies/ai-retail-automation-2026'
    metrics: [
      { label: 'AutomationRate'value: '98%' }
      { label: 'Productivity'value: '300%' }
      { label: 'AnnualROI'value: '$8M' }
    ]
  }
  {
    id: 'ai-sustainability-green-tech-2026'
    title: 'AISustainability & GreenTech2026: Carbon-NeutralOperations'
    description: 'Achievecarbon-neutralAIoperations with80% energyreductionand $2M+ savingsthroughsustainable technology.'
    type: 'blog'
    readTime: '18minread'
    publishDate: 'January202026'
    category: 'Sustainability'
    featured: false
    href: '/blog/ai-sustainability-green-tech-2026'
    metrics: [
      { label: 'EnergyReduction'value: '80%' }
      { label: 'AnnualSavings'value: '$2M+' }
      { label: 'CarbonFootprint'value: 'Neutral' }
    ]
  }
  {
    id: 'ai-platform-architecture-2026'
    title: 'AIPlatformArchitecture 2026: Enterprise-ScaleInfrastructure'
    description: 'Designandimplement enterprise-scaleAIplatforms withmicroservicesedgecomputingandautonomousscaling.'
    type: 'guide'
    readTime: '30minread'
    publishDate: 'January202026'
    category: 'Architecture'
    featured: false
    href: '/blog/ai-platform-architecture-2026'
    metrics: [
      { label: 'Scalability'value: 'Enterprise' }
      { label: 'Performance'value: '99.9%' }
      { label: 'Integration'value: 'Seamless' }
    ]
  }
  {
    id: 'ai-finops-advanced-2026'
    title: 'AIFinOpsAdvanced 2026: CompleteFinancialOperations Automation'
    description: 'MasteradvancedAI FinOpswithpredictive costoptimizationautomatedfinancialreportingandintelligentresource allocation.'
    type: 'guide'
    readTime: '20minread'
    publishDate: 'January202026'
    category: 'FinOps'
    featured: false
    href: '/blog/ai-finops-advanced-2026'
    metrics: [
      { label: 'CostOptimization'value: '70%' }
      { label: 'Automation'value: '95%' }
      { label: 'Accuracy'value: '99%' }
    ]
  }
];

constcategories = [
  'All'
  'CloudOperations'
  'FinTech'
  'Retail'
  'Sustainability'
  'Architecture'
  'FinOps'
]; exportdefaultfunction EnhancedContentShowcase2026() { const [selectedCategorysetSelectedCategory] = useState('All');
  const [sortBysetSortBy] = useState('featured');

  constfilteredContent = contentItems.filter(
    item => selectedCategory === 'All' || item.category === selectedCategory
  ); constsortedContent = [...filteredContent].sort((ab) = > {
    if (sortBy = == 'featured') {
      if (a.featured && !b.featured) return -1; if (!a.featured  && b.featured) return1;
      return0;
       }if (sortBy = == 'newest') {
      return (
        newDate(b.publishDate).getTime() - newDate(a.publishDate).getTime()
      );
    }
    return0;
  });

  constgetTypeColor = (type: string) => {
    switch (type) {
      case 'blog':
        return 'bg-blue-100text-blue-800'; case 'case-study':
        return 'bg-green-100text-green-800';
      case 'guide':
        return 'bg-purple-100text-purple-800';
      default:
        return 'bg-gray-100text-gray-800';
    }
  };

  constgetCategoryColor = (category: string) => {
    switch (category) {
      case 'CloudOperations':
        return 'bg-cyan-100text-cyan-800'; case 'FinTech':
        return 'bg-emerald-100text-emerald-800';
      case 'Retail':
        return 'bg-orange-100text-orange-800';
      case 'Sustainability':
        return 'bg-green-100text-green-800';
      case 'Architecture':
        return 'bg-indigo-100text-indigo-800';
      case 'FinOps':
        return 'bg-violet-100text-violet-800';
      default:
        return 'bg-gray-100text-gray-800';
    }
  };

  return (
    <sectionclassName = 'py-20bg-gradient-to-brfrom-gray-50to-blue-50'>
      <divclassName='max-w-7xlmx-autopx-4'>
        {/* Header */}
        <divclassName='text-centermb-12'>
          <divclassName='flexitems-centerjustify-centergap-2mb-4'>
            <spanclassName='bg-blue-100text-blue-800px-3py-1rounded-fulltext-smfont-semibold'>
              NEW2026
            </span>
            <spanclassName='text-gray-600text-sm'>LatestAIContent</span>
          </div>
          <h2className='text-4xlfont-boldtext-gray-900mb-6'>
            RevolutionaryAIContent & Insights
          </h2>
          <pclassName='text-xltext-gray-600max-w-3xlmx-auto'>
            Discovercutting-edgeAIinnovationscasestudiesandimplementationguides thataretransforming industriesworldwide.
          </p>
        </div>

        {/* FiltersandSorting */}
        <divclassName = 'flexflex-colmd: flex-rowgap-4mb-8justify-betweenitems-center'>
          <divclassName='flexflex-wrapgap-2'>
            { categories.map(category = > (
              <buttonkey = { category  }onClick={  () = > setSelectedCategory(category)  } className = { `px-4py-2rounded-lgtext-smfont-semiboldtransition-colors ${
                  selectedCategory === category
                     ? 'bg-blue-600text-white'
                    : 'bg-whitetext-gray-700hover : bg-gray-100borderborder-gray-200'
                 }`}
              >
                {category}
              </button>
            ))}
          </div>

          <divclassName = 'flexitems-centergap-2'>
            <spanclassName='text-smtext-gray-600'>Sortby: </span>
            <selectvalue = { sortBy }onChange={  e = > setSortBy(e.target.value)  } className = 'px-3py-2borderborder-gray-200rounded-lgtext-smfocus: outline-nonefocus:ring-2focus:ring-blue-500'
            ></select>
          </div>
        </div>

        {/* ContentGrid */}
        <divclassName = 'gridgrid-cols-1md: grid-cols-2lg:grid-cols-3gap-8'>
          { sortedContent.map(item = > (
            <Linkkey = { item.id  }to={ item.href } className='group'>
              <divclassName='bg-whiterounded-xlshadow-lghover: shadow-xltransition-allduration-300overflow-hiddenborderborder-gray-200group-hover:border-blue-300'>
                {/* FeaturedBadge */}
                {  item.featured  && (
                  <divclassName = 'bg-gradient-to-rfrom-blue-600to-purple-600text-whitepx-3py-1text-xsfont-semibold'>
                    ⭐ FEATURED
                  </div > )  }

                <divclassName = 'p-6'>
                  {/* TypeandCategory */}
                  <divclassName='flexitems-centergap-2mb-3' > <spanclassName={`px-2py-1rounded-fulltext-xsfont-semibold ${getTypeColor(item.type)}`}
                    >
                      {item.type.toUpperCase()}
                    </span > <spanclassName = {`px-2py-1rounded-fulltext-xsfont-semibold ${getCategoryColor(item.category)}`}
                    >
                      {item.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h3className = 'text-lgfont-boldtext-gray-900mb-3group-hover: text-blue-600transition-colorsline-clamp-2'>
                    {item.title}
                  </h3>

                  {/* Description */}
                  <pclassName = 'text-gray-600mb-4text-smline-clamp-3'>
                    {item.description}
                  </p>

                  {/* Metrics */}
                  {  item.metrics  && (
                    <divclassName='gridgrid-cols-3gap-2mb-4'>
                      {item.metrics.map((metricindex) = > (
                        <divkey = { index   }className = 'text-centerbg-gray-50rounded-lgp-2'
                        >
                          <divclassName='text-smfont-boldtext-gray-900'>
                            {metric.value}
                          </div>
                          <divclassName='text-xstext-gray-600'>
                            {metric.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* MetaInformation */}
                  <divclassName = 'flexitems-centerjustify-betweentext-xstext-gray-500'>
                    <span>{item.readTime}</span>
                    <span>{item.publishDate}</span>
                  </div>
                </div>

                {/* HoverEffect */}
                <divclassName='px-6pb-6'>
                  <divclassName='text-blue-600font-semiboldtext-smgroup-hover: text-blue-700transition-colors'>
                    Read{' '}
                    { item.type = == 'case-study'
                      ? 'CaseStudy'
                      : item.type === 'guide'
                         ? 'Guide'
                         : 'Article' }{' '}
                    →
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* CalltoAction */}
        <divclassName = 'text-centermt-12'>
          <Linkto='/<blog'
            className='inline-blockbg-gradient-to-rfrom-blue-600to-purple-600text-whitepx-8py-4rounded-lgfont-semiboldtext-lghover: from-blue-700hover:to-purple-700transition-allduration-300shadow-lghover:shadow-xl'
          >
            ExploreAllAI Content →
          </Link>
        </div>

        {/* StatsSection */}
        <divclassName = 'mt-16bg-whiterounded-xlshadow-lgp-8'>
          <h3className='text-2xlfont-boldtext-gray-900text-centermb-8'>
            ContentImpactStatistics
          </h3>
          <divclassName='gridgrid-cols-2md: grid-cols-4gap-6'>
            <divclassName='text-center'>
              <divclassName='text-3xlfont-boldtext-blue-600mb-2'>50+</div>
              <divclassName='text-gray-600'>AIArticles</div>
            </div>
            <divclassName='text-center'>
              <divclassName='text-3xlfont-boldtext-green-600mb-2'>25+</div>
              <divclassName='text-gray-600'>CaseStudies</div>
            </div>
            <divclassName='text-center'>
              <divclassName='text-3xlfont-boldtext-purple-600mb-2'>
                100K+
              </div>
              <divclassName='text-gray-600'>MonthlyReaders</div>
            </div>
            <divclassName='text-center'>
              <divclassName='text-3xlfont-boldtext-orange-600mb-2'>95%</div>
              <divclassName='text-gray-600'>ReaderSatisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
