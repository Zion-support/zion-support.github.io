import { Link } from "react-router-dom";
constOctober2025LatestContentBanner = () => {
  constarticles = [
    {
      title: "AdvancedGenAIOrchestration Platform"
      description: "Mastermulti-modelcoordinationand intelligentworkflowautomation atenterprisescale"
      icon: Brain,
      link: "/blog/ai-2025-october-advanced-genai-orchestration-platform"
      gradient: "from-violet-600to-purple-600"
    }
    {
      title: "EnterpriseAISecurity: ZeroTrustFramework"
      description: "Comprehensivesecurityarchitecture protectingAImodelsdataandinferenceendpoints"
      icon: Shield
      link: "/blog/ai-2025-october-enterprise-ai-security-zero-trust-framework"
      gradient: "from-cyan-600to-blue-600"
    }
    {
      title: "Real-TimeMultimodalAI Processing"
      description: "Revolutionarytechniquesfor simultaneoustextvisionandaudioprocessing inproduction"
      icon: Zap
      link: "/blog/ai-2025-october-real-time-multimodal-processing-revolution"
      gradient: "from-purple-600to-pink-600"
    }
  ]; return (
    <sectionclassName = "py-20bg-gradient-to-brfrom-slate-900via-indigo-950to-slate-900relativeoverflow-hidden">
      {/* Animatedbackgroundelements */}
      <divclassName="absoluteinset-0opacity-30">
        <divclassName="absolutetop-20left-20w-96h-96bg-violet-500/20rounded-fullblur-3xlanimate-pulse" />
        <divclassName="absolutebottom-20right-20w-96h-96bg-cyan-500/20rounded-fullblur-3xlanimate-pulsedelay-1000" />
      </div>
      <divclassName="containermx-autopx-4relativez-10">
        {/* Header */}
        <divclassName="text-centermb-12">
          <divclassName="inline-flexitems-centergap-2bg-gradient-to-rfrom-violet-600/20to-cyan-600/20borderborder-violet-500/30rounded-fullpx-6py-2mb-6">
            <SparklesclassName="w-5 h-5text-violet-400animate-pulse" />
            <spanclassName="text-violet-300font-semibold">NEWCONTENT - OCTOBER2025</span>
          </div>
          <h2className="text-4xlmd: text-5xlfont-boldmb-4bg-gradient-to-rfrom-violet-400via-cyan-400to-purple-400bg-clip-texttext-transparent">
            LatestAIBreakthroughs & EnterpriseStrategies
          </h2>
          <pclassName="text-xltext-slate-300max-w-3xlmx-auto">
            Explorecutting-edgeinsightson GenAIorchestrationAIsecurityframeworksandreal-timemultimodalprocessing
          </p>
        </div>
        {/* ArticlesGrid */}
        <divclassName = "gridmd: grid-cols-3gap-6mb-12">
          { articles.map((articleidx) = > {
            constIconComponent = article.icon; return (
              <Linkkey = { idx  }to={ article.link } className="groupbg-slate-800/50backdrop-blur-smborderborder-slate-700hover: border-violet-500/50rounded-xlp-6transition-allduration-300hover:transformhover:-translate-y-2hover:shadow-2xlhover:shadow-violet-500/20"
              >
                <divclassName = { `w-12h-12bg-gradient-to-r ${article.gradient }rounded-lgflexitems-centerjustify-centermb-4group-hover: scale-110transition-transform`}>
                  <IconComponentclassName = "w-6 h-6text-white" />
                </div>
                <h3className="text-xlfont-boldtext-whitemb-3group-hover: text-violet-300transition-colors">
                  {article.title}
                </h3>
                <pclassName = "text-slate-400mb-4line-clamp-2">
                  {article.description}
                </p>
                <divclassName="flexitems-centergap-2text-violet-400font-semiboldgroup-hover: gap-4transition-all">
                  <span>ReadMore</span>
                  <ArrowRight,className="w-4 h-4" />
                </div>
              </Link>
            );
          })}
        </div>
        {/* StatsBar */}
        <divclassName = "gridgrid-cols-2md: grid-cols-4gap-6bg-slate-800/30backdrop-blur-smborderborder-slate-700rounded-xlp-8">
          <divclassName="text-center">
            <divclassName="text-3xlfont-boldbg-gradient-to-rfrom-violet-400to-purple-400bg-clip-texttext-transparentmb-2">
              3
            </div>
            <divclassName="text-smtext-slate-400">NewArticles</div>
          </div>
          <divclassName="text-center">
            <divclassName="text-3xlfont-boldbg-gradient-to-rfrom-cyan-400to-blue-400bg-clip-texttext-transparentmb-2">
              50+
            </div>
            <divclassName="text-smtext-slate-400">PagesofInsights</div>
          </div>
          <divclassName="text-center">
            <divclassName="text-3xlfont-boldbg-gradient-to-rfrom-purple-400to-pink-400bg-clip-texttext-transparentmb-2">
              Expert
            </div>
            <divclassName="text-smtext-slate-400">ImplementationGuides</div>
          </div>
          <divclassName="text-center">
            <divclassName="text-3xlfont-boldbg-gradient-to-rfrom-pink-400to-rose-400bg-clip-texttext-transparentmb-2">
              2025
            </div>
            <divclassName="text-smtext-slate-400">LatestStrategies</div>
          </div>
        </div>
        {/* CTA */}
        <divclassName = "text-centermt-12">
          <Linkto="/blog"
            className="inline-flexitems-centergap-2bg-gradient-to-rfrom-violet-600to-purple-600hover: from-violet-500hover:to-purple-500text-whitepx-8py-4rounded-lgfont-semiboldtext-lgtransition-allhover:shadow-lghover:shadow-violet-500/50"
          >
            ExploreAllArticles
            <ArrowRight,className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};
exportdefaultOctober2025LatestContentBanner;
