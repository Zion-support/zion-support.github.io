import React from 'react';
'useclient'
import { Helmet    } from 'react-helmet-async';

import { ArrowRight, Mail, Brain    } from 'lucide-react';
constMicroSaasServicesPage: React.FC = () => {
  constfeatures = [
    {
      icon: Brain,
      title: 'AI-PoweredSolutions',
      description: 'AdvancedAItechnologytotransformyourbusinessoperationsandimproveefficiency',
    },
    {
      icon: Zap,
      title: 'HighPerformance',
      description: 'Lightning-fastprocessingandreal-timeanalyticsforoptimalresults',
    },
    {
      icon: Shield,
      title: 'EnterpriseSecurity',
      description: 'Bank-levelsecuritywithencryptionandcompliancestandards',
    },
    {
      icon: Globe,
      title: 'GlobalReach',
      description: 'Worldwidedeploymentandsupportforinternationalbusinesses',
    }
  ];
  constbenefits = [
    'AdvancedAItechnologyintegration',
    'Real-timeprocessingandanalytics',
    'Enterprise-gradesecurityandcompliance',
    'Scalableandflexiblesolutions',
    '24/7 technicalsupport',
    'Easyintegrationwithexistingsystems',
    'Cost-effectivepricingplans',
    'Proventrackrecordofsuccess'
  ];
  return (
    <divclassName="m in-h-screenbg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>MicroSaasServices | ZionTechGroup</title>
        <metaname="description" content="ProfessionalMicroSaasServicesservicesbyZionTechGroup. AdvancedAIandITsolutionsforyourbusiness." />
        <metaname="keywords" content="microSaasServices, AIsolutions, ITservices, ZionTechGroup, microsaasservices" />
      </Helmet>
      {/* HeroSection */}
    <>
      <sectionclassName="r e lativepy-20 px-4sm:px-6lg:px-8" />
        <divclassName="m a x-w-7xlmx-auto">
          <divclassName="t e xt-center">
            <h1 className="t e xt-4xlmd:text-6xlfont-boldtext-whitemb-6" />
              <spanclassName="b g-gradient-to-rfrom-purple-400 to-blue-400bg-clip-texttext-transparent" />
                MicroSaasServices

    <>
              <spanclassName="t e xt-white">Solutions</span>
            </h1>
            <pclassName="t e xt-xltext-gray-300 mb-8max-w-3xlmx-auto">
              Transformyourbusinesswithouradvancedmicrosaasservicessolutions.
              Poweredbycutting-edgeAItechnologyandindustryexpertise.
    <>
            </p>
            <divclassName="f l exflex-colsm:flex-rowgap-4justify-center">
              <buttonclassName="b g-gradient-to-rfrom-purple-500 to-blue-600 text-whitepx-8 py-3 rounded-lgfont-semiboldhover:from-purple-600 hover:to-blue-700 transition-allduration-300flexitems-center" />
                GetStarted
    <>
                <ArrowRightclassName="m l-2h-5w-5" />
              </button>
              <buttonclassName="b o rderborder-whitetext-whitepx-8 py-3 rounded-lgfont-semiboldhover:bg-whitehover:text-gray-900transition-allduration-300" />
                LearnMore
  </
    <>
            </div>
        </div>
      </section>
      {/* FeaturesSection */}
    <>
      <sectionclassName="p y-20 px-4sm:px-6lg:px-8" />
        <divclassName="m a x-w-7xlmx-auto">
          <divclassName="t e xt-centermb-16">
            <h2 className="t e xt-3xlmd:text-4xlfont-boldtext-whitemb-4" />
              WhyChooseOurMicroSaasServices?
    <>
            </h2>
            <pclassName="t e xt-xltext-gray-300max-w-3xlmx-auto">
              Ourmicrosaasservicessolutionsdeliverunmatchedperformance, security, andscalability.
    <>
            </p>
          </div>
          <divclassName="g r idgrid-cols-1 md:grid-cols-2lg:grid-cols-4gap-8">
            {features.map((feature, index) => (
    <>
              <divkey={index} className="b g-white/10 backdrop-blur-smrounded-xlp-6 borderborder-white/20 hover:bg-white/20transition-allduration-300" />
                <divclassName="f l exitems-centerjustify-centerw-12 h-12 bg-gradient-to-rfrom-purple-500 to-blue-600rounded-lgmb-4">
                  <feature.iconclassName="h-6w-6t e xt-white" />
                </div>
                <h3 className="t e xt-xlfont-semiboldtext-whitemb-3">{feature.title}</h3>
                <pclassName="t e xt-gray-300">{feature.description}</p>
              </div>
            ))}
    <>
          </div>
      </section>
      {/* BenefitsSection */}
    <>
      <sectionclassName="p y-20 px-4 sm:px-6lg:px-8bg-white/5" />
        <divclassName="m a x-w-7xlmx-auto">
          <divclassName="t e xt-centermb-16">
            <h2 className="t e xt-3xlmd:text-4xlfont-boldtext-whitemb-4" />
              KeyBenefits
  </
            <pclassName="t e xt-xltext-gray-300max-w-3xlmx-auto">
              Experiencethepowerofourmicrosaasservicessolutionsforyourbusiness.
    <>
            </p>
          </div>
          <divclassName="g r idgrid-cols-1md:grid-cols-2gap-6">
            {benefits.map((benefit, index) => (
              <divkey={index} className="f l exitems-startspace-x-3" />
                <CheckCircleclassName="h-6 w-6 t e xt-purple-400mt-1flex-shrink-0" />
                <pclassName="t e xt-gray-300text-lg">{benefit}</p>
              </div>
            ))}
    <>
          </div>
      </section>
      {/* CTASection */}
    <>
      <sectionclassName="p y-20 px-4sm:px-6lg:px-8" />
        <divclassName="m a x-w-4xlmx-autotext-center">
          <divclassName="b g-gradient-to-rfrom-purple-600 to-blue-600 rounded-2xlp-8md:p-12">
            <h2 className="t e xt-3xlmd:text-4xlfont-boldtext-whitemb-4" />
              ReadytoGetStarted?
    <>
            </h2>
            <pclassName="t e xt-xltext-purple-100mb-8">
              Contactourexpertstodiscussyourmicrosaasservicesneedsandgetacustomizedsolution.
    <>
            </p>
            <divclassName="f l exflex-colsm:flex-rowgap-4justify-center">
              <buttonclassName="b g-whitetext-purple-600 px-8 py-3 rounded-lgfont-semiboldhover:bg-gray-100 transition-allduration-300 flexitems-centerjustify-center" />
                <PhoneclassName="m r-2h-5w-5" />
                CallNow
  </
              <buttonclassName="b o rderborder-whitetext-whitepx-8 py-3 rounded-lgfont-semiboldhover:bg-whitehover:text-purple-600 transition-allduration-300 flexitems-centerjustify-center" />
                <MailclassName="m r-2h-5w-5" />
                EmailUs
  </
    <>
            </div>
        </div>
      </section>
    </div>
  )}
