'use client';
import React from 'react';
import {Helmet} from 'react-helmet-async';
import {Link} from 'react-router-dom';
import {ArrowRight, Zap, Shield, Cloud} from 'lucide-react';

const Page: React.FC = () => {
  constfeatures = [
    {
      icon: <Cloudclass Name ="w-12h-12text-cyan-400" />,
      title: "Cloud Integration",
      description: "Seamlessly integrate with all major cloud platforms and services."
    },
    {
      icon: <Zapclass Name ="w-12h-12text-purple-400" />,
      title: "Real-time Sync",
      description: "Keep all your systems synchronized with real-time data updates."
    },
    {
      icon: <Shieldclass Name ="w-12h-12text-green-400" />,
      title: "Secure & Reliable",
      description: "Enterprise-grade security ensures your data is protected during integration."
    }
  ];

  return (
    <>
      <Helmet />
        <title />SystemIntegration - ZionTech Group</title>
        <meta name ="description" content="Professionalsystem integrationservices by Zion Tech Group. Expertsolutions tailoredto yourbusiness needs." />
        <meta name ="keywords" content="systemintegration, ITservices, Zion Tech Group" />
        <metaproperty ="og:title" content="System Integration - Zion Tech Group" />
        <metaproperty ="og:description" content="Professionalsystem integrationservices by Zion Tech Group. Expertsolutions tailoredto yourbusiness needs." />
        <metaproperty ="og:type" content="website" />
        <metaproperty ="og:url" content="https://ziontechgroup.com/system-integration" />
      </Helmet>

      <div className ="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900to-slate-900pt-16" />
        {/* HeroSection */}
        <sectionclassName ="py-20" />
          <div className ="containermx-autopx-4text-center" />
            <h1className ="text-5xlmd:text-6xlfont-boldtext-whitemb-6" />
              <spanclassName ="bg-gradient-to-rfrom-cyan-400 via-purple-400 to-pink-400bg-clip-texttext-transparent" />
                SystemIntegration
              </span>
            </h1>
            <pclassName ="text-xltext-gray-300 mb-8max-w-3xlmx-auto" />
              Professionalsystem integrationservices byZion TechGroup. Expertsolutions tailoredto yourbusiness needs.
            </p>
            <div className ="flexflex-colsm:flex-rowgap-4justify-centermb-12" />
              <Link to ="/contact" className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lgfont-semiboldtext-lghover:from-cyan-600 hover:to-purple-600 transition-allduration-300 transformhover:scale-105 shadow-lghover:shadow-cyan-500/25 flexitems-centerjustify-centergroup" />
                GetStarted
                <Arrow Rightclass Name="ml-2group-hover:translate-x-1transition-transform" />
              </Link>
              <Link to ="/contact" className="borderborder-cyan-500 text-cyan-400 px-8 py-4 rounded-lgfont-semiboldtext-lghover:bg-cyan-500/10 transition-allduration-300transformhover:scale-105" />
                LearnMore
              </Link>
            </div>
          </div>
        </section>

        {/* FeaturesSection */}
        <sectionclassName ="py-20" />
          <div className ="containermx-autopx-4" />
            <div className ="text-centermb-16" />
              <h2className ="text-4xl font-bold text-white mb-6" />
                WhyChoose OurSystem IntegrationServices?
              </h2>
              <pclassName ="text-xltext-gray-300max-w-3xlmx-auto" />
                Ourexpert teamhelps youconnect andoptimize allyour businesssystems
              </p>
            </div>
            
            <div className ="gridgrid-cols-1md:grid-cols-3gap-8" />
              {features.map((feature, index) => (
                <divkey ={index} className="bg-slate-800/50 backdrop-blur-smborder border-slate-700 rounded-xlp-8 text-centerhover:border-cyan-500/50transition-allduration-300" />
                  <div className ="flexjustify-centermb-4" />
                    {feature.icon}
                  </div>
                  <h3className ="text-xlfont-semiboldtext-whitemb-4" />{feature.title}</h3>
                  <pclassName ="text-gray-300" />{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <sectionclassName ="py-20" />
          <div className ="containermx-autopx-4" />
            <div className ="bg-gradient-to-r from-cyan-900/50 to-purple-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-2xlp-12text-center" />
              <h2className ="text-4xl font-boldtext-whitemb-6" />
                Ready to Get Started?
              </h2>
              <pclassName ="text-xl text-gray-300 mb-8max-w-2xlmx-auto" />
                Contact us to learn more about our solutions and how we can help your business.
              </p>
              <div className ="flex flex-col sm:flex-rowgap-4justify-center" />
                <Link to ="/contact" className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105shadow-lghover:shadow-cyan-500/25" />
                  Contact Us
                </Link>
                <Link to ="/services" className="border border-cyan-500 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-500/10 transition-all duration-300transformhover:scale-105" />
                  View All Services
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