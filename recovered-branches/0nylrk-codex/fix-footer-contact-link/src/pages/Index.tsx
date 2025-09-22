
<<<<<<< HEAD

<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
import {Header} from "@/components/Header";
import {Footer} from "@/components/Footer";
import {TrustedBySection} from "@/components/TrustedBySection";
import {TestimonialCarousel} from "@/components/TestimonialCarousel";
import {FloatingCTA} from "@/components/FloatingCTA";
import {HeroSection} from "@/components/HeroSection";
import {CategoriesSection} from "@/components/CategoriesSection";
import {BenefitsSection} from "@/components/BenefitsSection";
import {HowItWorksSection} from "@/components/HowItWorksSection";
import {WaitlistSection} from "@/components/WaitlistSection";
import {BlogSection} from "@/components/BlogSection";
import {SEO} from "@/components/SEO";
import {Button} from "@/components/ui/button";
import {Link} from "react-router-dom";
import {FeaturedListingsSection} from "@/components/FeaturedListingsSection";
import {FeaturesGuideSection} from "@/components/FeaturesGuideSection";
import {SocialShareSection} from "@/components/SocialShareSection";
import {useTranslation} from "react-i18next";
import {useLanguage} from "@/context/LanguageContext";
import {ArrowRight, Users, Zap, Settings, Search, MessageSquare, Sparkles, BarChart3, Smartphone} from "lucide-react";

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
import {Header} from "@/components/Header";"
import {Footer} from "@/components/Footer";"
import {TrustedBySection} from "@/components/TrustedBySection";"
import {TestimonialCarousel} from "@/components/TestimonialCarousel";"
import {FloatingCTA} from "@/components/FloatingCTA";"
import {HeroSection} from "@/components/HeroSection";"
import {CategoriesSection} from "@/components/CategoriesSection";"
import {BenefitsSection} from "@/components/BenefitsSection";"
import {HowItWorksSection} from "@/components/HowItWorksSection";"
import {WaitlistSection} from "@/components/WaitlistSection";"
import {BlogSection} from "@/components/BlogSection";"
import {SEO} from "@/components/SEO";"
import {Button} from "@/components/ui/button";"
import {Link} from "react-router-dom";"
import {FeaturedListingsSection} from "@/components/FeaturedListingsSection";"
import {FeaturesGuideSection} from "@/components/FeaturesGuideSection";"
import {SocialShareSection} from "@/components/SocialShareSection";"
import {useTranslation} from "react-i18next";"
import {useLanguage} from "@/context/LanguageContext";"
import {ArrowRight, Users, Zap, Settings, Search, MessageSquare, Sparkles, BarChart3, Smartphone} from "lucide-react";

export default function Index() { return null; }
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
export default function Index() {;

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  const { t } = useTranslation();
  const { isRTL } = useLanguage();"
import { Header } from "@/components/Header","
import { Footer } from "@/components/Footer","
import { TrustedBySection } from "@/components/TrustedBySection","
import { TestimonialCarousel } from "@/components/TestimonialCarousel","
import { FloatingCTA } from "@/components/FloatingCTA","
import { HeroSection } from "@/components/HeroSection","
import { CategoriesSection } from "@/components/CategoriesSection","
import { BenefitsSection } from "@/components/BenefitsSection","
import { HowItWorksSection } from "@/components/HowItWorksSection","
import { WaitlistSection } from "@/components/WaitlistSection","
import { BlogSection } from "@/components/BlogSection","
import { SEO } from "@/components/SEO","
import { Button } from "@/components/ui/button","
import { Link } from "react-router-dom","
import { FeaturedListingsSection } from "@/components/FeaturedListingsSection","
import { FeaturesGuideSection } from "@/components/FeaturesGuideSection","
import { SocialShareSection } from "@/components/SocialShareSection","
import { useTranslation } from "react-i18next","
import { useLanguage } from "@/context/LanguageContext",
import {}
  ArrowRight,
  Users, 
  Zap, 
  Settings, 
  Search,
  MessageSquare, 
  Sparkles,
  BarChart3,
  Smartphone"
} from "lucide-react",

