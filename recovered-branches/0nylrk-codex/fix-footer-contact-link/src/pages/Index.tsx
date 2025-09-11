




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
export default function Index() {
export default function Index() {;
=======


export default function Index() {;


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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

export default function Index() {
  const { t } = useTranslation(),
  const { isRTL } = useLanguage(),
  
<<<<<<< HEAD
  
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  // Tools and features showcase

  const toolsFeatures = [
    {
      title: t("home.tool_ai_matcher")
      description: t("home.tool_ai_matcher_desc")
      icon: <Sparkles className="h-6 w-6 text-zion-cyan" />
      link: "/match"
<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36


export default function Index() {;


  const { t } = useTranslation();
  const { isRTL } = useLanguage();


    },


<<<<<<< HEAD
    }
    },
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
    }
    },
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    {
      title: t("home.tool_talent")
      description: t("home.tool_talent_desc")
      icon: <Users className="h-6 w-6 text-zion-purple" />
      link: "/talent"
<<<<<<< HEAD

<<<<<<< HEAD
    },


    }
    },
=======

    },


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
    }
    },
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    {
      title: t("home.tool_services")
      description: t("home.tool_services_desc")
      icon: <Zap className="h-6 w-6 text-zion-cyan" />
      link: "/services"
<<<<<<< HEAD

<<<<<<< HEAD
    },


    }
    },
=======

    },


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
    }
    },
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    {
      title: t("home.tool_equipment")
      description: t("home.tool_equipment_desc")
      icon: <Settings className="h-6 w-6 text-zion-purple" />
      link: "/equipment"
<<<<<<< HEAD

<<<<<<< HEAD
    },


    }
    },
=======

    },


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
    }
    },
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    {
      title: t("home.tool_analytics")
      description: t("home.tool_analytics_desc")
      icon: <BarChart3 className="h-6 w-6 text-zion-cyan" />
      link: "/analytics"
<<<<<<< HEAD

<<<<<<< HEAD
    },


    }
    },
=======

    },


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
    }
    },
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    {
      title: "Mobile App"
      description: "Take Zion with you on the go with our mobile app for iOS and Android"
      icon: <Smartphone className="h-6 w-6 text-zion-purple" />
      link: "/mobile-launch"
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

  // Tools and features showcase;
// Tools and features showcase;
  const toolsFeatures = [;
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
    }
  ];
