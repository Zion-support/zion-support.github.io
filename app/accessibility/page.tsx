'use client;

import React from 'react;

import { Helmet } from 'react-helmet-async;

import { CheckCircle, Eye, MousePointer, Volume2, Shield, Users, Globe, Zap, ArrowRight, Star } from lucide-react;

;
<<<<<<< HEAD
const AccessibilityPage: React.FC = () => {const features = []
    {}
=======

const AccessibilityPage: React.FC = () => {const features = [;;;

    {
>>>>>>> origin/main
      ico,
    n: Eye,
      title: 'Visual Accessibility,
      description: 'Comprehensive visual accessibility features including high contrast modes, text scaling, and screen reader compatibility.,
      benefits: ['High contrast mode', 'Text scaling', 'Screen reader support', 'Color blind friendly]
    },
    {}
      icon: MousePointer,
      title: 'Motor Accessibility,
      description: 'Keyboard navigation and alternative input methods for users with motor impairments.,
      benefits: ['Keyboard navigation', 'Voice commands', 'Switch control', 'Customizable controls]
    },
    {}
      icon: Volume2,
      title: 'Audio Accessibility,
      description: 'Audio alternatives and visual indicators for users with hearing impairments.,
      benefits: ['Audio descriptions', 'Visual alerts', 'Captions', 'Sign language support]
    },
    {}
      icon: Shield,
      title: 'Security & Privacy,
      description: 'Secure accessibility features that protect user data while providing inclusive experiences.,
      benefits: ['Data protection', 'Secure forms', 'Privacy controls', 'Encrypted communications]
    },
    {}
      icon: Users,
      title: 'Inclusive Design,
      description: 'Design principles that ensure our solutions work for users of all abilities and backgrounds.,
      benefits: ['Universal design', 'Cultural sensitivity', 'Language support', 'Age-friendly interfaces]
    },
    {}
      icon: Globe,
<<<<<<< HEAD
      title: 'Global Standards',
      description: 'Compliance with international accessibility standards including WCAG 2.1 AA and Section 508.',
      benefits: ['WCAG 2.1 AA', 'Section 508', 'ADA compliance', 'International standards']
    }
  ];
;
const standards = []
    {}
      name: 'WCAG 2.1 AA',
      description: 'Web Content Accessibility Guidelines 2.1 Level AA compliance',
      status: 'Fully Compliant'
    },
    {}
      name: 'Section 508',
      description: 'US federal accessibility standards for electronic and information technology',
      status: 'Fully Compliant'
    },
    {}
      name: 'ADA',
      description: 'Americans with Disabilities Act compliance for digital accessibility',
      status: 'Fully Compliant'
    },
    {}
      name: 'EN 301 549',
      description: 'European accessibility standard for ICT products and services',
      status: 'Fully Compliant'
=======
      title: 'Global Standards,
      description: 'Compliance with international accessibility standards including WCAG 2.1 AA and Section 508.,
      benefits: ['WCAG 2.1 AA', 'Section 508', 'ADA compliance', 'International standards]
>>>>>>> origin/main
    }

  ];

;

const standards = [;;

    {
      name: 'WCAG 2.1 AA,
      description: 'Web Content Accessibility Guidelines 2.1 Level AA compliance,
      status: Fully Compliant
    },
    {
      name: 'Section 508,
      description: 'US federal accessibility standards for electronic and information technology,
      status: Fully Compliant
    },
    {
      name: 'ADA,
      description: 'Americans with Disabilities Act compliance for digital accessibility,
      status: Fully Compliant
    },
    {
      name: 'EN 301 549,
      description: 'European accessibility standard for ICT products and services,
      status: Fully Compliant
    }

  ];