// Tools and features showcase

  const toolsFeatures = [
    {
      title: t("home.tool_ai_matcher")
      description: t("home.tool_ai_matcher_desc")
      icon: <Sparkles className="h-6 w-6 text-zion-cyan" />
      link: "/match"
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

export default function Index() {;

=======
export default function Index() {
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
  const { t } = useTranslation();
  const { isRTL } = useLanguage();

        keywords={t("home.seo_keywords")}
        canonical="https://app.ziontechgroup.com/";
      />;
      <Header />;
      <HeroSection />;
      {/* Quick Access Tools Section */}
      <section className="py-16 bg-zion-blue-dark">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-zion-cyan via-zion-purple-light to-zion-purple bg-clip-text text-transparent mb-4">
              {t("home.explore_tools")}
            </h2>
            <p className="text-zion-slate-light text-xl max-w-3xl mx-auto">
              {t("home.tools_description")}
                </div>;
                <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>;
                <p className="text-zion-slate-light mb-4">{feature.description}</p>;
                <div className={`flex items-center text-zion-cyan ${isRTL ? 'flex-row-reverse' : ''}`}>;
                  <span>{t("general.explore")}</span>;
                  <ArrowRight className={`${isRTL ? 'ml-0 mr-2 rotate-180' : 'ml-2'} h-4 w-4`} />;
                </div>;
              </Link>;

            ))}
  // Tools and features showcase;
  const toolsFeatures = [
    {"
      title: t("home.tool_ai_matcher")","
  description: t("home.tool_ai_matcher_desc")""
      icon: <Sparkles className="h-6 w-6 text-zion-cyan" />"
</Sparkles>"
      icon: <Users className="h-6 w-6 text-zion-purple" />"
</Users>"
      icon: <Zap className="h-6 w-6 text-zion-cyan" />"
</Zap>"
      icon: <Settings className="h-6 w-6 text-zion-purple" />"
</Settings>"
      icon: <BarChart3 className="h-6 w-6 text-zion-cyan" />"
</BarChart3>"
      icon: <Smartphone className="h-6 w-6 text-zion-purple" />"
</Smartphone>"
      icon: <Sparkles className="h-6 w-6 text-zion-cyan" />,;"
</Sparkles>"
      icon: <Users className="h-6 w-6 text-zion-purple" />,;"
</Users>"
      icon: <Zap className="h-6 w-6 text-zion-cyan" />,;"
</Zap>"
      icon: <Settings className="h-6 w-6 text-zion-purple" />,;"
</Settings>"
      icon: <BarChart3 className="h-6 w-6 text-zion-cyan" />,;"
</BarChart3>"
      icon: <Smartphone className="h-6 w-6 text-zion-purple" />,;"
</Smartphone>"
      icon: <Sparkles className="h - 6 w - 6 text - zion - cyan" />,"
</Sparkles>"
      icon: <Users className="h - 6 w - 6 text - zion - purple" />,"
</Users>"
      icon: <Zap className="h - 6 w - 6 text - zion - cyan" />,"
</Zap>"
      icon: <Settings className="h - 6 w - 6 text - zion - purple" />,"
</Settings>"
      icon: <BarChart3 className="h - 6 w - 6 text - zion - cyan" />,"
</BarChart3>"
      icon: <Smartphone className="h - 6 w - 6 text - zion - purple" />,"
</Smartphone>"
      icon: <Sparkles className="h-6 w-6 text-zion-cyan" />,;"
</Sparkles>"
      icon: <Users className="h-6 w-6 text-zion-purple" />,;"
</Users>"
      icon: <Zap className="h-6 w-6 text-zion-cyan" />,;"
</Zap>"
      icon: <Settings className="h-6 w-6 text-zion-purple" />,;"
</Settings>"
      icon: <BarChart3 className="h-6 w-6 text-zion-cyan" />,;"
</BarChart3>"
      icon: <Smartphone className="h-6 w-6 text-zion-purple" />;"
</Smartphone>"
    <div className="min-h-screen bg-zion-blue text-white">;"
</div>
      <SEO;"
        title={t("home.seo_title")} ;""
        description={t("home.seo_description")} ;""
        keywords={t("home.seo_keywords")}""
        canonical="https://app.ziontechgroup.com/";"

      />;
</SEO>
      <Header />;
</Header>
      <HeroSection />;

}
    },
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
    {
      title: t("home.tool_talent")
      description: t("home.tool_talent_desc")
      icon: <Users className="h-6 w-6 text-zion-purple" />
      link: "/talent"
<<<<<<< HEAD

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
  )
}
    <div className="min-h-screen bg-zion-blue text-white">;
      <SEO
        title={t("home && home.seo_title")} 
        description={t("home && home.seo_description")} 
        keywords={t("home && home.seo_keywords")}
        canonical="https://app && app.ziontechgroup.com/"
      />;
      <Header />;
      <HeroSection />;

},
<<<<<<< HEAD

}
    },
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    {
      title: t("home.tool_services")
      description: t("home.tool_services_desc")
      icon: <Zap className="h-6 w-6 text-zion-cyan" />
      link: "/services"
}
    },
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

    },
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

    },

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    {
      title: t("home.tool_equipment")
      description: t("home.tool_equipment_desc")
      icon: <Settings className="h-6 w-6 text-zion-purple" />
<<<<<<< HEAD
      link: "/equipment"
<<<<<<< HEAD

}
    },
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    {
      title: t("home.tool_analytics")
      description: t("home.tool_analytics_desc")
      icon: <BarChart3 className="h-6 w-6 text-zion-cyan" />
      link: "/analytics"
}
    },
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    {
=======
      link: "/equipment"    {
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

    },

    {
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
      title: "Mobile App"
      description: "Take Zion with you on the go with our mobile app for iOS and Android"
      icon: <Smartphone className="h-6 w-6 text-zion-purple" />
      link: "/mobile-launch"
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  const toolsFeatures = [;
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
  const toolsFeatures = [;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    {;
      title: t("home && home.tool_ai_matcher"),;
      description: t("home && home.tool_ai_matcher_desc"),;
      icon: <Sparkles className="h-6 w-6 text-zion-cyan" />,;
      link: "/match";
    };
    {;
      title: t("home && home.tool_talent"),;
      description: t("home && home.tool_talent_desc"),;
      icon: <Users className="h-6 w-6 text-zion-purple" />,;
      link: "/talent";
    };
    {;
      title: t("home && home.tool_services"),;
      description: t("home && home.tool_services_desc"),;
      icon: <Zap className="h-6 w-6 text-zion-cyan" />,;
      link: "/services";
    };
    {;
      title: t("home && home.tool_equipment"),;
      description: t("home && home.tool_equipment_desc"),;
      icon: <Settings className="h-6 w-6 text-zion-purple" />,;
      link: "/equipment";
    };
    {;
      title: t("home && home.tool_analytics"),;
      description: t("home && home.tool_analytics_desc"),;
      icon: <BarChart3 className="h-6 w-6 text-zion-cyan" />,;
      link: "/analytics";
    };
    {;
      title: "Mobile App",;
      description: "Take Zion with you on the go with our mobile app for iOS and Android",;
      icon: <Smartphone className="h-6 w-6 text-zion-purple" />,;
      link: "/mobile-launch";
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
import { Header } from '@/components / Header';
import { Footer } from '@/components / Footer';
import { TrustedBySection } from '@/components / TrustedBySection';
import { TestimonialCarousel } from '@/components / TestimonialCarousel';
import { FloatingCTA } from '@/components / FloatingCTA';
import { HeroSection } from '@/components / HeroSection';
import { CategoriesSection } from '@/components / CategoriesSection';
import { BenefitsSection } from '@/components / BenefitsSection';
import { HowItWorksSection } from '@/components / HowItWorksSection';
import { WaitlistSection } from '@/components / WaitlistSection';
import { BlogSection } from '@/components / BlogSection';
import { SEO } from '@/components / SEO';
import { Button } from '@/components / ui / button';
import { Link } from './react-router-dom';
import { FeaturedListingsSection } from '@/components / FeaturedListingsSection';
import { FeaturesGuideSection } from '@/components / FeaturesGuideSection';
import { SocialShareSection } from '@/components / SocialShareSection';
import { use_translation } from './react - i18next';
import { use_language } from '@/context / LanguageContext';

import { ArrowRight, Users, Zap, Settings, Search, MessageSquare, Sparkles, BarChart3, Smartphone } from './lucide-react';
;
export default /**;
 * Index - Function description;
 */
function Index() {}
=======
import { ArrowRight, Users, Zap, Settings, Search, MessageSquare, Sparkles, BarChart3, Smartphone } from './lucide-react';
;
export default /**
 * Index - Function description
 */
function Index() {
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  const { t } = use_translation ();
  const { isRTL } = use_language ();
;
  // Tools and features showcase;
  const tools_features = [;
{"
      title: t ("home.tool_ai_matcher"),"
      description: t ("home.tool_ai_matcher_desc"),"
      icon: <Sparkles className="h - 6 w - 6 text - zion - cyan" />,"
      link: "/match";
    }
    {"
      title: t ("home.tool_talent"),"
      description: t ("home.tool_talent_desc"),"
      icon: <Users className="h - 6 w - 6 text - zion - purple" />,"
      link: "/talent";
    }
    {"
      title: t ("home.tool_services"),"
      description: t ("home.tool_services_desc"),"
      icon: <Zap className="h - 6 w - 6 text - zion - cyan" />,"
      link: "/services";
    }
    {"
      title: t ("home.tool_equipment"),"
      description: t ("home.tool_equipment_desc"),"
      icon: <Settings className="h - 6 w - 6 text - zion - purple" />,"
      link: "/equipment";
    }
    {"
      title: t ("home.tool_analytics"),"
      description: t ("home.tool_analytics_desc"),"
      icon: <BarChart3 className="h - 6 w - 6 text - zion - cyan" />,"
      link: "/analytics";
    }
    {"
      title: "Mobile App","
      description: "Take Zion with you on the go with our mobile app for iOS and Android","
      icon: <Smartphone className="h - 6 w - 6 text - zion - purple" />,"
      link: "/mobile - launch";
    }
  ];
;
return (

<<<<<<< HEAD
      {/* Quick Access Tools Section */}
      <section className="py-16 bg-zion-blue-dark">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-zion-cyan via-zion-purple-light to-zion-purple bg-clip-text text-transparent mb-4">
              {t("home.explore_tools")}
            </h2>
            <p className="text-zion-slate-light text-xl max-w-3xl mx-auto">
              {t("home.tools_description")}
            </p>
          </div>
          <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto ${isRTL ? 'rtl' : ''}`}>
            {toolsFeatures.map((feature, index) => (
              <Link
                key={index}
                to={feature.link}
                className="bg-zion-blue border border-zion-blue-light hover:border-zion-purple/50 rounded-lg p-6 transition-all duration-300"
              >
                <div className="bg-zion-blue-dark rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-zion-slate-light mb-4">{feature.description}</p>
                <div className={`flex items-center text-zion-cyan ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <span>{t("general.explore")}</span>
                  <ArrowRight className={`${isRTL ? 'ml-0 mr-2 rotate-180' : 'ml-2'} h-4 w-4`} />
                </div>
              </Link>
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
import { Header } from "@/components/Header",;
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
import { Header } from "@/components/Header",;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
import { Footer } from "@/components/Footer",;
import { TrustedBySection } from "@/components/TrustedBySection",;
import { TestimonialCarousel } from "@/components/TestimonialCarousel",;
import { FloatingCTA } from "@/components/FloatingCTA",;
import { HeroSection } from "@/components/HeroSection",;
import { CategoriesSection } from "@/components/CategoriesSection",;
import { BenefitsSection } from "@/components/BenefitsSection",;
import { HowItWorksSection } from "@/components/HowItWorksSection",;
import { WaitlistSection } from "@/components/WaitlistSection",;
import { BlogSection } from "@/components/BlogSection",;
import { SEO } from "@/components/SEO",;
import { Button } from "@/components/ui/button",;
import { Link } from "react-router-dom",;
import { FeaturedListingsSection } from "@/components/FeaturedListingsSection",;
import { FeaturesGuideSection } from "@/components/FeaturesGuideSection",;
import { SocialShareSection } from "@/components/SocialShareSection",;
import { useTranslation } from "react-i18next",;
=======
"
import { Header } from "@/components/Header",;"
import { Footer } from "@/components/Footer",;"
import { TrustedBySection } from "@/components/TrustedBySection",;"
import { TestimonialCarousel } from "@/components/TestimonialCarousel",;"
import { FloatingCTA } from "@/components/FloatingCTA",;"
import { HeroSection } from "@/components/HeroSection",;"
import { CategoriesSection } from "@/components/CategoriesSection",;"
import { BenefitsSection } from "@/components/BenefitsSection",;"
import { HowItWorksSection } from "@/components/HowItWorksSection",;"
import { WaitlistSection } from "@/components/WaitlistSection",;"
import { BlogSection } from "@/components/BlogSection",;"
import { SEO } from "@/components/SEO",;"
import { Button } from "@/components/ui/button",;"
import { Link } from "react-router-dom",;"
import { FeaturedListingsSection } from "@/components/FeaturedListingsSection",;"
import { FeaturesGuideSection } from "@/components/FeaturesGuideSection",;"
import { SocialShareSection } from "@/components/SocialShareSection",;"
import { useTranslation } from "react-i18next",;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
import { useLanguage } from "@/context/LanguageContext",;
import {;
  ArrowRight,;
  Users,;
  Zap,;
  Settings,;
  Search,;
  MessageSquare,;
  Sparkles,;
  BarChart3,;
  Smartphone;"
} from "lucide-react",;
export default function Index() { return null; }
  const { t } = useTranslation(),;
  const { isRTL } = useLanguage(),;
  // Tools and features showcase;
  const toolsFeatures = [;
{;
      title: t("home.tool_ai_matcher"),;
      description: t("home.tool_ai_matcher_desc"),;
      icon: <Sparkles className="h-6 w-6 text-zion-cyan" />,;
      link: "/match";
    },;
    {;
      title: t("home.tool_talent"),;
      description: t("home.tool_talent_desc"),;
      icon: <Users className="h-6 w-6 text-zion-purple" />,;
      link: "/talent";
    },;
    {;
      title: t("home.tool_services"),;
      description: t("home.tool_services_desc"),;
      icon: <Zap className="h-6 w-6 text-zion-cyan" />,;
      link: "/services";
    },;
    {;
      title: t("home.tool_equipment"),;
      description: t("home.tool_equipment_desc"),;
      icon: <Settings className="h-6 w-6 text-zion-purple" />,;
      link: "/equipment";
    },;
    {;
      title: t("home.tool_analytics"),;
      description: t("home.tool_analytics_desc"),;
      icon: <BarChart3 className="h-6 w-6 text-zion-cyan" />,;
      link: "/analytics";
    },;
    {;
      title: "Mobile App",;
      description: "Take Zion with you on the go with our mobile app for iOS and Android",;
      icon: <Smartphone className="h-6 w-6 text-zion-purple" />;
      link: "/mobile-launch";
    }
  ];
  return (;"
    <div className="min-h-screen bg-zion-blue text-white">;
      <SEO;"
        title={t("home.seo_title")} ;"
        description={t("home.seo_description")} ;"
        keywords={t("home.seo_keywords")}"
        canonical="https://app.ziontechgroup.com/";
      />;
      <Header />;
      <HeroSection />;
      {/* Quick Access Tools Section */}"
      <section className="py-16 bg-zion-blue-dark">"
        <div className="container mx-auto px-4">"
          <div className="text-center mb-12">"
            <h2 className="text-3xl font-bold bg-gradient-to-r from-zion-cyan via-zion-purple-light to-zion-purple bg-clip-text text-transparent mb-4">"
              {t("home.explore_tools")}
            </h2>"
            <p className="text-zion-slate-light text-xl max-w-3xl mx-auto">"
              {t("home.tools_description")}
                </div>;"
                <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>;"
                <p className="text-zion-slate-light mb-4">{feature.description}</p>;'
                <div className={`flex items-center text-zion-cyan ${isRTL ? 'flex-row-reverse' : ''}`}>;"
                  <span>{t("general.explore")}</span>;'`
                  <ArrowRight className={`${isRTL ? 'ml-0 mr-2 rotate-180' : 'ml-2'} h-4 w-4`} />;
                </div>;
              </Link>;

<<<<<<< HEAD

<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
<<<<<<< HEAD
  )
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
}
    <div className="min-h-screen bg-zion-blue text-white">;
      <SEO"
        title={t("home && home.seo_title")} "
        description={t("home && home.seo_description")} "
        keywords={t("home && home.seo_keywords")}"
=======
  )
}
    <div className="min-h-screen bg-zion-blue text-white">;
      <SEO
        title={t("home && home.seo_title")} 
        description={t("home && home.seo_description")} 
        keywords={t("home && home.seo_keywords")}
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
        canonical="https://app && app.ziontechgroup.com/"
      />;
      <Header />;
      <HeroSection />;

;
  // Tools and features showcase;
  const tools_features = [;
    {"
      title: t ("home.tool_ai_matcher"),"
      description: t ("home.tool_ai_matcher_desc"),"
      icon: <Sparkles className="h - 6 w - 6 text - zion - cyan" />,"
      link: "/match";
    }
    {"
      title: t ("home.tool_talent"),"
      description: t ("home.tool_talent_desc"),"
      icon: <Users className="h - 6 w - 6 text - zion - purple" />,"
      link: "/talent";
    }
    {"
      title: t ("home.tool_services"),"
      description: t ("home.tool_services_desc"),"
      icon: <Zap className="h - 6 w - 6 text - zion - cyan" />,"
      link: "/services";
    }
    {"
      title: t ("home.tool_equipment"),"
      description: t ("home.tool_equipment_desc"),"
      icon: <Settings className="h - 6 w - 6 text - zion - purple" />,"
      link: "/equipment";
    }
    {"
      title: t ("home.tool_analytics"),"
      description: t ("home.tool_analytics_desc"),"
      icon: <BarChart3 className="h - 6 w - 6 text - zion - cyan" />,"
      link: "/analytics";
    }
    {"
      title: "Mobile App","
      description: "Take Zion with you on the go with our mobile app for iOS and Android","
      icon: <Smartphone className="h - 6 w - 6 text - zion - purple" />,"
      link: "/mobile - launch";
    }
  ];
;
<<<<<<< HEAD
  return (;
    <div className="min-h-screen bg-zion-blue text-white">;
      <SEO ;
        title={t("home.seo_title")} ;
        description={t("home.seo_description")} ;
        keywords={t("home.seo_keywords")}
        canonical="https://app.ziontechgroup.com/";
      />;
      <Header />;
      <HeroSection />;
      ;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
      {/* Quick Access Tools Section */}

=======
      {/* Quick Access Tools Section */}
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
  )      {/* Quick Access Tools Section */}
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
      <section className="py-16 bg-zion-blue-dark">;
        <div className="container mx-auto px-4">;
          <div className="text-center mb-12">;
            <h2 className="text-3xl font-bold bg-gradient-to-r from-zion-cyan via-zion-purple-light to-zion-purple bg-clip-text text-transparent mb-4">;
              {t("home && home.explore_tools")}
            </h2>;
            <p className="text-zion-slate-light text-xl max-w-3xl mx-auto">;
              {t("home && home.tools_description")}
            </p>;
          </div>;

          <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto ${isRTL ? 'rtl' : ''}`}>;
            {toolsFeatures && toolsFeatures.map((feature, index) => (;
              <Link
                key={index} 
                to={feature && feature.link} 
                className="bg-zion-blue border border-zion-blue-light hover:border-zion-purple/50 rounded-lg p-6 transition-all duration-300">;
                <div className="bg-zion-blue-dark rounded-full w-12 h-12 flex items-center justify-center mb-4">;
                  {feature && feature.icon}
                </div>;
                <h3 className="text-xl font-bold text-white mb-2">{feature && feature.title}</h3>;
                <p className="text-zion-slate-light mb-4">{feature && feature.description}</p>;
                <div className={`flex items-center text-zion-cyan ${isRTL ? 'flex-row-reverse' : ''}`}>;
                  <span>{t("general && general.explore")}</span>;
<ArrowRight className={`${isRTL ? 'ml-0 mr-2 rotate-180' : 'ml-2'} h-4 w-4`} />;                </div>;
=======
                  <ArrowRight className={`${isRTL ? 'ml-0 mr-2 rotate-180' : 'ml-2'} h-4 w-4`} />;
{t("home.explore_tools")}
            </h2>;
            <p className="text-zion-slate-light text-xl max-w-3xl mx-auto">;
              {t("home.tools_description")}
            </p>;
          </div>;
          ;
          <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto ${isRTL ? 'rtl' :''}`}>;
            {toolsFeatures.map((feature, index) => (;
              <Link ;
                key={index} ;
                to={feature.link} ;
                className="bg-zion-blue border border-zion-blue-light hover:border-zion-purple/50 rounded-lg p-6 transition-all duration-300";
              >;
                <div className="bg-zion-blue-dark rounded-full w-12 h-12 flex items-center justify-center mb-4">;
                  {feature.icon}
                </div>;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
              </Link>;
            ))}
          </div>;
        </div>;
      </section>;
<CategoriesSection />;
      <BenefitsSection />;

      {/* Add the comprehensive features guide section */}
      <FeaturesGuideSection />;

      <HowItWorksSection />;
      <FeaturedListingsSection />;
      <TestimonialCarousel />;
      <TrustedBySection />;
      <BlogSection />;

      {/* Add social share section to encourage users to spread the word */}
      <SocialShareSection />;

      <WaitlistSection />;
      <FloatingCTA />;
      <Footer />;
    </div>;
  );
}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    <div className="min - h-screen bg - zion - blue text - white">;
=======
    <div className="min - h-screen bg - zion - blue text-white">;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
  return (
    <div className="min - h-screen bg - zion - blue text - white">;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
return (
    <div className="min - h-screen bg - zion - blue text - white">;
    <div className="min - h-screen bg - zion - blue text-white">;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
      <SEO;
        title={t ("home.seo_title")}
        description={t ("home.seo_description")}
        keywords={t ("home.seo_keywords")}
=======
"
    <div className="min - h-screen bg - zion - blue text - white">;
      <SEO;"
        title={t ("home.seo_title")}"
        description={t ("home.seo_description")}"
        keywords={t ("home.seo_keywords")}"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
        canonical="https://app.ziontechgroup.com/";
      />;
      <Header />;
      <HeroSection />;
{/* Quick Access Tools Section */}
      <section className="py - 16 bg - zion - blue-dark">;
        <div className="container mx - auto px-4">;
          <div className="text - center mb-12">;
            <h2 className="text - 3xl font - bold bg - gradient - to - r from - zion - cyan via - zion - purple - light to - zion - purple bg - clip - text text - transparent mb-4">;
              {t ("home.explore_tools")}
            </h2>;
            <p className="text - zion - slate - light text - xl max - w-3xl mx-auto">;
              {t ("home.tools_description")}
            </p>;
          </div>;
          <div className={`grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 3 gap - 6 max - w-6xl mx - auto ${isRTL ? 'rtl' : ''}`}>;
            {tools_features.map ((feature, index) => (
              <Link;
                key={index}
                to={feature.link}
                className="bg - zion - blue border border - zion - blue - light hover:border - zion - purple / 50 rounded - lg p - 6 transition - all duration-300";
              >;
                <div className="bg - zion - blue - dark rounded - full w - 12 h - 12 flex items - center justify - center mb-4">;
                  {feature.icon}
                </div>;
                <h3 className="text - xl font - bold text - white mb-2">{feature.title}</h3>;
                <p className="text - zion - slate - light mb-4">{feature.description}</p>;
                <div className={`flex items - center text - zion - cyan ${isRTL ? 'flex - row - reverse' : ''}`}>;
                  <span>{t ("general.explore")}</span>;
                  <ArrowRight className={`${isRTL ? 'ml - 0 mr - 2 rotate - 180' : 'ml - 2'} h - 4 w - 4`} />;
</CategoriesSection>
      <BenefitsSection />
</BenefitsSection>
      <FeaturesGuideSection />
</FeaturesGuideSection>
      <HowItWorksSection />
</HowItWorksSection>
      <FeaturedListingsSection />
</FeaturedListingsSection>
      <TestimonialCarousel />
</TestimonialCarousel>
      <TrustedBySection />
</TrustedBySection>
      <BlogSection />
</BlogSection>
      <SocialShareSection />
</SocialShareSection>
      <WaitlistSection />
</WaitlistSection>
      <FloatingCTA />
</FloatingCTA>
      <Footer />

</Footer>
    </div>'
    <div className="min-h-screen bg-zion-blue text-white">;"
</div>
      <SEO;"
        title={t("home && home.seo_title")}""
        description={t("home && home.seo_description")}""
        keywords={t("home && home.seo_keywords")}""
        canonical="https://app && app.ziontechgroup.com/""
      />;
</SEO>
      <Header />;
</Header>
      <HeroSection />;
</HeroSection>"
      icon: <Sparkles className="h - 6 w - 6 text - zion - cyan" />,"
</Sparkles>"
      icon: <Users className="h - 6 w - 6 text - zion - purple" />,"
</Users>"
      icon: <Zap className="h - 6 w - 6 text - zion - cyan" />,"
</Zap>"
      icon: <Settings className="h - 6 w - 6 text - zion - purple" />,"
</Settings>"
      icon: <BarChart3 className="h - 6 w - 6 text - zion - cyan" />,"
</BarChart3>"
      icon: <Smartphone className="h - 6 w - 6 text - zion - purple" />,"
</Smartphone>"
    <div className="min-h-screen bg-zion-blue text-white">;"
</div>
      <SEO ;"
        title={t("home.seo_title")} ;""
        description={t("home.seo_description")} ;""
        keywords={t("home.seo_keywords")}""
        canonical="https://app.ziontechgroup.com/";"
      />;
</SEO>
      <Header />;
</Header>
      <HeroSection />;
</HeroSection>"
      <section className="py-16 bg-zion-blue-dark">;"
</section>"
        <div className="container mx-auto px-4">;"
</div>"
          <div className="text-center mb-12">;"
</div>"
            <h2 className="text-3xl font-bold bg-gradient-to-r from-zion-cyan via-zion-purple-light to-zion-purple bg-clip-text text-transparent mb-4">;"
</h2>
            </h2>;"
            <p className="text-zion-slate-light text-xl max-w-3xl mx-auto">;"
</p>
            </p>;
          </div>;"
          <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto ${isRTL ? 'rtl' : ''}`}>;'
</div>
              <Link;
                key={index} 
                to={feature && feature.link} '
                className="bg-zion-blue border border-zion-blue-light hover:border-zion-purple/50 rounded-lg p-6 transition-all duration-300">;"
</Link>"
                <div className="bg-zion-blue-dark rounded-full w-12 h-12 flex items-center justify-center mb-4">;"
</div>
                </div>;"
                <h3 className="text-xl font-bold text-white mb-2">{feature && feature.title}</h3>;""
                <p className="text-zion-slate-light mb-4">{feature && feature.description}</p>;""
                <div className={`flex items-center text-zion-cyan ${isRTL ? 'flex-row-reverse' : ''}`}>;'
</div>'
                  <span>{t("general && general.explore")}</span>;""
                  <ArrowRight className={`${isRTL ? 'ml-0 mr-2 rotate-180' : 'ml-2'} h-4 w-4`} />;'
</ArrowRight>
                </div>;

              </Link>;
          </div>;
        </div>;
      </section>;
      <CategoriesSection />;
</CategoriesSection>
      <BenefitsSection />;

</BenefitsSection>
      <FeaturesGuideSection />;
</FeaturesGuideSection>

      <HowItWorksSection />;
</HowItWorksSection>
      <FeaturedListingsSection />;
</FeaturedListingsSection>
      <TestimonialCarousel />;
</TestimonialCarousel>
      <TrustedBySection />;
</TrustedBySection>
      <BlogSection />;

</BlogSection>
      <SocialShareSection />;
</SocialShareSection>

      <WaitlistSection />;
</WaitlistSection>
      <FloatingCTA />;
</FloatingCTA>
      <Footer />;

</Footer>
    </div>;'
    <div className="min - h-screen bg - zion - blue text - white">;"
</div>
      <SEO;"
        title={t ("home.seo_title")}""
        description={t ("home.seo_description")}""
        keywords={t ("home.seo_keywords")}""
        canonical="https://app.ziontechgroup.com/";"

      />;
</SEO>
      <Header />;
</Header>
      <HeroSection />;

</HeroSection>"
      <section className="py - 16 bg - zion - blue - dark">;"
</section>"
        <div className="container mx - auto px - 4">;"
</div>"
          <div className="text - center mb - 12">;"
</div>"
            <h2 className="text - 3xl font - bold bg - gradient - to - r from - zion - cyan via - zion - purple - light to - zion - purple bg - clip - text text - transparent mb - 4">;"
</h2>
            </h2>;"
            <p className="text - zion - slate - light text - xl max - w-3xl mx - auto">;"
</p>
            </p>;
          </div>;"
          <div className={`grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 3 gap - 6 max - w-6xl mx - auto ${isRTL ? 'rtl' : ''}`}>;'
</div>
              <Link;
                key={index}
                to={feature.link}'
                className="bg - zion - blue border border - zion - blue - light hover:border - zion - purple / 50 rounded - lg p - 6 transition - all duration - 300";"
              >;
</Link>"
                <div className="bg - zion - blue - dark rounded - full w - 12 h - 12 flex items - center justify - center mb - 4">;"
</div>
                </div>;"
                <h3 className="text - xl font - bold text - white mb - 2">{feature.title}</h3>;""
                <p className="text - zion - slate - light mb - 4">{feature.description}</p>;""
                <div className={`flex items - center text - zion - cyan ${isRTL ? 'flex - row - reverse' : ''}`}>;'
</div>'
                  <span>{t ("general.explore")}</span>;""
                  <ArrowRight className={`${isRTL ? 'ml - 0 mr - 2 rotate - 180' : 'ml - 2'} h - 4 w - 4`} />;'
</ArrowRight>

                </div>;
              </Link>))}
          </div>;
        </div>;
      </section>;
      <CategoriesSection />;
      <BenefitsSection />;
      {/* Add the comprehensive features guide section */}
<FeaturesGuideSection />;      <HowItWorksSection />;
      <FeaturedListingsSection />;
      <TestimonialCarousel />;
      <TrustedBySection />;
      <BlogSection />;
{/* Add social share section to encourage users to spread the word */}
      <SocialShareSection />;
      <WaitlistSection />;
      <FloatingCTA />;
      <Footer />;
    </div>);
}
;
      {/* Add social share section to encourage users to spread the word */}
}
  // Tools and features showcase;
  const toolsFeatures = [
    {"
      title: t("home.tool_ai_matcher")","
  description: t("home.tool_ai_matcher_desc")""
      icon: <Sparkles className="h-6 w-6 text-zion-cyan" />"
"
      icon: <Users className="h-6 w-6 text-zion-purple" />"
      icon: <Zap className="h-6 w-6 text-zion-cyan" />"
      icon: <Settings className="h-6 w-6 text-zion-purple" />"
      icon: <BarChart3 className="h-6 w-6 text-zion-cyan" />"
</CategoriesSection>
      <BenefitsSection />;

</BenefitsSection>
      <FeaturesGuideSection />;
</FeaturesGuideSection>
      <HowItWorksSection />;
</HowItWorksSection>

      <FeaturedListingsSection />;
</FeaturedListingsSection>
      <TestimonialCarousel />;
</TestimonialCarousel>
      <TrustedBySection />;
</TrustedBySection>
      <BlogSection />;
</BlogSection>
      <SocialShareSection />;
</SocialShareSection>
      <WaitlistSection />;
</WaitlistSection>
      <FloatingCTA />;
</FloatingCTA>
      <Footer />;
</Footer>
    </div>);

      <SocialShareSection />;
</SocialShareSection>
      <WaitlistSection />;
</WaitlistSection>
      <FloatingCTA />;
</FloatingCTA>
      <Footer />;
</Footer>
    </div>;'
icon: <Sparkles className="h-6 w-6 text-zion-cyan" />;"
</Sparkles>"
icon: <Users className="h-6 w-6 text-zion-purple" />;"
</Users>"
icon: <Zap className="h-6 w-6 text-zion-cyan" />;"
</Zap>"
icon: <Settings className="h-6 w-6 text-zion-purple" />;"
</Settings>"
icon: <BarChart3 className="h-6 w-6 text-zion-cyan" />;"
</BarChart3>"
      icon: <Smartphone className="h-6 w-6 text-zion-purple" />"
      icon: <Sparkles className="h-6 w-6 text-zion-cyan" />,;"
      icon: <Users className="h-6 w-6 text-zion-purple" />,;"
      icon: <Zap className="h-6 w-6 text-zion-cyan" />,;"
      icon: <Settings className="h-6 w-6 text-zion-purple" />,;"
      icon: <BarChart3 className="h-6 w-6 text-zion-cyan" />,;"
      icon: <Smartphone className="h-6 w-6 text-zion-purple" />,;"
      icon: <Sparkles className="h - 6 w - 6 text - zion - cyan" />,"
      icon: <Users className="h - 6 w - 6 text - zion - purple" />,"
      icon: <Zap className="h - 6 w - 6 text - zion - cyan" />,"
      icon: <Settings className="h - 6 w - 6 text - zion - purple" />,"
      icon: <BarChart3 className="h - 6 w - 6 text - zion - cyan" />,"
      icon: <Smartphone className="h - 6 w - 6 text - zion - purple" />,"
      icon: <Smartphone className="h-6 w-6 text-zion-purple" />;"
    <div className="min-h-screen bg-zion-blue text-white">;"
</div>
      <SEO;"
        title={t("home.seo_title")} ;""
        description={t("home.seo_description")} ;""
        keywords={t("home.seo_keywords")}""
        canonical="https://app.ziontechgroup.com/";"
      />;

      <Header />;

      <HeroSection />;
      <section className="py-16 bg-zion-blue-dark">"
</section>"
        <div className="container mx-auto px-4">"
</div>"
          <div className="text-center mb-12">"
            <h2 className="text-3xl font-bold bg-gradient-to-r from-zion-cyan via-zion-purple-light to-zion-purple bg-clip-text text-transparent mb-4">"
</h2>
            </h2>"
            <p className="text-zion-slate-light text-xl max-w-3xl mx-auto">"
</p>
                </div>;"
                <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>;""
                <p className="text-zion-slate-light mb-4">{feature.description}</p>;""
                <div className={`flex items-center text-zion-cyan ${isRTL ? 'flex-row-reverse' : }`}>;
                  <span>{t("general.explore")}</span>;""`;
                  <ArrowRight className={`${isRTL ? 'ml-0 mr-2 rotate-180' : 'ml-2'} h-4 w-4`} />;

                </div>;
              ;
      </section>
      <CategoriesSection />

      <BenefitsSection />

      <FeaturesGuideSection />

      <HowItWorksSection />

      <FeaturedListingsSection />

      <TestimonialCarousel />

      <TrustedBySection />

      <BlogSection />

      <SocialShareSection />

      <WaitlistSection />

      <FloatingCTA />

      <Footer />

        title={t("home && home.seo_title")}""
        description={t("home && home.seo_description")}""
        keywords={t("home && home.seo_keywords")}""
        canonical="https://app && app.ziontechgroup.com/""

      <SEO ;"

      <section className="py-16 bg-zion-blue-dark">;"
        <div className="container mx-auto px-4">;"
          <div className="text-center mb-12">;"
            <h2 className="text-3xl font-bold bg-gradient-to-r from-zion-cyan via-zion-purple-light to-zion-purple bg-clip-text text-transparent mb-4">;"
            </h2>;"
            <p className="text-zion-slate-light text-xl max-w-3xl mx-auto">;"
            </p>;
          </div>;"`;
          <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto ${isRTL ? 'rtl' : }`}>;
              <Link;
                key={index} 
                to={feature && feature.link} 
                className="bg-zion-blue border border-zion-blue-light hover:border-zion-purple/50 rounded-lg p-6 transition-all duration-300">;"
                <div className="bg-zion-blue-dark rounded-full w-12 h-12 flex items-center justify-center mb-4">;"
                <h3 className="text-xl font-bold text-white mb-2">{feature && feature.title}</h3>;""
                <p className="text-zion-slate-light mb-4">{feature && feature.description}</p>;""`;
                  <span>{t("general && general.explore")}</span>;""`;

      </section>;
      <CategoriesSection />;

      <BenefitsSection />;

      <FeaturesGuideSection />;

      <HowItWorksSection />;

      <FeaturedListingsSection />;

      <TestimonialCarousel />;

      <TrustedBySection />;

      <BlogSection />;

      <SocialShareSection />;

      <WaitlistSection />;

      <FloatingCTA />;

      <Footer />;

    <div className="min - h-screen bg - zion - blue text - white">;"
        title={t ("home.seo_title")}""
        description={t ("home.seo_description")}""
        keywords={t ("home.seo_keywords")}""

      <section className="py - 16 bg - zion - blue - dark">;"
        <div className="container mx - auto px - 4">;"
          <div className="text - center mb - 12">;"
            <h2 className="text - 3xl font - bold bg - gradient - to - r from - zion - cyan via - zion - purple - light to - zion - purple bg - clip - text text - transparent mb - 4">;"
            <p className="text - zion - slate - light text - xl max - w-3xl mx - auto">;"
          <div className={`grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 3 gap - 6 max - w-6xl mx - auto ${isRTL ? 'rtl' : }`}>;
                to={feature.link}
                className="bg - zion - blue border border - zion - blue - light hover:border - zion - purple / 50 rounded - lg p - 6 transition - all duration - 300";"
              >;
                <div className="bg - zion - blue - dark rounded - full w - 12 h - 12 flex items - center justify - center mb - 4">;"
                <h3 className="text - xl font - bold text - white mb - 2">{feature.title}</h3>;""
                <p className="text - zion - slate - light mb - 4">{feature.description}</p>;""`;
                <div className={`flex items - center text - zion - cyan ${isRTL ? 'flex - row - reverse' : }`}>;
                  <span>{t ("general.explore")}</span>;""`;
                  <ArrowRight className={`${isRTL ? 'ml - 0 mr - 2 rotate - 180' : 'ml - 2'} h - 4 w - 4`} />;

              ))}

    </div>);

icon: <Sparkles className="h-6 w-6 text-zion-cyan" />;"
icon: <Users className="h-6 w-6 text-zion-purple" />;"
icon: <Zap className="h-6 w-6 text-zion-cyan" />;"
icon: <Settings className="h-6 w-6 text-zion-purple" />;"
icon: <BarChart3 className="h-6 w-6 text-zion-cyan" />;"
min-h-screen bg-zion-blue text-white" > <SEO /> <Header /> <HeroSection /> </p> </div> <div className= {"

  toolsFeatures.map ( (feature, index) => (<Link key= {
  index;)
}</div> ) ) 
}</div> </div> </section> <CategoriesSection /> <BenefitsSection /> {

}<FeaturesGuideSection /> <HowItWorksSection /> <FeaturedListingsSection /> <TestimonialCarousel /> <TrustedBySection /> <BlogSection /> {

}<SocialShareSection /> <WaitlistSection /> <FloatingCTA /> <Footer /> </div>) 
}
}
}
