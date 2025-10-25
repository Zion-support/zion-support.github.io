
'use client'

import React from 'react'
import Footer from '../components/Footer'
import Navigation from '../components/Navigation'

const AboutPage: React.FC = () => {
  return (
    <>

      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/20 to-blue-600/20"></div>
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              About Zion Tech Group
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Learn about Zion Tech Group&apos;s mission, values, and team. We&apos;re passionate about AI and IT solutions that transform businesses.
            </p>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg prose-invert max-w-none">
              <p className="text-xl text-gray-300 mb-6">
                Zion Tech Group is a leading provider of advanced AI solutions, cloud services, and IT consulting for modern businesses.
              </p>
              <p className="text-lg text-gray-300 mb-6">
                We specialize in delivering cutting-edge technology solutions that help businesses transform their operations and achieve unprecedented growth.
              </p>
              <h2 className="text-2xl font-bold text-white mb-4">Our Mission</h2>
              <p className="text-lg text-gray-300 mb-6">
                To empower businesses with innovative AI and IT solutions that drive efficiency, growth, and competitive advantage.
              </p>
              <h2 className="text-2xl font-bold text-white mb-4">Our Services</h2>
              <ul className="list-disc list-inside text-lg text-gray-300 mb-6 space-y-2">
                <li>AI-Powered Solutions</li>
                <li>Cloud Services</li>
                <li>IT Consulting</li>
                <li>Digital Transformation</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  )
}

export default AboutPage
