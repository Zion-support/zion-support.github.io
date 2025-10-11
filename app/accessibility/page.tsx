import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Accessibility, Eye, MousePointer, Volume2 } from 'lucide-react'

export default function AccessibilityPage() {
  const standards = [
    {
      name: 'WCAG 2.1',
      description: 'Web Content Accessibility Guidelines for inclusive web design',
      status: 'Level AA Compliant',
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

  const features = [
    {
      icon: Eye,
      title: 'Visual Accessibility',
      description: 'High contrast modes, scalable fonts, and screen reader compatibility.',
    },
    {
      icon: MousePointer,
      title: 'Motor Accessibility',
      description: 'Keyboard navigation, voice control, and alternative input methods.',
    },
    {
      icon: Volume2,
      title: 'Audio Accessibility',
      description: 'Screen reader support, audio descriptions, and captioning.',
    },
  ]

  return (
    <>
      <Helmet>
        <title>Accessibility Solutions - Zion Tech Group | Inclusive Digital Experiences</title>
        <meta name="description" content="Creating inclusive digital experiences that work for everyone. Our accessibility solutions ensure your applications are usable by people of all abilities and comply with international standards." />
        <meta name="keywords" content="accessibility, inclusive design, WCAG compliance, screen reader, keyboard navigation, digital accessibility" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
        <section className="relative py-20 px-4">
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
        
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
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
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                  <feature.icon className="w-12 h-12 text-blue-400 mb-4" />
                  <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Compliance Standards
              </h2>
              <p className="text-xl text-gray-300">
                We ensure your applications meet international accessibility standards and regulations.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {standards.map((standard, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                  <h3 className="text-xl font-bold text-white mb-4">{standard.name}</h3>
                  <p className="text-gray-300 mb-4">{standard.description}</p>
                  <span className="inline-block bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm font-semibold">
                    {standard.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Make Your App Accessible?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Contact our accessibility experts to audit your application and implement inclusive design solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300">
                Contact Us
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300">
                Schedule Audit
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}