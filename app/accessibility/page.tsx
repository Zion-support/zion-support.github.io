<<<<<<< HEAD
<<<<<<< HEAD
=======
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
export default function AccessibilityZionTechGroup() {
  return (
    <>
      <Helmet>
        <title>Accessibility - Zion Tech Group</title>
=======
'use client';
import React from 'react';
<<<<<<< HEAD
import { Helmet } from 'react-helmet-async'
import { CheckCircle, Eye, MousePointer, Volume2, Shield, Users, Globe, Zap, ArrowRight, Star } from 'lucide-react'
const AccessibilityPage: React.FC = () => {
const features = [
=======
import { Helmet } from 'react-helmet-async';
import { CheckCircle, Eye, MousePointer, Volume2, Shield, Users, Globe, Zap, ArrowRight, Star } from 'lucide-react';
;
const AccessibilityPage: React.FC = () => {
const features = [
];
};
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
    {
      icon: Eye,
      title: 'Visual Accessibility',
      description: 'Comprehensive visual accessibility features including high contrast modes, text scaling, and screen reader compatibility.',
      benefits: ['High contrast mode', 'Text scaling', 'Screen reader support', 'Color blind friendly']},
    {icon: MousePointer,
      title: 'Motor Accessibility',
      description: 'Keyboard navigation and alternative input methods for users with motor impairments.',
      benefits: ['Keyboard navigation', 'Voice commands', 'Switch control', 'Customizable controls']},
    {icon: Volume2,
      title: 'Audio Accessibility',
      description: 'Audio alternatives and visual indicators for users with hearing impairments.',
      benefits: ['Audio descriptions', 'Visual alerts', 'Captions', 'Sign language support']},
    {icon: Shield,
      title: 'Security & Privacy',
      description: 'Secure accessibility features that protect user data while providing inclusive experiences.',
      benefits: ['Data protection', 'Secure forms', 'Privacy controls', 'Encrypted communications']},
    {icon: Users,
      title: 'Inclusive Design',
      description: 'Design principles that ensure our solutions work for users of all abilities and backgrounds.',
      benefits: ['Universal design', 'Cultural sensitivity', 'Language support', 'Age-friendly interfaces']},
    {icon: Globe,
      title: 'Global Standards',
      description: 'Compliance with international accessibility standards including WCAG 2.1 AA and Section 508.',
<<<<<<< HEAD
      benefits: ['WCAG 2.1 AA', 'Section 508', 'ADA compliance', 'International standards']},
=======
      benefits: ['WCAG 2.1 AA', 'Section 508', 'ADA compliance', 'International standards']
<<<<<<< HEAD
    }
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1247
  ]
=======
    };
  ];
;
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
const standards = [
<<<<<<< HEAD
    {name: 'WCAG 2.1 AA',
      description: 'Web Content Accessibility Guidelines 2.1 Level AA compliance',
      status: 'Fully Compliant',},
    {name: 'Section 508',
      description: 'US federal accessibility standards for electronic and information technology',
      status: 'Fully Compliant',},
    {name: 'ADA',
      description: 'Americans with Disabilities Act compliance for digital accessibility',
      status: 'Fully Compliant',},
    {name: 'EN 301 549',
      description: 'European accessibility standard for ICT products and services',
      status: 'Fully Compliant',}]

  return (
    <>
  <Helmet />
=======
[
        {
      name: 'WCAG 2.1 AA',
      description: 'Web Content Accessibility Guidelines 2.1 Level AA compliance',
      status: 'Fully Compliant'
    },
        {
      name: 'Section 508',
      description: 'US federal accessibility standards for electronic and information technology',
      status: 'Fully Compliant'
    },
        {
      name: 'ADA',
      description: 'Americans with Disabilities Act compliance for digital accessibility',
      status: 'Fully Compliant'
    },
        {
      name: 'EN 301 549',
      description: 'European accessibility standard for ICT products and services',
      status: 'Fully Compliant'
<<<<<<< HEAD
    }
  ]

  return (
    <>
=======
    };
  ];
  return (
    <React .Fragment>
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
      <Helmet>
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1247
        <title>Accessibility Solutions - Zion Tech Group | Inclusive Digital Experiences</title>
        <meta name="description" content="Creating inclusive digital experiences that work for everyone. Our accessibility solutions ensure your applications are usable by people of all abilities and comply with international standards." />
        <meta name="keywords" content="accessibility, inclusive design, WCAG compliance, screen reader, keyboard navigation, digital accessibility" />
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1232
      </Helmet>
<<<<<<< HEAD
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-6">Accessibility</h1>
          <p className="text-lg text-gray-300 mb-8">
            Learn about our commitment to accessibility and inclusive design.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
          >
            Contact Us
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
=======
<<<<<<< HEAD
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Accessibility <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Solutions</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Creating inclusive digital experiences that work for everyone. Our accessibility solutions ensure your applications are usable by people of all abilities and comply with international standards.
            </p>
=======
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section *
        <section className="relative py-20 px-4 overflow-hidden">)
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" 
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }};
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md: text-7xl font-bold text-white mb-6 leading-tight">
              <span className="block bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
              <
            <
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Creating inclusive digital experiences that work for everyone. Our accessibility solutions ensure 
              your applications are usable by people of all abilities and comply with international standards.
            <
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300">
                Get Accessibility Audit
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300">
                Learn More
