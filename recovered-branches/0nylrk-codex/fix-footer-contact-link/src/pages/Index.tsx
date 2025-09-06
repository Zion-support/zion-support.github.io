

<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
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
export default function Index() {
export default function Index() {;
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
export default function Index() {
=======


>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
export default function Index() {;


>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
  const { t } = useTranslation();
  const { isRTL } = useLanguage();
import { Header } from "@/components/Header",
import { Footer } from "@/components/Footer",
import { TrustedBySection } from "@/components/TrustedBySection",
import { TestimonialCarousel } from "@/components/TestimonialCarousel",
import { FloatingCTA } from "@/components/FloatingCTA",
import { HeroSection } from "@/components/HeroSection",
import { CategoriesSection } from "@/components/CategoriesSection",
import { BenefitsSection } from "@/components/BenefitsSection",
import { HowItWorksSection } from "@/components/HowItWorksSection",
import { WaitlistSection } from "@/components/WaitlistSection",
import { BlogSection } from "@/components/BlogSection",
import { SEO } from "@/components/SEO",
import { Button } from "@/components/ui/button",
import { Link } from "react-router-dom",
import { FeaturedListingsSection } from "@/components/FeaturedListingsSection",
import { FeaturesGuideSection } from "@/components/FeaturesGuideSection",
import { SocialShareSection } from "@/components/SocialShareSection",
import { useTranslation } from "react-i18next",
import { useLanguage } from "@/context/LanguageContext",
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
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

export default function Index() {;

  const { t } = useTranslation();
  const { isRTL } = useLanguage();

    },

    }
    },
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
    }
    },
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
    {
      title: t("home.tool_talent")
      description: t("home.tool_talent_desc")
      icon: <Users className="h-6 w-6 text-zion-purple" />
      link: "/talent"
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
<<<<<<< HEAD

<<<<<<< HEAD

    },


=======
    },


    }
    },
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    {
      title: t("home.tool_services")
      description: t("home.tool_services_desc")
      icon: <Zap className="h-6 w-6 text-zion-cyan" />
      link: "/services"
<<<<<<< HEAD

=======
<<<<<<< HEAD

<<<<<<< HEAD

    },


=======
    },


    }
    },
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

    },
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

    },
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
    {
      title: t("home.tool_equipment")
      description: t("home.tool_equipment_desc")
      icon: <Settings className="h-6 w-6 text-zion-purple" />
<<<<<<< HEAD
<<<<<<< HEAD
      link: "/equipment"
<<<<<<< HEAD

=======
<<<<<<< HEAD

<<<<<<< HEAD

    },


=======
    },


    }
    },
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    {
      title: t("home.tool_analytics")
      description: t("home.tool_analytics_desc")
      icon: <BarChart3 className="h-6 w-6 text-zion-cyan" />
      link: "/analytics"
<<<<<<< HEAD

=======
<<<<<<< HEAD

<<<<<<< HEAD

    },


=======
    },


    }
    },
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    {
=======
      link: "/equipment"    {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
      link: "/equipment"    {
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
      title: "Mobile App"
      description: "Take Zion with you on the go with our mobile app for iOS and Android"
      icon: <Smartphone className="h-6 w-6 text-zion-purple" />
      link: "/mobile-launch"
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======

  // Tools and features showcase;
=======
    }
  ],

  return (
    <div className="min-h-screen bg-zion-blue text-white">
      <SEO
        title={t("home.seo_title")}
        description={t("home.seo_description")}
        keywords={t("home.seo_keywords")}
        canonical="https://app.ziontechgroup.com/"
      />
      <Header />
      <HeroSection />
<<<<<<< HEAD
    }
  ];
;
=======

  // Tools and features showcase;
