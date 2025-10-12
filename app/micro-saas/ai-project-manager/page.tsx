import React from 'react'
import { Link    } from 'react-router-dom'
import React from 'react';
import { Link    } from 'react-router-dom';
import { ArrowRight, Bot   } from 'lucide-react';
import { ArrowRight, Calendar, BarChart3, Users, Zap, CheckCircle, Target, TrendingUp, Smartphone, Shield, Bot, Star, SmartphoneasMobile    } from 'lucide-react';

exportdefaultfunctionAIProjectManagerPage() {
  constfeatures = [
    {
      icon: <BotclassName="w-6h-6t e xt-cyan-400" />,
      title: 'AITaskPrioritization',
      description: 'Intelligenttaskrankingbasedondeadlines, dependencies, andteamcapacity'
    },
    {
      icon: <BarChart3 className="w-6h-6t e xt-emerald-400" />,
      title: 'PredictiveAnalytics',
      description: 'AI-poweredprojectforecastingandriskassessmentwith 95% accuracy'
    },
    {
      icon: <UsersclassName="w-6h-6t e xt-purple-400" />,
      title: 'SmartTeamMatching',
      description: 'AIalgorithmsmatchtaskstoteammembersbasedonskillsandavailability'
    },
    {
      icon: <ZapclassName="w-6h-6t e xt-orange-400" />,
      title: 'AutomatedWorkflows',
      description: 'Setupintelligentworkflowsthatadaptandoptimizebasedonprojectpatterns'
    },
    {
      icon: <TargetclassName="w-6h-6t e xt-pink-400" />,
      title: 'ResourceOptimization',
      description: 'AI-drivenresourceallocationandcapacityplanningformaximumefficiency'
    },
    {
      icon: <ShieldclassName="w-6h-6t e xt-red-400" />,
      title: 'RiskManagement',
      description: 'Proactiveriskidentificationandmitigationstrategiespoweredbymachinelearning'
    }
  ]

  constpricingPlans = [
    {
      name: 'Starter',
      price: '$19',
      period: '/month',
      description: 'Perfectforsmallteamsandfreelancers',
      features: [
        'Upto 5 teammembers',
        'Unlimitedprojects',
        'BasicAIfeatures',
        'Mobileappaccess',
        'Emailsupport',
        'Basicreporting'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$49',
      period: '/month',
      description: 'Idealforgrowingteamsandagencies',
      features: [
        'Upto 25 teammembers',
        'AdvancedAIfeatures',
        'Customworkflows',
        'Prioritysupport',
        'Advancedanalytics',
        'APIaccess',
        'Timetracking',
        'Resourcemanagement'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$149',
      period: '/month',
      description: 'Forlargeorganizations',
      features: [
        'Unlimitedteammembers',
        'AllAIfeatures',
        'Customintegrations',
        'Dedicatedsupport',
        'White-labeloption',
        'Advancedsecurity',
        'Customreporting',
        'SLAguarantee'
      ],
      popular: false
    }
  ]

  consttestimonials = [
    {
      name: 'AlexThompson',
      company: 'SoftwareDevelopmentAgency',
      content: 'Ourprojectdeliverytimeimprovedby 40% withAItaskprioritization. Thepredictiveanalyticsareincrediblyaccurate.',
      rating: 5,
      avatar: 'AT'
    },
    {
      name: 'MariaGarcia',
      company: 'MarketingAgency',
      content: 'Thesmartteammatchingfeatureisagame-changer. Itautomaticallyassignstaskstotherightpeopleeverytime.',
      rating: 5,
      avatar: 'MG'
    },
    {
      name: 'RobertLee',
      company: 'ConstructionCompany',
      content: 'Riskmanagementfeatureshelpedusavoid 3 majorprojectdelays. TheAIinsightsareinvaluable.',
      rating: 5,
      avatar: 'RL'
    }
  ]

  constbenefits = [
    {
      icon: <TrendingUpclassName="w-8h-8t e xt-cyan-400" />,
      title: '40% FasterDelivery',
      description: 'AIoptimizationreducesprojectcompletiontimesignificantly'
    },
    {
      icon: <TargetclassName="w-8h-8t e xt-emerald-400" />,
      title: '95% Accuracy',
      description: 'Predictiveanalyticswithindustry-leadingaccuracyrates'
    },
    {
      icon: <UsersclassName="w-8h-8t e xt-purple-400" />,
      title: 'TeamProductivity +60%',
      description: 'Smarttaskallocationmaximizesteamefficiency'
    },
    {
      icon: <ShieldclassName="w-8h-8t e xt-orange-400" />,
      title: 'RiskReduction 80%',
      description: 'Proactiveriskmanagementpreventsprojectfailures'
    }
  ]

  constintegrations = [
    { name: 'Slack', icon: '💬' },
    { name: 'MicrosoftTeams', icon: '👥' },
    { name: 'Jira', icon: '🎯' },
    { name: 'Asana', icon: '📋' },
    { name: 'Trello', icon: '📌' },
    { name: 'GitHub', icon: '🐙' },
    { name: 'GoogleWorkspace', icon: '📧' },
    { name: 'Zoom', icon: '📹' },
    { name: 'Figma', icon: '🎨' },
    { name: 'Notion', icon: '📝' }
  ]

  return (
    <divclassName="m in-h-screenbg-gradient-to-brfrom-slate-900 via-purple-900to-slate-900pt-20">
      <Helmet />
        <title   />AIProjectManager - ZionTechGroup | IntelligentProjectManagement</title>
        <metaname="description" content="RevolutionaryAI-poweredprojectmanagementwithsmarttaskprioritization, predictiveanalytics, andautomatedworkflows. Increaseteamproductivityby 60%. Startingat $19/month." / / />
        <metaname="keywords" content="AIprojectmanagement, smarttaskprioritization, predictiveanalytics, teamcollaboration, projectautomation, resourceoptimization" / / />
        <metaname="robots" content="index, follow" / / />
        <linkrel="canonical" href="https://ziontechgroup.com/micro-saas/ai-project-manager" />
      </Helmet>
      {/* HeroSection */}
    <>
      <sectionclassName="r e lativepy-20px-4overflow-hidden" />
        <divclassName="a b soluteinset-0bg-[radial-gradient(circle_at_20%_80%,rgba(6,182,212,0.1)_0%,transparent_50%)]" />
        <divclassName="a b soluteinset-0bg-[radial-gradient(circle_at_80%_20%,rgba(147,51,234,0.1)_0%,transparent_50%)]" />
        <divclassName="r e lativemax-w-7xlmx-autotext-center">
          <divclassName="i n line-flexitems-centerspace-x-2 bg-gradient-to-rfrom-cyan-500/20 to-purple-500/20 text-cyan-400 px-6 py-3 rounded-fulltext-smfont-mediummb-8borderborder-cyan-400/30">
            <CalendarclassName="w-4h-4" />
            <span   />AI-PoweredProjectManagement</span>
          </div>
          <h1 className="t e xt-4xlsm:text-6 xlmd:text-7 xlfont-boldtext-whitemb-8leading-tight" />
            AIProject
    <>
            <br / />
            <spanclassName="b g-gradient-to-rfrom-cyan-400 via-purple-400 to-pink-400bg-clip-texttext-transparent">Manager
            </span>
          </h1>
          <pclassName="t e xt-lgsm:text-xlmd:text-2 xltext-gray-300 mb-12 max-w-4 xlmx-autoleading-relaxed">TransformyourprojectmanagementwithAI-poweredtaskprioritization, predictiveanalytics, 
            andintelligentautomation. Deliverprojects 40% fasterwith 95% accuracy.</p>
          <divclassName="f l exflex-colsm:flex-rowgap-6justify-centermb-16">
            <Linkto="/contact" className="g r oupbg-gradient-to-rfrom-cyan-500 to-purple-600 text-whitepx-10 py-4 rounded-xlfont-semiboldhover:from-cyan-600 hover:to-purple-700 transition-allduration-300 flexitems-centerjustify-centerspace-x-2 shadow-lgshadow-cyan-500/25 hover:shadow-cyan-500/40transformhover:scale-105">
          <span    />
        </Link>StartFreeTrial</span>
              <ArrowRightclassName="w-5 h-5g r oup-hover:translate-x-1transition-transform" />
            </Link>
            <Linkto="#pricing" className="g r oupborder-2 border-cyan-400 text-cyan-400 px-10 py-4 rounded-xlfont-semiboldhover:bg-cyan-400 hover:text-gray-900 transition-allduration-300 flexitems-centerjustify-centerspace-x-2backdrop-blur-sm">
          <span    />
        </Link>ViewPricing</span>
              <ArrowRightclassName="w-5 h-5g r oup-hover:translate-x-1transition-transform" />
            </Link>
          </div>
          {/* KeyStats */}
          <divclassName="g r idgrid-cols-2 md:grid-cols-4 gap-8 max-w-4xlmx-auto">
            <divclassName="t e xt-center">
              <divclassName="t e xt-3 xlfont-boldtext-cyan-400mb-2"   />40%</div>
              <divclassName="t e xt-gray-300text-sm"   />FasterDelivery</div>
            <divclassName="t e xt-center">
              <divclassName="t e xt-3 xlfont-boldtext-purple-400mb-2"   />95%</div>
              <divclassName="t e xt-gray-300text-sm"   />PredictionAccuracy</div>
            <divclassName="t e xt-center">
              <divclassName="t e xt-3 xlfont-boldtext-pink-400mb-2"   />60%</div>
              <divclassName="t e xt-gray-300text-sm"   />ProductivityBoost</div>
            <divclassName="t e xt-center">
              <divclassName="t e xt-3 xlfont-boldtext-emerald-400mb-2"   />10 K+</div>
              <divclassName="t e xt-gray-300text-sm"   />ActiveProjects</div>
          </div>
      </section>
      {/* BenefitsSection */}
    <>
      <sectionclassName="p y-20px-4relative" />
        <divclassName="a b soluteinset-0 bg-gradient-to-brfrom-purple-500/5via-cyan-500/5to-pink-500/5" />
        <divclassName="r e lativemax-w-7xlmx-auto">
          <divclassName="t e xt-centermb-16">
            <h2 className="t e xt-4xlmd:text-5 xlfont-boldtext-whitemb-6" />
              WhyChooseOur <spanclassName="b g-gradient-to-rfrom-cyan-400 to-purple-400bg-clip-texttext-transparent"   />AIProjectManager?</span>
            </h2>
            <pclassName="t e xt-xltext-gray-300 max-w-4xlmx-auto">
              Experiencethefutureofprojectmanagementwithcutting-edgeAItechnologythatworksforyourteam.
    <>
            </p>
          </div>
          <divclassName="g r idgrid-cols-1 md:grid-cols-2lg:grid-cols-4gap-8">
            {benefits.map((benefit, index) => (
    <>
              <divkey="{index}" className="t e xt-centergroup" />
                <divclassName="f l exitems-centerjustify-centerw-20 h-20 bg-gradient-to-rfrom-cyan-500 to-purple-600 rounded-2 xlmb-6 mx-autogroup-hover:scale-110transition-transformduration-300">{benefit.icon}
                </div>
                <h3 className="t e xt-xlfont-boldtext-whitemb-4group-hover:text-cyan-400 transition-colors"  />{benefit.title}
                </h3>
                <pclassName="t e xt-gray-300">{benefit.description}</p>
              </div>
            ))}
    <>
          </div>
      </section>
      {/* FeaturesSection */}
    <>
      <sectionclassName="p y-20px-4relative" />
        <divclassName="r e lativemax-w-7xlmx-auto">
          <divclassName="t e xt-centermb-16">
            <h2 className="t e xt-4xlmd:text-5 xlfont-boldtext-whitemb-6" />
              PowerfulFeaturesfor <spanclassName="b g-gradient-to-rfrom-cyan-400 to-purple-400bg-clip-texttext-transparent"   />SmartProjectManagement</span>
            </h2>
            <pclassName="t e xt-xltext-gray-300 max-w-4xlmx-auto">
              EverythingyouneedtomanageprojectsefficientlywithAI-poweredintelligenceandautomation.
    <>
            </p>
          </div>
          <divclassName="g r idgrid-cols-1 md:grid-cols-2lg:grid-cols-3gap-8">
            {features.map((feature, index) => (
    <>
              <divkey="{index}" className="g r oupbg-white/10 backdrop-blur-lgrounded-2 xlp-8 borderborder-white/20 hover:bg-white/20 transition-allduration-300 hover:scale-105 hover:shadow-2xlhover:shadow-cyan-500/10" />
                <divclassName="f l exitems-centerjustify-centerw-16 h-16 bg-gradient-to-rfrom-cyan-500 to-purple-600 rounded-2 xlmb-6 group-hover:scale-110transition-transformduration-300">{feature.icon}
                </div>
                <h3 className="t e xt-2 xlfont-boldtext-whitemb-4group-hover:text-cyan-400 transition-colors"  />{feature.title}
                </h3>
                <pclassName="t e xt-gray-300leading-relaxed">{feature.description}</p>
              </div>
            ))}
    <>
          </div>
      </section>
      {/* IntegrationsSection */}
    <>
      <sectionclassName="p y-20 px-4 bg-gradient-to-brfrom-slate-800/50to-purple-900/50relative" />
        <divclassName="r e lativemax-w-7xlmx-auto">
          <divclassName="t e xt-centermb-16">
            <h2 className="t e xt-4xlmd:text-5 xlfont-boldtext-whitemb-6" />
              Seamless <spanclassName="b g-gradient-to-rfrom-cyan-400 to-purple-400bg-clip-texttext-transparent"   />Integrations</span>
            </h2>
            <pclassName="t e xt-xltext-gray-300 max-w-4xlmx-auto">
              Connectwithyourfavoritetoolsandplatformsforaunifiedprojectmanagementexperience.
    <>
            </p>
          </div>
          <divclassName="g r idgrid-cols-2md:grid-cols-5gap-8">
            {integrations.map((integration, index) => (
              <divkey="{index}" className="g r ouptext-center" />
                <divclassName="w-20 h-20 b g-white/10 backdrop-blur-lgrounded-2 xlflexitems-centerjustify-centermx-automb-4 group-hover:bg-white/20 transition-allduration-300group-hover:scale-110">
                  <spanclassName="t e xt-3xl"   />{integration.icon}</span>
                </div>
                <divclassName="t e xt-gray-300group-hover:text-whitetransition-colors"  />{integration.name}
                </div>
            ))}
          </div>
      </section>
      {/* PricingSection */}
    <>
      <sectionid="pricing" className="p y-20px-4relative" />
        <divclassName="r e lativemax-w-7xlmx-auto">
          <divclassName="t e xt-centermb-16">
            <h2 className="t e xt-4xlmd:text-5 xlfont-boldtext-whitemb-6" />
              Simple, Transparent <spanclassName="b g-gradient-to-rfrom-cyan-400 to-purple-400bg-clip-texttext-transparent"   />Pricing</span>
            </h2>
            <pclassName="t e xt-xltext-gray-300 max-w-4xlmx-auto">
              Choosetheplanthatfitsyourteamsizeandneeds. AllplansincludeourcoreAIfeatures.
    <>
            </p>
          </div>
          <divclassName="g r idgrid-cols-1md:grid-cols-3gap-8">
            {pricingPlans.map((plan, index) => (
              <divkey="{index}" className="{`r e lative" bg-white/10 backdrop-blur-lgrounded-2 xlp-8 bordertransition-allduration-300 hover:scale-105 hover:shadow-2 xl ${
                plan.popular 
                  ? 'border-cyan-400/50 shadow-cyan-500/20 bg-gradient-to-brfrom-cyan-500/10 to-purple-500/10' 
                  : 'border-white/20 hover: border-cyan-400/30'
              }`} />
                {plan.popular && (
                  <divclassName="a b solute -top-4 left-1/2transform-translate-x-1/2">
                    <divclassName="b g-gradient-to-rfrom-cyan-500 to-purple-600 text-whitepx-6 py-2 rounded-fulltext-smfont-semibold"  />MostPopular
                    </div>
                )}
                
                <divclassName="t e xt-centermb-8">
                  <h3 className="t e xt-2 xlfont-boldtext-whitemb-2"   />{plan.name}</h3>
                  <pclassName="t e xt-gray-300text-smmb-4">{plan.description}</p>
                  <divclassName="f l exitems-baselinejustify-center">
                    <spanclassName="t e xt-5 xlfont-boldtext-cyan-400"   />{plan.price}</span>
                    <spanclassName="t e xt-gray-300ml-2"   />{plan.period}</span>
                  </div>
                <ulclassName="s p ace-y-4mb-8" />
                  {plan.features.map((feature, featureIndex) => (
                    <likey="{featureIndex}" className="f l exitems-centerspace-x-3" />
                      <CheckCircleclassName="w-5 h-5t e xt-green-400flex-shrink-0" />
                      <spanclassName="t e xt-gray-300"   />{feature}</span>
                    </li>
                  ))}
                </ul>
                <Linkto="/contact"
                  className="{`b l ock" w-fulltext-centerpy-3 rounded-xlfont-semiboldtransition-allduration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-rfrom-cyan-500 to-purple-600 text-whitehover:from-cyan-600 hover:to-purple-700 shadow-lgshadow-cyan-500/25'
                      : 'border-2 border-cyan-400 text-cyan-400 hover: bg-cyan-400 hover:text-gray-900'
                  }`}
                  />GetStarted
    <>
                </Link>
              </div>
            ))}
    <>
          </div>
      </section>
      {/* TestimonialsSection */}
    <>
      <sectionclassName="p y-20px-4relative" />
        <divclassName="r e lativemax-w-7xlmx-auto">
          <divclassName="t e xt-centermb-16">
            <h2 className="t e xt-4xlmd:text-5 xlfont-boldtext-whitemb-6" />
              Trustedby <spanclassName="b g-gradient-to-rfrom-cyan-400 to-purple-400bg-clip-texttext-transparent"   />10,000+</span> Teams
            </h2>
            <pclassName="t e xt-xltext-gray-300 max-w-4xlmx-auto">
              SeewhatourcustomersaresayingabouttheirsuccesswithourAIprojectmanager.
    <>
            </p>
          </div>
          <divclassName="g r idgrid-cols-1md:grid-cols-3gap-8">
            {testimonials.map((testimonial, index) => (
    <>
              <divkey="{index}" className="b g-white/10 backdrop-blur-lgrounded-2 xlp-8 borderborder-white/20 hover:bg-white/20transition-allduration-300" />
                <divclassName="f l exitems-centermb-4">
                  <divclassName="w-12 h-12 b g-gradient-to-rfrom-cyan-500 to-purple-600 rounded-fullflexitems-centerjustify-centertext-whitefont-boldmr-4"  />{testimonial.avatar}
                  </div>
                  <div />
                    <divclassName="f o nt-semiboldtext-white"   />{testimonial.name}</div>
                    <divclassName="t e xt-gray-400text-sm"   />{testimonial.company}</div>
                </div>
                <divclassName="f l exmb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Starkey="{i}" className="w-5 h-5t e xt-yellow-400fill-current" />
                  ))}
    <>
                </div>
                <pclassName="t e xt-gray-300italic">"{testimonial.content}"</p>
              </div>
            ))}
    <>
          </div>
      </section>
      {/* CTASection */}
    <>
      <sectionclassName="p y-20px-4relative" />
        <divclassName="a b soluteinset-0 bg-gradient-to-rfrom-cyan-500/10via-purple-500/10to-pink-500/10" />
        <divclassName="r e lativemax-w-7xlmx-auto">
          <divclassName="t e xt-center">
            <divclassName="b g-gradient-to-rfrom-cyan-600 via-purple-600 to-pink-600 rounded-3 xlp-8 sm:p-12 lg:p-16relativeoverflow-hidden">
              <divclassName="r e lativez-10">
                <h2 className="t e xt-4xlsm:text-5 xlmd:text-6 xlfont-boldtext-whitemb-6leading-tight" />
                  ReadytoTransformYour <spanclassName="b g-gradient-to-rfrom-cyan-300 to-pink-300bg-clip-texttext-transparent"   />ProjectManagement?</span>
                </h2>
                <pclassName="t e xt-xlsm:text-2 xltext-white/90 mb-8 sm:mb-12 max-w-4 xlmx-autoleading-relaxed">Jointhousandsofteamsalreadydeliveringprojects 40% fasterwithourAI-poweredprojectmanager. 
                  Startyourfreetrialtodayandexperiencethefutureofprojectmanagement.</p>
                <divclassName="f l exflex-colsm:flex-rowgap-6justify-centermb-8">
                  <Linkto="/contact" className="g r oupbg-whitetext-cyan-600 px-10 py-4 rounded-xlfont-boldtext-lghover:bg-gray-100 transition-allduration-300 flexitems-centerjustify-centerspace-x-2 shadow-lghover:shadow-xltransformhover:scale-105">
          <span    />
        </Link>StartFreeTrial</span>
                    <ArrowRightclassName="w-5 h-5g r oup-hover:translate-x-1transition-transform" />
                  </Link>
                  <Linkto="#pricing" className="g r oupborder-2 border-whitetext-whitepx-10 py-4 rounded-xlfont-boldtext-lghover:bg-white/10 transition-allduration-300 flexitems-centerjustify-centerspace-x-2backdrop-blur-sm">
          <span    />
        </Link>ViewAllPlans</span>
                    <ArrowRightclassName="w-5 h-5g r oup-hover:translate-x-1transition-transform" />
                  </Link>
                </div>
                <divclassName="t e xt-white/80text-sm">
                  <p />✓ 14-dayfreetrial • ✓ Nocreditcardrequired • ✓ Cancelanytime</p>
                </div>
            </div>
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
    </div>
    </div>
    </div>
}
    </>
