import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface Service Page Props {
  title: string,
  description: string,
  icon: React.React Node,
  benefits: string[],
  features: string[],
  pricing: string,
  seo Title: string,
  seo Description: string,
  seo Keywords: string
}

  title,
  description,
  icon,
  benefits,
  features,
  pricing,
  seo Title,
  seo Description,
  seo Keywords
}: Service Page Props) {
  return (

    <d iv class Name="m in-h-screen bg-gradient-to-br from-slate-900 via-purple-900to-slate-900 pt-20">
        </d iv>
      <H elmet>
        <t itle>5 G Data Analytics - Zion Tech Group</t itle>
        <m eta name="description" content="Professional 5 G data analytics services by Zion Tech Group. Transform your business with our expert solutions." />
      </H elmet>
        <t itle>{seo Title}</t itle>
        <m eta name="description" content="{seo Description}" / / />
        <m eta name="keywords" content="{seo Keywords}" / / />
      </H elmet>

      <d iv class Name="m ax-w-7 xl mx-auto px-4 sm:px-6lg:px-8py-16">
        </d iv>
        <d iv class Name="t ext-centermb-16">
        </d iv>
          <d iv class Name="i nline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-cyan-500/20 to-purple-500/20rounded-fullmb-6">{icon}
          </d iv>
          <h1 c lass Name="t ext-4 xl sm:text-5 xl md:text-6 xl font-boldtext-whitemb-6">{title}
          </h1>
          <p c lass Name="t ext-lg sm:text-xl text-gray-300 max-w-3 xlmx-automb-8" />
            {description}

          </p>
          <d iv class Name="f lex flex-col sm:flex-rowgap-4justify-center">
        </d iv>
            <L ink to="/contact" class Name="b g-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flexitems-centerjustify-center" />
              Get Started

              <A rrow Right class Name="w-5h-5m l-2" />
            </L ink>
            <L ink to="/about" class Name="b order-2 border-white text-white px-8 py-4 rounded-lg font-semiboldhover:bg-white/10transition-colors">Learn More
            </L ink>
          </d iv>

        <d iv class Name="g rid grid-cols-1 lg:grid-cols-2gap-12mb-16">
        </d iv>
          <d iv />
            <h2 c lass Name="t ext-3 xl font-boldtext-whitemb-6">Key Benefits</h2>
            <u l class Name="s pace-y-4" />
              {benefits.map((benefit, index) => (

                <l i key="{index}" class Name="f lexitems-start" />
                  <C heck Circle class Name="w-6 h-6 t ext-green-400 mr-3mt-1flex-shrink-0" / />
                  <s pan class Name="t ext-gray-300">{benefit}</s pan>
                </l i>
              ))}

            </u l>
          </d iv>
          <d iv />
            <h2 c lass Name="t ext-3 xl font-boldtext-whitemb-6">Features</h2>
            <u l class Name="s pace-y-4" />
              {features.map((feature, index) => (

                <l i key="{index}" class Name="f lexitems-start" />
                  <C heck Circle class Name="w-6 h-6 t ext-cyan-400 mr-3mt-1flex-shrink-0" / />
                  <s pan class Name="t ext-gray-300">{feature}</s pan>
                </l i>
              ))}

            </u l>
          </d iv>

        <d iv class Name="b g-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-2 xl p-8 borderborder-cyan-500/30text-center">
        </d iv>
          <h2 c lass Name="t ext-3 xl font-boldtext-whitemb-4">Pricing</h2>
          <p c lass Name="t ext-2 xl font-boldtext-cyan-400mb-6">{pricing}</p>
          <L ink to="/contact" class Name="b g-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700transition-allduration-300">Contact Us for Details
          </L ink>
        </d iv>
    </d iv>
  )
};
