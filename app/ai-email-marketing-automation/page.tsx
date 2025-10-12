import React from 'react';
import { Link    } from 'react-router-dom';
import { ArrowRight    } from 'lucide-react';
constPage: React.FC = () => {
import { ArrowRight, Brain    } from 'lucide-react';

exportdefaultfunctionAIEmailMarketingAutomation() {
  constfeatures = [
    {
      icon: <BrainclassName="w-6 h-6 t e xt-cyan-400" />,
      title: 'AIContentGeneration',
      description: 'CreatecompellingemailcampaignswithAI-poweredsubjectlines, content, andCTAs'
    },
    {
      icon: <TargetclassName="w-6 h-6 t e xt-purple-400" />,
      title: 'SmartSegmentation',
      description: 'Automaticallysegmentyouraudiencebasedonbehavior, preferences, andengagement'
    },
    {
      icon: <ClockclassName="w-6 h-6 t e xt-yellow-400" />,
      title: 'AutomatedWorkflows',
      description: 'Setupcomplexemailsequencesthattriggerbasedonuseractionsandbehaviors'
    },
    {
      icon: <BarChart3 className="w-6 h-6 t e xt-green-400" />,
      title: 'AdvancedAnalytics',
      description: 'Trackopenrates, click-throughrates, conversions, andROIwithdetailedinsights'
    }
  ]

  constautomationFeatures = [
    {
      category: 'EmailCreation',
      items: ['AISubjectLineGenerator', 'ContentTemplates', 'PersonalizationEngine', 'A/BTesting', 'MobileOptimization', 'SpamScoreChecker']
    },
    {
      category: 'Automation',
      items: ['WelcomeSeries', 'AbandonedCartRecovery', 'BirthdayCampaigns', 'Re-engagementSequences', 'LeadNurturing', 'Post-PurchaseFollow-up']
    },
    {
      category: 'Segmentation',
      items: ['BehavioralTriggers', 'DemographicFilters', 'EngagementLevels', 'PurchaseHistory', 'CustomFields', 'DynamicLists']
    },
    {
      category: 'Analytics',
      items: ['Real-timeDashboard', 'CampaignPerformance', 'RevenueTracking', 'SubscriberGrowth', 'UnsubscribeAnalysis', 'ROIReports']
    }
  ]

  constpricingPlans = [
    {
      name: 'Starter',
      price: '$39',
      period: '/month',
      description: 'Perfectforsmallbusinessesandstartups',
      features: [
        'Upto 1,000 subscribers',
        'BasicAIfeatures',
        'Emailtemplates',
        'Basicautomation',
        'Standardanalytics',
        'Emailsupport'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$79',
      period: '/month',
      description: 'Idealforgrowingbusinesses',
      features: [
        'Upto 10,000 subscribers',
        'AdvancedAIfeatures',
        'Customtemplates',
        'Advancedautomation',
        'Detailedanalytics',
        'Prioritysupport',
        'A/Btesting'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$199',
      period: '/month',
      description: 'Forlargeorganizations',
      features: [
        'Unlimitedsubscribers',
        'CustomAItraining',
        'White-labelsolution',
        'Advancedautomation',
        'Customanalytics',
        'Dedicatedsupport',
        'APIaccess'
      ],
      popular: false
    }
  ]

  consttestimonials = [
    {
      name: 'JenniferLee',
      company: 'E-commerceStore',
      content: 'AIEmailMarketingAutomationincreasedouremailrevenueby 200% andreducedourworkloadby 60%.',
      rating: 5
    },
    {
      name: 'DavidPark',
      company: 'SaaSCompany',
      content: 'Theautomatedworkflowsareincredible. Ourleadnurturingprocessisnowcompletelyhands-off.',
      rating: 5
    },
    {
      name: 'MariaSantos',
      company: 'MarketingAgency',
      content: 'Managingmultipleclientemailcampaignsisnoweffortless. TheAIcontentgenerationsaveshours.',
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
        <metaproperty="og:url" content="https://ziontechgroup.com/ai-email-marketing-automation" / / />
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
