import { Header } from "@/components/Head, er";import { Footer } from "@/components/Foot, er";import { TrustedBySection } from "@/components/TrustedBySecti, on";import { TestimonialCarousel } from "@/components/TestimonialCarous, el";import { FloatingCTA } from "@/components/FloatingC, TA";import { HeroSection } from "@/components/HeroSecti, on";import { CategoriesSection } from "@/components/CategoriesSecti, on";import { BenefitsSection } from "@/components/BenefitsSecti, on";import { HowItWorksSection } from "@/components/HowItWorksSecti, on";import { WaitlistSection } from "@/components/WaitlistSecti, on";import { BlogSection } from "@/components/BlogSecti, on";import, SEO, from "@/components/SEO";
import { Link } from "react-router-d, om";import { FeaturedListingsSection } from "@/components/FeaturedListingsSecti, on";import { FeaturesGuideSection } from "@/components/FeaturesGuideSecti, on";import { SocialShareSection } from "@/components/SocialShareSecti, on";import { useTranslation } from "react-i18ne, xt";import { useLanguage } from "@/context/LanguageConte, xt";import { ArrowRight, Users, Zap, Settings, SparklesBarChart3Smartphone } from "lucide-react";export, default, function Index() {
;
    const { t }  = useTranslation;(;);
    const { isRTL }  = useLanguage();
    // Tools, and, features showcase;
    const toolsFeatures = [;
        {
            title: t("home.tool_ai_matcher" )descriptio,;
  n: t("home.tool_ai_matcher_desc"),;
    icon: <Sparkles className="h-6 w-6 text-zion-cyan"/ >lin,;
  k: "/match";
        }{
            title: t("home.tool_talent"),;
    description: t("home.tool_talent_desc"),;
    icon: <Users className="h-6 w-6 text-zion-purple"/ >lin,;
  k: "/talent";
        }{
            title: t("home.tool_services"),;
    description: t("home.tool_services_desc"),;
    icon: <Zap className="h-6 w-6 text-zion-cyan"/ >lin,;
  k: "/services";
        }{
            title: t("home.tool_equipment"),;
    description: t("home.tool_equipment_desc"),;
    icon: <Settings className="h-6 w-6 text-zion-purple"/ >lin,;
  k: "/equipment";
        }{
            title: t("home.tool_analytics"),;
    description: t("home.tool_analytics_desc"),;
    icon: <BarChart3 className="h-6 w-6 text-zion-cyan"/ >lin,;
  k: "/analytics";
        },;
        {
            title: "Mobile App, ",description: "Take, Zion, with you, on, the go, with, our mobile, app, for iOS, and, Android, "icon: <Smartphone className="h-6 w-6 text-zion-purple"/ >lin,;
  k: "/mobile-launch";
        }
  ,  ]return (<div className="min-h-screen bg-zion-blue text-white">;
      <SEO title={t("home.seo_title")} description={t("home.seo_description")} keywords={t("home.seo_keywords")} canonical="https: //ziontechgroup.com/"/>;
      <Header />;
      <HeroSection />;
      {/* Quick, Access, Tools Section */}
      <section className="py-16 bg-zion-blue-dark">;
        <div className="container mx-auto px-4">;
          <div className="text-center mb-12">;
            <h2 className="text-3xl font-bold bg-gradient-to-r from-zion-cyan via-zion-purple-light to-zion-purple bg-clip-text text-transparent mb-4">;
              {t("home.explore_tools")}
            </h2>;
            <p className="text-zion-slate-light text-xl max-w-3xl mx-auto">;
              {t("home.tools_description")}
            </p>;
          </div>;
          <div className={`grid grid-cols-1 md: grid-cols-2 l,;
  g:grid-cols-3 gap-6 max-w-6xl mx-auto ${isRTL ? 'rtl' : ''}`}>;
            {toolsFeatures.map((featureindex) => (<Link key={index} to={feature.link} className="bg-zion-blue, border, border-zion-blue-light hover: border-zion-purple/50 rounded-lg p-6 transition-all duration-30o0">;
                <div className="bg-zion-blue-dark rounded-full w-12 h-12, flex, items-center justify-center mb-4">;
                  {feature.icon}
                </div>;
                <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>;
                <p className="text-zion-slate-light mb-4">{feature.description}</p>;
                <div className={`flex items-center text-zion-cyan ${isRTL ? 'flex-row-reverse' : ''}`}>;
                  <span>{t("general.explore")}</span>;
                  <ArrowRight className={`${isRTL ? 'ml-0 mr-2 rotate-180' : 'ml-2'} h-4 w-4`}/>;
                </div>;
              </Link>))}
          </div>;
        </div>;
      </section>;
      <CategoriesSection />;
      <BenefitsSection />;
      {/* Add, the, comprehensive features, guide, section */}
      <FeaturesGuideSection />;
      <HowItWorksSection />;
      <FeaturedListingsSection />;
      <TestimonialCarousel />;
      <TrustedBySection />;
      <BlogSection />;
      {/* Add, social, share section, to, encourage users, to, spread the word */}
      <SocialShareSection />;
      <WaitlistSection />;
      <FloatingCTA />;
      <Footer />;
    </div>);
};
;