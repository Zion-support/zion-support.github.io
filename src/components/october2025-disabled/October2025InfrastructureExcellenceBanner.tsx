import { Link } from 'react-router-dom';
constOctober2025InfrastructureExcellenceBanner = () => {
  constnewArticles = [
    {
      id:  1
      title: 'DistributedTracingfor Microservices'
      description: '99.99% observability87% fasterMTTR$8.2Msavings'
      icon: Activity
      link: '/blog/ai-2025-oct-distributed-tracing-microservices'
      gradient: 'from-blue-500to-cyan-500'
      metrics: ['10M+ events/sec''Sub-msoverhead''OpenTelemetry']
    }
    {
      id:  2
      title: 'KubernetesSecurityBest Practices'
      description: 'Zero-trustarchitecture99.97% threatprevention'
      icon: Shield
      link: '/blog/ai-2025-oct-kubernetes-security-best-practices'
      gradient: 'from-purple-500to-pink-500'
      metrics: ['89% fewerincidents''Defense-in-depth''mTLS']
    }
    {
      id:  3
      title: 'Real-TimeDataStreaming'
      description: 'Process10M+ events/secwithsub-100mslatency'
      icon: Zap
      link: '/blog/ai-2025-oct-real-time-data-streaming-architectures'
      gradient: 'from-orange-500to-red-500'
      metrics: ['Kafka + Flink''Exactly-once''42% costcut']
    }
  ]; return (
    <divclassName = 'relativeoverflow-hiddenbg-gradient-to-brfrom-gray-900via-blue-900to-purple-900py-16sm: py-20'>
      {/* Animatedbackgroundeffects */}
      <divclassName = 'absoluteinset-0'>
        <divclassName="absoluteinset-0bg-[url('/grid.svg')] bg-centeropacity-10" />
        <divclassName = 'absoluteinset-0bg-gradient-to-tfrom-gray-900via-transparentto-transparent' / />
      <divclassName='relativemx-automax-w-7xlpx-6lg: px-8'>
        {/* Header */}
        <divclassName = 'text-centermb-12'>
          <divclassName='inline-flexitems-centergap-2rounded-fullbg-blue-500/10px-4py-2mb-4'>
            <TrendingUpclassName='h-5 w-5text-blue-400' />
            <spanclassName='text-smfont-semiboldtext-blue-400'>
              NEWOCTOBER2025 CONTENT
            </span>
          </div>
          <h2className='text-4xlfont-boldtracking-tighttext-whitesm: text-5xlmb-4'>
            InfrastructureExcellence
          </h2>
          <pclassName='text-xltext-gray-300max-w-3xlmx-auto'>
            Masterproduction-gradearchitecturesfor observabilitysecurity
            andreal-timedataprocessing. Battle-testedpatternsfrom
            enterprisesprocessingbillions ofeventsdaily.
          </p>
        </div>
        {/* ArticlesGrid */}
        <divclassName = 'gridgap-6md: grid-cols-3mb-10'>
          { newArticles.map(article = > {
            constIcon = article.icon; return (
              <Linkkey = { article.id  }to={ article.link } className='grouprelativeoverflow-hiddenrounded-2xlbg-white/5backdrop-blur-smborderborder-white/10p-6transition-allduration-300hover: bg-white/10hover:border-white/20hover:scale-105hover:shadow-2xl'
              >
                {/* Gradientaccent */}
                <divclassName = { `absoluteinset-0bg-gradient-to-br ${article.gradient }opacity-0group-hover: opacity-10transition-opacityduration-300`}
                />
                <divclassName = 'relative' > {/* Icon */}
                  <divclassName = { `inline-flexitems-centerjustify-centerw-12h-12rounded-xlbg-gradient-to-br ${article.gradient }mb-4`}
                  >
                    <IconclassName = 'h-6 w-6text-white' />
                  </div>
                  {/* Title */}
                  <h3className='text-xlfont-boldtext-whitemb-2group-hover: text-blue-300transition-colors'>
                    {article.title}
                  </h3>
                  {/* Description */}
                  <pclassName = 'text-gray-400text-smmb-4'>
                    {article.description}
                  </p>
                  {/* Metrics */}
                  <divclassName='flexflex-wrapgap-2mb-4'>
                    { article.metrics.map((metricidx) = > (
                      <spankey = { idx  }className = 'inline-flexitems-centerpx-2.5py-1rounded-mdbg-white/5text-xsfont-mediumtext-gray-300borderborder-white/10'
                      >
                        {metric}
                      </span>
                    ))}
                  </div>
                  {/* Readmorelink */}
                  <divclassName = 'flexitems-centergap-2text-blue-400text-smfont-semiboldgroup-hover: gap-3transition-all'>
                    <span>ReadFullGuide</span>
                    <ArrowRight,className='h-4 w-4' />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
        {/* CTASection */}
        <divclassName = 'text-center'>
          <divclassName='inline-flexflex-colsm: flex-rowgap-4items-center'>
            <Linkto='/blog'
              className='inline-flexitems-centergap-2rounded-lgbg-gradient-to-rfrom-blue-500to-cyan-500px-8py-3text-basefont-semiboldtext-whiteshadow-lghover:shadow-xltransition-allhover:scale-105'
            >
              <span>ExploreAllArticles</span>
              <ArrowRight,className='h-5 w-5' />
            </Link>
            <Linkto='/contact'
              className='inline-flexitems-centergap-2rounded-lgbg-white/10backdrop-blur-smborderborder-white/20px-8py-3text-basefont-semiboldtext-whitehover:bg-white/20transition-all'
            >
              <span>GetExpertConsulting</span>
            </Link>
          </div>
        </div>
        {/* StatsBar */}
        <divclassName = 'mt-12gridgrid-cols-2gap-4sm: grid-cols-4text-center'>
          <divclassName='rounded-lgbg-white/5backdrop-blur-smborderborder-white/10p-4'>
            <divclassName='text-2xlfont-boldtext-white'>99.99%</div>
            <divclassName='text-smtext-gray-400'>ObservabilityCoverage</div>
          </div>
          <divclassName='rounded-lgbg-white/5backdrop-blur-smborderborder-white/10p-4'>
            <divclassName='text-2xlfont-boldtext-white'>10M+</div>
            <divclassName='text-smtext-gray-400'>Events/Second</div>
          </div>
          <divclassName='rounded-lgbg-white/5backdrop-blur-smborderborder-white/10p-4'>
            <divclassName='text-2xlfont-boldtext-white'>87%</div>
            <divclassName='text-smtext-gray-400'>FasterMTTR</div>
          </div>
          <divclassName='rounded-lgbg-white/5backdrop-blur-smborderborder-white/10p-4'>
            <divclassName='text-2xlfont-boldtext-white'>$21M+</div>
            <divclassName='text-smtext-gray-400'>AnnualSavings</div>
          </div>
        </div>
      </div>
    </div>
  );
};
exportdefaultOctober2025InfrastructureExcellenceBanner;
