import { Link } from "react-router-dom";
import { octoberLatestBreakthroughContent } from "../content/october-2025-latest-breakthrough-content";
constOctober2025LatestBreakthroughBanner = () => { 
  return (
    <divclassName = "bg-gradient-to-brfrom-blue-900via-purple-900to-indigo-900py-16px-4relativeoverflow-hidden"  > {/* Animatedbackgroundeffects */ }
      <divclassName="absoluteinset-0opacity-20">
        <divclassName="absolutetop-0left-0 w-96h-96bg-blue-500rounded-fullfilterblur-3xlanimate-pulse" />
        <divclassName="absolutebottom-0right-0 w-96h-96bg-purple-500rounded-fullfilterblur-3xlanimate-pulse" style={{ animationDelay: '1s' }} />
      </div>
      <divclassName = "max-w-7xlmx-autorelativez-10">
        {/* HeaderSection */}
        <divclassName="text-centermb-12">
          <divclassName="inline-flexitems-centergap-2bg-white/10backdrop-blur-smpx-6py-2rounded-fullmb-6">
            <ZapclassName="w-5 h-5text-yellow-400animate-pulse" />
            <spanclassName="text-whitefont-semiboldtext-sm">
              NEWBREAKTHROUGHCONTENT · OCTOBER2025
            </span>
          </div>
          <h2className="text-4xlmd: text-5xlfont-boldtext-whitemb-4">
            LatestAIInfrastructure Breakthroughs
          </h2>
          <pclassName="text-xltext-blue-200max-w-3xlmx-auto">
            MasteradvancedLLM orchestrationvectordatabaseoptimizationandproduction-readyAIagents withourlatest enterpriseguides
          </p>
        </div>
        {/* ContentCards */}
        <divclassName = "gridmd: grid-cols-3gap-6mb-8">
          {  octoberLatestBreakthroughContent.map((content) = > {
            constIcon = content.icon === "🚀" ? Zap : content.icon === "⚡"  ? Database  : Bot; return (
              <Linkkey = { content.id   }to = {`/blog/${content.slug}`}
                className="groupbg-white/10backdrop-blur-mdborderborder-white/20rounded-xlp-6hover: bg-white/20hover:scale-105transition-allduration-300"
              >
                <divclassName="flexitems-startgap-4mb-4" > <divclassName = { `bg-gradient-to-br ${content.gradient }p-3rounded-lg`}>
                    <IconclassName = "w-6 h-6text-white" />
                  </div>
                  <divclassName="flex-1">
                    <divclassName="text-xstext-blue-300mb-2">{content.category}</div>
                    <h3className="text-lgfont-boldtext-whitemb-2group-hover: text-blue-300transition-colors">
                      {content.title}
                    </h3>
                  </div>
                </div>
                <pclassName = "text-smtext-blue-200mb-4line-clamp-2">
                  {content.description}
                </p>
                {/* KeyMetrics */}
                <divclassName="gridgrid-cols-2gap-2mb-4">
                  { Object.entries(content.metrics).slice(02).map(([keyvalue]) = > (
                    <divkey = { key  }className = "bg-white/5rounded-lgp-2">
                      <divclassName="text-2xlfont-boldtext-white">{value}</div>
                      <divclassName="text-xstext-blue-300capitalize">{key.replace(/([A-Z])/g' $1').trim()}</div>
                    </div>
                  ))}
                </div>
                {/* Highlights */}
                <ulclassName = "space-y-2mb-4">
                  { content.highlights.slice(02).map((highlightidx) = > (
                    <likey = { idx  }className = "flexitems-startgap-2text-xstext-blue-200">
                      <TrendingUpclassName="w-3 h-3text-green-400mt-0.5flex-shrink-0" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
                <divclassName = "flexitems-centergap-2text-smtext-blue-300font-semiboldgroup-hover: gap-4transition-all">
                  ReadFullArticle
                  <ArrowRight,className="w-4 h-4" />
                </div>
              </Link>
            );
          })}
        </div>
        {/* CTASection */}
        <divclassName = "text-centerbg-white/10backdrop-blur-mdborderborder-white/20rounded-xlp-8">
          <h3className="text-2xlfont-boldtext-whitemb-4">
            ReadytoTransform YourAIInfrastructure?
          </h3>
          <pclassName="text-blue-200mb-6max-w-2xlmx-auto">
            Ourexpertshelp Fortune500companies implementtheseadvanced techniques. 
            Getafree consultationandcustom roadmapforyour organization.
          </p>
          <divclassName="flexflex-wrapgap-4justify-center">
            <Linkto="/contact"
              className="inline-flexitems-centergap-2bg-whitetext-blue-900px-8py-4rounded-lgfont-boldhover: bg-blue-50transition-colors"
            >
              ScheduleFreeConsultation
              <ArrowRight,className="w-5 h-5" />
            </Link>
            <Linkto="/blog"
              className="inline-flexitems-centergap-2bg-blue-600text-whitepx-8py-4rounded-lgfont-boldhover:bg-blue-700transition-colors"
            >
              ExploreAllArticles
            </Link>
          </div>
        </div>
        {/* StatsBar */}
        <divclassName = "mt-8gridgrid-cols-2md: grid-cols-4gap-4">
          <divclassName="text-center">
            <divclassName="text-3xlfont-boldtext-whitemb-1">$700B+</div>
            <divclassName="text-smtext-blue-300">CombinedMarketOpportunity</div>
          </div>
          <divclassName="text-center">
            <divclassName="text-3xlfont-boldtext-whitemb-1">60-85%</div>
            <divclassName="text-smtext-blue-300">CostReductionPotential</div>
          </div>
          <divclassName="text-center">
            <divclassName="text-3xlfont-boldtext-whitemb-1">10-100x</div>
            <divclassName="text-smtext-blue-300">PerformanceImprovements</div>
          </div>
          <divclassName="text-center">
            <divclassName="text-3xlfont-boldtext-whitemb-1">99.9%</div>
            <divclassName="text-smtext-blue-300">Enterprise-GradeReliability</div>
          </div>
        </div>
      </div>
    </div>
  );
};
exportdefaultOctober2025LatestBreakthroughBanner;
