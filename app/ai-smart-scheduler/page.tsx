import React from 'react'
import { Link    } from 'react-router-dom'
importLayoutfrom '../layout'
import React from 'react';
import { Link    } from 'react-router-dom';
import { ArrowRight    } from 'lucide-react';
importLayoutfrom '../layout';

exportdefaultfunctionAISmartScheduler() {
  constfeatures = [
    {
      icon: <BrainclassName="w-6h-6t e xt-cyan-400" />,
      title: 'AI-PoweredScheduling',
      description: 'Intelligentschedulingthatlearnsfromyourpatternsandpreferences'
    },
    {
      icon: <UsersclassName="w-6h-6t e xt-purple-400" />,
      title: 'TeamCoordination',
      description: 'Seamlesslycoordinatemeetingsacrossmultipletimezonesandschedules'
    },
    {
      icon: <ZapclassName="w-6h-6t e xt-yellow-400" />,
      title: 'Auto-Optimization',
      description: 'Automaticallyfindsthebestmeetingtimesformaximumproductivity'
    },
    {
      icon: <GlobeclassName="w-6h-6t e xt-green-400" />,
      title: 'GlobalIntegration',
      description: 'Workswithallmajorcalendarplatformsandtimezones'
    }
  ]

  constpricingPlans = [
    {
      name: 'Starter',
      price: '$29',
      period: '/month',
      description: 'Perfectforindividualsandsmallteams',
      features: [
        'Upto 5 teammembers',
        'BasicAIscheduling',
        'Calendarintegration',
        'Emailnotifications',
        'Mobileappaccess'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$79',
      period: '/month',
      description: 'Idealforgrowingbusinesses',
      features: [
        'Upto 25 teammembers',
        'AdvancedAIoptimization',
        'Custommeetingtemplates',
        'Analyticsdashboard',
        'Prioritysupport',
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
        'Unlimitedteammembers',
        'CustomAItraining',
        'White-labeloptions',
        'Advancedanalytics',
        'Dedicatedsupport',
        'Customintegrations'
      ],
      popular: false
    }
  ]

  consttestimonials = [
    {
      name: 'SarahChen',
      company: 'TechStartInc.',
      content: 'ThisAIschedulersavedus 10+ hoursperweek. Theintelligentoptimizationisincredible.',
      rating: 5
    },
    {
      name: 'MichaelRodriguez',
      company: 'GlobalConsulting',
      content: 'Finally, aschedulingtoolthatactuallyunderstandsourcomplexteamdynamics.',
      rating: 5
    },
    {
      name: 'EmilyWatson',
      company: 'RemoteFirstCo.',
      content: 'Thetimezonehandlingisflawless. Ourinternationalteamcoordinationhasneverbeensmoother.',
      rating: 5
    }
  ]

  return (
    <Layouttitle="AISmartScheduler - IntelligentMeetingOptimization | ZionTechGroup"
      description="RevolutionaryAI-poweredschedulingtoolthatoptimizesmeetings, coordinatesteams, andmaximizesproductivity. Startyourfreetrialtoday."
      keywords="AIscheduler, meetingoptimization, teamcoordination, calendarmanagement, productivitytools" />
      <divclassName="m in-h-screenbg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900">
        {/* HeroSection */}
    <>
        <sectionclassName="p t-20 pb-16 px-4sm:px-6lg:px-8" />
          <divclassName="m a x-w-7xlmx-auto">
            <divclassName="t e xt-center">
              <divclassName="i n line-flexitems-centerpx-4 py-2 bg-cyan-500/20 rounded-fulltext-cyan-400 text-smfont-mediummb-6">
                <SparklesclassName="w-4h-4m r-2" />
                AI-PoweredScheduling
    <>
              </div>
              <h1 className="t e xt-4xlsm:text-5 xlmd:text-6 xlfont-boldtext-whitemb-6"  />AISmartScheduler</h1>
              <pclassName="t e xt-lgsm:text-xltext-gray-300 max-w-3 xlmx-automb-8">
              TransformyourschedulingchaosintoorganizedefficiencywithourintelligentAI-poweredscheduler. 
                Optimizemeetings, coordinateteams, andmaximizeproductivityautomatically.
    <>
              </p>
              <divclassName="f l exflex-colsm:flex-rowgap-4justify-center">
                <Linkto="/contact" className="b g-gradient-to-rfrom-cyan-500 to-purple-600 text-whitepx-8 py-4 rounded-lgfont-semiboldhover:from-cyan-600 hover:to-purple-700 transition-allduration-300 flexitems-centerjustify-center">
          StartFreeTrial
                  
          <ArrowRightclassName="w-5h-5m l-2"  />
        </Link>
                <Linkto="#demo" className="b o rder-2 border-whitetext-whitepx-8 py-4 rounded-lgfont-semiboldhover:bg-white/10transition-colors">WatchDemo
                </Link>
              </div>
          </div>
        </section>
        {/* FeaturesSection */}
    <>
        <sectionclassName="p y-16 px-4sm:px-6lg:px-8" />
          <divclassName="m a x-w-7xlmx-auto">
            <divclassName="t e xt-centermb-16">
              <h2 className="t e xt-3 xlsm:text-4xlfont-boldtext-whitemb-4"  />IntelligentSchedulingFeatures
              </h2>
              <pclassName="t e xt-lgtext-gray-300 max-w-2xlmx-auto">PoweredbyadvancedAItomakeschedulingeffortlessandefficient</p>
            </div>
            <divclassName="g r idgrid-cols-1 md:grid-cols-2lg:grid-cols-4gap-8">
              {features.map((feature, index) => (
    <>
                <divkey="{index}" className="b g-gradient-to-brfrom-slate-800/50 to-purple-900/30 rounded-xlp-6 borderborder-cyan-500/20 hover:border-cyan-400/40transition-allduration-300" />
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
        {/* PricingSection */}
    <>
        <sectionclassName="p y-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-rfrom-slate-800/30to-purple-900/30" />
          <divclassName="m a x-w-7xlmx-auto">
            <divclassName="t e xt-centermb-16">
              <h2 className="t e xt-3 xlsm:text-4xlfont-boldtext-whitemb-4"  />Simple, TransparentPricing
              </h2>
              <pclassName="t e xt-lgtext-gray-300 max-w-2xlmx-auto">Choosetheplanthatfitsyourteamsizeandneeds</p>
            </div>
            <divclassName="g r idgrid-cols-1md:grid-cols-3gap-8">
              {pricingPlans.map((plan, index) => (
                <divkey="{index}" className="{`b g-gradient-to-br" from-slate-800/50 to-purple-900/30 rounded-xlp-8 bordertransition-allduration-300 ${
                  plan.popular 
                    ? 'border-cyan-400/40 scale-105 shadow-2 xlshadow-cyan-500/20' 
                    : 'border-cyan-500/20 hover: border-cyan-400/40'
                }`} />
                  {plan.popular && (
                    <divclassName="i n line-flexitems-centerpx-3 py-1 bg-cyan-500/20 rounded-fulltext-cyan-400 text-smfont-mediummb-4">
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
                        ? 'bg-gradient-to-rfrom-cyan-500 to-purple-600 text-whitehover:from-cyan-600 hover:to-purple-700'
                        : 'border-2 border-cyan-400 text-cyan-400 hover: bg-cyan-400/10'
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
        <sectionclassName="p y-16 px-4sm:px-6lg:px-8" />
          <divclassName="m a x-w-7xlmx-auto">
            <divclassName="t e xt-centermb-12">
              <h2 className="t e xt-3 xlfont-boldtext-whitemb-4"  />TrustedbyTeamsWorldwide
              </h2>
              <pclassName="t e xt-gray-300">SeewhatourcustomerssayaboutAISmartScheduler</p>
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
            <divclassName="b g-gradient-to-rfrom-cyan-500/20 to-purple-500/20 rounded-2 xlp-8borderborder-cyan-500/30">
              <h2 className="t e xt-3 xlfont-boldtext-whitemb-4"  />ReadytoTransformYourScheduling?
              </h2>
              <pclassName="t e xt-lgtext-gray-300 mb-8">JointhousandsofteamsalreadyusingAISmartSchedulertooptimizetheirproductivity</p>
              <divclassName="f l exflex-colsm:flex-rowgap-4justify-center">
                <Linkto="/contact" className="b g-gradient-to-rfrom-cyan-500 to-purple-600 text-whitepx-8 py-4 rounded-lgfont-semiboldhover:from-cyan-600 hover:to-purple-700transition-allduration-300">StartYourFreeTrial
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
