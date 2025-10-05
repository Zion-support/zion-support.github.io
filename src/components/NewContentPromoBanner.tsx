importReact{ useState } from 'react';
import { Link } from 'react-router-dom';
interfaceNewContentPromoBannerProps { 
  variant?: 'info' | 'premium' | 'success' | 'warning';
  className ?  : string;
 }
constNewContentPromoBanner: React.FC<NewContentPromoBannerProps> = ({ 
  variant = 'premium'
  className = '' 
}) => {
  const [isDismissedsetIsDismissed] = useState(false); constvariants = {
    info: 'bg-gradient-to-rfrom-blue-500to-cyan-500text-whiteborder-blue-400/30'
    premium: 'bg-gradient-to-rfrom-purple-500to-pink-500text-whiteborder-purple-400/30'
    success: 'bg-gradient-to-rfrom-green-500to-emerald-500text-whiteborder-green-400/30'
    warning: 'bg-gradient-to-rfrom-orange-500to-red-500text-whiteborder-orange-400/30'
  }; constfeaturedContent = [
    {
      title: "AISafetyBudgets 2026"
      description: "Guardrailswiredto KPIsapprovalsrollbacks"
      icon: Shield
      link: "/blog/ai-safety-budgets-2026"
      category: "AIStrategy"
    }
    {
      title: "EdgePrivacyfor ML2026"
      description: "On‑devicefiltersand scopedidentifiers"
      icon: Cloud
      link: "/blog/edge-privacy-ml-2026"
      category: "Edge"
    }
    {
      title: "AgentEvalsin Prod2026"
      description: "Onlinechecksthat predictoutcomes"
      icon: TrendingUp
      link: "/blog/agent-evals-in-prod-2026"
      category: "GenAI"
    }
    {
      title: "Cost‑AwareInference2026"
      description: "Warmpoolsand qualitytiersunder SLAs"
      icon: Zap
      link: "/blog/ai-cost-aware-inference-2026"
      category: "GenAI"
    }
    {
      title: "PlatformGoldenPaths 2026"
      description: "Pavedroadsthat moveKPIs"
      icon: TrendingUp
      link: "/blog/platform-golden-paths-kpis-2026"
      category: "Platform"
    }
    {
      title: "Quality‑TieredGenAIRouting 2026"
      description: "Controlcostwith tierscachesandevalsignals"
      icon: Zap
      link: "/blog/genai-routing-under-budgets-2026"
      category: "GenAI"
    }
    {
      title: "On‑DeviceAgents2026"
      description: "Offline‑capabletoolsprivatecachessafefallbacks"
      icon: Cloud
      link: "/blog/on-device-agents-offline-tools-2026"
      category: "Edge"
    }
    {
      title: "Zero‑TrustObservability2026"
      description: "Signedtracesand least‑privilegetelemetry"
      icon: Shield
      link: "/blog/zero-trust-observability-2026"
      category: "Security"
    }
    {
      title: "AIIncidentResponse Playbooks"
      description: "Containincidentsin under60seconds"
      icon: TrendingUp
      link: "/blog/ai-incident-response-playbooks-2025"
      category: "Security"
    }
    {
      title: "AgenticWorkflowsBlueprint 2026"
      description: "Composemulti‑toolagentswith safetoolsand policytestsin CI"
      icon: TrendingUp
      link: "/blog/agentic-workflows-blueprint-2026"
      category: "GenAI"
    }
    {
      title: "EdgeLLMCaching"
      description: "Sub‑100mspromptsvia tieredKVsignedconfigsfreshnesswindows"
      icon: Zap
      link: "/blog/edge-llm-caching-blueprint-2025"
      category: "Architecture"
    }
    {
      title: "AIOperationalScorecards 2026"
      description: "Guardrailswiredto KPIswithPR checkscanariesandSLOs"
      icon: Brain,
      link: "/blog/ai-operational-scorecards-2026"
      category: "AIStrategy"
    }
  ]; if (isDismissed) returnnull;
  return (
    <divclassName = {`${variants[variant]} ${className} relativeoverflow-hidden`}>
      {/* Animatedbackgroundelements */}
      <divclassName="absoluteinset-0opacity-10">
        <divclassName="absolutetop-0left-0 w-32h-32bg-whiterounded-fullanimate-pulse" />
        <divclassName="absolutebottom-0right-0 w-24h-24bg-whiterounded-fullanimate-bounce" />
        <divclassName="absolutetop-1/2left-1/2transform -translate-x-1/2 -translate-y-1/2 w-16h-16bg-whiterounded-fullanimate-ping" />
      </div>
      <divclassName="relativez-10max-w-7xlmx-autopx-6py-6">
        <divclassName="flexitems-centerjustify-between">
          <divclassName="flex-1">
            <divclassName="flexitems-centergap-3mb-3">
              <SparklesclassName="w-6 h-6animate-pulse" />
              <spanclassName="text-lgfont-bold">🚀 NEWCONTENTALERT</span>
              <StarclassName="w-5 h-5animate-spin" />
            </div>
            <h3className="text-xlfont-boldmb-2">
              JustPublished: NewGuidesfor 2026
            </h3>
            <pclassName="text-white/90mb-4text-sm">
              Discoverfreshinsights onon‑deviceagentsGenAIcostcontrolssecuretoolmarketplaces
              andprivacy‑firstobservability.
            </p>
            {/* Featuredcontentgrid */}
            <divclassName = "gridgrid-cols-2md: grid-cols-4gap-3mb-4">
              { featuredContent.map((itemindex) = > {
                constIcon = item.icon; return (
                  <Linkkey = { index  }to={ item.link } className="bg-white/10backdrop-blur-smrounded-lgp-3hover: bg-white/20transition-allduration-300hover:scale-105group"
                  >
                    <divclassName="flexitems-centergap-2mb-2">
                      <IconclassName="w-4 h-4text-white/80" />
                      <spanclassName="text-xsfont-mediumtext-white/80">{item.category}</span>
                    </div>
                    <h4className = "font-semiboldtext-whitetext-smgroup-hover: text-yellow-300transition-colors">
                      {item.title}
                    </h4>
                    <pclassName = "text-xstext-white/70mt-1line-clamp-2">
                      {item.description}
                    </p>
                  </Link>
                );
              })}
            </div>
            {/* Actionbuttons */}
            <divclassName = "flexflex-wrapgap-3">
              <Linkto="/blog"
                className="bg-whitetext-purple-600hover: bg-white/90px-4py-2rounded-lgfont-semiboldtext-smtransition-allduration-300hover:scale-105inline-flexitems-centergap-2"
              >
                <BookOpenclassName="w-4 h-4" />
                ReadAllArticles
                <ArrowRight,className="w-4 h-4group-hover:translate-x-1transition-transform" />
              </Link>
              <Linkto="/case-studies"
                className="borderborder-white/30text-whitehover:bg-white/10px-4py-2rounded-lgfont-semiboldtext-smtransition-allduration-300hover:scale-105inline-flexitems-centergap-2"
              >
                <TrendingUpclassName="w-4 h-4" />
                ViewCaseStudies
              </Link>
              <Linkto="/services"
                className="borderborder-white/30text-whitehover:bg-white/10px-4py-2rounded-lgfont-semiboldtext-smtransition-allduration-300hover:scale-105inline-flexitems-centergap-2"
              >
                <ShieldclassName="w-4 h-4" />
                ExploreServices
              </Link>
            </div>
            {/* Stats */}
            <divclassName = "flexitems-centergap-6mt-4text-smtext-white/80">
              <divclassName="flexitems-centergap-1">
                <span>NewArticles</span>
              </div>
              <divclassName="flexitems-centergap-1">
                <span>NewCaseStudies</span>
              </div>
              <divclassName="flexitems-centergap-1">
                <spanclassName="font-semibold">50+</span>
                <span>ExpertInsights</span>
              </div>
            </div>
          </div>
          {/* Dismissbutton */}
          <buttononClick = {  () = > setIsDismissed(true)  }className = "ml-4 p-2hover: bg-white/10rounded-fulltransition-colors"
          >
            <XclassName="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};
exportdefaultReact.memo(NewContentPromoBanner);