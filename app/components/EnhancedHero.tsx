import React from 'react';
import { ArrowRight } from 'lucide-react';
'use client'

const Enhanced Hero: React.F C = () => {
  const benefits = [
    'Advanced A I technology integration',
    'Real-time processing and analytics',
    'Enterprise-grade security and compliance',
    'Scalable and flexible solutions',
    '24/7 technical support',
    'Custom implementation and training'
  ];
  const contact Info = [
    {
      icon: Phone,
      title: 'Call Us',
      details: '+1 (555) 123-4567',
      description: 'Mon-Fri 9 A M-6 P M P ST'
    },
    {
      icon: Mail,
      title: 'Email Us',
      details: 'contact@ziontechgroup.com',
      description: 'We respond within 24 hours'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      details: 'San Francisco, C A',
      description: 'Schedule a meeting'
    }
  ];
  return (
    <d iv class Name="r elative min-h-screen bg-gradient-to-br from-slate-900 via-purple-900to-slate-900overflow-hidden">
        </d iv>
      {/* Background Effects */}

      <d iv class Name="a bsolute inset-0bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)]animate-pulse" / />
      <d iv class Name="a bsolute inset-0bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)]animate-pulse" style="{{" animation Delay: '1 s' }} / />
      {/* Main Content */}
      <d iv class Name="r elative z-10 flex flex-col lg:flex-rowitems-centermin-h-screen">
        </d iv>
        {/* Left Content */}

        <d iv class Name="f lex-1 px-4 sm:px-6lg:px-8py-20">
        </d iv>
          <d iv class Name="m ax-w-2xl">
        </d iv>
            <h1 c lass Name="t ext-4 xl sm:text-5 xl md:text-6 xl font-bold text-whitemb-6leading-tight" />
              Transform Your Business with{' '}

              <s pan class Name="b g-gradient-to-r from-cyan-400 to-purple-400bg-clip-texttext-transparent">A I & I T Solutions
              </s pan>
            </h1>
            
            <p c lass Name="t ext-lg sm:text-xl text-gray-300mb-8leading-relaxed">
              Harness the power of cutting-edge artificial intelligence and information technology 
              to drive innovation, efficiency, and growth in your organization.
            </p>

            {/* Benefits List */}

            <d iv class Name="m b-8">
        </d iv>
              <h3 c lass Name="t ext-lg font-semiboldtext-whitemb-4">Why Choose Us?</h3>
              <d iv class Name="g rid grid-cols-1sm:grid-cols-2gap-3">
        </d iv>
                {benefits.map((benefit, index) => (

                  <d iv key="{index}" class Name="f lexitems-centertext-gray-300" />
                    <C heck Circle class Name="h-5 w-5 t ext-cyan-400mr-3flex-shrink-0" / />
                    <s pan class Name="t ext-sm">{benefit}</s pan>
                  </d iv>
                ))}

              </d iv>

            {/* C TA Buttons */}

            <d iv class Name="f lex flex-col sm:flex-rowgap-4mb-8">
        </d iv>
              <b utton class Name="c yber-button px-8 py-4 text-lg font-semibold inline-flexitems-centerjustify-center" />
                Get Started

                <A rrow Right class Name="m l-2h-5w-5" />
              </b utton>
              <b utton class Name="c yber-button-secondary px-8 py-4text-lgfont-semibold">Learn More
              </b utton>
            </d iv>

            {/* Contact Info */}
            <d iv class Name="g rid grid-cols-1sm:grid-cols-3gap-4">
        </d iv>
              {contact Info.map((contact, index) => (

                <d iv key="{index}" class Name="f lexitems-centertext-gray-300" />
                  <c ontact.icon class Name="h-5 w-5 t ext-cyan-400mr-3flex-shrink-0" / />
                  <d iv />
                    <d iv class Name="t ext-smfont-mediumtext-white">{contact.title}</d iv>
                    <d iv class Name="t ext-xstext-gray-400">{contact.details}</d iv>
                </d iv>
              ))}

            </d iv>
        </d iv>

        {/* Right Content - Visual Elements */}

        <d iv class Name="f lex-1 px-4 sm:px-6lg:px-8py-20">
        </d iv>
          <d iv class Name="r elative" />
            {/* Floating Cards */}

            <d iv class Name="a bsolute top-0 left-0 w-64 h-40 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-2 xl backdrop-blur-sm borderborder-cyan-500/30animate-float">
        </d iv>
              <d iv class Name="p-6">
        </d iv>
                <B rain class Name="h-8 w-8t ext-cyan-400mb-3" / />
                <h3 c lass Name="t ext-lg font-boldtext-whitemb-2">A I Solutions</h3>
                <p c lass Name="t ext-smtext-gray-300">Machine Learning & Analytics</p>
              </d iv>

            <d iv class Name="a bsolute top-20 right-0 w-64 h-40 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2 xl backdrop-blur-sm borderborder-purple-500/30animate-float" style="{{" animation Delay: '1 s' }} />
              <d iv class Name="p-6">
        </d iv>
                <S hield class Name="h-8 w-8t ext-purple-400mb-3" / />
                <h3 c lass Name="t ext-lg font-boldtext-whitemb-2">Security</h3>
                <p c lass Name="t ext-smtext-gray-300">Cybersecurity & Compliance</p>
              </d iv>

            <d iv class Name="a bsolute top-40 left-1/2 transform -translate-x-1/2 w-64 h-40 bg-gradient-to-br from-green-500/20 to-blue-500/20 rounded-2 xl backdrop-blur-sm borderborder-green-500/30animate-float" style="{{" animation Delay: '2 s' }} />
              <d iv class Name="p-6">
        </d iv>
                <G lobe class Name="h-8 w-8t ext-green-400mb-3" / />
                <h3 c lass Name="t ext-lg font-boldtext-whitemb-2">Cloud Services</h3>
                <p c lass Name="t ext-smtext-gray-300">Infrastructure & Migration</p>
              </d iv>
          </d iv>
      </d iv>
  )
};
