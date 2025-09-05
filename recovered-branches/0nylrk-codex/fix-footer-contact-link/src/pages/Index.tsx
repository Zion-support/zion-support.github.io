
import { Header } from &quot;@/components/Header&quot;;
import { Footer } from &quot;@/components/Footer&quot;;
import { TrustedBySection } from &quot;@/components/TrustedBySection&quot;;
import { TestimonialCarousel } from &quot;@/components/TestimonialCarousel&quot;;
import { FloatingCTA } from &quot;@/components/FloatingCTA&quot;;
import { HeroSection } from &quot;@/components/HeroSection&quot;;
import { CategoriesSection } from &quot;@/components/CategoriesSection&quot;;
import { BenefitsSection } from &quot;@/components/BenefitsSection&quot;;
import { HowItWorksSection } from &quot;@/components/HowItWorksSection&quot;;
import { WaitlistSection } from &quot;@/components/WaitlistSection&quot;;
import { BlogSection } from &quot;@/components/BlogSection&quot;;
import { SEO } from &quot;@/components/SEO&quot;;
import { Button } from &quot;@/components/ui/button&quot;;
import { Link } from &quot;react-router-dom&quot;;
import { FeaturedListingsSection } from &quot;@/components/FeaturedListingsSection&quot;;
import { FeaturesGuideSection } from &quot;@/components/FeaturesGuideSection&quot;;
import { SocialShareSection } from &quot;@/components/SocialShareSection&quot;;
import { useTranslation } from &quot;react-i18next&quot;;
import { useLanguage } from &quot;@/context/LanguageContext&quot;;
import { 
  ArrowRight, 
  Users, 
  Zap, 
  Settings, 
  Search,
  MessageSquare, 
  Sparkles,
  BarChart3,
  Smartphone
} from &quot;lucide-react&quot;;

export default function Index() {
  const { t } = useTranslation();
  const { isRTL } = useLanguage();
  
  // Tools and features showcase
  const toolsFeatures = [
    {
      title: t(&quot;home.tool_ai_matcher&quot;),
      description: t(&quot;home.tool_ai_matcher_desc&quot;),
      icon: <Sparkles className=&quot;h-6 w-6 text-zion-cyan&quot; />,
      link: &quot;/match&quot;
    },
    {
      title: t(&quot;home.tool_talent&quot;),
      description: t(&quot;home.tool_talent_desc&quot;),
      icon: <Users className=&quot;h-6 w-6 text-zion-purple&quot; />,
      link: &quot;/talent&quot;
    },
    {
      title: t(&quot;home.tool_services&quot;),
      description: t(&quot;home.tool_services_desc&quot;),
      icon: <Zap className=&quot;h-6 w-6 text-zion-cyan&quot; />,
      link: &quot;/services&quot;
    },
    {
      title: t(&quot;home.tool_equipment&quot;),
      description: t(&quot;home.tool_equipment_desc&quot;),
      icon: <Settings className=&quot;h-6 w-6 text-zion-purple&quot; />,
      link: &quot;/equipment&quot;
    },
    {
      title: t(&quot;home.tool_analytics&quot;),
      description: t(&quot;home.tool_analytics_desc&quot;),
      icon: <BarChart3 className=&quot;h-6 w-6 text-zion-cyan&quot; />,
      link: &quot;/analytics&quot;
    },
    {
      title: &quot;Mobile App&quot;,
      description: &quot;Take Zion with you on the go with our mobile app for iOS and Android&quot;,
      icon: <Smartphone className=&quot;h-6 w-6 text-zion-purple&quot; />,
      link: &quot;/mobile-launch&quot;
    }
  ];

  return (
    <div className=&quot;min-h-screen bg-zion-blue text-white&quot;>
      <SEO 
        title={t(&quot;home.seo_title&quot;)} 
        description={t(&quot;home.seo_description&quot;)} 
        keywords={t(&quot;home.seo_keywords&quot;)}
        canonical=&quot;https://app.ziontechgroup.com/&quot;
      />
      <Header />
      <HeroSection />
      
      {/* Quick Access Tools Section */}
      <section className=&quot;py-16 bg-zion-blue-dark&quot;>
        <div className=&quot;container mx-auto px-4&quot;>
          <div className=&quot;text-center mb-12&quot;>
            <h2 className=&quot;text-3xl font-bold bg-gradient-to-r from-zion-cyan via-zion-purple-light to-zion-purple bg-clip-text text-transparent mb-4&quot;>
              {t(&quot;home.explore_tools&quot;)}
            </h2>
            <p className=&quot;text-zion-slate-light text-xl max-w-3xl mx-auto&quot;>
              {t(&quot;home.tools_description&quot;)}
            </p>
          </div>
          
          <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto ${isRTL ? 'rtl' : ''}`}>
            {toolsFeatures.map((feature, index) => (
              <Link 
                key={index} 
                to={feature.link} 
                className=&quot;bg-zion-blue border border-zion-blue-light hover:border-zion-purple/50 rounded-lg p-6 transition-all duration-300&quot;
              >
                <div className=&quot;bg-zion-blue-dark rounded-full w-12 h-12 flex items-center justify-center mb-4&quot;>
                  {feature.icon}
                </div>
                <h3 className=&quot;text-xl font-bold text-white mb-2&quot;>{feature.title}</h3>
                <p className=&quot;text-zion-slate-light mb-4&quot;>{feature.description}</p>
                <div className={`flex items-center text-zion-cyan ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <span>{t(&quot;general.explore&quot;)}</span>
                  <ArrowRight className={`${isRTL ? 'ml-0 mr-2 rotate-180' : 'ml-2'} h-4 w-4`} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      
      <CategoriesSection />
      <BenefitsSection />
      
      {/* Add the comprehensive features guide section */}
      <FeaturesGuideSection />
      
      <HowItWorksSection />
      <FeaturedListingsSection />
      <TestimonialCarousel />
      <TrustedBySection />
      <BlogSection />
      
      {/* Add social share section to encourage users to spread the word */}
      <SocialShareSection />
      
      <WaitlistSection />
      <FloatingCTA />
      <Footer />
    </div>
  );
}
