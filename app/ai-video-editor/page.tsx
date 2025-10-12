import React from 'react';
import { Link    } from 'react-router-dom';
import { ArrowRight    } from 'lucide-react';
constPage: React.FC = () => {
import { ArrowRight, Brain, Cloud    } from 'lucide-react';

exportdefaultfunctionAIVideoEditor() {
  constfeatures = [
    {
      icon: <BrainclassName="w-6 h-6 t e xt-cyan-400" />,
      title: 'AI-PoweredEditing',
      description: 'Automaticallyeditvideoswithintelligentscenedetection, colorcorrection, andaudioenhancement'
    },
    {
      icon: <ScissorsclassName="w-6 h-6 t e xt-purple-400" />,
      title: 'SmartCutDetection',
      description: 'AIautomaticallyidentifiesthebestmomentsandcreatesseamlesscutsandtransitions'
    },
    {
      icon: <PlayclassName="w-6 h-6 t e xt-yellow-400" />,
      title: 'Auto-GeneratedContent',
      description: 'Createengagingvideosfromtext, images, andaudiowithAI-generatedanimationsandeffects'
    },
    {
      icon: <TrendingUpclassName="w-6 h-6 t e xt-green-400" />,
      title: 'PerformanceAnalytics',
      description: 'Trackvideoperformance, engagementmetrics, andoptimizecontentforbetterresults'
    }
  ]

  consteditingFeatures = [
    {
      category: 'AIEditing',
      items: ['AutoSceneDetection', 'SmartCuts', 'ColorCorrection', 'AudioEnhancement', 'Stabilization', 'BackgroundRemoval']
    },
    {
      category: 'ContentCreation',
      items: ['TexttoVideo', 'ImageAnimation', 'VoiceSynthesis', 'MusicGeneration', 'TemplateLibrary', 'CustomBranding']
    },
    {
      category: 'Export & Sharing',
      items: ['MultipleFormats', 'SocialMediaOptimization', 'CloudStorage', 'DirectPublishing', 'CollaborationTools', 'VersionControl']
    },
    {
      category: 'Analytics',
      items: ['ViewMetrics', 'EngagementTracking', 'A/BTesting', 'PerformanceReports', 'AudienceInsights', 'ROIAnalysis']
    }
  ]

  constpricingPlans = [
    {
      name: 'Creator',
      price: '$29',
      period: '/month',
      description: 'Perfectforcontentcreatorsandinfluencers',
      features: [
        'Upto 10 hoursofvideo/month',
        'BasicAIfeatures',
        'Standardtemplates',
        'Emailsupport',
        'Basicanalytics',
        'Mobileappaccess'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$79',
      period: '/month',
      description: 'Idealforbusinessesandagencies',
      features: [
        'Upto 50 hoursofvideo/month',
        'AdvancedAIfeatures',
        'Customtemplates',
        'Prioritysupport',
        'Advancedanalytics',
        'Teamcollaboration',
        'APIaccess'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$199',
      period: '/month',
      description: 'Forlargeorganizations',
      features: [
        'Unlimitedvideoprocessing',
        'CustomAItraining',
        'White-labelsolution',
        'Dedicatedsupport',
        'Customintegrations',
        'Advancedanalytics',
        'SLAguarantee'
      ],
      popular: false
    }
  ]

  consttestimonials = [
    {
      name: 'AlexRodriguez',
      company: 'YouTubeCreator',
      content: 'AIVideoEditorcutmyeditingtimeby 70%. Theauto-generatedcontentisincrediblyengaging.',
      rating: 5
    },
    {
      name: 'SarahKim',
      company: 'MarketingAgency',
      content: 'Creatingprofessionalvideosforclientsisnoweffortless. TheAIqualityisoutstanding.',
      rating: 5
    },
    {
      name: 'MikeJohnson',
      company: 'E-learningPlatform',
      content: 'Theanalyticshelpusunderstandwhatcontentperformsbest. Ourengagementincreasedby 150%.',
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
        <metaproperty="og:url" content="https://ziontechgroup.com/ai-video-editor" / / />
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
