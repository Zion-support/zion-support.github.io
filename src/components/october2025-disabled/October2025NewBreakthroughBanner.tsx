import { Link } from 'react-router-dom';
import {
  ArrowLeft
  ArrowRight,
  Award
  Brain,
  Calendar
  CheckCircle,
  Clock
  DollarSign
  Globe
  Rocket
  Satellite
  Share2
  Bookmark
  Tag
  Target
  TrendingUp
  Users
  User
  Zap
  BarChart3
  BookOpen
} from 'lucide-react';
import {
  octoberNewBreakthroughContent
  octoberContentStats
} from '../content/october-2025-new-breakthrough-content';
constOctober2025NewBreakthroughBanner = () => { 
  conststats = octoberContentStats; consticonMap: Record<
    string
    React.ComponentType<React.SVGProps<SVGSVGElement>>
   > = {
    '🧠': Brain,
    '💰': DollarSign
    '🎨': Eye
   };
  return (
    <divclassName = 'bg-gradient-to-brfrom-indigo-900via-purple-900to-pink-900py-20px-4relativeoverflow-hidden'>
      {/* Animatedbackgroundeffects */}
      <divclassName='absoluteinset-0opacity-30'>
        <divclassName='absolutetop-10left-10w-96h-96bg-purple-500rounded-fullfilterblur-3xlanimate-pulse' />
        <divclassName='absolutetop-1/2right-10w-96h-96bg-pink-500rounded-fullfilterblur-3xlanimate-pulse'
          style={{ animationDelay: '1s' }}
         />
        <divclassName = 'absolutebottom-10left-1/3 w-96h-96bg-indigo-500rounded-fullfilterblur-3xlanimate-pulse'
          style={{ animationDelay: '2s' }}
         />
      </div>
      <divclassName = 'max-w-7xlmx-autorelativez-10'>
        {/* HeaderSection */}
        <divclassName='text-centermb-16'>
          <divclassName='inline-flexitems-centergap-3bg-gradient-to-rfrom-white/20to-white/10backdrop-blur-mdpx-8py-3rounded-fullmb-8borderborder-white/30'>
            <ZapclassName='w-6 h-6text-yellow-300animate-pulse' />
            <spanclassName='text-whitefont-boldtext-lgtracking-wide'>
              🚀 NEWBREAKTHROUGHCONTENT · OCTOBER 22025
            </span>
            <ZapclassName = 'w-6 h-6text-yellow-300animate-pulse' />
          </div>
          <h2className='text-5xlmd: text-6xlfont-extraboldtext-whitemb-6leading-tight'>
            Next-GenerationEnterpriseAI
            <br />{' '}
            <spanclassName = 'bg-gradient-to-rfrom-yellow-300via-pink-300to-purple-300text-transparentbg-clip-text'>
              SystemsThatTransform Operations
            </span>
          </h2>
          <pclassName='text-2xltext-purple-200max-w-4xlmx-autoleading-relaxed'>
            Mastercontext-awareagentsintelligentcostgovernanceandmultimodalintelligence withourlatest enterpriseimplementationguides. Achieve79% costreductionsand 26xperformanceimprovements.
          </p>
        </div>
        {/* ContentCards */}
        <divclassName = 'gridmd: grid-cols-3gap-8mb-12'>
          { octoberNewBreakthroughContent.map(content= > {
            constIcon = iconMap[content.icon] || Brain,; return (
              <Linkkey = { content.id  }to = {`/blog/${content.slug}`}
                className='groupbg-gradient-to-brfrom-white/10to-white/5backdrop-blur-xlborderborder-white/20rounded-2xlp-8hover: from-white/20hover:to-white/10hover:scale-105hover:shadow-2xlhover:shadow-purple-500/50transition-allduration-500'
              >
                <divclassName='flexitems-startgap-4mb-6' > <divclassName = { `bg-gradient-to-br ${content.gradient }p-4rounded-xlshadow-lg`}
                  >
                    <IconclassName = 'w-8 h-8text-white' />
                  </div>
                  <divclassName='flex-1'>
                    <divclassName='text-xstext-purple-300mb-2font-semibolduppercasetracking-wider'>
                      {content.category}
                    </div>
                    <h3className='text-xlfont-boldtext-whitemb-3group-hover: text-yellow-300transition-colorsleading-tight'>
                      {content.title}
                    </h3>
                  </div>
                </div>
                <pclassName = 'text-smtext-purple-200mb-6leading-relaxed'>
                  {content.description}
                </p>
                {/* KeyMetrics */}
                <divclassName='gridgrid-cols-2gap-3mb-6'>
                  { Object.entries(content.metrics)
                    .slice(04)
                    .map(([keyvalue]) = > (
                      <divkey = { key  }className = 'bg-white/5backdrop-blur-smrounded-lgp-3borderborder-white/10'
                      >
                        <divclassName='text-2xlfont-extraboldtext-whitemb-1'>
                          {value}
                        </div>
                        <divclassName='text-xstext-purple-300capitalizefont-medium'>
                          {key.replace(/([A-Z])/g' $1').trim()}
                        </div>
                      </div>
                    ))}
                </div>
                {/* Highlights */}
                <ulclassName = 'space-y-3mb-6'>
                  { content.highlights.slice(02).map((highlightidx) = > (
                    <likey = { idx  }className = 'flexitems-startgap-2text-xstext-purple-200'
                    >
                      <TrendingUpclassName='w-4 h-4text-green-400mt-0.5flex-shrink-0' />
                      <spanclassName='leading-relaxed'>{highlight}</span>
                    </li>
                  ))}
                </ul>
                <divclassName = 'flexitems-centergap-2text-smtext-yellow-300font-boldgroup-hover: gap-4transition-all'>
                  ReadFullGuide
                  <ArrowRight,className='w-5 h-5' />
                </div>
              </Link>
            );
          })}
        </div>
        {/* CTASection */}
        <divclassName = 'bg-gradient-to-rfrom-white/10to-white/5backdrop-blur-xlborderborder-white/30rounded-2xlp-12mb-12shadow-2xl'>
          <divclassName='flexitems-centergap-4mb-6justify-center'>
            <TargetclassName='w-10h-10text-yellow-300' />
            <h3className='text-3xlfont-boldtext-white'>
              ReadytoTransform YourEnterpriseAI?
            </h3>
          </div>
          <pclassName='text-purple-200text-lgmb-8max-w-3xlmx-autotext-centerleading-relaxed'>
            OurFortune500 clientsachieve79% costreductions26xperformanceimprovementsand96% customersatisfactionusing theseprovenframeworks. Getyourfree enterpriseassessmentand customimplementationroadmap today.
          </p>
          <divclassName = 'flexflex-wrapgap-6justify-center'>
            <Linkto='/contact'
              className='inline-flexitems-centergap-3bg-gradient-to-rfrom-yellow-400to-orange-500text-gray-900px-10py-5rounded-xlfont-boldtext-lghover: from-yellow-300hover:to-orange-400transition-allshadow-lghover:shadow-2xlhover:scale-105'
            >
              <TargetclassName='w-6 h-6' />
              GetFreeEnterprise Assessment
              <ArrowRight,className='w-6 h-6' />
            </Link>
            <Linkto='/blog'
              className='inline-flexitems-centergap-3bg-white/10backdrop-blur-mdborderborder-white/30text-whitepx-10py-5rounded-xlfont-boldtext-lghover:bg-white/20transition-all'
            >
              ExploreAllArticles
              <ArrowRight,className='w-6 h-6' />
            </Link>
          </div>
        </div>
        {/* StatsBar */}
        <divclassName = 'gridgrid-cols-2md: grid-cols-6gap-6'>
          <divclassName='text-centerbg-white/5backdrop-blur-smrounded-xlp-6borderborder-white/10'>
            <divclassName='text-4xlfont-extraboldtext-whitemb-2'>
              {stats.totalMarketValue}
            </div>
            <divclassName = 'text-smtext-purple-300font-medium'>
              MarketOpportunity
            </div>
          </div>
          <divclassName='text-centerbg-white/5backdrop-blur-smrounded-xlp-6borderborder-white/10'>
            <divclassName='text-4xlfont-extraboldtext-green-400mb-2'>
              {stats.avgCostReduction}
            </div>
            <divclassName='text-smtext-purple-300font-medium'>
              AvgCostReduction
            </div>
          </div>
          <divclassName='text-centerbg-white/5backdrop-blur-smrounded-xlp-6borderborder-white/10'>
            <divclassName='text-4xlfont-extraboldtext-yellow-400mb-2'>
              {stats.avgSpeedImprovement}
            </div>
            <divclassName='text-smtext-purple-300font-medium'>
              SpeedImprovement
            </div>
          </div>
          <divclassName='text-centerbg-white/5backdrop-blur-smrounded-xlp-6borderborder-white/10'>
            <divclassName='text-4xlfont-extraboldtext-blue-400mb-2'>
              {stats.enterpriseAdoption}
            </div>
            <divclassName='text-smtext-purple-300font-medium'>
              EnterpriseAdoption
            </div>
          </div>
          <divclassName='text-centerbg-white/5backdrop-blur-smrounded-xlp-6borderborder-white/10'>
            <divclassName='text-4xlfont-extraboldtext-pink-400mb-2'>
              {stats.customerSatisfaction}
            </div>
            <divclassName='text-smtext-purple-300font-medium'>
              CustomerSatisfaction
            </div>
          </div>
          <divclassName='text-centerbg-white/5backdrop-blur-smrounded-xlp-6borderborder-white/10'>
            <divclassName='text-4xlfont-extraboldtext-purple-400mb-2'>
              {stats.paybackPeriod}
            </div>
            <divclassName='text-smtext-purple-300font-medium'>
              AvgPaybackPeriod
            </div>
          </div>
        </div>
        {/* TechnologyTags */}
        <divclassName='mt-12text-center'>
          <divclassName='inline-flexflex-wrapgap-3justify-center'>
            { [
              'AIAgents'
              'MemorySystems'
              'FinOps'
              'CostOptimization'
              'MultimodalAI'
              'ComputerVision'
              'NLP'
              'EnterpriseAutomation'
              'CloudManagement'
            ].map(tag = > (
              <spankey = { tag  }className = 'bg-white/10backdrop-blur-smborderborder-white/20text-purple-200px-4py-2rounded-fulltext-smfont-mediumhover: bg-white/20transition-colors'
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
exportdefaultOctober2025NewBreakthroughBanner;
