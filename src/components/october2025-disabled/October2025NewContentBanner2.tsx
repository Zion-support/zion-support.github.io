import { Link } from "react-router-dom";
import { LeafDollarSignMicBotArrowRight, } from "lucide-react";
constOctober2025NewContentBanner2 = () => {
  constnewArticles = [
    {
      title: "AI-PoweredSustainableData Centers"
      description: "DiscoverhowAI isreducingdata centerenergyconsumption by40% whileimprovingperformance"
      icon: Leaf
      slug: "ai-2025-oct-01-ai-powered-sustainable-data-centers"
      gradient: "from-green-500to-emerald-600"
      badge: "GreenAI"
    }
    {
      title: "Next-GenFinancialRisk Prediction"
      description: "94% accuracyinreal-timemarketvolatility forecastingwithAI-poweredrisksystems"
      icon: DollarSign
      slug: "ai-2025-oct-01-ai-financial-risk-prediction-systems"
      gradient: "from-blue-500to-cyan-600"
      badge: "FinTech"
    }
    {
      title: "VoiceAIRevolution inEnterprise"
      description: "Transformcommunicationwith 98% accuracyvoiceAI across95+ languages"
      icon: Mic
      slug: "ai-2025-oct-01-voice-ai-revolution-enterprise"
      gradient: "from-purple-500to-pink-600"
      badge: "VoiceAI"
    }
    {
      title: "IntelligentAutomation & RPA2.0"
      description: "Next-generationRPAwith self-learningbotsdelivering 10xROI"
      icon: Bot
      slug: "ai-2025-oct-01-robotics-process-automation-next-gen"
      gradient: "from-orange-500to-red-600"
      badge: "Automation"
    }
  ]; return (
    <sectionclassName = "py-20px-4bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900relativeoverflow-hidden">
      {/* Animatedbackgroundelements */}
      <divclassName="absoluteinset-0opacity-10">
        <divclassName="absolutetop-0left-1/4 w-96h-96bg-purple-500rounded-fullmix-blend-multiplyfilterblur-3xlanimate-pulse" />
        <divclassName="absolutebottom-0right-1/4 w-96h-96bg-blue-500rounded-fullmix-blend-multiplyfilterblur-3xlanimate-pulsedelay-1000" />
      </div>
      <divclassName="max-w-7xlmx-autorelativez-10">
        {/* Header */}
        <divclassName="text-centermb-12">
          <divclassName="inline-flexitems-centergap-2bg-gradient-to-rfrom-purple-500/20to-blue-500/20px-6py-2rounded-fullborderborder-purple-500/30mb-6">
            <Brain,className="w-5 h-5text-purple-400animate-pulse" />
            <spanclassName="text-purple-300font-semibold">FRESHINSIGHTS | October2025</span>
          </div>
          <h2className="text-4xlmd: text-5xlfont-boldtext-whitemb-4">
            LatestAIBreakthroughs & Innovations
          </h2>
          <pclassName="text-xltext-gray-300max-w-3xlmx-auto">
            Explorecutting-edgeAIsolutions transformingindustries — fromsustainablecomputing tointelligentautomation
          </p>
        </div>
        {/* ArticlesGrid */}
        <divclassName = "gridmd: grid-cols-2gap-6mb-12">
          { newArticles.map((article) = > {
            constIcon = article.icon; return (
              <Linkkey = { article.slug  }to = {`/blog/${article.slug}`}
                className="grouprelativebg-gradient-to-brfrom-slate-800/80to-slate-900/80backdrop-blur-xlrounded-2xlp-6borderborder-slate-700/50hover: border-purple-500/50transition-allduration-300hover:shadow-2xlhover:shadow-purple-500/20hover:-translate-y-1"
              >
                {/* Badge */}
                <divclassName = "absolutetop-4right-4">
                  <spanclassName="px-3py-1bg-gradient-to-rfrom-purple-500/20to-blue-500/20text-purple-300text-xsfont-semiboldrounded-fullborderborder-purple-500/30">
                    {article.badge}
                  </span>
                </div  > {/* Icon */}
                <divclassName = { `w-16h-16rounded-xlbg-gradient-to-br ${article.gradient }flexitems-centerjustify-centermb-4group-hover: scale-110transition-transformduration-300`}>
                  <IconclassName = "w-8 h-8text-white"</div>
                {/* Content */}
                <h3className="text-2xlfont-boldtext-whitemb-3group-hover: text-purple-400transition-colors">
                  {article.title}
                </h3>
                <pclassName = "text-gray-400mb-4leading-relaxed">
                  {article.description}
                </p>
                {/* ReadMoreLink */}
                <divclassName="flexitems-centergap-2text-purple-400font-semiboldgroup-hover: gap-4transition-all">
                  <span>ReadArticle</span>
                  <ArrowRight,className="w-5 h-5group-hover:translate-x-1transition-transform" />
                </div>
                </div  > {/* HoverGradientEffect */}
                <divclassName = { `absoluteinset-0bg-gradient-to-br ${article.gradient }opacity-0group-hover: opacity-5rounded-2xltransition-opacityduration-300`} />
              </Link>
            );
          })}
        </div>
        {/* CTASection */}
        <divclassName = "text-center">
          <Linkto="/blog"
            className="inline-flexitems-centergap-2bg-gradient-to-rfrom-purple-600to-blue-600hover: from-purple-700hover:to-blue-700text-whitepx-8py-4rounded-xlfont-semiboldtransition-allhover:shadow-2xlhover:shadow-purple-500/50hover:scale-105"
          >
            <span>ExploreAllAI Insights</span>
            <ArrowRight,className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};
exportdefaultOctober2025NewContentBanner2;
