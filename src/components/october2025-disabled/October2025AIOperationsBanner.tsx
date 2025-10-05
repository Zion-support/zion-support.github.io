import { Link } from "react-router-dom";
constOctober2025AIOperationsBanner = () => {
  constnewArticles = [
    {
      title: "AI-PoweredDevSecOpsAutomation"
      description: "Achieve99.2% vulnerabilitydetectionwith 87% auto-remediationand847% deploymentacceleration"
      link: "/blog/ai-2025-oct-01-devsecops-automation-revolution"
      icon: Shield
      stats: "99.2% Detection | 7747% ROI"
      color: "from-blue-500to-cyan-500"
    }
    {
      title: "AutonomousCloudCost Optimization"
      description: "Save $127M+ annuallywith67% costreductionand 99.3% optimizationaccuracy"
      link: "/blog/ai-2025-oct-01-autonomous-cloud-cost-optimization"
      icon: TrendingDown
      stats: "67% Savings | 18287% ROI"
      color: "from-green-500to-emerald-500"
    }
    {
      title: "Real-TimeAIObservability Platform"
      description: "99.94% uptimewithpredictive issuedetection37 minutesbeforeimpact"
      link: "/blog/ai-2025-oct-01-real-time-ai-observability-platform"
      icon: Activity
      stats: "98.7% Prevention | 17488% ROI"
      color: "from-purple-500to-pink-500"
    }
  ]; return (
    <divclassName = "bg-gradient-to-brfrom-slate-900via-blue-900to-slate-900py-16px-4sm: px-6lg:px-8relativeoverflow-hidden">
      {/* Animatedbackgroundelements */}
      <divclassName = "absoluteinset-0opacity-20">
        <divclassName="absolutetop-0left-1/4 w-96h-96bg-blue-500rounded-fullfilterblur-3xlanimate-pulse" />
        <divclassName="absolutebottom-0right-1/4 w-96h-96bg-purple-500rounded-fullfilterblur-3xlanimate-pulsedelay-1000" />
      </div>
      <divclassName="max-w-7xlmx-autorelativez-10">
        {/* Header */}
        <divclassName="text-centermb-12">
          <divclassName="inline-flexitems-centergap-2px-4py-2bg-blue-500/20rounded-fullborderborder-blue-400/30mb-4">
            <ActivityclassName="w-4 h-4text-blue-400animate-pulse" />
            <spanclassName="text-blue-300text-smfont-semibold">
              OCTOBER2025 - BREAKTHROUGHAIOPERATIONS
            </span>
          </div>
          <h2className="text-4xlmd: text-5xlfont-boldtext-whitemb-4">
            TransformYourEnterprise Operations
          </h2>
          <pclassName="text-xltext-gray-300max-w-3xlmx-auto">
            Threerevolutionaryplatforms deliveringunprecedentedROIsecurityandoperationalexcellence
          </p>
        </div>
        {/* ArticlesGrid */}
        <divclassName = "gridmd: grid-cols-3gap-6mb-8">
          { newArticles.map((articleindex) = > {
            constIcon = article.icon; return (
              <Linkkey = { index  }to={ article.link } className="grouprelativebg-white/5backdrop-blur-smrounded-2xlp-6borderborder-white/10hover: border-white/30transition-allduration-300hover:scale-105hover:shadow-2xl"
              >
                {/* Gradientoverlay */}
                <divclassName = { `absoluteinset-0bg-gradient-to-br ${article.color }opacity-0group-hover: opacity-10rounded-2xltransition-opacityduration-300`} />
                {/* Content */}
                <divclassName = "relativez-10" > <divclassName = { `w-12h-12rounded-xlbg-gradient-to-br ${article.color }flexitems-centerjustify-centermb-4group-hover: scale-110transition-transformduration-300`}>
                    <IconclassName = "w-6 h-6text-white" />
                  </div>
                  {/* Title */}
                  <h3className="text-xlfont-boldtext-whitemb-2group-hover: text-blue-300transition-colors">
                    {article.title}
                  </h3>
                  {/* Description */}
                  <pclassName = "text-gray-400text-smmb-4line-clamp-3">
                    {article.description}
                  </p>
                  {/* Stats */}
                  <divclassName="flexitems-centerjustify-betweenmb-4">
                    <spanclassName="text-xsfont-semiboldtext-green-400bg-green-400/10px-3py-1rounded-full">
                      {article.stats}
                    </span>
                  </div>
                  {/* CTA */}
                  <divclassName="flexitems-centertext-blue-400group-hover: text-blue-300transition-colors">
                    <spanclassName="text-smfont-semiboldmr-2">ReadFullGuide</span>
                    <ArrowRight,className="w-4 h-4group-hover:translate-x-1transition-transform" />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
        {/* BottomCTA */}
        <divclassName = "text-center">
          <divclassName="inline-flexflex-colsm: flex-rowgap-4items-center">
            <Linkto="/blog"
              className="inline-flexitems-centergap-2px-8py-4bg-gradient-to-rfrom-blue-600to-blue-500text-whitefont-boldrounded-xlhover:from-blue-500hover:to-blue-400transition-allduration-300shadow-lghover:shadow-blue-500/50group"
            >
              <span>ExploreAllAI Insights</span>
              <ArrowRight,className="w-5 h-5group-hover:translate-x-1transition-transform" />
            </Link>
            <Linkto="/contact"
              className="inline-flexitems-centergap-2px-8py-4bg-white/10backdrop-blur-smtext-whitefont-boldrounded-xlhover:bg-white/20transition-allduration-300borderborder-white/20"
            >
              <span>ScheduleExpertConsultation</span>
            </Link>
          </div>
        </div>
        {/* TrustIndicators */}
        <divclassName = "mt-12gridgrid-cols-2md: grid-cols-4gap-6text-center">
          <div>
            <divclassName="text-3xlfont-boldtext-whitemb-1">99.2%</div>
            <divclassName="text-smtext-gray-400">SecurityDetection</div>
          </div>
          <div>
            <divclassName="text-3xlfont-boldtext-whitemb-1">67%</div>
            <divclassName="text-smtext-gray-400">CostReduction</div>
          </div>
          <div>
            <divclassName="text-3xlfont-boldtext-whitemb-1">99.94%</div>
            <divclassName="text-smtext-gray-400">SystemUptime</div>
          </div>
          <div>
            <divclassName="text-3xlfont-boldtext-whitemb-1">$127M+</div>
            <divclassName="text-smtext-gray-400">AnnualSavings</div>
          </div>
        </div>
      </div>
    </div>
  );
};
exportdefaultOctober2025AIOperationsBanner;
