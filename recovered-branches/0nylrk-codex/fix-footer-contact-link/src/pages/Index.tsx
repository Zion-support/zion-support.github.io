
import {_ArrowRight, _Users, _Zap, _Settings, _Search, _MessageSquare, _Sparkles, _BarChart3, _Smartphone} from "lucide-react";

export default function Index() {_const { t} = useTranslation();
  const {_isRTL} = useLanguage();
  
  // Tools and features showcase
  const _toolsFeatures = [
    {_title: t("home.tool_ai_matcher"), _description: t("home.tool_ai_matcher_desc"), _icon: <Sparkles className="h-6 w-6 text-zion-cyan" />, _link: "/match"},
    {_title: t("home.tool_talent"), _description: t("home.tool_talent_desc"), _icon: <Users className="h-6 w-6 text-zion-purple" />, _link: "/talent"},
    {_title: t("home.tool_services"), _description: t("home.tool_services_desc"), _icon: <Zap className="h-6 w-6 text-zion-cyan" />, _link: "/services"},
    {_title: t("home.tool_equipment"), _description: t("home.tool_equipment_desc"), _icon: <Settings className="h-6 w-6 text-zion-purple" />, _link: "/equipment"},
    {_title: t("home.tool_analytics"), _description: t("home.tool_analytics_desc"), _icon: <BarChart3 className="h-6 w-6 text-zion-cyan" />, _link: "/analytics"},
    {_title: "Mobile App", _description: "Take Zion with you on the go with our mobile app for iOS and Android", _icon: <Smartphone className="h-6 w-6 text-zion-purple" />, _link: "/mobile-launch"}
  ];

  return (
    <div className="min-h-screen bg-zion-blue text-white">
      <SEO 
        title={_t("home.seo_title")} 
        description={_t("home.seo_description")} 
        keywords={_t("home.seo_keywords")}
        canonical="https://app.ziontechgroup.com/"
      />
      <Header />
      <HeroSection />
      
      {_/* Quick Access Tools Section */}
      <section className="py-16 bg-zion-blue-dark">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-zion-cyan via-zion-purple-light to-zion-purple bg-clip-text text-transparent mb-4">
              {_t("home.explore_tools")}
            </h2>
            <p className="text-zion-slate-light text-xl max-w-3xl mx-auto">
              {_t("home.tools_description")}
            </p>
          </div>
          
          <div className={_`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto ${isRTL ? 'rtl' : ''}`}>
            {_toolsFeatures.map(_(feature, _index) => (
              <Link 
                key={index} 
                to={_feature.link} 
                className="bg-zion-blue border border-zion-blue-light hover:border-zion-purple/50 rounded-lg p-6 transition-all duration-300"
              >
                <div className="bg-zion-blue-dark rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  {_feature.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{_feature.title}</h3>
                <p className="text-zion-slate-light mb-4">{_feature.description}</p>
                <div className={_`flex items-center text-zion-cyan ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <span>{_t("general.explore")}</span>
                  <ArrowRight className={_`${isRTL ? 'ml-0 mr-2 rotate-180' : 'ml-2'} h-4 w-4`} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      
      <CategoriesSection />
      <BenefitsSection />
      
      {_/* Add the comprehensive features guide section */}
      <FeaturesGuideSection />
      
      <HowItWorksSection />
      <FeaturedListingsSection />
      <TestimonialCarousel />
      <TrustedBySection />
      <BlogSection />
      
      {_/* Add social share section to encourage users to spread the word */}
      <SocialShareSection />
      
      <WaitlistSection />
      <FloatingCTA />
      <Footer />
    </div>
  );
}
