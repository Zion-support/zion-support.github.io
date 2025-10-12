import React from 'react';
import { Helmet    } from 'react-helmet-async';
import { Link    } from 'react-router-dom';
import { ArrowRight, Brain, Shield, Zap, CheckCircle    } from 'lucide-react';

exportdefaultfunctionAICybersecuritySuitePage() {
  return (
    <divclassName="m in-h-screenbg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AICybersecuritySuite - ZionTechGroup</title>
        <metaname="description" content="ComprehensiveAI-poweredcybersecuritysuitewiththreatdetection, zerotrustsecurity, andautomatedincidentresponse." />
        <metaname="keywords" content="AIcybersecurity, threatdetection, zerotrust, securityautomation, incidentresponse" />
      </Helmet>
      {/* HeroSection */}
      <divclassName="r e lativeoverflow-hidden">
        <divclassName="m a x-w-7xlmx-autopx-4 sm:px-6 lg:px-8 py-24">
          <divclassName="t e xt-center">
            <h1 className="t e xt-4xlmd:text-6xlfont-boldtext-whitemb-6">AICybersecuritySuite</h1>
            <pclassName="t e xt-xltext-gray-300 mb-8 max-w-3xlmx-auto">ComprehensiveAI-poweredcybersecuritysolutionswithadvancedthreatdetection, 
              zerotrustsecurity, andautomatedincidentresponsecapabilities.</p>
            <divclassName="f l exflex-colsm:flex-rowgap-4 justify-center">
              <Linkto="/contact"
                className="b g-gradient-to-rfrom-blue-600 to-purple-600 text-whitepx-8 py-3 rounded-lgfont-semiboldhover:from-blue-700 hover:to-purple-700 transition-allduration-300 flexitems-centerjustify-center">
                GetStarted
                <ArrowRightclassName="w-5 h-5 m l-2" />
              </Link>
              <Linkto="/pricing"
                className="b o rderborder-cyan-400 text-cyan-400 px-8 py-3 rounded-lgfont-semiboldhover:bg-cyan-400 hover:text-slate-900 transition-allduration-300">
                ViewPricing
              </Link>
            </div>
        </div>
      {/* FeaturesSection */}
      <divclassName="p y-20">
        <divclassName="m a x-w-7xlmx-autopx-4 sm:px-6 lg:px-8">
          <divclassName="t e xt-centermb-16">
            <h2 className="t e xt-3xlmd:text-4xlfont-boldtext-whitemb-4">
              AdvancedSecurityFeatures
            </h2>
            <pclassName="t e xt-xltext-gray-300 max-w-3xlmx-auto">Protectyourorganizationwithcutting-edgeAI-poweredcybersecuritysolutions.</p>
          </div>
          <divclassName="g r idgrid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <divclassName="b g-slate-800/50 backdrop-blur-smrounded-xlp-6 borderborder-cyan-500/20 hover:border-cyan-400/40 transition-allduration-300">
              <divclassName="m b-4">
                <BrainclassName="w-8 h-8 t e xt-cyan-400" />
              </div>
              <h3 className="t e xt-xlfont-semiboldtext-whitemb-3">
                AIThreatDetection
              </h3>
              <pclassName="t e xt-gray-300 mb-4">Advancedmachinelearningalgorithmsdetectandpreventcyberthreatsinreal-time.</p>
              <ulclassName="s p ace-y-2">
                <liclassName="f l exitems-centertext-smtext-gray-300">
                  <CheckCircleclassName="w-4 h-4 t e xt-green-400 mr-2" />
                  Real-timemonitoring
                </li>
                <liclassName="f l exitems-centertext-smtext-gray-300">
                  <CheckCircleclassName="w-4 h-4 t e xt-green-400 mr-2" />
                  Behavioralanalysis
                </li>
                <liclassName="f l exitems-centertext-smtext-gray-300">
                  <CheckCircleclassName="w-4 h-4 t e xt-green-400 mr-2" />
                  Anomalydetection
                </li>
              </ul>
            </div>
            <divclassName="b g-slate-800/50 backdrop-blur-smrounded-xlp-6 borderborder-green-500/20 hover:border-green-400/40 transition-allduration-300">
              <divclassName="m b-4">
                <ShieldclassName="w-8 h-8 t e xt-green-400" />
              </div>
              <h3 className="t e xt-xlfont-semiboldtext-whitemb-3">
                ZeroTrustSecurity
              </h3>
              <pclassName="t e xt-gray-300 mb-4">Implementzerotrustarchitecturewithcontinuousverificationandaccesscontrol.</p>
              <ulclassName="s p ace-y-2">
                <liclassName="f l exitems-centertext-smtext-gray-300">
                  <CheckCircleclassName="w-4 h-4 t e xt-green-400 mr-2" />
                  Continuousverification
                </li>
                <liclassName="f l exitems-centertext-smtext-gray-300">
                  <CheckCircleclassName="w-4 h-4 t e xt-green-400 mr-2" />
                  Accesscontrol
                </li>
                <liclassName="f l exitems-centertext-smtext-gray-300">
                  <CheckCircleclassName="w-4 h-4 t e xt-green-400 mr-2" />
                  Identitymanagement
                </li>
              </ul>
            </div>
            <divclassName="b g-slate-800/50 backdrop-blur-smrounded-xlp-6 borderborder-purple-500/20 hover:border-purple-400/40 transition-allduration-300">
              <divclassName="m b-4">
                <ZapclassName="w-8 h-8 t e xt-purple-400" />
              </div>
              <h3 className="t e xt-xlfont-semiboldtext-whitemb-3">
                AutomatedResponse
              </h3>
              <pclassName="t e xt-gray-300 mb-4">AutomatedincidentresponseandthreatmitigationwithAI-powereddecisionmaking.</p>
              <ulclassName="s p ace-y-2">
                <liclassName="f l exitems-centertext-smtext-gray-300">
                  <CheckCircleclassName="w-4 h-4 t e xt-green-400 mr-2" />
                  Instantresponse
                </li>
                <liclassName="f l exitems-centertext-smtext-gray-300">
                  <CheckCircleclassName="w-4 h-4 t e xt-green-400 mr-2" />
                  Threatmitigation
                </li>
                <liclassName="f l exitems-centertext-smtext-gray-300">
                  <CheckCircleclassName="w-4 h-4 t e xt-green-400 mr-2" />
                  Recoveryautomation
                </li>
              </ul>
            </div>
        </div>
      {/* CTASection */}
      <divclassName="p y-20 bg-slate-800/30">
        <divclassName="m a x-w-4xlmx-autopx-4 sm:px-6 lg:px-8 text-center">
          <h2 className="t e xt-3xlmd:text-4xlfont-boldtext-whitemb-6">
            ReadytoSecureYourOrganization?
          </h2>
          <pclassName="t e xt-xltext-gray-300 mb-8">ProtectyourbusinesswithourcomprehensiveAI-poweredcybersecuritysuite.</p>
          <divclassName="f l exflex-colsm:flex-rowgap-4 justify-center">
            <Linkto="/contact"
              className="b g-gradient-to-rfrom-blue-600 to-purple-600 text-whitepx-8 py-3 rounded-lgfont-semiboldhover:from-blue-700 hover:to-purple-700 transition-allduration-300 flexitems-centerjustify-center">
              GetStarted
              <ArrowRightclassName="w-5 h-5 m l-2" />
            </Link>
            <Linkto="/pricing"
              className="b o rderborder-cyan-400 text-cyan-400 px-8 py-3 rounded-lgfont-semiboldhover:bg-cyan-400 hover:text-slate-900 transition-allduration-300">
              ViewPricing
            </Link>
      </div>
    </div>
  );
}
