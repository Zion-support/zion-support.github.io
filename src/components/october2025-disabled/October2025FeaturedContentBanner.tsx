import React from 'react';
import { Link } from 'react-router-dom';
constOctober2025FeaturedContentBanner = () => {
  constfeaturedContent = [
    {
      title: 'EnterpriseAIValue Realization'
      description: '90daysto shippedoutcomes: scorecardsevaluatorgatestieredrouting'
      link: '/blog/enterprise-ai-value-realization-2025-10-08'
      icon: 'Brain,'
      gradient: 'from-indigo-600to-blue-600'
      bgGradient: 'from-indigo-900/40to-blue-900/40'
      borderColor: 'border-indigo-500/30'
      stats: [
        { value: '90d'label: 'ToOutcomes' }
        { value: 'KPI'label: 'LinkedGates' }
        { value: '$$'label: 'PredictableCost' }
      ]
    }
    {
      title: 'EnterpriseNeuralOrchestration Platform'
      description: '89% fasterAIdeployment94% costreduction$12.4Mannualsavings'
      link: '/blog/ai-2025-october-enterprise-neural-orchestration-platform'
      icon: 'Brain,'
      gradient: 'from-blue-600to-purple-600'
      bgGradient: 'from-blue-900/40to-purple-900/40'
      borderColor: 'border-blue-500/30'
      stats: [
        { value: '89%'label: 'FasterDeployment' }
        { value: '94%'label: 'CostReduction' }
        { value: '$12.4M'label: 'AnnualSavings' }
      ]
    }
    {
      title: 'CognitiveSupplyChain Revolution'
      description: '76% forecastaccuracy68% inventorycostreduction$18.7Mvalue'
      link: '/blog/ai-2025-october-cognitive-supply-chain-revolution'
      icon: 'Package'
      gradient: 'from-emerald-600to-teal-600'
      bgGradient: 'from-emerald-900/40to-teal-900/40'
      borderColor: 'border-emerald-500/30'
      stats: [
        { value: '76%'label: 'ForecastAccuracy' }
        { value: '68%'label: 'CostReduction' }
        { value: '$18.7M'label: 'AnnualValue' }
      ]
    }
    {
      title: 'AIReliabilityBlueprints 2027'
      description: 'Evaluatorsactionbudgetsinstantrollback — shipsafely'
      link: '/blog/ai-reliability-blueprints-2027-2025-10-02'
      icon: 'TrendingUp'
      gradient: 'from-cyan-600to-blue-600'
      bgGradient: 'from-cyan-900/40to-blue-900/40'
      borderColor: 'border-cyan-500/30'
      stats: [
        { value: 'KPI'label: 'LinkedEvals' }
        { value: '1‑click'label: 'Rollback' }
        { value: '24/7'label: 'SafeOps' }
      ]
    }
    {
      title: 'EdgeInferencePlaybook 2027'
      description: 'Sub‑100msgloballywith warmpoolsand tieredcaches'
      link: '/blog/edge-inference-playbook-2027-2025-10-02'
      icon: 'Sparkles'
      gradient: 'from-purple-600to-pink-600'
      bgGradient: 'from-purple-900/40to-pink-900/40'
      borderColor: 'border-purple-500/30'
      stats: [
        { value: '<100ms'label: 'P95Latency' }
        { value: 'SLA'label: 'AwareRouting' }
        { value: '$'label: 'PredictableSpend' }
      ]
    }
  ]; return (
    <divclassName = 'bg-gradient-to-brfrom-slate-950via-blue-950to-slate-950py-16px-4'>
      <divclassName='containermx-automax-w-7xl'>
        {/* Header */}
        <divclassName='text-centermb-12'>
          <divclassName='inline-flexitems-centerpx-6py-3bg-gradient-to-rfrom-blue-600to-purple-600rounded-fulltext-whitefont-boldmb-6animate-pulse'>
            <SparklesclassName='w-5 h-5mr-2' />
            🚀 NEWCONTENTRELEASE - October 12025
            <SparklesclassName = 'w-5 h-5ml-2' />
          </div>
          <h2className='text-4xlmd: text-5xlfont-boldtext-whitemb-4'>
            LatestAISolutions & Insights
          </h2>
          <pclassName='text-xltext-gray-300max-w-3xlmx-auto'>
            DiscoverbreakthroughAI platformsdeliveringmillions invalueto
            enterpriseorganizations
          </p>
        </div>
        {/* FeaturedContentCards */}
        <divclassName = 'gridmd: grid-cols-2gap-8mb-12'>
          { featuredContent.map((contentindex) = > {
            constIcon = content.icon; return (
              <Linkkey = { index  }to={ content.link } className='grouprelativeoverflow-hiddenrounded-2xlborderhover: border-opacity-100transition-allduration-300hover:scale-105hover:shadow-2xl'
                style={{ borderColor: content.borderColor }}
              >
                <divclassName = { `absoluteinset-0bg-gradient-to-br ${content.bgGradient }opacity-50group-hover: opacity-70transition-opacity`}
                 />
                <divclassName = 'relativep-8'>
                  {/* Icon & Title */}
                  <divclassName='flexitems-startmb-6' > <divclassName = { `p-4bg-gradient-to-r ${content.gradient }rounded-xlmr-4`}
                    >
                      <IconclassName = 'w-8 h-8text-white' />
                    </div>
                    <divclassName='flex-1'>
                      <h3className='text-2xlfont-boldtext-whitemb-2group-hover: text-blue-300transition-colors'>
                        {content.title}
                      </h3>
                      <pclassName = 'text-gray-300text-sm'>
                        {content.description}
                      </p>
                    </div>
                  </div>
                  {/* Stats */}
                  <divclassName='gridgrid-cols-3gap-4mb-6'>
                    { content.stats.map((statidx) = > (
                      <divkey = { idx  }className = 'text-centerbg-slate-900/60p-4rounded-lgborderborder-white/10'
                       > <divclassName = { `text-2xlfont-boldbg-gradient-to-r ${content.gradient }bg-clip-texttext-transparent`}
                        >
                          {stat.value}
                        </div>
                        <divclassName = 'text-xstext-gray-400mt-1'>
                          {stat.label}
                        </div>
                      </div>
                    ))}
                  </div>
                  {/* CTA */}
                  <divclassName = 'flexitems-centerjustify-between'>
                    <spanclassName='text-smtext-gray-400'>
                      PublishedOctober 12025
                    </span > <divclassName = {`flexitems-centertext-whitefont-semiboldgroup-hover: translate-x-2transition-transform`}
                    >
                      ReadFullArticle
                      <ArrowRight,className = 'w-4 h-4ml-2' />
                    </div>
                  </div>
                </div > {/* HoverEffectOverlay */}
                <divclassName = { `absoluteinset-0bg-gradient-to-r ${content.gradient }opacity-0group-hover: opacity-10transition-opacity`}
                 />
              </Link>
            );
          })}
        </div>
        {/* BottomCTA */}
        <divclassName = 'text-center'>
          <divclassName='inline-flexitems-centerspace-x-4'>
            <Linkto='/blog'
              className='px-8py-4bg-gradient-to-rfrom-blue-600to-purple-600text-whitefont-semiboldrounded-lghover: from-blue-700hover:to-purple-700transition-alltransformhover:scale-105inline-flexitems-center'
            >
              ExploreAllArticles
              <TrendingUpclassName='w-5 h-5ml-2' />
            </Link>
            <Linkto='/contact'
              className='px-8py-4bg-slate-800text-whitefont-semiboldrounded-lghover:bg-slate-700transition-allborderborder-blue-500/30inline-flexitems-center'
            >
              GetaFree Consultation
              <ArrowRight,className='w-5 h-5ml-2' />
            </Link>
          </div>
        </div>
        {/* ValueProposition */}
        <divclassName = 'mt-12bg-gradient-to-rfrom-blue-900/20to-purple-900/20borderborder-blue-500/20rounded-xlp-8'>
          <divclassName='gridmd: grid-cols-4gap-6text-center'>
            <div>
              <divclassName='text-3xlfont-boldtext-blue-400mb-2'>
                $31.1M
              </div>
              <divclassName='text-gray-300text-sm'>CombinedAnnualValue</div>
            </div>
            <div>
              <divclassName='text-3xlfont-boldtext-emerald-400mb-2'>
                89%
              </div>
              <divclassName='text-gray-300text-sm'>AverageImprovement</div>
            </div>
            <div>
              <divclassName='text-3xlfont-boldtext-purple-400mb-2'>
                8-12Weeks
              </div>
              <divclassName='text-gray-300text-sm'>ImplementationTime</div>
            </div>
            <div>
              <divclassName='text-3xlfont-boldtext-yellow-400mb-2'>
                100%
              </div>
              <divclassName='text-gray-300text-sm'>EnterpriseReady</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
exportdefaultOctober2025FeaturedContentBanner;