<<<<<<< HEAD
  return (
    <React.Fragment></React>
      <Helmet></Helmet>
        <title>Accessibility Solutions - Zion Tech Group | Inclusive Digital Experiences</title>
        <meta name="description" content=""Creating inclusive digital experiences that work for everyone. Our accessibility solutions ensure your applications are usable by people of all abilities." /></meta>"
        <meta name="keywords" content=""accessibility, WCAG, ADA compliance, inclusive design, digital accessibility, Zion Tech Group" /></meta>"
      </Helmet>
  return (<div></div>
        <title>Accessibility Solutions - Zion Tech Group | Inclusive Digital Experiences<
        <meta name="description" content=""Creating inclusive digital experiences that work for everyone. Our accessibility solutions ensure your applications are usable by people of all abilities."></meta>"
        <meta name="keywords" content=""accessibility, WCAG, ADA compliance, inclusive design, digital accessibility, Zion Tech Group"></meta>"
      <

      <div className=""min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>"
        {/* Hero Section *
        <section className=""relative py-20 px-4 overflow-hidden">)"
          <div className=""absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse"></div>"
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style = "{{ animationDelay: '1s' }}></div>"
          <div className=""relative max-w-7xl mx-auto text-center"></div>"
            <h1 className=""text-5xl md: text-7xl font-bold text-white mb-6 leading-tight"></h1>"
              <span className=""block bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent"></span>"
              <
            <
            <p className=""text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed"></p>"
              Creating inclusive digital experiences that work for everyone. Our accessibility solutions ensure;
              your applications are usable by people of all abilities and comply with international standards.
            <
            <div className=""flex flex-col sm:flex-row gap-4 justify-center"></div>"
              <button className=""bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500"></button>"
                Get Accessibility Audit;
              <
              <button className=""border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300"></button>"
                Learn More;
              <
            <
          <
        <

        {/* Features Section *
        <section className=""py-20 px-4"></section>"
          <div className=""max-w-7xl mx-auto"></div>"
            <div className=""text-center mb-16"></div>"
              <h2 className=""text-4xl md:text-5xl font-bold text-white mb-6"></h2>"
                Comprehensive Accessibility Features;
              <
              <p className=""text-xl text-gray-300 max-w-3xl mx-auto"></p>"
                Our solutions cover all aspects of digital accessibility to ensure inclusive experiences for all users.
              <
            <

            <div className=""grid grid-cols-1 md:grid-cols-2 l,"></div>"
    g:grid-cols-3 gap-8">
              {features.map((feature), index) => (<div key = "{ index };></div>"
                  className=""bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover: border-cyan-400">"
                  <div className=""w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform"></div>"
                    <feature .icon className=""w-8 h-8 text-white"></feature>"
                  <
                  <h3 className=""text-2xl font-bold text-white mb-4 group-hove,"></h3>"
    r:text-cyan-400 transition-colors">
                    {feature.title}
                  </h3>
                  <p className=""text-gray-300 mb-6">{feature.description}</p>"
                  <ul className=""space-y-2"></ul>"
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className=""flex items-center text-gray-300 text-sm"></li>"
                        <CheckCircle className=""w-4 h-4 text-cyan-400 mr-3 flex-shrink-0" /></CheckCircle>"
=======

  return (

    <React.Fragment>
      <Helmet>
        <title>Accessibility Solutions - Zion Tech Group | Inclusive Digital Experiences</title>
        <meta name="description" content="Creating inclusive digital experiences that work for everyone. Our accessibility solutions ensure your applications are usable by people of all abilities. />
        <meta name="keywords" content="accessibility, WCAG, ADA compliance, inclusive design, digital accessibility, Zion Tech Group />
      </Helmet>
                  </h3>
                  <p className="text-gray-300 mb-6>{feature.description}</p>
                  <ul className="space-y-2>
                    {feature.benefits.map((benefit, benefitIndex) => (

                      <li key={benefitIndex} className="flex items-center text-gray-300 text-sm>
                        <CheckCircle className="w-4 h-4 text-cyan-400 mr-3 flex-shrink-0 />
>>>>>>> origin/main
                        {benefit}

                      </li>
                    ))
                  </ul>
                </div>
              ))            </div>
          </div>
        </section>
        {/* Standards Compliance */}
<<<<<<< HEAD
        <section className=""py-20 px-4"></section>"
                  <
                  <p className=""text-gray-300 mb-6">{feature.description}<"
                  <ul className=""space-y-2">)"
                    {feature.benefits.map((benefit, benefitIndex) => (<li key={benefitIndex} className=""flex items-center text-gray-300 text-sm"></li>"
          <div className=""max-w-7xl mx-auto"></div>"
            <div className=""text-center mb-16"></div>"
              <h2 className=""text-4xl md: text-5xl font-bold text-white mb-6"></h2>"
                Standards Compliance;
              <
              <p className=""text-xl text-gray-300 max-w-3xl mx-auto"></p>"
=======

        <section className="py-20 px-4>
          <div className="max-w-7xl mx-auto">            <div className="text-center mb-16>
              <h2 className="text-4xl md: text-5xl font-bold text-white mb-6>
                Standards Compliance
              <
              <p className="text-xl text-gray-300 max-w-3xl mx-auto>
>>>>>>> origin/main
                We ensure full compliance with international accessibility standards and regulations.
              <
            <

<<<<<<< HEAD
            <div className=""grid grid-cols-1 md:grid-cols-2 l,"></div>"
    g:grid-cols-4 gap-8">
              {standards.map((standard), index) => (<div key = "{ index };></div>"
                  className=""bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white">"
                  <div className=""w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-6"></div>"
                    <CheckCircle className=""w-8 h-8 text-white"></CheckCircle>"
                  <
                  <h3 className=""text-xl font-bold text-white mb-2">{standard.name}<"
                  <p className=""text-gray-300 mb-4 text-sm">{standard.description}<"
                  <span className=""inline-block px-4 py-2 bg-green-500"></span>"
                    {standard.status}
=======
            <div className=grid grid-cols-1 md:grid-cols-2 l,
    g:grid-cols-4 gap-8>
              {standards.map((standard), index) => (<div
                  key = { index };

                  className=bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-6>
                    <CheckCircle className="w-8 h-8 text-white 
                  <
                  <h3 className="text-xl font-bold text-white mb-2>{standard.name}<
                  <p className="text-gray-300 mb-4 text-sm>{standard.description}<
                  <span className=inline-block px-4 py-2 bg-green-500
                    {standard.status}

>>>>>>> origin/main
                  </span>
                </div>
              ))
            </div>
          </div>
        </section>
<<<<<<< HEAD
                  <
                <)
              ))}
            <
          <
        <

        {/* CTA Section *
        <section className=""py-20 px-4"></section>"
          <div className=""max-w-4xl mx-auto text-center"></div>"
            <div className=""bg-white"></div>"
              <h2 className=""text-4xl md: text-5xl font-bold text-white mb-6"></h2>"
                Ready to Make Your Digital Experience Accessible?
              <
              <p className=""text-xl text-gray-300 mb-8"></p>"
                Contact us today for a comprehensive accessibility audit and implementation plan.
              <
              <div className=""flex flex-col sm:flex-row gap-4 justify-center"></div>"
                <button className=""bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"></button>"
                  Get Accessibility Audit;
                <
                <button className=""border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hove,"></button>"
    r:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                  Contact Us;
=======
        {/* CTA Section *
        <section className="py-20 px-4>
          <div className="max-w-4xl mx-auto text-center>
            <div className=bg-white
              <h2 className="text-4xl md: text-5xl font-bold text-white mb-6>
                Ready to Make Your Digital Experience Accessible?
              <
              <p className="text-xl text-gray-300 mb-8>
                Contact us today for a comprehensive accessibility audit and implementation plan.
              <
              <div className="flex flex-col sm:flex-row gap-4 justify-center>
                <button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105>
                  Get Accessibility Audit
                <
                <button className=border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hove,
    r:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300>
                  Contact Us
>>>>>>> origin/main
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </React.Fragment>)
<<<<<<< HEAD
                <
              <
            <
          <
        <
      <
    <
  );
};
export default AccessibilityPage;
=======
export default AccessibilityPage;
>>>>>>> origin/main
