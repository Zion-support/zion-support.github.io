import React from 'react';
import { Link } from 'react-router-dom';
constJanuary2025ContentShowcaseBanner: React.FC = () => { 
  return (
    <divclassName = 'relativeoverflow-hiddenbg-gradient-to-brfrom-indigo-900via-purple-900to-pink-900' > {' ' }
      {/* AnimatedBackground */}
      <divclassName = "absoluteinset-0bg-[url('/images/abstract-pattern.svg')] opacity-10animate-pulse" />
      <divclassName = 'absolutetop-0left-0 w-fullh-fullbg-gradient-to-rfrom-transparentvia-white/5to-transparenttransform -skew-y-1' />
      <divclassName='relativemax-w-7xlmx-autopx-4sm: px-6lg:px-8py-20'>
        <divclassName='text-centermb-16'>
          <divclassName='inline-flexitems-centergap-2bg-pink-500/20text-pink-400px-6py-3rounded-fulltext-smfont-mediummb-8'>
            <SparklesclassName='w-5 h-5' />
            <span>JANUARY2025CONTENT COLLECTION</span>
          </div>
          <h2className='text-4xlmd:text-6xlfont-boldtext-whitemb-6leading-tight'>
            <spanclassName='bg-gradient-to-rfrom-pink-400via-purple-400to-blue-400bg-clip-texttext-transparent'>
              CompleteAIKnowledge Hub
            </span>
            <br /> <spanclassName='text-white'>2025Edition</span>
          </h2>
          <pclassName='text-xltext-gray-300max-w-4xlmx-automb-12'>
            Accessthemost comprehensivecollectionof AIinsights
            breakthroughtechnologiesandprovenenterprise strategies.
            Everythingyouneed tomasterAI transformationinone place.
          </p>
        </div>
        {/* ContentCategories */}
        <divclassName = 'gridmd: grid-cols-2lg:grid-cols-3gap-8mb-16'>
          {/* BreakthroughTechnologies */}
          <divclassName = 'grouprelativebg-white/10backdrop-blur-lgrounded-3xlp-8borderborder-white/20hover: border-pink-400/50transition-allduration-300hover:transformhover:scale-105'>
            <divclassName='absoluteinset-0bg-gradient-to-brfrom-pink-500/10to-purple-500/10rounded-3xlopacity-0group-hover:opacity-100transition-opacityduration-300' />
            <divclassName='relative'>
              <divclassName='flexitems-centergap-4mb-6'>
                <divclassName='p-3bg-pink-500/20rounded-xl'>
                  <ZapclassName='w-8 h-8text-pink-400' />
                </div>
                <div>
                  <h3className='text-2xlfont-boldtext-white'>
                    BreakthroughTechnologies
                  </h3>
                  <pclassName='text-gray-400'>6RevolutionaryGuides</p>
                </div>
              </div>
              <pclassName='text-gray-300mb-6leading-relaxed'>
                Explorethelatest AIbreakthroughsincluding quantum-neuralfusionsyntheticconsciousnessandneuromorphiccomputing.
              </p>
              <divclassName = 'space-y-3mb-6'>
                <divclassName='flexitems-centergap-3'>
                  <divclassName='w-2 h-2bg-pink-400rounded-full' />
                  <spanclassName='text-gray-300text-sm'>
                    Quantum-NeuralFusion
                  </span>
                </div>
                <divclassName='flexitems-centergap-3'>
                  <divclassName='w-2 h-2bg-purple-400rounded-full' />
                  <spanclassName='text-gray-300text-sm'>
                    SyntheticConsciousness
                  </span>
                </div>
                <divclassName='flexitems-centergap-3'>
                  <divclassName='w-2 h-2bg-blue-400rounded-full' />
                  <spanclassName='text-gray-300text-sm'>
                    AutonomousEnterpriseMesh
                  </span>
                </div>
              </div>
              <Linkto='/blog/category/breakthrough-technologies'
                className='inline-flexitems-centergap-2text-pink-400hover: text-pink-300font-mediumtransition-colors'
              >
                ExploreAllTechnologies
                <ArrowRight,className='w-4 h-4' />
              </Link>
            </div>
          </div>
          {/* EnterpriseCaseStudies */}
          <divclassName = 'grouprelativebg-white/10backdrop-blur-lgrounded-3xlp-8borderborder-white/20hover: border-purple-400/50transition-allduration-300hover:transformhover:scale-105'>
            <divclassName='absoluteinset-0bg-gradient-to-brfrom-purple-500/10to-blue-500/10rounded-3xlopacity-0group-hover:opacity-100transition-opacityduration-300' />
            <divclassName='relative'>
              <divclassName='flexitems-centergap-4mb-6'>
                <divclassName='p-3bg-purple-500/20rounded-xl'>
                  <AwardclassName='w-8 h-8text-purple-400' />
                </div>
                <div>
                  <h3className='text-2xlfont-boldtext-white'>
                    EnterpriseSuccessStories
                  </h3>
                  <pclassName='text-gray-400'>6ProvenCase Studies</p>
                </div>
              </div>
              <pclassName='text-gray-300mb-6leading-relaxed'>
                LearnfromFortune 500companiesthat haveachievedbillions invaluecreation throughAItransformation initiatives.
              </p>
              <divclassName='space-y-3mb-6'>
                <divclassName='flexitems-centergap-3'>
                  <divclassName='w-2 h-2bg-purple-400rounded-full' />
                  <spanclassName='text-gray-300text-sm'>
                    ManufacturingTransformation
                  </span>
                </div>
                <divclassName='flexitems-centergap-3'>
                  <divclassName='w-2 h-2bg-blue-400rounded-full' />
                  <spanclassName='text-gray-300text-sm'>
                    FinancialFraudPrevention
                  </span>
                </div>
                <divclassName='flexitems-centergap-3'>
                  <divclassName='w-2 h-2bg-emerald-400rounded-full' />
                  <spanclassName='text-gray-300text-sm'>
                    HealthcareAIDiagnostics
                  </span>
                </div>
              </div>
              <Linkto='/case-studies'
                className='inline-flexitems-centergap-2text-purple-400hover:text-purple-300font-mediumtransition-colors'
              >
                ViewAllCase Studies
                <ArrowRight,className='w-4 h-4' />
              </Link>
            </div>
          </div>
          {/* LatestArticles */}
          <divclassName = 'grouprelativebg-white/10backdrop-blur-lgrounded-3xlp-8borderborder-white/20hover: border-blue-400/50transition-allduration-300hover:transformhover:scale-105'>
            <divclassName='absoluteinset-0bg-gradient-to-brfrom-blue-500/10to-emerald-500/10rounded-3xlopacity-0group-hover:opacity-100transition-opacityduration-300' />
            <divclassName='relative'>
              <divclassName='flexitems-centergap-4mb-6'>
                <divclassName='p-3bg-blue-500/20rounded-xl'>
                  <BookOpenclassName='w-8 h-8text-blue-400' />
                </div>
                <div>
                  <h3className='text-2xlfont-boldtext-white'>
                    LatestArticles
                  </h3>
                  <pclassName='text-gray-400'>50+ ExpertGuides</p>
                </div>
              </div>
              <pclassName='text-gray-300mb-6leading-relaxed'>
                Stayaheadwith thelatestAI insightsimplementationguides
                andindustrybest practicesfromour expertteam.
              </p>
              <divclassName = 'space-y-3mb-6'>
                <divclassName='flexitems-centergap-3'>
                  <divclassName='w-2 h-2bg-blue-400rounded-full' />
                  <spanclassName='text-gray-300text-sm'>
                    AIPlatformEngineering
                  </span>
                </div>
                <divclassName='flexitems-centergap-3'>
                  <divclassName='w-2 h-2bg-emerald-400rounded-full' />
                  <spanclassName='text-gray-300text-sm'>
                    EnterpriseRAGSystems
                  </span>
                </div>
                <divclassName='flexitems-centergap-3'>
                  <divclassName='w-2 h-2bg-purple-400rounded-full' />
                  <spanclassName='text-gray-300text-sm'>
                    AutonomousOperations
                  </span>
                </div>
              </div>
              <Linkto='/blog'
                className='inline-flexitems-centergap-2text-blue-400hover: text-blue-300font-mediumtransition-colors'
              >
                ReadAllArticles
                <ArrowRight,className='w-4 h-4' />
              </Link>
            </div>
          </div>
        </div>
        {/* Statistics */}
        <divclassName = 'bg-white/5backdrop-blur-lgrounded-3xlp-12borderborder-white/20mb-16'>
          <h3className='text-3xlfont-boldtext-whitetext-centermb-12'>
            ContentLibraryOverview
          </h3>
          <divclassName='gridgrid-cols-2md: grid-cols-4gap-8'>
            <divclassName='text-center'>
              <divclassName='text-gray-300'>TotalArticles</div>
            </div>
            <divclassName='text-center'>
              <divclassName='text-gray-300'>CaseStudies</div>
            </div>
            <divclassName='text-center'>
              <divclassName='text-4xlfont-boldtext-blue-400mb-2'>15+</div>
            </div>
            <divclassName='text-center'>
              <divclassName='text-4xlfont-boldtext-emerald-400mb-2'>
                500+
              </div>
              <divclassName='text-gray-300'>EnterpriseReaders</div>
            </div>
          </div>
        </div>
        {/* FeaturedContentPreview */}
        <divclassName = 'gridmd: grid-cols-2gap-8mb-16'>
          <divclassName='bg-white/5backdrop-blur-lgrounded-2xlp-8borderborder-white/20'>
            <divclassName='flexitems-centergap-3mb-4'>
              <StarclassName='w-6 h-6text-yellow-400fill-current' />
              <h4className='text-xlfont-boldtext-white'>MostPopular</h4>
            </div>
            <h5className='text-lgfont-semiboldtext-whitemb-2'>
              AIQuantum-NeuralFusion2025
            </h5>
            <pclassName='text-gray-300text-smmb-4'>
              Revolutionaryfusiontechnology achieving 10000xperformanceimprovements...
            </p>
            <divclassName = 'flexitems-centerjustify-between'>
              <spanclassName='text-pink-400font-medium'>15minread</span>
              <Linkto='/blog/ai-quantum-neural-fusion-<2025'
                className='text-pink-400hover: text-pink-300'
              >
                <ArrowRight,className='w-4 h-4' />
              </Link>
            </div>
          </div>
          <divclassName='bg-white/5backdrop-blur-lgrounded-2xlp-8borderborder-white/20'>
            <divclassName='flexitems-centergap-3mb-4'>
              <TrendingUpclassName='w-6 h-6text-emerald-400' />
              <h4className='text-xlfont-boldtext-white'>TrendingNow</h4>
            </div>
            <h5className='text-lgfont-semiboldtext-whitemb-2'>
              AutonomousEnterpriseMesh
            </h5>
            <pclassName='text-gray-300text-smmb-4'>
              Self-organizingAInetworks achieving99.7% operationalefficiency...
            </p>
            <divclassName='flexitems-centerjustify-between'>
              <spanclassName='text-emerald-400font-medium'>12minread</span>
              <Linkto='/blog/autonomous-enterprise-mesh-<2025'
                className='text-emerald-400hover:text-emerald-300'
              >
                <ArrowRight,className='w-4 h-4' />
              </Link>
            </div>
          </div>
        </div>
        {/* CalltoAction */}
        <divclassName = 'text-center'>
          <divclassName='flexflex-colsm: flex-rowitems-centerjustify-centergap-4mb-6'>
            <Linkto='/resources'
              className='inline-flexitems-centergap-2bg-gradient-to-rfrom-pink-500to-purple-500text-whitepx-8py-4rounded-fullfont-semiboldhover:from-pink-600hover:to-purple-600transition-allduration-300transformhover:scale-105'
            >
              <BookOpenclassName='w-5 h-5' />
              ExploreCompleteLibrary
            </Link>
            <Linkto='/newsletter'
              className='inline-flexitems-centergap-2bg-white/10text-whitepx-8py-4rounded-fullfont-semiboldborderborder-white/20hover:bg-white/20transition-allduration-300'
            >
              <UsersclassName='w-5 h-5' />
              JoinAICommunity
            </Link>
          </div>
          <pclassName='text-gray-400text-sm'>
            Getexclusiveaccess tonewcontent andAIinsights deliveredweekly
          </p>
        </div>
      </div>
    </div>
  );
};
exportdefaultJanuary2025ContentShowcaseBanner;
