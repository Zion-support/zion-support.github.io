'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

const AboutPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>About Us - Zion Tech Group | AI & IT Solutions</title>
        <meta name="description" content="Learn about Zion Tech Group, a leading provider of AI-powered enterprise solutions, quantum computing, and digital transformation services." />
        <meta name="keywords" content="about us, Zion Tech Group, AI solutions, IT services, company, team" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        <main className="pt-20">
          <div className="max-w-7xl mx-auto px-4 py-16">
            <div className="text-center mb-16">
              <h1 className="text-5xl font-bold text-white mb-6">
                About <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Zion Tech Group</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Leading provider of AI-powered enterprise solutions, quantum computing, autonomous systems, and digital transformation services.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h2 className="text-3xl font-bold text-white mb-6">Our Mission</h2>
                <p className="text-gray-300 mb-6">
                  To transform businesses through cutting-edge AI and IT solutions, delivering measurable results and exceptional value to our clients.
                </p>
                <p className="text-gray-300">
                  We combine deep technical expertise with business acumen to create solutions that drive growth, efficiency, and innovation.
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-4">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center text-gray-300">
                    <span className="font-semibold mr-4">Phone:</span>
                    <a href="tel:+13024640950" className="hover:text-cyan-400 transition-colors">
                      +1 (302) 464-0950
                    </a>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <span className="font-semibold mr-4">Email:</span>
                    <a href="mailto:kleber@ziontechgroup.com" className="hover:text-cyan-400 transition-colors">
                      kleber@ziontechgroup.com
                    </a>
                  </div>
                  <div className="flex items-start text-gray-300">
                    <span className="font-semibold mr-4">Address:</span>
                    <span>364 E Main St STE 1008<br />Middletown DE 19709</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  )
}

export default AboutPage
