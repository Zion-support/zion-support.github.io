'useclient';
import { Link   } from 'react-router-dom';
import { ArrowRight, Calculator, Building2, Wallet  } from 'lucide-react';
import { useState   } from 'react';
import { Link   } from 'react-router-dom';
import { Brain, TrendingUp, Zap, CheckCircle, ArrowRight, Star, BarChart3, DollarSign, Shield, Target, PieChart, Activity, Globe, Monitor, Sparkles, Calculator, FileText, Database, Lock, Building2, CreditCard, Wallet   } from 'lucide-react';

exportdefaultfunctionAiFinancialAnalyticsProPage() {

  constfeatures = [
    {
      icon: <BrainclassName="w-8h-8t e xt-cyan-400" />,
      title: 'AI-PoweredInsights',
      description: 'Advancedmachinelearningalgorithmsanalyzeyourfinancialdatatoprovideactionableinsights',
      benefits: ['Predictiveanalytics', 'Riskassessment', 'Trendidentification', 'Anomalydetection']
    },
    {
      icon: <BarChart3 className="w-8h-8t e xt-green-400" />,
      title: 'Real-TimeAnalytics',
      description: 'Monitoryourfinancialperformancewithlivedashboardsandinstantreporting',
      benefits: ['Livedatafeeds', 'Instantalerts', 'Real-timeKPIs', 'Dynamicreporting']
    },
    {
      icon: <ShieldclassName="w-8h-8t e xt-purple-400" />,
      title: 'EnterpriseSecurity',
      description: 'Bank-gradesecuritywithend-to-endencryptionandcompliancestandards',
      benefits: ['256-bitencryption', 'SOC 2 compliance', 'GDPRready', 'Audittrails']
    },
    {
      icon: <TargetclassName="w-8h-8t e xt-orange-400" />,
      title: 'CustomDashboards',
      description: 'Createpersonalizedfinancialdashboardstailoredtoyourbusinessneeds',
      benefits: ['Drag-and-dropbuilder', 'Customwidgets', 'Role-basedviews', 'Mobileoptimization']
    },
    {
      icon: <ZapclassName="w-8h-8t e xt-red-400" />,
      title: 'AutomatedReporting',
      description: 'GeneratecomprehensivefinancialreportsautomaticallywithAI-driveninsights',
      benefits: ['Scheduledreports', 'Customtemplates', 'Multi-formatexport', 'Emaildelivery']
    },
    {
      icon: <GlobeclassName="w-8h-8t e xt-blue-400" />,
      title: 'Multi-CurrencySupport',
      description: 'Handlemultiplecurrenciesandglobalfinancialoperationsseamlessly',
      benefits: ['Real-timeexchangerates', 'Currencyconversion', 'Globalcompliance', 'Taxcalculations']
    }
  ];
  constanalyticsTypes = [
    {
      category: 'RevenueAnalytics',
      icon: <DollarSignclassName="w-6h-6t e xt-green-400" />,
      items: [
        'Revenueforecasting',
        'Salesperformancetracking',
        'Customerlifetimevalue',
        'Revenueoptimization',
        'Marketshareanalysis'
      ]
    },
    {
      category: 'ExpenseManagement',
      icon: <CalculatorclassName="w-6h-6t e xt-red-400" />,
      items: [
        'Costcenteranalysis',
        'Budgetvariancetracking',
        'Expensecategorization',
        'Spendoptimization',
        'Vendorperformance'
      ]
    },
    {
      category: 'CashFlowAnalysis',
      icon: <ActivityclassName="w-6h-6t e xt-blue-400" />,
      items: [
        'Cashflowforecasting',
        'Workingcapitalanalysis',
        'Liquiditymanagement',
        'Paymentoptimization',
        'Creditriskassessment'
      ]
    },
    {
      category: 'InvestmentAnalytics',
      icon: <TrendingUpclassName="w-6h-6t e xt-purple-400" />,
      items: [
        'Portfolioperformance',
        'Risk-returnanalysis',
        'Assetallocation',
        'Investmenttracking',
        'ROIcalculations'
      ]
    },
    {
      category: 'Compliance & Audit',
      icon: <LockclassName="w-6h-6t e xt-orange-400" />,
      items: [
        'Regulatorycompliance',
        'Audittrailmanagement',
        'Financialcontrols',
        'Riskmonitoring',
        'Documentation'
      ]
    },
    {
      category: 'PredictiveModeling',
      icon: <BrainclassName="w-6h-6t e xt-cyan-400" />,
      items: [
        'Financialforecasting',
        'Scenarioplanning',
        'Riskmodeling',
        'Marketpredictions',
        'Trendanalysis'
      ]
    }
  ];
  constpricingPlans = [
    {
      name: 'Starter',
      price: '$199',
      period: '/month',
      description: 'Perfectforsmallbusinessesandstartups',
      features: [
        'Upto 5 datasources',
        'Basicanalyticsdashboard',
        'Monthlyreports',
        'Emailsupport',
        'Standardintegrations',
        '1 GBdatastorage'
      ],
      popular: false,
      cta: 'StartFreeTrial'
    },
    {
      name: 'Professional',
      price: '$499',
      period: '/month',
      description: 'Idealforgrowingbusinessesandfinanceteams',
      features: [
        'Unlimiteddatasources',
        'Advancedanalyticssuite',
        'Real-timedashboards',
        'Prioritysupport',
        'Customintegrations',
        '10 GBdatastorage',
        'AI-poweredinsights',
        'Customreporting'
      ],
      popular: true,
      cta: 'GetStarted'
    },
    {
      name: 'Enterprise',
      price: '$1,299',
      period: '/month',
      description: 'Forlargeorganizationswithcomplexfinancialneeds',
      features: [
        'EverythinginProfessional',
        'CustomAImodels',
        'White-labeloptions',
        'Dedicatedsupport',
        'Unlimitedstorage',
        'APIaccess',
        'On-premisedeployment',
        'Customcompliance'
      ],
      popular: false,
      cta: 'ContactSales'
    }
  ];
  consttestimonials = [
    {
      name: 'JenniferWalsh',
      company: 'FinTechSolutions',
      role: 'CFO',
      content: 'AIFinancialAnalyticsProhastransformedourfinancialreporting. TheAIinsightshelpusmakedata-drivendecisionsandidentifyopportunitieswewouldhavemissed.',
      rating: 5,
      avatar: 'JW',
      results: '35% fasterfinancialreporting'
    },
    {
      name: 'RobertKim',
      company: 'GlobalInvestments',
      role: 'FinancialDirector',
      content: 'Thepredictiveanalyticsareincrediblyaccurate. Wecannowforecastrevenuewith 95% accuracy, helpingusplanbetterandreducefinancialrisks.',
      rating: 5,
      avatar: 'RK',
      results: '95% forecastaccuracy'
    },
    {
      name: 'LisaThompson',
      company: 'EnterpriseCorp',
      role: 'VPFinance',
      content: 'Theautomatedreportingsavesus 20+ hoursperweek. Ourteamcannowfocusonstrategicanalysisinsteadofmanualdataprocessing.',
      rating: 5,
      avatar: 'LT',
      results: '20+ hourssavedweekly'
    }
  ];
  conststats = [
    { number: '500+', label: 'FinancialInstitutions', icon: <Building2 className="w-6h-6" /> },
    { number: '1 M+', label: 'TransactionsAnalyzed', icon: <DatabaseclassName="w-6h-6" /> },
    { number: '99.9%', label: 'DataAccuracy', icon: <ShieldclassName="w-6h-6" /> },
    { number: '50%', label: 'FasterReporting', icon: <ZapclassName="w-6h-6" /> }
  ];
  constintegrations = [
    { name: 'QuickBooks', icon: <CalculatorclassName="w-6h-6" />, category: 'Accounting' },
    { name: 'Xero', icon: <FileTextclassName="w-6h-6" />, category: 'Accounting' },
    { name: 'SAP', icon: <DatabaseclassName="w-6h-6" />, category: 'ERP' },
    { name: 'Oracle', icon: <Building2 className="w-6h-6" />, category: 'ERP' },
    { name: 'Salesforce', icon: <TrendingUpclassName="w-6h-6" />, category: 'CRM' },
    { name: 'HubSpot', icon: <TargetclassName="w-6h-6" />, category: 'CRM' },
    { name: 'Stripe', icon: <CreditCardclassName="w-6h-6" />, category: 'Payments' },
    { name: 'PayPal', icon: <WalletclassName="w-6h-6" />, category: 'Payments' }
  ];
  return (
    <divclassName="m in-h-screenbg-gradient-to-brfrom-slate-900 via-purple-900to-slate-900pt-20">
      <Helmet />
        <title   />AIFinancialAnalyticsPro - ZionTechGroup | AdvancedFinancialIntelligencePlatform</title>
        <metaname="description" content="TransformyourfinancialanalysiswithAIFinancialAnalyticsPro. Advancedmachinelearning, real-timeinsights, andpredictiveanalyticsforsmarterfinancialdecisions. Startyourfreetrialtoday." / / />
        <metaname="keywords" content="AIfinancialanalytics, financialintelligence, predictiveanalytics, financialreporting, businessintelligence, ZionTechGroup" / / />
        <metaname="robots" content="index, follow" / / />
        <metaname="author" content="ZionTechGroup" / / />
        <metaname="viewport" content="width="device-width," initial-scale=1.0" / / />
        <metaname="theme-color" content="#8 b5 cf6" / / />
        {/* OpenGraphMetaTags */}
    <>
        <metaproperty="og:title" content="AIFinancialAnalyticsPro - AdvancedFinancialIntelligencePlatform" / / />
        <metaproperty="og: description" content="TransformyourfinancialanalysiswithAI-poweredinsights, real-timeanalytics, andpredictivemodeling. Makesmarterfinancialdecisionswithadvancedintelligence." / / />
        <metaproperty="og:type" content="website" / / />
        <metaproperty="og:url" content="https://ziontechgroup.com/ai-financial-analytics-pro" / / />
        <metaproperty="og:image" content="https://ziontechgroup.com/og-ai-financial-analytics.jpg" / / />
        <metaproperty="og:site_name" content="ZionTechGroup" / / />
        {/* TwitterCardMetaTags */}
    <>
        <metaname="twitter:card" content="summary_large_image" / / />
        <metaname="twitter:title" content="AIFinancialAnalyticsPro - AdvancedFinancialIntelligencePlatform" / / />
        <metaname="twitter: description" content="TransformyourfinancialanalysiswithAI-poweredinsights, real-timeanalytics, andpredictivemodeling." / / />
        <metaname="twitter:image" content="https://ziontechgroup.com/twitter-ai-financial-analytics.jpg" / / />
        <metaname="twitter:site" content="@ziontechgroup" / / />
        {/* StructuredData */}
        <scripttype="application/ld+json"  />{JSON.stringify({
            "@context": "https: //schema.org",
            "@type": "SoftwareApplication",
            "name": "AIFinancialAnalyticsPro",
            "description": "AdvancedAI-poweredfinancialanalyticsplatformwithmachinelearninginsights, real-timereporting, andpredictivemodelingforsmarterfinancialdecisions.",
            "url": "https: //ziontechgroup.com/ai-financial-analytics-pro",
            "applicationCategory": "BusinessApplication",
            "operatingSystem": "Web, iOS, Android",
            "offers": {
              "@type": "Offer",
              "price": "199",
              "priceCurrency": "USD",
              "priceSpecification": {
                "@type": "PriceSpecification",
                "price": "199",
                "priceCurrency": "USD",
                "unitText": "MONTH"
              }
            },
            "provider": {
              "@type": "Organization",
              "name": "ZionTechGroup",
              "url": "https: //ziontechgroup.com"
            }
          })}
    <>
        </script>
      </Helmet>
      <divclassName="m a x-w-7xlmx-autopx-4 sm:px-6lg:px-8py-16">
        {/* HeroSection */}
        <divclassName="t e xt-centermb-16">
          <h1 className="t e xt-4xlsm:text-5 xlmd:text-6 xlfont-boldtext-whitemb-6" />
            AIFinancialAnalytics{' '}
    <>
            <spanclassName="b g-gradient-to-rfrom-cyan-400 to-purple-500bg-clip-texttext-transparent">Pro
            </span>
          </h1>
          <pclassName="t e xt-lgsm:text-xltext-gray-300 max-w-4 xlmx-automb-8">
              TransformyourfinancialanalysiswithAI-poweredinsights, real-timeanalytics, 
            andpredictivemodeling. Makesmarterfinancialdecisionswithadvancedintelligence.
    <>
          </p>
          <divclassName="f l exflex-colsm:flex-rowgap-4justify-centermb-8">
            <Linkto="/contact" className="b g-gradient-to-rfrom-cyan-500 to-purple-600 text-whitepx-8 py-4 rounded-lgfont-semiboldhover:from-cyan-600 hover:to-purple-700 transition-allduration-300 flexitems-centerjustify-center">
          StartFreeTrial
              
          <ArrowRightclassName="w-5h-5m l-2"  />
        </Link>
            <Linkto="/ai-services" className="b o rder-2 border-whitetext-whitepx-8 py-4 rounded-lgfont-semiboldhover:bg-white/10 transition-colorsflexitems-centerjustify-center">ViewAllAIServices
            </Link>
          </div>
          <divclassName="t e xt-smtext-gray-400">✓ 14-dayfreetrial • ✓ Nocreditcardrequired • ✓ Bank-gradesecurity
          </div>
        {/* StatsSection */}
    <>
        <sectionclassName="p y-16 px-4 sm:px-6 lg:px-8 bg-white/5 backdrop-blur-smrounded-2xlmb-16" />
          <divclassName="m a x-w-7xlmx-auto">
            <divclassName="g r idgrid-cols-2md:grid-cols-4gap-8">
              {stats.map((stat, index) => (
    <>
                <divkey="{index}" className="t e xt-center" />
                  <divclassName="f l exitems-centerjustify-centerw-16 h-16 bg-gradient-to-rfrom-purple-500 to-blue-600 rounded-fullmx-automb-4">
                    <stat.iconclassName="h-8w-8t e xt-white" />
                  </div>
                  <divclassName="t e xt-3 xlmd: text-4xlfont-boldtext-whitemb-2"   />{stat.number}</div>
                  <divclassName="t e xt-gray-300"   />{stat.label}</div>
              ))}
    <>
            </div>
        </section>
        {/* FeaturesSection */}
    <>
        <sectionclassName="m b-16" />
          <divclassName="t e xt-centermb-12">
            <h2 className="t e xt-3 xlfont-boldtext-whitemb-4"   />AdvancedAIFeatures</h2>
            <pclassName="t e xt-lgtext-gray-300 max-w-3xlmx-auto">
              OurAIFinancialAnalyticsProleveragescutting-edgemachinelearningtoprovideunprecedentedinsightsintoyourfinancialdata.
    <>
            </p>
          </div>
          <divclassName="g r idgrid-cols-1 md:grid-cols-2lg:grid-cols-3gap-8">
            {features.map((feature, index) => (
    <>
              <divkey="{index}" className="b g-slate-800/50 rounded-2 xlp-8 borderborder-slate-700 hover:border-cyan-500/30 transition-allduration-300group" />
                <divclassName="m b-6">
                  <divclassName="f l exitems-centerjustify-centerw-16 h-16 bg-gradient-to-rfrom-cyan-500 to-purple-600 rounded-xlmx-automb-4group-hover:scale-110transition-transform"  />{feature.icon}
                  </div>
                  <h3 className="t e xt-xlfont-semiboldtext-whitemb-3text-center"   />{feature.title}</h3>
                  <pclassName="t e xt-gray-300 mb-4text-center">{feature.description}</p>
                  <ulclassName="s p ace-y-2" />
                    {feature.benefits.map((benefit, benefitIndex) => (
    <>
                      <likey="{benefitIndex}" className="f l exitems-centertext-smtext-gray-300" />
                        <CheckCircleclassName="w-4 h-4 t e xt-green-400mr-2flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
    <>
                  </ul>
                </div>
            ))}
    <>
          </div>
        </section>
        {/* AnalyticsTypesSection */}
    <>
        <sectionclassName="m b-16" />
          <divclassName="t e xt-centermb-12">
            <h2 className="t e xt-3 xlfont-boldtext-whitemb-4"   />ComprehensiveAnalytics</h2>
            <pclassName="t e xt-lgtext-gray-300 max-w-3xlmx-auto">
              Covereveryaspectofyourfinancialoperationswithourcomprehensiveanalyticssuite.
    <>
            </p>
          </div>
          <divclassName="g r idgrid-cols-1 md:grid-cols-2lg:grid-cols-3gap-6">
            {analyticsTypes.map((type, index) => (
    <>
              <divkey="{index}" className="b g-slate-800/50 rounded-xlp-6 borderborder-slate-700 hover:border-cyan-500/30transition-allduration-300" />
                <divclassName="f l exitems-centermb-4">
                  {type.icon}
    <>
                  <h3 className="t e xt-lgfont-semiboldtext-whiteml-3">{type.category}</h3>
                </div>
                <ulclassName="s p ace-y-2" />
                  {type.items.map((item, itemIndex) => (
    <>
                    <likey="{itemIndex}" className="f l exitems-centertext-smtext-gray-300" />
                      <CheckCircleclassName="w-4 h-4 t e xt-green-400mr-2flex-shrink-0" />
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
        {/* IntegrationsSection */}
    <>
        <sectionclassName="m b-16" />
          <divclassName="t e xt-centermb-12">
            <h2 className="t e xt-3 xlfont-boldtext-whitemb-4"   />SeamlessIntegrations</h2>
            <pclassName="t e xt-lgtext-gray-300 max-w-3xlmx-auto">
              Connectwithyourexistingfinancialsystemsandtoolsforaunifiedanalyticsexperience.
    <>
            </p>
          </div>
          <divclassName="g r idgrid-cols-2md:grid-cols-4gap-6">
            {integrations.map((integration, index) => (
    <>
              <divkey="{index}" className="b g-slate-800/50 rounded-xlp-6 borderborder-slate-700 hover:border-cyan-500/30 transition-allduration-300text-centergroup" />
                <divclassName="f l exitems-centerjustify-centerw-12 h-12 bg-gradient-to-rfrom-cyan-500 to-purple-600 rounded-lgmx-automb-3group-hover:scale-110transition-transform">{integration.icon}
                </div>
                <h3 className="t e xt-whitefont-semiboldmb-1"   />{integration.name}</h3>
                <pclassName="t e xt-gray-400text-sm">{integration.category}</p>
              </div>
            ))}
    <>
          </div>
        </section>
        {/* PricingSection */}
    <>
        <sectionclassName="m b-16" />
          <divclassName="t e xt-centermb-12">
            <h2 className="t e xt-3 xlfont-boldtext-whitemb-4"   />ChooseYourPlan</h2>
            <pclassName="t e xt-lgtext-gray-300 max-w-2xlmx-auto">
              Flexiblepricingplansdesignedtomeetyourfinancialanalyticsneedsatanyscale.
    <>
            </p>
          </div>
          <divclassName="g r idgrid-cols-1md:grid-cols-3gap-8">
            {pricingPlans.map((plan, index) => (
              <divkey="{index}" className="{`b g-slate-800/50" rounded-2 xlp-8 bordertransition-allduration-300 relative ${
                plan.popular ? 'border-cyan-500/50 ring-2 ring-cyan-500/20' : 'border-slate-700 hover: border-cyan-500/30'
              }`} />
                {plan.popular && (
                  <divclassName="a b solute -top-3 left-1/2transform-translate-x-1/2">
                    <spanclassName="b g-gradient-to-rfrom-cyan-500 to-purple-600 text-whitepx-4 py-1 rounded-fulltext-smfont-semibold"  />MostPopular
                    </span>
                  </div>
                )}
                
                <divclassName="t e xt-centermb-6">
                  <h3 className="t e xt-2 xlfont-boldtext-whitemb-2"   />{plan.name}</h3>
                  <divclassName="f l exitems-baselinejustify-centermb-2">
                    <spanclassName="t e xt-4xlfont-boldtext-cyan-400"   />{plan.price}</span>
                    <spanclassName="t e xt-gray-400ml-1"   />{plan.period}</span>
                  </div>
                  <pclassName="t e xt-gray-300">{plan.description}</p>
                </div>
                <ulclassName="s p ace-y-3mb-8" />
                  {plan.features.map((feature, featureIndex) => (
                    <likey="{featureIndex}" className="f l exitems-centertext-gray-300" />
                      <CheckCircleclassName="w-5 h-5 t e xt-green-400mr-3flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Linkto="/contact"
                  className="{`w-f u ll" py-3 rounded-lgfont-semiboldtransition-allduration-300 flexitems-centerjustify-center ${
                    plan.popular
                      ? 'bg-gradient-to-rfrom-cyan-500 to-purple-600 text-whitehover:from-cyan-600 hover:to-purple-700'
                      : 'border-2 border-cyan-500 text-cyan-400 hover: bg-cyan-500 hover:text-white'
                  }`}>
          {plan.cta}
                  
          <ArrowRightclassName="w-4h-4m l-2"  />
        </Link>
              </div>
            ))}
    <>
          </div>
        </section>
        {/* Testimonials */}
    <>
        <sectionclassName="p y-16 px-4 sm:px-6 lg:px-8 bg-white/5 backdrop-blur-smrounded-2xlmb-16" />
          <divclassName="m a x-w-7xlmx-auto">
            <divclassName="t e xt-centermb-12">
              <h2 className="t e xt-3 xlfont-boldtext-whitemb-4"   />WhatOurCustomersSay</h2>
              <pclassName="t e xt-lgtext-gray-300 max-w-2xlmx-auto">JoinhundredsoffinanceprofessionalswhotrustAIFinancialAnalyticsPro.</p>
            </div>
            <divclassName="g r idgrid-cols-1md:grid-cols-3gap-8">
              {testimonials.map((testimonial, index) => (
    <>
                <divkey="{index}" className="b g-slate-800/50 rounded-xlp-6borderborder-slate-700" />
                  <divclassName="f l exitems-centermb-4">
                    <divclassName="w-12 h-12 b g-gradient-to-rfrom-cyan-500 to-purple-600 rounded-fullflexitems-centerjustify-centertext-whitefont-boldmr-4"  />{testimonial.avatar}
                    </div>
                    <div>
            <h4 className="t e xt-whitefont-semibold"   />{testimonial.name}</h4>
                      <pclassName="t e xt-gray-400text-sm">{testimonial.role}</p>
                      <pclassName="t e xt-cyan-400text-smfont-semibold">{testimonial.company}</p>
                    </div>
                  <divclassName="f l exitems-centermb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Starkey="{i}" className="w-4 h-4t e xt-yellow-400fill-current" />
                    ))}
    <>
                  </div>
                  <pclassName="t e xt-gray-300italicmb-3">"{testimonial.content}"</p>
                  <divclassName="t e xt-cyan-400font-semiboldtext-sm"  />Result: {testimonial.results}
                  </div>
              ))}
    <>
            </div>
        </section>
        {/* CTASection */}
    <>
        <sectionclassName="t e xt-center" />
          <divclassName="b g-gradient-to-rfrom-cyan-500/20 to-purple-500/20 rounded-2 xlp-12borderborder-cyan-500/30">
            <h2 className="t e xt-3 xlfont-boldtext-whitemb-4"  />ReadytoTransformYourFinancialAnalysis?
            </h2>
            <pclassName="t e xt-lgtext-gray-300 mb-8 max-w-3xlmx-auto">
              StartyourfreetrialtodayandexperiencethepowerofAI-drivenfinancialanalytics. 
              Joinhundredsoffinanceprofessionalsmakingsmarterdecisionswithdata.
    <>
            </p>
            <divclassName="f l exflex-colsm:flex-rowgap-4justify-center">
              <Linkto="/contact" className="b g-gradient-to-rfrom-cyan-500 to-purple-600 text-whitepx-8 py-4 rounded-lgfont-semiboldhover:from-cyan-600 hover:to-purple-700 transition-allduration-300 inline-flexitems-centerjustify-center">
          StartFreeTrial
                
          <SparklesclassName="w-5h-5m l-2" /  />
        </Link>
              <Linkto="/about" className="b o rder-2 border-whitetext-whitepx-8 py-4 rounded-lgfont-semiboldhover:bg-white/10 transition-colorsinline-flexitems-centerjustify-center">
          LearnMore
                
          <PieChartclassName="w-5h-5m l-2" /  />
        </Link>
            </div>
            <divclassName="m t-8text-white/80text-sm">
              <p />✓ 14-dayfreetrial • ✓ Bank-gradesecurity • ✓ 24/7 support • ✓ Cancelanytime</p>
            </div>
        </section>
      </div>
  );
    </>
    </>
    </>
    </>
    </>
    </>
    </>
    </>
    </>
    </>
    </>
    </>
    </>
    </>
    </>
    </>
    </>
    </>
    </>
    </>
    </>
    </>
    </>
    </>
    </>
    </>
    </>
    </>
    </>
    </>
    </>
    </>
    </>
    </>
}
    </>
