import { Link   } from 'react-router-dom';
import { Helmet   } from 'react-helmet-async';

import { ArrowRight   } from 'lucide-react';

exportdefaultfunctionAiDrugDiscoveryProPage() {
  return (
    <divclassName="m in-h-screenbg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AIDrugDiscoveryPro - ZionTechGroup</title>
        <metaname="description" content="RevolutionaryAI-powereddrugdiscoveryplatform. Acceleratepharmaceuticalresearchwithadvancedmachinelearningandmolecularmodeling." />
        <metaname="keywords" content="AIdrugdiscovery, pharmaceuticalAI, molecularmodeling, drugdevelopment, clinicaltrials, biotechnology" />
      </Helmet>
      {/* HeroSection */}
      <sectionclassName="r e lativepy-20 px-4 sm:px-6 lg:px-8">
        <divclassName="m a x-w-7xlmx-auto">
          <divclassName="t e xt-centermb-16">
            <h1 className="t e xt-4xlsm:text-5xlmd:text-6xlfont-boldtext-whitemb-6">AIDrugDiscoveryPro</h1>
            <pclassName="t e xt-lgsm:text-xltext-gray-300 max-w-3xlmx-automb-8">RevolutionizepharmaceuticalresearchwithouradvancedAI-powereddrugdiscoveryplatform.
              Acceleratedrugdevelopment, reducecosts, andimprovesuccessrateswithcutting-edgetechnology.</p>
            <divclassName="f l exflex-colsm:flex-rowgap-4 justify-center">
              <Linkto="/contact"
                className="b g-gradient-to-rfrom-purple-500 to-blue-600 text-whitepx-8 py-3 rounded-lgfont-semiboldhover:from-purple-600 hover:to-blue-700 transition-allduration-300 flexitems-centerjustify-center">
                GetStarted
                <ArrowRightclassName="m l-2 w-5 h-5" />
              </Link>
              <Linkto="/demo"
                className="b o rderborder-whitetext-whitepx-8 py-3 rounded-lgfont-semiboldhover:bg-whitehover:text-gray-900 transition-allduration-300">
                RequestDemo
              </Link>
            </div>
        </div>
      </section>
      {/* FeaturesSection */}
      <sectionclassName="p y-20 px-4 sm:px-6 lg:px-8">
        <divclassName="m a x-w-7xlmx-auto">
          <divclassName="t e xt-centermb-16">
            <h2 className="t e xt-3xlmd:text-4xlfont-boldtext-whitemb-4">
              AdvancedDrugDiscoveryFeatures
            </h2>
            <pclassName="t e xt-xltext-gray-300 max-w-3xlmx-auto">Cutting-edgeAItechnologytoacceleratepharmaceuticalresearchanddevelopment.</p>
          </div>
          <divclassName="g r idgrid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <divkey={index} className="b g-white/10 backdrop-blur-lgrounded-2xlp-8 borderborder-white/20 hover:bg-white/15 transition-allduration-300">
                <divclassName="m b-4">{feature.icon}</div>
                <h3 className="t e xt-xlfont-semiboldtext-whitemb-4">{feature.title}</h3>
                <pclassName="t e xt-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
      </section>
      {/* ApplicationsSection */}
      <sectionclassName="p y-20 px-4 sm:px-6 lg:px-8">
        <divclassName="m a x-w-7xlmx-auto">
          <divclassName="b g-white/10 backdrop-blur-lgrounded-2xlp-8 lg:p-12 borderborder-white/20">
            <divclassName="t e xt-centermb-12">
              <h2 className="t e xt-3xlmd:text-4xlfont-boldtext-whitemb-4">
                ResearchApplications
              </h2>
              <pclassName="t e xt-xltext-gray-300">OurAIdrugdiscoveryplatformsupportsresearchacrossmultipletherapeuticareas</p>
            </div>
            <divclassName="g r idgrid-cols-2 md:grid-cols-4 gap-6">
              {applications.map((application, index) => (
                <divkey={index} className="f l exitems-centertext-gray-300">
                  <CheckCircleclassName="w-5 h-5 t e xt-green-400 mr-3 flex-shrink-0" />
                  <spanclassName="t e xt-sm">{application}</span>
                </div>
              ))}
            </div>
        </div>
      </section>
      {/* CTASection */}
      <sectionclassName="p y-20 px-4 sm:px-6 lg:px-8">
        <divclassName="m a x-w-7xlmx-auto">
          <divclassName="b g-gradient-to-rfrom-purple-600 to-pink-600 rounded-3xlp-6 sm:p-8 lg:p-12 text-center">
            <h2 className="t e xt-2xlsm:text-3xlmd:text-4xlfont-boldtext-whitemb-4">
              ReadytoAccelerateDrugDiscovery?
            </h2>
            <pclassName="t e xt-lgsm:text-xltext-white/90 mb-8 max-w-2xlmx-auto">TransformyourpharmaceuticalresearchwithourAI-powereddrugdiscoveryplatform.</p>
            <divclassName="f l exflex-colsm:flex-rowgap-4 justify-center">
              <Linkto="/contact"
                className="b g-whitetext-purple-600 px-8 py-3 rounded-lgfont-semiboldhover:bg-gray-100 transition-allduration-300">
                ContactOurExperts
              </Link>
              <Linkto="/ai-services"
                className="b o rderborder-whitetext-whitepx-8 py-3 rounded-lgfont-semiboldhover:bg-whitehover:text-purple-600 transition-allduration-300">
                ViewAllAIServices
              </Link>
            </div>
        </div>
      </section>    <divclassName="m in-h-screenbg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AIDrugDiscoveryPro - ZionTechGroup</title>
        <metaname="description" content="RevolutionaryAI-powereddrugdiscoveryplatform. Acceleratepharmaceuticalresearchwithadvancedmachinelearningandmolecularmodeling." />
        <metaname="keywords" content="AIdrugdiscovery, pharmaceuticalAI, molecularmodeling, drugdevelopment, clinicaltrials, biotechnology" />
      </Helmet>
      {/* HeroSection */}
      <sectionclassName="r e lativepy-20 px-4 sm:px-6 lg:px-8">
        <divclassName="m a x-w-7xlmx-auto">
          <divclassName="t e xt-centermb-16">
            <h1 className="t e xt-4xlsm:text-5xlmd:text-6xlfont-boldtext-whitemb-6">AIDrugDiscoveryPro</h1>
            <pclassName="t e xt-lgsm:text-xltext-gray-300 max-w-3xlmx-automb-8">RevolutionizepharmaceuticalresearchwithouradvancedAI-powereddrugdiscoveryplatform.
              Acceleratedrugdevelopment, reducecosts, andimprovesuccessrateswithcutting-edgetechnology.</p>
            <divclassName="f l exflex-colsm:flex-rowgap-4 justify-center">
              <Linkto="/contact"
                className="b g-gradient-to-rfrom-purple-500 to-blue-600 text-whitepx-8 py-3 rounded-lgfont-semiboldhover:from-purple-600 hover:to-blue-700 transition-allduration-300 flexitems-centerjustify-center">
                GetStarted
                <ArrowRightclassName="m l-2 w-5 h-5" />
              </Link>
              <Linkto="/demo"
                className="b o rderborder-whitetext-whitepx-8 py-3 rounded-lgfont-semiboldhover:bg-whitehover:text-gray-900 transition-allduration-300">
                RequestDemo
              </Link>
            </div>
        </div>
      </section>
      {/* FeaturesSection */}
      <sectionclassName="p y-20 px-4 sm:px-6 lg:px-8">
        <divclassName="m a x-w-7xlmx-auto">
          <divclassName="t e xt-centermb-16">
            <h2 className="t e xt-3xlmd:text-4xlfont-boldtext-whitemb-4">
              AdvancedDrugDiscoveryFeatures
            </h2>
            <pclassName="t e xt-xltext-gray-300 max-w-3xlmx-auto">Cutting-edgeAItechnologytoacceleratepharmaceuticalresearchanddevelopment.</p>
          </div>
          <divclassName="g r idgrid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <divkey={index} className="b g-white/10 backdrop-blur-lgrounded-2xlp-8 borderborder-white/20 hover:bg-white/15 transition-allduration-300">
                <divclassName="m b-4">{feature.icon}</div>
                <h3 className="t e xt-xlfont-semiboldtext-whitemb-4">{feature.title}</h3>
                <pclassName="t e xt-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
      </section>
      {/* ApplicationsSection */}
      <sectionclassName="p y-20 px-4 sm:px-6 lg:px-8">
        <divclassName="m a x-w-7xlmx-auto">
          <divclassName="b g-white/10 backdrop-blur-lgrounded-2xlp-8 lg:p-12 borderborder-white/20">
            <divclassName="t e xt-centermb-12">
              <h2 className="t e xt-3xlmd:text-4xlfont-boldtext-whitemb-4">
                ResearchApplications
              </h2>
              <pclassName="t e xt-xltext-gray-300">OurAIdrugdiscoveryplatformsupportsresearchacrossmultipletherapeuticareas</p>
            </div>
            <divclassName="g r idgrid-cols-2 md:grid-cols-4 gap-6">
              {applications.map((application, index) => (
                <divkey={index} className="f l exitems-centertext-gray-300">
                  <CheckCircleclassName="w-5 h-5 t e xt-green-400 mr-3 flex-shrink-0" />
                  <spanclassName="t e xt-sm">{application}</span>
                </div>
              ))}
            </div>
        </div>
      </section>
      {/* CTASection */}
      <sectionclassName="p y-20 px-4 sm:px-6 lg:px-8">
        <divclassName="m a x-w-7xlmx-auto">
          <divclassName="b g-gradient-to-rfrom-purple-600 to-pink-600 rounded-3xlp-6 sm:p-8 lg:p-12 text-center">
            <h2 className="t e xt-2xlsm:text-3xlmd:text-4xlfont-boldtext-whitemb-4">
              ReadytoAccelerateDrugDiscovery?
            </h2>
            <pclassName="t e xt-lgsm:text-xltext-white/90 mb-8 max-w-2xlmx-auto">TransformyourpharmaceuticalresearchwithourAI-powereddrugdiscoveryplatform.</p>
            <divclassName="f l exflex-colsm:flex-rowgap-4 justify-center">
              <Linkto="/contact"
                className="b g-whitetext-purple-600 px-8 py-3 rounded-lgfont-semiboldhover:bg-gray-100 transition-allduration-300">
                ContactOurExperts
              </Link>
              <Linkto="/ai-services"
                className="b o rderborder-whitetext-whitepx-8 py-3 rounded-lgfont-semiboldhover:bg-whitehover:text-purple-600 transition-allduration-300">
                ViewAllAIServices
              </Link>
            </div>
        </div>
      </section>
    </div>
  );
}