// Tools and features showcase;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  const toolsFeatures = [;
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
    {;
      title: t("home && home.tool_ai_matcher"),,
  description: t("home && home.tool_ai_matcher_desc"),;
      icon: <Sparkles className="h-6 w-6 text-zion-cyan" />,;
      link: "/match"
};
    {;
      title: t("home && home.tool_talent"),,
  description: t("home && home.tool_talent_desc"),;
      icon: <Users className="h-6 w-6 text-zion-purple" />,;
      link: "/talent"
};
    {;
      title: t("home && home.tool_services"),,
  description: t("home && home.tool_services_desc"),;
      icon: <Zap className="h-6 w-6 text-zion-cyan" />,;
      link: "/services"
};
    {;
      title: t("home && home.tool_equipment"),,
  description: t("home && home.tool_equipment_desc"),;
      icon: <Settings className="h-6 w-6 text-zion-purple" />,;
      link: "/equipment"
};
    {;
      title: t("home && home.tool_analytics"),,
  description: t("home && home.tool_analytics_desc"),;
      icon: <BarChart3 className="h-6 w-6 text-zion-cyan" />,;
      link: "/analytics"
};
    {;
      title: "Mobile App",,
  description: "Take Zion with you on the go with our mobile app for iOS and Android",;
      icon: <Smartphone className="h-6 w-6 text-zion-purple" />,;
      link: "/mobile-launch";
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
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
export default /**
 * Index - Function description
 */
function Index() {
  const { t } = use_translation ();
  const { isRTL } = use_language ();
;
  // Tools and features showcase;
  const tools_features = [;
    {
      title: t ("home.tool_ai_matcher"),
      description: t ("home.tool_ai_matcher_desc"),
      icon: <Sparkles className="h - 6 w - 6 text - zion - cyan" />,
      link: "/match";
    }
    {
      title: t ("home.tool_talent"),
      description: t ("home.tool_talent_desc"),
      icon: <Users className="h - 6 w - 6 text - zion - purple" />,
      link: "/talent";
    }
    {
      title: t ("home.tool_services"),
      description: t ("home.tool_services_desc"),
      icon: <Zap className="h - 6 w - 6 text - zion - cyan" />,
      link: "/services";
    }
    {
      title: t ("home.tool_equipment"),
      description: t ("home.tool_equipment_desc"),
      icon: <Settings className="h - 6 w - 6 text - zion - purple" />,
      link: "/equipment";
    }
    {
      title: t ("home.tool_analytics"),
      description: t ("home.tool_analytics_desc"),
      icon: <BarChart3 className="h - 6 w - 6 text - zion - cyan" />,
      link: "/analytics";
    }
    {
      title: "Mobile App",
      description: "Take Zion with you on the go with our mobile app for iOS and Android",
      icon: <Smartphone className="h - 6 w - 6 text - zion - purple" />,
      link: "/mobile - launch";
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
    }
  ];
;
  return (
<<<<<<< HEAD


=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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
<<<<<<< HEAD

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
import { Header } from "@/components/Header",;
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
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
  Smartphone;
} from "lucide-react",;
export default function Index() {;
  const { t } = useTranslation(),;
  const { isRTL } = useLanguage(),;
  // Tools and features showcase;
  const toolsFeatures = [;
    {;
      title: t("home.tool_ai_matcher"),,
  description: t("home.tool_ai_matcher_desc"),;
      icon: <Sparkles className="h-6 w-6 text-zion-cyan" />,;
      link: "/match";
    },;
    {;
      title: t("home.tool_talent"),,
  description: t("home.tool_talent_desc"),;
      icon: <Users className="h-6 w-6 text-zion-purple" />,;
      link: "/talent";
    },;
    {;
      title: t("home.tool_services"),,
  description: t("home.tool_services_desc"),;
      icon: <Zap className="h-6 w-6 text-zion-cyan" />,;
      link: "/services";
    },;
    {;
      title: t("home.tool_equipment"),,
  description: t("home.tool_equipment_desc"),;
      icon: <Settings className="h-6 w-6 text-zion-purple" />,;
      link: "/equipment";
    },;
    {;
      title: t("home.tool_analytics"),,
  description: t("home.tool_analytics_desc"),;
      icon: <BarChart3 className="h-6 w-6 text-zion-cyan" />,;
      link: "/analytics";
    },;
    {;
      title: "Mobile App",,
  description: "Take Zion with you on the go with our mobile app for iOS and Android",;
      icon: <Smartphone className="h-6 w-6 text-zion-purple" />;
      link: "/mobile-launch";
    }
  ];
  return (;
    <div className="min-h-screen bg-zion-blue text-white">;
      <SEO;
        title={t("home.seo_title")} ;
        description={t("home.seo_description")} ;
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

<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
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
<<<<<<< HEAD
  )
<<<<<<< HEAD
<<<<<<< HEAD
}
=======
<<<<<<< HEAD
=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
    <div className="min-h-screen bg-zion-blue text-white">;
      <SEO
        title={t("home && home.seo_title")} 
        description={t("home && home.seo_description")} 
        keywords={t("home && home.seo_keywords")}
        canonical="https://app && app.ziontechgroup.com/"
      />;
      <Header />;
      <HeroSection />;

<<<<<<< HEAD
=======
import { Header } from "@/components/Header",;
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
import { useLanguage } from "@/context/LanguageContext",;
import { ;
  ArrowRight,;
  Users, ;
  Zap, ;
  Settings, ;
  Search,;
  MessageSquare, ;
  Sparkles,;
  BarChart3,;
  Smartphone;
} from "lucide-react",;
=======
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
export default /**
 * Index - Function description
 */
function Index() {
  const { t } = use_translation ();
  const { isRTL } = use_language ();
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
;
  // Tools and features showcase;
  const tools_features = [;
    {
      title: t ("home.tool_ai_matcher"),
      description: t ("home.tool_ai_matcher_desc"),
      icon: <Sparkles className="h - 6 w - 6 text - zion - cyan" />,
      link: "/match";
    }
    {
      title: t ("home.tool_talent"),
      description: t ("home.tool_talent_desc"),
      icon: <Users className="h - 6 w - 6 text - zion - purple" />,
      link: "/talent";
    }
    {
      title: t ("home.tool_services"),
      description: t ("home.tool_services_desc"),
      icon: <Zap className="h - 6 w - 6 text - zion - cyan" />,
      link: "/services";
    }
    {
      title: t ("home.tool_equipment"),
      description: t ("home.tool_equipment_desc"),
      icon: <Settings className="h - 6 w - 6 text - zion - purple" />,
      link: "/equipment";
    }
    {
      title: t ("home.tool_analytics"),
      description: t ("home.tool_analytics_desc"),
      icon: <BarChart3 className="h - 6 w - 6 text - zion - cyan" />,
      link: "/analytics";
    }
    {
      title: "Mobile App",
      description: "Take Zion with you on the go with our mobile app for iOS and Android",
      icon: <Smartphone className="h - 6 w - 6 text - zion - purple" />,
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
  )      {/* Quick Access Tools Section */}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
  )      {/* Quick Access Tools Section */}
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
=======
  return (
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    <div className="min - h-screen bg - zion - blue text - white">;
=======
    <div className="min - h-screen bg - zion - blue text-white">;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
    <div className="min - h-screen bg - zion - blue text-white">;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
      <SEO;
        title={t ("home.seo_title")}
        description={t ("home.seo_description")}
        keywords={t ("home.seo_keywords")}
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
}