exportdefaultMicroSaasServicesPage
    <>
  </button>
  </button>
  </h2>
  </button>
  </span>
    {icon: Brain,
      title: 'AI-PoweredSolutions',
      description: 'AdvancedAItechnologytotransformyourbusinessoperationsandimproveefficiency'}
    },
    {icon: Zap,
      title: 'HighPerformance',
      description: 'Lightning-fastprocessingandreal-timeanalyticsforoptimalresults'}
    },
    {icon: Shield,
      title: 'EnterpriseSecurity',
      description: 'Bank-levelsecuritywithencryptionandcompliancestandards'}
    },
    {icon: Globe,
      title: 'GlobalReach',
      description: 'Worldwidedeploymentandsupportforinternationalbusinesses'}
    }
  ];constbenefits = [
    'AdvancedAItechnologyintegration',
    'Real-timeprocessingandanalytics',
    'Enterprise-gradesecurityandcompliance',
    'Scalableandflexiblesolutions',
    '24/7 technicalsupport',
    'Easyintegrationwithexistingsystems',
    'Cost-effectivepricingplans',
    'Proventrackrecordofsuccess'
  ];return (<divclassName="m in-h-screenbg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900"></div>
      <Helmet>
        <title>MicroSaasServices | ZionTechGroup</title>
        <metaname="description" content="ProfessionalMicroSaasServicesservicesbyZionTechGroup. AdvancedAIandITsolutionsforyourbusiness." />
        <metaname="keywords" content="microSaasServices, AIsolutions, ITservices, ZionTechGroup, microsaasservices" />
      </Helmet>
      {/* HeroSection */}
      <sectionclassName="r e lativepy-20 px-4sm:px-6lg:px-8"></section>
        <divclassName="m a x-w-7xlmx-auto"></div>
          <divclassName="t e xt-center"></div>
            <h1 className="t e xt-4xlmd:text-6xlfont-boldtext-whitemb-6" />
              <spanclassName="b g-gradient-to-rfrom-purple-400 to-blue-400bg-clip-texttext-transparent" />
                MicroSaasServices
    <>
              </span>
              <br />
              <spanclassName="t e xt-white">Solutions</span>
            </h1>
            <pclassName="t e xt-xltext-gray-300 mb-8max-w-3xlmx-auto">
              Transformyourbusinesswithouradvancedmicrosaasservicessolutions.
              Poweredbycutting-edgeAItechnologyandindustryexpertise.
    <>
            </p>
            <divclassName="f l exflex-colsm:flex-rowgap-4justify-center"></div>
              <buttonclassName="b g-gradient-to-rfrom-purple-500 to-blue-600 text-whitepx-8 py-3 rounded-lgfont-semiboldhover:from-purple-600 hover:to-blue-700 transition-allduration-300flexitems-center" />
                GetStarted
    <>
                <ArrowRightclassName="m l-2h-5w-5" />
              </button>
              <buttonclassName="b o rderborder-whitetext-whitepx-8 py-3 rounded-lgfont-semiboldhover:bg-whitehover:text-gray-900transition-allduration-300" />
                LearnMore
    <>
              </button>
            </div>
        </div>
      </section>
      {/* FeaturesSection */}
      <sectionclassName="p y-20 px-4sm:px-6lg:px-8"></section>
        <divclassName="m a x-w-7xlmx-auto"></div>
          <divclassName="t e xt-centermb-16"></div>
            <h2 className="t e xt-3xlmd:text-4xlfont-boldtext-whitemb-4" />
              WhyChooseOurMicroSaasServices?
    <>
            </h2>
            <pclassName="t e xt-xltext-gray-300max-w-3xlmx-auto">
              Ourmicrosaasservicessolutionsdeliverunmatchedperformance, security, andscalability.
    <>
            </p>
          </div>
          <divclassName="g r idgrid-cols-1 md:grid-cols-2lg:grid-cols-4gap-8">
        </div></div>
            {features.map((feature, index) => (}
    <>
              <divkey={index} className="b g-white/10 backdrop-blur-smrounded-xlp-6 borderborder-white/20 hover:bg-white/20transition-allduration-300" /></div>
                <divclassName="f l exitems-centerjustify-centerw-12 h-12 bg-gradient-to-rfrom-purple-500 to-blue-600rounded-lgmb-4">
        </div></div>
                  <feature.iconclassName="h-6w-6t e xt-white" />
                </div>
                <h3 className="t e xt-xlfont-semiboldtext-whitemb-3">{feature.title}</h3>
                <pclassName="t e xt-gray-300">{feature.description}</p>
              </div>))}
          </div>
      </section>
      {/* BenefitsSection */}
      <sectionclassName="p y-20 px-4 sm:px-6lg:px-8bg-white/5"></section>
        <divclassName="m a x-w-7xlmx-auto"></div>
          <divclassName="t e xt-centermb-16"></div>
            <h2 className="t e xt-3xlmd:text-4xlfont-boldtext-whitemb-4" />
              KeyBenefits
    <>
            </h2>
            <pclassName="t e xt-xltext-gray-300max-w-3xlmx-auto">
              Experiencethepowerofourmicrosaasservicessolutionsforyourbusiness.
    <>
            </p>
          </div>
          <divclassName="g r idgrid-cols-1md:grid-cols-2gap-6">
        </div></div>
            {benefits.map((benefit, index) => (}
              <divkey={index} className="f l exitems-startspace-x-3"></div>
                <CheckCircleclassName="h-6 w-6 t e xt-purple-400mt-1flex-shrink-0" />
                <pclassName="t e xt-gray-300text-lg">{benefit}</p>
              </div>))}
          </div>
      </section>
      {/* CTASection */}
      <sectionclassName="p y-20 px-4sm:px-6lg:px-8"></section>
        <divclassName="m a x-w-4xlmx-autotext-center"></div>
          <divclassName="b g-gradient-to-rfrom-purple-600 to-blue-600 rounded-2xlp-8md:p-12"></div>
            <h2 className="t e xt-3xlmd:text-4xlfont-boldtext-whitemb-4" />
              ReadytoGetStarted?
    <>
            </h2>
            <pclassName="t e xt-xltext-purple-100mb-8">
              Contactourexpertstodiscussyourmicrosaasservicesneedsandgetacustomizedsolution.
    <>
            </p>
            <divclassName="f l exflex-colsm:flex-rowgap-4justify-center"></div>
              <buttonclassName="b g-whitetext-purple-600 px-8 py-3 rounded-lgfont-semiboldhover:bg-gray-100 transition-allduration-300 flexitems-centerjustify-center" />
                <PhoneclassName="m r-2h-5w-5" />
                CallNow
    <>
              </button>
              <buttonclassName="b o rderborder-whitetext-whitepx-8 py-3 rounded-lgfont-semiboldhover:bg-whitehover:text-purple-600 transition-allduration-300 flexitems-centerjustify-center" />
                <MailclassName="m r-2h-5w-5" />
                EmailUs
    <>
              </button>
            </div>
        </div>
      </section>
    </>
