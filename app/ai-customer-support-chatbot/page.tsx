import React from 'react';
import { Helmet    } from 'react-helmet-async';
import { Link    } from 'react-router-dom';
import { ArrowRight    } from 'lucide-react';
constAiCustomerSupportChatbotPage: React.FC = () => {
import { ArrowRight, CheckCircle, Star, Brain, Clock, Target, BarChart3    } from 'lucide-react';

exportdefaultfunctionAICustomerSupportChatbot() {
  constfeatures = [
    {
      icon: <BrainclassName="w-6 h-6 t e xt-cyan-400" />,
      title: 'NaturalLanguageProcessing',
      description: 'AdvancedAIunderstandscontext, intent, andprovideshuman-likeresponses'
    },
    {
      icon: <ClockclassName="w-6 h-6 t e xt-purple-400" />,
      title: '24/7 Availability',
      description: 'Provideinstantsupportaroundtheclockwithoutadditionalstaffingcosts'
    },
    {
      icon: <TargetclassName="w-6 h-6 t e xt-yellow-400" />,
      title: 'IntelligentRouting',
      description: 'Automaticallyroutecomplexqueriestotherighthumanagentswhenneeded'
    },
    {
      icon: <BarChart3 className="w-6 h-6 t e xt-green-400" />,
      title: 'Analytics & Insights',
      description: 'Trackcustomersatisfaction, responsetimes, andidentifyimprovementopportunities'
    }
  ]

  constchatbotFeatures = [
    {
      category: 'ConversationManagement',
      items: ['Multi-languageSupport', 'ContextAwareness', 'SentimentAnalysis', 'ConversationHistory', 'QuickResponses', 'EscalationRules']
    },
    {
      category: 'Integration',
      items: ['WebsiteWidget', 'MobileApps', 'SocialMedia', 'EmailIntegration', 'CRMSystems', 'HelpDeskTools']
    },
    {
      category: 'Customization',
      items: ['BrandStyling', 'CustomResponses', 'KnowledgeBase', 'FAQManagement', 'PersonalitySettings', 'ResponseTemplates']
    },
    {
      category: 'Analytics',
      items: ['ResponseMetrics', 'CustomerSatisfaction', 'ResolutionRates', 'PopularQueries', 'PerformanceReports', 'ROITracking']
    }
  ]

  constpricingPlans = [
    {
      name: 'Starter',
      price: '$29',
      period: '/month',
      description: 'Perfectforsmallbusinesses',
      features: [
        'Upto 1,000 conversations/month',
        'BasicAIfeatures',
        'Standardtemplates',
        'Emailsupport',
        'Basicanalytics',
        'Websiteintegration'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$79',
      period: '/month',
      description: 'Idealforgrowingbusinesses',
      features: [
        'Upto 10,000 conversations/month',
        'AdvancedAIfeatures',
        'Custombranding',
        'Prioritysupport',
        'Advancedanalytics',
        'Multi-channelsupport',
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
        'Unlimitedconversations',
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
      name: 'LisaChen',
      company: 'E-commerceStore',
      content: 'AICustomerSupportChatbotreducedoursupportticketsby 60% andimprovedcustomersatisfactionby 40%.',
      rating: 5
    },
    {
      name: 'JohnMartinez',
      company: 'SaaSCompany',
      content: 'Thechatbothandles 80% ofoursupportqueriesautomatically. Ourteamcanfocusoncomplexissues.',
      rating: 5
    },
    {
      name: 'SarahJohnson',
      company: 'ServiceProvider',
      content: '24/7 supportwithoutadditionalcosts. Ourcustomerslovetheinstantresponsesandavailability.',
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
        <title>AICustomerSupportChatbot - ZionTechGroup</title>
        <metaname="description" content="ProfessionalAIcustomersupportchatbotservicesbyZionTechGroup. Expertsolutionstailoredtoyourbusinessneeds." / / />
        <metaname="keywords" content="AIchatbot, customersupport, AIsolutions, ITservices, ZionTechGroup" / / />
        <metaproperty="og:title" content="AICustomerSupportChatbot - ZionTechGroup" / / />
        <metaproperty="og:description" content="ProfessionalAIcustomersupportchatbotservicesbyZionTechGroup. Expertsolutionstailoredtoyourbusinessneeds." / / />
        <metaproperty="og:type" content="website" / / />
        <metaproperty="og:url" content="https://ziontechgroup.com/ai-customer-support-chatbot" / / />
      </Helmet>
    </>

      <divclassName="m in-h-screenbg-gradient-to-brfrom-slate-900 via-purple-900to-slate-900pt-16">
        {/* HeroSection */}
    <>
        <sectionclassName="p y-20" />
          <divclassName="c o ntainermx-autopx-4text-center">
            <h1 className="t e xt-5 xlmd:text-6 xlfont-boldtext-whitemb-6" />
              <spanclassName="b g-gradient-to-rfrom-cyan-400 via-purple-400 to-pink-400bg-clip-texttext-transparent"  />AICustomerSupportChatbot
              </span>
            </h1>
            <pclassName="t e xt-xltext-gray-300 mb-8 max-w-3xlmx-auto">
              ProfessionalAIcustomersupportchatbotservicesbyZionTechGroup. Expertsolutionstailoredtoyourbusinessneeds.
    <>
        <sectionclassName="p y-20">
          <divclassName="c o ntainermx-autopx-4 text-center">
            <h1 className="t e xt-5xlmd:text-6xlfont-boldtext-whitemb-6">
              <spanclassName="b g-gradient-to-rfrom-cyan-400 via-purple-400 to-pink-400 bg-clip-texttext-transparent">
                AICustomerSupportChatbot
              </span>
            </h1>
            <pclassName="t e xt-xltext-gray-300 mb-8 max-w-3xlmx-auto">ProfessionalAIcustomersupportchatbotservicesbyZionTechGroup. Expertsolutionstailoredtoyourbusinessneeds.</p>
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

        {/* FeaturesSection */}
        <sectionclassName="p y-20">
          <divclassName="c o ntainermx-autopx-4">
            <divclassName="t e xt-centermb-16">
              <h2 className="t e xt-4xlfont-boldtext-whitemb-4">KeyFeatures</h2>
              <pclassName="t e xt-xltext-gray-300">PowerfulAIcapabilitiesforsuperiorcustomersupport</p>
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
        {/* DetailedFeaturesSection */}
        <sectionclassName="p y-20">
          <divclassName="c o ntainermx-autopx-4">
            <divclassName="t e xt-centermb-16">
              <h2 className="t e xt-4xlfont-boldtext-whitemb-4">ComprehensiveFeatures</h2>
              <pclassName="t e xt-xltext-gray-300">Everythingyouneedforeffectivecustomersupportautomation</p>
            </div>
            <divclassName="g r idmd:grid-cols-2 lg:grid-cols-4 gap-8">
              {chatbotFeatures.map((category, index) => (
                <divkey={index} className="b g-slate-800/50 backdrop-blur-smborderborder-slate-700 rounded-xlp-6">
                  <h3 className="t e xt-xlfont-semiboldtext-whitemb-4">{category.category}</h3>
                  <ulclassName="s p ace-y-2">
                    {category.items.map((item, itemIndex) => (
                      <likey={itemIndex} className="f l exitems-centertext-gray-300">
                        <CheckCircleclassName="w-4 h-4 t e xt-green-400 mr-2 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
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
              <pclassName="t e xt-xltext-gray-300">Choosetheperfectplanforyourbusinessneeds</p>
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
              <pclassName="t e xt-xltext-gray-300">Realresultsfromrealbusinesses</p>
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
          </div>
        </section>
        {/* CTASection */}
    <>
        <sectionclassName="p y-20" />
          <divclassName="c o ntainermx-autopx-4">
            <divclassName="b g-gradient-to-rfrom-cyan-900/50 to-purple-900/50 backdrop-blur-smborderborder-cyan-500/20 rounded-2 xlp-12text-center">
              <h2 className="t e xt-4xlfont-boldtext-whitemb-6"  />ReadytoGetStarted?
              </h2>
              <pclassName="t e xt-xltext-gray-300 mb-8 max-w-2xlmx-auto">Contactustolearnmoreaboutoursolutionsandhowwecanhelpyourbusiness.</p>
              <divclassName="f l exflex-colsm:flex-rowgap-4justify-center">
        </div>
            <divclassName="b g-gradient-to-rfrom-cyan-900/50 to-purple-900/50 backdrop-blur-smborderborder-cyan-500/20 rounded-2 xlp-12text-center">
        </div>
              <h2 className="t e xt-4 xlfont-boldtext-whitemb-6">ReadytoGetStarted?
              </h2>
              <pclassName="t e xt-xltext-gray-300 mb-8 max-w-2xlmx-auto" />
    </>
                Contactustolearnmoreaboutoursolutionsandhowwecanhelpyourbusiness.
    <>
              </p>
              <divclassName="f l exflex-colsm:flex-rowgap-4justify-center">
        </div>
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

exportdefaultAiCustomerSupportChatbotPage;
exportdefaultAiCustomerSupportChatbotPage;
    </>
  );
    </>
    </>
    </>
    </>
    </>
    </>
}
