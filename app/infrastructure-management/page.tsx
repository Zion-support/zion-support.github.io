import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

export default function Infrastructure Management Page() {
  return (

    <d iv class Name="m in-h-screenbg-gray-50">
        </d iv>
      <H elmet>
        <t itle>5 G Data Analytics - Zion Tech Group</t itle>
        <m eta name="description" content="Professional 5 G data analytics services by Zion Tech Group. Transform your business with our expert solutions." />
      </H elmet>
        <t itle>Infrastructure Management Services - Zion Tech Group</t itle>
        <m eta name="description" content="Complete I T infrastructure setup, management, and optimization services." / / />
      </H elmet>

      <s ection class Name="p t-20 px-4 py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-slate-900via-purple-900to-slate-900" />
        <d iv class Name="m ax-w-7 xlmx-autotext-center">
        </d iv>
          <h1 c lass Name="t ext-3 xl sm:text-4 xl md:text-5 xl font-boldtext-whitemb-4">Infrastructure Management
          </h1>
          <p c lass Name="t ext-lg sm:text-xl text-gray-300 max-w-3 xlmx-automb-8" />
            Complete I T infrastructure setup, management, and optimization services.

          </p>
          <d iv class Name="f lex flex-col sm:flex-rowgap-4justify-center">
        </d iv>
            <L ink to="/contact" class Name="b g-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flexitems-centerjustify-center" />
              Get Started

              <A rrow Right class Name="w-5h-5m l-2" />
            </L ink>
            <L ink to="/it-services" class Name="b order-2 border-white text-white px-8 py-4 rounded-lg font-semiboldhover:bg-white/10transition-colors">All I T Services
            </L ink>
          </d iv>
      </s ection>

      <s ection class Name="p y-20px-4" />
        <d iv class Name="m ax-w-4 xlmx-autotext-center">
        </d iv>
          <h2 c lass Name="t ext-3 xl font-boldtext-gray-900mb-6">Coming Soon</h2>
          <p c lass Name="t ext-xltext-gray-600mb-8" />
            We're developing comprehensive infrastructure management services. Contact us to discuss your infrastructure needs.

          </p>
          <L ink to="/contact" class Name="b g-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700transition-allduration-300">Contact Us
          </L ink>
        </d iv>
      </s ection>
    </d iv>
  );
}
