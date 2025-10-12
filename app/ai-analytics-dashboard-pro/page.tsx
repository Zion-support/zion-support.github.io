import React from 'react'
import { Link    } from 'react-router-dom'
importLayoutfrom '../layout'
import React from 'react';
import { Link    } from 'react-router-dom';
import { ArrowRight    } from 'lucide-react';
importLayoutfrom '../layout';

exportdefaultfunctionAIAnalyticsDashboardPro() {
  constfeatures = [
    {
      icon: <BrainclassName="w-6h-6t e xt-cyan-400" />,
      title: 'AI-PoweredInsights',
      description: 'Advancedmachinelearningalgorithmsprovideactionablebusinessinsights'
    },
    {
      icon: <BarChart3 className="w-6h-6t e xt-purple-400" />,
      title: 'Real-timeAnalytics',
      description: 'Livedatavisualizationwithinstantupdatesandinteractivedashboards'
    },
    {
      icon: <TargetclassName="w-6h-6t e xt-yellow-400" />,
      title: 'PredictiveAnalytics',
      description: 'Forecasttrendsandmakedata-drivendecisionswithconfidence'
    },
    {
      icon: <GlobeclassName="w-6h-6t e xt-green-400" />,
      title: 'Multi-PlatformIntegration',
      description: 'Connectallyourdatasourcesinoneunifieddashboard'
    }
  ]

  constdashboardFeatures = [
    {
      category: 'DataSources',
      items: ['GoogleAnalytics', 'FacebookAds', 'SalesforceCRM', 'Shopify', 'Stripe', 'CustomAPIs']
    },
    {
      category: 'Visualizations',
      items: ['InteractiveCharts', 'HeatMaps', 'FunnelAnalysis', 'CohortAnalysis', 'CustomReports', 'Real-timeAlerts']
    },
    {
      category: 'AIFeatures',
      items: ['AnomalyDetection', 'TrendPrediction', 'CustomerSegmentation', 'ChurnAnalysis', 'ROIOptimization', 'SmartAlerts']
    },
    {
      category: 'Collaboration',
      items: ['TeamDashboards', 'CustomPermissions', 'ScheduledReports', 'ExportOptions', 'APIAccess', 'White-label']
    }
  ]

  constpricingPlans = [
    {
      name: 'Starter',
      price: '$49',
      period: '/month',
      description: 'Perfectforsmallbusinesses',
      features: [
        'Upto 5 datasources',
        'BasicAIinsights',
        'Standardvisualizations',
        'Emailsupport',
        'Monthlyreports'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$149',
      period: '/month',
      description: 'Idealforgrowingbusinesses',
      features: [
        'Upto 20 datasources',
        'AdvancedAIanalytics',
        'Customdashboards',
        'Prioritysupport',
        'Real-timealerts',
        'APIaccess'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$399',
      period: '/month',
      description: 'Forlargeorganizations',
      features: [
        'Unlimiteddatasources',
        'CustomAImodels',
        'White-labelsolution',
        'Dedicatedsupport',
        'Customintegrations',
        'SLAguarantee'
      ],
      popular: false
    }
  ]

  consttestimonials = [
    {
      name: 'AlexThompson',
      company: 'E-commercePlus',
      content: 'AIAnalyticsDashboardProtransformedourdecision-makingprocess. ROIincreasedby 60% injust 3 months.',
      rating: 5
    },
    {
      name: 'SarahKim',
      company: 'MarketingAgencyPro',
      content: 'Thepredictiveanalyticshelpedusoptimizecampaignsbeforeproblemsoccurred. Game-changerforourclients.',
      rating: 5
    },
    {
      name: 'MichaelDavis',
      company: 'SaaSStartup',
      content: 'Real-timeinsightsandAIrecommendationssaveduscountlesshoursofmanualanalysis. Highlyrecommended.',
      rating: 5
    }
  ]

  return (
    <Layouttitle="AIAnalyticsDashboardPro - AdvancedBusinessIntelligence | ZionTechGroup"
      description="TransformyourdataintoactionableinsightswithAI-poweredanalyticsdashboard. Real-timevisualization, predictiveanalytics, andcustomreporting. Startyourfreetrialtoday."
      keywords="AIanalytics, businessintelligence, datavisualization, predictiveanalytics, dashboard, reporting" />
      <divclassName="m in-h-screenbg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900">
        {/* HeroSection */}
    <>
        <sectionclassName="p t-20 pb-16 px-4sm:px-6lg:px-8" />
          <divclassName="m a x-w-7xlmx-auto">
            <divclassName="t e xt-center">
              <divclassName="i n line-flexitems-centerpx-4 py-2 bg-green-500/20 rounded-fulltext-green-400 text-smfont-mediummb-6">
                <BarChart3 className="w-4h-4m r-2" />
                AdvancedAnalytics
    <>
              </div>
              <h1 className="t e xt-4xlsm:text-5 xlmd:text-6 xlfont-boldtext-whitemb-6"  />AIAnalyticsDashboardPro</h1>
              <pclassName="t e xt-lgsm:text-xltext-gray-300 max-w-3 xlmx-automb-8">
              TransformyourdataintopowerfulinsightswithourAI-poweredanalyticsplatform. 
                Real-timevisualization, predictiveanalytics, andintelligentrecommendations.
    <>
              </p>
              <divclassName="f l exflex-colsm:flex-rowgap-4justify-center">
                <Linkto="/contact" className="b g-gradient-to-rfrom-green-500 to-purple-600 text-whitepx-8 py-4 rounded-lgfont-semiboldhover:from-green-600 hover:to-purple-700 transition-allduration-300 flexitems-centerjustify-center">
          StartFreeTrial
                  
          <ArrowRightclassName="w-5h-5m l-2"  />
        </Link>
                <Linkto="#demo" className="b o rder-2 border-whitetext-whitepx-8 py-4 rounded-lgfont-semiboldhover:bg-white/10transition-colors">ViewDemo
                </Link>
              </div>
          </div>
        </section>
        {/* FeaturesSection */}
    <>
        <sectionclassName="p y-16 px-4sm:px-6lg:px-8" />
          <divclassName="m a x-w-7xlmx-auto">
            <divclassName="t e xt-centermb-16">
              <h2 className="t e xt-3 xlsm:text-4xlfont-boldtext-whitemb-4"  />PowerfulAnalyticsFeatures
              </h2>
              <pclassName="t e xt-lgtext-gray-300 max-w-2xlmx-auto">Everythingyouneedtomakedata-drivendecisions</p>
            </div>
            <divclassName="g r idgrid-cols-1 md:grid-cols-2lg:grid-cols-4gap-8">
              {features.map((feature, index) => (
    <>
                <divkey="{index}" className="b g-gradient-to-brfrom-slate-800/50 to-purple-900/30 rounded-xlp-6 borderborder-green-500/20 hover:border-green-400/40transition-allduration-300" />
                  <divclassName="f l exitems-centermb-4">
                    {feature.icon}
    <>
                    <h3 className="t e xt-xlfont-semiboldtext-whiteml-3">{feature.title}</h3>
                  </div>
                  <pclassName="t e xt-gray-300">{feature.description}</p>
                </div>
              ))}
    <>
            </div>
        </section>
        {/* DashboardFeatures */}
    <>
        <sectionclassName="p y-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-rfrom-slate-800/30to-purple-900/30" />
          <divclassName="m a x-w-7xlmx-auto">
            <divclassName="t e xt-centermb-16">
              <h2 className="t e xt-3 xlsm:text-4xlfont-boldtext-whitemb-4"  />ComprehensiveDashboardCapabilities
              </h2>
              <pclassName="t e xt-lgtext-gray-300 max-w-2xlmx-auto">Connect, analyze, andvisualizeallyourdatainoneplace</p>
            </div>
            <divclassName="g r idgrid-cols-1 md:grid-cols-2lg:grid-cols-4gap-8">
              {dashboardFeatures.map((feature, index) => (
    <>
                <divkey="{index}" className="b g-slate-800/50 rounded-xlp-6borderborder-slate-700" />
                  <h3 className="t e xt-xlfont-semiboldtext-whitemb-4"   />{feature.category}</h3>
                  <ulclassName="s p ace-y-2" />
                    {feature.items.map((item, itemIndex) => (
                      <likey="{itemIndex}" className="f l exitems-centertext-gray-300" />
                        <CheckCircleclassName="w-4 h-4t e xt-green-400mr-2" />
                        {item}
                      </li>
                    ))}
    <>
                  </ul>
                </div>
              ))}
    <>
            </div>
        </section>
        {/* PricingSection */}
    <>
        <sectionclassName="p y-16 px-4sm:px-6lg:px-8" />
          <divclassName="m a x-w-7xlmx-auto">
            <divclassName="t e xt-centermb-16">
              <h2 className="t e xt-3 xlsm:text-4xlfont-boldtext-whitemb-4"  />FlexiblePricingPlans
              </h2>
              <pclassName="t e xt-lgtext-gray-300 max-w-2xlmx-auto">Choosetheplanthatfitsyouranalyticsneeds</p>
            </div>
            <divclassName="g r idgrid-cols-1md:grid-cols-3gap-8">
              {pricingPlans.map((plan, index) => (
                <divkey="{index}" className="{`b g-gradient-to-br" from-slate-800/50 to-purple-900/30 rounded-xlp-8 bordertransition-allduration-300 ${
                  plan.popular 
                    ? 'border-green-400/40 scale-105 shadow-2 xlshadow-green-500/20' 
                    : 'border-green-500/20 hover: border-green-400/40'
                }`} />
                  {plan.popular && (
                    <divclassName="i n line-flexitems-centerpx-3 py-1 bg-green-500/20 rounded-fulltext-green-400 text-smfont-mediummb-4">
                      <StarclassName="w-4h-4m r-1" />
                      MostPopular
                    </div>
                  )}
                  <h3 className="t e xt-2 xlfont-boldtext-whitemb-2"   />{plan.name}</h3>
                  <pclassName="t e xt-gray-300 mb-6">{plan.description}</p>
                  <divclassName="m b-6">
                    <spanclassName="t e xt-4xlfont-boldtext-white"   />{plan.price}</span>
                    <spanclassName="t e xt-gray-400"   />{plan.period}</span>
                  </div>
                  <ulclassName="s p ace-y-3mb-8" />
                    {plan.features.map((feature, featureIndex) => (
                      <likey="{featureIndex}" className="f l exitems-centertext-gray-300" />
                        <CheckCircleclassName="w-5 h-5t e xt-green-400mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Linkto="/contact"
                    className="{`w-f u ll" blocktext-centerpy-3 px-6 rounded-lgfont-semiboldtransition-allduration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-rfrom-green-500 to-purple-600 text-whitehover:from-green-600 hover:to-purple-700'
                        : 'border-2 border-green-400 text-green-400 hover: bg-green-400/10'
                    }`}
                    />GetStarted
    <>
                  </Link>
                </div>
              ))}
    <>
            </div>
        </section>
        {/* Testimonials */}
    <>
        <sectionclassName="p y-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-rfrom-slate-800/30to-purple-900/30" />
          <divclassName="m a x-w-7xlmx-auto">
            <divclassName="t e xt-centermb-12">
              <h2 className="t e xt-3 xlfont-boldtext-whitemb-4"  />TrustedbyData-DrivenCompanies
              </h2>
              <pclassName="t e xt-gray-300">Seehowouranalyticsplatformtransformsbusinessdecisions</p>
            </div>
            <divclassName="g r idgrid-cols-1md:grid-cols-3gap-8">
              {testimonials.map((testimonial, index) => (
    <>
                <divkey="{index}" className="b g-slate-800/50 rounded-xlp-6borderborder-slate-700" />
                  <divclassName="f l exitems-centermb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Starkey="{i}" className="w-5 h-5t e xt-yellow-400fill-current" />
                    ))}
    <>
                  </div>
                  <pclassName="t e xt-gray-300 mb-4">"{testimonial.content}"</p>
                  <div />
                    <divclassName="f o nt-semiboldtext-white"   />{testimonial.name}</div>
                    <divclassName="t e xt-smtext-gray-400"   />{testimonial.company}</div>
                </div>
              ))}
    <>
            </div>
        </section>
        {/* CTASection */}
    <>
        <sectionclassName="p y-16 px-4sm:px-6lg:px-8" />
          <divclassName="m a x-w-4 xlmx-autotext-center">
            <divclassName="b g-gradient-to-rfrom-green-500/20 to-purple-500/20 rounded-2 xlp-8borderborder-green-500/30">
              <h2 className="t e xt-3 xlfont-boldtext-whitemb-4"  />StartMakingData-DrivenDecisionsToday
              </h2>
              <pclassName="t e xt-lgtext-gray-300 mb-8">JointhousandsofbusinessesusingAIAnalyticsDashboardProtounlocktheirdatapotential</p>
              <divclassName="f l exflex-colsm:flex-rowgap-4justify-center">
                <Linkto="/contact" className="b g-gradient-to-rfrom-green-500 to-purple-600 text-whitepx-8 py-4 rounded-lgfont-semiboldhover:from-green-600 hover:to-purple-700transition-allduration-300">StartYourFreeTrial
                </Link>
                <Linkto="/about" className="b o rder-2 border-whitetext-whitepx-8 py-4 rounded-lgfont-semiboldhover:bg-white/10transition-colors">LearnMore
                </Link>
              </div>
          </div>
        </section>
      </div>
    </Layout>
  )
};
    </>
