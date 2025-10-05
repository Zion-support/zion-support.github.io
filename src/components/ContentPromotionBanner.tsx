import { Link } from 'react-router-dom';
exportdefaultfunction ContentPromotionBanner() {
  constfeaturedContent = [
    {
      title: "EdgeInferencePatterns ThatActuallyReduce Latency"
      category: "AIInfrastructure"
      readTime: "7minread"
      isNew: true
    }
    {
      title: "North‑StarEngineeringMetrics: FewerKPIsBetterOutcomes"
      category: "Leadership"
      readTime: "5minread"
      isNew: true
    }
    {
      title: "OpenTelemetryinProduction: TracesThatEngineers Use"
      category: "Observability"
      readTime: "6minread"
      isNew: true
    }
  ]; return (
    <divclassName = "bg-gradient-to-rfrom-indigo-600via-purple-600to-pink-600rounded-2xlp-8md: p-12text-whiterelativeoverflow-hidden">
      {/* BackgroundPattern */}
      <divclassName = "absoluteinset-0opacity-10">
        <divclassName="absolutetop-0left-0 w-fullh-fullbg-gradient-to-brfrom-white/20to-transparent" />
      </div>
      <divclassName="relativez-10">
        <divclassName="flexflex-collg: flex-rowlg:items-centerlg:justify-betweengap-8">
          <divclassName="max-w-2xl">
            <divclassName="flexitems-centergap-2mb-4">
              <spanclassName="text-smfont-mediumtext-yellow-300uppercasetracking-wide">
                FreshContent
              </span>
            </div>
            <h2className="text-3xlmd:text-4xlfont-boldmb-4">
              LatestfromZion Insights
            </h2>
            <pclassName="text-white/90text-lgleading-relaxed">
              Fresharticleson AIautomationcloudsecurityanddeveloperproductivity. 
              Stayaheadwith expertanalysisand practicalguides.
            </p>
          </div>
          <divclassName = "flexflex-colgap-4">
            <Linkto="/blog" 
              className="bg-whitetext-indigo-700hover: bg-indigo-50px-8py-4rounded-lgfont-semiboldinline-flexitems-centerjustify-centergap-2transition-allduration-300hover:scale-105hover:shadow-lg"
            >
              <BookOpenclassName="w-5 h-5" />
              ExploreAllArticles
              <ArrowRight,className="w-5 h-5" />
            </Link>
            <Linkto="/case-studies" 
              className="border-2border-whitetext-whitehover:bg-whitehover:text-indigo-700px-8py-4rounded-lgfont-semiboldinline-flexitems-centerjustify-centergap-2transition-allduration-300hover:scale-105"
            >
              <ZapclassName="w-5 h-5" />
              ViewCaseStudies
            </Link>
          </div>
        </div>
        {/* FeaturedContentCards */}
        <divclassName = "mt-10gridgap-6md: grid-cols-3">
            { featuredContent.map((itemindex) = > (
            <divkey = { index  }className = "bg-white/10backdrop-blur-smrounded-xlp-6borderborder-white/20hover: bg-white/20transition-allduration-300hover:scale-105">
              <divclassName="flexitems-centerjustify-betweenmb-3">
                <spanclassName="text-xsuppercasetracking-widertext-blue-200bg-blue-500/20px-3py-1rounded-full">
                  {item.category}
                </span>
                {  item.isNew  && (
                  <spanclassName = "bg-red-500text-whitetext-xspx-2py-1rounded-fullfont-medium">
                    NEW
                  </span  > )  }
              </div>
              <h3className = "font-boldtext-whitemb-2line-clamp-2">
                {item.title}
              </h3>
              <divclassName="flexitems-centerjustify-between">
                <spanclassName="text-smtext-white/70">
                  {item.readTime}
                </span>
                <ArrowRight,className="w-4 h-4text-white/70" />
              </div>
            </div>
          ))}
        </div>
        {/* Stats */}
        <divclassName = "mt-8gridgrid-cols-2md: grid-cols-4gap-6pt-8border-tborder-white/20">
          <divclassName="text-center">
            <divclassName="text-2xlfont-boldtext-white">50+</div>
            <divclassName="text-smtext-white/80">ArticlesPublished</div>
          </div>
          <divclassName="text-center">
            <divclassName="text-2xlfont-boldtext-white">10K+</div>
            <divclassName="text-smtext-white/80">MonthlyReaders</div>
          </div>
          <divclassName="text-center">
            <divclassName="text-smtext-white/80">ExpertAuthors</div>
          </div>
          <divclassName="text-center">
            <divclassName="text-2xlfont-boldtext-white">4.9★</div>
            <divclassName="text-smtext-white/80">ReaderRating</div>
          </div>
        </div>
      </div>
    </div>
  );
}