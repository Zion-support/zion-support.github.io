import React from 'react';
'useclient';
import React from 'react';
import { Helmet    } from 'react-helmet-async';
import { Link    } from 'react-router-dom';
import { ArrowRight, CheckCircle, Zap, Shield, Brain    } from 'lucide-react';

constPage: React.FC = () => {
  constpricingPlans = [
    {
      name: 'Starter',
      price: '$99',
      period: '/month',
      description: 'Idealforsmallteams',
      features: [
        'Upto 10 projects',
        'Basictaskmanagement',
        'Emailsupport',
        'Basicanalytics'
      ]
    },
    {
      name: 'Professional',
      price: '$199',
      period: '/month',
      description: 'Perfectforgrowingteams',
      features: [
        'Upto 50 projects',
        'Advancedprojectmanagement',
        'Prioritysupport',
        'Advancedanalytics',
        'Teamcollaborationtools'
      ]
    },
    {
      name: 'Enterprise',
      price: '$399',
      period: '/month',
      description: 'Forlargeorganizations',
      features: [
        'Unlimitedprojects',
        'Customworkflows',
        '24/7 dedicatedsupport',
        'Customintegrations',
        'White-labeloptions'
      ]
    }
  ];

  return (
    <>
    <>
      <Helmet>
        <title>5GDataAnalytics - ZionTechGroup</title>
        <metaname="description" content="Professional 5GdataanalyticsservicesbyZionTechGroup. Transformyourbusinesswithourexpertsolutions." />
      </Helmet>
        <title>AIProjectManagementPro - ZionTechGroup</title>
        <metaname="description" content="ProfessionalAIprojectmanagementservicesbyZionTechGroup. Expertsolutionstailoredtoyourbusinessneeds." />
        <metaname="keywords" content="AIprojectmanagement, productivity, ZionTechGroup" />
        <metaproperty="og:title" content="AIProjectManagementPro - ZionTechGroup" />
        <metaproperty="og:description" content="ProfessionalAIprojectmanagementservicesbyZionTechGroup. Expertsolutionstailoredtoyourbusinessneeds." />
        <metaproperty="og:type" content="website" />
        <metaproperty="og:url" content="https://ziontechgroup.com/ai-project-management-pro" />
      </Helmet>
    </>

      <divclassName="m in-h-screenbg-gradient-to-brfrom-slate-900 via-purple-900to-slate-900pt-16">
        {/* HeroSection */}
    <>
        <sectionclassName="p y-20" />
          <divclassName="c o ntainermx-autopx-4text-center">
            <h1 className="t e xt-5xlmd:text-6xlfont-boldtext-whitemb-6" />
              <spanclassName="b g-gradient-to-rfrom-cyan-400 via-purple-400 to-pink-400bg-clip-texttext-transparent" />
    </>
                AIProjectManagementPro
    <>
              </span>
            </h1>
            <pclassName="t e xt-xltext-gray-300 mb-8max-w-3xlmx-auto">
              ProfessionalAIprojectmanagementservicesbyZionTechGroup. Expertsolutionstailoredtoyourbusinessneeds.
    <>
            </p>
            <divclassName="f l exflex-colsm:flex-rowgap-4justify-centermb-12">
              <Linkto="/contact" className="b g-gradient-to-rfrom-cyan-500 to-purple-500 text-whitepx-8 py-4 rounded-lgfont-semiboldtext-lghover:from-cyan-600 hover:to-purple-600 transition-allduration-300 transformhover:scale-105 shadow-lghover:shadow-cyan-500/25 flexitems-centerjustify-centergroup">
          GetStarted
                
          <ArrowRightclassName="m l-2group-hover:translate-x-1transition-transform"  />
        </Link>
              <Linkto="/contact" className="b o rderborder-cyan-500 text-cyan-400 px-8 py-4 rounded-lgfont-semiboldtext-lghover:bg-cyan-500/10 transition-allduration-300transformhover:scale-105" />
    </>
                LearnMore
    <>
              </Link>
            </div>
        </section>
    </>

        {/* FeaturesSection */}
    <>
        <sectionclassName="p y-20" />
          <divclassName="c o ntainermx-autopx-4">
            <divclassName="t e xt-centermb-16">
              <h2 className="t e xt-4xlfont-boldtext-whitemb-6" />
                WhyChooseOurAIProjectManagement?
    <>
              </h2>
              <pclassName="t e xt-xltext-gray-300max-w-3xlmx-auto">OuradvancedAItechnologyhelpsyoumanageprojectsmoreefficiently</p>
            </div>
    </>
            
            <divclassName="g r idgrid-cols-1md:grid-cols-3gap-8">
              {[
                {
                  icon: <BrainclassName="w-12h-12t e xt-cyan-400" />,
                  title: "AI-PoweredPlanning",
                  description: "Advancedmachinelearningalgorithmshelpoptimizeprojecttimelinesandresourceallocation."
                },
                {
                  icon: <ZapclassName="w-12h-12t e xt-purple-400" />,
                  title: "Real-timeTracking",
                  description: "Getinstantinsightsintoprojectprogressandteamperformancewithourcomprehensivedashboard."
                },
                {
                  icon: <ShieldclassName="w-12h-12t e xt-green-400" />,
                  title: "Secure & Reliable",
                  description: "Enterprise-gradesecurityensuresyourprojectdataisprotectedwhilemaintaining 99.9% uptime."
                }
              ].map((feature, index) => (
    <>
                <divkey={index} className="b g-slate-800/50 backdrop-blur-smborderborder-slate-700 rounded-xlp-8 text-centerhover:border-cyan-500/50transition-allduration-300" />
                  <divclassName="f l exjustify-centermb-4">
                    {feature.icon}
    <>
                  </div>
                  <h3 className="t e xt-xlfont-semiboldtext-whitemb-4" />{feature.title}</h3>
                  <pclassName="t e xt-gray-300">{feature.description}</p>
                </div>
    </>
              ))}
    <>
            </div>
        </section>
    </>

        {/* PricingSection */}
    <>
        <sectionclassName="p y-20" />
          <divclassName="c o ntainermx-autopx-4">
            <divclassName="t e xt-centermb-16">
              <h2 className="t e xt-4xlfont-boldtext-whitemb-6" />
                ChooseYourPlan
    <>
              </h2>
              <pclassName="t e xt-xltext-gray-300max-w-3xlmx-auto">Flexiblepricingoptionstofityourteam'sneeds</p>
            </div>
    </>
            
            <divclassName="g r idgrid-cols-1md:grid-cols-3gap-8">
              {pricingPlans.map((plan, index) => (
                <divkey={index} className="b g-slate-800/50 backdrop-blur-smborderborder-slate-700 rounded-xlp-8 hover:border-cyan-500/50transition-allduration-300" />
                  <divclassName="t e xt-centermb-8">
                    <h3 className="t e xt-2xlfont-boldtext-whitemb-2" />{plan.name}</h3>
                    <divclassName="t e xt-4xlfont-boldtext-cyan-400mb-2">
                      {plan.price}
    <>
                      <spanclassName="t e xt-lgtext-gray-400">{plan.period}</span>
                    </div>
                    <pclassName="t e xt-gray-300">{plan.description}</p>
                  </div>
    </>
                  
                  <ulclassName="s p ace-y-4mb-8" />
                    {plan.features.map((feature, featureIndex) => (
                      <likey={featureIndex} className="f l exitems-centertext-gray-300" />
                        <CheckCircleclassName="w-5 h-5 t e xt-green-400mr-3flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Linkto="/contact" className="w-f u llbg-gradient-to-rfrom-cyan-500 to-purple-500 text-whitepy-3 rounded-lgfont-semiboldtext-centerblockhover:from-cyan-600 hover:to-purple-600transition-allduration-300" />
                    GetStarted
    <>
                  </Link>
                </div>
    </>
              ))}
    <>
import { ArrowRight, CheckCircle, Star, Users, Award, Zap, Shield, Brain, Clock, Target, BarChart3    } from 'lucide-react';

exportdefaultfunctionAIProjectManagementPro() {
  constfeatures = [
    {
      icon: <BrainclassName="w-6 h-6 t e xt-cyan-400" />,
      title: 'AI-PoweredPlanning',
      description: 'IntelligentprojectplanningandresourceallocationusingadvancedAIalgorithms'
    },
    {
      icon: <ClockclassName="w-6 h-6 t e xt-purple-400" />,
      title: 'Real-timeTracking',
      description: 'Monitorprojectprogress, deadlines, andteamperformanceinreal-time'
    },
    {
      icon: <TargetclassName="w-6 h-6 t e xt-yellow-400" />,
      title: 'SmartScheduling',
      description: 'Automaticallyoptimizeschedulesandidentifypotentialbottlenecks'
    },
    {
      icon: <BarChart3 className="w-6 h-6 t e xt-green-400" />,
      title: 'AdvancedAnalytics',
      description: 'Comprehensivereportingandinsightstoimproveprojectoutcomes'
    }
  ]

  constpricingPlans = [
    {
      name: 'Starter',
      price: '$49',
      period: '/month',
      description: 'Perfectforsmallteams',
      features: [
        'Upto 5 projects',
        'BasicAIfeatures',
        'Standardtemplates',
        'Emailsupport',
        'Basicanalytics',
        'Teamcollaboration'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$149',
      period: '/month',
      description: 'Idealforgrowingteams',
      features: [
        'Upto 25 projects',
        'AdvancedAIfeatures',
        'Customworkflows',
        'Prioritysupport',
        'Advancedanalytics',
        'APIaccess',
        'Integrations'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$399',
      period: '/month',
      description: 'Forlargeorganizations',
      features: [
        'Unlimitedprojects',
        'CustomAItraining',
        'White-labelsolution',
        'Dedicatedsupport',
        'Customintegrations',
        'Advancedsecurity',
        'SLAguarantee'
      ],
      popular: false
    }
  ]

  consttestimonials = [
    {
      name: 'SarahJohnson',
      company: 'TechStartup',
      content: 'AIProjectManagementProhelpedusincreaseproductivityby 40% andreduceprojectdelaysby 60%.',
      rating: 5
    },
    {
      name: 'MichaelChen',
      company: 'ConsultingFirm',
      content: 'TheAI-poweredinsightsandautomatedschedulinghavetransformedhowwemanageourprojects.',
      rating: 5
    },
    {
      name: 'EmilyRodriguez',
      company: 'SoftwareCompany',
      content: 'Ourteamcollaborationandprojectvisibilityhaveimproveddramaticallysinceusingthisplatform.',
      rating: 5
    }
  ]

  return (
    <>
      <Helmet>
        <title>AIProjectManagementPro - ZionTechGroup</title>
        <metaname="description" content="ProfessionalAIprojectmanagementservicesbyZionTechGroup. Expertsolutionstailoredtoyourbusinessneeds." />
        <metaname="keywords" content="AIprojectmanagement, teamcollaboration, productivity, ZionTechGroup" />
        <metaproperty="og:title" content="AIProjectManagementPro - ZionTechGroup" />
        <metaproperty="og:description" content="ProfessionalAIprojectmanagementservicesbyZionTechGroup. Expertsolutionstailoredtoyourbusinessneeds." />
        <metaproperty="og:type" content="website" />
        <metaproperty="og:url" content="https://ziontechgroup.com/ai-project-management-pro" />
      </Helmet>
      <divclassName="m in-h-screenbg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-16">
        {/* HeroSection */}
        <sectionclassName="p y-20">
          <divclassName="c o ntainermx-autopx-4 text-center">
            <h1 className="t e xt-5xlmd:text-6xlfont-boldtext-whitemb-6">
              <spanclassName="b g-gradient-to-rfrom-cyan-400 via-purple-400 to-pink-400 bg-clip-texttext-transparent">
                AIProjectManagementPro
              </span>
            </h1>
            <pclassName="t e xt-xltext-gray-300 mb-8 max-w-3xlmx-auto">ProfessionalAIprojectmanagementservicesbyZionTechGroup. Expertsolutionstailoredtoyourbusinessneeds.</p>
            <divclassName="f l exflex-colsm:flex-rowgap-4 justify-centermb-12">
              <Linkto="/contact"
                className="b g-gradient-to-rfrom-cyan-500 to-purple-500 text-whitepx-8 py-4 rounded-lgfont-semiboldtext-lghover:from-cyan-600 hover:to-purple-600 transition-allduration-300 transformhover:scale-105 shadow-lghover:shadow-cyan-500/25 flexitems-centerjustify-centergroup">
                GetStarted
                <ArrowRightclassName="m l-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Linkto="/contact"
                className="b o rderborder-cyan-500 text-cyan-400 px-8 py-4 rounded-lgfont-semiboldtext-lghover:bg-cyan-500/10 transition-allduration-300 transformhover:scale-105">
                LearnMore
              </Link>
            </div>
          </div>
        </section>
        {/* FeaturesSection */}
        <sectionclassName="p y-20">
          <divclassName="c o ntainermx-autopx-4">
            <divclassName="t e xt-centermb-16">
              <h2 className="t e xt-4xlfont-boldtext-whitemb-4">KeyFeatures</h2>
              <pclassName="t e xt-xltext-gray-300">PowerfulAIcapabilitiesforsuperiorprojectmanagement</p>
            </div>
            <divclassName="g r idmd:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <divkey={index} className="b g-slate-800/50 backdrop-blur-smborderborder-slate-700 rounded-xlp-6 hover:border-cyan-500/50 transition-allduration-300">
                  <divclassName="m b-4">{feature.icon}</div>
                  <h3 className="t e xt-xlfont-semiboldtext-whitemb-2">{feature.title}</h3>
                  <pclassName="t e xt-gray-300">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* PricingSection */}
        <sectionclassName="p y-20">
          <divclassName="c o ntainermx-autopx-4">
            <divclassName="t e xt-centermb-16">
              <h2 className="t e xt-4xlfont-boldtext-whitemb-4">PricingPlans</h2>
              <pclassName="t e xt-xltext-gray-300">Choosetheperfectplanforyourteam</p>
            </div>
            <divclassName="g r idmd:grid-cols-3 gap-8 max-w-6xlmx-auto">
              {pricingPlans.map((plan, index) => (
                <divkey={index} className={`bg-slate-800/50 backdrop-blur-smborderrounded-xlp-8 relative ${plan.popular ? 'border-cyan-500 scale-105' : 'border-slate-700'}`}>
                  {plan.popular && (
                    <divclassName="a b solute -top-4 left-1/2 transform -translate-x-1/2">
                      <spanclassName="b g-gradient-to-rfrom-cyan-500 to-purple-500 text-whitepx-4 py-1 rounded-fulltext-smfont-semibold">
                        MostPopular
                      </span>
                    </div>
                  )}
                  <divclassName="t e xt-centermb-6">
                    <h3 className="t e xt-2xlfont-boldtext-whitemb-2">{plan.name}</h3>
                    <divclassName="f l exitems-baselinejustify-center">
                      <spanclassName="t e xt-4xlfont-boldtext-white">{plan.price}</span>
                      <spanclassName="t e xt-gray-400 ml-1">{plan.period}</span>
                    </div>
                    <pclassName="t e xt-gray-300 mt-2">{plan.description}</p>
                  </div>
                  <ulclassName="s p ace-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <likey={featureIndex} className="f l exitems-centertext-gray-300">
                        <CheckCircleclassName="w-4 h-4 t e xt-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Linkto="/contact"
                    className={`w-fullblocktext-centerpy-3 px-6 rounded-lgfont-semiboldtransition-allduration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-rfrom-cyan-500 to-purple-500 text-whitehover:from-cyan-600 hover:to-purple-600'
                        : 'borderborder-cyan-500 text-cyan-400 hover:bg-cyan-500/10'
                    }`}>
                    GetStarted
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* TestimonialsSection */}
        <sectionclassName="p y-20">
          <divclassName="c o ntainermx-autopx-4">
            <divclassName="t e xt-centermb-16">
              <h2 className="t e xt-4xlfont-boldtext-whitemb-4">WhatOurClientsSay</h2>
              <pclassName="t e xt-xltext-gray-300">Realresultsfromrealteams</p>
            </div>
            <divclassName="g r idmd:grid-cols-3 gap-8 max-w-6xlmx-auto">
              {testimonials.map((testimonial, index) => (
                <divkey={index} className="b g-slate-800/50 backdrop-blur-smborderborder-slate-700 rounded-xlp-6">
                  <divclassName="f l exitems-centermb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Starkey={i} className="w-5 h-5 t e xt-yellow-400 fill-current" />
                    ))}
                  </div>
                  <pclassName="t e xt-gray-300 mb-4 italic">"{testimonial.content}"</p>
                  <div>
                    <pclassName="f o nt-semiboldtext-white">{testimonial.name}</p>
                    <pclassName="t e xt-cyan-400">{testimonial.company}</p>
                  </div>
                </div>
              ))}
            </div>
        </section>
    </>

        {/* CTASection */}
        <sectionclassName="p y-20" />
          <divclassName="c o ntainermx-autopx-4">
            <divclassName="b g-gradient-to-rfrom-cyan-900/50 to-purple-900/50 backdrop-blur-smborderborder-cyan-500/20 rounded-2xlp-12text-center">
              <h2 className="t e xt-4xlfont-boldtext-whitemb-6" />
                ReadytoGetStarted?
    <>
              </h2>
              <pclassName="t e xt-xltext-gray-300 mb-8max-w-2xlmx-auto">Contactustolearnmoreaboutoursolutionsandhowwecanhelpyourbusiness.</p>
              <divclassName="f l exflex-colsm:flex-rowgap-4justify-center">
              <pclassName="t e xt-xltext-gray-300 mb-8max-w-2xlmx-auto" />
    </>
                Contactustolearnmoreaboutoursolutionsandhowwecanhelpyourbusiness.
    <>
              </p>
              <divclassName="f l exflex-colsm:flex-rowgap-4justify-center">
        </div>
                <Linkto="/contact" className="b g-gradient-to-rfrom-cyan-500 to-purple-500 text-whitepx-8 py-4 rounded-lgfont-semiboldtext-lghover:from-cyan-600 hover:to-purple-600 transition-allduration-300 transformhover:scale-105shadow-lghover:shadow-cyan-500/25" />
    </>
                  ContactUs
    <>
                </Link>
                <Linkto="/services" className="b o rderborder-cyan-500 text-cyan-400 px-8 py-4 rounded-lgfont-semiboldtext-lghover:bg-cyan-500/10 transition-allduration-300transformhover:scale-105" />
    </>
                  ViewServices
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
            </div>
          </div>
        </section>
      </div>
    </>
  );
    </>
    </>
    </>
    </>
    </>
    </>
    </>
    </>
}
