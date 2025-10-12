'use client';
import React from 'react';
import { Helmet  } from 'react-helmet-async';
import { ArrowRight, CheckCircle, Star, Phone, Mail  } from 'lucide-react';
interface GenericServicePageProps {
  title: string;,
  description: string;,
  icon: React.ComponentType<any />;,
  features: string[];,
  benefits: string[];
  pricing?: string;
  category: 'AI' | 'IT' | 'MicroSAAS' | 'Emerging';,
  color: string;
}
const GenericServicePage: React.FC<GenericServicePageProps /> = ({
  title,
  description,
  icon: Icon,
  features,
  benefits,
  pricing,
  category,
  color
}) => {
  const categoryColors = {
    AI: 'from-purple-500 to-pink-600',
    IT: 'from-blue-500 to-cyan-600',
    MicroSAAS: 'from-green-500 to-emerald-600',
    Emerging: 'from-orange-500 to-red-600'
  };
  const categoryColor = categoryColors[category] || 'from-cyan-500 to-purple-600';
  return (
    <>
    </>
      <Helmet>
        <title>5G Data Analytics - Zion Tech Group</title>
        <meta name="description" content="5G Data Analytics - Zion Tech Group" />
      </Helmet>
        <title>{title} | Zion Tech Group</title>
        <meta const name = "description" content="{description}" / / />
        <meta name="keywords" content="{`${title.toLowerCase()}," AI solutions, IT services, ${category.toLowerCase()}`} / / />
      </Helmet>
    </>
    <>
      </><d iv c las sName="m in-h-screen bg-g rad ient-to-br from-s late-900via-purple-900to-s late-900">
        </d iv>        <m ain c las sName="c onta iner mx-a uto px-4-py-16-pt-24" />
    </>
          {/* Hero S ection */}
    <>
          </><s ection c las sName="t e xt-c entermb-16" />
            <d iv c las sName="m ax-w-4x lmx-a uto">
        </d iv>
              <d iv c las sName="w-20 h-20 b g-g rad ient-to-r from-cyan-500 via-purple-600 to-pink-600 rounded-2 xl flex items-c enter justify-c enter mx-a uto mb-6 group-hover:scale-110 transition-transform duration-300shadow-lgshadow-cyan-500/25">
        </d iv>
                <Icon c las sName="w-10h-10t e xt-w hite" / />
              </d iv>
              <h1 c las sName="t e xt-4 xl md:t ext-6 xl f ont-b old t ext-w hit-e mb-6 bg-g rad ient-to-r from-cyan-400 via-purple-400 to-pink-400bg-clip-t exttext-transpare-n-t">{title}
              </h1>
              <p c las sName="t e xt-xl t ext-g ra-y-300 mb-8 m ax-w-3 x lmx-a utolea ding-relaxed" />
    </>
                {description}              </p>
              {pricing && (
    <>
                </><d iv c las sName="i n line-b lock px-6 py-3 bg-g rad ient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 rounded-full t ext-cya-n-400f ont-semiboldmb-8">Starting at {pricing}
                </d iv>
    </>
              )}
              <d iv c las sName="f lex flex-col sm:flex-rowg ap-4justify-c enter">
                <a 
                  h ref="/cont act" 
                  c las sName="p x-8 py-4 bg-g rad ient-to-r from-cyan-500 to-purple-500 t ext-w hit-e rounded-lg f ont-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 flex items-c enter justify-c enter group shadow-lg shadow-cyan-500/25 hover:shadow-xl hover:shadow-cyan-500/40transformhover:scale-105" />
                  Get Started Today
    <>
                  </><ArrowRight c las sName="w-5 h-5 m l-2group-hover:tran slate-x-1transition-transform" />
                </a>
    </>
                <a 
                  h ref="t el:+13024640950" 
                  c las sName="p x-8 py-4 border-2 border-cyan-400 t ext-cya-n-400 rounded-lg f ont-semibold hover:bg-cyan-400 hover:t ext-s lat-e-900 transition-all duration-300 flex items-c enterjustify-c entergroup" />
                  <Phone c las sName="w-5h-5m r-2" />
                  C all (302) 464-0950
    <>
                </a>
              </d iv>
          </s ection>
    </>
          {/* Features S ection */}
    <>
          </><s ection c las sName="m b-16" />
            <d iv c las sName="t e xt-c entermb-12">
                <a 
                  h ref="/cont act" 
                  c las sName="p x-8 py-4 bg-g rad ient-to-r from-cyan-500 to-purple-500 t ext-w hit-e rounded-lg f ont-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 flex items-c enter justify-c enter group shadow-lg shadow-cyan-500/25 hover:shadow-xl hover:shadow-cyan-500/40transformhover:scale-105" />
                  Get Free Consultation
    <>
                  </><ArrowRight c las sName="w-5 h-5 m l-2group-hover:tran slate-x-1transition-transform" />
                </a>
    </>
                <a 
                  h ref="m ailto:kleber@z iontec hgroup.c om" 
                  c las sName="p x-8 py-4 border-2 border-cyan-400 t ext-cya-n-400 rounded-lg f ont-semibold hover:bg-cyan-400 hover:t ext-s lat-e-900 transition-all duration-300 flex items-c enterjustify-c entergroup" />
                  <Mail c las sName="w-5h-5m r-2" />
                  E mail Us
    <>
                </a>
              </d iv>
          </s ection>
        </m ain>
      </d iv>
        </d iv>
      </d iv>
          </d iv>
        </d iv>
      </d iv>
        </d iv>
      </d iv>
          </d iv>
        </d iv>
      </d iv>
        </d iv>
      </d iv>
      </d iv>
    </>
  );
};
export default GenericServicePage;
    </>