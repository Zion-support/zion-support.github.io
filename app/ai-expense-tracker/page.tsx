import React from 'react'
import { Receipt, ArrowRight, Bot, RotateCcw, RotateCw    } from 'lucide-react'
import { Link    } from 'react-router-dom'
  )
}
import React from 'react';
import { Helmet    } from 'react-helmet-async';
import { Link    } from 'react-router-dom';
import { ArrowRight, Shield, Brain, TrendingUp    } from 'lucide-react';

constPage: React.FC = () => {
  constfeatures = [
    {
      icon: <BrainclassName="w-12h-12t e xt-cyan-400" />,
      title: "AI-PoweredAnalysis",
      description: "AdvancedAIalgorithmsanalyzeyourspendingpatternsandprovideintelligentinsights."
    },
    {
      icon: <TrendingUpclassName="w-12h-12t e xt-purple-400" />,
      title: "Real-timeTracking",
      description: "Trackyourexpensesinreal-timewithautomaticcategorizationandsmartnotifications."
    },
    {
      icon: <ShieldclassName="w-12h-12t e xt-green-400" />,
      title: "Secure & Private",
      description: "Bank-levelsecurityensuresyourfinancialdataisprotectedandprivate."
    }
  ];

  return (
    <>
    <>
      <Helmet>
        <title>5GDataAnalytics - ZionTechGroup</title>
        <metaname="description" content="Professional 5GdataanalyticsservicesbyZionTechGroup. Transformyourbusinesswithourexpertsolutions." />
      </Helmet>
        <title>AIExpenseTracker - ZionTechGroup</title>
        <metaname="description" content="ProfessionalAIexpensetrackingservicesbyZionTechGroup. Expertsolutionstailoredtoyourbusinessneeds." />
        <metaname="keywords" content="AIexpensetracking, financialmanagement, ZionTechGroup" />
        <metaproperty="og:title" content="AIExpenseTracker - ZionTechGroup" />
        <metaproperty="og:description" content="ProfessionalAIexpensetrackingservicesbyZionTechGroup. Expertsolutionstailoredtoyourbusinessneeds." />
        <metaproperty="og:type" content="website" />
        <metaproperty="og:url" content="https://ziontechgroup.com/ai-expense-tracker" />
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
                AIExpenseTracker
    <>
              </span>
            </h1>
            <pclassName="t e xt-xltext-gray-300 mb-8max-w-3xlmx-auto">
              ProfessionalAIexpensetrackingservicesbyZionTechGroup. Expertsolutionstailoredtoyourbusinessneeds.
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
                WhyChooseOurAIExpenseTracker?
    <>
              </h2>
              <pclassName="t e xt-xltext-gray-300max-w-3xlmx-auto">OuradvancedAItechnologyhelpsyoumanageyourfinancesmoreefficiently</p>
            </div>
    </>
            
            <divclassName="g r idgrid-cols-1md:grid-cols-3gap-8">
              {features.map((feature, index) => (
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

        {/* CTASection */}
    <>
        <sectionclassName="p y-20" />
          <divclassName="c o ntainermx-autopx-4">
            <divclassName="b g-gradient-to-rfrom-cyan-900/50 to-purple-900/50 backdrop-blur-smborderborder-cyan-500/20 rounded-2xlp-12text-center">
              <h2 className="t e xt-4xlfont-boldtext-whitemb-6" />
                ReadytoGetStarted?
    <>
              </h2>
              <pclassName="t e xt-xltext-gray-300 mb-8max-w-2xlmx-auto">Contactustolearnmoreaboutoursolutionsandhowwecanhelpyourbusiness.</p>
              <divclassName="f l exflex-colsm:flex-rowgap-4justify-center">
                <Linkto="/contact" className="b g-gradient-to-rfrom-cyan-500 to-purple-500 text-whitepx-8 py-4 rounded-lgfont-semiboldtext-lghover:from-cyan-600 hover:to-purple-600 transition-allduration-300 transformhover:scale-105shadow-lghover:shadow-cyan-500/25" />
    </>
                  ContactUs
    <>
                </Link>
                <Linkto="/services" className="b o rderborder-cyan-500 text-cyan-400 px-8 py-4 rounded-lgfont-semiboldtext-lghover:bg-cyan-500/10 transition-allduration-300transformhover:scale-105" />
    </>
                  ViewAllServices
    <>
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
import React from 'react'
import { Helmet    } from 'react-helmet-async'
import { Shield, Zap, CheckCircle, ArrowRight, Star, Users, Award, Brain, Cloud    } from 'lucide-react';
import { Link    } from 'react-router-dom'

exportdefaultfunctionAIExpenseTracker() {
  return (
    <divclassName="m in-h-screenbg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
      <Helmet>
        <title>AIExpenseTracker - ZionTechGroup</title>
        <metaname="description" content="ProfessionalAIexpensetrackingservicesbyZionTechGroup. Transformyourbusinesswithourexpertsolutions." />
      </Helmet>
      <divclassName="m a x-w-7xlmx-autopx-4 sm:px-6 lg:px-8 py-16 text-center">
        <h1 className="t e xt-4xlfont-boldtext-whitemb-6">AIExpenseTracker</h1>
        <pclassName="t e xt-lgtext-gray-300 mb-8">ProfessionalAIexpensetrackingservicescomingsoon.</p>
        <Linkto="/contact"
          className="b g-gradient-to-rfrom-cyan-500 to-purple-600 text-whitepx-8 py-4 rounded-lgfont-semiboldhover:from-cyan-600 hover:to-purple-700 transition-allduration-300 flexitems-centerjustify-centermx-autow-fit">
          ContactUs
          <ArrowRightclassName="w-5 h-5 m l-2" />
        </Link>
      </div>
    </div>
  );
    </>
    </>
    </>
    </>
    </>
    </>
    </>
}
