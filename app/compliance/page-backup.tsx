'use client';
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { CheckCircle, Brain, Bar Chart, Target, Trending Up } from 'lucide-react';
const Page Backup Page: React.F C = () => {
    const features = [
    {
      icon: Brain,
      title: 'A I-Powered Analysis',
      description: 'Advanced A I algorithms provide intelligent insights and recommendations.',
      benefits: ['Smart recommendations', 'Predictive analytics', 'Automated insights', 'Real-time analysis'],
  },
    {
    icon: Bar Chart,
      title: 'Advanced Analytics',
      description: 'Comprehensive analytics dashboard with real-time data visualization.',
      benefits: ['Real-time dashboards', 'Custom reports', 'Data visualization', 'Performance metrics'],
  },
    {
    icon: Target,
      title: 'Precision Targeting',
      description: 'Target specific goals and objectives with precision and accuracy.',
      benefits: ['Goal tracking', 'Performance optimization', 'Strategic planning', 'Success metrics'],
  },
    {
    icon: Trending Up,
      title: 'Growth Optimization',
      description: 'Optimize your business growth with data-driven strategies.',
      benefits: ['Growth strategies', 'Market analysis', 'Competitive insights', 'R OI optimization'],
  }
    ]
return (

      <H elmet>
        <t itle>5 G Data Analytics - Zion Tech Group</t itle>
        <m eta name="description" content="Professional 5 G data analytics services by Zion Tech Group. Transform your business with our expert solutions." />
      </H elmet><t itle>Page Backup - Zion Tech Group</t itle>
        <m eta / />
      </H elmet>
      <N avigation / />
      <d iv class Name="m in-h-screen bg-gradient-to-br from-slate-900via-purple-900to-slate-900">
        </d iv></d iv>

        {/* Hero Section */}

        <s ection class Name="p y-20px-4"> </s ection><d iv class Name="
           </d iv /><d ivclass Name="t ext-center mb-16"> </d iv><h2 c lass Name="t ext-4 xl font-boldtext-whitemb-4">Section Title</h2>
              <p c lass Name="t ext-xltext-gray-300">Section description</p>
            </d iv>
        </s ection>
          <d iv class Name="a bsolute inset-0bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)]animate-pulse" /></d iv>
          <d iv class Name="a bsolute inset-0bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)]animate-pulse" style="{{" animation Delay: '1 s' }} / /></d iv>
          <d iv class Name="r elative max-w-7 xlmx-autotext-center">
        </d iv></d iv>
            <h1>Page Backup
            </h1>
            <p /></p>

              Advanced page backup solutions powered by A I technology.

            </p>
            <d iv class Name="f lex flex-col sm: flex-rowgap-4justify-center" / / /></d iv>
              <b utton /></b utton>

                Get Started

              </b utton>
              <b utton /></b utton>

                Learn More,

              </b utton>
            </d iv>
        </s ection>
        <s ection class Name="r elative py-20px-4overflow-hidden" />
          <d iv class Name="a bsolute inset-0bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)]animate-pulse" />
          <d iv class Name="a bsolute inset-0bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)]animate-pulse" style="{{" animation Delay: '1 s' }} / />
          <d iv class Name="r elative max-w-7 xlmx-autotext-center">
        </d iv>
            <h1 c lass Name="t ext-5 xl md:text-7 xl font-bold text-whitemb-6leading-tight" />Page Backup
            <p c lass Name="t ext-xl text-gray-300 mb-8 max-w-3 xlmx-autoleading-relaxed" />

              Advanced page backup solutions powered by A I technology.

            <d iv class Name="f lex flex-col sm:flex-rowgap-4justify-center">
        </d iv>
              <b utton class Name="b g-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300transformhover:scale-105" />Get Started
              <b utton class Name="b order border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-bold py-4 px-8 rounded-lgtransition-allduration-300" />Learn More

        {/* Features Section */}

        <s ection class Name="p y-20px-4"> </s ection><d iv class Name="
           </d iv /><d ivclass Name="t ext-center mb-16"> </d iv><h2 c lass Name="t ext-4 xl font-boldtext-whitemb-4">Section Title</h2>
              <p c lass Name="t ext-xltext-gray-300">Section description</p>
            </d iv>
        </s ection>
          <d iv class Name="m ax-w-7xlmx-auto" / / /></d iv>
            <d iv class Name="t ext-centermb-16" / / /></d iv>
              <h2 /></h2>

                Key Features

              </h2>
              <p /></p>

                Powerful A I technology that drives results

              </p>
            </d iv>
            <d iv class Name="g rid grid-cols-1 md:grid-cols-2lg:grid-cols-4gap-8">
        </d iv></d iv>

              {features.map((feature, index) => (

                <d iv key="{index}" class Name="b g-white/5 backdrop-blur-sm rounded-2 xl p-8 hover:bg-white/10 transition-allduration-300group" /></d iv>
                  <d iv class Name="w-16 h-16 b g-gradient-to-br from-purple-500 to-blue-600 rounded-2 xl flex items-center justify-center mb-6group-hover:scale-110transition-transform">
        </d iv></d iv>
                    <f eature / />
                  <h3 c lass Name="t ext-xl font-boldtext-whitemb-4">{feature.title}</h3>
                  <p c lass Name="t ext-gray-300mb-4">{feature.description}</p>

                  {
    feature.benefits && (;
                    <u l>{feature.benefits.map((benefit, idx) => (
  }
                        </u l><l i> </l i><C heck Circle />
                          {benefit}
                        </l i>
                      ))}
                    </u l>
                  )}
                </d iv>
              ))}

            </d iv>
        </s ection>
          <d iv class Name="m ax-w-7xlmx-auto">
        </d iv>
            <d iv class Name="t ext-centermb-16">
        </d iv>
              <h2 c lass Name="t ext-4 xl md:text-5 xl font-boldtext-whitemb-6" />Key Features
              <p c lass Name="t ext-xl text-gray-300 max-w-3xlmx-auto" />Powerful A I technology that drives results
            <d iv class Name="g rid grid-cols-1 md:grid-cols-2lg:grid-cols-4gap-8">
        </d iv>

              {features.map((feature, index) => (

                <d iv key="{index}" class Name="b g-white/5 backdrop-blur-sm rounded-2 xl p-8 hover:bg-white/10 transition-allduration-300group" />
                  <d iv class Name="w-16 h-16 b g-gradient-to-br from-purple-500 to-blue-600 rounded-2 xl flex items-center justify-center mb-6group-hover:scale-110transition-transform">
        </d iv>
                    <f eature.icon class Name="w-8h-8t ext-white" / />
                  <h3 c lass Name="t ext-xl font-boldtext-whitemb-4" />{feature.title}
                  <p c lass Name="t ext-gray-300mb-4" />{feature.description}

                  {feature.benefits && (
                    <u l class Name="s pace-y-2" />
                      {feature.benefits.map((benefit, idx) => (

                        <l i key="{idx}" class Name="f lex items-centertext-smtext-gray-400" />
                          <C heck Circle class Name="w-4 h-4t ext-green-400mr-2" / />

                          {benefit}
                      ))}
                  )}
              ))}
        {/* C TA Section */}

        <s ection class Name="p y-20px-4"> </s ection><d iv class Name="
           </d iv /><d ivclass Name="t ext-center mb-16"> </d iv><h2 c lass Name="t ext-4 xl font-boldtext-whitemb-4">Section Title</h2>
              <p c lass Name="t ext-xltext-gray-300">Section description</p>
            </d iv>
        </s ection>
          <d iv class Name="m ax-w-4 xlmx-autotext-center" / / /></d iv>
            <d iv class Name="b g-white/5 backdrop-blur-sm rounded-3xlp-12" / / /></d iv>
              <h2 /></h2>

                Ready to Get Started?

              </h2>
              <p /></p>

                Contact our experts to discuss your requirements and get started today.

              </p>
              <d iv class Name="f lex flex-col sm: flex-rowgap-4justify-center" / / /></d iv>
                <b utton /></b utton>

                  Contact Us

                </b utton>
                <b utton /></b utton>

                  Learn More

                </b utton>
              </d iv>
          </d iv>
        </s ection>
      </d iv>
      <F ooter /></F ooter>

  ),
};
export default Page Backup Page;
