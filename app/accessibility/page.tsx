'use client';

import React from 'react';

import { Helmet } from 'react-helmet-async';

import { CheckCircle, Eye, MousePointer, Volume2, Shield, Users, Globe, Zap, ArrowRight, Star } from 'lucide-react;

';

const AccessibilityPage: React.FC = () => {const features = [;';

    {
      ico,
    n: Eye,
      title: 'Visual Accessibility',
      description: 'Comprehensive visual accessibility features including high contrast modes, text scaling, and screen reader compatibility.',
      benefits: ['High contrast mode', 'Text scaling', 'Screen reader support', 'Color blind friendly']
    },
    {
      icon: MousePointer,
      title: 'Motor Accessibility',
      description: 'Keyboard navigation and alternative input methods for users with motor impairments.',
      benefits: ['Keyboard navigation', 'Voice commands', 'Switch control', 'Customizable controls']
    },
    {
      icon: Volume2,
      title: 'Audio Accessibility',
      description: 'Audio alternatives and visual indicators for users with hearing impairments.',
      benefits: ['Audio descriptions', 'Visual alerts', 'Captions', 'Sign language support']
    },
    {
      icon: Shield,
      title: 'Security & Privacy',
      description: 'Secure accessibility features that protect user data while providing inclusive experiences.',
      benefits: ['Data protection', 'Secure forms', 'Privacy controls', 'Encrypted communications']
    },
    {
      icon: Users,
      title: 'Inclusive Design',
      description: 'Design principles that ensure our solutions work for users of all abilities and backgrounds.',
      benefits: ['Universal design', 'Cultural sensitivity', 'Language support', 'Age-friendly interfaces']
    },
    {
      icon: Globe,
      title: 'Global Standards',
      description: 'Compliance with international accessibility standards including WCAG 2.1 AA and Section 508.',
      benefits: ['WCAG 2.1 AA', 'Section 508', 'ADA compliance', 'International standards']
    }

  ];

;

const standards = [;;

    {
      name: 'WCAG 2.1 AA',
      description: 'Web Content Accessibility Guidelines 2.1 Level AA compliance',
      status: Fully Compliant
    },
    {
      name: 'Section 508',
      description: 'US federal accessibility standards for electronic and information technology',
      status: Fully Compliant
    },
    {
      name: 'ADA',
      description: 'Americans with Disabilities Act compliance for digital accessibility',
      status: Fully Compliant
    },
    {
      name: 'EN 301 549',
      description: 'European accessibility standard for ICT products and services',
      status: Fully Compliant
    }

  ];

  return (

    <React.Fragment>
      <Helmet>
        <title>Accessibility Solutions - Zion Tech Group | Inclusive Digital Experiences</title>
        <meta name="description" content="Creating inclusive digital experiences that work for everyone. Our accessibility solutions ensure your applications are usable by people of all abilities." />
        <meta name="keywords" content="accessibility, WCAG, ADA compliance, inclusive design, digital accessibility, Zion Tech Group" />
      </Helmet>
                  </h3>
                  <p className="text-gray-300 mb-6">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (

                      <li key={benefitIndex} className="flex items-center text-gray-300 text-sm">
                        <CheckCircle className="w-4 h-4 text-cyan-400 mr-3 flex-shrink-0" />
                        {benefit}

                      </li>
                    ))
                  </ul>
                </div>
              ))            </div>
          </div>
        </section>

        {/* Standards Compliance */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">            <div className="text-center mb-16">
              <h2 className="text-4xl md: text-5xl font-bold text-white mb-6">
                Standards Compliance
              <
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We ensure full compliance with international accessibility standards and regulations.
              <
            <

            <div className="grid grid-cols-1 md:grid-cols-2 l,
    g:grid-cols-4 gap-8">
              {standards.map((standard), index) => (<div
                  key = { index };

                  className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-8 h-8 text-white" 
                  <
                  <h3 className="text-xl font-bold text-white mb-2">{standard.name}<
                  <p className="text-gray-300 mb-4 text-sm">{standard.description}<
                  <span className="inline-block px-4 py-2 bg-green-500
                    {standard.status}
                  </span>
                </div>
              ))
            </div>
          </div>
        </section>
        {/* CTA Section *
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white
              <h2 className="text-4xl md: text-5xl font-bold text-white mb-6">
                Ready to Make Your Digital Experience Accessible?
              <
              <p className="text-xl text-gray-300 mb-8">
                Contact us today for a comprehensive accessibility audit and implementation plan.
              <
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                  Get Accessibility Audit
                <
                <button className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hove,
    r:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </React.Fragment>)
export default AccessibilityPage;