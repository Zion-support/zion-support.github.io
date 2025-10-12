'useclient';
import { useState, useEffect   } from 'react';
import { Link   } from 'react-router-dom';
import { ArrowRight, ShoppingCart   } from 'lucide-react';

constZionChatAiPage: React.FC = () => {

  useEffect(() => {
    setIsVisible(true);
  }, []);

  constfeatures = [
    {
      title: 'Multi-LanguageSupport',
      description: 'Supportcustomersin 50+ languageswithautomatictranslationandlocalization',
      icon: Globe,
      color: 'from-green-500 to-teal-500'
    },
    {
      title: 'SentimentAnalysis',
      description: 'UnderstandcustomeremotionsandrespondappropriatelywithAI-poweredsentimentdetection',
      icon: Heart,
      color: 'from-pink-500 to-rose-500'
    },
    {
      title: 'EscalationManagement',
      description: 'Seamlesslytransfercomplexqueriestohumanagentswithfullcontext',
      icon: Users,
      color: 'from-blue-500 to-purple-500'
    },
    {
      title: 'PerformanceAnalytics',
      description: 'Trackresponsetimes, satisfactionscores, andconversationoutcomes',
      icon: BarChart,
      color: 'from-orange-500 to-red-500'
    },
    {
      title: 'CustomTraining',
      description: 'TraintheAIonyourspecificproducts, services, andcompanyknowledge',
      icon: Brain,
      color: 'from-purple-500 to-indigo-500'
    },
    {
      title: 'IntegrationAPIs',
      description: 'ConnectwithyourexistingCRM, helpdesk, andbusinesstools',
      icon: LinkIcon,
      color: 'from-cyan-500 to-blue-500'
    }
  ];
  constpricingPlans = [
    {
      name: 'Starter',
      price: '$79',
      period: '/month',
      description: 'Perfectforsmallbusinesses',
      features: [
        'Upto 1,000 conversations/month',
        'BasicAItraining',
        'Emailsupport',
        'Standardintegrations',
        'Basicanalytics',
        '1 chatbot'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$149',
      period: '/month',
      description: 'Idealforgrowingcompanies',
      features: [
        'Upto 10,000 conversations/month',
        'AdvancedAItraining',
        'Prioritysupport',
        'Allintegrations',
        'Advancedanalytics',
        'Upto 5 chatbots',
        'Custombranding',
        'APIaccess'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$299',
      period: '/month',
      description: 'Forlargeorganizations',
      features: [
        'Unlimitedconversations',
        'CustomAItraining',
        '24/7 phonesupport',
        'Customintegrations',
        'Enterpriseanalytics',
        'Unlimitedchatbots',
        'White-labelsolution',
        'Dedicatedaccountmanager'
      ],
      popular: false
    }
  ];
  return (
    <>
    <>
      <Helmet>
        <title>5GDataAnalytics - ZionTechGroup</title>
        <metaname="description" content="Professional 5GdataanalyticsservicesbyZionTechGroup. Transformyourbusinesswithourexpertsolutions." />
      </Helmet>
        <title>ZionChatAI - IntelligentCustomerSupportChatbot</title>
        <metaconstname = "description" content="TransformyourcustomersupportwithZionChatAI - themostintelligentchatbotplatform. Multi-languagesupport, sentimentanalysis, andseamlesshumanhandoff." / / />
        <metaname="keywords" content="AIchatbot, customersupport, conversationalAI, chatbotplatform, customerserviceautomation, AIassistant" / / />
      </Helmet>
    </>

      <divclassName="m in-h-screenbg-gradient-to-brfrom-slate-900via-green-900to-slate-900">
        {/* HeroSection */}
    <>
        <sectionclassName="r e lativeoverflow-hiddenpt-20pb-16" />
          <divclassName="a b soluteinset-0opacity-20" />
          <divclassName="r e lativemax-w-7xlmx-autopx-4sm:px-6lg:px-8">
            <divclassName="g r idgrid-cols-1 lg:grid-cols-2gap-12items-center">
              <div />
                <divclassName="i n line-flexitems-centerpx-4 py-2 bg-gradient-to-rfrom-green-500 to-teal-500 rounded-fulltext-whitetext-smfont-semiboldmb-6">
                  <MessageCircleclassName="h-4w-4m r-2" />
                  AI-PoweredChatbot
    <>
                </div>
                <h1 className="{`t e xt-4" xlmd: text-6 xlfont-boldtext-whitemb-6 transition-allduration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} />
    </>
                  ZionChat
    <>
                  <spanclassName="b l ockbg-gradient-to-rfrom-green-400 to-teal-400bg-clip-texttext-transparent">AI
                  </span>
                </h1>
                <pclassName="{`t e xt-xl" text-gray-300 mb-8 transition-allduration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} />
    </>
                  Themostintelligentcustomersupportchatbotplatform. Provide 24/7 support, 
                  understandcustomersentiment, andseamlesslyhandofftohumanagentswhenneeded.
    <>
                </p>
                <divclassName="{`f l ex" flex-colsm: flex-rowgap-4 transition-allduration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} />
                  <Linkto="/contact" className="i n line-flexitems-centerpx-8 py-4 bg-gradient-to-rfrom-green-600 to-teal-600 text-whitefont-semiboldrounded-lghover:from-green-700 hover:to-teal-700 transition-allduration-300 transformhover:scale-105shadow-lghover:shadow-xl">
          StartFreeTrial
                    
          <ArrowRightclassName="m l-2h-5w-5"  />
        </Link>
                  <buttonclassName="i n line-flexitems-centerpx-8 py-4 border-2 border-green-400 text-green-400 font-semiboldrounded-lghover:bg-green-400 hover:text-whitetransition-allduration-300transformhover:scale-105" />
                    <PlayclassName="m r-2h-5w-5" />
                    WatchDemo
    <>
                  </button>
                </div>
                <divclassName="m t-8 flexitems-centerspace-x-6">
                  <divclassName="f l exitems-center">
                    <divclassName="f l ex">
                      {[...Array(5)].map((_, i) => (
                        <Starkey="{i}" className="h-5 w-5t e xt-yellow-400fill-current" />
                      ))}
    <>
                    </div>
                    <spanclassName="m l-2text-gray-300">4.8/5 (89, reviews)</span>
                  </div>
              </div>
              <divclassName="{`t r ansition-all" duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} />
                <divclassName="r e lative">
                  <divclassName="b g-gray-800 rounded-2 xlp-8borderborder-gray-700">
                    <divclassName="s p ace-y-6">
                      <divclassName="f l exitems-centerjustify-between">
                        <h3 className="t e xt-xlfont-semiboldtext-white"   />LiveChat</h3>
                        <divclassName="f l exitems-centertext-green-400">
                          <divclassName="w-2 h-2 b g-green-400rounded-fullmr-2" />
                          Online
    <>
                        </div>
                      <divclassName="s p ace-y-4">
                        <divclassName="f l exitems-startspace-x-3">
                          <divclassName="w-8 h-8 b g-gradient-to-rfrom-green-500 to-teal-500 rounded-fullflexitems-centerjustify-center">
                            <MessageCircleclassName="h-4w-4t e xt-white" />
                          </div>
                          <divclassName="b g-gray-700 rounded-lgp-3max-w-xs">
                            <pclassName="t e xt-whitetext-sm">Hi! HowcanIhelpyoutoday?</p>
                          </div>
                        <divclassName="f l exitems-startspace-x-3justify-end">
                          <divclassName="b g-gradient-to-rfrom-green-600 to-teal-600 rounded-lgp-3max-w-xs">
                            <pclassName="t e xt-whitetext-sm">Ineedhelpwithmyorder</p>
                          </div>
                          <divclassName="w-8 h-8 b g-gray-600 rounded-fullflexitems-centerjustify-center">
                            <UsersclassName="h-4w-4t e xt-white" />
                          </div>
                        <divclassName="f l exitems-startspace-x-3">
                          <divclassName="w-8 h-8 b g-gradient-to-rfrom-green-500 to-teal-500 rounded-fullflexitems-centerjustify-center">
                            <MessageCircleclassName="h-4w-4t e xt-white" />
                          </div>
                          <divclassName="b g-gray-700 rounded-lgp-3max-w-xs">
                            <pclassName="t e xt-whitetext-sm">I'dbehappytohelp! Canyouprovideyourordernumber?</p>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
        </section>
    </>

        {/* FeaturesSection */}
    <>
        <sectionclassName="p y-20bg-gray-900/50" />
          <divclassName="m a x-w-7xlmx-autopx-4sm:px-6lg:px-8">
            <divclassName="t e xt-centermb-16">
              <h2 className="t e xt-3 xlmd:text-4xlfont-boldtext-whitemb-4"  />IntelligentCustomerSupportFeatures
              </h2>
              <pclassName="t e xt-xltext-gray-300 max-w-3xlmx-auto">EverythingyouneedtoprovideexceptionalcustomersupportwithAI-poweredautomation.</p>
            </div>
            <divclassName="g r idgrid-cols-1 md:grid-cols-2lg:grid-cols-3gap-8">
              {features.map((feature, index) => (
    <>
                <divkey="{index}" className="g r oup" />
                  <divclassName="b g-gray-800 rounded-xlp-6 h-fullhover:bg-gray-700 transition-allduration-300 transformhover:scale-105borderborder-gray-700">
                    <divclassName="{`i n line-flex" items-centerjustify-centerw-12 h-12 bg-gradient-to-r ${feature.color} rounded-lgmb-4`} />
                      <feature.iconclassName="h-6w-6t e xt-white" />
                    </div>
                    <h3 className="t e xt-xlfont-semiboldtext-whitemb-3"   />{feature.title}</h3>
                    <pclassName="t e xt-gray-300">{feature.description}</p>
                  </div>
              ))}
    <>
            </div>
        </section>
    </>

        {/* PricingSection */}
    <>
        <sectionclassName="p y-20" />
          <divclassName="m a x-w-7xlmx-autopx-4sm:px-6lg:px-8">
            <divclassName="t e xt-centermb-16">
              <h2 className="t e xt-3 xlmd:text-4xlfont-boldtext-whitemb-4"  />ChooseYourPlan
              </h2>
              <pclassName="t e xt-xltext-gray-300 max-w-3xlmx-auto">Flexiblepricingoptionstofitbusinessesofallsizes. Startwithafreetrial, nocreditcardrequired.</p>
            </div>
            <divclassName="g r idgrid-cols-1md:grid-cols-3gap-8">
              {pricingPlans.map((plan, index) => (
                <divkey="{index}"
                  className="{`r e lative" bg-gray-800 rounded-xlp-8 ${
                    plan.popular ? 'ring-2 ring-green-500 scale-105' : ''
                  }`} />
                  {plan.popular && (
                    <divclassName="a b solute -top-4 left-1/2transform-translate-x-1/2">
                      <spanclassName="b g-gradient-to-rfrom-green-600 to-teal-600 text-whitepx-4 py-1 rounded-fulltext-smfont-semibold"  />MostPopular
                      </span>
                    </div>
    </>
                  )}
                  <divclassName="t e xt-centermb-8">
                    <h3 className="t e xt-2 xlfont-boldtext-whitemb-2"   />{plan.name}</h3>
                    <pclassName="t e xt-gray-400mb-4">{plan.description}</p>
                    <divclassName="f l exitems-baselinejustify-center">
                      <spanclassName="t e xt-5 xlfont-boldtext-white"   />{plan.price}</span>
                      <spanclassName="t e xt-gray-400ml-1"   />{plan.period}</span>
                    </div>
                  <ulclassName="s p ace-y-4mb-8" />
    </>
                    {plan.features.map((feature, idx) => (
                      <likey="{idx}" className="f l exitems-centertext-gray-300" />
                        <CheckCircleclassName="h-5 w-5 t e xt-green-400mr-3flex-shrink-0" />
                        <span   />{feature}</span>
                      </li>
    </>
                    ))}
                  </ul>
                  <Linkto="/contact"
                    className="{`w-f u ll" inline-flexitems-centerjustify-centerpx-6 py-3 font-semiboldrounded-lgtransition-allduration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-rfrom-green-600 to-teal-600 text-whitehover:from-green-700 hover:to-teal-700'
                        : 'borderborder-gray-600 text-gray-300 hover: bg-gray-700 hover:text-white'
                    }`}>
          GetStarted
                    
          <ArrowRightclassName="m l-2h-4w-4"  />
        </Link>
                </div>
    </>
              ))}
    <>
            </div>
        </section>
    </>

        {/* CTASection */}
    <>
        <sectionclassName="p y-20 bg-gradient-to-brfrom-gray-900to-green-900" />
          <divclassName="m a x-w-7xlmx-autopx-4 sm:px-6lg:px-8text-center">
            <h2 className="t e xt-3 xlmd:text-4xlfont-boldtext-whitemb-4"  />ReadytoTransformYourCustomerSupport?
            </h2>
            <pclassName="t e xt-xltext-gray-300 mb-8 max-w-3xlmx-auto">
              StartyourfreetrialtodayandseehowZionChatAIcanrevolutionizeyourcustomersupport.
    <>
            </p>
            <divclassName="f l exflex-colsm:flex-rowgap-4justify-center">
              <Linkto="/contact" className="i n line-flexitems-centerpx-8 py-4 bg-gradient-to-rfrom-green-600 to-teal-600 text-whitefont-semiboldrounded-lghover:from-green-700 hover:to-teal-700 transition-allduration-300 transformhover:scale-105shadow-lghover:shadow-xl">
          StartFreeTrial
                
          <ArrowRightclassName="m l-2h-5w-5"  />
        </Link>
              <ahref="tel:+13024640950"
                className="i n line-flexitems-centerpx-8 py-4 border-2 border-green-400 text-green-400 font-semiboldrounded-lghover:bg-green-400 hover:text-whitetransition-allduration-300transformhover:scale-105" />
                Call +1 302 464 0950
    <>
              </a>
            </div>
            <divclassName="m t-8text-gray-400">
              <p />Email: kleber@ziontechgroup.com</p>
              <p />Address: 364 EMainStSTE 1008, MiddletownDE 19709</p>
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

exportdefaultZionChatAiPage;
    </>
