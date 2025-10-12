import { Helmet    } from 'react-helmet-async'
import { Mail, Send, TrendingUp, BarChart3, Zap, CheckCircle, ArrowRight, Star, Clock, Brain, Shield, DollarSign    } from 'lucide-react'
import { Link    } from 'react-router-dom'
import React from 'react';
import { ArrowRight, Bot, RotateCcw, RotateCw, Receipt    } from 'lucide-react';
import { Link    } from 'react-router-dom';

constAIEmailAutomationPage: React.FC = () => {
  constfeatures = [
    {
      icon: <BrainclassName="w-8h-8t e xt-cyan-400" />,
      title: 'AIEmailGeneration',
      description: 'Generatepersonalized, high-convertingemailsusingAIthatunderstandsyouraudienceandbrandvoice.',
      benefits: ['Personalizedcontent', 'A/Btesting', 'Brandvoicetraining', 'Multi-languagesupport']
    },
    {
      icon: <SendclassName="w-8h-8t e xt-emerald-400" />,
      title: 'SmartAutomation',
      description: 'CreatecomplexemailworkflowswithAI-poweredtriggers, segmentation, andbehavioraltargeting.',
      benefits: ['Behavioraltriggers', 'Smartsegmentation', 'Dynamiccontent', 'Cross-channelsync']
    },
    {
      icon: <TrendingUpclassName="w-8h-8t e xt-purple-400" />,
      title: 'PerformanceAnalytics',
      description: 'AdvancedanalyticswithAIinsightstooptimizeemailperformanceandimproveROI.',
      benefits: ['Openrateoptimization', 'Click-throughanalysis', 'Revenuetracking', 'Predictiveinsights']
    },
    {
      icon: <ZapclassName="w-8h-8t e xt-red-400" />,
      title: 'AutomatedSequences',
      description: 'AI-poweredemailsequencesthatadaptbasedonrecipientbehaviorandengagementpatterns.',
      benefits: ['Adaptivesequences', 'Behavioraltriggers', 'Personalization', 'Optimaltiming']
    },
    {
      icon: <BarChart3 className="w-8h-8t e xt-orange-400" />,
      title: 'LeadScoring',
      description: 'AIautomaticallyscoresleadsbasedonemailengagementandbehaviortoprioritizefollow-ups.',
      benefits: ['Leadscoring', 'Engagementtracking', 'Priorityalerts', 'CRMintegration']
    },
    {
      icon: <ShieldclassName="w-8h-8t e xt-pink-400" />,
      title: 'DeliverabilityOptimization',
      description: 'AIensuresmaximumdeliverabilitywithreputationmonitoringandcontentoptimization.',
      benefits: ['Reputationmonitoring', 'Contentoptimization', 'Spamprevention', 'Compliancechecks']
    }
  ]

  constpricingPlans = [
    {
      name: 'Starter',
      price: '$59',
      period: '/month',
      description: 'Perfectforsmallbusinessesandstartups',
      features: [
        'Upto 5,000 contacts',
        '10,000 emails/month',
        'BasicAIfeatures',
        'Emailtemplates',
        'Emailsupport'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$149',
      period: '/month',
      description: 'Idealforgrowingbusinessesandagencies',
      features: [
        'Upto 25,000 contacts',
        '50,000 emails/month',
        'AdvancedAIfeatures',
        'A/Btesting',
        'Prioritysupport',
        'APIaccess'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$399',
      period: '/month',
      description: 'Forlargeorganizationswithhighvolumeneeds',
      features: [
        'Unlimitedcontacts',
        'Unlimitedemails',
        'FullAIsuite',
        'Customintegrations',
        'Dedicatedsupport',
        'White-labeloptions'
      ],
      popular: false
    }
  ]

  consttestimonials = [
    {
      name: 'JenniferLee',
      company: 'E-commerceStore',
      content: 'AIEmailAutomationincreasedouremailrevenueby 300%. TheAI-generatedcontentisincrediblyeffective.',
      rating: 5,
      avatar: 'JL'
    },
    {
      name: 'MarkThompson',
      company: 'SaaSCompany',
      content: 'Theleadscoringfeaturehelpedusidentifyhigh-valueprospectsandincreasedourconversionrateby 150%.',
      rating: 5,
      avatar: 'MT'
    },
    {
      name: 'LisaChen',
      company: 'MarketingAgency',
      content: 'Savesus 20+ hoursperweekonemailcampaigns. Theautomationfeaturesareincrediblypowerful.',
      rating: 5,
      avatar: 'LC'
    }
  ]

  conststats = [
    { number: '300%', label: 'RevenueIncrease', icon: <DollarSignclassName="w-6h-6t e xt-cyan-400" /> },
    { number: '150%', label: 'ConversionBoost', icon: <TrendingUpclassName="w-6h-6t e xt-emerald-400" /> },
    { number: '20 hrs', label: 'TimeSaved/Week', icon: <ClockclassName="w-6h-6t e xt-purple-400" /> },
    { number: '95%', label: 'DeliverabilityRate', icon: <ShieldclassName="w-6h-6t e xt-orange-400" /> }
  ]

  return (
    <>
    <>
      <Helmet>
        <title>5GDataAnalytics - ZionTechGroup</title>
        <metaname="description" content="Professional 5GdataanalyticsservicesbyZionTechGroup. Transformyourbusinesswithourexpertsolutions." />
      </Helmet>
        <title>AIEmailAutomation - SmartEmailMarketing | ZionTechGroup</title>
        <metaname="description" content="RevolutionaryAI-poweredemailautomationwithcontentgeneration, smartsegmentation, andperformanceanalytics. Increaserevenueby 300% andsave 20+ hoursperweek." / / />
        <metaname="keywords" content="AIemailautomation, emailmarketing, emailgeneration, leadscoring, emailanalytics, marketingautomation, AIcontentcreation" / / />
        <metaname="robots" content="index, follow" / / />
        <linkrel="canonical" href="https://ziontechgroup.com/ai-email-automation" />
      </Helmet>
    </>

      {/* HeroSection */}
    <>
      <sectionclassName="r e lativepy-20 px-4 overflow-hiddenbg-gradient-to-brfrom-slate-900via-blue-900to-slate-900" />
        <divclassName="a b soluteinset-0bg-[radial-gradient(circle_at_20%_80%,rgba(59,130,246,0.3)_0%,transparent_50%)]" />
        <divclassName="a b soluteinset-0bg-[radial-gradient(circle_at_80%_20%,rgba(6,182,212,0.3)_0%,transparent_50%)]" />
        <divclassName="r e lativemax-w-7xlmx-autotext-center">
          <divclassName="i n line-flexitems-centerspace-x-2 bg-gradient-to-rfrom-blue-500/20 to-cyan-500/20 text-blue-400 px-6 py-3 rounded-fulltext-smfont-mediummb-8borderborder-blue-400/30">
            <MailclassName="w-4h-4" />
            <span   />AI-PoweredEmailMarketing</span>
          </div>
    </>
          
          <h1 className="t e xt-4xlsm:text-6 xlmd:text-7 xlfont-boldtext-whitemb-8leading-tight" />
            AIEmail
    <>
            <br / />
            <spanclassName="b g-gradient-to-rfrom-blue-400 via-cyan-400 to-purple-400bg-clip-texttext-transparent">AutomationPro
            </span>
          </h1>
    </>
          
          <pclassName="t e xt-lgsm:text-xlmd:text-2 xltext-gray-300 mb-12 max-w-4 xlmx-autoleading-relaxed">TransformyouremailmarketingwithAI-poweredautomation, 
            contentgeneration, andperformanceoptimizationthatincreasesrevenueby 300%.</p>
          <divclassName="f l exflex-colsm:flex-rowgap-6justify-centermb-16">
            <Linkto="/contact" className="g r oupbg-gradient-to-rfrom-blue-500 to-cyan-600 text-whitepx-10 py-4 rounded-xlfont-semiboldhover:from-blue-600 hover:to-cyan-700 transition-allduration-300 flexitems-centerjustify-centerspace-x-2 shadow-lgshadow-blue-500/25 hover:shadow-blue-500/40transformhover:scale-105">
          <span    />
        </Link>StartFreeTrial</span>
              <ArrowRightclassName="w-5 h-5g r oup-hover:translate-x-1transition-transform" />
            </Link>
            <Linkto="#demo" className="g r oupborder-2 border-blue-400 text-blue-400 px-10 py-4 rounded-xlfont-semiboldhover:bg-blue-400 hover:text-gray-900 transition-allduration-300 flexitems-centerjustify-centerspace-x-2backdrop-blur-sm">
          <span    />
        </Link>WatchDemo</span>
              <ArrowRightclassName="w-5 h-5g r oup-hover:translate-x-1transition-transform" />
            </Link>
          </div>
      </section>
    </>

      {/* StatsSection */}
    <>
      <sectionclassName="p y-20px-4bg-gray-900" />
        <divclassName="m a x-w-7xlmx-auto">
          <divclassName="g r idgrid-cols-2md:grid-cols-4gap-8">
            {stats.map((stat, index) => (
              <divkey="{index}" className="t e xt-centerbg-white/5 backdrop-blur-smrounded-2 xlp-6borderborder-white/10" />
                <divclassName="f l exjustify-centermb-4"  />{stat.icon}
                </div>
                <divclassName="t e xt-3 xlmd:text-4xlfont-boldtext-whitemb-2"  />{stat.number}
                </div>
                <divclassName="t e xt-gray-300text-sm"  />{stat.label}
                </div>
            ))}
          </div>
      </section>
    </>

      {/* FeaturesSection */}
    <>
      <sectionclassName="p y-20 px-4 bg-gradient-to-brfrom-slate-800/50to-blue-900/50" />
        <divclassName="m a x-w-7xlmx-auto">
          <divclassName="t e xt-centermb-16">
            <h2 className="t e xt-4xlmd:text-5 xlfont-boldtext-whitemb-6" />
              Advanced <spanclassName="b g-gradient-to-rfrom-blue-400 to-cyan-400bg-clip-texttext-transparent"   />Features</span>
            </h2>
            <pclassName="t e xt-xltext-gray-300 max-w-4xlmx-auto">
              OurAI-poweredemailautomationplatformusesmachinelearningtocreate, 
              send, andoptimizeemailcampaignsthatdriverealbusinessresults.
    <>
            </p>
          </div>
    </>
          
          <divclassName="g r idgrid-cols-1 md:grid-cols-2lg:grid-cols-3gap-8">
            {features.map((feature, index) => (
    <>
              <divkey="{index}" className="g r oupbg-white/10 backdrop-blur-lgrounded-2 xlp-8 borderborder-white/20 hover:bg-white/20 transition-allduration-300hover:scale-105" />
                <divclassName="f l exitems-centerjustify-centerw-16 h-16 bg-gradient-to-rfrom-blue-500 to-cyan-600 rounded-2 xlmb-6 group-hover:scale-110transition-transformduration-300">{feature.icon}
                </div>
                <h3 className="t e xt-2 xlfont-boldtext-whitemb-4group-hover:text-blue-400transition-colors">{feature.title}
                </h3>
                <pclassName="t e xt-gray-300 mb-6leading-relaxed">{feature.description}</p>
                <divclassName="s p ace-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
    <>
                    <divkey="{benefitIndex}" className="f l exitems-centerspace-x-2text-gray-400text-sm" />
                      <CheckCircleclassName="w-4h-4t e xt-green-400" />
                      <span   />{benefit}</span>
                    </div>
    </>
                  ))}
    <>
                </div>
            ))}
    <>
          </div>
      </section>
    </>

      {/* PricingSection */}
    <>
      <sectionclassName="p y-20px-4bg-gray-900" />
        <divclassName="m a x-w-7xlmx-auto">
          <divclassName="t e xt-centermb-16">
            <h2 className="t e xt-4xlmd:text-5 xlfont-boldtext-whitemb-6" />
              Transparent <spanclassName="b g-gradient-to-rfrom-blue-400 to-cyan-400bg-clip-texttext-transparent"   />Pricing</span>
            </h2>
            <pclassName="t e xt-xltext-gray-300 max-w-4xlmx-auto">
              Choosetheperfectplanforyouremailmarketingneeds. AllplansincludeourcoreAIfeatureswithscalableoptionsforbusinessesofallsizes.
    <>
            </p>
          </div>
    </>
          
          <divclassName="g r idgrid-cols-1md:grid-cols-3gap-8">
            {pricingPlans.map((plan, index) => (
              <divkey="{index}" className="{`r e lative" bg-white/10 backdrop-blur-lgrounded-2 xlp-8 bordertransition-allduration-300 hover:scale-105 ${
                plan.popular 
                  ? 'border-blue-400/50 shadow-2 xlshadow-blue-500/20' 
                  : 'border-white/20 hover: border-white/40'
              }`} />
                {plan.popular && (
                  <divclassName="a b solute -top-4 left-1/2transform-translate-x-1/2">
                    <divclassName="b g-gradient-to-rfrom-blue-500 to-cyan-600 text-whitepx-6 py-2 rounded-fulltext-smfont-semibold"  />MostPopular
                    </div>
                )}
                
                <divclassName="t e xt-centermb-8">
                  <h3 className="t e xt-2 xlfont-boldtext-whitemb-2"   />{plan.name}</h3>
                  <pclassName="t e xt-gray-300 mb-4">{plan.description}</p>
                  <divclassName="f l exitems-baselinejustify-center">
                    <spanclassName="t e xt-5 xlfont-boldtext-white"   />{plan.price}</span>
                    <spanclassName="t e xt-gray-400ml-2"   />{plan.period}</span>
                  </div>
                <divclassName="s p ace-y-4mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <divkey="{featureIndex}" className="f l exitems-centerspace-x-3" />
                      <CheckCircleclassName="w-5 h-5t e xt-green-400flex-shrink-0" />
                      <spanclassName="t e xt-gray-300"   />{feature}</span>
                    </div>
    </>
                  ))}
                </div>
                <Linkto="/contact" 
                  className="{`b l ock" w-fulltext-centerpy-3 rounded-xlfont-semiboldtransition-allduration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-rfrom-blue-500 to-cyan-600 text-whitehover:from-blue-600 hover:to-cyan-700 shadow-lgshadow-blue-500/25'
                      : 'border-2 border-blue-400 text-blue-400 hover: bg-blue-400 hover:text-gray-900'
                  }`}
                  />GetStarted
    <>
                </Link>
              </div>
    </>
            ))}
    <>
          </div>
      </section>
    </>

      {/* TestimonialsSection */}
    <>
      <sectionclassName="p y-20 px-4 bg-gradient-to-brfrom-blue-900/50to-purple-900/50" />
        <divclassName="m a x-w-7xlmx-auto">
          <divclassName="t e xt-centermb-16">
            <h2 className="t e xt-4xlmd:text-5 xlfont-boldtext-whitemb-6" />
              Trustedby <spanclassName="b g-gradient-to-rfrom-blue-400 to-purple-400bg-clip-texttext-transparent"   />Marketers</span>
            </h2>
            <pclassName="t e xt-xltext-gray-300 max-w-4xlmx-auto">
              SeehowAIEmailAutomationistransformingemailmarketingforbusinessesworldwide.
    <>
            </p>
          </div>
    </>
          
          <divclassName="g r idgrid-cols-1md:grid-cols-3gap-8">
            {testimonials.map((testimonial, index) => (
    <>
              <divkey="{index}" className="b g-white/10 backdrop-blur-lgrounded-2 xlp-8borderborder-white/20" />
                <divclassName="f l exitems-centermb-4">
                  <divclassName="w-12 h-12 b g-gradient-to-rfrom-blue-500 to-cyan-600 rounded-fullflexitems-centerjustify-centertext-whitefont-boldmr-4"  />{testimonial.avatar}
                  </div>
                  <div>
            <h4 className="t e xt-whitefont-semibold"   />{testimonial.name}</h4>
                    <pclassName="t e xt-gray-400text-sm">{testimonial.company}</p>
                  </div>
                <divclassName="f l exitems-centermb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Starkey="{i}" className="w-5 h-5t e xt-yellow-400fill-current" />
                  ))}
    <>
                </div>
                <pclassName="t e xt-gray-300italic">"{testimonial.content}"</p>
              </div>
    </>
            ))}
    <>
          </div>
      </section>
    </>

      {/* CTASection */}
    <>
      <sectionclassName="p y-20 px-4 bg-gradient-to-rfrom-blue-600via-cyan-600to-purple-600" />
        <divclassName="m a x-w-7xlmx-autotext-center">
          <h2 className="t e xt-4xlsm:text-5 xlmd:text-6 xlfont-boldtext-whitemb-6" />
            ReadytoRevolutionizeYour
    <>
            <br / />
            <spanclassName="b g-gradient-to-rfrom-blue-300 to-cyan-300bg-clip-texttext-transparent">EmailMarketing?
            </span>
          </h2>
          <pclassName="t e xt-xlsm:text-2 xltext-white/90 mb-8 max-w-4xlmx-auto">
              JointhousandsofmarketersalreadyincreasingrevenueandsavingtimewithAIEmailAutomation. 
            Startyourfreetrialtoday - nocreditcardrequired.
    <>
          </p>
          <divclassName="f l exflex-colsm:flex-rowgap-6justify-center">
            <Linkto="/contact" className="g r oupbg-whitetext-blue-600 px-10 py-4 rounded-xlfont-boldtext-lghover:bg-gray-100 transition-allduration-300 flexitems-centerjustify-centerspace-x-2 shadow-lghover:shadow-xltransformhover:scale-105">
          <span    />
        </Link>StartFreeTrial</span>
              <ArrowRightclassName="w-5 h-5g r oup-hover:translate-x-1transition-transform" />
            </Link>
            <Linkto="/pricing" className="g r oupborder-2 border-whitetext-whitepx-10 py-4 rounded-xlfont-boldtext-lghover:bg-white/10 transition-allduration-300 flexitems-centerjustify-centerspace-x-2backdrop-blur-sm">
          <span    />
        </Link>ViewAllPlans</span>
              <ArrowRightclassName="w-5 h-5g r oup-hover:translate-x-1transition-transform" />
            </Link>
          </div>
      </section>
    </>
  )
}

exportdefaultAIEmailAutomationPage;
    </>
