import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Eye, MousePointer, Volume2, Shield, Users, Globe } from 'lucide-react'

export default function AccessibilityPage() {
  const features = [
    {
      icon: Eye,
      title: 'Visual Accessibility',
      description: 'Comprehensive visual accessibility features including high contrast modes, text scaling, and screen reader compatibility.',
    },
    {
      icon: MousePointer,
      title: 'Motor Accessibility',
      description: 'Keyboard navigation and alternative input methods for users with motor impairments.',
      benefits: ['Keyboard navigation', 'Voice commands', 'Switch control', 'Customizable controls'],
    },
    {
      icon: Volume2,
      title: 'Audio Accessibility',
      description: 'Audio alternatives and visual indicators for users with hearing impairments.',
      benefits: ['Audio descriptions', 'Visual alerts', 'Captions', 'Sign language support'],
    },
    {
      icon: Shield,
      title: 'Security & Privacy',
      description: 'Secure accessibility features that protect user data while providing inclusive experiences.',
      benefits: ['Data protection', 'Secure forms', 'Privacy controls', 'Encrypted communications'],
    },
    {
      icon: Users,
      title: 'Inclusive Design',
      description: 'Design principles that ensure our solutions work for users of all abilities and backgrounds.',
      benefits: ['Universal design', 'Cultural sensitivity', 'Language support', 'Age-friendly interfaces'],
    },
    {
      icon: Globe,
      title: 'Global Standards',
      description: 'Compliance with international accessibility standards including WCAG 2.1 AA and Section 508.',
      benefits: ['WCAG 2.1 AA', 'Section 508', 'ADA compliance', 'International standards'],
    },
  ]

  const standards = [
    {
      name: 'WCAG 2.1 AA',
      description: 'Web Content Accessibility Guidelines 2.1 Level AA compliance',
      status: 'Fully Compliant',
    },
    {
      name: 'Section 508',
      description: 'US federal accessibility standards for electronic and information technology',
      status: 'Fully Compliant',
    },
    {
      name: 'ADA',
      description: 'Americans with Disabilities Act compliance for digital accessibility',
      status: 'Fully Compliant',
    },
    {
      name: 'EN 301 549',
      description: 'European accessibility standard for ICT products and services',
      status: 'Fully Compliant',
    },
  ]

  return (
    <>
      <Helmet>
        <title>Accessibility Solutions - Zion Tech Group | Inclusive Digital Experiences</title>
        <meta name="description" content="Creating inclusive digital experiences that work for everyone. Our accessibility solutions ensure your applications are usable by people of all abilities and comply with international standards." />
        <meta name="keywords" content="accessibility, inclusive design, WCAG compliance, screen reader, keyboard navigation, digital accessibility" />
      </Helmet>
      
      <section className="relative min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Accessibility <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Solutions</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Creating inclusive digital experiences that work for everyone. Our accessibility solutions ensure your applications are usable by people of all abilities and comply with international standards.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300">
              Get Accessibility Audit
            </button>
            <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300">
              Learn More
            </button>
          </div>
        </div>
      </section>
      
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Comprehensive Accessibility Features
            </h2>
            <p className="text-xl text-gray-300">
              Our solutions cover all aspects of digital accessibility to ensure inclusive experiences for all users.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-purple-500 transition-all duration-300">
                <feature.icon className="w-12 h-12 text-purple-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                {feature.benefits && (
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, idx) => (
                      <li key={idx} className="text-gray-400 text-sm">• {benefit}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-20 bg-gradient-to-r from-purple-900 to-blue-900">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Accessibility Standards Compliance
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            We ensure full compliance with international accessibility standards and regulations.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {standards.map((standard, index) => (
              <div key={index} className="bg-white bg-opacity-10 p-6 rounded-lg backdrop-blur-sm">
                <h3 className="text-xl font-bold text-white mb-2">{standard.name}</h3>
                <p className="text-gray-300 mb-4">{standard.description}</p>
                <span className="inline-block bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {standard.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}