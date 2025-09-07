




import {Header} from "@/components/Header";""
import {Footer} from "@/components/Footer";""
import {TrustedBySection} from "@/components/TrustedBySection";""
import {TestimonialCarousel} from "@/components/TestimonialCarousel";""
import {FloatingCTA} from "@/components/FloatingCTA";""
import {HeroSection} from "@/components/HeroSection";""
import {CategoriesSection} from "@/components/CategoriesSection";""
import {BenefitsSection} from "@/components/BenefitsSection";""
import {HowItWorksSection} from "@/components/HowItWorksSection";""
import {WaitlistSection} from "@/components/WaitlistSection";""
import {BlogSection} from "@/components/BlogSection";""
import {SEO} from "@/components/SEO";""
import {Button} from "@/components/ui/button";""
import {Link} from "react-router-dom";""
import {FeaturedListingsSection} from "@/components/FeaturedListingsSection";""
import {FeaturesGuideSection} from "@/components/FeaturesGuideSection";""
import {SocialShareSection} from "@/components/SocialShareSection";""
import {useTranslation} from "react-i18next";""
import {useLanguage} from "@/context/LanguageContext";""
import {ArrowRight, Users, Zap, Settings, Search, MessageSquare, Sparkles, BarChart3, Smartphone} from "lucide-react";"
export default function Index() {;


  const { t } = useTranslation();
  const { isRTL } = useLanguage();"
import { Header } from "@/components/Header",""
import { Footer } from "@/components/Footer",""
import { TrustedBySection } from "@/components/TrustedBySection",""
import { TestimonialCarousel } from "@/components/TestimonialCarousel",""
import { FloatingCTA } from "@/components/FloatingCTA",""
import { HeroSection } from "@/components/HeroSection",""
import { CategoriesSection } from "@/components/CategoriesSection",""
import { BenefitsSection } from "@/components/BenefitsSection",""
import { HowItWorksSection } from "@/components/HowItWorksSection",""
import { WaitlistSection } from "@/components/WaitlistSection",""
import { BlogSection } from "@/components/BlogSection",""
import { SEO } from "@/components/SEO",""
import { Button } from "@/components/ui/button",""
import { Link } from "react-router-dom",""
import { FeaturedListingsSection } from "@/components/FeaturedListingsSection",""
import { FeaturesGuideSection } from "@/components/FeaturesGuideSection",""
import { SocialShareSection } from "@/components/SocialShareSection",""
import { useTranslation } from "react-i18next",""
import { useLanguage } from "@/context/LanguageContext","
import {
  // TODO: Implement
}

  ArrowRight,
  Users, 
  Zap, 
  Settings, 
  Search,
  MessageSquare, 
  Sparkles,

  BarChart3,
  Smartphone;"
} from "lucide-react","
export default function Index() {
  const { t } = useTranslation(),
  const { isRTL } = useLanguage(),
  
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

</HeroSection>"
      <section className="py-16 bg-zion-blue-dark">"
</section>"
        <div className="container mx-auto px-4">"
</div>"
          <div className="text-center mb-12">"
</div>"
            <h2 className="text-3xl font-bold bg-gradient-to-r from-zion-cyan via-zion-purple-light to-zion-purple bg-clip-text text-transparent mb-4">"
</h2>
            </h2>"
            <p className="text-zion-slate-light text-xl max-w-3xl mx-auto">"
</p>
                </div>;"
                <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>;""
                <p className="text-zion-slate-light mb-4">{feature.description}</p>;""
                <div className={`flex items-center text-zion-cyan ${isRTL ? 'flex-row-reverse' : ''}`}>;'
</div>'
                  <span>{t("general.explore")}</span>;""
                  <ArrowRight className={`${isRTL ? 'ml-0 mr-2 rotate-180' : 'ml-2'} h-4 w-4`} />;'
</ArrowRight>
                </div>;
              </Link>;

          </div>
        </div>
      </section>
      <CategoriesSection />
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
icon: <Smartphone className="h-6 w-6 text-zion-purple" />;"
</Smartphone>"
min-h-screen bg-zion-blue text-white" > <SEO /> <Header /> <HeroSection /> </p> </div> <div className= {"
</SEO>
  toolsFeatures.map ( (feature, index) => (<Link key= {
  index;)
}</div> </Link>) ) 
}</div> </div> </section> <CategoriesSection /> <BenefitsSection /> {
</CategoriesSection>
}<FeaturesGuideSection /> <HowItWorksSection /> <FeaturedListingsSection /> <TestimonialCarousel /> <TrustedBySection /> <BlogSection /> {
</FeaturesGuideSection>
}<SocialShareSection /> <WaitlistSection /> <FloatingCTA /> <Footer /> </div>) 
</SocialShareSection>]"