<<<<<<< HEAD
              </button>
            </div>
          </div>
        </section>
        {/* Features Section */}
=======
              <
            <
          <
        <
        {/* Features Section *
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-4">
                Comprehensive Accessibility Features
              </h2>
              <p className="text-xl text-gray-300">
                Our solutions cover all aspects of digital accessibility to ensure inclusive experiences for all users.
<<<<<<< HEAD
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-cyan-400/50 transition-all duration-300 group"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">
                    {feature.title}
=======
              <
            <
            <div className="grid grid-cols-1 md:grid-cols-2 l,
    g:grid-cols-3 gap-8">
              {features.map((feature), index) => (<div key = { index };
                  className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover: border-cyan-400>
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <feature .icon className="w-8 h-8 text-white" 
                  <
                  <h3 className="text-2xl font-bold text-white mb-4 group-hove,
    r:text-cyan-400 transition-colors">
                    {feature.title};
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
                  </h3>
                  <p className="text-gray-300 mb-6">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
<<<<<<< HEAD
                      <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {benefit}
=======
                      <li key={benefitIndex} className="flex items-center text-gray-300 text-sm">
                        <CheckCircle className="w-4 h-4 text-cyan-400 mr-3 flex-shrink-0" />
                        {benefit};
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
<<<<<<< HEAD
        
        {/* Standards Compliance */}
        <section className="py-20 px-4 bg-white/5">
=======
        {/* Standards Compliance */};
        <section className="py-20 px-4">
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-4">
                Standards Compliance
              </h2>
              <p className="text-xl text-gray-300">
                We ensure full compliance with international accessibility standards and regulations.
<<<<<<< HEAD
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {standards.map((standard, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{standard.name}</h3>
                  <p className="text-gray-300 mb-4 text-sm">{standard.description}</p>
                  <span className="inline-block bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm font-medium">
                    {standard.status}
=======
              <
            <
            <div className="grid grid-cols-1 md:grid-cols-2 l,
    g:grid-cols-4 gap-8">
              {standards.map((standard), index) => (<div key = { index };
                  className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white>
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-8 h-8 text-white" 
                  <
                  <h3 className="text-xl font-bold text-white mb-2">{standard.name}<
                  <p className="text-gray-300 mb-4 text-sm">{standard.description}<
                  <span className="inline-block px-4 py-2 bg-green-500
                    {standard.status};
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>
<<<<<<< HEAD
        
        {/* CTA Section */}
=======
        {/* CTA Section *
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12">
              <h2 className="text-3xl font-bold text-white mb-6">
                Ready to Make Your Digital Experience Accessible?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Contact us today for a comprehensive accessibility audit and implementation plan.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300">
                  Get Accessibility Audit
                </button>
                <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300">
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </section>
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1247
      </div>
<<<<<<< HEAD
    </>
  )
}
<<<<<<< HEAD
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0ff3
=======
export default AccessibilityPage
=======
    </React.Fragment>)
export default AccessibilityPage;
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1247
