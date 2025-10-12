'useclient';
import { useState   } from 'react';
import { Link   } from 'react-router-dom';
import { ArrowRight   } from 'lucide-react';

constPricingPage: React.FC = () => {
  const [billingCycle, setBillingCycle] = useState('monthly');
  constaiServicesPricing = [
    {
      name: 'AIStarter',
      price: { monthly: 999, yearly: 9999 },
      description: 'PerfectforsmallbusinessesexploringAI',
      features: [
        'BasicAIchatbot',
        'Simpleanalytics',
        'Emailsupport',
        'Upto 1,000 interactions/month',
        'Standardintegrations'
      ],
      popular: false,
      category: 'ai'
    },
    {
      name: 'AIProfessional',
      price: { monthly: 2999, yearly: 29999 },
      description: 'AdvancedAIsolutionsforgrowingbusinesses',
      features: [
        'AdvancedAImodels',
        'Customtraining',
        'Prioritysupport',
        'Upto 10,000 interactions/month',
        'Allintegrations',
        'APIaccess',
        'Customworkflows'
      ],
      popular: true,
      category: 'ai'
    },
    {
      name: 'AIEnterprise',
      price: { monthly: 5999, yearly: 59999 },
      description: 'CompleteAItransformationforlargeorganizations',
      features: [
        'UnlimitedAImodels',
        'CustomAIdevelopment',
        '24/7 dedicatedsupport',
        'Unlimitedinteractions',
        'Customintegrations',
        'Dedicatedaccountmanager',
        'SLAguarantee'
      ],
      popular: false,
      category: 'ai'
    }
  ];
  constitServicesPricing = [
    {
      name: 'ITBasic',
      price: { monthly: 1499, yearly: 14999 },
      description: 'EssentialITservicesforsmallbusinesses',
      features: [
        'Basicwebdevelopment',
        'Cloudsetup',
        'Emailsupport',
        'Monthlymaintenance',
        'Standardsecurity'
      ],
      popular: false,
      category: 'it'
    },
    {
      name: 'ITProfessional',
      price: { monthly: 3999, yearly: 39999 },
      description: 'ComprehensiveITsolutionsforgrowingcompanies',
      features: [
        'Full-stackdevelopment',
        'Cloudmigration',
        'Prioritysupport',
        '24/7 monitoring',
        'Advancedsecurity',
        'DevOpsautomation',
        'Databasemanagement'
      ],
      popular: true,
      category: 'it'
    },
    {
      name: 'ITEnterprise',
      price: { monthly: 7999, yearly: 79999 },
      description: 'CompleteITtransformationforlargeenterprises',
      features: [
        'Customenterprisesolutions',
        'Multi-cloudarchitecture',
        'Dedicatedteam',
        '24/7 phonesupport',
        'Enterprisesecurity',
        'Customintegrations',
        'SLAguarantee'
      ],
      popular: false,
      category: 'it'
    }
  ];
  constmicroSaasPricing = [
    {
      name: 'MicroSAASStarter',
      price: { monthly: 99, yearly: 999 },
      description: 'Essentialbusinesstoolsforstartups',
      features: [
        'Upto 5 users',
        'Basicanalytics',
        'Emailsupport',
        'Standardtools',
        '1 GBstorage'
      ],
      popular: false,
      category: 'saas'
    },
    {
      name: 'MicroSAASProfessional',
      price: { monthly: 299, yearly: 2999 },
      description: 'Advancedtoolsforgrowingbusinesses',
      features: [
        'Upto 25 users',
        'Advancedanalytics',
        'Prioritysupport',
        'Alltoolsincluded',
        '10 GBstorage',
        'Customworkflows',
        'APIaccess'
      ],
      popular: true,
      category: 'saas'
    },
    {
      name: 'MicroSAASEnterprise',
      price: { monthly: 599, yearly: 5999 },
      description: 'Completebusinessautomationsuite',
      features: [
        'Unlimitedusers',
        'AI-poweredinsights',
        '24/7 phonesupport',
        'Customtools',
        'Unlimitedstorage',
        'Advancedautomation',
        'Dedicatedmanager'
      ],
      popular: false,
      category: 'saas'
    }
  ];
  constaddOns = [
    {
      name: 'AIContentGeneration',
      price: { monthly: 199, yearly: 1999 },
      description: 'AdvancedAI-poweredcontentcreation',
      features: ['Blogwriting', 'Socialmediaposts', 'Emailcampaigns', 'SEOoptimization']
    },
    {
      name: 'AdvancedAnalytics',
      price: { monthly: 299, yearly: 2999 },
      description: 'Deepbusinessintelligenceandinsights',
      features: ['Customdashboards', 'Predictiveanalytics', 'Real-timereporting', 'Datavisualization']
    },
    {
      name: 'PrioritySupport',
      price: { monthly: 199, yearly: 1999 },
      description: '24/7 prioritysupportandfasterresponsetimes',
      features: ['Phonesupport', 'Fasterresponse', 'Dedicatedsupport', 'SLAguarantee']
    },
    {
      name: 'CustomIntegration',
      price: { monthly: 499, yearly: 4999 },
      description: 'Customintegrationswithyourexistingsystems',
      features: ['APIdevelopment', 'Customconnectors', 'Datamigration', 'Ongoingmaintenance']
    }
  ];
  constfaqs = [
    {
      question: 'Whatisincludedinthefreetrial?',
      answer: 'OurfreetrialincludesaccesstoallfeaturesoftheProfessionalplanfor 14 days. Nocreditcardrequired.'
    },
    {
      question: 'CanIchangemyplananytime?',
      answer: 'Yes, youcanupgradeordowngradeyourplanatanytime. Changestakeeffectimmediately.'
    },
    {
      question: 'Doyouoffercustompricingforlargeorganizations?',
      answer: 'Yes, weoffercustomenterprisepricingfororganizationswithspecificneeds. Contactusforacustomquote.'
    },
    {
      question: 'Whatpaymentmethodsdoyouaccept?',
      answer: 'Weacceptallmajorcreditcards, PayPal, andbanktransfersforannualplans.'
    },
    {
      question: 'Isthereasetupfee?',
      answer: 'Nosetupfeesforanyofourplans. Youonlypaythemonthlyorannualsubscriptionfee.'
    },
    {
      question: 'WhathappensifIexceedmyusagelimits?',
      answer: 'Wewillnotifyyoubeforeyoureachyourlimitsandofferoptionstoupgradeorpurchaseadditionalcapacity.'
    }
  ];
  constformatPrice = (price: number) => {
    returnnewIntl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0
    }).format(price);
  };

  constgetSavings = (monthly: number, yearly: number) => {
    constmonthlyTotal = monthly * 12;
    constsavings = monthlyTotal - yearly;
    returnMath.round((savings / monthlyTotal) * 100);
  };

  return (
    <>
    <>
      <Helmet>
        <title>5GDataAnalytics - ZionTechGroup</title>
        <metaname="description" content="Professional 5GdataanalyticsservicesbyZionTechGroup. Transformyourbusinesswithourexpertsolutions." />
      </Helmet>
        <title>Pricing - ZionTechGroup | TransparentAI & ITSolutionsPricing</title>
        <metaconstname = "description" content="TransparentpricingforAIservices, ITsolutions, andmicroSAAStools. Choosetheplanthatfitsyourbusinessneedswith 14-dayfreetrials." / / />
        <metaname="keywords" content="pricing, AIservicespricing, ITservicespricing, microSAASpricing, businesssolutions" / / />
        <linkrel="canonical" href="https://ziontechgroup.com/pricing" />
      </Helmet>
    </>

      <divclassName="m in-h-screenbg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900">
        {/* HeroSection */}
    <>
        <sectionclassName="r e lativepy-20px-4overflow-hidden" />
          <divclassName="a b soluteinset-0bg-[radial-gradient(circle_at_20%_80%,rgba(168,85,247,0.4)_0%,transparent_50%)]animate-pulse" />
          <divclassName="a b soluteinset-0bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.4)_0%,transparent_50%)]animate-pulse" style="{{" animationDelay: '1 s' }} / />
          <divclassName="r e lativemax-w-7xlmx-autotext-center">
            <divclassName="i n line-flexitems-centerspace-x-2 bg-gradient-to-rfrom-cyan-500/20 to-purple-500/20 text-cyan-400 px-6 py-3 rounded-fulltext-smfont-mediummb-8borderborder-cyan-400/30">
              <DollarSignclassName="w-4h-4" />
              <span   />TransparentPricing</span>
            </div>
    </>
            
            <h1 className="t e xt-4xlsm:text-6 xlmd:text-7 xlfont-boldtext-whitemb-8leading-tight" />
              Simple, Transparent{' '}
    <>
              <spanclassName="b g-gradient-to-rfrom-cyan-400 via-purple-400 to-pink-400bg-clip-texttext-transparent">Pricing
              </span>
            </h1>
    </>
            
            <pclassName="t e xt-lgsm:text-xlmd:text-2 xltext-gray-300 mb-12 max-w-4 xlmx-autoleading-relaxed">Choosetheplanthatfitsyourbusinessneeds. Allplansinclude 14-dayfreetrialsandnosetupfees.</p>
            {/* BillingToggle */}
            <divclassName="f l exitems-centerjustify-centerspace-x-4mb-12">
              <spanclassName="{`t e xt-lg" ${billingCycle === 'monthly' ? 'text-white' : 'text-gray-400'}`}  />Monthly
              </span>
    </>
              <buttononClick="{()" = /> setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')}
                className="r e lativeinline-flexh-6 w-11 items-centerrounded-fullbg-gray-600 transition-colorsfocus:outline-nonefocus:ring-2focus:ring-cyan-500focus:ring-offset-2">
                <spanclassName="{`i n line-block" h-4 w-4 transformrounded-fullbg-whitetransition-transform ${
                    billingCycle === 'yearly' ? 'translate-x-6' : 'translate-x-1'
                  }`}
                / />
    <>
              </button>
              <spanclassName="{`t e xt-lg" ${billingCycle === 'yearly' ? 'text-white' : 'text-gray-400'}`}>Yearly
              </span>
    </>
              {billingCycle === 'yearly' && (
    <>
                <spanclassName="b g-green-500 text-whitepx-3 py-1 rounded-fulltext-smfont-semibold">Saveupto 20%
                </span>
    </>
              )}
    <>
            </div>
        </section>
    </>

        {/* AIServicesPricing */}
    <>
        <sectionclassName="p y-20px-4relative" />
          <divclassName="r e lativemax-w-7xlmx-auto">
            <divclassName="t e xt-centermb-16">
              <h2 className="t e xt-4xlmd:text-5 xlfont-boldtext-whitemb-6" />
                <spanclassName="b g-gradient-to-rfrom-cyan-400 to-purple-400bg-clip-texttext-transparent"   />AIServices</span> Pricing
              </h2>
              <pclassName="t e xt-xltext-gray-300 max-w-3xlmx-auto">Advancedartificialintelligencesolutionsforeverybusinesssize</p>
            </div>
    </>

            <divclassName="g r idgrid-cols-1md:grid-cols-3gap-8">
              {aiServicesPricing.map((plan, index) => (
                <divkey="{index}" className="{`b g-white/10" backdrop-blur-lgrounded-2 xlp-8 borderborder-white/20 hover: bg-white/20 transition-allduration-300 relative ${plan.popular ? 'ring-2 ring-cyan-400 scale-105' : ''}`} />
                  {plan.popular && (
                    <divclassName="a b solute -top-3 left-1/2transform-translate-x-1/2">
                      <spanclassName="b g-gradient-to-rfrom-cyan-500 to-purple-600 text-whitepx-4 py-1 rounded-fulltext-smfont-semibold"  />MostPopular
                      </span>
                    </div>
    </>
                  )}
                  
                  <divclassName="t e xt-centermb-8">
                    <divclassName="w-16 h-16 b g-gradient-to-rfrom-cyan-500 to-purple-600 rounded-2 xlflexitems-centerjustify-centermx-automb-4">
                      <BrainclassName="w-8h-8t e xt-white" />
                    </div>
                    <h3 className="t e xt-2 xlfont-boldtext-whitemb-2"   />{plan.name}</h3>
                    <pclassName="t e xt-gray-400mb-4">{plan.description}</p>
                    <divclassName="t e xt-4xlfont-boldtext-whitemb-2">
                      {formatPrice(billingCycle === 'monthly' ? plan.price.monthly : plan.price.yearly)}
    <>
                      <spanclassName="t e xt-lgtext-gray-400">/{billingCycle === 'monthly' ? 'month' : 'year'}</span>
                    </div>
    </>
                    {billingCycle === 'yearly' && (
    <>
                      <divclassName="t e xt-green-400text-smfont-semibold">Save {getSavings(plan.price.monthly, plan.price.yearly)}%
                      </div>
    </>
                    )}
                  </div>
                  <ulclassName="s p ace-y-4mb-8" />
                    {plan.features.map((feature, featureIndex) => (
    <>
                      <likey="{featureIndex}" className="f l exitems-centerspace-x-3text-gray-300" />
                        <CheckCircleclassName="w-5 h-5t e xt-green-400flex-shrink-0" />
                        <span   />{feature}</span>
                      </li>
    </>
                    ))}
                  </ul>
                  <Linkto="/contact"
                    className="{`b l ock" w-fulltext-centerpy-3 rounded-lgfont-semiboldtransition-allduration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-rfrom-cyan-500 to-purple-600 text-whitehover:from-cyan-600 hover:to-purple-700'
                        : 'borderborder-cyan-400 text-cyan-400 hover: bg-cyan-400 hover:text-gray-900'
                    }`}
                    />StartFreeTrial
    <>
                  </Link>
                </div>
    </>
              ))}
    <>
            </div>
        </section>
    </>

        {/* ITServicesPricing */}
    <>
        <sectionclassName="p y-20px-4relative" />
          <divclassName="r e lativemax-w-7xlmx-auto">
            <divclassName="t e xt-centermb-16">
              <h2 className="t e xt-4xlmd:text-5 xlfont-boldtext-whitemb-6" />
                <spanclassName="b g-gradient-to-rfrom-emerald-400 to-blue-400bg-clip-texttext-transparent"   />ITServices</span> Pricing
              </h2>
              <pclassName="t e xt-xltext-gray-300 max-w-3xlmx-auto">Comprehensivetechnologysolutionsformodernbusinesses</p>
            </div>
    </>

            <divclassName="g r idgrid-cols-1md:grid-cols-3gap-8">
              {itServicesPricing.map((plan, index) => (
                <divkey="{index}" className="{`b g-white/10" backdrop-blur-lgrounded-2 xlp-8 borderborder-white/20 hover: bg-white/20 transition-allduration-300 relative ${plan.popular ? 'ring-2 ring-emerald-400 scale-105' : ''}`} />
                  {plan.popular && (
                    <divclassName="a b solute -top-3 left-1/2transform-translate-x-1/2">
                      <spanclassName="b g-gradient-to-rfrom-emerald-500 to-blue-600 text-whitepx-4 py-1 rounded-fulltext-smfont-semibold"  />MostPopular
                      </span>
                    </div>
    </>
                  )}
                  
                  <divclassName="t e xt-centermb-8">
                    <divclassName="w-16 h-16 b g-gradient-to-rfrom-emerald-500 to-blue-600 rounded-2 xlflexitems-centerjustify-centermx-automb-4">
                      <SettingsclassName="w-8h-8t e xt-white" />
                    </div>
                    <h3 className="t e xt-2 xlfont-boldtext-whitemb-2"   />{plan.name}</h3>
                    <pclassName="t e xt-gray-400mb-4">{plan.description}</p>
                    <divclassName="t e xt-4xlfont-boldtext-whitemb-2">
                      {formatPrice(billingCycle === 'monthly' ? plan.price.monthly : plan.price.yearly)}
    <>
                      <spanclassName="t e xt-lgtext-gray-400">/{billingCycle === 'monthly' ? 'month' : 'year'}</span>
                    </div>
    </>
                    {billingCycle === 'yearly' && (
    <>
                      <divclassName="t e xt-green-400text-smfont-semibold">Save {getSavings(plan.price.monthly, plan.price.yearly)}%
                      </div>
    </>
                    )}
                  </div>
                  <ulclassName="s p ace-y-4mb-8" />
                    {plan.features.map((feature, featureIndex) => (
    <>
                      <likey="{featureIndex}" className="f l exitems-centerspace-x-3text-gray-300" />
                        <CheckCircleclassName="w-5 h-5t e xt-green-400flex-shrink-0" />
                        <span   />{feature}</span>
                      </li>
    </>
                    ))}
                  </ul>
                  <Linkto="/contact"
                    className="{`b l ock" w-fulltext-centerpy-3 rounded-lgfont-semiboldtransition-allduration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-rfrom-emerald-500 to-blue-600 text-whitehover:from-emerald-600 hover:to-blue-700'
                        : 'borderborder-emerald-400 text-emerald-400 hover: bg-emerald-400 hover:text-gray-900'
                    }`}
                    />StartFreeTrial
    <>
                  </Link>
                </div>
    </>
              ))}
    <>
            </div>
        </section>
    </>

        {/* MicroSAASPricing */}
    <>
        <sectionclassName="p y-20px-4relative" />
          <divclassName="r e lativemax-w-7xlmx-auto">
            <divclassName="t e xt-centermb-16">
              <h2 className="t e xt-4xlmd:text-5 xlfont-boldtext-whitemb-6" />
                <spanclassName="b g-gradient-to-rfrom-purple-400 to-pink-400bg-clip-texttext-transparent"   />MicroSAAS</span> Pricing
              </h2>
              <pclassName="t e xt-xltext-gray-300 max-w-3xlmx-auto">Ready-to-usebusinesstoolswithAI-poweredfeatures</p>
            </div>
    </>

            <divclassName="g r idgrid-cols-1md:grid-cols-3gap-8">
              {microSaasPricing.map((plan, index) => (
                <divkey="{index}" className="{`b g-white/10" backdrop-blur-lgrounded-2 xlp-8 borderborder-white/20 hover: bg-white/20 transition-allduration-300 relative ${plan.popular ? 'ring-2 ring-purple-400 scale-105' : ''}`} />
                  {plan.popular && (
                    <divclassName="a b solute -top-3 left-1/2transform-translate-x-1/2">
                      <spanclassName="b g-gradient-to-rfrom-purple-500 to-pink-600 text-whitepx-4 py-1 rounded-fulltext-smfont-semibold"  />MostPopular
                      </span>
                    </div>
    </>
                  )}
                  
                  <divclassName="t e xt-centermb-8">
                    <divclassName="w-16 h-16 b g-gradient-to-rfrom-purple-500 to-pink-600 rounded-2 xlflexitems-centerjustify-centermx-automb-4">
                      <ZapclassName="w-8h-8t e xt-white" />
                    </div>
                    <h3 className="t e xt-2 xlfont-boldtext-whitemb-2"   />{plan.name}</h3>
                    <pclassName="t e xt-gray-400mb-4">{plan.description}</p>
                    <divclassName="t e xt-4xlfont-boldtext-whitemb-2">
                      {formatPrice(billingCycle === 'monthly' ? plan.price.monthly : plan.price.yearly)}
    <>
                      <spanclassName="t e xt-lgtext-gray-400">/{billingCycle === 'monthly' ? 'month' : 'year'}</span>
                    </div>
    </>
                    {billingCycle === 'yearly' && (
    <>
                      <divclassName="t e xt-green-400text-smfont-semibold">Save {getSavings(plan.price.monthly, plan.price.yearly)}%
                      </div>
    </>
                    )}
                  </div>
                  <ulclassName="s p ace-y-4mb-8" />
                    {plan.features.map((feature, featureIndex) => (
    <>
                      <likey="{featureIndex}" className="f l exitems-centerspace-x-3text-gray-300" />
                        <CheckCircleclassName="w-5 h-5t e xt-green-400flex-shrink-0" />
                        <span   />{feature}</span>
                      </li>
    </>
                    ))}
                  </ul>
                  <Linkto="/contact"
                    className="{`b l ock" w-fulltext-centerpy-3 rounded-lgfont-semiboldtransition-allduration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-rfrom-purple-500 to-pink-600 text-whitehover:from-purple-600 hover:to-pink-700'
                        : 'borderborder-purple-400 text-purple-400 hover: bg-purple-400 hover:text-gray-900'
                    }`}
                    />StartFreeTrial
    <>
                  </Link>
                </div>
    </>
              ))}
    <>
            </div>
        </section>
    </>

        {/* Add-onsSection */}
    <>
        <sectionclassName="p y-20px-4relative" />
          <divclassName="r e lativemax-w-7xlmx-auto">
            <divclassName="t e xt-centermb-16">
              <h2 className="t e xt-4xlmd:text-5 xlfont-boldtext-whitemb-6" />
                Additional <spanclassName="b g-gradient-to-rfrom-cyan-400 to-purple-400bg-clip-texttext-transparent"   />Services</span>
              </h2>
              <pclassName="t e xt-xltext-gray-300 max-w-3xlmx-auto">Enhanceyourplanwiththesepowerfuladd-ons</p>
            </div>
    </>

            <divclassName="g r idgrid-cols-1 md:grid-cols-2lg:grid-cols-4gap-8">
              {addOns.map((addon, index) => (
    <>
                <divkey="{index}" className="b g-white/10 backdrop-blur-lgrounded-2 xlp-6 borderborder-white/20 hover:bg-white/20transition-allduration-300" />
                  <h3 className="t e xt-xlfont-boldtext-whitemb-2"   />{addon.name}</h3>
                  <pclassName="t e xt-gray-400mb-4text-sm">{addon.description}</p>
                  <divclassName="t e xt-2 xlfont-boldtext-cyan-400mb-4">
                    {formatPrice(billingCycle === 'monthly' ? addon.price.monthly : addon.price.yearly)}
    <>
                    <spanclassName="t e xt-smtext-gray-400">/{billingCycle === 'monthly' ? 'month' : 'year'}</span>
                  </div>
                  <ulclassName="s p ace-y-2mb-6" />
    </>
                    {addon.features.map((feature, featureIndex) => (
    <>
                      <likey="{featureIndex}" className="f l exitems-centerspace-x-2text-gray-300text-sm" />
                        <CheckCircleclassName="w-4 h-4t e xt-green-400flex-shrink-0" />
                        <span   />{feature}</span>
                      </li>
    </>
                    ))}
    <>
                  </ul>
                  <Linkto="/contact" className="b l ockw-fulltext-centerpy-2 rounded-lgfont-semiboldborderborder-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-gray-900transition-allduration-300">AddtoPlan
                  </Link>
                </div>
    </>
              ))}
    <>
            </div>
        </section>
    </>

        {/* FAQSection */}
    <>
        <sectionclassName="p y-20px-4relative" />
          <divclassName="r e lativemax-w-4xlmx-auto">
            <divclassName="t e xt-centermb-16">
              <h2 className="t e xt-4xlmd:text-5 xlfont-boldtext-whitemb-6" />
                FrequentlyAsked <spanclassName="b g-gradient-to-rfrom-cyan-400 to-purple-400bg-clip-texttext-transparent"   />Questions</span>
              </h2>
              <pclassName="t e xt-xltext-gray-300">Everythingyouneedtoknowaboutourpricingandservices</p>
            </div>
    </>

            <divclassName="s p ace-y-6">
              {faqs.map((faq, index) => (
    <>
                <divkey="{index}" className="b g-white/10 backdrop-blur-lgrounded-2 xlp-6borderborder-white/20" />
                  <h3 className="t e xt-xlfont-boldtext-whitemb-3"   />{faq.question}</h3>
                  <pclassName="t e xt-gray-300leading-relaxed">{faq.answer}</p>
                </div>
    </>
              ))}
    <>
            </div>
        </section>
    </>

        {/* CTASection */}
    <>
        <sectionclassName="p y-20px-4" />
          <divclassName="m a x-w-7xlmx-auto">
            <divclassName="b g-gradient-to-rfrom-cyan-900/50 to-purple-900/50 backdrop-blur-smborderborder-cyan-500/20 rounded-2 xlp-12 text-centerrelativeoverflow-hidden">
              <divclassName="a b soluteinset-0 bg-gradient-to-rfrom-cyan-500/5to-purple-500/5" />
              <divclassName="r e lativez-10">
                <h2 className="t e xt-4xlfont-boldtext-whitemb-6"  />ReadytoGetStarted?
                </h2>
                <pclassName="t e xt-xltext-gray-300 mb-8 max-w-2xlmx-auto">StartyourfreetrialtodayandexperiencethepowerofourAIandITsolutions.</p>
                <divclassName="f l exflex-colsm:flex-rowgap-4justify-center">
                  <Linkto="/contact" className="b g-gradient-to-rfrom-cyan-500 to-purple-500 text-whitepx-8 py-4 rounded-lgfont-semiboldtext-lghover:from-cyan-600 hover:to-purple-600 transition-allduration-300 transformhover:scale-105shadow-lghover:shadow-cyan-500/25">StartFreeTrial
                  </Link>
                  <Linkto="/contact" className="b o rderborder-cyan-500 text-cyan-400 px-8 py-4 rounded-lgfont-semiboldtext-lghover:bg-cyan-500/10 transition-allduration-300transformhover:scale-105">ContactSales
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

exportdefaultPricingPage;
    </>
