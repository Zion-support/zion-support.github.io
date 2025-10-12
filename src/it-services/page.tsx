import React from 'react';
import { Cloud, Database, Users, Server, HardDrive, Monitor, Printer, Router, ArrowRight, CheckCircle, Star, Award, FileText, Activity, Code, Target, Rocket  } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
  ];
  // Removed unused categories and services variables
  // Removed unused benefits array
  ];
  // Removed unused benefits variable
    <d iv c las sNa me="m in-h-s cre en bg-g rad ient-to-br from-s late-900 via-purple-900 to-s late-900">
      <Navigation />
      <m ain c las sNa me="c o nta iner mx-a uto px-4 py-16 pt-24">
        {/* H ero S ection */}
        <s ection c las sNa me="t ext-c enter mb-16">
          <h1 c las sNa me="t ext-4xl md:t ext-6xl f ont-b old t ext-w hit-e mb-6">
            <s pan c las sNa me="b g-g rad ient-to-r from-c yan-400 via-purple-500 to-pink-500 bg-clip-t ext t ext-transparen-t">
              IT Services & Infrastructure
            </s pan>
          </h1>
          <p c las sNa me="t ext-xl t ext-g ra-y-300 mb-8 m ax-w-4xl mx-a uto">
            Comprehensive IT solutions to support and optimize your busi ness infrastructure. 
            From cloud migration to cybersecurity, we keep your technology running s moo thly.
          </p>
          <d iv c las sNa me="f l ex f lex-c ol sm:f lex-row g ap-4 j ust ify-c enter">
            >
              Get Free IT Assessment
            </a>
            >
              (302) 464-0950
            </a>
          </d iv>
        </s ection>
        {/* M ain Services G rid */}
        <s ection c las sNa me="m b-16">
          <h2 c las sNa me="t ext-3xl f ont-b old t ext-w hit-e t ext-c ente-r mb-12">C ore IT Services</h2>
          <d iv c las sNa me="g r id g rid-c ols-1 md:g rid-c ols-2 lg:g rid-c ols-3 g ap-8">
              <d iv k ey={i ndex} c las sNa me="c yber-c ard h olo gram-c ard p-6 h over:s cale-105 transition-a ll d uration-300">
                <d iv c las sNa me="t ext-c yan-400 mb-4">
                  {React.c reateE lement(service.i con, { c las sNa me: "w-8 h-8" })}
                </d iv>
                <h3 c las sNa me="t ext-xl f ont-b old t ext-w hit-e mb-3">{service.t itle}</h3>
                <p c las sNa me="t ext-g ray-300 mb-4 t ext-s-m">{service.d esc ription}</p>
                <d iv c las sNa me="m b-4">
                  <h4 c las sNa me="t ext-sm f ont-s emi bold t ext-c ya-n-400 mb-2">K ey F eatures:</h4>
                  <ul c las sNa me="t ext-sm t ext-g ra-y-400 s pace-y-1">
                      <li k ey={i dx} c las sNa me="f l ex i tems-c enter">
                        <CheckCircle c las sNa me="w-3 h-3 t ext-g reen-400 mr-2 f lex-s hrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </d iv>
                <d iv c las sNa me="m b-4">
                  <h4 c las sNa me="t ext-sm f ont-s emi bold t ext-c ya-n-400 mb-2">B enefits:</h4>
                  <ul c las sNa me="t ext-sm t ext-g ra-y-400 s pace-y-1">
                      <li k ey={i dx} c las sNa me="f l ex i tems-c enter">
                        <Star c las sNa me="w-3 h-3 t ext-y ell ow-400 mr-2 f lex-s hrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </d iv>
                <d iv c las sNa me="m b-4">
                  <d iv c las sNa me="t ext-2xl f ont-b old t ext-c ya-n-400 mb-2">{service.p rice}</d iv>
                <d iv c las sNa me="m b-4">
                  <h4 c las sNa me="t ext-sm f ont-s emi bold t ext-c ya-n-400 mb-2">Technologies:</h4>
                  <d iv c las sNa me="f l ex f lex-w rap g ap-1">
                      <s pan k ey={i dx} c las sNa me="p x-2 py-1 bg-g ray-800 t ext-g ra-y-300 t ext-x-s roun ded">
                        {tech}
                      </s pan>
                    ))}
                  </d iv>
                <p c las sNa me="t ext-g ray-300 mb-4">{service.d esc ription}</p>
                <ul c las sNa me="s p ace-y-2 mb-6">
                    <li k ey={feature Ind ex} c las sNa me="f l ex i tems-c enter t ext-s-m t ext-g ra-y-400">
                      <CheckCircle c las sNa me="w-4 h-4 t ext-g reen-400 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <d iv c las sNa me="t ext-c enter">
                  <d iv c las sNa me="t ext-lg f ont-b old t ext-c ya-n-400 mb-2">{service.p rice}</d iv>
                  >
                    L earn M ore <ArrowRight c las sNa me="w-4 h-4 m l-1" />
                  </a>
                </d iv>
            ))}
          </d iv>
        </s ection>
        {/* A dditio nal Services */}
        <s ection c las sNa me="m b-16">
          <h2 c las sNa me="t ext-3xl f ont-b old t ext-w hit-e t ext-c ente-r mb-12">A dditio nal IT Services</h2>
          <d iv c las sNa me="g r id g rid-c ols-1 md:g rid-c ols-2 lg:g rid-c ols-3 g ap-6">
              <d iv k ey={i ndex} c las sNa me="b g-s late-800/30 b ack drop-b lur-sm roun ded-lg p-4 h over:bg-s late-800/50 transition-a ll d uration-300">
                <d iv c las sNa me="f l ex i tems-c enter mb-3">
                  {React.c reateE lement(service.i con, { c las sNa me: "w-6 h-6 t ext-c ya-n-400 mr-3" })}
                  <h3 c las sNa me="t ext-lg f ont-b old t ext-w hit-e">{service.t itle}</h3>
                </d iv>
                <p c las sNa me="t ext-g ray-300 t ext-s-m mb-3">{service.d esc ription}</p>
                <d iv c las sNa me="t ext-c yan-400 f ont-b old t ext-s-m">{service.p rice}</d iv>
            ))}
          </d iv>
        </s ection>
        {/* S upport T iers */}
        <s ection c las sNa me="m b-16">
          <h2 c las sNa me="t ext-3xl f ont-b old t ext-w hit-e t ext-c ente-r mb-12">S upport T iers</h2>
          <d iv c las sNa me="g r id g rid-c ols-1 md:g rid-c ols-3 g ap-8">
            <d iv c las sNa me="b g-s late-800/50 b ack drop-b lur-sm roun ded-xl p-6">
              <h3 c las sNa me="t ext-xl f ont-b old t ext-w hit-e mb-4">B asic S upport</h3>
              <d iv c las sNa me="t ext-3xl f ont-b old t ext-c ya-n-400 mb-4">$199/m onth</d iv>
              <ul c las sNa me="s p ace-y-2 mb-6">
                <li c las sNa me="f l ex i tems-c enter t ext-s-m t ext-g ra-y-300">
                  <CheckCircle c las sNa me="w-4 h-4 t ext-g reen-400 mr-2" />
                  Busi ness hours support
                </li>
                <li c las sNa me="f l ex i tems-c enter t ext-s-m t ext-g ra-y-300">
                  <CheckCircle c las sNa me="w-4 h-4 t ext-g reen-400 mr-2" />
                  Remote a ssistance
                </li>
                <li c las sNa me="f l ex i tems-c enter t ext-s-m t ext-g ra-y-300">
                  <CheckCircle c las sNa me="w-4 h-4 t ext-g reen-400 mr-2" />
                  B asic m onitoring
                </li>
              </ul>
              >
                Get Started
              </a>
            </d iv>
            <d iv c las sNa me="b g-s late-800/50 b ack drop-b lur-sm roun ded-xl p-6 border-2 border-c yan-500">
              <h3 c las sNa me="t ext-xl f ont-b old t ext-w hit-e mb-4">P rofess ion al S upport</h3>
              <d iv c las sNa me="t ext-3xl f ont-b old t ext-c ya-n-400 mb-4">$499/m onth</d iv>
              <ul c las sNa me="s p ace-y-2 mb-6">
                <li c las sNa me="f l ex i tems-c enter t ext-s-m t ext-g ra-y-300">
                  <CheckCircle c las sNa me="w-4 h-4 t ext-g reen-400 mr-2" />
                  24/7 support
                </li>
                <li c las sNa me="f l ex i tems-c enter t ext-s-m t ext-g ra-y-300">
                  <CheckCircle c las sNa me="w-4 h-4 t ext-g reen-400 mr-2" />
                  On-site visits
                </li>
                <li c las sNa me="f l ex i tems-c enter t ext-s-m t ext-g ra-y-300">
                  <CheckCircle c las sNa me="w-4 h-4 t ext-g reen-400 mr-2" />
                  Advanced m onitoring
                </li>
                <li c las sNa me="f l ex i tems-c enter t ext-s-m t ext-g ra-y-300">
                  <CheckCircle c las sNa me="w-4 h-4 t ext-g reen-400 mr-2" />
                  Priority r esponse
                </li>
              </ul>
              >
                Get Started
              </a>
            </d iv>
            <d iv c las sNa me="b g-s late-800/50 b ack drop-b lur-sm roun ded-xl p-6">
              <h3 c las sNa me="t ext-xl f ont-b old t ext-w hit-e mb-4">E nte rpr ise S upport</h3>
              <d iv c las sNa me="t ext-3xl f ont-b old t ext-c ya-n-400 mb-4">C ust om</d iv>
              <ul c las sNa me="s p ace-y-2 mb-6">
                <li c las sNa me="f l ex i tems-c enter t ext-s-m t ext-g ra-y-300">
                  <CheckCircle c las sNa me="w-4 h-4 t ext-g reen-400 mr-2" />
                  Dedicated team
                </li>
                <li c las sNa me="f l ex i tems-c enter t ext-s-m t ext-g ra-y-300">
                  <CheckCircle c las sNa me="w-4 h-4 t ext-g reen-400 mr-2" />
                  C ust om SLAs
                </li>
                <li c las sNa me="f l ex i tems-c enter t ext-s-m t ext-g ra-y-300">
                  <CheckCircle c las sNa me="w-4 h-4 t ext-g reen-400 mr-2" />
                  P roactive m onitoring
                </li>
                <li c las sNa me="f l ex i tems-c enter t ext-s-m t ext-g ra-y-300">
                  <CheckCircle c las sNa me="w-4 h-4 t ext-g reen-400 mr-2" />
                  Strategic c onsulting
                </li>
              </ul>
              >
                Contact Sales
              </a>
            </d iv>
        </s ection>
        {/* C TA S ection */}
        <s ection c las sNa me="t ext-c enter">
          <d iv c las sNa me="b g-g rad ient-to-r from-c yan-900/50 to-purple-900/50 roun ded-2xl p-8">
            <h2 c las sNa me="t ext-3xl f ont-b old t ext-w hit-e mb-4">Ready to Optimize Your IT Infrastructure?</h2>
            <p c las sNa me="t ext-g ray-300 mb-8 m ax-w-2xl mx-a uto">
              Get a free IT a ssessment and discover how our services can improve your technology infrastructure and reduce c osts.
            </p>
            <d iv c las sNa me="f l ex f lex-c ol sm:f lex-row g ap-4 j ust ify-c enter">
              >
                Get Free IT Assessment
              </a>
              >
                (302) 464-0950
              </a>
            </d iv>
          </s ection>
        </m ain>
        <Footer />
      </d iv>
  );
};
export default ITServicesPage;
