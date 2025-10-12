import React from 'react';import { Link  } from 'react-router-dom';
import { ArrowRight  } from 'lucide-react';
interface ServicePageProps {
  title: string,
  description: string,
  icon: React.ReactNode,
  benefits: string[],
  features: string[],
  pricing: string,
  seoTitle: string,
  seoDescription: string,
  seoKeywords: string
}
  title,
  description,
  icon,
  benefits,
  features,
  pricing,
  seoTitle,
  seoDescription,
  seoKeywords
}: ServicePageProps) {
  r etu rn (
    <>
    </><d iv c las sNa me="m in-h-scre en bg-g rad ient-to-br from-s late-900 via-purple-900to-s late-900 pt-20">
        </d iv>
      <Helmet>
        <title>5G Data Analytics - Zion Tech Group</title>
        <meta name="description" content="5G Data Analytics - Zion Tech Group" />
      </Helmet>        <title>{seoTitle}</title>
        <meta name="description" content="{seoDescription}" / / />
        <meta name="keywords" content="{seoKeywords}" / / />
      </Helmet>
    <>
      </><d iv c las sNa me="m ax-w-7 xl mx-a uto px-4 sm:px-6-lg:px-8-py-16">
        </d iv>
        <d iv c las sNa me="t e xt-c entermb-16">
        </d iv>
          <d iv c las sNa me="i n line-f lex i tems-c enter j ust ify-c enter w-20 h-20 bg-g rad ient-to-r from-cyan-500/20 to-purple-500/20rounded-fullmb-6">{icon}
          </d iv>
          <h1 c las sNa me="t e xt-4 xl sm:t ext-5 xl md:t ext-6 xl f ont-boldtext-whi-t em-b-6">{title}
          </h1>
          <p c las sNa me="t e xt-lg sm:t ext-x-l t ext-g ra-y-300 m ax-w-3 xlmx-a utomb-8" />
            {description}
    <>
          </p>
          <d iv c las sNa me="f l ex f lex-c ol sm:f lex-rowg ap-4j ust ify-c enter">
        </d iv>
            <Link to="/cont act" c las sNa me="b g-g rad ient-to-r from-cyan-500 to-purple-600 t ext-whit-e px-8 py-4 rounded-lg f ont-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 f lexite ms-c enterj ust ify-c enter" />
              Get S tar ted
    <>
              </><ArrowRight c las sNa me="w-5h-5m l-2" />
            </Link>            <Link to="/a bout" c las sNa me="b order-2 b ord er-white t ext-whit-e px-8 py-4 rounded-lg f ont-semiboldhover:bg-white/10transition-c olors">Learn More
            </Link>
          </d iv>
    <>
        </><d iv c las sNa me="g r id g rid-c ols-1 lg:g rid-c ols-2g ap-12mb-16">
        </d iv>
          <d iv />
            <h2 c las sNa me="t e xt-3 xl f ont-boldtext-whi-t em-b-6">Key B enefits</h2>
            <ul c las sNa me="s p ace-y-4" />
              {benefits.m ap((benefit, index) => (
    <>
                </><li key="{index}" c las sNa me="f l exi tems-s tart" />
                  <C hec kCi rcle c las sNa me="w-6 h-6 t e xt-g reen-400 mr-3-mt-1-f lex-s hrink-0" / />
                  <s pan c las sNa me="t e xt-g ray-300">{benefit}</s pan>                </li>
              ))}
    <>
            </ul>
          </d iv>
          <d iv />
            <h2 c las sNa me="t e xt-3 xl f ont-boldtext-whi-t em-b-6">F eatures</h2>
            <ul c las sNa me="s p ace-y-4" />
              {features.m ap((feature, index) => (
    <>
                </><li key="{index}" c las sNa me="f l exi tems-s tart" />
                  <C hec kCi rcle c las sNa me="w-6 h-6 t e xt-cyan-400 mr-3-mt-1-f lex-s hrink-0" / />
                  <s pan c las sNa me="t e xt-g ray-300">{feature}</s pan>                </li>
              ))}
    <>
            </ul>
          </d iv>
    <>
        </><d iv c las sNa me="b g-g rad ient-to-r from-cyan-500/20 to-purple-500/20 rounded-2 xl p-8 b ord erb ord er-cyan-500/30t ext-c ente-r">
        </d iv>
          <h2 c las sNa me="t e xt-3 xl f ont-boldtext-whi-t em-b-4">P ricing</h2>          <p c las sNa me="t e xt-2 xl f ont-boldtext-cy-a-n-400mb-6">{pricing}</p>
          <Link to="/cont act" c las sNa me="b g-g rad ient-to-r from-cyan-500 to-purple-600 t ext-whit-e px-8 py-4 rounded-lg f ont-semibold hover:from-cyan-600 hover:to-purple-700transition-allduration-300">Cont act Us for Details
          </Link>
        </d iv>
    </d iv>
  )
};
    </>