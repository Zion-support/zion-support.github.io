'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Arrow Right, Zap, Shield, Cloud } from 'lucide-react';

export default function Page() {
  return (

      <H elmet>
        <t itle>Professional Services - Zion Tech Group</t itle>
        <m eta name="description" content="Professional services by Zion Tech Group. Expert solutions tailored to your business needs." />
        <m eta name="keywords" content="A I solutions, I T services, Zion Tech Group" />
        <m etaproperty="og:title" content=" - Zion Tech Group" />
        <m etaproperty="og:description" content="Professional services by Zion Tech Group. Expert solutions tailored to your business needs." />
        <m etaproperty="og:type" content="website" />
        <m etaproperty="og:url" content="https://ziontechgroup.com/system-integration" />
      </H elmet>

      <d iv class Name="m in-h-s c reen bg-gradient-to-br from-slate-900 via-purple-900to-slate-900pt-16">
        </d iv>
        {/* Hero Section */}
        </d iv>
            <h1 c lass Name="t e xt-5xl md:t e xt-6xl font-boldtext-white mb-6" />
              <s pan class Name="b g-g r a dient-to-r from-cyan-400 via-purple-400 to-pink-400bg-clip-texttext-transparent" />

                System Integration

              </s pan>
        <s ection class Name="p y-20">
          <d iv class Name="c o n t ainer mx-auto px-4 text-center">
            <h1 c lass Name="t e xt-5xl md:t e xt-6xl font-bold text-white mb-6">
              <s pan class Name="b g-g r a dient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Professional Services</s pan>
            </h1>
            <p c lass Name="t e xt-xl t e xt-gray-300 mb-8max-w-3xlmx-auto" />

              Professional system integration services by Zion Tech Group. Expert solutions tailored to your business needs.

            </p>
            <d iv class Name="f l ex f l ex-col sm:flex-row gap-4justify-centermb-12">
        </d iv>
              <L ink to="/contact" class Name="b g-g r a dient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25 flex items-centerjustify-centergroup" />

                Get Started

                <A rrow Rightclass Name="m l-2g r o up-hover:translate-x-1transition-transform" />
              </L ink>
              <L ink to="/contact" class Name="b o r d er border-cyan-500 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-500/10 transition-all duration-300transformhover:scale-105" />

                Learn More

              </L ink>
            </d iv>
        </s ection>

        {/* Features Section */}

        <s ection class Name="p y-20" />
          <d iv class Name="c o n t ainermx-autopx-4">
        </d iv>
            <d iv class Name="t e x t-centermb-16">
        </d iv>
              <h2 c lass Name="t e x t-4xl font-boldtext-white mb-6" />

                Why Choose Our System Integration Services?

              </h2>
              <p c lass Name="t e xt-xl t e xt-gray-300max-w-3xlmx-auto" />

                Our expert team helps you connect and optimize all your business systems

              </p>
            </d iv>

            <d iv class Name="g r id g r id-cols-1md:grid-cols-3gap-8">
        </d iv>
              {features.map((feature, index) => (

                <d ivkey={index} class Name="b g-s l a te-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8 text-center hover:border-cyan-500/50transition-allduration-300" />
                  <d iv class Name="f l e x justify-centermb-4">
        </d iv>

                    {feature.icon}

                  </d iv>
                  <h3 c lass Name="t e xt-xl f o nt-semiboldtext-whitemb-4">{feature.title}</h3>
                  <p c lass Name="t e xt-g r ay-300">{feature.description}</p>
                </d iv>

              ))}

            </d iv>
        </s ection>

        {/* C T A Section */}

        <s ection class Name="p y-20" />
          <d iv class Name="c o n t ainermx-autopx-4">
        </d iv>
            <d iv class Name="b g-g r a dient-to-r from-cyan-900/50 to-purple-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-2xlp-12text-center">
        </d iv>
              <h2 c lass Name="t e x t-4xl font-boldtext-white mb-6" />

                Ready to Get Started?

              </h2>
              <p c lass Name="t e xt-xl t e xt-gray-300 mb-8max-w-2xlmx-auto" />

                Contact us to learn more about our solutions and how we can help your business.

              </p>
              <d iv class Name="f l ex f l ex-col sm:flex-rowgap-4justify-center">
        </d iv>
                <L ink to="/contact" class Name="b g-g r a dient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105shadow-lghover:shadow-cyan-500/25" />

                  Contact Us

                </L ink>
                <L ink to="/services" class Name="b o r d er border-cyan-500 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-500/10 transition-all duration-300transformhover:scale-105" />

                  View All Services

                </L ink>
              </d iv>
          </d iv>
        </s ection>
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

    </d iv>
  );
};

export default Page;

import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { Arrow Right } from 'lucide-react'

export default function System Integration Page() {
  return (
    <d iv class Name="m in-h-s c reen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
      <H elmet>
        <t itle>System Integration - Zion Tech Group</t itle>
        <m eta name="description" content="Professional system integration services by Zion Tech Group. Transform your business with our expert solutions." />
      </H elmet>
      <d iv class Name="m ax-w-7xl mx-a u to px-4 sm:px-6 lg:px-8 py-16 text-center">
        <h1 c lass Name="t e x t-4xl font-bold text-white mb-6">System Integration</h1>
        <p c lass Name="t e x t-lg text-gray-300 mb-8">Professional system integration services coming soon.</p>
        <L ink
          to="/contact"
          class Name="b g-g r a dient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center mx-auto w-fit"
        >
          Contact Us
          <A rrow Rightclass Name="w-5 h-5 m l-2" />
        </L ink>
      </d iv>
    </d iv>
  );
}