;
  return (
<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
            </p>;
          </div>;
          <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto ${isRTL ? 'rtl' : ''}`}>;
            {toolsFeatures.map((feature, index) => (;
              <Link;
                key={index} ;
                to={feature.link} ;
                className="bg-zion-blue border border-zion-blue-light hover:border-zion-purple/50 rounded-lg p-6 transition-all duration-300";
              >;
                <div className="bg-zion-blue-dark rounded-full w-12 h-12 flex items-center justify-center mb-4">;
                  {feature.icon}
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
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
  )
<<<<<<< HEAD
<<<<<<< HEAD
=======
}
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
}
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
;
export default function Index() {;
  const { t } = useTranslation(),;
  const { isRTL } = useLanguage(),;
  ;
  // Tools and features showcase;
  const toolsFeatures = [;
    {;
      title:t("home.tool_ai_matcher"),;
      description:t("home.tool_ai_matcher_desc"),;
      icon:<Sparkles className="h-6 w-6 text-zion-cyan" />,;
      link:"/match";
    },;
    {;
      title:t("home.tool_talent"),;
      description:t("home.tool_talent_desc"),;
      icon:<Users className="h-6 w-6 text-zion-purple" />,;
      link:"/talent";
    },;
    {;
      title:t("home.tool_services"),;
      description:t("home.tool_services_desc"),;
      icon:<Zap className="h-6 w-6 text-zion-cyan" />,;
      link:"/services";
    },;
    {;
      title:t("home.tool_equipment"),;
      description:t("home.tool_equipment_desc"),;
      icon:<Settings className="h-6 w-6 text-zion-purple" />,;
      link:"/equipment";
    },;
    {;
      title:t("home.tool_analytics"),;
      description:t("home.tool_analytics_desc"),;
      icon:<BarChart3 className="h-6 w-6 text-zion-cyan" />,;
      link:"/analytics";
    },;
    {;
      title:"Mobile App",;
      description:"Take Zion with you on the go with our mobile app for iOS and Android",;
      icon:<Smartphone className="h-6 w-6 text-zion-purple" />,;
      link:"/mobile-launch";
    }
  ],;
;
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
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      {/* Quick Access Tools Section */}
      <section className="py-16 bg-zion-blue-dark">;
        <div className="container mx-auto px-4">;
          <div className="text-center mb-12">;
            <h2 className="text-3xl font-bold bg-gradient-to-r from-zion-cyan via-zion-purple-light to-zion-purple bg-clip-text text-transparent mb-4">;
<<<<<<< HEAD
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
                <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>;
                <p className="text-zion-slate-light mb-4">{feature.description}</p>;
                <div className={`flex items-center text-zion-cyan ${isRTL ? 'flex-row-reverse' :''}`}>;
                  <span>{t("general.explore")}</span>;
                  <ArrowRight className={`${isRTL ? 'ml-0 mr-2 rotate-180' :'ml-2'} h-4 w-4`} />;
=======
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
                  <ArrowRight className={`${isRTL ? 'ml-0 mr-2 rotate-180' : 'ml-2'} h-4 w-4`} />;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                </div>;
              </Link>;
            ))}
          </div>;
        </div>;
      </section>;
<<<<<<< HEAD
      ;
      <CategoriesSection />;
      <BenefitsSection />;
      ;
      {/* Add the comprehensive features guide section */}
      <FeaturesGuideSection />;
      ;
=======

      <CategoriesSection />;
      <BenefitsSection />;

      {/* Add the comprehensive features guide section */}
      <FeaturesGuideSection />;

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      <HowItWorksSection />;
      <FeaturedListingsSection />;
      <TestimonialCarousel />;
      <TrustedBySection />;
      <BlogSection />;
<<<<<<< HEAD
      ;
      {/* Add social share section to encourage users to spread the word */}
      <SocialShareSection />;
      ;
=======

      {/* Add social share section to encourage users to spread the word */}
      <SocialShareSection />;

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      <WaitlistSection />;
      <FloatingCTA />;
      <Footer />;
    </div>;
<<<<<<< HEAD
  ),;}
 import {
  ArrowRight;
Users;
Zap;
Settings;
Search;
MessageSquare;
Sparkles;
BarChart3;
Smartphone export default function Index () {
  const {
  t 
}= useTranslation ();
const {
  isRTL 
}= useLanguage ();
//Tools and features showcase const toolsFeatures = [ {
  title: t ("home.tool ai matcher");
description: t ("home.tool ai matcher desc");
icon: <Sparkles className="h-6 w-6 text-zion-cyan" />;
link: "/match" 
};
{
  title: t ("home.tool talent");
description: t ("home.tool talent desc");
icon: <Users className="h-6 w-6 text-zion-purple" />;
link: "/talent" 
};
{
  title: t ("home.tool services");
description: t ("home.tool services desc");
icon: <Zap className="h-6 w-6 text-zion-cyan" />;
link: "/services" 
};
{
  title: t ("home.tool equipment");
description: t ("home.tool equipment desc");
icon: <Settings className="h-6 w-6 text-zion-purple" />;
link: "/equipment" 
};
{
  title: t ("home.tool analytics");
description: t ("home.tool analytics desc");
icon: <BarChart3 className="h-6 w-6 text-zion-cyan" />;
link: "/analytics" 
};
{
  title: "Mobile App";
description: "Take Zion with you on the go with our mobile app for iOS and Android";
icon: <Smartphone className="h-6 w-6 text-zion-purple" />;
link: "/mobile-launch" 
}];
min-h-screen bg-zion-blue text-white" > <SEO /> <Header /> <HeroSection /> </p> </div> <div className= {
  `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto $ {
  isRTL ? 'rtl' : '' 
}` 
}> {
  toolsFeatures.map ( (feature, index) => (<Link key= {
  index 
}</div> </Link>) ) 
}</div> </div> </section> <CategoriesSection /> <BenefitsSection /> {
  /* Add the comprehensive features guide section */ 
}<FeaturesGuideSection /> <HowItWorksSection /> <FeaturedListingsSection /> <TestimonialCarousel /> <TrustedBySection /> <BlogSection /> {
  /* Add social share section to encourage users to spread the word */ 
}<SocialShareSection /> <WaitlistSection /> <FloatingCTA /> <Footer /> </div>) 
}
}
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
  );
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
    <div className="min - h-screen bg - zion - blue text - white">;
      <SEO;
        title={t ("home.seo_title")}
        description={t ("home.seo_description")}
        keywords={t ("home.seo_keywords")}
        canonical="https://app.ziontechgroup.com/";
      />;
      <Header />;
      <HeroSection />;
      {/* Quick Access Tools Section */}
      <section className="py - 16 bg - zion - blue - dark">;
        <div className="container mx - auto px - 4">;
          <div className="text - center mb - 12">;
            <h2 className="text - 3xl font - bold bg - gradient - to - r from - zion - cyan via - zion - purple - light to - zion - purple bg - clip - text text - transparent mb - 4">;
              {t ("home.explore_tools")}
            </h2>;
            <p className="text - zion - slate - light text - xl max - w-3xl mx - auto">;
              {t ("home.tools_description")}
            </p>;
          </div>;
          <div className={`grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 3 gap - 6 max - w-6xl mx - auto ${isRTL ? 'rtl' : ''}`}>;
            {tools_features.map ((feature, index) => (
              <Link;
                key={index}
                to={feature.link}
                className="bg - zion - blue border border - zion - blue - light hover:border - zion - purple / 50 rounded - lg p - 6 transition - all duration - 300";
              >;
                <div className="bg - zion - blue - dark rounded - full w - 12 h - 12 flex items - center justify - center mb - 4">;
                  {feature.icon}
                </div>;
                <h3 className="text - xl font - bold text - white mb - 2">{feature.title}</h3>;
                <p className="text - zion - slate - light mb - 4">{feature.description}</p>;
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
    </div>);
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
