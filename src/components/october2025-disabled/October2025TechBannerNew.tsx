import { Link } from "react-router-dom";
import { motion } from "framer-motion";
constOctober2025TechBannerNew = () => {
  constnewArticles = [
    {"
      title: "Next-GenAutonomousSystems"
      description: "The2025Enterprise Revolution""
      slug: "ai-2025-oct-17-next-gen-autonomous-systems"
      icon: Brain,"
      color: "from-purple-500to-pink-500"
      highlight: "NEW"
    }
    {"
      title: "GenerativeAICode Generation"
      description: "TransformingSoftwareDevelopment""
      slug: "ai-2025-oct-17-generative-ai-code-generation"
      icon: Code2"
      color: "from-blue-500to-cyan-500"
      highlight: "HOT"
    }
    {"
      title: "Real-TimePersonalizationEngines"
      description: "RevolutionizingCustomerExperience""
      slug: "ai-2025-oct-17-real-time-personalization-engines"
      icon: Zap"
      color: "from-orange-500to-red-500"
      highlight: "TRENDING"
    }
  ]; return (
    <motion.divinitial = {{ opacity:  0y: 20 }}
      animate = {{ opacity:  1y:  0 }}
      transition = {{ duration: 0.6 }}
      className = "relativeoverflow-hiddenrounded-2xlbg-gradient-to-brfrom-slate-900via-purple-900to-slate-900p-8md: p-12shadow-2xlmy-12"
    >
      {/* Animatedbackgroundeffect */}
      <divclassName = "absoluteinset-0bg-gradient-to-rfrom-purple-500/10via-pink-500/10to-blue-500/10animate-pulse" />
      {/* Decorativeelements */}
      <divclassName="absolutetop-0right-0 w-64h-64bg-purple-500/20rounded-fullblur-3xl" />
      <divclassName="absolutebottom-0left-0 w-64h-64bg-blue-500/20rounded-fullblur-3xl" />
      <divclassName="relativez-10">
        {/* Header */}
        <divclassName="flexitems-centerjustify-centergap-3mb-6">
          <motion.divanimate={{ rotate: 360 }}
            transition = {{ duration: 20repeat: Infinityease: "linear" }}
          >
            <SparklesclassName = "w-8 h-8text-yellow-400" />
          </motion.div>
          <h2className="text-3xlmd: text-4xlfont-boldtext-whitetext-center">
            FreshAIInsights forOctober2025
          </h2>
          <motion.divanimate={{ rotate: -360 }}
            transition = {{ duration: 20repeat: Infinityease: "linear" }}
          >
            <SparklesclassName = "w-8 h-8text-yellow-400" />
          </motion.div>
        </div>
        <pclassName="text-lgmd: text-xltext-purple-200text-centermb-10max-w-3xlmx-auto">
          Explorethelatest breakthroughtechnologiestransforming industriesworldwide. 
          Ourexpertteam sharescutting-edgeinsightsyou canimplementtoday.
        </p>
        {/* ArticlesGrid */}
        <divclassName = "gridmd: grid-cols-3gap-6mb-8">
          { newArticles.map((articleindex) = > (
            <motion.divkey = { article.slug  }initial = {{ opacity:  0y: 20 }}
              animate = {{ opacity:  1y:  0 }}
              transition = {{ duration: 0.5delay: index * 0.1 }}
              whileHover = {{ scale: 1.05 }}
              className = "relativegroup"
            >
              <Linkto={`/blog/${article.slug}`}>
                <divclassName="relativebg-white/10backdrop-blur-lgrounded-xlp-6 h-fullborderborder-white/20hover: border-white/40transition-allduration-300"  > {/* HighlightBadge */}
                  <divclassName = {`absolutetop-4right-4px-3py-1rounded-fulltext-xsfont-boldtext-whitebg-gradient-to-r ${article.color}`}>
                    {article.highlight}
                  </div  > {/* Icon */}
                  <divclassName = { `w-14h-14rounded-lgbg-gradient-to-br ${article.color }flexitems-centerjustify-centermb-4group-hover: scale-110transition-transformduration-300`}>
                    <article.iconclassName = "w-7 h-7text-white"</div>
                  {/* Content */}
                  <h3className="text-xlfont-boldtext-whitemb-2group-hover: text-purple-300transition-colors">
                    {article.title}
                  </h3>
                  <pclassName = "text-purple-200text-smmb-4">
                    {article.description}
                  </p>
                  {/* ReadMoreLink */}
                  <divclassName="flexitems-centertext-purple-300group-hover: text-purple-100transition-colors">
                    <spanclassName="text-smfont-semibold">ReadArticle</span>
                    <ArrowRight,className="w-4 h-4ml-2group-hover:translate-x-2transition-transform" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
        {/* CTASection */}
        <divclassName = "text-center">
          <divclassName="inline-flexflex-colsm: flex-rowgap-4items-centerjustify-center">
            <Linkto="/blog"
              className="grouppx-8py-4bg-gradient-to-rfrom-purple-600to-pink-600hover:from-purple-700hover:to-pink-700text-whitefont-boldrounded-xlshadow-lghover:shadow-xltransition-allduration-300flexitems-centergap-2"
            >
              <span>ExploreAllArticles</span>
              <ArrowRight,className="w-5 h-5group-hover:translate-x-1transition-transform" />
            </Link>
            <Linkto="/contact"
              className="px-8py-4bg-white/10hover:bg-white/20backdrop-blur-lgtext-whitefont-boldrounded-xlborder-2border-white/30hover:border-white/50transition-allduration-300"
            >
              GetExpertConsultation
            </Link>
          </div>
          <pclassName="mt-6text-purple-300text-sm">
            💡 <strong>Join 10000+ techleaders</strong> stayingaheadwith ourinsights
          </p>
        </div>
      </div>
      {/* Floatingparticleseffect */}
      <divclassName = "absoluteinset-0overflow-hiddenpointer-events-none">
        { [...Array(20)].map((_i) =    > (
          <motion.divkey = { i  }className = "absolutew-2 h-2bg-purple-400/30rounded-full"
            style={{
              left: `${Math.random() * 100}%`
              top: `${Math.random() * 100}%`
            }}
            animate = {{
              y: [0-300]
              opacity: [0.20.50.2]
            }}
            transition = {{
              duration: 3 + Math.random() * 2
              repeat: Infinity"
      delay: Math.random() * 2
            }}
        ))}
      </div>
    </motion.div>
  );
};
exportdefaultOctober2025TechBannerNew;
