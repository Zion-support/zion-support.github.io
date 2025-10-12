'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, CheckCircle, Star, Phone, Mail } from 'lucide-react';

interface Generic Service Page Props {
  title: string;,
  description: string;,
  icon: React.Component Type<a ny />;,
  features: string[];,
  benefits: string[];
  pricing?: string;
  category: 'A I' | 'I T' | 'Micro SA AS' | 'Emerging';,
  color: string;
}

const Generic Service Page: React.F C<G eneric Service Page Props /> = ({
  title,
  description,
  icon: Icon,
  features,
  benefits,
  pricing,
  category,
  color
}) => {
  const category Colors = {
    A I: 'from-purple-500 to-pink-600',
    I T: 'from-blue-500 to-cyan-600',
    Micro SA AS: 'from-green-500 to-emerald-600',
    Emerging: 'from-orange-500 to-red-600'
  };
  const category Color = category Colors[category] || 'from-cyan-500 to-purple-600';
  return (

      <H elmet>
        <t itle>5 G Data Analytics - Zion Tech Group</t itle>
        <m eta name="description" content="Professional 5 G data analytics services by Zion Tech Group. Transform your business with our expert solutions." />
      </H elmet>
        <t itle>{title} | Zion Tech Group</t itle>
        <m eta const name = "description" content="{description}" / / />
        <m eta name="keywords" content="{`${title.to Lower Case()}," A I solutions, I T services, ${category.to Lower Case()}`} / / />
      </H elmet>

      <d iv class Name="m in-h-screen bg-gradient-to-br from-slate-900via-purple-900to-slate-900">
        </d iv>
        <m ain class Name="c ontainer mx-auto px-4py-16pt-24" />

          {/* Hero Section */}

          <s ection class Name="t ext-centermb-16" />
            <d iv class Name="m ax-w-4xlmx-auto">
        </d iv>
              <d iv class Name="w-20 h-20 b g-gradient-to-r from-cyan-500 via-purple-600 to-pink-600 rounded-2 xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300shadow-lgshadow-cyan-500/25">
        </d iv>
                <I con class Name="w-10h-10t ext-white" / />
              </d iv>
              <h1 c lass Name="t ext-4 xl md:text-6 xl font-bold text-white mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400bg-clip-texttext-transparent">{title}
              </h1>
              <p c lass Name="t ext-xl text-gray-300 mb-8 max-w-3 xlmx-autoleading-relaxed" />

                {description}
              </p>
              
              {pricing && (

                <d iv class Name="i nline-block px-6 py-3 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 rounded-full text-cyan-400font-semiboldmb-8">Starting at {pricing}
                </d iv>

              )}
              
              <d iv class Name="f lex flex-col sm:flex-rowgap-4justify-center">
        </d iv>
                <a 
                  h ref="/contact" 
                  class Name="p x-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center group shadow-lg shadow-cyan-500/25 hover:shadow-xl hover:shadow-cyan-500/40transformhover:scale-105" />
                  Get Started Today

                  <A rrow Right class Name="w-5 h-5 m l-2group-hover:translate-x-1transition-transform" />
                </a>

                <a 
                  h ref="tel:+13024640950" 
                  class Name="p x-8 py-4 border-2 border-cyan-400 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 flex items-centerjustify-centergroup" />
                  <P hone class Name="w-5h-5m r-2" />
                  Call (302) 464-0950

                </a>
              </d iv>
          </s ection>

          {/* Features Section */}

          <s ection class Name="m b-16" />
            <d iv class Name="t ext-centermb-12">
        </d iv>
              <h2 c lass Name="t ext-3 xl md:text-4 xl font-boldtext-whitemb-4">Key Features
              </h2>
              <p c lass Name="t ext-lg text-gray-300 max-w-2xlmx-auto" />

                Comprehensive {title.to Lower Case()} solutions designed to drive your business forward

              </p>
            </d iv>
            <d iv class Name="g rid grid-cols-1 md:grid-cols-2lg:grid-cols-3gap-6">
        </d iv>

              {features.map((feature, index) => (

                <d iv key="{index}" class Name="b g-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-cyan-400/30transition-allduration-300" />
                  <d iv class Name="f lexitems-centermb-4">
        </d iv>
                    <C heck Circle class Name="w-6 h-6 t ext-green-400mr-3flex-shrink-0" / />
                    <h3 c lass Name="t ext-lgfont-semiboldtext-white">{feature}</h3>
                  </d iv>

              ))}

            </d iv>
          </s ection>

          {/* Benefits Section */}

          <s ection class Name="m b-16" />
            <d iv class Name="t ext-centermb-12">
        </d iv>
              <h2 c lass Name="t ext-3 xl md:text-4 xl font-boldtext-whitemb-4">Why Choose Our {title}?
              </h2>
              <p c lass Name="t ext-lg text-gray-300 max-w-2xlmx-auto" />

                Experience the difference with our proven expertise and cutting-edge technology

              </p>
            </d iv>
            <d iv class Name="g rid grid-cols-1md:grid-cols-2gap-8">
        </d iv>

              {benefits.map((benefit, index) => (

                <d iv key="{index}" class Name="f lexitems-startspace-x-4" />
                  <d iv class Name="w-8 h-8 b g-gradient-to-r from-cyan-500 to-purple-500 rounded-lg flex items-center justify-centerflex-shrink-0mt-1">
        </d iv>
                    <S tar class Name="w-4h-4t ext-white" / />
                  </d iv>
                  <d iv />
                    <h3 c lass Name="t ext-lg font-semiboldtext-whitemb-2">{benefit}</h3>
                    <p c lass Name="t ext-gray-300" />

                      Leverage our expertise to maximize your business potential with {title.to Lower Case()}

                    </p>
                  </d iv>

              ))}

            </d iv>
          </s ection>

          {/* Stats Section */}

          <s ection class Name="m b-16" />
            <d iv class Name="b g-gradient-to-r from-slate-800/50 to-purple-900/50 rounded-2 xl p-8borderborder-cyan-500/20">
        </d iv>
              <d iv class Name="g rid grid-cols-2 md:grid-cols-4gap-8text-center">
        </d iv>
                <d iv />
                  <d iv class Name="t ext-3 xl font-boldtext-cyan-400mb-2">500+</d iv>
                  <d iv class Name="t ext-gray-300text-sm">Happy Clients</d iv>
                <d iv />
                  <d iv class Name="t ext-3 xl font-boldtext-purple-400mb-2">99%</d iv>
                  <d iv class Name="t ext-gray-300text-sm">Success Rate</d iv>
                <d iv />
                  <d iv class Name="t ext-3 xl font-boldtext-pink-400mb-2">24/7</d iv>
                  <d iv class Name="t ext-gray-300text-sm">Support</d iv>
                <d iv />
                  <d iv class Name="t ext-3 xl font-boldtext-green-400mb-2">10+</d iv>
                  <d iv class Name="t ext-gray-300text-sm">Years Experience</d iv>
              </d iv>
          </s ection>

          {/* C TA Section */}

          <s ection class Name="t ext-center" />
            <d iv class Name="b g-gradient-to-r from-slate-800/50 to-purple-900/50 rounded-3 xl p-12borderborder-cyan-500/20">
        </d iv>
              <h2 c lass Name="t ext-3 xl md:text-4 xl font-boldtext-whitemb-6">Ready to Get Started?
              </h2>
              <p c lass Name="t ext-xl text-gray-300 mb-8 max-w-3xlmx-auto" />

                Join hundreds of companies that trust Zion Tech Group for their {title.to Lower Case()} needs. 
                Get a free consultation today.

              </p>
              <d iv class Name="f lex flex-col sm:flex-rowgap-4justify-center">
        </d iv>

                <a 
                  h ref="/contact" 
                  class Name="p x-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center group shadow-lg shadow-cyan-500/25 hover:shadow-xl hover:shadow-cyan-500/40transformhover:scale-105" />
                  Get Free Consultation

                  <A rrow Right class Name="w-5 h-5 m l-2group-hover:translate-x-1transition-transform" />
                </a>

                <a 
                  h ref="mailto:kleber@ziontechgroup.com" 
                  class Name="p x-8 py-4 border-2 border-cyan-400 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 flex items-centerjustify-centergroup" />
                  <M ail class Name="w-5h-5m r-2" />
                  Email Us

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

  );
};

export default Generic Service Page;
