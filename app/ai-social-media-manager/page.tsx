import React from 'react';
import { Link    } from 'react-router-dom';
import { ArrowRight    } from 'lucide-react';
constPage: React.FC = () => {
import { ArrowRight, Users, Brain    } from 'lucide-react';

exportdefaultfunctionAISocialMediaManager() {
  constfeatures = [
    {
      icon: <BrainclassName="w-6 h-6 t e xt-cyan-400" />,
      title: 'AIContentCreation',
      description: 'Generateengagingposts, captions, andhashtagsusingadvancedAIalgorithms'
    },
    {
      icon: <CalendarclassName="w-6 h-6 t e xt-purple-400" />,
      title: 'SmartScheduling',
      description: 'Optimizepostingtimesbasedonaudienceengagementpatternsandanalytics'
    },
    {
      icon: <TrendingUpclassName="w-6 h-6 t e xt-yellow-400" />,
      title: 'PerformanceAnalytics',
      description: 'Trackengagement, reach, andROIwithdetailedanalyticsandinsights'
    },
    {
      icon: <UsersclassName="w-6 h-6 t e xt-green-400" />,
      title: 'AudienceInsights',
      description: 'Understandyouraudiencedemographics, interests, andbehaviorpatterns'
    }
  ]

  constplatformFeatures = [
    {
      platform: 'Instagram',
      features: ['StoryTemplates', 'ReelsOptimization', 'HashtagResearch', 'IGTVScheduling', 'StoriesAnalytics', 'ShoppingIntegration']
    },
    {
      platform: 'Facebook',
      features: ['PageManagement', 'EventPromotion', 'GroupManagement', 'LiveStreaming', 'AdIntegration', 'CommunityBuilding']
    },
    {
      platform: 'Twitter',
      features: ['ThreadCreation', 'TrendMonitoring', 'HashtagTracking', 'ReplyManagement', 'MomentCreation', 'EngagementOptimization']
    },
    {
      platform: 'LinkedIn',
      features: ['ProfessionalContent', 'CompanyUpdates', 'ArticlePublishing', 'EventPromotion', 'LeadGeneration', 'B2BAnalytics']
    },
    {
      platform: 'TikTok',
      features: ['VideoOptimization', 'TrendAnalysis', 'SoundSelection', 'EffectRecommendations', 'ChallengeParticipation', 'ViralContentStrategy']
    },
    {
      platform: 'YouTube',
      features: ['VideoSEO', 'ThumbnailOptimization', 'TitleGeneration', 'DescriptionWriting', 'TagResearch', 'AnalyticsTracking']
    }
  ]

  constpricingPlans = [
    {
      name: 'Starter',
      price: '$49',
      period: '/month',
      description: 'Perfectforsmallbusinessesandinfluencers',
      features: [
        'Upto 3 socialaccounts',
        'BasicAIcontentgeneration',
        'Standardscheduling',
        'Basicanalytics',
        'Emailsupport',
        'Mobileappaccess'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$99',
      period: '/month',
      description: 'Idealforgrowingbusinessesandagencies',
      features: [
        'Upto 10 socialaccounts',
        'AdvancedAIfeatures',
        'Smartscheduling',
        'Detailedanalytics',
        'Prioritysupport',
        'Teamcollaboration',
        'Customtemplates'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$199',
      period: '/month',
      description: 'Forlargeorganizationsandagencies',
      features: [
        'Unlimitedsocialaccounts',
        'CustomAItraining',
        'White-labelsolution',
        'Advancedanalytics',
        'Dedicatedsupport',
        'APIaccess',
        'Customintegrations'
      ],
      popular: false
    }
  ]

  consttestimonials = [
    {
      name: 'SarahJohnson',
      company: 'FashionBrandCo.',
      content: 'AISocialMediaManagerincreasedourengagementby 150% andsavedus 20 hoursperweekoncontentcreation.',
      rating: 5
    },
    {
      name: 'MikeChen',
      company: 'TechStartup',
      content: 'TheAIcontentsuggestionsarespot-on. Oursocialmediapresencehasneverbeenstronger.',
      rating: 5
    },
    {
      name: 'EmilyRodriguez',
      company: 'MarketingAgency',
      content: 'Managingmultipleclientaccountsisnoweffortless. Theanalyticsinsightsareincrediblyvaluable.',
      rating: 5
    }
  ]

  return (
    <>
    <>
      <Helmet>
        <title>5GDataAnalytics - ZionTechGroup</title>
        <metaname="description" content="Professional 5GdataanalyticsservicesbyZionTechGroup. Transformyourbusinesswithourexpertsolutions." />
      </Helmet>
        <title>- ZionTechGroup</title>
        <metaconstname = "description" content="ProfessionalservicesbyZionTechGroup. Expertsolutionstailoredtoyourbusinessneeds." / / />
        <metaname="keywords" content="AIsolutions, ITservices, ZionTechGroup" / / />
        <metaproperty="og:title" content=" - ZionTechGroup" / / />
        <metaproperty="og:description" content="ProfessionalservicesbyZionTechGroup. Expertsolutionstailoredtoyourbusinessneeds." / / />
        <metaproperty="og:type" content="website" / / />
        <metaproperty="og:url" content="https://ziontechgroup.com/ai-social-media-manager" / / />
      </Helmet>
    </>

      <divclassName="m in-h-screenbg-gradient-to-brfrom-slate-900 via-purple-900to-slate-900pt-16">
        {/* HeroSection */}
    <>
        <sectionclassName="p y-20" />
          <divclassName="c o ntainermx-autopx-4text-center">
            <h1 className="t e xt-5 xlmd:text-6 xlfont-boldtext-whitemb-6" />
              <spanclassName="b g-gradient-to-rfrom-cyan-400 via-purple-400 to-pink-400bg-clip-texttext-transparent"   / />
            </h1>
            <pclassName="t e xt-xltext-gray-300 mb-8 max-w-3xlmx-auto">
              ProfessionalservicesbyZionTechGroup. Expertsolutionstailoredtoyourbusinessneeds.
    <>
            </p>
            <divclassName="f l exflex-colsm:flex-rowgap-4justify-centermb-12">
              <Linkto="/contact" className="b g-gradient-to-rfrom-cyan-500 to-purple-500 text-whitepx-8 py-4 rounded-lgfont-semiboldtext-lghover:from-cyan-600 hover:to-purple-600 transition-allduration-300 transformhover:scale-105 shadow-lghover:shadow-cyan-500/25 flexitems-centerjustify-centergroup">
          GetStarted
                
          <ArrowRightclassName="m l-2group-hover:translate-x-1transition-transform"  />
        </Link>
              <Linkto="/contact" className="b o rderborder-cyan-500 text-cyan-400 px-8 py-4 rounded-lgfont-semiboldtext-lghover:bg-cyan-500/10 transition-allduration-300transformhover:scale-105">LearnMore
              </Link>
            </div>
        </section>
    </>

        {/* CTASection */}
    <>
        <sectionclassName="p y-20" />
          <divclassName="c o ntainermx-autopx-4">
            <divclassName="b g-gradient-to-rfrom-cyan-900/50 to-purple-900/50 backdrop-blur-smborderborder-cyan-500/20 rounded-2 xlp-12text-center">
              <h2 className="t e xt-4xlfont-boldtext-whitemb-6"  />ReadytoGetStarted?
              </h2>
              <pclassName="t e xt-xltext-gray-300 mb-8 max-w-2xlmx-auto">Contactustolearnmoreaboutoursolutionsandhowwecanhelpyourbusiness.</p>
              <divclassName="f l exflex-colsm:flex-rowgap-4justify-center">
                <Linkto="/contact" className="b g-gradient-to-rfrom-cyan-500 to-purple-500 text-whitepx-8 py-4 rounded-lgfont-semiboldtext-lghover:from-cyan-600 hover:to-purple-600 transition-allduration-300 transformhover:scale-105shadow-lghover:shadow-cyan-500/25">ContactUs
                </Link>
                <Linkto="/services" className="b o rderborder-cyan-500 text-cyan-400 px-8 py-4 rounded-lgfont-semiboldtext-lghover:bg-cyan-500/10 transition-allduration-300transformhover:scale-105">ViewAllServices
                </Link>
              </div>
          </div>
        </section>
      </div>
        </div>
      </div>
          </div>
        </div>
      </div>
        </div>
      </div>
          </div>
        </div>
      </div>
        </div>
      </div>
      </div>
    </>
  );
};

exportdefaultPage;
;
    </>
    </>
    </>
    </>
    </>
}
