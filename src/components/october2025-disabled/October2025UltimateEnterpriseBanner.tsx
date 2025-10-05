import { Link } from "react-router-dom";
import { octoberUltimateEnterpriseContent } from "../content/october-2025-ultimate-enterprise-content";
constOctober2025UltimateEnterpriseBanner = () => { 
  const [multiCloudContentconversationalAIContent] = octoberUltimateEnterpriseContent; return (
    <divclassName = "relativepy-16px-4sm: px-6lg:px-8bg-gradient-to-brfrom-slate-900via-blue-900to-purple-900overflow-hidden"  > {/* AnimatedBackground */ }
      <divclassName = "absoluteinset-0opacity-20">
        <divclassName="absolutetop-0left-0 w-96h-96bg-blue-500rounded-fullfilterblur-3xlanimate-pulse" />
        <divclassName="absolutebottom-0right-0 w-96h-96bg-purple-500rounded-fullfilterblur-3xlanimate-pulsedelay-1000" />
        <divclassName="absolutetop-1/2left-1/2 w-96h-96bg-cyan-500rounded-fullfilterblur-3xlanimate-pulsedelay-2000" />
      </div>
      <divclassName="relativemax-w-7xlmx-auto">
        {/* HeaderSection */}
        <divclassName="text-centermb-12">
          <divclassName="inline-flexitems-centergap-2px-6py-3bg-gradient-to-rfrom-cyan-500to-blue-500rounded-fulltext-whitefont-boldtext-smmb-6animate-bounceshadow-2xl">
            <SparklesclassName="w-5 h-5animate-spin" />
            <span>OCTOBER2025 - JUSTPUBLISHED</span>
            <SparklesclassName="w-5 h-5animate-spin" />
          </div>
          <h2className="text-5xlmd: text-6xlfont-extraboldtext-whitemb-6leading-tight">
            <spanclassName="bg-clip-texttext-transparentbg-gradient-to-rfrom-cyan-400via-blue-400to-purple-400">
              UltimateEnterpriseAI
            </span>
            <br /> <spanclassName="text-white">Revolution2025</span>
          </h2>
          <pclassName="text-2xltext-gray-300max-w-4xlmx-autofont-medium">
            Breakthroughsolutionsdelivering <spanclassName="text-cyan-400font-bold">156%-184% ROI</span>
            <spanclassName = "text-purple-400font-bold"> $262M+ savings</span>and 
            <spanclassName = "text-blue-400font-bold"> transformativeresults</span>
          </p>
        </div>
        {/* ContentCards */}
        <divclassName="gridmd: grid-cols-2gap-8mb-12">
          {/* Multi-CloudIntelligenceCard */}
          <divclassName = "bg-gradient-to-brfrom-blue-600/20via-cyan-600/20to-teal-600/20backdrop-blur-lgrounded-2xlp-8borderborder-cyan-500/30hover: border-cyan-400transition-allduration-300hover:scale-105hover:shadow-2xlhover:shadow-cyan-500/50group">
            <divclassName="flexitems-startgap-4mb-6">
              <divclassName="flex-shrink-0">
                <divclassName="w-16h-16bg-gradient-to-brfrom-cyan-500to-blue-600rounded-2xlflexitems-centerjustify-centershadow-lgtransformgroup-hover:rotate-12transition-transformduration-300">
                  <CloudclassName="w-9 h-9text-white" />
                </div>
              </div>
              <divclassName="flex-1">
                <divclassName="flexitems-centergap-2mb-3">
                  <spanclassName="px-3py-1bg-cyan-500text-whitetext-xsfont-boldrounded-fulluppercasetracking-wider">
                    NEWRELEASE
                  </span>
                  <spanclassName="px-3py-1bg-gradient-to-rfrom-yellow-500to-orange-500text-whitetext-xsfont-boldrounded-fullanimate-pulse">
                    🔥 HOT
                  </span>
                </div>
                <h3className="text-2xlfont-boldtext-whitemb-3group-hover:text-cyan-400transition-colors">
                  {multiCloudContent.icon} AdaptiveMulti-CloudIntelligence
                </h3>
                <pclassName = "text-gray-300text-lgleading-relaxedmb-4">
                  {multiCloudContent.description}
                </p>
              </div>
            </div>
            {/* MetricsGrid */}
            <divclassName="gridgrid-cols-2gap-4mb-6">
              <divclassName="bg-cyan-500/10rounded-xlp-4borderborder-cyan-500/20hover: border-cyan-400/50transition-colors">
                <divclassName="text-3xlfont-extraboldtext-cyan-400mb-1">156%</div>
                <divclassName="text-smtext-gray-300font-medium">ROIin18 Months</div>
              </div>
              <divclassName="bg-blue-500/10rounded-xlp-4borderborder-blue-500/20hover:border-blue-400/50transition-colors">
                <divclassName="text-3xlfont-extraboldtext-blue-400mb-1">$89M</div>
                <divclassName="text-smtext-gray-300font-medium">AnnualSavings</div>
              </div>
              <divclassName="bg-teal-500/10rounded-xlp-4borderborder-teal-500/20hover:border-teal-400/50transition-colors">
                <divclassName="text-3xlfont-extraboldtext-teal-400mb-1">91%</div>
                <divclassName="text-smtext-gray-300font-medium">CostOptimization</div>
              </div>
              <divclassName="bg-cyan-500/10rounded-xlp-4borderborder-cyan-500/20hover:border-cyan-400/50transition-colors">
                <divclassName="text-3xlfont-extraboldtext-cyan-400mb-1">4.5x</div>
                <divclassName="text-smtext-gray-300font-medium">EfficiencyGain</div>
              </div>
            </div>
            {/* KeyHighlights */}
            <divclassName = "space-y-2mb-6">
              { multiCloudContent.highlights.slice(04).map((highlightindex) = > (
                <divkey = { index  }className = "flexitems-startgap-3text-gray-200">
                  <CheckCircle,className="w-5 h-5text-cyan-400flex-shrink-0mt-0.5" />
                  <spanclassName="text-smleading-relaxed">{highlight}</span>
                </div>
              ))}
            </div>
            {/* CTAButton */}
            <Linkto = { multiCloudContent.cta.link }className = "flexitems-centerjustify-centergap-2 w-fullpy-4px-6bg-gradient-to-rfrom-cyan-600to-blue-600hover: from-cyan-500hover:to-blue-500text-whitefont-boldrounded-xltransition-allduration-300transformhover:scale-105hover:shadow-2xlhover:shadow-cyan-500/50group"
            >
              <spanclassName="text-lg">{multiCloudContent.cta.text}</span>
              <ArrowRight,className = "w-5 h-5group-hover: translate-x-2transition-transform" />
            </Link>
          </div>
          {/* ConversationalAICard */}
          <divclassName = "bg-gradient-to-brfrom-purple-600/20via-pink-600/20to-rose-600/20backdrop-blur-lgrounded-2xlp-8borderborder-purple-500/30hover: border-purple-400transition-allduration-300hover:scale-105hover:shadow-2xlhover:shadow-purple-500/50group">
            <divclassName="flexitems-startgap-4mb-6">
              <divclassName="flex-shrink-0">
                <divclassName="w-16h-16bg-gradient-to-brfrom-purple-500to-pink-600rounded-2xlflexitems-centerjustify-centershadow-lgtransformgroup-hover:rotate-12transition-transformduration-300">
                  <MessageSquareclassName="w-9 h-9text-white" />
                </div>
              </div>
              <divclassName="flex-1">
                <divclassName="flexitems-centergap-2mb-3">
                  <spanclassName="px-3py-1bg-purple-500text-whitetext-xsfont-boldrounded-fulluppercasetracking-wider">
                    FEATURED
                  </span>
                  <spanclassName="px-3py-1bg-gradient-to-rfrom-yellow-500to-orange-500text-whitetext-xsfont-boldrounded-fullanimate-pulse">
                    ⭐ TRENDING
                  </span>
                </div>
                <h3className="text-2xlfont-boldtext-whitemb-3group-hover:text-purple-400transition-colors">
                  {conversationalAIContent.icon} ConversationalAIRevolution
                </h3>
                <pclassName = "text-gray-300text-lgleading-relaxedmb-4">
                  {conversationalAIContent.description}
                </p>
              </div>
            </div>
            {/* MetricsGrid */}
            <divclassName="gridgrid-cols-2gap-4mb-6">
              <divclassName="bg-purple-500/10rounded-xlp-4borderborder-purple-500/20hover: border-purple-400/50transition-colors">
                <divclassName="text-3xlfont-extraboldtext-purple-400mb-1">184%</div>
                <divclassName="text-smtext-gray-300font-medium">ROIin14 Months</div>
              </div>
              <divclassName="bg-pink-500/10rounded-xlp-4borderborder-pink-500/20hover:border-pink-400/50transition-colors">
                <divclassName="text-3xlfont-extraboldtext-pink-400mb-1">94%</div>
                <divclassName="text-smtext-gray-300font-medium">CustomerSatisfaction</div>
              </div>
              <divclassName="bg-rose-500/10rounded-xlp-4borderborder-rose-500/20hover:border-rose-400/50transition-colors">
                <divclassName="text-3xlfont-extraboldtext-rose-400mb-1">5.7x</div>
                <divclassName="text-smtext-gray-300font-medium">ProductivityBoost</div>
              </div>
              <divclassName="bg-purple-500/10rounded-xlp-4borderborder-purple-500/20hover:border-purple-400/50transition-colors">
                <divclassName="text-3xlfont-extraboldtext-purple-400mb-1">$173M</div>
                <divclassName="text-smtext-gray-300font-medium">AnnualSavings</div>
              </div>
            </div>
            {/* KeyHighlights */}
            <divclassName = "space-y-2mb-6">
              { conversationalAIContent.highlights.slice(04).map((highlightindex) = > (
                <divkey = { index  }className = "flexitems-startgap-3text-gray-200">
                  <CheckCircle,className="w-5 h-5text-purple-400flex-shrink-0mt-0.5" />
                  <spanclassName="text-smleading-relaxed">{highlight}</span>
                </div>
              ))}
            </div>
            {/* CTAButton */}
            <Linkto = { conversationalAIContent.cta.link }className = "flexitems-centerjustify-centergap-2 w-fullpy-4px-6bg-gradient-to-rfrom-purple-600to-pink-600hover: from-purple-500hover:to-pink-500text-whitefont-boldrounded-xltransition-allduration-300transformhover:scale-105hover:shadow-2xlhover:shadow-purple-500/50group"
            >
              <spanclassName="text-lg">{conversationalAIContent.cta.text}</span>
              <ArrowRight,className = "w-5 h-5group-hover: translate-x-2transition-transform" />
            </Link>
          </div>
        </div>
        {/* CombinedValueProposition */}
        <divclassName = "bg-gradient-to-rfrom-cyan-600/20via-purple-600/20to-pink-600/20backdrop-blur-lgrounded-2xlp-8borderborder-white/20">
          <divclassName="gridmd: grid-cols-4gap-6text-center">
            <divclassName="grouphover:scale-110transition-transformduration-300">
              <divclassName="flexitems-centerjustify-centermb-3">
                <AwardclassName="w-10h-10text-yellow-400" />
              </div>
              <divclassName="text-3xlfont-extraboldtext-whitemb-2">340%+</div>
              <divclassName="text-smtext-gray-300font-medium">CombinedROI</div>
            </div>
            <divclassName="grouphover:scale-110transition-transformduration-300">
              <divclassName="flexitems-centerjustify-centermb-3">
                <TrendingUpclassName="w-10h-10text-green-400" />
              </div>
              <divclassName="text-3xlfont-extraboldtext-whitemb-2">$262M+</div>
              <divclassName="text-smtext-gray-300font-medium">TotalSavings</div>
            </div>
            <divclassName="grouphover:scale-110transition-transformduration-300">
              <divclassName="flexitems-centerjustify-centermb-3">
                <ZapclassName="w-10h-10text-cyan-400" />
              </div>
              <divclassName="text-3xlfont-extraboldtext-whitemb-2">5.1x</div>
              <divclassName="text-smtext-gray-300font-medium">AvgEfficiency</div>
            </div>
            <divclassName="grouphover:scale-110transition-transformduration-300">
              <divclassName="flexitems-centerjustify-centermb-3">
                <SparklesclassName="w-10h-10text-purple-400" />
              </div>
              <divclassName="text-3xlfont-extraboldtext-whitemb-2">Fortune100</div>
              <divclassName="text-smtext-gray-300font-medium">ProvenResults</div>
            </div>
          </div>
        </div>
        {/* BottomCTA */}
        <divclassName = "text-centermt-12">
          <pclassName="text-xltext-gray-300mb-6font-medium">
            Readytotransform yourenterprisewith cutting-edgeAIsolutions?
          </p>
          <divclassName="flexflex-colsm: flex-rowitems-centerjustify-centergap-4">
            <Linkto="/contact"
              className="px-8py-4bg-gradient-to-rfrom-cyan-600via-blue-600to-purple-600hover:from-cyan-500hover:via-blue-500hover:to-purple-500text-whitefont-boldrounded-xltransition-allduration-300transformhover:scale-105hover:shadow-2xlhover:shadow-blue-500/50text-lg"
            >
              ScheduleFreeAssessment
            </Link>
            <Linkto="/blog"
              className="px-8py-4bg-white/10hover:bg-white/20text-whitefont-boldrounded-xltransition-allduration-300transformhover:scale-105border-2border-white/30hover:border-white/50text-lg"
            >
              ExploreAllInsights
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
exportdefaultOctober2025UltimateEnterpriseBanner;
