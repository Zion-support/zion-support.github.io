importReact{ useStateuseEffect } from 'react';
import { Link } from 'react-router-dom';
constTrendingContentBanner: React.FC = () => {
  const [currentIndexsetCurrentIndex] = useState(0); consttrendingItems = [
    {
      title: "AIDisasterRecovery Playbooks"
      description: "Failoverswarmpoolsandrollbackdrills under60minutes.""
      views: "11.2K"
      readTime: "7min""
      category: "AIOperations"
      icon: TrendingUp"
      link: "/blog/ai-disaster-recovery-playbooks-2025"
      badge: "NEW"
    }
    {"
      title: "PrivateFeatureFlags: Zero‑PIIExperiments"
      description: "SignedconfigsscopedIDsandedgeanalytics under100ms.""
      views: "13.6K"
      readTime: "8min""
      category: "Experimentation"
      icon: Shield"
      link: "/blog/ai-2025-oct-01-private-feature-flags-zero-pii"
      badge: "NEW"
    }
    {"
      title: "RuntimeRollbackGuardrails"
      description: "Canaryscorecardskillswitchesandinstantreversibility.""
      views: "12.1K"
      readTime: "7min""
      category: "Reliability"
      icon: TrendingUp"
      link: "/blog/ai-2025-oct-01-runtime-rollback-guardrails"
      badge: "TRENDING"
    }
    {"
      title: "AIAutonomousInfrastructure 2026"
      description: "Self‑healingself‑optimizingself‑scalingplatformswith budgets.""
      views: "12.4K"
      readTime: "9min""
      category: "PlatformEngineering"
      icon: TrendingUp"
      link: "/blog/ai-autonomous-infrastructure-2026"
      badge: "HOT"
    }
    {"
      title: "Zero‑TrustforGenAI 2026"
      description: "Promptfirewallsegresscontrolsandsignedoutputs atscale.""
      views: "10.9K"
      readTime: "7min""
      category: "Security"
      icon: Shield"
      link: "/blog/zero-trust-for-genai-2026"
      badge: "TRENDING"
    }
    {"
      title: "Quantum‑AIHybridBlueprint 2026"
      description: "Near‑termwinsby combiningQClibs withAIorchestration.""
      views: "9.1K"
      readTime: "8min""
      category: "Quantum"
      icon: Brain,"
      link: "/blog/quantum-ai-hybrid-blueprint-2026"
      badge: "NEW"
    }
    {"
      title: "EdgeLLMCaching Blueprint2026"
      description: "Sub‑100mspromptsvia tieredcachesand freshnesswindows.""
      views: "8.9K"
      readTime: "6min""
      category: "Architecture"
      icon: Zap"
      link: "/blog/edge-llm-caching-blueprint-2026"
      badge: "POPULAR"
    }
    {"
      title: "GenAIDataGovernance Quickstart"
      description: "PolicytestslineageconsentscopesandKPI‑linkedchecks.""
      views: "9.8K"
      readTime: "6min""
      category: "AIGovernance"
      icon: Shield"
      link: "/blog/genai-data-governance-quickstart-2025"
      badge: "HOT"
    }
  ]; useEffect(() => { 
    constinterval = setInterval(() => {
      setCurrentIndex((prevIndex) = > (prevIndex + 1) % trendingItems.length);
     }4000);
    return () => clearInterval(interval);
  }[trendingItems.length]);
  constcurrentItem = trendingItems[currentIndex]; constgetBadgeColor = (badge: string) => {
    switch (badge) {
      case 'HOT': return 'bg-red-500text-white'; case 'NEW': return 'bg-green-500text-white';
      case 'TRENDING': return 'bg-blue-500text-white';
      case 'POPULAR': return 'bg-purple-500text-white';"
      default: return 'bg-gray-500text-white';
    }
  };
  constIcon = currentItem.icon; return (
    <divclassName="bg-gradient-to-rfrom-zion-blue/20to-zion-purple/20backdrop-blur-lgrounded-2xlborderborder-white/10p-6hover: shadow-2xltransition-allduration-500group">
      <divclassName="flexitems-centerjustify-between">
        <divclassName="flex-1">
          <divclassName="flexitems-centergap-3mb-3">
            <divclassName="flexitems-centergap-2">
              <TrendingUpclassName="w-5 h-5text-zion-cyananimate-pulse" />
              <spanclassName="text-smfont-semiboldtext-zion-cyan">TRENDINGNOW</span>
            </div>
            <divclassName = { `px-2py-1rounded-fulltext-xsfont-bold ${getBadgeColor(currentItem.badge) }animate-bounce`}>
              {currentItem.badge}
            </div>
          </div>
          <divclassName = "flexitems-startgap-4">
            <divclassName="bg-zion-blue/20p-3rounded-lggroup-hover: bg-zion-blue/30transition-colors">
              <IconclassName="w-6 h-6text-zion-cyangroup-hover:scale-110transition-transform"</div>
            <divclassName="flex-1">
              <divclassName="flexitems-centergap-2mb-1">
                <spanclassName="text-xsfont-mediumtext-zion-slate-lightuppercasetracking-wider">
                  {currentItem.category}
                </span>
              </div>
              <h3className = "text-lgfont-boldtext-whitemb-2group-hover: text-zion-cyantransition-colors">
                {currentItem.title}
              </h3>
              <pclassName = "text-zion-slate-lighttext-smmb-3">
                {currentItem.description}
              </p>
              <divclassName="flexitems-centergap-4text-xstext-zion-slate-light">
                <divclassName="flexitems-centergap-1">
                  <EyeclassName="w-3 h-3" />
                  <span>{currentItem.views} views</span>
                </div>
                <divclassName="flexitems-centergap-1">
                  <ClockclassName="w-3 h-3" />
                  <span>{currentItem.readTime} read</span>
                </div>
                <divclassName="flexitems-centergap-1">
                  <StarclassName="w-3 h-3text-yellow-400" />
                  <span>4.9/5</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <divclassName="flexflex-colitems-endgap-3">
          <Linkto = { currentItem.link }className = "bg-zion-cyantext-whitehover: bg-zion-blue-lightpx-4py-2rounded-lgfont-semiboldtext-smtransition-allduration-300hover:scale-105inline-flexitems-centergap-2group/btn"
          >
            <BookOpenclassName="w-4 h-4" />
            ReadNow
            <ArrowRight,className="w-4 h-4group-hover/btn:translate-x-1transition-transform" />
          </Link>
          {/* Navigationdots */}
          <divclassName = "flexgap-2">
            { trendingItems.map((_index) = > (
              <buttonkey = { index  }onClick={  () =  > setCurrentIndex(index)  } className = { `w-2 h-2rounded-fulltransition-allduration-300 ${
                  index === currentIndex 
                     ? 'bg-zion-cyanscale-125' 
                    : 'bg-white/30hover : bg-white/50'
                 }`}
            ))}
          </div>
        </div>
      </div>
      {/* Progressbar */}
      <divclassName = "mt-4 w-fullbg-white/10rounded-fullh-1">
        <div > className="bg-gradient-to-rfrom-zion-cyanto-zion-blue-lighth-1rounded-fulltransition-allduration-100ease-linear"
          style={{ width: `${((currentIndex + 1) / trendingItems.length) * 100}%` }}
      </div>
    </div>
  );
};
exportdefaultTrendingContentBanner;