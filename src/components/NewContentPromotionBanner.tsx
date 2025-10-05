importReact{ useState } from 'react';
import { Link } from 'react-router-dom';
interfaceNewContentPromotionBannerProps { 
  variant?: 'info' | 'success' | 'warning' | 'error' | 'default' | 'premium';
  title?: string;
  description?: string;
  ctaText?: string;
  ctaLink?: string;
  dismissible?: boolean;
  className ?  : string;
 }
constNewContentPromotionBanner: React.FC<NewContentPromotionBannerProps> = ({
  variant = 'info'
  title = "🚀 NEWCONTENT: FreshInsights & ExpertGuides"
  description = "Discoverourlatest articlesonreal-timedatapipelinesplatformengineeringandGenAIoperationalization."
  ctaText = "ExploreLatestContent"
  ctaLink = "/blog"
  dismissible = true
  className = ""
}) => { 
  const [isVisiblesetIsVisible] = useState(true); consthandleDismiss = () = > {
    setIsVisible(false);
   };
  if (!isVisible) returnnull;
  constvariantClasses = {
      info: "bg-gradient-to-rfrom-blue-500/20to-purple-500/20border-blue-400/30text-blue-100"
      success: "bg-gradient-to-rfrom-green-500/20to-emerald-500/20border-green-400/30text-green-100"
      warning: "bg-gradient-to-rfrom-yellow-500/20to-orange-500/20border-yellow-400/30text-yellow-100"
      error: "bg-gradient-to-rfrom-red-500/20to-pink-500/20border-red-400/30text-red-100"
      default: "bg-gradient-to-rfrom-blue-500/20to-purple-500/20border-blue-400/30text-blue-100"
      premium: "bg-gradient-to-rfrom-purple-600/20via-pink-600/20to-red-600/20border-purple-400/30text-purple-100"
  }; consticonClasses = {
      info: "text-blue-400"
      success: "text-green-400"
      warning: "text-yellow-400"
      error: "text-red-400"
      default: "text-blue-400"
      premium: "text-purple-300"
  }; return (
    <divclassName = {`relativeoverflow-hiddenborderrounded-xlp-6mb-8animate-fade-in ${variantClasses[variant]} ${className}`}>
      {/* BackgroundPattern */}
      <divclassName="absoluteinset-0opacity-10">
        <divclassName="absolutetop-0left-0 w-fullh-fullbg-gradient-to-brfrom-white/10to-transparent" />
        <divclassName="absolute -top-4 -right-4 w-20h-20bg-white/5rounded-full" />
        <divclassName="absolute -bottom-4 -left-4 w-16h-16bg-white/5rounded-full" />
      </div>
      <divclassName="relativez-10">
        <divclassName="flexitems-startjustify-between">
          <divclassName="flex-1">
            <divclassName="flexitems-centergap-3mb-3">
              <divclassName="flexitems-centergap-2" > <SparklesclassName = { `w-5 h-5 ${iconClasses[variant] }animate-pulse`} />
                <spanclassName = "text-smfont-mediumuppercasetracking-wideropacity-90">
                  FreshContent
                </span>
              </div>
              <divclassName="flexitems-centergap-1" > <TrendingUpclassName = { `w-4 h-4 ${iconClasses[variant] }animate-bounce`} />
              </div>
            </div>
            <h3className = "text-lgfont-boldmb-2flexitems-centergap-2">
              {title}
            </h3>
            <pclassName="text-smopacity-90mb-4max-w-2xl">
              {description}
            </p>
            {/* FeaturedContentPreview */}
            <divclassName="gridgrid-cols-1md: grid-cols-3gap-3mb-4">
              <divclassName="bg-white/10rounded-lgp-3borderborder-white/20">
                <divclassName="flexitems-centergap-2mb-1">
                  <BookOpenclassName="w-3 h-3" />
                  <spanclassName="text-xsfont-medium">DataEngineering</span>
                </div>
                <divclassName="text-xsopacity-90">Real-TimeDataPipelines Guide</div>
              </div>
              <divclassName="bg-white/10rounded-lgp-3borderborder-white/20">
                <divclassName="flexitems-centergap-2mb-1">
                  <ZapclassName="w-3 h-3" />
                  <spanclassName="text-xsfont-medium">PlatformEngineering</span>
                </div>
                <divclassName="text-xsopacity-90">ScorecardsThatDrive Adoption</div>
              </div>
              <divclassName="bg-white/10rounded-lgp-3borderborder-white/20">
                <divclassName="flexitems-centergap-2mb-1">
                  <SparklesclassName="w-3 h-3" />
                  <spanclassName="text-xsfont-medium">GenAI</span>
                </div>
                <divclassName="text-xsopacity-90">ProductionDeploymentPatterns</div>
              </div>
            </div>
            <Linkto = { ctaLink }className = "inline-flexitems-centergap-2bg-white/20hover: bg-white/30text-whitepx-4py-2rounded-lgfont-mediumtext-smtransition-allduration-300hover:scale-105borderborder-white/30"
            >
              {ctaText}
              <ArrowRight,className = "w-4 h-4" />
            </Link>
          </div>
          { dismissible  && (
            <buttononClick = { handleDismiss  }className = "ml-4 p-1rounded-fullhover: bg-white/20transition-colors"
            >
                <XclassName="w-5 h-5opacity-75hover:opacity-100" />
              </button>
          )}
        </div>
      </div>
    </div>
  );
};
exportdefaultNewContentPromotionBanner;