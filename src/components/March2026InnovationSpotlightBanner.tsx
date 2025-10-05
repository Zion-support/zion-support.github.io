import React from 'react';
constMarch2026InnovationSpotlightBanner = () => {
  constinnovations = [
    {
      title: 'Neural-SynapticFusion AI'
      description: 'Revolutionarybrain-computerinterfaceachieving 99.98% neuralaccuracy'
      impact: '500% cognitiveenhancement'
      icon: '🧠'
      color: 'from-purple-500to-indigo-500'
    }
    {
      title: 'QuantumTemporalComputing'
      description: 'Processinginformationacross multipletimedimensions simultaneously'
      impact: '1000xtemporalefficiency'
      icon: '⏰'
      color: 'from-blue-500to-cyan-500'
    }
    {
      title: 'AutonomousRealitySynthesis'
      description: 'AIsystemsthat createandmanage paralleldigitalrealities'
      impact: '$5.2Bmarketcreation'
      icon: '🌌'
      color: 'from-emerald-500to-teal-500'
    }
  ]; return (
    <divclassName = 'py-20bg-gradient-to-brfrom-slate-900via-purple-900to-indigo-900relativeoverflow-hidden'>
      {/* Animatedbackgroundeffects */}
      <divclassName='absoluteinset-0overflow-hiddenopacity-20'>
        <divclassName='absolutetop-0left-1/4 w-96h-96bg-purple-500rounded-fullmix-blend-multiplyfilterblur-3xlanimate-pulse' />
        <divclassName='absolutebottom-0right-1/4 w-96h-96bg-indigo-500rounded-fullmix-blend-multiplyfilterblur-3xlanimate-pulse'
          style={{ animationDelay: '2s' }}
         />
        <divclassName = 'absolutetop-1/2left-1/2 w-96h-96bg-blue-500rounded-fullmix-blend-multiplyfilterblur-3xlanimate-pulse'
          style={{ animationDelay: '4s' }}
         />
      </div>
      <divclassName = 'containermx-autopx-6relativez-10'>
        {/* HeaderSection */}
        <divclassName='text-centermb-16'>
          <divclassName='inline-flexitems-centergap-3px-8py-4rounded-fullbg-gradient-to-rfrom-purple-500/20to-indigo-500/20borderborder-purple-500/30mb-8'>
            <RocketclassName='w-6 h-6text-purple-400animate-pulse' />
            <spanclassName='text-purple-400font-boldtext-lgtracking-wideruppercase'>
              🚀 MARCH2026: INNOVATIONSPOTLIGHT
            </span>
            <RocketclassName='w-6 h-6text-indigo-400animate-pulse' />
          </div>
          <h2className='text-5xlmd:text-6xlfont-extraboldmb-6bg-gradient-to-rfrom-purple-400via-indigo-400to-blue-400bg-clip-texttext-transparent'>
            TheInnovationRevolution
          </h2>
          <pclassName='text-xltext-gray-300max-w-4xlmx-autoleading-relaxedmb-8'>
            Witnessthemost revolutionarytechnologicalbreakthroughs ofourtime. Theseinnovationsare reshapingrealityitself andcreatingunprecedented opportunitiesforhuman advancement.
          </p>
          {/* InnovationStats */}
          <divclassName = 'gridgrid-cols-2md: grid-cols-4gap-6max-w-4xlmx-automb-12'>
            {[
              {
                value: '99.98%'
                label: 'NeuralAccuracy'
                icon: '🧠'
                color: 'text-purple-400'
              }
              {
                value: '1000x'
                label: 'ProcessingSpeed'
                icon: '⚡'
                color: 'text-indigo-400'
              }
              {
                value: '$5.2B'
                label: 'MarketCreation'
                icon: '💰'
                color: 'text-blue-400'
              }
              {
                value: '500%'
                label: 'Enhancement'
                icon: '📈'
                color: 'text-emerald-400'
              }
            ].map((statindex) => (
              <divkey = { index }className = 'text-center'>
                <divclassName='text-4xlmb-2'>{stat.icon}</div>
                <divclassName='text-3xlfont-extraboldbg-gradient-to-rfrom-purple-400to-blue-400bg-clip-texttext-transparentmb-1'>
                  {stat.value}
                </div>
                <divclassName='text-gray-400text-smfont-medium'>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* InnovationCards */}
        <divclassName = 'gridmd: grid-cols-3gap-8mb-16'>
          { innovations.map((innovationindex) = > (
            <divkey = { index  }className = 'grouprelativebg-white/5backdrop-blur-lgrounded-2xlborderborder-white/10hover: border-purple-500/50transition-allduration-500overflow-hiddenhover:transformhover:scale-105hover:shadow-2xlhover:shadow-purple-500/20'
              style = { { animationDelay: `${index * 200 }ms` }}
             > {/* Cardgloweffect */}
              <divclassName = { `absoluteinset-0bg-gradient-to-br ${innovation.color }opacity-0group-hover: opacity-10transition-allduration-500`}
               />
              <divclassName = 'relativep-8'>
                {/* InnovationIcon */}
                <divclassName='text-6xlmb-6text-centergroup-hover: animate-pulse'>
                  {innovation.icon}
                </div>
                {/* Title */}
                <h3className = 'text-2xlfont-boldtext-whitemb-4group-hover: text-purple-400transition-colorsduration-300leading-tighttext-center'>
                  {innovation.title}
                </h3>
                {/* Description */}
                <pclassName = 'text-gray-400mb-6text-centerleading-relaxed'>
                  {innovation.description}
                </p>
                {/* Impact */}
                <divclassName='text-centermb-6' > <divclassName = { `inline-blockpx-4py-2rounded-fullbg-gradient-to-r ${innovation.color }text-whitetext-smfont-bold`}
                  >
                    "Impact: {innovation.impact}
                  </div>
                </div > {/* CTAButton */}
                <ahref = {`/innovations/${innovation.title.toLowerCase().replace(/\s+/g'-')}`}
                  className = { `group/btnflexitems-centerjustify-centergap-2 w-fullbg-gradient-to-r ${innovation.color }hover: opacity-90text-whitefont-boldpy-3px-6rounded-xltransition-allduration-300shadow-lghover:shadow-purple-500/50transformhover:-translate-y-1`}
                >
                  <span>ExploreInnovation</span>
                  <ArrowRight,className = 'w-4 h-4group-hover/btn: translate-x-1transition-transformduration-300' />
                </a>
              </div>
            </div>
          ))}
        </div>
        {/* SuccessStories */}
        <divclassName = 'bg-gradient-to-rfrom-purple-500/10to-indigo-500/10rounded-3xlp-8md: p-12borderborder-purple-500/20mb-16'>
          <divclassName='text-centermb-12'>
            <h3className='text-4xlfont-extraboldtext-whitemb-4'>
              RevolutionarySuccessStories
            </h3>
            <pclassName='text-xltext-gray-300max-w-2xlmx-auto'>
              Seehowour innovationsaretransforming industriesandcreating
              unprecedentedvalue.
            </p>
          </div>
          <divclassName='gridmd:grid-cols-3gap-8'>
            { [
              {
                company: 'NeuroTechGlobal'
                achievement: '500% CognitiveEnhancement'
                revenue: '$2.1BRevenueGrowth'
                icon: <Brain,className = 'w-8 h-8' / > 
               }
              { 
                company: 'QuantumDynamics'
                achievement: '1000xProcessingSpeed'
                revenue: '$3.8BMarketValue'
                icon: <ZapclassName = 'w-8 h-8' / > 
               }
              { 
                company: 'RealitySynthesisCorp'
                achievement: '$5.2BMarketCreation'
                revenue: '98% CustomerSatisfaction'
                icon: <SparklesclassName = 'w-8 h-8' / > 
               }
            ].map((storyindex) => (
              <divkey = { index }className = 'text-center'>
                <divclassName='text-purple-400mb-4flexjustify-center'>
                  {story.icon}
                </div>
                <h4className='text-xlfont-boldtext-whitemb-2'>
                  {story.company}
                </h4>
                <pclassName='text-purple-400font-semiboldmb-1'>
                  {story.achievement}
                </p>
                <pclassName='text-gray-400text-sm'>{story.revenue}</p>
              </div>
            ))}
          </div>
        </div>
        {/* CTASection */}
        <divclassName = 'text-center'>
          <divclassName='inline-blockp-1rounded-2xlbg-gradient-to-rfrom-purple-500via-indigo-500to-blue-500'>
            <divclassName='bg-slate-900rounded-xlpx-12py-10'>
              <h3className='text-3xlfont-boldtext-whitemb-4'>
                JointheInnovation Revolution
              </h3>
              <pclassName='text-gray-400mb-8max-w-2xlmx-auto'>
                Bepartof thefuture. Getexclusiveaccess torevolutionaryinnovationsearlyresearchinsightsandtransformativetechnologies thatarereshaping ourworld.
              </p>
              <divclassName = 'flexflex-colsm: flex-rowgap-4justify-center'>
                <ahref='/innovations'
                  className='bg-gradient-to-rfrom-purple-500to-indigo-600hover:from-purple-400hover:to-indigo-500text-whitefont-boldpy-4px-8rounded-xltransition-allduration-300shadow-lghover:shadow-purple-500/50flexitems-centerjustify-centergap-2'
                >
                  <RocketclassName='w-5 h-5' />
                  <span>ExploreAllInnovations</span>
                </a>
                <ahref='/contact'
                  className='border-2border-purple-500text-purple-400hover:bg-purple-500hover:text-whitefont-boldpy-4px-8rounded-xltransition-allduration-300flexitems-centerjustify-centergap-2'
                >
                  <span>PartnerWithUs</span>
                  <ArrowRight,className='w-5 h-5' />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
exportdefaultMarch2026InnovationSpotlightBanner;
