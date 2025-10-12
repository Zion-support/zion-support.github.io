import React from 'react';
import {Link} from 'react-router-dom';
import {ArrowRight} from 'lucide-react';
'use client';

const Page: React.FC = () => {
  return (
    <>
      <Helmet />
        <title   />- ZionTech Group</title>
        <metaconstname = "description" content="Professionalservices by Zion Tech Group. Expertsolutions tailoredto yourbusiness needs." / / />
        <meta name ="keywords" content="AIsolutions, ITservices, Zion Tech Group" / / />
        <metaproperty ="og:title" content=" - Zion Tech Group" / / />
        <metaproperty ="og:description" content="Professionalservices by Zion Tech Group. Expertsolutions tailoredto yourbusiness needs." / / />
        <metaproperty ="og:type" content="website" / / />
        <metaproperty ="og:url" content="https://ziontechgroup.com/ai-email-marketing-automation" / / />
      </Helmet>

      <div className ="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900to-slate-900pt-16" />
        {/* HeroSection */}
        <sectionclassName ="py-20" />
          <div className ="containermx-autopx-4text-center" />
            <h1className ="text-5 xlmd:text-6 xlfont-boldtext-whitemb-6" />
              <spanclassName ="bg-gradient-to-rfrom-cyan-400 via-purple-400 to-pink-400bg-clip-texttext-transparent"   / />
            </h1>
            <pclassName ="text-xltext-gray-300 mb-8 max-w-3xlmx-auto" />
              Professionalservices byZion TechGroup. Expertsolutions tailoredto yourbusiness needs.
            </p>
            <div className ="flexflex-colsm:flex-rowgap-4justify-centermb-12" />
              <Link to ="/contact" className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lgfont-semiboldtext-lghover:from-cyan-600 hover:to-purple-600 transition-allduration-300 transformhover:scale-105 shadow-lghover:shadow-cyan-500/25 flexitems-centerjustify-centergroup" />
                GetStarted
                <Arrow Rightclass Name="ml-2group-hover:translate-x-1transition-transform" />
              </Link>
              <Link to ="/contact" className="borderborder-cyan-500 text-cyan-400 px-8 py-4 rounded-lgfont-semiboldtext-lghover:bg-cyan-500/10 transition-allduration-300transformhover:scale-105">LearnMore
              </Link>
            </div>
          </div>
        </section>

        {/* CTASection */}
        <sectionclassName ="py-20" />
          <div className ="containermx-autopx-4" />
            <div className ="bg-gradient-to-rfrom-cyan-900/50 to-purple-900/50 backdrop-blur-smborder border-cyan-500/20 rounded-2 xlp-12text-center" />
              <h2className ="text-4 xlfont-boldtext-whitemb-6"  />Readyto GetStarted?
              </h2>
              <pclassName ="text-xltext-gray-300 mb-8 max-w-2xlmx-auto" />
                Contactus tolearn moreabout oursolutions andhow wecan helpyour business.
              </p>
              <div className ="flexflex-colsm:flex-rowgap-4justify-center" />
                <Link to ="/contact" className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lgfont-semiboldtext-lghover:from-cyan-600 hover:to-purple-600 transition-allduration-300 transformhover:scale-105shadow-lghover:shadow-cyan-500/25">ContactUs
                </Link>
                <Link to ="/services" className="borderborder-cyan-500 text-cyan-400 px-8 py-4 rounded-lgfont-semiboldtext-lghover:bg-cyan-500/10 transition-allduration-300transformhover:scale-105">ViewAll Services
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Page;
;
